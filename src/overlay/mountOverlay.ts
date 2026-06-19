import type { Annotation, ImageAnnotation, ImageAnnotator } from '@annotorious/annotorious';
import type { OpenSeadragonAnnotator } from '@annotorious/openseadragon';
import AnnotationOverlay from './AnnotationOverlay.svelte';
import type { ViewBox, ImageMetadata } from '../distance/viewbox';

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
      // Drawing-scale viewBoxes used to convert distance measurements to mm.
    setViewBoxes(viewBoxes: ViewBox[]) {
      (overlay as any).$set({ viewBoxes });
    },
      // Toggle the region outlines + scale labels (host enables this while the
      // distance tool is active).
    setShowViewBoxes(show: boolean) {
      (overlay as any).$set({ showViewBoxes: show });
    },
      // Image metadata used to derive pixels-per-mm for the mm conversion.
    setImageMetadata(metadata: ImageMetadata | null) {
      (overlay as any).$set({ imageMetadata: metadata });
    },
  };
};
