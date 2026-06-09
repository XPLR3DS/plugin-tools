<script lang="ts">
  import { onMount, onDestroy, tick } from 'svelte';
  import type { ImageAnnotator, ImageAnnotation, Shape, PolylinePoint } from '@annotorious/annotorious';
  import TextToolbar from '../text/TextToolbar.svelte';
  import { type TextStyle, DEFAULT_TEXT_STYLE } from '../text/textStyle';

  export let anno: ImageAnnotator<any, any>;

  type ToolShape = Shape & {
    properties?: {
      toolType?: string;
      textStyle?: Partial<TextStyle>;
    };
  };

  let img: HTMLImageElement | null = null;
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

  const { store } = anno.state;

  $: allAnnotations = $store as ImageAnnotation[];

  $: svgAnnotations = allAnnotations
    .map(a => ({ id: a.id, selector: a.target?.selector as ToolShape | undefined }))
    .filter(({ selector }) =>
      ['arrow', 'distance'].includes(selector?.properties?.toolType || ''));

  $: textAnnotations = allAnnotations
    .map(a => ({
      id: a.id,
      annotation: a,
      selector: a.target?.selector as ToolShape | undefined,
      text: a.bodies?.[0]?.value as string | undefined,
    }))
    .filter(({ selector }) => selector?.properties?.toolType === 'text');

  const getStyle = (selector: ToolShape): TextStyle => ({
    ...DEFAULT_TEXT_STYLE,
    ...(selector.properties?.textStyle || {}),
  });

  // Text position: x,y from geometry (baseline-left in image pixels)
  const textPoint = (selector: ToolShape) => {
    const g = selector.geometry as unknown as { x: number; y: number };
    return { x: g.x, y: g.y };
  };

  // Font size in SVG coordinate space (image pixels) so it appears consistent on screen
  const svgFontSize = (style: TextStyle) =>
    (style.fontSize || DEFAULT_TEXT_STYLE.fontSize) / viewportScale;

  // Screen position of the text baseline for the editing input
  const inputScreenPos = (selector: ToolShape, style: TextStyle) => {
    const { x, y } = textPoint(selector);
    const fs = style.fontSize || DEFAULT_TEXT_STYLE.fontSize;
    return {
      left: x * viewportScale,
      top: y * viewportScale - fs,   // input top sits one font-size above baseline
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

  const handleSelectionChanged = async (selected: any[]) => {
    selectedIds = selected?.map((s: any) => s.id) || [];

    if (!selected?.length) {
      if (editingId) commitEdit();
      return;
    }

    const sel = selected[0];
    const isText = sel?.target?.selector?.properties?.toolType === 'text';

    if (isText) {
      if (editingId !== sel.id) {
        if (editingId) commitEdit();
        editingId = sel.id;
        editingText = sel.bodies?.[0]?.value || '';
        editingStyle = getStyle(sel.target.selector);
        await tick();
        inputEl?.focus();
      }
    } else if (editingId) {
      commitEdit();
    }
  };

  const commitEdit = () => {
    if (!editingId) return;
    const annotation = allAnnotations.find(a => a.id === editingId) as any;
    if (annotation) {
      const bodies = editingText.trim()
        ? [{ type: 'TextualBody', value: editingText, purpose: 'commenting' }]
        : [];
      anno.updateAnnotation({
        ...annotation,
        bodies,
        target: {
          ...annotation.target,
          selector: {
            ...annotation.target.selector,
            properties: {
              ...annotation.target.selector.properties,
              textStyle: editingStyle,
            },
          },
        },
      });
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
    anno.removeAnnotation(annotationId);
  };

  const onTextInput = (evt: Event) => {
    editingText = (evt.target as HTMLInputElement).value;
  };

  const onInputKeyDown = (evt: KeyboardEvent) => {
    evt.stopPropagation();
    if (evt.key === 'Enter' || evt.key === 'Escape') {
      commitEdit();
      anno.cancelSelected();
    }
  };

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
  });

  onDestroy(() => {
    img?.removeEventListener('load', updateViewBox);
    resizeObserver?.disconnect();
    anno.off('createAnnotation', handleCreate);
    anno.off('selectionChanged', handleSelectionChanged);
  });

  // ── SVG helpers ──────────────────────────────────────────────────────────

  const formatLength = (points: [number, number][]) => {
    let total = 0;
    for (let i = 1; i < points.length; i++) {
      const [x1, y1] = points[i - 1];
      const [x2, y2] = points[i];
      total += Math.hypot(x2 - x1, y2 - y1);
    }
    return `${Math.round(total)} px`;
  };

  const lineGeometry = (selector: ToolShape) =>
    selector.geometry.points as unknown as [number, number][];

  const polylineGeometry = (selector: ToolShape) =>
    (selector.geometry.points as unknown as PolylinePoint[]).map(p => p.point);

  const midpoint = (points: [number, number][]) => [
    (points[0][0] + points[points.length - 1][0]) / 2,
    (points[0][1] + points[points.length - 1][1]) / 2,
  ];

  const arrowheadPoints = (points: [number, number][]) => {
    const [[x1, y1], [x2, y2]] = points;
    const angle = Math.atan2(y2 - y1, x2 - x1);
    const headLength = 12 / viewportScale;
    const hx1 = x2 - headLength * Math.cos(angle - Math.PI / 6);
    const hy1 = y2 - headLength * Math.sin(angle - Math.PI / 6);
    const hx2 = x2 - headLength * Math.cos(angle + Math.PI / 6);
    const hy2 = y2 - headLength * Math.sin(angle + Math.PI / 6);
    return `${hx1},${hy1} ${x2},${y2} ${hx2},${hy2}`;
  };

  const svgTextStyle = (style: TextStyle) => [
    style.bold      ? 'font-weight:bold'         : '',
    style.italic    ? 'font-style:italic'         : '',
    style.underline ? 'text-decoration:underline' : '',
  ].filter(Boolean).join(';');

  const inputStyle = (style: TextStyle, pos: { left: number; top: number }) => [
    `left:${pos.left}px`,
    `top:${pos.top}px`,
    `font-size:${style.fontSize || DEFAULT_TEXT_STYLE.fontSize}px`,
    style.bold      ? 'font-weight:bold'         : '',
    style.italic    ? 'font-style:italic'         : '',
    style.underline ? 'text-decoration:underline' : '',
    style.bgColor && style.bgColor !== 'transparent' ? `background:${style.bgColor}` : '',
  ].filter(Boolean).join(';');
</script>

<!-- Arrow / distance overlay (image-pixel coordinate space) -->
<svg
  class="a9s-tools-overlay"
  viewBox={viewBox}
  preserveAspectRatio="xMinYMin meet">
  <g>
    {#each svgAnnotations as { id, selector } (id)}
      {#if selector}
        {@const toolType = selector.properties?.toolType}
        {#if toolType === 'arrow'}
          {@const points = lineGeometry(selector)}
          <polyline class="a9s-tools-arrowhead" points={arrowheadPoints(points)} />
        {:else if toolType === 'distance'}
          {@const points = polylineGeometry(selector)}
          {@const center = midpoint(points)}
          {@const s = 1 / viewportScale}
          <g class="a9s-tools-distance-label" transform={`translate(${center[0]}, ${center[1]})`}>
            <rect x={-32 * s} y={-24 * s} width={64 * s} height={18 * s} rx={3 * s} />
            <text x="0" y={-11 * s} font-size={11 * s} text-anchor="middle">{formatLength(points)}</text>
          </g>
        {/if}
      {/if}
    {/each}
  </g>
</svg>

<!-- Text annotation overlay (image-pixel coordinate space, matches native SVG viewBox) -->
<svg
  class="a9s-tools-overlay"
  data-annotation-type="TEXT"
  viewBox={viewBox}
  preserveAspectRatio="xMinYMin meet"
  style="pointer-events:none;">
  {#each textAnnotations as { id, selector, text } (id)}
    {#if selector && !(editingId === id)}
      {@const pt = textPoint(selector)}
      {@const style = getStyle(selector)}
      {@const focused = selectedIds.includes(id)}
      <g style="pointer-events:none;">
        <!-- Background rect if a highlight colour is set -->
        {#if style.bgColor && style.bgColor !== 'transparent'}
          <rect
            x={pt.x}
            y={pt.y - svgFontSize(style)}
            width={naturalWidth}
            height={svgFontSize(style) * 1.3}
            fill={style.bgColor}
            style="pointer-events:none;" />
        {/if}

        <!-- Selection indicator -->
        {#if focused}
          <rect
            x={pt.x - 2 / viewportScale}
            y={pt.y - svgFontSize(style) - 2 / viewportScale}
            width={200 / viewportScale}
            height={svgFontSize(style) * 1.3 + 4 / viewportScale}
            fill="none"
            stroke="rgba(80,80,80,0.5)"
            stroke-width={1 / viewportScale}
            stroke-dasharray={`${4 / viewportScale},${3 / viewportScale}`}
            style="pointer-events:none;" />
        {/if}

        <text
          x={pt.x}
          y={pt.y}
          font-size={svgFontSize(style)}
          font-family="sans-serif"
          style={svgTextStyle(style)}
          style:pointer-events="none">
          {text || ''}
        </text>
      </g>
    {/if}
  {/each}
</svg>

<!-- Editing input and toolbar (screen-pixel coordinate space) -->
{#each textAnnotations as { id, selector } (id)}
  {#if selector && editingId === id}
    {@const style = editingStyle}
    {@const pos = inputScreenPos(selector, style)}
    {@const focused = editingId === id}

    <!-- Toolbar floats above the input -->
    {#if focused}
      <TextToolbar
        style={style}
        x={pos.left}
        y={pos.top}
        on:change={(e) => applyStyleChange(id, e.detail)}
        on:delete={() => deleteAnnotation(id)} />
    {/if}

    <input
      bind:this={inputEl}
      type="text"
      value={editingText}
      class="a9s-tools-text-input"
      style={inputStyle(style, pos)}
      placeholder="Type..."
      on:input={onTextInput}
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

  .a9s-tools-arrowhead {
    fill: var(--a9s-tools-arrowhead-color, #1a73e8);
    stroke: var(--a9s-tools-arrowhead-color, #1a73e8);
  }

  .a9s-tools-distance-label rect { fill: rgba(0,0,0,0.65); }
  .a9s-tools-distance-label text { fill: #fff; font-family: sans-serif; }

  .a9s-tools-text-input {
    position: absolute;
    min-width: 4px;
    padding: 0;
    border: none;
    outline: none;
    background: transparent;
    font-family: sans-serif;
    color: inherit;
    pointer-events: all;
    z-index: 1000;
  }
</style>
