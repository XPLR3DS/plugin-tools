import { distance as je, boundsFromPoints as Ie, ShapeType as He, getMaskDimensions as tn, isTouch as Ht, computeSVGPath as Rt, approximateAsPolygon as xe } from "@annotorious/annotorious";
import { SvelteComponent as pe, init as me, safe_not_equal as de, noop as _e, detach as P, insert as M, svg_element as N, attr as s, binding_callbacks as $e, empty as ge, create_slot as Nt, run_all as Me, transition_out as $, transition_in as F, update_slot_base as At, get_all_dirty_from_scope as Dt, get_slot_changes as Yt, listen as Q, assign as kn, exclude_internal_props as En, bubble as oe, toggle_class as Le, append as z, null_to_empty as Re, destroy_component as ie, mount_component as re, create_component as fe, ensure_array_like as we, destroy_each as ze, group_outros as Te, check_outros as Pe, is_function as ne, space as ee, set_style as Se, element as ke, component_subscribe as Xt, update_keyed_each as ln, destroy_block as Sn, outro_and_destroy_block as jt, set_data as Lt, text as It } from "svelte/internal";
import "svelte/internal/disclose-version";
import { createEventDispatcher as Oe, onMount as Ce, tick as We, onDestroy as Bt } from "svelte";
import "@annotorious/core";
import "svelte/store";
function Tn(e) {
  let n, t, l, o = (
    /*x1*/
    (e[3] !== /*x2*/
    e[5] || /*y1*/
    e[4] !== /*y2*/
    e[6]) && Pn(e)
  );
  return {
    c() {
      n = N("line"), t = N("line"), o && o.c(), l = ge(), s(n, "class", "a9s-outer"), s(
        n,
        "x1",
        /*x1*/
        e[3]
      ), s(
        n,
        "y1",
        /*y1*/
        e[4]
      ), s(
        n,
        "x2",
        /*x2*/
        e[5]
      ), s(
        n,
        "y2",
        /*y2*/
        e[6]
      ), s(t, "class", "a9s-inner"), s(
        t,
        "x1",
        /*x1*/
        e[3]
      ), s(
        t,
        "y1",
        /*y1*/
        e[4]
      ), s(
        t,
        "x2",
        /*x2*/
        e[5]
      ), s(
        t,
        "y2",
        /*y2*/
        e[6]
      );
    },
    m(i, r) {
      M(i, n, r), M(i, t, r), o && o.m(i, r), M(i, l, r);
    },
    p(i, r) {
      r & /*x1*/
      8 && s(
        n,
        "x1",
        /*x1*/
        i[3]
      ), r & /*y1*/
      16 && s(
        n,
        "y1",
        /*y1*/
        i[4]
      ), r & /*x2*/
      32 && s(
        n,
        "x2",
        /*x2*/
        i[5]
      ), r & /*y2*/
      64 && s(
        n,
        "y2",
        /*y2*/
        i[6]
      ), r & /*x1*/
      8 && s(
        t,
        "x1",
        /*x1*/
        i[3]
      ), r & /*y1*/
      16 && s(
        t,
        "y1",
        /*y1*/
        i[4]
      ), r & /*x2*/
      32 && s(
        t,
        "x2",
        /*x2*/
        i[5]
      ), r & /*y2*/
      64 && s(
        t,
        "y2",
        /*y2*/
        i[6]
      ), /*x1*/
      i[3] !== /*x2*/
      i[5] || /*y1*/
      i[4] !== /*y2*/
      i[6] ? o ? o.p(i, r) : (o = Pn(i), o.c(), o.m(l.parentNode, l)) : o && (o.d(1), o = null);
    },
    d(i) {
      i && (P(n), P(t), P(l)), o && o.d(i);
    }
  };
}
function Pn(e) {
  let n, t;
  return {
    c() {
      n = N("polyline"), s(n, "class", "a9s-inner"), s(n, "fill", "none"), s(n, "points", t = /*func*/
      e[11]());
    },
    m(l, o) {
      M(l, n, o);
    },
    p(l, o) {
      o & /*y2, y1, x2, x1*/
      120 && t !== (t = /*func*/
      l[11]()) && s(n, "points", t);
    },
    d(l) {
      l && P(n);
    }
  };
}
function Ut(e) {
  let n, t = (
    /*origin*/
    e[1] && /*cursor*/
    e[2] && Tn(e)
  );
  return {
    c() {
      n = N("g"), t && t.c(), s(n, "class", "a9s-annotation a9s-rubberband");
    },
    m(l, o) {
      M(l, n, o), t && t.m(n, null), e[12](n);
    },
    p(l, [o]) {
      /*origin*/
      l[1] && /*cursor*/
      l[2] ? t ? t.p(l, o) : (t = Tn(l), t.c(), t.m(n, null)) : t && (t.d(1), t = null);
    },
    i: _e,
    o: _e,
    d(l) {
      l && P(n), t && t.d(), e[12](null);
    }
  };
}
function qt(e, n, t) {
  const l = Oe();
  let { addEventListener: o } = n, { drawingMode: i } = n, { transform: r } = n, { viewportScale: f } = n, a, c, u, h, p, g, y, m, k;
  const A = (w) => {
    const H = w, { timeStamp: I, offsetX: C, offsetY: j } = H;
    m = { timeStamp: I, offsetX: C, offsetY: j }, i === "drag" && (t(1, c = r.elementToImage(H.offsetX, H.offsetY)), t(2, u = c), t(3, h = c[0]), t(4, p = c[1]), t(5, g = u[0]), t(6, y = u[1]));
  }, S = (w) => {
    const H = w || k;
    c && (t(2, u = r.elementToImage(H.offsetX, H.offsetY)), t(5, g = u[0]), t(6, y = u[1])), w && (k = w);
  }, v = (w) => {
    const H = w;
    if (i === "click") {
      const I = performance.now() - m.timeStamp, C = je([m.offsetX, m.offsetY], [H.offsetX, H.offsetY]);
      if (I > 300 || C > 15) return;
      c ? _() : (t(1, c = r.elementToImage(H.offsetX, H.offsetY)), t(2, u = c), t(3, h = c[0]), t(4, p = c[1]), t(5, g = u[0]), t(6, y = u[1]));
    } else c && (H.stopPropagation(), _());
  }, _ = () => {
    if (c && u && je(c, u) > 4) {
      const w = {
        type: He.LINE,
        geometry: {
          bounds: Ie([c, u]),
          points: [c, u]
        },
        properties: { toolType: "arrow" }
      };
      l("create", w);
    }
    t(1, c = void 0), t(2, u = void 0), k = void 0;
  };
  Ce(() => {
    o("pointerdown", A, !0), o("pointermove", S), o("pointerup", v, !0);
  });
  const d = () => {
    const w = Math.atan2(y - p, g - h), H = 12, I = g - H * Math.cos(w - Math.PI / 6), C = y - H * Math.sin(w - Math.PI / 6), j = g - H * Math.cos(w + Math.PI / 6), T = y - H * Math.sin(w + Math.PI / 6);
    return `${I},${C} ${g},${y} ${j},${T}`;
  };
  function b(w) {
    $e[w ? "unshift" : "push"](() => {
      a = w, t(0, a);
    });
  }
  return e.$$set = (w) => {
    "addEventListener" in w && t(7, o = w.addEventListener), "drawingMode" in w && t(8, i = w.drawingMode), "transform" in w && t(9, r = w.transform), "viewportScale" in w && t(10, f = w.viewportScale);
  }, [
    a,
    c,
    u,
    h,
    p,
    g,
    y,
    o,
    i,
    r,
    f,
    d,
    b
  ];
}
class Gt extends pe {
  constructor(n) {
    super(), me(this, n, qt, Ut, de, {
      addEventListener: 7,
      drawingMode: 8,
      transform: 9,
      viewportScale: 10
    });
  }
}
function Mn(e) {
  let n, t;
  return {
    c() {
      n = N("line"), t = N("line"), s(n, "class", "a9s-outer"), s(
        n,
        "x1",
        /*x1*/
        e[3]
      ), s(
        n,
        "y1",
        /*y1*/
        e[4]
      ), s(
        n,
        "x2",
        /*x2*/
        e[5]
      ), s(
        n,
        "y2",
        /*y2*/
        e[6]
      ), s(t, "class", "a9s-inner"), s(
        t,
        "x1",
        /*x1*/
        e[3]
      ), s(
        t,
        "y1",
        /*y1*/
        e[4]
      ), s(
        t,
        "x2",
        /*x2*/
        e[5]
      ), s(
        t,
        "y2",
        /*y2*/
        e[6]
      );
    },
    m(l, o) {
      M(l, n, o), M(l, t, o);
    },
    p(l, o) {
      o & /*x1*/
      8 && s(
        n,
        "x1",
        /*x1*/
        l[3]
      ), o & /*y1*/
      16 && s(
        n,
        "y1",
        /*y1*/
        l[4]
      ), o & /*x2*/
      32 && s(
        n,
        "x2",
        /*x2*/
        l[5]
      ), o & /*y2*/
      64 && s(
        n,
        "y2",
        /*y2*/
        l[6]
      ), o & /*x1*/
      8 && s(
        t,
        "x1",
        /*x1*/
        l[3]
      ), o & /*y1*/
      16 && s(
        t,
        "y1",
        /*y1*/
        l[4]
      ), o & /*x2*/
      32 && s(
        t,
        "x2",
        /*x2*/
        l[5]
      ), o & /*y2*/
      64 && s(
        t,
        "y2",
        /*y2*/
        l[6]
      );
    },
    d(l) {
      l && (P(n), P(t));
    }
  };
}
function Ft(e) {
  let n, t = (
    /*origin*/
    e[1] && /*cursor*/
    e[2] && Mn(e)
  );
  return {
    c() {
      n = N("g"), t && t.c(), s(n, "class", "a9s-annotation a9s-rubberband");
    },
    m(l, o) {
      M(l, n, o), t && t.m(n, null), e[11](n);
    },
    p(l, [o]) {
      /*origin*/
      l[1] && /*cursor*/
      l[2] ? t ? t.p(l, o) : (t = Mn(l), t.c(), t.m(n, null)) : t && (t.d(1), t = null);
    },
    i: _e,
    o: _e,
    d(l) {
      l && P(n), t && t.d(), e[11](null);
    }
  };
}
function zt(e, n, t) {
  const l = Oe();
  let { addEventListener: o } = n, { drawingMode: i } = n, { transform: r } = n, { viewportScale: f } = n, a, c, u, h, p, g, y, m, k;
  const A = (b) => {
    const w = b, { timeStamp: H, offsetX: I, offsetY: C } = w;
    m = { timeStamp: H, offsetX: I, offsetY: C }, i === "drag" && (t(1, c = r.elementToImage(w.offsetX, w.offsetY)), t(2, u = c), t(3, h = c[0]), t(4, p = c[1]), t(5, g = u[0]), t(6, y = u[1]));
  }, S = (b) => {
    const w = b || k;
    c && (t(2, u = r.elementToImage(w.offsetX, w.offsetY)), t(5, g = u[0]), t(6, y = u[1])), b && (k = b);
  }, v = (b) => {
    const w = b;
    if (i === "click") {
      const H = performance.now() - m.timeStamp, I = je([m.offsetX, m.offsetY], [w.offsetX, w.offsetY]);
      if (H > 300 || I > 15) return;
      c ? _() : (t(1, c = r.elementToImage(w.offsetX, w.offsetY)), t(2, u = c), t(3, h = c[0]), t(4, p = c[1]), t(5, g = u[0]), t(6, y = u[1]));
    } else c && (w.stopPropagation(), _());
  }, _ = () => {
    if (c && u && je(c, u) > 4) {
      const b = {
        type: He.POLYLINE,
        geometry: {
          bounds: Ie([c, u]),
          points: [{ type: "CORNER", point: c }, { type: "CORNER", point: u }]
        },
        properties: { toolType: "distance" }
      };
      l("create", b);
    }
    t(1, c = void 0), t(2, u = void 0), k = void 0;
  };
  Ce(() => {
    o("pointerdown", A, !0), o("pointermove", S), o("pointerup", v, !0);
  });
  function d(b) {
    $e[b ? "unshift" : "push"](() => {
      a = b, t(0, a);
    });
  }
  return e.$$set = (b) => {
    "addEventListener" in b && t(7, o = b.addEventListener), "drawingMode" in b && t(8, i = b.drawingMode), "transform" in b && t(9, r = b.transform), "viewportScale" in b && t(10, f = b.viewportScale);
  }, [
    a,
    c,
    u,
    h,
    p,
    g,
    y,
    o,
    i,
    r,
    f,
    d
  ];
}
class Vt extends pe {
  constructor(n) {
    super(), me(this, n, zt, Ft, de, {
      addEventListener: 7,
      drawingMode: 8,
      transform: 9,
      viewportScale: 10
    });
  }
}
var Ne = /* @__PURE__ */ ((e) => (e.ELLIPSE = "ELLIPSE", e.MULTIPOLYGON = "MULTIPOLYGON", e.POLYGON = "POLYGON", e.POLYLINE = "POLYLINE", e.RECTANGLE = "RECTANGLE", e.LINE = "LINE", e))(Ne || {}), Kt = { exports: {} };
(function(e) {
  (function() {
    function n(f, a) {
      var c = f.x - a.x, u = f.y - a.y;
      return c * c + u * u;
    }
    function t(f, a, c) {
      var u = a.x, h = a.y, p = c.x - u, g = c.y - h;
      if (p !== 0 || g !== 0) {
        var y = ((f.x - u) * p + (f.y - h) * g) / (p * p + g * g);
        y > 1 ? (u = c.x, h = c.y) : y > 0 && (u += p * y, h += g * y);
      }
      return p = f.x - u, g = f.y - h, p * p + g * g;
    }
    function l(f, a) {
      for (var c = f[0], u = [c], h, p = 1, g = f.length; p < g; p++)
        h = f[p], n(h, c) > a && (u.push(h), c = h);
      return c !== h && u.push(h), u;
    }
    function o(f, a, c, u, h) {
      for (var p = u, g, y = a + 1; y < c; y++) {
        var m = t(f[y], f[a], f[c]);
        m > p && (g = y, p = m);
      }
      p > u && (g - a > 1 && o(f, a, g, u, h), h.push(f[g]), c - g > 1 && o(f, g, c, u, h));
    }
    function i(f, a) {
      var c = f.length - 1, u = [f[0]];
      return o(f, 0, c, a, u), u.push(f[c]), u;
    }
    function r(f, a, c) {
      if (f.length <= 2) return f;
      var u = a !== void 0 ? a * a : 1;
      return f = c ? f : l(f, u), f = i(f, u), f;
    }
    e.exports = r, e.exports.default = r;
  })();
})(Kt);
const Ve = (e, n) => n, Be = (e) => {
  let n = 1 / 0, t = 1 / 0, l = -1 / 0, o = -1 / 0;
  return e.forEach(([i, r]) => {
    n = Math.min(n, i), t = Math.min(t, r), l = Math.max(l, i), o = Math.max(o, r);
  }), { minX: n, minY: t, maxX: l, maxY: o };
}, en = (e) => {
  let n = 0, t = e.length - 1;
  for (let l = 0; l < e.length; l++)
    n += (e[t][0] + e[l][0]) * (e[t][1] - e[l][1]), t = l;
  return Math.abs(0.5 * n);
}, nn = (e, n, t) => {
  let l = !1;
  for (let o = 0, i = e.length - 1; o < e.length; i = o++) {
    const r = e[o][0], f = e[o][1], a = e[i][0], c = e[i][1];
    f > t != c > t && n < (a - r) * (t - f) / (c - f) + r && (l = !l);
  }
  return l;
}, Zt = (e, n = !0) => {
  let t = "M ";
  return e.forEach(([l, o], i) => {
    i === 0 ? t += `${l},${o}` : t += ` L ${l},${o}`;
  }), n && (t += " Z"), t;
}, Wt = (e, n) => {
  const t = Math.abs(n[0] - e[0]), l = Math.abs(n[1] - e[1]);
  return Math.sqrt(Math.pow(t, 2) + Math.pow(l, 2));
}, Jt = {
  area: (e) => Math.PI * e.geometry.rx * e.geometry.ry,
  intersects: (e, n, t) => {
    const { cx: l, cy: o, rx: i, ry: r } = e.geometry, f = 0, a = Math.cos(f), c = Math.sin(f), u = n - l, h = t - o, p = a * u + c * h, g = c * u - a * h;
    return p * p / (i * i) + g * g / (r * r) <= 1;
  }
};
Ve(Ne.ELLIPSE, Jt);
const Qt = {
  area: (e) => 0,
  intersects: (e, n, t, l = 2) => {
    const [[o, i], [r, f]] = e.geometry.points, a = Math.abs((f - i) * n - (r - o) * t + r * i - f * o), c = Wt([o, i], [r, f]);
    return a / c <= l;
  }
};
Ve(Ne.LINE, Qt);
const $t = {
  area: (e) => {
    const { polygons: n } = e.geometry;
    return n.reduce((t, l) => {
      const [o, ...i] = l.rings, r = en(o.points), f = i.reduce((a, c) => a + en(c.points), 0);
      return t + r - f;
    }, 0);
  },
  intersects: (e, n, t) => {
    const { polygons: l } = e.geometry;
    for (const o of l) {
      const [i, ...r] = o.rings;
      if (nn(i.points, n, t)) {
        let f = !1;
        for (const a of r)
          if (nn(a.points, n, t)) {
            f = !0;
            break;
          }
        if (!f) return !0;
      }
    }
    return !1;
  }
}, on = (e) => {
  const n = e.reduce((t, l) => [...t, ...l.rings[0].points], []);
  return Be(n);
}, Fe = (e) => e.rings.map((t) => Zt(t.points)).join(" "), xt = (e) => e.polygons.reduce((n, t) => [
  ...n,
  ...t.rings.reduce((l, o) => [...l, ...o.points], [])
], []);
Ve(Ne.MULTIPOLYGON, $t);
const el = {
  area: (e) => {
    const n = e.geometry.points;
    return en(n);
  },
  intersects: (e, n, t) => {
    const l = e.geometry.points;
    return nn(l, n, t);
  }
};
Ve(Ne.POLYGON, el);
const nl = {
  area: (e) => {
    const n = e.geometry;
    if (!n.closed || n.points.length < 3)
      return 0;
    const t = Hn(n.points, n.closed);
    return en(t);
  },
  intersects: (e, n, t, l = 2) => {
    const o = e.geometry;
    if (o.closed) {
      const i = Hn(o.points, o.closed);
      return nn(i, n, t);
    } else
      return tl(o, [n, t], l);
  }
}, Hn = (e, n = !1) => {
  const t = [];
  for (let l = 0; l < e.length; l++) {
    const o = e[l], i = e[(l + 1) % e.length];
    if (t.push(o.point), (l < e.length - 1 || n) && (o.type === "CURVE" || i.type == "CURVE")) {
      const f = Ot(
        o.point,
        o.type === "CURVE" && o.outHandle || o.point,
        i.type === "CURVE" && i.inHandle || i.point,
        i.point,
        10
        // number of approximation segments
      );
      t.push(...f.slice(1));
    }
  }
  return t;
}, Ot = (e, n, t, l, o = 10) => {
  const i = [];
  for (let r = 0; r <= o; r++) {
    const f = r / o, a = Math.pow(1 - f, 3) * e[0] + 3 * Math.pow(1 - f, 2) * f * n[0] + 3 * (1 - f) * Math.pow(f, 2) * t[0] + Math.pow(f, 3) * l[0], c = Math.pow(1 - f, 3) * e[1] + 3 * Math.pow(1 - f, 2) * f * n[1] + 3 * (1 - f) * Math.pow(f, 2) * t[1] + Math.pow(f, 3) * l[1];
    i.push([a, c]);
  }
  return i;
}, tl = (e, n, t) => {
  for (let l = 0; l < e.points.length - 1; l++) {
    const o = e.points[l], i = e.points[l + 1];
    if (o.type === "CURVE" || i.type === "CURVE") {
      const f = Ot(
        o.point,
        o.type === "CURVE" && o.outHandle || o.point,
        i.type === "CURVE" && i.inHandle || i.point,
        i.point,
        20
        // TODO make configurable? Based on scale factor? Length?
      );
      for (let a = 0; a < f.length - 1; a++)
        if (Ln(n, f[a], f[a + 1]) <= t) return !0;
    } else if (Ln(n, o.point, i.point) <= t) return !0;
  }
  return !1;
}, Ln = (e, n, t) => {
  const [l, o] = e, [i, r] = n, [f, a] = t, c = f - i, u = a - r, h = Math.sqrt(c * c + u * u);
  if (h === 0)
    return Math.sqrt((l - i) * (l - i) + (o - r) * (o - r));
  const p = ((l - i) * c + (o - r) * u) / (h * h);
  return p <= 0 ? Math.sqrt((l - i) * (l - i) + (o - r) * (o - r)) : p >= 1 ? Math.sqrt((l - f) * (l - f) + (o - a) * (o - a)) : Math.abs((a - r) * l - (f - i) * o + f * r - a * i) / h;
};
Ve(Ne.POLYLINE, nl);
const ll = {
  area: (e) => e.geometry.w * e.geometry.h,
  intersects: (e, n, t) => n >= e.geometry.x && n <= e.geometry.x + e.geometry.w && t >= e.geometry.y && t <= e.geometry.y + e.geometry.h
};
Ve(Ne.RECTANGLE, ll);
const bn = (e, n = 0) => {
  const { minX: t, minY: l, maxX: o, maxY: i } = e;
  return {
    x: t - n,
    y: l - n,
    w: o - t + 2 * n,
    h: i - l + 2 * n
  };
}, Ue = typeof window > "u" || typeof navigator > "u" ? !1 : "ontouchstart" in window || navigator.maxTouchPoints > 0 || // @ts-ignore
navigator.msMaxTouchPoints > 0, ol = (e) => ({}), In = (e) => ({ grab: (
  /*onGrab*/
  e[0]
) });
function sl(e) {
  let n, t, l, o;
  const i = (
    /*#slots*/
    e[8].default
  ), r = Nt(
    i,
    e,
    /*$$scope*/
    e[7],
    In
  );
  return {
    c() {
      n = N("g"), r && r.c(), s(n, "class", "a9s-annotation selected");
    },
    m(f, a) {
      M(f, n, a), r && r.m(n, null), t = !0, l || (o = [
        Q(
          n,
          "pointerup",
          /*onRelease*/
          e[2]
        ),
        Q(
          n,
          "pointermove",
          /*onPointerMove*/
          e[1]
        )
      ], l = !0);
    },
    p(f, [a]) {
      r && r.p && (!t || a & /*$$scope*/
      128) && At(
        r,
        i,
        f,
        /*$$scope*/
        f[7],
        t ? Yt(
          i,
          /*$$scope*/
          f[7],
          a,
          ol
        ) : Dt(
          /*$$scope*/
          f[7]
        ),
        In
      );
    },
    i(f) {
      t || (F(r, f), t = !0);
    },
    o(f) {
      $(r, f), t = !1;
    },
    d(f) {
      f && P(n), r && r.d(f), l = !1, Me(o);
    }
  };
}
function il(e, n, t) {
  let { $$slots: l = {}, $$scope: o } = n;
  const i = Oe();
  let { shape: r } = n, { editor: f } = n, { transform: a } = n, { svgEl: c } = n, u, h, p;
  const g = (k) => (A) => {
    if (u = k, c) {
      const { left: v, top: _ } = c.getBoundingClientRect(), d = A.clientX - v, b = A.clientY - _;
      h = a.elementToImage(d, b);
    } else {
      const { offsetX: v, offsetY: _ } = A;
      h = a.elementToImage(v, _);
    }
    p = r, A.target.setPointerCapture(A.pointerId), i("grab", A);
  }, y = (k) => {
    if (u) {
      const [A, S] = a.elementToImage(k.offsetX, k.offsetY), v = [A - h[0], S - h[1]];
      t(3, r = f(p, u, v)), i("change", r);
    }
  }, m = (k) => {
    k.target.releasePointerCapture(k.pointerId), u = void 0, p = r, i("release", k);
  };
  return e.$$set = (k) => {
    "shape" in k && t(3, r = k.shape), "editor" in k && t(4, f = k.editor), "transform" in k && t(5, a = k.transform), "svgEl" in k && t(6, c = k.svgEl), "$$scope" in k && t(7, o = k.$$scope);
  }, [
    g,
    y,
    m,
    r,
    f,
    a,
    c,
    o,
    l
  ];
}
class qe extends pe {
  constructor(n) {
    super(), me(this, n, il, sl, de, {
      shape: 3,
      editor: 4,
      transform: 5,
      svgEl: 6
    });
  }
}
function rl(e) {
  let n, t, l, o, i, r, f, a, c = (
    /*selected*/
    e[3] && On(e)
  );
  return {
    c() {
      n = N("g"), t = N("circle"), c && c.c(), o = N("circle"), s(t, "class", "a9s-handle-buffer svelte-qtyc7s"), s(
        t,
        "cx",
        /*x*/
        e[0]
      ), s(
        t,
        "cy",
        /*y*/
        e[1]
      ), s(t, "r", l = /*handleRadius*/
      e[5] + 6 / /*scale*/
      e[2]), s(t, "role", "button"), s(t, "tabindex", "0"), s(o, "class", i = Re(`a9s-handle-dot${/*selected*/
      e[3] ? " selected" : ""}`) + " svelte-qtyc7s"), s(
        o,
        "cx",
        /*x*/
        e[0]
      ), s(
        o,
        "cy",
        /*y*/
        e[1]
      ), s(
        o,
        "r",
        /*handleRadius*/
        e[5]
      ), s(n, "class", r = `a9s-handle ${/*$$props*/
      e[8].class || ""}`.trim());
    },
    m(u, h) {
      M(u, n, h), z(n, t), c && c.m(n, null), z(n, o), f || (a = [
        Q(
          t,
          "dblclick",
          /*dblclick_handler_1*/
          e[12]
        ),
        Q(
          t,
          "pointerenter",
          /*pointerenter_handler*/
          e[13]
        ),
        Q(
          t,
          "pointerleave",
          /*pointerleave_handler*/
          e[14]
        ),
        Q(
          t,
          "pointerdown",
          /*pointerdown_handler_1*/
          e[15]
        ),
        Q(
          t,
          "pointerdown",
          /*onPointerDown*/
          e[6]
        ),
        Q(
          t,
          "pointerup",
          /*pointerup_handler_1*/
          e[16]
        ),
        Q(
          t,
          "pointerup",
          /*onPointerUp*/
          e[7]
        )
      ], f = !0);
    },
    p(u, h) {
      h & /*x*/
      1 && s(
        t,
        "cx",
        /*x*/
        u[0]
      ), h & /*y*/
      2 && s(
        t,
        "cy",
        /*y*/
        u[1]
      ), h & /*handleRadius, scale*/
      36 && l !== (l = /*handleRadius*/
      u[5] + 6 / /*scale*/
      u[2]) && s(t, "r", l), /*selected*/
      u[3] ? c ? c.p(u, h) : (c = On(u), c.c(), c.m(n, o)) : c && (c.d(1), c = null), h & /*selected*/
      8 && i !== (i = Re(`a9s-handle-dot${/*selected*/
      u[3] ? " selected" : ""}`) + " svelte-qtyc7s") && s(o, "class", i), h & /*x*/
      1 && s(
        o,
        "cx",
        /*x*/
        u[0]
      ), h & /*y*/
      2 && s(
        o,
        "cy",
        /*y*/
        u[1]
      ), h & /*handleRadius*/
      32 && s(
        o,
        "r",
        /*handleRadius*/
        u[5]
      ), h & /*$$props*/
      256 && r !== (r = `a9s-handle ${/*$$props*/
      u[8].class || ""}`.trim()) && s(n, "class", r);
    },
    d(u) {
      u && P(n), c && c.d(), f = !1, Me(a);
    }
  };
}
function fl(e) {
  let n, t, l, o, i, r, f, a, c;
  return {
    c() {
      n = N("g"), t = N("circle"), o = N("circle"), r = N("circle"), s(
        t,
        "cx",
        /*x*/
        e[0]
      ), s(
        t,
        "cy",
        /*y*/
        e[1]
      ), s(t, "r", l = /*handleRadius*/
      e[5] * 10), s(t, "class", "a9s-touch-halo"), Le(
        t,
        "touched",
        /*touched*/
        e[4]
      ), s(
        o,
        "cx",
        /*x*/
        e[0]
      ), s(
        o,
        "cy",
        /*y*/
        e[1]
      ), s(o, "r", i = /*handleRadius*/
      e[5] + 10 / /*scale*/
      e[2]), s(o, "class", "a9s-handle-buffer svelte-qtyc7s"), s(o, "role", "button"), s(o, "tabindex", "0"), s(r, "class", "a9s-handle-dot"), s(
        r,
        "cx",
        /*x*/
        e[0]
      ), s(
        r,
        "cy",
        /*y*/
        e[1]
      ), s(r, "r", f = /*handleRadius*/
      e[5] + 2 / /*scale*/
      e[2]), s(n, "class", "a9s-touch-handle");
    },
    m(u, h) {
      M(u, n, h), z(n, t), z(n, o), z(n, r), a || (c = [
        Q(
          o,
          "dblclick",
          /*dblclick_handler*/
          e[9]
        ),
        Q(
          o,
          "pointerdown",
          /*pointerdown_handler*/
          e[10]
        ),
        Q(
          o,
          "pointerdown",
          /*onPointerDown*/
          e[6]
        ),
        Q(
          o,
          "pointerup",
          /*pointerup_handler*/
          e[11]
        ),
        Q(
          o,
          "pointerup",
          /*onPointerUp*/
          e[7]
        )
      ], a = !0);
    },
    p(u, h) {
      h & /*x*/
      1 && s(
        t,
        "cx",
        /*x*/
        u[0]
      ), h & /*y*/
      2 && s(
        t,
        "cy",
        /*y*/
        u[1]
      ), h & /*handleRadius*/
      32 && l !== (l = /*handleRadius*/
      u[5] * 10) && s(t, "r", l), h & /*touched*/
      16 && Le(
        t,
        "touched",
        /*touched*/
        u[4]
      ), h & /*x*/
      1 && s(
        o,
        "cx",
        /*x*/
        u[0]
      ), h & /*y*/
      2 && s(
        o,
        "cy",
        /*y*/
        u[1]
      ), h & /*handleRadius, scale*/
      36 && i !== (i = /*handleRadius*/
      u[5] + 10 / /*scale*/
      u[2]) && s(o, "r", i), h & /*x*/
      1 && s(
        r,
        "cx",
        /*x*/
        u[0]
      ), h & /*y*/
      2 && s(
        r,
        "cy",
        /*y*/
        u[1]
      ), h & /*handleRadius, scale*/
      36 && f !== (f = /*handleRadius*/
      u[5] + 2 / /*scale*/
      u[2]) && s(r, "r", f);
    },
    d(u) {
      u && P(n), a = !1, Me(c);
    }
  };
}
function On(e) {
  let n, t;
  return {
    c() {
      n = N("circle"), s(n, "class", "a9s-handle-selected"), s(
        n,
        "cx",
        /*x*/
        e[0]
      ), s(
        n,
        "cy",
        /*y*/
        e[1]
      ), s(n, "r", t = /*handleRadius*/
      e[5] + 8 / /*scale*/
      e[2]);
    },
    m(l, o) {
      M(l, n, o);
    },
    p(l, o) {
      o & /*x*/
      1 && s(
        n,
        "cx",
        /*x*/
        l[0]
      ), o & /*y*/
      2 && s(
        n,
        "cy",
        /*y*/
        l[1]
      ), o & /*handleRadius, scale*/
      36 && t !== (t = /*handleRadius*/
      l[5] + 8 / /*scale*/
      l[2]) && s(n, "r", t);
    },
    d(l) {
      l && P(n);
    }
  };
}
function al(e) {
  let n;
  function t(i, r) {
    return Ue ? fl : rl;
  }
  let o = t()(e);
  return {
    c() {
      o.c(), n = ge();
    },
    m(i, r) {
      o.m(i, r), M(i, n, r);
    },
    p(i, [r]) {
      o.p(i, r);
    },
    i: _e,
    o: _e,
    d(i) {
      i && P(n), o.d(i);
    }
  };
}
function ul(e, n, t) {
  let l, { x: o } = n, { y: i } = n, { scale: r } = n, { selected: f = void 0 } = n, a = !1;
  const c = (v) => {
    v.pointerType === "touch" && t(4, a = !0);
  }, u = () => t(4, a = !1);
  function h(v) {
    oe.call(this, e, v);
  }
  function p(v) {
    oe.call(this, e, v);
  }
  function g(v) {
    oe.call(this, e, v);
  }
  function y(v) {
    oe.call(this, e, v);
  }
  function m(v) {
    oe.call(this, e, v);
  }
  function k(v) {
    oe.call(this, e, v);
  }
  function A(v) {
    oe.call(this, e, v);
  }
  function S(v) {
    oe.call(this, e, v);
  }
  return e.$$set = (v) => {
    t(8, n = kn(kn({}, n), En(v))), "x" in v && t(0, o = v.x), "y" in v && t(1, i = v.y), "scale" in v && t(2, r = v.scale), "selected" in v && t(3, f = v.selected);
  }, e.$$.update = () => {
    e.$$.dirty & /*scale*/
    4 && t(5, l = 4 / r);
  }, n = En(n), [
    o,
    i,
    r,
    f,
    a,
    l,
    c,
    u,
    n,
    h,
    p,
    g,
    y,
    m,
    k,
    A,
    S
  ];
}
class ye extends pe {
  constructor(n) {
    super(), me(this, n, ul, al, de, { x: 0, y: 1, scale: 2, selected: 3 });
  }
}
function cl(e) {
  let n, t, l, o, i, r, f;
  return {
    c() {
      n = N("g"), t = N("circle"), o = N("circle"), i = N("circle"), s(t, "class", "a9s-polygon-midpoint-buffer svelte-12ykj76"), s(
        t,
        "cx",
        /*x*/
        e[0]
      ), s(
        t,
        "cy",
        /*y*/
        e[1]
      ), s(t, "r", l = 1.75 * /*handleRadius*/
      e[2]), s(o, "class", "a9s-polygon-midpoint-outer svelte-12ykj76"), s(
        o,
        "cx",
        /*x*/
        e[0]
      ), s(
        o,
        "cy",
        /*y*/
        e[1]
      ), s(
        o,
        "r",
        /*handleRadius*/
        e[2]
      ), s(i, "class", "a9s-polygon-midpoint-inner svelte-12ykj76"), s(
        i,
        "cx",
        /*x*/
        e[0]
      ), s(
        i,
        "cy",
        /*y*/
        e[1]
      ), s(
        i,
        "r",
        /*handleRadius*/
        e[2]
      ), s(n, "class", "a9s-polygon-midpoint svelte-12ykj76");
    },
    m(a, c) {
      M(a, n, c), z(n, t), z(n, o), z(n, i), r || (f = [
        Q(
          t,
          "pointerdown",
          /*pointerdown_handler*/
          e[5]
        ),
        Q(
          t,
          "pointerdown",
          /*onPointerDown*/
          e[3]
        )
      ], r = !0);
    },
    p(a, c) {
      c & /*x*/
      1 && s(
        t,
        "cx",
        /*x*/
        a[0]
      ), c & /*y*/
      2 && s(
        t,
        "cy",
        /*y*/
        a[1]
      ), c & /*handleRadius*/
      4 && l !== (l = 1.75 * /*handleRadius*/
      a[2]) && s(t, "r", l), c & /*x*/
      1 && s(
        o,
        "cx",
        /*x*/
        a[0]
      ), c & /*y*/
      2 && s(
        o,
        "cy",
        /*y*/
        a[1]
      ), c & /*handleRadius*/
      4 && s(
        o,
        "r",
        /*handleRadius*/
        a[2]
      ), c & /*x*/
      1 && s(
        i,
        "cx",
        /*x*/
        a[0]
      ), c & /*y*/
      2 && s(
        i,
        "cy",
        /*y*/
        a[1]
      ), c & /*handleRadius*/
      4 && s(
        i,
        "r",
        /*handleRadius*/
        a[2]
      );
    },
    d(a) {
      a && P(n), r = !1, Me(f);
    }
  };
}
function hl(e) {
  let n;
  return {
    c() {
      n = N("circle"), s(
        n,
        "cx",
        /*x*/
        e[0]
      ), s(
        n,
        "cy",
        /*y*/
        e[1]
      ), s(
        n,
        "r",
        /*handleRadius*/
        e[2]
      );
    },
    m(t, l) {
      M(t, n, l);
    },
    p(t, l) {
      l & /*x*/
      1 && s(
        n,
        "cx",
        /*x*/
        t[0]
      ), l & /*y*/
      2 && s(
        n,
        "cy",
        /*y*/
        t[1]
      ), l & /*handleRadius*/
      4 && s(
        n,
        "r",
        /*handleRadius*/
        t[2]
      );
    },
    d(t) {
      t && P(n);
    }
  };
}
function _l(e) {
  let n;
  function t(i, r) {
    return Ue ? hl : cl;
  }
  let o = t()(e);
  return {
    c() {
      o.c(), n = ge();
    },
    m(i, r) {
      o.m(i, r), M(i, n, r);
    },
    p(i, [r]) {
      o.p(i, r);
    },
    i: _e,
    o: _e,
    d(i) {
      i && P(n), o.d(i);
    }
  };
}
function pl(e, n, t) {
  let l, { x: o } = n, { y: i } = n, { scale: r } = n;
  const f = (c) => {
    c.pointerType;
  };
  function a(c) {
    oe.call(this, e, c);
  }
  return e.$$set = (c) => {
    "x" in c && t(0, o = c.x), "y" in c && t(1, i = c.y), "scale" in c && t(4, r = c.scale);
  }, e.$$.update = () => {
    e.$$.dirty & /*scale*/
    16 && t(2, l = 4 / r);
  }, [o, i, l, f, r, a];
}
class vn extends pe {
  constructor(n) {
    super(), me(this, n, pl, _l, de, { x: 0, y: 1, scale: 4 });
  }
}
function sn(e) {
  const n = e.slice(), t = (
    /*midpoints*/
    n[10][
      /*visibleMidpoint*/
      n[6]
    ]
  );
  return n[28] = t.point, n;
}
function Cn(e, n, t) {
  const l = e.slice();
  return l[28] = n[t], l[30] = t, l;
}
function rn(e) {
  const n = e.slice(), t = (
    /*midpoints*/
    n[10][
      /*visibleMidpoint*/
      n[6]
    ]
  );
  return n[28] = t.point, n;
}
function fn(e) {
  const n = e.slice(), t = (
    /*midpoints*/
    n[10][
      /*visibleMidpoint*/
      n[6]
    ]
  );
  return n[28] = t.point, n;
}
function Rn(e) {
  let n, t, l, o;
  return {
    c() {
      n = N("circle"), s(n, "cx", t = /*point*/
      e[28][0]), s(n, "cy", l = /*point*/
      e[28][1]), s(n, "r", o = Je / /*viewportScale*/
      e[3]), s(n, "class", "svelte-1h2slbm");
    },
    m(i, r) {
      M(i, n, r);
    },
    p(i, r) {
      r[0] & /*midpoints, visibleMidpoint*/
      1088 && t !== (t = /*point*/
      i[28][0]) && s(n, "cx", t), r[0] & /*midpoints, visibleMidpoint*/
      1088 && l !== (l = /*point*/
      i[28][1]) && s(n, "cy", l), r[0] & /*viewportScale*/
      8 && o !== (o = Je / /*viewportScale*/
      i[3]) && s(n, "r", o);
    },
    d(i) {
      i && P(n);
    }
  };
}
function Nn(e) {
  let n, t, l, o, i, r, f, a, c, u;
  return {
    c() {
      n = N("mask"), t = N("rect"), f = N("circle"), s(t, "x", l = /*mask*/
      e[9].x), s(t, "y", o = /*mask*/
      e[9].y), s(t, "width", i = /*mask*/
      e[9].w), s(t, "height", r = /*mask*/
      e[9].h), s(t, "class", "svelte-1h2slbm"), s(f, "cx", a = /*point*/
      e[28][0]), s(f, "cy", c = /*point*/
      e[28][1]), s(f, "r", u = Je / /*viewportScale*/
      e[3]), s(f, "class", "svelte-1h2slbm"), s(n, "id", `${/*maskId*/
      e[19]}-inner`), s(n, "class", "a9s-polygon-editor-mask svelte-1h2slbm");
    },
    m(h, p) {
      M(h, n, p), z(n, t), z(n, f);
    },
    p(h, p) {
      p[0] & /*mask*/
      512 && l !== (l = /*mask*/
      h[9].x) && s(t, "x", l), p[0] & /*mask*/
      512 && o !== (o = /*mask*/
      h[9].y) && s(t, "y", o), p[0] & /*mask*/
      512 && i !== (i = /*mask*/
      h[9].w) && s(t, "width", i), p[0] & /*mask*/
      512 && r !== (r = /*mask*/
      h[9].h) && s(t, "height", r), p[0] & /*midpoints, visibleMidpoint*/
      1088 && a !== (a = /*point*/
      h[28][0]) && s(f, "cx", a), p[0] & /*midpoints, visibleMidpoint*/
      1088 && c !== (c = /*point*/
      h[28][1]) && s(f, "cy", c), p[0] & /*viewportScale*/
      8 && u !== (u = Je / /*viewportScale*/
      h[3]) && s(f, "r", u);
    },
    d(h) {
      h && P(n);
    }
  };
}
function An(e) {
  let n, t;
  return n = new ye({
    props: {
      class: "a9s-corner-handle",
      x: (
        /*point*/
        e[28][0]
      ),
      y: (
        /*point*/
        e[28][1]
      ),
      scale: (
        /*viewportScale*/
        e[3]
      ),
      selected: (
        /*selectedCorners*/
        e[8].includes(
          /*idx*/
          e[30]
        )
      )
    }
  }), n.$on(
    "pointerenter",
    /*onEnterHandle*/
    e[11]
  ), n.$on(
    "pointerleave",
    /*onLeaveHandle*/
    e[12]
  ), n.$on(
    "pointerdown",
    /*onHandlePointerDown*/
    e[15]
  ), n.$on("pointerdown", function() {
    ne(
      /*grab*/
      e[27](`HANDLE-${/*idx*/
      e[30]}`)
    ) && e[27](`HANDLE-${/*idx*/
    e[30]}`).apply(this, arguments);
  }), n.$on(
    "pointerup",
    /*onHandlePointerUp*/
    e[16](
      /*idx*/
      e[30]
    )
  ), {
    c() {
      fe(n.$$.fragment);
    },
    m(l, o) {
      re(n, l, o), t = !0;
    },
    p(l, o) {
      e = l;
      const i = {};
      o[0] & /*geom*/
      32 && (i.x = /*point*/
      e[28][0]), o[0] & /*geom*/
      32 && (i.y = /*point*/
      e[28][1]), o[0] & /*viewportScale*/
      8 && (i.scale = /*viewportScale*/
      e[3]), o[0] & /*selectedCorners*/
      256 && (i.selected = /*selectedCorners*/
      e[8].includes(
        /*idx*/
        e[30]
      )), n.$set(i);
    },
    i(l) {
      t || (F(n.$$.fragment, l), t = !0);
    },
    o(l) {
      $(n.$$.fragment, l), t = !1;
    },
    d(l) {
      ie(n, l);
    }
  };
}
function Dn(e) {
  let n, t;
  return n = new vn({
    props: {
      x: (
        /*point*/
        e[28][0]
      ),
      y: (
        /*point*/
        e[28][1]
      ),
      scale: (
        /*viewportScale*/
        e[3]
      )
    }
  }), n.$on("pointerdown", function() {
    ne(
      /*onAddPoint*/
      e[18](
        /*visibleMidpoint*/
        e[6]
      )
    ) && e[18](
      /*visibleMidpoint*/
      e[6]
    ).apply(this, arguments);
  }), {
    c() {
      fe(n.$$.fragment);
    },
    m(l, o) {
      re(n, l, o), t = !0;
    },
    p(l, o) {
      e = l;
      const i = {};
      o[0] & /*midpoints, visibleMidpoint*/
      1088 && (i.x = /*point*/
      e[28][0]), o[0] & /*midpoints, visibleMidpoint*/
      1088 && (i.y = /*point*/
      e[28][1]), o[0] & /*viewportScale*/
      8 && (i.scale = /*viewportScale*/
      e[3]), n.$set(i);
    },
    i(l) {
      t || (F(n.$$.fragment, l), t = !0);
    },
    o(l) {
      $(n.$$.fragment, l), t = !1;
    },
    d(l) {
      ie(n, l);
    }
  };
}
function ml(e) {
  let n, t, l, o, i, r, f, a, c, u, h, p, g, y, m, k, A, S, v, _, d, b = (
    /*visibleMidpoint*/
    e[6] !== void 0 && !/*isHandleHovered*/
    e[7] && Rn(fn(e))
  ), w = (
    /*visibleMidpoint*/
    e[6] !== void 0 && !/*isHandleHovered*/
    e[7] && Nn(rn(e))
  ), H = we(
    /*geom*/
    e[5].points
  ), I = [];
  for (let T = 0; T < H.length; T += 1)
    I[T] = An(Cn(e, H, T));
  const C = (T) => $(I[T], 1, 1, () => {
    I[T] = null;
  });
  let j = (
    /*visibleMidpoint*/
    e[6] !== void 0 && !/*isHandleHovered*/
    e[7] && Dn(sn(e))
  );
  return {
    c() {
      n = N("defs"), t = N("mask"), l = N("rect"), a = N("polygon"), b && b.c(), w && w.c(), u = ee(), h = N("polygon"), g = ee(), y = N("polygon"), k = ee();
      for (let T = 0; T < I.length; T += 1)
        I[T].c();
      A = ee(), j && j.c(), S = ge(), s(l, "x", o = /*mask*/
      e[9].x), s(l, "y", i = /*mask*/
      e[9].y), s(l, "width", r = /*mask*/
      e[9].w), s(l, "height", f = /*mask*/
      e[9].h), s(l, "class", "svelte-1h2slbm"), s(a, "points", c = /*geom*/
      e[5].points.map(Yn).join(" ")), s(a, "class", "svelte-1h2slbm"), s(t, "id", `${/*maskId*/
      e[19]}-outer`), s(t, "class", "a9s-polygon-editor-mask svelte-1h2slbm"), s(h, "class", "a9s-outer"), s(h, "mask", `url(#${/*maskId*/
      e[19]}-outer)`), s(h, "points", p = /*geom*/
      e[5].points.map(Xn).join(" ")), s(y, "class", "a9s-inner a9s-shape-handle"), s(y, "mask", `url(#${/*maskId*/
      e[19]}-inner)`), s(
        y,
        "style",
        /*computedStyle*/
        e[1]
      ), s(y, "points", m = /*geom*/
      e[5].points.map(jn).join(" "));
    },
    m(T, U) {
      M(T, n, U), z(n, t), z(t, l), z(t, a), b && b.m(t, null), w && w.m(n, null), M(T, u, U), M(T, h, U), M(T, g, U), M(T, y, U), M(T, k, U);
      for (let Y = 0; Y < I.length; Y += 1)
        I[Y] && I[Y].m(T, U);
      M(T, A, U), j && j.m(T, U), M(T, S, U), v = !0, _ || (d = [
        Q(
          h,
          "pointerup",
          /*onShapePointerUp*/
          e[14]
        ),
        Q(h, "pointerdown", function() {
          ne(
            /*grab*/
            e[27]("SHAPE")
          ) && e[27]("SHAPE").apply(this, arguments);
        }),
        Q(
          y,
          "pointermove",
          /*onPointerMove*/
          e[13]
        ),
        Q(
          y,
          "pointerup",
          /*onShapePointerUp*/
          e[14]
        ),
        Q(y, "pointerdown", function() {
          ne(
            /*grab*/
            e[27]("SHAPE")
          ) && e[27]("SHAPE").apply(this, arguments);
        })
      ], _ = !0);
    },
    p(T, U) {
      if (e = T, (!v || U[0] & /*mask*/
      512 && o !== (o = /*mask*/
      e[9].x)) && s(l, "x", o), (!v || U[0] & /*mask*/
      512 && i !== (i = /*mask*/
      e[9].y)) && s(l, "y", i), (!v || U[0] & /*mask*/
      512 && r !== (r = /*mask*/
      e[9].w)) && s(l, "width", r), (!v || U[0] & /*mask*/
      512 && f !== (f = /*mask*/
      e[9].h)) && s(l, "height", f), (!v || U[0] & /*geom*/
      32 && c !== (c = /*geom*/
      e[5].points.map(Yn).join(" "))) && s(a, "points", c), /*visibleMidpoint*/
      e[6] !== void 0 && !/*isHandleHovered*/
      e[7] ? b ? b.p(fn(e), U) : (b = Rn(fn(e)), b.c(), b.m(t, null)) : b && (b.d(1), b = null), /*visibleMidpoint*/
      e[6] !== void 0 && !/*isHandleHovered*/
      e[7] ? w ? w.p(rn(e), U) : (w = Nn(rn(e)), w.c(), w.m(n, null)) : w && (w.d(1), w = null), (!v || U[0] & /*geom*/
      32 && p !== (p = /*geom*/
      e[5].points.map(Xn).join(" "))) && s(h, "points", p), (!v || U[0] & /*computedStyle*/
      2) && s(
        y,
        "style",
        /*computedStyle*/
        e[1]
      ), (!v || U[0] & /*geom*/
      32 && m !== (m = /*geom*/
      e[5].points.map(jn).join(" "))) && s(y, "points", m), U[0] & /*geom, viewportScale, selectedCorners, onEnterHandle, onLeaveHandle, onHandlePointerDown, grab, onHandlePointerUp*/
      134322472) {
        H = we(
          /*geom*/
          e[5].points
        );
        let Y;
        for (Y = 0; Y < H.length; Y += 1) {
          const D = Cn(e, H, Y);
          I[Y] ? (I[Y].p(D, U), F(I[Y], 1)) : (I[Y] = An(D), I[Y].c(), F(I[Y], 1), I[Y].m(A.parentNode, A));
        }
        for (Te(), Y = H.length; Y < I.length; Y += 1)
          C(Y);
        Pe();
      }
      /*visibleMidpoint*/
      e[6] !== void 0 && !/*isHandleHovered*/
      e[7] ? j ? (j.p(sn(e), U), U[0] & /*visibleMidpoint, isHandleHovered*/
      192 && F(j, 1)) : (j = Dn(sn(e)), j.c(), F(j, 1), j.m(S.parentNode, S)) : j && (Te(), $(j, 1, 1, () => {
        j = null;
      }), Pe());
    },
    i(T) {
      if (!v) {
        for (let U = 0; U < H.length; U += 1)
          F(I[U]);
        F(j), v = !0;
      }
    },
    o(T) {
      I = I.filter(Boolean);
      for (let U = 0; U < I.length; U += 1)
        $(I[U]);
      $(j), v = !1;
    },
    d(T) {
      T && (P(n), P(u), P(h), P(g), P(y), P(k), P(A), P(S)), b && b.d(), w && w.d(), ze(I, T), j && j.d(T), _ = !1, Me(d);
    }
  };
}
function dl(e) {
  let n, t;
  return n = new qe({
    props: {
      shape: (
        /*shape*/
        e[0]
      ),
      transform: (
        /*transform*/
        e[2]
      ),
      editor: (
        /*editor*/
        e[17]
      ),
      svgEl: (
        /*svgEl*/
        e[4]
      ),
      $$slots: {
        default: [
          ml,
          ({ grab: l }) => ({ 27: l }),
          ({ grab: l }) => [l ? 134217728 : 0]
        ]
      },
      $$scope: { ctx: e }
    }
  }), n.$on(
    "change",
    /*change_handler*/
    e[20]
  ), n.$on(
    "grab",
    /*grab_handler*/
    e[21]
  ), n.$on(
    "release",
    /*release_handler*/
    e[22]
  ), {
    c() {
      fe(n.$$.fragment);
    },
    m(l, o) {
      re(n, l, o), t = !0;
    },
    p(l, o) {
      const i = {};
      o[0] & /*shape*/
      1 && (i.shape = /*shape*/
      l[0]), o[0] & /*transform*/
      4 && (i.transform = /*transform*/
      l[2]), o[0] & /*svgEl*/
      16 && (i.svgEl = /*svgEl*/
      l[4]), o[0] & /*midpoints, visibleMidpoint, viewportScale, isHandleHovered, geom, selectedCorners, grab, computedStyle, mask*/
      134219754 | o[1] & /*$$scope*/
      1 && (i.$$scope = { dirty: o, ctx: l }), n.$set(i);
    },
    i(l) {
      t || (F(n.$$.fragment, l), t = !0);
    },
    o(l) {
      $(n.$$.fragment, l), t = !1;
    },
    d(l) {
      ie(n, l);
    }
  };
}
const gl = 250, wl = 1e3, yl = 12, Je = 4.5, Yn = (e) => e.join(","), Xn = (e) => e.join(","), jn = (e) => e.join(",");
function bl(e, n, t) {
  let l, o, i;
  const r = Oe();
  let { shape: f } = n, { computedStyle: a } = n, { transform: c } = n, { viewportScale: u = 1 } = n, { svgEl: h } = n, p, g = !1, y, m = [];
  const k = () => t(7, g = !0), A = () => t(7, g = !1), S = (Y) => {
    if (m.length > 0 || !o.some((K) => K.visible)) {
      t(6, p = void 0);
      return;
    }
    const [D, V] = c.elementToImage(Y.offsetX, Y.offsetY), L = (K) => Math.pow(K[0] - D, 2) + Math.pow(K[1] - V, 2), B = l.points.reduce((K, x) => L(x) < L(K) ? x : K), W = o.filter((K) => K.visible).reduce((K, x) => L(x.point) < L(K.point) ? x : K), R = Math.pow(wl / u, 2);
    L(B) < R || L(W.point) < R ? t(6, p = o.indexOf(W)) : t(6, p = void 0);
  }, v = () => {
    document.activeElement !== h && h.focus();
  }, _ = () => {
    t(8, m = []), v();
  }, d = (Y) => {
    t(7, g = !0), Y.preventDefault(), Y.stopPropagation(), y = performance.now();
  }, b = (Y) => (D) => {
    if (!y || Ue || performance.now() - y > gl) return;
    const V = m.includes(Y);
    D.metaKey || D.ctrlKey || D.shiftKey ? V ? t(8, m = m.filter((L) => L !== Y)) : t(8, m = [...m, Y]) : V && m.length > 1 ? t(8, m = [Y]) : V ? t(8, m = []) : t(8, m = [Y]), v();
  }, w = (Y, D, V) => {
    v();
    let L;
    const B = Y.geometry;
    m.length > 1 ? L = B.points.map(([R, X], K) => m.includes(K) ? [R + V[0], X + V[1]] : [R, X]) : D === "SHAPE" ? L = B.points.map(([R, X]) => [R + V[0], X + V[1]]) : L = B.points.map(([R, X], K) => D === `HANDLE-${K}` ? [R + V[0], X + V[1]] : [R, X]);
    const W = Be(L);
    return { ...Y, geometry: { points: L, bounds: W } };
  }, H = (Y) => async (D) => {
    D.stopPropagation();
    const V = [
      ...l.points.slice(0, Y + 1),
      o[Y].point,
      ...l.points.slice(Y + 1)
    ], L = Be(V);
    r("change", { ...f, geometry: { points: V, bounds: L } }), await We();
    const B = [...document.querySelectorAll(".a9s-handle")][Y + 1];
    if (B != null && B.firstChild) {
      const W = new PointerEvent(
        "pointerdown",
        {
          bubbles: !0,
          cancelable: !0,
          clientX: D.clientX,
          clientY: D.clientY,
          pointerId: D.pointerId,
          pointerType: D.pointerType,
          isPrimary: D.isPrimary,
          buttons: D.buttons
        }
      );
      B.firstChild.dispatchEvent(W);
    }
  }, I = () => {
    if (l.points.length - m.length < 3) return;
    const Y = l.points.filter((V, L) => !m.includes(L)), D = Be(Y);
    r("change", { ...f, geometry: { points: Y, bounds: D } }), t(8, m = []);
  };
  Ce(() => {
    if (Ue) return;
    const Y = (D) => {
      (D.key === "Delete" || D.key === "Backspace") && (D.preventDefault(), I());
    };
    return h.addEventListener("pointermove", S), h.addEventListener("keydown", Y), () => {
      h.removeEventListener("pointermove", S), h.removeEventListener("keydown", Y);
    };
  });
  const C = `polygon-mask-${Math.random().toString(36).substring(2, 12)}`;
  function j(Y) {
    oe.call(this, e, Y);
  }
  function T(Y) {
    oe.call(this, e, Y);
  }
  function U(Y) {
    oe.call(this, e, Y);
  }
  return e.$$set = (Y) => {
    "shape" in Y && t(0, f = Y.shape), "computedStyle" in Y && t(1, a = Y.computedStyle), "transform" in Y && t(2, c = Y.transform), "viewportScale" in Y && t(3, u = Y.viewportScale), "svgEl" in Y && t(4, h = Y.svgEl);
  }, e.$$.update = () => {
    e.$$.dirty[0] & /*shape*/
    1 && t(5, l = f.geometry), e.$$.dirty[0] & /*geom, viewportScale*/
    40 && t(10, o = Ue ? [] : l.points.map((Y, D) => {
      const V = D === l.points.length - 1 ? l.points[0] : l.points[D + 1], L = (Y[0] + V[0]) / 2, B = (Y[1] + V[1]) / 2, R = Math.sqrt(Math.pow(V[0] - L, 2) + Math.pow(V[1] - B, 2)) > yl / u;
      return { point: [L, B], visible: R };
    })), e.$$.dirty[0] & /*geom, viewportScale*/
    40 && t(9, i = bn(l.bounds, Je / u));
  }, [
    f,
    a,
    c,
    u,
    h,
    l,
    p,
    g,
    m,
    i,
    o,
    k,
    A,
    S,
    _,
    d,
    b,
    w,
    H,
    C,
    j,
    T,
    U
  ];
}
class vl extends pe {
  constructor(n) {
    super(), me(
      this,
      n,
      bl,
      dl,
      de,
      {
        shape: 0,
        computedStyle: 1,
        transform: 2,
        viewportScale: 3,
        svgEl: 4
      },
      null,
      [-1, -1]
    );
  }
}
function kl(e) {
  let n, t, l, o, i, r, f, a, c, u, h, p, g, y, m, k, A, S, v, _, d, b, w, H, I, C, j, T, U, Y, D, V, L, B, W, R, X, K, x, te, E, q, le, J, he, se, ae, ue, be, ce, Ee, ve, Z, Ge, Ke;
  return se = new ye({
    props: {
      class: "a9s-corner-handle-topleft",
      x: (
        /*geom*/
        e[5].x
      ),
      y: (
        /*geom*/
        e[5].y
      ),
      scale: (
        /*viewportScale*/
        e[3]
      )
    }
  }), se.$on("pointerdown", function() {
    ne(
      /*grab*/
      e[12]("TOP_LEFT")
    ) && e[12]("TOP_LEFT").apply(this, arguments);
  }), ue = new ye({
    props: {
      class: "a9s-corner-handle-topright",
      x: (
        /*geom*/
        e[5].x + /*geom*/
        e[5].w
      ),
      y: (
        /*geom*/
        e[5].y
      ),
      scale: (
        /*viewportScale*/
        e[3]
      )
    }
  }), ue.$on("pointerdown", function() {
    ne(
      /*grab*/
      e[12]("TOP_RIGHT")
    ) && e[12]("TOP_RIGHT").apply(this, arguments);
  }), ce = new ye({
    props: {
      class: "a9s-corner-handle-bottomright",
      x: (
        /*geom*/
        e[5].x + /*geom*/
        e[5].w
      ),
      y: (
        /*geom*/
        e[5].y + /*geom*/
        e[5].h
      ),
      scale: (
        /*viewportScale*/
        e[3]
      )
    }
  }), ce.$on("pointerdown", function() {
    ne(
      /*grab*/
      e[12]("BOTTOM_RIGHT")
    ) && e[12]("BOTTOM_RIGHT").apply(this, arguments);
  }), ve = new ye({
    props: {
      class: "a9s-corner-handle-bottomleft",
      x: (
        /*geom*/
        e[5].x
      ),
      y: (
        /*geom*/
        e[5].y + /*geom*/
        e[5].h
      ),
      scale: (
        /*viewportScale*/
        e[3]
      )
    }
  }), ve.$on("pointerdown", function() {
    ne(
      /*grab*/
      e[12]("BOTTOM_LEFT")
    ) && e[12]("BOTTOM_LEFT").apply(this, arguments);
  }), {
    c() {
      n = N("defs"), t = N("mask"), l = N("rect"), a = N("rect"), g = ee(), y = N("rect"), v = ee(), _ = N("rect"), I = ee(), C = N("rect"), Y = ee(), D = N("rect"), W = ee(), R = N("rect"), te = ee(), E = N("rect"), he = ee(), fe(se.$$.fragment), ae = ee(), fe(ue.$$.fragment), be = ee(), fe(ce.$$.fragment), Ee = ee(), fe(ve.$$.fragment), s(l, "class", "rect-mask-bg svelte-1njczvj"), s(l, "x", o = /*mask*/
      e[6].x), s(l, "y", i = /*mask*/
      e[6].y), s(l, "width", r = /*mask*/
      e[6].w), s(l, "height", f = /*mask*/
      e[6].h), s(a, "class", "rect-mask-fg svelte-1njczvj"), s(a, "x", c = /*geom*/
      e[5].x), s(a, "y", u = /*geom*/
      e[5].y), s(a, "width", h = /*geom*/
      e[5].w), s(a, "height", p = /*geom*/
      e[5].h), s(
        t,
        "id",
        /*maskId*/
        e[8]
      ), s(t, "class", "a9s-rectangle-editor-mask svelte-1njczvj"), s(y, "class", "a9s-outer"), s(y, "mask", `url(#${/*maskId*/
      e[8]})`), s(y, "x", m = /*geom*/
      e[5].x), s(y, "y", k = /*geom*/
      e[5].y), s(y, "width", A = /*geom*/
      e[5].w), s(y, "height", S = /*geom*/
      e[5].h), s(_, "class", "a9s-inner a9s-shape-handle"), s(
        _,
        "style",
        /*computedStyle*/
        e[1]
      ), s(_, "x", d = /*geom*/
      e[5].x), s(_, "y", b = /*geom*/
      e[5].y), s(_, "width", w = /*geom*/
      e[5].w), s(_, "height", H = /*geom*/
      e[5].h), s(C, "class", "a9s-edge-handle a9s-edge-handle-top"), s(C, "x", j = /*geom*/
      e[5].x), s(C, "y", T = /*geom*/
      e[5].y), s(C, "height", 1), s(C, "width", U = /*geom*/
      e[5].w), s(D, "class", "a9s-edge-handle a9s-edge-handle-right"), s(D, "x", V = /*geom*/
      e[5].x + /*geom*/
      e[5].w), s(D, "y", L = /*geom*/
      e[5].y), s(D, "height", B = /*geom*/
      e[5].h), s(D, "width", 1), s(R, "class", "a9s-edge-handle a9s-edge-handle-bottom"), s(R, "x", X = /*geom*/
      e[5].x), s(R, "y", K = /*geom*/
      e[5].y + /*geom*/
      e[5].h), s(R, "height", 1), s(R, "width", x = /*geom*/
      e[5].w), s(E, "class", "a9s-edge-handle a9s-edge-handle-left"), s(E, "x", q = /*geom*/
      e[5].x), s(E, "y", le = /*geom*/
      e[5].y), s(E, "height", J = /*geom*/
      e[5].h), s(E, "width", 1);
    },
    m(G, O) {
      M(G, n, O), z(n, t), z(t, l), z(t, a), M(G, g, O), M(G, y, O), M(G, v, O), M(G, _, O), M(G, I, O), M(G, C, O), M(G, Y, O), M(G, D, O), M(G, W, O), M(G, R, O), M(G, te, O), M(G, E, O), M(G, he, O), re(se, G, O), M(G, ae, O), re(ue, G, O), M(G, be, O), re(ce, G, O), M(G, Ee, O), re(ve, G, O), Z = !0, Ge || (Ke = [
        Q(y, "pointerdown", function() {
          ne(
            /*grab*/
            e[12]("SHAPE")
          ) && e[12]("SHAPE").apply(this, arguments);
        }),
        Q(_, "pointerdown", function() {
          ne(
            /*grab*/
            e[12]("SHAPE")
          ) && e[12]("SHAPE").apply(this, arguments);
        }),
        Q(C, "pointerdown", function() {
          ne(
            /*grab*/
            e[12]("TOP")
          ) && e[12]("TOP").apply(this, arguments);
        }),
        Q(D, "pointerdown", function() {
          ne(
            /*grab*/
            e[12]("RIGHT")
          ) && e[12]("RIGHT").apply(this, arguments);
        }),
        Q(R, "pointerdown", function() {
          ne(
            /*grab*/
            e[12]("BOTTOM")
          ) && e[12]("BOTTOM").apply(this, arguments);
        }),
        Q(E, "pointerdown", function() {
          ne(
            /*grab*/
            e[12]("LEFT")
          ) && e[12]("LEFT").apply(this, arguments);
        })
      ], Ge = !0);
    },
    p(G, O) {
      e = G, (!Z || O & /*mask*/
      64 && o !== (o = /*mask*/
      e[6].x)) && s(l, "x", o), (!Z || O & /*mask*/
      64 && i !== (i = /*mask*/
      e[6].y)) && s(l, "y", i), (!Z || O & /*mask*/
      64 && r !== (r = /*mask*/
      e[6].w)) && s(l, "width", r), (!Z || O & /*mask*/
      64 && f !== (f = /*mask*/
      e[6].h)) && s(l, "height", f), (!Z || O & /*geom*/
      32 && c !== (c = /*geom*/
      e[5].x)) && s(a, "x", c), (!Z || O & /*geom*/
      32 && u !== (u = /*geom*/
      e[5].y)) && s(a, "y", u), (!Z || O & /*geom*/
      32 && h !== (h = /*geom*/
      e[5].w)) && s(a, "width", h), (!Z || O & /*geom*/
      32 && p !== (p = /*geom*/
      e[5].h)) && s(a, "height", p), (!Z || O & /*geom*/
      32 && m !== (m = /*geom*/
      e[5].x)) && s(y, "x", m), (!Z || O & /*geom*/
      32 && k !== (k = /*geom*/
      e[5].y)) && s(y, "y", k), (!Z || O & /*geom*/
      32 && A !== (A = /*geom*/
      e[5].w)) && s(y, "width", A), (!Z || O & /*geom*/
      32 && S !== (S = /*geom*/
      e[5].h)) && s(y, "height", S), (!Z || O & /*computedStyle*/
      2) && s(
        _,
        "style",
        /*computedStyle*/
        e[1]
      ), (!Z || O & /*geom*/
      32 && d !== (d = /*geom*/
      e[5].x)) && s(_, "x", d), (!Z || O & /*geom*/
      32 && b !== (b = /*geom*/
      e[5].y)) && s(_, "y", b), (!Z || O & /*geom*/
      32 && w !== (w = /*geom*/
      e[5].w)) && s(_, "width", w), (!Z || O & /*geom*/
      32 && H !== (H = /*geom*/
      e[5].h)) && s(_, "height", H), (!Z || O & /*geom*/
      32 && j !== (j = /*geom*/
      e[5].x)) && s(C, "x", j), (!Z || O & /*geom*/
      32 && T !== (T = /*geom*/
      e[5].y)) && s(C, "y", T), (!Z || O & /*geom*/
      32 && U !== (U = /*geom*/
      e[5].w)) && s(C, "width", U), (!Z || O & /*geom*/
      32 && V !== (V = /*geom*/
      e[5].x + /*geom*/
      e[5].w)) && s(D, "x", V), (!Z || O & /*geom*/
      32 && L !== (L = /*geom*/
      e[5].y)) && s(D, "y", L), (!Z || O & /*geom*/
      32 && B !== (B = /*geom*/
      e[5].h)) && s(D, "height", B), (!Z || O & /*geom*/
      32 && X !== (X = /*geom*/
      e[5].x)) && s(R, "x", X), (!Z || O & /*geom*/
      32 && K !== (K = /*geom*/
      e[5].y + /*geom*/
      e[5].h)) && s(R, "y", K), (!Z || O & /*geom*/
      32 && x !== (x = /*geom*/
      e[5].w)) && s(R, "width", x), (!Z || O & /*geom*/
      32 && q !== (q = /*geom*/
      e[5].x)) && s(E, "x", q), (!Z || O & /*geom*/
      32 && le !== (le = /*geom*/
      e[5].y)) && s(E, "y", le), (!Z || O & /*geom*/
      32 && J !== (J = /*geom*/
      e[5].h)) && s(E, "height", J);
      const Ae = {};
      O & /*geom*/
      32 && (Ae.x = /*geom*/
      e[5].x), O & /*geom*/
      32 && (Ae.y = /*geom*/
      e[5].y), O & /*viewportScale*/
      8 && (Ae.scale = /*viewportScale*/
      e[3]), se.$set(Ae);
      const De = {};
      O & /*geom*/
      32 && (De.x = /*geom*/
      e[5].x + /*geom*/
      e[5].w), O & /*geom*/
      32 && (De.y = /*geom*/
      e[5].y), O & /*viewportScale*/
      8 && (De.scale = /*viewportScale*/
      e[3]), ue.$set(De);
      const Ye = {};
      O & /*geom*/
      32 && (Ye.x = /*geom*/
      e[5].x + /*geom*/
      e[5].w), O & /*geom*/
      32 && (Ye.y = /*geom*/
      e[5].y + /*geom*/
      e[5].h), O & /*viewportScale*/
      8 && (Ye.scale = /*viewportScale*/
      e[3]), ce.$set(Ye);
      const Xe = {};
      O & /*geom*/
      32 && (Xe.x = /*geom*/
      e[5].x), O & /*geom*/
      32 && (Xe.y = /*geom*/
      e[5].y + /*geom*/
      e[5].h), O & /*viewportScale*/
      8 && (Xe.scale = /*viewportScale*/
      e[3]), ve.$set(Xe);
    },
    i(G) {
      Z || (F(se.$$.fragment, G), F(ue.$$.fragment, G), F(ce.$$.fragment, G), F(ve.$$.fragment, G), Z = !0);
    },
    o(G) {
      $(se.$$.fragment, G), $(ue.$$.fragment, G), $(ce.$$.fragment, G), $(ve.$$.fragment, G), Z = !1;
    },
    d(G) {
      G && (P(n), P(g), P(y), P(v), P(_), P(I), P(C), P(Y), P(D), P(W), P(R), P(te), P(E), P(he), P(ae), P(be), P(Ee)), ie(se, G), ie(ue, G), ie(ce, G), ie(ve, G), Ge = !1, Me(Ke);
    }
  };
}
function El(e) {
  let n, t;
  return n = new qe({
    props: {
      shape: (
        /*shape*/
        e[0]
      ),
      transform: (
        /*transform*/
        e[2]
      ),
      editor: (
        /*editor*/
        e[7]
      ),
      svgEl: (
        /*svgEl*/
        e[4]
      ),
      $$slots: {
        default: [
          kl,
          ({ grab: l }) => ({ 12: l }),
          ({ grab: l }) => l ? 4096 : 0
        ]
      },
      $$scope: { ctx: e }
    }
  }), n.$on(
    "grab",
    /*grab_handler*/
    e[9]
  ), n.$on(
    "change",
    /*change_handler*/
    e[10]
  ), n.$on(
    "release",
    /*release_handler*/
    e[11]
  ), {
    c() {
      fe(n.$$.fragment);
    },
    m(l, o) {
      re(n, l, o), t = !0;
    },
    p(l, [o]) {
      const i = {};
      o & /*shape*/
      1 && (i.shape = /*shape*/
      l[0]), o & /*transform*/
      4 && (i.transform = /*transform*/
      l[2]), o & /*svgEl*/
      16 && (i.svgEl = /*svgEl*/
      l[4]), o & /*$$scope, geom, viewportScale, grab, computedStyle, mask*/
      12394 && (i.$$scope = { dirty: o, ctx: l }), n.$set(i);
    },
    i(l) {
      t || (F(n.$$.fragment, l), t = !0);
    },
    o(l) {
      $(n.$$.fragment, l), t = !1;
    },
    d(l) {
      ie(n, l);
    }
  };
}
function Sl(e, n, t) {
  let l, o, { shape: i } = n, { computedStyle: r } = n, { transform: f } = n, { viewportScale: a = 1 } = n, { svgEl: c } = n;
  const u = (m, k, A) => {
    const S = m.geometry.bounds;
    let [v, _] = [S.minX, S.minY], [d, b] = [S.maxX, S.maxY];
    const [w, H] = A;
    if (k === "SHAPE")
      v += w, d += w, _ += H, b += H;
    else {
      switch (k) {
        case "TOP":
        case "TOP_LEFT":
        case "TOP_RIGHT": {
          _ += H;
          break;
        }
        case "BOTTOM":
        case "BOTTOM_LEFT":
        case "BOTTOM_RIGHT": {
          b += H;
          break;
        }
      }
      switch (k) {
        case "LEFT":
        case "TOP_LEFT":
        case "BOTTOM_LEFT": {
          v += w;
          break;
        }
        case "RIGHT":
        case "TOP_RIGHT":
        case "BOTTOM_RIGHT": {
          d += w;
          break;
        }
      }
    }
    const I = Math.min(v, d), C = Math.min(_, b), j = Math.abs(d - v), T = Math.abs(b - _);
    return {
      ...m,
      geometry: {
        x: I,
        y: C,
        w: j,
        h: T,
        bounds: {
          minX: I,
          minY: C,
          maxX: I + j,
          maxY: C + T
        }
      }
    };
  }, h = `rect-mask-${Math.random().toString(36).substring(2, 12)}`;
  function p(m) {
    oe.call(this, e, m);
  }
  function g(m) {
    oe.call(this, e, m);
  }
  function y(m) {
    oe.call(this, e, m);
  }
  return e.$$set = (m) => {
    "shape" in m && t(0, i = m.shape), "computedStyle" in m && t(1, r = m.computedStyle), "transform" in m && t(2, f = m.transform), "viewportScale" in m && t(3, a = m.viewportScale), "svgEl" in m && t(4, c = m.svgEl);
  }, e.$$.update = () => {
    e.$$.dirty & /*shape*/
    1 && t(5, l = i.geometry), e.$$.dirty & /*geom, viewportScale*/
    40 && t(6, o = bn(l.bounds, 2 / a));
  }, [
    i,
    r,
    f,
    a,
    c,
    l,
    o,
    u,
    h,
    p,
    g,
    y
  ];
}
let Tl = class extends pe {
  constructor(n) {
    super(), me(this, n, Sl, El, de, {
      shape: 0,
      computedStyle: 1,
      transform: 2,
      viewportScale: 3,
      svgEl: 4
    });
  }
};
var Bn = Object.prototype.hasOwnProperty;
function wn(e, n) {
  var t, l;
  if (e === n) return !0;
  if (e && n && (t = e.constructor) === n.constructor) {
    if (t === Date) return e.getTime() === n.getTime();
    if (t === RegExp) return e.toString() === n.toString();
    if (t === Array) {
      if ((l = e.length) === n.length)
        for (; l-- && wn(e[l], n[l]); ) ;
      return l === -1;
    }
    if (!t || typeof e == "object") {
      l = 0;
      for (t in e)
        if (Bn.call(e, t) && ++l && !Bn.call(n, t) || !(t in n) || !wn(e[t], n[t])) return !1;
      return Object.keys(n).length === l;
    }
  }
  return e !== e && n !== n;
}
const Pl = 12, Ml = (e, n) => e.polygons.reduce((t, l, o) => {
  const i = l.rings.reduce((r, f, a) => {
    const c = f.points.map((u, h) => {
      const p = h === f.points.length - 1 ? f.points[0] : f.points[h + 1], g = (u[0] + p[0]) / 2, y = (u[1] + p[1]) / 2, k = Math.sqrt(
        Math.pow(p[0] - g, 2) + Math.pow(p[1] - y, 2)
      ) > Pl / n;
      return { point: [g, y], visible: k, elementIdx: o, ringIdx: a, pointIdx: h };
    });
    return [...r, ...c];
  }, []);
  return [...t, ...i];
}, []);
function an(e) {
  const n = e.slice(), t = (
    /*midpoints*/
    n[10][
      /*visibleMidpoint*/
      n[6]
    ]
  );
  return n[29] = t.point, n;
}
function Un(e, n, t) {
  const l = e.slice();
  return l[30] = n[t], l[32] = t, l;
}
function qn(e, n, t) {
  const l = e.slice();
  return l[33] = n[t], l[35] = t, l;
}
function Gn(e, n, t) {
  const l = e.slice();
  return l[29] = n[t], l[37] = t, l;
}
function un(e) {
  const n = e.slice(), t = (
    /*midpoints*/
    n[10][
      /*visibleMidpoint*/
      n[6]
    ]
  );
  return n[29] = t.point, n;
}
function cn(e) {
  const n = e.slice(), t = (
    /*midpoints*/
    n[10][
      /*visibleMidpoint*/
      n[6]
    ]
  );
  return n[29] = t.point, n;
}
function Fn(e) {
  let n, t, l, o;
  return {
    c() {
      n = N("circle"), s(n, "cx", t = /*point*/
      e[29][0]), s(n, "cy", l = /*point*/
      e[29][1]), s(n, "r", o = Qe / /*viewportScale*/
      e[3]), s(n, "class", "svelte-1vxo6dc");
    },
    m(i, r) {
      M(i, n, r);
    },
    p(i, r) {
      r[0] & /*midpoints, visibleMidpoint*/
      1088 && t !== (t = /*point*/
      i[29][0]) && s(n, "cx", t), r[0] & /*midpoints, visibleMidpoint*/
      1088 && l !== (l = /*point*/
      i[29][1]) && s(n, "cy", l), r[0] & /*viewportScale*/
      8 && o !== (o = Qe / /*viewportScale*/
      i[3]) && s(n, "r", o);
    },
    d(i) {
      i && P(n);
    }
  };
}
function zn(e) {
  let n, t, l, o, i, r, f, a, c, u;
  return {
    c() {
      n = N("mask"), t = N("rect"), f = N("circle"), s(t, "x", l = /*mask*/
      e[9].x), s(t, "y", o = /*mask*/
      e[9].y), s(t, "width", i = /*mask*/
      e[9].w), s(t, "height", r = /*mask*/
      e[9].h), s(t, "class", "svelte-1vxo6dc"), s(f, "cx", a = /*point*/
      e[29][0]), s(f, "cy", c = /*point*/
      e[29][1]), s(f, "r", u = Qe / /*viewportScale*/
      e[3]), s(f, "class", "svelte-1vxo6dc"), s(n, "id", `${/*maskId*/
      e[18]}-${/*elementIdx*/
      e[32]}-inner`), s(n, "class", "a9s-multipolygon-editor-mask svelte-1vxo6dc");
    },
    m(h, p) {
      M(h, n, p), z(n, t), z(n, f);
    },
    p(h, p) {
      p[0] & /*mask*/
      512 && l !== (l = /*mask*/
      h[9].x) && s(t, "x", l), p[0] & /*mask*/
      512 && o !== (o = /*mask*/
      h[9].y) && s(t, "y", o), p[0] & /*mask*/
      512 && i !== (i = /*mask*/
      h[9].w) && s(t, "width", i), p[0] & /*mask*/
      512 && r !== (r = /*mask*/
      h[9].h) && s(t, "height", r), p[0] & /*midpoints, visibleMidpoint*/
      1088 && a !== (a = /*point*/
      h[29][0]) && s(f, "cx", a), p[0] & /*midpoints, visibleMidpoint*/
      1088 && c !== (c = /*point*/
      h[29][1]) && s(f, "cy", c), p[0] & /*viewportScale*/
      8 && u !== (u = Qe / /*viewportScale*/
      h[3]) && s(f, "r", u);
    },
    d(h) {
      h && P(n);
    }
  };
}
function Vn(e) {
  let n, t;
  function l(...o) {
    return (
      /*func*/
      e[19](
        /*elementIdx*/
        e[32],
        /*ringIdx*/
        e[35],
        /*pointIdx*/
        e[37],
        ...o
      )
    );
  }
  return n = new ye({
    props: {
      class: "a9s-corner-handle",
      x: (
        /*point*/
        e[29][0]
      ),
      y: (
        /*point*/
        e[29][1]
      ),
      scale: (
        /*viewportScale*/
        e[3]
      ),
      selected: (
        /*selectedCorners*/
        e[8].some(l)
      )
    }
  }), n.$on(
    "pointerenter",
    /*onEnterHandle*/
    e[11]
  ), n.$on(
    "pointerleave",
    /*onLeaveHandle*/
    e[12]
  ), n.$on(
    "pointerdown",
    /*onHandlePointerDown*/
    e[14]
  ), n.$on("pointerdown", function() {
    ne(
      /*grab*/
      e[28](`HANDLE-${/*elementIdx*/
      e[32]}-${/*ringIdx*/
      e[35]}-${/*pointIdx*/
      e[37]}`)
    ) && e[28](`HANDLE-${/*elementIdx*/
    e[32]}-${/*ringIdx*/
    e[35]}-${/*pointIdx*/
    e[37]}`).apply(this, arguments);
  }), n.$on(
    "pointerup",
    /*onHandlePointerUp*/
    e[15](
      /*elementIdx*/
      e[32],
      /*ringIdx*/
      e[35],
      /*pointIdx*/
      e[37]
    )
  ), {
    c() {
      fe(n.$$.fragment);
    },
    m(o, i) {
      re(n, o, i), t = !0;
    },
    p(o, i) {
      e = o;
      const r = {};
      i[0] & /*geom*/
      32 && (r.x = /*point*/
      e[29][0]), i[0] & /*geom*/
      32 && (r.y = /*point*/
      e[29][1]), i[0] & /*viewportScale*/
      8 && (r.scale = /*viewportScale*/
      e[3]), i[0] & /*selectedCorners*/
      256 && (r.selected = /*selectedCorners*/
      e[8].some(l)), n.$set(r);
    },
    i(o) {
      t || (F(n.$$.fragment, o), t = !0);
    },
    o(o) {
      $(n.$$.fragment, o), t = !1;
    },
    d(o) {
      ie(n, o);
    }
  };
}
function Kn(e) {
  let n, t, l = we(
    /*ring*/
    e[33].points
  ), o = [];
  for (let r = 0; r < l.length; r += 1)
    o[r] = Vn(Gn(e, l, r));
  const i = (r) => $(o[r], 1, 1, () => {
    o[r] = null;
  });
  return {
    c() {
      for (let r = 0; r < o.length; r += 1)
        o[r].c();
      n = ge();
    },
    m(r, f) {
      for (let a = 0; a < o.length; a += 1)
        o[a] && o[a].m(r, f);
      M(r, n, f), t = !0;
    },
    p(r, f) {
      if (f[0] & /*geom, viewportScale, selectedCorners, onEnterHandle, onLeaveHandle, onHandlePointerDown, grab, onHandlePointerUp*/
      268491048) {
        l = we(
          /*ring*/
          r[33].points
        );
        let a;
        for (a = 0; a < l.length; a += 1) {
          const c = Gn(r, l, a);
          o[a] ? (o[a].p(c, f), F(o[a], 1)) : (o[a] = Vn(c), o[a].c(), F(o[a], 1), o[a].m(n.parentNode, n));
        }
        for (Te(), a = l.length; a < o.length; a += 1)
          i(a);
        Pe();
      }
    },
    i(r) {
      if (!t) {
        for (let f = 0; f < l.length; f += 1)
          F(o[f]);
        t = !0;
      }
    },
    o(r) {
      o = o.filter(Boolean);
      for (let f = 0; f < o.length; f += 1)
        $(o[f]);
      t = !1;
    },
    d(r) {
      r && P(n), ze(o, r);
    }
  };
}
function Zn(e) {
  let n, t, l, o, i, r, f, a, c, u, h, p, g, y, m, k, A, S = (
    /*visibleMidpoint*/
    e[6] !== void 0 && !/*isHandleHovered*/
    e[7] && Fn(cn(e))
  ), v = (
    /*visibleMidpoint*/
    e[6] !== void 0 && !/*isHandleHovered*/
    e[7] && zn(un(e))
  ), _ = we(
    /*element*/
    e[30].rings
  ), d = [];
  for (let w = 0; w < _.length; w += 1)
    d[w] = Kn(qn(e, _, w));
  const b = (w) => $(d[w], 1, 1, () => {
    d[w] = null;
  });
  return {
    c() {
      n = N("g"), t = N("defs"), l = N("mask"), o = N("rect"), c = N("path"), S && S.c(), v && v.c(), h = N("path"), g = N("path");
      for (let w = 0; w < d.length; w += 1)
        d[w].c();
      s(o, "x", i = /*mask*/
      e[9].x), s(o, "y", r = /*mask*/
      e[9].y), s(o, "width", f = /*mask*/
      e[9].w), s(o, "height", a = /*mask*/
      e[9].h), s(o, "class", "svelte-1vxo6dc"), s(c, "d", u = Fe(
        /*element*/
        e[30]
      )), s(c, "class", "svelte-1vxo6dc"), s(l, "id", `${/*maskId*/
      e[18]}-${/*elementIdx*/
      e[32]}-outer`), s(l, "class", "a9s-multipolygon-editor-mask svelte-1vxo6dc"), s(h, "class", "a9s-outer"), s(h, "mask", `url(#${/*maskId*/
      e[18]}-${/*elementIdx*/
      e[32]}-outer)`), s(h, "fill-rule", "evenodd"), s(h, "d", p = Fe(
        /*element*/
        e[30]
      )), s(g, "class", "a9s-inner"), s(g, "mask", `url(#${/*maskId*/
      e[18]}-${/*elementIdx*/
      e[32]}-inner)`), s(
        g,
        "style",
        /*computedStyle*/
        e[1]
      ), s(g, "fill-rule", "evenodd"), s(g, "d", y = Fe(
        /*element*/
        e[30]
      ));
    },
    m(w, H) {
      M(w, n, H), z(n, t), z(t, l), z(l, o), z(l, c), S && S.m(l, null), v && v.m(t, null), z(n, h), z(n, g);
      for (let I = 0; I < d.length; I += 1)
        d[I] && d[I].m(n, null);
      m = !0, k || (A = [
        Q(
          h,
          "pointerup",
          /*onShapePointerUp*/
          e[13]
        ),
        Q(h, "pointerdown", function() {
          ne(
            /*grab*/
            e[28]("SHAPE")
          ) && e[28]("SHAPE").apply(this, arguments);
        }),
        Q(
          g,
          "pointerup",
          /*onShapePointerUp*/
          e[13]
        ),
        Q(g, "pointerdown", function() {
          ne(
            /*grab*/
            e[28]("SHAPE")
          ) && e[28]("SHAPE").apply(this, arguments);
        })
      ], k = !0);
    },
    p(w, H) {
      if (e = w, (!m || H[0] & /*mask*/
      512 && i !== (i = /*mask*/
      e[9].x)) && s(o, "x", i), (!m || H[0] & /*mask*/
      512 && r !== (r = /*mask*/
      e[9].y)) && s(o, "y", r), (!m || H[0] & /*mask*/
      512 && f !== (f = /*mask*/
      e[9].w)) && s(o, "width", f), (!m || H[0] & /*mask*/
      512 && a !== (a = /*mask*/
      e[9].h)) && s(o, "height", a), (!m || H[0] & /*geom*/
      32 && u !== (u = Fe(
        /*element*/
        e[30]
      ))) && s(c, "d", u), /*visibleMidpoint*/
      e[6] !== void 0 && !/*isHandleHovered*/
      e[7] ? S ? S.p(cn(e), H) : (S = Fn(cn(e)), S.c(), S.m(l, null)) : S && (S.d(1), S = null), /*visibleMidpoint*/
      e[6] !== void 0 && !/*isHandleHovered*/
      e[7] ? v ? v.p(un(e), H) : (v = zn(un(e)), v.c(), v.m(t, null)) : v && (v.d(1), v = null), (!m || H[0] & /*geom*/
      32 && p !== (p = Fe(
        /*element*/
        e[30]
      ))) && s(h, "d", p), (!m || H[0] & /*computedStyle*/
      2) && s(
        g,
        "style",
        /*computedStyle*/
        e[1]
      ), (!m || H[0] & /*geom*/
      32 && y !== (y = Fe(
        /*element*/
        e[30]
      ))) && s(g, "d", y), H[0] & /*geom, viewportScale, selectedCorners, onEnterHandle, onLeaveHandle, onHandlePointerDown, grab, onHandlePointerUp*/
      268491048) {
        _ = we(
          /*element*/
          e[30].rings
        );
        let I;
        for (I = 0; I < _.length; I += 1) {
          const C = qn(e, _, I);
          d[I] ? (d[I].p(C, H), F(d[I], 1)) : (d[I] = Kn(C), d[I].c(), F(d[I], 1), d[I].m(n, null));
        }
        for (Te(), I = _.length; I < d.length; I += 1)
          b(I);
        Pe();
      }
    },
    i(w) {
      if (!m) {
        for (let H = 0; H < _.length; H += 1)
          F(d[H]);
        m = !0;
      }
    },
    o(w) {
      d = d.filter(Boolean);
      for (let H = 0; H < d.length; H += 1)
        $(d[H]);
      m = !1;
    },
    d(w) {
      w && P(n), S && S.d(), v && v.d(), ze(d, w), k = !1, Me(A);
    }
  };
}
function Wn(e) {
  let n, t;
  return n = new vn({
    props: {
      x: (
        /*point*/
        e[29][0]
      ),
      y: (
        /*point*/
        e[29][1]
      ),
      scale: (
        /*viewportScale*/
        e[3]
      )
    }
  }), n.$on("pointerdown", function() {
    ne(
      /*onAddPoint*/
      e[17](
        /*visibleMidpoint*/
        e[6]
      )
    ) && e[17](
      /*visibleMidpoint*/
      e[6]
    ).apply(this, arguments);
  }), {
    c() {
      fe(n.$$.fragment);
    },
    m(l, o) {
      re(n, l, o), t = !0;
    },
    p(l, o) {
      e = l;
      const i = {};
      o[0] & /*midpoints, visibleMidpoint*/
      1088 && (i.x = /*point*/
      e[29][0]), o[0] & /*midpoints, visibleMidpoint*/
      1088 && (i.y = /*point*/
      e[29][1]), o[0] & /*viewportScale*/
      8 && (i.scale = /*viewportScale*/
      e[3]), n.$set(i);
    },
    i(l) {
      t || (F(n.$$.fragment, l), t = !0);
    },
    o(l) {
      $(n.$$.fragment, l), t = !1;
    },
    d(l) {
      ie(n, l);
    }
  };
}
function Hl(e) {
  let n, t, l, o = we(
    /*geom*/
    e[5].polygons
  ), i = [];
  for (let a = 0; a < o.length; a += 1)
    i[a] = Zn(Un(e, o, a));
  const r = (a) => $(i[a], 1, 1, () => {
    i[a] = null;
  });
  let f = (
    /*visibleMidpoint*/
    e[6] !== void 0 && !/*isHandleHovered*/
    e[7] && Wn(an(e))
  );
  return {
    c() {
      for (let a = 0; a < i.length; a += 1)
        i[a].c();
      n = ee(), f && f.c(), t = ge();
    },
    m(a, c) {
      for (let u = 0; u < i.length; u += 1)
        i[u] && i[u].m(a, c);
      M(a, n, c), f && f.m(a, c), M(a, t, c), l = !0;
    },
    p(a, c) {
      if (c[0] & /*geom, viewportScale, selectedCorners, onEnterHandle, onLeaveHandle, onHandlePointerDown, grab, onHandlePointerUp, maskId, computedStyle, onShapePointerUp, midpoints, visibleMidpoint, mask, isHandleHovered*/
      268763114) {
        o = we(
          /*geom*/
          a[5].polygons
        );
        let u;
        for (u = 0; u < o.length; u += 1) {
          const h = Un(a, o, u);
          i[u] ? (i[u].p(h, c), F(i[u], 1)) : (i[u] = Zn(h), i[u].c(), F(i[u], 1), i[u].m(n.parentNode, n));
        }
        for (Te(), u = o.length; u < i.length; u += 1)
          r(u);
        Pe();
      }
      /*visibleMidpoint*/
      a[6] !== void 0 && !/*isHandleHovered*/
      a[7] ? f ? (f.p(an(a), c), c[0] & /*visibleMidpoint, isHandleHovered*/
      192 && F(f, 1)) : (f = Wn(an(a)), f.c(), F(f, 1), f.m(t.parentNode, t)) : f && (Te(), $(f, 1, 1, () => {
        f = null;
      }), Pe());
    },
    i(a) {
      if (!l) {
        for (let c = 0; c < o.length; c += 1)
          F(i[c]);
        F(f), l = !0;
      }
    },
    o(a) {
      i = i.filter(Boolean);
      for (let c = 0; c < i.length; c += 1)
        $(i[c]);
      $(f), l = !1;
    },
    d(a) {
      a && (P(n), P(t)), ze(i, a), f && f.d(a);
    }
  };
}
function Ll(e) {
  let n, t;
  return n = new qe({
    props: {
      shape: (
        /*shape*/
        e[0]
      ),
      transform: (
        /*transform*/
        e[2]
      ),
      editor: (
        /*editor*/
        e[16]
      ),
      svgEl: (
        /*svgEl*/
        e[4]
      ),
      $$slots: {
        default: [
          Hl,
          ({ grab: l }) => ({ 28: l }),
          ({ grab: l }) => [l ? 268435456 : 0]
        ]
      },
      $$scope: { ctx: e }
    }
  }), n.$on(
    "change",
    /*change_handler*/
    e[20]
  ), n.$on(
    "grab",
    /*grab_handler*/
    e[21]
  ), n.$on(
    "release",
    /*release_handler*/
    e[22]
  ), {
    c() {
      fe(n.$$.fragment);
    },
    m(l, o) {
      re(n, l, o), t = !0;
    },
    p(l, o) {
      const i = {};
      o[0] & /*shape*/
      1 && (i.shape = /*shape*/
      l[0]), o[0] & /*transform*/
      4 && (i.transform = /*transform*/
      l[2]), o[0] & /*svgEl*/
      16 && (i.svgEl = /*svgEl*/
      l[4]), o[0] & /*midpoints, visibleMidpoint, viewportScale, isHandleHovered, geom, selectedCorners, grab, computedStyle, mask*/
      268437482 | o[1] & /*$$scope*/
      128 && (i.$$scope = { dirty: o, ctx: l }), n.$set(i);
    },
    i(l) {
      t || (F(n.$$.fragment, l), t = !0);
    },
    o(l) {
      $(n.$$.fragment, l), t = !1;
    },
    d(l) {
      ie(n, l);
    }
  };
}
const Il = 250, Ol = 1e3, Qe = 4.5;
function Cl(e, n, t) {
  let l, o, i;
  const r = Oe();
  let { shape: f } = n, { computedStyle: a } = n, { transform: c } = n, { viewportScale: u = 1 } = n, { svgEl: h } = n, p, g = !1, y, m = [];
  const k = () => t(7, g = !0), A = () => t(7, g = !1), S = (D) => {
    if (m.length > 0 || !o.some((x) => x.visible)) {
      t(6, p = void 0);
      return;
    }
    const [V, L] = c.elementToImage(D.offsetX, D.offsetY), B = (x) => Math.pow(x[0] - V, 2) + Math.pow(x[1] - L, 2), W = xt(l).reduce((x, te) => B(te) < B(x) ? te : x), R = o.filter((x) => x.visible).reduce((x, te) => B(te.point) < B(x.point) ? te : x), X = Math.pow(Ol / u, 2);
    B(W) < X || B(R.point) < X ? t(6, p = o.indexOf(R)) : t(6, p = void 0);
  }, v = () => {
    document.activeElement !== h && h.focus();
  }, _ = () => {
    t(8, m = []), v();
  }, d = (D) => {
    t(7, g = !0), D.preventDefault(), D.stopPropagation(), y = performance.now();
  }, b = (D, V, L) => (B) => {
    if (!y || Ue || performance.now() - y > Il) return;
    const W = (X) => X.polygon === D && X.ring === V && X.point === L, R = m.some(W);
    B.metaKey || B.ctrlKey || B.shiftKey ? R ? t(8, m = m.filter((X) => !W(X))) : t(8, m = [...m, { polygon: D, ring: V, point: L }]) : R && m.length > 1 ? t(8, m = [{ polygon: D, ring: V, point: L }]) : R ? t(8, m = []) : t(8, m = [{ polygon: D, ring: V, point: L }]), v();
  }, w = (D, V, L) => {
    v();
    const B = D.geometry.polygons;
    let W;
    if (V === "SHAPE")
      W = B.map((R) => {
        const X = R.rings.map((x, te) => ({ points: x.points.map((q, le) => [q[0] + L[0], q[1] + L[1]]) })), K = Be(X[0].points);
        return { rings: X, bounds: K };
      });
    else {
      const [R, X, K, x] = V.split("-").map((te) => parseInt(te));
      W = B.map((te, E) => {
        if (E === X) {
          const q = te.rings.map((J, he) => he === K ? { points: J.points.map((ae, ue) => ue === x ? [ae[0] + L[0], ae[1] + L[1]] : ae) } : J), le = Be(q[0].points);
          return { rings: q, bounds: le };
        } else
          return te;
      });
    }
    return {
      ...D,
      geometry: {
        polygons: W,
        bounds: on(W)
      }
    };
  }, H = (D) => async (V) => {
    V.stopPropagation();
    const L = o[D], B = l.polygons.map((R, X) => {
      if (X === L.elementIdx) {
        const K = R.rings.map((te, E) => E === L.ringIdx ? { points: [
          ...te.points.slice(0, L.pointIdx + 1),
          L.point,
          ...te.points.slice(L.pointIdx + 1)
        ] } : te), x = Be(K[0].points);
        return { rings: K, bounds: x };
      } else
        return R;
    });
    r("change", {
      ...f,
      geometry: {
        polygons: B,
        bounds: on(B)
      }
    }), await We();
    const W = [...document.querySelectorAll(".a9s-handle")][D + 1];
    if (W != null && W.firstChild) {
      const R = new PointerEvent(
        "pointerdown",
        {
          bubbles: !0,
          cancelable: !0,
          clientX: V.clientX,
          clientY: V.clientY,
          pointerId: V.pointerId,
          pointerType: V.pointerType,
          isPrimary: V.isPrimary,
          buttons: V.buttons
        }
      );
      W.firstChild.dispatchEvent(R);
    }
  }, I = () => {
    const D = l.polygons.map((L, B) => {
      if (m.some((R) => R.polygon === B)) {
        const R = L.rings.map((K, x) => {
          const te = m.filter((E) => E.polygon === B && E.ring === x);
          return te.length && K.points.length - te.length >= 3 ? { points: K.points.filter((q, le) => !te.some((J) => J.point === le)) } : K;
        }), X = Be(R[0].points);
        return { rings: R, bounds: X };
      } else
        return L;
    });
    !wn(l.polygons, D) && (r("change", {
      ...f,
      geometry: {
        polygons: D,
        bounds: on(D)
      }
    }), t(8, m = []));
  };
  Ce(() => {
    if (Ue) return;
    const D = (V) => {
      (V.key === "Delete" || V.key === "Backspace") && (V.preventDefault(), I());
    };
    return h.addEventListener("pointermove", S), h.addEventListener("keydown", D), () => {
      h.removeEventListener("pointermove", S), h.removeEventListener("keydown", D);
    };
  });
  const C = `polygon-mask-${Math.random().toString(36).substring(2, 12)}`, j = (D, V, L, { polygon: B, ring: W, point: R }) => B === D && W === V && R === L;
  function T(D) {
    oe.call(this, e, D);
  }
  function U(D) {
    oe.call(this, e, D);
  }
  function Y(D) {
    oe.call(this, e, D);
  }
  return e.$$set = (D) => {
    "shape" in D && t(0, f = D.shape), "computedStyle" in D && t(1, a = D.computedStyle), "transform" in D && t(2, c = D.transform), "viewportScale" in D && t(3, u = D.viewportScale), "svgEl" in D && t(4, h = D.svgEl);
  }, e.$$.update = () => {
    e.$$.dirty[0] & /*shape*/
    1 && t(5, l = f.geometry), e.$$.dirty[0] & /*geom, viewportScale*/
    40 && t(10, o = Ue ? [] : Ml(l, u)), e.$$.dirty[0] & /*geom, viewportScale*/
    40 && t(9, i = bn(l.bounds, Qe / u));
  }, [
    f,
    a,
    c,
    u,
    h,
    l,
    p,
    g,
    m,
    i,
    o,
    k,
    A,
    _,
    d,
    b,
    w,
    H,
    C,
    j,
    T,
    U,
    Y
  ];
}
class Rl extends pe {
  constructor(n) {
    super(), me(
      this,
      n,
      Cl,
      Ll,
      de,
      {
        shape: 0,
        computedStyle: 1,
        transform: 2,
        viewportScale: 3,
        svgEl: 4
      },
      null,
      [-1, -1]
    );
  }
}
Ne.RECTANGLE, Ne.POLYGON, Ne.MULTIPOLYGON;
typeof navigator > "u" ? !1 : navigator.userAgent.indexOf("Mac OS X") !== -1;
function Nl(e) {
  let n, t, l, o, i, r, f, a, c, u, h, p, g, y, m, k, A, S, v, _, d, b, w, H, I, C, j, T, U, Y, D, V, L, B, W;
  return C = new ye({
    props: {
      class: "a9s-corner-top",
      x: (
        /*geom*/
        e[5].cx
      ),
      y: (
        /*geom*/
        e[5].cy - /*geom*/
        e[5].ry
      ),
      scale: (
        /*viewportScale*/
        e[3]
      )
    }
  }), C.$on("pointerdown", function() {
    ne(
      /*grab*/
      e[12]("TOP")
    ) && e[12]("TOP").apply(this, arguments);
  }), T = new ye({
    props: {
      class: "a9s-corner-handle-right",
      x: (
        /*geom*/
        e[5].cx + /*geom*/
        e[5].rx
      ),
      y: (
        /*geom*/
        e[5].cy
      ),
      scale: (
        /*viewportScale*/
        e[3]
      )
    }
  }), T.$on("pointerdown", function() {
    ne(
      /*grab*/
      e[12]("RIGHT")
    ) && e[12]("RIGHT").apply(this, arguments);
  }), Y = new ye({
    props: {
      class: "a9s-corner-handle-bottom",
      x: (
        /*geom*/
        e[5].cx
      ),
      y: (
        /*geom*/
        e[5].cy + /*geom*/
        e[5].ry
      ),
      scale: (
        /*viewportScale*/
        e[3]
      )
    }
  }), Y.$on("pointerdown", function() {
    ne(
      /*grab*/
      e[12]("BOTTOM")
    ) && e[12]("BOTTOM").apply(this, arguments);
  }), V = new ye({
    props: {
      class: "a9s-corner-handle-left",
      x: (
        /*geom*/
        e[5].cx - /*geom*/
        e[5].rx
      ),
      y: (
        /*geom*/
        e[5].cy
      ),
      scale: (
        /*viewportScale*/
        e[3]
      )
    }
  }), V.$on("pointerdown", function() {
    ne(
      /*grab*/
      e[12]("LEFT")
    ) && e[12]("LEFT").apply(this, arguments);
  }), {
    c() {
      n = N("defs"), t = N("mask"), l = N("rect"), a = N("ellipse"), g = ee(), y = N("ellipse"), v = ee(), _ = N("ellipse"), I = ee(), fe(C.$$.fragment), j = ee(), fe(T.$$.fragment), U = ee(), fe(Y.$$.fragment), D = ee(), fe(V.$$.fragment), s(l, "x", o = /*mask*/
      e[6].x), s(l, "y", i = /*mask*/
      e[6].y), s(l, "width", r = /*mask*/
      e[6].w), s(l, "height", f = /*mask*/
      e[6].h), s(l, "class", "svelte-wdm5en"), s(a, "cx", c = /*geom*/
      e[5].cx), s(a, "cy", u = /*geom*/
      e[5].cy), s(a, "rx", h = /*geom*/
      e[5].rx), s(a, "ry", p = /*geom*/
      e[5].ry), s(a, "class", "svelte-wdm5en"), s(
        t,
        "id",
        /*maskId*/
        e[8]
      ), s(t, "class", "a9s-ellipse-editor-mask svelte-wdm5en"), s(y, "class", "a9s-outer"), s(y, "mask", `url(#${/*maskId*/
      e[8]})`), s(y, "cx", m = /*geom*/
      e[5].cx), s(y, "cy", k = /*geom*/
      e[5].cy), s(y, "rx", A = /*geom*/
      e[5].rx), s(y, "ry", S = /*geom*/
      e[5].ry), s(_, "class", "a9s-inner a9s-shape-handle"), s(
        _,
        "style",
        /*computedStyle*/
        e[1]
      ), s(_, "cx", d = /*geom*/
      e[5].cx), s(_, "cy", b = /*geom*/
      e[5].cy), s(_, "rx", w = /*geom*/
      e[5].rx), s(_, "ry", H = /*geom*/
      e[5].ry);
    },
    m(R, X) {
      M(R, n, X), z(n, t), z(t, l), z(t, a), M(R, g, X), M(R, y, X), M(R, v, X), M(R, _, X), M(R, I, X), re(C, R, X), M(R, j, X), re(T, R, X), M(R, U, X), re(Y, R, X), M(R, D, X), re(V, R, X), L = !0, B || (W = [
        Q(y, "pointerdown", function() {
          ne(
            /*grab*/
            e[12]("SHAPE")
          ) && e[12]("SHAPE").apply(this, arguments);
        }),
        Q(_, "pointerdown", function() {
          ne(
            /*grab*/
            e[12]("SHAPE")
          ) && e[12]("SHAPE").apply(this, arguments);
        })
      ], B = !0);
    },
    p(R, X) {
      e = R, (!L || X & /*mask*/
      64 && o !== (o = /*mask*/
      e[6].x)) && s(l, "x", o), (!L || X & /*mask*/
      64 && i !== (i = /*mask*/
      e[6].y)) && s(l, "y", i), (!L || X & /*mask*/
      64 && r !== (r = /*mask*/
      e[6].w)) && s(l, "width", r), (!L || X & /*mask*/
      64 && f !== (f = /*mask*/
      e[6].h)) && s(l, "height", f), (!L || X & /*geom*/
      32 && c !== (c = /*geom*/
      e[5].cx)) && s(a, "cx", c), (!L || X & /*geom*/
      32 && u !== (u = /*geom*/
      e[5].cy)) && s(a, "cy", u), (!L || X & /*geom*/
      32 && h !== (h = /*geom*/
      e[5].rx)) && s(a, "rx", h), (!L || X & /*geom*/
      32 && p !== (p = /*geom*/
      e[5].ry)) && s(a, "ry", p), (!L || X & /*geom*/
      32 && m !== (m = /*geom*/
      e[5].cx)) && s(y, "cx", m), (!L || X & /*geom*/
      32 && k !== (k = /*geom*/
      e[5].cy)) && s(y, "cy", k), (!L || X & /*geom*/
      32 && A !== (A = /*geom*/
      e[5].rx)) && s(y, "rx", A), (!L || X & /*geom*/
      32 && S !== (S = /*geom*/
      e[5].ry)) && s(y, "ry", S), (!L || X & /*computedStyle*/
      2) && s(
        _,
        "style",
        /*computedStyle*/
        e[1]
      ), (!L || X & /*geom*/
      32 && d !== (d = /*geom*/
      e[5].cx)) && s(_, "cx", d), (!L || X & /*geom*/
      32 && b !== (b = /*geom*/
      e[5].cy)) && s(_, "cy", b), (!L || X & /*geom*/
      32 && w !== (w = /*geom*/
      e[5].rx)) && s(_, "rx", w), (!L || X & /*geom*/
      32 && H !== (H = /*geom*/
      e[5].ry)) && s(_, "ry", H);
      const K = {};
      X & /*geom*/
      32 && (K.x = /*geom*/
      e[5].cx), X & /*geom*/
      32 && (K.y = /*geom*/
      e[5].cy - /*geom*/
      e[5].ry), X & /*viewportScale*/
      8 && (K.scale = /*viewportScale*/
      e[3]), C.$set(K);
      const x = {};
      X & /*geom*/
      32 && (x.x = /*geom*/
      e[5].cx + /*geom*/
      e[5].rx), X & /*geom*/
      32 && (x.y = /*geom*/
      e[5].cy), X & /*viewportScale*/
      8 && (x.scale = /*viewportScale*/
      e[3]), T.$set(x);
      const te = {};
      X & /*geom*/
      32 && (te.x = /*geom*/
      e[5].cx), X & /*geom*/
      32 && (te.y = /*geom*/
      e[5].cy + /*geom*/
      e[5].ry), X & /*viewportScale*/
      8 && (te.scale = /*viewportScale*/
      e[3]), Y.$set(te);
      const E = {};
      X & /*geom*/
      32 && (E.x = /*geom*/
      e[5].cx - /*geom*/
      e[5].rx), X & /*geom*/
      32 && (E.y = /*geom*/
      e[5].cy), X & /*viewportScale*/
      8 && (E.scale = /*viewportScale*/
      e[3]), V.$set(E);
    },
    i(R) {
      L || (F(C.$$.fragment, R), F(T.$$.fragment, R), F(Y.$$.fragment, R), F(V.$$.fragment, R), L = !0);
    },
    o(R) {
      $(C.$$.fragment, R), $(T.$$.fragment, R), $(Y.$$.fragment, R), $(V.$$.fragment, R), L = !1;
    },
    d(R) {
      R && (P(n), P(g), P(y), P(v), P(_), P(I), P(j), P(U), P(D)), ie(C, R), ie(T, R), ie(Y, R), ie(V, R), B = !1, Me(W);
    }
  };
}
function Al(e) {
  let n, t;
  return n = new qe({
    props: {
      shape: (
        /*shape*/
        e[0]
      ),
      transform: (
        /*transform*/
        e[2]
      ),
      editor: (
        /*editor*/
        e[7]
      ),
      svgEl: (
        /*svgEl*/
        e[4]
      ),
      $$slots: {
        default: [
          Nl,
          ({ grab: l }) => ({ 12: l }),
          ({ grab: l }) => l ? 4096 : 0
        ]
      },
      $$scope: { ctx: e }
    }
  }), n.$on(
    "grab",
    /*grab_handler*/
    e[9]
  ), n.$on(
    "change",
    /*change_handler*/
    e[10]
  ), n.$on(
    "release",
    /*release_handler*/
    e[11]
  ), {
    c() {
      fe(n.$$.fragment);
    },
    m(l, o) {
      re(n, l, o), t = !0;
    },
    p(l, [o]) {
      const i = {};
      o & /*shape*/
      1 && (i.shape = /*shape*/
      l[0]), o & /*transform*/
      4 && (i.transform = /*transform*/
      l[2]), o & /*svgEl*/
      16 && (i.svgEl = /*svgEl*/
      l[4]), o & /*$$scope, geom, viewportScale, grab, computedStyle, mask*/
      12394 && (i.$$scope = { dirty: o, ctx: l }), n.$set(i);
    },
    i(l) {
      t || (F(n.$$.fragment, l), t = !0);
    },
    o(l) {
      $(n.$$.fragment, l), t = !1;
    },
    d(l) {
      ie(n, l);
    }
  };
}
function Dl(e, n, t) {
  let l, o, { shape: i } = n, { computedStyle: r } = n, { transform: f } = n, { viewportScale: a = 1 } = n, { svgEl: c } = n;
  const u = (m, k, A) => {
    const S = m.geometry.bounds;
    let [v, _] = [S.minX, S.minY], [d, b] = [S.maxX, S.maxY];
    const [w, H] = A;
    if (k === "SHAPE")
      v += w, d += w, _ += H, b += H;
    else
      switch (k) {
        case "TOP": {
          _ += H;
          break;
        }
        case "BOTTOM": {
          b += H;
          break;
        }
        case "LEFT": {
          v += w;
          break;
        }
        case "RIGHT": {
          d += w;
          break;
        }
      }
    const I = Math.min(v, d), C = Math.min(_, b), j = Math.abs(d - v), T = Math.abs(b - _), U = (v + d) / 2, Y = (_ + b) / 2, D = j / 2, V = T / 2;
    return {
      ...m,
      geometry: {
        ...m.geometry,
        cx: U,
        cy: Y,
        rx: D,
        ry: V,
        bounds: {
          minX: I,
          minY: C,
          maxX: I + j,
          maxY: C + T
        }
      }
    };
  }, h = `ellipse-mask-${Math.random().toString(36).substring(2, 12)}`;
  function p(m) {
    oe.call(this, e, m);
  }
  function g(m) {
    oe.call(this, e, m);
  }
  function y(m) {
    oe.call(this, e, m);
  }
  return e.$$set = (m) => {
    "shape" in m && t(0, i = m.shape), "computedStyle" in m && t(1, r = m.computedStyle), "transform" in m && t(2, f = m.transform), "viewportScale" in m && t(3, a = m.viewportScale), "svgEl" in m && t(4, c = m.svgEl);
  }, e.$$.update = () => {
    e.$$.dirty & /*shape*/
    1 && t(5, l = i.geometry), e.$$.dirty & /*geom, viewportScale*/
    40 && t(6, o = tn(l.bounds, 2 / a));
  }, [
    i,
    r,
    f,
    a,
    c,
    l,
    o,
    u,
    h,
    p,
    g,
    y
  ];
}
class Yl extends pe {
  constructor(n) {
    super(), me(this, n, Dl, Al, de, {
      shape: 0,
      computedStyle: 1,
      transform: 2,
      viewportScale: 3,
      svgEl: 4
    });
  }
}
function Jn(e) {
  let n, t, l, o, i, r, f, a, c, u, h, p, g, y, m, k, A, S, v, _, d, b;
  return {
    c() {
      n = N("defs"), t = N("mask"), l = N("rect"), a = N("ellipse"), g = N("ellipse"), S = N("ellipse"), s(l, "x", o = /*x*/
      e[2] - /*buffer*/
      e[6]), s(l, "y", i = /*y*/
      e[3] - /*buffer*/
      e[6]), s(l, "width", r = /*w*/
      e[4] + 2 * /*buffer*/
      e[6]), s(l, "height", f = /*h*/
      e[5] + 2 * /*buffer*/
      e[6]), s(l, "class", "svelte-1koqlb3"), s(a, "cx", c = /*x*/
      e[2] + /*w*/
      e[4] / 2), s(a, "cy", u = /*y*/
      e[3] + /*h*/
      e[5] / 2), s(a, "rx", h = /*w*/
      e[4] / 2), s(a, "ry", p = /*h*/
      e[5] / 2), s(a, "class", "svelte-1koqlb3"), s(
        t,
        "id",
        /*maskId*/
        e[7]
      ), s(t, "class", "a9s-rubberband-ellipse-mask svelte-1koqlb3"), s(g, "class", "a9s-outer"), s(g, "mask", `url(#${/*maskId*/
      e[7]})`), s(g, "cx", y = /*x*/
      e[2] + /*w*/
      e[4] / 2), s(g, "cy", m = /*y*/
      e[3] + /*h*/
      e[5] / 2), s(g, "rx", k = /*w*/
      e[4] / 2), s(g, "ry", A = /*h*/
      e[5] / 2), s(S, "class", "a9s-inner"), s(S, "cx", v = /*x*/
      e[2] + /*w*/
      e[4] / 2), s(S, "cy", _ = /*y*/
      e[3] + /*h*/
      e[5] / 2), s(S, "rx", d = /*w*/
      e[4] / 2), s(S, "ry", b = /*h*/
      e[5] / 2);
    },
    m(w, H) {
      M(w, n, H), z(n, t), z(t, l), z(t, a), M(w, g, H), M(w, S, H);
    },
    p(w, H) {
      H & /*x, buffer*/
      68 && o !== (o = /*x*/
      w[2] - /*buffer*/
      w[6]) && s(l, "x", o), H & /*y, buffer*/
      72 && i !== (i = /*y*/
      w[3] - /*buffer*/
      w[6]) && s(l, "y", i), H & /*w, buffer*/
      80 && r !== (r = /*w*/
      w[4] + 2 * /*buffer*/
      w[6]) && s(l, "width", r), H & /*h, buffer*/
      96 && f !== (f = /*h*/
      w[5] + 2 * /*buffer*/
      w[6]) && s(l, "height", f), H & /*x, w*/
      20 && c !== (c = /*x*/
      w[2] + /*w*/
      w[4] / 2) && s(a, "cx", c), H & /*y, h*/
      40 && u !== (u = /*y*/
      w[3] + /*h*/
      w[5] / 2) && s(a, "cy", u), H & /*w*/
      16 && h !== (h = /*w*/
      w[4] / 2) && s(a, "rx", h), H & /*h*/
      32 && p !== (p = /*h*/
      w[5] / 2) && s(a, "ry", p), H & /*x, w*/
      20 && y !== (y = /*x*/
      w[2] + /*w*/
      w[4] / 2) && s(g, "cx", y), H & /*y, h*/
      40 && m !== (m = /*y*/
      w[3] + /*h*/
      w[5] / 2) && s(g, "cy", m), H & /*w*/
      16 && k !== (k = /*w*/
      w[4] / 2) && s(g, "rx", k), H & /*h*/
      32 && A !== (A = /*h*/
      w[5] / 2) && s(g, "ry", A), H & /*x, w*/
      20 && v !== (v = /*x*/
      w[2] + /*w*/
      w[4] / 2) && s(S, "cx", v), H & /*y, h*/
      40 && _ !== (_ = /*y*/
      w[3] + /*h*/
      w[5] / 2) && s(S, "cy", _), H & /*w*/
      16 && d !== (d = /*w*/
      w[4] / 2) && s(S, "rx", d), H & /*h*/
      32 && b !== (b = /*h*/
      w[5] / 2) && s(S, "ry", b);
    },
    d(w) {
      w && (P(n), P(g), P(S));
    }
  };
}
function Xl(e) {
  let n, t = (
    /*origin*/
    e[1] && Jn(e)
  );
  return {
    c() {
      n = N("g"), t && t.c(), s(n, "class", "a9s-annotation a9s-rubberband");
    },
    m(l, o) {
      M(l, n, o), t && t.m(n, null), e[12](n);
    },
    p(l, [o]) {
      /*origin*/
      l[1] ? t ? t.p(l, o) : (t = Jn(l), t.c(), t.m(n, null)) : t && (t.d(1), t = null);
    },
    i: _e,
    o: _e,
    d(l) {
      l && P(n), t && t.d(), e[12](null);
    }
  };
}
function jl(e, n, t) {
  let l;
  const o = Oe();
  let { addEventListener: i } = n, { drawingMode: r } = n, { transform: f } = n, { viewportScale: a } = n, c, u, h, p, g, y, m, k = !1, A = !1, S, v;
  const _ = (T) => {
    const U = T;
    S = performance.now(), r === "drag" && (t(1, u = f.elementToImage(U.offsetX, U.offsetY)), h = u, t(2, p = u[0]), t(3, g = u[1]), t(4, y = 1), t(5, m = 1));
  }, d = (T) => {
    const U = T || v;
    if (u)
      if (h = f.elementToImage(U.offsetX, U.offsetY), A) {
        const Y = 2 * Math.abs(h[0] - u[0]), D = 2 * Math.abs(h[1] - u[1]);
        t(4, y = k ? Math.max(Y, D) : Y), t(5, m = k ? y : D), t(2, p = Math.min(h[0], u[0] - y / 2)), t(3, g = Math.min(h[1], u[1] - m / 2));
      } else {
        const Y = Math.abs(h[0] - u[0]), D = Math.abs(h[1] - u[1]);
        t(4, y = k ? Math.max(Y, D) : Y), t(5, m = k ? y : D), t(2, p = Math.min(h[0], u[0])), t(3, g = Math.min(h[1], u[1]));
      }
    T && (v = T);
  }, b = (T) => {
    const U = T, Y = performance.now() - S;
    if (r === "click") {
      if (Y > 300) return;
      u ? w() : (t(1, u = f.elementToImage(U.offsetX, U.offsetY)), h = u, t(2, p = u[0]), t(3, g = u[1]), t(4, y = 1), t(5, m = 1));
    } else u && (Y > 300 || y * m > 100 ? (U.stopPropagation(), w()) : (t(1, u = void 0), h = void 0, v = void 0));
  }, w = () => {
    if (y * m > 15) {
      const T = {
        type: He.ELLIPSE,
        geometry: {
          bounds: {
            minX: p,
            minY: g,
            maxX: p + y,
            maxY: g + m
          },
          cx: p + y / 2,
          cy: g + m / 2,
          rx: y / 2,
          ry: m / 2
        }
      };
      o("create", T);
    }
    t(1, u = void 0), h = void 0, v = void 0;
  }, H = (T) => {
    T.key === "Shift" && (k = !0, d()), T.key === "Control" && (A = !0, d());
  }, I = (T) => {
    T.key === "Shift" && (k = !1, d()), T.key === "Control" && (A = !1, d());
  };
  Ce(() => (document.addEventListener("keyup", I), document.addEventListener("keydown", H), i("pointerdown", _), i("pointermove", d), i("pointerup", b, !0), () => {
    document.removeEventListener("keyup", I), document.removeEventListener("keydown", H);
  }));
  const C = `ellipse-mask-${Math.random().toString(36).substring(2, 12)}`;
  function j(T) {
    $e[T ? "unshift" : "push"](() => {
      c = T, t(0, c);
    });
  }
  return e.$$set = (T) => {
    "addEventListener" in T && t(8, i = T.addEventListener), "drawingMode" in T && t(9, r = T.drawingMode), "transform" in T && t(10, f = T.transform), "viewportScale" in T && t(11, a = T.viewportScale);
  }, e.$$.update = () => {
    e.$$.dirty & /*viewportScale*/
    2048 && t(6, l = 2 / a);
  }, [
    c,
    u,
    p,
    g,
    y,
    m,
    l,
    C,
    i,
    r,
    f,
    a,
    j
  ];
}
class Bl extends pe {
  constructor(n) {
    super(), me(this, n, jl, Xl, de, {
      addEventListener: 8,
      drawingMode: 9,
      transform: 10,
      viewportScale: 11
    });
  }
}
function Ul(e) {
  let n, t, l, o, i, r, f, a, c, u, h, p, g, y, m, k, A, S;
  return g = new ye({
    props: {
      class: "a9s-line-point-1",
      x: (
        /*geom*/
        e[5].points[0][0]
      ),
      y: (
        /*geom*/
        e[5].points[0][1]
      ),
      scale: (
        /*viewportScale*/
        e[3]
      )
    }
  }), g.$on("pointerdown", function() {
    ne(
      /*grab*/
      e[10]("POINT1")
    ) && e[10]("POINT1").apply(this, arguments);
  }), m = new ye({
    props: {
      class: "a9s-line-point-2",
      x: (
        /*geom*/
        e[5].points[1][0]
      ),
      y: (
        /*geom*/
        e[5].points[1][1]
      ),
      scale: (
        /*viewportScale*/
        e[3]
      )
    }
  }), m.$on("pointerdown", function() {
    ne(
      /*grab*/
      e[10]("POINT2")
    ) && e[10]("POINT2").apply(this, arguments);
  }), {
    c() {
      n = N("line"), r = ee(), f = N("line"), p = ee(), fe(g.$$.fragment), y = ee(), fe(m.$$.fragment), s(n, "class", "a9s-outer"), s(n, "x1", t = /*geom*/
      e[5].points[0][0]), s(n, "y1", l = /*geom*/
      e[5].points[0][1]), s(n, "x2", o = /*geom*/
      e[5].points[1][0]), s(n, "y2", i = /*geom*/
      e[5].points[1][1]), s(f, "class", "a9s-inner a9s-shape-handle"), s(
        f,
        "style",
        /*computedStyle*/
        e[1]
      ), s(f, "x1", a = /*geom*/
      e[5].points[0][0]), s(f, "y1", c = /*geom*/
      e[5].points[0][1]), s(f, "x2", u = /*geom*/
      e[5].points[1][0]), s(f, "y2", h = /*geom*/
      e[5].points[1][1]);
    },
    m(v, _) {
      M(v, n, _), M(v, r, _), M(v, f, _), M(v, p, _), re(g, v, _), M(v, y, _), re(m, v, _), k = !0, A || (S = [
        Q(n, "pointerdown", function() {
          ne(
            /*grab*/
            e[10]("LINE")
          ) && e[10]("LINE").apply(this, arguments);
        }),
        Q(f, "pointerdown", function() {
          ne(
            /*grab*/
            e[10]("LINE")
          ) && e[10]("LINE").apply(this, arguments);
        })
      ], A = !0);
    },
    p(v, _) {
      e = v, (!k || _ & /*geom*/
      32 && t !== (t = /*geom*/
      e[5].points[0][0])) && s(n, "x1", t), (!k || _ & /*geom*/
      32 && l !== (l = /*geom*/
      e[5].points[0][1])) && s(n, "y1", l), (!k || _ & /*geom*/
      32 && o !== (o = /*geom*/
      e[5].points[1][0])) && s(n, "x2", o), (!k || _ & /*geom*/
      32 && i !== (i = /*geom*/
      e[5].points[1][1])) && s(n, "y2", i), (!k || _ & /*computedStyle*/
      2) && s(
        f,
        "style",
        /*computedStyle*/
        e[1]
      ), (!k || _ & /*geom*/
      32 && a !== (a = /*geom*/
      e[5].points[0][0])) && s(f, "x1", a), (!k || _ & /*geom*/
      32 && c !== (c = /*geom*/
      e[5].points[0][1])) && s(f, "y1", c), (!k || _ & /*geom*/
      32 && u !== (u = /*geom*/
      e[5].points[1][0])) && s(f, "x2", u), (!k || _ & /*geom*/
      32 && h !== (h = /*geom*/
      e[5].points[1][1])) && s(f, "y2", h);
      const d = {};
      _ & /*geom*/
      32 && (d.x = /*geom*/
      e[5].points[0][0]), _ & /*geom*/
      32 && (d.y = /*geom*/
      e[5].points[0][1]), _ & /*viewportScale*/
      8 && (d.scale = /*viewportScale*/
      e[3]), g.$set(d);
      const b = {};
      _ & /*geom*/
      32 && (b.x = /*geom*/
      e[5].points[1][0]), _ & /*geom*/
      32 && (b.y = /*geom*/
      e[5].points[1][1]), _ & /*viewportScale*/
      8 && (b.scale = /*viewportScale*/
      e[3]), m.$set(b);
    },
    i(v) {
      k || (F(g.$$.fragment, v), F(m.$$.fragment, v), k = !0);
    },
    o(v) {
      $(g.$$.fragment, v), $(m.$$.fragment, v), k = !1;
    },
    d(v) {
      v && (P(n), P(r), P(f), P(p), P(y)), ie(g, v), ie(m, v), A = !1, Me(S);
    }
  };
}
function ql(e) {
  let n, t;
  return n = new qe({
    props: {
      shape: (
        /*shape*/
        e[0]
      ),
      transform: (
        /*transform*/
        e[2]
      ),
      editor: (
        /*editor*/
        e[6]
      ),
      svgEl: (
        /*svgEl*/
        e[4]
      ),
      $$slots: {
        default: [
          Ul,
          ({ grab: l }) => ({ 10: l }),
          ({ grab: l }) => l ? 1024 : 0
        ]
      },
      $$scope: { ctx: e }
    }
  }), n.$on(
    "grab",
    /*grab_handler*/
    e[7]
  ), n.$on(
    "change",
    /*change_handler*/
    e[8]
  ), n.$on(
    "release",
    /*release_handler*/
    e[9]
  ), {
    c() {
      fe(n.$$.fragment);
    },
    m(l, o) {
      re(n, l, o), t = !0;
    },
    p(l, [o]) {
      const i = {};
      o & /*shape*/
      1 && (i.shape = /*shape*/
      l[0]), o & /*transform*/
      4 && (i.transform = /*transform*/
      l[2]), o & /*svgEl*/
      16 && (i.svgEl = /*svgEl*/
      l[4]), o & /*$$scope, geom, viewportScale, grab, computedStyle*/
      3114 && (i.$$scope = { dirty: o, ctx: l }), n.$set(i);
    },
    i(l) {
      t || (F(n.$$.fragment, l), t = !0);
    },
    o(l) {
      $(n.$$.fragment, l), t = !1;
    },
    d(l) {
      ie(n, l);
    }
  };
}
function Gl(e, n, t) {
  let l, { shape: o } = n, { computedStyle: i } = n, { transform: r } = n, { viewportScale: f = 1 } = n, { svgEl: a } = n;
  const c = (g, y, m) => {
    const k = g.geometry;
    let [[A, S], [v, _]] = k.points;
    const [d, b] = m;
    if (y === "LINE")
      A += d, v += d, S += b, _ += b;
    else
      switch (y) {
        case "POINT1": {
          A += d, S += b;
          break;
        }
        case "POINT2": {
          v += d, _ += b;
          break;
        }
      }
    return {
      ...g,
      geometry: {
        ...g.geometry,
        points: [[A, S], [v, _]],
        bounds: Ie([[A, S], [v, _]])
      }
    };
  };
  function u(g) {
    oe.call(this, e, g);
  }
  function h(g) {
    oe.call(this, e, g);
  }
  function p(g) {
    oe.call(this, e, g);
  }
  return e.$$set = (g) => {
    "shape" in g && t(0, o = g.shape), "computedStyle" in g && t(1, i = g.computedStyle), "transform" in g && t(2, r = g.transform), "viewportScale" in g && t(3, f = g.viewportScale), "svgEl" in g && t(4, a = g.svgEl);
  }, e.$$.update = () => {
    e.$$.dirty & /*shape*/
    1 && t(5, l = o.geometry);
  }, [
    o,
    i,
    r,
    f,
    a,
    l,
    c,
    u,
    h,
    p
  ];
}
class Fl extends pe {
  constructor(n) {
    super(), me(this, n, Gl, ql, de, {
      shape: 0,
      computedStyle: 1,
      transform: 2,
      viewportScale: 3,
      svgEl: 4
    });
  }
}
function Qn(e) {
  let n, t;
  return {
    c() {
      n = N("line"), t = N("line"), s(n, "class", "a9s-outer"), s(
        n,
        "x1",
        /*x1*/
        e[3]
      ), s(
        n,
        "y1",
        /*y1*/
        e[4]
      ), s(
        n,
        "x2",
        /*x2*/
        e[5]
      ), s(
        n,
        "y2",
        /*y2*/
        e[6]
      ), s(t, "class", "a9s-inner"), s(
        t,
        "x1",
        /*x1*/
        e[3]
      ), s(
        t,
        "y1",
        /*y1*/
        e[4]
      ), s(
        t,
        "x2",
        /*x2*/
        e[5]
      ), s(
        t,
        "y2",
        /*y2*/
        e[6]
      );
    },
    m(l, o) {
      M(l, n, o), M(l, t, o);
    },
    p(l, o) {
      o & /*x1*/
      8 && s(
        n,
        "x1",
        /*x1*/
        l[3]
      ), o & /*y1*/
      16 && s(
        n,
        "y1",
        /*y1*/
        l[4]
      ), o & /*x2*/
      32 && s(
        n,
        "x2",
        /*x2*/
        l[5]
      ), o & /*y2*/
      64 && s(
        n,
        "y2",
        /*y2*/
        l[6]
      ), o & /*x1*/
      8 && s(
        t,
        "x1",
        /*x1*/
        l[3]
      ), o & /*y1*/
      16 && s(
        t,
        "y1",
        /*y1*/
        l[4]
      ), o & /*x2*/
      32 && s(
        t,
        "x2",
        /*x2*/
        l[5]
      ), o & /*y2*/
      64 && s(
        t,
        "y2",
        /*y2*/
        l[6]
      );
    },
    d(l) {
      l && (P(n), P(t));
    }
  };
}
function zl(e) {
  let n, t = (
    /*origin*/
    e[1] && /*cursor*/
    e[2] && Qn(e)
  );
  return {
    c() {
      n = N("g"), t && t.c(), s(n, "class", "a9s-annotation a9s-rubberband");
    },
    m(l, o) {
      M(l, n, o), t && t.m(n, null), e[11](n);
    },
    p(l, [o]) {
      /*origin*/
      l[1] && /*cursor*/
      l[2] ? t ? t.p(l, o) : (t = Qn(l), t.c(), t.m(n, null)) : t && (t.d(1), t = null);
    },
    i: _e,
    o: _e,
    d(l) {
      l && P(n), t && t.d(), e[11](null);
    }
  };
}
function Vl(e, n, t) {
  const l = Oe();
  let { addEventListener: o } = n, { drawingMode: i } = n, { transform: r } = n, { viewportScale: f } = n, a, c, u, h, p, g, y, m, k;
  const A = (b) => {
    const w = b, { timeStamp: H, offsetX: I, offsetY: C } = w;
    m = { timeStamp: H, offsetX: I, offsetY: C }, i === "drag" && (t(1, c = r.elementToImage(w.offsetX, w.offsetY)), t(2, u = c), t(3, h = c[0]), t(4, p = c[1]), t(5, g = u[0]), t(6, y = u[1]));
  }, S = (b) => {
    const w = b || k;
    c && (t(2, u = r.elementToImage(w.offsetX, w.offsetY)), t(5, g = u[0]), t(6, y = u[1])), b && (k = b);
  }, v = (b) => {
    const w = b;
    if (i === "click") {
      const H = performance.now() - m.timeStamp, I = je([m.offsetX, m.offsetY], [w.offsetX, w.offsetY]);
      if (H > 300 || I > 15) return;
      c ? _() : (t(1, c = r.elementToImage(w.offsetX, w.offsetY)), t(2, u = c), t(3, h = c[0]), t(4, p = c[1]), t(5, g = u[0]), t(6, y = u[1]));
    } else c && (w.stopPropagation(), _());
  }, _ = () => {
    if (c && u && je(c, u) > 4) {
      const b = {
        type: He.LINE,
        geometry: {
          bounds: Ie([c, u]),
          points: [c, u]
        }
      };
      l("create", b);
    }
    t(1, c = void 0), t(2, u = void 0), k = void 0;
  };
  Ce(() => {
    o("pointerdown", A, !0), o("pointermove", S), o("pointerup", v, !0);
  });
  function d(b) {
    $e[b ? "unshift" : "push"](() => {
      a = b, t(0, a);
    });
  }
  return e.$$set = (b) => {
    "addEventListener" in b && t(7, o = b.addEventListener), "drawingMode" in b && t(8, i = b.drawingMode), "transform" in b && t(9, r = b.transform), "viewportScale" in b && t(10, f = b.viewportScale);
  }, [
    a,
    c,
    u,
    h,
    p,
    g,
    y,
    o,
    i,
    r,
    f,
    d
  ];
}
class Kl extends pe {
  constructor(n) {
    super(), me(this, n, Vl, zl, de, {
      addEventListener: 7,
      drawingMode: 8,
      transform: 9,
      viewportScale: 10
    });
  }
}
function $n(e, n, t) {
  const l = e.slice();
  return l[18] = n[t], l;
}
function xn(e) {
  let n, t, l, o = we(
    /*BG_COLORS*/
    e[5]
  ), i = [];
  for (let r = 0; r < o.length; r += 1)
    i[r] = et($n(e, o, r));
  return {
    c() {
      n = ke("div");
      for (let r = 0; r < i.length; r += 1)
        i[r].c();
      s(n, "class", "tb-color-picker svelte-19rj0sx");
    },
    m(r, f) {
      M(r, n, f);
      for (let a = 0; a < i.length; a += 1)
        i[a] && i[a].m(n, null);
      t || (l = Q(
        n,
        "mousedown",
        /*onMouseDown*/
        e[11]
      ), t = !0);
    },
    p(r, f) {
      if (f & /*BG_COLORS, style, pickBgColor*/
      1057) {
        o = we(
          /*BG_COLORS*/
          r[5]
        );
        let a;
        for (a = 0; a < o.length; a += 1) {
          const c = $n(r, o, a);
          i[a] ? i[a].p(c, f) : (i[a] = et(c), i[a].c(), i[a].m(n, null));
        }
        for (; a < i.length; a += 1)
          i[a].d(1);
        i.length = o.length;
      }
    },
    d(r) {
      r && P(n), ze(i, r), t = !1, l();
    }
  };
}
function et(e) {
  let n, t, l;
  function o() {
    return (
      /*click_handler_3*/
      e[15](
        /*c*/
        e[18]
      )
    );
  }
  return {
    c() {
      n = ke("button"), s(n, "class", "tb-swatch svelte-19rj0sx"), s(
        n,
        "title",
        /*c*/
        e[18].label
      ), Se(
        n,
        "background",
        /*c*/
        e[18].value !== "transparent" ? (
          /*c*/
          e[18].value
        ) : "var(--checker)"
      ), Le(
        n,
        "selected",
        /*style*/
        e[0].bgColor === /*c*/
        e[18].value
      );
    },
    m(i, r) {
      M(i, n, r), t || (l = Q(n, "click", o), t = !0);
    },
    p(i, r) {
      e = i, r & /*style, BG_COLORS*/
      33 && Le(
        n,
        "selected",
        /*style*/
        e[0].bgColor === /*c*/
        e[18].value
      );
    },
    d(i) {
      i && P(n), t = !1, l();
    }
  };
}
function Zl(e) {
  let n, t, l, o, i, r, f, a, c, u, h, p, g, y, m, k, A, S, v, _, d, b, w, H, I, C, j, T = (
    /*showBgPicker*/
    e[3] && xn(e)
  );
  return {
    c() {
      n = ke("div"), t = ke("button"), t.textContent = "A-", l = ee(), o = ke("button"), o.textContent = "A+", i = ee(), r = ke("div"), f = ee(), a = ke("button"), a.innerHTML = "<strong>B</strong>", c = ee(), u = ke("button"), u.innerHTML = "<em>I</em>", h = ee(), p = ke("button"), p.innerHTML = "<u>U</u>", g = ee(), y = ke("div"), m = ee(), k = ke("div"), A = ke("button"), S = ke("span"), S.textContent = "A", v = ee(), _ = ke("span"), d = ee(), T && T.c(), b = ee(), w = ke("div"), H = ee(), I = ke("button"), I.innerHTML = '<svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor"><path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"></path></svg>', s(t, "class", "tb-btn svelte-19rj0sx"), s(t, "title", "Decrease font size"), s(o, "class", "tb-btn svelte-19rj0sx"), s(o, "title", "Increase font size"), s(r, "class", "tb-divider svelte-19rj0sx"), s(a, "class", "tb-btn svelte-19rj0sx"), s(a, "title", "Bold"), Le(
        a,
        "active",
        /*style*/
        e[0].bold
      ), s(u, "class", "tb-btn svelte-19rj0sx"), s(u, "title", "Italic"), Le(
        u,
        "active",
        /*style*/
        e[0].italic
      ), s(p, "class", "tb-btn svelte-19rj0sx"), s(p, "title", "Underline"), Le(
        p,
        "active",
        /*style*/
        e[0].underline
      ), s(y, "class", "tb-divider svelte-19rj0sx"), s(S, "class", "tb-color-letter svelte-19rj0sx"), s(_, "class", "tb-color-swatch svelte-19rj0sx"), Se(
        _,
        "background",
        /*style*/
        e[0].bgColor !== "transparent" ? (
          /*style*/
          e[0].bgColor
        ) : "transparent"
      ), Se(
        _,
        "border-color",
        /*style*/
        e[0].bgColor !== "transparent" ? (
          /*style*/
          e[0].bgColor
        ) : "#AAAFC3"
      ), s(A, "class", "tb-btn tb-color-btn svelte-19rj0sx"), s(A, "title", "Highlight colour"), s(k, "class", "tb-color-wrap svelte-19rj0sx"), s(w, "class", "tb-divider svelte-19rj0sx"), s(I, "class", "tb-btn tb-delete svelte-19rj0sx"), s(I, "title", "Delete"), s(n, "class", "a9s-tools-text-toolbar svelte-19rj0sx"), Se(
        n,
        "left",
        /*x*/
        e[1] + "px"
      ), Se(
        n,
        "top",
        /*y*/
        e[2] + "px"
      );
    },
    m(U, Y) {
      M(U, n, Y), z(n, t), z(n, l), z(n, o), z(n, i), z(n, r), z(n, f), z(n, a), z(n, c), z(n, u), z(n, h), z(n, p), z(n, g), z(n, y), z(n, m), z(n, k), z(k, A), z(A, S), z(A, v), z(A, _), z(k, d), T && T.m(k, null), z(n, b), z(n, w), z(n, H), z(n, I), C || (j = [
        Q(
          t,
          "click",
          /*click_handler*/
          e[12]
        ),
        Q(
          o,
          "click",
          /*click_handler_1*/
          e[13]
        ),
        Q(
          a,
          "click",
          /*toggleBold*/
          e[7]
        ),
        Q(
          u,
          "click",
          /*toggleItalic*/
          e[8]
        ),
        Q(
          p,
          "click",
          /*toggleUnderline*/
          e[9]
        ),
        Q(
          A,
          "click",
          /*click_handler_2*/
          e[14]
        ),
        Q(
          I,
          "click",
          /*click_handler_4*/
          e[16]
        ),
        Q(
          n,
          "mousedown",
          /*onMouseDown*/
          e[11]
        )
      ], C = !0);
    },
    p(U, [Y]) {
      Y & /*style*/
      1 && Le(
        a,
        "active",
        /*style*/
        U[0].bold
      ), Y & /*style*/
      1 && Le(
        u,
        "active",
        /*style*/
        U[0].italic
      ), Y & /*style*/
      1 && Le(
        p,
        "active",
        /*style*/
        U[0].underline
      ), Y & /*style*/
      1 && Se(
        _,
        "background",
        /*style*/
        U[0].bgColor !== "transparent" ? (
          /*style*/
          U[0].bgColor
        ) : "transparent"
      ), Y & /*style*/
      1 && Se(
        _,
        "border-color",
        /*style*/
        U[0].bgColor !== "transparent" ? (
          /*style*/
          U[0].bgColor
        ) : "#AAAFC3"
      ), /*showBgPicker*/
      U[3] ? T ? T.p(U, Y) : (T = xn(U), T.c(), T.m(k, null)) : T && (T.d(1), T = null), Y & /*x*/
      2 && Se(
        n,
        "left",
        /*x*/
        U[1] + "px"
      ), Y & /*y*/
      4 && Se(
        n,
        "top",
        /*y*/
        U[2] + "px"
      );
    },
    i: _e,
    o: _e,
    d(U) {
      U && P(n), T && T.d(), C = !1, Me(j);
    }
  };
}
function Wl(e, n, t) {
  let { style: l } = n, { x: o } = n, { y: i } = n;
  const r = Oe(), f = [
    { value: "transparent", label: "None" },
    { value: "#ffff00", label: "Yellow" },
    { value: "#00ff00", label: "Green" },
    { value: "#00ffff", label: "Cyan" },
    { value: "#ff00ff", label: "Magenta" },
    { value: "#ffffff", label: "White" },
    { value: "#000000", label: "Black" }
  ];
  let a = !1;
  const c = (d) => r("change", { ...l, ...d }), u = (d) => c({
    fontSize: Math.max(8, Math.min(72, l.fontSize + d))
  }), h = () => c({ bold: !l.bold }), p = () => c({ italic: !l.italic }), g = () => c({ underline: !l.underline }), y = (d) => {
    c({ bgColor: d }), t(3, a = !1);
  }, m = (d) => d.preventDefault(), k = () => u(-2), A = () => u(2), S = () => t(3, a = !a), v = (d) => y(d.value), _ = () => r("delete");
  return e.$$set = (d) => {
    "style" in d && t(0, l = d.style), "x" in d && t(1, o = d.x), "y" in d && t(2, i = d.y);
  }, [
    l,
    o,
    i,
    a,
    r,
    f,
    u,
    h,
    p,
    g,
    y,
    m,
    k,
    A,
    S,
    v,
    _
  ];
}
class Jl extends pe {
  constructor(n) {
    super(), me(this, n, Wl, Zl, de, { style: 0, x: 1, y: 2 });
  }
}
const Ze = {
  fontSize: 16,
  bold: !1,
  italic: !1,
  underline: !1,
  bgColor: "transparent"
};
function nt(e, n, t) {
  const l = e.slice();
  return l[38] = n[t].id, l[39] = n[t].selector, l;
}
function hn(e) {
  const n = e.slice(), t = (
    /*editingStyle*/
    n[5]
  );
  n[42] = t;
  const l = (
    /*inputScreenPos*/
    n[14](
      /*selector*/
      n[39],
      /*style*/
      n[42]
    )
  );
  n[43] = l;
  const o = (
    /*editingId*/
    n[3] === /*id*/
    n[38]
  );
  return n[44] = o, n;
}
function tt(e, n, t) {
  const l = e.slice();
  return l[38] = n[t].id, l[39] = n[t].selector, l[45] = n[t].text, l;
}
function _n(e) {
  const n = e.slice(), t = (
    /*textPoint*/
    n[12](
      /*selector*/
      n[39]
    )
  );
  n[48] = t;
  const l = (
    /*getStyle*/
    n[11](
      /*selector*/
      n[39]
    )
  );
  n[42] = l;
  const o = (
    /*selectedIds*/
    n[7].includes(
      /*id*/
      n[38]
    )
  );
  return n[44] = o, n;
}
function lt(e, n, t) {
  const l = e.slice();
  return l[38] = n[t].id, l[39] = n[t].selector, l;
}
function Ql(e) {
  const n = e.slice(), t = (
    /*polylineGeometry*/
    n[22](
      /*selector*/
      n[39]
    )
  );
  n[52] = t;
  const l = (
    /*midpoint*/
    n[23](
      /*points*/
      n[52]
    )
  );
  return n[53] = l, n;
}
function $l(e) {
  const n = e.slice(), t = (
    /*lineGeometry*/
    n[21](
      /*selector*/
      n[39]
    )
  );
  return n[52] = t, n;
}
function pn(e) {
  var l;
  const n = e.slice(), t = (
    /*selector*/
    (l = n[39].properties) == null ? void 0 : l.toolType
  );
  return n[51] = t, n;
}
function ot(e) {
  let n;
  function t(r, f) {
    if (
      /*toolType*/
      r[51] === "arrow"
    ) return it;
    if (
      /*toolType*/
      r[51] === "distance"
    ) return st;
  }
  function l(r, f) {
    if (f === it) return $l(r);
    if (f === st) return Ql(r);
  }
  let o = t(e), i = o && o(l(e, o));
  return {
    c() {
      i && i.c(), n = ge();
    },
    m(r, f) {
      i && i.m(r, f), M(r, n, f);
    },
    p(r, f) {
      o === (o = t(r)) && i ? i.p(l(r, o), f) : (i && i.d(1), i = o && o(l(r, o)), i && (i.c(), i.m(n.parentNode, n)));
    },
    d(r) {
      r && P(n), i && i.d(r);
    }
  };
}
function st(e) {
  let n, t, l, o = (
    /*formatLength*/
    e[20](
      /*points*/
      e[52]
    ) + ""
  ), i, r;
  return {
    c() {
      n = N("g"), t = N("rect"), l = N("text"), i = It(o), s(t, "x", "-32"), s(t, "y", "-24"), s(t, "width", "64"), s(t, "height", "18"), s(t, "rx", "3"), s(t, "class", "svelte-4xwjv8"), s(l, "x", "0"), s(l, "y", "-11"), s(l, "text-anchor", "middle"), s(l, "class", "svelte-4xwjv8"), s(n, "class", "a9s-tools-distance-label svelte-4xwjv8"), s(n, "transform", r = `translate(${/*center*/
      e[53][0]}, ${/*center*/
      e[53][1]})`);
    },
    m(f, a) {
      M(f, n, a), z(n, t), z(n, l), z(l, i);
    },
    p(f, a) {
      a[0] & /*svgAnnotations*/
      512 && o !== (o = /*formatLength*/
      f[20](
        /*points*/
        f[52]
      ) + "") && Lt(i, o), a[0] & /*svgAnnotations*/
      512 && r !== (r = `translate(${/*center*/
      f[53][0]}, ${/*center*/
      f[53][1]})`) && s(n, "transform", r);
    },
    d(f) {
      f && P(n);
    }
  };
}
function it(e) {
  let n, t;
  return {
    c() {
      n = N("polyline"), s(n, "class", "a9s-tools-arrowhead svelte-4xwjv8"), s(n, "points", t = /*arrowheadPoints*/
      e[24](
        /*points*/
        e[52]
      ));
    },
    m(l, o) {
      M(l, n, o);
    },
    p(l, o) {
      o[0] & /*svgAnnotations*/
      512 && t !== (t = /*arrowheadPoints*/
      l[24](
        /*points*/
        l[52]
      )) && s(n, "points", t);
    },
    d(l) {
      l && P(n);
    }
  };
}
function rt(e, n) {
  let t, l, o = (
    /*selector*/
    n[39] && ot(pn(n))
  );
  return {
    key: e,
    first: null,
    c() {
      t = ge(), o && o.c(), l = ge(), this.first = t;
    },
    m(i, r) {
      M(i, t, r), o && o.m(i, r), M(i, l, r);
    },
    p(i, r) {
      n = i, /*selector*/
      n[39] ? o ? o.p(pn(n), r) : (o = ot(pn(n)), o.c(), o.m(l.parentNode, l)) : o && (o.d(1), o = null);
    },
    d(i) {
      i && (P(t), P(l)), o && o.d(i);
    }
  };
}
function ft(e) {
  let n, t, l, o = (
    /*text*/
    (e[45] || "") + ""
  ), i, r, f, a, c, u = (
    /*style*/
    e[42].bgColor && /*style*/
    e[42].bgColor !== "transparent" && at(e)
  ), h = (
    /*focused*/
    e[44] && ut(e)
  );
  return {
    c() {
      n = N("g"), u && u.c(), t = ge(), h && h.c(), l = N("text"), i = It(o), s(l, "x", r = /*pt*/
      e[48].x), s(l, "y", f = /*pt*/
      e[48].y), s(l, "font-size", a = /*svgFontSize*/
      e[13](
        /*style*/
        e[42]
      )), s(l, "font-family", "sans-serif"), s(l, "style", c = /*svgTextStyle*/
      e[25](
        /*style*/
        e[42]
      )), Se(l, "pointer-events", "none"), Se(n, "pointer-events", "none");
    },
    m(p, g) {
      M(p, n, g), u && u.m(n, null), z(n, t), h && h.m(n, null), z(n, l), z(l, i);
    },
    p(p, g) {
      /*style*/
      p[42].bgColor && /*style*/
      p[42].bgColor !== "transparent" ? u ? u.p(p, g) : (u = at(p), u.c(), u.m(n, t)) : u && (u.d(1), u = null), /*focused*/
      p[44] ? h ? h.p(p, g) : (h = ut(p), h.c(), h.m(n, l)) : h && (h.d(1), h = null), g[0] & /*textAnnotations*/
      256 && o !== (o = /*text*/
      (p[45] || "") + "") && Lt(i, o), g[0] & /*textAnnotations*/
      256 && r !== (r = /*pt*/
      p[48].x) && s(l, "x", r), g[0] & /*textAnnotations*/
      256 && f !== (f = /*pt*/
      p[48].y) && s(l, "y", f), g[0] & /*textAnnotations*/
      256 && a !== (a = /*svgFontSize*/
      p[13](
        /*style*/
        p[42]
      )) && s(l, "font-size", a), g[0] & /*textAnnotations*/
      256 && c !== (c = /*svgTextStyle*/
      p[25](
        /*style*/
        p[42]
      )) && s(l, "style", c);
      const y = g[0] & /*textAnnotations*/
      256;
      (g[0] & /*textAnnotations*/
      256 || y) && Se(l, "pointer-events", "none");
    },
    d(p) {
      p && P(n), u && u.d(), h && h.d();
    }
  };
}
function at(e) {
  let n, t, l, o, i;
  return {
    c() {
      n = N("rect"), s(n, "x", t = /*pt*/
      e[48].x), s(n, "y", l = /*pt*/
      e[48].y - /*svgFontSize*/
      e[13](
        /*style*/
        e[42]
      )), s(
        n,
        "width",
        /*naturalWidth*/
        e[1]
      ), s(n, "height", o = /*svgFontSize*/
      e[13](
        /*style*/
        e[42]
      ) * 1.3), s(n, "fill", i = /*style*/
      e[42].bgColor), Se(n, "pointer-events", "none");
    },
    m(r, f) {
      M(r, n, f);
    },
    p(r, f) {
      f[0] & /*textAnnotations*/
      256 && t !== (t = /*pt*/
      r[48].x) && s(n, "x", t), f[0] & /*textAnnotations*/
      256 && l !== (l = /*pt*/
      r[48].y - /*svgFontSize*/
      r[13](
        /*style*/
        r[42]
      )) && s(n, "y", l), f[0] & /*naturalWidth*/
      2 && s(
        n,
        "width",
        /*naturalWidth*/
        r[1]
      ), f[0] & /*textAnnotations*/
      256 && o !== (o = /*svgFontSize*/
      r[13](
        /*style*/
        r[42]
      ) * 1.3) && s(n, "height", o), f[0] & /*textAnnotations*/
      256 && i !== (i = /*style*/
      r[42].bgColor) && s(n, "fill", i);
    },
    d(r) {
      r && P(n);
    }
  };
}
function ut(e) {
  let n, t, l, o, i, r, f;
  return {
    c() {
      n = N("rect"), s(n, "x", t = /*pt*/
      e[48].x - 2 / /*viewportScale*/
      e[2]), s(n, "y", l = /*pt*/
      e[48].y - /*svgFontSize*/
      e[13](
        /*style*/
        e[42]
      ) - 2 / /*viewportScale*/
      e[2]), s(n, "width", o = 200 / /*viewportScale*/
      e[2]), s(n, "height", i = /*svgFontSize*/
      e[13](
        /*style*/
        e[42]
      ) * 1.3 + 4 / /*viewportScale*/
      e[2]), s(n, "fill", "none"), s(n, "stroke", "rgba(80,80,80,0.5)"), s(n, "stroke-width", r = 1 / /*viewportScale*/
      e[2]), s(n, "stroke-dasharray", f = `${4 / /*viewportScale*/
      e[2]},${3 / /*viewportScale*/
      e[2]}`), Se(n, "pointer-events", "none");
    },
    m(a, c) {
      M(a, n, c);
    },
    p(a, c) {
      c[0] & /*textAnnotations, viewportScale*/
      260 && t !== (t = /*pt*/
      a[48].x - 2 / /*viewportScale*/
      a[2]) && s(n, "x", t), c[0] & /*textAnnotations, viewportScale*/
      260 && l !== (l = /*pt*/
      a[48].y - /*svgFontSize*/
      a[13](
        /*style*/
        a[42]
      ) - 2 / /*viewportScale*/
      a[2]) && s(n, "y", l), c[0] & /*viewportScale*/
      4 && o !== (o = 200 / /*viewportScale*/
      a[2]) && s(n, "width", o), c[0] & /*textAnnotations, viewportScale*/
      260 && i !== (i = /*svgFontSize*/
      a[13](
        /*style*/
        a[42]
      ) * 1.3 + 4 / /*viewportScale*/
      a[2]) && s(n, "height", i), c[0] & /*viewportScale*/
      4 && r !== (r = 1 / /*viewportScale*/
      a[2]) && s(n, "stroke-width", r), c[0] & /*viewportScale*/
      4 && f !== (f = `${4 / /*viewportScale*/
      a[2]},${3 / /*viewportScale*/
      a[2]}`) && s(n, "stroke-dasharray", f);
    },
    d(a) {
      a && P(n);
    }
  };
}
function ct(e, n) {
  let t, l, o = (
    /*selector*/
    n[39] && /*editingId*/
    n[3] !== /*id*/
    n[38] && ft(_n(n))
  );
  return {
    key: e,
    first: null,
    c() {
      t = ge(), o && o.c(), l = ge(), this.first = t;
    },
    m(i, r) {
      M(i, t, r), o && o.m(i, r), M(i, l, r);
    },
    p(i, r) {
      n = i, /*selector*/
      n[39] && /*editingId*/
      n[3] !== /*id*/
      n[38] ? o ? o.p(_n(n), r) : (o = ft(_n(n)), o.c(), o.m(l.parentNode, l)) : o && (o.d(1), o = null);
    },
    d(i) {
      i && (P(t), P(l)), o && o.d(i);
    }
  };
}
function ht(e) {
  let n, t, l, o, i, r, f = (
    /*focused*/
    e[44] && _t(e)
  );
  return {
    c() {
      f && f.c(), n = ee(), t = ke("input"), s(t, "type", "text"), t.value = /*editingText*/
      e[4], s(t, "class", "a9s-tools-text-input svelte-4xwjv8"), s(t, "style", l = /*inputStyle*/
      e[26](
        /*style*/
        e[42],
        /*pos*/
        e[43]
      )), s(t, "placeholder", "Type...");
    },
    m(a, c) {
      f && f.m(a, c), M(a, n, c), M(a, t, c), e[32](t), o = !0, i || (r = [
        Q(
          t,
          "input",
          /*onTextInput*/
          e[18]
        ),
        Q(
          t,
          "keydown",
          /*onInputKeyDown*/
          e[19]
        ),
        Q(
          t,
          "blur",
          /*commitEdit*/
          e[15]
        )
      ], i = !0);
    },
    p(a, c) {
      /*focused*/
      a[44] ? f ? (f.p(a, c), c[0] & /*editingId, textAnnotations*/
      264 && F(f, 1)) : (f = _t(a), f.c(), F(f, 1), f.m(n.parentNode, n)) : f && (Te(), $(f, 1, 1, () => {
        f = null;
      }), Pe()), (!o || c[0] & /*editingText*/
      16 && t.value !== /*editingText*/
      a[4]) && (t.value = /*editingText*/
      a[4]), (!o || c[0] & /*editingStyle, textAnnotations*/
      288 && l !== (l = /*inputStyle*/
      a[26](
        /*style*/
        a[42],
        /*pos*/
        a[43]
      ))) && s(t, "style", l);
    },
    i(a) {
      o || (F(f), o = !0);
    },
    o(a) {
      $(f), o = !1;
    },
    d(a) {
      a && (P(n), P(t)), f && f.d(a), e[32](null), i = !1, Me(r);
    }
  };
}
function _t(e) {
  let n, t;
  function l(...i) {
    return (
      /*change_handler*/
      e[30](
        /*id*/
        e[38],
        ...i
      )
    );
  }
  function o() {
    return (
      /*delete_handler*/
      e[31](
        /*id*/
        e[38]
      )
    );
  }
  return n = new Jl({
    props: {
      style: (
        /*style*/
        e[42]
      ),
      x: (
        /*pos*/
        e[43].left
      ),
      y: (
        /*pos*/
        e[43].top
      )
    }
  }), n.$on("change", l), n.$on("delete", o), {
    c() {
      fe(n.$$.fragment);
    },
    m(i, r) {
      re(n, i, r), t = !0;
    },
    p(i, r) {
      e = i;
      const f = {};
      r[0] & /*editingStyle*/
      32 && (f.style = /*style*/
      e[42]), r[0] & /*textAnnotations, editingStyle*/
      288 && (f.x = /*pos*/
      e[43].left), r[0] & /*textAnnotations, editingStyle*/
      288 && (f.y = /*pos*/
      e[43].top), n.$set(f);
    },
    i(i) {
      t || (F(n.$$.fragment, i), t = !0);
    },
    o(i) {
      $(n.$$.fragment, i), t = !1;
    },
    d(i) {
      ie(n, i);
    }
  };
}
function pt(e, n) {
  let t, l, o, i = (
    /*selector*/
    n[39] && /*editingId*/
    n[3] === /*id*/
    n[38] && ht(hn(n))
  );
  return {
    key: e,
    first: null,
    c() {
      t = ge(), i && i.c(), l = ge(), this.first = t;
    },
    m(r, f) {
      M(r, t, f), i && i.m(r, f), M(r, l, f), o = !0;
    },
    p(r, f) {
      n = r, /*selector*/
      n[39] && /*editingId*/
      n[3] === /*id*/
      n[38] ? i ? (i.p(hn(n), f), f[0] & /*textAnnotations, editingId*/
      264 && F(i, 1)) : (i = ht(hn(n)), i.c(), F(i, 1), i.m(l.parentNode, l)) : i && (Te(), $(i, 1, 1, () => {
        i = null;
      }), Pe());
    },
    i(r) {
      o || (F(i), o = !0);
    },
    o(r) {
      $(i), o = !1;
    },
    d(r) {
      r && (P(t), P(l)), i && i.d(r);
    }
  };
}
function xl(e) {
  let n, t, l = [], o = /* @__PURE__ */ new Map(), i, r, f = [], a = /* @__PURE__ */ new Map(), c, u = [], h = /* @__PURE__ */ new Map(), p, g, y = we(
    /*svgAnnotations*/
    e[9]
  );
  const m = (_) => (
    /*id*/
    _[38]
  );
  for (let _ = 0; _ < y.length; _ += 1) {
    let d = lt(e, y, _), b = m(d);
    o.set(b, l[_] = rt(b, d));
  }
  let k = we(
    /*textAnnotations*/
    e[8]
  );
  const A = (_) => (
    /*id*/
    _[38]
  );
  for (let _ = 0; _ < k.length; _ += 1) {
    let d = tt(e, k, _), b = A(d);
    a.set(b, f[_] = ct(b, d));
  }
  let S = we(
    /*textAnnotations*/
    e[8]
  );
  const v = (_) => (
    /*id*/
    _[38]
  );
  for (let _ = 0; _ < S.length; _ += 1) {
    let d = nt(e, S, _), b = v(d);
    h.set(b, u[_] = pt(b, d));
  }
  return {
    c() {
      n = N("svg"), t = N("g");
      for (let _ = 0; _ < l.length; _ += 1)
        l[_].c();
      i = ee(), r = N("svg");
      for (let _ = 0; _ < f.length; _ += 1)
        f[_].c();
      c = ee();
      for (let _ = 0; _ < u.length; _ += 1)
        u[_].c();
      p = ge(), s(n, "class", "a9s-tools-overlay svelte-4xwjv8"), s(
        n,
        "viewBox",
        /*viewBox*/
        e[0]
      ), s(n, "preserveAspectRatio", "xMinYMin meet"), s(r, "class", "a9s-tools-overlay svelte-4xwjv8"), s(r, "data-annotation-type", "TEXT"), s(
        r,
        "viewBox",
        /*viewBox*/
        e[0]
      ), s(r, "preserveAspectRatio", "xMinYMin meet"), Se(r, "pointer-events", "none");
    },
    m(_, d) {
      M(_, n, d), z(n, t);
      for (let b = 0; b < l.length; b += 1)
        l[b] && l[b].m(t, null);
      M(_, i, d), M(_, r, d);
      for (let b = 0; b < f.length; b += 1)
        f[b] && f[b].m(r, null);
      M(_, c, d);
      for (let b = 0; b < u.length; b += 1)
        u[b] && u[b].m(_, d);
      M(_, p, d), g = !0;
    },
    p(_, d) {
      d[0] & /*arrowheadPoints, lineGeometry, svgAnnotations, midpoint, polylineGeometry, formatLength*/
      32506368 && (y = we(
        /*svgAnnotations*/
        _[9]
      ), l = ln(l, d, m, 1, _, y, o, t, Sn, rt, null, lt)), (!g || d[0] & /*viewBox*/
      1) && s(
        n,
        "viewBox",
        /*viewBox*/
        _[0]
      ), d[0] & /*textPoint, textAnnotations, svgFontSize, getStyle, svgTextStyle, viewportScale, selectedIds, naturalWidth, editingId*/
      33569166 && (k = we(
        /*textAnnotations*/
        _[8]
      ), f = ln(f, d, A, 1, _, k, a, r, Sn, ct, null, tt)), (!g || d[0] & /*viewBox*/
      1) && s(
        r,
        "viewBox",
        /*viewBox*/
        _[0]
      ), d[0] & /*editingText, inputStyle, editingStyle, inputScreenPos, textAnnotations, inputEl, onTextInput, onInputKeyDown, commitEdit, applyStyleChange, deleteAnnotation, editingId*/
      68141432 && (S = we(
        /*textAnnotations*/
        _[8]
      ), Te(), u = ln(u, d, v, 1, _, S, h, p.parentNode, jt, pt, p, nt), Pe());
    },
    i(_) {
      if (!g) {
        for (let d = 0; d < S.length; d += 1)
          F(u[d]);
        g = !0;
      }
    },
    o(_) {
      for (let d = 0; d < u.length; d += 1)
        $(u[d]);
      g = !1;
    },
    d(_) {
      _ && (P(n), P(i), P(r), P(c), P(p));
      for (let d = 0; d < l.length; d += 1)
        l[d].d();
      for (let d = 0; d < f.length; d += 1)
        f[d].d();
      for (let d = 0; d < u.length; d += 1)
        u[d].d(_);
    }
  };
}
function eo(e, n, t) {
  let l, o, i, r, { anno: f } = n, a = null, c = "0 0 1 1", u = 1, h = 1, p, g = null, y = "", m = { ...Ze }, k, A = [];
  const { store: S } = f.state;
  Xt(e, S, (E) => t(29, r = E));
  const v = (E) => {
    var q;
    return {
      ...Ze,
      ...((q = E.properties) == null ? void 0 : q.textStyle) || {}
    };
  }, _ = (E) => {
    const q = E.geometry;
    return { x: q.x, y: q.y };
  }, d = (E) => (E.fontSize || Ze.fontSize) / h, b = (E, q) => {
    const { x: le, y: J } = _(E), he = q.fontSize || Ze.fontSize;
    return {
      left: le * h,
      top: J * h - he
      // input top sits one font-size above baseline
    };
  }, w = () => {
    if (!a) return;
    const { naturalWidth: E, naturalHeight: q } = a;
    !E || !q || (t(1, u = E), t(0, c = `0 0 ${E} ${q}`), t(2, h = a.getBoundingClientRect().width / E));
  }, H = async (E) => {
    var q, le, J;
    ((J = (le = (q = E.target) == null ? void 0 : q.selector) == null ? void 0 : le.properties) == null ? void 0 : J.toolType) === "text" && (t(3, g = E.id), t(4, y = ""), t(5, m = v(E.target.selector)), await We(), k == null || k.focus());
  }, I = async (E) => {
    var J, he, se, ae, ue;
    if (t(7, A = (E == null ? void 0 : E.map((be) => be.id)) || []), !(E != null && E.length)) {
      g && C();
      return;
    }
    const q = E[0];
    ((se = (he = (J = q == null ? void 0 : q.target) == null ? void 0 : J.selector) == null ? void 0 : he.properties) == null ? void 0 : se.toolType) === "text" ? g !== q.id && (g && C(), t(3, g = q.id), t(4, y = ((ue = (ae = q.bodies) == null ? void 0 : ae[0]) == null ? void 0 : ue.value) || ""), t(5, m = v(q.target.selector)), await We(), k == null || k.focus()) : g && C();
  }, C = () => {
    if (!g) return;
    const E = l.find((q) => q.id === g);
    if (E) {
      const q = y.trim() ? [
        {
          type: "TextualBody",
          value: y,
          purpose: "commenting"
        }
      ] : [];
      f.updateAnnotation({
        ...E,
        bodies: q,
        target: {
          ...E.target,
          selector: {
            ...E.target.selector,
            properties: {
              ...E.target.selector.properties,
              textStyle: m
            }
          }
        }
      });
    }
    t(3, g = null), t(4, y = "");
  }, j = (E, q) => {
    const le = l.find((J) => J.id === E);
    le && (f.updateAnnotation({
      ...le,
      target: {
        ...le.target,
        selector: {
          ...le.target.selector,
          properties: {
            ...le.target.selector.properties,
            textStyle: q
          }
        }
      }
    }), g === E && t(5, m = q));
  }, T = (E) => {
    g === E && (t(3, g = null), t(4, y = "")), f.removeAnnotation(E);
  }, U = (E) => {
    t(4, y = E.target.value);
  }, Y = (E) => {
    E.stopPropagation(), (E.key === "Enter" || E.key === "Escape") && (C(), f.cancelSelected());
  };
  Ce(() => {
    a = f.element.querySelector("img"), a && (a.complete && w(), a.addEventListener("load", w), window.ResizeObserver && (p = new ResizeObserver(w), p.observe(a)), f.on("createAnnotation", H), f.on("selectionChanged", I));
  }), Bt(() => {
    a == null || a.removeEventListener("load", w), p == null || p.disconnect(), f.off("createAnnotation", H), f.off("selectionChanged", I);
  });
  const D = (E) => {
    let q = 0;
    for (let le = 1; le < E.length; le++) {
      const [J, he] = E[le - 1], [se, ae] = E[le];
      q += Math.hypot(se - J, ae - he);
    }
    return `${Math.round(q)} px`;
  }, V = (E) => E.geometry.points, L = (E) => E.geometry.points.map((q) => q.point), B = (E) => [
    (E[0][0] + E[E.length - 1][0]) / 2,
    (E[0][1] + E[E.length - 1][1]) / 2
  ], W = (E) => {
    const [[q, le], [J, he]] = E, se = Math.atan2(he - le, J - q), ae = 12, ue = J - ae * Math.cos(se - Math.PI / 6), be = he - ae * Math.sin(se - Math.PI / 6), ce = J - ae * Math.cos(se + Math.PI / 6), Ee = he - ae * Math.sin(se + Math.PI / 6);
    return `${ue},${be} ${J},${he} ${ce},${Ee}`;
  }, R = (E) => [
    E.bold ? "font-weight:bold" : "",
    E.italic ? "font-style:italic" : "",
    E.underline ? "text-decoration:underline" : ""
  ].filter(Boolean).join(";"), X = (E, q) => [
    `left:${q.left}px`,
    `top:${q.top}px`,
    `font-size:${E.fontSize || Ze.fontSize}px`,
    E.bold ? "font-weight:bold" : "",
    E.italic ? "font-style:italic" : "",
    E.underline ? "text-decoration:underline" : "",
    E.bgColor && E.bgColor !== "transparent" ? `background:${E.bgColor}` : ""
  ].filter(Boolean).join(";"), K = (E, q) => j(E, q.detail), x = (E) => T(E);
  function te(E) {
    $e[E ? "unshift" : "push"](() => {
      k = E, t(6, k);
    });
  }
  return e.$$set = (E) => {
    "anno" in E && t(27, f = E.anno);
  }, e.$$.update = () => {
    e.$$.dirty[0] & /*$store*/
    536870912 && t(28, l = r), e.$$.dirty[0] & /*allAnnotations*/
    268435456 && t(9, o = l.map((E) => {
      var q;
      return { id: E.id, selector: (q = E.target) == null ? void 0 : q.selector };
    }).filter(({ selector: E }) => {
      var q;
      return ["arrow", "distance"].includes(((q = E == null ? void 0 : E.properties) == null ? void 0 : q.toolType) || "");
    })), e.$$.dirty[0] & /*allAnnotations*/
    268435456 && t(8, i = l.map((E) => {
      var q, le, J;
      return {
        id: E.id,
        annotation: E,
        selector: (q = E.target) == null ? void 0 : q.selector,
        text: (J = (le = E.bodies) == null ? void 0 : le[0]) == null ? void 0 : J.value
      };
    }).filter(({ selector: E }) => {
      var q;
      return ((q = E == null ? void 0 : E.properties) == null ? void 0 : q.toolType) === "text";
    }));
  }, [
    c,
    u,
    h,
    g,
    y,
    m,
    k,
    A,
    i,
    o,
    S,
    v,
    _,
    d,
    b,
    C,
    j,
    T,
    U,
    Y,
    D,
    V,
    L,
    B,
    W,
    R,
    X,
    f,
    l,
    r,
    K,
    x,
    te
  ];
}
class no extends pe {
  constructor(n) {
    super(), me(this, n, eo, xl, de, { anno: 27 }, null, [-1, -1]);
  }
}
const to = (e) => {
  if ("element" in e)
    return new no({
      target: e.element,
      props: { anno: e }
    });
};
function mt(e) {
  let n, t, l, o, i, r = (
    /*isClosable*/
    e[1] && dt(e)
  );
  return {
    c() {
      n = N("path"), l = N("path"), r && r.c(), i = ge(), s(n, "class", t = Re(`a9s-outer ${/*isClosable*/
      e[1] ? "closed" : "open"}`) + " svelte-1fo8cp4"), s(
        n,
        "d",
        /*pathString*/
        e[2]
      ), s(l, "class", o = Re(`a9s-inner ${/*isClosable*/
      e[1] ? "closed" : "open"}`) + " svelte-1fo8cp4"), s(
        l,
        "d",
        /*pathString*/
        e[2]
      );
    },
    m(f, a) {
      M(f, n, a), M(f, l, a), r && r.m(f, a), M(f, i, a);
    },
    p(f, a) {
      a & /*isClosable*/
      2 && t !== (t = Re(`a9s-outer ${/*isClosable*/
      f[1] ? "closed" : "open"}`) + " svelte-1fo8cp4") && s(n, "class", t), a & /*pathString*/
      4 && s(
        n,
        "d",
        /*pathString*/
        f[2]
      ), a & /*isClosable*/
      2 && o !== (o = Re(`a9s-inner ${/*isClosable*/
      f[1] ? "closed" : "open"}`) + " svelte-1fo8cp4") && s(l, "class", o), a & /*pathString*/
      4 && s(
        l,
        "d",
        /*pathString*/
        f[2]
      ), /*isClosable*/
      f[1] ? r ? r.p(f, a) : (r = dt(f), r.c(), r.m(i.parentNode, i)) : r && (r.d(1), r = null);
    },
    d(f) {
      f && (P(n), P(l), P(i)), r && r.d(f);
    }
  };
}
function dt(e) {
  let n, t, l;
  return {
    c() {
      n = N("circle"), s(n, "class", "a9s-handle svelte-1fo8cp4"), s(n, "cx", t = /*points*/
      e[0][0][0]), s(n, "cy", l = /*points*/
      e[0][0][1]), s(
        n,
        "r",
        /*handleRadius*/
        e[3]
      );
    },
    m(o, i) {
      M(o, n, i);
    },
    p(o, i) {
      i & /*points*/
      1 && t !== (t = /*points*/
      o[0][0][0]) && s(n, "cx", t), i & /*points*/
      1 && l !== (l = /*points*/
      o[0][0][1]) && s(n, "cy", l), i & /*handleRadius*/
      8 && s(
        n,
        "r",
        /*handleRadius*/
        o[3]
      );
    },
    d(o) {
      o && P(n);
    }
  };
}
function lo(e) {
  let n, t = (
    /*pathString*/
    e[2] && mt(e)
  );
  return {
    c() {
      n = N("g"), t && t.c(), s(n, "class", "a9s-annotation a9s-rubberband");
    },
    m(l, o) {
      M(l, n, o), t && t.m(n, null);
    },
    p(l, [o]) {
      /*pathString*/
      l[2] ? t ? t.p(l, o) : (t = mt(l), t.c(), t.m(n, null)) : t && (t.d(1), t = null);
    },
    i: _e,
    o: _e,
    d(l) {
      l && P(n), t && t.d();
    }
  };
}
const oo = 20, so = 1500;
function io(e, n, t) {
  let l, o, i;
  const r = Oe();
  let { addEventListener: f } = n, { drawingMode: a } = n, { transform: c } = n, { viewportScale: u = 1 } = n, h, p = [], g, y = !1, m;
  const k = (d) => {
    const b = d, { timeStamp: w, offsetX: H, offsetY: I } = b;
    if (h = { timeStamp: w, offsetX: H, offsetY: I }, a === "drag" && p.length === 0) {
      const C = c.elementToImage(b.offsetX, b.offsetY);
      p.push(C), t(8, g = C);
    }
  }, A = (d) => {
    const b = d;
    if (m && clearTimeout(m), p.length > 0) {
      if (t(8, g = c.elementToImage(b.offsetX, b.offsetY)), p.length > 2) {
        const w = je(g, p[0]) * u;
        t(1, y = w < oo);
      }
      b.pointerType === "touch" && (m = setTimeout(
        () => {
          v();
        },
        so
      ));
    }
  }, S = (d) => {
    const b = d;
    if (m && clearTimeout(m), a === "click") {
      const w = b.timeStamp - h.timeStamp, H = je([h.offsetX, h.offsetY], [b.offsetX, b.offsetY]);
      if (w > 300 || H > 15) return;
      if (y)
        _();
      else if (p.length === 0) {
        const I = c.elementToImage(b.offsetX, b.offsetY);
        p.push(I), t(8, g = I);
      } else
        p.push(g);
    } else {
      if (p.length === 1 && je(p[0], g) <= 4) {
        t(0, p = []), t(8, g = void 0);
        return;
      }
      b.stopImmediatePropagation(), y ? _() : p.push(g);
    }
  }, v = () => {
    if (!g) return;
    const d = p.slice(0, -1);
    if (d.length < 2) return;
    const b = {
      type: He.POLYLINE,
      geometry: {
        bounds: Ie(d),
        points: d.map((w) => ({ type: "CORNER", point: w }))
      }
    };
    t(0, p = []), t(8, g = void 0), r("create", b);
  }, _ = () => {
    const d = {
      type: He.POLYLINE,
      geometry: {
        bounds: Ie(p),
        points: p.map((b) => ({ type: "CORNER", point: b })),
        closed: !0
      }
    };
    t(0, p = []), t(8, g = void 0), r("create", d);
  };
  return Ce(() => {
    f("pointerdown", k, !0), f("pointermove", A), f("pointerup", S, !0), f("dblclick", v, !0);
  }), e.$$set = (d) => {
    "addEventListener" in d && t(4, f = d.addEventListener), "drawingMode" in d && t(5, a = d.drawingMode), "transform" in d && t(6, c = d.transform), "viewportScale" in d && t(7, u = d.viewportScale);
  }, e.$$.update = () => {
    e.$$.dirty & /*viewportScale*/
    128 && t(3, l = 4 / u), e.$$.dirty & /*cursor, isClosable, points*/
    259 && t(9, o = g ? y ? p : [...p, g] : []), e.$$.dirty & /*coords, isClosable*/
    514 && t(2, i = o.length > 0 ? `M ${o[0][0]},${o[0][1]}` + o.slice(1).map(([d, b]) => ` L ${d},${b}`).join("") + (y ? " Z" : "") : "");
  }, [
    p,
    y,
    i,
    l,
    f,
    a,
    c,
    u,
    g,
    o
  ];
}
class ro extends pe {
  constructor(n) {
    super(), me(this, n, io, lo, de, {
      addEventListener: 4,
      drawingMode: 5,
      transform: 6,
      viewportScale: 7
    });
  }
}
const fo = (e, n, t) => {
  const { points: l, closed: o } = e.geometry, i = l[n], r = n === 0 ? o ? l.length - 1 : null : n - 1, f = n === l.length - 1 ? o ? 0 : null : n + 1;
  let a = 0, c = 0;
  if (r !== null && f !== null) {
    const h = l[r].point, p = l[f].point;
    a = p[0] - h[0], c = p[1] - h[1];
  } else if (r !== null) {
    const h = l[r].point;
    a = i.point[0] - h[0], c = i.point[1] - h[1];
  } else if (f !== null) {
    const h = l[f].point;
    a = h[0] - i.point[0], c = h[1] - i.point[1];
  }
  const u = Math.sqrt(a * a + c * c);
  if (u > 0) {
    const h = Math.min(0.3 * u, 100 / t);
    a = a / u * h, c = c / u * h;
  }
  return [a, c];
}, ao = (e, n) => {
  if (e.type === "CORNER" && n.type === "CORNER")
    return [
      (e.point[0] + n.point[0]) / 2,
      (e.point[1] + n.point[1]) / 2
    ];
  const t = e.type === "CORNER" ? e.point : e.outHandle || e.point, l = n.type === "CORNER" ? n.point : n.inHandle || n.point, o = 0.5, i = 1 - o;
  return [
    i * i * i * e.point[0] + 3 * i * i * o * t[0] + 3 * i * o * o * l[0] + o * o * o * n.point[0],
    i * i * i * e.point[1] + 3 * i * i * o * t[1] + 3 * i * o * o * l[1] + o * o * o * n.point[1]
  ];
}, uo = (e, n, t) => {
  const l = e.geometry.points[n];
  if (l.type === "CORNER") {
    const [o, i] = fo(e, n, t), r = l.point, f = l.inHandle || [
      r[0] - o,
      r[1] - i
    ], a = l.outHandle || [
      r[0] + o,
      r[1] + i
    ];
    return {
      ...e,
      geometry: {
        ...e.geometry,
        points: e.geometry.points.map((c, u) => u === n ? {
          ...c,
          type: "CURVE",
          inHandle: f,
          outHandle: a,
          locked: !0
        } : c)
      }
    };
  } else
    return {
      ...e,
      geometry: {
        ...e.geometry,
        points: e.geometry.points.map((o, i) => i === n ? {
          ...o,
          type: "CORNER"
        } : o)
      }
    };
};
function co(e) {
  let n, t, l, o, i;
  return {
    c() {
      n = N("circle"), s(n, "class", "a9s-tangent-handle svelte-103tdqm"), s(n, "cx", t = /*controlPoint*/
      e[1][0]), s(n, "cy", l = /*controlPoint*/
      e[1][1]), s(
        n,
        "r",
        /*handleRadius*/
        e[3]
      );
    },
    m(r, f) {
      M(r, n, f), o || (i = Q(
        n,
        "pointerdown",
        /*pointerdown_handler_1*/
        e[8]
      ), o = !0);
    },
    p(r, f) {
      f & /*controlPoint*/
      2 && t !== (t = /*controlPoint*/
      r[1][0]) && s(n, "cx", t), f & /*controlPoint*/
      2 && l !== (l = /*controlPoint*/
      r[1][1]) && s(n, "cy", l), f & /*handleRadius*/
      8 && s(
        n,
        "r",
        /*handleRadius*/
        r[3]
      );
    },
    d(r) {
      r && P(n), o = !1, i();
    }
  };
}
function ho(e) {
  let n, t, l, o, i, r, f, a, c;
  return {
    c() {
      n = N("circle"), i = N("circle"), s(n, "cx", t = /*controlPoint*/
      e[1][0]), s(n, "cy", l = /*controlPoint*/
      e[1][1]), s(n, "class", "a9s-tangent-handle-buffer svelte-103tdqm"), s(n, "r", o = 3 * /*handleRadius*/
      e[3]), Le(
        n,
        "touched",
        /*touched*/
        e[2]
      ), s(i, "class", "a9s-tangent-handle pointer-none svelte-103tdqm"), s(i, "cx", r = /*controlPoint*/
      e[1][0]), s(i, "cy", f = /*controlPoint*/
      e[1][1]), s(
        i,
        "r",
        /*handleRadius*/
        e[3]
      );
    },
    m(u, h) {
      M(u, n, h), M(u, i, h), a || (c = [
        Q(
          n,
          "pointerdown",
          /*pointerdown_handler*/
          e[7]
        ),
        Q(
          n,
          "pointerdown",
          /*onPointerDown*/
          e[4]
        ),
        Q(
          n,
          "pointerup",
          /*onPointerUp*/
          e[5]
        )
      ], a = !0);
    },
    p(u, h) {
      h & /*controlPoint*/
      2 && t !== (t = /*controlPoint*/
      u[1][0]) && s(n, "cx", t), h & /*controlPoint*/
      2 && l !== (l = /*controlPoint*/
      u[1][1]) && s(n, "cy", l), h & /*handleRadius*/
      8 && o !== (o = 3 * /*handleRadius*/
      u[3]) && s(n, "r", o), h & /*touched*/
      4 && Le(
        n,
        "touched",
        /*touched*/
        u[2]
      ), h & /*controlPoint*/
      2 && r !== (r = /*controlPoint*/
      u[1][0]) && s(i, "cx", r), h & /*controlPoint*/
      2 && f !== (f = /*controlPoint*/
      u[1][1]) && s(i, "cy", f), h & /*handleRadius*/
      8 && s(
        i,
        "r",
        /*handleRadius*/
        u[3]
      );
    },
    d(u) {
      u && (P(n), P(i)), a = !1, Me(c);
    }
  };
}
function _o(e) {
  let n, t, l, o, i, r, f, a, c, u, h;
  function p(m, k) {
    return Ht ? ho : co;
  }
  let y = p()(e);
  return {
    c() {
      n = N("g"), t = N("line"), f = N("line"), y.c(), s(t, "class", "a9s-tangent-line a9s-outer svelte-103tdqm"), s(t, "x1", l = /*corner*/
      e[0][0]), s(t, "y1", o = /*corner*/
      e[0][1]), s(t, "x2", i = /*controlPoint*/
      e[1][0]), s(t, "y2", r = /*controlPoint*/
      e[1][1]), s(f, "class", "a9s-tangent-line a9s-inner svelte-103tdqm"), s(f, "x1", a = /*corner*/
      e[0][0]), s(f, "y1", c = /*corner*/
      e[0][1]), s(f, "x2", u = /*controlPoint*/
      e[1][0]), s(f, "y2", h = /*controlPoint*/
      e[1][1]), s(n, "class", "a9s-bezier-handle svelte-103tdqm");
    },
    m(m, k) {
      M(m, n, k), z(n, t), z(n, f), y.m(n, null);
    },
    p(m, [k]) {
      k & /*corner*/
      1 && l !== (l = /*corner*/
      m[0][0]) && s(t, "x1", l), k & /*corner*/
      1 && o !== (o = /*corner*/
      m[0][1]) && s(t, "y1", o), k & /*controlPoint*/
      2 && i !== (i = /*controlPoint*/
      m[1][0]) && s(t, "x2", i), k & /*controlPoint*/
      2 && r !== (r = /*controlPoint*/
      m[1][1]) && s(t, "y2", r), k & /*corner*/
      1 && a !== (a = /*corner*/
      m[0][0]) && s(f, "x1", a), k & /*corner*/
      1 && c !== (c = /*corner*/
      m[0][1]) && s(f, "y1", c), k & /*controlPoint*/
      2 && u !== (u = /*controlPoint*/
      m[1][0]) && s(f, "x2", u), k & /*controlPoint*/
      2 && h !== (h = /*controlPoint*/
      m[1][1]) && s(f, "y2", h), y.p(m, k);
    },
    i: _e,
    o: _e,
    d(m) {
      m && P(n), y.d();
    }
  };
}
function po(e, n, t) {
  let l, { corner: o } = n, { controlPoint: i } = n, { viewportScale: r = 1 } = n, f = !1;
  const a = (p) => {
    p.pointerType === "touch" && t(2, f = !0);
  }, c = () => t(2, f = !1);
  function u(p) {
    oe.call(this, e, p);
  }
  function h(p) {
    oe.call(this, e, p);
  }
  return e.$$set = (p) => {
    "corner" in p && t(0, o = p.corner), "controlPoint" in p && t(1, i = p.controlPoint), "viewportScale" in p && t(6, r = p.viewportScale);
  }, e.$$.update = () => {
    e.$$.dirty & /*viewportScale*/
    64 && t(3, l = 4 / r);
  }, [
    o,
    i,
    f,
    l,
    a,
    c,
    r,
    u,
    h
  ];
}
class Ct extends pe {
  constructor(n) {
    super(), me(this, n, po, _o, de, {
      corner: 0,
      controlPoint: 1,
      viewportScale: 6
    });
  }
}
function mn(e) {
  const n = e.slice(), t = (
    /*midpoints*/
    n[11][
      /*visibleMidpoint*/
      n[6]
    ]
  );
  return n[31] = t.point, n;
}
function gt(e, n, t) {
  const l = e.slice();
  return l[32] = n[t], l[34] = t, l;
}
function dn(e) {
  const n = e.slice(), t = (
    /*selectedCorners*/
    n[8][0]
  );
  n[35] = t;
  const l = (
    /*geom*/
    n[5].points[
      /*selectedCorner*/
      n[35]
    ]
  );
  return n[36] = l, n;
}
function gn(e) {
  const n = e.slice(), t = (
    /*midpoints*/
    n[11][
      /*visibleMidpoint*/
      n[6]
    ]
  );
  return n[31] = t.point, n;
}
function wt(e) {
  let n, t, l, o, i, r, f, a, c, u;
  return {
    c() {
      n = N("mask"), t = N("rect"), f = N("circle"), s(t, "x", l = /*mask*/
      e[9].x), s(t, "y", o = /*mask*/
      e[9].y), s(t, "width", i = /*mask*/
      e[9].w), s(t, "height", r = /*mask*/
      e[9].h), s(t, "class", "svelte-sq8d4p"), s(f, "cx", a = /*point*/
      e[31][0]), s(f, "cy", c = /*point*/
      e[31][1]), s(f, "r", u = yn / /*viewportScale*/
      e[3]), s(f, "class", "svelte-sq8d4p"), s(
        n,
        "id",
        /*maskId*/
        e[20]
      ), s(n, "class", "a9s-polygon-editor-mask svelte-sq8d4p");
    },
    m(h, p) {
      M(h, n, p), z(n, t), z(n, f);
    },
    p(h, p) {
      p[0] & /*mask*/
      512 && l !== (l = /*mask*/
      h[9].x) && s(t, "x", l), p[0] & /*mask*/
      512 && o !== (o = /*mask*/
      h[9].y) && s(t, "y", o), p[0] & /*mask*/
      512 && i !== (i = /*mask*/
      h[9].w) && s(t, "width", i), p[0] & /*mask*/
      512 && r !== (r = /*mask*/
      h[9].h) && s(t, "height", r), p[0] & /*midpoints, visibleMidpoint*/
      2112 && a !== (a = /*point*/
      h[31][0]) && s(f, "cx", a), p[0] & /*midpoints, visibleMidpoint*/
      2112 && c !== (c = /*point*/
      h[31][1]) && s(f, "cy", c), p[0] & /*viewportScale*/
      8 && u !== (u = yn / /*viewportScale*/
      h[3]) && s(f, "r", u);
    },
    d(h) {
      h && P(n);
    }
  };
}
function yt(e) {
  let n, t, l = (
    /*corner*/
    e[36].type === "CURVE" && bt(e)
  );
  return {
    c() {
      l && l.c(), n = ge();
    },
    m(o, i) {
      l && l.m(o, i), M(o, n, i), t = !0;
    },
    p(o, i) {
      /*corner*/
      o[36].type === "CURVE" ? l ? (l.p(o, i), i[0] & /*geom, selectedCorners*/
      288 && F(l, 1)) : (l = bt(o), l.c(), F(l, 1), l.m(n.parentNode, n)) : l && (Te(), $(l, 1, 1, () => {
        l = null;
      }), Pe());
    },
    i(o) {
      t || (F(l), t = !0);
    },
    o(o) {
      $(l), t = !1;
    },
    d(o) {
      o && P(n), l && l.d(o);
    }
  };
}
function bt(e) {
  let n, t, l, o = (
    /*corner*/
    e[36].inHandle && vt(e)
  ), i = (
    /*corner*/
    e[36].outHandle && kt(e)
  );
  return {
    c() {
      o && o.c(), n = ee(), i && i.c(), t = ge();
    },
    m(r, f) {
      o && o.m(r, f), M(r, n, f), i && i.m(r, f), M(r, t, f), l = !0;
    },
    p(r, f) {
      /*corner*/
      r[36].inHandle ? o ? (o.p(r, f), f[0] & /*geom, selectedCorners*/
      288 && F(o, 1)) : (o = vt(r), o.c(), F(o, 1), o.m(n.parentNode, n)) : o && (Te(), $(o, 1, 1, () => {
        o = null;
      }), Pe()), /*corner*/
      r[36].outHandle ? i ? (i.p(r, f), f[0] & /*geom, selectedCorners*/
      288 && F(i, 1)) : (i = kt(r), i.c(), F(i, 1), i.m(t.parentNode, t)) : i && (Te(), $(i, 1, 1, () => {
        i = null;
      }), Pe());
    },
    i(r) {
      l || (F(o), F(i), l = !0);
    },
    o(r) {
      $(o), $(i), l = !1;
    },
    d(r) {
      r && (P(n), P(t)), o && o.d(r), i && i.d(r);
    }
  };
}
function vt(e) {
  let n, t;
  return n = new Ct({
    props: {
      corner: (
        /*corner*/
        e[36].point
      ),
      controlPoint: (
        /*corner*/
        e[36].inHandle
      ),
      viewportScale: (
        /*viewportScale*/
        e[3]
      )
    }
  }), n.$on("pointerdown", function() {
    ne(
      /*grab*/
      e[30](`IN-${/*selectedCorner*/
      e[35]}`)
    ) && e[30](`IN-${/*selectedCorner*/
    e[35]}`).apply(this, arguments);
  }), {
    c() {
      fe(n.$$.fragment);
    },
    m(l, o) {
      re(n, l, o), t = !0;
    },
    p(l, o) {
      e = l;
      const i = {};
      o[0] & /*geom, selectedCorners*/
      288 && (i.corner = /*corner*/
      e[36].point), o[0] & /*geom, selectedCorners*/
      288 && (i.controlPoint = /*corner*/
      e[36].inHandle), o[0] & /*viewportScale*/
      8 && (i.viewportScale = /*viewportScale*/
      e[3]), n.$set(i);
    },
    i(l) {
      t || (F(n.$$.fragment, l), t = !0);
    },
    o(l) {
      $(n.$$.fragment, l), t = !1;
    },
    d(l) {
      ie(n, l);
    }
  };
}
function kt(e) {
  let n, t;
  return n = new Ct({
    props: {
      corner: (
        /*corner*/
        e[36].point
      ),
      controlPoint: (
        /*corner*/
        e[36].outHandle
      ),
      viewportScale: (
        /*viewportScale*/
        e[3]
      )
    }
  }), n.$on("pointerdown", function() {
    ne(
      /*grab*/
      e[30](`OUT-${/*selectedCorner*/
      e[35]}`)
    ) && e[30](`OUT-${/*selectedCorner*/
    e[35]}`).apply(this, arguments);
  }), {
    c() {
      fe(n.$$.fragment);
    },
    m(l, o) {
      re(n, l, o), t = !0;
    },
    p(l, o) {
      e = l;
      const i = {};
      o[0] & /*geom, selectedCorners*/
      288 && (i.corner = /*corner*/
      e[36].point), o[0] & /*geom, selectedCorners*/
      288 && (i.controlPoint = /*corner*/
      e[36].outHandle), o[0] & /*viewportScale*/
      8 && (i.viewportScale = /*viewportScale*/
      e[3]), n.$set(i);
    },
    i(l) {
      t || (F(n.$$.fragment, l), t = !0);
    },
    o(l) {
      $(n.$$.fragment, l), t = !1;
    },
    d(l) {
      ie(n, l);
    }
  };
}
function Et(e) {
  let n, t;
  return n = new ye({
    props: {
      class: "a9s-corner-handle",
      x: (
        /*pt*/
        e[32].point[0]
      ),
      y: (
        /*pt*/
        e[32].point[1]
      ),
      scale: (
        /*viewportScale*/
        e[3]
      ),
      selected: (
        /*selectedCorners*/
        e[8].includes(
          /*idx*/
          e[34]
        )
      )
    }
  }), n.$on(
    "dblclick",
    /*onDoubleClick*/
    e[17](
      /*idx*/
      e[34]
    )
  ), n.$on(
    "pointerenter",
    /*onEnterHandle*/
    e[12]
  ), n.$on(
    "pointerleave",
    /*onLeaveHandle*/
    e[13]
  ), n.$on(
    "pointerdown",
    /*onHandlePointerDown*/
    e[15]
  ), n.$on("pointerdown", function() {
    ne(
      /*grab*/
      e[30](`CORNER-${/*idx*/
      e[34]}`)
    ) && e[30](`CORNER-${/*idx*/
    e[34]}`).apply(this, arguments);
  }), n.$on(
    "pointerup",
    /*onHandlePointerUp*/
    e[16](
      /*idx*/
      e[34]
    )
  ), {
    c() {
      fe(n.$$.fragment);
    },
    m(l, o) {
      re(n, l, o), t = !0;
    },
    p(l, o) {
      e = l;
      const i = {};
      o[0] & /*geom*/
      32 && (i.x = /*pt*/
      e[32].point[0]), o[0] & /*geom*/
      32 && (i.y = /*pt*/
      e[32].point[1]), o[0] & /*viewportScale*/
      8 && (i.scale = /*viewportScale*/
      e[3]), o[0] & /*selectedCorners*/
      256 && (i.selected = /*selectedCorners*/
      e[8].includes(
        /*idx*/
        e[34]
      )), n.$set(i);
    },
    i(l) {
      t || (F(n.$$.fragment, l), t = !0);
    },
    o(l) {
      $(n.$$.fragment, l), t = !1;
    },
    d(l) {
      ie(n, l);
    }
  };
}
function St(e) {
  let n, t;
  return n = new vn({
    props: {
      x: (
        /*point*/
        e[31][0]
      ),
      y: (
        /*point*/
        e[31][1]
      ),
      scale: (
        /*viewportScale*/
        e[3]
      )
    }
  }), n.$on("pointerdown", function() {
    ne(
      /*onAddPoint*/
      e[19](
        /*visibleMidpoint*/
        e[6]
      )
    ) && e[19](
      /*visibleMidpoint*/
      e[6]
    ).apply(this, arguments);
  }), {
    c() {
      fe(n.$$.fragment);
    },
    m(l, o) {
      re(n, l, o), t = !0;
    },
    p(l, o) {
      e = l;
      const i = {};
      o[0] & /*midpoints, visibleMidpoint*/
      2112 && (i.x = /*point*/
      e[31][0]), o[0] & /*midpoints, visibleMidpoint*/
      2112 && (i.y = /*point*/
      e[31][1]), o[0] & /*viewportScale*/
      8 && (i.scale = /*viewportScale*/
      e[3]), n.$set(i);
    },
    i(l) {
      t || (F(n.$$.fragment, l), t = !0);
    },
    o(l) {
      $(n.$$.fragment, l), t = !1;
    },
    d(l) {
      ie(n, l);
    }
  };
}
function mo(e) {
  let n, t, l, o, i, r, f, a, c, u, h, p, g, y, m, k, A, S, v, _ = (
    /*visibleMidpoint*/
    e[6] !== void 0 && !/*isHandleHovered*/
    e[7] && wt(gn(e))
  ), d = (
    /*selectedCorners*/
    e[8].length === 1 && yt(dn(e))
  ), b = we(
    /*geom*/
    e[5].points
  ), w = [];
  for (let C = 0; C < b.length; C += 1)
    w[C] = Et(gt(e, b, C));
  const H = (C) => $(w[C], 1, 1, () => {
    w[C] = null;
  });
  let I = (
    /*visibleMidpoint*/
    e[6] !== void 0 && !/*isHandleHovered*/
    e[7] && St(mn(e))
  );
  return {
    c() {
      n = N("defs"), _ && _.c(), t = ee(), l = N("g"), o = N("rect"), c = N("path"), h = N("path"), g = ee(), d && d.c(), y = ee();
      for (let C = 0; C < w.length; C += 1)
        w[C].c();
      m = ee(), I && I.c(), k = ge(), s(o, "x", i = /*mask*/
      e[9].x), s(o, "y", r = /*mask*/
      e[9].y), s(o, "width", f = /*mask*/
      e[9].w), s(o, "height", a = /*mask*/
      e[9].h), s(o, "class", "mask-buffer svelte-sq8d4p"), s(c, "class", u = Re(`a9s-outer polyline ${/*shape*/
      e[0].geometry.closed ? "closed" : "open"}`) + " svelte-sq8d4p"), s(
        c,
        "d",
        /*d*/
        e[10]
      ), s(h, "class", p = Re(`a9s-inner polyline a9s-shape-handle ${/*shape*/
      e[0].geometry.closed ? "closed" : "open"}`) + " svelte-sq8d4p"), s(
        h,
        "style",
        /*computedStyle*/
        e[1]
      ), s(
        h,
        "d",
        /*d*/
        e[10]
      ), s(l, "mask", `url(#${/*maskId*/
      e[20]})`);
    },
    m(C, j) {
      M(C, n, j), _ && _.m(n, null), M(C, t, j), M(C, l, j), z(l, o), z(l, c), z(l, h), M(C, g, j), d && d.m(C, j), M(C, y, j);
      for (let T = 0; T < w.length; T += 1)
        w[T] && w[T].m(C, j);
      M(C, m, j), I && I.m(C, j), M(C, k, j), A = !0, S || (v = [
        Q(
          c,
          "pointerup",
          /*onShapePointerUp*/
          e[14]
        ),
        Q(c, "pointerdown", function() {
          ne(
            /*grab*/
            e[30]("SHAPE")
          ) && e[30]("SHAPE").apply(this, arguments);
        }),
        Q(
          h,
          "pointerup",
          /*onShapePointerUp*/
          e[14]
        ),
        Q(h, "pointerdown", function() {
          ne(
            /*grab*/
            e[30]("SHAPE")
          ) && e[30]("SHAPE").apply(this, arguments);
        })
      ], S = !0);
    },
    p(C, j) {
      if (e = C, /*visibleMidpoint*/
      e[6] !== void 0 && !/*isHandleHovered*/
      e[7] ? _ ? _.p(gn(e), j) : (_ = wt(gn(e)), _.c(), _.m(n, null)) : _ && (_.d(1), _ = null), (!A || j[0] & /*mask*/
      512 && i !== (i = /*mask*/
      e[9].x)) && s(o, "x", i), (!A || j[0] & /*mask*/
      512 && r !== (r = /*mask*/
      e[9].y)) && s(o, "y", r), (!A || j[0] & /*mask*/
      512 && f !== (f = /*mask*/
      e[9].w)) && s(o, "width", f), (!A || j[0] & /*mask*/
      512 && a !== (a = /*mask*/
      e[9].h)) && s(o, "height", a), (!A || j[0] & /*shape*/
      1 && u !== (u = Re(`a9s-outer polyline ${/*shape*/
      e[0].geometry.closed ? "closed" : "open"}`) + " svelte-sq8d4p")) && s(c, "class", u), (!A || j[0] & /*d*/
      1024) && s(
        c,
        "d",
        /*d*/
        e[10]
      ), (!A || j[0] & /*shape*/
      1 && p !== (p = Re(`a9s-inner polyline a9s-shape-handle ${/*shape*/
      e[0].geometry.closed ? "closed" : "open"}`) + " svelte-sq8d4p")) && s(h, "class", p), (!A || j[0] & /*computedStyle*/
      2) && s(
        h,
        "style",
        /*computedStyle*/
        e[1]
      ), (!A || j[0] & /*d*/
      1024) && s(
        h,
        "d",
        /*d*/
        e[10]
      ), /*selectedCorners*/
      e[8].length === 1 ? d ? (d.p(dn(e), j), j[0] & /*selectedCorners*/
      256 && F(d, 1)) : (d = yt(dn(e)), d.c(), F(d, 1), d.m(y.parentNode, y)) : d && (Te(), $(d, 1, 1, () => {
        d = null;
      }), Pe()), j[0] & /*geom, viewportScale, selectedCorners, onDoubleClick, onEnterHandle, onLeaveHandle, onHandlePointerDown, grab, onHandlePointerUp*/
      1073983784) {
        b = we(
          /*geom*/
          e[5].points
        );
        let T;
        for (T = 0; T < b.length; T += 1) {
          const U = gt(e, b, T);
          w[T] ? (w[T].p(U, j), F(w[T], 1)) : (w[T] = Et(U), w[T].c(), F(w[T], 1), w[T].m(m.parentNode, m));
        }
        for (Te(), T = b.length; T < w.length; T += 1)
          H(T);
        Pe();
      }
      /*visibleMidpoint*/
      e[6] !== void 0 && !/*isHandleHovered*/
      e[7] ? I ? (I.p(mn(e), j), j[0] & /*visibleMidpoint, isHandleHovered*/
      192 && F(I, 1)) : (I = St(mn(e)), I.c(), F(I, 1), I.m(k.parentNode, k)) : I && (Te(), $(I, 1, 1, () => {
        I = null;
      }), Pe());
    },
    i(C) {
      if (!A) {
        F(d);
        for (let j = 0; j < b.length; j += 1)
          F(w[j]);
        F(I), A = !0;
      }
    },
    o(C) {
      $(d), w = w.filter(Boolean);
      for (let j = 0; j < w.length; j += 1)
        $(w[j]);
      $(I), A = !1;
    },
    d(C) {
      C && (P(n), P(t), P(l), P(g), P(y), P(m), P(k)), _ && _.d(), d && d.d(C), ze(w, C), I && I.d(C), S = !1, Me(v);
    }
  };
}
function go(e) {
  let n, t;
  return n = new qe({
    props: {
      shape: (
        /*shape*/
        e[0]
      ),
      transform: (
        /*transform*/
        e[2]
      ),
      editor: (
        /*editor*/
        e[18]
      ),
      svgEl: (
        /*svgEl*/
        e[4]
      ),
      $$slots: {
        default: [
          mo,
          ({ grab: l }) => ({ 30: l }),
          ({ grab: l }) => [l ? 1073741824 : 0]
        ]
      },
      $$scope: { ctx: e }
    }
  }), n.$on(
    "change",
    /*change_handler*/
    e[21]
  ), n.$on(
    "grab",
    /*grab_handler*/
    e[22]
  ), n.$on(
    "release",
    /*release_handler*/
    e[23]
  ), {
    c() {
      fe(n.$$.fragment);
    },
    m(l, o) {
      re(n, l, o), t = !0;
    },
    p(l, o) {
      const i = {};
      o[0] & /*shape*/
      1 && (i.shape = /*shape*/
      l[0]), o[0] & /*transform*/
      4 && (i.transform = /*transform*/
      l[2]), o[0] & /*svgEl*/
      16 && (i.svgEl = /*svgEl*/
      l[4]), o[0] & /*midpoints, visibleMidpoint, viewportScale, isHandleHovered, geom, selectedCorners, grab, shape, computedStyle, d, mask*/
      1073745899 | o[1] & /*$$scope*/
      64 && (i.$$scope = { dirty: o, ctx: l }), n.$set(i);
    },
    i(l) {
      t || (F(n.$$.fragment, l), t = !0);
    },
    o(l) {
      $(n.$$.fragment, l), t = !1;
    },
    d(l) {
      ie(n, l);
    }
  };
}
const wo = 250, yo = 1e3, bo = 12, yn = 4.5;
function vo(e, n, t) {
  let l, o, i, r;
  const f = Oe();
  let { shape: a } = n, { computedStyle: c } = n, { transform: u } = n, { viewportScale: h = 1 } = n, { svgEl: p } = n, g, y = !1, m = null, k = [], A = !1;
  const S = () => t(7, y = !0), v = () => t(7, y = !1), _ = (L) => {
    if (k.length > 0 || !o.some((E) => E.visible)) {
      t(6, g = void 0);
      return;
    }
    const [B, W] = u.elementToImage(L.offsetX, L.offsetY), R = (E) => Math.pow(E[0] - B, 2) + Math.pow(E[1] - W, 2), X = l.points.reduce((E, q) => R(q.point) < R(E.point) ? q : E), K = o.filter((E) => E.visible).reduce((E, q) => R(q.point) < R(E.point) ? q : E), x = Math.pow(yo / h, 2);
    R(X.point) < x || R(K.point) < x ? t(6, g = o.indexOf(K)) : t(6, g = void 0);
  }, d = () => {
    document.activeElement !== p && p.focus();
  }, b = () => {
    t(8, k = []), d();
  }, w = (L) => {
    t(7, y = !0), L.preventDefault(), L.stopPropagation(), m = performance.now();
  }, H = (L) => (B) => {
    if (!m || performance.now() - m > wo) return;
    const W = k.includes(L);
    if (A) {
      const R = uo(a, L, h);
      f("change", R), (!W || k.length > 1) && t(8, k = [L]);
    } else B.metaKey || B.ctrlKey || B.shiftKey ? W ? t(8, k = k.filter((R) => R !== L)) : t(8, k = [...k, L]) : W && k.length > 1 ? t(8, k = [L]) : W ? t(8, k = []) : t(8, k = [L]);
  }, I = (L) => () => {
    const B = l.points[L];
    if (B.type === "CORNER" || !B.inHandle && !B.outHandle) return;
    const W = l.points.map((K, x) => {
      if (x !== L) return K;
      const te = { ...K, locked: !0 }, E = B.inHandle || B.outHandle;
      if (!E) return K;
      const q = E[0] - B.point[0], le = E[1] - B.point[1];
      if (Math.sqrt(q ** 2 + le ** 2) === 0) return K;
      const he = [B.point[0] - q, B.point[1] - le];
      return B.inHandle ? (te.inHandle = B.inHandle, te.outHandle = he) : B.outHandle && (te.outHandle = B.outHandle, te.inHandle = he), te;
    }), R = Ie(xe(W, l.closed)), X = {
      ...a,
      geometry: { bounds: R, points: W, closed: l.closed }
    };
    f("change", X);
  }, C = (L, B, W) => {
    const R = L.geometry, [X, K] = W;
    let x;
    if (B === "SHAPE")
      x = R.points.map((E) => ({
        ...E,
        point: [E.point[0] + X, E.point[1] + K],
        inHandle: E.inHandle ? [E.inHandle[0] + X, E.inHandle[1] + K] : void 0,
        outHandle: E.outHandle ? [E.outHandle[0] + X, E.outHandle[1] + K] : void 0
      }));
    else if (B.startsWith("CORNER-")) {
      const E = parseInt(B.split("-")[1]);
      x = R.points.map((q, le) => le === E ? {
        ...q,
        point: [q.point[0] + X, q.point[1] + K],
        inHandle: q.inHandle ? [q.inHandle[0] + X, q.inHandle[1] + K] : void 0,
        outHandle: q.outHandle ? [q.outHandle[0] + X, q.outHandle[1] + K] : void 0
      } : q);
    } else if (B.startsWith("IN-") || B.startsWith("OUT-")) {
      const [E, q] = B.split("-"), le = parseInt(q);
      x = R.points.map((J, he) => {
        if (he === le && J.type === "CURVE") {
          const se = A ? !1 : J.locked, ae = { ...J, locked: se };
          if (E === "IN" && J.inHandle) {
            if (ae.inHandle = [J.inHandle[0] + X, J.inHandle[1] + K], J.outHandle && se) {
              const ue = ae.inHandle[0] - J.point[0], be = ae.inHandle[1] - J.point[1], ce = Math.sqrt(ue ** 2 + be ** 2), Ee = Math.sqrt((J.outHandle[0] - J.point[0]) ** 2 + (J.outHandle[1] - J.point[1]) ** 2);
              ce > 0 && (ae.outHandle = [
                J.point[0] - ue / ce * Ee,
                J.point[1] - be / ce * Ee
              ]);
            }
          } else if (E === "OUT" && J.outHandle && (ae.outHandle = [J.outHandle[0] + X, J.outHandle[1] + K], J.inHandle && se)) {
            const ue = ae.outHandle[0] - J.point[0], be = ae.outHandle[1] - J.point[1], ce = Math.sqrt(ue ** 2 + be ** 2), Ee = Math.sqrt((J.inHandle[0] - J.point[0]) ** 2 + (J.inHandle[1] - J.point[1]) ** 2);
            ce > 0 && (ae.inHandle = [
              J.point[0] - ue / ce * Ee,
              J.point[1] - be / ce * Ee
            ]);
          }
          return ae;
        }
        return J;
      });
    } else
      x = R.points;
    const te = Ie(xe(x, R.closed));
    return {
      ...L,
      geometry: { bounds: te, points: x, closed: R.closed }
    };
  }, j = (L) => async (B) => {
    B.stopPropagation();
    const W = [
      ...l.points.slice(0, L + 1),
      {
        type: "CORNER",
        point: o[L].point
      },
      ...l.points.slice(L + 1)
    ], R = Ie(xe(W, l.closed));
    f("change", {
      ...a,
      geometry: { points: W, bounds: R, closed: l.closed }
    }), await We();
    const X = [...document.querySelectorAll(".a9s-handle")][L + 1];
    if (X != null && X.firstChild) {
      const K = new PointerEvent(
        "pointerdown",
        {
          bubbles: !0,
          cancelable: !0,
          clientX: B.clientX,
          clientY: B.clientY,
          pointerId: B.pointerId,
          pointerType: B.pointerType,
          isPrimary: B.isPrimary,
          buttons: B.buttons
        }
      );
      X.firstChild.dispatchEvent(K);
    }
  }, T = () => {
    const L = l.closed ? 3 : 2;
    if (l.points.length - k.length < L) return;
    const B = l.points.filter((R, X) => !k.includes(X)), W = Ie(xe(B, l.closed));
    f("change", {
      ...a,
      geometry: {
        closed: a.geometry.closed,
        bounds: W,
        points: B
      }
    }), t(8, k = []);
  };
  Ce(() => {
    const L = (W) => {
      W.altKey && !A && (A = !0), (W.key === "Delete" || W.key === "Backspace") && T();
    }, B = (W) => {
      !W.altKey && A && (A = !1);
    };
    return p.addEventListener("pointermove", _), window.addEventListener("keydown", L), window.addEventListener("keyup", B), () => {
      p.removeEventListener("pointermove", _), window.removeEventListener("keydown", L), window.removeEventListener("keyup", B);
    };
  });
  const U = `polygon-mask-${Math.random().toString(36).substring(2, 12)}`;
  function Y(L) {
    oe.call(this, e, L);
  }
  function D(L) {
    oe.call(this, e, L);
  }
  function V(L) {
    oe.call(this, e, L);
  }
  return e.$$set = (L) => {
    "shape" in L && t(0, a = L.shape), "computedStyle" in L && t(1, c = L.computedStyle), "transform" in L && t(2, u = L.transform), "viewportScale" in L && t(3, h = L.viewportScale), "svgEl" in L && t(4, p = L.svgEl);
  }, e.$$.update = () => {
    e.$$.dirty[0] & /*shape*/
    1 && t(5, l = a.geometry), e.$$.dirty[0] & /*geom, viewportScale*/
    40 && t(11, o = Ht ? [] : l.points.reduce(
      (L, B, W) => {
        const R = W === l.points.length - 1 ? (
          // Last point
          l.closed ? l.points[0] : void 0
        ) : l.points[W + 1];
        if (!R) return L;
        const [X, K] = ao(B, R), te = Math.sqrt(Math.pow(R.point[0] - X, 2) + Math.pow(R.point[1] - K, 2)) > bo / h;
        return [...L, { point: [X, K], visible: te }];
      },
      []
    )), e.$$.dirty[0] & /*geom*/
    32 && t(10, i = Rt(l)), e.$$.dirty[0] & /*geom, viewportScale*/
    40 && t(9, r = tn(l.bounds, yn / h));
  }, [
    a,
    c,
    u,
    h,
    p,
    l,
    g,
    y,
    k,
    r,
    i,
    o,
    S,
    v,
    b,
    w,
    H,
    I,
    C,
    j,
    U,
    Y,
    D,
    V
  ];
}
class ko extends pe {
  constructor(n) {
    super(), me(
      this,
      n,
      vo,
      go,
      de,
      {
        shape: 0,
        computedStyle: 1,
        transform: 2,
        viewportScale: 3,
        svgEl: 4
      },
      null,
      [-1, -1]
    );
  }
}
function Eo(e) {
  var S, v;
  let n, t, l, o, i, r, f, a, c, u, h, p, g, y, m, k, A;
  return y = new ye({
    props: {
      class: "a9s-corner-top",
      x: (
        /*points*/
        ((S = e[5][0]) == null ? void 0 : S[0]) ?? /*center*/
        e[6].x
      ),
      y: (
        /*points*/
        ((v = e[5][0]) == null ? void 0 : v[1]) ?? /*center*/
        e[6].y - /*outerRadius*/
        e[9]
      ),
      scale: (
        /*viewportScale*/
        e[3]
      )
    }
  }), y.$on("pointerdown", function() {
    ne(
      /*grab*/
      e[17]("SCALE")
    ) && e[17]("SCALE").apply(this, arguments);
  }), {
    c() {
      n = N("defs"), t = N("mask"), l = N("rect"), a = N("path"), c = ee(), u = N("path"), h = ee(), p = N("path"), g = ee(), fe(y.$$.fragment), s(l, "x", o = /*mask*/
      e[7].x), s(l, "y", i = /*mask*/
      e[7].y), s(l, "width", r = /*mask*/
      e[7].w), s(l, "height", f = /*mask*/
      e[7].h), s(l, "class", "svelte-1u8dw9g"), s(
        a,
        "d",
        /*pathString*/
        e[8]
      ), s(a, "class", "svelte-1u8dw9g"), s(
        t,
        "id",
        /*maskId*/
        e[11]
      ), s(t, "class", "a9s-star-editor-mask svelte-1u8dw9g"), s(u, "class", "a9s-outer"), s(u, "mask", `url(#${/*maskId*/
      e[11]})`), s(
        u,
        "d",
        /*pathString*/
        e[8]
      ), s(p, "class", "a9s-inner a9s-shape-handle"), s(
        p,
        "style",
        /*computedStyle*/
        e[1]
      ), s(
        p,
        "d",
        /*pathString*/
        e[8]
      );
    },
    m(_, d) {
      M(_, n, d), z(n, t), z(t, l), z(t, a), M(_, c, d), M(_, u, d), M(_, h, d), M(_, p, d), M(_, g, d), re(y, _, d), m = !0, k || (A = [
        Q(u, "pointerdown", function() {
          ne(
            /*grab*/
            e[17]("SHAPE")
          ) && e[17]("SHAPE").apply(this, arguments);
        }),
        Q(p, "pointerdown", function() {
          ne(
            /*grab*/
            e[17]("SHAPE")
          ) && e[17]("SHAPE").apply(this, arguments);
        })
      ], k = !0);
    },
    p(_, d) {
      var w, H;
      e = _, (!m || d & /*mask*/
      128 && o !== (o = /*mask*/
      e[7].x)) && s(l, "x", o), (!m || d & /*mask*/
      128 && i !== (i = /*mask*/
      e[7].y)) && s(l, "y", i), (!m || d & /*mask*/
      128 && r !== (r = /*mask*/
      e[7].w)) && s(l, "width", r), (!m || d & /*mask*/
      128 && f !== (f = /*mask*/
      e[7].h)) && s(l, "height", f), (!m || d & /*pathString*/
      256) && s(
        a,
        "d",
        /*pathString*/
        e[8]
      ), (!m || d & /*pathString*/
      256) && s(
        u,
        "d",
        /*pathString*/
        e[8]
      ), (!m || d & /*computedStyle*/
      2) && s(
        p,
        "style",
        /*computedStyle*/
        e[1]
      ), (!m || d & /*pathString*/
      256) && s(
        p,
        "d",
        /*pathString*/
        e[8]
      );
      const b = {};
      d & /*points, center*/
      96 && (b.x = /*points*/
      ((w = e[5][0]) == null ? void 0 : w[0]) ?? /*center*/
      e[6].x), d & /*points, center, outerRadius*/
      608 && (b.y = /*points*/
      ((H = e[5][0]) == null ? void 0 : H[1]) ?? /*center*/
      e[6].y - /*outerRadius*/
      e[9]), d & /*viewportScale*/
      8 && (b.scale = /*viewportScale*/
      e[3]), y.$set(b);
    },
    i(_) {
      m || (F(y.$$.fragment, _), m = !0);
    },
    o(_) {
      $(y.$$.fragment, _), m = !1;
    },
    d(_) {
      _ && (P(n), P(c), P(u), P(h), P(p), P(g)), ie(y, _), k = !1, Me(A);
    }
  };
}
function So(e) {
  let n, t;
  return n = new qe({
    props: {
      shape: (
        /*shape*/
        e[0]
      ),
      transform: (
        /*transform*/
        e[2]
      ),
      editor: (
        /*editor*/
        e[10]
      ),
      svgEl: (
        /*svgEl*/
        e[4]
      ),
      $$slots: {
        default: [
          Eo,
          ({ grab: l }) => ({ 17: l }),
          ({ grab: l }) => l ? 131072 : 0
        ]
      },
      $$scope: { ctx: e }
    }
  }), n.$on(
    "grab",
    /*grab_handler*/
    e[14]
  ), n.$on(
    "change",
    /*change_handler*/
    e[15]
  ), n.$on(
    "release",
    /*release_handler*/
    e[16]
  ), {
    c() {
      fe(n.$$.fragment);
    },
    m(l, o) {
      re(n, l, o), t = !0;
    },
    p(l, [o]) {
      const i = {};
      o & /*shape*/
      1 && (i.shape = /*shape*/
      l[0]), o & /*transform*/
      4 && (i.transform = /*transform*/
      l[2]), o & /*svgEl*/
      16 && (i.svgEl = /*svgEl*/
      l[4]), o & /*$$scope, points, center, outerRadius, viewportScale, grab, computedStyle, pathString, mask*/
      394218 && (i.$$scope = { dirty: o, ctx: l }), n.$set(i);
    },
    i(l) {
      t || (F(n.$$.fragment, l), t = !0);
    },
    o(l) {
      $(n.$$.fragment, l), t = !1;
    },
    d(l) {
      ie(n, l);
    }
  };
}
function To(e, n, t) {
  let l, o, i, r, f, a, c, { shape: u } = n, { computedStyle: h } = n, { transform: p } = n, { viewportScale: g = 1 } = n, { svgEl: y } = n;
  const m = (_, d, b) => {
    const w = _.geometry, [H, I] = b;
    let C;
    if (d === "SHAPE")
      C = w.points.map(([j, T]) => [j + H, T + I]);
    else if (d === "SCALE") {
      const j = (w.bounds.minX + w.bounds.maxX) / 2, T = (w.bounds.minY + w.bounds.maxY) / 2, U = w.points[0], Y = Math.sqrt(Math.pow(U[0] - j, 2) + Math.pow(U[1] - T, 2)), D = U[1] + I, V = Math.sqrt(Math.pow(U[0] - j, 2) + Math.pow(D - T, 2)), L = Y > 0 ? V / Y : 1;
      C = w.points.map(([B, W]) => [j + (B - j) * L, T + (W - T) * L]);
    } else
      C = w.points;
    return {
      ..._,
      geometry: {
        bounds: Ie(C),
        points: C
      }
    };
  }, k = `star-mask-${Math.random().toString(36).substring(2, 12)}`;
  function A(_) {
    oe.call(this, e, _);
  }
  function S(_) {
    oe.call(this, e, _);
  }
  function v(_) {
    oe.call(this, e, _);
  }
  return e.$$set = (_) => {
    "shape" in _ && t(0, u = _.shape), "computedStyle" in _ && t(1, h = _.computedStyle), "transform" in _ && t(2, p = _.transform), "viewportScale" in _ && t(3, g = _.viewportScale), "svgEl" in _ && t(4, y = _.svgEl);
  }, e.$$.update = () => {
    e.$$.dirty & /*shape*/
    1 && t(12, l = u.geometry), e.$$.dirty & /*geom*/
    4096 && t(5, o = l.points), e.$$.dirty & /*geom*/
    4096 && t(6, i = {
      x: (l.bounds.minX + l.bounds.maxX) / 2,
      y: (l.bounds.minY + l.bounds.maxY) / 2
    }), e.$$.dirty & /*points*/
    32 && t(13, r = o.filter((_, d) => d % 2 === 0)), e.$$.dirty & /*outerPoints, center*/
    8256 && t(9, f = r.length > 0 ? Math.sqrt(Math.pow(r[0][0] - i.x, 2) + Math.pow(r[0][1] - i.y, 2)) : 0), e.$$.dirty & /*points*/
    32 && t(8, a = o.length > 0 ? `M ${o[0][0]},${o[0][1]}` + o.slice(1).map(([_, d]) => ` L ${_},${d}`).join("") + " Z" : ""), e.$$.dirty & /*geom, viewportScale*/
    4104 && t(7, c = tn(l.bounds, 2 / g));
  }, [
    u,
    h,
    p,
    g,
    y,
    o,
    i,
    c,
    a,
    f,
    m,
    k,
    l,
    r,
    A,
    S,
    v
  ];
}
class Po extends pe {
  constructor(n) {
    super(), me(this, n, To, So, de, {
      shape: 0,
      computedStyle: 1,
      transform: 2,
      viewportScale: 3,
      svgEl: 4
    });
  }
}
function Tt(e) {
  let n, t;
  return {
    c() {
      n = N("path"), t = N("path"), s(n, "class", "a9s-outer svelte-1ohtpx8"), s(
        n,
        "d",
        /*pathString*/
        e[0]
      ), s(t, "class", "a9s-inner svelte-1ohtpx8"), s(
        t,
        "d",
        /*pathString*/
        e[0]
      );
    },
    m(l, o) {
      M(l, n, o), M(l, t, o);
    },
    p(l, o) {
      o & /*pathString*/
      1 && s(
        n,
        "d",
        /*pathString*/
        l[0]
      ), o & /*pathString*/
      1 && s(
        t,
        "d",
        /*pathString*/
        l[0]
      );
    },
    d(l) {
      l && (P(n), P(t));
    }
  };
}
function Mo(e) {
  let n, t = (
    /*pathString*/
    e[0] && Tt(e)
  );
  return {
    c() {
      n = N("g"), t && t.c(), s(n, "class", "a9s-annotation a9s-rubberband");
    },
    m(l, o) {
      M(l, n, o), t && t.m(n, null);
    },
    p(l, [o]) {
      /*pathString*/
      l[0] ? t ? t.p(l, o) : (t = Tt(l), t.c(), t.m(n, null)) : t && (t.d(1), t = null);
    },
    i: _e,
    o: _e,
    d(l) {
      l && P(n), t && t.d();
    }
  };
}
const Pt = 5, Mt = 0.382;
function Ho(e, n, t) {
  let l, o;
  const i = Oe();
  let { addEventListener: r } = n, { drawingMode: f } = n, { transform: a } = n, { viewportScale: c } = n, u, h = 0, p;
  const g = (S, v, _, d) => {
    const b = [], w = Math.PI / Pt;
    for (let H = 0; H < Pt * 2; H++) {
      const I = H % 2 === 0 ? _ : d, C = H * w - Math.PI / 2;
      b.push([S + I * Math.cos(C), v + I * Math.sin(C)]);
    }
    return b;
  }, y = (S) => {
    const v = S;
    p = performance.now(), f === "drag" && (t(5, u = a.elementToImage(v.offsetX, v.offsetY)), t(6, h = 1));
  }, m = (S) => {
    const v = S;
    if (u) {
      const _ = a.elementToImage(v.offsetX, v.offsetY);
      t(6, h = Math.sqrt(Math.pow(_[0] - u[0], 2) + Math.pow(_[1] - u[1], 2)));
    }
  }, k = (S) => {
    const v = S, _ = performance.now() - p;
    if (f === "click") {
      if (_ > 300) return;
      u ? A() : (t(5, u = a.elementToImage(v.offsetX, v.offsetY)), t(6, h = 1));
    } else u && (_ > 300 || h > 10 ? (v.stopPropagation(), A()) : (t(5, u = void 0), t(6, h = 0)));
  }, A = () => {
    if (h > 10 && u) {
      const S = h * Mt, v = g(u[0], u[1], h, S), _ = {
        type: He.POLYGON,
        geometry: { bounds: Ie(v), points: v }
      };
      i("create", _);
    }
    t(5, u = void 0), t(6, h = 0);
  };
  return Ce(() => {
    r("pointerdown", y), r("pointermove", m), r("pointerup", k, !0);
  }), e.$$set = (S) => {
    "addEventListener" in S && t(1, r = S.addEventListener), "drawingMode" in S && t(2, f = S.drawingMode), "transform" in S && t(3, a = S.transform), "viewportScale" in S && t(4, c = S.viewportScale);
  }, e.$$.update = () => {
    e.$$.dirty & /*center, outerRadius*/
    96 && t(7, l = u ? g(u[0], u[1], h, h * Mt) : []), e.$$.dirty & /*starPoints*/
    128 && t(0, o = l.length > 0 ? `M ${l[0][0]},${l[0][1]}` + l.slice(1).map(([S, v]) => ` L ${S},${v}`).join("") + " Z" : "");
  }, [
    o,
    r,
    f,
    a,
    c,
    u,
    h,
    l
  ];
}
class Lo extends pe {
  constructor(n) {
    super(), me(this, n, Ho, Mo, de, {
      addEventListener: 1,
      drawingMode: 2,
      transform: 3,
      viewportScale: 4
    });
  }
}
function Io(e) {
  let n, t, l, o, i, r, f, a, c, u, h, p, g, y, m, k, A, S, v, _, d, b, w, H, I, C, j, T, U, Y, D, V, L, B, W, R, X, K, x, te, E, q, le, J, he, se, ae, ue, be, ce, Ee, ve, Z, Ge, Ke;
  return se = new ye({
    props: {
      class: "a9s-corner-handle-topleft",
      x: (
        /*geom*/
        e[5].x
      ),
      y: (
        /*geom*/
        e[5].y
      ),
      scale: (
        /*viewportScale*/
        e[3]
      )
    }
  }), se.$on("pointerdown", function() {
    ne(
      /*grab*/
      e[12]("TOP_LEFT")
    ) && e[12]("TOP_LEFT").apply(this, arguments);
  }), ue = new ye({
    props: {
      class: "a9s-corner-handle-topright",
      x: (
        /*geom*/
        e[5].x + /*geom*/
        e[5].w
      ),
      y: (
        /*geom*/
        e[5].y
      ),
      scale: (
        /*viewportScale*/
        e[3]
      )
    }
  }), ue.$on("pointerdown", function() {
    ne(
      /*grab*/
      e[12]("TOP_RIGHT")
    ) && e[12]("TOP_RIGHT").apply(this, arguments);
  }), ce = new ye({
    props: {
      class: "a9s-corner-handle-bottomright",
      x: (
        /*geom*/
        e[5].x + /*geom*/
        e[5].w
      ),
      y: (
        /*geom*/
        e[5].y + /*geom*/
        e[5].h
      ),
      scale: (
        /*viewportScale*/
        e[3]
      )
    }
  }), ce.$on("pointerdown", function() {
    ne(
      /*grab*/
      e[12]("BOTTOM_RIGHT")
    ) && e[12]("BOTTOM_RIGHT").apply(this, arguments);
  }), ve = new ye({
    props: {
      class: "a9s-corner-handle-bottomleft",
      x: (
        /*geom*/
        e[5].x
      ),
      y: (
        /*geom*/
        e[5].y + /*geom*/
        e[5].h
      ),
      scale: (
        /*viewportScale*/
        e[3]
      )
    }
  }), ve.$on("pointerdown", function() {
    ne(
      /*grab*/
      e[12]("BOTTOM_LEFT")
    ) && e[12]("BOTTOM_LEFT").apply(this, arguments);
  }), {
    c() {
      n = N("defs"), t = N("mask"), l = N("rect"), a = N("rect"), g = ee(), y = N("rect"), v = ee(), _ = N("rect"), I = ee(), C = N("rect"), Y = ee(), D = N("rect"), W = ee(), R = N("rect"), te = ee(), E = N("rect"), he = ee(), fe(se.$$.fragment), ae = ee(), fe(ue.$$.fragment), be = ee(), fe(ce.$$.fragment), Ee = ee(), fe(ve.$$.fragment), s(l, "class", "rect-mask-bg svelte-1njczvj"), s(l, "x", o = /*mask*/
      e[6].x), s(l, "y", i = /*mask*/
      e[6].y), s(l, "width", r = /*mask*/
      e[6].w), s(l, "height", f = /*mask*/
      e[6].h), s(a, "class", "rect-mask-fg svelte-1njczvj"), s(a, "x", c = /*geom*/
      e[5].x), s(a, "y", u = /*geom*/
      e[5].y), s(a, "width", h = /*geom*/
      e[5].w), s(a, "height", p = /*geom*/
      e[5].h), s(
        t,
        "id",
        /*maskId*/
        e[8]
      ), s(t, "class", "a9s-rectangle-editor-mask svelte-1njczvj"), s(y, "class", "a9s-outer"), s(y, "mask", `url(#${/*maskId*/
      e[8]})`), s(y, "x", m = /*geom*/
      e[5].x), s(y, "y", k = /*geom*/
      e[5].y), s(y, "width", A = /*geom*/
      e[5].w), s(y, "height", S = /*geom*/
      e[5].h), s(_, "class", "a9s-inner a9s-shape-handle"), s(
        _,
        "style",
        /*computedStyle*/
        e[1]
      ), s(_, "x", d = /*geom*/
      e[5].x), s(_, "y", b = /*geom*/
      e[5].y), s(_, "width", w = /*geom*/
      e[5].w), s(_, "height", H = /*geom*/
      e[5].h), s(C, "class", "a9s-edge-handle a9s-edge-handle-top"), s(C, "x", j = /*geom*/
      e[5].x), s(C, "y", T = /*geom*/
      e[5].y), s(C, "height", 1), s(C, "width", U = /*geom*/
      e[5].w), s(D, "class", "a9s-edge-handle a9s-edge-handle-right"), s(D, "x", V = /*geom*/
      e[5].x + /*geom*/
      e[5].w), s(D, "y", L = /*geom*/
      e[5].y), s(D, "height", B = /*geom*/
      e[5].h), s(D, "width", 1), s(R, "class", "a9s-edge-handle a9s-edge-handle-bottom"), s(R, "x", X = /*geom*/
      e[5].x), s(R, "y", K = /*geom*/
      e[5].y + /*geom*/
      e[5].h), s(R, "height", 1), s(R, "width", x = /*geom*/
      e[5].w), s(E, "class", "a9s-edge-handle a9s-edge-handle-left"), s(E, "x", q = /*geom*/
      e[5].x), s(E, "y", le = /*geom*/
      e[5].y), s(E, "height", J = /*geom*/
      e[5].h), s(E, "width", 1);
    },
    m(G, O) {
      M(G, n, O), z(n, t), z(t, l), z(t, a), M(G, g, O), M(G, y, O), M(G, v, O), M(G, _, O), M(G, I, O), M(G, C, O), M(G, Y, O), M(G, D, O), M(G, W, O), M(G, R, O), M(G, te, O), M(G, E, O), M(G, he, O), re(se, G, O), M(G, ae, O), re(ue, G, O), M(G, be, O), re(ce, G, O), M(G, Ee, O), re(ve, G, O), Z = !0, Ge || (Ke = [
        Q(y, "pointerdown", function() {
          ne(
            /*grab*/
            e[12]("SHAPE")
          ) && e[12]("SHAPE").apply(this, arguments);
        }),
        Q(_, "pointerdown", function() {
          ne(
            /*grab*/
            e[12]("SHAPE")
          ) && e[12]("SHAPE").apply(this, arguments);
        }),
        Q(C, "pointerdown", function() {
          ne(
            /*grab*/
            e[12]("TOP")
          ) && e[12]("TOP").apply(this, arguments);
        }),
        Q(D, "pointerdown", function() {
          ne(
            /*grab*/
            e[12]("RIGHT")
          ) && e[12]("RIGHT").apply(this, arguments);
        }),
        Q(R, "pointerdown", function() {
          ne(
            /*grab*/
            e[12]("BOTTOM")
          ) && e[12]("BOTTOM").apply(this, arguments);
        }),
        Q(E, "pointerdown", function() {
          ne(
            /*grab*/
            e[12]("LEFT")
          ) && e[12]("LEFT").apply(this, arguments);
        })
      ], Ge = !0);
    },
    p(G, O) {
      e = G, (!Z || O & /*mask*/
      64 && o !== (o = /*mask*/
      e[6].x)) && s(l, "x", o), (!Z || O & /*mask*/
      64 && i !== (i = /*mask*/
      e[6].y)) && s(l, "y", i), (!Z || O & /*mask*/
      64 && r !== (r = /*mask*/
      e[6].w)) && s(l, "width", r), (!Z || O & /*mask*/
      64 && f !== (f = /*mask*/
      e[6].h)) && s(l, "height", f), (!Z || O & /*geom*/
      32 && c !== (c = /*geom*/
      e[5].x)) && s(a, "x", c), (!Z || O & /*geom*/
      32 && u !== (u = /*geom*/
      e[5].y)) && s(a, "y", u), (!Z || O & /*geom*/
      32 && h !== (h = /*geom*/
      e[5].w)) && s(a, "width", h), (!Z || O & /*geom*/
      32 && p !== (p = /*geom*/
      e[5].h)) && s(a, "height", p), (!Z || O & /*geom*/
      32 && m !== (m = /*geom*/
      e[5].x)) && s(y, "x", m), (!Z || O & /*geom*/
      32 && k !== (k = /*geom*/
      e[5].y)) && s(y, "y", k), (!Z || O & /*geom*/
      32 && A !== (A = /*geom*/
      e[5].w)) && s(y, "width", A), (!Z || O & /*geom*/
      32 && S !== (S = /*geom*/
      e[5].h)) && s(y, "height", S), (!Z || O & /*computedStyle*/
      2) && s(
        _,
        "style",
        /*computedStyle*/
        e[1]
      ), (!Z || O & /*geom*/
      32 && d !== (d = /*geom*/
      e[5].x)) && s(_, "x", d), (!Z || O & /*geom*/
      32 && b !== (b = /*geom*/
      e[5].y)) && s(_, "y", b), (!Z || O & /*geom*/
      32 && w !== (w = /*geom*/
      e[5].w)) && s(_, "width", w), (!Z || O & /*geom*/
      32 && H !== (H = /*geom*/
      e[5].h)) && s(_, "height", H), (!Z || O & /*geom*/
      32 && j !== (j = /*geom*/
      e[5].x)) && s(C, "x", j), (!Z || O & /*geom*/
      32 && T !== (T = /*geom*/
      e[5].y)) && s(C, "y", T), (!Z || O & /*geom*/
      32 && U !== (U = /*geom*/
      e[5].w)) && s(C, "width", U), (!Z || O & /*geom*/
      32 && V !== (V = /*geom*/
      e[5].x + /*geom*/
      e[5].w)) && s(D, "x", V), (!Z || O & /*geom*/
      32 && L !== (L = /*geom*/
      e[5].y)) && s(D, "y", L), (!Z || O & /*geom*/
      32 && B !== (B = /*geom*/
      e[5].h)) && s(D, "height", B), (!Z || O & /*geom*/
      32 && X !== (X = /*geom*/
      e[5].x)) && s(R, "x", X), (!Z || O & /*geom*/
      32 && K !== (K = /*geom*/
      e[5].y + /*geom*/
      e[5].h)) && s(R, "y", K), (!Z || O & /*geom*/
      32 && x !== (x = /*geom*/
      e[5].w)) && s(R, "width", x), (!Z || O & /*geom*/
      32 && q !== (q = /*geom*/
      e[5].x)) && s(E, "x", q), (!Z || O & /*geom*/
      32 && le !== (le = /*geom*/
      e[5].y)) && s(E, "y", le), (!Z || O & /*geom*/
      32 && J !== (J = /*geom*/
      e[5].h)) && s(E, "height", J);
      const Ae = {};
      O & /*geom*/
      32 && (Ae.x = /*geom*/
      e[5].x), O & /*geom*/
      32 && (Ae.y = /*geom*/
      e[5].y), O & /*viewportScale*/
      8 && (Ae.scale = /*viewportScale*/
      e[3]), se.$set(Ae);
      const De = {};
      O & /*geom*/
      32 && (De.x = /*geom*/
      e[5].x + /*geom*/
      e[5].w), O & /*geom*/
      32 && (De.y = /*geom*/
      e[5].y), O & /*viewportScale*/
      8 && (De.scale = /*viewportScale*/
      e[3]), ue.$set(De);
      const Ye = {};
      O & /*geom*/
      32 && (Ye.x = /*geom*/
      e[5].x + /*geom*/
      e[5].w), O & /*geom*/
      32 && (Ye.y = /*geom*/
      e[5].y + /*geom*/
      e[5].h), O & /*viewportScale*/
      8 && (Ye.scale = /*viewportScale*/
      e[3]), ce.$set(Ye);
      const Xe = {};
      O & /*geom*/
      32 && (Xe.x = /*geom*/
      e[5].x), O & /*geom*/
      32 && (Xe.y = /*geom*/
      e[5].y + /*geom*/
      e[5].h), O & /*viewportScale*/
      8 && (Xe.scale = /*viewportScale*/
      e[3]), ve.$set(Xe);
    },
    i(G) {
      Z || (F(se.$$.fragment, G), F(ue.$$.fragment, G), F(ce.$$.fragment, G), F(ve.$$.fragment, G), Z = !0);
    },
    o(G) {
      $(se.$$.fragment, G), $(ue.$$.fragment, G), $(ce.$$.fragment, G), $(ve.$$.fragment, G), Z = !1;
    },
    d(G) {
      G && (P(n), P(g), P(y), P(v), P(_), P(I), P(C), P(Y), P(D), P(W), P(R), P(te), P(E), P(he), P(ae), P(be), P(Ee)), ie(se, G), ie(ue, G), ie(ce, G), ie(ve, G), Ge = !1, Me(Ke);
    }
  };
}
function Oo(e) {
  let n, t;
  return n = new qe({
    props: {
      shape: (
        /*shape*/
        e[0]
      ),
      transform: (
        /*transform*/
        e[2]
      ),
      editor: (
        /*editor*/
        e[7]
      ),
      svgEl: (
        /*svgEl*/
        e[4]
      ),
      $$slots: {
        default: [
          Io,
          ({ grab: l }) => ({ 12: l }),
          ({ grab: l }) => l ? 4096 : 0
        ]
      },
      $$scope: { ctx: e }
    }
  }), n.$on(
    "grab",
    /*grab_handler*/
    e[9]
  ), n.$on(
    "change",
    /*change_handler*/
    e[10]
  ), n.$on(
    "release",
    /*release_handler*/
    e[11]
  ), {
    c() {
      fe(n.$$.fragment);
    },
    m(l, o) {
      re(n, l, o), t = !0;
    },
    p(l, [o]) {
      const i = {};
      o & /*shape*/
      1 && (i.shape = /*shape*/
      l[0]), o & /*transform*/
      4 && (i.transform = /*transform*/
      l[2]), o & /*svgEl*/
      16 && (i.svgEl = /*svgEl*/
      l[4]), o & /*$$scope, geom, viewportScale, grab, computedStyle, mask*/
      12394 && (i.$$scope = { dirty: o, ctx: l }), n.$set(i);
    },
    i(l) {
      t || (F(n.$$.fragment, l), t = !0);
    },
    o(l) {
      $(n.$$.fragment, l), t = !1;
    },
    d(l) {
      ie(n, l);
    }
  };
}
function Co(e, n, t) {
  let l, o, { shape: i } = n, { computedStyle: r } = n, { transform: f } = n, { viewportScale: a = 1 } = n, { svgEl: c } = n;
  const u = (m, k, A) => {
    const S = m.geometry.bounds;
    let [v, _] = [S.minX, S.minY], [d, b] = [S.maxX, S.maxY];
    const [w, H] = A;
    if (k === "SHAPE")
      v += w, d += w, _ += H, b += H;
    else {
      switch (k) {
        case "TOP":
        case "TOP_LEFT":
        case "TOP_RIGHT": {
          _ += H;
          break;
        }
        case "BOTTOM":
        case "BOTTOM_LEFT":
        case "BOTTOM_RIGHT": {
          b += H;
          break;
        }
      }
      switch (k) {
        case "LEFT":
        case "TOP_LEFT":
        case "BOTTOM_LEFT": {
          v += w;
          break;
        }
        case "RIGHT":
        case "TOP_RIGHT":
        case "BOTTOM_RIGHT": {
          d += w;
          break;
        }
      }
    }
    const I = Math.min(v, d), C = Math.min(_, b), j = Math.abs(d - v), T = Math.abs(b - _);
    return {
      ...m,
      geometry: {
        x: I,
        y: C,
        w: j,
        h: T,
        bounds: {
          minX: I,
          minY: C,
          maxX: I + j,
          maxY: C + T
        }
      }
    };
  }, h = `rect-mask-${Math.random().toString(36).substring(2, 12)}`;
  function p(m) {
    oe.call(this, e, m);
  }
  function g(m) {
    oe.call(this, e, m);
  }
  function y(m) {
    oe.call(this, e, m);
  }
  return e.$$set = (m) => {
    "shape" in m && t(0, i = m.shape), "computedStyle" in m && t(1, r = m.computedStyle), "transform" in m && t(2, f = m.transform), "viewportScale" in m && t(3, a = m.viewportScale), "svgEl" in m && t(4, c = m.svgEl);
  }, e.$$.update = () => {
    e.$$.dirty & /*shape*/
    1 && t(5, l = i.geometry), e.$$.dirty & /*geom, viewportScale*/
    40 && t(6, o = tn(l.bounds, 2 / a));
  }, [
    i,
    r,
    f,
    a,
    c,
    l,
    o,
    u,
    h,
    p,
    g,
    y
  ];
}
class Ro extends pe {
  constructor(n) {
    super(), me(this, n, Co, Oo, de, {
      shape: 0,
      computedStyle: 1,
      transform: 2,
      viewportScale: 3,
      svgEl: 4
    });
  }
}
function No(e) {
  let n;
  return {
    c() {
      n = N("g"), s(n, "class", "a9s-annotation a9s-rubberband");
    },
    m(t, l) {
      M(t, n, l);
    },
    p: _e,
    i: _e,
    o: _e,
    d(t) {
      t && P(n);
    }
  };
}
function Ao(e, n, t) {
  const l = Oe();
  let { addEventListener: o } = n, { drawingMode: i } = n, { transform: r } = n, { viewportScale: f = 1 } = n, a = 0;
  const c = (h) => {
    a = performance.now();
  }, u = (h) => {
    const p = h;
    if (performance.now() - a > 400) return;
    const [y, m] = r.elementToImage(p.offsetX, p.offsetY), k = {
      type: He.RECTANGLE,
      geometry: {
        bounds: {
          minX: y,
          minY: m - 1,
          maxX: y + 1,
          maxY: m
        },
        x: y,
        y: m - 1,
        w: 1,
        h: 1
      },
      properties: { toolType: "text" }
    };
    l("create", k);
  };
  return Ce(() => {
    o("pointerdown", c), o("pointerup", u, !0);
  }), e.$$set = (h) => {
    "addEventListener" in h && t(0, o = h.addEventListener), "drawingMode" in h && t(1, i = h.drawingMode), "transform" in h && t(2, r = h.transform), "viewportScale" in h && t(3, f = h.viewportScale);
  }, [o, i, r, f];
}
class Do extends pe {
  constructor(n) {
    super(), me(this, n, Ao, No, de, {
      addEventListener: 0,
      drawingMode: 1,
      transform: 2,
      viewportScale: 3
    });
  }
}
const Fo = (e) => {
  e.registerDrawingTool("ellipse", Bl), e.registerShapeEditor(He.ELLIPSE, Yl), e.registerDrawingTool("line", Kl), e.registerDrawingTool("arrow", Gt), e.registerShapeEditor(He.LINE, Fl), e.registerDrawingTool("path", ro), e.registerDrawingTool("distance", Vt), e.registerShapeEditor(He.POLYLINE, ko), e.registerDrawingTool("star", Lo), e.registerShapeEditor(He.POLYGON, Po), e.registerDrawingTool("text", Do), e.registerShapeEditor(He.RECTANGLE, Ro), to(e);
};
export {
  Fo as mountPlugin
};
//# sourceMappingURL=annotorious-plugin-tools.es.js.map
