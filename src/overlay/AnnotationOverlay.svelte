<script lang="ts">
  import { onMount, onDestroy, tick } from 'svelte';
  import type { ImageAnnotator, ImageAnnotation, Shape, PolylinePoint } from '@annotorious/annotorious';
  import TextToolbar from '../text/TextToolbar.svelte';
  import { type TextStyle, DEFAULT_TEXT_STYLE } from '../text/textStyle';
  import { arrowHeadLength } from '../arrow/arrowGeometry';
  import ShapeToolbar from '../shape/ShapeToolbar.svelte';
  import {
    type ShapeStyle,
    type DefaultShapeStyle,
    FALLBACK_DEFAULT_STYLE,
  } from '../shape/shapeStyle';
  import {
    type ViewBox,
    getViewBoxAtPoint,
    pixelsToMm,
    formatMm,
  } from '../distance/viewbox';

  export let anno: ImageAnnotator<any, any>;
  export let strokeColor = '#6a6a6a';
  // Drawing-scale viewBoxes (regions carrying a 1:N scale). When a distance
  // annotation's start point falls inside one, its label is shown in real-world
  // mm instead of raw pixels. Fed in from the host via the mountPlugin
  // controller's setViewBoxes().
  export let viewBoxes: ViewBox[] = [];
  // Show the region outlines + "1:N" scale labels (host toggles this on while
  // the distance tool is active, mirroring the old React tool).
  export let showViewBoxes = false;
  // Pixels per mm on the sheet (sourced from image metadata, e.g. the PNG
  // PixelsPerMm tag). Fed in from the host via the mountPlugin controller's
  // setPixelsPerMm(). Used to convert a measured pixel distance to real-world
  // mm (pixelsToMm divides by this, then multiplies by the viewBox scale).
  export let pixelsPerMm: number | null = null;
  // Global drawing defaults (host app's current stroke/fill settings). The
  // shape toolbar shows these for annotations without per-annotation
  // overrides. Fed in via the mountPlugin controller's setDefaultStyle().
  export let defaultStyle: DefaultShapeStyle = FALLBACK_DEFAULT_STYLE;
  // Ids of annotations the host has hidden (per-annotation eye toggle or a
  // hidden layer). The overlay renders arrows, distance labels and text
  // itself, so Annotorious's setStyle-based hiding can't reach them — the
  // host must feed the hidden set in via the mountPlugin controller's
  // setHiddenIds().
  export let hiddenIds: string[] = [];

  $: hiddenIdSet = new Set(hiddenIds);

  type ToolShape = Shape & {
    properties?: {
      toolType?: string;
      textStyle?: Partial<TextStyle>;
      style?: ShapeStyle;
    };
  };

  let img: HTMLImageElement | null = null;
  let textSvgEl: SVGSVGElement | undefined;
  let viewBox = '0 0 1 1';
  let naturalWidth = 1;
  let viewportScale = 1;
  let resizeObserver: ResizeObserver | undefined;

  // Id of the viewBox the cursor is currently inside (null = none). Drives the
  // "active" highlight while the distance tool is active.
  let activeViewBoxId: string | null = null;
  // Stop highlighting when the region outlines are hidden.
  $: if (!showViewBoxes) activeViewBoxId = null;

  // Text editing state
  let editingId: string | null = null;
  let editingText = '';
  let editingStyle: TextStyle = { ...DEFAULT_TEXT_STYLE };
  let inputEl: HTMLTextAreaElement | undefined;
  let selectedIds: string[] = [];

  // Committed text cache: updated immediately in commitEdit so the SVG renders
  // the correct text even before the Annotorious store propagates the update.
  let localTexts: Record<string, string> = {};

  // Drag state for moving text annotations
  let draggingTextId: string | null = null;
  let dragOffset: { x: number; y: number } | null = null;
  let draggingPos: Record<string, { x: number; y: number }> = {};

  // Drag state for resizing the box via the left/right anchor circles.
  // Resizing changes the WRAP WIDTH only — font size never changes; text
  // re-wraps to fit the new width.
  let resizeState: {
    id: string;
    side: 'left' | 'right';
    leftX: number;       // image-space text left edge (anchor) at drag start
    rightX: number;      // image-space text right edge at drag start
    anchorY: number;     // image-space first-line baseline y (unchanged)
  } | null = null;
  // Live wrap width while a handle is being dragged (image space).
  let resizeLiveW: number | null = null;

  // Shared canvas for pixel-perfect text width measurement (matching old TextTool).
  // Weight/style MUST be included in the font string: bold glyphs are wider,
  // and measuring at normal weight makes the input/background/selection box
  // too narrow — the input then scrolls horizontally and the text appears
  // shifted sideways.
  let measureCanvas: HTMLCanvasElement | null = null;
  const measureTextWidth = (text: string, fontSize: number, style?: TextStyle): number => {
    if (!measureCanvas) measureCanvas = document.createElement('canvas');
    const ctx = measureCanvas.getContext('2d')!;
    const italic = style?.italic ? 'italic ' : '';
    const bold   = style?.bold   ? 'bold '   : '';
    ctx.font = `${italic}${bold}${fontSize}px sans-serif`;
    return ctx.measureText(text).width;
  };

  // Real font metrics for `${fontSize}px sans-serif`, measured via canvas so
  // the SVG <text> (display mode) and the HTML <input> (edit mode) can share
  // the exact same baseline position and background box.
  const fontMetrics = (fontSize: number) => {
    if (!measureCanvas) measureCanvas = document.createElement('canvas');
    const ctx = measureCanvas.getContext('2d')!;
    ctx.font = `${fontSize}px sans-serif`;
    const m = ctx.measureText('Mg');
    return {
      ascent:  m.fontBoundingBoxAscent  ?? fontSize * 0.9,
      descent: m.fontBoundingBoxDescent ?? fontSize * 0.25,
    };
  };

  // Distance from the top of the text box (height = fontSize * 1.2, the
  // input's height) down to the text baseline. Browsers vertically centre a
  // single line of input text in the content box, so the baseline sits at
  // (boxH - (ascent + descent)) / 2 + ascent from the top. Using this for
  // BOTH the input position and the display-mode background/selection box
  // keeps the text from shifting between editing and saved states.
  const baselineOffset = (fontSize: number) => {
    const { ascent, descent } = fontMetrics(fontSize);
    return (fontSize * 1.2 - (ascent + descent)) / 2 + ascent;
  };

  // Greedy word-wrap using the same canvas measurement as everything else,
  // mirroring the textarea's `pre-wrap` + `break-word` behaviour: break at
  // spaces, keep manual newlines, and break words longer than the width at
  // character level. Width of Infinity = no wrapping (auto-width mode).
  const wrapText = (
    text: string,
    width: number,
    fontSize: number,
    style?: TextStyle,
  ): string[] => {
    const fits = (s: string) => measureTextWidth(s, fontSize, style) <= width;
    const breakWord = (word: string, lines: string[]): string => {
      // Word alone exceeds the width — break at character level.
      let chunk = '';
      for (const ch of word) {
        if (chunk && !fits(chunk + ch)) { lines.push(chunk); chunk = ch; }
        else chunk += ch;
      }
      return chunk;
    };
    const lines: string[] = [];
    for (const para of (text || '').split('\n')) {
      let line = '';
      for (const word of para.split(' ')) {
        const candidate = line ? `${line} ${word}` : word;
        if (fits(candidate)) line = candidate;
        else if (!line) line = breakWord(word, lines);
        else {
          lines.push(line);
          line = fits(word) ? word : breakWord(word, lines);
        }
      }
      lines.push(line);
    }
    return lines.length ? lines : [''];
  };

  // User-set wrap width (image space). Undefined = auto: the box hugs the
  // text on a single line (legacy behaviour) until a resize handle is dragged.
  const boxWidthOf = (selector: ToolShape): number | undefined => {
    const w = (selector.geometry as any)?.boxWidth;
    return typeof w === 'number' && w > 0 ? w : undefined;
  };

  // Convert client (screen) coordinates to image-pixel coordinates
  const clientToImage = (clientX: number, clientY: number) => {
    if (!textSvgEl) return { x: 0, y: 0 };
    const rect = textSvgEl.getBoundingClientRect();
    return {
      x: (clientX - rect.left) / viewportScale,
      y: (clientY - rect.top) / viewportScale,
    };
  };

  const { store } = anno.state;
  $: allAnnotations = $store as ImageAnnotation[];

  type DistanceAnnotation = {
    id: string; toolType: 'distance';
    linePts: string;
    x1: number; y1: number; x2: number; y2: number;
    mx: number; my: number;
    px: number; py: number;
    length: string;
    stroke: string; width: number;
  };

  type SvgAnnotation =
    | {
        id: string; toolType: 'arrow'; arrowheadStr: string;
        // Shaft endpoints: starts at the arrow origin, ends at the BASE of
        // the head (pulled back by hl from the tip) so the stroke can never
        // poke out of the head. The Annotorious-rendered LINE shape is kept
        // invisible by the host (like 'distance') — the overlay draws both
        // the shaft and the head.
        x1: number; y1: number; x2: number; y2: number;
        stroke: string; width: number;
      }
    | DistanceAnnotation;

  $: svgAnnotations = allAnnotations.reduce<SvgAnnotation[]>((acc, a) => {
    if (hiddenIdSet.has(a.id)) return acc;
    const selector = a.target?.selector as ToolShape | undefined;
    const toolType = selector?.properties?.toolType;
    if (!selector) return acc;

    // Per-annotation style overrides (set via the shape toolbar) win over
    // legacy top-level fields (host apps may flatten persisted styles onto
    // the annotation), which win over the host's global stroke colour.
    const legacy = a as unknown as { strokeColor?: string; strokeWidth?: number };
    const ownStyle = {
      strokeColor: selector.properties?.style?.strokeColor ?? legacy.strokeColor,
      strokeWidth: selector.properties?.style?.strokeWidth ?? legacy.strokeWidth,
    };

    if (toolType === 'arrow') {
      const pts = selector.geometry.points as unknown as [number, number][];
      const [x1, y1] = pts[0];
      const [x2, y2] = pts[1];
      const angle = Math.atan2(y2 - y1, x2 - x1);

      // Head length from the shared helper (screen-constant, proportional
      // to the stroke) — same maths as LineEditor and RubberbandArrow.
      const hl = arrowHeadLength(
        ownStyle.strokeWidth ?? 2,
        viewportScale,
        Math.hypot(x2 - x1, y2 - y1),
      );

      const arrowheadStr = [
        `${x2 - hl * Math.cos(angle - Math.PI / 6)},${y2 - hl * Math.sin(angle - Math.PI / 6)}`,
        `${x2},${y2}`,
        `${x2 - hl * Math.cos(angle + Math.PI / 6)},${y2 - hl * Math.sin(angle + Math.PI / 6)}`,
      ].join(' ');
      acc.push({
        id: a.id, toolType: 'arrow', arrowheadStr,
        x1, y1,
        // Shaft ends exactly hl before the tip (the head's base).
        x2: x2 - hl/2 * Math.cos(angle),
        y2: y2 - hl/2 * Math.sin(angle),
        stroke: ownStyle?.strokeColor ?? strokeColor,
        width: ownStyle?.strokeWidth ?? 2,
      });

    } else if (toolType === 'distance') {
      const pts = (selector.geometry.points as unknown as PolylinePoint[]).map(p => p.point) as [number, number][];
      const [x1, y1] = pts[0];
      const [x2, y2] = pts[pts.length - 1];
      let total = 0;
      for (let i = 1; i < pts.length; i++) total += Math.hypot(pts[i][0] - pts[i-1][0], pts[i][1] - pts[i-1][1]);
      const lineLen = Math.hypot(x2 - x1, y2 - y1);
      const px = lineLen > 0 ? -(y2 - y1) / lineLen : 0;
      const py = lineLen > 0 ?  (x2 - x1) / lineLen : 1;
      // Always compute the label LIVE from the current geometry: real-world mm
      // when the start point is inside a scaled viewBox, otherwise the raw pixel
      // length. (Deliberately NOT read from the persisted measurement body —
      // that value is only written on create, so reading it here would leave the
      // label stale when the annotation is moved or its endpoints are dragged.)
      const vb = getViewBoxAtPoint(viewBoxes, x1, y1);
      const mm = vb && pixelsPerMm ? pixelsToMm(total, vb.scale, pixelsPerMm) : null;
      const length = mm != null ? formatMm(mm) : `${total.toFixed(1)}px`;
      acc.push({
        id: a.id, toolType: 'distance',
        linePts: pts.map(p => `${p[0]},${p[1]}`).join(' '),
        x1, y1, x2, y2,
        mx: (x1 + x2) / 2, my: (y1 + y2) / 2,
        px, py,
        length,
        stroke: ownStyle?.strokeColor ?? strokeColor,
        width: ownStyle?.strokeWidth ?? 1.5,
      });
    }
    return acc;
  }, []);

  $: textAnnotations = allAnnotations
    .filter(a => !hiddenIdSet.has(a.id))
    .map(a => ({
      id: a.id,
      annotation: a,
      selector: a.target?.selector as ToolShape | undefined,
      text: a.bodies?.[0]?.value as string | undefined,
    }))
    .filter(({ selector }) => selector?.properties?.toolType === 'text');

  // Seed localTexts from persisted annotation bodies on load
  $: for (const { id, text } of textAnnotations) {
    if (text && localTexts[id] === undefined) {
      localTexts = { ...localTexts, [id]: text };
    }
  }

  const getStyle = (selector: ToolShape): TextStyle => ({
    ...DEFAULT_TEXT_STYLE,
    ...(selector.properties?.textStyle || {}),
  });

  // geometry.anchorX / anchorY is the text baseline-left.
  // Older annotations (pre-fix) stored the anchor as x/y directly.
  const textPoint = (selector: ToolShape) => {
    const g = selector.geometry as any;
    return {
      x: g.anchorX !== undefined ? (g.anchorX as number) : (g.x as number),
      y: g.anchorY !== undefined ? (g.anchorY as number) : (g.y as number),
    };
  };

  // Font size in SVG image-pixel space (= screen font-size / viewportScale)
  const svgFontSize = (style: TextStyle) =>
    (style.fontSize || DEFAULT_TEXT_STYLE.fontSize) / Math.max(viewportScale, 0.001);

  // Screen position of the HTML input overlay, derived so the input's
  // internal text baseline lands exactly on the SVG <text> baseline (y).
  // NOT simply y - fontSize — that drifts by a few px because the browser
  // centres input text using the font's own ascent/descent.
  // `override` is the live drag/resize position (image space), so the input
  // follows the box while it's being moved or resized from the left handle.
  const inputScreenPos = (
    selector: ToolShape,
    style: TextStyle,
    override?: { x: number; y: number },
  ) => {
    const { x, y } = override ?? textPoint(selector);
    const fs = style.fontSize || DEFAULT_TEXT_STYLE.fontSize;
    return {
      left: x * viewportScale,
      top:  y * viewportScale - baselineOffset(fs),
    };
  };

  const updateViewBox = () => {
    if (!img) return;
    const { naturalWidth: nw, naturalHeight: nh } = img;
    if (!nw || !nh) return;
    naturalWidth = nw;
    viewBox = `0 0 ${nw} ${nh}`;
    viewportScale = img.getBoundingClientRect().width / nw;
  };

  const handleCreate = async (annotation: any) => {
    if (annotation.target?.selector?.properties?.toolType !== 'text') return;
    editingId = annotation.id;
    editingText = '';
    editingStyle = getStyle(annotation.target.selector);
    await tick();
    inputEl?.focus();
  };

  const startEditing = async (annotationId: string) => {
    const annotation = allAnnotations.find(a => a.id === annotationId) as any;
    if (!annotation) return;
    if (editingId && editingId !== annotationId) commitEdit();
    // Do NOT call setSelected — it triggers Annotorious's native selection UI
    // (rectangle + handles) which clashes with the overlay's own editing UI.
    editingId = annotationId;
    editingText = localTexts[annotationId] ?? annotation.bodies?.[0]?.value ?? '';
    editingStyle = getStyle(annotation.target.selector);
    await tick();
    inputEl?.focus();
  };

  const handleSelectionChanged = (selected: any[]) => {
    selectedIds = selected?.map((s: any) => s.id) || [];
    if (!selected?.length) return;

    const sel = selected[0];
    const isText = sel?.target?.selector?.properties?.toolType === 'text';
    if (isText) return;
    if (editingId) commitEdit();
  };

  const commitEdit = () => {
    if (!editingId) return;
    const committingId = editingId;
    const committingText = editingText;
    editingId = null;
    editingText = '';

    const annotation = allAnnotations.find(a => a.id === committingId) as any;
    if (annotation) {
      if (!committingText.trim()) {
        deleteAnnotation(committingId);
        return;
      }

      const bodies = [{ type: 'TextualBody', value: committingText, purpose: 'commenting' }];

      const fsImage = (editingStyle.fontSize || DEFAULT_TEXT_STYLE.fontSize) / Math.max(viewportScale, 0.001);
      const anchorGapImg = 8 / Math.max(viewportScale, 0.001);
      const oldG = annotation.target.selector.geometry as any;
      const boxW = boxWidthOf(annotation.target.selector as ToolShape);
      const lines = wrapText(committingText || 'Type...', boxW ?? Infinity, fsImage, editingStyle);
      const textW = boxW
        ?? Math.max(...lines.map(l => measureTextWidth(l, fsImage, editingStyle)));
      const anchor = textPoint(annotation.target.selector as ToolShape);
      const minX = anchor.x - anchorGapImg;
      const minY = anchor.y - baselineOffset(fsImage);
      const maxX = anchor.x + textW + anchorGapImg;
      const maxY = minY + fsImage * 1.2 * lines.length;
      const newGeometry = {
        bounds: { minX, minY, maxX, maxY },
        x: minX, y: minY, w: maxX - minX, h: maxY - minY,
        anchorX: anchor.x, anchorY: anchor.y,
        ...(boxW ? { boxWidth: boxW } : {}),
      };

      anno.updateAnnotation({
        ...annotation,
        bodies,
        target: {
          ...annotation.target,
          selector: {
            ...annotation.target.selector,
            geometry: newGeometry,
            properties: {
              ...annotation.target.selector.properties,
              textStyle: editingStyle,
            },
          },
        },
      });

      localTexts = { ...localTexts, [committingId]: committingText };
    }
  };

  const applyStyleChange = (annotationId: string, newStyle: TextStyle) => {
    const annotation = allAnnotations.find(a => a.id === annotationId) as any;
    if (!annotation) return;
    anno.updateAnnotation({
      ...annotation,
      target: {
        ...annotation.target,
        selector: {
          ...annotation.target.selector,
          properties: {
            ...annotation.target.selector.properties,
            textStyle: newStyle,
          },
        },
      },
    });
    if (editingId === annotationId) editingStyle = newStyle;
  };

  // ── Shape toolbar (non-text annotations) ───────────────────────────────────

  // Shape types that can carry a fill. Open polylines (path/distance) and
  // lines/arrows are stroke-only.
  const isFillable = (selector: ToolShape | undefined): boolean => {
    if (!selector) return false;
    const type = String(selector.type);
    if (type === 'RECTANGLE' || type === 'POLYGON' || type === 'ELLIPSE' || type === 'MULTIPOLYGON')
      return true;
    if (type === 'POLYLINE')
      return Boolean((selector.geometry as any)?.closed);
    return false;
  };

  // The single selected non-text annotation (if any) — drives the shape
  // toolbar. Text annotations keep their dedicated TextToolbar.
  $: selectedShape = (() => {
    if (editingId || selectedIds.length !== 1) return null;
    const a = allAnnotations.find(x => x.id === selectedIds[0]) as any;
    const selector = a?.target?.selector as ToolShape | undefined;
    if (!a || !selector) return null;
    if (selector.properties?.toolType === 'text') return null;

    const bounds = (selector.geometry as any)?.bounds;
    if (!bounds) return null;

    const style: Required<ShapeStyle> = {
      ...defaultStyle,
      ...(selector.properties?.style || {}),
    };

    return {
      id: a.id as string,
      // Screen position: top-left corner of the shape's bounding box
      x: bounds.minX * viewportScale,
      y: bounds.minY * viewportScale,
      style,
      fillable: isFillable(selector),
    };
  })();

  const applyShapeStyle = (annotationId: string, patch: ShapeStyle) => {
    const annotation = allAnnotations.find(a => a.id === annotationId) as any;
    if (!annotation) return;
    const selector = annotation.target.selector as ToolShape;
    anno.updateAnnotation({
      ...annotation,
      target: {
        ...annotation.target,
        selector: {
          ...selector,
          properties: {
            ...selector.properties,
            style: { ...(selector.properties?.style || {}), ...patch },
          },
        },
      },
    });
  };

  const deleteAnnotation = (annotationId: string) => {
    if (editingId === annotationId) { editingId = null; editingText = ''; }
    const { [annotationId]: _removed, ...rest } = localTexts;
    localTexts = rest;
    anno.removeAnnotation(annotationId);
  };

  // ── Drag-to-move ────────────────────────────────────────────────────────────

  const handleTextMouseDown = (e: MouseEvent, id: string, pt: { x: number; y: number }) => {
    if (e.button !== 0) return;
    e.stopPropagation();
    // Keep the editing input focused during the drag — without this the
    // mousedown blurs the input, which commits the edit and tears down the
    // selection box mid-interaction.
    e.preventDefault();
    const imgPos = clientToImage(e.clientX, e.clientY);
    dragOffset = { x: imgPos.x - pt.x, y: imgPos.y - pt.y };
    draggingTextId = id;
  };

  // ── Resize via the left/right anchor circles ───────────────────────────────

  const handleResizeMouseDown = (
    e: MouseEvent,
    id: string,
    side: 'left' | 'right',
    pt: { x: number; y: number },
    boxW: number,
  ) => {
    if (e.button !== 0) return;
    e.stopPropagation();
    e.preventDefault(); // keep the input focused (blur would commit the edit)
    resizeState = {
      id,
      side,
      leftX: pt.x,
      rightX: pt.x + boxW,
      anchorY: pt.y,
    };
    resizeLiveW = boxW;
  };

  // Persist a resize: the new wrap width and (for a left-handle drag) the
  // shifted anchor, in a single annotation update. Font size is untouched.
  const persistResize = (id: string, boxWidth: number, pos?: { x: number; y: number }) => {
    const annotation = allAnnotations.find(a => a.id === id) as any;
    if (!annotation) return;
    const selector = annotation.target.selector as ToolShape;
    const oldG = selector.geometry as any;
    let geometry = { ...oldG, boxWidth };
    if (pos) {
      const oldAnchor = textPoint(selector);
      const dx = pos.x - oldAnchor.x;
      const dy = pos.y - oldAnchor.y;
      geometry = {
        ...geometry,
        x: oldG.x + dx, y: oldG.y + dy,
        anchorX: pos.x, anchorY: pos.y,
        bounds: {
          minX: (oldG.bounds?.minX ?? oldG.x) + dx,
          minY: (oldG.bounds?.minY ?? oldG.y) + dy,
          maxX: (oldG.bounds?.maxX ?? oldG.x) + dx,
          maxY: (oldG.bounds?.maxY ?? oldG.y) + dy,
        },
      };
    }
    anno.updateAnnotation({
      ...annotation,
      target: {
        ...annotation.target,
        selector: { ...selector, geometry },
      },
    });
  };

  const handleWindowMouseMove = (e: MouseEvent) => {
    // Track which viewBox the cursor is inside so it can be highlighted. Done
    // here (on a window listener) because the overlay SVG is pointer-events:none.
    if (showViewBoxes) {
      const { x, y } = clientToImage(e.clientX, e.clientY);
      const next = getViewBoxAtPoint(viewBoxes, x, y)?.viewBoxId ?? null;
      if (next !== activeViewBoxId) activeViewBoxId = next;
    }

    // Handle-resize drag: change the wrap width, keeping the opposite edge
    // fixed. Font size NEVER changes — text re-wraps to the new width.
    if (resizeState) {
      const { x } = clientToImage(e.clientX, e.clientY);
      const anchorGap = 8 / Math.max(viewportScale, 0.001);
      const fsImage = (editingStyle.fontSize || DEFAULT_TEXT_STYLE.fontSize)
        / Math.max(viewportScale, 0.001);
      const rawW = resizeState.side === 'right'
        ? x - anchorGap - resizeState.leftX
        : resizeState.rightX - x - anchorGap;
      // Never narrower than ~1.5em, so at least short words still fit.
      const newW = Math.max(rawW, fsImage * 1.5);
      resizeLiveW = newW;
      if (resizeState.side === 'left') {
        // Keep the RIGHT edge fixed: shift the anchor by the width change.
        draggingPos = {
          [resizeState.id]: { x: resizeState.rightX - newW, y: resizeState.anchorY },
        };
      }
      return;
    }

    if (!draggingTextId || !dragOffset) return;
    const imgPos = clientToImage(e.clientX, e.clientY);
    draggingPos = {
      [draggingTextId]: {
        x: imgPos.x - dragOffset.x,
        y: imgPos.y - dragOffset.y,
      },
    };
  };

  const handleWindowMouseUp = () => {
    if (resizeState) {
      const { id, side } = resizeState;
      if (resizeLiveW != null)
        persistResize(id, resizeLiveW, side === 'left' ? draggingPos[id] : undefined);
      resizeState = null;
      resizeLiveW = null;
      draggingPos = {};
      inputEl?.focus();
      return;
    }

    if (!draggingTextId) return;
    const pos = draggingPos[draggingTextId];
    if (pos) {
      const annotation = allAnnotations.find(a => a.id === draggingTextId) as any;
      if (annotation) {
        const oldG = annotation.target.selector.geometry as any;
        // pos tracks the text anchor (baseline-left); compute delta from anchor
        // so that both the anchor fields and the rect x/y shift by the same amount.
        const oldAnchor = textPoint(annotation.target.selector as ToolShape);
        const dx = pos.x - oldAnchor.x;
        const dy = pos.y - oldAnchor.y;
        anno.updateAnnotation({
          ...annotation,
          target: {
            ...annotation.target,
            selector: {
              ...annotation.target.selector,
              geometry: {
                ...oldG,
                x: oldG.x + dx, y: oldG.y + dy,
                anchorX: pos.x, anchorY: pos.y,
                bounds: {
                  minX: (oldG.bounds?.minX ?? oldG.x) + dx,
                  minY: (oldG.bounds?.minY ?? oldG.y) + dy,
                  maxX: (oldG.bounds?.maxX ?? oldG.x) + dx,
                  maxY: (oldG.bounds?.maxY ?? oldG.y) + dy,
                },
              },
            },
          },
        });
      }
    }
    draggingTextId = null;
    dragOffset = null;
    draggingPos = {};
  };

  // ── Input key handling ───────────────────────────────────────────────────────

  const onInputKeyDown = (evt: KeyboardEvent) => {
    evt.stopPropagation();
    // Enter commits (Shift+Enter inserts a manual line break in the textarea).
    if (evt.key === 'Escape' || (evt.key === 'Enter' && !evt.shiftKey)) {
      evt.preventDefault();
      commitEdit();
      anno.cancelSelected();
    }
  };

  // ── Style helpers ────────────────────────────────────────────────────────────

  const svgTextStyle = (style: TextStyle) => [
    `font-weight:${style.bold ? 'bold' : 'normal'}`,
    style.italic    ? 'font-style:italic'         : '',
    style.underline ? 'text-decoration:underline' : '',
  ].filter(Boolean).join(';');

  const inputStyle = (style: TextStyle, pos: { left: number; top: number }, width: number, lineCount = 1) => [
    `left:${pos.left}px`,
    `top:${pos.top}px`,
    `width:${width}px`,
    `height:${(style.fontSize || DEFAULT_TEXT_STYLE.fontSize) * 1.2 * lineCount}px`,
    `line-height:${(style.fontSize || DEFAULT_TEXT_STYLE.fontSize) * 1.2}px`,
    `font-size:${style.fontSize || DEFAULT_TEXT_STYLE.fontSize}px`,
    style.bold      ? 'font-weight:bold'         : '',
    style.italic    ? 'font-style:italic'         : '',
    style.underline ? 'text-decoration:underline' : '',
    style.bgColor && style.bgColor !== 'transparent' ? `background:${style.bgColor}` : '',
  ].filter(Boolean).join(';');

  // ── Lifecycle ────────────────────────────────────────────────────────────────

  onMount(() => {
    img = anno.element.querySelector('img');
    if (!img) return;
    if (img.complete) updateViewBox();
    img.addEventListener('load', updateViewBox);
    if (window.ResizeObserver) {
      resizeObserver = new ResizeObserver(updateViewBox);
      resizeObserver.observe(img);
    }
    anno.on('createAnnotation', handleCreate);
    anno.on('selectionChanged', handleSelectionChanged);
    window.addEventListener('mousemove', handleWindowMouseMove);
    window.addEventListener('mouseup', handleWindowMouseUp);
  });

  onDestroy(() => {
    img?.removeEventListener('load', updateViewBox);
    resizeObserver?.disconnect();
    anno.off('createAnnotation', handleCreate);
    anno.off('selectionChanged', handleSelectionChanged);
    window.removeEventListener('mousemove', handleWindowMouseMove);
    window.removeEventListener('mouseup', handleWindowMouseUp);
  });
