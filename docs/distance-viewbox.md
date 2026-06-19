# Distance tool — drawing-scale "viewBox" → real-world mm

This document captures the **viewBox scale-measurement** feature that lived in the
old React `DistanceTool.jsx` (xplr_webapp `src/components/Markup/plugins/`), so the
same behaviour can be rebuilt here in `@annotorious/plugin-tools` after the markup
tools were migrated out of the host app.

> Terminology: "viewBox" here is **not** the SVG `viewBox` attribute. It is a
> domain concept — a rectangular region of the drawing that carries a drawing
> **scale** (`1:N`). A measurement drawn inside such a region is converted from
> image pixels to real-world millimetres.

## Data shape

Each viewBox (sourced in the host from `markupData.viewBoxes`, exposed via
`ImageContext`):

```ts
type ViewBox = {
  viewBoxId: string;
  // Scale denominator N for a 1:N drawing scale.
  scale: number;
  // Region in NATURAL IMAGE pixel coordinates.
  viewBoxPosition: { x: number; y: number; width: number; height: number };
};
```

## Core maths (verbatim from the old tool)

```js
// Returns the viewBox containing the given point (natural image coords), or null.
const getViewBoxAtPoint = (viewBoxes, x, y) => {
  if (!viewBoxes?.length) return null;
  return (
    viewBoxes.find((vb) => {
      const { x: vx, y: vy, width, height } = vb.viewBoxPosition ?? {};
      return x >= vx && x <= vx + width && y >= vy && y <= vy + height;
    }) ?? null
  );
};

// Pixel distance -> millimetres using the 1:N drawing scale and the image's
// pixels-per-mm (ppmm). A 1:N scale means 1 mm on the sheet represents N mm in
// reality. ppmm comes from image metadata (metadataToPixelsPerMm); it defaults
// to DEFAULT_PIXELS_PER_MM = 96 / 25.4 (a 96-DPI export) until metadata is wired:
//   mm_on_sheet      = pixel_distance / ppmm
//   real_distance_mm = mm_on_sheet * N
const pixelsToMm = (pixels, scale, ppmm = DEFAULT_PIXELS_PER_MM) => {
  if (!scale || scale <= 0) return null;
  if (!ppmm || ppmm <= 0) return null;
  return (pixels / ppmm) * scale;
};

// ppmm is derived from image metadata (DPI). PLACEHOLDER until the real
// metadata contract is wired; the host passes metadata to the plugin via the
// mountPlugin controller's setImageMetadata().
const metadataToPixelsPerMm = (metadata) =>
  metadata?.dpi > 0 ? metadata.dpi / 25.4 : DEFAULT_PIXELS_PER_MM;

// Display format. NOTE the original divides the rounded mm by 10 — i.e. it
// presents the value in centimetres-as-mm. Preserved exactly for parity.
const formatMm = (mm) => `${mm.toFixed(0) / 10}mm`;
```

## Which viewBox a measurement belongs to

The annotation is assigned to the viewBox that contains its **start point**
(`geometry.start`). Both persistence and rendering use the start point.

## Persisted measurement body

On create, when the start point falls inside a viewBox, the old tool attached a
body so downstream UI (the LayerPanel layer name) can show the measurement:

```js
const mm = vb ? pixelsToMm(length, vb.scale) : null;
const measurementBody = mm != null ? [{
  type: 'TextualBody',
  value: formatMm(mm),
  purpose: 'measurement',
  unit: 'mm',
  rawMm: mm,
  viewBoxId: vb.viewBoxId,
  scale: vb.scale,
}] : [];
```

The LayerPanel reads `ann.bodies.find(b => b.purpose === 'measurement')?.value`
and appends it to the layer name, e.g. `Measure 1 (1234mm)`.

## Rendering (old SVG, image-pixel space)

* **Label text**: `mm != null ? formatMm(mm) : formatDistance(distancePx)`.
* **viewBox outlines** were drawn only while the distance tool was active:
  * rect, `fill="none"`, `rx≈2`.
  * inactive: stroke `rgba(0,180,255,0.35)`, dashed `6 3`, width `1.5`.
  * active (cursor inside): stroke `#00b4ff`, solid, width `3`.
  * a scale label `1:N` in the top-left corner of each region.
* The "active" viewBox was tracked on mousemove via `getViewBoxAtPoint`.

(All stroke/label sizes were multiplied by a `scaleFactor` = naturalWidth /
displayWidth to keep constant on-screen size. In the new overlay the equivalent
is dividing by `viewportScale`.)

## Rebuild plan in plugin-tools

1. `src/distance/viewbox.ts` — typed port of `getViewBoxAtPoint`, `pixelsToMm`,
   `formatMm`, plus `measurementBodyFor(...)`. Exported from `src/index.ts` so
   the host can reuse the exact same maths when persisting bodies.
2. `AnnotationOverlay.svelte` — accept `viewBoxes` + `showViewBoxes` props;
   compute mm for the distance label; draw region outlines + `1:N` labels when
   `showViewBoxes` is true.
3. `mountPlugin` controller — add `setViewBoxes()` and `setShowViewBoxes()`.
4. Host (`useAnnotoriousSetup`) — feed `viewBoxes` in, toggle `showViewBoxes`
   when the distance tool is active, and attach the measurement body on create
   using the exported `measurementBodyFor`.
