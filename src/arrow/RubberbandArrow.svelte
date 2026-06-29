<script lang="ts">
  import { createEventDispatcher, onMount } from 'svelte';
  import { ShapeType, boundsFromPoints, distance } from '@annotorious/annotorious';
  import type { Line, DrawingMode, Transform } from '@annotorious/annotorious';

  const dispatch = createEventDispatcher<{ create: Line }>();

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

    // Note that the event itself is ephemeral!
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
      // Note: `properties.toolType` rides along on the selector (target.selector.properties)
      // so the unified LineEditor and overlay layer can distinguish an arrow from a plain line —
      // Annotorious's native Line shape carries no such discriminator of its own.
      const shape = {
        type: ShapeType.LINE,
        geometry: {
          bounds: boundsFromPoints([origin, cursor]),
          points: [origin, cursor]
        },
        properties: { toolType: 'arrow' }
      };

      dispatch('create', shape as unknown as Line);
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

    <!-- Live preview of the arrowhead while drawing -->
    {#if x1 !== x2 || y1 !== y2}
      <polygon
        class="a9s-inner"
        style="fill:currentColor !important; stroke:none !important;"
        points={(() => {
          const angle = Math.atan2(y2 - y1, x2 - x1);
          const headLength = 12;
          const hx1 = x2 - headLength * Math.cos(angle - Math.PI / 6);
          const hy1 = y2 - headLength * Math.sin(angle - Math.PI / 6);
          const hx2 = x2 - headLength * Math.cos(angle + Math.PI / 6);
          const hy2 = y2 - headLength * Math.sin(angle + Math.PI / 6);
          return `${hx1},${hy1} ${x2},${y2} ${hx2},${hy2}`;
        })()} />
    {/if}
  {/if}
</g>