</script>

<!-- Arrow / distance overlay (image-pixel coordinate space) -->
<svg
  class="a9s-tools-overlay"
  viewBox={viewBox}
  preserveAspectRatio="xMinYMin meet">
  <g>
    <!-- Drawing-scale viewBox region outlines + "1:N" labels, shown while the
         distance tool is active. Strokes use vector-effect:non-scaling-stroke so
         their widths/dashes stay constant on screen regardless of zoom; the
         label font is divided by viewportScale for the same reason. The region
         under the cursor (activeViewBoxId) gets a solid, brighter, animated
         highlight; idle regions get an animated "marching ants" dashed outline. -->
    {#if showViewBoxes}
      {#each viewBoxes as vb (vb.viewBoxId)}
        {@const pos = vb.viewBoxPosition}
        {#if pos && pos.width != null && pos.height != null}
          {@const isActive = activeViewBoxId === vb.viewBoxId}
          {@const vrx = 2  / Math.max(viewportScale, 0.001)}
          {@const vfs = 12 / Math.max(viewportScale, 0.001)}
          <g
            class="a9s-tools-viewbox"
            class:is-active={isActive}
            data-viewbox-id={vb.viewBoxId}>
            <rect
              class="a9s-tools-viewbox-rect"
              x={pos.x} y={pos.y}
              width={pos.width} height={pos.height}
              fill="none"
              rx={vrx}
              vector-effect="non-scaling-stroke" />
            <text
              class="a9s-tools-viewbox-label"
              x={pos.x + 6 / Math.max(viewportScale, 0.001)}
              y={pos.y + 18 / Math.max(viewportScale, 0.001)}
              font-size={vfs}
              font-family="sans-serif"
              font-weight="bold">1:{vb.scale}</text>
          </g>
        {/if}
      {/each}
    {/if}
    {#each svgAnnotations as ann (ann.id)}
      {#if ann.toolType === 'arrow'}
        <g data-annotation-type="ARROW" data-annotation-id={ann.id}>
          <line
            x1={ann.x1} y1={ann.y1}
            x2={ann.x2} y2={ann.y2}
            stroke={ann.stroke}
            stroke-width={ann.width}
            stroke-linecap="butt"
            vector-effect="non-scaling-stroke" />
          <polygon
            points={ann.arrowheadStr}
            style={`fill:${ann.stroke};stroke:none`}
            vector-effect="non-scaling-stroke" />
        </g>
      {:else if ann.toolType === 'distance'}
        {@const tick  = 8  / Math.max(viewportScale, 0.001)}
        {@const lfs   = 14 / Math.max(viewportScale, 0.001)}
        {@const pillW = ann.length.length * lfs * 0.7}
        {@const pillH = lfs * 1.2}
        {@const rx    = 4  / Math.max(viewportScale, 0.001)}
        {@const lox   = ann.px * 20 / Math.max(viewportScale, 0.001)}
        {@const loy   = ann.py * 20 / Math.max(viewportScale, 0.001)}
        <g class="a9s-tools-distance" data-annotation-type="DISTANCE" data-annotation-id={ann.id}>
          <polyline
            points={ann.linePts}
            fill="none"
            stroke={ann.stroke}
            stroke-width={ann.width}
            stroke-dasharray="{8 / viewportScale} {4 / viewportScale}"
            vector-effect="non-scaling-stroke" />
          <line
            x1={ann.x1 - ann.px * tick} y1={ann.y1 - ann.py * tick}
            x2={ann.x1 + ann.px * tick} y2={ann.y1 + ann.py * tick}
            stroke={ann.stroke}
            stroke-width={ann.width}
            vector-effect="non-scaling-stroke" />
          <line
            x1={ann.x2 - ann.px * tick} y1={ann.y2 - ann.py * tick}
            x2={ann.x2 + ann.px * tick} y2={ann.y2 + ann.py * tick}
            stroke={ann.stroke}
            stroke-width={ann.width}
            vector-effect="non-scaling-stroke" />
          <g transform={`translate(${ann.mx + lox}, ${ann.my + loy})`}>
            <rect
              x={-pillW / 2} y={-pillH / 2}
              width={pillW}  height={pillH}
              rx={rx}
              fill="rgba(0,0,0,0.7)" />
            <text
              x="0" y="0"
              font-size={lfs}
              font-family="sans-serif"
              font-weight="bold"
              fill="white"
              text-anchor="middle"
              dominant-baseline="middle">{ann.length}</text>
          </g>
        </g>
      {/if}
    {/each}
  </g>
</svg>

<!-- Text annotation overlay (image-pixel coordinate space) -->
<svg
  bind:this={textSvgEl}
  class="a9s-tools-overlay"
  data-annotation-type="TEXT"
  viewBox={viewBox}
  preserveAspectRatio="xMinYMin meet"
  style="pointer-events:none;">

  {#each textAnnotations as { id, selector, text } (id)}
    {#if selector}
      {@const rawPt   = textPoint(selector)}
      {@const pt      = draggingPos[id] ?? rawPt}
      {@const style   = getStyle(selector)}
      {@const fs      = svgFontSize(style)}
      {@const hasBg   = !!(style.bgColor && style.bgColor !== 'transparent')}
      {@const displayText  = localTexts[id] ?? text ?? ''}

      <!-- Text body (hidden while editing — textarea takes over). Text wraps
           at the user-set box width (boxWidth); without one it stays on a
           single auto-width line (legacy behaviour). -->
      {#if editingId !== id}
        {@const boxWidth = boxWidthOf(selector)}
        {@const lineH = fs * 1.2}
        {@const lines = wrapText(displayText, boxWidth ?? Infinity, fs, style)}
        {@const dispW = boxWidth
          ?? Math.max(...lines.map(l => measureTextWidth(l, fs, style))) + 2 / Math.max(viewportScale, 0.001)}
        {@const dispH = lineH * lines.length}
        {@const padX  = 8 / Math.max(viewportScale, 0.001)}
        {@const padY  = 4 / Math.max(viewportScale, 0.001)}
        <!-- svelte-ignore a11y-click-events-have-key-events a11y-no-static-element-interactions -->
        <g
          data-annotation-type="TEXT"
          data-annotation-id={id}
          style="pointer-events:auto; cursor:pointer;"
          on:mousedown={(e) => handleTextMouseDown(e, id, rawPt)}
          on:click={() => startEditing(id)}>

          {#if hasBg}
            <rect
              x={pt.x}
              y={pt.y - baselineOffset(fs)}
              width={dispW}
              height={dispH}
              fill={style.bgColor} />
          {/if}
          <!-- Enlarged hit area: padded around the text (same geometry as the
               editing selection box) so the annotation is clickable well
               beyond the glyphs. Invisible until hovered, when it shows an
               outline making the interactive region obvious. -->
          <rect
            class="a9s-tools-text-hit"
            x={pt.x - padX}
            y={pt.y - baselineOffset(fs) - padY}
            width={dispW + padX * 2}
            height={dispH + padY * 2}
            rx={2 / Math.max(viewportScale, 0.001)}
            vector-effect="non-scaling-stroke" />
          <text
            font-size={fs}
            font-family="sans-serif"
            style={svgTextStyle(style)}>
            {#each lines as line, li}
              <tspan x={pt.x} y={pt.y + li * lineH}>{line}</tspan>
            {/each}
          </text>
        </g>
      {/if}

      <!-- Selection / editing box: blue border + faint fill over the whole
           draggable area, with #ff00ba resize circles at the left/right
           centre edges. The handles change the WRAP WIDTH only — font size
           is never affected. resizeLiveW tracks the width during the drag. -->
      {#if editingId === id}
        {@const efs        = svgFontSize(editingStyle)}
        {@const eBoxWidth  = (resizeState?.id === id ? resizeLiveW : null) ?? boxWidthOf(selector)}
        {@const eLines     = wrapText(editingText || 'Type...', eBoxWidth ?? Infinity, efs, editingStyle)}
        {@const textW      = eBoxWidth
          ?? Math.max(...eLines.map(l => measureTextWidth(l, efs, editingStyle))) + 2 / Math.max(viewportScale, 0.001)}
        {@const textH      = efs * 1.2 * eLines.length}
        {@const anchorR    = 6  / Math.max(viewportScale, 0.001)}
        {@const anchorGap  = 8  / Math.max(viewportScale, 0.001)}
        {@const padY       = 4  / Math.max(viewportScale, 0.001)}
        {@const boxX       = pt.x - anchorGap}
        {@const boxY       = pt.y - baselineOffset(efs) - padY}
        {@const boxW       = textW + anchorGap * 2}
        {@const boxH       = textH + padY * 2}
        {@const centerY    = boxY + boxH / 2}
        <g style="pointer-events:none;">
          <!-- Selection border + faint fill: marks the full interactive area -->
          <rect
            x={boxX} y={boxY}
            width={boxW} height={boxH}
            fill="rgba(59, 130, 246, 0.08)"
            stroke="#3b82f6"
            stroke-width="1.5"
            stroke-dasharray="5 3"
            vector-effect="non-scaling-stroke" />
          <!-- Invisible drag area covering the whole box -->
          <!-- svelte-ignore a11y-no-static-element-interactions -->
          <rect
            x={boxX} y={boxY}
            width={boxW} height={boxH}
            fill="transparent"
            style="pointer-events:fill; cursor:move;"
            on:mousedown={(e) => handleTextMouseDown(e, id, pt)} />
          <!-- Left resize handle -->
          <!-- svelte-ignore a11y-no-static-element-interactions -->
          <circle
            class="a9s-tools-text-anchor"
            cx={boxX} cy={centerY} r={anchorR}
            fill="#ff00ba" stroke="white" stroke-width="1.5"
            vector-effect="non-scaling-stroke"
            style="pointer-events:auto; cursor:ew-resize;"
            on:mousedown={(e) => handleResizeMouseDown(e, id, 'left', pt, textW)} />
          <!-- Right resize handle -->
          <!-- svelte-ignore a11y-no-static-element-interactions -->
          <circle
            class="a9s-tools-text-anchor"
            cx={boxX + boxW} cy={centerY} r={anchorR}
            fill="#ff00ba" stroke="white" stroke-width="1.5"
            vector-effect="non-scaling-stroke"
            style="pointer-events:auto; cursor:ew-resize;"
            on:mousedown={(e) => handleResizeMouseDown(e, id, 'right', pt, textW)} />
        </g>
      {/if}
    {/if}
  {/each}
</svg>

<!-- Shape toolbar for selected non-text annotations (screen-pixel space) -->
{#if selectedShape}
  {#key selectedShape.id}
    <ShapeToolbar
      style={selectedShape.style}
      defaultStyle={defaultStyle}
      fillable={selectedShape.fillable}
      x={selectedShape.x}
      y={selectedShape.y}
      on:change={(e) => applyShapeStyle(selectedShape.id, e.detail)}
      on:delete={() => deleteAnnotation(selectedShape.id)} />
  {/key}
{/if}

<!-- Editing input + toolbar (screen-pixel coordinate space) -->
{#each textAnnotations as { id, selector } (id)}
  {#if selector && editingId === id}
    {@const style  = editingStyle}
    {@const pos    = inputScreenPos(selector, style, draggingPos[id])}
    {@const fs     = style.fontSize || DEFAULT_TEXT_STYLE.fontSize}
    {@const boxWidth = (resizeState?.id === id ? resizeLiveW : null) ?? boxWidthOf(selector)}
    {@const inputW = boxWidth != null
      ? boxWidth * viewportScale
      : Math.max(...(editingText || 'Type...').split('\n').map(l => measureTextWidth(l, fs, style))) + 2}
    {@const lineCount = boxWidth != null
      ? wrapText(editingText || 'Type...', inputW, fs, style).length
      : (editingText.split('\n').length || 1)}

    <TextToolbar
      style={style}
      x={pos.left}
      y={pos.top}
      on:change={(e) => applyStyleChange(id, e.detail)}
      on:delete={() => deleteAnnotation(id)} />

    <textarea
      bind:this={inputEl}
      bind:value={editingText}
      class="a9s-tools-text-input"
      style={inputStyle(style, pos, inputW, lineCount)}
      placeholder="Type..."
      wrap="soft"
      rows="1"
      spellcheck="false"
      on:keydown={onInputKeyDown}
      on:blur={commitEdit} />
  {/if}
{/each}

<style>
  .a9s-tools-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
  }

  .a9s-tools-text-input {
    position: absolute;
    padding: 0;
    border: none;
    outline: none;
    background: transparent;
    font-family: sans-serif;
    color: #000;
    pointer-events: all;
    z-index: 1000;
    box-sizing: border-box;
    resize: none;
    overflow: hidden;
    white-space: pre-wrap;
    overflow-wrap: break-word;
  }

  /* ── Text annotation hit area / handles ─────────────────────────────── */

  .a9s-tools-text-hit {
    fill: transparent;
    stroke: transparent;
    stroke-width: 1.5;
    stroke-dasharray: 5 3;
    transition: stroke 0.12s ease, fill 0.12s ease;
  }

  g[data-annotation-type='TEXT']:hover .a9s-tools-text-hit {
    stroke: rgba(59, 130, 246, 0.8);
    fill: rgba(59, 130, 246, 0.06);
  }

  .a9s-tools-text-anchor:hover {
    stroke-width: 2.5;
  }

  /* ── viewBox region outlines ─────────────────────────────────────────── */
  .a9s-tools-viewbox-rect {
    stroke: rgba(0, 180, 255, 0.35);
    stroke-width: 1.5;
    stroke-dasharray: 6 3;
    /* "marching ants" so idle regions read as interactive guides */
    animation: a9s-viewbox-march 0.6s linear infinite;
    transition: stroke 0.15s ease, stroke-width 0.15s ease;
  }

  .a9s-tools-viewbox-label {
    fill: rgba(0, 180, 255, 0.7);
    pointer-events: none;
    user-select: none;
    transition: fill 0.15s ease;
  }

  /* Active = cursor inside this region: solid, brighter, thicker, glowing. */
  .a9s-tools-viewbox.is-active .a9s-tools-viewbox-rect {
    stroke: #00b4ff;
    stroke-width: 3;
    stroke-dasharray: none;
    animation: a9s-viewbox-pulse 1.1s ease-in-out infinite;
  }

  .a9s-tools-viewbox.is-active .a9s-tools-viewbox-label {
    fill: #00b4ff;
  }

  @keyframes a9s-viewbox-march {
    to {
      stroke-dashoffset: -9;
    }
  }

  @keyframes a9s-viewbox-pulse {
    0%,
    100% {
      opacity: 0.85;
    }
    50% {
      opacity: 1;
    }
  }

  @media (prefers-reduced-motion: reduce) {
    .a9s-tools-viewbox-rect,
    .a9s-tools-viewbox.is-active .a9s-tools-viewbox-rect {
      animation: none;
    }
  }
</style>
