import { useState, useEffect, useRef, useCallback, useMemo } from 'react';

const ANCHOR_RADIUS = 4;

const getArrowGeometry = (arrow) => {
  if (arrow.target?.selector?.geometry) return arrow.target.selector.geometry;
  return { start: arrow.start, end: arrow.end };
};

const updateArrowGeometry = (arrow, geometry) => ({
  ...arrow,
  target: { ...arrow.target, selector: { ...arrow.target?.selector, geometry } },
});

const ArrowTool = ({
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
  const draggingArrowRef = useRef(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [drawingArrow, setDrawingArrow] = useState(null);
  const [draggingAnchor, setDraggingAnchor] = useState(null);
  const [draggingArrowState, setDraggingArrowState] = useState(null);

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

  const arrowAnnotations = useMemo(
    () =>
      annotations?.filter(
        (ann) =>
          ann.target?.selector?.type === 'ARROW' && isAnnotationVisible(ann),
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
      if (selectedTool !== 'arrow' || !hasValidDimensions) return;
      const { x, y } = screenToSvg(e.clientX, e.clientY);
      setIsDrawing(true);
      setDrawingArrow({ start: { x, y }, end: { x, y } });
      onSelect?.(null);
    },
    [selectedTool, hasValidDimensions, screenToSvg, onSelect],
  );

  const handleMouseMove = useCallback(
    (e) => {
      if (!isDrawing || !drawingArrow) return;
      const { x, y } = screenToSvg(e.clientX, e.clientY);
      setDrawingArrow((prev) => ({ ...prev, end: { x, y } }));
    },
    [isDrawing, drawingArrow, screenToSvg],
  );

  const handleMouseUp = useCallback(() => {
    if (!isDrawing || !drawingArrow) return;
    const dx = drawingArrow.end.x - drawingArrow.start.x;
    const dy = drawingArrow.end.y - drawingArrow.start.y;
    const length = Math.sqrt(dx * dx + dy * dy);

    if (length > 10 * scaleFactor) {
      const annotationId =
        crypto.randomUUID?.() ??
        `${Date.now()}-${Math.random().toString(36).slice(2)}`;
      const now = new Date().toISOString();
      const newArrow = {
        id: annotationId,
        bodies: [],
        target: {
          annotation: annotationId,
          selector: {
            type: 'ARROW',
            geometry: { start: drawingArrow.start, end: drawingArrow.end },
          },
          creator: { isGuest: !userId, id: userId || 'anonymous' },
          created: now,
        },
        issueId: activeIssueId || null,
        styles: { strokeColor, strokeWidth, fillColor: null },
        createdAt: now,
      };
      onAdd?.(newArrow);
      clearNativeSelection?.();
      onSelect?.(newArrow.id);
      onToolChange?.('select');
    }

    setIsDrawing(false);
    setDrawingArrow(null);
  }, [
    isDrawing, drawingArrow, scaleFactor, strokeColor, strokeWidth,
    clearNativeSelection, activeIssueId, userId, onAdd, onSelect, onToolChange,
  ]);

  const handleArrowClick = useCallback(
    (e, arrow) => {
      e.stopPropagation();
      if (selectedTool === 'select') {
        clearNativeSelection?.();
        onSelect?.(arrow.id);
      }
    },
    [selectedTool, onSelect, clearNativeSelection],
  );

  const handleAnchorMouseDown = useCallback((e, anchorId, arrow) => {
    e.stopPropagation();
    e.preventDefault();
    draggingArrowRef.current = arrow;
    setDraggingArrowState({ ...arrow });
    setDraggingAnchor(anchorId);
  }, []);

  const handleStemMouseDown = useCallback(
    (e, arrow) => {
      e.stopPropagation();
      e.preventDefault();
      const mousePos = screenToSvg(e.clientX, e.clientY);
      const geometry = getArrowGeometry(arrow);
      dragOffsetRef.current = {
        start: { x: mousePos.x - geometry.start.x, y: mousePos.y - geometry.start.y },
        end: { x: mousePos.x - geometry.end.x, y: mousePos.y - geometry.end.y },
      };
      draggingArrowRef.current = arrow;
      setDraggingArrowState({ ...arrow });
      setDraggingAnchor('move');
    },
    [screenToSvg],
  );

  useEffect(() => {
    if (!draggingAnchor || !draggingArrowRef.current) return;

    const onMove = (e) => {
      const { x, y } = screenToSvg(e.clientX, e.clientY);
      const current = getArrowGeometry(draggingArrowRef.current);
      const newGeometry =
        draggingAnchor === 'move'
          ? {
              start: { x: x - dragOffsetRef.current.start.x, y: y - dragOffsetRef.current.start.y },
              end: { x: x - dragOffsetRef.current.end.x, y: y - dragOffsetRef.current.end.y },
            }
          : { ...current, [draggingAnchor]: { x, y } };

      const updated = updateArrowGeometry(draggingArrowRef.current, newGeometry);
      setDraggingArrowState(updated);
      draggingArrowRef.current = updated;
    };

    const onUp = () => {
      if (draggingArrowRef.current) onUpdate?.(draggingArrowRef.current);
      draggingArrowRef.current = null;
      setDraggingArrowState(null);
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
        arrowAnnotations.some((a) => a.id === selectedAnnotationId)
      ) {
        onDelete?.(selectedAnnotationId);
        onSelect?.(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedAnnotationId, arrowAnnotations, onDelete, onSelect]);

  const createArrowPath = (x1, y1, x2, y2) => {
    const headLength = 25;
    const angle = Math.atan2(y2 - y1, x2 - x1);
    const x3 = x2 - headLength * Math.cos(angle - Math.PI / 6);
    const y3 = y2 - headLength * Math.sin(angle - Math.PI / 6);
    const x4 = x2 - headLength * Math.cos(angle + Math.PI / 6);
    const y4 = y2 - headLength * Math.sin(angle + Math.PI / 6);
    return `M ${x1} ${y1} L ${x2} ${y2} M ${x2} ${y2} L ${x3} ${y3} M ${x2} ${y2} L ${x4} ${y4}`;
  };

  const renderArrow = (start, end, color, width, isSelected = false, arrow = null) => {
    const pathD = createArrowPath(start.x, start.y, end.x, end.y);
    return (
      <g>
        <line
          x1={start.x} y1={start.y} x2={end.x} y2={end.y}
          stroke="transparent"
          strokeWidth={Math.max(width + 10, 15)}
          strokeLinecap="round"
          vectorEffect="non-scaling-stroke"
          style={{ pointerEvents: 'stroke', cursor: isSelected ? 'move' : 'pointer' }}
          onMouseDown={isSelected && arrow ? (e) => handleStemMouseDown(e, arrow) : undefined}
        />
        <path
          d={pathD} stroke={color} strokeWidth={width}
          fill="none" strokeLinecap="round" strokeLinejoin="round"
          vectorEffect="non-scaling-stroke"
          style={{ pointerEvents: 'none' }}
        />
      </g>
    );
  };

  const renderAnchorPoints = (arrow) => {
    const geometry = getArrowGeometry(arrow);
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
          onMouseDown={(e) => handleAnchorMouseDown(e, point.id, arrow)} />
      </g>
    ));
  };

  if (!imageDimensions) return null;

  const isArrowMode = selectedTool === 'arrow';
  const isSelectMode = selectedTool === 'select';
  const viewBox = hasValidDimensions ? `0 0 ${naturalWidth} ${naturalHeight}` : undefined;

  return (
    <svg
      ref={svgRef}
      data-annotation-type="ARROW"
      style={{
        position: 'absolute', top: 0, left: 0, width: '100%', height: '100%',
        pointerEvents: isArrowMode ? 'auto' : 'none',
        cursor: isArrowMode ? 'crosshair' : 'default',
      }}
      viewBox={viewBox}
      preserveAspectRatio="none"
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
    >
      {arrowAnnotations.map((arrow) => {
        const isSelected = selectedAnnotationId === arrow.id;
        const displayArrow =
          draggingArrowState && draggingArrowState.id === arrow.id ? draggingArrowState : arrow;
        const geometry = getArrowGeometry(displayArrow);
        return (
          <g
            key={arrow.id}
            onClick={(e) => handleArrowClick(e, arrow)}
            style={{
              cursor: isSelectMode ? (isSelected ? 'move' : 'pointer') : 'default',
              pointerEvents: isSelectMode ? 'auto' : 'none',
            }}
          >
            {renderArrow(geometry.start, geometry.end,
              displayArrow.strokeColor || strokeColor,
              displayArrow.strokeWidth || strokeWidth,
              isSelected, displayArrow)}
            {isSelected && renderAnchorPoints(displayArrow)}
          </g>
        );
      })}
      {isDrawing && drawingArrow &&
        renderArrow(drawingArrow.start, drawingArrow.end, strokeColor, strokeWidth)}
    </svg>
  );
};

export default ArrowTool;
