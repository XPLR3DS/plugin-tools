<script lang="ts">
  import { onMount, onDestroy, tick } from 'svelte';
  import type { ImageAnnotator, ImageAnnotation, Shape, PolylinePoint } from '@annotorious/annotorious';
  import TextToolbar from '../text/TextToolbar.svelte';
  import { type TextStyle, DEFAULT_TEXT_STYLE } from '../text/textStyle';

  /**
   * Supplementary overlay for arrow/distance/text tool annotations.
   *
   * Arrow and distance are rendered inside the SVG (same image-pixel coordinate
   * space as the native annotation layer, via matching viewBox).
   *
   * Text annotations are rendered as absolutely-positioned HTML elements so they
   * stay in screen-pixel space — this avoids the scaling mismatch that occurs
   * when putting editable content inside a scaled SVG viewBox.
   */

  /** Props **/
  export let anno: ImageAnnotator<any, any>;

  type ToolShape = Shape & {
    properties?: {
      toolType?: string;
      textStyle?: Partial<TextStyle>;
    };
  };

  let img: HTMLImageElement | null = null;
  let viewBox = '0 0 1 1';
  let viewportScale = 1;
  let resizeObserver: ResizeObserver | undefined;

  // Text editing state
  let editingId: string | null = null;
  let editingText = '';
  let editingStyle: TextStyle = { ...DEFAULT_TEXT_STYLE };
  let textareaEl: HTMLTextAreaElement | undefined;
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

  // Convert image-pixel rect to screen-pixel rect (relative to anno.element)
  const toScreenRect = (selector: ToolShape) => {
    const g = selector.geometry as unknown as { x: number, y: number, w: number, h: number };
    return {
      x: g.x * viewportScale,
      y: g.y * viewportScale,
      w: g.w * viewportScale,
      h: g.h * viewportScale,
    };
  };

  const getStyle = (selector: ToolShape): TextStyle => ({
    ...DEFAULT_TEXT_STYLE,
    ...(selector.properties?.textStyle || {}),
  });

  const updateViewBox = () => {
    if (!img) return;
    const { naturalWidth, naturalHeight } = img;
    if (!naturalWidth || !naturalHeight) return;

    viewBox = `0 0 ${naturalWidth} ${naturalHeight}`;
    viewportScale = img.getBoundingClientRect().width / naturalWidth;
  };

  // Auto-enter text edit mode when a text annotation is created
  const handleCreate = async (annotation: any) => {
    if (annotation.target?.selector?.properties?.toolType !== 'text') return;
    editingId = annotation.id;
    editingText = '';
    editingStyle = getStyle(annotation.target.selector);
    await tick();
    textareaEl?.focus();
  };

  // Enter text edit mode whenever a text annotation becomes selected
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
        textareaEl?.focus();
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

    if (editingId === annotationId) {
      editingStyle = newStyle;
    }
  };

  const deleteAnnotation = (annotationId: string) => {
    if (editingId === annotationId) {
      editingId = null;
      editingText = '';
    }
    anno.removeAnnotation(annotationId);
  };

  const onTextareaKeyDown = (evt: KeyboardEvent) => {
    // Don't let Delete/Backspace bubble to the annotation layer's keyboard handler.
    evt.stopPropagation();
    if (evt.key === 'Escape') {
      editingId = null;
      editingText = '';
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

  // ── SVG helpers ─────────────────────────────────────────────────────────────

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
    const headLength = 12;
    const hx1 = x2 - headLength * Math.cos(angle - Math.PI / 6);
    const hy1 = y2 - headLength * Math.sin(angle - Math.PI / 6);
    const hx2 = x2 - headLength * Math.cos(angle + Math.PI / 6);
    const hy2 = y2 - headLength * Math.sin(angle + Math.PI / 6);
    return `${hx1},${hy1} ${x2},${y2} ${hx2},${hy2}`;
  };

  const textBoxStyle = (style: TextStyle, focused: boolean) => [
    `background: ${style.bgColor !== 'transparent' ? style.bgColor : 'transparent'}`,
    `border-color: ${focused ? 'rgba(80,80,80,0.55)' : 'transparent'}`,
  ].join('; ');

  const textContentStyle = (style: TextStyle) => [
    `font-size: ${style.fontSize}px`,
    style.bold      ? 'font-weight: bold'       : '',
    style.italic    ? 'font-style: italic'       : '',
    style.underline ? 'text-decoration: underline' : '',
  ].filter(Boolean).join('; ');
</script>

<!-- SVG layer: arrowheads and distance labels (image-pixel coordinate space) -->
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
          <g class="a9s-tools-distance-label" transform={`translate(${center[0]}, ${center[1]})`}>
            <rect x="-32" y="-24" width="64" height="18" rx="3" />
            <text x="0" y="-11" text-anchor="middle">{formatLength(points)}</text>
          </g>
        {/if}
      {/if}
    {/each}
  </g>
</svg>

<!-- HTML layer: text annotations (screen-pixel coordinate space) -->
{#each textAnnotations as { id, selector, text } (id)}
  {#if selector}
    {@const r = toScreenRect(selector)}
    {@const focused = editingId === id || selectedIds.includes(id)}
    {@const style = editingId === id ? editingStyle : getStyle(selector)}

    <!-- Toolbar: floats above the text box when focused -->
    {#if focused}
      <TextToolbar
        style={style}
        x={r.x}
        y={r.y}
        on:change={(e) => applyStyleChange(id, e.detail)}
        on:delete={() => deleteAnnotation(id)} />
    {/if}

    <!-- Text box -->
    <div
      class="a9s-tools-text-box"
      style="{textBoxStyle(style, focused)}; left:{r.x}px; top:{r.y}px; width:{r.w}px; height:{r.h}px;">
      {#if editingId === id}
        <textarea
          bind:this={textareaEl}
          bind:value={editingText}
          class="a9s-tools-text-editor"
          style={textContentStyle(style)}
          on:keydown={onTextareaKeyDown}
          on:blur={commitEdit}
          placeholder="Type here…" />
      {:else}
        <span class="a9s-tools-text-content" style={textContentStyle(style)}>{text || ''}</span>
      {/if}
    </div>
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

  .a9s-tools-distance-label rect {
    fill: rgba(0, 0, 0, 0.65);
  }

  .a9s-tools-distance-label text {
    fill: #fff;
    font-size: 11px;
    font-family: sans-serif;
  }

  .a9s-tools-text-box {
    position: absolute;
    box-sizing: border-box;
    overflow: hidden;
    border: 1.5px dashed transparent;
    border-radius: 2px;
    pointer-events: none;
    transition: border-color 0.1s ease, background 0.1s ease;
  }

  .a9s-tools-text-editor {
    pointer-events: all;
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    padding: 4px 6px;
    background: transparent;
    border: none;
    outline: none;
    resize: none;
    font-family: sans-serif;
    line-height: 1.4;
    color: inherit;
    word-break: break-word;
  }

  .a9s-tools-text-content {
    display: block;
    width: 100%;
    height: 100%;
    padding: 4px 6px;
    box-sizing: border-box;
    font-family: sans-serif;
    line-height: 1.4;
    word-break: break-word;
    white-space: pre-wrap;
    overflow: hidden;
    pointer-events: none;
  }
</style>
