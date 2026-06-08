import { Annotation, ImageAnnotation, ImageAnnotator } from '@annotorious/annotorious';
import { OpenSeadragonAnnotator } from '@annotorious/openseadragon';
import { default as AnnotationOverlay } from './AnnotationOverlay.svelte';
/**
 * Mounts the supplementary overlay (arrowheads, distance labels, text content)
 * as a sibling SVG inside the annotator's container element. Only the plain
 * ImageAnnotator exposes a DOM `element` to mount into — OpenSeadragon renders
 * through its own canvas/viewport and would need a dedicated integration, which
 * isn't in use here, so we no-op for it rather than guess at one.
 */
export declare const mountOverlay: <I extends Annotation = ImageAnnotation, E extends unknown = ImageAnnotation>(anno: ImageAnnotator<I, E> | OpenSeadragonAnnotator<I, E>) => AnnotationOverlay<{
    anno: ImageAnnotator<I, E>;
}, any, any> | undefined;
