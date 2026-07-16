import type { SvelteComponent } from 'svelte';
import { ShapeType, type ImageAnnotator, type ImageAnnotation, type Annotation } from '@annotorious/annotorious';
import type { OpenSeadragonAnnotator } from '@annotorious/openseadragon';
import { RubberbandArrow } from './arrow';
import { RubberbandDistance } from './distance';
import type { ViewBox } from './distance/viewbox';
import { EllipseEditor, RubberbandEllipse } from './ellipse';
import { LineEditor, RubberbandLine } from './line';
import { mountOverlay } from './overlay';
import { RubberbandPath, PathEditor } from './path';
import { RectangleEditor, RubberbandText } from './text';
import type { DefaultShapeStyle } from './shape/shapeStyle';
import { patchHitArea } from './hitArea';

export const mountPlugin = <
  I extends Annotation = ImageAnnotation,
  E extends unknown = ImageAnnotation,
>(
  anno: ImageAnnotator<I, E> | OpenSeadragonAnnotator<I, E>
) => {
  anno.registerDrawingTool('ellipse', RubberbandEllipse as typeof SvelteComponent);
  anno.registerShapeEditor(ShapeType.ELLIPSE, EllipseEditor as typeof SvelteComponent);

  // LINE is shared by the native 'line' tool and 'arrow' (both produce Line
  // geometry; LineEditor discriminates on `properties.toolType`)
  anno.registerDrawingTool('line', RubberbandLine as typeof SvelteComponent);
  anno.registerDrawingTool('arrow', RubberbandArrow as typeof SvelteComponent);
  anno.registerShapeEditor(ShapeType.LINE, LineEditor as typeof SvelteComponent);

  // POLYLINE is shared by 'path' and 'distance' (PathEditor discriminates on
  // `properties.toolType`)
  anno.registerDrawingTool('path', RubberbandPath as typeof SvelteComponent);
  anno.registerDrawingTool('distance', RubberbandDistance as typeof SvelteComponent);
  anno.registerShapeEditor(ShapeType.POLYLINE, PathEditor as typeof SvelteComponent);

  // RECTANGLE is shared by the native 'rectangle' tool and 'text'. This
  // RectangleEditor supersedes Annotorious's built-in rectangle editor —
  // it replicates native resize/move behaviour and additionally discriminates
  // on `properties.toolType === 'text'`
  anno.registerDrawingTool('text', RubberbandText as typeof SvelteComponent);
  anno.registerShapeEditor(ShapeType.RECTANGLE, RectangleEditor as typeof SvelteComponent);

  // Supplementary overlay — paints arrowheads, distance labels and text
  // content that Annotorious's native renderer cannot draw on its own.
  // Returns a controller so callers can update overlay props (e.g. strokeColor)
  // without resorting to DOM side-channels.
  const overlay = mountOverlay(anno);

  // Replace the stock click/hover hit test with a buffered, screen-scale-
  // aware one, so every shape type gets a constant on-screen clickable
  // margin at any zoom level. See ./hitArea.ts for the full rationale.
  patchHitArea(anno);

  return {
    setStrokeColor(color: string) {
      overlay?.setStrokeColor(color);
    },
    // Provide the drawing-scale viewBoxes so distance measurements can be
    // shown/persisted in real-world mm. See docs/distance-viewbox.md.
    setViewBoxes(viewBoxes: ViewBox[]) {
      overlay?.setViewBoxes(viewBoxes);
    },
    // Toggle the viewBox region outlines + scale labels (enable while the
    // distance tool is active).
    setShowViewBoxes(show: boolean) {
      overlay?.setShowViewBoxes(show);
    },
    // Provide the image's pixels-per-mm (from metadata, e.g. PNG PixelsPerMm)
    // so distance measurements convert to real-world mm. See
    // docs/distance-viewbox.md.
    setPixelsPerMm(ppmm: number | null) {
      overlay?.setPixelsPerMm(ppmm);
    },
    // Host app's global drawing defaults (stroke/fill), shown by the shape
    // toolbar for annotations that have no per-annotation overrides.
    setDefaultStyle(style: DefaultShapeStyle) {
      overlay?.setDefaultStyle(style);
    },
    // Ids of annotations the host has hidden (per-annotation eye toggle or a
    // hidden layer). Arrows, distance labels and text are painted by the
    // overlay, so the host's style-based hiding cannot reach them — feed the
    // hidden set here whenever visibility changes.
    setHiddenIds(ids: string[]) {
      overlay?.setHiddenIds(ids);
    },
  };
}
