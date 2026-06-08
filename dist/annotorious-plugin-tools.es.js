import { distance as Re, boundsFromPoints as Le, ShapeType as Me, getMaskDimensions as nn, isTouch as Tt, computeSVGPath as It, approximateAsPolygon as $e } from "@annotorious/annotorious";
import { SvelteComponent as pe, init as me, safe_not_equal as _e, noop as he, detach as M, insert as H, svg_element as N, attr as s, binding_callbacks as Qe, empty as ve, create_slot as Ot, run_all as Se, transition_out as $, transition_in as z, update_slot_base as Ct, get_all_dirty_from_scope as Rt, get_slot_changes as Dt, listen as J, assign as vn, exclude_internal_props as En, bubble as oe, toggle_class as He, append as K, null_to_empty as Ce, destroy_component as le, mount_component as se, create_component as ie, ensure_array_like as be, destroy_each as ze, group_outros as Ee, check_outros as ke, is_function as te, space as x, set_style as je, element as ge, component_subscribe as Nt, update_keyed_each as kn, destroy_block as At, outro_and_destroy_block as Yt, set_data as Pt, text as Mt, set_input_value as Sn } from "svelte/internal";
import "svelte/internal/disclose-version";
import { createEventDispatcher as Ie, onMount as Oe, tick as Ze, onDestroy as Xt } from "svelte";
import "@annotorious/core";
import "svelte/store";
function Tn(e) {
  let n, t, o, l = (
    /*x1*/
    (e[3] !== /*x2*/
    e[5] || /*y1*/
    e[4] !== /*y2*/
    e[6]) && Pn(e)
  );
  return {
    c() {
      n = N("line"), t = N("line"), l && l.c(), o = ve(), s(n, "class", "a9s-outer"), s(
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
      H(i, n, r), H(i, t, r), l && l.m(i, r), H(i, o, r);
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
      i[6] ? l ? l.p(i, r) : (l = Pn(i), l.c(), l.m(o.parentNode, o)) : l && (l.d(1), l = null);
    },
    d(i) {
      i && (M(n), M(t), M(o)), l && l.d(i);
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
    m(o, l) {
      H(o, n, l);
    },
    p(o, l) {
      l & /*y2, y1, x2, x1*/
      120 && t !== (t = /*func*/
      o[11]()) && s(n, "points", t);
    },
    d(o) {
      o && M(n);
    }
  };
}
function jt(e) {
  let n, t = (
    /*origin*/
    e[1] && /*cursor*/
    e[2] && Tn(e)
  );
  return {
    c() {
      n = N("g"), t && t.c(), s(n, "class", "a9s-annotation a9s-rubberband");
    },
    m(o, l) {
      H(o, n, l), t && t.m(n, null), e[12](n);
    },
    p(o, [l]) {
      /*origin*/
      o[1] && /*cursor*/
      o[2] ? t ? t.p(o, l) : (t = Tn(o), t.c(), t.m(n, null)) : t && (t.d(1), t = null);
    },
    i: he,
    o: he,
    d(o) {
      o && M(n), t && t.d(), e[12](null);
    }
  };
}
function qt(e, n, t) {
  const o = Ie();
  let { addEventListener: l } = n, { drawingMode: i } = n, { transform: r } = n, { viewportScale: f } = n, a, c, u, h, m, y, _, p, v;
  const D = (g) => {
    const S = g, { timeStamp: I, offsetX: R, offsetY: q } = S;
    p = { timeStamp: I, offsetX: R, offsetY: q }, i === "drag" && (t(1, c = r.elementToImage(S.offsetX, S.offsetY)), t(2, u = c), t(3, h = c[0]), t(4, m = c[1]), t(5, y = u[0]), t(6, _ = u[1]));
  }, P = (g) => {
    const S = g || v;
    c && (t(2, u = r.elementToImage(S.offsetX, S.offsetY)), t(5, y = u[0]), t(6, _ = u[1])), g && (v = g);
  }, b = (g) => {
    const S = g;
    if (i === "click") {
      const I = performance.now() - p.timeStamp, R = Re([p.offsetX, p.offsetY], [S.offsetX, S.offsetY]);
      if (I > 300 || R > 15) return;
      c ? d() : (t(1, c = r.elementToImage(S.offsetX, S.offsetY)), t(2, u = c), t(3, h = c[0]), t(4, m = c[1]), t(5, y = u[0]), t(6, _ = u[1]));
    } else c && (S.stopPropagation(), d());
  }, d = () => {
    if (c && u && Re(c, u) > 4) {
      const g = {
        type: Me.LINE,
        geometry: {
          bounds: Le([c, u]),
          points: [c, u]
        },
        properties: { toolType: "arrow" }
      };
      o("create", g);
    }
    t(1, c = void 0), t(2, u = void 0), v = void 0;
  };
  Oe(() => {
    l("pointerdown", D, !0), l("pointermove", P), l("pointerup", b, !0);
  });
  const w = () => {
    const g = Math.atan2(_ - m, y - h), S = 12, I = y - S * Math.cos(g - Math.PI / 6), R = _ - S * Math.sin(g - Math.PI / 6), q = y - S * Math.cos(g + Math.PI / 6), T = _ - S * Math.sin(g + Math.PI / 6);
    return `${I},${R} ${y},${_} ${q},${T}`;
  };
  function E(g) {
    Qe[g ? "unshift" : "push"](() => {
      a = g, t(0, a);
    });
  }
  return e.$$set = (g) => {
    "addEventListener" in g && t(7, l = g.addEventListener), "drawingMode" in g && t(8, i = g.drawingMode), "transform" in g && t(9, r = g.transform), "viewportScale" in g && t(10, f = g.viewportScale);
  }, [
    a,
    c,
    u,
    h,
    m,
    y,
    _,
    l,
    i,
    r,
    f,
    w,
    E
  ];
}
class Bt extends pe {
  constructor(n) {
    super(), me(this, n, qt, jt, _e, {
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
    m(o, l) {
      H(o, n, l), H(o, t, l);
    },
    p(o, l) {
      l & /*x1*/
      8 && s(
        n,
        "x1",
        /*x1*/
        o[3]
      ), l & /*y1*/
      16 && s(
        n,
        "y1",
        /*y1*/
        o[4]
      ), l & /*x2*/
      32 && s(
        n,
        "x2",
        /*x2*/
        o[5]
      ), l & /*y2*/
      64 && s(
        n,
        "y2",
        /*y2*/
        o[6]
      ), l & /*x1*/
      8 && s(
        t,
        "x1",
        /*x1*/
        o[3]
      ), l & /*y1*/
      16 && s(
        t,
        "y1",
        /*y1*/
        o[4]
      ), l & /*x2*/
      32 && s(
        t,
        "x2",
        /*x2*/
        o[5]
      ), l & /*y2*/
      64 && s(
        t,
        "y2",
        /*y2*/
        o[6]
      );
    },
    d(o) {
      o && (M(n), M(t));
    }
  };
}
function Ut(e) {
  let n, t = (
    /*origin*/
    e[1] && /*cursor*/
    e[2] && Mn(e)
  );
  return {
    c() {
      n = N("g"), t && t.c(), s(n, "class", "a9s-annotation a9s-rubberband");
    },
    m(o, l) {
      H(o, n, l), t && t.m(n, null), e[11](n);
    },
    p(o, [l]) {
      /*origin*/
      o[1] && /*cursor*/
      o[2] ? t ? t.p(o, l) : (t = Mn(o), t.c(), t.m(n, null)) : t && (t.d(1), t = null);
    },
    i: he,
    o: he,
    d(o) {
      o && M(n), t && t.d(), e[11](null);
    }
  };
}
function Gt(e, n, t) {
  const o = Ie();
  let { addEventListener: l } = n, { drawingMode: i } = n, { transform: r } = n, { viewportScale: f } = n, a, c, u, h, m, y, _, p, v;
  const D = (E) => {
    const g = E, { timeStamp: S, offsetX: I, offsetY: R } = g;
    p = { timeStamp: S, offsetX: I, offsetY: R }, i === "drag" && (t(1, c = r.elementToImage(g.offsetX, g.offsetY)), t(2, u = c), t(3, h = c[0]), t(4, m = c[1]), t(5, y = u[0]), t(6, _ = u[1]));
  }, P = (E) => {
    const g = E || v;
    c && (t(2, u = r.elementToImage(g.offsetX, g.offsetY)), t(5, y = u[0]), t(6, _ = u[1])), E && (v = E);
  }, b = (E) => {
    const g = E;
    if (i === "click") {
      const S = performance.now() - p.timeStamp, I = Re([p.offsetX, p.offsetY], [g.offsetX, g.offsetY]);
      if (S > 300 || I > 15) return;
      c ? d() : (t(1, c = r.elementToImage(g.offsetX, g.offsetY)), t(2, u = c), t(3, h = c[0]), t(4, m = c[1]), t(5, y = u[0]), t(6, _ = u[1]));
    } else c && (g.stopPropagation(), d());
  }, d = () => {
    if (c && u && Re(c, u) > 4) {
      const E = {
        type: Me.POLYLINE,
        geometry: {
          bounds: Le([c, u]),
          points: [{ type: "CORNER", point: c }, { type: "CORNER", point: u }]
        },
        properties: { toolType: "distance" }
      };
      o("create", E);
    }
    t(1, c = void 0), t(2, u = void 0), v = void 0;
  };
  Oe(() => {
    l("pointerdown", D, !0), l("pointermove", P), l("pointerup", b, !0);
  });
  function w(E) {
    Qe[E ? "unshift" : "push"](() => {
      a = E, t(0, a);
    });
  }
  return e.$$set = (E) => {
    "addEventListener" in E && t(7, l = E.addEventListener), "drawingMode" in E && t(8, i = E.drawingMode), "transform" in E && t(9, r = E.transform), "viewportScale" in E && t(10, f = E.viewportScale);
  }, [
    a,
    c,
    u,
    h,
    m,
    y,
    _,
    l,
    i,
    r,
    f,
    w
  ];
}
class Ft extends pe {
  constructor(n) {
    super(), me(this, n, Gt, Ut, _e, {
      addEventListener: 7,
      drawingMode: 8,
      transform: 9,
      viewportScale: 10
    });
  }
}
var De = /* @__PURE__ */ ((e) => (e.ELLIPSE = "ELLIPSE", e.MULTIPOLYGON = "MULTIPOLYGON", e.POLYGON = "POLYGON", e.POLYLINE = "POLYLINE", e.RECTANGLE = "RECTANGLE", e.LINE = "LINE", e))(De || {}), zt = { exports: {} };
(function(e) {
  (function() {
    function n(f, a) {
      var c = f.x - a.x, u = f.y - a.y;
      return c * c + u * u;
    }
    function t(f, a, c) {
      var u = a.x, h = a.y, m = c.x - u, y = c.y - h;
      if (m !== 0 || y !== 0) {
        var _ = ((f.x - u) * m + (f.y - h) * y) / (m * m + y * y);
        _ > 1 ? (u = c.x, h = c.y) : _ > 0 && (u += m * _, h += y * _);
      }
      return m = f.x - u, y = f.y - h, m * m + y * y;
    }
    function o(f, a) {
      for (var c = f[0], u = [c], h, m = 1, y = f.length; m < y; m++)
        h = f[m], n(h, c) > a && (u.push(h), c = h);
      return c !== h && u.push(h), u;
    }
    function l(f, a, c, u, h) {
      for (var m = u, y, _ = a + 1; _ < c; _++) {
        var p = t(f[_], f[a], f[c]);
        p > m && (y = _, m = p);
      }
      m > u && (y - a > 1 && l(f, a, y, u, h), h.push(f[y]), c - y > 1 && l(f, y, c, u, h));
    }
    function i(f, a) {
      var c = f.length - 1, u = [f[0]];
      return l(f, 0, c, a, u), u.push(f[c]), u;
    }
    function r(f, a, c) {
      if (f.length <= 2) return f;
      var u = a !== void 0 ? a * a : 1;
      return f = c ? f : o(f, u), f = i(f, u), f;
    }
    e.exports = r, e.exports.default = r;
  })();
})(zt);
const Ve = (e, n) => n, qe = (e) => {
  let n = 1 / 0, t = 1 / 0, o = -1 / 0, l = -1 / 0;
  return e.forEach(([i, r]) => {
    n = Math.min(n, i), t = Math.min(t, r), o = Math.max(o, i), l = Math.max(l, r);
  }), { minX: n, minY: t, maxX: o, maxY: l };
}, xe = (e) => {
  let n = 0, t = e.length - 1;
  for (let o = 0; o < e.length; o++)
    n += (e[t][0] + e[o][0]) * (e[t][1] - e[o][1]), t = o;
  return Math.abs(0.5 * n);
}, en = (e, n, t) => {
  let o = !1;
  for (let l = 0, i = e.length - 1; l < e.length; i = l++) {
    const r = e[l][0], f = e[l][1], a = e[i][0], c = e[i][1];
    f > t != c > t && n < (a - r) * (t - f) / (c - f) + r && (o = !o);
  }
  return o;
}, Vt = (e, n = !0) => {
  let t = "M ";
  return e.forEach(([o, l], i) => {
    i === 0 ? t += `${o},${l}` : t += ` L ${o},${l}`;
  }), n && (t += " Z"), t;
}, Kt = (e, n) => {
  const t = Math.abs(n[0] - e[0]), o = Math.abs(n[1] - e[1]);
  return Math.sqrt(Math.pow(t, 2) + Math.pow(o, 2));
}, Zt = {
  area: (e) => Math.PI * e.geometry.rx * e.geometry.ry,
  intersects: (e, n, t) => {
    const { cx: o, cy: l, rx: i, ry: r } = e.geometry, f = 0, a = Math.cos(f), c = Math.sin(f), u = n - o, h = t - l, m = a * u + c * h, y = c * u - a * h;
    return m * m / (i * i) + y * y / (r * r) <= 1;
  }
};
Ve(De.ELLIPSE, Zt);
const Wt = {
  area: (e) => 0,
  intersects: (e, n, t, o = 2) => {
    const [[l, i], [r, f]] = e.geometry.points, a = Math.abs((f - i) * n - (r - l) * t + r * i - f * l), c = Kt([l, i], [r, f]);
    return a / c <= o;
  }
};
Ve(De.LINE, Wt);
const Jt = {
  area: (e) => {
    const { polygons: n } = e.geometry;
    return n.reduce((t, o) => {
      const [l, ...i] = o.rings, r = xe(l.points), f = i.reduce((a, c) => a + xe(c.points), 0);
      return t + r - f;
    }, 0);
  },
  intersects: (e, n, t) => {
    const { polygons: o } = e.geometry;
    for (const l of o) {
      const [i, ...r] = l.rings;
      if (en(i.points, n, t)) {
        let f = !1;
        for (const a of r)
          if (en(a.points, n, t)) {
            f = !0;
            break;
          }
        if (!f) return !0;
      }
    }
    return !1;
  }
}, tn = (e) => {
  const n = e.reduce((t, o) => [...t, ...o.rings[0].points], []);
  return qe(n);
}, Fe = (e) => e.rings.map((t) => Vt(t.points)).join(" "), Qt = (e) => e.polygons.reduce((n, t) => [
  ...n,
  ...t.rings.reduce((o, l) => [...o, ...l.points], [])
], []);
Ve(De.MULTIPOLYGON, Jt);
const $t = {
  area: (e) => {
    const n = e.geometry.points;
    return xe(n);
  },
  intersects: (e, n, t) => {
    const o = e.geometry.points;
    return en(o, n, t);
  }
};
Ve(De.POLYGON, $t);
const xt = {
  area: (e) => {
    const n = e.geometry;
    if (!n.closed || n.points.length < 3)
      return 0;
    const t = Hn(n.points, n.closed);
    return xe(t);
  },
  intersects: (e, n, t, o = 2) => {
    const l = e.geometry;
    if (l.closed) {
      const i = Hn(l.points, l.closed);
      return en(i, n, t);
    } else
      return eo(l, [n, t], o);
  }
}, Hn = (e, n = !1) => {
  const t = [];
  for (let o = 0; o < e.length; o++) {
    const l = e[o], i = e[(o + 1) % e.length];
    if (t.push(l.point), (o < e.length - 1 || n) && (l.type === "CURVE" || i.type == "CURVE")) {
      const f = Ht(
        l.point,
        l.type === "CURVE" && l.outHandle || l.point,
        i.type === "CURVE" && i.inHandle || i.point,
        i.point,
        10
        // number of approximation segments
      );
      t.push(...f.slice(1));
    }
  }
  return t;
}, Ht = (e, n, t, o, l = 10) => {
  const i = [];
  for (let r = 0; r <= l; r++) {
    const f = r / l, a = Math.pow(1 - f, 3) * e[0] + 3 * Math.pow(1 - f, 2) * f * n[0] + 3 * (1 - f) * Math.pow(f, 2) * t[0] + Math.pow(f, 3) * o[0], c = Math.pow(1 - f, 3) * e[1] + 3 * Math.pow(1 - f, 2) * f * n[1] + 3 * (1 - f) * Math.pow(f, 2) * t[1] + Math.pow(f, 3) * o[1];
    i.push([a, c]);
  }
  return i;
}, eo = (e, n, t) => {
  for (let o = 0; o < e.points.length - 1; o++) {
    const l = e.points[o], i = e.points[o + 1];
    if (l.type === "CURVE" || i.type === "CURVE") {
      const f = Ht(
        l.point,
        l.type === "CURVE" && l.outHandle || l.point,
        i.type === "CURVE" && i.inHandle || i.point,
        i.point,
        20
        // TODO make configurable? Based on scale factor? Length?
      );
      for (let a = 0; a < f.length - 1; a++)
        if (Ln(n, f[a], f[a + 1]) <= t) return !0;
    } else if (Ln(n, l.point, i.point) <= t) return !0;
  }
  return !1;
}, Ln = (e, n, t) => {
  const [o, l] = e, [i, r] = n, [f, a] = t, c = f - i, u = a - r, h = Math.sqrt(c * c + u * u);
  if (h === 0)
    return Math.sqrt((o - i) * (o - i) + (l - r) * (l - r));
  const m = ((o - i) * c + (l - r) * u) / (h * h);
  return m <= 0 ? Math.sqrt((o - i) * (o - i) + (l - r) * (l - r)) : m >= 1 ? Math.sqrt((o - f) * (o - f) + (l - a) * (l - a)) : Math.abs((a - r) * o - (f - i) * l + f * r - a * i) / h;
};
Ve(De.POLYLINE, xt);
const no = {
  area: (e) => e.geometry.w * e.geometry.h,
  intersects: (e, n, t) => n >= e.geometry.x && n <= e.geometry.x + e.geometry.w && t >= e.geometry.y && t <= e.geometry.y + e.geometry.h
};
Ve(De.RECTANGLE, no);
const wn = (e, n = 0) => {
  const { minX: t, minY: o, maxX: l, maxY: i } = e;
  return {
    x: t - n,
    y: o - n,
    w: l - t + 2 * n,
    h: i - o + 2 * n
  };
}, Be = typeof window > "u" || typeof navigator > "u" ? !1 : "ontouchstart" in window || navigator.maxTouchPoints > 0 || // @ts-ignore
navigator.msMaxTouchPoints > 0, to = (e) => ({}), In = (e) => ({ grab: (
  /*onGrab*/
  e[0]
) });
function oo(e) {
  let n, t, o, l;
  const i = (
    /*#slots*/
    e[8].default
  ), r = Ot(
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
      H(f, n, a), r && r.m(n, null), t = !0, o || (l = [
        J(
          n,
          "pointerup",
          /*onRelease*/
          e[2]
        ),
        J(
          n,
          "pointermove",
          /*onPointerMove*/
          e[1]
        )
      ], o = !0);
    },
    p(f, [a]) {
      r && r.p && (!t || a & /*$$scope*/
      128) && Ct(
        r,
        i,
        f,
        /*$$scope*/
        f[7],
        t ? Dt(
          i,
          /*$$scope*/
          f[7],
          a,
          to
        ) : Rt(
          /*$$scope*/
          f[7]
        ),
        In
      );
    },
    i(f) {
      t || (z(r, f), t = !0);
    },
    o(f) {
      $(r, f), t = !1;
    },
    d(f) {
      f && M(n), r && r.d(f), o = !1, Se(l);
    }
  };
}
function lo(e, n, t) {
  let { $$slots: o = {}, $$scope: l } = n;
  const i = Ie();
  let { shape: r } = n, { editor: f } = n, { transform: a } = n, { svgEl: c } = n, u, h, m;
  const y = (v) => (D) => {
    if (u = v, c) {
      const { left: b, top: d } = c.getBoundingClientRect(), w = D.clientX - b, E = D.clientY - d;
      h = a.elementToImage(w, E);
    } else {
      const { offsetX: b, offsetY: d } = D;
      h = a.elementToImage(b, d);
    }
    m = r, D.target.setPointerCapture(D.pointerId), i("grab", D);
  }, _ = (v) => {
    if (u) {
      const [D, P] = a.elementToImage(v.offsetX, v.offsetY), b = [D - h[0], P - h[1]];
      t(3, r = f(m, u, b)), i("change", r);
    }
  }, p = (v) => {
    v.target.releasePointerCapture(v.pointerId), u = void 0, m = r, i("release", v);
  };
  return e.$$set = (v) => {
    "shape" in v && t(3, r = v.shape), "editor" in v && t(4, f = v.editor), "transform" in v && t(5, a = v.transform), "svgEl" in v && t(6, c = v.svgEl), "$$scope" in v && t(7, l = v.$$scope);
  }, [
    y,
    _,
    p,
    r,
    f,
    a,
    c,
    l,
    o
  ];
}
class Ue extends pe {
  constructor(n) {
    super(), me(this, n, lo, oo, _e, {
      shape: 3,
      editor: 4,
      transform: 5,
      svgEl: 6
    });
  }
}
function so(e) {
  let n, t, o, l, i, r, f, a, c = (
    /*selected*/
    e[3] && On(e)
  );
  return {
    c() {
      n = N("g"), t = N("circle"), c && c.c(), l = N("circle"), s(t, "class", "a9s-handle-buffer svelte-qtyc7s"), s(
        t,
        "cx",
        /*x*/
        e[0]
      ), s(
        t,
        "cy",
        /*y*/
        e[1]
      ), s(t, "r", o = /*handleRadius*/
      e[5] + 6 / /*scale*/
      e[2]), s(t, "role", "button"), s(t, "tabindex", "0"), s(l, "class", i = Ce(`a9s-handle-dot${/*selected*/
      e[3] ? " selected" : ""}`) + " svelte-qtyc7s"), s(
        l,
        "cx",
        /*x*/
        e[0]
      ), s(
        l,
        "cy",
        /*y*/
        e[1]
      ), s(
        l,
        "r",
        /*handleRadius*/
        e[5]
      ), s(n, "class", r = `a9s-handle ${/*$$props*/
      e[8].class || ""}`.trim());
    },
    m(u, h) {
      H(u, n, h), K(n, t), c && c.m(n, null), K(n, l), f || (a = [
        J(
          t,
          "dblclick",
          /*dblclick_handler_1*/
          e[12]
        ),
        J(
          t,
          "pointerenter",
          /*pointerenter_handler*/
          e[13]
        ),
        J(
          t,
          "pointerleave",
          /*pointerleave_handler*/
          e[14]
        ),
        J(
          t,
          "pointerdown",
          /*pointerdown_handler_1*/
          e[15]
        ),
        J(
          t,
          "pointerdown",
          /*onPointerDown*/
          e[6]
        ),
        J(
          t,
          "pointerup",
          /*pointerup_handler_1*/
          e[16]
        ),
        J(
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
      36 && o !== (o = /*handleRadius*/
      u[5] + 6 / /*scale*/
      u[2]) && s(t, "r", o), /*selected*/
      u[3] ? c ? c.p(u, h) : (c = On(u), c.c(), c.m(n, l)) : c && (c.d(1), c = null), h & /*selected*/
      8 && i !== (i = Ce(`a9s-handle-dot${/*selected*/
      u[3] ? " selected" : ""}`) + " svelte-qtyc7s") && s(l, "class", i), h & /*x*/
      1 && s(
        l,
        "cx",
        /*x*/
        u[0]
      ), h & /*y*/
      2 && s(
        l,
        "cy",
        /*y*/
        u[1]
      ), h & /*handleRadius*/
      32 && s(
        l,
        "r",
        /*handleRadius*/
        u[5]
      ), h & /*$$props*/
      256 && r !== (r = `a9s-handle ${/*$$props*/
      u[8].class || ""}`.trim()) && s(n, "class", r);
    },
    d(u) {
      u && M(n), c && c.d(), f = !1, Se(a);
    }
  };
}
function io(e) {
  let n, t, o, l, i, r, f, a, c;
  return {
    c() {
      n = N("g"), t = N("circle"), l = N("circle"), r = N("circle"), s(
        t,
        "cx",
        /*x*/
        e[0]
      ), s(
        t,
        "cy",
        /*y*/
        e[1]
      ), s(t, "r", o = /*handleRadius*/
      e[5] * 10), s(t, "class", "a9s-touch-halo"), He(
        t,
        "touched",
        /*touched*/
        e[4]
      ), s(
        l,
        "cx",
        /*x*/
        e[0]
      ), s(
        l,
        "cy",
        /*y*/
        e[1]
      ), s(l, "r", i = /*handleRadius*/
      e[5] + 10 / /*scale*/
      e[2]), s(l, "class", "a9s-handle-buffer svelte-qtyc7s"), s(l, "role", "button"), s(l, "tabindex", "0"), s(r, "class", "a9s-handle-dot"), s(
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
      H(u, n, h), K(n, t), K(n, l), K(n, r), a || (c = [
        J(
          l,
          "dblclick",
          /*dblclick_handler*/
          e[9]
        ),
        J(
          l,
          "pointerdown",
          /*pointerdown_handler*/
          e[10]
        ),
        J(
          l,
          "pointerdown",
          /*onPointerDown*/
          e[6]
        ),
        J(
          l,
          "pointerup",
          /*pointerup_handler*/
          e[11]
        ),
        J(
          l,
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
      32 && o !== (o = /*handleRadius*/
      u[5] * 10) && s(t, "r", o), h & /*touched*/
      16 && He(
        t,
        "touched",
        /*touched*/
        u[4]
      ), h & /*x*/
      1 && s(
        l,
        "cx",
        /*x*/
        u[0]
      ), h & /*y*/
      2 && s(
        l,
        "cy",
        /*y*/
        u[1]
      ), h & /*handleRadius, scale*/
      36 && i !== (i = /*handleRadius*/
      u[5] + 10 / /*scale*/
      u[2]) && s(l, "r", i), h & /*x*/
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
      u && M(n), a = !1, Se(c);
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
    m(o, l) {
      H(o, n, l);
    },
    p(o, l) {
      l & /*x*/
      1 && s(
        n,
        "cx",
        /*x*/
        o[0]
      ), l & /*y*/
      2 && s(
        n,
        "cy",
        /*y*/
        o[1]
      ), l & /*handleRadius, scale*/
      36 && t !== (t = /*handleRadius*/
      o[5] + 8 / /*scale*/
      o[2]) && s(n, "r", t);
    },
    d(o) {
      o && M(n);
    }
  };
}
function ro(e) {
  let n;
  function t(i, r) {
    return Be ? io : so;
  }
  let l = t()(e);
  return {
    c() {
      l.c(), n = ve();
    },
    m(i, r) {
      l.m(i, r), H(i, n, r);
    },
    p(i, [r]) {
      l.p(i, r);
    },
    i: he,
    o: he,
    d(i) {
      i && M(n), l.d(i);
    }
  };
}
function fo(e, n, t) {
  let o, { x: l } = n, { y: i } = n, { scale: r } = n, { selected: f = void 0 } = n, a = !1;
  const c = (b) => {
    b.pointerType === "touch" && t(4, a = !0);
  }, u = () => t(4, a = !1);
  function h(b) {
    oe.call(this, e, b);
  }
  function m(b) {
    oe.call(this, e, b);
  }
  function y(b) {
    oe.call(this, e, b);
  }
  function _(b) {
    oe.call(this, e, b);
  }
  function p(b) {
    oe.call(this, e, b);
  }
  function v(b) {
    oe.call(this, e, b);
  }
  function D(b) {
    oe.call(this, e, b);
  }
  function P(b) {
    oe.call(this, e, b);
  }
  return e.$$set = (b) => {
    t(8, n = vn(vn({}, n), En(b))), "x" in b && t(0, l = b.x), "y" in b && t(1, i = b.y), "scale" in b && t(2, r = b.scale), "selected" in b && t(3, f = b.selected);
  }, e.$$.update = () => {
    e.$$.dirty & /*scale*/
    4 && t(5, o = 4 / r);
  }, n = En(n), [
    l,
    i,
    r,
    f,
    a,
    o,
    c,
    u,
    n,
    h,
    m,
    y,
    _,
    p,
    v,
    D,
    P
  ];
}
class ye extends pe {
  constructor(n) {
    super(), me(this, n, fo, ro, _e, { x: 0, y: 1, scale: 2, selected: 3 });
  }
}
function ao(e) {
  let n, t, o, l, i, r, f;
  return {
    c() {
      n = N("g"), t = N("circle"), l = N("circle"), i = N("circle"), s(t, "class", "a9s-polygon-midpoint-buffer svelte-12ykj76"), s(
        t,
        "cx",
        /*x*/
        e[0]
      ), s(
        t,
        "cy",
        /*y*/
        e[1]
      ), s(t, "r", o = 1.75 * /*handleRadius*/
      e[2]), s(l, "class", "a9s-polygon-midpoint-outer svelte-12ykj76"), s(
        l,
        "cx",
        /*x*/
        e[0]
      ), s(
        l,
        "cy",
        /*y*/
        e[1]
      ), s(
        l,
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
      H(a, n, c), K(n, t), K(n, l), K(n, i), r || (f = [
        J(
          t,
          "pointerdown",
          /*pointerdown_handler*/
          e[5]
        ),
        J(
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
      4 && o !== (o = 1.75 * /*handleRadius*/
      a[2]) && s(t, "r", o), c & /*x*/
      1 && s(
        l,
        "cx",
        /*x*/
        a[0]
      ), c & /*y*/
      2 && s(
        l,
        "cy",
        /*y*/
        a[1]
      ), c & /*handleRadius*/
      4 && s(
        l,
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
      a && M(n), r = !1, Se(f);
    }
  };
}
function uo(e) {
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
    m(t, o) {
      H(t, n, o);
    },
    p(t, o) {
      o & /*x*/
      1 && s(
        n,
        "cx",
        /*x*/
        t[0]
      ), o & /*y*/
      2 && s(
        n,
        "cy",
        /*y*/
        t[1]
      ), o & /*handleRadius*/
      4 && s(
        n,
        "r",
        /*handleRadius*/
        t[2]
      );
    },
    d(t) {
      t && M(n);
    }
  };
}
function co(e) {
  let n;
  function t(i, r) {
    return Be ? uo : ao;
  }
  let l = t()(e);
  return {
    c() {
      l.c(), n = ve();
    },
    m(i, r) {
      l.m(i, r), H(i, n, r);
    },
    p(i, [r]) {
      l.p(i, r);
    },
    i: he,
    o: he,
    d(i) {
      i && M(n), l.d(i);
    }
  };
}
function ho(e, n, t) {
  let o, { x: l } = n, { y: i } = n, { scale: r } = n;
  const f = (c) => {
    c.pointerType;
  };
  function a(c) {
    oe.call(this, e, c);
  }
  return e.$$set = (c) => {
    "x" in c && t(0, l = c.x), "y" in c && t(1, i = c.y), "scale" in c && t(4, r = c.scale);
  }, e.$$.update = () => {
    e.$$.dirty & /*scale*/
    16 && t(2, o = 4 / r);
  }, [l, i, o, f, r, a];
}
class bn extends pe {
  constructor(n) {
    super(), me(this, n, ho, co, _e, { x: 0, y: 1, scale: 4 });
  }
}
function on(e) {
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
  const o = e.slice();
  return o[28] = n[t], o[30] = t, o;
}
function ln(e) {
  const n = e.slice(), t = (
    /*midpoints*/
    n[10][
      /*visibleMidpoint*/
      n[6]
    ]
  );
  return n[28] = t.point, n;
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
function Rn(e) {
  let n, t, o, l;
  return {
    c() {
      n = N("circle"), s(n, "cx", t = /*point*/
      e[28][0]), s(n, "cy", o = /*point*/
      e[28][1]), s(n, "r", l = We / /*viewportScale*/
      e[3]), s(n, "class", "svelte-1h2slbm");
    },
    m(i, r) {
      H(i, n, r);
    },
    p(i, r) {
      r[0] & /*midpoints, visibleMidpoint*/
      1088 && t !== (t = /*point*/
      i[28][0]) && s(n, "cx", t), r[0] & /*midpoints, visibleMidpoint*/
      1088 && o !== (o = /*point*/
      i[28][1]) && s(n, "cy", o), r[0] & /*viewportScale*/
      8 && l !== (l = We / /*viewportScale*/
      i[3]) && s(n, "r", l);
    },
    d(i) {
      i && M(n);
    }
  };
}
function Dn(e) {
  let n, t, o, l, i, r, f, a, c, u;
  return {
    c() {
      n = N("mask"), t = N("rect"), f = N("circle"), s(t, "x", o = /*mask*/
      e[9].x), s(t, "y", l = /*mask*/
      e[9].y), s(t, "width", i = /*mask*/
      e[9].w), s(t, "height", r = /*mask*/
      e[9].h), s(t, "class", "svelte-1h2slbm"), s(f, "cx", a = /*point*/
      e[28][0]), s(f, "cy", c = /*point*/
      e[28][1]), s(f, "r", u = We / /*viewportScale*/
      e[3]), s(f, "class", "svelte-1h2slbm"), s(n, "id", `${/*maskId*/
      e[19]}-inner`), s(n, "class", "a9s-polygon-editor-mask svelte-1h2slbm");
    },
    m(h, m) {
      H(h, n, m), K(n, t), K(n, f);
    },
    p(h, m) {
      m[0] & /*mask*/
      512 && o !== (o = /*mask*/
      h[9].x) && s(t, "x", o), m[0] & /*mask*/
      512 && l !== (l = /*mask*/
      h[9].y) && s(t, "y", l), m[0] & /*mask*/
      512 && i !== (i = /*mask*/
      h[9].w) && s(t, "width", i), m[0] & /*mask*/
      512 && r !== (r = /*mask*/
      h[9].h) && s(t, "height", r), m[0] & /*midpoints, visibleMidpoint*/
      1088 && a !== (a = /*point*/
      h[28][0]) && s(f, "cx", a), m[0] & /*midpoints, visibleMidpoint*/
      1088 && c !== (c = /*point*/
      h[28][1]) && s(f, "cy", c), m[0] & /*viewportScale*/
      8 && u !== (u = We / /*viewportScale*/
      h[3]) && s(f, "r", u);
    },
    d(h) {
      h && M(n);
    }
  };
}
function Nn(e) {
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
    te(
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
      ie(n.$$.fragment);
    },
    m(o, l) {
      se(n, o, l), t = !0;
    },
    p(o, l) {
      e = o;
      const i = {};
      l[0] & /*geom*/
      32 && (i.x = /*point*/
      e[28][0]), l[0] & /*geom*/
      32 && (i.y = /*point*/
      e[28][1]), l[0] & /*viewportScale*/
      8 && (i.scale = /*viewportScale*/
      e[3]), l[0] & /*selectedCorners*/
      256 && (i.selected = /*selectedCorners*/
      e[8].includes(
        /*idx*/
        e[30]
      )), n.$set(i);
    },
    i(o) {
      t || (z(n.$$.fragment, o), t = !0);
    },
    o(o) {
      $(n.$$.fragment, o), t = !1;
    },
    d(o) {
      le(n, o);
    }
  };
}
function An(e) {
  let n, t;
  return n = new bn({
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
    te(
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
      ie(n.$$.fragment);
    },
    m(o, l) {
      se(n, o, l), t = !0;
    },
    p(o, l) {
      e = o;
      const i = {};
      l[0] & /*midpoints, visibleMidpoint*/
      1088 && (i.x = /*point*/
      e[28][0]), l[0] & /*midpoints, visibleMidpoint*/
      1088 && (i.y = /*point*/
      e[28][1]), l[0] & /*viewportScale*/
      8 && (i.scale = /*viewportScale*/
      e[3]), n.$set(i);
    },
    i(o) {
      t || (z(n.$$.fragment, o), t = !0);
    },
    o(o) {
      $(n.$$.fragment, o), t = !1;
    },
    d(o) {
      le(n, o);
    }
  };
}
function po(e) {
  let n, t, o, l, i, r, f, a, c, u, h, m, y, _, p, v, D, P, b, d, w, E = (
    /*visibleMidpoint*/
    e[6] !== void 0 && !/*isHandleHovered*/
    e[7] && Rn(sn(e))
  ), g = (
    /*visibleMidpoint*/
    e[6] !== void 0 && !/*isHandleHovered*/
    e[7] && Dn(ln(e))
  ), S = be(
    /*geom*/
    e[5].points
  ), I = [];
  for (let T = 0; T < S.length; T += 1)
    I[T] = Nn(Cn(e, S, T));
  const R = (T) => $(I[T], 1, 1, () => {
    I[T] = null;
  });
  let q = (
    /*visibleMidpoint*/
    e[6] !== void 0 && !/*isHandleHovered*/
    e[7] && An(on(e))
  );
  return {
    c() {
      n = N("defs"), t = N("mask"), o = N("rect"), a = N("polygon"), E && E.c(), g && g.c(), u = x(), h = N("polygon"), y = x(), _ = N("polygon"), v = x();
      for (let T = 0; T < I.length; T += 1)
        I[T].c();
      D = x(), q && q.c(), P = ve(), s(o, "x", l = /*mask*/
      e[9].x), s(o, "y", i = /*mask*/
      e[9].y), s(o, "width", r = /*mask*/
      e[9].w), s(o, "height", f = /*mask*/
      e[9].h), s(o, "class", "svelte-1h2slbm"), s(a, "points", c = /*geom*/
      e[5].points.map(Yn).join(" ")), s(a, "class", "svelte-1h2slbm"), s(t, "id", `${/*maskId*/
      e[19]}-outer`), s(t, "class", "a9s-polygon-editor-mask svelte-1h2slbm"), s(h, "class", "a9s-outer"), s(h, "mask", `url(#${/*maskId*/
      e[19]}-outer)`), s(h, "points", m = /*geom*/
      e[5].points.map(Xn).join(" ")), s(_, "class", "a9s-inner a9s-shape-handle"), s(_, "mask", `url(#${/*maskId*/
      e[19]}-inner)`), s(
        _,
        "style",
        /*computedStyle*/
        e[1]
      ), s(_, "points", p = /*geom*/
      e[5].points.map(jn).join(" "));
    },
    m(T, U) {
      H(T, n, U), K(n, t), K(t, o), K(t, a), E && E.m(t, null), g && g.m(n, null), H(T, u, U), H(T, h, U), H(T, y, U), H(T, _, U), H(T, v, U);
      for (let Y = 0; Y < I.length; Y += 1)
        I[Y] && I[Y].m(T, U);
      H(T, D, U), q && q.m(T, U), H(T, P, U), b = !0, d || (w = [
        J(
          h,
          "pointerup",
          /*onShapePointerUp*/
          e[14]
        ),
        J(h, "pointerdown", function() {
          te(
            /*grab*/
            e[27]("SHAPE")
          ) && e[27]("SHAPE").apply(this, arguments);
        }),
        J(
          _,
          "pointermove",
          /*onPointerMove*/
          e[13]
        ),
        J(
          _,
          "pointerup",
          /*onShapePointerUp*/
          e[14]
        ),
        J(_, "pointerdown", function() {
          te(
            /*grab*/
            e[27]("SHAPE")
          ) && e[27]("SHAPE").apply(this, arguments);
        })
      ], d = !0);
    },
    p(T, U) {
      if (e = T, (!b || U[0] & /*mask*/
      512 && l !== (l = /*mask*/
      e[9].x)) && s(o, "x", l), (!b || U[0] & /*mask*/
      512 && i !== (i = /*mask*/
      e[9].y)) && s(o, "y", i), (!b || U[0] & /*mask*/
      512 && r !== (r = /*mask*/
      e[9].w)) && s(o, "width", r), (!b || U[0] & /*mask*/
      512 && f !== (f = /*mask*/
      e[9].h)) && s(o, "height", f), (!b || U[0] & /*geom*/
      32 && c !== (c = /*geom*/
      e[5].points.map(Yn).join(" "))) && s(a, "points", c), /*visibleMidpoint*/
      e[6] !== void 0 && !/*isHandleHovered*/
      e[7] ? E ? E.p(sn(e), U) : (E = Rn(sn(e)), E.c(), E.m(t, null)) : E && (E.d(1), E = null), /*visibleMidpoint*/
      e[6] !== void 0 && !/*isHandleHovered*/
      e[7] ? g ? g.p(ln(e), U) : (g = Dn(ln(e)), g.c(), g.m(n, null)) : g && (g.d(1), g = null), (!b || U[0] & /*geom*/
      32 && m !== (m = /*geom*/
      e[5].points.map(Xn).join(" "))) && s(h, "points", m), (!b || U[0] & /*computedStyle*/
      2) && s(
        _,
        "style",
        /*computedStyle*/
        e[1]
      ), (!b || U[0] & /*geom*/
      32 && p !== (p = /*geom*/
      e[5].points.map(jn).join(" "))) && s(_, "points", p), U[0] & /*geom, viewportScale, selectedCorners, onEnterHandle, onLeaveHandle, onHandlePointerDown, grab, onHandlePointerUp*/
      134322472) {
        S = be(
          /*geom*/
          e[5].points
        );
        let Y;
        for (Y = 0; Y < S.length; Y += 1) {
          const A = Cn(e, S, Y);
          I[Y] ? (I[Y].p(A, U), z(I[Y], 1)) : (I[Y] = Nn(A), I[Y].c(), z(I[Y], 1), I[Y].m(D.parentNode, D));
        }
        for (Ee(), Y = S.length; Y < I.length; Y += 1)
          R(Y);
        ke();
      }
      /*visibleMidpoint*/
      e[6] !== void 0 && !/*isHandleHovered*/
      e[7] ? q ? (q.p(on(e), U), U[0] & /*visibleMidpoint, isHandleHovered*/
      192 && z(q, 1)) : (q = An(on(e)), q.c(), z(q, 1), q.m(P.parentNode, P)) : q && (Ee(), $(q, 1, 1, () => {
        q = null;
      }), ke());
    },
    i(T) {
      if (!b) {
        for (let U = 0; U < S.length; U += 1)
          z(I[U]);
        z(q), b = !0;
      }
    },
    o(T) {
      I = I.filter(Boolean);
      for (let U = 0; U < I.length; U += 1)
        $(I[U]);
      $(q), b = !1;
    },
    d(T) {
      T && (M(n), M(u), M(h), M(y), M(_), M(v), M(D), M(P)), E && E.d(), g && g.d(), ze(I, T), q && q.d(T), d = !1, Se(w);
    }
  };
}
function mo(e) {
  let n, t;
  return n = new Ue({
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
          po,
          ({ grab: o }) => ({ 27: o }),
          ({ grab: o }) => [o ? 134217728 : 0]
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
      ie(n.$$.fragment);
    },
    m(o, l) {
      se(n, o, l), t = !0;
    },
    p(o, l) {
      const i = {};
      l[0] & /*shape*/
      1 && (i.shape = /*shape*/
      o[0]), l[0] & /*transform*/
      4 && (i.transform = /*transform*/
      o[2]), l[0] & /*svgEl*/
      16 && (i.svgEl = /*svgEl*/
      o[4]), l[0] & /*midpoints, visibleMidpoint, viewportScale, isHandleHovered, geom, selectedCorners, grab, computedStyle, mask*/
      134219754 | l[1] & /*$$scope*/
      1 && (i.$$scope = { dirty: l, ctx: o }), n.$set(i);
    },
    i(o) {
      t || (z(n.$$.fragment, o), t = !0);
    },
    o(o) {
      $(n.$$.fragment, o), t = !1;
    },
    d(o) {
      le(n, o);
    }
  };
}
const _o = 250, go = 1e3, yo = 12, We = 4.5, Yn = (e) => e.join(","), Xn = (e) => e.join(","), jn = (e) => e.join(",");
function wo(e, n, t) {
  let o, l, i;
  const r = Ie();
  let { shape: f } = n, { computedStyle: a } = n, { transform: c } = n, { viewportScale: u = 1 } = n, { svgEl: h } = n, m, y = !1, _, p = [];
  const v = () => t(7, y = !0), D = () => t(7, y = !1), P = (Y) => {
    if (p.length > 0 || !l.some((k) => k.visible)) {
      t(6, m = void 0);
      return;
    }
    const [A, V] = c.elementToImage(Y.offsetX, Y.offsetY), L = (k) => Math.pow(k[0] - A, 2) + Math.pow(k[1] - V, 2), B = o.points.reduce((k, X) => L(X) < L(k) ? X : k), W = l.filter((k) => k.visible).reduce((k, X) => L(X.point) < L(k.point) ? X : k), C = Math.pow(go / u, 2);
    L(B) < C || L(W.point) < C ? t(6, m = l.indexOf(W)) : t(6, m = void 0);
  }, b = () => {
    document.activeElement !== h && h.focus();
  }, d = () => {
    t(8, p = []), b();
  }, w = (Y) => {
    t(7, y = !0), Y.preventDefault(), Y.stopPropagation(), _ = performance.now();
  }, E = (Y) => (A) => {
    if (!_ || Be || performance.now() - _ > _o) return;
    const V = p.includes(Y);
    A.metaKey || A.ctrlKey || A.shiftKey ? V ? t(8, p = p.filter((L) => L !== Y)) : t(8, p = [...p, Y]) : V && p.length > 1 ? t(8, p = [Y]) : V ? t(8, p = []) : t(8, p = [Y]), b();
  }, g = (Y, A, V) => {
    b();
    let L;
    const B = Y.geometry;
    p.length > 1 ? L = B.points.map(([C, j], k) => p.includes(k) ? [C + V[0], j + V[1]] : [C, j]) : A === "SHAPE" ? L = B.points.map(([C, j]) => [C + V[0], j + V[1]]) : L = B.points.map(([C, j], k) => A === `HANDLE-${k}` ? [C + V[0], j + V[1]] : [C, j]);
    const W = qe(L);
    return { ...Y, geometry: { points: L, bounds: W } };
  }, S = (Y) => async (A) => {
    A.stopPropagation();
    const V = [
      ...o.points.slice(0, Y + 1),
      l[Y].point,
      ...o.points.slice(Y + 1)
    ], L = qe(V);
    r("change", { ...f, geometry: { points: V, bounds: L } }), await Ze();
    const B = [...document.querySelectorAll(".a9s-handle")][Y + 1];
    if (B != null && B.firstChild) {
      const W = new PointerEvent(
        "pointerdown",
        {
          bubbles: !0,
          cancelable: !0,
          clientX: A.clientX,
          clientY: A.clientY,
          pointerId: A.pointerId,
          pointerType: A.pointerType,
          isPrimary: A.isPrimary,
          buttons: A.buttons
        }
      );
      B.firstChild.dispatchEvent(W);
    }
  }, I = () => {
    if (o.points.length - p.length < 3) return;
    const Y = o.points.filter((V, L) => !p.includes(L)), A = qe(Y);
    r("change", { ...f, geometry: { points: Y, bounds: A } }), t(8, p = []);
  };
  Oe(() => {
    if (Be) return;
    const Y = (A) => {
      (A.key === "Delete" || A.key === "Backspace") && (A.preventDefault(), I());
    };
    return h.addEventListener("pointermove", P), h.addEventListener("keydown", Y), () => {
      h.removeEventListener("pointermove", P), h.removeEventListener("keydown", Y);
    };
  });
  const R = `polygon-mask-${Math.random().toString(36).substring(2, 12)}`;
  function q(Y) {
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
    1 && t(5, o = f.geometry), e.$$.dirty[0] & /*geom, viewportScale*/
    40 && t(10, l = Be ? [] : o.points.map((Y, A) => {
      const V = A === o.points.length - 1 ? o.points[0] : o.points[A + 1], L = (Y[0] + V[0]) / 2, B = (Y[1] + V[1]) / 2, C = Math.sqrt(Math.pow(V[0] - L, 2) + Math.pow(V[1] - B, 2)) > yo / u;
      return { point: [L, B], visible: C };
    })), e.$$.dirty[0] & /*geom, viewportScale*/
    40 && t(9, i = wn(o.bounds, We / u));
  }, [
    f,
    a,
    c,
    u,
    h,
    o,
    m,
    y,
    p,
    i,
    l,
    v,
    D,
    P,
    d,
    w,
    E,
    g,
    S,
    R,
    q,
    T,
    U
  ];
}
class bo extends pe {
  constructor(n) {
    super(), me(
      this,
      n,
      wo,
      mo,
      _e,
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
function vo(e) {
  let n, t, o, l, i, r, f, a, c, u, h, m, y, _, p, v, D, P, b, d, w, E, g, S, I, R, q, T, U, Y, A, V, L, B, W, C, j, k, X, Q, G, ne, re, ee, de, ae, ce, fe, Te, ue, Pe, we, Z, Ge, Ke;
  return ae = new ye({
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
  }), ae.$on("pointerdown", function() {
    te(
      /*grab*/
      e[12]("TOP_LEFT")
    ) && e[12]("TOP_LEFT").apply(this, arguments);
  }), fe = new ye({
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
  }), fe.$on("pointerdown", function() {
    te(
      /*grab*/
      e[12]("TOP_RIGHT")
    ) && e[12]("TOP_RIGHT").apply(this, arguments);
  }), ue = new ye({
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
  }), ue.$on("pointerdown", function() {
    te(
      /*grab*/
      e[12]("BOTTOM_RIGHT")
    ) && e[12]("BOTTOM_RIGHT").apply(this, arguments);
  }), we = new ye({
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
  }), we.$on("pointerdown", function() {
    te(
      /*grab*/
      e[12]("BOTTOM_LEFT")
    ) && e[12]("BOTTOM_LEFT").apply(this, arguments);
  }), {
    c() {
      n = N("defs"), t = N("mask"), o = N("rect"), a = N("rect"), y = x(), _ = N("rect"), b = x(), d = N("rect"), I = x(), R = N("rect"), Y = x(), A = N("rect"), W = x(), C = N("rect"), Q = x(), G = N("rect"), de = x(), ie(ae.$$.fragment), ce = x(), ie(fe.$$.fragment), Te = x(), ie(ue.$$.fragment), Pe = x(), ie(we.$$.fragment), s(o, "class", "rect-mask-bg svelte-1njczvj"), s(o, "x", l = /*mask*/
      e[6].x), s(o, "y", i = /*mask*/
      e[6].y), s(o, "width", r = /*mask*/
      e[6].w), s(o, "height", f = /*mask*/
      e[6].h), s(a, "class", "rect-mask-fg svelte-1njczvj"), s(a, "x", c = /*geom*/
      e[5].x), s(a, "y", u = /*geom*/
      e[5].y), s(a, "width", h = /*geom*/
      e[5].w), s(a, "height", m = /*geom*/
      e[5].h), s(
        t,
        "id",
        /*maskId*/
        e[8]
      ), s(t, "class", "a9s-rectangle-editor-mask svelte-1njczvj"), s(_, "class", "a9s-outer"), s(_, "mask", `url(#${/*maskId*/
      e[8]})`), s(_, "x", p = /*geom*/
      e[5].x), s(_, "y", v = /*geom*/
      e[5].y), s(_, "width", D = /*geom*/
      e[5].w), s(_, "height", P = /*geom*/
      e[5].h), s(d, "class", "a9s-inner a9s-shape-handle"), s(
        d,
        "style",
        /*computedStyle*/
        e[1]
      ), s(d, "x", w = /*geom*/
      e[5].x), s(d, "y", E = /*geom*/
      e[5].y), s(d, "width", g = /*geom*/
      e[5].w), s(d, "height", S = /*geom*/
      e[5].h), s(R, "class", "a9s-edge-handle a9s-edge-handle-top"), s(R, "x", q = /*geom*/
      e[5].x), s(R, "y", T = /*geom*/
      e[5].y), s(R, "height", 1), s(R, "width", U = /*geom*/
      e[5].w), s(A, "class", "a9s-edge-handle a9s-edge-handle-right"), s(A, "x", V = /*geom*/
      e[5].x + /*geom*/
      e[5].w), s(A, "y", L = /*geom*/
      e[5].y), s(A, "height", B = /*geom*/
      e[5].h), s(A, "width", 1), s(C, "class", "a9s-edge-handle a9s-edge-handle-bottom"), s(C, "x", j = /*geom*/
      e[5].x), s(C, "y", k = /*geom*/
      e[5].y + /*geom*/
      e[5].h), s(C, "height", 1), s(C, "width", X = /*geom*/
      e[5].w), s(G, "class", "a9s-edge-handle a9s-edge-handle-left"), s(G, "x", ne = /*geom*/
      e[5].x), s(G, "y", re = /*geom*/
      e[5].y), s(G, "height", ee = /*geom*/
      e[5].h), s(G, "width", 1);
    },
    m(F, O) {
      H(F, n, O), K(n, t), K(t, o), K(t, a), H(F, y, O), H(F, _, O), H(F, b, O), H(F, d, O), H(F, I, O), H(F, R, O), H(F, Y, O), H(F, A, O), H(F, W, O), H(F, C, O), H(F, Q, O), H(F, G, O), H(F, de, O), se(ae, F, O), H(F, ce, O), se(fe, F, O), H(F, Te, O), se(ue, F, O), H(F, Pe, O), se(we, F, O), Z = !0, Ge || (Ke = [
        J(_, "pointerdown", function() {
          te(
            /*grab*/
            e[12]("SHAPE")
          ) && e[12]("SHAPE").apply(this, arguments);
        }),
        J(d, "pointerdown", function() {
          te(
            /*grab*/
            e[12]("SHAPE")
          ) && e[12]("SHAPE").apply(this, arguments);
        }),
        J(R, "pointerdown", function() {
          te(
            /*grab*/
            e[12]("TOP")
          ) && e[12]("TOP").apply(this, arguments);
        }),
        J(A, "pointerdown", function() {
          te(
            /*grab*/
            e[12]("RIGHT")
          ) && e[12]("RIGHT").apply(this, arguments);
        }),
        J(C, "pointerdown", function() {
          te(
            /*grab*/
            e[12]("BOTTOM")
          ) && e[12]("BOTTOM").apply(this, arguments);
        }),
        J(G, "pointerdown", function() {
          te(
            /*grab*/
            e[12]("LEFT")
          ) && e[12]("LEFT").apply(this, arguments);
        })
      ], Ge = !0);
    },
    p(F, O) {
      e = F, (!Z || O & /*mask*/
      64 && l !== (l = /*mask*/
      e[6].x)) && s(o, "x", l), (!Z || O & /*mask*/
      64 && i !== (i = /*mask*/
      e[6].y)) && s(o, "y", i), (!Z || O & /*mask*/
      64 && r !== (r = /*mask*/
      e[6].w)) && s(o, "width", r), (!Z || O & /*mask*/
      64 && f !== (f = /*mask*/
      e[6].h)) && s(o, "height", f), (!Z || O & /*geom*/
      32 && c !== (c = /*geom*/
      e[5].x)) && s(a, "x", c), (!Z || O & /*geom*/
      32 && u !== (u = /*geom*/
      e[5].y)) && s(a, "y", u), (!Z || O & /*geom*/
      32 && h !== (h = /*geom*/
      e[5].w)) && s(a, "width", h), (!Z || O & /*geom*/
      32 && m !== (m = /*geom*/
      e[5].h)) && s(a, "height", m), (!Z || O & /*geom*/
      32 && p !== (p = /*geom*/
      e[5].x)) && s(_, "x", p), (!Z || O & /*geom*/
      32 && v !== (v = /*geom*/
      e[5].y)) && s(_, "y", v), (!Z || O & /*geom*/
      32 && D !== (D = /*geom*/
      e[5].w)) && s(_, "width", D), (!Z || O & /*geom*/
      32 && P !== (P = /*geom*/
      e[5].h)) && s(_, "height", P), (!Z || O & /*computedStyle*/
      2) && s(
        d,
        "style",
        /*computedStyle*/
        e[1]
      ), (!Z || O & /*geom*/
      32 && w !== (w = /*geom*/
      e[5].x)) && s(d, "x", w), (!Z || O & /*geom*/
      32 && E !== (E = /*geom*/
      e[5].y)) && s(d, "y", E), (!Z || O & /*geom*/
      32 && g !== (g = /*geom*/
      e[5].w)) && s(d, "width", g), (!Z || O & /*geom*/
      32 && S !== (S = /*geom*/
      e[5].h)) && s(d, "height", S), (!Z || O & /*geom*/
      32 && q !== (q = /*geom*/
      e[5].x)) && s(R, "x", q), (!Z || O & /*geom*/
      32 && T !== (T = /*geom*/
      e[5].y)) && s(R, "y", T), (!Z || O & /*geom*/
      32 && U !== (U = /*geom*/
      e[5].w)) && s(R, "width", U), (!Z || O & /*geom*/
      32 && V !== (V = /*geom*/
      e[5].x + /*geom*/
      e[5].w)) && s(A, "x", V), (!Z || O & /*geom*/
      32 && L !== (L = /*geom*/
      e[5].y)) && s(A, "y", L), (!Z || O & /*geom*/
      32 && B !== (B = /*geom*/
      e[5].h)) && s(A, "height", B), (!Z || O & /*geom*/
      32 && j !== (j = /*geom*/
      e[5].x)) && s(C, "x", j), (!Z || O & /*geom*/
      32 && k !== (k = /*geom*/
      e[5].y + /*geom*/
      e[5].h)) && s(C, "y", k), (!Z || O & /*geom*/
      32 && X !== (X = /*geom*/
      e[5].w)) && s(C, "width", X), (!Z || O & /*geom*/
      32 && ne !== (ne = /*geom*/
      e[5].x)) && s(G, "x", ne), (!Z || O & /*geom*/
      32 && re !== (re = /*geom*/
      e[5].y)) && s(G, "y", re), (!Z || O & /*geom*/
      32 && ee !== (ee = /*geom*/
      e[5].h)) && s(G, "height", ee);
      const Ne = {};
      O & /*geom*/
      32 && (Ne.x = /*geom*/
      e[5].x), O & /*geom*/
      32 && (Ne.y = /*geom*/
      e[5].y), O & /*viewportScale*/
      8 && (Ne.scale = /*viewportScale*/
      e[3]), ae.$set(Ne);
      const Ae = {};
      O & /*geom*/
      32 && (Ae.x = /*geom*/
      e[5].x + /*geom*/
      e[5].w), O & /*geom*/
      32 && (Ae.y = /*geom*/
      e[5].y), O & /*viewportScale*/
      8 && (Ae.scale = /*viewportScale*/
      e[3]), fe.$set(Ae);
      const Ye = {};
      O & /*geom*/
      32 && (Ye.x = /*geom*/
      e[5].x + /*geom*/
      e[5].w), O & /*geom*/
      32 && (Ye.y = /*geom*/
      e[5].y + /*geom*/
      e[5].h), O & /*viewportScale*/
      8 && (Ye.scale = /*viewportScale*/
      e[3]), ue.$set(Ye);
      const Xe = {};
      O & /*geom*/
      32 && (Xe.x = /*geom*/
      e[5].x), O & /*geom*/
      32 && (Xe.y = /*geom*/
      e[5].y + /*geom*/
      e[5].h), O & /*viewportScale*/
      8 && (Xe.scale = /*viewportScale*/
      e[3]), we.$set(Xe);
    },
    i(F) {
      Z || (z(ae.$$.fragment, F), z(fe.$$.fragment, F), z(ue.$$.fragment, F), z(we.$$.fragment, F), Z = !0);
    },
    o(F) {
      $(ae.$$.fragment, F), $(fe.$$.fragment, F), $(ue.$$.fragment, F), $(we.$$.fragment, F), Z = !1;
    },
    d(F) {
      F && (M(n), M(y), M(_), M(b), M(d), M(I), M(R), M(Y), M(A), M(W), M(C), M(Q), M(G), M(de), M(ce), M(Te), M(Pe)), le(ae, F), le(fe, F), le(ue, F), le(we, F), Ge = !1, Se(Ke);
    }
  };
}
function Eo(e) {
  let n, t;
  return n = new Ue({
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
          vo,
          ({ grab: o }) => ({ 12: o }),
          ({ grab: o }) => o ? 4096 : 0
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
      ie(n.$$.fragment);
    },
    m(o, l) {
      se(n, o, l), t = !0;
    },
    p(o, [l]) {
      const i = {};
      l & /*shape*/
      1 && (i.shape = /*shape*/
      o[0]), l & /*transform*/
      4 && (i.transform = /*transform*/
      o[2]), l & /*svgEl*/
      16 && (i.svgEl = /*svgEl*/
      o[4]), l & /*$$scope, geom, viewportScale, grab, computedStyle, mask*/
      12394 && (i.$$scope = { dirty: l, ctx: o }), n.$set(i);
    },
    i(o) {
      t || (z(n.$$.fragment, o), t = !0);
    },
    o(o) {
      $(n.$$.fragment, o), t = !1;
    },
    d(o) {
      le(n, o);
    }
  };
}
function ko(e, n, t) {
  let o, l, { shape: i } = n, { computedStyle: r } = n, { transform: f } = n, { viewportScale: a = 1 } = n, { svgEl: c } = n;
  const u = (p, v, D) => {
    const P = p.geometry.bounds;
    let [b, d] = [P.minX, P.minY], [w, E] = [P.maxX, P.maxY];
    const [g, S] = D;
    if (v === "SHAPE")
      b += g, w += g, d += S, E += S;
    else {
      switch (v) {
        case "TOP":
        case "TOP_LEFT":
        case "TOP_RIGHT": {
          d += S;
          break;
        }
        case "BOTTOM":
        case "BOTTOM_LEFT":
        case "BOTTOM_RIGHT": {
          E += S;
          break;
        }
      }
      switch (v) {
        case "LEFT":
        case "TOP_LEFT":
        case "BOTTOM_LEFT": {
          b += g;
          break;
        }
        case "RIGHT":
        case "TOP_RIGHT":
        case "BOTTOM_RIGHT": {
          w += g;
          break;
        }
      }
    }
    const I = Math.min(b, w), R = Math.min(d, E), q = Math.abs(w - b), T = Math.abs(E - d);
    return {
      ...p,
      geometry: {
        x: I,
        y: R,
        w: q,
        h: T,
        bounds: {
          minX: I,
          minY: R,
          maxX: I + q,
          maxY: R + T
        }
      }
    };
  }, h = `rect-mask-${Math.random().toString(36).substring(2, 12)}`;
  function m(p) {
    oe.call(this, e, p);
  }
  function y(p) {
    oe.call(this, e, p);
  }
  function _(p) {
    oe.call(this, e, p);
  }
  return e.$$set = (p) => {
    "shape" in p && t(0, i = p.shape), "computedStyle" in p && t(1, r = p.computedStyle), "transform" in p && t(2, f = p.transform), "viewportScale" in p && t(3, a = p.viewportScale), "svgEl" in p && t(4, c = p.svgEl);
  }, e.$$.update = () => {
    e.$$.dirty & /*shape*/
    1 && t(5, o = i.geometry), e.$$.dirty & /*geom, viewportScale*/
    40 && t(6, l = wn(o.bounds, 2 / a));
  }, [
    i,
    r,
    f,
    a,
    c,
    o,
    l,
    u,
    h,
    m,
    y,
    _
  ];
}
let So = class extends pe {
  constructor(n) {
    super(), me(this, n, ko, Eo, _e, {
      shape: 0,
      computedStyle: 1,
      transform: 2,
      viewportScale: 3,
      svgEl: 4
    });
  }
};
var qn = Object.prototype.hasOwnProperty;
function gn(e, n) {
  var t, o;
  if (e === n) return !0;
  if (e && n && (t = e.constructor) === n.constructor) {
    if (t === Date) return e.getTime() === n.getTime();
    if (t === RegExp) return e.toString() === n.toString();
    if (t === Array) {
      if ((o = e.length) === n.length)
        for (; o-- && gn(e[o], n[o]); ) ;
      return o === -1;
    }
    if (!t || typeof e == "object") {
      o = 0;
      for (t in e)
        if (qn.call(e, t) && ++o && !qn.call(n, t) || !(t in n) || !gn(e[t], n[t])) return !1;
      return Object.keys(n).length === o;
    }
  }
  return e !== e && n !== n;
}
const To = 12, Po = (e, n) => e.polygons.reduce((t, o, l) => {
  const i = o.rings.reduce((r, f, a) => {
    const c = f.points.map((u, h) => {
      const m = h === f.points.length - 1 ? f.points[0] : f.points[h + 1], y = (u[0] + m[0]) / 2, _ = (u[1] + m[1]) / 2, v = Math.sqrt(
        Math.pow(m[0] - y, 2) + Math.pow(m[1] - _, 2)
      ) > To / n;
      return { point: [y, _], visible: v, elementIdx: l, ringIdx: a, pointIdx: h };
    });
    return [...r, ...c];
  }, []);
  return [...t, ...i];
}, []);
function rn(e) {
  const n = e.slice(), t = (
    /*midpoints*/
    n[10][
      /*visibleMidpoint*/
      n[6]
    ]
  );
  return n[29] = t.point, n;
}
function Bn(e, n, t) {
  const o = e.slice();
  return o[30] = n[t], o[32] = t, o;
}
function Un(e, n, t) {
  const o = e.slice();
  return o[33] = n[t], o[35] = t, o;
}
function Gn(e, n, t) {
  const o = e.slice();
  return o[29] = n[t], o[37] = t, o;
}
function fn(e) {
  const n = e.slice(), t = (
    /*midpoints*/
    n[10][
      /*visibleMidpoint*/
      n[6]
    ]
  );
  return n[29] = t.point, n;
}
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
function Fn(e) {
  let n, t, o, l;
  return {
    c() {
      n = N("circle"), s(n, "cx", t = /*point*/
      e[29][0]), s(n, "cy", o = /*point*/
      e[29][1]), s(n, "r", l = Je / /*viewportScale*/
      e[3]), s(n, "class", "svelte-1vxo6dc");
    },
    m(i, r) {
      H(i, n, r);
    },
    p(i, r) {
      r[0] & /*midpoints, visibleMidpoint*/
      1088 && t !== (t = /*point*/
      i[29][0]) && s(n, "cx", t), r[0] & /*midpoints, visibleMidpoint*/
      1088 && o !== (o = /*point*/
      i[29][1]) && s(n, "cy", o), r[0] & /*viewportScale*/
      8 && l !== (l = Je / /*viewportScale*/
      i[3]) && s(n, "r", l);
    },
    d(i) {
      i && M(n);
    }
  };
}
function zn(e) {
  let n, t, o, l, i, r, f, a, c, u;
  return {
    c() {
      n = N("mask"), t = N("rect"), f = N("circle"), s(t, "x", o = /*mask*/
      e[9].x), s(t, "y", l = /*mask*/
      e[9].y), s(t, "width", i = /*mask*/
      e[9].w), s(t, "height", r = /*mask*/
      e[9].h), s(t, "class", "svelte-1vxo6dc"), s(f, "cx", a = /*point*/
      e[29][0]), s(f, "cy", c = /*point*/
      e[29][1]), s(f, "r", u = Je / /*viewportScale*/
      e[3]), s(f, "class", "svelte-1vxo6dc"), s(n, "id", `${/*maskId*/
      e[18]}-${/*elementIdx*/
      e[32]}-inner`), s(n, "class", "a9s-multipolygon-editor-mask svelte-1vxo6dc");
    },
    m(h, m) {
      H(h, n, m), K(n, t), K(n, f);
    },
    p(h, m) {
      m[0] & /*mask*/
      512 && o !== (o = /*mask*/
      h[9].x) && s(t, "x", o), m[0] & /*mask*/
      512 && l !== (l = /*mask*/
      h[9].y) && s(t, "y", l), m[0] & /*mask*/
      512 && i !== (i = /*mask*/
      h[9].w) && s(t, "width", i), m[0] & /*mask*/
      512 && r !== (r = /*mask*/
      h[9].h) && s(t, "height", r), m[0] & /*midpoints, visibleMidpoint*/
      1088 && a !== (a = /*point*/
      h[29][0]) && s(f, "cx", a), m[0] & /*midpoints, visibleMidpoint*/
      1088 && c !== (c = /*point*/
      h[29][1]) && s(f, "cy", c), m[0] & /*viewportScale*/
      8 && u !== (u = Je / /*viewportScale*/
      h[3]) && s(f, "r", u);
    },
    d(h) {
      h && M(n);
    }
  };
}
function Vn(e) {
  let n, t;
  function o(...l) {
    return (
      /*func*/
      e[19](
        /*elementIdx*/
        e[32],
        /*ringIdx*/
        e[35],
        /*pointIdx*/
        e[37],
        ...l
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
        e[8].some(o)
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
    te(
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
      ie(n.$$.fragment);
    },
    m(l, i) {
      se(n, l, i), t = !0;
    },
    p(l, i) {
      e = l;
      const r = {};
      i[0] & /*geom*/
      32 && (r.x = /*point*/
      e[29][0]), i[0] & /*geom*/
      32 && (r.y = /*point*/
      e[29][1]), i[0] & /*viewportScale*/
      8 && (r.scale = /*viewportScale*/
      e[3]), i[0] & /*selectedCorners*/
      256 && (r.selected = /*selectedCorners*/
      e[8].some(o)), n.$set(r);
    },
    i(l) {
      t || (z(n.$$.fragment, l), t = !0);
    },
    o(l) {
      $(n.$$.fragment, l), t = !1;
    },
    d(l) {
      le(n, l);
    }
  };
}
function Kn(e) {
  let n, t, o = be(
    /*ring*/
    e[33].points
  ), l = [];
  for (let r = 0; r < o.length; r += 1)
    l[r] = Vn(Gn(e, o, r));
  const i = (r) => $(l[r], 1, 1, () => {
    l[r] = null;
  });
  return {
    c() {
      for (let r = 0; r < l.length; r += 1)
        l[r].c();
      n = ve();
    },
    m(r, f) {
      for (let a = 0; a < l.length; a += 1)
        l[a] && l[a].m(r, f);
      H(r, n, f), t = !0;
    },
    p(r, f) {
      if (f[0] & /*geom, viewportScale, selectedCorners, onEnterHandle, onLeaveHandle, onHandlePointerDown, grab, onHandlePointerUp*/
      268491048) {
        o = be(
          /*ring*/
          r[33].points
        );
        let a;
        for (a = 0; a < o.length; a += 1) {
          const c = Gn(r, o, a);
          l[a] ? (l[a].p(c, f), z(l[a], 1)) : (l[a] = Vn(c), l[a].c(), z(l[a], 1), l[a].m(n.parentNode, n));
        }
        for (Ee(), a = o.length; a < l.length; a += 1)
          i(a);
        ke();
      }
    },
    i(r) {
      if (!t) {
        for (let f = 0; f < o.length; f += 1)
          z(l[f]);
        t = !0;
      }
    },
    o(r) {
      l = l.filter(Boolean);
      for (let f = 0; f < l.length; f += 1)
        $(l[f]);
      t = !1;
    },
    d(r) {
      r && M(n), ze(l, r);
    }
  };
}
function Zn(e) {
  let n, t, o, l, i, r, f, a, c, u, h, m, y, _, p, v, D, P = (
    /*visibleMidpoint*/
    e[6] !== void 0 && !/*isHandleHovered*/
    e[7] && Fn(an(e))
  ), b = (
    /*visibleMidpoint*/
    e[6] !== void 0 && !/*isHandleHovered*/
    e[7] && zn(fn(e))
  ), d = be(
    /*element*/
    e[30].rings
  ), w = [];
  for (let g = 0; g < d.length; g += 1)
    w[g] = Kn(Un(e, d, g));
  const E = (g) => $(w[g], 1, 1, () => {
    w[g] = null;
  });
  return {
    c() {
      n = N("g"), t = N("defs"), o = N("mask"), l = N("rect"), c = N("path"), P && P.c(), b && b.c(), h = N("path"), y = N("path");
      for (let g = 0; g < w.length; g += 1)
        w[g].c();
      s(l, "x", i = /*mask*/
      e[9].x), s(l, "y", r = /*mask*/
      e[9].y), s(l, "width", f = /*mask*/
      e[9].w), s(l, "height", a = /*mask*/
      e[9].h), s(l, "class", "svelte-1vxo6dc"), s(c, "d", u = Fe(
        /*element*/
        e[30]
      )), s(c, "class", "svelte-1vxo6dc"), s(o, "id", `${/*maskId*/
      e[18]}-${/*elementIdx*/
      e[32]}-outer`), s(o, "class", "a9s-multipolygon-editor-mask svelte-1vxo6dc"), s(h, "class", "a9s-outer"), s(h, "mask", `url(#${/*maskId*/
      e[18]}-${/*elementIdx*/
      e[32]}-outer)`), s(h, "fill-rule", "evenodd"), s(h, "d", m = Fe(
        /*element*/
        e[30]
      )), s(y, "class", "a9s-inner"), s(y, "mask", `url(#${/*maskId*/
      e[18]}-${/*elementIdx*/
      e[32]}-inner)`), s(
        y,
        "style",
        /*computedStyle*/
        e[1]
      ), s(y, "fill-rule", "evenodd"), s(y, "d", _ = Fe(
        /*element*/
        e[30]
      ));
    },
    m(g, S) {
      H(g, n, S), K(n, t), K(t, o), K(o, l), K(o, c), P && P.m(o, null), b && b.m(t, null), K(n, h), K(n, y);
      for (let I = 0; I < w.length; I += 1)
        w[I] && w[I].m(n, null);
      p = !0, v || (D = [
        J(
          h,
          "pointerup",
          /*onShapePointerUp*/
          e[13]
        ),
        J(h, "pointerdown", function() {
          te(
            /*grab*/
            e[28]("SHAPE")
          ) && e[28]("SHAPE").apply(this, arguments);
        }),
        J(
          y,
          "pointerup",
          /*onShapePointerUp*/
          e[13]
        ),
        J(y, "pointerdown", function() {
          te(
            /*grab*/
            e[28]("SHAPE")
          ) && e[28]("SHAPE").apply(this, arguments);
        })
      ], v = !0);
    },
    p(g, S) {
      if (e = g, (!p || S[0] & /*mask*/
      512 && i !== (i = /*mask*/
      e[9].x)) && s(l, "x", i), (!p || S[0] & /*mask*/
      512 && r !== (r = /*mask*/
      e[9].y)) && s(l, "y", r), (!p || S[0] & /*mask*/
      512 && f !== (f = /*mask*/
      e[9].w)) && s(l, "width", f), (!p || S[0] & /*mask*/
      512 && a !== (a = /*mask*/
      e[9].h)) && s(l, "height", a), (!p || S[0] & /*geom*/
      32 && u !== (u = Fe(
        /*element*/
        e[30]
      ))) && s(c, "d", u), /*visibleMidpoint*/
      e[6] !== void 0 && !/*isHandleHovered*/
      e[7] ? P ? P.p(an(e), S) : (P = Fn(an(e)), P.c(), P.m(o, null)) : P && (P.d(1), P = null), /*visibleMidpoint*/
      e[6] !== void 0 && !/*isHandleHovered*/
      e[7] ? b ? b.p(fn(e), S) : (b = zn(fn(e)), b.c(), b.m(t, null)) : b && (b.d(1), b = null), (!p || S[0] & /*geom*/
      32 && m !== (m = Fe(
        /*element*/
        e[30]
      ))) && s(h, "d", m), (!p || S[0] & /*computedStyle*/
      2) && s(
        y,
        "style",
        /*computedStyle*/
        e[1]
      ), (!p || S[0] & /*geom*/
      32 && _ !== (_ = Fe(
        /*element*/
        e[30]
      ))) && s(y, "d", _), S[0] & /*geom, viewportScale, selectedCorners, onEnterHandle, onLeaveHandle, onHandlePointerDown, grab, onHandlePointerUp*/
      268491048) {
        d = be(
          /*element*/
          e[30].rings
        );
        let I;
        for (I = 0; I < d.length; I += 1) {
          const R = Un(e, d, I);
          w[I] ? (w[I].p(R, S), z(w[I], 1)) : (w[I] = Kn(R), w[I].c(), z(w[I], 1), w[I].m(n, null));
        }
        for (Ee(), I = d.length; I < w.length; I += 1)
          E(I);
        ke();
      }
    },
    i(g) {
      if (!p) {
        for (let S = 0; S < d.length; S += 1)
          z(w[S]);
        p = !0;
      }
    },
    o(g) {
      w = w.filter(Boolean);
      for (let S = 0; S < w.length; S += 1)
        $(w[S]);
      p = !1;
    },
    d(g) {
      g && M(n), P && P.d(), b && b.d(), ze(w, g), v = !1, Se(D);
    }
  };
}
function Wn(e) {
  let n, t;
  return n = new bn({
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
    te(
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
      ie(n.$$.fragment);
    },
    m(o, l) {
      se(n, o, l), t = !0;
    },
    p(o, l) {
      e = o;
      const i = {};
      l[0] & /*midpoints, visibleMidpoint*/
      1088 && (i.x = /*point*/
      e[29][0]), l[0] & /*midpoints, visibleMidpoint*/
      1088 && (i.y = /*point*/
      e[29][1]), l[0] & /*viewportScale*/
      8 && (i.scale = /*viewportScale*/
      e[3]), n.$set(i);
    },
    i(o) {
      t || (z(n.$$.fragment, o), t = !0);
    },
    o(o) {
      $(n.$$.fragment, o), t = !1;
    },
    d(o) {
      le(n, o);
    }
  };
}
function Mo(e) {
  let n, t, o, l = be(
    /*geom*/
    e[5].polygons
  ), i = [];
  for (let a = 0; a < l.length; a += 1)
    i[a] = Zn(Bn(e, l, a));
  const r = (a) => $(i[a], 1, 1, () => {
    i[a] = null;
  });
  let f = (
    /*visibleMidpoint*/
    e[6] !== void 0 && !/*isHandleHovered*/
    e[7] && Wn(rn(e))
  );
  return {
    c() {
      for (let a = 0; a < i.length; a += 1)
        i[a].c();
      n = x(), f && f.c(), t = ve();
    },
    m(a, c) {
      for (let u = 0; u < i.length; u += 1)
        i[u] && i[u].m(a, c);
      H(a, n, c), f && f.m(a, c), H(a, t, c), o = !0;
    },
    p(a, c) {
      if (c[0] & /*geom, viewportScale, selectedCorners, onEnterHandle, onLeaveHandle, onHandlePointerDown, grab, onHandlePointerUp, maskId, computedStyle, onShapePointerUp, midpoints, visibleMidpoint, mask, isHandleHovered*/
      268763114) {
        l = be(
          /*geom*/
          a[5].polygons
        );
        let u;
        for (u = 0; u < l.length; u += 1) {
          const h = Bn(a, l, u);
          i[u] ? (i[u].p(h, c), z(i[u], 1)) : (i[u] = Zn(h), i[u].c(), z(i[u], 1), i[u].m(n.parentNode, n));
        }
        for (Ee(), u = l.length; u < i.length; u += 1)
          r(u);
        ke();
      }
      /*visibleMidpoint*/
      a[6] !== void 0 && !/*isHandleHovered*/
      a[7] ? f ? (f.p(rn(a), c), c[0] & /*visibleMidpoint, isHandleHovered*/
      192 && z(f, 1)) : (f = Wn(rn(a)), f.c(), z(f, 1), f.m(t.parentNode, t)) : f && (Ee(), $(f, 1, 1, () => {
        f = null;
      }), ke());
    },
    i(a) {
      if (!o) {
        for (let c = 0; c < l.length; c += 1)
          z(i[c]);
        z(f), o = !0;
      }
    },
    o(a) {
      i = i.filter(Boolean);
      for (let c = 0; c < i.length; c += 1)
        $(i[c]);
      $(f), o = !1;
    },
    d(a) {
      a && (M(n), M(t)), ze(i, a), f && f.d(a);
    }
  };
}
function Ho(e) {
  let n, t;
  return n = new Ue({
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
          Mo,
          ({ grab: o }) => ({ 28: o }),
          ({ grab: o }) => [o ? 268435456 : 0]
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
      ie(n.$$.fragment);
    },
    m(o, l) {
      se(n, o, l), t = !0;
    },
    p(o, l) {
      const i = {};
      l[0] & /*shape*/
      1 && (i.shape = /*shape*/
      o[0]), l[0] & /*transform*/
      4 && (i.transform = /*transform*/
      o[2]), l[0] & /*svgEl*/
      16 && (i.svgEl = /*svgEl*/
      o[4]), l[0] & /*midpoints, visibleMidpoint, viewportScale, isHandleHovered, geom, selectedCorners, grab, computedStyle, mask*/
      268437482 | l[1] & /*$$scope*/
      128 && (i.$$scope = { dirty: l, ctx: o }), n.$set(i);
    },
    i(o) {
      t || (z(n.$$.fragment, o), t = !0);
    },
    o(o) {
      $(n.$$.fragment, o), t = !1;
    },
    d(o) {
      le(n, o);
    }
  };
}
const Lo = 250, Io = 1e3, Je = 4.5;
function Oo(e, n, t) {
  let o, l, i;
  const r = Ie();
  let { shape: f } = n, { computedStyle: a } = n, { transform: c } = n, { viewportScale: u = 1 } = n, { svgEl: h } = n, m, y = !1, _, p = [];
  const v = () => t(7, y = !0), D = () => t(7, y = !1), P = (A) => {
    if (p.length > 0 || !l.some((X) => X.visible)) {
      t(6, m = void 0);
      return;
    }
    const [V, L] = c.elementToImage(A.offsetX, A.offsetY), B = (X) => Math.pow(X[0] - V, 2) + Math.pow(X[1] - L, 2), W = Qt(o).reduce((X, Q) => B(Q) < B(X) ? Q : X), C = l.filter((X) => X.visible).reduce((X, Q) => B(Q.point) < B(X.point) ? Q : X), j = Math.pow(Io / u, 2);
    B(W) < j || B(C.point) < j ? t(6, m = l.indexOf(C)) : t(6, m = void 0);
  }, b = () => {
    document.activeElement !== h && h.focus();
  }, d = () => {
    t(8, p = []), b();
  }, w = (A) => {
    t(7, y = !0), A.preventDefault(), A.stopPropagation(), _ = performance.now();
  }, E = (A, V, L) => (B) => {
    if (!_ || Be || performance.now() - _ > Lo) return;
    const W = (j) => j.polygon === A && j.ring === V && j.point === L, C = p.some(W);
    B.metaKey || B.ctrlKey || B.shiftKey ? C ? t(8, p = p.filter((j) => !W(j))) : t(8, p = [...p, { polygon: A, ring: V, point: L }]) : C && p.length > 1 ? t(8, p = [{ polygon: A, ring: V, point: L }]) : C ? t(8, p = []) : t(8, p = [{ polygon: A, ring: V, point: L }]), b();
  }, g = (A, V, L) => {
    b();
    const B = A.geometry.polygons;
    let W;
    if (V === "SHAPE")
      W = B.map((C) => {
        const j = C.rings.map((X, Q) => ({ points: X.points.map((ne, re) => [ne[0] + L[0], ne[1] + L[1]]) })), k = qe(j[0].points);
        return { rings: j, bounds: k };
      });
    else {
      const [C, j, k, X] = V.split("-").map((Q) => parseInt(Q));
      W = B.map((Q, G) => {
        if (G === j) {
          const ne = Q.rings.map((ee, de) => de === k ? { points: ee.points.map((ce, fe) => fe === X ? [ce[0] + L[0], ce[1] + L[1]] : ce) } : ee), re = qe(ne[0].points);
          return { rings: ne, bounds: re };
        } else
          return Q;
      });
    }
    return {
      ...A,
      geometry: {
        polygons: W,
        bounds: tn(W)
      }
    };
  }, S = (A) => async (V) => {
    V.stopPropagation();
    const L = l[A], B = o.polygons.map((C, j) => {
      if (j === L.elementIdx) {
        const k = C.rings.map((Q, G) => G === L.ringIdx ? { points: [
          ...Q.points.slice(0, L.pointIdx + 1),
          L.point,
          ...Q.points.slice(L.pointIdx + 1)
        ] } : Q), X = qe(k[0].points);
        return { rings: k, bounds: X };
      } else
        return C;
    });
    r("change", {
      ...f,
      geometry: {
        polygons: B,
        bounds: tn(B)
      }
    }), await Ze();
    const W = [...document.querySelectorAll(".a9s-handle")][A + 1];
    if (W != null && W.firstChild) {
      const C = new PointerEvent(
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
      W.firstChild.dispatchEvent(C);
    }
  }, I = () => {
    const A = o.polygons.map((L, B) => {
      if (p.some((C) => C.polygon === B)) {
        const C = L.rings.map((k, X) => {
          const Q = p.filter((G) => G.polygon === B && G.ring === X);
          return Q.length && k.points.length - Q.length >= 3 ? { points: k.points.filter((ne, re) => !Q.some((ee) => ee.point === re)) } : k;
        }), j = qe(C[0].points);
        return { rings: C, bounds: j };
      } else
        return L;
    });
    !gn(o.polygons, A) && (r("change", {
      ...f,
      geometry: {
        polygons: A,
        bounds: tn(A)
      }
    }), t(8, p = []));
  };
  Oe(() => {
    if (Be) return;
    const A = (V) => {
      (V.key === "Delete" || V.key === "Backspace") && (V.preventDefault(), I());
    };
    return h.addEventListener("pointermove", P), h.addEventListener("keydown", A), () => {
      h.removeEventListener("pointermove", P), h.removeEventListener("keydown", A);
    };
  });
  const R = `polygon-mask-${Math.random().toString(36).substring(2, 12)}`, q = (A, V, L, { polygon: B, ring: W, point: C }) => B === A && W === V && C === L;
  function T(A) {
    oe.call(this, e, A);
  }
  function U(A) {
    oe.call(this, e, A);
  }
  function Y(A) {
    oe.call(this, e, A);
  }
  return e.$$set = (A) => {
    "shape" in A && t(0, f = A.shape), "computedStyle" in A && t(1, a = A.computedStyle), "transform" in A && t(2, c = A.transform), "viewportScale" in A && t(3, u = A.viewportScale), "svgEl" in A && t(4, h = A.svgEl);
  }, e.$$.update = () => {
    e.$$.dirty[0] & /*shape*/
    1 && t(5, o = f.geometry), e.$$.dirty[0] & /*geom, viewportScale*/
    40 && t(10, l = Be ? [] : Po(o, u)), e.$$.dirty[0] & /*geom, viewportScale*/
    40 && t(9, i = wn(o.bounds, Je / u));
  }, [
    f,
    a,
    c,
    u,
    h,
    o,
    m,
    y,
    p,
    i,
    l,
    v,
    D,
    d,
    w,
    E,
    g,
    S,
    R,
    q,
    T,
    U,
    Y
  ];
}
class Co extends pe {
  constructor(n) {
    super(), me(
      this,
      n,
      Oo,
      Ho,
      _e,
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
De.RECTANGLE, De.POLYGON, De.MULTIPOLYGON;
typeof navigator > "u" ? !1 : navigator.userAgent.indexOf("Mac OS X") !== -1;
function Ro(e) {
  let n, t, o, l, i, r, f, a, c, u, h, m, y, _, p, v, D, P, b, d, w, E, g, S, I, R, q, T, U, Y, A, V, L, B, W;
  return R = new ye({
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
  }), R.$on("pointerdown", function() {
    te(
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
    te(
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
    te(
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
    te(
      /*grab*/
      e[12]("LEFT")
    ) && e[12]("LEFT").apply(this, arguments);
  }), {
    c() {
      n = N("defs"), t = N("mask"), o = N("rect"), a = N("ellipse"), y = x(), _ = N("ellipse"), b = x(), d = N("ellipse"), I = x(), ie(R.$$.fragment), q = x(), ie(T.$$.fragment), U = x(), ie(Y.$$.fragment), A = x(), ie(V.$$.fragment), s(o, "x", l = /*mask*/
      e[6].x), s(o, "y", i = /*mask*/
      e[6].y), s(o, "width", r = /*mask*/
      e[6].w), s(o, "height", f = /*mask*/
      e[6].h), s(o, "class", "svelte-wdm5en"), s(a, "cx", c = /*geom*/
      e[5].cx), s(a, "cy", u = /*geom*/
      e[5].cy), s(a, "rx", h = /*geom*/
      e[5].rx), s(a, "ry", m = /*geom*/
      e[5].ry), s(a, "class", "svelte-wdm5en"), s(
        t,
        "id",
        /*maskId*/
        e[8]
      ), s(t, "class", "a9s-ellipse-editor-mask svelte-wdm5en"), s(_, "class", "a9s-outer"), s(_, "mask", `url(#${/*maskId*/
      e[8]})`), s(_, "cx", p = /*geom*/
      e[5].cx), s(_, "cy", v = /*geom*/
      e[5].cy), s(_, "rx", D = /*geom*/
      e[5].rx), s(_, "ry", P = /*geom*/
      e[5].ry), s(d, "class", "a9s-inner a9s-shape-handle"), s(
        d,
        "style",
        /*computedStyle*/
        e[1]
      ), s(d, "cx", w = /*geom*/
      e[5].cx), s(d, "cy", E = /*geom*/
      e[5].cy), s(d, "rx", g = /*geom*/
      e[5].rx), s(d, "ry", S = /*geom*/
      e[5].ry);
    },
    m(C, j) {
      H(C, n, j), K(n, t), K(t, o), K(t, a), H(C, y, j), H(C, _, j), H(C, b, j), H(C, d, j), H(C, I, j), se(R, C, j), H(C, q, j), se(T, C, j), H(C, U, j), se(Y, C, j), H(C, A, j), se(V, C, j), L = !0, B || (W = [
        J(_, "pointerdown", function() {
          te(
            /*grab*/
            e[12]("SHAPE")
          ) && e[12]("SHAPE").apply(this, arguments);
        }),
        J(d, "pointerdown", function() {
          te(
            /*grab*/
            e[12]("SHAPE")
          ) && e[12]("SHAPE").apply(this, arguments);
        })
      ], B = !0);
    },
    p(C, j) {
      e = C, (!L || j & /*mask*/
      64 && l !== (l = /*mask*/
      e[6].x)) && s(o, "x", l), (!L || j & /*mask*/
      64 && i !== (i = /*mask*/
      e[6].y)) && s(o, "y", i), (!L || j & /*mask*/
      64 && r !== (r = /*mask*/
      e[6].w)) && s(o, "width", r), (!L || j & /*mask*/
      64 && f !== (f = /*mask*/
      e[6].h)) && s(o, "height", f), (!L || j & /*geom*/
      32 && c !== (c = /*geom*/
      e[5].cx)) && s(a, "cx", c), (!L || j & /*geom*/
      32 && u !== (u = /*geom*/
      e[5].cy)) && s(a, "cy", u), (!L || j & /*geom*/
      32 && h !== (h = /*geom*/
      e[5].rx)) && s(a, "rx", h), (!L || j & /*geom*/
      32 && m !== (m = /*geom*/
      e[5].ry)) && s(a, "ry", m), (!L || j & /*geom*/
      32 && p !== (p = /*geom*/
      e[5].cx)) && s(_, "cx", p), (!L || j & /*geom*/
      32 && v !== (v = /*geom*/
      e[5].cy)) && s(_, "cy", v), (!L || j & /*geom*/
      32 && D !== (D = /*geom*/
      e[5].rx)) && s(_, "rx", D), (!L || j & /*geom*/
      32 && P !== (P = /*geom*/
      e[5].ry)) && s(_, "ry", P), (!L || j & /*computedStyle*/
      2) && s(
        d,
        "style",
        /*computedStyle*/
        e[1]
      ), (!L || j & /*geom*/
      32 && w !== (w = /*geom*/
      e[5].cx)) && s(d, "cx", w), (!L || j & /*geom*/
      32 && E !== (E = /*geom*/
      e[5].cy)) && s(d, "cy", E), (!L || j & /*geom*/
      32 && g !== (g = /*geom*/
      e[5].rx)) && s(d, "rx", g), (!L || j & /*geom*/
      32 && S !== (S = /*geom*/
      e[5].ry)) && s(d, "ry", S);
      const k = {};
      j & /*geom*/
      32 && (k.x = /*geom*/
      e[5].cx), j & /*geom*/
      32 && (k.y = /*geom*/
      e[5].cy - /*geom*/
      e[5].ry), j & /*viewportScale*/
      8 && (k.scale = /*viewportScale*/
      e[3]), R.$set(k);
      const X = {};
      j & /*geom*/
      32 && (X.x = /*geom*/
      e[5].cx + /*geom*/
      e[5].rx), j & /*geom*/
      32 && (X.y = /*geom*/
      e[5].cy), j & /*viewportScale*/
      8 && (X.scale = /*viewportScale*/
      e[3]), T.$set(X);
      const Q = {};
      j & /*geom*/
      32 && (Q.x = /*geom*/
      e[5].cx), j & /*geom*/
      32 && (Q.y = /*geom*/
      e[5].cy + /*geom*/
      e[5].ry), j & /*viewportScale*/
      8 && (Q.scale = /*viewportScale*/
      e[3]), Y.$set(Q);
      const G = {};
      j & /*geom*/
      32 && (G.x = /*geom*/
      e[5].cx - /*geom*/
      e[5].rx), j & /*geom*/
      32 && (G.y = /*geom*/
      e[5].cy), j & /*viewportScale*/
      8 && (G.scale = /*viewportScale*/
      e[3]), V.$set(G);
    },
    i(C) {
      L || (z(R.$$.fragment, C), z(T.$$.fragment, C), z(Y.$$.fragment, C), z(V.$$.fragment, C), L = !0);
    },
    o(C) {
      $(R.$$.fragment, C), $(T.$$.fragment, C), $(Y.$$.fragment, C), $(V.$$.fragment, C), L = !1;
    },
    d(C) {
      C && (M(n), M(y), M(_), M(b), M(d), M(I), M(q), M(U), M(A)), le(R, C), le(T, C), le(Y, C), le(V, C), B = !1, Se(W);
    }
  };
}
function Do(e) {
  let n, t;
  return n = new Ue({
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
          Ro,
          ({ grab: o }) => ({ 12: o }),
          ({ grab: o }) => o ? 4096 : 0
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
      ie(n.$$.fragment);
    },
    m(o, l) {
      se(n, o, l), t = !0;
    },
    p(o, [l]) {
      const i = {};
      l & /*shape*/
      1 && (i.shape = /*shape*/
      o[0]), l & /*transform*/
      4 && (i.transform = /*transform*/
      o[2]), l & /*svgEl*/
      16 && (i.svgEl = /*svgEl*/
      o[4]), l & /*$$scope, geom, viewportScale, grab, computedStyle, mask*/
      12394 && (i.$$scope = { dirty: l, ctx: o }), n.$set(i);
    },
    i(o) {
      t || (z(n.$$.fragment, o), t = !0);
    },
    o(o) {
      $(n.$$.fragment, o), t = !1;
    },
    d(o) {
      le(n, o);
    }
  };
}
function No(e, n, t) {
  let o, l, { shape: i } = n, { computedStyle: r } = n, { transform: f } = n, { viewportScale: a = 1 } = n, { svgEl: c } = n;
  const u = (p, v, D) => {
    const P = p.geometry.bounds;
    let [b, d] = [P.minX, P.minY], [w, E] = [P.maxX, P.maxY];
    const [g, S] = D;
    if (v === "SHAPE")
      b += g, w += g, d += S, E += S;
    else
      switch (v) {
        case "TOP": {
          d += S;
          break;
        }
        case "BOTTOM": {
          E += S;
          break;
        }
        case "LEFT": {
          b += g;
          break;
        }
        case "RIGHT": {
          w += g;
          break;
        }
      }
    const I = Math.min(b, w), R = Math.min(d, E), q = Math.abs(w - b), T = Math.abs(E - d), U = (b + w) / 2, Y = (d + E) / 2, A = q / 2, V = T / 2;
    return {
      ...p,
      geometry: {
        ...p.geometry,
        cx: U,
        cy: Y,
        rx: A,
        ry: V,
        bounds: {
          minX: I,
          minY: R,
          maxX: I + q,
          maxY: R + T
        }
      }
    };
  }, h = `ellipse-mask-${Math.random().toString(36).substring(2, 12)}`;
  function m(p) {
    oe.call(this, e, p);
  }
  function y(p) {
    oe.call(this, e, p);
  }
  function _(p) {
    oe.call(this, e, p);
  }
  return e.$$set = (p) => {
    "shape" in p && t(0, i = p.shape), "computedStyle" in p && t(1, r = p.computedStyle), "transform" in p && t(2, f = p.transform), "viewportScale" in p && t(3, a = p.viewportScale), "svgEl" in p && t(4, c = p.svgEl);
  }, e.$$.update = () => {
    e.$$.dirty & /*shape*/
    1 && t(5, o = i.geometry), e.$$.dirty & /*geom, viewportScale*/
    40 && t(6, l = nn(o.bounds, 2 / a));
  }, [
    i,
    r,
    f,
    a,
    c,
    o,
    l,
    u,
    h,
    m,
    y,
    _
  ];
}
class Ao extends pe {
  constructor(n) {
    super(), me(this, n, No, Do, _e, {
      shape: 0,
      computedStyle: 1,
      transform: 2,
      viewportScale: 3,
      svgEl: 4
    });
  }
}
function Jn(e) {
  let n, t, o, l, i, r, f, a, c, u, h, m, y, _, p, v, D, P, b, d, w, E;
  return {
    c() {
      n = N("defs"), t = N("mask"), o = N("rect"), a = N("ellipse"), y = N("ellipse"), P = N("ellipse"), s(o, "x", l = /*x*/
      e[2] - /*buffer*/
      e[6]), s(o, "y", i = /*y*/
      e[3] - /*buffer*/
      e[6]), s(o, "width", r = /*w*/
      e[4] + 2 * /*buffer*/
      e[6]), s(o, "height", f = /*h*/
      e[5] + 2 * /*buffer*/
      e[6]), s(o, "class", "svelte-1koqlb3"), s(a, "cx", c = /*x*/
      e[2] + /*w*/
      e[4] / 2), s(a, "cy", u = /*y*/
      e[3] + /*h*/
      e[5] / 2), s(a, "rx", h = /*w*/
      e[4] / 2), s(a, "ry", m = /*h*/
      e[5] / 2), s(a, "class", "svelte-1koqlb3"), s(
        t,
        "id",
        /*maskId*/
        e[7]
      ), s(t, "class", "a9s-rubberband-ellipse-mask svelte-1koqlb3"), s(y, "class", "a9s-outer"), s(y, "mask", `url(#${/*maskId*/
      e[7]})`), s(y, "cx", _ = /*x*/
      e[2] + /*w*/
      e[4] / 2), s(y, "cy", p = /*y*/
      e[3] + /*h*/
      e[5] / 2), s(y, "rx", v = /*w*/
      e[4] / 2), s(y, "ry", D = /*h*/
      e[5] / 2), s(P, "class", "a9s-inner"), s(P, "cx", b = /*x*/
      e[2] + /*w*/
      e[4] / 2), s(P, "cy", d = /*y*/
      e[3] + /*h*/
      e[5] / 2), s(P, "rx", w = /*w*/
      e[4] / 2), s(P, "ry", E = /*h*/
      e[5] / 2);
    },
    m(g, S) {
      H(g, n, S), K(n, t), K(t, o), K(t, a), H(g, y, S), H(g, P, S);
    },
    p(g, S) {
      S & /*x, buffer*/
      68 && l !== (l = /*x*/
      g[2] - /*buffer*/
      g[6]) && s(o, "x", l), S & /*y, buffer*/
      72 && i !== (i = /*y*/
      g[3] - /*buffer*/
      g[6]) && s(o, "y", i), S & /*w, buffer*/
      80 && r !== (r = /*w*/
      g[4] + 2 * /*buffer*/
      g[6]) && s(o, "width", r), S & /*h, buffer*/
      96 && f !== (f = /*h*/
      g[5] + 2 * /*buffer*/
      g[6]) && s(o, "height", f), S & /*x, w*/
      20 && c !== (c = /*x*/
      g[2] + /*w*/
      g[4] / 2) && s(a, "cx", c), S & /*y, h*/
      40 && u !== (u = /*y*/
      g[3] + /*h*/
      g[5] / 2) && s(a, "cy", u), S & /*w*/
      16 && h !== (h = /*w*/
      g[4] / 2) && s(a, "rx", h), S & /*h*/
      32 && m !== (m = /*h*/
      g[5] / 2) && s(a, "ry", m), S & /*x, w*/
      20 && _ !== (_ = /*x*/
      g[2] + /*w*/
      g[4] / 2) && s(y, "cx", _), S & /*y, h*/
      40 && p !== (p = /*y*/
      g[3] + /*h*/
      g[5] / 2) && s(y, "cy", p), S & /*w*/
      16 && v !== (v = /*w*/
      g[4] / 2) && s(y, "rx", v), S & /*h*/
      32 && D !== (D = /*h*/
      g[5] / 2) && s(y, "ry", D), S & /*x, w*/
      20 && b !== (b = /*x*/
      g[2] + /*w*/
      g[4] / 2) && s(P, "cx", b), S & /*y, h*/
      40 && d !== (d = /*y*/
      g[3] + /*h*/
      g[5] / 2) && s(P, "cy", d), S & /*w*/
      16 && w !== (w = /*w*/
      g[4] / 2) && s(P, "rx", w), S & /*h*/
      32 && E !== (E = /*h*/
      g[5] / 2) && s(P, "ry", E);
    },
    d(g) {
      g && (M(n), M(y), M(P));
    }
  };
}
function Yo(e) {
  let n, t = (
    /*origin*/
    e[1] && Jn(e)
  );
  return {
    c() {
      n = N("g"), t && t.c(), s(n, "class", "a9s-annotation a9s-rubberband");
    },
    m(o, l) {
      H(o, n, l), t && t.m(n, null), e[12](n);
    },
    p(o, [l]) {
      /*origin*/
      o[1] ? t ? t.p(o, l) : (t = Jn(o), t.c(), t.m(n, null)) : t && (t.d(1), t = null);
    },
    i: he,
    o: he,
    d(o) {
      o && M(n), t && t.d(), e[12](null);
    }
  };
}
function Xo(e, n, t) {
  let o;
  const l = Ie();
  let { addEventListener: i } = n, { drawingMode: r } = n, { transform: f } = n, { viewportScale: a } = n, c, u, h, m, y, _, p, v = !1, D = !1, P, b;
  const d = (T) => {
    const U = T;
    P = performance.now(), r === "drag" && (t(1, u = f.elementToImage(U.offsetX, U.offsetY)), h = u, t(2, m = u[0]), t(3, y = u[1]), t(4, _ = 1), t(5, p = 1));
  }, w = (T) => {
    const U = T || b;
    if (u)
      if (h = f.elementToImage(U.offsetX, U.offsetY), D) {
        const Y = 2 * Math.abs(h[0] - u[0]), A = 2 * Math.abs(h[1] - u[1]);
        t(4, _ = v ? Math.max(Y, A) : Y), t(5, p = v ? _ : A), t(2, m = Math.min(h[0], u[0] - _ / 2)), t(3, y = Math.min(h[1], u[1] - p / 2));
      } else {
        const Y = Math.abs(h[0] - u[0]), A = Math.abs(h[1] - u[1]);
        t(4, _ = v ? Math.max(Y, A) : Y), t(5, p = v ? _ : A), t(2, m = Math.min(h[0], u[0])), t(3, y = Math.min(h[1], u[1]));
      }
    T && (b = T);
  }, E = (T) => {
    const U = T, Y = performance.now() - P;
    if (r === "click") {
      if (Y > 300) return;
      u ? g() : (t(1, u = f.elementToImage(U.offsetX, U.offsetY)), h = u, t(2, m = u[0]), t(3, y = u[1]), t(4, _ = 1), t(5, p = 1));
    } else u && (Y > 300 || _ * p > 100 ? (U.stopPropagation(), g()) : (t(1, u = void 0), h = void 0, b = void 0));
  }, g = () => {
    if (_ * p > 15) {
      const T = {
        type: Me.ELLIPSE,
        geometry: {
          bounds: {
            minX: m,
            minY: y,
            maxX: m + _,
            maxY: y + p
          },
          cx: m + _ / 2,
          cy: y + p / 2,
          rx: _ / 2,
          ry: p / 2
        }
      };
      l("create", T);
    }
    t(1, u = void 0), h = void 0, b = void 0;
  }, S = (T) => {
    T.key === "Shift" && (v = !0, w()), T.key === "Control" && (D = !0, w());
  }, I = (T) => {
    T.key === "Shift" && (v = !1, w()), T.key === "Control" && (D = !1, w());
  };
  Oe(() => (document.addEventListener("keyup", I), document.addEventListener("keydown", S), i("pointerdown", d), i("pointermove", w), i("pointerup", E, !0), () => {
    document.removeEventListener("keyup", I), document.removeEventListener("keydown", S);
  }));
  const R = `ellipse-mask-${Math.random().toString(36).substring(2, 12)}`;
  function q(T) {
    Qe[T ? "unshift" : "push"](() => {
      c = T, t(0, c);
    });
  }
  return e.$$set = (T) => {
    "addEventListener" in T && t(8, i = T.addEventListener), "drawingMode" in T && t(9, r = T.drawingMode), "transform" in T && t(10, f = T.transform), "viewportScale" in T && t(11, a = T.viewportScale);
  }, e.$$.update = () => {
    e.$$.dirty & /*viewportScale*/
    2048 && t(6, o = 2 / a);
  }, [
    c,
    u,
    m,
    y,
    _,
    p,
    o,
    R,
    i,
    r,
    f,
    a,
    q
  ];
}
class jo extends pe {
  constructor(n) {
    super(), me(this, n, Xo, Yo, _e, {
      addEventListener: 8,
      drawingMode: 9,
      transform: 10,
      viewportScale: 11
    });
  }
}
function qo(e) {
  let n, t, o, l, i, r, f, a, c, u, h, m, y, _, p, v, D, P;
  return y = new ye({
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
  }), y.$on("pointerdown", function() {
    te(
      /*grab*/
      e[10]("POINT1")
    ) && e[10]("POINT1").apply(this, arguments);
  }), p = new ye({
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
  }), p.$on("pointerdown", function() {
    te(
      /*grab*/
      e[10]("POINT2")
    ) && e[10]("POINT2").apply(this, arguments);
  }), {
    c() {
      n = N("line"), r = x(), f = N("line"), m = x(), ie(y.$$.fragment), _ = x(), ie(p.$$.fragment), s(n, "class", "a9s-outer"), s(n, "x1", t = /*geom*/
      e[5].points[0][0]), s(n, "y1", o = /*geom*/
      e[5].points[0][1]), s(n, "x2", l = /*geom*/
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
    m(b, d) {
      H(b, n, d), H(b, r, d), H(b, f, d), H(b, m, d), se(y, b, d), H(b, _, d), se(p, b, d), v = !0, D || (P = [
        J(n, "pointerdown", function() {
          te(
            /*grab*/
            e[10]("LINE")
          ) && e[10]("LINE").apply(this, arguments);
        }),
        J(f, "pointerdown", function() {
          te(
            /*grab*/
            e[10]("LINE")
          ) && e[10]("LINE").apply(this, arguments);
        })
      ], D = !0);
    },
    p(b, d) {
      e = b, (!v || d & /*geom*/
      32 && t !== (t = /*geom*/
      e[5].points[0][0])) && s(n, "x1", t), (!v || d & /*geom*/
      32 && o !== (o = /*geom*/
      e[5].points[0][1])) && s(n, "y1", o), (!v || d & /*geom*/
      32 && l !== (l = /*geom*/
      e[5].points[1][0])) && s(n, "x2", l), (!v || d & /*geom*/
      32 && i !== (i = /*geom*/
      e[5].points[1][1])) && s(n, "y2", i), (!v || d & /*computedStyle*/
      2) && s(
        f,
        "style",
        /*computedStyle*/
        e[1]
      ), (!v || d & /*geom*/
      32 && a !== (a = /*geom*/
      e[5].points[0][0])) && s(f, "x1", a), (!v || d & /*geom*/
      32 && c !== (c = /*geom*/
      e[5].points[0][1])) && s(f, "y1", c), (!v || d & /*geom*/
      32 && u !== (u = /*geom*/
      e[5].points[1][0])) && s(f, "x2", u), (!v || d & /*geom*/
      32 && h !== (h = /*geom*/
      e[5].points[1][1])) && s(f, "y2", h);
      const w = {};
      d & /*geom*/
      32 && (w.x = /*geom*/
      e[5].points[0][0]), d & /*geom*/
      32 && (w.y = /*geom*/
      e[5].points[0][1]), d & /*viewportScale*/
      8 && (w.scale = /*viewportScale*/
      e[3]), y.$set(w);
      const E = {};
      d & /*geom*/
      32 && (E.x = /*geom*/
      e[5].points[1][0]), d & /*geom*/
      32 && (E.y = /*geom*/
      e[5].points[1][1]), d & /*viewportScale*/
      8 && (E.scale = /*viewportScale*/
      e[3]), p.$set(E);
    },
    i(b) {
      v || (z(y.$$.fragment, b), z(p.$$.fragment, b), v = !0);
    },
    o(b) {
      $(y.$$.fragment, b), $(p.$$.fragment, b), v = !1;
    },
    d(b) {
      b && (M(n), M(r), M(f), M(m), M(_)), le(y, b), le(p, b), D = !1, Se(P);
    }
  };
}
function Bo(e) {
  let n, t;
  return n = new Ue({
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
          qo,
          ({ grab: o }) => ({ 10: o }),
          ({ grab: o }) => o ? 1024 : 0
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
      ie(n.$$.fragment);
    },
    m(o, l) {
      se(n, o, l), t = !0;
    },
    p(o, [l]) {
      const i = {};
      l & /*shape*/
      1 && (i.shape = /*shape*/
      o[0]), l & /*transform*/
      4 && (i.transform = /*transform*/
      o[2]), l & /*svgEl*/
      16 && (i.svgEl = /*svgEl*/
      o[4]), l & /*$$scope, geom, viewportScale, grab, computedStyle*/
      3114 && (i.$$scope = { dirty: l, ctx: o }), n.$set(i);
    },
    i(o) {
      t || (z(n.$$.fragment, o), t = !0);
    },
    o(o) {
      $(n.$$.fragment, o), t = !1;
    },
    d(o) {
      le(n, o);
    }
  };
}
function Uo(e, n, t) {
  let o, { shape: l } = n, { computedStyle: i } = n, { transform: r } = n, { viewportScale: f = 1 } = n, { svgEl: a } = n;
  const c = (y, _, p) => {
    const v = y.geometry;
    let [[D, P], [b, d]] = v.points;
    const [w, E] = p;
    if (_ === "LINE")
      D += w, b += w, P += E, d += E;
    else
      switch (_) {
        case "POINT1": {
          D += w, P += E;
          break;
        }
        case "POINT2": {
          b += w, d += E;
          break;
        }
      }
    return {
      ...y,
      geometry: {
        ...y.geometry,
        points: [[D, P], [b, d]],
        bounds: Le([[D, P], [b, d]])
      }
    };
  };
  function u(y) {
    oe.call(this, e, y);
  }
  function h(y) {
    oe.call(this, e, y);
  }
  function m(y) {
    oe.call(this, e, y);
  }
  return e.$$set = (y) => {
    "shape" in y && t(0, l = y.shape), "computedStyle" in y && t(1, i = y.computedStyle), "transform" in y && t(2, r = y.transform), "viewportScale" in y && t(3, f = y.viewportScale), "svgEl" in y && t(4, a = y.svgEl);
  }, e.$$.update = () => {
    e.$$.dirty & /*shape*/
    1 && t(5, o = l.geometry);
  }, [
    l,
    i,
    r,
    f,
    a,
    o,
    c,
    u,
    h,
    m
  ];
}
class Go extends pe {
  constructor(n) {
    super(), me(this, n, Uo, Bo, _e, {
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
    m(o, l) {
      H(o, n, l), H(o, t, l);
    },
    p(o, l) {
      l & /*x1*/
      8 && s(
        n,
        "x1",
        /*x1*/
        o[3]
      ), l & /*y1*/
      16 && s(
        n,
        "y1",
        /*y1*/
        o[4]
      ), l & /*x2*/
      32 && s(
        n,
        "x2",
        /*x2*/
        o[5]
      ), l & /*y2*/
      64 && s(
        n,
        "y2",
        /*y2*/
        o[6]
      ), l & /*x1*/
      8 && s(
        t,
        "x1",
        /*x1*/
        o[3]
      ), l & /*y1*/
      16 && s(
        t,
        "y1",
        /*y1*/
        o[4]
      ), l & /*x2*/
      32 && s(
        t,
        "x2",
        /*x2*/
        o[5]
      ), l & /*y2*/
      64 && s(
        t,
        "y2",
        /*y2*/
        o[6]
      );
    },
    d(o) {
      o && (M(n), M(t));
    }
  };
}
function Fo(e) {
  let n, t = (
    /*origin*/
    e[1] && /*cursor*/
    e[2] && Qn(e)
  );
  return {
    c() {
      n = N("g"), t && t.c(), s(n, "class", "a9s-annotation a9s-rubberband");
    },
    m(o, l) {
      H(o, n, l), t && t.m(n, null), e[11](n);
    },
    p(o, [l]) {
      /*origin*/
      o[1] && /*cursor*/
      o[2] ? t ? t.p(o, l) : (t = Qn(o), t.c(), t.m(n, null)) : t && (t.d(1), t = null);
    },
    i: he,
    o: he,
    d(o) {
      o && M(n), t && t.d(), e[11](null);
    }
  };
}
function zo(e, n, t) {
  const o = Ie();
  let { addEventListener: l } = n, { drawingMode: i } = n, { transform: r } = n, { viewportScale: f } = n, a, c, u, h, m, y, _, p, v;
  const D = (E) => {
    const g = E, { timeStamp: S, offsetX: I, offsetY: R } = g;
    p = { timeStamp: S, offsetX: I, offsetY: R }, i === "drag" && (t(1, c = r.elementToImage(g.offsetX, g.offsetY)), t(2, u = c), t(3, h = c[0]), t(4, m = c[1]), t(5, y = u[0]), t(6, _ = u[1]));
  }, P = (E) => {
    const g = E || v;
    c && (t(2, u = r.elementToImage(g.offsetX, g.offsetY)), t(5, y = u[0]), t(6, _ = u[1])), E && (v = E);
  }, b = (E) => {
    const g = E;
    if (i === "click") {
      const S = performance.now() - p.timeStamp, I = Re([p.offsetX, p.offsetY], [g.offsetX, g.offsetY]);
      if (S > 300 || I > 15) return;
      c ? d() : (t(1, c = r.elementToImage(g.offsetX, g.offsetY)), t(2, u = c), t(3, h = c[0]), t(4, m = c[1]), t(5, y = u[0]), t(6, _ = u[1]));
    } else c && (g.stopPropagation(), d());
  }, d = () => {
    if (c && u && Re(c, u) > 4) {
      const E = {
        type: Me.LINE,
        geometry: {
          bounds: Le([c, u]),
          points: [c, u]
        }
      };
      o("create", E);
    }
    t(1, c = void 0), t(2, u = void 0), v = void 0;
  };
  Oe(() => {
    l("pointerdown", D, !0), l("pointermove", P), l("pointerup", b, !0);
  });
  function w(E) {
    Qe[E ? "unshift" : "push"](() => {
      a = E, t(0, a);
    });
  }
  return e.$$set = (E) => {
    "addEventListener" in E && t(7, l = E.addEventListener), "drawingMode" in E && t(8, i = E.drawingMode), "transform" in E && t(9, r = E.transform), "viewportScale" in E && t(10, f = E.viewportScale);
  }, [
    a,
    c,
    u,
    h,
    m,
    y,
    _,
    l,
    i,
    r,
    f,
    w
  ];
}
class Vo extends pe {
  constructor(n) {
    super(), me(this, n, zo, Fo, _e, {
      addEventListener: 7,
      drawingMode: 8,
      transform: 9,
      viewportScale: 10
    });
  }
}
function $n(e, n, t) {
  const o = e.slice();
  return o[18] = n[t], o;
}
function xn(e) {
  let n, t, o, l = be(
    /*BG_COLORS*/
    e[5]
  ), i = [];
  for (let r = 0; r < l.length; r += 1)
    i[r] = et($n(e, l, r));
  return {
    c() {
      n = ge("div");
      for (let r = 0; r < i.length; r += 1)
        i[r].c();
      s(n, "class", "tb-color-picker svelte-19rj0sx");
    },
    m(r, f) {
      H(r, n, f);
      for (let a = 0; a < i.length; a += 1)
        i[a] && i[a].m(n, null);
      t || (o = J(
        n,
        "mousedown",
        /*onMouseDown*/
        e[11]
      ), t = !0);
    },
    p(r, f) {
      if (f & /*BG_COLORS, style, pickBgColor*/
      1057) {
        l = be(
          /*BG_COLORS*/
          r[5]
        );
        let a;
        for (a = 0; a < l.length; a += 1) {
          const c = $n(r, l, a);
          i[a] ? i[a].p(c, f) : (i[a] = et(c), i[a].c(), i[a].m(n, null));
        }
        for (; a < i.length; a += 1)
          i[a].d(1);
        i.length = l.length;
      }
    },
    d(r) {
      r && M(n), ze(i, r), t = !1, o();
    }
  };
}
function et(e) {
  let n, t, o;
  function l() {
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
      n = ge("button"), s(n, "class", "tb-swatch svelte-19rj0sx"), s(
        n,
        "title",
        /*c*/
        e[18].label
      ), je(
        n,
        "background",
        /*c*/
        e[18].value !== "transparent" ? (
          /*c*/
          e[18].value
        ) : "var(--checker)"
      ), He(
        n,
        "selected",
        /*style*/
        e[0].bgColor === /*c*/
        e[18].value
      );
    },
    m(i, r) {
      H(i, n, r), t || (o = J(n, "click", l), t = !0);
    },
    p(i, r) {
      e = i, r & /*style, BG_COLORS*/
      33 && He(
        n,
        "selected",
        /*style*/
        e[0].bgColor === /*c*/
        e[18].value
      );
    },
    d(i) {
      i && M(n), t = !1, o();
    }
  };
}
function Ko(e) {
  let n, t, o, l, i, r, f, a, c, u, h, m, y, _, p, v, D, P, b, d, w, E, g, S, I, R, q, T = (
    /*showBgPicker*/
    e[3] && xn(e)
  );
  return {
    c() {
      n = ge("div"), t = ge("button"), t.textContent = "A-", o = x(), l = ge("button"), l.textContent = "A+", i = x(), r = ge("div"), f = x(), a = ge("button"), a.innerHTML = "<strong>B</strong>", c = x(), u = ge("button"), u.innerHTML = "<em>I</em>", h = x(), m = ge("button"), m.innerHTML = "<u>U</u>", y = x(), _ = ge("div"), p = x(), v = ge("div"), D = ge("button"), P = ge("span"), P.textContent = "A", b = x(), d = ge("span"), w = x(), T && T.c(), E = x(), g = ge("div"), S = x(), I = ge("button"), I.innerHTML = '<svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor"><path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"></path></svg>', s(t, "class", "tb-btn svelte-19rj0sx"), s(t, "title", "Decrease font size"), s(l, "class", "tb-btn svelte-19rj0sx"), s(l, "title", "Increase font size"), s(r, "class", "tb-divider svelte-19rj0sx"), s(a, "class", "tb-btn svelte-19rj0sx"), s(a, "title", "Bold"), He(
        a,
        "active",
        /*style*/
        e[0].bold
      ), s(u, "class", "tb-btn svelte-19rj0sx"), s(u, "title", "Italic"), He(
        u,
        "active",
        /*style*/
        e[0].italic
      ), s(m, "class", "tb-btn svelte-19rj0sx"), s(m, "title", "Underline"), He(
        m,
        "active",
        /*style*/
        e[0].underline
      ), s(_, "class", "tb-divider svelte-19rj0sx"), s(P, "class", "tb-color-letter svelte-19rj0sx"), s(d, "class", "tb-color-swatch svelte-19rj0sx"), je(
        d,
        "background",
        /*style*/
        e[0].bgColor !== "transparent" ? (
          /*style*/
          e[0].bgColor
        ) : "transparent"
      ), je(
        d,
        "border-color",
        /*style*/
        e[0].bgColor !== "transparent" ? (
          /*style*/
          e[0].bgColor
        ) : "#AAAFC3"
      ), s(D, "class", "tb-btn tb-color-btn svelte-19rj0sx"), s(D, "title", "Highlight colour"), s(v, "class", "tb-color-wrap svelte-19rj0sx"), s(g, "class", "tb-divider svelte-19rj0sx"), s(I, "class", "tb-btn tb-delete svelte-19rj0sx"), s(I, "title", "Delete"), s(n, "class", "a9s-tools-text-toolbar svelte-19rj0sx"), je(
        n,
        "left",
        /*x*/
        e[1] + "px"
      ), je(
        n,
        "top",
        /*y*/
        e[2] + "px"
      );
    },
    m(U, Y) {
      H(U, n, Y), K(n, t), K(n, o), K(n, l), K(n, i), K(n, r), K(n, f), K(n, a), K(n, c), K(n, u), K(n, h), K(n, m), K(n, y), K(n, _), K(n, p), K(n, v), K(v, D), K(D, P), K(D, b), K(D, d), K(v, w), T && T.m(v, null), K(n, E), K(n, g), K(n, S), K(n, I), R || (q = [
        J(
          t,
          "click",
          /*click_handler*/
          e[12]
        ),
        J(
          l,
          "click",
          /*click_handler_1*/
          e[13]
        ),
        J(
          a,
          "click",
          /*toggleBold*/
          e[7]
        ),
        J(
          u,
          "click",
          /*toggleItalic*/
          e[8]
        ),
        J(
          m,
          "click",
          /*toggleUnderline*/
          e[9]
        ),
        J(
          D,
          "click",
          /*click_handler_2*/
          e[14]
        ),
        J(
          I,
          "click",
          /*click_handler_4*/
          e[16]
        ),
        J(
          n,
          "mousedown",
          /*onMouseDown*/
          e[11]
        )
      ], R = !0);
    },
    p(U, [Y]) {
      Y & /*style*/
      1 && He(
        a,
        "active",
        /*style*/
        U[0].bold
      ), Y & /*style*/
      1 && He(
        u,
        "active",
        /*style*/
        U[0].italic
      ), Y & /*style*/
      1 && He(
        m,
        "active",
        /*style*/
        U[0].underline
      ), Y & /*style*/
      1 && je(
        d,
        "background",
        /*style*/
        U[0].bgColor !== "transparent" ? (
          /*style*/
          U[0].bgColor
        ) : "transparent"
      ), Y & /*style*/
      1 && je(
        d,
        "border-color",
        /*style*/
        U[0].bgColor !== "transparent" ? (
          /*style*/
          U[0].bgColor
        ) : "#AAAFC3"
      ), /*showBgPicker*/
      U[3] ? T ? T.p(U, Y) : (T = xn(U), T.c(), T.m(v, null)) : T && (T.d(1), T = null), Y & /*x*/
      2 && je(
        n,
        "left",
        /*x*/
        U[1] + "px"
      ), Y & /*y*/
      4 && je(
        n,
        "top",
        /*y*/
        U[2] + "px"
      );
    },
    i: he,
    o: he,
    d(U) {
      U && M(n), T && T.d(), R = !1, Se(q);
    }
  };
}
function Zo(e, n, t) {
  let { style: o } = n, { x: l } = n, { y: i } = n;
  const r = Ie(), f = [
    { value: "transparent", label: "None" },
    { value: "#ffff00", label: "Yellow" },
    { value: "#00ff00", label: "Green" },
    { value: "#00ffff", label: "Cyan" },
    { value: "#ff00ff", label: "Magenta" },
    { value: "#ffffff", label: "White" },
    { value: "#000000", label: "Black" }
  ];
  let a = !1;
  const c = (w) => r("change", { ...o, ...w }), u = (w) => c({
    fontSize: Math.max(8, Math.min(72, o.fontSize + w))
  }), h = () => c({ bold: !o.bold }), m = () => c({ italic: !o.italic }), y = () => c({ underline: !o.underline }), _ = (w) => {
    c({ bgColor: w }), t(3, a = !1);
  }, p = (w) => w.preventDefault(), v = () => u(-2), D = () => u(2), P = () => t(3, a = !a), b = (w) => _(w.value), d = () => r("delete");
  return e.$$set = (w) => {
    "style" in w && t(0, o = w.style), "x" in w && t(1, l = w.x), "y" in w && t(2, i = w.y);
  }, [
    o,
    l,
    i,
    a,
    r,
    f,
    u,
    h,
    m,
    y,
    _,
    p,
    v,
    D,
    P,
    b,
    d
  ];
}
class Wo extends pe {
  constructor(n) {
    super(), me(this, n, Zo, Ko, _e, { style: 0, x: 1, y: 2 });
  }
}
const nt = {
  fontSize: 16,
  bold: !1,
  italic: !1,
  underline: !1,
  bgColor: "transparent"
};
function tt(e, n, t) {
  const o = e.slice();
  return o[35] = n[t].id, o[36] = n[t].selector, o[37] = n[t].text, o;
}
function un(e) {
  const n = e.slice(), t = (
    /*toScreenRect*/
    n[9](
      /*selector*/
      n[36]
    )
  );
  n[40] = t;
  const o = (
    /*editingId*/
    n[1] === /*id*/
    n[35] || /*selectedIds*/
    n[5].includes(
      /*id*/
      n[35]
    )
  );
  n[41] = o;
  const l = (
    /*editingId*/
    n[1] === /*id*/
    n[35] ? (
      /*editingStyle*/
      n[3]
    ) : (
      /*getStyle*/
      n[10](
        /*selector*/
        n[36]
      )
    )
  );
  return n[42] = l, n;
}
function ot(e, n, t) {
  const o = e.slice();
  return o[35] = n[t].id, o[36] = n[t].selector, o;
}
function Jo(e) {
  const n = e.slice(), t = (
    /*polylineGeometry*/
    n[17](
      /*selector*/
      n[36]
    )
  );
  n[46] = t;
  const o = (
    /*midpoint*/
    n[18](
      /*points*/
      n[46]
    )
  );
  return n[47] = o, n;
}
function Qo(e) {
  const n = e.slice(), t = (
    /*lineGeometry*/
    n[16](
      /*selector*/
      n[36]
    )
  );
  return n[46] = t, n;
}
function cn(e) {
  var o;
  const n = e.slice(), t = (
    /*selector*/
    (o = n[36].properties) == null ? void 0 : o.toolType
  );
  return n[45] = t, n;
}
function lt(e) {
  let n;
  function t(r, f) {
    if (
      /*toolType*/
      r[45] === "arrow"
    ) return it;
    if (
      /*toolType*/
      r[45] === "distance"
    ) return st;
  }
  function o(r, f) {
    if (f === it) return Qo(r);
    if (f === st) return Jo(r);
  }
  let l = t(e), i = l && l(o(e, l));
  return {
    c() {
      i && i.c(), n = ve();
    },
    m(r, f) {
      i && i.m(r, f), H(r, n, f);
    },
    p(r, f) {
      l === (l = t(r)) && i ? i.p(o(r, l), f) : (i && i.d(1), i = l && l(o(r, l)), i && (i.c(), i.m(n.parentNode, n)));
    },
    d(r) {
      r && M(n), i && i.d(r);
    }
  };
}
function st(e) {
  let n, t, o, l = (
    /*formatLength*/
    e[15](
      /*points*/
      e[46]
    ) + ""
  ), i, r;
  return {
    c() {
      n = N("g"), t = N("rect"), o = N("text"), i = Mt(l), s(t, "x", "-32"), s(t, "y", "-24"), s(t, "width", "64"), s(t, "height", "18"), s(t, "rx", "3"), s(t, "class", "svelte-8e6quv"), s(o, "x", "0"), s(o, "y", "-11"), s(o, "text-anchor", "middle"), s(o, "class", "svelte-8e6quv"), s(n, "class", "a9s-tools-distance-label svelte-8e6quv"), s(n, "transform", r = `translate(${/*center*/
      e[47][0]}, ${/*center*/
      e[47][1]})`);
    },
    m(f, a) {
      H(f, n, a), K(n, t), K(n, o), K(o, i);
    },
    p(f, a) {
      a[0] & /*svgAnnotations*/
      128 && l !== (l = /*formatLength*/
      f[15](
        /*points*/
        f[46]
      ) + "") && Pt(i, l), a[0] & /*svgAnnotations*/
      128 && r !== (r = `translate(${/*center*/
      f[47][0]}, ${/*center*/
      f[47][1]})`) && s(n, "transform", r);
    },
    d(f) {
      f && M(n);
    }
  };
}
function it(e) {
  let n, t;
  return {
    c() {
      n = N("polyline"), s(n, "class", "a9s-tools-arrowhead svelte-8e6quv"), s(n, "points", t = /*arrowheadPoints*/
      e[19](
        /*points*/
        e[46]
      ));
    },
    m(o, l) {
      H(o, n, l);
    },
    p(o, l) {
      l[0] & /*svgAnnotations*/
      128 && t !== (t = /*arrowheadPoints*/
      o[19](
        /*points*/
        o[46]
      )) && s(n, "points", t);
    },
    d(o) {
      o && M(n);
    }
  };
}
function rt(e, n) {
  let t, o, l = (
    /*selector*/
    n[36] && lt(cn(n))
  );
  return {
    key: e,
    first: null,
    c() {
      t = ve(), l && l.c(), o = ve(), this.first = t;
    },
    m(i, r) {
      H(i, t, r), l && l.m(i, r), H(i, o, r);
    },
    p(i, r) {
      n = i, /*selector*/
      n[36] ? l ? l.p(cn(n), r) : (l = lt(cn(n)), l.c(), l.m(o.parentNode, o)) : l && (l.d(1), l = null);
    },
    d(i) {
      i && (M(t), M(o)), l && l.d(i);
    }
  };
}
function ft(e) {
  let n, t, o, l, i, r = (
    /*focused*/
    e[41] && at(e)
  );
  function f(u, h) {
    return (
      /*editingId*/
      u[1] === /*id*/
      u[35] ? xo : $o
    );
  }
  let a = f(e), c = a(e);
  return {
    c() {
      r && r.c(), n = x(), t = ge("div"), c.c(), o = x(), s(t, "class", "a9s-tools-text-box svelte-8e6quv"), s(t, "style", l = /*textBoxStyle*/
      e[20](
        /*style*/
        e[42],
        /*focused*/
        e[41]
      ) + "; left:" + /*r*/
      e[40].x + "px; top:" + /*r*/
      e[40].y + "px; width:" + /*r*/
      e[40].w + "px; height:" + /*r*/
      e[40].h + "px;");
    },
    m(u, h) {
      r && r.m(u, h), H(u, n, h), H(u, t, h), c.m(t, null), K(t, o), i = !0;
    },
    p(u, h) {
      /*focused*/
      u[41] ? r ? (r.p(u, h), h[0] & /*editingId, textAnnotations, selectedIds*/
      98 && z(r, 1)) : (r = at(u), r.c(), z(r, 1), r.m(n.parentNode, n)) : r && (Ee(), $(r, 1, 1, () => {
        r = null;
      }), ke()), a === (a = f(u)) && c ? c.p(u, h) : (c.d(1), c = a(u), c && (c.c(), c.m(t, o))), (!i || h[0] & /*editingId, textAnnotations, editingStyle, selectedIds*/
      106 && l !== (l = /*textBoxStyle*/
      u[20](
        /*style*/
        u[42],
        /*focused*/
        u[41]
      ) + "; left:" + /*r*/
      u[40].x + "px; top:" + /*r*/
      u[40].y + "px; width:" + /*r*/
      u[40].w + "px; height:" + /*r*/
      u[40].h + "px;")) && s(t, "style", l);
    },
    i(u) {
      i || (z(r), i = !0);
    },
    o(u) {
      $(r), i = !1;
    },
    d(u) {
      u && (M(n), M(t)), r && r.d(u), c.d();
    }
  };
}
function at(e) {
  let n, t;
  function o(...i) {
    return (
      /*change_handler*/
      e[25](
        /*id*/
        e[35],
        ...i
      )
    );
  }
  function l() {
    return (
      /*delete_handler*/
      e[26](
        /*id*/
        e[35]
      )
    );
  }
  return n = new Wo({
    props: {
      style: (
        /*style*/
        e[42]
      ),
      x: (
        /*r*/
        e[40].x
      ),
      y: (
        /*r*/
        e[40].y
      )
    }
  }), n.$on("change", o), n.$on("delete", l), {
    c() {
      ie(n.$$.fragment);
    },
    m(i, r) {
      se(n, i, r), t = !0;
    },
    p(i, r) {
      e = i;
      const f = {};
      r[0] & /*editingId, textAnnotations, editingStyle*/
      74 && (f.style = /*style*/
      e[42]), r[0] & /*textAnnotations*/
      64 && (f.x = /*r*/
      e[40].x), r[0] & /*textAnnotations*/
      64 && (f.y = /*r*/
      e[40].y), n.$set(f);
    },
    i(i) {
      t || (z(n.$$.fragment, i), t = !0);
    },
    o(i) {
      $(n.$$.fragment, i), t = !1;
    },
    d(i) {
      le(n, i);
    }
  };
}
function $o(e) {
  let n, t = (
    /*text*/
    (e[37] || "") + ""
  ), o, l;
  return {
    c() {
      n = ge("span"), o = Mt(t), s(n, "class", "a9s-tools-text-content svelte-8e6quv"), s(n, "style", l = /*textContentStyle*/
      e[21](
        /*style*/
        e[42]
      ));
    },
    m(i, r) {
      H(i, n, r), K(n, o);
    },
    p(i, r) {
      r[0] & /*textAnnotations*/
      64 && t !== (t = /*text*/
      (i[37] || "") + "") && Pt(o, t), r[0] & /*editingId, textAnnotations, editingStyle*/
      74 && l !== (l = /*textContentStyle*/
      i[21](
        /*style*/
        i[42]
      )) && s(n, "style", l);
    },
    d(i) {
      i && M(n);
    }
  };
}
function xo(e) {
  let n, t, o, l;
  return {
    c() {
      n = ge("textarea"), s(n, "class", "a9s-tools-text-editor svelte-8e6quv"), s(n, "style", t = /*textContentStyle*/
      e[21](
        /*style*/
        e[42]
      )), s(n, "placeholder", "Type here…");
    },
    m(i, r) {
      H(i, n, r), e[27](n), Sn(
        n,
        /*editingText*/
        e[2]
      ), o || (l = [
        J(
          n,
          "input",
          /*textarea_input_handler*/
          e[28]
        ),
        J(
          n,
          "keydown",
          /*onTextareaKeyDown*/
          e[14]
        ),
        J(
          n,
          "blur",
          /*commitEdit*/
          e[11]
        )
      ], o = !0);
    },
    p(i, r) {
      r[0] & /*editingId, textAnnotations, editingStyle*/
      74 && t !== (t = /*textContentStyle*/
      i[21](
        /*style*/
        i[42]
      )) && s(n, "style", t), r[0] & /*editingText*/
      4 && Sn(
        n,
        /*editingText*/
        i[2]
      );
    },
    d(i) {
      i && M(n), e[27](null), o = !1, Se(l);
    }
  };
}
function ut(e, n) {
  let t, o, l, i = (
    /*selector*/
    n[36] && ft(un(n))
  );
  return {
    key: e,
    first: null,
    c() {
      t = ve(), i && i.c(), o = ve(), this.first = t;
    },
    m(r, f) {
      H(r, t, f), i && i.m(r, f), H(r, o, f), l = !0;
    },
    p(r, f) {
      n = r, /*selector*/
      n[36] ? i ? (i.p(un(n), f), f[0] & /*textAnnotations*/
      64 && z(i, 1)) : (i = ft(un(n)), i.c(), z(i, 1), i.m(o.parentNode, o)) : i && (Ee(), $(i, 1, 1, () => {
        i = null;
      }), ke());
    },
    i(r) {
      l || (z(i), l = !0);
    },
    o(r) {
      $(i), l = !1;
    },
    d(r) {
      r && (M(t), M(o)), i && i.d(r);
    }
  };
}
function el(e) {
  let n, t, o = [], l = /* @__PURE__ */ new Map(), i, r = [], f = /* @__PURE__ */ new Map(), a, c, u = be(
    /*svgAnnotations*/
    e[7]
  );
  const h = (_) => (
    /*id*/
    _[35]
  );
  for (let _ = 0; _ < u.length; _ += 1) {
    let p = ot(e, u, _), v = h(p);
    l.set(v, o[_] = rt(v, p));
  }
  let m = be(
    /*textAnnotations*/
    e[6]
  );
  const y = (_) => (
    /*id*/
    _[35]
  );
  for (let _ = 0; _ < m.length; _ += 1) {
    let p = tt(e, m, _), v = y(p);
    f.set(v, r[_] = ut(v, p));
  }
  return {
    c() {
      n = N("svg"), t = N("g");
      for (let _ = 0; _ < o.length; _ += 1)
        o[_].c();
      i = x();
      for (let _ = 0; _ < r.length; _ += 1)
        r[_].c();
      a = ve(), s(n, "class", "a9s-tools-overlay svelte-8e6quv"), s(
        n,
        "viewBox",
        /*viewBox*/
        e[0]
      ), s(n, "preserveAspectRatio", "xMinYMin meet");
    },
    m(_, p) {
      H(_, n, p), K(n, t);
      for (let v = 0; v < o.length; v += 1)
        o[v] && o[v].m(t, null);
      H(_, i, p);
      for (let v = 0; v < r.length; v += 1)
        r[v] && r[v].m(_, p);
      H(_, a, p), c = !0;
    },
    p(_, p) {
      p[0] & /*arrowheadPoints, lineGeometry, svgAnnotations, midpoint, polylineGeometry, formatLength*/
      1015936 && (u = be(
        /*svgAnnotations*/
        _[7]
      ), o = kn(o, p, h, 1, _, u, l, t, At, rt, null, ot)), (!c || p[0] & /*viewBox*/
      1) && s(
        n,
        "viewBox",
        /*viewBox*/
        _[0]
      ), p[0] & /*textBoxStyle, editingId, textAnnotations, editingStyle, getStyle, selectedIds, toScreenRect, textContentStyle, textareaEl, editingText, onTextareaKeyDown, commitEdit, applyStyleChange, deleteAnnotation*/
      3178110 && (m = be(
        /*textAnnotations*/
        _[6]
      ), Ee(), r = kn(r, p, y, 1, _, m, f, a.parentNode, Yt, ut, a, tt), ke());
    },
    i(_) {
      if (!c) {
        for (let p = 0; p < m.length; p += 1)
          z(r[p]);
        c = !0;
      }
    },
    o(_) {
      for (let p = 0; p < r.length; p += 1)
        $(r[p]);
      c = !1;
    },
    d(_) {
      _ && (M(n), M(i), M(a));
      for (let p = 0; p < o.length; p += 1)
        o[p].d();
      for (let p = 0; p < r.length; p += 1)
        r[p].d(_);
    }
  };
}
function nl(e, n, t) {
  let o, l, i, r, { anno: f } = n, a = null, c = "0 0 1 1", u = 1, h, m = null, y = "", _ = { ...nt }, p, v = [];
  const { store: D } = f.state;
  Nt(e, D, (k) => t(24, r = k));
  const P = (k) => {
    const X = k.geometry;
    return {
      x: X.x * u,
      y: X.y * u,
      w: X.w * u,
      h: X.h * u
    };
  }, b = (k) => {
    var X;
    return {
      ...nt,
      ...((X = k.properties) == null ? void 0 : X.textStyle) || {}
    };
  }, d = () => {
    if (!a) return;
    const { naturalWidth: k, naturalHeight: X } = a;
    !k || !X || (t(0, c = `0 0 ${k} ${X}`), u = a.getBoundingClientRect().width / k);
  }, w = async (k) => {
    var X, Q, G;
    ((G = (Q = (X = k.target) == null ? void 0 : X.selector) == null ? void 0 : Q.properties) == null ? void 0 : G.toolType) === "text" && (t(1, m = k.id), t(2, y = ""), t(3, _ = b(k.target.selector)), await Ze(), p == null || p.focus());
  }, E = async (k) => {
    var G, ne, re, ee, de;
    if (t(5, v = (k == null ? void 0 : k.map((ae) => ae.id)) || []), !(k != null && k.length)) {
      m && g();
      return;
    }
    const X = k[0];
    ((re = (ne = (G = X == null ? void 0 : X.target) == null ? void 0 : G.selector) == null ? void 0 : ne.properties) == null ? void 0 : re.toolType) === "text" ? m !== X.id && (m && g(), t(1, m = X.id), t(2, y = ((de = (ee = X.bodies) == null ? void 0 : ee[0]) == null ? void 0 : de.value) || ""), t(3, _ = b(X.target.selector)), await Ze(), p == null || p.focus()) : m && g();
  }, g = () => {
    if (!m) return;
    const k = o.find((X) => X.id === m);
    if (k) {
      const X = y.trim() ? [
        {
          type: "TextualBody",
          value: y,
          purpose: "commenting"
        }
      ] : [];
      f.updateAnnotation({
        ...k,
        bodies: X,
        target: {
          ...k.target,
          selector: {
            ...k.target.selector,
            properties: {
              ...k.target.selector.properties,
              textStyle: _
            }
          }
        }
      });
    }
    t(1, m = null), t(2, y = "");
  }, S = (k, X) => {
    const Q = o.find((G) => G.id === k);
    Q && (f.updateAnnotation({
      ...Q,
      target: {
        ...Q.target,
        selector: {
          ...Q.target.selector,
          properties: {
            ...Q.target.selector.properties,
            textStyle: X
          }
        }
      }
    }), m === k && t(3, _ = X));
  }, I = (k) => {
    m === k && (t(1, m = null), t(2, y = "")), f.removeAnnotation(k);
  }, R = (k) => {
    k.stopPropagation(), k.key === "Escape" && (t(1, m = null), t(2, y = ""));
  };
  Oe(() => {
    a = f.element.querySelector("img"), a && (a.complete && d(), a.addEventListener("load", d), window.ResizeObserver && (h = new ResizeObserver(d), h.observe(a)), f.on("createAnnotation", w), f.on("selectionChanged", E));
  }), Xt(() => {
    a == null || a.removeEventListener("load", d), h == null || h.disconnect(), f.off("createAnnotation", w), f.off("selectionChanged", E);
  });
  const q = (k) => {
    let X = 0;
    for (let Q = 1; Q < k.length; Q++) {
      const [G, ne] = k[Q - 1], [re, ee] = k[Q];
      X += Math.hypot(re - G, ee - ne);
    }
    return `${Math.round(X)} px`;
  }, T = (k) => k.geometry.points, U = (k) => k.geometry.points.map((X) => X.point), Y = (k) => [
    (k[0][0] + k[k.length - 1][0]) / 2,
    (k[0][1] + k[k.length - 1][1]) / 2
  ], A = (k) => {
    const [[X, Q], [G, ne]] = k, re = Math.atan2(ne - Q, G - X), ee = 12, de = G - ee * Math.cos(re - Math.PI / 6), ae = ne - ee * Math.sin(re - Math.PI / 6), ce = G - ee * Math.cos(re + Math.PI / 6), fe = ne - ee * Math.sin(re + Math.PI / 6);
    return `${de},${ae} ${G},${ne} ${ce},${fe}`;
  }, V = (k, X) => [
    `background: ${k.bgColor !== "transparent" ? k.bgColor : "transparent"}`,
    `border-color: ${X ? "rgba(80,80,80,0.55)" : "transparent"}`
  ].join("; "), L = (k) => [
    `font-size: ${k.fontSize}px`,
    k.bold ? "font-weight: bold" : "",
    k.italic ? "font-style: italic" : "",
    k.underline ? "text-decoration: underline" : ""
  ].filter(Boolean).join("; "), B = (k, X) => S(k, X.detail), W = (k) => I(k);
  function C(k) {
    Qe[k ? "unshift" : "push"](() => {
      p = k, t(4, p);
    });
  }
  function j() {
    y = this.value, t(2, y);
  }
  return e.$$set = (k) => {
    "anno" in k && t(22, f = k.anno);
  }, e.$$.update = () => {
    e.$$.dirty[0] & /*$store*/
    16777216 && t(23, o = r), e.$$.dirty[0] & /*allAnnotations*/
    8388608 && t(7, l = o.map((k) => {
      var X;
      return { id: k.id, selector: (X = k.target) == null ? void 0 : X.selector };
    }).filter(({ selector: k }) => {
      var X;
      return ["arrow", "distance"].includes(((X = k == null ? void 0 : k.properties) == null ? void 0 : X.toolType) || "");
    })), e.$$.dirty[0] & /*allAnnotations*/
    8388608 && t(6, i = o.map((k) => {
      var X, Q, G;
      return {
        id: k.id,
        annotation: k,
        selector: (X = k.target) == null ? void 0 : X.selector,
        text: (G = (Q = k.bodies) == null ? void 0 : Q[0]) == null ? void 0 : G.value
      };
    }).filter(({ selector: k }) => {
      var X;
      return ((X = k == null ? void 0 : k.properties) == null ? void 0 : X.toolType) === "text";
    }));
  }, [
    c,
    m,
    y,
    _,
    p,
    v,
    i,
    l,
    D,
    P,
    b,
    g,
    S,
    I,
    R,
    q,
    T,
    U,
    Y,
    A,
    V,
    L,
    f,
    o,
    r,
    B,
    W,
    C,
    j
  ];
}
class tl extends pe {
  constructor(n) {
    super(), me(this, n, nl, el, _e, { anno: 22 }, null, [-1, -1]);
  }
}
const ol = (e) => {
  if ("element" in e)
    return new tl({
      target: e.element,
      props: { anno: e }
    });
};
function ct(e) {
  let n, t, o, l, i, r = (
    /*isClosable*/
    e[1] && ht(e)
  );
  return {
    c() {
      n = N("path"), o = N("path"), r && r.c(), i = ve(), s(n, "class", t = Ce(`a9s-outer ${/*isClosable*/
      e[1] ? "closed" : "open"}`) + " svelte-1fo8cp4"), s(
        n,
        "d",
        /*pathString*/
        e[2]
      ), s(o, "class", l = Ce(`a9s-inner ${/*isClosable*/
      e[1] ? "closed" : "open"}`) + " svelte-1fo8cp4"), s(
        o,
        "d",
        /*pathString*/
        e[2]
      );
    },
    m(f, a) {
      H(f, n, a), H(f, o, a), r && r.m(f, a), H(f, i, a);
    },
    p(f, a) {
      a & /*isClosable*/
      2 && t !== (t = Ce(`a9s-outer ${/*isClosable*/
      f[1] ? "closed" : "open"}`) + " svelte-1fo8cp4") && s(n, "class", t), a & /*pathString*/
      4 && s(
        n,
        "d",
        /*pathString*/
        f[2]
      ), a & /*isClosable*/
      2 && l !== (l = Ce(`a9s-inner ${/*isClosable*/
      f[1] ? "closed" : "open"}`) + " svelte-1fo8cp4") && s(o, "class", l), a & /*pathString*/
      4 && s(
        o,
        "d",
        /*pathString*/
        f[2]
      ), /*isClosable*/
      f[1] ? r ? r.p(f, a) : (r = ht(f), r.c(), r.m(i.parentNode, i)) : r && (r.d(1), r = null);
    },
    d(f) {
      f && (M(n), M(o), M(i)), r && r.d(f);
    }
  };
}
function ht(e) {
  let n, t, o;
  return {
    c() {
      n = N("circle"), s(n, "class", "a9s-handle svelte-1fo8cp4"), s(n, "cx", t = /*points*/
      e[0][0][0]), s(n, "cy", o = /*points*/
      e[0][0][1]), s(
        n,
        "r",
        /*handleRadius*/
        e[3]
      );
    },
    m(l, i) {
      H(l, n, i);
    },
    p(l, i) {
      i & /*points*/
      1 && t !== (t = /*points*/
      l[0][0][0]) && s(n, "cx", t), i & /*points*/
      1 && o !== (o = /*points*/
      l[0][0][1]) && s(n, "cy", o), i & /*handleRadius*/
      8 && s(
        n,
        "r",
        /*handleRadius*/
        l[3]
      );
    },
    d(l) {
      l && M(n);
    }
  };
}
function ll(e) {
  let n, t = (
    /*pathString*/
    e[2] && ct(e)
  );
  return {
    c() {
      n = N("g"), t && t.c(), s(n, "class", "a9s-annotation a9s-rubberband");
    },
    m(o, l) {
      H(o, n, l), t && t.m(n, null);
    },
    p(o, [l]) {
      /*pathString*/
      o[2] ? t ? t.p(o, l) : (t = ct(o), t.c(), t.m(n, null)) : t && (t.d(1), t = null);
    },
    i: he,
    o: he,
    d(o) {
      o && M(n), t && t.d();
    }
  };
}
const sl = 20, il = 1500;
function rl(e, n, t) {
  let o, l, i;
  const r = Ie();
  let { addEventListener: f } = n, { drawingMode: a } = n, { transform: c } = n, { viewportScale: u = 1 } = n, h, m = [], y, _ = !1, p;
  const v = (w) => {
    const E = w, { timeStamp: g, offsetX: S, offsetY: I } = E;
    if (h = { timeStamp: g, offsetX: S, offsetY: I }, a === "drag" && m.length === 0) {
      const R = c.elementToImage(E.offsetX, E.offsetY);
      m.push(R), t(8, y = R);
    }
  }, D = (w) => {
    const E = w;
    if (p && clearTimeout(p), m.length > 0) {
      if (t(8, y = c.elementToImage(E.offsetX, E.offsetY)), m.length > 2) {
        const g = Re(y, m[0]) * u;
        t(1, _ = g < sl);
      }
      E.pointerType === "touch" && (p = setTimeout(
        () => {
          b();
        },
        il
      ));
    }
  }, P = (w) => {
    const E = w;
    if (p && clearTimeout(p), a === "click") {
      const g = E.timeStamp - h.timeStamp, S = Re([h.offsetX, h.offsetY], [E.offsetX, E.offsetY]);
      if (g > 300 || S > 15) return;
      if (_)
        d();
      else if (m.length === 0) {
        const I = c.elementToImage(E.offsetX, E.offsetY);
        m.push(I), t(8, y = I);
      } else
        m.push(y);
    } else {
      if (m.length === 1 && Re(m[0], y) <= 4) {
        t(0, m = []), t(8, y = void 0);
        return;
      }
      E.stopImmediatePropagation(), _ ? d() : m.push(y);
    }
  }, b = () => {
    if (!y) return;
    const w = m.slice(0, -1);
    if (w.length < 2) return;
    const E = {
      type: Me.POLYLINE,
      geometry: {
        bounds: Le(w),
        points: w.map((g) => ({ type: "CORNER", point: g }))
      }
    };
    t(0, m = []), t(8, y = void 0), r("create", E);
  }, d = () => {
    const w = {
      type: Me.POLYLINE,
      geometry: {
        bounds: Le(m),
        points: m.map((E) => ({ type: "CORNER", point: E })),
        closed: !0
      }
    };
    t(0, m = []), t(8, y = void 0), r("create", w);
  };
  return Oe(() => {
    f("pointerdown", v, !0), f("pointermove", D), f("pointerup", P, !0), f("dblclick", b, !0);
  }), e.$$set = (w) => {
    "addEventListener" in w && t(4, f = w.addEventListener), "drawingMode" in w && t(5, a = w.drawingMode), "transform" in w && t(6, c = w.transform), "viewportScale" in w && t(7, u = w.viewportScale);
  }, e.$$.update = () => {
    e.$$.dirty & /*viewportScale*/
    128 && t(3, o = 4 / u), e.$$.dirty & /*cursor, isClosable, points*/
    259 && t(9, l = y ? _ ? m : [...m, y] : []), e.$$.dirty & /*coords, isClosable*/
    514 && t(2, i = l.length > 0 ? `M ${l[0][0]},${l[0][1]}` + l.slice(1).map(([w, E]) => ` L ${w},${E}`).join("") + (_ ? " Z" : "") : "");
  }, [
    m,
    _,
    i,
    o,
    f,
    a,
    c,
    u,
    y,
    l
  ];
}
class fl extends pe {
  constructor(n) {
    super(), me(this, n, rl, ll, _e, {
      addEventListener: 4,
      drawingMode: 5,
      transform: 6,
      viewportScale: 7
    });
  }
}
const al = (e, n, t) => {
  const { points: o, closed: l } = e.geometry, i = o[n], r = n === 0 ? l ? o.length - 1 : null : n - 1, f = n === o.length - 1 ? l ? 0 : null : n + 1;
  let a = 0, c = 0;
  if (r !== null && f !== null) {
    const h = o[r].point, m = o[f].point;
    a = m[0] - h[0], c = m[1] - h[1];
  } else if (r !== null) {
    const h = o[r].point;
    a = i.point[0] - h[0], c = i.point[1] - h[1];
  } else if (f !== null) {
    const h = o[f].point;
    a = h[0] - i.point[0], c = h[1] - i.point[1];
  }
  const u = Math.sqrt(a * a + c * c);
  if (u > 0) {
    const h = Math.min(0.3 * u, 100 / t);
    a = a / u * h, c = c / u * h;
  }
  return [a, c];
}, ul = (e, n) => {
  if (e.type === "CORNER" && n.type === "CORNER")
    return [
      (e.point[0] + n.point[0]) / 2,
      (e.point[1] + n.point[1]) / 2
    ];
  const t = e.type === "CORNER" ? e.point : e.outHandle || e.point, o = n.type === "CORNER" ? n.point : n.inHandle || n.point, l = 0.5, i = 1 - l;
  return [
    i * i * i * e.point[0] + 3 * i * i * l * t[0] + 3 * i * l * l * o[0] + l * l * l * n.point[0],
    i * i * i * e.point[1] + 3 * i * i * l * t[1] + 3 * i * l * l * o[1] + l * l * l * n.point[1]
  ];
}, cl = (e, n, t) => {
  const o = e.geometry.points[n];
  if (o.type === "CORNER") {
    const [l, i] = al(e, n, t), r = o.point, f = o.inHandle || [
      r[0] - l,
      r[1] - i
    ], a = o.outHandle || [
      r[0] + l,
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
        points: e.geometry.points.map((l, i) => i === n ? {
          ...l,
          type: "CORNER"
        } : l)
      }
    };
};
function hl(e) {
  let n, t, o, l, i;
  return {
    c() {
      n = N("circle"), s(n, "class", "a9s-tangent-handle svelte-103tdqm"), s(n, "cx", t = /*controlPoint*/
      e[1][0]), s(n, "cy", o = /*controlPoint*/
      e[1][1]), s(
        n,
        "r",
        /*handleRadius*/
        e[3]
      );
    },
    m(r, f) {
      H(r, n, f), l || (i = J(
        n,
        "pointerdown",
        /*pointerdown_handler_1*/
        e[8]
      ), l = !0);
    },
    p(r, f) {
      f & /*controlPoint*/
      2 && t !== (t = /*controlPoint*/
      r[1][0]) && s(n, "cx", t), f & /*controlPoint*/
      2 && o !== (o = /*controlPoint*/
      r[1][1]) && s(n, "cy", o), f & /*handleRadius*/
      8 && s(
        n,
        "r",
        /*handleRadius*/
        r[3]
      );
    },
    d(r) {
      r && M(n), l = !1, i();
    }
  };
}
function pl(e) {
  let n, t, o, l, i, r, f, a, c;
  return {
    c() {
      n = N("circle"), i = N("circle"), s(n, "cx", t = /*controlPoint*/
      e[1][0]), s(n, "cy", o = /*controlPoint*/
      e[1][1]), s(n, "class", "a9s-tangent-handle-buffer svelte-103tdqm"), s(n, "r", l = 3 * /*handleRadius*/
      e[3]), He(
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
      H(u, n, h), H(u, i, h), a || (c = [
        J(
          n,
          "pointerdown",
          /*pointerdown_handler*/
          e[7]
        ),
        J(
          n,
          "pointerdown",
          /*onPointerDown*/
          e[4]
        ),
        J(
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
      2 && o !== (o = /*controlPoint*/
      u[1][1]) && s(n, "cy", o), h & /*handleRadius*/
      8 && l !== (l = 3 * /*handleRadius*/
      u[3]) && s(n, "r", l), h & /*touched*/
      4 && He(
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
      u && (M(n), M(i)), a = !1, Se(c);
    }
  };
}
function ml(e) {
  let n, t, o, l, i, r, f, a, c, u, h;
  function m(p, v) {
    return Tt ? pl : hl;
  }
  let _ = m()(e);
  return {
    c() {
      n = N("g"), t = N("line"), f = N("line"), _.c(), s(t, "class", "a9s-tangent-line a9s-outer svelte-103tdqm"), s(t, "x1", o = /*corner*/
      e[0][0]), s(t, "y1", l = /*corner*/
      e[0][1]), s(t, "x2", i = /*controlPoint*/
      e[1][0]), s(t, "y2", r = /*controlPoint*/
      e[1][1]), s(f, "class", "a9s-tangent-line a9s-inner svelte-103tdqm"), s(f, "x1", a = /*corner*/
      e[0][0]), s(f, "y1", c = /*corner*/
      e[0][1]), s(f, "x2", u = /*controlPoint*/
      e[1][0]), s(f, "y2", h = /*controlPoint*/
      e[1][1]), s(n, "class", "a9s-bezier-handle svelte-103tdqm");
    },
    m(p, v) {
      H(p, n, v), K(n, t), K(n, f), _.m(n, null);
    },
    p(p, [v]) {
      v & /*corner*/
      1 && o !== (o = /*corner*/
      p[0][0]) && s(t, "x1", o), v & /*corner*/
      1 && l !== (l = /*corner*/
      p[0][1]) && s(t, "y1", l), v & /*controlPoint*/
      2 && i !== (i = /*controlPoint*/
      p[1][0]) && s(t, "x2", i), v & /*controlPoint*/
      2 && r !== (r = /*controlPoint*/
      p[1][1]) && s(t, "y2", r), v & /*corner*/
      1 && a !== (a = /*corner*/
      p[0][0]) && s(f, "x1", a), v & /*corner*/
      1 && c !== (c = /*corner*/
      p[0][1]) && s(f, "y1", c), v & /*controlPoint*/
      2 && u !== (u = /*controlPoint*/
      p[1][0]) && s(f, "x2", u), v & /*controlPoint*/
      2 && h !== (h = /*controlPoint*/
      p[1][1]) && s(f, "y2", h), _.p(p, v);
    },
    i: he,
    o: he,
    d(p) {
      p && M(n), _.d();
    }
  };
}
function _l(e, n, t) {
  let o, { corner: l } = n, { controlPoint: i } = n, { viewportScale: r = 1 } = n, f = !1;
  const a = (m) => {
    m.pointerType === "touch" && t(2, f = !0);
  }, c = () => t(2, f = !1);
  function u(m) {
    oe.call(this, e, m);
  }
  function h(m) {
    oe.call(this, e, m);
  }
  return e.$$set = (m) => {
    "corner" in m && t(0, l = m.corner), "controlPoint" in m && t(1, i = m.controlPoint), "viewportScale" in m && t(6, r = m.viewportScale);
  }, e.$$.update = () => {
    e.$$.dirty & /*viewportScale*/
    64 && t(3, o = 4 / r);
  }, [
    l,
    i,
    f,
    o,
    a,
    c,
    r,
    u,
    h
  ];
}
class Lt extends pe {
  constructor(n) {
    super(), me(this, n, _l, ml, _e, {
      corner: 0,
      controlPoint: 1,
      viewportScale: 6
    });
  }
}
function hn(e) {
  const n = e.slice(), t = (
    /*midpoints*/
    n[11][
      /*visibleMidpoint*/
      n[6]
    ]
  );
  return n[31] = t.point, n;
}
function pt(e, n, t) {
  const o = e.slice();
  return o[32] = n[t], o[34] = t, o;
}
function pn(e) {
  const n = e.slice(), t = (
    /*selectedCorners*/
    n[8][0]
  );
  n[35] = t;
  const o = (
    /*geom*/
    n[5].points[
      /*selectedCorner*/
      n[35]
    ]
  );
  return n[36] = o, n;
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
function mt(e) {
  let n, t, o, l, i, r, f, a, c, u;
  return {
    c() {
      n = N("mask"), t = N("rect"), f = N("circle"), s(t, "x", o = /*mask*/
      e[9].x), s(t, "y", l = /*mask*/
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
    m(h, m) {
      H(h, n, m), K(n, t), K(n, f);
    },
    p(h, m) {
      m[0] & /*mask*/
      512 && o !== (o = /*mask*/
      h[9].x) && s(t, "x", o), m[0] & /*mask*/
      512 && l !== (l = /*mask*/
      h[9].y) && s(t, "y", l), m[0] & /*mask*/
      512 && i !== (i = /*mask*/
      h[9].w) && s(t, "width", i), m[0] & /*mask*/
      512 && r !== (r = /*mask*/
      h[9].h) && s(t, "height", r), m[0] & /*midpoints, visibleMidpoint*/
      2112 && a !== (a = /*point*/
      h[31][0]) && s(f, "cx", a), m[0] & /*midpoints, visibleMidpoint*/
      2112 && c !== (c = /*point*/
      h[31][1]) && s(f, "cy", c), m[0] & /*viewportScale*/
      8 && u !== (u = yn / /*viewportScale*/
      h[3]) && s(f, "r", u);
    },
    d(h) {
      h && M(n);
    }
  };
}
function _t(e) {
  let n, t, o = (
    /*corner*/
    e[36].type === "CURVE" && dt(e)
  );
  return {
    c() {
      o && o.c(), n = ve();
    },
    m(l, i) {
      o && o.m(l, i), H(l, n, i), t = !0;
    },
    p(l, i) {
      /*corner*/
      l[36].type === "CURVE" ? o ? (o.p(l, i), i[0] & /*geom, selectedCorners*/
      288 && z(o, 1)) : (o = dt(l), o.c(), z(o, 1), o.m(n.parentNode, n)) : o && (Ee(), $(o, 1, 1, () => {
        o = null;
      }), ke());
    },
    i(l) {
      t || (z(o), t = !0);
    },
    o(l) {
      $(o), t = !1;
    },
    d(l) {
      l && M(n), o && o.d(l);
    }
  };
}
function dt(e) {
  let n, t, o, l = (
    /*corner*/
    e[36].inHandle && gt(e)
  ), i = (
    /*corner*/
    e[36].outHandle && yt(e)
  );
  return {
    c() {
      l && l.c(), n = x(), i && i.c(), t = ve();
    },
    m(r, f) {
      l && l.m(r, f), H(r, n, f), i && i.m(r, f), H(r, t, f), o = !0;
    },
    p(r, f) {
      /*corner*/
      r[36].inHandle ? l ? (l.p(r, f), f[0] & /*geom, selectedCorners*/
      288 && z(l, 1)) : (l = gt(r), l.c(), z(l, 1), l.m(n.parentNode, n)) : l && (Ee(), $(l, 1, 1, () => {
        l = null;
      }), ke()), /*corner*/
      r[36].outHandle ? i ? (i.p(r, f), f[0] & /*geom, selectedCorners*/
      288 && z(i, 1)) : (i = yt(r), i.c(), z(i, 1), i.m(t.parentNode, t)) : i && (Ee(), $(i, 1, 1, () => {
        i = null;
      }), ke());
    },
    i(r) {
      o || (z(l), z(i), o = !0);
    },
    o(r) {
      $(l), $(i), o = !1;
    },
    d(r) {
      r && (M(n), M(t)), l && l.d(r), i && i.d(r);
    }
  };
}
function gt(e) {
  let n, t;
  return n = new Lt({
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
    te(
      /*grab*/
      e[30](`IN-${/*selectedCorner*/
      e[35]}`)
    ) && e[30](`IN-${/*selectedCorner*/
    e[35]}`).apply(this, arguments);
  }), {
    c() {
      ie(n.$$.fragment);
    },
    m(o, l) {
      se(n, o, l), t = !0;
    },
    p(o, l) {
      e = o;
      const i = {};
      l[0] & /*geom, selectedCorners*/
      288 && (i.corner = /*corner*/
      e[36].point), l[0] & /*geom, selectedCorners*/
      288 && (i.controlPoint = /*corner*/
      e[36].inHandle), l[0] & /*viewportScale*/
      8 && (i.viewportScale = /*viewportScale*/
      e[3]), n.$set(i);
    },
    i(o) {
      t || (z(n.$$.fragment, o), t = !0);
    },
    o(o) {
      $(n.$$.fragment, o), t = !1;
    },
    d(o) {
      le(n, o);
    }
  };
}
function yt(e) {
  let n, t;
  return n = new Lt({
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
    te(
      /*grab*/
      e[30](`OUT-${/*selectedCorner*/
      e[35]}`)
    ) && e[30](`OUT-${/*selectedCorner*/
    e[35]}`).apply(this, arguments);
  }), {
    c() {
      ie(n.$$.fragment);
    },
    m(o, l) {
      se(n, o, l), t = !0;
    },
    p(o, l) {
      e = o;
      const i = {};
      l[0] & /*geom, selectedCorners*/
      288 && (i.corner = /*corner*/
      e[36].point), l[0] & /*geom, selectedCorners*/
      288 && (i.controlPoint = /*corner*/
      e[36].outHandle), l[0] & /*viewportScale*/
      8 && (i.viewportScale = /*viewportScale*/
      e[3]), n.$set(i);
    },
    i(o) {
      t || (z(n.$$.fragment, o), t = !0);
    },
    o(o) {
      $(n.$$.fragment, o), t = !1;
    },
    d(o) {
      le(n, o);
    }
  };
}
function wt(e) {
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
    te(
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
      ie(n.$$.fragment);
    },
    m(o, l) {
      se(n, o, l), t = !0;
    },
    p(o, l) {
      e = o;
      const i = {};
      l[0] & /*geom*/
      32 && (i.x = /*pt*/
      e[32].point[0]), l[0] & /*geom*/
      32 && (i.y = /*pt*/
      e[32].point[1]), l[0] & /*viewportScale*/
      8 && (i.scale = /*viewportScale*/
      e[3]), l[0] & /*selectedCorners*/
      256 && (i.selected = /*selectedCorners*/
      e[8].includes(
        /*idx*/
        e[34]
      )), n.$set(i);
    },
    i(o) {
      t || (z(n.$$.fragment, o), t = !0);
    },
    o(o) {
      $(n.$$.fragment, o), t = !1;
    },
    d(o) {
      le(n, o);
    }
  };
}
function bt(e) {
  let n, t;
  return n = new bn({
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
    te(
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
      ie(n.$$.fragment);
    },
    m(o, l) {
      se(n, o, l), t = !0;
    },
    p(o, l) {
      e = o;
      const i = {};
      l[0] & /*midpoints, visibleMidpoint*/
      2112 && (i.x = /*point*/
      e[31][0]), l[0] & /*midpoints, visibleMidpoint*/
      2112 && (i.y = /*point*/
      e[31][1]), l[0] & /*viewportScale*/
      8 && (i.scale = /*viewportScale*/
      e[3]), n.$set(i);
    },
    i(o) {
      t || (z(n.$$.fragment, o), t = !0);
    },
    o(o) {
      $(n.$$.fragment, o), t = !1;
    },
    d(o) {
      le(n, o);
    }
  };
}
function dl(e) {
  let n, t, o, l, i, r, f, a, c, u, h, m, y, _, p, v, D, P, b, d = (
    /*visibleMidpoint*/
    e[6] !== void 0 && !/*isHandleHovered*/
    e[7] && mt(mn(e))
  ), w = (
    /*selectedCorners*/
    e[8].length === 1 && _t(pn(e))
  ), E = be(
    /*geom*/
    e[5].points
  ), g = [];
  for (let R = 0; R < E.length; R += 1)
    g[R] = wt(pt(e, E, R));
  const S = (R) => $(g[R], 1, 1, () => {
    g[R] = null;
  });
  let I = (
    /*visibleMidpoint*/
    e[6] !== void 0 && !/*isHandleHovered*/
    e[7] && bt(hn(e))
  );
  return {
    c() {
      n = N("defs"), d && d.c(), t = x(), o = N("g"), l = N("rect"), c = N("path"), h = N("path"), y = x(), w && w.c(), _ = x();
      for (let R = 0; R < g.length; R += 1)
        g[R].c();
      p = x(), I && I.c(), v = ve(), s(l, "x", i = /*mask*/
      e[9].x), s(l, "y", r = /*mask*/
      e[9].y), s(l, "width", f = /*mask*/
      e[9].w), s(l, "height", a = /*mask*/
      e[9].h), s(l, "class", "mask-buffer svelte-sq8d4p"), s(c, "class", u = Ce(`a9s-outer polyline ${/*shape*/
      e[0].geometry.closed ? "closed" : "open"}`) + " svelte-sq8d4p"), s(
        c,
        "d",
        /*d*/
        e[10]
      ), s(h, "class", m = Ce(`a9s-inner polyline a9s-shape-handle ${/*shape*/
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
      ), s(o, "mask", `url(#${/*maskId*/
      e[20]})`);
    },
    m(R, q) {
      H(R, n, q), d && d.m(n, null), H(R, t, q), H(R, o, q), K(o, l), K(o, c), K(o, h), H(R, y, q), w && w.m(R, q), H(R, _, q);
      for (let T = 0; T < g.length; T += 1)
        g[T] && g[T].m(R, q);
      H(R, p, q), I && I.m(R, q), H(R, v, q), D = !0, P || (b = [
        J(
          c,
          "pointerup",
          /*onShapePointerUp*/
          e[14]
        ),
        J(c, "pointerdown", function() {
          te(
            /*grab*/
            e[30]("SHAPE")
          ) && e[30]("SHAPE").apply(this, arguments);
        }),
        J(
          h,
          "pointerup",
          /*onShapePointerUp*/
          e[14]
        ),
        J(h, "pointerdown", function() {
          te(
            /*grab*/
            e[30]("SHAPE")
          ) && e[30]("SHAPE").apply(this, arguments);
        })
      ], P = !0);
    },
    p(R, q) {
      if (e = R, /*visibleMidpoint*/
      e[6] !== void 0 && !/*isHandleHovered*/
      e[7] ? d ? d.p(mn(e), q) : (d = mt(mn(e)), d.c(), d.m(n, null)) : d && (d.d(1), d = null), (!D || q[0] & /*mask*/
      512 && i !== (i = /*mask*/
      e[9].x)) && s(l, "x", i), (!D || q[0] & /*mask*/
      512 && r !== (r = /*mask*/
      e[9].y)) && s(l, "y", r), (!D || q[0] & /*mask*/
      512 && f !== (f = /*mask*/
      e[9].w)) && s(l, "width", f), (!D || q[0] & /*mask*/
      512 && a !== (a = /*mask*/
      e[9].h)) && s(l, "height", a), (!D || q[0] & /*shape*/
      1 && u !== (u = Ce(`a9s-outer polyline ${/*shape*/
      e[0].geometry.closed ? "closed" : "open"}`) + " svelte-sq8d4p")) && s(c, "class", u), (!D || q[0] & /*d*/
      1024) && s(
        c,
        "d",
        /*d*/
        e[10]
      ), (!D || q[0] & /*shape*/
      1 && m !== (m = Ce(`a9s-inner polyline a9s-shape-handle ${/*shape*/
      e[0].geometry.closed ? "closed" : "open"}`) + " svelte-sq8d4p")) && s(h, "class", m), (!D || q[0] & /*computedStyle*/
      2) && s(
        h,
        "style",
        /*computedStyle*/
        e[1]
      ), (!D || q[0] & /*d*/
      1024) && s(
        h,
        "d",
        /*d*/
        e[10]
      ), /*selectedCorners*/
      e[8].length === 1 ? w ? (w.p(pn(e), q), q[0] & /*selectedCorners*/
      256 && z(w, 1)) : (w = _t(pn(e)), w.c(), z(w, 1), w.m(_.parentNode, _)) : w && (Ee(), $(w, 1, 1, () => {
        w = null;
      }), ke()), q[0] & /*geom, viewportScale, selectedCorners, onDoubleClick, onEnterHandle, onLeaveHandle, onHandlePointerDown, grab, onHandlePointerUp*/
      1073983784) {
        E = be(
          /*geom*/
          e[5].points
        );
        let T;
        for (T = 0; T < E.length; T += 1) {
          const U = pt(e, E, T);
          g[T] ? (g[T].p(U, q), z(g[T], 1)) : (g[T] = wt(U), g[T].c(), z(g[T], 1), g[T].m(p.parentNode, p));
        }
        for (Ee(), T = E.length; T < g.length; T += 1)
          S(T);
        ke();
      }
      /*visibleMidpoint*/
      e[6] !== void 0 && !/*isHandleHovered*/
      e[7] ? I ? (I.p(hn(e), q), q[0] & /*visibleMidpoint, isHandleHovered*/
      192 && z(I, 1)) : (I = bt(hn(e)), I.c(), z(I, 1), I.m(v.parentNode, v)) : I && (Ee(), $(I, 1, 1, () => {
        I = null;
      }), ke());
    },
    i(R) {
      if (!D) {
        z(w);
        for (let q = 0; q < E.length; q += 1)
          z(g[q]);
        z(I), D = !0;
      }
    },
    o(R) {
      $(w), g = g.filter(Boolean);
      for (let q = 0; q < g.length; q += 1)
        $(g[q]);
      $(I), D = !1;
    },
    d(R) {
      R && (M(n), M(t), M(o), M(y), M(_), M(p), M(v)), d && d.d(), w && w.d(R), ze(g, R), I && I.d(R), P = !1, Se(b);
    }
  };
}
function gl(e) {
  let n, t;
  return n = new Ue({
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
          dl,
          ({ grab: o }) => ({ 30: o }),
          ({ grab: o }) => [o ? 1073741824 : 0]
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
      ie(n.$$.fragment);
    },
    m(o, l) {
      se(n, o, l), t = !0;
    },
    p(o, l) {
      const i = {};
      l[0] & /*shape*/
      1 && (i.shape = /*shape*/
      o[0]), l[0] & /*transform*/
      4 && (i.transform = /*transform*/
      o[2]), l[0] & /*svgEl*/
      16 && (i.svgEl = /*svgEl*/
      o[4]), l[0] & /*midpoints, visibleMidpoint, viewportScale, isHandleHovered, geom, selectedCorners, grab, shape, computedStyle, d, mask*/
      1073745899 | l[1] & /*$$scope*/
      64 && (i.$$scope = { dirty: l, ctx: o }), n.$set(i);
    },
    i(o) {
      t || (z(n.$$.fragment, o), t = !0);
    },
    o(o) {
      $(n.$$.fragment, o), t = !1;
    },
    d(o) {
      le(n, o);
    }
  };
}
const yl = 250, wl = 1e3, bl = 12, yn = 4.5;
function vl(e, n, t) {
  let o, l, i, r;
  const f = Ie();
  let { shape: a } = n, { computedStyle: c } = n, { transform: u } = n, { viewportScale: h = 1 } = n, { svgEl: m } = n, y, _ = !1, p = null, v = [], D = !1;
  const P = () => t(7, _ = !0), b = () => t(7, _ = !1), d = (L) => {
    if (v.length > 0 || !l.some((G) => G.visible)) {
      t(6, y = void 0);
      return;
    }
    const [B, W] = u.elementToImage(L.offsetX, L.offsetY), C = (G) => Math.pow(G[0] - B, 2) + Math.pow(G[1] - W, 2), j = o.points.reduce((G, ne) => C(ne.point) < C(G.point) ? ne : G), k = l.filter((G) => G.visible).reduce((G, ne) => C(ne.point) < C(G.point) ? ne : G), X = Math.pow(wl / h, 2);
    C(j.point) < X || C(k.point) < X ? t(6, y = l.indexOf(k)) : t(6, y = void 0);
  }, w = () => {
    document.activeElement !== m && m.focus();
  }, E = () => {
    t(8, v = []), w();
  }, g = (L) => {
    t(7, _ = !0), L.preventDefault(), L.stopPropagation(), p = performance.now();
  }, S = (L) => (B) => {
    if (!p || performance.now() - p > yl) return;
    const W = v.includes(L);
    if (D) {
      const C = cl(a, L, h);
      f("change", C), (!W || v.length > 1) && t(8, v = [L]);
    } else B.metaKey || B.ctrlKey || B.shiftKey ? W ? t(8, v = v.filter((C) => C !== L)) : t(8, v = [...v, L]) : W && v.length > 1 ? t(8, v = [L]) : W ? t(8, v = []) : t(8, v = [L]);
  }, I = (L) => () => {
    const B = o.points[L];
    if (B.type === "CORNER" || !B.inHandle && !B.outHandle) return;
    const W = o.points.map((k, X) => {
      if (X !== L) return k;
      const Q = { ...k, locked: !0 }, G = B.inHandle || B.outHandle;
      if (!G) return k;
      const ne = G[0] - B.point[0], re = G[1] - B.point[1];
      if (Math.sqrt(ne ** 2 + re ** 2) === 0) return k;
      const de = [B.point[0] - ne, B.point[1] - re];
      return B.inHandle ? (Q.inHandle = B.inHandle, Q.outHandle = de) : B.outHandle && (Q.outHandle = B.outHandle, Q.inHandle = de), Q;
    }), C = Le($e(W, o.closed)), j = {
      ...a,
      geometry: { bounds: C, points: W, closed: o.closed }
    };
    f("change", j);
  }, R = (L, B, W) => {
    const C = L.geometry, [j, k] = W;
    let X;
    if (B === "SHAPE")
      X = C.points.map((G) => ({
        ...G,
        point: [G.point[0] + j, G.point[1] + k],
        inHandle: G.inHandle ? [G.inHandle[0] + j, G.inHandle[1] + k] : void 0,
        outHandle: G.outHandle ? [G.outHandle[0] + j, G.outHandle[1] + k] : void 0
      }));
    else if (B.startsWith("CORNER-")) {
      const G = parseInt(B.split("-")[1]);
      X = C.points.map((ne, re) => re === G ? {
        ...ne,
        point: [ne.point[0] + j, ne.point[1] + k],
        inHandle: ne.inHandle ? [ne.inHandle[0] + j, ne.inHandle[1] + k] : void 0,
        outHandle: ne.outHandle ? [ne.outHandle[0] + j, ne.outHandle[1] + k] : void 0
      } : ne);
    } else if (B.startsWith("IN-") || B.startsWith("OUT-")) {
      const [G, ne] = B.split("-"), re = parseInt(ne);
      X = C.points.map((ee, de) => {
        if (de === re && ee.type === "CURVE") {
          const ae = D ? !1 : ee.locked, ce = { ...ee, locked: ae };
          if (G === "IN" && ee.inHandle) {
            if (ce.inHandle = [ee.inHandle[0] + j, ee.inHandle[1] + k], ee.outHandle && ae) {
              const fe = ce.inHandle[0] - ee.point[0], Te = ce.inHandle[1] - ee.point[1], ue = Math.sqrt(fe ** 2 + Te ** 2), Pe = Math.sqrt((ee.outHandle[0] - ee.point[0]) ** 2 + (ee.outHandle[1] - ee.point[1]) ** 2);
              ue > 0 && (ce.outHandle = [
                ee.point[0] - fe / ue * Pe,
                ee.point[1] - Te / ue * Pe
              ]);
            }
          } else if (G === "OUT" && ee.outHandle && (ce.outHandle = [ee.outHandle[0] + j, ee.outHandle[1] + k], ee.inHandle && ae)) {
            const fe = ce.outHandle[0] - ee.point[0], Te = ce.outHandle[1] - ee.point[1], ue = Math.sqrt(fe ** 2 + Te ** 2), Pe = Math.sqrt((ee.inHandle[0] - ee.point[0]) ** 2 + (ee.inHandle[1] - ee.point[1]) ** 2);
            ue > 0 && (ce.inHandle = [
              ee.point[0] - fe / ue * Pe,
              ee.point[1] - Te / ue * Pe
            ]);
          }
          return ce;
        }
        return ee;
      });
    } else
      X = C.points;
    const Q = Le($e(X, C.closed));
    return {
      ...L,
      geometry: { bounds: Q, points: X, closed: C.closed }
    };
  }, q = (L) => async (B) => {
    B.stopPropagation();
    const W = [
      ...o.points.slice(0, L + 1),
      {
        type: "CORNER",
        point: l[L].point
      },
      ...o.points.slice(L + 1)
    ], C = Le($e(W, o.closed));
    f("change", {
      ...a,
      geometry: { points: W, bounds: C, closed: o.closed }
    }), await Ze();
    const j = [...document.querySelectorAll(".a9s-handle")][L + 1];
    if (j != null && j.firstChild) {
      const k = new PointerEvent(
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
      j.firstChild.dispatchEvent(k);
    }
  }, T = () => {
    const L = o.closed ? 3 : 2;
    if (o.points.length - v.length < L) return;
    const B = o.points.filter((C, j) => !v.includes(j)), W = Le($e(B, o.closed));
    f("change", {
      ...a,
      geometry: {
        closed: a.geometry.closed,
        bounds: W,
        points: B
      }
    }), t(8, v = []);
  };
  Oe(() => {
    const L = (W) => {
      W.altKey && !D && (D = !0), (W.key === "Delete" || W.key === "Backspace") && T();
    }, B = (W) => {
      !W.altKey && D && (D = !1);
    };
    return m.addEventListener("pointermove", d), window.addEventListener("keydown", L), window.addEventListener("keyup", B), () => {
      m.removeEventListener("pointermove", d), window.removeEventListener("keydown", L), window.removeEventListener("keyup", B);
    };
  });
  const U = `polygon-mask-${Math.random().toString(36).substring(2, 12)}`;
  function Y(L) {
    oe.call(this, e, L);
  }
  function A(L) {
    oe.call(this, e, L);
  }
  function V(L) {
    oe.call(this, e, L);
  }
  return e.$$set = (L) => {
    "shape" in L && t(0, a = L.shape), "computedStyle" in L && t(1, c = L.computedStyle), "transform" in L && t(2, u = L.transform), "viewportScale" in L && t(3, h = L.viewportScale), "svgEl" in L && t(4, m = L.svgEl);
  }, e.$$.update = () => {
    e.$$.dirty[0] & /*shape*/
    1 && t(5, o = a.geometry), e.$$.dirty[0] & /*geom, viewportScale*/
    40 && t(11, l = Tt ? [] : o.points.reduce(
      (L, B, W) => {
        const C = W === o.points.length - 1 ? (
          // Last point
          o.closed ? o.points[0] : void 0
        ) : o.points[W + 1];
        if (!C) return L;
        const [j, k] = ul(B, C), Q = Math.sqrt(Math.pow(C.point[0] - j, 2) + Math.pow(C.point[1] - k, 2)) > bl / h;
        return [...L, { point: [j, k], visible: Q }];
      },
      []
    )), e.$$.dirty[0] & /*geom*/
    32 && t(10, i = It(o)), e.$$.dirty[0] & /*geom, viewportScale*/
    40 && t(9, r = nn(o.bounds, yn / h));
  }, [
    a,
    c,
    u,
    h,
    m,
    o,
    y,
    _,
    v,
    r,
    i,
    l,
    P,
    b,
    E,
    g,
    S,
    I,
    R,
    q,
    U,
    Y,
    A,
    V
  ];
}
class El extends pe {
  constructor(n) {
    super(), me(
      this,
      n,
      vl,
      gl,
      _e,
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
  var P, b;
  let n, t, o, l, i, r, f, a, c, u, h, m, y, _, p, v, D;
  return _ = new ye({
    props: {
      class: "a9s-corner-top",
      x: (
        /*points*/
        ((P = e[5][0]) == null ? void 0 : P[0]) ?? /*center*/
        e[6].x
      ),
      y: (
        /*points*/
        ((b = e[5][0]) == null ? void 0 : b[1]) ?? /*center*/
        e[6].y - /*outerRadius*/
        e[9]
      ),
      scale: (
        /*viewportScale*/
        e[3]
      )
    }
  }), _.$on("pointerdown", function() {
    te(
      /*grab*/
      e[17]("SCALE")
    ) && e[17]("SCALE").apply(this, arguments);
  }), {
    c() {
      n = N("defs"), t = N("mask"), o = N("rect"), a = N("path"), c = x(), u = N("path"), h = x(), m = N("path"), y = x(), ie(_.$$.fragment), s(o, "x", l = /*mask*/
      e[7].x), s(o, "y", i = /*mask*/
      e[7].y), s(o, "width", r = /*mask*/
      e[7].w), s(o, "height", f = /*mask*/
      e[7].h), s(o, "class", "svelte-1u8dw9g"), s(
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
      ), s(m, "class", "a9s-inner a9s-shape-handle"), s(
        m,
        "style",
        /*computedStyle*/
        e[1]
      ), s(
        m,
        "d",
        /*pathString*/
        e[8]
      );
    },
    m(d, w) {
      H(d, n, w), K(n, t), K(t, o), K(t, a), H(d, c, w), H(d, u, w), H(d, h, w), H(d, m, w), H(d, y, w), se(_, d, w), p = !0, v || (D = [
        J(u, "pointerdown", function() {
          te(
            /*grab*/
            e[17]("SHAPE")
          ) && e[17]("SHAPE").apply(this, arguments);
        }),
        J(m, "pointerdown", function() {
          te(
            /*grab*/
            e[17]("SHAPE")
          ) && e[17]("SHAPE").apply(this, arguments);
        })
      ], v = !0);
    },
    p(d, w) {
      var g, S;
      e = d, (!p || w & /*mask*/
      128 && l !== (l = /*mask*/
      e[7].x)) && s(o, "x", l), (!p || w & /*mask*/
      128 && i !== (i = /*mask*/
      e[7].y)) && s(o, "y", i), (!p || w & /*mask*/
      128 && r !== (r = /*mask*/
      e[7].w)) && s(o, "width", r), (!p || w & /*mask*/
      128 && f !== (f = /*mask*/
      e[7].h)) && s(o, "height", f), (!p || w & /*pathString*/
      256) && s(
        a,
        "d",
        /*pathString*/
        e[8]
      ), (!p || w & /*pathString*/
      256) && s(
        u,
        "d",
        /*pathString*/
        e[8]
      ), (!p || w & /*computedStyle*/
      2) && s(
        m,
        "style",
        /*computedStyle*/
        e[1]
      ), (!p || w & /*pathString*/
      256) && s(
        m,
        "d",
        /*pathString*/
        e[8]
      );
      const E = {};
      w & /*points, center*/
      96 && (E.x = /*points*/
      ((g = e[5][0]) == null ? void 0 : g[0]) ?? /*center*/
      e[6].x), w & /*points, center, outerRadius*/
      608 && (E.y = /*points*/
      ((S = e[5][0]) == null ? void 0 : S[1]) ?? /*center*/
      e[6].y - /*outerRadius*/
      e[9]), w & /*viewportScale*/
      8 && (E.scale = /*viewportScale*/
      e[3]), _.$set(E);
    },
    i(d) {
      p || (z(_.$$.fragment, d), p = !0);
    },
    o(d) {
      $(_.$$.fragment, d), p = !1;
    },
    d(d) {
      d && (M(n), M(c), M(u), M(h), M(m), M(y)), le(_, d), v = !1, Se(D);
    }
  };
}
function Sl(e) {
  let n, t;
  return n = new Ue({
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
          kl,
          ({ grab: o }) => ({ 17: o }),
          ({ grab: o }) => o ? 131072 : 0
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
      ie(n.$$.fragment);
    },
    m(o, l) {
      se(n, o, l), t = !0;
    },
    p(o, [l]) {
      const i = {};
      l & /*shape*/
      1 && (i.shape = /*shape*/
      o[0]), l & /*transform*/
      4 && (i.transform = /*transform*/
      o[2]), l & /*svgEl*/
      16 && (i.svgEl = /*svgEl*/
      o[4]), l & /*$$scope, points, center, outerRadius, viewportScale, grab, computedStyle, pathString, mask*/
      394218 && (i.$$scope = { dirty: l, ctx: o }), n.$set(i);
    },
    i(o) {
      t || (z(n.$$.fragment, o), t = !0);
    },
    o(o) {
      $(n.$$.fragment, o), t = !1;
    },
    d(o) {
      le(n, o);
    }
  };
}
function Tl(e, n, t) {
  let o, l, i, r, f, a, c, { shape: u } = n, { computedStyle: h } = n, { transform: m } = n, { viewportScale: y = 1 } = n, { svgEl: _ } = n;
  const p = (d, w, E) => {
    const g = d.geometry, [S, I] = E;
    let R;
    if (w === "SHAPE")
      R = g.points.map(([q, T]) => [q + S, T + I]);
    else if (w === "SCALE") {
      const q = (g.bounds.minX + g.bounds.maxX) / 2, T = (g.bounds.minY + g.bounds.maxY) / 2, U = g.points[0], Y = Math.sqrt(Math.pow(U[0] - q, 2) + Math.pow(U[1] - T, 2)), A = U[1] + I, V = Math.sqrt(Math.pow(U[0] - q, 2) + Math.pow(A - T, 2)), L = Y > 0 ? V / Y : 1;
      R = g.points.map(([B, W]) => [q + (B - q) * L, T + (W - T) * L]);
    } else
      R = g.points;
    return {
      ...d,
      geometry: {
        bounds: Le(R),
        points: R
      }
    };
  }, v = `star-mask-${Math.random().toString(36).substring(2, 12)}`;
  function D(d) {
    oe.call(this, e, d);
  }
  function P(d) {
    oe.call(this, e, d);
  }
  function b(d) {
    oe.call(this, e, d);
  }
  return e.$$set = (d) => {
    "shape" in d && t(0, u = d.shape), "computedStyle" in d && t(1, h = d.computedStyle), "transform" in d && t(2, m = d.transform), "viewportScale" in d && t(3, y = d.viewportScale), "svgEl" in d && t(4, _ = d.svgEl);
  }, e.$$.update = () => {
    e.$$.dirty & /*shape*/
    1 && t(12, o = u.geometry), e.$$.dirty & /*geom*/
    4096 && t(5, l = o.points), e.$$.dirty & /*geom*/
    4096 && t(6, i = {
      x: (o.bounds.minX + o.bounds.maxX) / 2,
      y: (o.bounds.minY + o.bounds.maxY) / 2
    }), e.$$.dirty & /*points*/
    32 && t(13, r = l.filter((d, w) => w % 2 === 0)), e.$$.dirty & /*outerPoints, center*/
    8256 && t(9, f = r.length > 0 ? Math.sqrt(Math.pow(r[0][0] - i.x, 2) + Math.pow(r[0][1] - i.y, 2)) : 0), e.$$.dirty & /*points*/
    32 && t(8, a = l.length > 0 ? `M ${l[0][0]},${l[0][1]}` + l.slice(1).map(([d, w]) => ` L ${d},${w}`).join("") + " Z" : ""), e.$$.dirty & /*geom, viewportScale*/
    4104 && t(7, c = nn(o.bounds, 2 / y));
  }, [
    u,
    h,
    m,
    y,
    _,
    l,
    i,
    c,
    a,
    f,
    p,
    v,
    o,
    r,
    D,
    P,
    b
  ];
}
class Pl extends pe {
  constructor(n) {
    super(), me(this, n, Tl, Sl, _e, {
      shape: 0,
      computedStyle: 1,
      transform: 2,
      viewportScale: 3,
      svgEl: 4
    });
  }
}
function vt(e) {
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
    m(o, l) {
      H(o, n, l), H(o, t, l);
    },
    p(o, l) {
      l & /*pathString*/
      1 && s(
        n,
        "d",
        /*pathString*/
        o[0]
      ), l & /*pathString*/
      1 && s(
        t,
        "d",
        /*pathString*/
        o[0]
      );
    },
    d(o) {
      o && (M(n), M(t));
    }
  };
}
function Ml(e) {
  let n, t = (
    /*pathString*/
    e[0] && vt(e)
  );
  return {
    c() {
      n = N("g"), t && t.c(), s(n, "class", "a9s-annotation a9s-rubberband");
    },
    m(o, l) {
      H(o, n, l), t && t.m(n, null);
    },
    p(o, [l]) {
      /*pathString*/
      o[0] ? t ? t.p(o, l) : (t = vt(o), t.c(), t.m(n, null)) : t && (t.d(1), t = null);
    },
    i: he,
    o: he,
    d(o) {
      o && M(n), t && t.d();
    }
  };
}
const Et = 5, kt = 0.382;
function Hl(e, n, t) {
  let o, l;
  const i = Ie();
  let { addEventListener: r } = n, { drawingMode: f } = n, { transform: a } = n, { viewportScale: c } = n, u, h = 0, m;
  const y = (P, b, d, w) => {
    const E = [], g = Math.PI / Et;
    for (let S = 0; S < Et * 2; S++) {
      const I = S % 2 === 0 ? d : w, R = S * g - Math.PI / 2;
      E.push([P + I * Math.cos(R), b + I * Math.sin(R)]);
    }
    return E;
  }, _ = (P) => {
    const b = P;
    m = performance.now(), f === "drag" && (t(5, u = a.elementToImage(b.offsetX, b.offsetY)), t(6, h = 1));
  }, p = (P) => {
    const b = P;
    if (u) {
      const d = a.elementToImage(b.offsetX, b.offsetY);
      t(6, h = Math.sqrt(Math.pow(d[0] - u[0], 2) + Math.pow(d[1] - u[1], 2)));
    }
  }, v = (P) => {
    const b = P, d = performance.now() - m;
    if (f === "click") {
      if (d > 300) return;
      u ? D() : (t(5, u = a.elementToImage(b.offsetX, b.offsetY)), t(6, h = 1));
    } else u && (d > 300 || h > 10 ? (b.stopPropagation(), D()) : (t(5, u = void 0), t(6, h = 0)));
  }, D = () => {
    if (h > 10 && u) {
      const P = h * kt, b = y(u[0], u[1], h, P), d = {
        type: Me.POLYGON,
        geometry: { bounds: Le(b), points: b }
      };
      i("create", d);
    }
    t(5, u = void 0), t(6, h = 0);
  };
  return Oe(() => {
    r("pointerdown", _), r("pointermove", p), r("pointerup", v, !0);
  }), e.$$set = (P) => {
    "addEventListener" in P && t(1, r = P.addEventListener), "drawingMode" in P && t(2, f = P.drawingMode), "transform" in P && t(3, a = P.transform), "viewportScale" in P && t(4, c = P.viewportScale);
  }, e.$$.update = () => {
    e.$$.dirty & /*center, outerRadius*/
    96 && t(7, o = u ? y(u[0], u[1], h, h * kt) : []), e.$$.dirty & /*starPoints*/
    128 && t(0, l = o.length > 0 ? `M ${o[0][0]},${o[0][1]}` + o.slice(1).map(([P, b]) => ` L ${P},${b}`).join("") + " Z" : "");
  }, [
    l,
    r,
    f,
    a,
    c,
    u,
    h,
    o
  ];
}
class Ll extends pe {
  constructor(n) {
    super(), me(this, n, Hl, Ml, _e, {
      addEventListener: 1,
      drawingMode: 2,
      transform: 3,
      viewportScale: 4
    });
  }
}
function Il(e) {
  let n, t, o, l, i, r, f, a, c, u, h, m, y, _, p, v, D, P, b, d, w, E, g, S, I, R, q, T, U, Y, A, V, L, B, W, C, j, k, X, Q, G, ne, re, ee, de, ae, ce, fe, Te, ue, Pe, we, Z, Ge, Ke;
  return ae = new ye({
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
  }), ae.$on("pointerdown", function() {
    te(
      /*grab*/
      e[12]("TOP_LEFT")
    ) && e[12]("TOP_LEFT").apply(this, arguments);
  }), fe = new ye({
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
  }), fe.$on("pointerdown", function() {
    te(
      /*grab*/
      e[12]("TOP_RIGHT")
    ) && e[12]("TOP_RIGHT").apply(this, arguments);
  }), ue = new ye({
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
  }), ue.$on("pointerdown", function() {
    te(
      /*grab*/
      e[12]("BOTTOM_RIGHT")
    ) && e[12]("BOTTOM_RIGHT").apply(this, arguments);
  }), we = new ye({
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
  }), we.$on("pointerdown", function() {
    te(
      /*grab*/
      e[12]("BOTTOM_LEFT")
    ) && e[12]("BOTTOM_LEFT").apply(this, arguments);
  }), {
    c() {
      n = N("defs"), t = N("mask"), o = N("rect"), a = N("rect"), y = x(), _ = N("rect"), b = x(), d = N("rect"), I = x(), R = N("rect"), Y = x(), A = N("rect"), W = x(), C = N("rect"), Q = x(), G = N("rect"), de = x(), ie(ae.$$.fragment), ce = x(), ie(fe.$$.fragment), Te = x(), ie(ue.$$.fragment), Pe = x(), ie(we.$$.fragment), s(o, "class", "rect-mask-bg svelte-1njczvj"), s(o, "x", l = /*mask*/
      e[6].x), s(o, "y", i = /*mask*/
      e[6].y), s(o, "width", r = /*mask*/
      e[6].w), s(o, "height", f = /*mask*/
      e[6].h), s(a, "class", "rect-mask-fg svelte-1njczvj"), s(a, "x", c = /*geom*/
      e[5].x), s(a, "y", u = /*geom*/
      e[5].y), s(a, "width", h = /*geom*/
      e[5].w), s(a, "height", m = /*geom*/
      e[5].h), s(
        t,
        "id",
        /*maskId*/
        e[8]
      ), s(t, "class", "a9s-rectangle-editor-mask svelte-1njczvj"), s(_, "class", "a9s-outer"), s(_, "mask", `url(#${/*maskId*/
      e[8]})`), s(_, "x", p = /*geom*/
      e[5].x), s(_, "y", v = /*geom*/
      e[5].y), s(_, "width", D = /*geom*/
      e[5].w), s(_, "height", P = /*geom*/
      e[5].h), s(d, "class", "a9s-inner a9s-shape-handle"), s(
        d,
        "style",
        /*computedStyle*/
        e[1]
      ), s(d, "x", w = /*geom*/
      e[5].x), s(d, "y", E = /*geom*/
      e[5].y), s(d, "width", g = /*geom*/
      e[5].w), s(d, "height", S = /*geom*/
      e[5].h), s(R, "class", "a9s-edge-handle a9s-edge-handle-top"), s(R, "x", q = /*geom*/
      e[5].x), s(R, "y", T = /*geom*/
      e[5].y), s(R, "height", 1), s(R, "width", U = /*geom*/
      e[5].w), s(A, "class", "a9s-edge-handle a9s-edge-handle-right"), s(A, "x", V = /*geom*/
      e[5].x + /*geom*/
      e[5].w), s(A, "y", L = /*geom*/
      e[5].y), s(A, "height", B = /*geom*/
      e[5].h), s(A, "width", 1), s(C, "class", "a9s-edge-handle a9s-edge-handle-bottom"), s(C, "x", j = /*geom*/
      e[5].x), s(C, "y", k = /*geom*/
      e[5].y + /*geom*/
      e[5].h), s(C, "height", 1), s(C, "width", X = /*geom*/
      e[5].w), s(G, "class", "a9s-edge-handle a9s-edge-handle-left"), s(G, "x", ne = /*geom*/
      e[5].x), s(G, "y", re = /*geom*/
      e[5].y), s(G, "height", ee = /*geom*/
      e[5].h), s(G, "width", 1);
    },
    m(F, O) {
      H(F, n, O), K(n, t), K(t, o), K(t, a), H(F, y, O), H(F, _, O), H(F, b, O), H(F, d, O), H(F, I, O), H(F, R, O), H(F, Y, O), H(F, A, O), H(F, W, O), H(F, C, O), H(F, Q, O), H(F, G, O), H(F, de, O), se(ae, F, O), H(F, ce, O), se(fe, F, O), H(F, Te, O), se(ue, F, O), H(F, Pe, O), se(we, F, O), Z = !0, Ge || (Ke = [
        J(_, "pointerdown", function() {
          te(
            /*grab*/
            e[12]("SHAPE")
          ) && e[12]("SHAPE").apply(this, arguments);
        }),
        J(d, "pointerdown", function() {
          te(
            /*grab*/
            e[12]("SHAPE")
          ) && e[12]("SHAPE").apply(this, arguments);
        }),
        J(R, "pointerdown", function() {
          te(
            /*grab*/
            e[12]("TOP")
          ) && e[12]("TOP").apply(this, arguments);
        }),
        J(A, "pointerdown", function() {
          te(
            /*grab*/
            e[12]("RIGHT")
          ) && e[12]("RIGHT").apply(this, arguments);
        }),
        J(C, "pointerdown", function() {
          te(
            /*grab*/
            e[12]("BOTTOM")
          ) && e[12]("BOTTOM").apply(this, arguments);
        }),
        J(G, "pointerdown", function() {
          te(
            /*grab*/
            e[12]("LEFT")
          ) && e[12]("LEFT").apply(this, arguments);
        })
      ], Ge = !0);
    },
    p(F, O) {
      e = F, (!Z || O & /*mask*/
      64 && l !== (l = /*mask*/
      e[6].x)) && s(o, "x", l), (!Z || O & /*mask*/
      64 && i !== (i = /*mask*/
      e[6].y)) && s(o, "y", i), (!Z || O & /*mask*/
      64 && r !== (r = /*mask*/
      e[6].w)) && s(o, "width", r), (!Z || O & /*mask*/
      64 && f !== (f = /*mask*/
      e[6].h)) && s(o, "height", f), (!Z || O & /*geom*/
      32 && c !== (c = /*geom*/
      e[5].x)) && s(a, "x", c), (!Z || O & /*geom*/
      32 && u !== (u = /*geom*/
      e[5].y)) && s(a, "y", u), (!Z || O & /*geom*/
      32 && h !== (h = /*geom*/
      e[5].w)) && s(a, "width", h), (!Z || O & /*geom*/
      32 && m !== (m = /*geom*/
      e[5].h)) && s(a, "height", m), (!Z || O & /*geom*/
      32 && p !== (p = /*geom*/
      e[5].x)) && s(_, "x", p), (!Z || O & /*geom*/
      32 && v !== (v = /*geom*/
      e[5].y)) && s(_, "y", v), (!Z || O & /*geom*/
      32 && D !== (D = /*geom*/
      e[5].w)) && s(_, "width", D), (!Z || O & /*geom*/
      32 && P !== (P = /*geom*/
      e[5].h)) && s(_, "height", P), (!Z || O & /*computedStyle*/
      2) && s(
        d,
        "style",
        /*computedStyle*/
        e[1]
      ), (!Z || O & /*geom*/
      32 && w !== (w = /*geom*/
      e[5].x)) && s(d, "x", w), (!Z || O & /*geom*/
      32 && E !== (E = /*geom*/
      e[5].y)) && s(d, "y", E), (!Z || O & /*geom*/
      32 && g !== (g = /*geom*/
      e[5].w)) && s(d, "width", g), (!Z || O & /*geom*/
      32 && S !== (S = /*geom*/
      e[5].h)) && s(d, "height", S), (!Z || O & /*geom*/
      32 && q !== (q = /*geom*/
      e[5].x)) && s(R, "x", q), (!Z || O & /*geom*/
      32 && T !== (T = /*geom*/
      e[5].y)) && s(R, "y", T), (!Z || O & /*geom*/
      32 && U !== (U = /*geom*/
      e[5].w)) && s(R, "width", U), (!Z || O & /*geom*/
      32 && V !== (V = /*geom*/
      e[5].x + /*geom*/
      e[5].w)) && s(A, "x", V), (!Z || O & /*geom*/
      32 && L !== (L = /*geom*/
      e[5].y)) && s(A, "y", L), (!Z || O & /*geom*/
      32 && B !== (B = /*geom*/
      e[5].h)) && s(A, "height", B), (!Z || O & /*geom*/
      32 && j !== (j = /*geom*/
      e[5].x)) && s(C, "x", j), (!Z || O & /*geom*/
      32 && k !== (k = /*geom*/
      e[5].y + /*geom*/
      e[5].h)) && s(C, "y", k), (!Z || O & /*geom*/
      32 && X !== (X = /*geom*/
      e[5].w)) && s(C, "width", X), (!Z || O & /*geom*/
      32 && ne !== (ne = /*geom*/
      e[5].x)) && s(G, "x", ne), (!Z || O & /*geom*/
      32 && re !== (re = /*geom*/
      e[5].y)) && s(G, "y", re), (!Z || O & /*geom*/
      32 && ee !== (ee = /*geom*/
      e[5].h)) && s(G, "height", ee);
      const Ne = {};
      O & /*geom*/
      32 && (Ne.x = /*geom*/
      e[5].x), O & /*geom*/
      32 && (Ne.y = /*geom*/
      e[5].y), O & /*viewportScale*/
      8 && (Ne.scale = /*viewportScale*/
      e[3]), ae.$set(Ne);
      const Ae = {};
      O & /*geom*/
      32 && (Ae.x = /*geom*/
      e[5].x + /*geom*/
      e[5].w), O & /*geom*/
      32 && (Ae.y = /*geom*/
      e[5].y), O & /*viewportScale*/
      8 && (Ae.scale = /*viewportScale*/
      e[3]), fe.$set(Ae);
      const Ye = {};
      O & /*geom*/
      32 && (Ye.x = /*geom*/
      e[5].x + /*geom*/
      e[5].w), O & /*geom*/
      32 && (Ye.y = /*geom*/
      e[5].y + /*geom*/
      e[5].h), O & /*viewportScale*/
      8 && (Ye.scale = /*viewportScale*/
      e[3]), ue.$set(Ye);
      const Xe = {};
      O & /*geom*/
      32 && (Xe.x = /*geom*/
      e[5].x), O & /*geom*/
      32 && (Xe.y = /*geom*/
      e[5].y + /*geom*/
      e[5].h), O & /*viewportScale*/
      8 && (Xe.scale = /*viewportScale*/
      e[3]), we.$set(Xe);
    },
    i(F) {
      Z || (z(ae.$$.fragment, F), z(fe.$$.fragment, F), z(ue.$$.fragment, F), z(we.$$.fragment, F), Z = !0);
    },
    o(F) {
      $(ae.$$.fragment, F), $(fe.$$.fragment, F), $(ue.$$.fragment, F), $(we.$$.fragment, F), Z = !1;
    },
    d(F) {
      F && (M(n), M(y), M(_), M(b), M(d), M(I), M(R), M(Y), M(A), M(W), M(C), M(Q), M(G), M(de), M(ce), M(Te), M(Pe)), le(ae, F), le(fe, F), le(ue, F), le(we, F), Ge = !1, Se(Ke);
    }
  };
}
function Ol(e) {
  let n, t;
  return n = new Ue({
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
          Il,
          ({ grab: o }) => ({ 12: o }),
          ({ grab: o }) => o ? 4096 : 0
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
      ie(n.$$.fragment);
    },
    m(o, l) {
      se(n, o, l), t = !0;
    },
    p(o, [l]) {
      const i = {};
      l & /*shape*/
      1 && (i.shape = /*shape*/
      o[0]), l & /*transform*/
      4 && (i.transform = /*transform*/
      o[2]), l & /*svgEl*/
      16 && (i.svgEl = /*svgEl*/
      o[4]), l & /*$$scope, geom, viewportScale, grab, computedStyle, mask*/
      12394 && (i.$$scope = { dirty: l, ctx: o }), n.$set(i);
    },
    i(o) {
      t || (z(n.$$.fragment, o), t = !0);
    },
    o(o) {
      $(n.$$.fragment, o), t = !1;
    },
    d(o) {
      le(n, o);
    }
  };
}
function Cl(e, n, t) {
  let o, l, { shape: i } = n, { computedStyle: r } = n, { transform: f } = n, { viewportScale: a = 1 } = n, { svgEl: c } = n;
  const u = (p, v, D) => {
    const P = p.geometry.bounds;
    let [b, d] = [P.minX, P.minY], [w, E] = [P.maxX, P.maxY];
    const [g, S] = D;
    if (v === "SHAPE")
      b += g, w += g, d += S, E += S;
    else {
      switch (v) {
        case "TOP":
        case "TOP_LEFT":
        case "TOP_RIGHT": {
          d += S;
          break;
        }
        case "BOTTOM":
        case "BOTTOM_LEFT":
        case "BOTTOM_RIGHT": {
          E += S;
          break;
        }
      }
      switch (v) {
        case "LEFT":
        case "TOP_LEFT":
        case "BOTTOM_LEFT": {
          b += g;
          break;
        }
        case "RIGHT":
        case "TOP_RIGHT":
        case "BOTTOM_RIGHT": {
          w += g;
          break;
        }
      }
    }
    const I = Math.min(b, w), R = Math.min(d, E), q = Math.abs(w - b), T = Math.abs(E - d);
    return {
      ...p,
      geometry: {
        x: I,
        y: R,
        w: q,
        h: T,
        bounds: {
          minX: I,
          minY: R,
          maxX: I + q,
          maxY: R + T
        }
      }
    };
  }, h = `rect-mask-${Math.random().toString(36).substring(2, 12)}`;
  function m(p) {
    oe.call(this, e, p);
  }
  function y(p) {
    oe.call(this, e, p);
  }
  function _(p) {
    oe.call(this, e, p);
  }
  return e.$$set = (p) => {
    "shape" in p && t(0, i = p.shape), "computedStyle" in p && t(1, r = p.computedStyle), "transform" in p && t(2, f = p.transform), "viewportScale" in p && t(3, a = p.viewportScale), "svgEl" in p && t(4, c = p.svgEl);
  }, e.$$.update = () => {
    e.$$.dirty & /*shape*/
    1 && t(5, o = i.geometry), e.$$.dirty & /*geom, viewportScale*/
    40 && t(6, l = nn(o.bounds, 2 / a));
  }, [
    i,
    r,
    f,
    a,
    c,
    o,
    l,
    u,
    h,
    m,
    y,
    _
  ];
}
class Rl extends pe {
  constructor(n) {
    super(), me(this, n, Cl, Ol, _e, {
      shape: 0,
      computedStyle: 1,
      transform: 2,
      viewportScale: 3,
      svgEl: 4
    });
  }
}
function St(e) {
  let n, t;
  return {
    c() {
      n = N("rect"), t = N("rect"), s(n, "class", "a9s-outer"), s(
        n,
        "x",
        /*x*/
        e[1]
      ), s(
        n,
        "y",
        /*y*/
        e[2]
      ), s(
        n,
        "width",
        /*w*/
        e[3]
      ), s(
        n,
        "height",
        /*h*/
        e[4]
      ), s(t, "class", "a9s-inner"), s(
        t,
        "x",
        /*x*/
        e[1]
      ), s(
        t,
        "y",
        /*y*/
        e[2]
      ), s(
        t,
        "width",
        /*w*/
        e[3]
      ), s(
        t,
        "height",
        /*h*/
        e[4]
      );
    },
    m(o, l) {
      H(o, n, l), H(o, t, l);
    },
    p(o, l) {
      l & /*x*/
      2 && s(
        n,
        "x",
        /*x*/
        o[1]
      ), l & /*y*/
      4 && s(
        n,
        "y",
        /*y*/
        o[2]
      ), l & /*w*/
      8 && s(
        n,
        "width",
        /*w*/
        o[3]
      ), l & /*h*/
      16 && s(
        n,
        "height",
        /*h*/
        o[4]
      ), l & /*x*/
      2 && s(
        t,
        "x",
        /*x*/
        o[1]
      ), l & /*y*/
      4 && s(
        t,
        "y",
        /*y*/
        o[2]
      ), l & /*w*/
      8 && s(
        t,
        "width",
        /*w*/
        o[3]
      ), l & /*h*/
      16 && s(
        t,
        "height",
        /*h*/
        o[4]
      );
    },
    d(o) {
      o && (M(n), M(t));
    }
  };
}
function Dl(e) {
  let n, t = (
    /*origin*/
    e[0] && /*dist*/
    e[5] > 0 && St(e)
  );
  return {
    c() {
      n = N("g"), t && t.c(), s(n, "class", "a9s-annotation a9s-rubberband");
    },
    m(o, l) {
      H(o, n, l), t && t.m(n, null);
    },
    p(o, [l]) {
      /*origin*/
      o[0] && /*dist*/
      o[5] > 0 ? t ? t.p(o, l) : (t = St(o), t.c(), t.m(n, null)) : t && (t.d(1), t = null);
    },
    i: he,
    o: he,
    d(o) {
      o && M(n), t && t.d();
    }
  };
}
const _n = 160, dn = 60;
function Nl(e, n, t) {
  let o;
  const l = Ie();
  let { addEventListener: i } = n, { drawingMode: r } = n, { transform: f } = n, { viewportScale: a = 1 } = n, c, u, h, m, y, _, p;
  const v = (w) => {
    const E = w;
    c = performance.now(), r === "drag" && (t(0, u = f.elementToImage(E.offsetX, E.offsetY)), t(10, h = u), t(1, m = u[0]), t(2, y = u[1]), t(3, _ = 1), t(4, p = 1));
  }, D = (w) => {
    const E = w;
    u && (t(10, h = f.elementToImage(E.offsetX, E.offsetY)), t(1, m = Math.min(h[0], u[0])), t(2, y = Math.min(h[1], u[1])), t(3, _ = Math.abs(h[0] - u[0])), t(4, p = Math.abs(h[1] - u[1])));
  }, P = (w) => {
    const E = w, g = performance.now() - c;
    if (r === "click") {
      if (g > 300) return;
      if (u)
        b();
      else {
        const S = f.elementToImage(E.offsetX, E.offsetY);
        t(1, m = S[0] - _n / 2), t(2, y = S[1] - dn / 2), t(3, _ = _n), t(4, p = dn), d();
      }
    } else u && (g > 300 || _ * p > 100 ? (E.stopPropagation(), b()) : (t(1, m = u[0]), t(2, y = u[1]), t(3, _ = _n), t(4, p = dn), d()));
  }, b = () => {
    _ * p > 15 ? d() : (t(0, u = void 0), t(10, h = void 0));
  }, d = () => {
    const w = {
      type: Me.RECTANGLE,
      geometry: {
        bounds: {
          minX: m,
          minY: y,
          maxX: m + _,
          maxY: y + p
        },
        x: m,
        y,
        w: _,
        h: p
      },
      properties: { toolType: "text" }
    };
    l("create", w), t(0, u = void 0), t(10, h = void 0);
  };
  return Oe(() => {
    i("pointerdown", v), i("pointermove", D), i("pointerup", P, !0);
  }), e.$$set = (w) => {
    "addEventListener" in w && t(6, i = w.addEventListener), "drawingMode" in w && t(7, r = w.drawingMode), "transform" in w && t(8, f = w.transform), "viewportScale" in w && t(9, a = w.viewportScale);
  }, e.$$.update = () => {
    e.$$.dirty & /*origin, anchor*/
    1025 && t(5, o = u && h ? Re(u, h) : 0);
  }, [
    u,
    m,
    y,
    _,
    p,
    o,
    i,
    r,
    f,
    a,
    h
  ];
}
class Al extends pe {
  constructor(n) {
    super(), me(this, n, Nl, Dl, _e, {
      addEventListener: 6,
      drawingMode: 7,
      transform: 8,
      viewportScale: 9
    });
  }
}
const Fl = (e) => {
  e.registerDrawingTool("ellipse", jo), e.registerShapeEditor(Me.ELLIPSE, Ao), e.registerDrawingTool("line", Vo), e.registerDrawingTool("arrow", Bt), e.registerShapeEditor(Me.LINE, Go), e.registerDrawingTool("path", fl), e.registerDrawingTool("distance", Ft), e.registerShapeEditor(Me.POLYLINE, El), e.registerDrawingTool("star", Ll), e.registerShapeEditor(Me.POLYGON, Pl), e.registerDrawingTool("text", Al), e.registerShapeEditor(Me.RECTANGLE, Rl), ol(e);
};
export {
  Fl as mountPlugin
};
//# sourceMappingURL=annotorious-plugin-tools.es.js.map
