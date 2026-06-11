<script lang="ts">
  import { onMount, onDestroy, tick } from 'svelte';
  import type { ImageAnnotator, ImageAnnotation, Shape, PolylinePoint } from '@annotorious/annotorious';
  import TextToolbar from '../text/TextToolbar.svelte';
  import { type TextStyle, DEFAULT_TEXT_STYLE } from '../text/textStyle';

  export let anno: ImageAnnotator<any, any>;
  export let strokeColor = '#6a6a6a';

  type ToolShape = Shape & {
    properties?: {
      toolType?: string;
      textStyle?: Partial<TextStyle>;
    };
  };

  let img: HTMLImageElement | null = null;
  let textSvgEl: SVGSVGElement | undefined;
  let viewBox = '0 0 1 1';
  let naturalWidth = 1;
  let viewportScale = 1;
  let resizeObserver: ResizeObserver | undefined;

  // Text editing state
  let editingId: string | null = null;
  let editingText = '';
  let editingStyle: TextStyle = { ...DEFAULT_TEXT_STYLE };
  let inputEl: HTMLInputElement | undefined;
  let selectedIds: string[] = [];

  // Committed text cache: updated immediately in commitEdit so the SVG renders
  // the correct text even before the Annotorious store propagates the update.
  let localTexts: Record<string, string> = {};

  // Drag state for moving text annotations
  let draggingTextId: string | null = null;
  let dragOffset: { x: number; y: number } | null = null;
  let draggingPos: Record<string, { x: number; y: number }> = {};

  // Shared canvas for pixel-perfect text width measurement (matching old TextTool)
  let measureCanvas: HTMLCanvasElement | null = null;
  const measureTextWidth = (text: string, fontSize: number): number => {
    if (!measureCanvas) measureCanvas = document.createElement('canvas');
    const ctx = measureCanvas.getContext('2d')!;
    ctx.font = `${fontSize}px sans-serif`;
    return ctx.measureText(text).width;
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
    u: number;
  };

  type SvgAnnotation =
    | { id: string; toolType: 'arrow'; arrowheadStr: string }
    | DistanceAnnotation;

  $: svgAnnotations = allAnnotations.reduce<SvgAnnotation[]>((acc, a) => {
    const selector = a.target?.selector as ToolShape | undefined;
    const toolType = selector?.properties?.toolType;
    if (!selector) return acc;

    if (toolType === 'arrow') {
      const pts = selector.geometry.points as unknown as [number, number][];
      const [x1, y1] = pts[0];
      const [x2, y2] = pts[1];
      const angle = Math.atan2(y2 - y1, x2 - x1);
      const hl = 25;
      const arrowheadStr = [
        `${x2 - hl * Math.cos(angle - Math.PI / 6)},${y2 - hl * Math.sin(angle - Math.PI / 6)}`,
        `${x2},${y2}`,
        `${x2 - hl * Math.cos(angle + Math.PI / 6)},${y2 - hl * Math.sin(angle + Math.PI / 6)}`,
      ].join(' ');
      acc.push({ id: a.id, toolType: 'arrow', arrowheadStr });

    } else if (toolType === 'distance') {
      const pts = (selector.geometry.points as unknown as PolylinePoint[]).map(p => p.point) as [number, number][];
      const [x1, y1] = pts[0];
      const [x2, y2] = pts[pts.length - 1];
      let total = 0;
      for (let i = 1; i < pts.length; i++) total += Math.hypot(pts[i][0] - pts[i-1][0], pts[i][1] - pts[i-1][1]);
      const lineLen = Math.hypot(x2 - x1, y2 - y1);
      const px = lineLen > 0 ? -(y2 - y1) / lineLen : 0;
      const py = lineLen > 0 ?  (x2 - x1) / lineLen : 1;
      const u = naturalWidth * 0.012;
      acc.push({
        id: a.id, toolType: 'distance',
        linePts: pts.map(p => `${p[0]},${p[1]}`).join(' '),
        x1, y1, x2, y2,
        mx: (x1 + x2) / 2, my: (y1 + y2) / 2,
        px, py, u,
        length: `${Math.round(total)} px`,
      });
    }
    return acc;
  }, []);

  $: textAnnotations = allAnnotations
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

  // geometry.x / geometry.y is the text baseline-left (same convention as old TextTool).
  const textPoint = (selector: ToolShape) => {
    const g = selector.geometry as unknown as { x: number; y: number };
    return { x: g.x, y: g.y };
  };

  // Font size in SVG image-pixel space (= screen font-size / viewportScale)
  const svgFontSize = (style: TextStyle) =>
    (style.fontSize || DEFAULT_TEXT_STYLE.fontSize) / Math.max(viewportScale, 0.001);

  // Screen position of the text baseline-left for the HTML input overlay
  const inputScreenPos = (selector: ToolShape, style: TextStyle) => {
    const { x, y } = textPoint(selector);
    const fs = style.fontSize || DEFAULT_TEXT_STYLE.fontSize;
    return {
      left: x * viewportScale,
      top:  y * viewportScale - fs,
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
    // Text selection is handled by overlay click handlers; only commit if a
    // non-text annotation was selected while we were editing.
    if (!isText && editingId) commitEdit();
  };

  const commitEdit = () => {
    if (!editingId) return;
    const committingId = editingId;
    const committingText = editingText;
    const annotation = allAnnotations.find(a => a.id === committingId) as any;
    if (annotation) {
      const bodies = committingText.trim()
        ? [{ type: 'TextualBody', value: committingText, purpose: 'commenting' }]
        : [];

      // Measure exact text width via canvas (matches old TextTool behaviour)
      const fsImage = (editingStyle.fontSize || DEFAULT_TEXT_STYLE.fontSize) / Math.max(viewportScale, 0.001);
      const textW = measureTextWidth(committingText || 'Type...', fsImage);
      const textH = fsImage * 1.2;
      const anchorGapImg = 8 / Math.max(viewportScale, 0.001);
      const oldG = annotation.target.selector.geometry as any;
      const newGeometry = {
        bounds: {
          minX: oldG.x - anchorGapImg,
          minY: oldG.y - fsImage,
          maxX: oldG.x + textW + anchorGapImg,
          maxY: oldG.y + fsImage * 0.2,
        },
        x: oldG.x, y: oldG.y, w: textW, h: textH,
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

      if (committingText.trim()) {
        localTexts = { ...localTexts, [committingId]: committingText };
      } else {
        const { [committingId]: _removed, ...rest } = localTexts;
        localTexts = rest;
      }
    }
    editingId = null;
    editingText = '';
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
    const imgPos = clientToImage(e.clientX, e.clientY);
    dragOffset = { x: imgPos.x - pt.x, y: imgPos.y - pt.y };
    draggingTextId = id;
  };

  const handleWindowMouseMove = (e: MouseEvent) => {
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
    if (!draggingTextId) return;
    const pos = draggingPos[draggingTextId];
    if (pos) {
      const annotation = allAnnotations.find(a => a.id === draggingTextId) as any;
      if (annotation) {
        const oldG = annotation.target.selector.geometry as any;
        const dx = pos.x - oldG.x;
        const dy = pos.y - oldG.y;
        anno.updateAnnotation({
          ...annotation,
          target: {
            ...annotation.target,
            selector: {
              ...annotation.target.selector,
              geometry: {
                ...oldG,
                x: pos.x, y: pos.y,
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
    if (evt.key === 'Enter' || evt.key === 'Escape') {
      commitEdit();
      anno.cancelSelected();
    }
  };

  // ── Style helpers ────────────────────────────────────────────────────────────

  const svgTextStyle = (style: TextStyle) => [
    style.bold      ? 'font-weight:bold'         : '',
    style.italic    ? 'font-style:italic'         : '',
    style.underline ? 'text-decoration:underline' : '',
  ].filter(Boolean).join(';');

  const inputStyle = (style: TextStyle, pos: { left: number; top: number }, width: number) => [
    `left:${pos.left}px`,
    `top:${pos.top}px`,
    `width:${width}px`,
    `height:${(style.fontSize || DEFAULT_TEXT_STYLE.fontSize) * 1.2}px`,
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
    {#each svgAnnotations as ann (ann.id)}
      {#if ann.toolType === 'arrow'}
        <polyline
          points={ann.arrowheadStr}
          fill="none"
          stroke={strokeColor}
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          vector-effect="non-scaling-stroke" />
      {:else if ann.toolType === 'distance'}
        {@const u = ann.u}
        <g class="a9s-tools-distance">
          <polyline
            points={ann.linePts}
            fill="none"
            stroke={strokeColor}
            stroke-width={u * 0.2}
            stroke-dasharray="{u * 1.2} {u * 0.8}" />
          <line
            x1={ann.x1 - ann.px * u} y1={ann.y1 - ann.py * u}
            x2={ann.x1 + ann.px * u} y2={ann.y1 + ann.py * u}
            stroke={strokeColor}
            stroke-width={u * 0.2} />
          <line
            x1={ann.x2 - ann.px * u} y1={ann.y2 - ann.py * u}
            x2={ann.x2 + ann.px * u} y2={ann.y2 + ann.py * u}
            stroke={strokeColor}
            stroke-width={u * 0.2} />
          <g transform={`translate(${ann.mx}, ${ann.my})`}>
            <rect
              x={-u * 3}   y={u * 0.4}
              width={u * 6} height={u * 1.4}
              rx={u * 0.25}
              fill="rgba(0,0,0,0.65)" />
            <text
              x="0" y={u * 1.1}
              font-size={u}
              font-family="sans-serif"
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

  <!-- Per-annotation background filters (must be in <defs> at SVG top) -->
  <defs>
    {#each textAnnotations as { id, selector }, i (id)}
      {#if selector && editingId !== id}
        {@const style = getStyle(selector)}
        {#if style.bgColor && style.bgColor !== 'transparent'}
          <filter id="a9s-tb-{i}" x="0" y="-5%" width="100%" height="130%">
            <feFlood flood-color={style.bgColor} result="bg"/>
            <feMerge>
              <feMergeNode in="bg"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        {/if}
      {/if}
    {/each}
  </defs>

  {#each textAnnotations as { id, selector, text }, i (id)}
    {#if selector}
      {@const rawPt   = textPoint(selector)}
      {@const pt      = draggingPos[id] ?? rawPt}
      {@const style   = getStyle(selector)}
      {@const fs      = svgFontSize(style)}
      {@const hasBg   = !!(style.bgColor && style.bgColor !== 'transparent')}
      {@const displayText  = localTexts[id] ?? text ?? ''}

      <!-- Text body (hidden while editing — input takes over) -->
      {#if editingId !== id}
        <!-- svelte-ignore a11y-click-events-have-key-events a11y-no-static-element-interactions -->
        <g
          style="pointer-events:auto; cursor:pointer;"
          on:mousedown={(e) => handleTextMouseDown(e, id, rawPt)}
          on:click={() => startEditing(id)}>

          <!-- Background highlight via filter (hugs text, no full-width stretch) -->
          <text
            x={pt.x}
            y={pt.y}
            font-size={fs}
            font-family="sans-serif"
            style={svgTextStyle(style)}
            filter={hasBg ? `url(#a9s-tb-${i})` : null}>
            {displayText}
          </text>
        </g>
      {/if}

      <!-- Selection / editing box — shown when editing OR when Annotorious has
           this annotation selected.  Matches old React TextTool exactly:
           dashed #888 rect + #ff00ba circles at left/right centre edges.       -->
      {#if editingId === id || selectedIds.includes(id)}
        {@const boxText    = editingId === id ? editingText : displayText}
        {@const textW      = measureTextWidth(boxText || 'Type...', fs)}
        {@const textH      = fs * 1.2}
        {@const anchorR    = 5  / Math.max(viewportScale, 0.001)}
        {@const anchorGap  = 8  / Math.max(viewportScale, 0.001)}
        {@const boxX       = pt.x - anchorGap}
        {@const boxY       = pt.y - fs}
        {@const boxW       = textW + anchorGap * 2}
        {@const centerY    = boxY + textH / 2}
        <g style="pointer-events:none;">
          <!-- Dashed selection border -->
          <rect
            x={boxX} y={boxY}
            width={boxW} height={textH}
            fill="none"
            stroke="#888888"
            stroke-width="1"
            stroke-dasharray="3 3"
            vector-effect="non-scaling-stroke" />
          <!-- Invisible drag area covering the whole box -->
          <!-- svelte-ignore a11y-no-static-element-interactions -->
          <rect
            x={boxX} y={boxY}
            width={boxW} height={textH}
            fill="transparent"
            style="pointer-events:fill; cursor:move;"
            on:mousedown={(e) => handleTextMouseDown(e, id, pt)} />
          <!-- Left anchor circle -->
          <!-- svelte-ignore a11y-no-static-element-interactions -->
          <circle
            cx={boxX} cy={centerY} r={anchorR}
            fill="#ff00ba" stroke="white" stroke-width="1"
            vector-effect="non-scaling-stroke"
            style="pointer-events:auto; cursor:ew-resize;"
            on:mousedown={(e) => handleTextMouseDown(e, id, pt)} />
          <!-- Right anchor circle -->
          <!-- svelte-ignore a11y-no-static-element-interactions -->
          <circle
            cx={boxX + boxW} cy={centerY} r={anchorR}
            fill="#ff00ba" stroke="white" stroke-width="1"
            vector-effect="non-scaling-stroke"
            style="pointer-events:auto; cursor:ew-resize;"
            on:mousedown={(e) => handleTextMouseDown(e, id, pt)} />
        </g>
      {/if}
    {/if}
  {/each}
</svg>

<!-- Editing input + toolbar (screen-pixel coordinate space) -->
{#each textAnnotations as { id, selector } (id)}
  {#if selector && editingId === id}
    {@const style  = editingStyle}
    {@const pos    = inputScreenPos(selector, style)}
    {@const fs     = style.fontSize || DEFAULT_TEXT_STYLE.fontSize}
    {@const inputW = measureTextWidth(editingText || 'Type...', fs) + 2}

    <TextToolbar
      style={style}
      x={pos.left}
      y={pos.top}
      on:change={(e) => applyStyleChange(id, e.detail)}
      on:delete={() => deleteAnnotation(id)} />

    <input
      bind:this={inputEl}
      type="text"
      bind:value={editingText}
      class="a9s-tools-text-input"
      style={inputStyle(style, pos, inputW)}
      placeholder="Type..."
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

  .a9s-tools-distance line,
  .a9s-tools-distance polyline { vector-effect: none; }

  .a9s-tools-text-input {
    position: absolute;
    padding: 0;
    border: none;
    outline: none;
    background: transparent;
    font-family: sans-serif;
    color: inherit;
    pointer-events: all;
    z-index: 1000;
    box-sizing: border-box;
  }
</style>
