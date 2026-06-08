import { useState, useEffect, useRef, useCallback, useMemo } from 'react';

const ANCHOR_RADIUS = 4;

const getDistanceGeometry = (measure) => {
  if (measure.target?.selector?.geometry) return measure.target.selector.geometry;
  return { start: measure.start, end: measure.end };
};

const updateDistanceGeometry = (measure, geometry) => ({
  ...measure,
  target: { ...measure.target, selector: { ...measure.target?.selector, geometry } },
});

const calculateDistance = (start, end) => {
  const dx = end.x - start.x;
  const dy = end.y - start.y;
  return Math.round(Math.sqrt(dx * dx + dy * dy) * 100) / 100;
};

const formatDistance = (distance, unit = 'px') => {
  if (distance >= 1000) return `${(distance / 1000).toFixed(2)}k${unit}`;
  return `${distance.toFixed(1)}${unit}`;
};

const DistanceTool = ({
  selectedTool,
  annotations,
  strokeColor,
  strokeWidth,
  selectedAnnotationId,
  activeIssueId,
  documentNotesVisible,
  issueLayers,
  userId,
  imageDimensions,
  clearNativeSelection,
  onAdd,
  onUpdate,
  onDelete,
  onSelect,
  onToolChange,
}) => {
  const svgRef = useRef(null);
  const dragOffsetRef = useRef({ start: { x: 0, y: 0 }, end: { x: 0, y: 0 } });
  const draggingMeasureRef = useRef(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [drawingMeasure, setDrawingMeasure] = useState(null);
  const [draggingAnchor, setDraggingAnchor] = useState(null);
  const [draggingMeasureState, setDraggingMeasureState] = useState(null);

  const isAnnotationVisible = useCallback(
    (ann) => {
      if (ann.visible === false) return false;
      if (ann.issueId) {
        const issueLayer = issueLayers?.find((l) => l.issueId === ann.issueId);
        return issueLayer?.visible ?? true;
      }
      return documentNotesVisible;
    },
    [documentNotesVisible, issueLayers],
  );

  const distanceAnnotations = useMemo(
    () =>
      annotations?.filter(
        (ann) =>
          ann.target?.selector?.type === 'DISTANCE' && isAnnotationVisible(ann),
      ) || [],
    [annotations, isAnnotationVisible],
  );

  const { naturalWidth, naturalHeight, displayWidth } = imageDimensions || {};
  const hasValidDimensions = naturalWidth > 0 && naturalHeight > 0;

  const scaleFactor =
    hasValidDimensions && displayWidth > 0 ? naturalWidth / displayWidth : 1;
  const scaledAnchorRadius = ANCHOR_RADIUS * scaleFactor;
  const scaledHaloRadius = (ANCHOR_RADIUS + 6) * scaleFactor;
  const scaledStrokeWidth = 1 * scaleFactor;
  const scaledHaloStrokeWidth = 0.25 * scaleFactor;
  const scaledFontSize = 14 * scaleFactor;

  const screenToSvg = useCallback(
    (screenX, screenY) => {
      if (!hasValidDimensions || !svgRef.current) return { x: screenX, y: screenY };
      const rect = svgRef.current.getBoundingClientRect();
      if (rect.width === 0 || rect.height === 0) return { x: screenX, y: screenY };
      return {
        x: ((screenX - rect.left) / rect.width) * naturalWidth,
        y: ((screenY - rect.top) / rect.height) * naturalHeight,
      };
    },
    [naturalWidth, naturalHeight, hasValidDimensions],
  );

  const handleMouseDown = useCallback(
    (e) => {
      if (selectedTool !== 'distance' || !hasValidDimensions) return;
      const { x, y } = screenToSvg(e.clientX, e.clientY);
      setIsDrawing(true);
      setDrawingMeasure({ start: { x, y }, end: { x, y } });
      onSelect?.(null);
    },
    [selectedTool, hasValidDimensions, screenToSvg, onSelect],
  );

  const handleMouseMove = useCallback(
    (e) => {
      if (!isDrawing || !drawingMeasure) return;
      const { x, y } = screenToSvg(e.clientX, e.clientY);
      setDrawingMeasure((prev) => ({ ...prev, end: { x, y } }));
    },
    [isDrawing, drawingMeasure, screenToSvg],
  );

  const handleMouseUp = useCallback(() => {
    if (!isDrawing || !drawingMeasure) return;
    const dx = drawingMeasure.end.x - drawingMeasure.start.x;
    const dy = drawingMeasure.end.y - drawingMeasure.start.y;
    const length = Math.sqrt(dx * dx + dy * dy);

    if (length > 10 * scaleFactor) {
      const annotationId =
        crypto.randomUUID?.() ??
        `${Date.now()}-${Math.random().toString(36).slice(2)}`;
      const now = new Date().toISOString();
      const newMeasure = {
        id: annotationId,
        bodies: [],
        target: {
          annotation: annotationId,
          selector: {
            type: 'DISTANCE',
            geometry: { start: drawingMeasure.start, end: drawingMeasure.end },
          },
          creator: { isGuest: !userId, id: userId || 'anonymous' },
          created: now,
        },
        issueId: activeIssueId || null,
        styles: { strokeColor, strokeWidth, fillColor: null },
        createdAt: now,
      };
      onAdd?.(newMeasure);
      clearNativeSelection?.();
      onSelect?.(newMeasure.id);
      onToolChange?.('select');
    }

    setIsDrawing(false);
    setDrawingMeasure(null);
  }, [
    isDrawing, drawingMeasure, scaleFactor, strokeColor, strokeWidth,
    clearNativeSelection, activeIssueId, userId, onAdd, onSelect, onToolChange,
  ]);

  const handleMeasureClick = useCallback(
    (e, measure) => {
      e.stopPropagation();
      if (selectedTool === 'select') {
        clearNativeSelection?.();
        onSelect?.(measure.id);
      }
    },
    [selectedTool, onSelect, clearNativeSelection],
  );

  const handleAnchorMouseDown = useCallback((e, anchorId, measure) => {
    e.stopPropagation();
    e.preventDefault();
    draggingMeasureRef.current = measure;
    setDraggingMeasureState({ ...measure });
    setDraggingAnchor(anchorId);
  }, []);

  const handleStemMouseDown = useCallback(
    (e, measure) => {
      e.stopPropagation();
      e.preventDefault();
      const mousePos = screenToSvg(e.clientX, e.clientY);
      const geometry = getDistanceGeometry(measure);
      dragOffsetRef.current = {
        start: { x: mousePos.x - geometry.start.x, y: mousePos.y - geometry.start.y },
        end: { x: mousePos.x - geometry.end.x, y: mousePos.y - geometry.end.y },
      };
      draggingMeasureRef.current = measure;
      setDraggingMeasureState({ ...measure });
      setDraggingAnchor('move');
    },
    [screenToSvg],
  );

  useEffect(() => {
    if (!draggingAnchor || !draggingMeasureRef.current) return;

    const onMove = (e) => {
      const { x, y } = screenToSvg(e.clientX, e.clientY);
      const current = getDistanceGeometry(draggingMeasureRef.current);
      const newGeometry =
        draggingAnchor === 'move'
          ? {
              start: { x: x - dragOffsetRef.current.start.x, y: y - dragOffsetRef.current.start.y },
              end: { x: x - dragOffsetRef.current.end.x, y: y - dragOffsetRef.current.end.y },
            }
          : { ...current, [draggingAnchor]: { x, y } };

      const updated = updateDistanceGeometry(draggingMeasureRef.current, newGeometry);
      setDraggingMeasureState(updated);
      draggingMeasureRef.current = updated;
    };

    const onUp = () => {
      if (draggingMeasureRef.current) onUpdate?.(draggingMeasureRef.current);
      draggingMeasureRef.current = null;
      setDraggingMeasureState(null);
      setDraggingAnchor(null);
    };

    window.addEventListener('mousemove', onMove);
    window.addEventListener('mouseup', onUp);
    return () => {
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('mouseup', onUp);
    };
  }, [draggingAnchor, screenToSvg, onUpdate]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (
        (e.key === 'Delete' || e.key === 'Backspace') &&
        selectedAnnotationId &&
        distanceAnnotations.some((a) => a.id === selectedAnnotationId)
      ) {
        onDelete?.(selectedAnnotationId);
        onSelect?.(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedAnnotationId, distanceAnnotations, onDelete, onSelect]);

  const renderMeasure = (start, end, color, width, isSelected = false, measure = null) => {
    const distance = calculateDistance(start, end);
    const formattedDistance = formatDistance(distance);
    const midX = (start.x + end.x) / 2;
    const midY = (start.y + end.y) / 2;
    const angle = Math.atan2(end.y - start.y, end.x - start.x) * (180 / Math.PI);
    const perpAngle = (angle + 90) * (Math.PI / 180);
    const labelOffset = 20 * scaleFactor;
    const labelX = midX + Math.cos(perpAngle) * labelOffset;
    const labelY = midY + Math.sin(perpAngle) * labelOffset;

    return (
      <g>
        <line
          x1={start.x} y1={start.y} x2={end.x} y2={end.y}
          stroke="transparent" strokeWidth={Math.max(width + 10, 15)}
          strokeLinecap="round" vectorEffect="non-scaling-stroke"
          style={{ pointerEvents: 'stroke', cursor: isSelected ? 'move' : 'pointer' }}
          onMouseDown={isSelected && measure ? (e) => handleStemMouseDown(e, measure) : undefined}
        />
        <line
          x1={start.x} y1={start.y} x2={end.x} y2={end.y}
          stroke={color} strokeWidth={width}
          strokeDasharray={`${8 * scaleFactor} ${4 * scaleFactor}`}
          strokeLinecap="round" vectorEffect="non-scaling-stroke"
          style={{ pointerEvents: 'none' }}
        />
        <line
          x1={start.x} y1={start.y - 8 * scaleFactor}
          x2={start.x} y2={start.y + 8 * scaleFactor}
          stroke={color} strokeWidth={width} strokeLinecap="round"
          vectorEffect="non-scaling-stroke" style={{ pointerEvents: 'none' }}
          transform={`rotate(${angle}, ${start.x}, ${start.y})`}
        />
        <line
          x1={end.x} y1={end.y - 8 * scaleFactor}
          x2={end.x} y2={end.y + 8 * scaleFactor}
          stroke={color} strokeWidth={width} strokeLinecap="round"
          vectorEffect="non-scaling-stroke" style={{ pointerEvents: 'none' }}
          transform={`rotate(${angle}, ${end.x}, ${end.y})`}
        />
        <rect
          x={labelX - formattedDistance.length * scaledFontSize * 0.35}
          y={labelY - scaledFontSize * 0.8}
          width={formattedDistance.length * scaledFontSize * 0.7}
          height={scaledFontSize * 1.2}
          fill="rgba(0, 0, 0, 0.7)"
          rx={4 * scaleFactor} ry={4 * scaleFactor}
          style={{ pointerEvents: 'none' }}
        />
        <text
          x={labelX} y={labelY} fill="white" fontSize={scaledFontSize}
          fontFamily="sans-serif" fontWeight="bold"
          textAnchor="middle" dominantBaseline="middle"
          style={{ pointerEvents: 'none', userSelect: 'none' }}
        >
          {formattedDistance}
        </text>
      </g>
    );
  };

  const renderAnchorPoints = (measure) => {
    const geometry = getDistanceGeometry(measure);
    return [
      { id: 'start', ...geometry.start },
      { id: 'end', ...geometry.end },
    ].map((point) => (
      <g key={point.id}>
        <circle cx={point.x} cy={point.y} r={scaledHaloRadius} fill="none"
          stroke="white" strokeWidth={scaledHaloStrokeWidth}
          style={{ pointerEvents: 'none' }} />
        <circle cx={point.x} cy={point.y} r={scaledAnchorRadius}
          fill="white" stroke="#6a6a6a" strokeWidth={scaledStrokeWidth}
          style={{ cursor: 'nwse-resize', pointerEvents: 'auto' }}
          onMouseDown={(e) => handleAnchorMouseDown(e, point.id, measure)} />
      </g>
    ));
  };

  if (!imageDimensions) return null;

  const isDistanceMode = selectedTool === 'distance';
  const isSelectMode = selectedTool === 'select';
  const viewBox = hasValidDimensions ? `0 0 ${naturalWidth} ${naturalHeight}` : undefined;

  return (
    <svg
      ref={svgRef}
      data-annotation-type="DISTANCE"
      style={{
        position: 'absolute', top: 0, left: 0, width: '100%', height: '100%',
        pointerEvents: isDistanceMode ? 'auto' : 'none',
        cursor: isDistanceMode ? 'crosshair' : 'default',
      }}
      viewBox={viewBox}
      preserveAspectRatio="none"
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
    >
      {distanceAnnotations.map((measure) => {
        const isSelected = selectedAnnotationId === measure.id;
        const displayMeasure =
          draggingMeasureState && draggingMeasureState.id === measure.id
            ? draggingMeasureState : measure;
        const geometry = getDistanceGeometry(displayMeasure);
        return (
          <g
            key={measure.id}
            onClick={(e) => handleMeasureClick(e, measure)}
            style={{
              cursor: isSelectMode ? (isSelected ? 'move' : 'pointer') : 'default',
              pointerEvents: isSelectMode ? 'auto' : 'none',
            }}
          >
            {renderMeasure(geometry.start, geometry.end,
              displayMeasure.strokeColor || strokeColor,
              displayMeasure.strokeWidth || strokeWidth,
              isSelected, displayMeasure)}
            {isSelected && renderAnchorPoints(displayMeasure)}
          </g>
        );
      })}
      {isDrawing && drawingMeasure &&
        renderMeasure(drawingMeasure.start, drawingMeasure.end, strokeColor, strokeWidth)}
    </svg>
  );
};

export default DistanceTool;
