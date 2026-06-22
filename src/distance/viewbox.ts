// Drawing-scale "viewBox" support for the distance tool.
//
// NOTE: a "viewBox" here is NOT the SVG viewBox attribute. It is a domain
// concept ported from the host app's old React DistanceTool: a rectangular
// region of the drawing that carries a 1:N drawing scale. A measurement whose
// start point falls inside such a region is converted from image pixels to
// real-world millimetres. See docs/distance-viewbox.md for the full rationale.

export interface ViewBoxPosition {
  x: number;
  y: number;
  width: number;
  height: number;
}

export interface ViewBox {
  viewBoxId: string;
  /** Scale denominator N for a 1:N drawing scale. */
  scale: number;
  /** Region in natural image-pixel coordinates. */
  viewBoxPosition: ViewBoxPosition;
}

/** Body attached to a distance annotation that carries its real-world value. */
export interface MeasurementBody {
  type: 'TextualBody';
  value: string;
  purpose: 'measurement';
  unit: 'mm';
  rawMm: number;
  viewBoxId: string;
  scale: number;
  /** Pixels-per-mm used for the conversion (for traceability/recompute). */
  ppmm: number;
}

/**
 * Returns the viewBox (region) containing the given point, in natural image
 * coordinates, or null if the point lies outside every region.
 */
export const getViewBoxAtPoint = (
  viewBoxes: ViewBox[] | undefined | null,
  x: number,
  y: number
): ViewBox | null => {
  if (!viewBoxes?.length) return null;
  return (
    viewBoxes.find((vb) => {
      const { x: vx, y: vy, width, height } = vb.viewBoxPosition ?? ({} as ViewBoxPosition);
      return x >= vx && x <= vx + width && y >= vy && y <= vy + height;
    }) ?? null
  );
};

/**
 * Convert a pixel distance (natural image coords) to millimetres using the 1:N
 * drawing scale. A 1:N scale means 1 mm on the sheet represents N mm in
 * reality. `ppmm` is the image's pixels-per-mm on the sheet (sourced from the
 * host's image metadata, e.g. the PNG `PixelsPerMm` tag), so:
 *   mm_on_sheet      = pixel_distance / ppmm
 *   real_distance_mm = mm_on_sheet * N = (pixel_distance / ppmm) * N
 * Returns null when the scale or ppmm is missing/invalid.
 */
export const pixelsToMm = (
  pixels: number,
  scale: number,
  ppmm: number
): number | null => {
  console.log('ppmm',ppmm)
  console.log('distance calc px/ppmm * scale',(pixels / ppmm) * scale)
  if (!scale || scale <= 0) return null;
  if (!ppmm || ppmm <= 0) return null;
  return (pixels / ppmm) * scale;
};

/**
 * Format a millimetre distance for display.
 *
 * Preserves the exact behaviour of the old React tool, which rounds the mm
 * value then divides by 10 before labelling it "mm". Kept verbatim for parity
 * with previously persisted measurement bodies.
 */
// `Number(mm.toFixed(0)) / 10` reproduces the old JS `mm.toFixed(0) / 10`
// (which relied on implicit string→number coercion), made explicit for TS.
export const formatMm = (mm: number): string =>
  `${Number(mm.toFixed(0)) / 10}mm`;

/**
 * Build the measurement body for a distance annotation given the line's start
 * point (used to pick the viewBox) and its pixel length. Returns an empty array
 * when the start point is not inside any scaled viewBox, matching the host's
 * "bodies" contract (an array that may be empty).
 */
export const measurementBodyFor = (
  viewBoxes: ViewBox[] | undefined | null,
  startX: number,
  startY: number,
  lengthPx: number,
  ppmm: number
): MeasurementBody[] => {
  const vb = getViewBoxAtPoint(viewBoxes, startX, startY);
  if (!vb) return [];
  const mm = pixelsToMm(lengthPx, vb.scale, ppmm);
  if (mm == null) return [];
  return [
    {
      type: 'TextualBody',
      value: formatMm(mm),
      purpose: 'measurement',
      unit: 'mm',
      rawMm: mm,
      viewBoxId: vb.viewBoxId,
      scale: vb.scale,
      ppmm,
    },
  ];
};
