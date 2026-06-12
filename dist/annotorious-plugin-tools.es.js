var Fs = Object.defineProperty;
var Ws = (e, n, t) => n in e ? Fs(e, n, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[n] = t;
var it = (e, n, t) => Ws(e, typeof n != "symbol" ? n + "" : n, t);
var Zs = Object.defineProperty, Qs = (e, n, t) => n in e ? Zs(e, n, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[n] = t, Vt = (e, n, t) => Qs(e, typeof n != "symbol" ? n + "" : n, t);
function wn() {
}
function It(e, n) {
  for (const t in n) e[t] = n[t];
  return (
    /** @type {T & S} */
    e
  );
}
function Ls(e) {
  return e();
}
function Kt() {
  return /* @__PURE__ */ Object.create(null);
}
function xe(e) {
  e.forEach(Ls);
}
function Ae(e) {
  return typeof e == "function";
}
function Rn(e, n) {
  return e != e ? n == n : e !== n || e && typeof e == "object" || typeof e == "function";
}
function Js(e) {
  return Object.keys(e).length === 0;
}
function $s(e, n, t, o) {
  if (e) {
    const s = Os(e, n, t, o);
    return e[0](s);
  }
}
function Os(e, n, t, o) {
  return e[1] && o ? It(t.ctx.slice(), e[1](o(n))) : t.ctx;
}
function xs(e, n, t, o) {
  if (e[2] && o) {
    const s = e[2](o(t));
    if (n.dirty === void 0)
      return s;
    if (typeof s == "object") {
      const l = [], a = Math.max(n.dirty.length, s.length);
      for (let r = 0; r < a; r += 1)
        l[r] = n.dirty[r] | s[r];
      return l;
    }
    return n.dirty | s;
  }
  return n.dirty;
}
function el(e, n, t, o, s, l) {
  if (s) {
    const a = Os(n, t, o, l);
    e.p(a, s);
  }
}
function nl(e) {
  if (e.ctx.length > 32) {
    const n = [], t = e.ctx.length / 32;
    for (let o = 0; o < t; o++)
      n[o] = -1;
    return n;
  }
  return -1;
}
function Ft(e) {
  const n = {};
  for (const t in e) t[0] !== "$" && (n[t] = e[t]);
  return n;
}
function Wt(e) {
  return e ?? "";
}
function Me(e, n) {
  e.appendChild(n);
}
function fe(e, n, t) {
  e.insertBefore(n, t || null);
}
function ae(e) {
  e.parentNode && e.parentNode.removeChild(e);
}
function ot(e, n) {
  for (let t = 0; t < e.length; t += 1)
    e[t] && e[t].d(n);
}
function re(e) {
  return document.createElementNS("http://www.w3.org/2000/svg", e);
}
function Hs(e) {
  return document.createTextNode(e);
}
function Ve() {
  return Hs(" ");
}
function Wn() {
  return Hs("");
}
function we(e, n, t, o) {
  return e.addEventListener(n, t, o), () => e.removeEventListener(n, t, o);
}
function v(e, n, t) {
  t == null ? e.removeAttribute(n) : e.getAttribute(n) !== t && e.setAttribute(n, t);
}
function tl(e) {
  return Array.from(e.childNodes);
}
function Zt(e, n, t) {
  e.classList.toggle(n, !!t);
}
function ol(e, n, { bubbles: t = !1, cancelable: o = !1 } = {}) {
  return new CustomEvent(e, { detail: n, bubbles: t, cancelable: o });
}
let Gn;
function Bn(e) {
  Gn = e;
}
function Is() {
  if (!Gn) throw new Error("Function called outside component initialization");
  return Gn;
}
function Cs(e) {
  Is().$$.on_mount.push(e);
}
function Ut() {
  const e = Is();
  return (n, t, { cancelable: o = !1 } = {}) => {
    const s = e.$$.callbacks[n];
    if (s) {
      const l = ol(
        /** @type {string} */
        n,
        t,
        { cancelable: o }
      );
      return s.slice().forEach((a) => {
        a.call(e, l);
      }), !l.defaultPrevented;
    }
    return !0;
  };
}
function Ge(e, n) {
  const t = e.$$.callbacks[n.type];
  t && t.slice().forEach((o) => o.call(this, n));
}
const Tn = [], Qt = [];
let On = [];
const Jt = [], Rs = /* @__PURE__ */ Promise.resolve();
let Ct = !1;
function Ns() {
  Ct || (Ct = !0, Rs.then(Ds));
}
function As() {
  return Ns(), Rs;
}
function Rt(e) {
  On.push(e);
}
const rt = /* @__PURE__ */ new Set();
let vn = 0;
function Ds() {
  if (vn !== 0)
    return;
  const e = Gn;
  do {
    try {
      for (; vn < Tn.length; ) {
        const n = Tn[vn];
        vn++, Bn(n), sl(n.$$);
      }
    } catch (n) {
      throw Tn.length = 0, vn = 0, n;
    }
    for (Bn(null), Tn.length = 0, vn = 0; Qt.length; ) Qt.pop()();
    for (let n = 0; n < On.length; n += 1) {
      const t = On[n];
      rt.has(t) || (rt.add(t), t());
    }
    On.length = 0;
  } while (Tn.length);
  for (; Jt.length; )
    Jt.pop()();
  Ct = !1, rt.clear(), Bn(e);
}
function sl(e) {
  if (e.fragment !== null) {
    e.update(), xe(e.before_update);
    const n = e.dirty;
    e.dirty = [-1], e.fragment && e.fragment.p(e.ctx, n), e.after_update.forEach(Rt);
  }
}
function ll(e) {
  const n = [], t = [];
  On.forEach((o) => e.indexOf(o) === -1 ? n.push(o) : t.push(o)), t.forEach((o) => o()), On = n;
}
const Jn = /* @__PURE__ */ new Set();
let _n;
function In() {
  _n = {
    r: 0,
    c: [],
    p: _n
    // parent group
  };
}
function Cn() {
  _n.r || xe(_n.c), _n = _n.p;
}
function be(e, n) {
  e && e.i && (Jn.delete(e), e.i(n));
}
function Pe(e, n, t, o) {
  if (e && e.o) {
    if (Jn.has(e)) return;
    Jn.add(e), _n.c.push(() => {
      Jn.delete(e), o && (t && e.d(1), o());
    }), e.o(n);
  } else o && o();
}
function dn(e) {
  return (e == null ? void 0 : e.length) !== void 0 ? e : Array.from(e);
}
function on(e) {
  e && e.c();
}
function Je(e, n, t) {
  const { fragment: o, after_update: s } = e.$$;
  o && o.m(n, t), Rt(() => {
    const l = e.$$.on_mount.map(Ls).filter(Ae);
    e.$$.on_destroy ? e.$$.on_destroy.push(...l) : xe(l), e.$$.on_mount = [];
  }), s.forEach(Rt);
}
function $e(e, n) {
  const t = e.$$;
  t.fragment !== null && (ll(t.after_update), xe(t.on_destroy), t.fragment && t.fragment.d(n), t.on_destroy = t.fragment = null, t.ctx = []);
}
function il(e, n) {
  e.$$.dirty[0] === -1 && (Tn.push(e), Ns(), e.$$.dirty.fill(0)), e.$$.dirty[n / 31 | 0] |= 1 << n % 31;
}
function Nn(e, n, t, o, s, l, a = null, r = [-1]) {
  const f = Gn;
  Bn(e);
  const c = e.$$ = {
    fragment: null,
    ctx: [],
    // state
    props: l,
    update: wn,
    not_equal: s,
    bound: Kt(),
    // lifecycle
    on_mount: [],
    on_destroy: [],
    on_disconnect: [],
    before_update: [],
    after_update: [],
    context: new Map(n.context || (f ? f.$$.context : [])),
    // everything else
    callbacks: Kt(),
    dirty: r,
    skip_bound: !1,
    root: n.target || f.$$.root
  };
  a && a(c.root);
  let u = !1;
  if (c.ctx = t ? t(e, n.props || {}, (p, d, ..._) => {
    const g = _.length ? _[0] : d;
    return c.ctx && s(c.ctx[p], c.ctx[p] = g) && (!c.skip_bound && c.bound[p] && c.bound[p](g), u && il(e, p)), d;
  }) : [], c.update(), u = !0, xe(c.before_update), c.fragment = o ? o(c.ctx) : !1, n.target) {
    if (n.hydrate) {
      const p = tl(n.target);
      c.fragment && c.fragment.l(p), p.forEach(ae);
    } else
      c.fragment && c.fragment.c();
    n.intro && be(e.$$.fragment), Je(e, n.target, n.anchor), Ds();
  }
  Bn(f);
}
class An {
  constructor() {
    Vt(this, "$$"), Vt(this, "$$set");
  }
  /** @returns {void} */
  $destroy() {
    $e(this, 1), this.$destroy = wn;
  }
  /**
   * @template {Extract<keyof Events, string>} K
   * @param {K} type
   * @param {((e: Events[K]) => void) | null | undefined} callback
   * @returns {() => void}
   */
  $on(n, t) {
    if (!Ae(t))
      return wn;
    const o = this.$$.callbacks[n] || (this.$$.callbacks[n] = []);
    return o.push(t), () => {
      const s = o.indexOf(t);
      s !== -1 && o.splice(s, 1);
    };
  }
  /**
   * @param {Partial<Props>} props
   * @returns {void}
   */
  $set(n) {
    this.$$set && !Js(n) && (this.$$.skip_bound = !0, this.$$set(n), this.$$.skip_bound = !1);
  }
}
const rl = "4";
typeof window < "u" && (window.__svelte || (window.__svelte = { v: /* @__PURE__ */ new Set() })).v.add(rl);
var Le = /* @__PURE__ */ ((e) => (e.ELLIPSE = "ELLIPSE", e.MULTIPOLYGON = "MULTIPOLYGON", e.POLYGON = "POLYGON", e.POLYLINE = "POLYLINE", e.RECTANGLE = "RECTANGLE", e.LINE = "LINE", e))(Le || {}), al = { exports: {} };
(function(e) {
  (function() {
    function n(r, f) {
      var c = r.x - f.x, u = r.y - f.y;
      return c * c + u * u;
    }
    function t(r, f, c) {
      var u = f.x, p = f.y, d = c.x - u, _ = c.y - p;
      if (d !== 0 || _ !== 0) {
        var g = ((r.x - u) * d + (r.y - p) * _) / (d * d + _ * _);
        g > 1 ? (u = c.x, p = c.y) : g > 0 && (u += d * g, p += _ * g);
      }
      return d = r.x - u, _ = r.y - p, d * d + _ * _;
    }
    function o(r, f) {
      for (var c = r[0], u = [c], p, d = 1, _ = r.length; d < _; d++)
        p = r[d], n(p, c) > f && (u.push(p), c = p);
      return c !== p && u.push(p), u;
    }
    function s(r, f, c, u, p) {
      for (var d = u, _, g = f + 1; g < c; g++) {
        var h = t(r[g], r[f], r[c]);
        h > d && (_ = g, d = h);
      }
      d > u && (_ - f > 1 && s(r, f, _, u, p), p.push(r[_]), c - _ > 1 && s(r, _, c, u, p));
    }
    function l(r, f) {
      var c = r.length - 1, u = [r[0]];
      return s(r, 0, c, f, u), u.push(r[c]), u;
    }
    function a(r, f, c) {
      if (r.length <= 2) return r;
      var u = f !== void 0 ? f * f : 1;
      return r = c ? r : o(r, u), r = l(r, u), r;
    }
    e.exports = a, e.exports.default = a;
  })();
})(al);
const Dn = (e, n) => n, Xe = (e) => {
  let n = 1 / 0, t = 1 / 0, o = -1 / 0, s = -1 / 0;
  return e.forEach(([l, a]) => {
    n = Math.min(n, l), t = Math.min(t, a), o = Math.max(o, l), s = Math.max(s, a);
  }), { minX: n, minY: t, maxX: o, maxY: s };
}, xn = (e) => {
  let n = 0, t = e.length - 1;
  for (let o = 0; o < e.length; o++)
    n += (e[t][0] + e[o][0]) * (e[t][1] - e[o][1]), t = o;
  return Math.abs(0.5 * n);
}, et = (e, n, t) => {
  let o = !1;
  for (let s = 0, l = e.length - 1; s < e.length; l = s++) {
    const a = e[s][0], r = e[s][1], f = e[l][0], c = e[l][1];
    r > t != c > t && n < (f - a) * (t - r) / (c - r) + a && (o = !o);
  }
  return o;
}, fl = (e, n = !0) => {
  let t = "M ";
  return e.forEach(([o, s], l) => {
    l === 0 ? t += `${o},${s}` : t += ` L ${o},${s}`;
  }), n && (t += " Z"), t;
}, an = (e, n) => {
  const t = Math.abs(n[0] - e[0]), o = Math.abs(n[1] - e[1]);
  return Math.sqrt(Math.pow(t, 2) + Math.pow(o, 2));
}, cl = {
  area: (e) => Math.PI * e.geometry.rx * e.geometry.ry,
  intersects: (e, n, t) => {
    const { cx: o, cy: s, rx: l, ry: a } = e.geometry, r = 0, f = Math.cos(r), c = Math.sin(r), u = n - o, p = t - s, d = f * u + c * p, _ = c * u - f * p;
    return d * d / (l * l) + _ * _ / (a * a) <= 1;
  }
};
Dn(Le.ELLIPSE, cl);
const ul = {
  area: (e) => 0,
  intersects: (e, n, t, o = 2) => {
    const [[s, l], [a, r]] = e.geometry.points, f = Math.abs((r - l) * n - (a - s) * t + a * l - r * s), c = an([s, l], [a, r]);
    return f / c <= o;
  }
};
Dn(Le.LINE, ul);
const pl = {
  area: (e) => {
    const { polygons: n } = e.geometry;
    return n.reduce((t, o) => {
      const [s, ...l] = o.rings, a = xn(s.points), r = l.reduce((f, c) => f + xn(c.points), 0);
      return t + a - r;
    }, 0);
  },
  intersects: (e, n, t) => {
    const { polygons: o } = e.geometry;
    for (const s of o) {
      const [l, ...a] = s.rings;
      if (et(l.points, n, t)) {
        let r = !1;
        for (const f of a)
          if (et(f.points, n, t)) {
            r = !0;
            break;
          }
        if (!r) return !0;
      }
    }
    return !1;
  }
}, at = (e) => {
  const n = e.reduce((t, o) => [...t, ...o.rings[0].points], []);
  return Xe(n);
}, En = (e) => e.rings.map((n) => fl(n.points)).join(" "), hl = (e) => e.polygons.reduce((n, t) => [
  ...n,
  ...t.rings.reduce((o, s) => [...o, ...s.points], [])
], []);
Dn(Le.MULTIPOLYGON, pl);
const dl = {
  area: (e) => {
    const n = e.geometry.points;
    return xn(n);
  },
  intersects: (e, n, t) => {
    const o = e.geometry.points;
    return et(o, n, t);
  }
};
Dn(Le.POLYGON, dl);
const ml = {
  area: (e) => {
    const n = e.geometry;
    if (!n.closed || n.points.length < 3)
      return 0;
    const t = Pn(n.points, n.closed);
    return xn(t);
  },
  intersects: (e, n, t, o = 2) => {
    const s = e.geometry;
    if (s.closed) {
      const l = Pn(s.points, s.closed);
      return et(l, n, t);
    } else
      return gl(s, [n, t], o);
  }
}, Pn = (e, n = !1) => {
  const t = [];
  for (let o = 0; o < e.length; o++) {
    const s = e[o], l = e[(o + 1) % e.length];
    if (t.push(s.point), (o < e.length - 1 || n) && (s.type === "CURVE" || l.type == "CURVE")) {
      const a = Xs(
        s.point,
        s.type === "CURVE" && s.outHandle || s.point,
        l.type === "CURVE" && l.inHandle || l.point,
        l.point,
        10
        // number of approximation segments
      );
      t.push(...a.slice(1));
    }
  }
  return t;
}, Xs = (e, n, t, o, s = 10) => {
  const l = [];
  for (let a = 0; a <= s; a++) {
    const r = a / s, f = Math.pow(1 - r, 3) * e[0] + 3 * Math.pow(1 - r, 2) * r * n[0] + 3 * (1 - r) * Math.pow(r, 2) * t[0] + Math.pow(r, 3) * o[0], c = Math.pow(1 - r, 3) * e[1] + 3 * Math.pow(1 - r, 2) * r * n[1] + 3 * (1 - r) * Math.pow(r, 2) * t[1] + Math.pow(r, 3) * o[1];
    l.push([f, c]);
  }
  return l;
}, gl = (e, n, t) => {
  for (let o = 0; o < e.points.length - 1; o++) {
    const s = e.points[o], l = e.points[o + 1];
    if (s.type === "CURVE" || l.type === "CURVE") {
      const a = Xs(
        s.point,
        s.type === "CURVE" && s.outHandle || s.point,
        l.type === "CURVE" && l.inHandle || l.point,
        l.point,
        20
        // TODO make configurable? Based on scale factor? Length?
      );
      for (let r = 0; r < a.length - 1; r++)
        if ($t(n, a[r], a[r + 1]) <= t) return !0;
    } else if ($t(n, s.point, l.point) <= t) return !0;
  }
  return !1;
}, $t = (e, n, t) => {
  const [o, s] = e, [l, a] = n, [r, f] = t, c = r - l, u = f - a, p = Math.sqrt(c * c + u * u);
  if (p === 0)
    return Math.sqrt((o - l) * (o - l) + (s - a) * (s - a));
  const d = ((o - l) * c + (s - a) * u) / (p * p);
  return d <= 0 ? Math.sqrt((o - l) * (o - l) + (s - a) * (s - a)) : d >= 1 ? Math.sqrt((o - r) * (o - r) + (s - f) * (s - f)) : Math.abs((f - a) * o - (r - l) * s + r * a - f * l) / p;
}, _l = (e) => {
  if (!e.points || e.points.length === 0)
    return "";
  const n = [], t = e.points[0];
  n.push(`M ${t.point[0]} ${t.point[1]}`);
  for (let o = 1; o < e.points.length; o++) {
    const s = e.points[o], l = e.points[o - 1];
    if (s.type === "CURVE" || l.type === "CURVE") {
      const a = l.type === "CURVE" && l.outHandle || l.point, r = s.type === "CURVE" && s.inHandle || s.point, f = s.point;
      n.push(`C ${a[0]} ${a[1]} ${r[0]} ${r[1]} ${f[0]} ${f[1]}`);
    } else
      n.push(`L ${s.point[0]} ${s.point[1]}`);
  }
  if (e.closed) {
    const o = e.points[e.points.length - 1], s = e.points[0];
    if (o.type === "CURVE" || s.type === "CURVE") {
      const l = o.outHandle || o.point, a = s.inHandle || s.point, r = s.point;
      n.push(`C ${l[0]} ${l[1]} ${a[0]} ${a[1]} ${r[0]} ${r[1]}`);
    }
    n.push("Z");
  }
  return n.join(" ");
};
Dn(Le.POLYLINE, ml);
const yl = {
  area: (e) => e.geometry.w * e.geometry.h,
  intersects: (e, n, t) => n >= e.geometry.x && n <= e.geometry.x + e.geometry.w && t >= e.geometry.y && t <= e.geometry.y + e.geometry.h
};
Dn(Le.RECTANGLE, yl);
const wl = [];
for (let e = 0; e < 256; ++e)
  wl.push((e + 256).toString(16).slice(1));
typeof crypto < "u" && crypto.randomUUID && crypto.randomUUID.bind(crypto);
const bl = [];
for (let e = 0; e < 256; ++e)
  bl.push((e + 256).toString(16).slice(1));
typeof crypto < "u" && crypto.randomUUID && crypto.randomUUID.bind(crypto);
const vl = "useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict";
let El = (e = 21) => {
  let n = "", t = crypto.getRandomValues(new Uint8Array(e |= 0));
  for (; e--; )
    n += vl[t[e] & 63];
  return n;
};
El();
const bn = (e, n = 0) => {
  const { minX: t, minY: o, maxX: s, maxY: l } = e;
  return {
    x: t - n,
    y: o - n,
    w: s - t + 2 * n,
    h: l - o + 2 * n
  };
}, fn = typeof window > "u" || typeof navigator > "u" ? !1 : "ontouchstart" in window || navigator.maxTouchPoints > 0 || // @ts-ignore
navigator.msMaxTouchPoints > 0, kl = (e) => ({}), xt = (e) => ({ grab: (
  /*onGrab*/
  e[0]
) });
function Sl(e) {
  let n, t, o, s;
  const l = (
    /*#slots*/
    e[8].default
  ), a = $s(
    l,
    e,
    /*$$scope*/
    e[7],
    xt
  );
  return {
    c() {
      n = re("g"), a && a.c(), v(n, "class", "a9s-annotation selected");
    },
    m(r, f) {
      fe(r, n, f), a && a.m(n, null), t = !0, o || (s = [
        we(
          n,
          "pointerup",
          /*onRelease*/
          e[2]
        ),
        we(
          n,
          "pointermove",
          /*onPointerMove*/
          e[1]
        )
      ], o = !0);
    },
    p(r, [f]) {
      a && a.p && (!t || f & /*$$scope*/
      128) && el(
        a,
        l,
        r,
        /*$$scope*/
        r[7],
        t ? xs(
          l,
          /*$$scope*/
          r[7],
          f,
          kl
        ) : nl(
          /*$$scope*/
          r[7]
        ),
        xt
      );
    },
    i(r) {
      t || (be(a, r), t = !0);
    },
    o(r) {
      Pe(a, r), t = !1;
    },
    d(r) {
      r && ae(n), a && a.d(r), o = !1, xe(s);
    }
  };
}
function Tl(e, n, t) {
  let { $$slots: o = {}, $$scope: s } = n;
  const l = Ut();
  let { shape: a } = n, { editor: r } = n, { transform: f } = n, { svgEl: c } = n, u, p, d;
  const _ = (E) => (N) => {
    if (u = E, c) {
      const { left: H, top: y } = c.getBoundingClientRect(), b = N.clientX - H, k = N.clientY - y;
      p = f.elementToImage(b, k);
    } else {
      const { offsetX: H, offsetY: y } = N;
      p = f.elementToImage(H, y);
    }
    d = a, N.target.setPointerCapture(N.pointerId), l("grab", N);
  }, g = (E) => {
    if (u) {
      const [N, H] = f.elementToImage(E.offsetX, E.offsetY), y = [N - p[0], H - p[1]];
      t(3, a = r(d, u, y)), l("change", a);
    }
  }, h = (E) => {
    E.target.releasePointerCapture(E.pointerId), u = void 0, d = a, l("release", E);
  };
  return e.$$set = (E) => {
    "shape" in E && t(3, a = E.shape), "editor" in E && t(4, r = E.editor), "transform" in E && t(5, f = E.transform), "svgEl" in E && t(6, c = E.svgEl), "$$scope" in E && t(7, s = E.$$scope);
  }, [
    _,
    g,
    h,
    a,
    r,
    f,
    c,
    s,
    o
  ];
}
class Gt extends An {
  constructor(n) {
    super(), Nn(this, n, Tl, Sl, Rn, {
      shape: 3,
      editor: 4,
      transform: 5,
      svgEl: 6
    });
  }
}
function Ml(e) {
  let n, t, o, s, l, a, r, f, c = (
    /*selected*/
    e[3] && eo(e)
  );
  return {
    c() {
      n = re("g"), t = re("circle"), c && c.c(), s = re("circle"), v(t, "class", "a9s-handle-buffer svelte-qtyc7s"), v(
        t,
        "cx",
        /*x*/
        e[0]
      ), v(
        t,
        "cy",
        /*y*/
        e[1]
      ), v(t, "r", o = /*handleRadius*/
      e[5] + 6 / /*scale*/
      e[2]), v(t, "role", "button"), v(t, "tabindex", "0"), v(s, "class", l = Wt(`a9s-handle-dot${/*selected*/
      e[3] ? " selected" : ""}`) + " svelte-qtyc7s"), v(
        s,
        "cx",
        /*x*/
        e[0]
      ), v(
        s,
        "cy",
        /*y*/
        e[1]
      ), v(
        s,
        "r",
        /*handleRadius*/
        e[5]
      ), v(n, "class", a = `a9s-handle ${/*$$props*/
      e[8].class || ""}`.trim());
    },
    m(u, p) {
      fe(u, n, p), Me(n, t), c && c.m(n, null), Me(n, s), r || (f = [
        we(
          t,
          "dblclick",
          /*dblclick_handler_1*/
          e[12]
        ),
        we(
          t,
          "pointerenter",
          /*pointerenter_handler*/
          e[13]
        ),
        we(
          t,
          "pointerleave",
          /*pointerleave_handler*/
          e[14]
        ),
        we(
          t,
          "pointerdown",
          /*pointerdown_handler_1*/
          e[15]
        ),
        we(
          t,
          "pointerdown",
          /*onPointerDown*/
          e[6]
        ),
        we(
          t,
          "pointerup",
          /*pointerup_handler_1*/
          e[16]
        ),
        we(
          t,
          "pointerup",
          /*onPointerUp*/
          e[7]
        )
      ], r = !0);
    },
    p(u, p) {
      p & /*x*/
      1 && v(
        t,
        "cx",
        /*x*/
        u[0]
      ), p & /*y*/
      2 && v(
        t,
        "cy",
        /*y*/
        u[1]
      ), p & /*handleRadius, scale*/
      36 && o !== (o = /*handleRadius*/
      u[5] + 6 / /*scale*/
      u[2]) && v(t, "r", o), /*selected*/
      u[3] ? c ? c.p(u, p) : (c = eo(u), c.c(), c.m(n, s)) : c && (c.d(1), c = null), p & /*selected*/
      8 && l !== (l = Wt(`a9s-handle-dot${/*selected*/
      u[3] ? " selected" : ""}`) + " svelte-qtyc7s") && v(s, "class", l), p & /*x*/
      1 && v(
        s,
        "cx",
        /*x*/
        u[0]
      ), p & /*y*/
      2 && v(
        s,
        "cy",
        /*y*/
        u[1]
      ), p & /*handleRadius*/
      32 && v(
        s,
        "r",
        /*handleRadius*/
        u[5]
      ), p & /*$$props*/
      256 && a !== (a = `a9s-handle ${/*$$props*/
      u[8].class || ""}`.trim()) && v(n, "class", a);
    },
    d(u) {
      u && ae(n), c && c.d(), r = !1, xe(f);
    }
  };
}
function Pl(e) {
  let n, t, o, s, l, a, r, f, c;
  return {
    c() {
      n = re("g"), t = re("circle"), s = re("circle"), a = re("circle"), v(
        t,
        "cx",
        /*x*/
        e[0]
      ), v(
        t,
        "cy",
        /*y*/
        e[1]
      ), v(t, "r", o = /*handleRadius*/
      e[5] * 10), v(t, "class", "a9s-touch-halo"), Zt(
        t,
        "touched",
        /*touched*/
        e[4]
      ), v(
        s,
        "cx",
        /*x*/
        e[0]
      ), v(
        s,
        "cy",
        /*y*/
        e[1]
      ), v(s, "r", l = /*handleRadius*/
      e[5] + 10 / /*scale*/
      e[2]), v(s, "class", "a9s-handle-buffer svelte-qtyc7s"), v(s, "role", "button"), v(s, "tabindex", "0"), v(a, "class", "a9s-handle-dot"), v(
        a,
        "cx",
        /*x*/
        e[0]
      ), v(
        a,
        "cy",
        /*y*/
        e[1]
      ), v(a, "r", r = /*handleRadius*/
      e[5] + 2 / /*scale*/
      e[2]), v(n, "class", "a9s-touch-handle");
    },
    m(u, p) {
      fe(u, n, p), Me(n, t), Me(n, s), Me(n, a), f || (c = [
        we(
          s,
          "dblclick",
          /*dblclick_handler*/
          e[9]
        ),
        we(
          s,
          "pointerdown",
          /*pointerdown_handler*/
          e[10]
        ),
        we(
          s,
          "pointerdown",
          /*onPointerDown*/
          e[6]
        ),
        we(
          s,
          "pointerup",
          /*pointerup_handler*/
          e[11]
        ),
        we(
          s,
          "pointerup",
          /*onPointerUp*/
          e[7]
        )
      ], f = !0);
    },
    p(u, p) {
      p & /*x*/
      1 && v(
        t,
        "cx",
        /*x*/
        u[0]
      ), p & /*y*/
      2 && v(
        t,
        "cy",
        /*y*/
        u[1]
      ), p & /*handleRadius*/
      32 && o !== (o = /*handleRadius*/
      u[5] * 10) && v(t, "r", o), p & /*touched*/
      16 && Zt(
        t,
        "touched",
        /*touched*/
        u[4]
      ), p & /*x*/
      1 && v(
        s,
        "cx",
        /*x*/
        u[0]
      ), p & /*y*/
      2 && v(
        s,
        "cy",
        /*y*/
        u[1]
      ), p & /*handleRadius, scale*/
      36 && l !== (l = /*handleRadius*/
      u[5] + 10 / /*scale*/
      u[2]) && v(s, "r", l), p & /*x*/
      1 && v(
        a,
        "cx",
        /*x*/
        u[0]
      ), p & /*y*/
      2 && v(
        a,
        "cy",
        /*y*/
        u[1]
      ), p & /*handleRadius, scale*/
      36 && r !== (r = /*handleRadius*/
      u[5] + 2 / /*scale*/
      u[2]) && v(a, "r", r);
    },
    d(u) {
      u && ae(n), f = !1, xe(c);
    }
  };
}
function eo(e) {
  let n, t;
  return {
    c() {
      n = re("circle"), v(n, "class", "a9s-handle-selected"), v(
        n,
        "cx",
        /*x*/
        e[0]
      ), v(
        n,
        "cy",
        /*y*/
        e[1]
      ), v(n, "r", t = /*handleRadius*/
      e[5] + 8 / /*scale*/
      e[2]);
    },
    m(o, s) {
      fe(o, n, s);
    },
    p(o, s) {
      s & /*x*/
      1 && v(
        n,
        "cx",
        /*x*/
        o[0]
      ), s & /*y*/
      2 && v(
        n,
        "cy",
        /*y*/
        o[1]
      ), s & /*handleRadius, scale*/
      36 && t !== (t = /*handleRadius*/
      o[5] + 8 / /*scale*/
      o[2]) && v(n, "r", t);
    },
    d(o) {
      o && ae(n);
    }
  };
}
function Ll(e) {
  let n;
  function t(s, l) {
    return fn ? Pl : Ml;
  }
  let o = t()(e);
  return {
    c() {
      o.c(), n = Wn();
    },
    m(s, l) {
      o.m(s, l), fe(s, n, l);
    },
    p(s, [l]) {
      o.p(s, l);
    },
    i: wn,
    o: wn,
    d(s) {
      s && ae(n), o.d(s);
    }
  };
}
function Ol(e, n, t) {
  let o, { x: s } = n, { y: l } = n, { scale: a } = n, { selected: r = void 0 } = n, f = !1;
  const c = (y) => {
    y.pointerType === "touch" && t(4, f = !0);
  }, u = () => t(4, f = !1);
  function p(y) {
    Ge.call(this, e, y);
  }
  function d(y) {
    Ge.call(this, e, y);
  }
  function _(y) {
    Ge.call(this, e, y);
  }
  function g(y) {
    Ge.call(this, e, y);
  }
  function h(y) {
    Ge.call(this, e, y);
  }
  function E(y) {
    Ge.call(this, e, y);
  }
  function N(y) {
    Ge.call(this, e, y);
  }
  function H(y) {
    Ge.call(this, e, y);
  }
  return e.$$set = (y) => {
    t(8, n = It(It({}, n), Ft(y))), "x" in y && t(0, s = y.x), "y" in y && t(1, l = y.y), "scale" in y && t(2, a = y.scale), "selected" in y && t(3, r = y.selected);
  }, e.$$.update = () => {
    e.$$.dirty & /*scale*/
    4 && t(5, o = 4 / a);
  }, n = Ft(n), [
    s,
    l,
    a,
    r,
    f,
    o,
    c,
    u,
    n,
    p,
    d,
    _,
    g,
    h,
    E,
    N,
    H
  ];
}
class Ln extends An {
  constructor(n) {
    super(), Nn(this, n, Ol, Ll, Rn, { x: 0, y: 1, scale: 2, selected: 3 });
  }
}
function Hl(e) {
  let n, t, o, s, l, a, r;
  return {
    c() {
      n = re("g"), t = re("circle"), s = re("circle"), l = re("circle"), v(t, "class", "a9s-polygon-midpoint-buffer svelte-12ykj76"), v(
        t,
        "cx",
        /*x*/
        e[0]
      ), v(
        t,
        "cy",
        /*y*/
        e[1]
      ), v(t, "r", o = 1.75 * /*handleRadius*/
      e[2]), v(s, "class", "a9s-polygon-midpoint-outer svelte-12ykj76"), v(
        s,
        "cx",
        /*x*/
        e[0]
      ), v(
        s,
        "cy",
        /*y*/
        e[1]
      ), v(
        s,
        "r",
        /*handleRadius*/
        e[2]
      ), v(l, "class", "a9s-polygon-midpoint-inner svelte-12ykj76"), v(
        l,
        "cx",
        /*x*/
        e[0]
      ), v(
        l,
        "cy",
        /*y*/
        e[1]
      ), v(
        l,
        "r",
        /*handleRadius*/
        e[2]
      ), v(n, "class", "a9s-polygon-midpoint svelte-12ykj76");
    },
    m(f, c) {
      fe(f, n, c), Me(n, t), Me(n, s), Me(n, l), a || (r = [
        we(
          t,
          "pointerdown",
          /*pointerdown_handler*/
          e[5]
        ),
        we(
          t,
          "pointerdown",
          /*onPointerDown*/
          e[3]
        )
      ], a = !0);
    },
    p(f, c) {
      c & /*x*/
      1 && v(
        t,
        "cx",
        /*x*/
        f[0]
      ), c & /*y*/
      2 && v(
        t,
        "cy",
        /*y*/
        f[1]
      ), c & /*handleRadius*/
      4 && o !== (o = 1.75 * /*handleRadius*/
      f[2]) && v(t, "r", o), c & /*x*/
      1 && v(
        s,
        "cx",
        /*x*/
        f[0]
      ), c & /*y*/
      2 && v(
        s,
        "cy",
        /*y*/
        f[1]
      ), c & /*handleRadius*/
      4 && v(
        s,
        "r",
        /*handleRadius*/
        f[2]
      ), c & /*x*/
      1 && v(
        l,
        "cx",
        /*x*/
        f[0]
      ), c & /*y*/
      2 && v(
        l,
        "cy",
        /*y*/
        f[1]
      ), c & /*handleRadius*/
      4 && v(
        l,
        "r",
        /*handleRadius*/
        f[2]
      );
    },
    d(f) {
      f && ae(n), a = !1, xe(r);
    }
  };
}
function Il(e) {
  let n;
  return {
    c() {
      n = re("circle"), v(
        n,
        "cx",
        /*x*/
        e[0]
      ), v(
        n,
        "cy",
        /*y*/
        e[1]
      ), v(
        n,
        "r",
        /*handleRadius*/
        e[2]
      );
    },
    m(t, o) {
      fe(t, n, o);
    },
    p(t, o) {
      o & /*x*/
      1 && v(
        n,
        "cx",
        /*x*/
        t[0]
      ), o & /*y*/
      2 && v(
        n,
        "cy",
        /*y*/
        t[1]
      ), o & /*handleRadius*/
      4 && v(
        n,
        "r",
        /*handleRadius*/
        t[2]
      );
    },
    d(t) {
      t && ae(n);
    }
  };
}
function Cl(e) {
  let n;
  function t(s, l) {
    return fn ? Il : Hl;
  }
  let o = t()(e);
  return {
    c() {
      o.c(), n = Wn();
    },
    m(s, l) {
      o.m(s, l), fe(s, n, l);
    },
    p(s, [l]) {
      o.p(s, l);
    },
    i: wn,
    o: wn,
    d(s) {
      s && ae(n), o.d(s);
    }
  };
}
function Rl(e, n, t) {
  let o, { x: s } = n, { y: l } = n, { scale: a } = n;
  const r = (c) => {
    c.pointerType;
  };
  function f(c) {
    Ge.call(this, e, c);
  }
  return e.$$set = (c) => {
    "x" in c && t(0, s = c.x), "y" in c && t(1, l = c.y), "scale" in c && t(4, a = c.scale);
  }, e.$$.update = () => {
    e.$$.dirty & /*scale*/
    16 && t(2, o = 4 / a);
  }, [s, l, o, r, a, f];
}
class js extends An {
  constructor(n) {
    super(), Nn(this, n, Rl, Cl, Rn, { x: 0, y: 1, scale: 4 });
  }
}
function ft(e) {
  const n = e.slice(), t = (
    /*midpoints*/
    n[10][
      /*visibleMidpoint*/
      n[6]
    ]
  );
  return n[28] = t.point, n;
}
function no(e, n, t) {
  const o = e.slice();
  return o[28] = n[t], o[30] = t, o;
}
function ct(e) {
  const n = e.slice(), t = (
    /*midpoints*/
    n[10][
      /*visibleMidpoint*/
      n[6]
    ]
  );
  return n[28] = t.point, n;
}
function ut(e) {
  const n = e.slice(), t = (
    /*midpoints*/
    n[10][
      /*visibleMidpoint*/
      n[6]
    ]
  );
  return n[28] = t.point, n;
}
function to(e) {
  let n, t, o, s;
  return {
    c() {
      n = re("circle"), v(n, "cx", t = /*point*/
      e[28][0]), v(n, "cy", o = /*point*/
      e[28][1]), v(n, "r", s = Yn / /*viewportScale*/
      e[3]), v(n, "class", "svelte-1h2slbm");
    },
    m(l, a) {
      fe(l, n, a);
    },
    p(l, a) {
      a[0] & /*midpoints, visibleMidpoint*/
      1088 && t !== (t = /*point*/
      l[28][0]) && v(n, "cx", t), a[0] & /*midpoints, visibleMidpoint*/
      1088 && o !== (o = /*point*/
      l[28][1]) && v(n, "cy", o), a[0] & /*viewportScale*/
      8 && s !== (s = Yn / /*viewportScale*/
      l[3]) && v(n, "r", s);
    },
    d(l) {
      l && ae(n);
    }
  };
}
function oo(e) {
  let n, t, o, s, l, a, r, f, c, u;
  return {
    c() {
      n = re("mask"), t = re("rect"), r = re("circle"), v(t, "x", o = /*mask*/
      e[9].x), v(t, "y", s = /*mask*/
      e[9].y), v(t, "width", l = /*mask*/
      e[9].w), v(t, "height", a = /*mask*/
      e[9].h), v(t, "class", "svelte-1h2slbm"), v(r, "cx", f = /*point*/
      e[28][0]), v(r, "cy", c = /*point*/
      e[28][1]), v(r, "r", u = Yn / /*viewportScale*/
      e[3]), v(r, "class", "svelte-1h2slbm"), v(n, "id", `${/*maskId*/
      e[19]}-inner`), v(n, "class", "a9s-polygon-editor-mask svelte-1h2slbm");
    },
    m(p, d) {
      fe(p, n, d), Me(n, t), Me(n, r);
    },
    p(p, d) {
      d[0] & /*mask*/
      512 && o !== (o = /*mask*/
      p[9].x) && v(t, "x", o), d[0] & /*mask*/
      512 && s !== (s = /*mask*/
      p[9].y) && v(t, "y", s), d[0] & /*mask*/
      512 && l !== (l = /*mask*/
      p[9].w) && v(t, "width", l), d[0] & /*mask*/
      512 && a !== (a = /*mask*/
      p[9].h) && v(t, "height", a), d[0] & /*midpoints, visibleMidpoint*/
      1088 && f !== (f = /*point*/
      p[28][0]) && v(r, "cx", f), d[0] & /*midpoints, visibleMidpoint*/
      1088 && c !== (c = /*point*/
      p[28][1]) && v(r, "cy", c), d[0] & /*viewportScale*/
      8 && u !== (u = Yn / /*viewportScale*/
      p[3]) && v(r, "r", u);
    },
    d(p) {
      p && ae(n);
    }
  };
}
function so(e) {
  let n, t;
  return n = new Ln({
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
    Ae(
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
      on(n.$$.fragment);
    },
    m(o, s) {
      Je(n, o, s), t = !0;
    },
    p(o, s) {
      e = o;
      const l = {};
      s[0] & /*geom*/
      32 && (l.x = /*point*/
      e[28][0]), s[0] & /*geom*/
      32 && (l.y = /*point*/
      e[28][1]), s[0] & /*viewportScale*/
      8 && (l.scale = /*viewportScale*/
      e[3]), s[0] & /*selectedCorners*/
      256 && (l.selected = /*selectedCorners*/
      e[8].includes(
        /*idx*/
        e[30]
      )), n.$set(l);
    },
    i(o) {
      t || (be(n.$$.fragment, o), t = !0);
    },
    o(o) {
      Pe(n.$$.fragment, o), t = !1;
    },
    d(o) {
      $e(n, o);
    }
  };
}
function lo(e) {
  let n, t;
  return n = new js({
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
    Ae(
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
      on(n.$$.fragment);
    },
    m(o, s) {
      Je(n, o, s), t = !0;
    },
    p(o, s) {
      e = o;
      const l = {};
      s[0] & /*midpoints, visibleMidpoint*/
      1088 && (l.x = /*point*/
      e[28][0]), s[0] & /*midpoints, visibleMidpoint*/
      1088 && (l.y = /*point*/
      e[28][1]), s[0] & /*viewportScale*/
      8 && (l.scale = /*viewportScale*/
      e[3]), n.$set(l);
    },
    i(o) {
      t || (be(n.$$.fragment, o), t = !0);
    },
    o(o) {
      Pe(n.$$.fragment, o), t = !1;
    },
    d(o) {
      $e(n, o);
    }
  };
}
function Nl(e) {
  let n, t, o, s, l, a, r, f, c, u, p, d, _, g, h, E, N, H, y, b, k, P = (
    /*visibleMidpoint*/
    e[6] !== void 0 && !/*isHandleHovered*/
    e[7] && to(ut(e))
  ), m = (
    /*visibleMidpoint*/
    e[6] !== void 0 && !/*isHandleHovered*/
    e[7] && oo(ct(e))
  ), L = dn(
    /*geom*/
    e[5].points
  ), w = [];
  for (let S = 0; S < L.length; S += 1)
    w[S] = so(no(e, L, S));
  const T = (S) => Pe(w[S], 1, 1, () => {
    w[S] = null;
  });
  let A = (
    /*visibleMidpoint*/
    e[6] !== void 0 && !/*isHandleHovered*/
    e[7] && lo(ft(e))
  );
  return {
    c() {
      n = re("defs"), t = re("mask"), o = re("rect"), f = re("polygon"), P && P.c(), m && m.c(), u = Ve(), p = re("polygon"), _ = Ve(), g = re("polygon"), E = Ve();
      for (let S = 0; S < w.length; S += 1)
        w[S].c();
      N = Ve(), A && A.c(), H = Wn(), v(o, "x", s = /*mask*/
      e[9].x), v(o, "y", l = /*mask*/
      e[9].y), v(o, "width", a = /*mask*/
      e[9].w), v(o, "height", r = /*mask*/
      e[9].h), v(o, "class", "svelte-1h2slbm"), v(f, "points", c = /*geom*/
      e[5].points.map(io).join(" ")), v(f, "class", "svelte-1h2slbm"), v(t, "id", `${/*maskId*/
      e[19]}-outer`), v(t, "class", "a9s-polygon-editor-mask svelte-1h2slbm"), v(p, "class", "a9s-outer"), v(p, "mask", `url(#${/*maskId*/
      e[19]}-outer)`), v(p, "points", d = /*geom*/
      e[5].points.map(ro).join(" ")), v(g, "class", "a9s-inner a9s-shape-handle"), v(g, "mask", `url(#${/*maskId*/
      e[19]}-inner)`), v(
        g,
        "style",
        /*computedStyle*/
        e[1]
      ), v(g, "points", h = /*geom*/
      e[5].points.map(ao).join(" "));
    },
    m(S, X) {
      fe(S, n, X), Me(n, t), Me(t, o), Me(t, f), P && P.m(t, null), m && m.m(n, null), fe(S, u, X), fe(S, p, X), fe(S, _, X), fe(S, g, X), fe(S, E, X);
      for (let I = 0; I < w.length; I += 1)
        w[I] && w[I].m(S, X);
      fe(S, N, X), A && A.m(S, X), fe(S, H, X), y = !0, b || (k = [
        we(
          p,
          "pointerup",
          /*onShapePointerUp*/
          e[14]
        ),
        we(p, "pointerdown", function() {
          Ae(
            /*grab*/
            e[27]("SHAPE")
          ) && e[27]("SHAPE").apply(this, arguments);
        }),
        we(
          g,
          "pointermove",
          /*onPointerMove*/
          e[13]
        ),
        we(
          g,
          "pointerup",
          /*onShapePointerUp*/
          e[14]
        ),
        we(g, "pointerdown", function() {
          Ae(
            /*grab*/
            e[27]("SHAPE")
          ) && e[27]("SHAPE").apply(this, arguments);
        })
      ], b = !0);
    },
    p(S, X) {
      if (e = S, (!y || X[0] & /*mask*/
      512 && s !== (s = /*mask*/
      e[9].x)) && v(o, "x", s), (!y || X[0] & /*mask*/
      512 && l !== (l = /*mask*/
      e[9].y)) && v(o, "y", l), (!y || X[0] & /*mask*/
      512 && a !== (a = /*mask*/
      e[9].w)) && v(o, "width", a), (!y || X[0] & /*mask*/
      512 && r !== (r = /*mask*/
      e[9].h)) && v(o, "height", r), (!y || X[0] & /*geom*/
      32 && c !== (c = /*geom*/
      e[5].points.map(io).join(" "))) && v(f, "points", c), /*visibleMidpoint*/
      e[6] !== void 0 && !/*isHandleHovered*/
      e[7] ? P ? P.p(ut(e), X) : (P = to(ut(e)), P.c(), P.m(t, null)) : P && (P.d(1), P = null), /*visibleMidpoint*/
      e[6] !== void 0 && !/*isHandleHovered*/
      e[7] ? m ? m.p(ct(e), X) : (m = oo(ct(e)), m.c(), m.m(n, null)) : m && (m.d(1), m = null), (!y || X[0] & /*geom*/
      32 && d !== (d = /*geom*/
      e[5].points.map(ro).join(" "))) && v(p, "points", d), (!y || X[0] & /*computedStyle*/
      2) && v(
        g,
        "style",
        /*computedStyle*/
        e[1]
      ), (!y || X[0] & /*geom*/
      32 && h !== (h = /*geom*/
      e[5].points.map(ao).join(" "))) && v(g, "points", h), X[0] & /*geom, viewportScale, selectedCorners, onEnterHandle, onLeaveHandle, onHandlePointerDown, grab, onHandlePointerUp*/
      134322472) {
        L = dn(
          /*geom*/
          e[5].points
        );
        let I;
        for (I = 0; I < L.length; I += 1) {
          const O = no(e, L, I);
          w[I] ? (w[I].p(O, X), be(w[I], 1)) : (w[I] = so(O), w[I].c(), be(w[I], 1), w[I].m(N.parentNode, N));
        }
        for (In(), I = L.length; I < w.length; I += 1)
          T(I);
        Cn();
      }
      e[6] !== void 0 && !/*isHandleHovered*/
      e[7] ? A ? (A.p(ft(e), X), X[0] & /*visibleMidpoint, isHandleHovered*/
      192 && be(A, 1)) : (A = lo(ft(e)), A.c(), be(A, 1), A.m(H.parentNode, H)) : A && (In(), Pe(A, 1, 1, () => {
        A = null;
      }), Cn());
    },
    i(S) {
      if (!y) {
        for (let X = 0; X < L.length; X += 1)
          be(w[X]);
        be(A), y = !0;
      }
    },
    o(S) {
      w = w.filter(Boolean);
      for (let X = 0; X < w.length; X += 1)
        Pe(w[X]);
      Pe(A), y = !1;
    },
    d(S) {
      S && (ae(n), ae(u), ae(p), ae(_), ae(g), ae(E), ae(N), ae(H)), P && P.d(), m && m.d(), ot(w, S), A && A.d(S), b = !1, xe(k);
    }
  };
}
function Al(e) {
  let n, t;
  return n = new Gt({
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
          Nl,
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
      on(n.$$.fragment);
    },
    m(o, s) {
      Je(n, o, s), t = !0;
    },
    p(o, s) {
      const l = {};
      s[0] & /*shape*/
      1 && (l.shape = /*shape*/
      o[0]), s[0] & /*transform*/
      4 && (l.transform = /*transform*/
      o[2]), s[0] & /*svgEl*/
      16 && (l.svgEl = /*svgEl*/
      o[4]), s[0] & /*midpoints, visibleMidpoint, viewportScale, isHandleHovered, geom, selectedCorners, grab, computedStyle, mask*/
      134219754 | s[1] & /*$$scope*/
      1 && (l.$$scope = { dirty: s, ctx: o }), n.$set(l);
    },
    i(o) {
      t || (be(n.$$.fragment, o), t = !0);
    },
    o(o) {
      Pe(n.$$.fragment, o), t = !1;
    },
    d(o) {
      $e(n, o);
    }
  };
}
const Dl = 250, Xl = 1e3, jl = 12, Yn = 4.5, io = (e) => e.join(","), ro = (e) => e.join(","), ao = (e) => e.join(",");
function Bl(e, n, t) {
  let o, s, l;
  const a = Ut();
  let { shape: r } = n, { computedStyle: f } = n, { transform: c } = n, { viewportScale: u = 1 } = n, { svgEl: p } = n, d, _ = !1, g, h = [];
  const E = () => t(7, _ = !0), N = () => t(7, _ = !1), H = (I) => {
    if (h.length > 0 || !s.some((j) => j.visible)) {
      t(6, d = void 0);
      return;
    }
    const [O, z] = c.elementToImage(I.offsetX, I.offsetY), C = (j) => Math.pow(j[0] - O, 2) + Math.pow(j[1] - z, 2), G = o.points.reduce((j, V) => C(V) < C(j) ? V : j), F = s.filter((j) => j.visible).reduce((j, V) => C(V.point) < C(j.point) ? V : j), D = Math.pow(Xl / u, 2);
    C(G) < D || C(F.point) < D ? t(6, d = s.indexOf(F)) : t(6, d = void 0);
  }, y = () => {
    document.activeElement !== p && p.focus();
  }, b = () => {
    t(8, h = []), y();
  }, k = (I) => {
    t(7, _ = !0), I.preventDefault(), I.stopPropagation(), g = performance.now();
  }, P = (I) => (O) => {
    if (!g || fn || performance.now() - g > Dl) return;
    const z = h.includes(I);
    O.metaKey || O.ctrlKey || O.shiftKey ? z ? t(8, h = h.filter((C) => C !== I)) : t(8, h = [...h, I]) : z && h.length > 1 ? t(8, h = [I]) : z ? t(8, h = []) : t(8, h = [I]), y();
  }, m = (I, O, z) => {
    y();
    let C;
    const G = I.geometry;
    h.length > 1 ? C = G.points.map(([D, j], V) => h.includes(V) ? [D + z[0], j + z[1]] : [D, j]) : O === "SHAPE" ? C = G.points.map(([D, j]) => [D + z[0], j + z[1]]) : C = G.points.map(([D, j], V) => O === `HANDLE-${V}` ? [D + z[0], j + z[1]] : [D, j]);
    const F = Xe(C);
    return { ...I, geometry: { points: C, bounds: F } };
  }, L = (I) => async (O) => {
    O.stopPropagation();
    const z = [
      ...o.points.slice(0, I + 1),
      s[I].point,
      ...o.points.slice(I + 1)
    ], C = Xe(z);
    a("change", { ...r, geometry: { points: z, bounds: C } }), await As();
    const G = [...document.querySelectorAll(".a9s-handle")][I + 1];
    if (G != null && G.firstChild) {
      const F = new PointerEvent(
        "pointerdown",
        {
          bubbles: !0,
          cancelable: !0,
          clientX: O.clientX,
          clientY: O.clientY,
          pointerId: O.pointerId,
          pointerType: O.pointerType,
          isPrimary: O.isPrimary,
          buttons: O.buttons
        }
      );
      G.firstChild.dispatchEvent(F);
    }
  }, w = () => {
    if (o.points.length - h.length < 3) return;
    const I = o.points.filter((z, C) => !h.includes(C)), O = Xe(I);
    a("change", { ...r, geometry: { points: I, bounds: O } }), t(8, h = []);
  };
  Cs(() => {
    if (fn) return;
    const I = (O) => {
      (O.key === "Delete" || O.key === "Backspace") && (O.preventDefault(), w());
    };
    return p.addEventListener("pointermove", H), p.addEventListener("keydown", I), () => {
      p.removeEventListener("pointermove", H), p.removeEventListener("keydown", I);
    };
  });
  const T = `polygon-mask-${Math.random().toString(36).substring(2, 12)}`;
  function A(I) {
    Ge.call(this, e, I);
  }
  function S(I) {
    Ge.call(this, e, I);
  }
  function X(I) {
    Ge.call(this, e, I);
  }
  return e.$$set = (I) => {
    "shape" in I && t(0, r = I.shape), "computedStyle" in I && t(1, f = I.computedStyle), "transform" in I && t(2, c = I.transform), "viewportScale" in I && t(3, u = I.viewportScale), "svgEl" in I && t(4, p = I.svgEl);
  }, e.$$.update = () => {
    e.$$.dirty[0] & /*shape*/
    1 && t(5, o = r.geometry), e.$$.dirty[0] & /*geom, viewportScale*/
    40 && t(10, s = fn ? [] : o.points.map((I, O) => {
      const z = O === o.points.length - 1 ? o.points[0] : o.points[O + 1], C = (I[0] + z[0]) / 2, G = (I[1] + z[1]) / 2, F = Math.sqrt(Math.pow(z[0] - C, 2) + Math.pow(z[1] - G, 2)) > jl / u;
      return { point: [C, G], visible: F };
    })), e.$$.dirty[0] & /*geom, viewportScale*/
    40 && t(9, l = bn(o.bounds, Yn / u));
  }, [
    r,
    f,
    c,
    u,
    p,
    o,
    d,
    _,
    h,
    l,
    s,
    E,
    N,
    H,
    b,
    k,
    P,
    m,
    L,
    T,
    A,
    S,
    X
  ];
}
class Ul extends An {
  constructor(n) {
    super(), Nn(
      this,
      n,
      Bl,
      Al,
      Rn,
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
function Gl(e) {
  let n, t, o, s, l, a, r, f, c, u, p, d, _, g, h, E, N, H, y, b, k, P, m, L, w, T, A, S, X, I, O, z, C, G, F, D, j, V, J, ee, W, se, ve, oe, He, ce, Ee, ue, je, pe, Be, Se, K, q, Q;
  return ce = new Ln({
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
  }), ce.$on("pointerdown", function() {
    Ae(
      /*grab*/
      e[12]("TOP_LEFT")
    ) && e[12]("TOP_LEFT").apply(this, arguments);
  }), ue = new Ln({
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
    Ae(
      /*grab*/
      e[12]("TOP_RIGHT")
    ) && e[12]("TOP_RIGHT").apply(this, arguments);
  }), pe = new Ln({
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
  }), pe.$on("pointerdown", function() {
    Ae(
      /*grab*/
      e[12]("BOTTOM_RIGHT")
    ) && e[12]("BOTTOM_RIGHT").apply(this, arguments);
  }), Se = new Ln({
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
  }), Se.$on("pointerdown", function() {
    Ae(
      /*grab*/
      e[12]("BOTTOM_LEFT")
    ) && e[12]("BOTTOM_LEFT").apply(this, arguments);
  }), {
    c() {
      n = re("defs"), t = re("mask"), o = re("rect"), f = re("rect"), _ = Ve(), g = re("rect"), y = Ve(), b = re("rect"), w = Ve(), T = re("rect"), I = Ve(), O = re("rect"), F = Ve(), D = re("rect"), ee = Ve(), W = re("rect"), He = Ve(), on(ce.$$.fragment), Ee = Ve(), on(ue.$$.fragment), je = Ve(), on(pe.$$.fragment), Be = Ve(), on(Se.$$.fragment), v(o, "class", "rect-mask-bg svelte-1njczvj"), v(o, "x", s = /*mask*/
      e[6].x), v(o, "y", l = /*mask*/
      e[6].y), v(o, "width", a = /*mask*/
      e[6].w), v(o, "height", r = /*mask*/
      e[6].h), v(f, "class", "rect-mask-fg svelte-1njczvj"), v(f, "x", c = /*geom*/
      e[5].x), v(f, "y", u = /*geom*/
      e[5].y), v(f, "width", p = /*geom*/
      e[5].w), v(f, "height", d = /*geom*/
      e[5].h), v(
        t,
        "id",
        /*maskId*/
        e[8]
      ), v(t, "class", "a9s-rectangle-editor-mask svelte-1njczvj"), v(g, "class", "a9s-outer"), v(g, "mask", `url(#${/*maskId*/
      e[8]})`), v(g, "x", h = /*geom*/
      e[5].x), v(g, "y", E = /*geom*/
      e[5].y), v(g, "width", N = /*geom*/
      e[5].w), v(g, "height", H = /*geom*/
      e[5].h), v(b, "class", "a9s-inner a9s-shape-handle"), v(
        b,
        "style",
        /*computedStyle*/
        e[1]
      ), v(b, "x", k = /*geom*/
      e[5].x), v(b, "y", P = /*geom*/
      e[5].y), v(b, "width", m = /*geom*/
      e[5].w), v(b, "height", L = /*geom*/
      e[5].h), v(T, "class", "a9s-edge-handle a9s-edge-handle-top"), v(T, "x", A = /*geom*/
      e[5].x), v(T, "y", S = /*geom*/
      e[5].y), v(T, "height", 1), v(T, "width", X = /*geom*/
      e[5].w), v(O, "class", "a9s-edge-handle a9s-edge-handle-right"), v(O, "x", z = /*geom*/
      e[5].x + /*geom*/
      e[5].w), v(O, "y", C = /*geom*/
      e[5].y), v(O, "height", G = /*geom*/
      e[5].h), v(O, "width", 1), v(D, "class", "a9s-edge-handle a9s-edge-handle-bottom"), v(D, "x", j = /*geom*/
      e[5].x), v(D, "y", V = /*geom*/
      e[5].y + /*geom*/
      e[5].h), v(D, "height", 1), v(D, "width", J = /*geom*/
      e[5].w), v(W, "class", "a9s-edge-handle a9s-edge-handle-left"), v(W, "x", se = /*geom*/
      e[5].x), v(W, "y", ve = /*geom*/
      e[5].y), v(W, "height", oe = /*geom*/
      e[5].h), v(W, "width", 1);
    },
    m(R, M) {
      fe(R, n, M), Me(n, t), Me(t, o), Me(t, f), fe(R, _, M), fe(R, g, M), fe(R, y, M), fe(R, b, M), fe(R, w, M), fe(R, T, M), fe(R, I, M), fe(R, O, M), fe(R, F, M), fe(R, D, M), fe(R, ee, M), fe(R, W, M), fe(R, He, M), Je(ce, R, M), fe(R, Ee, M), Je(ue, R, M), fe(R, je, M), Je(pe, R, M), fe(R, Be, M), Je(Se, R, M), K = !0, q || (Q = [
        we(g, "pointerdown", function() {
          Ae(
            /*grab*/
            e[12]("SHAPE")
          ) && e[12]("SHAPE").apply(this, arguments);
        }),
        we(b, "pointerdown", function() {
          Ae(
            /*grab*/
            e[12]("SHAPE")
          ) && e[12]("SHAPE").apply(this, arguments);
        }),
        we(T, "pointerdown", function() {
          Ae(
            /*grab*/
            e[12]("TOP")
          ) && e[12]("TOP").apply(this, arguments);
        }),
        we(O, "pointerdown", function() {
          Ae(
            /*grab*/
            e[12]("RIGHT")
          ) && e[12]("RIGHT").apply(this, arguments);
        }),
        we(D, "pointerdown", function() {
          Ae(
            /*grab*/
            e[12]("BOTTOM")
          ) && e[12]("BOTTOM").apply(this, arguments);
        }),
        we(W, "pointerdown", function() {
          Ae(
            /*grab*/
            e[12]("LEFT")
          ) && e[12]("LEFT").apply(this, arguments);
        })
      ], q = !0);
    },
    p(R, M) {
      e = R, (!K || M & /*mask*/
      64 && s !== (s = /*mask*/
      e[6].x)) && v(o, "x", s), (!K || M & /*mask*/
      64 && l !== (l = /*mask*/
      e[6].y)) && v(o, "y", l), (!K || M & /*mask*/
      64 && a !== (a = /*mask*/
      e[6].w)) && v(o, "width", a), (!K || M & /*mask*/
      64 && r !== (r = /*mask*/
      e[6].h)) && v(o, "height", r), (!K || M & /*geom*/
      32 && c !== (c = /*geom*/
      e[5].x)) && v(f, "x", c), (!K || M & /*geom*/
      32 && u !== (u = /*geom*/
      e[5].y)) && v(f, "y", u), (!K || M & /*geom*/
      32 && p !== (p = /*geom*/
      e[5].w)) && v(f, "width", p), (!K || M & /*geom*/
      32 && d !== (d = /*geom*/
      e[5].h)) && v(f, "height", d), (!K || M & /*geom*/
      32 && h !== (h = /*geom*/
      e[5].x)) && v(g, "x", h), (!K || M & /*geom*/
      32 && E !== (E = /*geom*/
      e[5].y)) && v(g, "y", E), (!K || M & /*geom*/
      32 && N !== (N = /*geom*/
      e[5].w)) && v(g, "width", N), (!K || M & /*geom*/
      32 && H !== (H = /*geom*/
      e[5].h)) && v(g, "height", H), (!K || M & /*computedStyle*/
      2) && v(
        b,
        "style",
        /*computedStyle*/
        e[1]
      ), (!K || M & /*geom*/
      32 && k !== (k = /*geom*/
      e[5].x)) && v(b, "x", k), (!K || M & /*geom*/
      32 && P !== (P = /*geom*/
      e[5].y)) && v(b, "y", P), (!K || M & /*geom*/
      32 && m !== (m = /*geom*/
      e[5].w)) && v(b, "width", m), (!K || M & /*geom*/
      32 && L !== (L = /*geom*/
      e[5].h)) && v(b, "height", L), (!K || M & /*geom*/
      32 && A !== (A = /*geom*/
      e[5].x)) && v(T, "x", A), (!K || M & /*geom*/
      32 && S !== (S = /*geom*/
      e[5].y)) && v(T, "y", S), (!K || M & /*geom*/
      32 && X !== (X = /*geom*/
      e[5].w)) && v(T, "width", X), (!K || M & /*geom*/
      32 && z !== (z = /*geom*/
      e[5].x + /*geom*/
      e[5].w)) && v(O, "x", z), (!K || M & /*geom*/
      32 && C !== (C = /*geom*/
      e[5].y)) && v(O, "y", C), (!K || M & /*geom*/
      32 && G !== (G = /*geom*/
      e[5].h)) && v(O, "height", G), (!K || M & /*geom*/
      32 && j !== (j = /*geom*/
      e[5].x)) && v(D, "x", j), (!K || M & /*geom*/
      32 && V !== (V = /*geom*/
      e[5].y + /*geom*/
      e[5].h)) && v(D, "y", V), (!K || M & /*geom*/
      32 && J !== (J = /*geom*/
      e[5].w)) && v(D, "width", J), (!K || M & /*geom*/
      32 && se !== (se = /*geom*/
      e[5].x)) && v(W, "x", se), (!K || M & /*geom*/
      32 && ve !== (ve = /*geom*/
      e[5].y)) && v(W, "y", ve), (!K || M & /*geom*/
      32 && oe !== (oe = /*geom*/
      e[5].h)) && v(W, "height", oe);
      const _e = {};
      M & /*geom*/
      32 && (_e.x = /*geom*/
      e[5].x), M & /*geom*/
      32 && (_e.y = /*geom*/
      e[5].y), M & /*viewportScale*/
      8 && (_e.scale = /*viewportScale*/
      e[3]), ce.$set(_e);
      const ke = {};
      M & /*geom*/
      32 && (ke.x = /*geom*/
      e[5].x + /*geom*/
      e[5].w), M & /*geom*/
      32 && (ke.y = /*geom*/
      e[5].y), M & /*viewportScale*/
      8 && (ke.scale = /*viewportScale*/
      e[3]), ue.$set(ke);
      const ie = {};
      M & /*geom*/
      32 && (ie.x = /*geom*/
      e[5].x + /*geom*/
      e[5].w), M & /*geom*/
      32 && (ie.y = /*geom*/
      e[5].y + /*geom*/
      e[5].h), M & /*viewportScale*/
      8 && (ie.scale = /*viewportScale*/
      e[3]), pe.$set(ie);
      const ye = {};
      M & /*geom*/
      32 && (ye.x = /*geom*/
      e[5].x), M & /*geom*/
      32 && (ye.y = /*geom*/
      e[5].y + /*geom*/
      e[5].h), M & /*viewportScale*/
      8 && (ye.scale = /*viewportScale*/
      e[3]), Se.$set(ye);
    },
    i(R) {
      K || (be(ce.$$.fragment, R), be(ue.$$.fragment, R), be(pe.$$.fragment, R), be(Se.$$.fragment, R), K = !0);
    },
    o(R) {
      Pe(ce.$$.fragment, R), Pe(ue.$$.fragment, R), Pe(pe.$$.fragment, R), Pe(Se.$$.fragment, R), K = !1;
    },
    d(R) {
      R && (ae(n), ae(_), ae(g), ae(y), ae(b), ae(w), ae(T), ae(I), ae(O), ae(F), ae(D), ae(ee), ae(W), ae(He), ae(Ee), ae(je), ae(Be)), $e(ce, R), $e(ue, R), $e(pe, R), $e(Se, R), q = !1, xe(Q);
    }
  };
}
function Yl(e) {
  let n, t;
  return n = new Gt({
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
          Gl,
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
      on(n.$$.fragment);
    },
    m(o, s) {
      Je(n, o, s), t = !0;
    },
    p(o, [s]) {
      const l = {};
      s & /*shape*/
      1 && (l.shape = /*shape*/
      o[0]), s & /*transform*/
      4 && (l.transform = /*transform*/
      o[2]), s & /*svgEl*/
      16 && (l.svgEl = /*svgEl*/
      o[4]), s & /*$$scope, geom, viewportScale, grab, computedStyle, mask*/
      12394 && (l.$$scope = { dirty: s, ctx: o }), n.$set(l);
    },
    i(o) {
      t || (be(n.$$.fragment, o), t = !0);
    },
    o(o) {
      Pe(n.$$.fragment, o), t = !1;
    },
    d(o) {
      $e(n, o);
    }
  };
}
function ql(e, n, t) {
  let o, s, { shape: l } = n, { computedStyle: a } = n, { transform: r } = n, { viewportScale: f = 1 } = n, { svgEl: c } = n;
  const u = (h, E, N) => {
    const H = h.geometry.bounds;
    let [y, b] = [H.minX, H.minY], [k, P] = [H.maxX, H.maxY];
    const [m, L] = N;
    if (E === "SHAPE")
      y += m, k += m, b += L, P += L;
    else {
      switch (E) {
        case "TOP":
        case "TOP_LEFT":
        case "TOP_RIGHT": {
          b += L;
          break;
        }
        case "BOTTOM":
        case "BOTTOM_LEFT":
        case "BOTTOM_RIGHT": {
          P += L;
          break;
        }
      }
      switch (E) {
        case "LEFT":
        case "TOP_LEFT":
        case "BOTTOM_LEFT": {
          y += m;
          break;
        }
        case "RIGHT":
        case "TOP_RIGHT":
        case "BOTTOM_RIGHT": {
          k += m;
          break;
        }
      }
    }
    const w = Math.min(y, k), T = Math.min(b, P), A = Math.abs(k - y), S = Math.abs(P - b);
    return {
      ...h,
      geometry: {
        x: w,
        y: T,
        w: A,
        h: S,
        bounds: {
          minX: w,
          minY: T,
          maxX: w + A,
          maxY: T + S
        }
      }
    };
  }, p = `rect-mask-${Math.random().toString(36).substring(2, 12)}`;
  function d(h) {
    Ge.call(this, e, h);
  }
  function _(h) {
    Ge.call(this, e, h);
  }
  function g(h) {
    Ge.call(this, e, h);
  }
  return e.$$set = (h) => {
    "shape" in h && t(0, l = h.shape), "computedStyle" in h && t(1, a = h.computedStyle), "transform" in h && t(2, r = h.transform), "viewportScale" in h && t(3, f = h.viewportScale), "svgEl" in h && t(4, c = h.svgEl);
  }, e.$$.update = () => {
    e.$$.dirty & /*shape*/
    1 && t(5, o = l.geometry), e.$$.dirty & /*geom, viewportScale*/
    40 && t(6, s = bn(o.bounds, 2 / f));
  }, [
    l,
    a,
    r,
    f,
    c,
    o,
    s,
    u,
    p,
    d,
    _,
    g
  ];
}
class zl extends An {
  constructor(n) {
    super(), Nn(this, n, ql, Yl, Rn, {
      shape: 0,
      computedStyle: 1,
      transform: 2,
      viewportScale: 3,
      svgEl: 4
    });
  }
}
var fo = Object.prototype.hasOwnProperty;
function Nt(e, n) {
  var t, o;
  if (e === n) return !0;
  if (e && n && (t = e.constructor) === n.constructor) {
    if (t === Date) return e.getTime() === n.getTime();
    if (t === RegExp) return e.toString() === n.toString();
    if (t === Array) {
      if ((o = e.length) === n.length)
        for (; o-- && Nt(e[o], n[o]); ) ;
      return o === -1;
    }
    if (!t || typeof e == "object") {
      o = 0;
      for (t in e)
        if (fo.call(e, t) && ++o && !fo.call(n, t) || !(t in n) || !Nt(e[t], n[t])) return !1;
      return Object.keys(n).length === o;
    }
  }
  return e !== e && n !== n;
}
const Vl = 12, Kl = (e, n) => e.polygons.reduce((t, o, s) => {
  const l = o.rings.reduce((a, r, f) => {
    const c = r.points.map((u, p) => {
      const d = p === r.points.length - 1 ? r.points[0] : r.points[p + 1], _ = (u[0] + d[0]) / 2, g = (u[1] + d[1]) / 2, h = Math.sqrt(
        Math.pow(d[0] - _, 2) + Math.pow(d[1] - g, 2)
      ) > Vl / n;
      return { point: [_, g], visible: h, elementIdx: s, ringIdx: f, pointIdx: p };
    });
    return [...a, ...c];
  }, []);
  return [...t, ...l];
}, []);
function pt(e) {
  const n = e.slice(), t = (
    /*midpoints*/
    n[10][
      /*visibleMidpoint*/
      n[6]
    ]
  );
  return n[29] = t.point, n;
}
function co(e, n, t) {
  const o = e.slice();
  return o[30] = n[t], o[32] = t, o;
}
function uo(e, n, t) {
  const o = e.slice();
  return o[33] = n[t], o[35] = t, o;
}
function po(e, n, t) {
  const o = e.slice();
  return o[29] = n[t], o[37] = t, o;
}
function ht(e) {
  const n = e.slice(), t = (
    /*midpoints*/
    n[10][
      /*visibleMidpoint*/
      n[6]
    ]
  );
  return n[29] = t.point, n;
}
function dt(e) {
  const n = e.slice(), t = (
    /*midpoints*/
    n[10][
      /*visibleMidpoint*/
      n[6]
    ]
  );
  return n[29] = t.point, n;
}
function ho(e) {
  let n, t, o, s;
  return {
    c() {
      n = re("circle"), v(n, "cx", t = /*point*/
      e[29][0]), v(n, "cy", o = /*point*/
      e[29][1]), v(n, "r", s = qn / /*viewportScale*/
      e[3]), v(n, "class", "svelte-1vxo6dc");
    },
    m(l, a) {
      fe(l, n, a);
    },
    p(l, a) {
      a[0] & /*midpoints, visibleMidpoint*/
      1088 && t !== (t = /*point*/
      l[29][0]) && v(n, "cx", t), a[0] & /*midpoints, visibleMidpoint*/
      1088 && o !== (o = /*point*/
      l[29][1]) && v(n, "cy", o), a[0] & /*viewportScale*/
      8 && s !== (s = qn / /*viewportScale*/
      l[3]) && v(n, "r", s);
    },
    d(l) {
      l && ae(n);
    }
  };
}
function mo(e) {
  let n, t, o, s, l, a, r, f, c, u;
  return {
    c() {
      n = re("mask"), t = re("rect"), r = re("circle"), v(t, "x", o = /*mask*/
      e[9].x), v(t, "y", s = /*mask*/
      e[9].y), v(t, "width", l = /*mask*/
      e[9].w), v(t, "height", a = /*mask*/
      e[9].h), v(t, "class", "svelte-1vxo6dc"), v(r, "cx", f = /*point*/
      e[29][0]), v(r, "cy", c = /*point*/
      e[29][1]), v(r, "r", u = qn / /*viewportScale*/
      e[3]), v(r, "class", "svelte-1vxo6dc"), v(n, "id", `${/*maskId*/
      e[18]}-${/*elementIdx*/
      e[32]}-inner`), v(n, "class", "a9s-multipolygon-editor-mask svelte-1vxo6dc");
    },
    m(p, d) {
      fe(p, n, d), Me(n, t), Me(n, r);
    },
    p(p, d) {
      d[0] & /*mask*/
      512 && o !== (o = /*mask*/
      p[9].x) && v(t, "x", o), d[0] & /*mask*/
      512 && s !== (s = /*mask*/
      p[9].y) && v(t, "y", s), d[0] & /*mask*/
      512 && l !== (l = /*mask*/
      p[9].w) && v(t, "width", l), d[0] & /*mask*/
      512 && a !== (a = /*mask*/
      p[9].h) && v(t, "height", a), d[0] & /*midpoints, visibleMidpoint*/
      1088 && f !== (f = /*point*/
      p[29][0]) && v(r, "cx", f), d[0] & /*midpoints, visibleMidpoint*/
      1088 && c !== (c = /*point*/
      p[29][1]) && v(r, "cy", c), d[0] & /*viewportScale*/
      8 && u !== (u = qn / /*viewportScale*/
      p[3]) && v(r, "r", u);
    },
    d(p) {
      p && ae(n);
    }
  };
}
function go(e) {
  let n, t;
  function o(...s) {
    return (
      /*func*/
      e[19](
        /*elementIdx*/
        e[32],
        /*ringIdx*/
        e[35],
        /*pointIdx*/
        e[37],
        ...s
      )
    );
  }
  return n = new Ln({
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
    Ae(
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
      on(n.$$.fragment);
    },
    m(s, l) {
      Je(n, s, l), t = !0;
    },
    p(s, l) {
      e = s;
      const a = {};
      l[0] & /*geom*/
      32 && (a.x = /*point*/
      e[29][0]), l[0] & /*geom*/
      32 && (a.y = /*point*/
      e[29][1]), l[0] & /*viewportScale*/
      8 && (a.scale = /*viewportScale*/
      e[3]), l[0] & /*selectedCorners*/
      256 && (a.selected = /*selectedCorners*/
      e[8].some(o)), n.$set(a);
    },
    i(s) {
      t || (be(n.$$.fragment, s), t = !0);
    },
    o(s) {
      Pe(n.$$.fragment, s), t = !1;
    },
    d(s) {
      $e(n, s);
    }
  };
}
function _o(e) {
  let n, t, o = dn(
    /*ring*/
    e[33].points
  ), s = [];
  for (let a = 0; a < o.length; a += 1)
    s[a] = go(po(e, o, a));
  const l = (a) => Pe(s[a], 1, 1, () => {
    s[a] = null;
  });
  return {
    c() {
      for (let a = 0; a < s.length; a += 1)
        s[a].c();
      n = Wn();
    },
    m(a, r) {
      for (let f = 0; f < s.length; f += 1)
        s[f] && s[f].m(a, r);
      fe(a, n, r), t = !0;
    },
    p(a, r) {
      if (r[0] & /*geom, viewportScale, selectedCorners, onEnterHandle, onLeaveHandle, onHandlePointerDown, grab, onHandlePointerUp*/
      268491048) {
        o = dn(
          /*ring*/
          a[33].points
        );
        let f;
        for (f = 0; f < o.length; f += 1) {
          const c = po(a, o, f);
          s[f] ? (s[f].p(c, r), be(s[f], 1)) : (s[f] = go(c), s[f].c(), be(s[f], 1), s[f].m(n.parentNode, n));
        }
        for (In(), f = o.length; f < s.length; f += 1)
          l(f);
        Cn();
      }
    },
    i(a) {
      if (!t) {
        for (let r = 0; r < o.length; r += 1)
          be(s[r]);
        t = !0;
      }
    },
    o(a) {
      s = s.filter(Boolean);
      for (let r = 0; r < s.length; r += 1)
        Pe(s[r]);
      t = !1;
    },
    d(a) {
      a && ae(n), ot(s, a);
    }
  };
}
function yo(e) {
  let n, t, o, s, l, a, r, f, c, u, p, d, _, g, h, E, N, H = (
    /*visibleMidpoint*/
    e[6] !== void 0 && !/*isHandleHovered*/
    e[7] && ho(dt(e))
  ), y = (
    /*visibleMidpoint*/
    e[6] !== void 0 && !/*isHandleHovered*/
    e[7] && mo(ht(e))
  ), b = dn(
    /*element*/
    e[30].rings
  ), k = [];
  for (let m = 0; m < b.length; m += 1)
    k[m] = _o(uo(e, b, m));
  const P = (m) => Pe(k[m], 1, 1, () => {
    k[m] = null;
  });
  return {
    c() {
      n = re("g"), t = re("defs"), o = re("mask"), s = re("rect"), c = re("path"), H && H.c(), y && y.c(), p = re("path"), _ = re("path");
      for (let m = 0; m < k.length; m += 1)
        k[m].c();
      v(s, "x", l = /*mask*/
      e[9].x), v(s, "y", a = /*mask*/
      e[9].y), v(s, "width", r = /*mask*/
      e[9].w), v(s, "height", f = /*mask*/
      e[9].h), v(s, "class", "svelte-1vxo6dc"), v(c, "d", u = En(
        /*element*/
        e[30]
      )), v(c, "class", "svelte-1vxo6dc"), v(o, "id", `${/*maskId*/
      e[18]}-${/*elementIdx*/
      e[32]}-outer`), v(o, "class", "a9s-multipolygon-editor-mask svelte-1vxo6dc"), v(p, "class", "a9s-outer"), v(p, "mask", `url(#${/*maskId*/
      e[18]}-${/*elementIdx*/
      e[32]}-outer)`), v(p, "fill-rule", "evenodd"), v(p, "d", d = En(
        /*element*/
        e[30]
      )), v(_, "class", "a9s-inner"), v(_, "mask", `url(#${/*maskId*/
      e[18]}-${/*elementIdx*/
      e[32]}-inner)`), v(
        _,
        "style",
        /*computedStyle*/
        e[1]
      ), v(_, "fill-rule", "evenodd"), v(_, "d", g = En(
        /*element*/
        e[30]
      ));
    },
    m(m, L) {
      fe(m, n, L), Me(n, t), Me(t, o), Me(o, s), Me(o, c), H && H.m(o, null), y && y.m(t, null), Me(n, p), Me(n, _);
      for (let w = 0; w < k.length; w += 1)
        k[w] && k[w].m(n, null);
      h = !0, E || (N = [
        we(
          p,
          "pointerup",
          /*onShapePointerUp*/
          e[13]
        ),
        we(p, "pointerdown", function() {
          Ae(
            /*grab*/
            e[28]("SHAPE")
          ) && e[28]("SHAPE").apply(this, arguments);
        }),
        we(
          _,
          "pointerup",
          /*onShapePointerUp*/
          e[13]
        ),
        we(_, "pointerdown", function() {
          Ae(
            /*grab*/
            e[28]("SHAPE")
          ) && e[28]("SHAPE").apply(this, arguments);
        })
      ], E = !0);
    },
    p(m, L) {
      if (e = m, (!h || L[0] & /*mask*/
      512 && l !== (l = /*mask*/
      e[9].x)) && v(s, "x", l), (!h || L[0] & /*mask*/
      512 && a !== (a = /*mask*/
      e[9].y)) && v(s, "y", a), (!h || L[0] & /*mask*/
      512 && r !== (r = /*mask*/
      e[9].w)) && v(s, "width", r), (!h || L[0] & /*mask*/
      512 && f !== (f = /*mask*/
      e[9].h)) && v(s, "height", f), (!h || L[0] & /*geom*/
      32 && u !== (u = En(
        /*element*/
        e[30]
      ))) && v(c, "d", u), /*visibleMidpoint*/
      e[6] !== void 0 && !/*isHandleHovered*/
      e[7] ? H ? H.p(dt(e), L) : (H = ho(dt(e)), H.c(), H.m(o, null)) : H && (H.d(1), H = null), /*visibleMidpoint*/
      e[6] !== void 0 && !/*isHandleHovered*/
      e[7] ? y ? y.p(ht(e), L) : (y = mo(ht(e)), y.c(), y.m(t, null)) : y && (y.d(1), y = null), (!h || L[0] & /*geom*/
      32 && d !== (d = En(
        /*element*/
        e[30]
      ))) && v(p, "d", d), (!h || L[0] & /*computedStyle*/
      2) && v(
        _,
        "style",
        /*computedStyle*/
        e[1]
      ), (!h || L[0] & /*geom*/
      32 && g !== (g = En(
        /*element*/
        e[30]
      ))) && v(_, "d", g), L[0] & /*geom, viewportScale, selectedCorners, onEnterHandle, onLeaveHandle, onHandlePointerDown, grab, onHandlePointerUp*/
      268491048) {
        b = dn(
          /*element*/
          e[30].rings
        );
        let w;
        for (w = 0; w < b.length; w += 1) {
          const T = uo(e, b, w);
          k[w] ? (k[w].p(T, L), be(k[w], 1)) : (k[w] = _o(T), k[w].c(), be(k[w], 1), k[w].m(n, null));
        }
        for (In(), w = b.length; w < k.length; w += 1)
          P(w);
        Cn();
      }
    },
    i(m) {
      if (!h) {
        for (let L = 0; L < b.length; L += 1)
          be(k[L]);
        h = !0;
      }
    },
    o(m) {
      k = k.filter(Boolean);
      for (let L = 0; L < k.length; L += 1)
        Pe(k[L]);
      h = !1;
    },
    d(m) {
      m && ae(n), H && H.d(), y && y.d(), ot(k, m), E = !1, xe(N);
    }
  };
}
function wo(e) {
  let n, t;
  return n = new js({
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
    Ae(
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
      on(n.$$.fragment);
    },
    m(o, s) {
      Je(n, o, s), t = !0;
    },
    p(o, s) {
      e = o;
      const l = {};
      s[0] & /*midpoints, visibleMidpoint*/
      1088 && (l.x = /*point*/
      e[29][0]), s[0] & /*midpoints, visibleMidpoint*/
      1088 && (l.y = /*point*/
      e[29][1]), s[0] & /*viewportScale*/
      8 && (l.scale = /*viewportScale*/
      e[3]), n.$set(l);
    },
    i(o) {
      t || (be(n.$$.fragment, o), t = !0);
    },
    o(o) {
      Pe(n.$$.fragment, o), t = !1;
    },
    d(o) {
      $e(n, o);
    }
  };
}
function Fl(e) {
  let n, t, o, s = dn(
    /*geom*/
    e[5].polygons
  ), l = [];
  for (let f = 0; f < s.length; f += 1)
    l[f] = yo(co(e, s, f));
  const a = (f) => Pe(l[f], 1, 1, () => {
    l[f] = null;
  });
  let r = (
    /*visibleMidpoint*/
    e[6] !== void 0 && !/*isHandleHovered*/
    e[7] && wo(pt(e))
  );
  return {
    c() {
      for (let f = 0; f < l.length; f += 1)
        l[f].c();
      n = Ve(), r && r.c(), t = Wn();
    },
    m(f, c) {
      for (let u = 0; u < l.length; u += 1)
        l[u] && l[u].m(f, c);
      fe(f, n, c), r && r.m(f, c), fe(f, t, c), o = !0;
    },
    p(f, c) {
      if (c[0] & /*geom, viewportScale, selectedCorners, onEnterHandle, onLeaveHandle, onHandlePointerDown, grab, onHandlePointerUp, maskId, computedStyle, onShapePointerUp, midpoints, visibleMidpoint, mask, isHandleHovered*/
      268763114) {
        s = dn(
          /*geom*/
          f[5].polygons
        );
        let u;
        for (u = 0; u < s.length; u += 1) {
          const p = co(f, s, u);
          l[u] ? (l[u].p(p, c), be(l[u], 1)) : (l[u] = yo(p), l[u].c(), be(l[u], 1), l[u].m(n.parentNode, n));
        }
        for (In(), u = s.length; u < l.length; u += 1)
          a(u);
        Cn();
      }
      f[6] !== void 0 && !/*isHandleHovered*/
      f[7] ? r ? (r.p(pt(f), c), c[0] & /*visibleMidpoint, isHandleHovered*/
      192 && be(r, 1)) : (r = wo(pt(f)), r.c(), be(r, 1), r.m(t.parentNode, t)) : r && (In(), Pe(r, 1, 1, () => {
        r = null;
      }), Cn());
    },
    i(f) {
      if (!o) {
        for (let c = 0; c < s.length; c += 1)
          be(l[c]);
        be(r), o = !0;
      }
    },
    o(f) {
      l = l.filter(Boolean);
      for (let c = 0; c < l.length; c += 1)
        Pe(l[c]);
      Pe(r), o = !1;
    },
    d(f) {
      f && (ae(n), ae(t)), ot(l, f), r && r.d(f);
    }
  };
}
function Wl(e) {
  let n, t;
  return n = new Gt({
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
          Fl,
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
      on(n.$$.fragment);
    },
    m(o, s) {
      Je(n, o, s), t = !0;
    },
    p(o, s) {
      const l = {};
      s[0] & /*shape*/
      1 && (l.shape = /*shape*/
      o[0]), s[0] & /*transform*/
      4 && (l.transform = /*transform*/
      o[2]), s[0] & /*svgEl*/
      16 && (l.svgEl = /*svgEl*/
      o[4]), s[0] & /*midpoints, visibleMidpoint, viewportScale, isHandleHovered, geom, selectedCorners, grab, computedStyle, mask*/
      268437482 | s[1] & /*$$scope*/
      128 && (l.$$scope = { dirty: s, ctx: o }), n.$set(l);
    },
    i(o) {
      t || (be(n.$$.fragment, o), t = !0);
    },
    o(o) {
      Pe(n.$$.fragment, o), t = !1;
    },
    d(o) {
      $e(n, o);
    }
  };
}
const Zl = 250, Ql = 1e3, qn = 4.5;
function Jl(e, n, t) {
  let o, s, l;
  const a = Ut();
  let { shape: r } = n, { computedStyle: f } = n, { transform: c } = n, { viewportScale: u = 1 } = n, { svgEl: p } = n, d, _ = !1, g, h = [];
  const E = () => t(7, _ = !0), N = () => t(7, _ = !1), H = (O) => {
    if (h.length > 0 || !s.some((V) => V.visible)) {
      t(6, d = void 0);
      return;
    }
    const [z, C] = c.elementToImage(O.offsetX, O.offsetY), G = (V) => Math.pow(V[0] - z, 2) + Math.pow(V[1] - C, 2), F = hl(o).reduce((V, J) => G(J) < G(V) ? J : V), D = s.filter((V) => V.visible).reduce((V, J) => G(J.point) < G(V.point) ? J : V), j = Math.pow(Ql / u, 2);
    G(F) < j || G(D.point) < j ? t(6, d = s.indexOf(D)) : t(6, d = void 0);
  }, y = () => {
    document.activeElement !== p && p.focus();
  }, b = () => {
    t(8, h = []), y();
  }, k = (O) => {
    t(7, _ = !0), O.preventDefault(), O.stopPropagation(), g = performance.now();
  }, P = (O, z, C) => (G) => {
    if (!g || fn || performance.now() - g > Zl) return;
    const F = (j) => j.polygon === O && j.ring === z && j.point === C, D = h.some(F);
    G.metaKey || G.ctrlKey || G.shiftKey ? D ? t(8, h = h.filter((j) => !F(j))) : t(8, h = [...h, { polygon: O, ring: z, point: C }]) : D && h.length > 1 ? t(8, h = [{ polygon: O, ring: z, point: C }]) : D ? t(8, h = []) : t(8, h = [{ polygon: O, ring: z, point: C }]), y();
  }, m = (O, z, C) => {
    y();
    const G = O.geometry.polygons;
    let F;
    if (z === "SHAPE")
      F = G.map((D) => {
        const j = D.rings.map((J, ee) => ({ points: J.points.map((W, se) => [W[0] + C[0], W[1] + C[1]]) })), V = Xe(j[0].points);
        return { rings: j, bounds: V };
      });
    else {
      const [D, j, V, J] = z.split("-").map((ee) => parseInt(ee));
      F = G.map((ee, W) => {
        if (W === j) {
          const se = ee.rings.map((oe, He) => He === V ? { points: oe.points.map((ce, Ee) => Ee === J ? [ce[0] + C[0], ce[1] + C[1]] : ce) } : oe), ve = Xe(se[0].points);
          return { rings: se, bounds: ve };
        } else
          return ee;
      });
    }
    return {
      ...O,
      geometry: {
        polygons: F,
        bounds: at(F)
      }
    };
  }, L = (O) => async (z) => {
    z.stopPropagation();
    const C = s[O], G = o.polygons.map((D, j) => {
      if (j === C.elementIdx) {
        const V = D.rings.map((ee, W) => W === C.ringIdx ? { points: [
          ...ee.points.slice(0, C.pointIdx + 1),
          C.point,
          ...ee.points.slice(C.pointIdx + 1)
        ] } : ee), J = Xe(V[0].points);
        return { rings: V, bounds: J };
      } else
        return D;
    });
    a("change", {
      ...r,
      geometry: {
        polygons: G,
        bounds: at(G)
      }
    }), await As();
    const F = [...document.querySelectorAll(".a9s-handle")][O + 1];
    if (F != null && F.firstChild) {
      const D = new PointerEvent(
        "pointerdown",
        {
          bubbles: !0,
          cancelable: !0,
          clientX: z.clientX,
          clientY: z.clientY,
          pointerId: z.pointerId,
          pointerType: z.pointerType,
          isPrimary: z.isPrimary,
          buttons: z.buttons
        }
      );
      F.firstChild.dispatchEvent(D);
    }
  }, w = () => {
    const O = o.polygons.map((z, C) => {
      if (h.some((G) => G.polygon === C)) {
        const G = z.rings.map((D, j) => {
          const V = h.filter((J) => J.polygon === C && J.ring === j);
          return V.length && D.points.length - V.length >= 3 ? { points: D.points.filter((J, ee) => !V.some((W) => W.point === ee)) } : D;
        }), F = Xe(G[0].points);
        return { rings: G, bounds: F };
      } else
        return z;
    });
    !Nt(o.polygons, O) && (a("change", {
      ...r,
      geometry: {
        polygons: O,
        bounds: at(O)
      }
    }), t(8, h = []));
  };
  Cs(() => {
    if (fn) return;
    const O = (z) => {
      (z.key === "Delete" || z.key === "Backspace") && (z.preventDefault(), w());
    };
    return p.addEventListener("pointermove", H), p.addEventListener("keydown", O), () => {
      p.removeEventListener("pointermove", H), p.removeEventListener("keydown", O);
    };
  });
  const T = `polygon-mask-${Math.random().toString(36).substring(2, 12)}`, A = (O, z, C, { polygon: G, ring: F, point: D }) => G === O && F === z && D === C;
  function S(O) {
    Ge.call(this, e, O);
  }
  function X(O) {
    Ge.call(this, e, O);
  }
  function I(O) {
    Ge.call(this, e, O);
  }
  return e.$$set = (O) => {
    "shape" in O && t(0, r = O.shape), "computedStyle" in O && t(1, f = O.computedStyle), "transform" in O && t(2, c = O.transform), "viewportScale" in O && t(3, u = O.viewportScale), "svgEl" in O && t(4, p = O.svgEl);
  }, e.$$.update = () => {
    e.$$.dirty[0] & /*shape*/
    1 && t(5, o = r.geometry), e.$$.dirty[0] & /*geom, viewportScale*/
    40 && t(10, s = fn ? [] : Kl(o, u)), e.$$.dirty[0] & /*geom, viewportScale*/
    40 && t(9, l = bn(o.bounds, qn / u));
  }, [
    r,
    f,
    c,
    u,
    p,
    o,
    d,
    _,
    h,
    l,
    s,
    E,
    N,
    b,
    k,
    P,
    m,
    L,
    T,
    A,
    S,
    X,
    I
  ];
}
class $l extends An {
  constructor(n) {
    super(), Nn(
      this,
      n,
      Jl,
      Wl,
      Rn,
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
Le.RECTANGLE, Le.POLYGON, Le.MULTIPOLYGON;
typeof navigator > "u" || navigator.userAgent.indexOf("Mac OS X");
function Te() {
}
function At(e, n) {
  for (const t in n) e[t] = n[t];
  return (
    /** @type {T & S} */
    e
  );
}
function Bs(e) {
  return e();
}
function bo() {
  return /* @__PURE__ */ Object.create(null);
}
function Oe(e) {
  e.forEach(Bs);
}
function le(e) {
  return typeof e == "function";
}
function Ce(e, n) {
  return e != e ? n == n : e !== n || e && typeof e == "object" || typeof e == "function";
}
function xl(e) {
  return Object.keys(e).length === 0;
}
function ei(e, ...n) {
  if (e == null) {
    for (const o of n)
      o(void 0);
    return Te;
  }
  const t = e.subscribe(...n);
  return t.unsubscribe ? () => t.unsubscribe() : t;
}
function ni(e, n, t) {
  e.$$.on_destroy.push(ei(n, t));
}
function ti(e, n, t, o) {
  if (e) {
    const s = Us(e, n, t, o);
    return e[0](s);
  }
}
function Us(e, n, t, o) {
  return e[1] && o ? At(t.ctx.slice(), e[1](o(n))) : t.ctx;
}
function oi(e, n, t, o) {
  if (e[2] && o) {
    const s = e[2](o(t));
    if (n.dirty === void 0)
      return s;
    if (typeof s == "object") {
      const l = [], a = Math.max(n.dirty.length, s.length);
      for (let r = 0; r < a; r += 1)
        l[r] = n.dirty[r] | s[r];
      return l;
    }
    return n.dirty | s;
  }
  return n.dirty;
}
function si(e, n, t, o, s, l) {
  if (s) {
    const a = Us(n, t, o, l);
    e.p(a, s);
  }
}
function li(e) {
  if (e.ctx.length > 32) {
    const n = [], t = e.ctx.length / 32;
    for (let o = 0; o < t; o++)
      n[o] = -1;
    return n;
  }
  return -1;
}
function vo(e) {
  const n = {};
  for (const t in e) t[0] !== "$" && (n[t] = e[t]);
  return n;
}
function rn(e) {
  return e ?? "";
}
function Z(e, n) {
  e.appendChild(n);
}
function U(e, n, t) {
  e.insertBefore(n, t || null);
}
function B(e) {
  e.parentNode && e.parentNode.removeChild(e);
}
function Xn(e, n) {
  for (let t = 0; t < e.length; t += 1)
    e[t] && e[t].d(n);
}
function ze(e) {
  return document.createElement(e);
}
function Y(e) {
  return document.createElementNS("http://www.w3.org/2000/svg", e);
}
function st(e) {
  return document.createTextNode(e);
}
function te() {
  return st(" ");
}
function Ie() {
  return st("");
}
function x(e, n, t, o) {
  return e.addEventListener(n, t, o), () => e.removeEventListener(n, t, o);
}
function i(e, n, t) {
  t == null ? e.removeAttribute(n) : e.getAttribute(n) !== t && e.setAttribute(n, t);
}
function ii(e) {
  return Array.from(e.childNodes);
}
function Gs(e, n) {
  n = "" + n, e.data !== n && (e.data = /** @type {string} */
  n);
}
function Eo(e, n) {
  e.value = n ?? "";
}
function Ue(e, n, t, o) {
  t == null ? e.style.removeProperty(n) : e.style.setProperty(n, t, "");
}
function Qe(e, n, t) {
  e.classList.toggle(n, !!t);
}
function ri(e, n, { bubbles: t = !1, cancelable: o = !1 } = {}) {
  return new CustomEvent(e, { detail: n, bubbles: t, cancelable: o });
}
let zn;
function Un(e) {
  zn = e;
}
function Yt() {
  if (!zn) throw new Error("Function called outside component initialization");
  return zn;
}
function sn(e) {
  Yt().$$.on_mount.push(e);
}
function ai(e) {
  Yt().$$.on_destroy.push(e);
}
function en() {
  const e = Yt();
  return (n, t, { cancelable: o = !1 } = {}) => {
    const s = e.$$.callbacks[n];
    if (s) {
      const l = ri(
        /** @type {string} */
        n,
        t,
        { cancelable: o }
      );
      return s.slice().forEach((a) => {
        a.call(e, l);
      }), !l.defaultPrevented;
    }
    return !0;
  };
}
function he(e, n) {
  const t = e.$$.callbacks[n.type];
  t && t.slice().forEach((o) => o.call(this, n));
}
const Mn = [], mn = [];
let Hn = [];
const ko = [], Ys = /* @__PURE__ */ Promise.resolve();
let Dt = !1;
function qs() {
  Dt || (Dt = !0, Ys.then(zs));
}
function Vn() {
  return qs(), Ys;
}
function Xt(e) {
  Hn.push(e);
}
const mt = /* @__PURE__ */ new Set();
let kn = 0;
function zs() {
  if (kn !== 0)
    return;
  const e = zn;
  do {
    try {
      for (; kn < Mn.length; ) {
        const n = Mn[kn];
        kn++, Un(n), fi(n.$$);
      }
    } catch (n) {
      throw Mn.length = 0, kn = 0, n;
    }
    for (Un(null), Mn.length = 0, kn = 0; mn.length; ) mn.pop()();
    for (let n = 0; n < Hn.length; n += 1) {
      const t = Hn[n];
      mt.has(t) || (mt.add(t), t());
    }
    Hn.length = 0;
  } while (Mn.length);
  for (; ko.length; )
    ko.pop()();
  Dt = !1, mt.clear(), Un(e);
}
function fi(e) {
  if (e.fragment !== null) {
    e.update(), Oe(e.before_update);
    const n = e.dirty;
    e.dirty = [-1], e.fragment && e.fragment.p(e.ctx, n), e.after_update.forEach(Xt);
  }
}
function ci(e) {
  const n = [], t = [];
  Hn.forEach((o) => e.indexOf(o) === -1 ? n.push(o) : t.push(o)), t.forEach((o) => o()), Hn = n;
}
const $n = /* @__PURE__ */ new Set();
let yn;
function Fe() {
  yn = {
    r: 0,
    c: [],
    p: yn
    // parent group
  };
}
function We() {
  yn.r || Oe(yn.c), yn = yn.p;
}
function $(e, n) {
  e && e.i && ($n.delete(e), e.i(n));
}
function ne(e, n, t, o) {
  if (e && e.o) {
    if ($n.has(e)) return;
    $n.add(e), yn.c.push(() => {
      $n.delete(e), o && (t && e.d(1), o());
    }), e.o(n);
  } else o && o();
}
function De(e) {
  return (e == null ? void 0 : e.length) !== void 0 ? e : Array.from(e);
}
function gt(e, n) {
  e.d(1), n.delete(e.key);
}
function ui(e, n) {
  ne(e, 1, 1, () => {
    n.delete(e.key);
  });
}
function Qn(e, n, t, o, s, l, a, r, f, c, u, p) {
  let d = e.length, _ = l.length, g = d;
  const h = {};
  for (; g--; ) h[e[g].key] = g;
  const E = [], N = /* @__PURE__ */ new Map(), H = /* @__PURE__ */ new Map(), y = [];
  for (g = _; g--; ) {
    const m = p(s, l, g), L = t(m);
    let w = a.get(L);
    w ? y.push(() => w.p(m, n)) : (w = c(L, m), w.c()), N.set(L, E[g] = w), L in h && H.set(L, Math.abs(g - h[L]));
  }
  const b = /* @__PURE__ */ new Set(), k = /* @__PURE__ */ new Set();
  function P(m) {
    $(m, 1), m.m(r, u), a.set(m.key, m), u = m.first, _--;
  }
  for (; d && _; ) {
    const m = E[_ - 1], L = e[d - 1], w = m.key, T = L.key;
    m === L ? (u = m.first, d--, _--) : N.has(T) ? !a.has(w) || b.has(w) ? P(m) : k.has(T) ? d-- : H.get(w) > H.get(T) ? (k.add(w), P(m)) : (b.add(T), d--) : (f(L, a), d--);
  }
  for (; d--; ) {
    const m = e[d];
    N.has(m.key) || f(m, a);
  }
  for (; _; ) P(E[_ - 1]);
  return Oe(y), E;
}
function ge(e) {
  e && e.c();
}
function de(e, n, t) {
  const { fragment: o, after_update: s } = e.$$;
  o && o.m(n, t), Xt(() => {
    const l = e.$$.on_mount.map(Bs).filter(le);
    e.$$.on_destroy ? e.$$.on_destroy.push(...l) : Oe(l), e.$$.on_mount = [];
  }), s.forEach(Xt);
}
function me(e, n) {
  const t = e.$$;
  t.fragment !== null && (ci(t.after_update), Oe(t.on_destroy), t.fragment && t.fragment.d(n), t.on_destroy = t.fragment = null, t.ctx = []);
}
function pi(e, n) {
  e.$$.dirty[0] === -1 && (Mn.push(e), qs(), e.$$.dirty.fill(0)), e.$$.dirty[n / 31 | 0] |= 1 << n % 31;
}
function Re(e, n, t, o, s, l, a = null, r = [-1]) {
  const f = zn;
  Un(e);
  const c = e.$$ = {
    fragment: null,
    ctx: [],
    // state
    props: l,
    update: Te,
    not_equal: s,
    bound: bo(),
    // lifecycle
    on_mount: [],
    on_destroy: [],
    on_disconnect: [],
    before_update: [],
    after_update: [],
    context: new Map(n.context || (f ? f.$$.context : [])),
    // everything else
    callbacks: bo(),
    dirty: r,
    skip_bound: !1,
    root: n.target || f.$$.root
  };
  a && a(c.root);
  let u = !1;
  if (c.ctx = t ? t(e, n.props || {}, (p, d, ..._) => {
    const g = _.length ? _[0] : d;
    return c.ctx && s(c.ctx[p], c.ctx[p] = g) && (!c.skip_bound && c.bound[p] && c.bound[p](g), u && pi(e, p)), d;
  }) : [], c.update(), u = !0, Oe(c.before_update), c.fragment = o ? o(c.ctx) : !1, n.target) {
    if (n.hydrate) {
      const p = ii(n.target);
      c.fragment && c.fragment.l(p), p.forEach(B);
    } else
      c.fragment && c.fragment.c();
    n.intro && $(e.$$.fragment), de(e, n.target, n.anchor), zs();
  }
  Un(f);
}
class Ne {
  constructor() {
    /**
     * ### PRIVATE API
     *
     * Do not use, may change at any time
     *
     * @type {any}
     */
    it(this, "$$");
    /**
     * ### PRIVATE API
     *
     * Do not use, may change at any time
     *
     * @type {any}
     */
    it(this, "$$set");
  }
  /** @returns {void} */
  $destroy() {
    me(this, 1), this.$destroy = Te;
  }
  /**
   * @template {Extract<keyof Events, string>} K
   * @param {K} type
   * @param {((e: Events[K]) => void) | null | undefined} callback
   * @returns {() => void}
   */
  $on(n, t) {
    if (!le(t))
      return Te;
    const o = this.$$.callbacks[n] || (this.$$.callbacks[n] = []);
    return o.push(t), () => {
      const s = o.indexOf(t);
      s !== -1 && o.splice(s, 1);
    };
  }
  /**
   * @param {Partial<Props>} props
   * @returns {void}
   */
  $set(n) {
    this.$$set && !xl(n) && (this.$$.skip_bound = !0, this.$$set(n), this.$$.skip_bound = !1);
  }
}
const hi = "4";
typeof window < "u" && (window.__svelte || (window.__svelte = { v: /* @__PURE__ */ new Set() })).v.add(hi);
function So(e) {
  let n, t, o, s = (
    /*x1*/
    (e[3] !== /*x2*/
    e[5] || /*y1*/
    e[4] !== /*y2*/
    e[6]) && To(e)
  );
  return {
    c() {
      n = Y("line"), t = Y("line"), s && s.c(), o = Ie(), i(n, "class", "a9s-outer"), i(
        n,
        "x1",
        /*x1*/
        e[3]
      ), i(
        n,
        "y1",
        /*y1*/
        e[4]
      ), i(
        n,
        "x2",
        /*x2*/
        e[5]
      ), i(
        n,
        "y2",
        /*y2*/
        e[6]
      ), i(t, "class", "a9s-inner"), i(
        t,
        "x1",
        /*x1*/
        e[3]
      ), i(
        t,
        "y1",
        /*y1*/
        e[4]
      ), i(
        t,
        "x2",
        /*x2*/
        e[5]
      ), i(
        t,
        "y2",
        /*y2*/
        e[6]
      );
    },
    m(l, a) {
      U(l, n, a), U(l, t, a), s && s.m(l, a), U(l, o, a);
    },
    p(l, a) {
      a & /*x1*/
      8 && i(
        n,
        "x1",
        /*x1*/
        l[3]
      ), a & /*y1*/
      16 && i(
        n,
        "y1",
        /*y1*/
        l[4]
      ), a & /*x2*/
      32 && i(
        n,
        "x2",
        /*x2*/
        l[5]
      ), a & /*y2*/
      64 && i(
        n,
        "y2",
        /*y2*/
        l[6]
      ), a & /*x1*/
      8 && i(
        t,
        "x1",
        /*x1*/
        l[3]
      ), a & /*y1*/
      16 && i(
        t,
        "y1",
        /*y1*/
        l[4]
      ), a & /*x2*/
      32 && i(
        t,
        "x2",
        /*x2*/
        l[5]
      ), a & /*y2*/
      64 && i(
        t,
        "y2",
        /*y2*/
        l[6]
      ), /*x1*/
      l[3] !== /*x2*/
      l[5] || /*y1*/
      l[4] !== /*y2*/
      l[6] ? s ? s.p(l, a) : (s = To(l), s.c(), s.m(o.parentNode, o)) : s && (s.d(1), s = null);
    },
    d(l) {
      l && (B(n), B(t), B(o)), s && s.d(l);
    }
  };
}
function To(e) {
  let n, t;
  return {
    c() {
      n = Y("polyline"), i(n, "class", "a9s-inner"), i(n, "fill", "none"), i(n, "points", t = /*func*/
      e[11]());
    },
    m(o, s) {
      U(o, n, s);
    },
    p(o, s) {
      s & /*y2, y1, x2, x1*/
      120 && t !== (t = /*func*/
      o[11]()) && i(n, "points", t);
    },
    d(o) {
      o && B(n);
    }
  };
}
function di(e) {
  let n, t = (
    /*origin*/
    e[1] && /*cursor*/
    e[2] && So(e)
  );
  return {
    c() {
      n = Y("g"), t && t.c(), i(n, "class", "a9s-annotation a9s-rubberband");
    },
    m(o, s) {
      U(o, n, s), t && t.m(n, null), e[12](n);
    },
    p(o, [s]) {
      /*origin*/
      o[1] && /*cursor*/
      o[2] ? t ? t.p(o, s) : (t = So(o), t.c(), t.m(n, null)) : t && (t.d(1), t = null);
    },
    i: Te,
    o: Te,
    d(o) {
      o && B(n), t && t.d(), e[12](null);
    }
  };
}
function mi(e, n, t) {
  const o = en();
  let { addEventListener: s } = n, { drawingMode: l } = n, { transform: a } = n, { viewportScale: r } = n, f, c, u, p, d, _, g, h, E;
  const N = (m) => {
    const L = m, { timeStamp: w, offsetX: T, offsetY: A } = L;
    h = { timeStamp: w, offsetX: T, offsetY: A }, l === "drag" && (t(1, c = a.elementToImage(L.offsetX, L.offsetY)), t(2, u = c), t(3, p = c[0]), t(4, d = c[1]), t(5, _ = u[0]), t(6, g = u[1]));
  }, H = (m) => {
    const L = m || E;
    c && (t(2, u = a.elementToImage(L.offsetX, L.offsetY)), t(5, _ = u[0]), t(6, g = u[1])), m && (E = m);
  }, y = (m) => {
    const L = m;
    if (l === "click") {
      const w = performance.now() - h.timeStamp, T = an([h.offsetX, h.offsetY], [L.offsetX, L.offsetY]);
      if (w > 300 || T > 15) return;
      c ? b() : (t(1, c = a.elementToImage(L.offsetX, L.offsetY)), t(2, u = c), t(3, p = c[0]), t(4, d = c[1]), t(5, _ = u[0]), t(6, g = u[1]));
    } else c && (L.stopPropagation(), b());
  }, b = () => {
    if (c && u && an(c, u) > 4) {
      const m = {
        type: Le.LINE,
        geometry: {
          bounds: Xe([c, u]),
          points: [c, u]
        },
        properties: { toolType: "arrow" }
      };
      o("create", m);
    }
    t(1, c = void 0), t(2, u = void 0), E = void 0;
  };
  sn(() => {
    s("pointerdown", N, !0), s("pointermove", H), s("pointerup", y, !0);
  });
  const k = () => {
    const m = Math.atan2(g - d, _ - p), L = 12, w = _ - L * Math.cos(m - Math.PI / 6), T = g - L * Math.sin(m - Math.PI / 6), A = _ - L * Math.cos(m + Math.PI / 6), S = g - L * Math.sin(m + Math.PI / 6);
    return `${w},${T} ${_},${g} ${A},${S}`;
  };
  function P(m) {
    mn[m ? "unshift" : "push"](() => {
      f = m, t(0, f);
    });
  }
  return e.$$set = (m) => {
    "addEventListener" in m && t(7, s = m.addEventListener), "drawingMode" in m && t(8, l = m.drawingMode), "transform" in m && t(9, a = m.transform), "viewportScale" in m && t(10, r = m.viewportScale);
  }, [
    f,
    c,
    u,
    p,
    d,
    _,
    g,
    s,
    l,
    a,
    r,
    k,
    P
  ];
}
class gi extends Ne {
  constructor(n) {
    super(), Re(this, n, mi, di, Ce, {
      addEventListener: 7,
      drawingMode: 8,
      transform: 9,
      viewportScale: 10
    });
  }
}
function Mo(e) {
  let n, t;
  return {
    c() {
      n = Y("line"), t = Y("line"), i(n, "class", "a9s-outer"), i(
        n,
        "x1",
        /*x1*/
        e[3]
      ), i(
        n,
        "y1",
        /*y1*/
        e[4]
      ), i(
        n,
        "x2",
        /*x2*/
        e[5]
      ), i(
        n,
        "y2",
        /*y2*/
        e[6]
      ), i(t, "class", "a9s-inner"), i(
        t,
        "x1",
        /*x1*/
        e[3]
      ), i(
        t,
        "y1",
        /*y1*/
        e[4]
      ), i(
        t,
        "x2",
        /*x2*/
        e[5]
      ), i(
        t,
        "y2",
        /*y2*/
        e[6]
      );
    },
    m(o, s) {
      U(o, n, s), U(o, t, s);
    },
    p(o, s) {
      s & /*x1*/
      8 && i(
        n,
        "x1",
        /*x1*/
        o[3]
      ), s & /*y1*/
      16 && i(
        n,
        "y1",
        /*y1*/
        o[4]
      ), s & /*x2*/
      32 && i(
        n,
        "x2",
        /*x2*/
        o[5]
      ), s & /*y2*/
      64 && i(
        n,
        "y2",
        /*y2*/
        o[6]
      ), s & /*x1*/
      8 && i(
        t,
        "x1",
        /*x1*/
        o[3]
      ), s & /*y1*/
      16 && i(
        t,
        "y1",
        /*y1*/
        o[4]
      ), s & /*x2*/
      32 && i(
        t,
        "x2",
        /*x2*/
        o[5]
      ), s & /*y2*/
      64 && i(
        t,
        "y2",
        /*y2*/
        o[6]
      );
    },
    d(o) {
      o && (B(n), B(t));
    }
  };
}
function _i(e) {
  let n, t = (
    /*origin*/
    e[1] && /*cursor*/
    e[2] && Mo(e)
  );
  return {
    c() {
      n = Y("g"), t && t.c(), i(n, "class", "a9s-annotation a9s-rubberband");
    },
    m(o, s) {
      U(o, n, s), t && t.m(n, null), e[11](n);
    },
    p(o, [s]) {
      /*origin*/
      o[1] && /*cursor*/
      o[2] ? t ? t.p(o, s) : (t = Mo(o), t.c(), t.m(n, null)) : t && (t.d(1), t = null);
    },
    i: Te,
    o: Te,
    d(o) {
      o && B(n), t && t.d(), e[11](null);
    }
  };
}
function yi(e, n, t) {
  const o = en();
  let { addEventListener: s } = n, { drawingMode: l } = n, { transform: a } = n, { viewportScale: r } = n, f, c, u, p, d, _, g, h, E;
  const N = (P) => {
    const m = P, { timeStamp: L, offsetX: w, offsetY: T } = m;
    h = { timeStamp: L, offsetX: w, offsetY: T }, l === "drag" && (t(1, c = a.elementToImage(m.offsetX, m.offsetY)), t(2, u = c), t(3, p = c[0]), t(4, d = c[1]), t(5, _ = u[0]), t(6, g = u[1]));
  }, H = (P) => {
    const m = P || E;
    c && (t(2, u = a.elementToImage(m.offsetX, m.offsetY)), t(5, _ = u[0]), t(6, g = u[1])), P && (E = P);
  }, y = (P) => {
    const m = P;
    if (l === "click") {
      const L = performance.now() - h.timeStamp, w = an([h.offsetX, h.offsetY], [m.offsetX, m.offsetY]);
      if (L > 300 || w > 15) return;
      c ? b() : (t(1, c = a.elementToImage(m.offsetX, m.offsetY)), t(2, u = c), t(3, p = c[0]), t(4, d = c[1]), t(5, _ = u[0]), t(6, g = u[1]));
    } else c && (m.stopPropagation(), b());
  }, b = () => {
    if (c && u && an(c, u) > 4) {
      const P = {
        type: Le.POLYLINE,
        geometry: {
          bounds: Xe([c, u]),
          points: [{ type: "CORNER", point: c }, { type: "CORNER", point: u }]
        },
        properties: { toolType: "distance" }
      };
      o("create", P);
    }
    t(1, c = void 0), t(2, u = void 0), E = void 0;
  };
  sn(() => {
    s("pointerdown", N, !0), s("pointermove", H), s("pointerup", y, !0);
  });
  function k(P) {
    mn[P ? "unshift" : "push"](() => {
      f = P, t(0, f);
    });
  }
  return e.$$set = (P) => {
    "addEventListener" in P && t(7, s = P.addEventListener), "drawingMode" in P && t(8, l = P.drawingMode), "transform" in P && t(9, a = P.transform), "viewportScale" in P && t(10, r = P.viewportScale);
  }, [
    f,
    c,
    u,
    p,
    d,
    _,
    g,
    s,
    l,
    a,
    r,
    k
  ];
}
class wi extends Ne {
  constructor(n) {
    super(), Re(this, n, yi, _i, Ce, {
      addEventListener: 7,
      drawingMode: 8,
      transform: 9,
      viewportScale: 10
    });
  }
}
var cn = /* @__PURE__ */ ((e) => (e.ELLIPSE = "ELLIPSE", e.MULTIPOLYGON = "MULTIPOLYGON", e.POLYGON = "POLYGON", e.POLYLINE = "POLYLINE", e.RECTANGLE = "RECTANGLE", e.LINE = "LINE", e))(cn || {}), bi = { exports: {} };
(function(e) {
  (function() {
    function n(r, f) {
      var c = r.x - f.x, u = r.y - f.y;
      return c * c + u * u;
    }
    function t(r, f, c) {
      var u = f.x, p = f.y, d = c.x - u, _ = c.y - p;
      if (d !== 0 || _ !== 0) {
        var g = ((r.x - u) * d + (r.y - p) * _) / (d * d + _ * _);
        g > 1 ? (u = c.x, p = c.y) : g > 0 && (u += d * g, p += _ * g);
      }
      return d = r.x - u, _ = r.y - p, d * d + _ * _;
    }
    function o(r, f) {
      for (var c = r[0], u = [c], p, d = 1, _ = r.length; d < _; d++)
        p = r[d], n(p, c) > f && (u.push(p), c = p);
      return c !== p && u.push(p), u;
    }
    function s(r, f, c, u, p) {
      for (var d = u, _, g = f + 1; g < c; g++) {
        var h = t(r[g], r[f], r[c]);
        h > d && (_ = g, d = h);
      }
      d > u && (_ - f > 1 && s(r, f, _, u, p), p.push(r[_]), c - _ > 1 && s(r, _, c, u, p));
    }
    function l(r, f) {
      var c = r.length - 1, u = [r[0]];
      return s(r, 0, c, f, u), u.push(r[c]), u;
    }
    function a(r, f, c) {
      if (r.length <= 2) return r;
      var u = f !== void 0 ? f * f : 1;
      return r = c ? r : o(r, u), r = l(r, u), r;
    }
    e.exports = a, e.exports.default = a;
  })();
})(bi);
const jn = (e, n) => n, pn = (e) => {
  let n = 1 / 0, t = 1 / 0, o = -1 / 0, s = -1 / 0;
  return e.forEach(([l, a]) => {
    n = Math.min(n, l), t = Math.min(t, a), o = Math.max(o, l), s = Math.max(s, a);
  }), { minX: n, minY: t, maxX: o, maxY: s };
}, nt = (e) => {
  let n = 0, t = e.length - 1;
  for (let o = 0; o < e.length; o++)
    n += (e[t][0] + e[o][0]) * (e[t][1] - e[o][1]), t = o;
  return Math.abs(0.5 * n);
}, tt = (e, n, t) => {
  let o = !1;
  for (let s = 0, l = e.length - 1; s < e.length; l = s++) {
    const a = e[s][0], r = e[s][1], f = e[l][0], c = e[l][1];
    r > t != c > t && n < (f - a) * (t - r) / (c - r) + a && (o = !o);
  }
  return o;
}, vi = (e, n = !0) => {
  let t = "M ";
  return e.forEach(([o, s], l) => {
    l === 0 ? t += `${o},${s}` : t += ` L ${o},${s}`;
  }), n && (t += " Z"), t;
}, Ei = (e, n) => {
  const t = Math.abs(n[0] - e[0]), o = Math.abs(n[1] - e[1]);
  return Math.sqrt(Math.pow(t, 2) + Math.pow(o, 2));
}, ki = {
  area: (e) => Math.PI * e.geometry.rx * e.geometry.ry,
  intersects: (e, n, t) => {
    const { cx: o, cy: s, rx: l, ry: a } = e.geometry, r = 0, f = Math.cos(r), c = Math.sin(r), u = n - o, p = t - s, d = f * u + c * p, _ = c * u - f * p;
    return d * d / (l * l) + _ * _ / (a * a) <= 1;
  }
};
jn(cn.ELLIPSE, ki);
const Si = {
  area: (e) => 0,
  intersects: (e, n, t, o = 2) => {
    const [[s, l], [a, r]] = e.geometry.points, f = Math.abs((r - l) * n - (a - s) * t + a * l - r * s), c = Ei([s, l], [a, r]);
    return f / c <= o;
  }
};
jn(cn.LINE, Si);
const Ti = {
  area: (e) => {
    const { polygons: n } = e.geometry;
    return n.reduce((t, o) => {
      const [s, ...l] = o.rings, a = nt(s.points), r = l.reduce((f, c) => f + nt(c.points), 0);
      return t + a - r;
    }, 0);
  },
  intersects: (e, n, t) => {
    const { polygons: o } = e.geometry;
    for (const s of o) {
      const [l, ...a] = s.rings;
      if (tt(l.points, n, t)) {
        let r = !1;
        for (const f of a)
          if (tt(f.points, n, t)) {
            r = !0;
            break;
          }
        if (!r) return !0;
      }
    }
    return !1;
  }
}, _t = (e) => {
  const n = e.reduce((t, o) => [...t, ...o.rings[0].points], []);
  return pn(n);
}, Sn = (e) => e.rings.map((t) => vi(t.points)).join(" "), Mi = (e) => e.polygons.reduce((n, t) => [
  ...n,
  ...t.rings.reduce((o, s) => [...o, ...s.points], [])
], []);
jn(cn.MULTIPOLYGON, Ti);
const Pi = {
  area: (e) => {
    const n = e.geometry.points;
    return nt(n);
  },
  intersects: (e, n, t) => {
    const o = e.geometry.points;
    return tt(o, n, t);
  }
};
jn(cn.POLYGON, Pi);
const Li = {
  area: (e) => {
    const n = e.geometry;
    if (!n.closed || n.points.length < 3)
      return 0;
    const t = Po(n.points, n.closed);
    return nt(t);
  },
  intersects: (e, n, t, o = 2) => {
    const s = e.geometry;
    if (s.closed) {
      const l = Po(s.points, s.closed);
      return tt(l, n, t);
    } else
      return Oi(s, [n, t], o);
  }
}, Po = (e, n = !1) => {
  const t = [];
  for (let o = 0; o < e.length; o++) {
    const s = e[o], l = e[(o + 1) % e.length];
    if (t.push(s.point), (o < e.length - 1 || n) && (s.type === "CURVE" || l.type == "CURVE")) {
      const r = Vs(
        s.point,
        s.type === "CURVE" && s.outHandle || s.point,
        l.type === "CURVE" && l.inHandle || l.point,
        l.point,
        10
        // number of approximation segments
      );
      t.push(...r.slice(1));
    }
  }
  return t;
}, Vs = (e, n, t, o, s = 10) => {
  const l = [];
  for (let a = 0; a <= s; a++) {
    const r = a / s, f = Math.pow(1 - r, 3) * e[0] + 3 * Math.pow(1 - r, 2) * r * n[0] + 3 * (1 - r) * Math.pow(r, 2) * t[0] + Math.pow(r, 3) * o[0], c = Math.pow(1 - r, 3) * e[1] + 3 * Math.pow(1 - r, 2) * r * n[1] + 3 * (1 - r) * Math.pow(r, 2) * t[1] + Math.pow(r, 3) * o[1];
    l.push([f, c]);
  }
  return l;
}, Oi = (e, n, t) => {
  for (let o = 0; o < e.points.length - 1; o++) {
    const s = e.points[o], l = e.points[o + 1];
    if (s.type === "CURVE" || l.type === "CURVE") {
      const r = Vs(
        s.point,
        s.type === "CURVE" && s.outHandle || s.point,
        l.type === "CURVE" && l.inHandle || l.point,
        l.point,
        20
        // TODO make configurable? Based on scale factor? Length?
      );
      for (let f = 0; f < r.length - 1; f++)
        if (Lo(n, r[f], r[f + 1]) <= t) return !0;
    } else if (Lo(n, s.point, l.point) <= t) return !0;
  }
  return !1;
}, Lo = (e, n, t) => {
  const [o, s] = e, [l, a] = n, [r, f] = t, c = r - l, u = f - a, p = Math.sqrt(c * c + u * u);
  if (p === 0)
    return Math.sqrt((o - l) * (o - l) + (s - a) * (s - a));
  const d = ((o - l) * c + (s - a) * u) / (p * p);
  return d <= 0 ? Math.sqrt((o - l) * (o - l) + (s - a) * (s - a)) : d >= 1 ? Math.sqrt((o - r) * (o - r) + (s - f) * (s - f)) : Math.abs((f - a) * o - (r - l) * s + r * a - f * l) / p;
};
jn(cn.POLYLINE, Li);
const Hi = {
  area: (e) => e.geometry.w * e.geometry.h,
  intersects: (e, n, t) => n >= e.geometry.x && n <= e.geometry.x + e.geometry.w && t >= e.geometry.y && t <= e.geometry.y + e.geometry.h
};
jn(cn.RECTANGLE, Hi);
const Ii = [];
for (let e = 0; e < 256; ++e)
  Ii.push((e + 256).toString(16).slice(1));
typeof crypto < "u" && crypto.randomUUID && crypto.randomUUID.bind(crypto);
const Ci = "useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict";
let Ri = (e = 21) => {
  let n = "", t = crypto.getRandomValues(new Uint8Array(e |= 0));
  for (; e--; )
    n += Ci[t[e] & 63];
  return n;
};
Ri();
const qt = (e, n = 0) => {
  const { minX: t, minY: o, maxX: s, maxY: l } = e;
  return {
    x: t - n,
    y: o - n,
    w: s - t + 2 * n,
    h: l - o + 2 * n
  };
}, hn = typeof window > "u" || typeof navigator > "u" ? !1 : "ontouchstart" in window || navigator.maxTouchPoints > 0 || // @ts-ignore
navigator.msMaxTouchPoints > 0, Ni = (e) => ({}), Oo = (e) => ({ grab: (
  /*onGrab*/
  e[0]
) });
function Ai(e) {
  let n, t, o, s;
  const l = (
    /*#slots*/
    e[8].default
  ), a = ti(
    l,
    e,
    /*$$scope*/
    e[7],
    Oo
  );
  return {
    c() {
      n = Y("g"), a && a.c(), i(n, "class", "a9s-annotation selected");
    },
    m(r, f) {
      U(r, n, f), a && a.m(n, null), t = !0, o || (s = [
        x(
          n,
          "pointerup",
          /*onRelease*/
          e[2]
        ),
        x(
          n,
          "pointermove",
          /*onPointerMove*/
          e[1]
        )
      ], o = !0);
    },
    p(r, [f]) {
      a && a.p && (!t || f & /*$$scope*/
      128) && si(
        a,
        l,
        r,
        /*$$scope*/
        r[7],
        t ? oi(
          l,
          /*$$scope*/
          r[7],
          f,
          Ni
        ) : li(
          /*$$scope*/
          r[7]
        ),
        Oo
      );
    },
    i(r) {
      t || ($(a, r), t = !0);
    },
    o(r) {
      ne(a, r), t = !1;
    },
    d(r) {
      r && B(n), a && a.d(r), o = !1, Oe(s);
    }
  };
}
function Di(e, n, t) {
  let { $$slots: o = {}, $$scope: s } = n;
  const l = en();
  let { shape: a } = n, { editor: r } = n, { transform: f } = n, { svgEl: c } = n, u, p, d;
  const _ = (E) => (N) => {
    if (u = E, c) {
      const { left: y, top: b } = c.getBoundingClientRect(), k = N.clientX - y, P = N.clientY - b;
      p = f.elementToImage(k, P);
    } else {
      const { offsetX: y, offsetY: b } = N;
      p = f.elementToImage(y, b);
    }
    d = a, N.target.setPointerCapture(N.pointerId), l("grab", N);
  }, g = (E) => {
    if (u) {
      const [N, H] = f.elementToImage(E.offsetX, E.offsetY), y = [N - p[0], H - p[1]];
      t(3, a = r(d, u, y)), l("change", a);
    }
  }, h = (E) => {
    E.target.releasePointerCapture(E.pointerId), u = void 0, d = a, l("release", E);
  };
  return e.$$set = (E) => {
    "shape" in E && t(3, a = E.shape), "editor" in E && t(4, r = E.editor), "transform" in E && t(5, f = E.transform), "svgEl" in E && t(6, c = E.svgEl), "$$scope" in E && t(7, s = E.$$scope);
  }, [
    _,
    g,
    h,
    a,
    r,
    f,
    c,
    s,
    o
  ];
}
class gn extends Ne {
  constructor(n) {
    super(), Re(this, n, Di, Ai, Ce, {
      shape: 3,
      editor: 4,
      transform: 5,
      svgEl: 6
    });
  }
}
function Xi(e) {
  let n, t, o, s, l, a, r, f, c = (
    /*selected*/
    e[3] && Ho(e)
  );
  return {
    c() {
      n = Y("g"), t = Y("circle"), c && c.c(), s = Y("circle"), i(t, "class", "a9s-handle-buffer svelte-qtyc7s"), i(
        t,
        "cx",
        /*x*/
        e[0]
      ), i(
        t,
        "cy",
        /*y*/
        e[1]
      ), i(t, "r", o = /*handleRadius*/
      e[5] + 6 / /*scale*/
      e[2]), i(t, "role", "button"), i(t, "tabindex", "0"), i(s, "class", l = rn(`a9s-handle-dot${/*selected*/
      e[3] ? " selected" : ""}`) + " svelte-qtyc7s"), i(
        s,
        "cx",
        /*x*/
        e[0]
      ), i(
        s,
        "cy",
        /*y*/
        e[1]
      ), i(
        s,
        "r",
        /*handleRadius*/
        e[5]
      ), i(n, "class", a = `a9s-handle ${/*$$props*/
      e[8].class || ""}`.trim());
    },
    m(u, p) {
      U(u, n, p), Z(n, t), c && c.m(n, null), Z(n, s), r || (f = [
        x(
          t,
          "dblclick",
          /*dblclick_handler_1*/
          e[12]
        ),
        x(
          t,
          "pointerenter",
          /*pointerenter_handler*/
          e[13]
        ),
        x(
          t,
          "pointerleave",
          /*pointerleave_handler*/
          e[14]
        ),
        x(
          t,
          "pointerdown",
          /*pointerdown_handler_1*/
          e[15]
        ),
        x(
          t,
          "pointerdown",
          /*onPointerDown*/
          e[6]
        ),
        x(
          t,
          "pointerup",
          /*pointerup_handler_1*/
          e[16]
        ),
        x(
          t,
          "pointerup",
          /*onPointerUp*/
          e[7]
        )
      ], r = !0);
    },
    p(u, p) {
      p & /*x*/
      1 && i(
        t,
        "cx",
        /*x*/
        u[0]
      ), p & /*y*/
      2 && i(
        t,
        "cy",
        /*y*/
        u[1]
      ), p & /*handleRadius, scale*/
      36 && o !== (o = /*handleRadius*/
      u[5] + 6 / /*scale*/
      u[2]) && i(t, "r", o), /*selected*/
      u[3] ? c ? c.p(u, p) : (c = Ho(u), c.c(), c.m(n, s)) : c && (c.d(1), c = null), p & /*selected*/
      8 && l !== (l = rn(`a9s-handle-dot${/*selected*/
      u[3] ? " selected" : ""}`) + " svelte-qtyc7s") && i(s, "class", l), p & /*x*/
      1 && i(
        s,
        "cx",
        /*x*/
        u[0]
      ), p & /*y*/
      2 && i(
        s,
        "cy",
        /*y*/
        u[1]
      ), p & /*handleRadius*/
      32 && i(
        s,
        "r",
        /*handleRadius*/
        u[5]
      ), p & /*$$props*/
      256 && a !== (a = `a9s-handle ${/*$$props*/
      u[8].class || ""}`.trim()) && i(n, "class", a);
    },
    d(u) {
      u && B(n), c && c.d(), r = !1, Oe(f);
    }
  };
}
function ji(e) {
  let n, t, o, s, l, a, r, f, c;
  return {
    c() {
      n = Y("g"), t = Y("circle"), s = Y("circle"), a = Y("circle"), i(
        t,
        "cx",
        /*x*/
        e[0]
      ), i(
        t,
        "cy",
        /*y*/
        e[1]
      ), i(t, "r", o = /*handleRadius*/
      e[5] * 10), i(t, "class", "a9s-touch-halo"), Qe(
        t,
        "touched",
        /*touched*/
        e[4]
      ), i(
        s,
        "cx",
        /*x*/
        e[0]
      ), i(
        s,
        "cy",
        /*y*/
        e[1]
      ), i(s, "r", l = /*handleRadius*/
      e[5] + 10 / /*scale*/
      e[2]), i(s, "class", "a9s-handle-buffer svelte-qtyc7s"), i(s, "role", "button"), i(s, "tabindex", "0"), i(a, "class", "a9s-handle-dot"), i(
        a,
        "cx",
        /*x*/
        e[0]
      ), i(
        a,
        "cy",
        /*y*/
        e[1]
      ), i(a, "r", r = /*handleRadius*/
      e[5] + 2 / /*scale*/
      e[2]), i(n, "class", "a9s-touch-handle");
    },
    m(u, p) {
      U(u, n, p), Z(n, t), Z(n, s), Z(n, a), f || (c = [
        x(
          s,
          "dblclick",
          /*dblclick_handler*/
          e[9]
        ),
        x(
          s,
          "pointerdown",
          /*pointerdown_handler*/
          e[10]
        ),
        x(
          s,
          "pointerdown",
          /*onPointerDown*/
          e[6]
        ),
        x(
          s,
          "pointerup",
          /*pointerup_handler*/
          e[11]
        ),
        x(
          s,
          "pointerup",
          /*onPointerUp*/
          e[7]
        )
      ], f = !0);
    },
    p(u, p) {
      p & /*x*/
      1 && i(
        t,
        "cx",
        /*x*/
        u[0]
      ), p & /*y*/
      2 && i(
        t,
        "cy",
        /*y*/
        u[1]
      ), p & /*handleRadius*/
      32 && o !== (o = /*handleRadius*/
      u[5] * 10) && i(t, "r", o), p & /*touched*/
      16 && Qe(
        t,
        "touched",
        /*touched*/
        u[4]
      ), p & /*x*/
      1 && i(
        s,
        "cx",
        /*x*/
        u[0]
      ), p & /*y*/
      2 && i(
        s,
        "cy",
        /*y*/
        u[1]
      ), p & /*handleRadius, scale*/
      36 && l !== (l = /*handleRadius*/
      u[5] + 10 / /*scale*/
      u[2]) && i(s, "r", l), p & /*x*/
      1 && i(
        a,
        "cx",
        /*x*/
        u[0]
      ), p & /*y*/
      2 && i(
        a,
        "cy",
        /*y*/
        u[1]
      ), p & /*handleRadius, scale*/
      36 && r !== (r = /*handleRadius*/
      u[5] + 2 / /*scale*/
      u[2]) && i(a, "r", r);
    },
    d(u) {
      u && B(n), f = !1, Oe(c);
    }
  };
}
function Ho(e) {
  let n, t;
  return {
    c() {
      n = Y("circle"), i(n, "class", "a9s-handle-selected"), i(
        n,
        "cx",
        /*x*/
        e[0]
      ), i(
        n,
        "cy",
        /*y*/
        e[1]
      ), i(n, "r", t = /*handleRadius*/
      e[5] + 8 / /*scale*/
      e[2]);
    },
    m(o, s) {
      U(o, n, s);
    },
    p(o, s) {
      s & /*x*/
      1 && i(
        n,
        "cx",
        /*x*/
        o[0]
      ), s & /*y*/
      2 && i(
        n,
        "cy",
        /*y*/
        o[1]
      ), s & /*handleRadius, scale*/
      36 && t !== (t = /*handleRadius*/
      o[5] + 8 / /*scale*/
      o[2]) && i(n, "r", t);
    },
    d(o) {
      o && B(n);
    }
  };
}
function Bi(e) {
  let n;
  function t(l, a) {
    return hn ? ji : Xi;
  }
  let s = t()(e);
  return {
    c() {
      s.c(), n = Ie();
    },
    m(l, a) {
      s.m(l, a), U(l, n, a);
    },
    p(l, [a]) {
      s.p(l, a);
    },
    i: Te,
    o: Te,
    d(l) {
      l && B(n), s.d(l);
    }
  };
}
function Ui(e, n, t) {
  let o, { x: s } = n, { y: l } = n, { scale: a } = n, { selected: r = void 0 } = n, f = !1;
  const c = (y) => {
    y.pointerType === "touch" && t(4, f = !0);
  }, u = () => t(4, f = !1);
  function p(y) {
    he.call(this, e, y);
  }
  function d(y) {
    he.call(this, e, y);
  }
  function _(y) {
    he.call(this, e, y);
  }
  function g(y) {
    he.call(this, e, y);
  }
  function h(y) {
    he.call(this, e, y);
  }
  function E(y) {
    he.call(this, e, y);
  }
  function N(y) {
    he.call(this, e, y);
  }
  function H(y) {
    he.call(this, e, y);
  }
  return e.$$set = (y) => {
    t(8, n = At(At({}, n), vo(y))), "x" in y && t(0, s = y.x), "y" in y && t(1, l = y.y), "scale" in y && t(2, a = y.scale), "selected" in y && t(3, r = y.selected);
  }, e.$$.update = () => {
    e.$$.dirty & /*scale*/
    4 && t(5, o = 4 / a);
  }, n = vo(n), [
    s,
    l,
    a,
    r,
    f,
    o,
    c,
    u,
    n,
    p,
    d,
    _,
    g,
    h,
    E,
    N,
    H
  ];
}
class Ye extends Ne {
  constructor(n) {
    super(), Re(this, n, Ui, Bi, Ce, { x: 0, y: 1, scale: 2, selected: 3 });
  }
}
function Gi(e) {
  let n, t, o, s, l, a, r;
  return {
    c() {
      n = Y("g"), t = Y("circle"), s = Y("circle"), l = Y("circle"), i(t, "class", "a9s-polygon-midpoint-buffer svelte-12ykj76"), i(
        t,
        "cx",
        /*x*/
        e[0]
      ), i(
        t,
        "cy",
        /*y*/
        e[1]
      ), i(t, "r", o = 1.75 * /*handleRadius*/
      e[2]), i(s, "class", "a9s-polygon-midpoint-outer svelte-12ykj76"), i(
        s,
        "cx",
        /*x*/
        e[0]
      ), i(
        s,
        "cy",
        /*y*/
        e[1]
      ), i(
        s,
        "r",
        /*handleRadius*/
        e[2]
      ), i(l, "class", "a9s-polygon-midpoint-inner svelte-12ykj76"), i(
        l,
        "cx",
        /*x*/
        e[0]
      ), i(
        l,
        "cy",
        /*y*/
        e[1]
      ), i(
        l,
        "r",
        /*handleRadius*/
        e[2]
      ), i(n, "class", "a9s-polygon-midpoint svelte-12ykj76");
    },
    m(f, c) {
      U(f, n, c), Z(n, t), Z(n, s), Z(n, l), a || (r = [
        x(
          t,
          "pointerdown",
          /*pointerdown_handler*/
          e[5]
        ),
        x(
          t,
          "pointerdown",
          /*onPointerDown*/
          e[3]
        )
      ], a = !0);
    },
    p(f, c) {
      c & /*x*/
      1 && i(
        t,
        "cx",
        /*x*/
        f[0]
      ), c & /*y*/
      2 && i(
        t,
        "cy",
        /*y*/
        f[1]
      ), c & /*handleRadius*/
      4 && o !== (o = 1.75 * /*handleRadius*/
      f[2]) && i(t, "r", o), c & /*x*/
      1 && i(
        s,
        "cx",
        /*x*/
        f[0]
      ), c & /*y*/
      2 && i(
        s,
        "cy",
        /*y*/
        f[1]
      ), c & /*handleRadius*/
      4 && i(
        s,
        "r",
        /*handleRadius*/
        f[2]
      ), c & /*x*/
      1 && i(
        l,
        "cx",
        /*x*/
        f[0]
      ), c & /*y*/
      2 && i(
        l,
        "cy",
        /*y*/
        f[1]
      ), c & /*handleRadius*/
      4 && i(
        l,
        "r",
        /*handleRadius*/
        f[2]
      );
    },
    d(f) {
      f && B(n), a = !1, Oe(r);
    }
  };
}
function Yi(e) {
  let n;
  return {
    c() {
      n = Y("circle"), i(
        n,
        "cx",
        /*x*/
        e[0]
      ), i(
        n,
        "cy",
        /*y*/
        e[1]
      ), i(
        n,
        "r",
        /*handleRadius*/
        e[2]
      );
    },
    m(t, o) {
      U(t, n, o);
    },
    p(t, o) {
      o & /*x*/
      1 && i(
        n,
        "cx",
        /*x*/
        t[0]
      ), o & /*y*/
      2 && i(
        n,
        "cy",
        /*y*/
        t[1]
      ), o & /*handleRadius*/
      4 && i(
        n,
        "r",
        /*handleRadius*/
        t[2]
      );
    },
    d(t) {
      t && B(n);
    }
  };
}
function qi(e) {
  let n;
  function t(l, a) {
    return hn ? Yi : Gi;
  }
  let s = t()(e);
  return {
    c() {
      s.c(), n = Ie();
    },
    m(l, a) {
      s.m(l, a), U(l, n, a);
    },
    p(l, [a]) {
      s.p(l, a);
    },
    i: Te,
    o: Te,
    d(l) {
      l && B(n), s.d(l);
    }
  };
}
function zi(e, n, t) {
  let o, { x: s } = n, { y: l } = n, { scale: a } = n;
  const r = (c) => {
    c.pointerType;
  };
  function f(c) {
    he.call(this, e, c);
  }
  return e.$$set = (c) => {
    "x" in c && t(0, s = c.x), "y" in c && t(1, l = c.y), "scale" in c && t(4, a = c.scale);
  }, e.$$.update = () => {
    e.$$.dirty & /*scale*/
    16 && t(2, o = 4 / a);
  }, [s, l, o, r, a, f];
}
class zt extends Ne {
  constructor(n) {
    super(), Re(this, n, zi, qi, Ce, { x: 0, y: 1, scale: 4 });
  }
}
function yt(e) {
  const n = e.slice(), t = (
    /*midpoints*/
    n[10][
      /*visibleMidpoint*/
      n[6]
    ]
  );
  return n[28] = t.point, n;
}
function Io(e, n, t) {
  const o = e.slice();
  return o[28] = n[t], o[30] = t, o;
}
function wt(e) {
  const n = e.slice(), t = (
    /*midpoints*/
    n[10][
      /*visibleMidpoint*/
      n[6]
    ]
  );
  return n[28] = t.point, n;
}
function bt(e) {
  const n = e.slice(), t = (
    /*midpoints*/
    n[10][
      /*visibleMidpoint*/
      n[6]
    ]
  );
  return n[28] = t.point, n;
}
function Co(e) {
  let n, t, o, s;
  return {
    c() {
      n = Y("circle"), i(n, "cx", t = /*point*/
      e[28][0]), i(n, "cy", o = /*point*/
      e[28][1]), i(n, "r", s = Kn / /*viewportScale*/
      e[3]), i(n, "class", "svelte-1h2slbm");
    },
    m(l, a) {
      U(l, n, a);
    },
    p(l, a) {
      a[0] & /*midpoints, visibleMidpoint*/
      1088 && t !== (t = /*point*/
      l[28][0]) && i(n, "cx", t), a[0] & /*midpoints, visibleMidpoint*/
      1088 && o !== (o = /*point*/
      l[28][1]) && i(n, "cy", o), a[0] & /*viewportScale*/
      8 && s !== (s = Kn / /*viewportScale*/
      l[3]) && i(n, "r", s);
    },
    d(l) {
      l && B(n);
    }
  };
}
function Ro(e) {
  let n, t, o, s, l, a, r, f, c, u;
  return {
    c() {
      n = Y("mask"), t = Y("rect"), r = Y("circle"), i(t, "x", o = /*mask*/
      e[9].x), i(t, "y", s = /*mask*/
      e[9].y), i(t, "width", l = /*mask*/
      e[9].w), i(t, "height", a = /*mask*/
      e[9].h), i(t, "class", "svelte-1h2slbm"), i(r, "cx", f = /*point*/
      e[28][0]), i(r, "cy", c = /*point*/
      e[28][1]), i(r, "r", u = Kn / /*viewportScale*/
      e[3]), i(r, "class", "svelte-1h2slbm"), i(n, "id", `${/*maskId*/
      e[19]}-inner`), i(n, "class", "a9s-polygon-editor-mask svelte-1h2slbm");
    },
    m(p, d) {
      U(p, n, d), Z(n, t), Z(n, r);
    },
    p(p, d) {
      d[0] & /*mask*/
      512 && o !== (o = /*mask*/
      p[9].x) && i(t, "x", o), d[0] & /*mask*/
      512 && s !== (s = /*mask*/
      p[9].y) && i(t, "y", s), d[0] & /*mask*/
      512 && l !== (l = /*mask*/
      p[9].w) && i(t, "width", l), d[0] & /*mask*/
      512 && a !== (a = /*mask*/
      p[9].h) && i(t, "height", a), d[0] & /*midpoints, visibleMidpoint*/
      1088 && f !== (f = /*point*/
      p[28][0]) && i(r, "cx", f), d[0] & /*midpoints, visibleMidpoint*/
      1088 && c !== (c = /*point*/
      p[28][1]) && i(r, "cy", c), d[0] & /*viewportScale*/
      8 && u !== (u = Kn / /*viewportScale*/
      p[3]) && i(r, "r", u);
    },
    d(p) {
      p && B(n);
    }
  };
}
function No(e) {
  let n, t;
  return n = new Ye({
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
    le(
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
      ge(n.$$.fragment);
    },
    m(o, s) {
      de(n, o, s), t = !0;
    },
    p(o, s) {
      e = o;
      const l = {};
      s[0] & /*geom*/
      32 && (l.x = /*point*/
      e[28][0]), s[0] & /*geom*/
      32 && (l.y = /*point*/
      e[28][1]), s[0] & /*viewportScale*/
      8 && (l.scale = /*viewportScale*/
      e[3]), s[0] & /*selectedCorners*/
      256 && (l.selected = /*selectedCorners*/
      e[8].includes(
        /*idx*/
        e[30]
      )), n.$set(l);
    },
    i(o) {
      t || ($(n.$$.fragment, o), t = !0);
    },
    o(o) {
      ne(n.$$.fragment, o), t = !1;
    },
    d(o) {
      me(n, o);
    }
  };
}
function Ao(e) {
  let n, t;
  return n = new zt({
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
    le(
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
      ge(n.$$.fragment);
    },
    m(o, s) {
      de(n, o, s), t = !0;
    },
    p(o, s) {
      e = o;
      const l = {};
      s[0] & /*midpoints, visibleMidpoint*/
      1088 && (l.x = /*point*/
      e[28][0]), s[0] & /*midpoints, visibleMidpoint*/
      1088 && (l.y = /*point*/
      e[28][1]), s[0] & /*viewportScale*/
      8 && (l.scale = /*viewportScale*/
      e[3]), n.$set(l);
    },
    i(o) {
      t || ($(n.$$.fragment, o), t = !0);
    },
    o(o) {
      ne(n.$$.fragment, o), t = !1;
    },
    d(o) {
      me(n, o);
    }
  };
}
function Vi(e) {
  let n, t, o, s, l, a, r, f, c, u, p, d, _, g, h, E, N, H, y, b, k, P = (
    /*visibleMidpoint*/
    e[6] !== void 0 && !/*isHandleHovered*/
    e[7] && Co(bt(e))
  ), m = (
    /*visibleMidpoint*/
    e[6] !== void 0 && !/*isHandleHovered*/
    e[7] && Ro(wt(e))
  ), L = De(
    /*geom*/
    e[5].points
  ), w = [];
  for (let S = 0; S < L.length; S += 1)
    w[S] = No(Io(e, L, S));
  const T = (S) => ne(w[S], 1, 1, () => {
    w[S] = null;
  });
  let A = (
    /*visibleMidpoint*/
    e[6] !== void 0 && !/*isHandleHovered*/
    e[7] && Ao(yt(e))
  );
  return {
    c() {
      n = Y("defs"), t = Y("mask"), o = Y("rect"), f = Y("polygon"), P && P.c(), m && m.c(), u = te(), p = Y("polygon"), _ = te(), g = Y("polygon"), E = te();
      for (let S = 0; S < w.length; S += 1)
        w[S].c();
      N = te(), A && A.c(), H = Ie(), i(o, "x", s = /*mask*/
      e[9].x), i(o, "y", l = /*mask*/
      e[9].y), i(o, "width", a = /*mask*/
      e[9].w), i(o, "height", r = /*mask*/
      e[9].h), i(o, "class", "svelte-1h2slbm"), i(f, "points", c = /*geom*/
      e[5].points.map(Do).join(" ")), i(f, "class", "svelte-1h2slbm"), i(t, "id", `${/*maskId*/
      e[19]}-outer`), i(t, "class", "a9s-polygon-editor-mask svelte-1h2slbm"), i(p, "class", "a9s-outer"), i(p, "mask", `url(#${/*maskId*/
      e[19]}-outer)`), i(p, "points", d = /*geom*/
      e[5].points.map(Xo).join(" ")), i(g, "class", "a9s-inner a9s-shape-handle"), i(g, "mask", `url(#${/*maskId*/
      e[19]}-inner)`), i(
        g,
        "style",
        /*computedStyle*/
        e[1]
      ), i(g, "points", h = /*geom*/
      e[5].points.map(jo).join(" "));
    },
    m(S, X) {
      U(S, n, X), Z(n, t), Z(t, o), Z(t, f), P && P.m(t, null), m && m.m(n, null), U(S, u, X), U(S, p, X), U(S, _, X), U(S, g, X), U(S, E, X);
      for (let I = 0; I < w.length; I += 1)
        w[I] && w[I].m(S, X);
      U(S, N, X), A && A.m(S, X), U(S, H, X), y = !0, b || (k = [
        x(
          p,
          "pointerup",
          /*onShapePointerUp*/
          e[14]
        ),
        x(p, "pointerdown", function() {
          le(
            /*grab*/
            e[27]("SHAPE")
          ) && e[27]("SHAPE").apply(this, arguments);
        }),
        x(
          g,
          "pointermove",
          /*onPointerMove*/
          e[13]
        ),
        x(
          g,
          "pointerup",
          /*onShapePointerUp*/
          e[14]
        ),
        x(g, "pointerdown", function() {
          le(
            /*grab*/
            e[27]("SHAPE")
          ) && e[27]("SHAPE").apply(this, arguments);
        })
      ], b = !0);
    },
    p(S, X) {
      if (e = S, (!y || X[0] & /*mask*/
      512 && s !== (s = /*mask*/
      e[9].x)) && i(o, "x", s), (!y || X[0] & /*mask*/
      512 && l !== (l = /*mask*/
      e[9].y)) && i(o, "y", l), (!y || X[0] & /*mask*/
      512 && a !== (a = /*mask*/
      e[9].w)) && i(o, "width", a), (!y || X[0] & /*mask*/
      512 && r !== (r = /*mask*/
      e[9].h)) && i(o, "height", r), (!y || X[0] & /*geom*/
      32 && c !== (c = /*geom*/
      e[5].points.map(Do).join(" "))) && i(f, "points", c), /*visibleMidpoint*/
      e[6] !== void 0 && !/*isHandleHovered*/
      e[7] ? P ? P.p(bt(e), X) : (P = Co(bt(e)), P.c(), P.m(t, null)) : P && (P.d(1), P = null), /*visibleMidpoint*/
      e[6] !== void 0 && !/*isHandleHovered*/
      e[7] ? m ? m.p(wt(e), X) : (m = Ro(wt(e)), m.c(), m.m(n, null)) : m && (m.d(1), m = null), (!y || X[0] & /*geom*/
      32 && d !== (d = /*geom*/
      e[5].points.map(Xo).join(" "))) && i(p, "points", d), (!y || X[0] & /*computedStyle*/
      2) && i(
        g,
        "style",
        /*computedStyle*/
        e[1]
      ), (!y || X[0] & /*geom*/
      32 && h !== (h = /*geom*/
      e[5].points.map(jo).join(" "))) && i(g, "points", h), X[0] & /*geom, viewportScale, selectedCorners, onEnterHandle, onLeaveHandle, onHandlePointerDown, grab, onHandlePointerUp*/
      134322472) {
        L = De(
          /*geom*/
          e[5].points
        );
        let I;
        for (I = 0; I < L.length; I += 1) {
          const O = Io(e, L, I);
          w[I] ? (w[I].p(O, X), $(w[I], 1)) : (w[I] = No(O), w[I].c(), $(w[I], 1), w[I].m(N.parentNode, N));
        }
        for (Fe(), I = L.length; I < w.length; I += 1)
          T(I);
        We();
      }
      /*visibleMidpoint*/
      e[6] !== void 0 && !/*isHandleHovered*/
      e[7] ? A ? (A.p(yt(e), X), X[0] & /*visibleMidpoint, isHandleHovered*/
      192 && $(A, 1)) : (A = Ao(yt(e)), A.c(), $(A, 1), A.m(H.parentNode, H)) : A && (Fe(), ne(A, 1, 1, () => {
        A = null;
      }), We());
    },
    i(S) {
      if (!y) {
        for (let X = 0; X < L.length; X += 1)
          $(w[X]);
        $(A), y = !0;
      }
    },
    o(S) {
      w = w.filter(Boolean);
      for (let X = 0; X < w.length; X += 1)
        ne(w[X]);
      ne(A), y = !1;
    },
    d(S) {
      S && (B(n), B(u), B(p), B(_), B(g), B(E), B(N), B(H)), P && P.d(), m && m.d(), Xn(w, S), A && A.d(S), b = !1, Oe(k);
    }
  };
}
function Ki(e) {
  let n, t;
  return n = new gn({
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
          Vi,
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
      ge(n.$$.fragment);
    },
    m(o, s) {
      de(n, o, s), t = !0;
    },
    p(o, s) {
      const l = {};
      s[0] & /*shape*/
      1 && (l.shape = /*shape*/
      o[0]), s[0] & /*transform*/
      4 && (l.transform = /*transform*/
      o[2]), s[0] & /*svgEl*/
      16 && (l.svgEl = /*svgEl*/
      o[4]), s[0] & /*midpoints, visibleMidpoint, viewportScale, isHandleHovered, geom, selectedCorners, grab, computedStyle, mask*/
      134219754 | s[1] & /*$$scope*/
      1 && (l.$$scope = { dirty: s, ctx: o }), n.$set(l);
    },
    i(o) {
      t || ($(n.$$.fragment, o), t = !0);
    },
    o(o) {
      ne(n.$$.fragment, o), t = !1;
    },
    d(o) {
      me(n, o);
    }
  };
}
const Fi = 250, Wi = 1e3, Zi = 12, Kn = 4.5, Do = (e) => e.join(","), Xo = (e) => e.join(","), jo = (e) => e.join(",");
function Qi(e, n, t) {
  let o, s, l;
  const a = en();
  let { shape: r } = n, { computedStyle: f } = n, { transform: c } = n, { viewportScale: u = 1 } = n, { svgEl: p } = n, d, _ = !1, g, h = [];
  const E = () => t(7, _ = !0), N = () => t(7, _ = !1), H = (I) => {
    if (h.length > 0 || !s.some((V) => V.visible)) {
      t(6, d = void 0);
      return;
    }
    const [O, z] = c.elementToImage(I.offsetX, I.offsetY), C = (V) => Math.pow(V[0] - O, 2) + Math.pow(V[1] - z, 2), G = o.points.reduce((V, J) => C(J) < C(V) ? J : V), F = s.filter((V) => V.visible).reduce((V, J) => C(J.point) < C(V.point) ? J : V), D = Math.pow(Wi / u, 2);
    C(G) < D || C(F.point) < D ? t(6, d = s.indexOf(F)) : t(6, d = void 0);
  }, y = () => {
    document.activeElement !== p && p.focus();
  }, b = () => {
    t(8, h = []), y();
  }, k = (I) => {
    t(7, _ = !0), I.preventDefault(), I.stopPropagation(), g = performance.now();
  }, P = (I) => (O) => {
    if (!g || hn || performance.now() - g > Fi) return;
    const z = h.includes(I);
    O.metaKey || O.ctrlKey || O.shiftKey ? z ? t(8, h = h.filter((C) => C !== I)) : t(8, h = [...h, I]) : z && h.length > 1 ? t(8, h = [I]) : z ? t(8, h = []) : t(8, h = [I]), y();
  }, m = (I, O, z) => {
    y();
    let C;
    const G = I.geometry;
    h.length > 1 ? C = G.points.map(([D, j], V) => h.includes(V) ? [D + z[0], j + z[1]] : [D, j]) : O === "SHAPE" ? C = G.points.map(([D, j]) => [D + z[0], j + z[1]]) : C = G.points.map(([D, j], V) => O === `HANDLE-${V}` ? [D + z[0], j + z[1]] : [D, j]);
    const F = pn(C);
    return { ...I, geometry: { points: C, bounds: F } };
  }, L = (I) => async (O) => {
    O.stopPropagation();
    const z = [
      ...o.points.slice(0, I + 1),
      s[I].point,
      ...o.points.slice(I + 1)
    ], C = pn(z);
    a("change", { ...r, geometry: { points: z, bounds: C } }), await Vn();
    const G = [...document.querySelectorAll(".a9s-handle")][I + 1];
    if (G != null && G.firstChild) {
      const F = new PointerEvent(
        "pointerdown",
        {
          bubbles: !0,
          cancelable: !0,
          clientX: O.clientX,
          clientY: O.clientY,
          pointerId: O.pointerId,
          pointerType: O.pointerType,
          isPrimary: O.isPrimary,
          buttons: O.buttons
        }
      );
      G.firstChild.dispatchEvent(F);
    }
  }, w = () => {
    if (o.points.length - h.length < 3) return;
    const I = o.points.filter((z, C) => !h.includes(C)), O = pn(I);
    a("change", { ...r, geometry: { points: I, bounds: O } }), t(8, h = []);
  };
  sn(() => {
    if (hn) return;
    const I = (O) => {
      (O.key === "Delete" || O.key === "Backspace") && (O.preventDefault(), w());
    };
    return p.addEventListener("pointermove", H), p.addEventListener("keydown", I), () => {
      p.removeEventListener("pointermove", H), p.removeEventListener("keydown", I);
    };
  });
  const T = `polygon-mask-${Math.random().toString(36).substring(2, 12)}`;
  function A(I) {
    he.call(this, e, I);
  }
  function S(I) {
    he.call(this, e, I);
  }
  function X(I) {
    he.call(this, e, I);
  }
  return e.$$set = (I) => {
    "shape" in I && t(0, r = I.shape), "computedStyle" in I && t(1, f = I.computedStyle), "transform" in I && t(2, c = I.transform), "viewportScale" in I && t(3, u = I.viewportScale), "svgEl" in I && t(4, p = I.svgEl);
  }, e.$$.update = () => {
    e.$$.dirty[0] & /*shape*/
    1 && t(5, o = r.geometry), e.$$.dirty[0] & /*geom, viewportScale*/
    40 && t(10, s = hn ? [] : o.points.map((I, O) => {
      const z = O === o.points.length - 1 ? o.points[0] : o.points[O + 1], C = (I[0] + z[0]) / 2, G = (I[1] + z[1]) / 2, D = Math.sqrt(Math.pow(z[0] - C, 2) + Math.pow(z[1] - G, 2)) > Zi / u;
      return { point: [C, G], visible: D };
    })), e.$$.dirty[0] & /*geom, viewportScale*/
    40 && t(9, l = qt(o.bounds, Kn / u));
  }, [
    r,
    f,
    c,
    u,
    p,
    o,
    d,
    _,
    h,
    l,
    s,
    E,
    N,
    H,
    b,
    k,
    P,
    m,
    L,
    T,
    A,
    S,
    X
  ];
}
class Ji extends Ne {
  constructor(n) {
    super(), Re(
      this,
      n,
      Qi,
      Ki,
      Ce,
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
function $i(e) {
  let n, t, o, s, l, a, r, f, c, u, p, d, _, g, h, E, N, H, y, b, k, P, m, L, w, T, A, S, X, I, O, z, C, G, F, D, j, V, J, ee, W, se, ve, oe, He, ce, Ee, ue, je, pe, Be, Se, K, q, Q;
  return ce = new Ye({
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
  }), ce.$on("pointerdown", function() {
    le(
      /*grab*/
      e[12]("TOP_LEFT")
    ) && e[12]("TOP_LEFT").apply(this, arguments);
  }), ue = new Ye({
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
    le(
      /*grab*/
      e[12]("TOP_RIGHT")
    ) && e[12]("TOP_RIGHT").apply(this, arguments);
  }), pe = new Ye({
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
  }), pe.$on("pointerdown", function() {
    le(
      /*grab*/
      e[12]("BOTTOM_RIGHT")
    ) && e[12]("BOTTOM_RIGHT").apply(this, arguments);
  }), Se = new Ye({
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
  }), Se.$on("pointerdown", function() {
    le(
      /*grab*/
      e[12]("BOTTOM_LEFT")
    ) && e[12]("BOTTOM_LEFT").apply(this, arguments);
  }), {
    c() {
      n = Y("defs"), t = Y("mask"), o = Y("rect"), f = Y("rect"), _ = te(), g = Y("rect"), y = te(), b = Y("rect"), w = te(), T = Y("rect"), I = te(), O = Y("rect"), F = te(), D = Y("rect"), ee = te(), W = Y("rect"), He = te(), ge(ce.$$.fragment), Ee = te(), ge(ue.$$.fragment), je = te(), ge(pe.$$.fragment), Be = te(), ge(Se.$$.fragment), i(o, "class", "rect-mask-bg svelte-1njczvj"), i(o, "x", s = /*mask*/
      e[6].x), i(o, "y", l = /*mask*/
      e[6].y), i(o, "width", a = /*mask*/
      e[6].w), i(o, "height", r = /*mask*/
      e[6].h), i(f, "class", "rect-mask-fg svelte-1njczvj"), i(f, "x", c = /*geom*/
      e[5].x), i(f, "y", u = /*geom*/
      e[5].y), i(f, "width", p = /*geom*/
      e[5].w), i(f, "height", d = /*geom*/
      e[5].h), i(
        t,
        "id",
        /*maskId*/
        e[8]
      ), i(t, "class", "a9s-rectangle-editor-mask svelte-1njczvj"), i(g, "class", "a9s-outer"), i(g, "mask", `url(#${/*maskId*/
      e[8]})`), i(g, "x", h = /*geom*/
      e[5].x), i(g, "y", E = /*geom*/
      e[5].y), i(g, "width", N = /*geom*/
      e[5].w), i(g, "height", H = /*geom*/
      e[5].h), i(b, "class", "a9s-inner a9s-shape-handle"), i(
        b,
        "style",
        /*computedStyle*/
        e[1]
      ), i(b, "x", k = /*geom*/
      e[5].x), i(b, "y", P = /*geom*/
      e[5].y), i(b, "width", m = /*geom*/
      e[5].w), i(b, "height", L = /*geom*/
      e[5].h), i(T, "class", "a9s-edge-handle a9s-edge-handle-top"), i(T, "x", A = /*geom*/
      e[5].x), i(T, "y", S = /*geom*/
      e[5].y), i(T, "height", 1), i(T, "width", X = /*geom*/
      e[5].w), i(O, "class", "a9s-edge-handle a9s-edge-handle-right"), i(O, "x", z = /*geom*/
      e[5].x + /*geom*/
      e[5].w), i(O, "y", C = /*geom*/
      e[5].y), i(O, "height", G = /*geom*/
      e[5].h), i(O, "width", 1), i(D, "class", "a9s-edge-handle a9s-edge-handle-bottom"), i(D, "x", j = /*geom*/
      e[5].x), i(D, "y", V = /*geom*/
      e[5].y + /*geom*/
      e[5].h), i(D, "height", 1), i(D, "width", J = /*geom*/
      e[5].w), i(W, "class", "a9s-edge-handle a9s-edge-handle-left"), i(W, "x", se = /*geom*/
      e[5].x), i(W, "y", ve = /*geom*/
      e[5].y), i(W, "height", oe = /*geom*/
      e[5].h), i(W, "width", 1);
    },
    m(R, M) {
      U(R, n, M), Z(n, t), Z(t, o), Z(t, f), U(R, _, M), U(R, g, M), U(R, y, M), U(R, b, M), U(R, w, M), U(R, T, M), U(R, I, M), U(R, O, M), U(R, F, M), U(R, D, M), U(R, ee, M), U(R, W, M), U(R, He, M), de(ce, R, M), U(R, Ee, M), de(ue, R, M), U(R, je, M), de(pe, R, M), U(R, Be, M), de(Se, R, M), K = !0, q || (Q = [
        x(g, "pointerdown", function() {
          le(
            /*grab*/
            e[12]("SHAPE")
          ) && e[12]("SHAPE").apply(this, arguments);
        }),
        x(b, "pointerdown", function() {
          le(
            /*grab*/
            e[12]("SHAPE")
          ) && e[12]("SHAPE").apply(this, arguments);
        }),
        x(T, "pointerdown", function() {
          le(
            /*grab*/
            e[12]("TOP")
          ) && e[12]("TOP").apply(this, arguments);
        }),
        x(O, "pointerdown", function() {
          le(
            /*grab*/
            e[12]("RIGHT")
          ) && e[12]("RIGHT").apply(this, arguments);
        }),
        x(D, "pointerdown", function() {
          le(
            /*grab*/
            e[12]("BOTTOM")
          ) && e[12]("BOTTOM").apply(this, arguments);
        }),
        x(W, "pointerdown", function() {
          le(
            /*grab*/
            e[12]("LEFT")
          ) && e[12]("LEFT").apply(this, arguments);
        })
      ], q = !0);
    },
    p(R, M) {
      e = R, (!K || M & /*mask*/
      64 && s !== (s = /*mask*/
      e[6].x)) && i(o, "x", s), (!K || M & /*mask*/
      64 && l !== (l = /*mask*/
      e[6].y)) && i(o, "y", l), (!K || M & /*mask*/
      64 && a !== (a = /*mask*/
      e[6].w)) && i(o, "width", a), (!K || M & /*mask*/
      64 && r !== (r = /*mask*/
      e[6].h)) && i(o, "height", r), (!K || M & /*geom*/
      32 && c !== (c = /*geom*/
      e[5].x)) && i(f, "x", c), (!K || M & /*geom*/
      32 && u !== (u = /*geom*/
      e[5].y)) && i(f, "y", u), (!K || M & /*geom*/
      32 && p !== (p = /*geom*/
      e[5].w)) && i(f, "width", p), (!K || M & /*geom*/
      32 && d !== (d = /*geom*/
      e[5].h)) && i(f, "height", d), (!K || M & /*geom*/
      32 && h !== (h = /*geom*/
      e[5].x)) && i(g, "x", h), (!K || M & /*geom*/
      32 && E !== (E = /*geom*/
      e[5].y)) && i(g, "y", E), (!K || M & /*geom*/
      32 && N !== (N = /*geom*/
      e[5].w)) && i(g, "width", N), (!K || M & /*geom*/
      32 && H !== (H = /*geom*/
      e[5].h)) && i(g, "height", H), (!K || M & /*computedStyle*/
      2) && i(
        b,
        "style",
        /*computedStyle*/
        e[1]
      ), (!K || M & /*geom*/
      32 && k !== (k = /*geom*/
      e[5].x)) && i(b, "x", k), (!K || M & /*geom*/
      32 && P !== (P = /*geom*/
      e[5].y)) && i(b, "y", P), (!K || M & /*geom*/
      32 && m !== (m = /*geom*/
      e[5].w)) && i(b, "width", m), (!K || M & /*geom*/
      32 && L !== (L = /*geom*/
      e[5].h)) && i(b, "height", L), (!K || M & /*geom*/
      32 && A !== (A = /*geom*/
      e[5].x)) && i(T, "x", A), (!K || M & /*geom*/
      32 && S !== (S = /*geom*/
      e[5].y)) && i(T, "y", S), (!K || M & /*geom*/
      32 && X !== (X = /*geom*/
      e[5].w)) && i(T, "width", X), (!K || M & /*geom*/
      32 && z !== (z = /*geom*/
      e[5].x + /*geom*/
      e[5].w)) && i(O, "x", z), (!K || M & /*geom*/
      32 && C !== (C = /*geom*/
      e[5].y)) && i(O, "y", C), (!K || M & /*geom*/
      32 && G !== (G = /*geom*/
      e[5].h)) && i(O, "height", G), (!K || M & /*geom*/
      32 && j !== (j = /*geom*/
      e[5].x)) && i(D, "x", j), (!K || M & /*geom*/
      32 && V !== (V = /*geom*/
      e[5].y + /*geom*/
      e[5].h)) && i(D, "y", V), (!K || M & /*geom*/
      32 && J !== (J = /*geom*/
      e[5].w)) && i(D, "width", J), (!K || M & /*geom*/
      32 && se !== (se = /*geom*/
      e[5].x)) && i(W, "x", se), (!K || M & /*geom*/
      32 && ve !== (ve = /*geom*/
      e[5].y)) && i(W, "y", ve), (!K || M & /*geom*/
      32 && oe !== (oe = /*geom*/
      e[5].h)) && i(W, "height", oe);
      const _e = {};
      M & /*geom*/
      32 && (_e.x = /*geom*/
      e[5].x), M & /*geom*/
      32 && (_e.y = /*geom*/
      e[5].y), M & /*viewportScale*/
      8 && (_e.scale = /*viewportScale*/
      e[3]), ce.$set(_e);
      const ke = {};
      M & /*geom*/
      32 && (ke.x = /*geom*/
      e[5].x + /*geom*/
      e[5].w), M & /*geom*/
      32 && (ke.y = /*geom*/
      e[5].y), M & /*viewportScale*/
      8 && (ke.scale = /*viewportScale*/
      e[3]), ue.$set(ke);
      const ie = {};
      M & /*geom*/
      32 && (ie.x = /*geom*/
      e[5].x + /*geom*/
      e[5].w), M & /*geom*/
      32 && (ie.y = /*geom*/
      e[5].y + /*geom*/
      e[5].h), M & /*viewportScale*/
      8 && (ie.scale = /*viewportScale*/
      e[3]), pe.$set(ie);
      const ye = {};
      M & /*geom*/
      32 && (ye.x = /*geom*/
      e[5].x), M & /*geom*/
      32 && (ye.y = /*geom*/
      e[5].y + /*geom*/
      e[5].h), M & /*viewportScale*/
      8 && (ye.scale = /*viewportScale*/
      e[3]), Se.$set(ye);
    },
    i(R) {
      K || ($(ce.$$.fragment, R), $(ue.$$.fragment, R), $(pe.$$.fragment, R), $(Se.$$.fragment, R), K = !0);
    },
    o(R) {
      ne(ce.$$.fragment, R), ne(ue.$$.fragment, R), ne(pe.$$.fragment, R), ne(Se.$$.fragment, R), K = !1;
    },
    d(R) {
      R && (B(n), B(_), B(g), B(y), B(b), B(w), B(T), B(I), B(O), B(F), B(D), B(ee), B(W), B(He), B(Ee), B(je), B(Be)), me(ce, R), me(ue, R), me(pe, R), me(Se, R), q = !1, Oe(Q);
    }
  };
}
function xi(e) {
  let n, t;
  return n = new gn({
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
          $i,
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
      ge(n.$$.fragment);
    },
    m(o, s) {
      de(n, o, s), t = !0;
    },
    p(o, [s]) {
      const l = {};
      s & /*shape*/
      1 && (l.shape = /*shape*/
      o[0]), s & /*transform*/
      4 && (l.transform = /*transform*/
      o[2]), s & /*svgEl*/
      16 && (l.svgEl = /*svgEl*/
      o[4]), s & /*$$scope, geom, viewportScale, grab, computedStyle, mask*/
      12394 && (l.$$scope = { dirty: s, ctx: o }), n.$set(l);
    },
    i(o) {
      t || ($(n.$$.fragment, o), t = !0);
    },
    o(o) {
      ne(n.$$.fragment, o), t = !1;
    },
    d(o) {
      me(n, o);
    }
  };
}
function er(e, n, t) {
  let o, s, { shape: l } = n, { computedStyle: a } = n, { transform: r } = n, { viewportScale: f = 1 } = n, { svgEl: c } = n;
  const u = (h, E, N) => {
    const H = h.geometry.bounds;
    let [y, b] = [H.minX, H.minY], [k, P] = [H.maxX, H.maxY];
    const [m, L] = N;
    if (E === "SHAPE")
      y += m, k += m, b += L, P += L;
    else {
      switch (E) {
        case "TOP":
        case "TOP_LEFT":
        case "TOP_RIGHT": {
          b += L;
          break;
        }
        case "BOTTOM":
        case "BOTTOM_LEFT":
        case "BOTTOM_RIGHT": {
          P += L;
          break;
        }
      }
      switch (E) {
        case "LEFT":
        case "TOP_LEFT":
        case "BOTTOM_LEFT": {
          y += m;
          break;
        }
        case "RIGHT":
        case "TOP_RIGHT":
        case "BOTTOM_RIGHT": {
          k += m;
          break;
        }
      }
    }
    const w = Math.min(y, k), T = Math.min(b, P), A = Math.abs(k - y), S = Math.abs(P - b);
    return {
      ...h,
      geometry: {
        x: w,
        y: T,
        w: A,
        h: S,
        bounds: {
          minX: w,
          minY: T,
          maxX: w + A,
          maxY: T + S
        }
      }
    };
  }, p = `rect-mask-${Math.random().toString(36).substring(2, 12)}`;
  function d(h) {
    he.call(this, e, h);
  }
  function _(h) {
    he.call(this, e, h);
  }
  function g(h) {
    he.call(this, e, h);
  }
  return e.$$set = (h) => {
    "shape" in h && t(0, l = h.shape), "computedStyle" in h && t(1, a = h.computedStyle), "transform" in h && t(2, r = h.transform), "viewportScale" in h && t(3, f = h.viewportScale), "svgEl" in h && t(4, c = h.svgEl);
  }, e.$$.update = () => {
    e.$$.dirty & /*shape*/
    1 && t(5, o = l.geometry), e.$$.dirty & /*geom, viewportScale*/
    40 && t(6, s = qt(o.bounds, 2 / f));
  }, [
    l,
    a,
    r,
    f,
    c,
    o,
    s,
    u,
    p,
    d,
    _,
    g
  ];
}
let nr = class extends Ne {
  constructor(n) {
    super(), Re(this, n, er, xi, Ce, {
      shape: 0,
      computedStyle: 1,
      transform: 2,
      viewportScale: 3,
      svgEl: 4
    });
  }
};
var Bo = Object.prototype.hasOwnProperty;
function jt(e, n) {
  var t, o;
  if (e === n) return !0;
  if (e && n && (t = e.constructor) === n.constructor) {
    if (t === Date) return e.getTime() === n.getTime();
    if (t === RegExp) return e.toString() === n.toString();
    if (t === Array) {
      if ((o = e.length) === n.length)
        for (; o-- && jt(e[o], n[o]); ) ;
      return o === -1;
    }
    if (!t || typeof e == "object") {
      o = 0;
      for (t in e)
        if (Bo.call(e, t) && ++o && !Bo.call(n, t) || !(t in n) || !jt(e[t], n[t])) return !1;
      return Object.keys(n).length === o;
    }
  }
  return e !== e && n !== n;
}
const tr = 12, or = (e, n) => e.polygons.reduce((t, o, s) => {
  const l = o.rings.reduce((a, r, f) => {
    const c = r.points.map((u, p) => {
      const d = p === r.points.length - 1 ? r.points[0] : r.points[p + 1], _ = (u[0] + d[0]) / 2, g = (u[1] + d[1]) / 2, E = Math.sqrt(
        Math.pow(d[0] - _, 2) + Math.pow(d[1] - g, 2)
      ) > tr / n;
      return { point: [_, g], visible: E, elementIdx: s, ringIdx: f, pointIdx: p };
    });
    return [...a, ...c];
  }, []);
  return [...t, ...l];
}, []);
function vt(e) {
  const n = e.slice(), t = (
    /*midpoints*/
    n[10][
      /*visibleMidpoint*/
      n[6]
    ]
  );
  return n[29] = t.point, n;
}
function Uo(e, n, t) {
  const o = e.slice();
  return o[30] = n[t], o[32] = t, o;
}
function Go(e, n, t) {
  const o = e.slice();
  return o[33] = n[t], o[35] = t, o;
}
function Yo(e, n, t) {
  const o = e.slice();
  return o[29] = n[t], o[37] = t, o;
}
function Et(e) {
  const n = e.slice(), t = (
    /*midpoints*/
    n[10][
      /*visibleMidpoint*/
      n[6]
    ]
  );
  return n[29] = t.point, n;
}
function kt(e) {
  const n = e.slice(), t = (
    /*midpoints*/
    n[10][
      /*visibleMidpoint*/
      n[6]
    ]
  );
  return n[29] = t.point, n;
}
function qo(e) {
  let n, t, o, s;
  return {
    c() {
      n = Y("circle"), i(n, "cx", t = /*point*/
      e[29][0]), i(n, "cy", o = /*point*/
      e[29][1]), i(n, "r", s = Fn / /*viewportScale*/
      e[3]), i(n, "class", "svelte-1vxo6dc");
    },
    m(l, a) {
      U(l, n, a);
    },
    p(l, a) {
      a[0] & /*midpoints, visibleMidpoint*/
      1088 && t !== (t = /*point*/
      l[29][0]) && i(n, "cx", t), a[0] & /*midpoints, visibleMidpoint*/
      1088 && o !== (o = /*point*/
      l[29][1]) && i(n, "cy", o), a[0] & /*viewportScale*/
      8 && s !== (s = Fn / /*viewportScale*/
      l[3]) && i(n, "r", s);
    },
    d(l) {
      l && B(n);
    }
  };
}
function zo(e) {
  let n, t, o, s, l, a, r, f, c, u;
  return {
    c() {
      n = Y("mask"), t = Y("rect"), r = Y("circle"), i(t, "x", o = /*mask*/
      e[9].x), i(t, "y", s = /*mask*/
      e[9].y), i(t, "width", l = /*mask*/
      e[9].w), i(t, "height", a = /*mask*/
      e[9].h), i(t, "class", "svelte-1vxo6dc"), i(r, "cx", f = /*point*/
      e[29][0]), i(r, "cy", c = /*point*/
      e[29][1]), i(r, "r", u = Fn / /*viewportScale*/
      e[3]), i(r, "class", "svelte-1vxo6dc"), i(n, "id", `${/*maskId*/
      e[18]}-${/*elementIdx*/
      e[32]}-inner`), i(n, "class", "a9s-multipolygon-editor-mask svelte-1vxo6dc");
    },
    m(p, d) {
      U(p, n, d), Z(n, t), Z(n, r);
    },
    p(p, d) {
      d[0] & /*mask*/
      512 && o !== (o = /*mask*/
      p[9].x) && i(t, "x", o), d[0] & /*mask*/
      512 && s !== (s = /*mask*/
      p[9].y) && i(t, "y", s), d[0] & /*mask*/
      512 && l !== (l = /*mask*/
      p[9].w) && i(t, "width", l), d[0] & /*mask*/
      512 && a !== (a = /*mask*/
      p[9].h) && i(t, "height", a), d[0] & /*midpoints, visibleMidpoint*/
      1088 && f !== (f = /*point*/
      p[29][0]) && i(r, "cx", f), d[0] & /*midpoints, visibleMidpoint*/
      1088 && c !== (c = /*point*/
      p[29][1]) && i(r, "cy", c), d[0] & /*viewportScale*/
      8 && u !== (u = Fn / /*viewportScale*/
      p[3]) && i(r, "r", u);
    },
    d(p) {
      p && B(n);
    }
  };
}
function Vo(e) {
  let n, t;
  function o(...s) {
    return (
      /*func*/
      e[19](
        /*elementIdx*/
        e[32],
        /*ringIdx*/
        e[35],
        /*pointIdx*/
        e[37],
        ...s
      )
    );
  }
  return n = new Ye({
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
    le(
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
      ge(n.$$.fragment);
    },
    m(s, l) {
      de(n, s, l), t = !0;
    },
    p(s, l) {
      e = s;
      const a = {};
      l[0] & /*geom*/
      32 && (a.x = /*point*/
      e[29][0]), l[0] & /*geom*/
      32 && (a.y = /*point*/
      e[29][1]), l[0] & /*viewportScale*/
      8 && (a.scale = /*viewportScale*/
      e[3]), l[0] & /*selectedCorners*/
      256 && (a.selected = /*selectedCorners*/
      e[8].some(o)), n.$set(a);
    },
    i(s) {
      t || ($(n.$$.fragment, s), t = !0);
    },
    o(s) {
      ne(n.$$.fragment, s), t = !1;
    },
    d(s) {
      me(n, s);
    }
  };
}
function Ko(e) {
  let n, t, o = De(
    /*ring*/
    e[33].points
  ), s = [];
  for (let a = 0; a < o.length; a += 1)
    s[a] = Vo(Yo(e, o, a));
  const l = (a) => ne(s[a], 1, 1, () => {
    s[a] = null;
  });
  return {
    c() {
      for (let a = 0; a < s.length; a += 1)
        s[a].c();
      n = Ie();
    },
    m(a, r) {
      for (let f = 0; f < s.length; f += 1)
        s[f] && s[f].m(a, r);
      U(a, n, r), t = !0;
    },
    p(a, r) {
      if (r[0] & /*geom, viewportScale, selectedCorners, onEnterHandle, onLeaveHandle, onHandlePointerDown, grab, onHandlePointerUp*/
      268491048) {
        o = De(
          /*ring*/
          a[33].points
        );
        let f;
        for (f = 0; f < o.length; f += 1) {
          const c = Yo(a, o, f);
          s[f] ? (s[f].p(c, r), $(s[f], 1)) : (s[f] = Vo(c), s[f].c(), $(s[f], 1), s[f].m(n.parentNode, n));
        }
        for (Fe(), f = o.length; f < s.length; f += 1)
          l(f);
        We();
      }
    },
    i(a) {
      if (!t) {
        for (let r = 0; r < o.length; r += 1)
          $(s[r]);
        t = !0;
      }
    },
    o(a) {
      s = s.filter(Boolean);
      for (let r = 0; r < s.length; r += 1)
        ne(s[r]);
      t = !1;
    },
    d(a) {
      a && B(n), Xn(s, a);
    }
  };
}
function Fo(e) {
  let n, t, o, s, l, a, r, f, c, u, p, d, _, g, h, E, N, H = (
    /*visibleMidpoint*/
    e[6] !== void 0 && !/*isHandleHovered*/
    e[7] && qo(kt(e))
  ), y = (
    /*visibleMidpoint*/
    e[6] !== void 0 && !/*isHandleHovered*/
    e[7] && zo(Et(e))
  ), b = De(
    /*element*/
    e[30].rings
  ), k = [];
  for (let m = 0; m < b.length; m += 1)
    k[m] = Ko(Go(e, b, m));
  const P = (m) => ne(k[m], 1, 1, () => {
    k[m] = null;
  });
  return {
    c() {
      n = Y("g"), t = Y("defs"), o = Y("mask"), s = Y("rect"), c = Y("path"), H && H.c(), y && y.c(), p = Y("path"), _ = Y("path");
      for (let m = 0; m < k.length; m += 1)
        k[m].c();
      i(s, "x", l = /*mask*/
      e[9].x), i(s, "y", a = /*mask*/
      e[9].y), i(s, "width", r = /*mask*/
      e[9].w), i(s, "height", f = /*mask*/
      e[9].h), i(s, "class", "svelte-1vxo6dc"), i(c, "d", u = Sn(
        /*element*/
        e[30]
      )), i(c, "class", "svelte-1vxo6dc"), i(o, "id", `${/*maskId*/
      e[18]}-${/*elementIdx*/
      e[32]}-outer`), i(o, "class", "a9s-multipolygon-editor-mask svelte-1vxo6dc"), i(p, "class", "a9s-outer"), i(p, "mask", `url(#${/*maskId*/
      e[18]}-${/*elementIdx*/
      e[32]}-outer)`), i(p, "fill-rule", "evenodd"), i(p, "d", d = Sn(
        /*element*/
        e[30]
      )), i(_, "class", "a9s-inner"), i(_, "mask", `url(#${/*maskId*/
      e[18]}-${/*elementIdx*/
      e[32]}-inner)`), i(
        _,
        "style",
        /*computedStyle*/
        e[1]
      ), i(_, "fill-rule", "evenodd"), i(_, "d", g = Sn(
        /*element*/
        e[30]
      ));
    },
    m(m, L) {
      U(m, n, L), Z(n, t), Z(t, o), Z(o, s), Z(o, c), H && H.m(o, null), y && y.m(t, null), Z(n, p), Z(n, _);
      for (let w = 0; w < k.length; w += 1)
        k[w] && k[w].m(n, null);
      h = !0, E || (N = [
        x(
          p,
          "pointerup",
          /*onShapePointerUp*/
          e[13]
        ),
        x(p, "pointerdown", function() {
          le(
            /*grab*/
            e[28]("SHAPE")
          ) && e[28]("SHAPE").apply(this, arguments);
        }),
        x(
          _,
          "pointerup",
          /*onShapePointerUp*/
          e[13]
        ),
        x(_, "pointerdown", function() {
          le(
            /*grab*/
            e[28]("SHAPE")
          ) && e[28]("SHAPE").apply(this, arguments);
        })
      ], E = !0);
    },
    p(m, L) {
      if (e = m, (!h || L[0] & /*mask*/
      512 && l !== (l = /*mask*/
      e[9].x)) && i(s, "x", l), (!h || L[0] & /*mask*/
      512 && a !== (a = /*mask*/
      e[9].y)) && i(s, "y", a), (!h || L[0] & /*mask*/
      512 && r !== (r = /*mask*/
      e[9].w)) && i(s, "width", r), (!h || L[0] & /*mask*/
      512 && f !== (f = /*mask*/
      e[9].h)) && i(s, "height", f), (!h || L[0] & /*geom*/
      32 && u !== (u = Sn(
        /*element*/
        e[30]
      ))) && i(c, "d", u), /*visibleMidpoint*/
      e[6] !== void 0 && !/*isHandleHovered*/
      e[7] ? H ? H.p(kt(e), L) : (H = qo(kt(e)), H.c(), H.m(o, null)) : H && (H.d(1), H = null), /*visibleMidpoint*/
      e[6] !== void 0 && !/*isHandleHovered*/
      e[7] ? y ? y.p(Et(e), L) : (y = zo(Et(e)), y.c(), y.m(t, null)) : y && (y.d(1), y = null), (!h || L[0] & /*geom*/
      32 && d !== (d = Sn(
        /*element*/
        e[30]
      ))) && i(p, "d", d), (!h || L[0] & /*computedStyle*/
      2) && i(
        _,
        "style",
        /*computedStyle*/
        e[1]
      ), (!h || L[0] & /*geom*/
      32 && g !== (g = Sn(
        /*element*/
        e[30]
      ))) && i(_, "d", g), L[0] & /*geom, viewportScale, selectedCorners, onEnterHandle, onLeaveHandle, onHandlePointerDown, grab, onHandlePointerUp*/
      268491048) {
        b = De(
          /*element*/
          e[30].rings
        );
        let w;
        for (w = 0; w < b.length; w += 1) {
          const T = Go(e, b, w);
          k[w] ? (k[w].p(T, L), $(k[w], 1)) : (k[w] = Ko(T), k[w].c(), $(k[w], 1), k[w].m(n, null));
        }
        for (Fe(), w = b.length; w < k.length; w += 1)
          P(w);
        We();
      }
    },
    i(m) {
      if (!h) {
        for (let L = 0; L < b.length; L += 1)
          $(k[L]);
        h = !0;
      }
    },
    o(m) {
      k = k.filter(Boolean);
      for (let L = 0; L < k.length; L += 1)
        ne(k[L]);
      h = !1;
    },
    d(m) {
      m && B(n), H && H.d(), y && y.d(), Xn(k, m), E = !1, Oe(N);
    }
  };
}
function Wo(e) {
  let n, t;
  return n = new zt({
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
    le(
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
      ge(n.$$.fragment);
    },
    m(o, s) {
      de(n, o, s), t = !0;
    },
    p(o, s) {
      e = o;
      const l = {};
      s[0] & /*midpoints, visibleMidpoint*/
      1088 && (l.x = /*point*/
      e[29][0]), s[0] & /*midpoints, visibleMidpoint*/
      1088 && (l.y = /*point*/
      e[29][1]), s[0] & /*viewportScale*/
      8 && (l.scale = /*viewportScale*/
      e[3]), n.$set(l);
    },
    i(o) {
      t || ($(n.$$.fragment, o), t = !0);
    },
    o(o) {
      ne(n.$$.fragment, o), t = !1;
    },
    d(o) {
      me(n, o);
    }
  };
}
function sr(e) {
  let n, t, o, s = De(
    /*geom*/
    e[5].polygons
  ), l = [];
  for (let f = 0; f < s.length; f += 1)
    l[f] = Fo(Uo(e, s, f));
  const a = (f) => ne(l[f], 1, 1, () => {
    l[f] = null;
  });
  let r = (
    /*visibleMidpoint*/
    e[6] !== void 0 && !/*isHandleHovered*/
    e[7] && Wo(vt(e))
  );
  return {
    c() {
      for (let f = 0; f < l.length; f += 1)
        l[f].c();
      n = te(), r && r.c(), t = Ie();
    },
    m(f, c) {
      for (let u = 0; u < l.length; u += 1)
        l[u] && l[u].m(f, c);
      U(f, n, c), r && r.m(f, c), U(f, t, c), o = !0;
    },
    p(f, c) {
      if (c[0] & /*geom, viewportScale, selectedCorners, onEnterHandle, onLeaveHandle, onHandlePointerDown, grab, onHandlePointerUp, maskId, computedStyle, onShapePointerUp, midpoints, visibleMidpoint, mask, isHandleHovered*/
      268763114) {
        s = De(
          /*geom*/
          f[5].polygons
        );
        let u;
        for (u = 0; u < s.length; u += 1) {
          const p = Uo(f, s, u);
          l[u] ? (l[u].p(p, c), $(l[u], 1)) : (l[u] = Fo(p), l[u].c(), $(l[u], 1), l[u].m(n.parentNode, n));
        }
        for (Fe(), u = s.length; u < l.length; u += 1)
          a(u);
        We();
      }
      /*visibleMidpoint*/
      f[6] !== void 0 && !/*isHandleHovered*/
      f[7] ? r ? (r.p(vt(f), c), c[0] & /*visibleMidpoint, isHandleHovered*/
      192 && $(r, 1)) : (r = Wo(vt(f)), r.c(), $(r, 1), r.m(t.parentNode, t)) : r && (Fe(), ne(r, 1, 1, () => {
        r = null;
      }), We());
    },
    i(f) {
      if (!o) {
        for (let c = 0; c < s.length; c += 1)
          $(l[c]);
        $(r), o = !0;
      }
    },
    o(f) {
      l = l.filter(Boolean);
      for (let c = 0; c < l.length; c += 1)
        ne(l[c]);
      ne(r), o = !1;
    },
    d(f) {
      f && (B(n), B(t)), Xn(l, f), r && r.d(f);
    }
  };
}
function lr(e) {
  let n, t;
  return n = new gn({
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
          sr,
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
      ge(n.$$.fragment);
    },
    m(o, s) {
      de(n, o, s), t = !0;
    },
    p(o, s) {
      const l = {};
      s[0] & /*shape*/
      1 && (l.shape = /*shape*/
      o[0]), s[0] & /*transform*/
      4 && (l.transform = /*transform*/
      o[2]), s[0] & /*svgEl*/
      16 && (l.svgEl = /*svgEl*/
      o[4]), s[0] & /*midpoints, visibleMidpoint, viewportScale, isHandleHovered, geom, selectedCorners, grab, computedStyle, mask*/
      268437482 | s[1] & /*$$scope*/
      128 && (l.$$scope = { dirty: s, ctx: o }), n.$set(l);
    },
    i(o) {
      t || ($(n.$$.fragment, o), t = !0);
    },
    o(o) {
      ne(n.$$.fragment, o), t = !1;
    },
    d(o) {
      me(n, o);
    }
  };
}
const ir = 250, rr = 1e3, Fn = 4.5;
function ar(e, n, t) {
  let o, s, l;
  const a = en();
  let { shape: r } = n, { computedStyle: f } = n, { transform: c } = n, { viewportScale: u = 1 } = n, { svgEl: p } = n, d, _ = !1, g, h = [];
  const E = () => t(7, _ = !0), N = () => t(7, _ = !1), H = (O) => {
    if (h.length > 0 || !s.some((J) => J.visible)) {
      t(6, d = void 0);
      return;
    }
    const [z, C] = c.elementToImage(O.offsetX, O.offsetY), G = (J) => Math.pow(J[0] - z, 2) + Math.pow(J[1] - C, 2), F = Mi(o).reduce((J, ee) => G(ee) < G(J) ? ee : J), D = s.filter((J) => J.visible).reduce((J, ee) => G(ee.point) < G(J.point) ? ee : J), j = Math.pow(rr / u, 2);
    G(F) < j || G(D.point) < j ? t(6, d = s.indexOf(D)) : t(6, d = void 0);
  }, y = () => {
    document.activeElement !== p && p.focus();
  }, b = () => {
    t(8, h = []), y();
  }, k = (O) => {
    t(7, _ = !0), O.preventDefault(), O.stopPropagation(), g = performance.now();
  }, P = (O, z, C) => (G) => {
    if (!g || hn || performance.now() - g > ir) return;
    const F = (j) => j.polygon === O && j.ring === z && j.point === C, D = h.some(F);
    G.metaKey || G.ctrlKey || G.shiftKey ? D ? t(8, h = h.filter((j) => !F(j))) : t(8, h = [...h, { polygon: O, ring: z, point: C }]) : D && h.length > 1 ? t(8, h = [{ polygon: O, ring: z, point: C }]) : D ? t(8, h = []) : t(8, h = [{ polygon: O, ring: z, point: C }]), y();
  }, m = (O, z, C) => {
    y();
    const G = O.geometry.polygons;
    let F;
    if (z === "SHAPE")
      F = G.map((D) => {
        const j = D.rings.map((J, ee) => ({ points: J.points.map((se, ve) => [se[0] + C[0], se[1] + C[1]]) })), V = pn(j[0].points);
        return { rings: j, bounds: V };
      });
    else {
      const [D, j, V, J] = z.split("-").map((ee) => parseInt(ee));
      F = G.map((ee, W) => {
        if (W === j) {
          const se = ee.rings.map((oe, He) => He === V ? { points: oe.points.map((Ee, ue) => ue === J ? [Ee[0] + C[0], Ee[1] + C[1]] : Ee) } : oe), ve = pn(se[0].points);
          return { rings: se, bounds: ve };
        } else
          return ee;
      });
    }
    return {
      ...O,
      geometry: {
        polygons: F,
        bounds: _t(F)
      }
    };
  }, L = (O) => async (z) => {
    z.stopPropagation();
    const C = s[O], G = o.polygons.map((D, j) => {
      if (j === C.elementIdx) {
        const V = D.rings.map((ee, W) => W === C.ringIdx ? { points: [
          ...ee.points.slice(0, C.pointIdx + 1),
          C.point,
          ...ee.points.slice(C.pointIdx + 1)
        ] } : ee), J = pn(V[0].points);
        return { rings: V, bounds: J };
      } else
        return D;
    });
    a("change", {
      ...r,
      geometry: {
        polygons: G,
        bounds: _t(G)
      }
    }), await Vn();
    const F = [...document.querySelectorAll(".a9s-handle")][O + 1];
    if (F != null && F.firstChild) {
      const D = new PointerEvent(
        "pointerdown",
        {
          bubbles: !0,
          cancelable: !0,
          clientX: z.clientX,
          clientY: z.clientY,
          pointerId: z.pointerId,
          pointerType: z.pointerType,
          isPrimary: z.isPrimary,
          buttons: z.buttons
        }
      );
      F.firstChild.dispatchEvent(D);
    }
  }, w = () => {
    const O = o.polygons.map((C, G) => {
      if (h.some((D) => D.polygon === G)) {
        const D = C.rings.map((V, J) => {
          const ee = h.filter((W) => W.polygon === G && W.ring === J);
          return ee.length && V.points.length - ee.length >= 3 ? { points: V.points.filter((se, ve) => !ee.some((oe) => oe.point === ve)) } : V;
        }), j = pn(D[0].points);
        return { rings: D, bounds: j };
      } else
        return C;
    });
    !jt(o.polygons, O) && (a("change", {
      ...r,
      geometry: {
        polygons: O,
        bounds: _t(O)
      }
    }), t(8, h = []));
  };
  sn(() => {
    if (hn) return;
    const O = (z) => {
      (z.key === "Delete" || z.key === "Backspace") && (z.preventDefault(), w());
    };
    return p.addEventListener("pointermove", H), p.addEventListener("keydown", O), () => {
      p.removeEventListener("pointermove", H), p.removeEventListener("keydown", O);
    };
  });
  const T = `polygon-mask-${Math.random().toString(36).substring(2, 12)}`, A = (O, z, C, { polygon: G, ring: F, point: D }) => G === O && F === z && D === C;
  function S(O) {
    he.call(this, e, O);
  }
  function X(O) {
    he.call(this, e, O);
  }
  function I(O) {
    he.call(this, e, O);
  }
  return e.$$set = (O) => {
    "shape" in O && t(0, r = O.shape), "computedStyle" in O && t(1, f = O.computedStyle), "transform" in O && t(2, c = O.transform), "viewportScale" in O && t(3, u = O.viewportScale), "svgEl" in O && t(4, p = O.svgEl);
  }, e.$$.update = () => {
    e.$$.dirty[0] & /*shape*/
    1 && t(5, o = r.geometry), e.$$.dirty[0] & /*geom, viewportScale*/
    40 && t(10, s = hn ? [] : or(o, u)), e.$$.dirty[0] & /*geom, viewportScale*/
    40 && t(9, l = qt(o.bounds, Fn / u));
  }, [
    r,
    f,
    c,
    u,
    p,
    o,
    d,
    _,
    h,
    l,
    s,
    E,
    N,
    b,
    k,
    P,
    m,
    L,
    T,
    A,
    S,
    X,
    I
  ];
}
class fr extends Ne {
  constructor(n) {
    super(), Re(
      this,
      n,
      ar,
      lr,
      Ce,
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
cn.RECTANGLE, cn.POLYGON, cn.MULTIPOLYGON;
typeof navigator > "u" ? !1 : navigator.userAgent.indexOf("Mac OS X") !== -1;
function cr(e) {
  let n, t, o, s, l, a, r, f, c, u, p, d, _, g, h, E, N, H, y, b, k, P, m, L, w, T, A, S, X, I, O, z, C, G, F;
  return T = new Ye({
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
  }), T.$on("pointerdown", function() {
    le(
      /*grab*/
      e[12]("TOP")
    ) && e[12]("TOP").apply(this, arguments);
  }), S = new Ye({
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
  }), S.$on("pointerdown", function() {
    le(
      /*grab*/
      e[12]("RIGHT")
    ) && e[12]("RIGHT").apply(this, arguments);
  }), I = new Ye({
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
  }), I.$on("pointerdown", function() {
    le(
      /*grab*/
      e[12]("BOTTOM")
    ) && e[12]("BOTTOM").apply(this, arguments);
  }), z = new Ye({
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
  }), z.$on("pointerdown", function() {
    le(
      /*grab*/
      e[12]("LEFT")
    ) && e[12]("LEFT").apply(this, arguments);
  }), {
    c() {
      n = Y("defs"), t = Y("mask"), o = Y("rect"), f = Y("ellipse"), _ = te(), g = Y("ellipse"), y = te(), b = Y("ellipse"), w = te(), ge(T.$$.fragment), A = te(), ge(S.$$.fragment), X = te(), ge(I.$$.fragment), O = te(), ge(z.$$.fragment), i(o, "x", s = /*mask*/
      e[6].x), i(o, "y", l = /*mask*/
      e[6].y), i(o, "width", a = /*mask*/
      e[6].w), i(o, "height", r = /*mask*/
      e[6].h), i(o, "class", "svelte-wdm5en"), i(f, "cx", c = /*geom*/
      e[5].cx), i(f, "cy", u = /*geom*/
      e[5].cy), i(f, "rx", p = /*geom*/
      e[5].rx), i(f, "ry", d = /*geom*/
      e[5].ry), i(f, "class", "svelte-wdm5en"), i(
        t,
        "id",
        /*maskId*/
        e[8]
      ), i(t, "class", "a9s-ellipse-editor-mask svelte-wdm5en"), i(g, "class", "a9s-outer"), i(g, "mask", `url(#${/*maskId*/
      e[8]})`), i(g, "cx", h = /*geom*/
      e[5].cx), i(g, "cy", E = /*geom*/
      e[5].cy), i(g, "rx", N = /*geom*/
      e[5].rx), i(g, "ry", H = /*geom*/
      e[5].ry), i(b, "class", "a9s-inner a9s-shape-handle"), i(
        b,
        "style",
        /*computedStyle*/
        e[1]
      ), i(b, "cx", k = /*geom*/
      e[5].cx), i(b, "cy", P = /*geom*/
      e[5].cy), i(b, "rx", m = /*geom*/
      e[5].rx), i(b, "ry", L = /*geom*/
      e[5].ry);
    },
    m(D, j) {
      U(D, n, j), Z(n, t), Z(t, o), Z(t, f), U(D, _, j), U(D, g, j), U(D, y, j), U(D, b, j), U(D, w, j), de(T, D, j), U(D, A, j), de(S, D, j), U(D, X, j), de(I, D, j), U(D, O, j), de(z, D, j), C = !0, G || (F = [
        x(g, "pointerdown", function() {
          le(
            /*grab*/
            e[12]("SHAPE")
          ) && e[12]("SHAPE").apply(this, arguments);
        }),
        x(b, "pointerdown", function() {
          le(
            /*grab*/
            e[12]("SHAPE")
          ) && e[12]("SHAPE").apply(this, arguments);
        })
      ], G = !0);
    },
    p(D, j) {
      e = D, (!C || j & /*mask*/
      64 && s !== (s = /*mask*/
      e[6].x)) && i(o, "x", s), (!C || j & /*mask*/
      64 && l !== (l = /*mask*/
      e[6].y)) && i(o, "y", l), (!C || j & /*mask*/
      64 && a !== (a = /*mask*/
      e[6].w)) && i(o, "width", a), (!C || j & /*mask*/
      64 && r !== (r = /*mask*/
      e[6].h)) && i(o, "height", r), (!C || j & /*geom*/
      32 && c !== (c = /*geom*/
      e[5].cx)) && i(f, "cx", c), (!C || j & /*geom*/
      32 && u !== (u = /*geom*/
      e[5].cy)) && i(f, "cy", u), (!C || j & /*geom*/
      32 && p !== (p = /*geom*/
      e[5].rx)) && i(f, "rx", p), (!C || j & /*geom*/
      32 && d !== (d = /*geom*/
      e[5].ry)) && i(f, "ry", d), (!C || j & /*geom*/
      32 && h !== (h = /*geom*/
      e[5].cx)) && i(g, "cx", h), (!C || j & /*geom*/
      32 && E !== (E = /*geom*/
      e[5].cy)) && i(g, "cy", E), (!C || j & /*geom*/
      32 && N !== (N = /*geom*/
      e[5].rx)) && i(g, "rx", N), (!C || j & /*geom*/
      32 && H !== (H = /*geom*/
      e[5].ry)) && i(g, "ry", H), (!C || j & /*computedStyle*/
      2) && i(
        b,
        "style",
        /*computedStyle*/
        e[1]
      ), (!C || j & /*geom*/
      32 && k !== (k = /*geom*/
      e[5].cx)) && i(b, "cx", k), (!C || j & /*geom*/
      32 && P !== (P = /*geom*/
      e[5].cy)) && i(b, "cy", P), (!C || j & /*geom*/
      32 && m !== (m = /*geom*/
      e[5].rx)) && i(b, "rx", m), (!C || j & /*geom*/
      32 && L !== (L = /*geom*/
      e[5].ry)) && i(b, "ry", L);
      const V = {};
      j & /*geom*/
      32 && (V.x = /*geom*/
      e[5].cx), j & /*geom*/
      32 && (V.y = /*geom*/
      e[5].cy - /*geom*/
      e[5].ry), j & /*viewportScale*/
      8 && (V.scale = /*viewportScale*/
      e[3]), T.$set(V);
      const J = {};
      j & /*geom*/
      32 && (J.x = /*geom*/
      e[5].cx + /*geom*/
      e[5].rx), j & /*geom*/
      32 && (J.y = /*geom*/
      e[5].cy), j & /*viewportScale*/
      8 && (J.scale = /*viewportScale*/
      e[3]), S.$set(J);
      const ee = {};
      j & /*geom*/
      32 && (ee.x = /*geom*/
      e[5].cx), j & /*geom*/
      32 && (ee.y = /*geom*/
      e[5].cy + /*geom*/
      e[5].ry), j & /*viewportScale*/
      8 && (ee.scale = /*viewportScale*/
      e[3]), I.$set(ee);
      const W = {};
      j & /*geom*/
      32 && (W.x = /*geom*/
      e[5].cx - /*geom*/
      e[5].rx), j & /*geom*/
      32 && (W.y = /*geom*/
      e[5].cy), j & /*viewportScale*/
      8 && (W.scale = /*viewportScale*/
      e[3]), z.$set(W);
    },
    i(D) {
      C || ($(T.$$.fragment, D), $(S.$$.fragment, D), $(I.$$.fragment, D), $(z.$$.fragment, D), C = !0);
    },
    o(D) {
      ne(T.$$.fragment, D), ne(S.$$.fragment, D), ne(I.$$.fragment, D), ne(z.$$.fragment, D), C = !1;
    },
    d(D) {
      D && (B(n), B(_), B(g), B(y), B(b), B(w), B(A), B(X), B(O)), me(T, D), me(S, D), me(I, D), me(z, D), G = !1, Oe(F);
    }
  };
}
function ur(e) {
  let n, t;
  return n = new gn({
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
          cr,
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
      ge(n.$$.fragment);
    },
    m(o, s) {
      de(n, o, s), t = !0;
    },
    p(o, [s]) {
      const l = {};
      s & /*shape*/
      1 && (l.shape = /*shape*/
      o[0]), s & /*transform*/
      4 && (l.transform = /*transform*/
      o[2]), s & /*svgEl*/
      16 && (l.svgEl = /*svgEl*/
      o[4]), s & /*$$scope, geom, viewportScale, grab, computedStyle, mask*/
      12394 && (l.$$scope = { dirty: s, ctx: o }), n.$set(l);
    },
    i(o) {
      t || ($(n.$$.fragment, o), t = !0);
    },
    o(o) {
      ne(n.$$.fragment, o), t = !1;
    },
    d(o) {
      me(n, o);
    }
  };
}
function pr(e, n, t) {
  let o, s, { shape: l } = n, { computedStyle: a } = n, { transform: r } = n, { viewportScale: f = 1 } = n, { svgEl: c } = n;
  const u = (h, E, N) => {
    const H = h.geometry.bounds;
    let [y, b] = [H.minX, H.minY], [k, P] = [H.maxX, H.maxY];
    const [m, L] = N;
    if (E === "SHAPE")
      y += m, k += m, b += L, P += L;
    else
      switch (E) {
        case "TOP": {
          b += L;
          break;
        }
        case "BOTTOM": {
          P += L;
          break;
        }
        case "LEFT": {
          y += m;
          break;
        }
        case "RIGHT": {
          k += m;
          break;
        }
      }
    const w = Math.min(y, k), T = Math.min(b, P), A = Math.abs(k - y), S = Math.abs(P - b), X = (y + k) / 2, I = (b + P) / 2, O = A / 2, z = S / 2;
    return {
      ...h,
      geometry: {
        ...h.geometry,
        cx: X,
        cy: I,
        rx: O,
        ry: z,
        bounds: {
          minX: w,
          minY: T,
          maxX: w + A,
          maxY: T + S
        }
      }
    };
  }, p = `ellipse-mask-${Math.random().toString(36).substring(2, 12)}`;
  function d(h) {
    he.call(this, e, h);
  }
  function _(h) {
    he.call(this, e, h);
  }
  function g(h) {
    he.call(this, e, h);
  }
  return e.$$set = (h) => {
    "shape" in h && t(0, l = h.shape), "computedStyle" in h && t(1, a = h.computedStyle), "transform" in h && t(2, r = h.transform), "viewportScale" in h && t(3, f = h.viewportScale), "svgEl" in h && t(4, c = h.svgEl);
  }, e.$$.update = () => {
    e.$$.dirty & /*shape*/
    1 && t(5, o = l.geometry), e.$$.dirty & /*geom, viewportScale*/
    40 && t(6, s = bn(o.bounds, 2 / f));
  }, [
    l,
    a,
    r,
    f,
    c,
    o,
    s,
    u,
    p,
    d,
    _,
    g
  ];
}
class hr extends Ne {
  constructor(n) {
    super(), Re(this, n, pr, ur, Ce, {
      shape: 0,
      computedStyle: 1,
      transform: 2,
      viewportScale: 3,
      svgEl: 4
    });
  }
}
function Zo(e) {
  let n, t, o, s, l, a, r, f, c, u, p, d, _, g, h, E, N, H, y, b, k, P;
  return {
    c() {
      n = Y("defs"), t = Y("mask"), o = Y("rect"), f = Y("ellipse"), _ = Y("ellipse"), H = Y("ellipse"), i(o, "x", s = /*x*/
      e[2] - /*buffer*/
      e[6]), i(o, "y", l = /*y*/
      e[3] - /*buffer*/
      e[6]), i(o, "width", a = /*w*/
      e[4] + 2 * /*buffer*/
      e[6]), i(o, "height", r = /*h*/
      e[5] + 2 * /*buffer*/
      e[6]), i(o, "class", "svelte-1koqlb3"), i(f, "cx", c = /*x*/
      e[2] + /*w*/
      e[4] / 2), i(f, "cy", u = /*y*/
      e[3] + /*h*/
      e[5] / 2), i(f, "rx", p = /*w*/
      e[4] / 2), i(f, "ry", d = /*h*/
      e[5] / 2), i(f, "class", "svelte-1koqlb3"), i(
        t,
        "id",
        /*maskId*/
        e[7]
      ), i(t, "class", "a9s-rubberband-ellipse-mask svelte-1koqlb3"), i(_, "class", "a9s-outer"), i(_, "mask", `url(#${/*maskId*/
      e[7]})`), i(_, "cx", g = /*x*/
      e[2] + /*w*/
      e[4] / 2), i(_, "cy", h = /*y*/
      e[3] + /*h*/
      e[5] / 2), i(_, "rx", E = /*w*/
      e[4] / 2), i(_, "ry", N = /*h*/
      e[5] / 2), i(H, "class", "a9s-inner"), i(H, "cx", y = /*x*/
      e[2] + /*w*/
      e[4] / 2), i(H, "cy", b = /*y*/
      e[3] + /*h*/
      e[5] / 2), i(H, "rx", k = /*w*/
      e[4] / 2), i(H, "ry", P = /*h*/
      e[5] / 2);
    },
    m(m, L) {
      U(m, n, L), Z(n, t), Z(t, o), Z(t, f), U(m, _, L), U(m, H, L);
    },
    p(m, L) {
      L & /*x, buffer*/
      68 && s !== (s = /*x*/
      m[2] - /*buffer*/
      m[6]) && i(o, "x", s), L & /*y, buffer*/
      72 && l !== (l = /*y*/
      m[3] - /*buffer*/
      m[6]) && i(o, "y", l), L & /*w, buffer*/
      80 && a !== (a = /*w*/
      m[4] + 2 * /*buffer*/
      m[6]) && i(o, "width", a), L & /*h, buffer*/
      96 && r !== (r = /*h*/
      m[5] + 2 * /*buffer*/
      m[6]) && i(o, "height", r), L & /*x, w*/
      20 && c !== (c = /*x*/
      m[2] + /*w*/
      m[4] / 2) && i(f, "cx", c), L & /*y, h*/
      40 && u !== (u = /*y*/
      m[3] + /*h*/
      m[5] / 2) && i(f, "cy", u), L & /*w*/
      16 && p !== (p = /*w*/
      m[4] / 2) && i(f, "rx", p), L & /*h*/
      32 && d !== (d = /*h*/
      m[5] / 2) && i(f, "ry", d), L & /*x, w*/
      20 && g !== (g = /*x*/
      m[2] + /*w*/
      m[4] / 2) && i(_, "cx", g), L & /*y, h*/
      40 && h !== (h = /*y*/
      m[3] + /*h*/
      m[5] / 2) && i(_, "cy", h), L & /*w*/
      16 && E !== (E = /*w*/
      m[4] / 2) && i(_, "rx", E), L & /*h*/
      32 && N !== (N = /*h*/
      m[5] / 2) && i(_, "ry", N), L & /*x, w*/
      20 && y !== (y = /*x*/
      m[2] + /*w*/
      m[4] / 2) && i(H, "cx", y), L & /*y, h*/
      40 && b !== (b = /*y*/
      m[3] + /*h*/
      m[5] / 2) && i(H, "cy", b), L & /*w*/
      16 && k !== (k = /*w*/
      m[4] / 2) && i(H, "rx", k), L & /*h*/
      32 && P !== (P = /*h*/
      m[5] / 2) && i(H, "ry", P);
    },
    d(m) {
      m && (B(n), B(_), B(H));
    }
  };
}
function dr(e) {
  let n, t = (
    /*origin*/
    e[1] && Zo(e)
  );
  return {
    c() {
      n = Y("g"), t && t.c(), i(n, "class", "a9s-annotation a9s-rubberband");
    },
    m(o, s) {
      U(o, n, s), t && t.m(n, null), e[12](n);
    },
    p(o, [s]) {
      /*origin*/
      o[1] ? t ? t.p(o, s) : (t = Zo(o), t.c(), t.m(n, null)) : t && (t.d(1), t = null);
    },
    i: Te,
    o: Te,
    d(o) {
      o && B(n), t && t.d(), e[12](null);
    }
  };
}
function mr(e, n, t) {
  let o;
  const s = en();
  let { addEventListener: l } = n, { drawingMode: a } = n, { transform: r } = n, { viewportScale: f } = n, c, u, p, d, _, g, h, E = !1, N = !1, H, y;
  const b = (S) => {
    const X = S;
    H = performance.now(), a === "drag" && (t(1, u = r.elementToImage(X.offsetX, X.offsetY)), p = u, t(2, d = u[0]), t(3, _ = u[1]), t(4, g = 1), t(5, h = 1));
  }, k = (S) => {
    const X = S || y;
    if (u)
      if (p = r.elementToImage(X.offsetX, X.offsetY), N) {
        const I = 2 * Math.abs(p[0] - u[0]), O = 2 * Math.abs(p[1] - u[1]);
        t(4, g = E ? Math.max(I, O) : I), t(5, h = E ? g : O), t(2, d = Math.min(p[0], u[0] - g / 2)), t(3, _ = Math.min(p[1], u[1] - h / 2));
      } else {
        const I = Math.abs(p[0] - u[0]), O = Math.abs(p[1] - u[1]);
        t(4, g = E ? Math.max(I, O) : I), t(5, h = E ? g : O), t(2, d = Math.min(p[0], u[0])), t(3, _ = Math.min(p[1], u[1]));
      }
    S && (y = S);
  }, P = (S) => {
    const X = S, I = performance.now() - H;
    if (a === "click") {
      if (I > 300) return;
      u ? m() : (t(1, u = r.elementToImage(X.offsetX, X.offsetY)), p = u, t(2, d = u[0]), t(3, _ = u[1]), t(4, g = 1), t(5, h = 1));
    } else u && (I > 300 || g * h > 100 ? (X.stopPropagation(), m()) : (t(1, u = void 0), p = void 0, y = void 0));
  }, m = () => {
    if (g * h > 15) {
      const S = {
        type: Le.ELLIPSE,
        geometry: {
          bounds: {
            minX: d,
            minY: _,
            maxX: d + g,
            maxY: _ + h
          },
          cx: d + g / 2,
          cy: _ + h / 2,
          rx: g / 2,
          ry: h / 2
        }
      };
      s("create", S);
    }
    t(1, u = void 0), p = void 0, y = void 0;
  }, L = (S) => {
    S.key === "Shift" && (E = !0, k()), S.key === "Control" && (N = !0, k());
  }, w = (S) => {
    S.key === "Shift" && (E = !1, k()), S.key === "Control" && (N = !1, k());
  };
  sn(() => (document.addEventListener("keyup", w), document.addEventListener("keydown", L), l("pointerdown", b), l("pointermove", k), l("pointerup", P, !0), () => {
    document.removeEventListener("keyup", w), document.removeEventListener("keydown", L);
  }));
  const T = `ellipse-mask-${Math.random().toString(36).substring(2, 12)}`;
  function A(S) {
    mn[S ? "unshift" : "push"](() => {
      c = S, t(0, c);
    });
  }
  return e.$$set = (S) => {
    "addEventListener" in S && t(8, l = S.addEventListener), "drawingMode" in S && t(9, a = S.drawingMode), "transform" in S && t(10, r = S.transform), "viewportScale" in S && t(11, f = S.viewportScale);
  }, e.$$.update = () => {
    e.$$.dirty & /*viewportScale*/
    2048 && t(6, o = 2 / f);
  }, [
    c,
    u,
    d,
    _,
    g,
    h,
    o,
    T,
    l,
    a,
    r,
    f,
    A
  ];
}
class gr extends Ne {
  constructor(n) {
    super(), Re(this, n, mr, dr, Ce, {
      addEventListener: 8,
      drawingMode: 9,
      transform: 10,
      viewportScale: 11
    });
  }
}
function _r(e) {
  let n, t, o, s, l, a, r, f, c, u, p, d, _, g, h, E, N, H;
  return _ = new Ye({
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
  }), _.$on("pointerdown", function() {
    le(
      /*grab*/
      e[10]("POINT1")
    ) && e[10]("POINT1").apply(this, arguments);
  }), h = new Ye({
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
  }), h.$on("pointerdown", function() {
    le(
      /*grab*/
      e[10]("POINT2")
    ) && e[10]("POINT2").apply(this, arguments);
  }), {
    c() {
      n = Y("line"), a = te(), r = Y("line"), d = te(), ge(_.$$.fragment), g = te(), ge(h.$$.fragment), i(n, "class", "a9s-outer"), i(n, "x1", t = /*geom*/
      e[5].points[0][0]), i(n, "y1", o = /*geom*/
      e[5].points[0][1]), i(n, "x2", s = /*geom*/
      e[5].points[1][0]), i(n, "y2", l = /*geom*/
      e[5].points[1][1]), i(r, "class", "a9s-inner a9s-shape-handle"), i(
        r,
        "style",
        /*computedStyle*/
        e[1]
      ), i(r, "x1", f = /*geom*/
      e[5].points[0][0]), i(r, "y1", c = /*geom*/
      e[5].points[0][1]), i(r, "x2", u = /*geom*/
      e[5].points[1][0]), i(r, "y2", p = /*geom*/
      e[5].points[1][1]);
    },
    m(y, b) {
      U(y, n, b), U(y, a, b), U(y, r, b), U(y, d, b), de(_, y, b), U(y, g, b), de(h, y, b), E = !0, N || (H = [
        x(n, "pointerdown", function() {
          le(
            /*grab*/
            e[10]("LINE")
          ) && e[10]("LINE").apply(this, arguments);
        }),
        x(r, "pointerdown", function() {
          le(
            /*grab*/
            e[10]("LINE")
          ) && e[10]("LINE").apply(this, arguments);
        })
      ], N = !0);
    },
    p(y, b) {
      e = y, (!E || b & /*geom*/
      32 && t !== (t = /*geom*/
      e[5].points[0][0])) && i(n, "x1", t), (!E || b & /*geom*/
      32 && o !== (o = /*geom*/
      e[5].points[0][1])) && i(n, "y1", o), (!E || b & /*geom*/
      32 && s !== (s = /*geom*/
      e[5].points[1][0])) && i(n, "x2", s), (!E || b & /*geom*/
      32 && l !== (l = /*geom*/
      e[5].points[1][1])) && i(n, "y2", l), (!E || b & /*computedStyle*/
      2) && i(
        r,
        "style",
        /*computedStyle*/
        e[1]
      ), (!E || b & /*geom*/
      32 && f !== (f = /*geom*/
      e[5].points[0][0])) && i(r, "x1", f), (!E || b & /*geom*/
      32 && c !== (c = /*geom*/
      e[5].points[0][1])) && i(r, "y1", c), (!E || b & /*geom*/
      32 && u !== (u = /*geom*/
      e[5].points[1][0])) && i(r, "x2", u), (!E || b & /*geom*/
      32 && p !== (p = /*geom*/
      e[5].points[1][1])) && i(r, "y2", p);
      const k = {};
      b & /*geom*/
      32 && (k.x = /*geom*/
      e[5].points[0][0]), b & /*geom*/
      32 && (k.y = /*geom*/
      e[5].points[0][1]), b & /*viewportScale*/
      8 && (k.scale = /*viewportScale*/
      e[3]), _.$set(k);
      const P = {};
      b & /*geom*/
      32 && (P.x = /*geom*/
      e[5].points[1][0]), b & /*geom*/
      32 && (P.y = /*geom*/
      e[5].points[1][1]), b & /*viewportScale*/
      8 && (P.scale = /*viewportScale*/
      e[3]), h.$set(P);
    },
    i(y) {
      E || ($(_.$$.fragment, y), $(h.$$.fragment, y), E = !0);
    },
    o(y) {
      ne(_.$$.fragment, y), ne(h.$$.fragment, y), E = !1;
    },
    d(y) {
      y && (B(n), B(a), B(r), B(d), B(g)), me(_, y), me(h, y), N = !1, Oe(H);
    }
  };
}
function yr(e) {
  let n, t;
  return n = new gn({
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
          _r,
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
      ge(n.$$.fragment);
    },
    m(o, s) {
      de(n, o, s), t = !0;
    },
    p(o, [s]) {
      const l = {};
      s & /*shape*/
      1 && (l.shape = /*shape*/
      o[0]), s & /*transform*/
      4 && (l.transform = /*transform*/
      o[2]), s & /*svgEl*/
      16 && (l.svgEl = /*svgEl*/
      o[4]), s & /*$$scope, geom, viewportScale, grab, computedStyle*/
      3114 && (l.$$scope = { dirty: s, ctx: o }), n.$set(l);
    },
    i(o) {
      t || ($(n.$$.fragment, o), t = !0);
    },
    o(o) {
      ne(n.$$.fragment, o), t = !1;
    },
    d(o) {
      me(n, o);
    }
  };
}
function wr(e, n, t) {
  let o, { shape: s } = n, { computedStyle: l } = n, { transform: a } = n, { viewportScale: r = 1 } = n, { svgEl: f } = n;
  const c = (_, g, h) => {
    const E = _.geometry;
    let [[N, H], [y, b]] = E.points;
    const [k, P] = h;
    if (g === "LINE")
      N += k, y += k, H += P, b += P;
    else
      switch (g) {
        case "POINT1": {
          N += k, H += P;
          break;
        }
        case "POINT2": {
          y += k, b += P;
          break;
        }
      }
    return {
      ..._,
      geometry: {
        ..._.geometry,
        points: [[N, H], [y, b]],
        bounds: Xe([[N, H], [y, b]])
      }
    };
  };
  function u(_) {
    he.call(this, e, _);
  }
  function p(_) {
    he.call(this, e, _);
  }
  function d(_) {
    he.call(this, e, _);
  }
  return e.$$set = (_) => {
    "shape" in _ && t(0, s = _.shape), "computedStyle" in _ && t(1, l = _.computedStyle), "transform" in _ && t(2, a = _.transform), "viewportScale" in _ && t(3, r = _.viewportScale), "svgEl" in _ && t(4, f = _.svgEl);
  }, e.$$.update = () => {
    e.$$.dirty & /*shape*/
    1 && t(5, o = s.geometry);
  }, [
    s,
    l,
    a,
    r,
    f,
    o,
    c,
    u,
    p,
    d
  ];
}
class br extends Ne {
  constructor(n) {
    super(), Re(this, n, wr, yr, Ce, {
      shape: 0,
      computedStyle: 1,
      transform: 2,
      viewportScale: 3,
      svgEl: 4
    });
  }
}
function Qo(e) {
  let n, t;
  return {
    c() {
      n = Y("line"), t = Y("line"), i(n, "class", "a9s-outer"), i(
        n,
        "x1",
        /*x1*/
        e[3]
      ), i(
        n,
        "y1",
        /*y1*/
        e[4]
      ), i(
        n,
        "x2",
        /*x2*/
        e[5]
      ), i(
        n,
        "y2",
        /*y2*/
        e[6]
      ), i(t, "class", "a9s-inner"), i(
        t,
        "x1",
        /*x1*/
        e[3]
      ), i(
        t,
        "y1",
        /*y1*/
        e[4]
      ), i(
        t,
        "x2",
        /*x2*/
        e[5]
      ), i(
        t,
        "y2",
        /*y2*/
        e[6]
      );
    },
    m(o, s) {
      U(o, n, s), U(o, t, s);
    },
    p(o, s) {
      s & /*x1*/
      8 && i(
        n,
        "x1",
        /*x1*/
        o[3]
      ), s & /*y1*/
      16 && i(
        n,
        "y1",
        /*y1*/
        o[4]
      ), s & /*x2*/
      32 && i(
        n,
        "x2",
        /*x2*/
        o[5]
      ), s & /*y2*/
      64 && i(
        n,
        "y2",
        /*y2*/
        o[6]
      ), s & /*x1*/
      8 && i(
        t,
        "x1",
        /*x1*/
        o[3]
      ), s & /*y1*/
      16 && i(
        t,
        "y1",
        /*y1*/
        o[4]
      ), s & /*x2*/
      32 && i(
        t,
        "x2",
        /*x2*/
        o[5]
      ), s & /*y2*/
      64 && i(
        t,
        "y2",
        /*y2*/
        o[6]
      );
    },
    d(o) {
      o && (B(n), B(t));
    }
  };
}
function vr(e) {
  let n, t = (
    /*origin*/
    e[1] && /*cursor*/
    e[2] && Qo(e)
  );
  return {
    c() {
      n = Y("g"), t && t.c(), i(n, "class", "a9s-annotation a9s-rubberband");
    },
    m(o, s) {
      U(o, n, s), t && t.m(n, null), e[11](n);
    },
    p(o, [s]) {
      /*origin*/
      o[1] && /*cursor*/
      o[2] ? t ? t.p(o, s) : (t = Qo(o), t.c(), t.m(n, null)) : t && (t.d(1), t = null);
    },
    i: Te,
    o: Te,
    d(o) {
      o && B(n), t && t.d(), e[11](null);
    }
  };
}
function Er(e, n, t) {
  const o = en();
  let { addEventListener: s } = n, { drawingMode: l } = n, { transform: a } = n, { viewportScale: r } = n, f, c, u, p, d, _, g, h, E;
  const N = (P) => {
    const m = P, { timeStamp: L, offsetX: w, offsetY: T } = m;
    h = { timeStamp: L, offsetX: w, offsetY: T }, l === "drag" && (t(1, c = a.elementToImage(m.offsetX, m.offsetY)), t(2, u = c), t(3, p = c[0]), t(4, d = c[1]), t(5, _ = u[0]), t(6, g = u[1]));
  }, H = (P) => {
    const m = P || E;
    c && (t(2, u = a.elementToImage(m.offsetX, m.offsetY)), t(5, _ = u[0]), t(6, g = u[1])), P && (E = P);
  }, y = (P) => {
    const m = P;
    if (l === "click") {
      const L = performance.now() - h.timeStamp, w = an([h.offsetX, h.offsetY], [m.offsetX, m.offsetY]);
      if (L > 300 || w > 15) return;
      c ? b() : (t(1, c = a.elementToImage(m.offsetX, m.offsetY)), t(2, u = c), t(3, p = c[0]), t(4, d = c[1]), t(5, _ = u[0]), t(6, g = u[1]));
    } else c && (m.stopPropagation(), b());
  }, b = () => {
    if (c && u && an(c, u) > 4) {
      const P = {
        type: Le.LINE,
        geometry: {
          bounds: Xe([c, u]),
          points: [c, u]
        }
      };
      o("create", P);
    }
    t(1, c = void 0), t(2, u = void 0), E = void 0;
  };
  sn(() => {
    s("pointerdown", N, !0), s("pointermove", H), s("pointerup", y, !0);
  });
  function k(P) {
    mn[P ? "unshift" : "push"](() => {
      f = P, t(0, f);
    });
  }
  return e.$$set = (P) => {
    "addEventListener" in P && t(7, s = P.addEventListener), "drawingMode" in P && t(8, l = P.drawingMode), "transform" in P && t(9, a = P.transform), "viewportScale" in P && t(10, r = P.viewportScale);
  }, [
    f,
    c,
    u,
    p,
    d,
    _,
    g,
    s,
    l,
    a,
    r,
    k
  ];
}
class kr extends Ne {
  constructor(n) {
    super(), Re(this, n, Er, vr, Ce, {
      addEventListener: 7,
      drawingMode: 8,
      transform: 9,
      viewportScale: 10
    });
  }
}
function Jo(e, n, t) {
  const o = e.slice();
  return o[18] = n[t], o;
}
function $o(e) {
  let n, t, o, s = De(
    /*BG_COLORS*/
    e[5]
  ), l = [];
  for (let a = 0; a < s.length; a += 1)
    l[a] = xo(Jo(e, s, a));
  return {
    c() {
      n = ze("div");
      for (let a = 0; a < l.length; a += 1)
        l[a].c();
      i(n, "class", "tb-color-picker svelte-19rj0sx");
    },
    m(a, r) {
      U(a, n, r);
      for (let f = 0; f < l.length; f += 1)
        l[f] && l[f].m(n, null);
      t || (o = x(
        n,
        "mousedown",
        /*onMouseDown*/
        e[11]
      ), t = !0);
    },
    p(a, r) {
      if (r & /*BG_COLORS, style, pickBgColor*/
      1057) {
        s = De(
          /*BG_COLORS*/
          a[5]
        );
        let f;
        for (f = 0; f < s.length; f += 1) {
          const c = Jo(a, s, f);
          l[f] ? l[f].p(c, r) : (l[f] = xo(c), l[f].c(), l[f].m(n, null));
        }
        for (; f < l.length; f += 1)
          l[f].d(1);
        l.length = s.length;
      }
    },
    d(a) {
      a && B(n), Xn(l, a), t = !1, o();
    }
  };
}
function xo(e) {
  let n, t, o;
  function s() {
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
      n = ze("button"), i(n, "class", "tb-swatch svelte-19rj0sx"), i(
        n,
        "title",
        /*c*/
        e[18].label
      ), Ue(
        n,
        "background",
        /*c*/
        e[18].value !== "transparent" ? (
          /*c*/
          e[18].value
        ) : "var(--checker)"
      ), Qe(
        n,
        "selected",
        /*style*/
        e[0].bgColor === /*c*/
        e[18].value
      );
    },
    m(l, a) {
      U(l, n, a), t || (o = x(n, "click", s), t = !0);
    },
    p(l, a) {
      e = l, a & /*style, BG_COLORS*/
      33 && Qe(
        n,
        "selected",
        /*style*/
        e[0].bgColor === /*c*/
        e[18].value
      );
    },
    d(l) {
      l && B(n), t = !1, o();
    }
  };
}
function Sr(e) {
  let n, t, o, s, l, a, r, f, c, u, p, d, _, g, h, E, N, H, y, b, k, P, m, L, w, T, A, S = (
    /*showBgPicker*/
    e[3] && $o(e)
  );
  return {
    c() {
      n = ze("div"), t = ze("button"), t.textContent = "A-", o = te(), s = ze("button"), s.textContent = "A+", l = te(), a = ze("div"), r = te(), f = ze("button"), f.innerHTML = "<strong>B</strong>", c = te(), u = ze("button"), u.innerHTML = "<em>I</em>", p = te(), d = ze("button"), d.innerHTML = "<u>U</u>", _ = te(), g = ze("div"), h = te(), E = ze("div"), N = ze("button"), H = ze("span"), H.textContent = "A", y = te(), b = ze("span"), k = te(), S && S.c(), P = te(), m = ze("div"), L = te(), w = ze("button"), w.innerHTML = '<svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor"><path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"></path></svg>', i(t, "class", "tb-btn svelte-19rj0sx"), i(t, "title", "Decrease font size"), i(s, "class", "tb-btn svelte-19rj0sx"), i(s, "title", "Increase font size"), i(a, "class", "tb-divider svelte-19rj0sx"), i(f, "class", "tb-btn svelte-19rj0sx"), i(f, "title", "Bold"), Qe(
        f,
        "active",
        /*style*/
        e[0].bold
      ), i(u, "class", "tb-btn svelte-19rj0sx"), i(u, "title", "Italic"), Qe(
        u,
        "active",
        /*style*/
        e[0].italic
      ), i(d, "class", "tb-btn svelte-19rj0sx"), i(d, "title", "Underline"), Qe(
        d,
        "active",
        /*style*/
        e[0].underline
      ), i(g, "class", "tb-divider svelte-19rj0sx"), i(H, "class", "tb-color-letter svelte-19rj0sx"), i(b, "class", "tb-color-swatch svelte-19rj0sx"), Ue(
        b,
        "background",
        /*style*/
        e[0].bgColor !== "transparent" ? (
          /*style*/
          e[0].bgColor
        ) : "transparent"
      ), Ue(
        b,
        "border-color",
        /*style*/
        e[0].bgColor !== "transparent" ? (
          /*style*/
          e[0].bgColor
        ) : "#AAAFC3"
      ), i(N, "class", "tb-btn tb-color-btn svelte-19rj0sx"), i(N, "title", "Highlight colour"), i(E, "class", "tb-color-wrap svelte-19rj0sx"), i(m, "class", "tb-divider svelte-19rj0sx"), i(w, "class", "tb-btn tb-delete svelte-19rj0sx"), i(w, "title", "Delete"), i(n, "class", "a9s-tools-text-toolbar svelte-19rj0sx"), Ue(
        n,
        "left",
        /*x*/
        e[1] + "px"
      ), Ue(
        n,
        "top",
        /*y*/
        e[2] + "px"
      );
    },
    m(X, I) {
      U(X, n, I), Z(n, t), Z(n, o), Z(n, s), Z(n, l), Z(n, a), Z(n, r), Z(n, f), Z(n, c), Z(n, u), Z(n, p), Z(n, d), Z(n, _), Z(n, g), Z(n, h), Z(n, E), Z(E, N), Z(N, H), Z(N, y), Z(N, b), Z(E, k), S && S.m(E, null), Z(n, P), Z(n, m), Z(n, L), Z(n, w), T || (A = [
        x(
          t,
          "click",
          /*click_handler*/
          e[12]
        ),
        x(
          s,
          "click",
          /*click_handler_1*/
          e[13]
        ),
        x(
          f,
          "click",
          /*toggleBold*/
          e[7]
        ),
        x(
          u,
          "click",
          /*toggleItalic*/
          e[8]
        ),
        x(
          d,
          "click",
          /*toggleUnderline*/
          e[9]
        ),
        x(
          N,
          "click",
          /*click_handler_2*/
          e[14]
        ),
        x(
          w,
          "click",
          /*click_handler_4*/
          e[16]
        ),
        x(
          n,
          "mousedown",
          /*onMouseDown*/
          e[11]
        )
      ], T = !0);
    },
    p(X, [I]) {
      I & /*style*/
      1 && Qe(
        f,
        "active",
        /*style*/
        X[0].bold
      ), I & /*style*/
      1 && Qe(
        u,
        "active",
        /*style*/
        X[0].italic
      ), I & /*style*/
      1 && Qe(
        d,
        "active",
        /*style*/
        X[0].underline
      ), I & /*style*/
      1 && Ue(
        b,
        "background",
        /*style*/
        X[0].bgColor !== "transparent" ? (
          /*style*/
          X[0].bgColor
        ) : "transparent"
      ), I & /*style*/
      1 && Ue(
        b,
        "border-color",
        /*style*/
        X[0].bgColor !== "transparent" ? (
          /*style*/
          X[0].bgColor
        ) : "#AAAFC3"
      ), /*showBgPicker*/
      X[3] ? S ? S.p(X, I) : (S = $o(X), S.c(), S.m(E, null)) : S && (S.d(1), S = null), I & /*x*/
      2 && Ue(
        n,
        "left",
        /*x*/
        X[1] + "px"
      ), I & /*y*/
      4 && Ue(
        n,
        "top",
        /*y*/
        X[2] + "px"
      );
    },
    i: Te,
    o: Te,
    d(X) {
      X && B(n), S && S.d(), T = !1, Oe(A);
    }
  };
}
function Tr(e, n, t) {
  let { style: o } = n, { x: s } = n, { y: l } = n;
  const a = en(), r = [
    { value: "transparent", label: "None" },
    { value: "#ffff00", label: "Yellow" },
    { value: "#00ff00", label: "Green" },
    { value: "#00ffff", label: "Cyan" },
    { value: "#ff00ff", label: "Magenta" },
    { value: "#ffffff", label: "White" },
    { value: "#000000", label: "Black" }
  ];
  let f = !1;
  const c = (k) => a("change", { ...o, ...k }), u = (k) => c({
    fontSize: Math.max(8, Math.min(72, o.fontSize + k))
  }), p = () => c({ bold: !o.bold }), d = () => c({ italic: !o.italic }), _ = () => c({ underline: !o.underline }), g = (k) => {
    c({ bgColor: k }), t(3, f = !1);
  }, h = (k) => k.preventDefault(), E = () => u(-2), N = () => u(2), H = () => t(3, f = !f), y = (k) => g(k.value), b = () => a("delete");
  return e.$$set = (k) => {
    "style" in k && t(0, o = k.style), "x" in k && t(1, s = k.x), "y" in k && t(2, l = k.y);
  }, [
    o,
    s,
    l,
    f,
    a,
    r,
    u,
    p,
    d,
    _,
    g,
    h,
    E,
    N,
    H,
    y,
    b
  ];
}
class Mr extends Ne {
  constructor(n) {
    super(), Re(this, n, Tr, Sr, Ce, { style: 0, x: 1, y: 2 });
  }
}
const un = {
  fontSize: 16,
  bold: !1,
  italic: !1,
  underline: !1,
  bgColor: "transparent"
};
function es(e, n, t) {
  const o = e.slice();
  return o[52] = n[t].id, o[53] = n[t].selector, o;
}
function St(e) {
  const n = e.slice(), t = (
    /*editingStyle*/
    n[8]
  );
  n[56] = t;
  const o = (
    /*inputScreenPos*/
    n[18](
      /*selector*/
      n[53],
      /*style*/
      n[56]
    )
  );
  n[57] = o;
  const s = (
    /*style*/
    n[56].fontSize || un.fontSize
  );
  n[58] = s;
  const l = (
    /*measureTextWidth*/
    n[13](
      /*editingText*/
      n[7] || "Type...",
      /*fs*/
      n[58]
    ) + 2
  );
  return n[59] = l, n;
}
function ns(e, n, t) {
  const o = e.slice();
  return o[52] = n[t].id, o[53] = n[t].selector, o[60] = n[t].text, o[62] = t, o;
}
function Tt(e) {
  const n = e.slice(), t = (
    /*editingId*/
    n[6] === /*id*/
    n[52] ? (
      /*editingText*/
      n[7]
    ) : (
      /*displayText*/
      n[66]
    )
  );
  n[67] = t;
  const o = (
    /*measureTextWidth*/
    n[13](
      /*boxText*/
      n[67] || "Type...",
      /*fs*/
      n[58]
    )
  );
  n[68] = o;
  const s = (
    /*fs*/
    n[58] * 1.2
  );
  n[69] = s;
  const l = 5 / Math.max(
    /*viewportScale*/
    n[5],
    1e-3
  );
  n[70] = l;
  const a = 8 / Math.max(
    /*viewportScale*/
    n[5],
    1e-3
  );
  n[71] = a;
  const r = (
    /*pt*/
    n[64].x - /*anchorGap*/
    n[71]
  );
  n[72] = r;
  const f = (
    /*pt*/
    n[64].y - /*fs*/
    n[58]
  );
  n[73] = f;
  const c = (
    /*textW*/
    n[68] + /*anchorGap*/
    n[71] * 2
  );
  n[74] = c;
  const u = (
    /*boxY*/
    n[73] + /*textH*/
    n[69] / 2
  );
  return n[75] = u, n;
}
function Mt(e) {
  const n = e.slice(), t = (
    /*textPoint*/
    n[16](
      /*selector*/
      n[53]
    )
  );
  n[63] = t;
  const o = (
    /*draggingPos*/
    n[11][
      /*id*/
      n[52]
    ] ?? /*rawPt*/
    n[63]
  );
  n[64] = o;
  const s = (
    /*getStyle*/
    n[15](
      /*selector*/
      n[53]
    )
  );
  n[56] = s;
  const l = (
    /*svgFontSize*/
    n[17](
      /*style*/
      n[56]
    )
  );
  n[58] = l;
  const a = !!/*style*/
  (n[56].bgColor && /*style*/
  n[56].bgColor !== "transparent");
  n[65] = a;
  const r = (
    /*localTexts*/
    n[1][
      /*id*/
      n[52]
    ] ?? /*text*/
    n[60] ?? ""
  );
  return n[66] = r, n;
}
function ts(e, n, t) {
  const o = e.slice();
  return o[52] = n[t].id, o[53] = n[t].selector, o[62] = t, o;
}
function Pt(e) {
  const n = e.slice(), t = (
    /*getStyle*/
    n[15](
      /*selector*/
      n[53]
    )
  );
  return n[56] = t, n;
}
function os(e, n, t) {
  const o = e.slice();
  return o[77] = n[t], o;
}
function Pr(e) {
  const n = e.slice(), t = 8 / Math.max(
    /*viewportScale*/
    n[5],
    1e-3
  );
  n[80] = t;
  const o = 14 / Math.max(
    /*viewportScale*/
    n[5],
    1e-3
  );
  n[81] = o;
  const s = (
    /*ann*/
    n[77].length.length * /*lfs*/
    n[81] * 0.7
  );
  n[82] = s;
  const l = (
    /*lfs*/
    n[81] * 1.2
  );
  n[83] = l;
  const a = 4 / Math.max(
    /*viewportScale*/
    n[5],
    1e-3
  );
  n[84] = a;
  const r = (
    /*ann*/
    n[77].px * 20 / Math.max(
      /*viewportScale*/
      n[5],
      1e-3
    )
  );
  n[85] = r;
  const f = (
    /*ann*/
    n[77].py * 20 / Math.max(
      /*viewportScale*/
      n[5],
      1e-3
    )
  );
  return n[86] = f, n;
}
function ss(e) {
  let n, t, o, s, l, a, r, f, c, u, p, d, _, g, h, E, N, H, y, b, k, P, m = (
    /*ann*/
    e[77].length + ""
  ), L, w, T, A;
  return {
    c() {
      n = Y("g"), t = Y("polyline"), l = Y("line"), u = Y("line"), h = Y("g"), E = Y("rect"), P = Y("text"), L = st(m), i(t, "points", o = /*ann*/
      e[77].linePts), i(t, "fill", "none"), i(
        t,
        "stroke",
        /*strokeColor*/
        e[0]
      ), i(t, "stroke-width", "1.5"), i(t, "stroke-dasharray", s = 8 / /*viewportScale*/
      e[5] + " " + 4 / /*viewportScale*/
      e[5]), i(t, "vector-effect", "non-scaling-stroke"), i(l, "x1", a = /*ann*/
      e[77].x1 - /*ann*/
      e[77].px * /*tick*/
      e[80]), i(l, "y1", r = /*ann*/
      e[77].y1 - /*ann*/
      e[77].py * /*tick*/
      e[80]), i(l, "x2", f = /*ann*/
      e[77].x1 + /*ann*/
      e[77].px * /*tick*/
      e[80]), i(l, "y2", c = /*ann*/
      e[77].y1 + /*ann*/
      e[77].py * /*tick*/
      e[80]), i(
        l,
        "stroke",
        /*strokeColor*/
        e[0]
      ), i(l, "stroke-width", "1.5"), i(l, "vector-effect", "non-scaling-stroke"), i(u, "x1", p = /*ann*/
      e[77].x2 - /*ann*/
      e[77].px * /*tick*/
      e[80]), i(u, "y1", d = /*ann*/
      e[77].y2 - /*ann*/
      e[77].py * /*tick*/
      e[80]), i(u, "x2", _ = /*ann*/
      e[77].x2 + /*ann*/
      e[77].px * /*tick*/
      e[80]), i(u, "y2", g = /*ann*/
      e[77].y2 + /*ann*/
      e[77].py * /*tick*/
      e[80]), i(
        u,
        "stroke",
        /*strokeColor*/
        e[0]
      ), i(u, "stroke-width", "1.5"), i(u, "vector-effect", "non-scaling-stroke"), i(E, "x", N = -/*pillW*/
      e[82] / 2), i(E, "y", H = -/*pillH*/
      e[83] / 2), i(E, "width", y = /*pillW*/
      e[82]), i(E, "height", b = /*pillH*/
      e[83]), i(E, "rx", k = /*rx*/
      e[84]), i(E, "fill", "rgba(0,0,0,0.7)"), i(P, "x", "0"), i(P, "y", "0"), i(P, "font-size", w = /*lfs*/
      e[81]), i(P, "font-family", "sans-serif"), i(P, "font-weight", "bold"), i(P, "fill", "white"), i(P, "text-anchor", "middle"), i(P, "dominant-baseline", "middle"), i(h, "transform", T = `translate(${/*ann*/
      e[77].mx + /*lox*/
      e[85]}, ${/*ann*/
      e[77].my + /*loy*/
      e[86]})`), i(n, "class", "a9s-tools-distance"), i(n, "data-annotation-type", "DISTANCE"), i(n, "data-annotation-id", A = /*ann*/
      e[77].id);
    },
    m(S, X) {
      U(S, n, X), Z(n, t), Z(n, l), Z(n, u), Z(n, h), Z(h, E), Z(h, P), Z(P, L);
    },
    p(S, X) {
      X[0] & /*svgAnnotations*/
      4096 && o !== (o = /*ann*/
      S[77].linePts) && i(t, "points", o), X[0] & /*strokeColor*/
      1 && i(
        t,
        "stroke",
        /*strokeColor*/
        S[0]
      ), X[0] & /*viewportScale*/
      32 && s !== (s = 8 / /*viewportScale*/
      S[5] + " " + 4 / /*viewportScale*/
      S[5]) && i(t, "stroke-dasharray", s), X[0] & /*svgAnnotations, viewportScale*/
      4128 && a !== (a = /*ann*/
      S[77].x1 - /*ann*/
      S[77].px * /*tick*/
      S[80]) && i(l, "x1", a), X[0] & /*svgAnnotations, viewportScale*/
      4128 && r !== (r = /*ann*/
      S[77].y1 - /*ann*/
      S[77].py * /*tick*/
      S[80]) && i(l, "y1", r), X[0] & /*svgAnnotations, viewportScale*/
      4128 && f !== (f = /*ann*/
      S[77].x1 + /*ann*/
      S[77].px * /*tick*/
      S[80]) && i(l, "x2", f), X[0] & /*svgAnnotations, viewportScale*/
      4128 && c !== (c = /*ann*/
      S[77].y1 + /*ann*/
      S[77].py * /*tick*/
      S[80]) && i(l, "y2", c), X[0] & /*strokeColor*/
      1 && i(
        l,
        "stroke",
        /*strokeColor*/
        S[0]
      ), X[0] & /*svgAnnotations, viewportScale*/
      4128 && p !== (p = /*ann*/
      S[77].x2 - /*ann*/
      S[77].px * /*tick*/
      S[80]) && i(u, "x1", p), X[0] & /*svgAnnotations, viewportScale*/
      4128 && d !== (d = /*ann*/
      S[77].y2 - /*ann*/
      S[77].py * /*tick*/
      S[80]) && i(u, "y1", d), X[0] & /*svgAnnotations, viewportScale*/
      4128 && _ !== (_ = /*ann*/
      S[77].x2 + /*ann*/
      S[77].px * /*tick*/
      S[80]) && i(u, "x2", _), X[0] & /*svgAnnotations, viewportScale*/
      4128 && g !== (g = /*ann*/
      S[77].y2 + /*ann*/
      S[77].py * /*tick*/
      S[80]) && i(u, "y2", g), X[0] & /*strokeColor*/
      1 && i(
        u,
        "stroke",
        /*strokeColor*/
        S[0]
      ), X[0] & /*svgAnnotations, viewportScale*/
      4128 && N !== (N = -/*pillW*/
      S[82] / 2) && i(E, "x", N), X[0] & /*viewportScale*/
      32 && H !== (H = -/*pillH*/
      S[83] / 2) && i(E, "y", H), X[0] & /*svgAnnotations, viewportScale*/
      4128 && y !== (y = /*pillW*/
      S[82]) && i(E, "width", y), X[0] & /*viewportScale*/
      32 && b !== (b = /*pillH*/
      S[83]) && i(E, "height", b), X[0] & /*viewportScale*/
      32 && k !== (k = /*rx*/
      S[84]) && i(E, "rx", k), X[0] & /*svgAnnotations*/
      4096 && m !== (m = /*ann*/
      S[77].length + "") && Gs(L, m), X[0] & /*viewportScale*/
      32 && w !== (w = /*lfs*/
      S[81]) && i(P, "font-size", w), X[0] & /*svgAnnotations, viewportScale*/
      4128 && T !== (T = `translate(${/*ann*/
      S[77].mx + /*lox*/
      S[85]}, ${/*ann*/
      S[77].my + /*loy*/
      S[86]})`) && i(h, "transform", T), X[0] & /*svgAnnotations*/
      4096 && A !== (A = /*ann*/
      S[77].id) && i(n, "data-annotation-id", A);
    },
    d(S) {
      S && B(n);
    }
  };
}
function Lr(e) {
  let n, t, o, s;
  return {
    c() {
      n = Y("g"), t = Y("polyline"), i(t, "points", o = /*ann*/
      e[77].arrowheadStr), i(t, "fill", "none"), i(
        t,
        "stroke",
        /*strokeColor*/
        e[0]
      ), i(t, "stroke-width", "2"), i(t, "stroke-linecap", "round"), i(t, "stroke-linejoin", "round"), i(t, "vector-effect", "non-scaling-stroke"), i(n, "data-annotation-type", "ARROW"), i(n, "data-annotation-id", s = /*ann*/
      e[77].id);
    },
    m(l, a) {
      U(l, n, a), Z(n, t);
    },
    p(l, a) {
      a[0] & /*svgAnnotations*/
      4096 && o !== (o = /*ann*/
      l[77].arrowheadStr) && i(t, "points", o), a[0] & /*strokeColor*/
      1 && i(
        t,
        "stroke",
        /*strokeColor*/
        l[0]
      ), a[0] & /*svgAnnotations*/
      4096 && s !== (s = /*ann*/
      l[77].id) && i(n, "data-annotation-id", s);
    },
    d(l) {
      l && B(n);
    }
  };
}
function ls(e, n) {
  let t, o;
  function s(f, c) {
    if (
      /*ann*/
      f[77].toolType === "arrow"
    ) return Lr;
    if (
      /*ann*/
      f[77].toolType === "distance"
    ) return ss;
  }
  function l(f, c) {
    return c === ss ? Pr(f) : f;
  }
  let a = s(n), r = a && a(l(n, a));
  return {
    key: e,
    first: null,
    c() {
      t = Ie(), r && r.c(), o = Ie(), this.first = t;
    },
    m(f, c) {
      U(f, t, c), r && r.m(f, c), U(f, o, c);
    },
    p(f, c) {
      n = f, a === (a = s(n)) && r ? r.p(l(n, a), c) : (r && r.d(1), r = a && a(l(n, a)), r && (r.c(), r.m(o.parentNode, o)));
    },
    d(f) {
      f && (B(t), B(o)), r && r.d(f);
    }
  };
}
function is(e) {
  let n, t = (
    /*style*/
    e[56].bgColor && /*style*/
    e[56].bgColor !== "transparent" && rs(e)
  );
  return {
    c() {
      t && t.c(), n = Ie();
    },
    m(o, s) {
      t && t.m(o, s), U(o, n, s);
    },
    p(o, s) {
      /*style*/
      o[56].bgColor && /*style*/
      o[56].bgColor !== "transparent" ? t ? t.p(o, s) : (t = rs(o), t.c(), t.m(n.parentNode, n)) : t && (t.d(1), t = null);
    },
    d(o) {
      o && B(n), t && t.d(o);
    }
  };
}
function rs(e) {
  let n, t, o, s, l, a, r;
  return {
    c() {
      n = Y("filter"), t = Y("feFlood"), s = Y("feMerge"), l = Y("feMergeNode"), a = Y("feMergeNode"), i(t, "flood-color", o = /*style*/
      e[56].bgColor), i(t, "result", "bg"), i(l, "in", "bg"), i(a, "in", "SourceGraphic"), i(n, "id", r = "a9s-tb-" + /*i*/
      e[62]), i(n, "x", "0"), i(n, "y", "-5%"), i(n, "width", "100%"), i(n, "height", "130%");
    },
    m(f, c) {
      U(f, n, c), Z(n, t), Z(n, s), Z(s, l), Z(s, a);
    },
    p(f, c) {
      c[0] & /*textAnnotations*/
      4 && o !== (o = /*style*/
      f[56].bgColor) && i(t, "flood-color", o), c[0] & /*textAnnotations*/
      4 && r !== (r = "a9s-tb-" + /*i*/
      f[62]) && i(n, "id", r);
    },
    d(f) {
      f && B(n);
    }
  };
}
function as(e, n) {
  let t, o, s = (
    /*selector*/
    n[53] && /*editingId*/
    n[6] !== /*id*/
    n[52] && is(Pt(n))
  );
  return {
    key: e,
    first: null,
    c() {
      t = Ie(), s && s.c(), o = Ie(), this.first = t;
    },
    m(l, a) {
      U(l, t, a), s && s.m(l, a), U(l, o, a);
    },
    p(l, a) {
      n = l, /*selector*/
      n[53] && /*editingId*/
      n[6] !== /*id*/
      n[52] ? s ? s.p(Pt(n), a) : (s = is(Pt(n)), s.c(), s.m(o.parentNode, o)) : s && (s.d(1), s = null);
    },
    d(l) {
      l && (B(t), B(o)), s && s.d(l);
    }
  };
}
function fs(e) {
  let n, t = (
    /*editingId*/
    e[6] === /*id*/
    e[52] || /*selectedIds*/
    e[10].includes(
      /*id*/
      e[52]
    )
  ), o, s = (
    /*editingId*/
    e[6] !== /*id*/
    e[52] && cs(e)
  ), l = t && us(Tt(e));
  return {
    c() {
      s && s.c(), n = Ie(), l && l.c(), o = Ie();
    },
    m(a, r) {
      s && s.m(a, r), U(a, n, r), l && l.m(a, r), U(a, o, r);
    },
    p(a, r) {
      /*editingId*/
      a[6] !== /*id*/
      a[52] ? s ? s.p(a, r) : (s = cs(a), s.c(), s.m(n.parentNode, n)) : s && (s.d(1), s = null), r[0] & /*editingId, textAnnotations, selectedIds*/
      1092 && (t = /*editingId*/
      a[6] === /*id*/
      a[52] || /*selectedIds*/
      a[10].includes(
        /*id*/
        a[52]
      )), t ? l ? l.p(Tt(a), r) : (l = us(Tt(a)), l.c(), l.m(o.parentNode, o)) : l && (l.d(1), l = null);
    },
    d(a) {
      a && (B(n), B(o)), s && s.d(a), l && l.d(a);
    }
  };
}
function cs(e) {
  let n, t, o = (
    /*displayText*/
    e[66] + ""
  ), s, l, a, r, f, c, u, p;
  function d(...g) {
    return (
      /*mousedown_handler*/
      e[30](
        /*id*/
        e[52],
        /*rawPt*/
        e[63],
        ...g
      )
    );
  }
  function _() {
    return (
      /*click_handler*/
      e[31](
        /*id*/
        e[52]
      )
    );
  }
  return {
    c() {
      n = Y("g"), t = Y("text"), s = st(o), i(t, "x", l = /*pt*/
      e[64].x), i(t, "y", a = /*pt*/
      e[64].y), i(t, "font-size", r = /*fs*/
      e[58]), i(t, "font-family", "sans-serif"), i(t, "style", f = /*svgTextStyle*/
      e[25](
        /*style*/
        e[56]
      )), i(t, "filter", c = /*hasBg*/
      e[65] ? `url(#a9s-tb-${/*i*/
      e[62]})` : null), Ue(n, "pointer-events", "auto"), Ue(n, "cursor", "pointer");
    },
    m(g, h) {
      U(g, n, h), Z(n, t), Z(t, s), u || (p = [
        x(n, "mousedown", d),
        x(n, "click", _)
      ], u = !0);
    },
    p(g, h) {
      e = g, h[0] & /*localTexts, textAnnotations*/
      6 && o !== (o = /*displayText*/
      e[66] + "") && Gs(s, o), h[0] & /*draggingPos, textAnnotations*/
      2052 && l !== (l = /*pt*/
      e[64].x) && i(t, "x", l), h[0] & /*draggingPos, textAnnotations*/
      2052 && a !== (a = /*pt*/
      e[64].y) && i(t, "y", a), h[0] & /*textAnnotations*/
      4 && r !== (r = /*fs*/
      e[58]) && i(t, "font-size", r), h[0] & /*textAnnotations*/
      4 && f !== (f = /*svgTextStyle*/
      e[25](
        /*style*/
        e[56]
      )) && i(t, "style", f), h[0] & /*textAnnotations*/
      4 && c !== (c = /*hasBg*/
      e[65] ? `url(#a9s-tb-${/*i*/
      e[62]})` : null) && i(t, "filter", c);
    },
    d(g) {
      g && B(n), u = !1, Oe(p);
    }
  };
}
function us(e) {
  let n, t, o, s, l, a, r, f, c, u, p, d, _, g, h, E, N, H, y, b, k;
  function P(...w) {
    return (
      /*mousedown_handler_1*/
      e[32](
        /*id*/
        e[52],
        /*pt*/
        e[64],
        ...w
      )
    );
  }
  function m(...w) {
    return (
      /*mousedown_handler_2*/
      e[33](
        /*id*/
        e[52],
        /*pt*/
        e[64],
        ...w
      )
    );
  }
  function L(...w) {
    return (
      /*mousedown_handler_3*/
      e[34](
        /*id*/
        e[52],
        /*pt*/
        e[64],
        ...w
      )
    );
  }
  return {
    c() {
      n = Y("g"), t = Y("rect"), r = Y("rect"), d = Y("circle"), E = Y("circle"), i(t, "x", o = /*boxX*/
      e[72]), i(t, "y", s = /*boxY*/
      e[73]), i(t, "width", l = /*boxW*/
      e[74]), i(t, "height", a = /*textH*/
      e[69]), i(t, "fill", "none"), i(t, "stroke", "#888888"), i(t, "stroke-width", "1"), i(t, "stroke-dasharray", "3 3"), i(t, "vector-effect", "non-scaling-stroke"), i(r, "x", f = /*boxX*/
      e[72]), i(r, "y", c = /*boxY*/
      e[73]), i(r, "width", u = /*boxW*/
      e[74]), i(r, "height", p = /*textH*/
      e[69]), i(r, "fill", "transparent"), Ue(r, "pointer-events", "fill"), Ue(r, "cursor", "move"), i(d, "cx", _ = /*boxX*/
      e[72]), i(d, "cy", g = /*centerY*/
      e[75]), i(d, "r", h = /*anchorR*/
      e[70]), i(d, "fill", "#ff00ba"), i(d, "stroke", "white"), i(d, "stroke-width", "1"), i(d, "vector-effect", "non-scaling-stroke"), Ue(d, "pointer-events", "auto"), Ue(d, "cursor", "ew-resize"), i(E, "cx", N = /*boxX*/
      e[72] + /*boxW*/
      e[74]), i(E, "cy", H = /*centerY*/
      e[75]), i(E, "r", y = /*anchorR*/
      e[70]), i(E, "fill", "#ff00ba"), i(E, "stroke", "white"), i(E, "stroke-width", "1"), i(E, "vector-effect", "non-scaling-stroke"), Ue(E, "pointer-events", "auto"), Ue(E, "cursor", "ew-resize"), Ue(n, "pointer-events", "none");
    },
    m(w, T) {
      U(w, n, T), Z(n, t), Z(n, r), Z(n, d), Z(n, E), b || (k = [
        x(r, "mousedown", P),
        x(d, "mousedown", m),
        x(E, "mousedown", L)
      ], b = !0);
    },
    p(w, T) {
      e = w, T[0] & /*draggingPos, textAnnotations, viewportScale*/
      2084 && o !== (o = /*boxX*/
      e[72]) && i(t, "x", o), T[0] & /*draggingPos, textAnnotations*/
      2052 && s !== (s = /*boxY*/
      e[73]) && i(t, "y", s), T[0] & /*editingId, textAnnotations, editingText, localTexts, viewportScale*/
      230 && l !== (l = /*boxW*/
      e[74]) && i(t, "width", l), T[0] & /*textAnnotations*/
      4 && a !== (a = /*textH*/
      e[69]) && i(t, "height", a), T[0] & /*draggingPos, textAnnotations, viewportScale*/
      2084 && f !== (f = /*boxX*/
      e[72]) && i(r, "x", f), T[0] & /*draggingPos, textAnnotations*/
      2052 && c !== (c = /*boxY*/
      e[73]) && i(r, "y", c), T[0] & /*editingId, textAnnotations, editingText, localTexts, viewportScale*/
      230 && u !== (u = /*boxW*/
      e[74]) && i(r, "width", u), T[0] & /*textAnnotations*/
      4 && p !== (p = /*textH*/
      e[69]) && i(r, "height", p), T[0] & /*draggingPos, textAnnotations, viewportScale*/
      2084 && _ !== (_ = /*boxX*/
      e[72]) && i(d, "cx", _), T[0] & /*draggingPos, textAnnotations*/
      2052 && g !== (g = /*centerY*/
      e[75]) && i(d, "cy", g), T[0] & /*viewportScale*/
      32 && h !== (h = /*anchorR*/
      e[70]) && i(d, "r", h), T[0] & /*draggingPos, textAnnotations, viewportScale, editingId, editingText, localTexts*/
      2278 && N !== (N = /*boxX*/
      e[72] + /*boxW*/
      e[74]) && i(E, "cx", N), T[0] & /*draggingPos, textAnnotations*/
      2052 && H !== (H = /*centerY*/
      e[75]) && i(E, "cy", H), T[0] & /*viewportScale*/
      32 && y !== (y = /*anchorR*/
      e[70]) && i(E, "r", y);
    },
    d(w) {
      w && B(n), b = !1, Oe(k);
    }
  };
}
function ps(e, n) {
  let t, o, s = (
    /*selector*/
    n[53] && fs(Mt(n))
  );
  return {
    key: e,
    first: null,
    c() {
      t = Ie(), s && s.c(), o = Ie(), this.first = t;
    },
    m(l, a) {
      U(l, t, a), s && s.m(l, a), U(l, o, a);
    },
    p(l, a) {
      n = l, /*selector*/
      n[53] ? s ? s.p(Mt(n), a) : (s = fs(Mt(n)), s.c(), s.m(o.parentNode, o)) : s && (s.d(1), s = null);
    },
    d(l) {
      l && (B(t), B(o)), s && s.d(l);
    }
  };
}
function hs(e) {
  let n, t, o, s, l, a, r;
  function f(...u) {
    return (
      /*change_handler*/
      e[36](
        /*id*/
        e[52],
        ...u
      )
    );
  }
  function c() {
    return (
      /*delete_handler*/
      e[37](
        /*id*/
        e[52]
      )
    );
  }
  return n = new Mr({
    props: {
      style: (
        /*style*/
        e[56]
      ),
      x: (
        /*pos*/
        e[57].left
      ),
      y: (
        /*pos*/
        e[57].top
      )
    }
  }), n.$on("change", f), n.$on("delete", c), {
    c() {
      ge(n.$$.fragment), t = te(), o = ze("input"), i(o, "type", "text"), i(o, "class", "a9s-tools-text-input svelte-1snhdgd"), i(o, "style", s = /*inputStyle*/
      e[26](
        /*style*/
        e[56],
        /*pos*/
        e[57],
        /*inputW*/
        e[59]
      )), i(o, "placeholder", "Type...");
    },
    m(u, p) {
      de(n, u, p), U(u, t, p), U(u, o, p), e[38](o), Eo(
        o,
        /*editingText*/
        e[7]
      ), l = !0, a || (r = [
        x(
          o,
          "input",
          /*input_input_handler*/
          e[39]
        ),
        x(
          o,
          "keydown",
          /*onInputKeyDown*/
          e[24]
        ),
        x(
          o,
          "blur",
          /*commitEdit*/
          e[20]
        )
      ], a = !0);
    },
    p(u, p) {
      e = u;
      const d = {};
      p[0] & /*editingStyle*/
      256 && (d.style = /*style*/
      e[56]), p[0] & /*textAnnotations, editingStyle*/
      260 && (d.x = /*pos*/
      e[57].left), p[0] & /*textAnnotations, editingStyle*/
      260 && (d.y = /*pos*/
      e[57].top), n.$set(d), (!l || p[0] & /*editingStyle, textAnnotations, editingText*/
      388 && s !== (s = /*inputStyle*/
      e[26](
        /*style*/
        e[56],
        /*pos*/
        e[57],
        /*inputW*/
        e[59]
      ))) && i(o, "style", s), p[0] & /*editingText*/
      128 && o.value !== /*editingText*/
      e[7] && Eo(
        o,
        /*editingText*/
        e[7]
      );
    },
    i(u) {
      l || ($(n.$$.fragment, u), l = !0);
    },
    o(u) {
      ne(n.$$.fragment, u), l = !1;
    },
    d(u) {
      u && (B(t), B(o)), me(n, u), e[38](null), a = !1, Oe(r);
    }
  };
}
function ds(e, n) {
  let t, o, s, l = (
    /*selector*/
    n[53] && /*editingId*/
    n[6] === /*id*/
    n[52] && hs(St(n))
  );
  return {
    key: e,
    first: null,
    c() {
      t = Ie(), l && l.c(), o = Ie(), this.first = t;
    },
    m(a, r) {
      U(a, t, r), l && l.m(a, r), U(a, o, r), s = !0;
    },
    p(a, r) {
      n = a, /*selector*/
      n[53] && /*editingId*/
      n[6] === /*id*/
      n[52] ? l ? (l.p(St(n), r), r[0] & /*textAnnotations, editingId*/
      68 && $(l, 1)) : (l = hs(St(n)), l.c(), $(l, 1), l.m(o.parentNode, o)) : l && (Fe(), ne(l, 1, 1, () => {
        l = null;
      }), We());
    },
    i(a) {
      s || ($(l), s = !0);
    },
    o(a) {
      ne(l), s = !1;
    },
    d(a) {
      a && (B(t), B(o)), l && l.d(a);
    }
  };
}
function Or(e) {
  let n, t, o = [], s = /* @__PURE__ */ new Map(), l, a, r, f = [], c = /* @__PURE__ */ new Map(), u = [], p = /* @__PURE__ */ new Map(), d, _ = [], g = /* @__PURE__ */ new Map(), h, E, N = De(
    /*svgAnnotations*/
    e[12]
  );
  const H = (w) => (
    /*ann*/
    w[77].id
  );
  for (let w = 0; w < N.length; w += 1) {
    let T = os(e, N, w), A = H(T);
    s.set(A, o[w] = ls(A, T));
  }
  let y = De(
    /*textAnnotations*/
    e[2]
  );
  const b = (w) => (
    /*id*/
    w[52]
  );
  for (let w = 0; w < y.length; w += 1) {
    let T = ts(e, y, w), A = b(T);
    c.set(A, f[w] = as(A, T));
  }
  let k = De(
    /*textAnnotations*/
    e[2]
  );
  const P = (w) => (
    /*id*/
    w[52]
  );
  for (let w = 0; w < k.length; w += 1) {
    let T = ns(e, k, w), A = P(T);
    p.set(A, u[w] = ps(A, T));
  }
  let m = De(
    /*textAnnotations*/
    e[2]
  );
  const L = (w) => (
    /*id*/
    w[52]
  );
  for (let w = 0; w < m.length; w += 1) {
    let T = es(e, m, w), A = L(T);
    g.set(A, _[w] = ds(A, T));
  }
  return {
    c() {
      n = Y("svg"), t = Y("g");
      for (let w = 0; w < o.length; w += 1)
        o[w].c();
      l = te(), a = Y("svg"), r = Y("defs");
      for (let w = 0; w < f.length; w += 1)
        f[w].c();
      for (let w = 0; w < u.length; w += 1)
        u[w].c();
      d = te();
      for (let w = 0; w < _.length; w += 1)
        _[w].c();
      h = Ie(), i(n, "class", "a9s-tools-overlay svelte-1snhdgd"), i(
        n,
        "viewBox",
        /*viewBox*/
        e[4]
      ), i(n, "preserveAspectRatio", "xMinYMin meet"), i(a, "class", "a9s-tools-overlay svelte-1snhdgd"), i(a, "data-annotation-type", "TEXT"), i(
        a,
        "viewBox",
        /*viewBox*/
        e[4]
      ), i(a, "preserveAspectRatio", "xMinYMin meet"), Ue(a, "pointer-events", "none");
    },
    m(w, T) {
      U(w, n, T), Z(n, t);
      for (let A = 0; A < o.length; A += 1)
        o[A] && o[A].m(t, null);
      U(w, l, T), U(w, a, T), Z(a, r);
      for (let A = 0; A < f.length; A += 1)
        f[A] && f[A].m(r, null);
      for (let A = 0; A < u.length; A += 1)
        u[A] && u[A].m(a, null);
      e[35](a), U(w, d, T);
      for (let A = 0; A < _.length; A += 1)
        _[A] && _[A].m(w, T);
      U(w, h, T), E = !0;
    },
    p(w, T) {
      T[0] & /*svgAnnotations, strokeColor, viewportScale*/
      4129 && (N = De(
        /*svgAnnotations*/
        w[12]
      ), o = Qn(o, T, H, 1, w, N, s, t, gt, ls, null, os)), (!E || T[0] & /*viewBox*/
      16) && i(
        n,
        "viewBox",
        /*viewBox*/
        w[4]
      ), T[0] & /*textAnnotations, getStyle, editingId*/
      32836 && (y = De(
        /*textAnnotations*/
        w[2]
      ), f = Qn(f, T, b, 1, w, y, c, r, gt, as, null, ts)), T[0] & /*draggingPos, textAnnotations, textPoint, viewportScale, measureTextWidth, editingId, editingText, localTexts, svgFontSize, getStyle, handleTextMouseDown, selectedIds, startEditing, svgTextStyle*/
      42708198 && (k = De(
        /*textAnnotations*/
        w[2]
      ), u = Qn(u, T, P, 1, w, k, p, a, gt, ps, null, ns)), (!E || T[0] & /*viewBox*/
      16) && i(
        a,
        "viewBox",
        /*viewBox*/
        w[4]
      ), T[0] & /*inputStyle, editingStyle, inputScreenPos, textAnnotations, measureTextWidth, editingText, inputEl, onInputKeyDown, commitEdit, applyStyleChange, deleteAnnotation, editingId*/
      91497412 && (m = De(
        /*textAnnotations*/
        w[2]
      ), Fe(), _ = Qn(_, T, L, 1, w, m, g, h.parentNode, ui, ds, h, es), We());
    },
    i(w) {
      if (!E) {
        for (let T = 0; T < m.length; T += 1)
          $(_[T]);
        E = !0;
      }
    },
    o(w) {
      for (let T = 0; T < _.length; T += 1)
        ne(_[T]);
      E = !1;
    },
    d(w) {
      w && (B(n), B(l), B(a), B(d), B(h));
      for (let T = 0; T < o.length; T += 1)
        o[T].d();
      for (let T = 0; T < f.length; T += 1)
        f[T].d();
      for (let T = 0; T < u.length; T += 1)
        u[T].d();
      e[35](null);
      for (let T = 0; T < _.length; T += 1)
        _[T].d(w);
    }
  };
}
function Hr(e, n, t) {
  let o, s, l, a, { anno: r } = n, { strokeColor: f = "#6a6a6a" } = n, c = null, u, p = "0 0 1 1", d = 1, _, g = null, h = "", E = { ...un }, N, H = [], y = {}, b = null, k = null, P = {}, m = null;
  const L = (q, Q) => {
    m || (m = document.createElement("canvas"));
    const R = m.getContext("2d");
    return R.font = `${Q}px sans-serif`, R.measureText(q).width;
  }, w = (q, Q) => {
    if (!u) return { x: 0, y: 0 };
    const R = u.getBoundingClientRect();
    return {
      x: (q - R.left) / d,
      y: (Q - R.top) / d
    };
  }, { store: T } = r.state;
  ni(e, T, (q) => t(29, a = q));
  const A = (q) => {
    var Q;
    return {
      ...un,
      ...((Q = q.properties) == null ? void 0 : Q.textStyle) || {}
    };
  }, S = (q) => {
    const Q = q.geometry;
    return {
      x: Q.anchorX !== void 0 ? Q.anchorX : Q.x,
      y: Q.anchorY !== void 0 ? Q.anchorY : Q.y
    };
  }, X = (q) => (q.fontSize || un.fontSize) / Math.max(d, 1e-3), I = (q, Q) => {
    const { x: R, y: M } = S(q), _e = Q.fontSize || un.fontSize;
    return {
      left: R * d,
      top: M * d - _e
    };
  }, O = () => {
    if (!c) return;
    const { naturalWidth: q, naturalHeight: Q } = c;
    !q || !Q || (t(4, p = `0 0 ${q} ${Q}`), t(5, d = c.getBoundingClientRect().width / q));
  }, z = async (q) => {
    var Q, R, M;
    ((M = (R = (Q = q.target) == null ? void 0 : Q.selector) == null ? void 0 : R.properties) == null ? void 0 : M.toolType) === "text" && (t(6, g = q.id), t(7, h = ""), t(8, E = A(q.target.selector)), await Vn(), N == null || N.focus());
  }, C = async (q) => {
    var R, M;
    const Q = o.find((_e) => _e.id === q);
    if (Q) {
      g && g !== q && F();
      try {
        r.state.selection.setSelected(q);
      } catch {
      }
      t(6, g = q), t(7, h = y[q] ?? ((M = (R = Q.bodies) == null ? void 0 : R[0]) == null ? void 0 : M.value) ?? ""), t(8, E = A(Q.target.selector)), await Vn(), N == null || N.focus();
    }
  }, G = (q) => {
    var M, _e, ke;
    if (t(10, H = (q == null ? void 0 : q.map((ie) => ie.id)) || []), !(q != null && q.length)) return;
    const Q = q[0];
    !(((ke = (_e = (M = Q == null ? void 0 : Q.target) == null ? void 0 : M.selector) == null ? void 0 : _e.properties) == null ? void 0 : ke.toolType) === "text") && g && F();
  }, F = () => {
    if (!g) return;
    const q = g, Q = h, R = o.find((M) => M.id === q);
    if (R) {
      const M = Q.trim() ? [
        {
          type: "TextualBody",
          value: Q,
          purpose: "commenting"
        }
      ] : [], _e = (E.fontSize || un.fontSize) / Math.max(d, 1e-3), ke = L(Q || "Type...", _e), ie = 8 / Math.max(d, 1e-3);
      R.target.selector.geometry;
      const ye = S(R.target.selector), Ke = ye.x - ie, qe = ye.y - _e, Ze = ye.x + ke + ie, ln = ye.y + _e * 0.2, nn = {
        bounds: { minX: Ke, minY: qe, maxX: Ze, maxY: ln },
        x: Ke,
        y: qe,
        w: Ze - Ke,
        h: ln - qe,
        anchorX: ye.x,
        anchorY: ye.y
      };
      if (r.updateAnnotation({
        ...R,
        bodies: M,
        target: {
          ...R.target,
          selector: {
            ...R.target.selector,
            geometry: nn,
            properties: {
              ...R.target.selector.properties,
              textStyle: E
            }
          }
        }
      }), Q.trim())
        t(1, y = {
          ...y,
          [q]: Q
        });
      else {
        const { [q]: Zn, ...lt } = y;
        t(1, y = lt);
      }
    }
    t(6, g = null), t(7, h = "");
  }, D = (q, Q) => {
    const R = o.find((M) => M.id === q);
    R && (r.updateAnnotation({
      ...R,
      target: {
        ...R.target,
        selector: {
          ...R.target.selector,
          properties: {
            ...R.target.selector.properties,
            textStyle: Q
          }
        }
      }
    }), g === q && t(8, E = Q));
  }, j = (q) => {
    g === q && (t(6, g = null), t(7, h = ""));
    const { [q]: Q, ...R } = y;
    t(1, y = R), r.removeAnnotation(q);
  }, V = (q, Q, R) => {
    if (q.button !== 0) return;
    q.stopPropagation();
    const M = w(q.clientX, q.clientY);
    k = { x: M.x - R.x, y: M.y - R.y }, b = Q;
  }, J = (q) => {
    if (!b || !k) return;
    const Q = w(q.clientX, q.clientY);
    t(11, P = {
      [b]: {
        x: Q.x - k.x,
        y: Q.y - k.y
      }
    });
  }, ee = () => {
    var Q, R, M, _e;
    if (!b) return;
    const q = P[b];
    if (q) {
      const ke = o.find((ie) => ie.id === b);
      if (ke) {
        const ie = ke.target.selector.geometry, ye = S(ke.target.selector), Ke = q.x - ye.x, qe = q.y - ye.y;
        r.updateAnnotation({
          ...ke,
          target: {
            ...ke.target,
            selector: {
              ...ke.target.selector,
              geometry: {
                ...ie,
                x: ie.x + Ke,
                y: ie.y + qe,
                anchorX: q.x,
                anchorY: q.y,
                bounds: {
                  minX: (((Q = ie.bounds) == null ? void 0 : Q.minX) ?? ie.x) + Ke,
                  minY: (((R = ie.bounds) == null ? void 0 : R.minY) ?? ie.y) + qe,
                  maxX: (((M = ie.bounds) == null ? void 0 : M.maxX) ?? ie.x) + Ke,
                  maxY: (((_e = ie.bounds) == null ? void 0 : _e.maxY) ?? ie.y) + qe
                }
              }
            }
          }
        });
      }
    }
    b = null, k = null, t(11, P = {});
  }, W = (q) => {
    q.stopPropagation(), (q.key === "Enter" || q.key === "Escape") && (F(), r.cancelSelected());
  }, se = (q) => [
    `font-weight:${q.bold ? "bold" : "normal"}`,
    q.italic ? "font-style:italic" : "",
    q.underline ? "text-decoration:underline" : ""
  ].filter(Boolean).join(";"), ve = (q, Q, R) => [
    `left:${Q.left}px`,
    `top:${Q.top}px`,
    `width:${R}px`,
    `height:${(q.fontSize || un.fontSize) * 1.2}px`,
    `font-size:${q.fontSize || un.fontSize}px`,
    q.bold ? "font-weight:bold" : "",
    q.italic ? "font-style:italic" : "",
    q.underline ? "text-decoration:underline" : "",
    q.bgColor && q.bgColor !== "transparent" ? `background:${q.bgColor}` : ""
  ].filter(Boolean).join(";");
  sn(() => {
    c = r.element.querySelector("img"), c && (c.complete && O(), c.addEventListener("load", O), window.ResizeObserver && (_ = new ResizeObserver(O), _.observe(c)), r.on("createAnnotation", z), r.on("selectionChanged", G), window.addEventListener("mousemove", J), window.addEventListener("mouseup", ee));
  }), ai(() => {
    c == null || c.removeEventListener("load", O), _ == null || _.disconnect(), r.off("createAnnotation", z), r.off("selectionChanged", G), window.removeEventListener("mousemove", J), window.removeEventListener("mouseup", ee);
  });
  const oe = (q, Q, R) => V(R, q, Q), He = (q) => C(q), ce = (q, Q, R) => V(R, q, Q), Ee = (q, Q, R) => V(R, q, Q), ue = (q, Q, R) => V(R, q, Q);
  function je(q) {
    mn[q ? "unshift" : "push"](() => {
      u = q, t(3, u);
    });
  }
  const pe = (q, Q) => D(q, Q.detail), Be = (q) => j(q);
  function Se(q) {
    mn[q ? "unshift" : "push"](() => {
      N = q, t(9, N);
    });
  }
  function K() {
    h = this.value, t(7, h);
  }
  return e.$$set = (q) => {
    "anno" in q && t(27, r = q.anno), "strokeColor" in q && t(0, f = q.strokeColor);
  }, e.$$.update = () => {
    if (e.$$.dirty[0] & /*$store*/
    536870912 && t(28, o = a), e.$$.dirty[0] & /*allAnnotations*/
    268435456 && t(12, s = o.reduce(
      (q, Q) => {
        var _e, ke;
        const R = (_e = Q.target) == null ? void 0 : _e.selector, M = (ke = R == null ? void 0 : R.properties) == null ? void 0 : ke.toolType;
        if (!R) return q;
        if (M === "arrow") {
          const ie = R.geometry.points, [ye, Ke] = ie[0], [qe, Ze] = ie[1], ln = Math.atan2(Ze - Ke, qe - ye), nn = 25, Zn = [
            `${qe - nn * Math.cos(ln - Math.PI / 6)},${Ze - nn * Math.sin(ln - Math.PI / 6)}`,
            `${qe},${Ze}`,
            `${qe - nn * Math.cos(ln + Math.PI / 6)},${Ze - nn * Math.sin(ln + Math.PI / 6)}`
          ].join(" ");
          q.push({
            id: Q.id,
            toolType: "arrow",
            arrowheadStr: Zn
          });
        } else if (M === "distance") {
          const ie = R.geometry.points.map((tn) => tn.point), [ye, Ke] = ie[0], [qe, Ze] = ie[ie.length - 1];
          let ln = 0;
          for (let tn = 1; tn < ie.length; tn++) ln += Math.hypot(ie[tn][0] - ie[tn - 1][0], ie[tn][1] - ie[tn - 1][1]);
          const nn = Math.hypot(qe - ye, Ze - Ke), Zn = nn > 0 ? -(Ze - Ke) / nn : 0, lt = nn > 0 ? (qe - ye) / nn : 1;
          q.push({
            id: Q.id,
            toolType: "distance",
            linePts: ie.map((tn) => `${tn[0]},${tn[1]}`).join(" "),
            x1: ye,
            y1: Ke,
            x2: qe,
            y2: Ze,
            mx: (ye + qe) / 2,
            my: (Ke + Ze) / 2,
            px: Zn,
            py: lt,
            length: `${ln.toFixed(1)}px`
          });
        }
        return q;
      },
      []
    )), e.$$.dirty[0] & /*allAnnotations*/
    268435456 && t(2, l = o.map((q) => {
      var Q, R, M;
      return {
        id: q.id,
        annotation: q,
        selector: (Q = q.target) == null ? void 0 : Q.selector,
        text: (M = (R = q.bodies) == null ? void 0 : R[0]) == null ? void 0 : M.value
      };
    }).filter(({ selector: q }) => {
      var Q;
      return ((Q = q == null ? void 0 : q.properties) == null ? void 0 : Q.toolType) === "text";
    })), e.$$.dirty[0] & /*textAnnotations, localTexts*/
    6)
      for (const { id: q, text: Q } of l)
        Q && y[q] === void 0 && t(1, y = { ...y, [q]: Q });
  }, [
    f,
    y,
    l,
    u,
    p,
    d,
    g,
    h,
    E,
    N,
    H,
    P,
    s,
    L,
    T,
    A,
    S,
    X,
    I,
    C,
    F,
    D,
    j,
    V,
    W,
    se,
    ve,
    r,
    o,
    a,
    oe,
    He,
    ce,
    Ee,
    ue,
    je,
    pe,
    Be,
    Se,
    K
  ];
}
class Ir extends Ne {
  constructor(n) {
    super(), Re(this, n, Hr, Or, Ce, { anno: 27, strokeColor: 0 }, null, [-1, -1, -1]);
  }
}
const Cr = (e) => {
  if (!("element" in e))
    return null;
  const n = new Ir({
    target: e.element,
    props: { anno: e }
  });
  return {
    setStrokeColor(t) {
      n.$set({ strokeColor: t });
    }
  };
};
function ms(e) {
  let n, t, o, s, l, a = (
    /*isClosable*/
    e[1] && gs(e)
  );
  return {
    c() {
      n = Y("path"), o = Y("path"), a && a.c(), l = Ie(), i(n, "class", t = rn(`a9s-outer ${/*isClosable*/
      e[1] ? "closed" : "open"}`) + " svelte-1fo8cp4"), i(
        n,
        "d",
        /*pathString*/
        e[2]
      ), i(o, "class", s = rn(`a9s-inner ${/*isClosable*/
      e[1] ? "closed" : "open"}`) + " svelte-1fo8cp4"), i(
        o,
        "d",
        /*pathString*/
        e[2]
      );
    },
    m(r, f) {
      U(r, n, f), U(r, o, f), a && a.m(r, f), U(r, l, f);
    },
    p(r, f) {
      f & /*isClosable*/
      2 && t !== (t = rn(`a9s-outer ${/*isClosable*/
      r[1] ? "closed" : "open"}`) + " svelte-1fo8cp4") && i(n, "class", t), f & /*pathString*/
      4 && i(
        n,
        "d",
        /*pathString*/
        r[2]
      ), f & /*isClosable*/
      2 && s !== (s = rn(`a9s-inner ${/*isClosable*/
      r[1] ? "closed" : "open"}`) + " svelte-1fo8cp4") && i(o, "class", s), f & /*pathString*/
      4 && i(
        o,
        "d",
        /*pathString*/
        r[2]
      ), /*isClosable*/
      r[1] ? a ? a.p(r, f) : (a = gs(r), a.c(), a.m(l.parentNode, l)) : a && (a.d(1), a = null);
    },
    d(r) {
      r && (B(n), B(o), B(l)), a && a.d(r);
    }
  };
}
function gs(e) {
  let n, t, o;
  return {
    c() {
      n = Y("circle"), i(n, "class", "a9s-handle svelte-1fo8cp4"), i(n, "cx", t = /*points*/
      e[0][0][0]), i(n, "cy", o = /*points*/
      e[0][0][1]), i(
        n,
        "r",
        /*handleRadius*/
        e[3]
      );
    },
    m(s, l) {
      U(s, n, l);
    },
    p(s, l) {
      l & /*points*/
      1 && t !== (t = /*points*/
      s[0][0][0]) && i(n, "cx", t), l & /*points*/
      1 && o !== (o = /*points*/
      s[0][0][1]) && i(n, "cy", o), l & /*handleRadius*/
      8 && i(
        n,
        "r",
        /*handleRadius*/
        s[3]
      );
    },
    d(s) {
      s && B(n);
    }
  };
}
function Rr(e) {
  let n, t = (
    /*pathString*/
    e[2] && ms(e)
  );
  return {
    c() {
      n = Y("g"), t && t.c(), i(n, "class", "a9s-annotation a9s-rubberband");
    },
    m(o, s) {
      U(o, n, s), t && t.m(n, null);
    },
    p(o, [s]) {
      /*pathString*/
      o[2] ? t ? t.p(o, s) : (t = ms(o), t.c(), t.m(n, null)) : t && (t.d(1), t = null);
    },
    i: Te,
    o: Te,
    d(o) {
      o && B(n), t && t.d();
    }
  };
}
const Nr = 20, Ar = 1500;
function Dr(e, n, t) {
  let o, s, l;
  const a = en();
  let { addEventListener: r } = n, { drawingMode: f } = n, { transform: c } = n, { viewportScale: u = 1 } = n, p, d = [], _, g = !1, h;
  const E = (k) => {
    const P = k, { timeStamp: m, offsetX: L, offsetY: w } = P;
    if (p = { timeStamp: m, offsetX: L, offsetY: w }, f === "drag" && d.length === 0) {
      const T = c.elementToImage(P.offsetX, P.offsetY);
      d.push(T), t(8, _ = T);
    }
  }, N = (k) => {
    const P = k;
    if (h && clearTimeout(h), d.length > 0) {
      if (t(8, _ = c.elementToImage(P.offsetX, P.offsetY)), d.length > 2) {
        const m = an(_, d[0]) * u;
        t(1, g = m < Nr);
      }
      P.pointerType === "touch" && (h = setTimeout(
        () => {
          y();
        },
        Ar
      ));
    }
  }, H = (k) => {
    const P = k;
    if (h && clearTimeout(h), f === "click") {
      const m = P.timeStamp - p.timeStamp, L = an([p.offsetX, p.offsetY], [P.offsetX, P.offsetY]);
      if (m > 300 || L > 15) return;
      if (g)
        b();
      else if (d.length === 0) {
        const w = c.elementToImage(P.offsetX, P.offsetY);
        d.push(w), t(8, _ = w);
      } else
        d.push(_);
    } else {
      if (d.length === 1 && an(d[0], _) <= 4) {
        t(0, d = []), t(8, _ = void 0);
        return;
      }
      P.stopImmediatePropagation(), g ? b() : d.push(_);
    }
  }, y = () => {
    if (!_) return;
    const k = d.slice(0, -1);
    if (k.length < 2) return;
    const P = {
      type: Le.POLYLINE,
      geometry: {
        bounds: Xe(k),
        points: k.map((m) => ({ type: "CORNER", point: m }))
      }
    };
    t(0, d = []), t(8, _ = void 0), a("create", P);
  }, b = () => {
    const k = {
      type: Le.POLYLINE,
      geometry: {
        bounds: Xe(d),
        points: d.map((P) => ({ type: "CORNER", point: P })),
        closed: !0
      }
    };
    t(0, d = []), t(8, _ = void 0), a("create", k);
  };
  return sn(() => {
    r("pointerdown", E, !0), r("pointermove", N), r("pointerup", H, !0), r("dblclick", y, !0);
  }), e.$$set = (k) => {
    "addEventListener" in k && t(4, r = k.addEventListener), "drawingMode" in k && t(5, f = k.drawingMode), "transform" in k && t(6, c = k.transform), "viewportScale" in k && t(7, u = k.viewportScale);
  }, e.$$.update = () => {
    e.$$.dirty & /*viewportScale*/
    128 && t(3, o = 4 / u), e.$$.dirty & /*cursor, isClosable, points*/
    259 && t(9, s = _ ? g ? d : [...d, _] : []), e.$$.dirty & /*coords, isClosable*/
    514 && t(2, l = s.length > 0 ? `M ${s[0][0]},${s[0][1]}` + s.slice(1).map(([k, P]) => ` L ${k},${P}`).join("") + (g ? " Z" : "") : "");
  }, [
    d,
    g,
    l,
    o,
    r,
    f,
    c,
    u,
    _,
    s
  ];
}
class Xr extends Ne {
  constructor(n) {
    super(), Re(this, n, Dr, Rr, Ce, {
      addEventListener: 4,
      drawingMode: 5,
      transform: 6,
      viewportScale: 7
    });
  }
}
const jr = (e, n, t) => {
  const { points: o, closed: s } = e.geometry, l = o[n], a = n === 0 ? s ? o.length - 1 : null : n - 1, r = n === o.length - 1 ? s ? 0 : null : n + 1;
  let f = 0, c = 0;
  if (a !== null && r !== null) {
    const p = o[a].point, d = o[r].point;
    f = d[0] - p[0], c = d[1] - p[1];
  } else if (a !== null) {
    const p = o[a].point;
    f = l.point[0] - p[0], c = l.point[1] - p[1];
  } else if (r !== null) {
    const p = o[r].point;
    f = p[0] - l.point[0], c = p[1] - l.point[1];
  }
  const u = Math.sqrt(f * f + c * c);
  if (u > 0) {
    const p = Math.min(0.3 * u, 100 / t);
    f = f / u * p, c = c / u * p;
  }
  return [f, c];
}, Br = (e, n) => {
  if (e.type === "CORNER" && n.type === "CORNER")
    return [
      (e.point[0] + n.point[0]) / 2,
      (e.point[1] + n.point[1]) / 2
    ];
  const t = e.type === "CORNER" ? e.point : e.outHandle || e.point, o = n.type === "CORNER" ? n.point : n.inHandle || n.point, s = 0.5, l = 1 - s;
  return [
    l * l * l * e.point[0] + 3 * l * l * s * t[0] + 3 * l * s * s * o[0] + s * s * s * n.point[0],
    l * l * l * e.point[1] + 3 * l * l * s * t[1] + 3 * l * s * s * o[1] + s * s * s * n.point[1]
  ];
}, Ur = (e, n, t) => {
  const o = e.geometry.points[n];
  if (o.type === "CORNER") {
    const [s, l] = jr(e, n, t), a = o.point, r = o.inHandle || [
      a[0] - s,
      a[1] - l
    ], f = o.outHandle || [
      a[0] + s,
      a[1] + l
    ];
    return {
      ...e,
      geometry: {
        ...e.geometry,
        points: e.geometry.points.map((c, u) => u === n ? {
          ...c,
          type: "CURVE",
          inHandle: r,
          outHandle: f,
          locked: !0
        } : c)
      }
    };
  } else
    return {
      ...e,
      geometry: {
        ...e.geometry,
        points: e.geometry.points.map((s, l) => l === n ? {
          ...s,
          type: "CORNER"
        } : s)
      }
    };
};
function Gr(e) {
  let n, t, o, s, l;
  return {
    c() {
      n = Y("circle"), i(n, "class", "a9s-tangent-handle svelte-103tdqm"), i(n, "cx", t = /*controlPoint*/
      e[1][0]), i(n, "cy", o = /*controlPoint*/
      e[1][1]), i(
        n,
        "r",
        /*handleRadius*/
        e[3]
      );
    },
    m(a, r) {
      U(a, n, r), s || (l = x(
        n,
        "pointerdown",
        /*pointerdown_handler_1*/
        e[8]
      ), s = !0);
    },
    p(a, r) {
      r & /*controlPoint*/
      2 && t !== (t = /*controlPoint*/
      a[1][0]) && i(n, "cx", t), r & /*controlPoint*/
      2 && o !== (o = /*controlPoint*/
      a[1][1]) && i(n, "cy", o), r & /*handleRadius*/
      8 && i(
        n,
        "r",
        /*handleRadius*/
        a[3]
      );
    },
    d(a) {
      a && B(n), s = !1, l();
    }
  };
}
function Yr(e) {
  let n, t, o, s, l, a, r, f, c;
  return {
    c() {
      n = Y("circle"), l = Y("circle"), i(n, "cx", t = /*controlPoint*/
      e[1][0]), i(n, "cy", o = /*controlPoint*/
      e[1][1]), i(n, "class", "a9s-tangent-handle-buffer svelte-103tdqm"), i(n, "r", s = 3 * /*handleRadius*/
      e[3]), Qe(
        n,
        "touched",
        /*touched*/
        e[2]
      ), i(l, "class", "a9s-tangent-handle pointer-none svelte-103tdqm"), i(l, "cx", a = /*controlPoint*/
      e[1][0]), i(l, "cy", r = /*controlPoint*/
      e[1][1]), i(
        l,
        "r",
        /*handleRadius*/
        e[3]
      );
    },
    m(u, p) {
      U(u, n, p), U(u, l, p), f || (c = [
        x(
          n,
          "pointerdown",
          /*pointerdown_handler*/
          e[7]
        ),
        x(
          n,
          "pointerdown",
          /*onPointerDown*/
          e[4]
        ),
        x(
          n,
          "pointerup",
          /*onPointerUp*/
          e[5]
        )
      ], f = !0);
    },
    p(u, p) {
      p & /*controlPoint*/
      2 && t !== (t = /*controlPoint*/
      u[1][0]) && i(n, "cx", t), p & /*controlPoint*/
      2 && o !== (o = /*controlPoint*/
      u[1][1]) && i(n, "cy", o), p & /*handleRadius*/
      8 && s !== (s = 3 * /*handleRadius*/
      u[3]) && i(n, "r", s), p & /*touched*/
      4 && Qe(
        n,
        "touched",
        /*touched*/
        u[2]
      ), p & /*controlPoint*/
      2 && a !== (a = /*controlPoint*/
      u[1][0]) && i(l, "cx", a), p & /*controlPoint*/
      2 && r !== (r = /*controlPoint*/
      u[1][1]) && i(l, "cy", r), p & /*handleRadius*/
      8 && i(
        l,
        "r",
        /*handleRadius*/
        u[3]
      );
    },
    d(u) {
      u && (B(n), B(l)), f = !1, Oe(c);
    }
  };
}
function qr(e) {
  let n, t, o, s, l, a, r, f, c, u, p;
  function d(h, E) {
    return fn ? Yr : Gr;
  }
  let g = d()(e);
  return {
    c() {
      n = Y("g"), t = Y("line"), r = Y("line"), g.c(), i(t, "class", "a9s-tangent-line a9s-outer svelte-103tdqm"), i(t, "x1", o = /*corner*/
      e[0][0]), i(t, "y1", s = /*corner*/
      e[0][1]), i(t, "x2", l = /*controlPoint*/
      e[1][0]), i(t, "y2", a = /*controlPoint*/
      e[1][1]), i(r, "class", "a9s-tangent-line a9s-inner svelte-103tdqm"), i(r, "x1", f = /*corner*/
      e[0][0]), i(r, "y1", c = /*corner*/
      e[0][1]), i(r, "x2", u = /*controlPoint*/
      e[1][0]), i(r, "y2", p = /*controlPoint*/
      e[1][1]), i(n, "class", "a9s-bezier-handle svelte-103tdqm");
    },
    m(h, E) {
      U(h, n, E), Z(n, t), Z(n, r), g.m(n, null);
    },
    p(h, [E]) {
      E & /*corner*/
      1 && o !== (o = /*corner*/
      h[0][0]) && i(t, "x1", o), E & /*corner*/
      1 && s !== (s = /*corner*/
      h[0][1]) && i(t, "y1", s), E & /*controlPoint*/
      2 && l !== (l = /*controlPoint*/
      h[1][0]) && i(t, "x2", l), E & /*controlPoint*/
      2 && a !== (a = /*controlPoint*/
      h[1][1]) && i(t, "y2", a), E & /*corner*/
      1 && f !== (f = /*corner*/
      h[0][0]) && i(r, "x1", f), E & /*corner*/
      1 && c !== (c = /*corner*/
      h[0][1]) && i(r, "y1", c), E & /*controlPoint*/
      2 && u !== (u = /*controlPoint*/
      h[1][0]) && i(r, "x2", u), E & /*controlPoint*/
      2 && p !== (p = /*controlPoint*/
      h[1][1]) && i(r, "y2", p), g.p(h, E);
    },
    i: Te,
    o: Te,
    d(h) {
      h && B(n), g.d();
    }
  };
}
function zr(e, n, t) {
  let o, { corner: s } = n, { controlPoint: l } = n, { viewportScale: a = 1 } = n, r = !1;
  const f = (d) => {
    d.pointerType === "touch" && t(2, r = !0);
  }, c = () => t(2, r = !1);
  function u(d) {
    he.call(this, e, d);
  }
  function p(d) {
    he.call(this, e, d);
  }
  return e.$$set = (d) => {
    "corner" in d && t(0, s = d.corner), "controlPoint" in d && t(1, l = d.controlPoint), "viewportScale" in d && t(6, a = d.viewportScale);
  }, e.$$.update = () => {
    e.$$.dirty & /*viewportScale*/
    64 && t(3, o = 4 / a);
  }, [
    s,
    l,
    r,
    o,
    f,
    c,
    a,
    u,
    p
  ];
}
class Ks extends Ne {
  constructor(n) {
    super(), Re(this, n, zr, qr, Ce, {
      corner: 0,
      controlPoint: 1,
      viewportScale: 6
    });
  }
}
function Lt(e) {
  const n = e.slice(), t = (
    /*midpoints*/
    n[11][
      /*visibleMidpoint*/
      n[6]
    ]
  );
  return n[31] = t.point, n;
}
function _s(e, n, t) {
  const o = e.slice();
  return o[32] = n[t], o[34] = t, o;
}
function Ot(e) {
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
function Ht(e) {
  const n = e.slice(), t = (
    /*midpoints*/
    n[11][
      /*visibleMidpoint*/
      n[6]
    ]
  );
  return n[31] = t.point, n;
}
function ys(e) {
  let n, t, o, s, l, a, r, f, c, u;
  return {
    c() {
      n = Y("mask"), t = Y("rect"), r = Y("circle"), i(t, "x", o = /*mask*/
      e[9].x), i(t, "y", s = /*mask*/
      e[9].y), i(t, "width", l = /*mask*/
      e[9].w), i(t, "height", a = /*mask*/
      e[9].h), i(t, "class", "svelte-sq8d4p"), i(r, "cx", f = /*point*/
      e[31][0]), i(r, "cy", c = /*point*/
      e[31][1]), i(r, "r", u = Bt / /*viewportScale*/
      e[3]), i(r, "class", "svelte-sq8d4p"), i(
        n,
        "id",
        /*maskId*/
        e[20]
      ), i(n, "class", "a9s-polygon-editor-mask svelte-sq8d4p");
    },
    m(p, d) {
      U(p, n, d), Z(n, t), Z(n, r);
    },
    p(p, d) {
      d[0] & /*mask*/
      512 && o !== (o = /*mask*/
      p[9].x) && i(t, "x", o), d[0] & /*mask*/
      512 && s !== (s = /*mask*/
      p[9].y) && i(t, "y", s), d[0] & /*mask*/
      512 && l !== (l = /*mask*/
      p[9].w) && i(t, "width", l), d[0] & /*mask*/
      512 && a !== (a = /*mask*/
      p[9].h) && i(t, "height", a), d[0] & /*midpoints, visibleMidpoint*/
      2112 && f !== (f = /*point*/
      p[31][0]) && i(r, "cx", f), d[0] & /*midpoints, visibleMidpoint*/
      2112 && c !== (c = /*point*/
      p[31][1]) && i(r, "cy", c), d[0] & /*viewportScale*/
      8 && u !== (u = Bt / /*viewportScale*/
      p[3]) && i(r, "r", u);
    },
    d(p) {
      p && B(n);
    }
  };
}
function ws(e) {
  let n, t, o = (
    /*corner*/
    e[36].type === "CURVE" && bs(e)
  );
  return {
    c() {
      o && o.c(), n = Ie();
    },
    m(s, l) {
      o && o.m(s, l), U(s, n, l), t = !0;
    },
    p(s, l) {
      /*corner*/
      s[36].type === "CURVE" ? o ? (o.p(s, l), l[0] & /*geom, selectedCorners*/
      288 && $(o, 1)) : (o = bs(s), o.c(), $(o, 1), o.m(n.parentNode, n)) : o && (Fe(), ne(o, 1, 1, () => {
        o = null;
      }), We());
    },
    i(s) {
      t || ($(o), t = !0);
    },
    o(s) {
      ne(o), t = !1;
    },
    d(s) {
      s && B(n), o && o.d(s);
    }
  };
}
function bs(e) {
  let n, t, o, s = (
    /*corner*/
    e[36].inHandle && vs(e)
  ), l = (
    /*corner*/
    e[36].outHandle && Es(e)
  );
  return {
    c() {
      s && s.c(), n = te(), l && l.c(), t = Ie();
    },
    m(a, r) {
      s && s.m(a, r), U(a, n, r), l && l.m(a, r), U(a, t, r), o = !0;
    },
    p(a, r) {
      /*corner*/
      a[36].inHandle ? s ? (s.p(a, r), r[0] & /*geom, selectedCorners*/
      288 && $(s, 1)) : (s = vs(a), s.c(), $(s, 1), s.m(n.parentNode, n)) : s && (Fe(), ne(s, 1, 1, () => {
        s = null;
      }), We()), /*corner*/
      a[36].outHandle ? l ? (l.p(a, r), r[0] & /*geom, selectedCorners*/
      288 && $(l, 1)) : (l = Es(a), l.c(), $(l, 1), l.m(t.parentNode, t)) : l && (Fe(), ne(l, 1, 1, () => {
        l = null;
      }), We());
    },
    i(a) {
      o || ($(s), $(l), o = !0);
    },
    o(a) {
      ne(s), ne(l), o = !1;
    },
    d(a) {
      a && (B(n), B(t)), s && s.d(a), l && l.d(a);
    }
  };
}
function vs(e) {
  let n, t;
  return n = new Ks({
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
    le(
      /*grab*/
      e[30](`IN-${/*selectedCorner*/
      e[35]}`)
    ) && e[30](`IN-${/*selectedCorner*/
    e[35]}`).apply(this, arguments);
  }), {
    c() {
      ge(n.$$.fragment);
    },
    m(o, s) {
      de(n, o, s), t = !0;
    },
    p(o, s) {
      e = o;
      const l = {};
      s[0] & /*geom, selectedCorners*/
      288 && (l.corner = /*corner*/
      e[36].point), s[0] & /*geom, selectedCorners*/
      288 && (l.controlPoint = /*corner*/
      e[36].inHandle), s[0] & /*viewportScale*/
      8 && (l.viewportScale = /*viewportScale*/
      e[3]), n.$set(l);
    },
    i(o) {
      t || ($(n.$$.fragment, o), t = !0);
    },
    o(o) {
      ne(n.$$.fragment, o), t = !1;
    },
    d(o) {
      me(n, o);
    }
  };
}
function Es(e) {
  let n, t;
  return n = new Ks({
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
    le(
      /*grab*/
      e[30](`OUT-${/*selectedCorner*/
      e[35]}`)
    ) && e[30](`OUT-${/*selectedCorner*/
    e[35]}`).apply(this, arguments);
  }), {
    c() {
      ge(n.$$.fragment);
    },
    m(o, s) {
      de(n, o, s), t = !0;
    },
    p(o, s) {
      e = o;
      const l = {};
      s[0] & /*geom, selectedCorners*/
      288 && (l.corner = /*corner*/
      e[36].point), s[0] & /*geom, selectedCorners*/
      288 && (l.controlPoint = /*corner*/
      e[36].outHandle), s[0] & /*viewportScale*/
      8 && (l.viewportScale = /*viewportScale*/
      e[3]), n.$set(l);
    },
    i(o) {
      t || ($(n.$$.fragment, o), t = !0);
    },
    o(o) {
      ne(n.$$.fragment, o), t = !1;
    },
    d(o) {
      me(n, o);
    }
  };
}
function ks(e) {
  let n, t;
  return n = new Ye({
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
    le(
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
      ge(n.$$.fragment);
    },
    m(o, s) {
      de(n, o, s), t = !0;
    },
    p(o, s) {
      e = o;
      const l = {};
      s[0] & /*geom*/
      32 && (l.x = /*pt*/
      e[32].point[0]), s[0] & /*geom*/
      32 && (l.y = /*pt*/
      e[32].point[1]), s[0] & /*viewportScale*/
      8 && (l.scale = /*viewportScale*/
      e[3]), s[0] & /*selectedCorners*/
      256 && (l.selected = /*selectedCorners*/
      e[8].includes(
        /*idx*/
        e[34]
      )), n.$set(l);
    },
    i(o) {
      t || ($(n.$$.fragment, o), t = !0);
    },
    o(o) {
      ne(n.$$.fragment, o), t = !1;
    },
    d(o) {
      me(n, o);
    }
  };
}
function Ss(e) {
  let n, t;
  return n = new zt({
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
    le(
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
      ge(n.$$.fragment);
    },
    m(o, s) {
      de(n, o, s), t = !0;
    },
    p(o, s) {
      e = o;
      const l = {};
      s[0] & /*midpoints, visibleMidpoint*/
      2112 && (l.x = /*point*/
      e[31][0]), s[0] & /*midpoints, visibleMidpoint*/
      2112 && (l.y = /*point*/
      e[31][1]), s[0] & /*viewportScale*/
      8 && (l.scale = /*viewportScale*/
      e[3]), n.$set(l);
    },
    i(o) {
      t || ($(n.$$.fragment, o), t = !0);
    },
    o(o) {
      ne(n.$$.fragment, o), t = !1;
    },
    d(o) {
      me(n, o);
    }
  };
}
function Vr(e) {
  let n, t, o, s, l, a, r, f, c, u, p, d, _, g, h, E, N, H, y, b = (
    /*visibleMidpoint*/
    e[6] !== void 0 && !/*isHandleHovered*/
    e[7] && ys(Ht(e))
  ), k = (
    /*selectedCorners*/
    e[8].length === 1 && ws(Ot(e))
  ), P = De(
    /*geom*/
    e[5].points
  ), m = [];
  for (let T = 0; T < P.length; T += 1)
    m[T] = ks(_s(e, P, T));
  const L = (T) => ne(m[T], 1, 1, () => {
    m[T] = null;
  });
  let w = (
    /*visibleMidpoint*/
    e[6] !== void 0 && !/*isHandleHovered*/
    e[7] && Ss(Lt(e))
  );
  return {
    c() {
      n = Y("defs"), b && b.c(), t = te(), o = Y("g"), s = Y("rect"), c = Y("path"), p = Y("path"), _ = te(), k && k.c(), g = te();
      for (let T = 0; T < m.length; T += 1)
        m[T].c();
      h = te(), w && w.c(), E = Ie(), i(s, "x", l = /*mask*/
      e[9].x), i(s, "y", a = /*mask*/
      e[9].y), i(s, "width", r = /*mask*/
      e[9].w), i(s, "height", f = /*mask*/
      e[9].h), i(s, "class", "mask-buffer svelte-sq8d4p"), i(c, "class", u = rn(`a9s-outer polyline ${/*shape*/
      e[0].geometry.closed ? "closed" : "open"}`) + " svelte-sq8d4p"), i(
        c,
        "d",
        /*d*/
        e[10]
      ), i(p, "class", d = rn(`a9s-inner polyline a9s-shape-handle ${/*shape*/
      e[0].geometry.closed ? "closed" : "open"}`) + " svelte-sq8d4p"), i(
        p,
        "style",
        /*computedStyle*/
        e[1]
      ), i(
        p,
        "d",
        /*d*/
        e[10]
      ), i(o, "mask", `url(#${/*maskId*/
      e[20]})`);
    },
    m(T, A) {
      U(T, n, A), b && b.m(n, null), U(T, t, A), U(T, o, A), Z(o, s), Z(o, c), Z(o, p), U(T, _, A), k && k.m(T, A), U(T, g, A);
      for (let S = 0; S < m.length; S += 1)
        m[S] && m[S].m(T, A);
      U(T, h, A), w && w.m(T, A), U(T, E, A), N = !0, H || (y = [
        x(
          c,
          "pointerup",
          /*onShapePointerUp*/
          e[14]
        ),
        x(c, "pointerdown", function() {
          le(
            /*grab*/
            e[30]("SHAPE")
          ) && e[30]("SHAPE").apply(this, arguments);
        }),
        x(
          p,
          "pointerup",
          /*onShapePointerUp*/
          e[14]
        ),
        x(p, "pointerdown", function() {
          le(
            /*grab*/
            e[30]("SHAPE")
          ) && e[30]("SHAPE").apply(this, arguments);
        })
      ], H = !0);
    },
    p(T, A) {
      if (e = T, /*visibleMidpoint*/
      e[6] !== void 0 && !/*isHandleHovered*/
      e[7] ? b ? b.p(Ht(e), A) : (b = ys(Ht(e)), b.c(), b.m(n, null)) : b && (b.d(1), b = null), (!N || A[0] & /*mask*/
      512 && l !== (l = /*mask*/
      e[9].x)) && i(s, "x", l), (!N || A[0] & /*mask*/
      512 && a !== (a = /*mask*/
      e[9].y)) && i(s, "y", a), (!N || A[0] & /*mask*/
      512 && r !== (r = /*mask*/
      e[9].w)) && i(s, "width", r), (!N || A[0] & /*mask*/
      512 && f !== (f = /*mask*/
      e[9].h)) && i(s, "height", f), (!N || A[0] & /*shape*/
      1 && u !== (u = rn(`a9s-outer polyline ${/*shape*/
      e[0].geometry.closed ? "closed" : "open"}`) + " svelte-sq8d4p")) && i(c, "class", u), (!N || A[0] & /*d*/
      1024) && i(
        c,
        "d",
        /*d*/
        e[10]
      ), (!N || A[0] & /*shape*/
      1 && d !== (d = rn(`a9s-inner polyline a9s-shape-handle ${/*shape*/
      e[0].geometry.closed ? "closed" : "open"}`) + " svelte-sq8d4p")) && i(p, "class", d), (!N || A[0] & /*computedStyle*/
      2) && i(
        p,
        "style",
        /*computedStyle*/
        e[1]
      ), (!N || A[0] & /*d*/
      1024) && i(
        p,
        "d",
        /*d*/
        e[10]
      ), /*selectedCorners*/
      e[8].length === 1 ? k ? (k.p(Ot(e), A), A[0] & /*selectedCorners*/
      256 && $(k, 1)) : (k = ws(Ot(e)), k.c(), $(k, 1), k.m(g.parentNode, g)) : k && (Fe(), ne(k, 1, 1, () => {
        k = null;
      }), We()), A[0] & /*geom, viewportScale, selectedCorners, onDoubleClick, onEnterHandle, onLeaveHandle, onHandlePointerDown, grab, onHandlePointerUp*/
      1073983784) {
        P = De(
          /*geom*/
          e[5].points
        );
        let S;
        for (S = 0; S < P.length; S += 1) {
          const X = _s(e, P, S);
          m[S] ? (m[S].p(X, A), $(m[S], 1)) : (m[S] = ks(X), m[S].c(), $(m[S], 1), m[S].m(h.parentNode, h));
        }
        for (Fe(), S = P.length; S < m.length; S += 1)
          L(S);
        We();
      }
      /*visibleMidpoint*/
      e[6] !== void 0 && !/*isHandleHovered*/
      e[7] ? w ? (w.p(Lt(e), A), A[0] & /*visibleMidpoint, isHandleHovered*/
      192 && $(w, 1)) : (w = Ss(Lt(e)), w.c(), $(w, 1), w.m(E.parentNode, E)) : w && (Fe(), ne(w, 1, 1, () => {
        w = null;
      }), We());
    },
    i(T) {
      if (!N) {
        $(k);
        for (let A = 0; A < P.length; A += 1)
          $(m[A]);
        $(w), N = !0;
      }
    },
    o(T) {
      ne(k), m = m.filter(Boolean);
      for (let A = 0; A < m.length; A += 1)
        ne(m[A]);
      ne(w), N = !1;
    },
    d(T) {
      T && (B(n), B(t), B(o), B(_), B(g), B(h), B(E)), b && b.d(), k && k.d(T), Xn(m, T), w && w.d(T), H = !1, Oe(y);
    }
  };
}
function Kr(e) {
  let n, t;
  return n = new gn({
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
          Vr,
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
      ge(n.$$.fragment);
    },
    m(o, s) {
      de(n, o, s), t = !0;
    },
    p(o, s) {
      const l = {};
      s[0] & /*shape*/
      1 && (l.shape = /*shape*/
      o[0]), s[0] & /*transform*/
      4 && (l.transform = /*transform*/
      o[2]), s[0] & /*svgEl*/
      16 && (l.svgEl = /*svgEl*/
      o[4]), s[0] & /*midpoints, visibleMidpoint, viewportScale, isHandleHovered, geom, selectedCorners, grab, shape, computedStyle, d, mask*/
      1073745899 | s[1] & /*$$scope*/
      64 && (l.$$scope = { dirty: s, ctx: o }), n.$set(l);
    },
    i(o) {
      t || ($(n.$$.fragment, o), t = !0);
    },
    o(o) {
      ne(n.$$.fragment, o), t = !1;
    },
    d(o) {
      me(n, o);
    }
  };
}
const Fr = 250, Wr = 1e3, Zr = 12, Bt = 4.5;
function Qr(e, n, t) {
  let o, s, l, a;
  const r = en();
  let { shape: f } = n, { computedStyle: c } = n, { transform: u } = n, { viewportScale: p = 1 } = n, { svgEl: d } = n, _, g = !1, h = null, E = [], N = !1;
  const H = () => t(7, g = !0), y = () => t(7, g = !1), b = (C) => {
    if (E.length > 0 || !s.some((W) => W.visible)) {
      t(6, _ = void 0);
      return;
    }
    const [G, F] = u.elementToImage(C.offsetX, C.offsetY), D = (W) => Math.pow(W[0] - G, 2) + Math.pow(W[1] - F, 2), j = o.points.reduce((W, se) => D(se.point) < D(W.point) ? se : W), V = s.filter((W) => W.visible).reduce((W, se) => D(se.point) < D(W.point) ? se : W), J = Math.pow(Wr / p, 2);
    D(j.point) < J || D(V.point) < J ? t(6, _ = s.indexOf(V)) : t(6, _ = void 0);
  }, k = () => {
    document.activeElement !== d && d.focus();
  }, P = () => {
    t(8, E = []), k();
  }, m = (C) => {
    t(7, g = !0), C.preventDefault(), C.stopPropagation(), h = performance.now();
  }, L = (C) => (G) => {
    if (!h || performance.now() - h > Fr) return;
    const F = E.includes(C);
    if (G.metaKey || G.ctrlKey || G.shiftKey)
      F ? t(8, E = E.filter((D) => D !== C)) : t(8, E = [...E, C]);
    else {
      const D = Ur(f, C, p);
      r("change", D), t(8, E = [C]);
    }
  }, w = (C) => () => {
    const G = o.points[C];
    if (G.type === "CORNER" || !G.inHandle && !G.outHandle) return;
    const F = o.points.map((V, J) => {
      if (J !== C) return V;
      const ee = { ...V, locked: !0 }, W = G.inHandle || G.outHandle;
      if (!W) return V;
      const se = W[0] - G.point[0], ve = W[1] - G.point[1];
      if (Math.sqrt(se ** 2 + ve ** 2) === 0) return V;
      const He = [G.point[0] - se, G.point[1] - ve];
      return G.inHandle ? (ee.inHandle = G.inHandle, ee.outHandle = He) : G.outHandle && (ee.outHandle = G.outHandle, ee.inHandle = He), ee;
    }), D = Xe(Pn(F, o.closed)), j = {
      ...f,
      geometry: { bounds: D, points: F, closed: o.closed }
    };
    r("change", j);
  }, T = (C, G, F) => {
    const D = C.geometry, [j, V] = F;
    let J;
    if (G === "SHAPE")
      J = D.points.map((W) => ({
        ...W,
        point: [W.point[0] + j, W.point[1] + V],
        inHandle: W.inHandle ? [W.inHandle[0] + j, W.inHandle[1] + V] : void 0,
        outHandle: W.outHandle ? [W.outHandle[0] + j, W.outHandle[1] + V] : void 0
      }));
    else if (G.startsWith("CORNER-")) {
      const W = parseInt(G.split("-")[1]);
      J = D.points.map((se, ve) => ve === W ? {
        ...se,
        point: [se.point[0] + j, se.point[1] + V],
        inHandle: se.inHandle ? [se.inHandle[0] + j, se.inHandle[1] + V] : void 0,
        outHandle: se.outHandle ? [se.outHandle[0] + j, se.outHandle[1] + V] : void 0
      } : se);
    } else if (G.startsWith("IN-") || G.startsWith("OUT-")) {
      const [W, se] = G.split("-"), ve = parseInt(se);
      J = D.points.map((oe, He) => {
        if (He === ve && oe.type === "CURVE") {
          const ce = N ? !1 : oe.locked, Ee = { ...oe, locked: ce };
          if (W === "IN" && oe.inHandle) {
            if (Ee.inHandle = [oe.inHandle[0] + j, oe.inHandle[1] + V], oe.outHandle && ce) {
              const ue = Ee.inHandle[0] - oe.point[0], je = Ee.inHandle[1] - oe.point[1], pe = Math.sqrt(ue ** 2 + je ** 2), Be = Math.sqrt((oe.outHandle[0] - oe.point[0]) ** 2 + (oe.outHandle[1] - oe.point[1]) ** 2);
              pe > 0 && (Ee.outHandle = [
                oe.point[0] - ue / pe * Be,
                oe.point[1] - je / pe * Be
              ]);
            }
          } else if (W === "OUT" && oe.outHandle && (Ee.outHandle = [oe.outHandle[0] + j, oe.outHandle[1] + V], oe.inHandle && ce)) {
            const ue = Ee.outHandle[0] - oe.point[0], je = Ee.outHandle[1] - oe.point[1], pe = Math.sqrt(ue ** 2 + je ** 2), Be = Math.sqrt((oe.inHandle[0] - oe.point[0]) ** 2 + (oe.inHandle[1] - oe.point[1]) ** 2);
            pe > 0 && (Ee.inHandle = [
              oe.point[0] - ue / pe * Be,
              oe.point[1] - je / pe * Be
            ]);
          }
          return Ee;
        }
        return oe;
      });
    } else
      J = D.points;
    const ee = Xe(Pn(J, D.closed));
    return {
      ...C,
      geometry: { bounds: ee, points: J, closed: D.closed }
    };
  }, A = (C) => async (G) => {
    G.stopPropagation();
    const F = [
      ...o.points.slice(0, C + 1),
      {
        type: "CORNER",
        point: s[C].point
      },
      ...o.points.slice(C + 1)
    ], D = Xe(Pn(F, o.closed));
    r("change", {
      ...f,
      geometry: { points: F, bounds: D, closed: o.closed }
    }), await Vn();
    const j = [...document.querySelectorAll(".a9s-handle")][C + 1];
    if (j != null && j.firstChild) {
      const V = new PointerEvent(
        "pointerdown",
        {
          bubbles: !0,
          cancelable: !0,
          clientX: G.clientX,
          clientY: G.clientY,
          pointerId: G.pointerId,
          pointerType: G.pointerType,
          isPrimary: G.isPrimary,
          buttons: G.buttons
        }
      );
      j.firstChild.dispatchEvent(V);
    }
  }, S = () => {
    const C = o.closed ? 3 : 2;
    if (o.points.length - E.length < C) return;
    const G = o.points.filter((D, j) => !E.includes(j)), F = Xe(Pn(G, o.closed));
    r("change", {
      ...f,
      geometry: {
        closed: f.geometry.closed,
        bounds: F,
        points: G
      }
    }), t(8, E = []);
  };
  sn(() => {
    const C = (F) => {
      F.altKey && !N && (N = !0), (F.key === "Delete" || F.key === "Backspace") && S();
    }, G = (F) => {
      !F.altKey && N && (N = !1);
    };
    return d.addEventListener("pointermove", b), window.addEventListener("keydown", C), window.addEventListener("keyup", G), () => {
      d.removeEventListener("pointermove", b), window.removeEventListener("keydown", C), window.removeEventListener("keyup", G);
    };
  });
  const X = `polygon-mask-${Math.random().toString(36).substring(2, 12)}`;
  function I(C) {
    he.call(this, e, C);
  }
  function O(C) {
    he.call(this, e, C);
  }
  function z(C) {
    he.call(this, e, C);
  }
  return e.$$set = (C) => {
    "shape" in C && t(0, f = C.shape), "computedStyle" in C && t(1, c = C.computedStyle), "transform" in C && t(2, u = C.transform), "viewportScale" in C && t(3, p = C.viewportScale), "svgEl" in C && t(4, d = C.svgEl);
  }, e.$$.update = () => {
    e.$$.dirty[0] & /*shape*/
    1 && t(5, o = f.geometry), e.$$.dirty[0] & /*geom, viewportScale*/
    40 && t(11, s = fn ? [] : o.points.reduce(
      (C, G, F) => {
        const D = F === o.points.length - 1 ? (
          // Last point
          o.closed ? o.points[0] : void 0
        ) : o.points[F + 1];
        if (!D) return C;
        const [j, V] = Br(G, D), ee = Math.sqrt(Math.pow(D.point[0] - j, 2) + Math.pow(D.point[1] - V, 2)) > Zr / p;
        return [...C, { point: [j, V], visible: ee }];
      },
      []
    )), e.$$.dirty[0] & /*geom*/
    32 && t(10, l = _l(o)), e.$$.dirty[0] & /*geom, viewportScale*/
    40 && t(9, a = bn(o.bounds, Bt / p));
  }, [
    f,
    c,
    u,
    p,
    d,
    o,
    _,
    g,
    E,
    a,
    l,
    s,
    H,
    y,
    P,
    m,
    L,
    w,
    T,
    A,
    X,
    I,
    O,
    z
  ];
}
class Jr extends Ne {
  constructor(n) {
    super(), Re(
      this,
      n,
      Qr,
      Kr,
      Ce,
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
function $r(e) {
  var H, y;
  let n, t, o, s, l, a, r, f, c, u, p, d, _, g, h, E, N;
  return g = new Ye({
    props: {
      class: "a9s-corner-top",
      x: (
        /*points*/
        ((H = e[5][0]) == null ? void 0 : H[0]) ?? /*center*/
        e[6].x
      ),
      y: (
        /*points*/
        ((y = e[5][0]) == null ? void 0 : y[1]) ?? /*center*/
        e[6].y - /*outerRadius*/
        e[9]
      ),
      scale: (
        /*viewportScale*/
        e[3]
      )
    }
  }), g.$on("pointerdown", function() {
    le(
      /*grab*/
      e[17]("SCALE")
    ) && e[17]("SCALE").apply(this, arguments);
  }), {
    c() {
      n = Y("defs"), t = Y("mask"), o = Y("rect"), f = Y("path"), c = te(), u = Y("path"), p = te(), d = Y("path"), _ = te(), ge(g.$$.fragment), i(o, "x", s = /*mask*/
      e[7].x), i(o, "y", l = /*mask*/
      e[7].y), i(o, "width", a = /*mask*/
      e[7].w), i(o, "height", r = /*mask*/
      e[7].h), i(o, "class", "svelte-1u8dw9g"), i(
        f,
        "d",
        /*pathString*/
        e[8]
      ), i(f, "class", "svelte-1u8dw9g"), i(
        t,
        "id",
        /*maskId*/
        e[11]
      ), i(t, "class", "a9s-star-editor-mask svelte-1u8dw9g"), i(u, "class", "a9s-outer"), i(u, "mask", `url(#${/*maskId*/
      e[11]})`), i(
        u,
        "d",
        /*pathString*/
        e[8]
      ), i(d, "class", "a9s-inner a9s-shape-handle"), i(
        d,
        "style",
        /*computedStyle*/
        e[1]
      ), i(
        d,
        "d",
        /*pathString*/
        e[8]
      );
    },
    m(b, k) {
      U(b, n, k), Z(n, t), Z(t, o), Z(t, f), U(b, c, k), U(b, u, k), U(b, p, k), U(b, d, k), U(b, _, k), de(g, b, k), h = !0, E || (N = [
        x(u, "pointerdown", function() {
          le(
            /*grab*/
            e[17]("SHAPE")
          ) && e[17]("SHAPE").apply(this, arguments);
        }),
        x(d, "pointerdown", function() {
          le(
            /*grab*/
            e[17]("SHAPE")
          ) && e[17]("SHAPE").apply(this, arguments);
        })
      ], E = !0);
    },
    p(b, k) {
      var m, L;
      e = b, (!h || k & /*mask*/
      128 && s !== (s = /*mask*/
      e[7].x)) && i(o, "x", s), (!h || k & /*mask*/
      128 && l !== (l = /*mask*/
      e[7].y)) && i(o, "y", l), (!h || k & /*mask*/
      128 && a !== (a = /*mask*/
      e[7].w)) && i(o, "width", a), (!h || k & /*mask*/
      128 && r !== (r = /*mask*/
      e[7].h)) && i(o, "height", r), (!h || k & /*pathString*/
      256) && i(
        f,
        "d",
        /*pathString*/
        e[8]
      ), (!h || k & /*pathString*/
      256) && i(
        u,
        "d",
        /*pathString*/
        e[8]
      ), (!h || k & /*computedStyle*/
      2) && i(
        d,
        "style",
        /*computedStyle*/
        e[1]
      ), (!h || k & /*pathString*/
      256) && i(
        d,
        "d",
        /*pathString*/
        e[8]
      );
      const P = {};
      k & /*points, center*/
      96 && (P.x = /*points*/
      ((m = e[5][0]) == null ? void 0 : m[0]) ?? /*center*/
      e[6].x), k & /*points, center, outerRadius*/
      608 && (P.y = /*points*/
      ((L = e[5][0]) == null ? void 0 : L[1]) ?? /*center*/
      e[6].y - /*outerRadius*/
      e[9]), k & /*viewportScale*/
      8 && (P.scale = /*viewportScale*/
      e[3]), g.$set(P);
    },
    i(b) {
      h || ($(g.$$.fragment, b), h = !0);
    },
    o(b) {
      ne(g.$$.fragment, b), h = !1;
    },
    d(b) {
      b && (B(n), B(c), B(u), B(p), B(d), B(_)), me(g, b), E = !1, Oe(N);
    }
  };
}
function xr(e) {
  let n, t;
  return n = new gn({
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
          $r,
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
      ge(n.$$.fragment);
    },
    m(o, s) {
      de(n, o, s), t = !0;
    },
    p(o, [s]) {
      const l = {};
      s & /*shape*/
      1 && (l.shape = /*shape*/
      o[0]), s & /*transform*/
      4 && (l.transform = /*transform*/
      o[2]), s & /*svgEl*/
      16 && (l.svgEl = /*svgEl*/
      o[4]), s & /*$$scope, points, center, outerRadius, viewportScale, grab, computedStyle, pathString, mask*/
      394218 && (l.$$scope = { dirty: s, ctx: o }), n.$set(l);
    },
    i(o) {
      t || ($(n.$$.fragment, o), t = !0);
    },
    o(o) {
      ne(n.$$.fragment, o), t = !1;
    },
    d(o) {
      me(n, o);
    }
  };
}
function ea(e, n, t) {
  let o, s, l, a, r, f, c, { shape: u } = n, { computedStyle: p } = n, { transform: d } = n, { viewportScale: _ = 1 } = n, { svgEl: g } = n;
  const h = (b, k, P) => {
    const m = b.geometry, [L, w] = P;
    let T;
    if (k === "SHAPE")
      T = m.points.map(([A, S]) => [A + L, S + w]);
    else if (k === "SCALE") {
      const A = (m.bounds.minX + m.bounds.maxX) / 2, S = (m.bounds.minY + m.bounds.maxY) / 2, X = m.points[0], I = Math.sqrt(Math.pow(X[0] - A, 2) + Math.pow(X[1] - S, 2)), O = X[1] + w, z = Math.sqrt(Math.pow(X[0] - A, 2) + Math.pow(O - S, 2)), C = I > 0 ? z / I : 1;
      T = m.points.map(([G, F]) => [A + (G - A) * C, S + (F - S) * C]);
    } else
      T = m.points;
    return {
      ...b,
      geometry: {
        bounds: Xe(T),
        points: T
      }
    };
  }, E = `star-mask-${Math.random().toString(36).substring(2, 12)}`;
  function N(b) {
    he.call(this, e, b);
  }
  function H(b) {
    he.call(this, e, b);
  }
  function y(b) {
    he.call(this, e, b);
  }
  return e.$$set = (b) => {
    "shape" in b && t(0, u = b.shape), "computedStyle" in b && t(1, p = b.computedStyle), "transform" in b && t(2, d = b.transform), "viewportScale" in b && t(3, _ = b.viewportScale), "svgEl" in b && t(4, g = b.svgEl);
  }, e.$$.update = () => {
    e.$$.dirty & /*shape*/
    1 && t(12, o = u.geometry), e.$$.dirty & /*geom*/
    4096 && t(5, s = o.points), e.$$.dirty & /*geom*/
    4096 && t(6, l = {
      x: (o.bounds.minX + o.bounds.maxX) / 2,
      y: (o.bounds.minY + o.bounds.maxY) / 2
    }), e.$$.dirty & /*points*/
    32 && t(13, a = s.filter((b, k) => k % 2 === 0)), e.$$.dirty & /*outerPoints, center*/
    8256 && t(9, r = a.length > 0 ? Math.sqrt(Math.pow(a[0][0] - l.x, 2) + Math.pow(a[0][1] - l.y, 2)) : 0), e.$$.dirty & /*points*/
    32 && t(8, f = s.length > 0 ? `M ${s[0][0]},${s[0][1]}` + s.slice(1).map(([b, k]) => ` L ${b},${k}`).join("") + " Z" : ""), e.$$.dirty & /*geom, viewportScale*/
    4104 && t(7, c = bn(o.bounds, 2 / _));
  }, [
    u,
    p,
    d,
    _,
    g,
    s,
    l,
    c,
    f,
    r,
    h,
    E,
    o,
    a,
    N,
    H,
    y
  ];
}
class na extends Ne {
  constructor(n) {
    super(), Re(this, n, ea, xr, Ce, {
      shape: 0,
      computedStyle: 1,
      transform: 2,
      viewportScale: 3,
      svgEl: 4
    });
  }
}
function Ts(e) {
  let n, t;
  return {
    c() {
      n = Y("path"), t = Y("path"), i(n, "class", "a9s-outer svelte-1ohtpx8"), i(
        n,
        "d",
        /*pathString*/
        e[0]
      ), i(t, "class", "a9s-inner svelte-1ohtpx8"), i(
        t,
        "d",
        /*pathString*/
        e[0]
      );
    },
    m(o, s) {
      U(o, n, s), U(o, t, s);
    },
    p(o, s) {
      s & /*pathString*/
      1 && i(
        n,
        "d",
        /*pathString*/
        o[0]
      ), s & /*pathString*/
      1 && i(
        t,
        "d",
        /*pathString*/
        o[0]
      );
    },
    d(o) {
      o && (B(n), B(t));
    }
  };
}
function ta(e) {
  let n, t = (
    /*pathString*/
    e[0] && Ts(e)
  );
  return {
    c() {
      n = Y("g"), t && t.c(), i(n, "class", "a9s-annotation a9s-rubberband");
    },
    m(o, s) {
      U(o, n, s), t && t.m(n, null);
    },
    p(o, [s]) {
      /*pathString*/
      o[0] ? t ? t.p(o, s) : (t = Ts(o), t.c(), t.m(n, null)) : t && (t.d(1), t = null);
    },
    i: Te,
    o: Te,
    d(o) {
      o && B(n), t && t.d();
    }
  };
}
const Ms = 5, Ps = 0.382;
function oa(e, n, t) {
  let o, s;
  const l = en();
  let { addEventListener: a } = n, { drawingMode: r } = n, { transform: f } = n, { viewportScale: c } = n, u, p = 0, d;
  const _ = (H, y, b, k) => {
    const P = [], m = Math.PI / Ms;
    for (let L = 0; L < Ms * 2; L++) {
      const w = L % 2 === 0 ? b : k, T = L * m - Math.PI / 2;
      P.push([H + w * Math.cos(T), y + w * Math.sin(T)]);
    }
    return P;
  }, g = (H) => {
    const y = H;
    d = performance.now(), r === "drag" && (t(5, u = f.elementToImage(y.offsetX, y.offsetY)), t(6, p = 1));
  }, h = (H) => {
    const y = H;
    if (u) {
      const b = f.elementToImage(y.offsetX, y.offsetY);
      t(6, p = Math.sqrt(Math.pow(b[0] - u[0], 2) + Math.pow(b[1] - u[1], 2)));
    }
  }, E = (H) => {
    const y = H, b = performance.now() - d;
    if (r === "click") {
      if (b > 300) return;
      u ? N() : (t(5, u = f.elementToImage(y.offsetX, y.offsetY)), t(6, p = 1));
    } else u && (b > 300 || p > 10 ? (y.stopPropagation(), N()) : (t(5, u = void 0), t(6, p = 0)));
  }, N = () => {
    if (p > 10 && u) {
      const H = p * Ps, y = _(u[0], u[1], p, H), b = {
        type: Le.POLYGON,
        geometry: { bounds: Xe(y), points: y }
      };
      l("create", b);
    }
    t(5, u = void 0), t(6, p = 0);
  };
  return sn(() => {
    a("pointerdown", g), a("pointermove", h), a("pointerup", E, !0);
  }), e.$$set = (H) => {
    "addEventListener" in H && t(1, a = H.addEventListener), "drawingMode" in H && t(2, r = H.drawingMode), "transform" in H && t(3, f = H.transform), "viewportScale" in H && t(4, c = H.viewportScale);
  }, e.$$.update = () => {
    e.$$.dirty & /*center, outerRadius*/
    96 && t(7, o = u ? _(u[0], u[1], p, p * Ps) : []), e.$$.dirty & /*starPoints*/
    128 && t(0, s = o.length > 0 ? `M ${o[0][0]},${o[0][1]}` + o.slice(1).map(([H, y]) => ` L ${H},${y}`).join("") + " Z" : "");
  }, [
    s,
    a,
    r,
    f,
    c,
    u,
    p,
    o
  ];
}
class sa extends Ne {
  constructor(n) {
    super(), Re(this, n, oa, ta, Ce, {
      addEventListener: 1,
      drawingMode: 2,
      transform: 3,
      viewportScale: 4
    });
  }
}
function la(e) {
  let n, t, o, s, l, a, r, f, c, u, p, d, _, g, h, E, N, H, y, b, k, P, m, L, w, T, A, S, X, I, O, z, C, G, F, D, j, V, J, ee, W, se, ve, oe, He, ce, Ee, ue, je, pe, Be, Se, K, q, Q;
  return ce = new Ye({
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
  }), ce.$on("pointerdown", function() {
    le(
      /*grab*/
      e[12]("TOP_LEFT")
    ) && e[12]("TOP_LEFT").apply(this, arguments);
  }), ue = new Ye({
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
    le(
      /*grab*/
      e[12]("TOP_RIGHT")
    ) && e[12]("TOP_RIGHT").apply(this, arguments);
  }), pe = new Ye({
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
  }), pe.$on("pointerdown", function() {
    le(
      /*grab*/
      e[12]("BOTTOM_RIGHT")
    ) && e[12]("BOTTOM_RIGHT").apply(this, arguments);
  }), Se = new Ye({
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
  }), Se.$on("pointerdown", function() {
    le(
      /*grab*/
      e[12]("BOTTOM_LEFT")
    ) && e[12]("BOTTOM_LEFT").apply(this, arguments);
  }), {
    c() {
      n = Y("defs"), t = Y("mask"), o = Y("rect"), f = Y("rect"), _ = te(), g = Y("rect"), y = te(), b = Y("rect"), w = te(), T = Y("rect"), I = te(), O = Y("rect"), F = te(), D = Y("rect"), ee = te(), W = Y("rect"), He = te(), ge(ce.$$.fragment), Ee = te(), ge(ue.$$.fragment), je = te(), ge(pe.$$.fragment), Be = te(), ge(Se.$$.fragment), i(o, "class", "rect-mask-bg svelte-1njczvj"), i(o, "x", s = /*mask*/
      e[6].x), i(o, "y", l = /*mask*/
      e[6].y), i(o, "width", a = /*mask*/
      e[6].w), i(o, "height", r = /*mask*/
      e[6].h), i(f, "class", "rect-mask-fg svelte-1njczvj"), i(f, "x", c = /*geom*/
      e[5].x), i(f, "y", u = /*geom*/
      e[5].y), i(f, "width", p = /*geom*/
      e[5].w), i(f, "height", d = /*geom*/
      e[5].h), i(
        t,
        "id",
        /*maskId*/
        e[8]
      ), i(t, "class", "a9s-rectangle-editor-mask svelte-1njczvj"), i(g, "class", "a9s-outer"), i(g, "mask", `url(#${/*maskId*/
      e[8]})`), i(g, "x", h = /*geom*/
      e[5].x), i(g, "y", E = /*geom*/
      e[5].y), i(g, "width", N = /*geom*/
      e[5].w), i(g, "height", H = /*geom*/
      e[5].h), i(b, "class", "a9s-inner a9s-shape-handle"), i(
        b,
        "style",
        /*computedStyle*/
        e[1]
      ), i(b, "x", k = /*geom*/
      e[5].x), i(b, "y", P = /*geom*/
      e[5].y), i(b, "width", m = /*geom*/
      e[5].w), i(b, "height", L = /*geom*/
      e[5].h), i(T, "class", "a9s-edge-handle a9s-edge-handle-top"), i(T, "x", A = /*geom*/
      e[5].x), i(T, "y", S = /*geom*/
      e[5].y), i(T, "height", 1), i(T, "width", X = /*geom*/
      e[5].w), i(O, "class", "a9s-edge-handle a9s-edge-handle-right"), i(O, "x", z = /*geom*/
      e[5].x + /*geom*/
      e[5].w), i(O, "y", C = /*geom*/
      e[5].y), i(O, "height", G = /*geom*/
      e[5].h), i(O, "width", 1), i(D, "class", "a9s-edge-handle a9s-edge-handle-bottom"), i(D, "x", j = /*geom*/
      e[5].x), i(D, "y", V = /*geom*/
      e[5].y + /*geom*/
      e[5].h), i(D, "height", 1), i(D, "width", J = /*geom*/
      e[5].w), i(W, "class", "a9s-edge-handle a9s-edge-handle-left"), i(W, "x", se = /*geom*/
      e[5].x), i(W, "y", ve = /*geom*/
      e[5].y), i(W, "height", oe = /*geom*/
      e[5].h), i(W, "width", 1);
    },
    m(R, M) {
      U(R, n, M), Z(n, t), Z(t, o), Z(t, f), U(R, _, M), U(R, g, M), U(R, y, M), U(R, b, M), U(R, w, M), U(R, T, M), U(R, I, M), U(R, O, M), U(R, F, M), U(R, D, M), U(R, ee, M), U(R, W, M), U(R, He, M), de(ce, R, M), U(R, Ee, M), de(ue, R, M), U(R, je, M), de(pe, R, M), U(R, Be, M), de(Se, R, M), K = !0, q || (Q = [
        x(g, "pointerdown", function() {
          le(
            /*grab*/
            e[12]("SHAPE")
          ) && e[12]("SHAPE").apply(this, arguments);
        }),
        x(b, "pointerdown", function() {
          le(
            /*grab*/
            e[12]("SHAPE")
          ) && e[12]("SHAPE").apply(this, arguments);
        }),
        x(T, "pointerdown", function() {
          le(
            /*grab*/
            e[12]("TOP")
          ) && e[12]("TOP").apply(this, arguments);
        }),
        x(O, "pointerdown", function() {
          le(
            /*grab*/
            e[12]("RIGHT")
          ) && e[12]("RIGHT").apply(this, arguments);
        }),
        x(D, "pointerdown", function() {
          le(
            /*grab*/
            e[12]("BOTTOM")
          ) && e[12]("BOTTOM").apply(this, arguments);
        }),
        x(W, "pointerdown", function() {
          le(
            /*grab*/
            e[12]("LEFT")
          ) && e[12]("LEFT").apply(this, arguments);
        })
      ], q = !0);
    },
    p(R, M) {
      e = R, (!K || M & /*mask*/
      64 && s !== (s = /*mask*/
      e[6].x)) && i(o, "x", s), (!K || M & /*mask*/
      64 && l !== (l = /*mask*/
      e[6].y)) && i(o, "y", l), (!K || M & /*mask*/
      64 && a !== (a = /*mask*/
      e[6].w)) && i(o, "width", a), (!K || M & /*mask*/
      64 && r !== (r = /*mask*/
      e[6].h)) && i(o, "height", r), (!K || M & /*geom*/
      32 && c !== (c = /*geom*/
      e[5].x)) && i(f, "x", c), (!K || M & /*geom*/
      32 && u !== (u = /*geom*/
      e[5].y)) && i(f, "y", u), (!K || M & /*geom*/
      32 && p !== (p = /*geom*/
      e[5].w)) && i(f, "width", p), (!K || M & /*geom*/
      32 && d !== (d = /*geom*/
      e[5].h)) && i(f, "height", d), (!K || M & /*geom*/
      32 && h !== (h = /*geom*/
      e[5].x)) && i(g, "x", h), (!K || M & /*geom*/
      32 && E !== (E = /*geom*/
      e[5].y)) && i(g, "y", E), (!K || M & /*geom*/
      32 && N !== (N = /*geom*/
      e[5].w)) && i(g, "width", N), (!K || M & /*geom*/
      32 && H !== (H = /*geom*/
      e[5].h)) && i(g, "height", H), (!K || M & /*computedStyle*/
      2) && i(
        b,
        "style",
        /*computedStyle*/
        e[1]
      ), (!K || M & /*geom*/
      32 && k !== (k = /*geom*/
      e[5].x)) && i(b, "x", k), (!K || M & /*geom*/
      32 && P !== (P = /*geom*/
      e[5].y)) && i(b, "y", P), (!K || M & /*geom*/
      32 && m !== (m = /*geom*/
      e[5].w)) && i(b, "width", m), (!K || M & /*geom*/
      32 && L !== (L = /*geom*/
      e[5].h)) && i(b, "height", L), (!K || M & /*geom*/
      32 && A !== (A = /*geom*/
      e[5].x)) && i(T, "x", A), (!K || M & /*geom*/
      32 && S !== (S = /*geom*/
      e[5].y)) && i(T, "y", S), (!K || M & /*geom*/
      32 && X !== (X = /*geom*/
      e[5].w)) && i(T, "width", X), (!K || M & /*geom*/
      32 && z !== (z = /*geom*/
      e[5].x + /*geom*/
      e[5].w)) && i(O, "x", z), (!K || M & /*geom*/
      32 && C !== (C = /*geom*/
      e[5].y)) && i(O, "y", C), (!K || M & /*geom*/
      32 && G !== (G = /*geom*/
      e[5].h)) && i(O, "height", G), (!K || M & /*geom*/
      32 && j !== (j = /*geom*/
      e[5].x)) && i(D, "x", j), (!K || M & /*geom*/
      32 && V !== (V = /*geom*/
      e[5].y + /*geom*/
      e[5].h)) && i(D, "y", V), (!K || M & /*geom*/
      32 && J !== (J = /*geom*/
      e[5].w)) && i(D, "width", J), (!K || M & /*geom*/
      32 && se !== (se = /*geom*/
      e[5].x)) && i(W, "x", se), (!K || M & /*geom*/
      32 && ve !== (ve = /*geom*/
      e[5].y)) && i(W, "y", ve), (!K || M & /*geom*/
      32 && oe !== (oe = /*geom*/
      e[5].h)) && i(W, "height", oe);
      const _e = {};
      M & /*geom*/
      32 && (_e.x = /*geom*/
      e[5].x), M & /*geom*/
      32 && (_e.y = /*geom*/
      e[5].y), M & /*viewportScale*/
      8 && (_e.scale = /*viewportScale*/
      e[3]), ce.$set(_e);
      const ke = {};
      M & /*geom*/
      32 && (ke.x = /*geom*/
      e[5].x + /*geom*/
      e[5].w), M & /*geom*/
      32 && (ke.y = /*geom*/
      e[5].y), M & /*viewportScale*/
      8 && (ke.scale = /*viewportScale*/
      e[3]), ue.$set(ke);
      const ie = {};
      M & /*geom*/
      32 && (ie.x = /*geom*/
      e[5].x + /*geom*/
      e[5].w), M & /*geom*/
      32 && (ie.y = /*geom*/
      e[5].y + /*geom*/
      e[5].h), M & /*viewportScale*/
      8 && (ie.scale = /*viewportScale*/
      e[3]), pe.$set(ie);
      const ye = {};
      M & /*geom*/
      32 && (ye.x = /*geom*/
      e[5].x), M & /*geom*/
      32 && (ye.y = /*geom*/
      e[5].y + /*geom*/
      e[5].h), M & /*viewportScale*/
      8 && (ye.scale = /*viewportScale*/
      e[3]), Se.$set(ye);
    },
    i(R) {
      K || ($(ce.$$.fragment, R), $(ue.$$.fragment, R), $(pe.$$.fragment, R), $(Se.$$.fragment, R), K = !0);
    },
    o(R) {
      ne(ce.$$.fragment, R), ne(ue.$$.fragment, R), ne(pe.$$.fragment, R), ne(Se.$$.fragment, R), K = !1;
    },
    d(R) {
      R && (B(n), B(_), B(g), B(y), B(b), B(w), B(T), B(I), B(O), B(F), B(D), B(ee), B(W), B(He), B(Ee), B(je), B(Be)), me(ce, R), me(ue, R), me(pe, R), me(Se, R), q = !1, Oe(Q);
    }
  };
}
function ia(e) {
  let n, t;
  return n = new gn({
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
          la,
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
      ge(n.$$.fragment);
    },
    m(o, s) {
      de(n, o, s), t = !0;
    },
    p(o, [s]) {
      const l = {};
      s & /*shape*/
      1 && (l.shape = /*shape*/
      o[0]), s & /*transform*/
      4 && (l.transform = /*transform*/
      o[2]), s & /*svgEl*/
      16 && (l.svgEl = /*svgEl*/
      o[4]), s & /*$$scope, geom, viewportScale, grab, computedStyle, mask*/
      12394 && (l.$$scope = { dirty: s, ctx: o }), n.$set(l);
    },
    i(o) {
      t || ($(n.$$.fragment, o), t = !0);
    },
    o(o) {
      ne(n.$$.fragment, o), t = !1;
    },
    d(o) {
      me(n, o);
    }
  };
}
function ra(e, n, t) {
  let o, s, { shape: l } = n, { computedStyle: a } = n, { transform: r } = n, { viewportScale: f = 1 } = n, { svgEl: c } = n;
  const u = (h, E, N) => {
    const H = h.geometry.bounds;
    let [y, b] = [H.minX, H.minY], [k, P] = [H.maxX, H.maxY];
    const [m, L] = N;
    if (E === "SHAPE")
      y += m, k += m, b += L, P += L;
    else {
      switch (E) {
        case "TOP":
        case "TOP_LEFT":
        case "TOP_RIGHT": {
          b += L;
          break;
        }
        case "BOTTOM":
        case "BOTTOM_LEFT":
        case "BOTTOM_RIGHT": {
          P += L;
          break;
        }
      }
      switch (E) {
        case "LEFT":
        case "TOP_LEFT":
        case "BOTTOM_LEFT": {
          y += m;
          break;
        }
        case "RIGHT":
        case "TOP_RIGHT":
        case "BOTTOM_RIGHT": {
          k += m;
          break;
        }
      }
    }
    const w = Math.min(y, k), T = Math.min(b, P), A = Math.abs(k - y), S = Math.abs(P - b);
    return {
      ...h,
      geometry: {
        x: w,
        y: T,
        w: A,
        h: S,
        bounds: {
          minX: w,
          minY: T,
          maxX: w + A,
          maxY: T + S
        }
      }
    };
  }, p = `rect-mask-${Math.random().toString(36).substring(2, 12)}`;
  function d(h) {
    he.call(this, e, h);
  }
  function _(h) {
    he.call(this, e, h);
  }
  function g(h) {
    he.call(this, e, h);
  }
  return e.$$set = (h) => {
    "shape" in h && t(0, l = h.shape), "computedStyle" in h && t(1, a = h.computedStyle), "transform" in h && t(2, r = h.transform), "viewportScale" in h && t(3, f = h.viewportScale), "svgEl" in h && t(4, c = h.svgEl);
  }, e.$$.update = () => {
    e.$$.dirty & /*shape*/
    1 && t(5, o = l.geometry), e.$$.dirty & /*geom, viewportScale*/
    40 && t(6, s = bn(o.bounds, 2 / f));
  }, [
    l,
    a,
    r,
    f,
    c,
    o,
    s,
    u,
    p,
    d,
    _,
    g
  ];
}
class aa extends Ne {
  constructor(n) {
    super(), Re(this, n, ra, ia, Ce, {
      shape: 0,
      computedStyle: 1,
      transform: 2,
      viewportScale: 3,
      svgEl: 4
    });
  }
}
function fa(e) {
  let n;
  return {
    c() {
      n = Y("g"), i(n, "class", "a9s-annotation a9s-rubberband");
    },
    m(t, o) {
      U(t, n, o);
    },
    p: Te,
    i: Te,
    o: Te,
    d(t) {
      t && B(n);
    }
  };
}
function ca(e, n, t) {
  const o = en();
  let { addEventListener: s } = n, { drawingMode: l } = n, { transform: a } = n, { viewportScale: r = 1 } = n, f = 0;
  const c = (p) => {
    f = performance.now();
  }, u = (p) => {
    const d = p;
    if (performance.now() - f > 400) return;
    const [g, h] = a.elementToImage(d.offsetX, d.offsetY), E = un.fontSize / Math.max(r, 0.01), N = E * 20, H = E * 1.2, y = {
      type: Le.RECTANGLE,
      geometry: {
        bounds: {
          minX: g,
          minY: h - E,
          maxX: g + N,
          maxY: h + E * 0.2
        },
        x: g,
        y: h,
        w: N,
        h: H
      },
      properties: { toolType: "text" }
    };
    o("create", y);
  };
  return sn(() => {
    s("pointerdown", c), s("pointerup", u, !0);
  }), e.$$set = (p) => {
    "addEventListener" in p && t(0, s = p.addEventListener), "drawingMode" in p && t(1, l = p.drawingMode), "transform" in p && t(2, a = p.transform), "viewportScale" in p && t(3, r = p.viewportScale);
  }, [s, l, a, r];
}
class ua extends Ne {
  constructor(n) {
    super(), Re(this, n, ca, fa, Ce, {
      addEventListener: 0,
      drawingMode: 1,
      transform: 2,
      viewportScale: 3
    });
  }
}
const da = (e) => {
  e.registerDrawingTool("ellipse", gr), e.registerShapeEditor(Le.ELLIPSE, hr), e.registerDrawingTool("line", kr), e.registerDrawingTool("arrow", gi), e.registerShapeEditor(Le.LINE, br), e.registerDrawingTool("path", Xr), e.registerDrawingTool("distance", wi), e.registerShapeEditor(Le.POLYLINE, Jr), e.registerDrawingTool("star", sa), e.registerShapeEditor(Le.POLYGON, na), e.registerDrawingTool("text", ua), e.registerShapeEditor(Le.RECTANGLE, aa);
  const n = Cr(e);
  return {
    setStrokeColor(t) {
      n == null || n.setStrokeColor(t);
    }
  };
};
export {
  da as mountPlugin
};
//# sourceMappingURL=annotorious-plugin-tools.es.js.map
