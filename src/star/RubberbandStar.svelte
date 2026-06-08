<script lang="ts">
  import { createEventDispatcher, onMount } from 'svelte';
  import { ShapeType, boundsFromPoints } from '@annotorious/annotorious';
  import type { Polygon, DrawingMode, Transform } from '@annotorious/annotorious';

  const dispatch = createEventDispatcher<{ create: Polygon }>();

  /** Props **/
  export let addEventListener: (type: string, fn: EventListener, capture?: boolean) => void;
  export let drawingMode: DrawingMode;
  export let transform: Transform;
  export let viewportScale: number;

  let center: [number, number] | undefined;
  let outerRadius: number = 0;

  let lastPointerDown: number;

  // Number of points on the star
  const numPoints = 5;
  // Inner radius as a ratio of outer radius (golden ratio for classic star)
  const innerRatio = 0.382;

  const calculateStarPoints = (cx: number, cy: number, outerR: number, innerR: number): [number, number][] => {
    const points: [number, number][] = [];
    const angleStep = Math.PI / numPoints;

    for (let i = 0; i < numPoints * 2; i++) {
      const radius = i % 2 === 0 ? outerR : innerR;
      const angle = i * angleStep - Math.PI / 2; // Start from top
      points.push([
        cx + radius * Math.cos(angle),
        cy + radius * Math.sin(angle)
      ]);
    }

    return points;
  };

  const onPointerDown = (event: Event) => {
    const evt = event as PointerEvent;
    lastPointerDown = performance.now();

    if (drawingMode === 'drag') {
      center = transform.elementToImage(evt.offsetX, evt.offsetY);
      outerRadius = 1;
    }
  }

  const onPointerMove = (event: Event) => {
    const evt = event as PointerEvent;

    if (center) {
      const current = transform.elementToImage(evt.offsetX, evt.offsetY);
      outerRadius = Math.sqrt(
        Math.pow(current[0] - center[0], 2) +
        Math.pow(current[1] - center[1], 2)
      );
    }
  }

  const onPointerUp = (event: Event) => {
    const evt = event as PointerEvent;
    const timeDifference = performance.now() - lastPointerDown;

    if (drawingMode === 'click') {
      if (timeDifference > 300) return;

      if (center) {
        stopDrawing();
      } else {
        center = transform.elementToImage(evt.offsetX, evt.offsetY);
        outerRadius = 1;
      }
    } else if (center) {
      if (timeDifference > 300 || outerRadius > 10) {
        evt.stopPropagation();
        stopDrawing();
      } else {
        center = undefined;
        outerRadius = 0;
      }
    }
  }

  const stopDrawing = () => {
    if (outerRadius > 10 && center) {
      const innerRadius = outerRadius * innerRatio;
      const points = calculateStarPoints(center[0], center[1], outerRadius, innerRadius);

      const shape: Polygon = {
        type: ShapeType.POLYGON,
        geometry: {
          bounds: boundsFromPoints(points),
          points: points
        }
      };

      dispatch('create', shape);
    }

    center = undefined;
    outerRadius = 0;
  }

  onMount(() => {
    addEventListener('pointerdown', onPointerDown);
    addEventListener('pointermove', onPointerMove);
    addEventListener('pointerup', onPointerUp, true);
  });

  $: starPoints = center
    ? calculateStarPoints(center[0], center[1], outerRadius, outerRadius * innerRatio)
    : [];

  $: pathString = starPoints.length > 0
    ? `M ${starPoints[0][0]},${starPoints[0][1]}` +
      starPoints.slice(1).map(([x, y]) => ` L ${x},${y}`).join('') + ' Z'
    : '';
</script>

<g class="a9s-annotation a9s-rubberband">
  {#if pathString}
    <path
      class="a9s-outer"
      d={pathString} />

    <path
      class="a9s-inner"
      d={pathString} />
  {/if}
</g>

<style>
  path.a9s-outer {
    fill: rgba(255, 255, 255, 0.25);
    stroke: rgba(0, 0, 0, 0.35);
    stroke-width: 8px;
    vector-effect: non-scaling-stroke;
  }

  path.a9s-inner {
    fill: rgba(255, 255, 255, 0.25);
    stroke: #fff;
    stroke-width: 2px;
    vector-effect: non-scaling-stroke;
  }
</style>
