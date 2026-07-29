import type { ImageAnnotation } from '@annotorious/annotorious';

/**
 * Minimum clickable margin around a shape, in SCREEN pixels.
 *
 * Why this exists: Annotorious's click-to-select calls store.getAt(x, y,
 * filter, buffer) with a hardcoded buffer of 2 IMAGE px (10 on touch), and
 * its stock per-shape `intersects()` implementations ignore that buffer
 * entirely for closed shapes (RECTANGLE, ELLIPSE, POLYGON) — they hit-test
 * strictly point-inside. For LINE/POLYLINE the buffer forms the clickable
 * ribbon, so on a large drawing displayed zoomed-out the ribbon shrinks to a
 * fraction of a screen pixel.
 *
 * patchHitArea() below replaces store.getAt with a self-contained hit test
 * that honours a minimum SCREEN-space tolerance for every shape type. It is
 * deliberately instance-level (no imports from @annotorious/annotorious
 * runtime code) because the host app may resolve a different copy of the
 * library than this plugin bundles — module-level patches (e.g. via
 * registerShapeUtil) would then target a dead registry.
 */
export const DEFAULT_MIN_SCREEN_TOLERANCE = 6;

type Pt = [number, number];

const segmentDistance = (x: number, y: number, a: Pt, b: Pt): number => {
  const dx = b[0] - a[0];
  const dy = b[1] - a[1];
  const l2 = dx * dx + dy * dy;
  if (l2 === 0) return Math.hypot(x - a[0], y - a[1]);
  let t = ((x - a[0]) * dx + (y - a[1]) * dy) / l2;
  t = Math.max(0, Math.min(1, t));
  return Math.hypot(x - (a[0] + t * dx), y - (a[1] + t * dy));
};

const pointInPolygon = (pts: Pt[], x: number, y: number): boolean => {
  let inside = false;
  for (let i = 0, j = pts.length - 1; i < pts.length; j = i++) {
    const [xi, yi] = pts[i]!;
    const [xj, yj] = pts[j]!;
    if (yi > y !== yj > y && x < ((xj - xi) * (y - yi)) / (yj - yi) + xi) {
      inside = !inside;
    }
  }
  return inside;
};

const nearAnyEdge = (
  pts: Pt[],
  x: number,
  y: number,
  b: number,
  closed: boolean,
): boolean => {
  const n = closed ? pts.length : pts.length - 1;
  for (let i = 0; i < n; i++) {
    const p1 = pts[i];
    const p2 = pts[(i + 1) % pts.length];
    if (p1 && p2 && segmentDistance(x, y, p1, p2) <= b) return true;
  }
  return false;
};

/** POLYLINE points are {point, inHandle?, outHandle?}; POLYGON/LINE points are bare [x, y]. */
const toPts = (points: unknown[]): Pt[] =>
  (points || []).map((p: any) => (p?.point ?? p) as Pt).filter(Boolean);

