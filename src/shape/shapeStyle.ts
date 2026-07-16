/**
 * Per-annotation shape style, stored on `target.selector.properties.style`
 * (same pattern as `properties.textStyle` for text annotations). Fields that
 * are unset fall back to the host app's global drawing style.
 */
export interface ShapeStyle {
  strokeColor?: string;
  strokeWidth?: number;
  fillColor?: string;
  fillOpacity?: number;
}

/** Global defaults, fed in from the host via the mountPlugin controller. */
export interface DefaultShapeStyle {
  strokeColor: string;
  strokeWidth: number;
  fillColor: string;
  fillOpacity: number;
}

export const FALLBACK_DEFAULT_STYLE: DefaultShapeStyle = {
  strokeColor: '#6a6a6a',
  strokeWidth: 2,
  fillColor: 'transparent',
  fillOpacity: 0.25,
};

export const STROKE_COLORS = [
  { value: '#000000', label: 'Black' },
  { value: '#ffffff', label: 'White' },
  { value: '#ff0000', label: 'Red' },
  { value: '#ff9500', label: 'Orange' },
  { value: '#ffff00', label: 'Yellow' },
  { value: '#00ff00', label: 'Green' },
  { value: '#00ffff', label: 'Cyan' },
  { value: '#0066ff', label: 'Blue' },
  { value: '#ff00ff', label: 'Magenta' },
];

export const FILL_COLORS = [
  { value: 'none', label: 'None' },
  ...STROKE_COLORS,
];

export const STROKE_WIDTHS = [1, 2, 3, 5, 8];

export const FILL_OPACITIES = [0.1, 0.25, 0.5, 0.75, 1];
