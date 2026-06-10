import type { Annotation, ImageAnnotation, ImageAnnotator } from '@annotorious/annotorious';
import type { OpenSeadragonAnnotator } from '@annotorious/openseadragon';
import AnnotationOverlay from './AnnotationOverlay.svelte';

export const mountOverlay = <
  I extends Annotation = ImageAnnotation,
  E extends unknown = ImageAnnotation,
>(
  anno: ImageAnnotator<I, E> | OpenSeadragonAnnotator<I, E>
) => {
  if (!('element' in anno))
    return null;

  const overlay = new AnnotationOverlay({
    target: (anno as ImageAnnotator<I, E>).element,
    props: { anno }
  });

  return {
    setStrokeColor(color: string) {
      // $set types are derived from the component's initial props declaration;
      // cast to any to avoid stale tsc inference when props are added.
      (overlay as any).$set({ strokeColor: color });
    },
  };
};
