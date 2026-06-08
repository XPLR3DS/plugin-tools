import { useState, useEffect, useRef, useCallback, useMemo } from 'react';
import TextToolbar, { getTextColorForBg } from './TextToolbar';

const DEFAULT_FONT_SIZE = 16;

const getTextGeometry = (textAnn) => {
  if (textAnn.target?.selector?.geometry) return textAnn.target.selector.geometry;
  return { x: textAnn.x, y: textAnn.y };
};

const updateTextGeometry = (textAnn, geometry) => ({
  ...textAnn,
  target: { ...textAnn.target, selector: { ...textAnn.target?.selector, geometry } },
});

let measureCanvas = null;
let measureContext = null;

const measureTextWidth = (text, fontSize, fontFamily = 'sans-serif') => {
  if (!measureCanvas) {
    measureCanvas = document.createElement('canvas');
    measureContext = measureCanvas.getContext('2d');
  }
  measureContext.font = `${fontSize}px ${fontFamily}`;
  return measureContext.measureText(text).width;
};

const TextTool = ({
  selectedTool,
  annotations,
  strokeColor,
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
  const inputRef = useRef(null);
  const dragOffsetRef = useRef({ x: 0, y: 0 });
  const draggingTextRef = useRef(null);
  const [editingText, setEditingText] = useState(null);
  const [draggingAnchor, setDraggingAnchor] = useState(null);
  const [draggingTextState, setDraggingTextState] = useState(null);

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

  const textAnnotations = useMemo(
    () =>
      annotations?.filter(
        (ann) =>
          ann.target?.selector?.type === 'TEXT' && isAnnotationVisible(ann),
      ) || [],
    [annotations, isAnnotationVisible],
  );

  const { naturalWidth, naturalHeight, displayWidth } = imageDimensions || {};
  const hasValidDimensions = naturalWidth > 0 && naturalHeight > 0;

  const scaleFactor =
    hasValidDimensions && displayWidth > 0 ? naturalWidth / displayWidth : 1;
  const scaledFontSize = DEFAULT_FONT_SIZE * scaleFactor;

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

  const svgToScreen = useCallback(
    (svgX, svgY) => {
      if (!hasValidDimensions || !svgRef.current) return { x: svgX, y: svgY };
      const rect = svgRef.current.getBoundingClientRect();
      return {
        x: (svgX / naturalWidth) * rect.width + rect.left,
        y: (svgY / naturalHeight) * rect.height + rect.top,
      };
    },
    [naturalWidth, naturalHeight, hasValidDimensions],
  );

  const handleSvgClick = useCallback(
    (e) => {
      if (selectedTool !== 'text' || !hasValidDimensions) return;
      const { x, y } = screenToSvg(e.clientX, e.clientY);
      setEditingText({ id: `text-${Date.now()}`, x, y, text: '', fontSize: scaledFontSize, isNew: true });
      onSelect?.(null);
    },
    [selectedTool, hasValidDimensions, screenToSvg, scaledFontSize, onSelect],
  );

  const handleTextChange = useCallback((e) => {
    setEditingText((prev) => ({ ...prev, text: e.target.value }));
  }, []);

  const handleTextBlur = useCallback(() => {
    if (!editingText) return;

    if (editingText.text.trim()) {
      const annotationId = editingText.isNew
        ? (crypto.randomUUID?.() ?? `${Date.now()}-${Math.random().toString(36).slice(2)}`)
        : editingText.id;
      const now = new Date().toISOString();
      const textAnnotation = {
        id: annotationId,
        bodies: [],
        target: {
          annotation: annotationId,
          selector: { type: 'TEXT', geometry: { x: editingText.x, y: editingText.y } },
          creator: { isGuest: !userId, id: userId || 'anonymous' },
          created: editingText.isNew ? now : editingText.created || now,
        },
        issueId: activeIssueId || null,
        styles: { strokeColor, strokeWidth: null, fillColor: null },
        text: editingText.text,
        fontSize: editingText.fontSize || scaledFontSize,
        bold: editingText.bold || false,
        italic: editingText.italic || false,
        underline: editingText.underline || false,
        bgColor: editingText.bgColor || 'transparent',
        createdAt: editingText.isNew ? now : editingText.createdAt || now,
      };

      if (editingText.isNew) {
        onAdd?.(textAnnotation);
        clearNativeSelection?.();
        onSelect?.(textAnnotation.id);
      } else {
        onUpdate?.(textAnnotation);
      }
      onToolChange?.('select');
    }

    setEditingText(null);
  }, [editingText, scaledFontSize, strokeColor, clearNativeSelection, activeIssueId, userId, onAdd, onUpdate, onSelect, onToolChange]);

  const handleTextKeyDown = useCallback(
    (e) => {
      if (e.key === 'Escape') setEditingText(null);
      else if (e.key === 'Enter') { e.preventDefault(); handleTextBlur(); }
    },
    [handleTextBlur],
  );

  useEffect(() => {
    if (editingText && inputRef.current) inputRef.current.focus();
  }, [editingText]);

  const handleTextClick = useCallback(
    (e, textAnn) => {
      e.stopPropagation();
      if (selectedTool === 'select') {
        clearNativeSelection?.();
        onSelect?.(textAnn.id);
      }
    },
    [selectedTool, onSelect, clearNativeSelection],
  );

  const handleTextDoubleClick = useCallback((e, textAnn) => {
    e.stopPropagation();
    const geometry = getTextGeometry(textAnn);
    setEditingText({
      id: textAnn.id,
      x: geometry.x,
      y: geometry.y,
      text: textAnn.text,
      fontSize: textAnn.fontSize,
      color: textAnn.color,
      bold: textAnn.bold,
      italic: textAnn.italic,
      underline: textAnn.underline,
      bgColor: textAnn.bgColor,
      created: textAnn.target?.created,
      createdAt: textAnn.createdAt,
      isNew: false,
    });
  }, []);

  const handleAnchorMouseDown = useCallback(
    (e, anchorId, textAnn) => {
      e.stopPropagation();
      e.preventDefault();
      const mousePos = screenToSvg(e.clientX, e.clientY);
      const geometry = getTextGeometry(textAnn);
      dragOffsetRef.current = { x: mousePos.x - geometry.x, y: mousePos.y - geometry.y };
      draggingTextRef.current = textAnn;
      setDraggingTextState({ ...textAnn });
      setDraggingAnchor(anchorId);
    },
    [screenToSvg],
  );

  useEffect(() => {
    if (!draggingAnchor || !draggingTextRef.current) return;

    const onMove = (e) => {
      const { x, y } = screenToSvg(e.clientX, e.clientY);
      const newGeometry = { x: x - dragOffsetRef.current.x, y: y - dragOffsetRef.current.y };
      const updated = updateTextGeometry(draggingTextRef.current, newGeometry);
      setDraggingTextState(updated);
      draggingTextRef.current = updated;
    };

    const onUp = () => {
      if (draggingTextRef.current) onUpdate?.(draggingTextRef.current);
      draggingTextRef.current = null;
      setDraggingTextState(null);
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
      if (editingText) return;
      if (
        (e.key === 'Delete' || e.key === 'Backspace') &&
        selectedAnnotationId &&
        textAnnotations.some((a) => a.id === selectedAnnotationId)
      ) {
        onDelete?.(selectedAnnotationId);
        onSelect?.(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedAnnotationId, textAnnotations, editingText, onDelete, onSelect]);

  const activeText = useMemo(() => {
    if (editingText) return editingText;
    if (selectedAnnotationId) return textAnnotations.find((a) => a.id === selectedAnnotationId);
    return null;
  }, [editingText, selectedAnnotationId, textAnnotations]);

  const handleFontSizeChange = useCallback(
    (delta) => {
      if (editingText) {
        setEditingText((prev) => ({
          ...prev,
          fontSize: Math.max(8, (prev.fontSize || scaledFontSize) + delta * scaleFactor),
        }));
      } else if (activeText) {
        onUpdate?.({ ...activeText, fontSize: Math.max(8, (activeText.fontSize || scaledFontSize) + delta * scaleFactor) });
      }
    },
    [editingText, activeText, scaledFontSize, scaleFactor, onUpdate],
  );

  const handleStyleToggle = useCallback(
    (style) => {
      if (editingText) {
        setEditingText((prev) => ({ ...prev, [style]: !prev[style] }));
      } else if (activeText) {
        onUpdate?.({ ...activeText, [style]: !activeText[style] });
      }
    },
    [editingText, activeText, onUpdate],
  );

  const handleBgColorChange = useCallback(
    (color) => {
      const textColor = getTextColorForBg(color);
      if (editingText) {
        setEditingText((prev) => ({ ...prev, bgColor: color, ...(textColor && { color: textColor }) }));
      } else if (activeText) {
        onUpdate?.({ ...activeText, bgColor: color, ...(textColor && { color: textColor }) });
      }
    },
    [editingText, activeText, onUpdate],
  );

  const handleToolbarDelete = useCallback(() => {
    if (editingText) {
      setEditingText(null);
    } else if (selectedAnnotationId) {
      onDelete?.(selectedAnnotationId);
      onSelect?.(null);
    }
  }, [editingText, selectedAnnotationId, onDelete, onSelect]);

  const renderSelectionBox = (textAnn) => {
    const fontSize = textAnn.fontSize || scaledFontSize;
    const geometry = getTextGeometry(textAnn);
    const textWidth = measureTextWidth(textAnn.text, fontSize);
    const textHeight = fontSize * 1.2;
    const anchorRadius = 5 * scaleFactor;
    const anchorGap = 8 * scaleFactor;
    const boxX = geometry.x - anchorGap;
    const boxY = geometry.y - fontSize;
    const boxWidth = textWidth + anchorGap * 2;
    const boxHeight = textHeight;
    const centerY = boxY + boxHeight / 2;

    return (
      <g>
        <rect
          x={boxX} y={boxY} width={boxWidth} height={boxHeight}
          fill="none" stroke="#888" strokeWidth={1} strokeDasharray="3 3"
          vectorEffect="non-scaling-stroke" style={{ pointerEvents: 'none' }}
        />
        <circle cx={boxX} cy={centerY} r={anchorRadius}
          fill="#ff00ba" stroke="white" strokeWidth={1} vectorEffect="non-scaling-stroke"
          style={{ cursor: 'ew-resize', pointerEvents: 'auto' }}
          onMouseDown={(e) => handleAnchorMouseDown(e, 'position', textAnn)}
        />
        <circle cx={boxX + boxWidth} cy={centerY} r={anchorRadius}
          fill="#ff00ba" stroke="white" strokeWidth={1} vectorEffect="non-scaling-stroke"
          style={{ cursor: 'ew-resize', pointerEvents: 'auto' }}
          onMouseDown={(e) => handleAnchorMouseDown(e, 'position', textAnn)}
        />
        <rect
          x={boxX} y={boxY} width={boxWidth} height={boxHeight}
          fill="transparent"
          style={{ cursor: 'move', pointerEvents: 'fill' }}
          onMouseDown={(e) => handleAnchorMouseDown(e, 'position', textAnn)}
        />
      </g>
    );
  };

  if (!imageDimensions) return null;

  const isTextMode = selectedTool === 'text';
  const isSelectMode = selectedTool === 'select';
  const viewBox = hasValidDimensions ? `0 0 ${naturalWidth} ${naturalHeight}` : undefined;
  const inputScreenPos = editingText ? svgToScreen(editingText.x, editingText.y) : null;
  const inputFontSize =
    editingText && displayWidth && naturalWidth
      ? (editingText.fontSize / naturalWidth) * displayWidth
      : DEFAULT_FONT_SIZE;

  return (
    <>
      <svg
        ref={svgRef}
        data-annotation-type="TEXT"
        style={{
          position: 'absolute', top: 0, left: 0, width: '100%', height: '100%',
          pointerEvents: isTextMode ? 'auto' : 'none',
          cursor: isTextMode ? 'text' : 'default',
        }}
        viewBox={viewBox}
        preserveAspectRatio="none"
        onClick={handleSvgClick}
      >
        {textAnnotations.map((textAnn) => {
          if (editingText && editingText.id === textAnn.id) return null;
          const isSelected = selectedAnnotationId === textAnn.id;
          const displayText =
            draggingTextState && draggingTextState.id === textAnn.id ? draggingTextState : textAnn;
          const geometry = getTextGeometry(displayText);
          return (
            <g
              key={textAnn.id}
              onClick={(e) => handleTextClick(e, textAnn)}
              onDoubleClick={(e) => handleTextDoubleClick(e, textAnn)}
              style={{
                cursor: isSelectMode ? (isSelected ? 'move' : 'pointer') : 'default',
                pointerEvents: isSelectMode ? 'auto' : 'none',
              }}
            >
              {displayText.bgColor && displayText.bgColor !== 'transparent' && (
                <rect
                  x={geometry.x}
                  y={geometry.y - (displayText.fontSize || scaledFontSize)}
                  width={measureTextWidth(displayText.text, displayText.fontSize || scaledFontSize)}
                  height={(displayText.fontSize || scaledFontSize) * 1.2}
                  fill={displayText.bgColor}
                  style={{ pointerEvents: 'none' }}
                />
              )}
              <rect
                x={geometry.x - 5 * scaleFactor}
                y={geometry.y - (displayText.fontSize || scaledFontSize)}
                width={measureTextWidth(displayText.text, displayText.fontSize || scaledFontSize) + 10 * scaleFactor}
                height={(displayText.fontSize || scaledFontSize) * 1.2}
                fill="transparent"
                style={{ pointerEvents: 'fill' }}
              />
              <text
                x={geometry.x} y={geometry.y}
                fill={displayText.color || strokeColor}
                fontSize={displayText.fontSize || scaledFontSize}
                fontFamily="sans-serif"
                fontWeight={displayText.bold ? 'bold' : 'normal'}
                fontStyle={displayText.italic ? 'italic' : 'normal'}
                textDecoration={displayText.underline ? 'underline' : 'none'}
                style={{ pointerEvents: 'none', userSelect: 'none' }}
              >
                {displayText.text}
              </text>
              {isSelected && renderSelectionBox(displayText)}
            </g>
          );
        })}
        {editingText && renderSelectionBox({ ...editingText, text: editingText.text || 'Type...' })}
      </svg>

      {editingText && inputScreenPos && (
        <input
          ref={inputRef}
          type="text"
          value={editingText.text}
          onChange={handleTextChange}
          onBlur={handleTextBlur}
          onKeyDown={handleTextKeyDown}
          style={{
            position: 'fixed',
            left: inputScreenPos.x,
            top: inputScreenPos.y - inputFontSize,
            width: `${measureTextWidth(editingText.text || 'Type...', inputFontSize) + 2}px`,
            height: `${inputFontSize * 1.2}px`,
            padding: '0',
            fontSize: `${inputFontSize}px`,
            fontFamily: 'sans-serif',
            fontWeight: editingText.bold ? 'bold' : 'normal',
            fontStyle: editingText.italic ? 'italic' : 'normal',
            textDecoration: editingText.underline ? 'underline' : 'none',
            color: editingText.color || strokeColor,
            background: editingText.bgColor && editingText.bgColor !== 'transparent' ? editingText.bgColor : 'transparent',
            border: 'none', borderRadius: '0', outline: 'none',
            zIndex: 1000, boxSizing: 'border-box',
          }}
          placeholder="Type..."
        />
      )}

      {activeText && (() => {
        const pos = activeText.target?.selector?.geometry || { x: activeText.x, y: activeText.y };
        return (
          <TextToolbar
            position={svgToScreen(pos.x, pos.y - (activeText.fontSize || scaledFontSize))}
            onFontSizeChange={handleFontSizeChange}
            onStyleToggle={handleStyleToggle}
            onBgColorChange={handleBgColorChange}
            onDelete={handleToolbarDelete}
            textStyle={{ bold: activeText.bold, italic: activeText.italic, underline: activeText.underline, bgColor: activeText.bgColor }}
          />
        );
      })()}
    </>
  );
};

export default TextTool;
