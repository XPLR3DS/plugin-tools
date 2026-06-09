<script lang="ts">
  import { createEventDispatcher, onMount } from 'svelte';
  import { ShapeType } from '@annotorious/annotorious';
  import type { Rectangle, DrawingMode, Transform } from '@annotorious/annotorious';

  const dispatch = createEventDispatcher<{ create: Rectangle }>();

  export let addEventListener: (type: string, fn: EventListener, capture?: boolean) => void;
  export let drawingMode: DrawingMode;
  export let transform: Transform;
  export let viewportScale: number = 1;

  let lastPointerDown = 0;

  const onPointerDown = (event: Event) => {
    lastPointerDown = performance.now();
  };

  const onPointerUp = (event: Event) => {
    const evt = event as PointerEvent;
    const elapsed = performance.now() - lastPointerDown;

    // Only respond to quick clicks — ignore long presses or accidental drags
    if (elapsed > 400) return;

    const [x, y] = transform.elementToImage(evt.offsetX, evt.offsetY);

    // Dispatch a 1×1 rectangle at the click point; the overlay renders the
    // actual text using the x,y coordinates as the text baseline-left origin.
    const shape = {
      type: ShapeType.RECTANGLE,
      geometry: {
        bounds: { minX: x, minY: y - 1, maxX: x + 1, maxY: y },
        x, y: y - 1, w: 1, h: 1,
      },
      properties: { toolType: 'text' },
    };

    dispatch('create', shape as unknown as Rectangle);
  };

  onMount(() => {
    addEventListener('pointerdown', onPointerDown);
    addEventListener('pointerup', onPointerUp, true);
  });
</script>

<g class="a9s-annotation a9s-rubberband" />
