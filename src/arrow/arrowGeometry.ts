/**
 * Single source of truth for arrowhead sizing, shared by the overlay
 * (placed arrows), the LineEditor (selected state) and the RubberbandArrow
 * (drawing preview) so the head, the shaft base and the editor outline can
 * never disagree.
 *
 * The shaft is rendered with vector-effect:non-scaling-stroke, so its width
 * is in SCREEN pixels at any zoom. The head is therefore also defined in
 * screen pixels — proportional to the stroke width — and converted to image
 * pixels by dividing by the viewport scale. This keeps the head:shaft ratio
 * constant at every zoom level: never swallowed by the stroke when zoomed
 * out, never ballooning away from it when zoomed in.
 */

/** Head length = this many stroke-widths, measured on screen. */
export const ARROW_HEAD_STROKE_RATIO = 4;

/**
 * Arrowhead length in IMAGE pixels.
 *
 * @param strokeWidth stroke width in screen px (non-scaling stroke)
 * @param viewportScale current screen-px-per-image-px scale
 * @param lineLength arrow length in image px (head is capped at half of it)
 */
export const arrowHeadLength = (
  strokeWidth: number,
  viewportScale: number,
  lineLength: number,
): number => {
  const vs = Math.max(viewportScale, 0.001);
  const hl = (ARROW_HEAD_STROKE_RATIO * strokeWidth) / vs;
  return Math.min(hl, lineLength * 0.5);
};