/** Buffered point-in-shape test. `b` is the tolerance in image px. */
export const hitTest = (
  selector: any,
  x: number,
  y: number,
  b: number,
): boolean => {
  const g = selector?.geometry;
  if (!g) return false;

  switch (String(selector.type)) {
    case 'RECTANGLE': {
      // Rotation support (Annotorious >= 3.8 stores `rot` in radians).
      let px = x;
      let py = y;
      if (g.rot) {
        const cx = g.x + g.w / 2;
        const cy = g.y + g.h / 2;
        const cos = Math.cos(-g.rot);
        const sin = Math.sin(-g.rot);
        const dx = x - cx;
        const dy = y - cy;
        px = cx + dx * cos - dy * sin;
        py = cy + dx * sin + dy * cos;
      }
      return (
        px >= g.x - b && px <= g.x + g.w + b && py >= g.y - b && py <= g.y + g.h + b
      );
    }
    case 'ELLIPSE': {
      const rx = g.rx + b;
      const ry = g.ry + b;
      const dx = x - g.cx;
      const dy = y - g.cy;
      return (dx * dx) / (rx * rx) + (dy * dy) / (ry * ry) <= 1;
    }
    case 'LINE': {
      const [p1, p2] = g.points as [Pt, Pt];
      return segmentDistance(x, y, p1, p2) <= b;
    }
    case 'POLYLINE': {
      const pts = toPts(g.points);
      if (pts.length < 2) return false;
      if (g.closed && pointInPolygon(pts, x, y)) return true;
      return nearAnyEdge(pts, x, y, b, !!g.closed);
    }
    case 'POLYGON': {
      const pts = toPts(g.points);
      if (pts.length < 3) return false;
      return pointInPolygon(pts, x, y) || nearAnyEdge(pts, x, y, b, true);
    }
    default: {
      // MULTIPOLYGON / unknown: buffered bounds test.
      const { minX, minY, maxX, maxY } = g.bounds || {};
      if (minX === undefined) return false;
      return x >= minX - b && x <= maxX + b && y >= minY - b && y <= maxY + b;
    }
  }
};

/** Shape area, used to prefer the smallest shape when clicks overlap. */
const shapeArea = (selector: any): number => {
  const g = selector?.geometry;
  if (!g) return Number.MAX_SAFE_INTEGER;
  switch (String(selector.type)) {
    case 'RECTANGLE':
      return g.w * g.h;
    case 'ELLIPSE':
      return Math.PI * g.rx * g.ry;
    case 'LINE':
      return 0;
    case 'POLYLINE':
      return g.closed ? polygonArea(toPts(g.points)) : 0;
    case 'POLYGON':
      return polygonArea(toPts(g.points));
    default: {
      const { minX = 0, minY = 0, maxX = 0, maxY = 0 } = g.bounds || {};
      return (maxX - minX) * (maxY - minY);
    }
  }
};

const polygonArea = (pts: Pt[]): number => {
  let area = 0;
  for (let i = 0, j = pts.length - 1; i < pts.length; j = i++) {
    area += (pts[j]![0] + pts[i]![0]) * (pts[j]![1] - pts[i]![1]);
  }
  return Math.abs(area / 2);
};

/**
 * Replaces anno.state.store.getAt (the single funnel for both click-to-select
 * and hover highlighting) with the buffered hit test above. The tolerance is
 * the larger of Annotorious's own buffer and `minScreenTolerance` screen px
 * converted to image px at the current display scale, so the clickable margin
 * stays constant on screen at any zoom level.
 */
export const patchHitArea = (
  anno: any,
  minScreenTolerance: number = DEFAULT_MIN_SCREEN_TOLERANCE,
): void => {
  const store = anno?.state?.store;
  if (
    !store ||
    typeof store.getAt !== 'function' ||
    typeof store.getIntersecting !== 'function'
  ) {
    return;
  }

  const element: HTMLElement | undefined = anno.element;

  const toleranceFor = (buffer: number): number => {
    const img = element?.querySelector('img') as HTMLImageElement | null;
    const scale = img?.naturalWidth
      ? img.getBoundingClientRect().width / img.naturalWidth
      : 1;
    return Math.max(buffer, minScreenTolerance / Math.max(scale, 0.001));
  };

  store.getAt = (
    x: number,
    y: number,
    filter?: (a: ImageAnnotation) => boolean,
    buffer: number = 0,
  ): ImageAnnotation | undefined => {
    const b = toleranceFor(buffer);
    const candidates: ImageAnnotation[] =
      store.getIntersecting(x - b, y - b, 2 * b, 2 * b) || [];
    const hits = candidates
      .filter((a) => hitTest((a?.target as any)?.selector, x, y, b))
      .sort(
        (a, other) =>
          shapeArea((a?.target as any)?.selector) -
          shapeArea((other?.target as any)?.selector),
      );
    return filter ? hits.filter(filter)[0] : hits[0];
  };
};
