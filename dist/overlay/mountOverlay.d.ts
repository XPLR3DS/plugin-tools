import { Annotation, ImageAnnotation, ImageAnnotator } from '@annotorious/annotorious';
import { OpenSeadragonAnnotator } from '@annotorious/openseadragon';
export declare const mountOverlay: <I extends Annotation = ImageAnnotation, E extends unknown = ImageAnnotation>(anno: ImageAnnotator<I, E> | OpenSeadragonAnnotator<I, E>) => {
    setStrokeColor(color: string): void;
} | null;
