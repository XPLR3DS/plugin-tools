<script lang="ts">
  import { createEventDispatcher, onMount } from 'svelte';
  import { ShapeType, distance } from '@annotorious/annotorious';
  import type { Rectangle, DrawingMode, Transform } from '@annotorious/annotorious';

  const dispatch = createEventDispatcher<{ create: Rectangle }>();

  /** Props **/
  export let addEventListener: (type: string, fn: EventListener, capture?: boolean) => void;
  export let drawingMode: DrawingMode;
  export let transform: Transform;
  export let viewportScale: number = 1;

  let lastPointerDown: number;

  let origin: [x: number, y: number] | undefined;

  let anchor: [number, number] | undefined;

  let x: number, y: number, w: number, h: number;

  // Default footprint for a click-to-place text box (in image coordinates)
  const DEFAULT_WIDTH = 160;
  const DEFAULT_HEIGHT = 60;

  const onPointerDown = (event: Event) => {
    const evt = event as PointerEvent;

    lastPointerDown = performance.now();

    if (drawingMode === 'drag') {
      origin = transform.elementToImage(evt.offsetX, evt.offsetY);
      anchor = origin;

      x = origin[0];
      y = origin[1];
      w = 1;
      h = 1;
    }
  }

  const onPointerMove = (event: Event) => {
    const evt = event as PointerEvent;

    if (origin) {
      anchor = transform.elementToImage(evt.offsetX, evt.offsetY);

      x = Math.min(anchor[0], origin[0]);
      y = Math.min(anchor[1], origin[1]);
      w = Math.abs(anchor[0] - origin[0]);
      h = Math.abs(anchor[1] - origin[1]);
    }
  }

  const onPointerUp = (event: Event) => {
    const evt = event as PointerEvent;

    const timeDifference = performance.now() - lastPointerDown;

    if (drawingMode === 'click') {
      if (timeDifference > 300)
        return;

      if (origin) {
        stopDrawing();
      } else {
        // Single click - place a default-sized text box centered on the click
        const point = transform.elementToImage(evt.offsetX, evt.offsetY);

        x = point[0] - DEFAULT_WIDTH / 2;
        y = point[1] - DEFAULT_HEIGHT / 2;
        w = DEFAULT_WIDTH;
        h = DEFAULT_HEIGHT;

        createShape();
      }
    } else if (origin) {
      if (timeDifference > 300 || w * h > 100) {
        evt.stopPropagation();
        stopDrawing();
      } else {
        // Too small a drag - place a default-sized text box at the origin instead
        x = origin[0];
        y = origin[1];
        w = DEFAULT_WIDTH;
        h = DEFAULT_HEIGHT;

        createShape();
      }
    }
  }

  const stopDrawing = () => {
    // Require 4x4 pixels minimum
    if (w * h > 15) {
      createShape();
    } else {
      origin = undefined;
      anchor = undefined;
    }
  }

  const createShape = () => {
    // Plain RECTANGLE geometry — `properties.toolType: 'text'` (carried on the
    // selector, i.e. target.selector.properties) lets the unified RectangleEditor
    // and the overlay layer recognise this as a text box rather than a generic
    // rectangle annotation, so the overlay can render/edit the text content
    // (Annotorious's native renderer has no way to paint text on the canvas).
    const shape = {
      type: ShapeType.RECTANGLE,
      geometry: {
        bounds: {
          minX: x,
          minY: y,
          maxX: x + w,
          maxY: y + h
        },
        x, y, w, h
      },
      properties: { toolType: 'text' }
    };

    dispatch('create', shape as unknown as Rectangle);

    origin = undefined;
    anchor = undefined;
  }

  onMount(() => {
    addEventListener('pointerdown', onPointerDown);
    addEventListener('pointermove', onPointerMove);
    addEventListener('pointerup', onPointerUp, true);
  });

  $: dist = origin && anchor ? distance(origin, anchor) : 0;
</script>

<g class="a9s-annotation a9s-rubberband">
  {#if origin && dist > 0}
    <rect
      class="a9s-outer"
      {x} {y} width={w} height={h} />

    <rect
      class="a9s-inner"
      {x} {y} width={w} height={h} />
  {/if}
</g>
