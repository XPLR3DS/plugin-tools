import { Polyline, PolylinePoint } from '@annotorious/annotorious';
export declare const calculateTangentDirection: (shape: Polyline, index: number, viewportScale: number) => [number, number];
export declare const getPathMidpoint: (start: PolylinePoint, end: PolylinePoint) => number[];
export declare const togglePolylineCorner: (shape: Polyline, cornerIdx: number, viewportScale: number) => Polyline;
