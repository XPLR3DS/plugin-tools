import { ImageAnnotator, ImageAnnotation, Annotation } from '@annotorious/annotorious';
import { OpenSeadragonAnnotator } from '@annotorious/openseadragon';
export declare const mountPlugin: <I extends Annotation = ImageAnnotation, E extends unknown = ImageAnnotation>(anno: ImageAnnotator<I, E> | OpenSeadragonAnnotator<I, E>) => {
    setStrokeColor(color: string): void;
};
