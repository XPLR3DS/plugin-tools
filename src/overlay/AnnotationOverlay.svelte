<script lang="ts">
  import { onMount, onDestroy } from 'svelte';
  import type { ImageAnnotator, ImageAnnotation, Shape, PolylinePoint } from '@annotorious/annotorious';

  /**
   * Annotorious has no native way to render arrowheads, measurement labels,
   * or text content (DrawingStyle covers only fill/stroke). This layer paints
   * those extras as a sibling SVG, mirroring the native SVGAnnotationLayer's
   * responsive viewBox so raw image-pixel coordinates line up automatically —
   * no manual transform math needed. It reads live from `anno.state.store`,
   * so it stays in sync during creation, editing and pan/zoom alike.
   */

  /** Props **/
  export let anno: ImageAnnotator<any, any>;

  type ToolShape = Shape & { properties?: { toolType?: string } };

  let img: HTMLImageElement | null = null;
  let viewBox = '0 0 1 1';
  let resizeObserver: ResizeObserver | undefined;

  const { store } = anno.state;

  $: overlayAnnotations = ($store as ImageAnnotation[])
    .map(a => ({
      id: a.id,
      selector: a.target?.selector as ToolShape | undefined,
      body: a.bodies?.[0]
    }))
    .filter(({ selector }) =>
      ['arrow', 'distance', 'text'].includes(selector?.properties?.toolType || ''));

  const updateViewBox = () => {
    if (!img) return;

    const { naturalWidth, naturalHeight } = img;
    if (naturalWidth && naturalHeight)
      viewBox = `0 0 ${naturalWidth} ${naturalHeight}`;
  };

  onMount(() => {
    img = anno.element.querySelector('img');
    if (!img) return;

    if (img.complete)
      updateViewBox();

    img.addEventListener('load', updateViewBox);

    if (window.ResizeObserver) {
      resizeObserver = new ResizeObserver(updateViewBox);
      resizeObserver.observe(img);
    }
  });

  onDestroy(() => {
    img?.removeEventListener('load', updateViewBox);
    resizeObserver?.disconnect();
  });

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

  const rectangleGeometry = (selector: ToolShape) =>
    selector.geometry as unknown as { x: number, y: number, w: number, h: number };

  const midpoint = (points: [number, number][]) => [
    (points[0][0] + points[points.length - 1][0]) / 2,
    (points[0][1] + points[points.length - 1][1]) / 2
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
</script>

<svg
  class="a9s-tools-overlay"
  viewBox={viewBox}
  preserveAspectRatio="xMinYMin meet">
  <g>
    {#each overlayAnnotations as { id, selector, body } (id)}
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
        {:else if toolType === 'text'}
          {@const rect = rectangleGeometry(selector)}
          <foreignObject x={rect.x} y={rect.y} width={rect.w} height={rect.h} class="a9s-tools-textbox">
            <div xmlns="http://www.w3.org/1999/xhtml" class="a9s-tools-textbox-content">
              {body?.value || ''}
            </div>
          </foreignObject>
        {/if}
      {/if}
    {/each}
  </g>
</svg>

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

  .a9s-tools-textbox-content {
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    overflow: hidden;
    padding: 2px 4px;
    font-size: 14px;
    font-family: sans-serif;
    color: inherit;
    word-break: break-word;
    white-space: pre-wrap;
  }
</style>
