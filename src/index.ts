export * from './mountPlugin';
// Buffered, screen-scale-aware click/hover hit testing (patchHitArea,
// hitTest, DEFAULT_MIN_SCREEN_TOLERANCE) — exported for host-app tests.
export * from './hitArea';
// Drawing-scale viewBox helpers (getViewBoxAtPoint, pixelsToMm, formatMm,
// measurementBodyFor, and the ViewBox/MeasurementBody types) so the host app
// can reuse the exact same scale maths when persisting measurement bodies.
export * from './distance/viewbox';
// Per-annotation shape style types (stored on target.selector.properties.style)
// so the host app can share the same shape when reading/applying styles.
export * from './shape/shapeStyle';