<script lang="ts">
  import { createEventDispatcher, onMount } from 'svelte';
  import { ShapeType, boundsFromPoints, distance } from '@annotorious/annotorious';
  import type { Polyline, PolylinePoint, DrawingMode, Transform } from '@annotorious/annotorious';

  const dispatch = createEventDispatcher<{ create: Polyline }>();

  /** Props **/
  export let addEventListener: (type: string, fn: EventListener, capture?: boolean) => void;
  export let drawingMode: DrawingMode
  export let transform: Transform;

  // svelte-ignore unused-export-let
  export let viewportScale: number;

  let container: SVGGElement;

  let origin: [x: number, y: number] | undefined;

  let cursor: [number, number] | undefined;

  let x1: number, y1: number, x2: number, y2: number;

  let lastPointerDown: { timeStamp: number, offsetX: number, offsetY: number };

  let lastMoveEvent: PointerEvent | undefined;

  const onPointerDown = (event: Event) => {
    const evt = event as PointerEvent;

    const { timeStamp, offsetX, offsetY } = evt;
    lastPointerDown = { timeStamp, offsetX, offsetY };

    if (drawingMode === 'drag') {
      origin = transform.elementToImage(evt.offsetX, evt.offsetY);
      cursor = origin;

      x1 = origin[0];
      y1 = origin[1];
      x2 = cursor[0];
      y2 = cursor[1];
    }
  }

  const updateShape = (maybeEvent?: Event) => {
    const evt = (maybeEvent as PointerEvent) || lastMoveEvent;

    if (origin) {
      cursor = transform.elementToImage(evt!.offsetX, evt!.offsetY);

      x2 = cursor[0];
      y2 = cursor[1];
    }

    if (maybeEvent)
      lastMoveEvent = maybeEvent as PointerEvent;
  }

  const onPointerUp = (event: Event) => {
    const evt = event as PointerEvent;

    if (drawingMode === 'click') {
      const timeDifference = performance.now() - lastPointerDown.timeStamp;

      const d = distance(
        [lastPointerDown.offsetX, lastPointerDown.offsetY],
        [evt.offsetX, evt.offsetY]);

      if (timeDifference > 300 || d > 15) // Not a single click - ignore
        return;

      if (origin) {
        stopDrawing();
      } else {
        // Start drawing
        origin = transform.elementToImage(evt.offsetX, evt.offsetY);
        cursor = origin;

        x1 = origin[0];
        y1 = origin[1];
        x2 = cursor[0];
        y2 = cursor[1];
      }
    } else if (origin) {
      evt.stopPropagation();
      stopDrawing();
    }
  }

  const stopDrawing = () => {
    // Require 4 pixels minimum
    if (origin && cursor && distance(origin, cursor) > 4) {
      // A 2-point open polyline — same geometry the 'path' tool produces for a
      // straight segment. `properties.toolType` (carried on the selector, i.e.
      // target.selector.properties) lets the unified PathEditor and the overlay
      // layer recognise this as a measurement rather than a freeform path, so
      // the overlay can render the computed-distance label.
      const shape = {
        type: ShapeType.POLYLINE,
        geometry: {
          bounds: boundsFromPoints([origin, cursor]),
          points: [
            { type: 'CORNER', point: origin } as PolylinePoint,
            { type: 'CORNER', point: cursor } as PolylinePoint
          ]
        },
        properties: { toolType: 'distance' }
      };

      dispatch('create', shape as unknown as Polyline);
    }

    origin = undefined;
    cursor = undefined;

    lastMoveEvent = undefined;
  }

  onMount(() => {
    addEventListener('pointerdown', onPointerDown, true);
    addEventListener('pointermove', updateShape);
    addEventListener('pointerup', onPointerUp, true);
  });

</script>

<g
  bind:this={container}
  class="a9s-annotation a9s-rubberband">

  {#if origin && cursor}
    <line
      class="a9s-outer"
      x1={x1} y1={y1} x2={x2} y2={y2} />

    <line
      class="a9s-inner"
      x1={x1} y1={y1} x2={x2} y2={y2} />
  {/if}
</g>
