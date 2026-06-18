<script lang="ts">
  import { createEventDispatcher, onMount } from 'svelte';
  import { ShapeType } from '@annotorious/annotorious';
  import type { Rectangle, DrawingMode, Transform } from '@annotorious/annotorious';
  import { DEFAULT_TEXT_STYLE } from './textStyle';

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
    if (elapsed > 400) return;

    const [x, y] = transform.elementToImage(evt.offsetX, evt.offsetY);

    // geometry.x / geometry.y = text baseline-left (same convention as old TextTool).
    // textPoint() in the overlay reads g.x / g.y directly — no offset needed here.
    const fsImage = DEFAULT_TEXT_STYLE.fontSize / Math.max(viewportScale, 0.01);
    const initW   = fsImage * 20;
    const initH   = fsImage * 1.2;

    const shape = {
      type: ShapeType.RECTANGLE,
      geometry: {
        bounds: { minX: x, minY: y - fsImage, maxX: x + initW, maxY: y + fsImage * 0.2 },
        x, y, w: initW, h: initH,
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
