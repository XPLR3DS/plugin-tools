<script lang="ts">
  import { Editor, Handle } from '@annotorious/annotorious/src';
  import { boundsFromPoints } from '@annotorious/annotorious';
  import { arrowHeadLength } from '../arrow/arrowGeometry';
  import { DEFAULT_MIN_SCREEN_TOLERANCE } from '../hitArea';
  import type { Line, LineGeometry, Shape, Transform } from '@annotorious/annotorious';

  // Shared editor for ShapeType.LINE — used by both the native 'line' tool and
  // the 'arrow' tool (registerShapeEditor is one-per-ShapeType, and an arrow's
  // geometry is just a Line; the arrowhead itself is drawn by the supplementary
  // overlay layer based on `shape.properties?.toolType === 'arrow'`).
  export let shape: Line;
  export let computedStyle: string | undefined;
  export let transform: Transform;
  export let viewportScale: number = 1;
  export let svgEl: SVGSVGElement;

  $: geom = shape.geometry;

  // For arrows, the editor's lines must stop at the BASE of the arrowhead —
  // using the shared arrowHeadLength helper (identical to the overlay's
  // head) — so the editor outline never pokes out of the head. For plain
  // lines the endpoints are untouched.
  $: lineEnd = (() => {
    const [[x1, y1], [x2, y2]] = geom.points;
    if ((shape as any).properties?.toolType !== 'arrow') return [x2, y2];
    const angle = Math.atan2(y2 - y1, x2 - x1);
    const hl = arrowHeadLength(
      (shape as any).properties?.style?.strokeWidth ?? 2,
      viewportScale,
      Math.hypot(x2 - x1, y2 - y1),
    );
    return [x2 - hl * Math.cos(angle), y2 - hl * Math.sin(angle)];
  })();

  const editor = (line: Shape, handle: string, delta: [number, number]) => {
    const geom = line.geometry as LineGeometry;
    let [[x1, y1], [x2, y2]] = geom.points;

    const [dx, dy] = delta;

    if (handle === 'LINE') {
      x1 += dx;
      x2 += dx;
      y1 += dy;
      y2 += dy;
    } else {
      switch (handle) {
        case 'POINT1': {
          x1 += dx;
          y1 += dy;
          break;
        }

        case 'POINT2': {
          x2 += dx;
          y2 += dy;
          break;
        }
      }
    }

    return {
      ...line,
      geometry: {
        ...line.geometry,
        points: [[x1, y1], [x2, y2]],
        bounds: boundsFromPoints([[x1, y1], [x2, y2]])
      }
    };
  }

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

  <!-- Invisible grab buffer: widens the draggable (move-cursor) area to the
       same screen-space tolerance the click/hover hit test uses (see
       ../hitArea.ts). vector-effect: non-scaling-stroke keeps the width
       constant on screen at any zoom. Covers the FULL line (incl. the
       arrowhead segment the visible editor lines stop short of). -->
  <line
    class="a9s-tools-grab-buffer"
    on:pointerdown={grab('LINE')}
    stroke-width={2 * DEFAULT_MIN_SCREEN_TOLERANCE}
    x1={geom.points[0][0]} y1={geom.points[0][1]}
    x2={geom.points[1][0]} y2={geom.points[1][1]} />

  <line
    class="a9s-outer"
    on:pointerdown={grab('LINE')}
    x1={geom.points[0][0]} y1={geom.points[0][1]} x2={lineEnd[0]} y2={lineEnd[1]} />

  <line
    class="a9s-inner a9s-shape-handle"
    style={computedStyle}
    on:pointerdown={grab('LINE')}
    x1={geom.points[0][0]} y1={geom.points[0][1]} x2={lineEnd[0]} y2={lineEnd[1]} />

  <Handle
    class="a9s-line-point-1"
    on:pointerdown={grab('POINT1')}
    x={geom.points[0][0]} y={geom.points[0][1]}
    scale={viewportScale} />

  <Handle
    class="a9s-line-point-2"
    on:pointerdown={grab('POINT2')}
    x={geom.points[1][0]} y={geom.points[1][1]}
    scale={viewportScale} />
</Editor>

<style>
  line.a9s-tools-grab-buffer {
    fill: none;
    stroke: transparent;
    /* Hit-test the stroke band even though it's unpainted. */
    pointer-events: stroke;
    /* stroke-width is set inline (2x the shared screen tolerance);
       non-scaling-stroke makes it a constant SCREEN width at any zoom. */
    vector-effect: non-scaling-stroke;
    cursor: move;
  }
</style>