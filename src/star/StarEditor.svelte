<script lang="ts">
  import { Editor, Handle } from '@annotorious/annotorious/src';
  import { boundsFromPoints, getMaskDimensions } from '@annotorious/annotorious';
  import type { Polygon, Shape, Transform } from '@annotorious/annotorious';

  export let shape: Polygon;
  export let computedStyle: string | undefined;
  export let transform: Transform;
  export let viewportScale: number = 1;
  export let svgEl: SVGSVGElement;

  $: geom = shape.geometry;
  $: points = geom.points as [number, number][];

  // Calculate center and radius from points
  $: center = {
    x: (geom.bounds.minX + geom.bounds.maxX) / 2,
    y: (geom.bounds.minY + geom.bounds.maxY) / 2
  };

  // Get outer points (every other point starting from 0)
  $: outerPoints = points.filter((_, i) => i % 2 === 0);
  $: outerRadius = outerPoints.length > 0
    ? Math.sqrt(
        Math.pow(outerPoints[0][0] - center.x, 2) +
        Math.pow(outerPoints[0][1] - center.y, 2)
      )
    : 0;

  const editor = (polygon: Shape, handle: string, delta: [number, number]) => {
    const geom = polygon.geometry as { bounds: any; points: [number, number][] };
    const [dx, dy] = delta;

    let newPoints: [number, number][];

    if (handle === 'SHAPE') {
      // Move the entire shape
      newPoints = geom.points.map(([x, y]) => [x + dx, y + dy] as [number, number]);
    } else if (handle === 'SCALE') {
      // Scale from center
      const cx = (geom.bounds.minX + geom.bounds.maxX) / 2;
      const cy = (geom.bounds.minY + geom.bounds.maxY) / 2;

      // Get the outer point at the top (first point)
      const topPoint = geom.points[0];
      const currentRadius = Math.sqrt(
        Math.pow(topPoint[0] - cx, 2) + Math.pow(topPoint[1] - cy, 2)
      );

      // Calculate new radius based on drag
      const newTopY = topPoint[1] + dy;
      const newRadius = Math.sqrt(
        Math.pow(topPoint[0] - cx, 2) + Math.pow(newTopY - cy, 2)
      );

      const scale = currentRadius > 0 ? newRadius / currentRadius : 1;

      newPoints = geom.points.map(([x, y]) => [
        cx + (x - cx) * scale,
        cy + (y - cy) * scale
      ] as [number, number]);
    } else {
      newPoints = geom.points;
    }

    return {
      ...polygon,
      geometry: {
        bounds: boundsFromPoints(newPoints),
        points: newPoints
      }
    };
  };

  $: pathString = points.length > 0
    ? `M ${points[0][0]},${points[0][1]}` +
      points.slice(1).map(([x, y]) => ` L ${x},${y}`).join('') + ' Z'
    : '';

  $: mask = getMaskDimensions(geom.bounds, 2 / viewportScale);
  const maskId = `star-mask-${Math.random().toString(36).substring(2, 12)}`;
</script>

<Editor
  shape={shape}
  transform={transform}
  editor={editor}
  svgEl={svgEl}
  on:grab
  on:change
  on:release
  let:grab={grab}>

  <defs>
    <mask id={maskId} class="a9s-star-editor-mask">
      <rect x={mask.x} y={mask.y} width={mask.w} height={mask.h} />
      <path d={pathString} />
    </mask>
  </defs>

  <path
    class="a9s-outer"
    mask={`url(#${maskId})`}
    on:pointerdown={grab('SHAPE')}
    d={pathString} />

  <path
    class="a9s-inner a9s-shape-handle"
    style={computedStyle}
    on:pointerdown={grab('SHAPE')}
    d={pathString} />

  <!-- Top handle for scaling -->
  <Handle
    class="a9s-corner-top"
    on:pointerdown={grab('SCALE')}
    x={points[0]?.[0] ?? center.x}
    y={points[0]?.[1] ?? center.y - outerRadius}
    scale={viewportScale} />

</Editor>

<style>
  mask.a9s-star-editor-mask > rect {
    fill: #fff;
  }

  mask.a9s-star-editor-mask > path {
    fill: #000;
  }
</style>
