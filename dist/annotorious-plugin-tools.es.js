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
      const l = [], f = Math.max(n.dirty.length, s.length);
      for (let r = 0; r < f; r += 1)
        l[r] = n.dirty[r] | s[r];
      return l;
    }
    return n.dirty | s;
  }
  return n.dirty;
}
function el(e, n, t, o, s, l) {
  if (s) {
    const f = Os(n, t, o, l);
    e.p(f, s);
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
function ae(e, n, t) {
  e.insertBefore(n, t || null);
}
function fe(e) {
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
      return s.slice().forEach((f) => {
        f.call(e, l);
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
function Nn(e, n, t, o, s, l, f = null, r = [-1]) {
  const a = Gn;
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
    context: new Map(n.context || (a ? a.$$.context : [])),
    // everything else
    callbacks: Kt(),
    dirty: r,
    skip_bound: !1,
    root: n.target || a.$$.root
  };
  f && f(c.root);
  let u = !1;
  if (c.ctx = t ? t(e, n.props || {}, (p, d, ..._) => {
    const g = _.length ? _[0] : d;
    return c.ctx && s(c.ctx[p], c.ctx[p] = g) && (!c.skip_bound && c.bound[p] && c.bound[p](g), u && il(e, p)), d;
  }) : [], c.update(), u = !0, xe(c.before_update), c.fragment = o ? o(c.ctx) : !1, n.target) {
    if (n.hydrate) {
      const p = tl(n.target);
      c.fragment && c.fragment.l(p), p.forEach(fe);
    } else
      c.fragment && c.fragment.c();
    n.intro && be(e.$$.fragment), Je(e, n.target, n.anchor), Ds();
  }
  Bn(a);
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
var Le = /* @__PURE__ */ ((e) => (e.ELLIPSE = "ELLIPSE", e.MULTIPOLYGON = "MULTIPOLYGON", e.POLYGON = "POLYGON", e.POLYLINE = "POLYLINE", e.RECTANGLE = "RECTANGLE", e.LINE = "LINE", e))(Le || {}), fl = { exports: {} };
(function(e) {
  (function() {
    function n(r, a) {
      var c = r.x - a.x, u = r.y - a.y;
      return c * c + u * u;
    }
    function t(r, a, c) {
      var u = a.x, p = a.y, d = c.x - u, _ = c.y - p;
      if (d !== 0 || _ !== 0) {
        var g = ((r.x - u) * d + (r.y - p) * _) / (d * d + _ * _);
        g > 1 ? (u = c.x, p = c.y) : g > 0 && (u += d * g, p += _ * g);
      }
      return d = r.x - u, _ = r.y - p, d * d + _ * _;
    }
    function o(r, a) {
      for (var c = r[0], u = [c], p, d = 1, _ = r.length; d < _; d++)
        p = r[d], n(p, c) > a && (u.push(p), c = p);
      return c !== p && u.push(p), u;
    }
    function s(r, a, c, u, p) {
      for (var d = u, _, g = a + 1; g < c; g++) {
        var h = t(r[g], r[a], r[c]);
        h > d && (_ = g, d = h);
      }
      d > u && (_ - a > 1 && s(r, a, _, u, p), p.push(r[_]), c - _ > 1 && s(r, _, c, u, p));
    }
    function l(r, a) {
      var c = r.length - 1, u = [r[0]];
      return s(r, 0, c, a, u), u.push(r[c]), u;
    }
    function f(r, a, c) {
      if (r.length <= 2) return r;
      var u = a !== void 0 ? a * a : 1;
      return r = c ? r : o(r, u), r = l(r, u), r;
    }
    e.exports = f, e.exports.default = f;
  })();
})(fl);
const Dn = (e, n) => n, Xe = (e) => {
  let n = 1 / 0, t = 1 / 0, o = -1 / 0, s = -1 / 0;
  return e.forEach(([l, f]) => {
    n = Math.min(n, l), t = Math.min(t, f), o = Math.max(o, l), s = Math.max(s, f);
  }), { minX: n, minY: t, maxX: o, maxY: s };
}, xn = (e) => {
  let n = 0, t = e.length - 1;
  for (let o = 0; o < e.length; o++)
    n += (e[t][0] + e[o][0]) * (e[t][1] - e[o][1]), t = o;
  return Math.abs(0.5 * n);
}, et = (e, n, t) => {
  let o = !1;
  for (let s = 0, l = e.length - 1; s < e.length; l = s++) {
    const f = e[s][0], r = e[s][1], a = e[l][0], c = e[l][1];
    r > t != c > t && n < (a - f) * (t - r) / (c - r) + f && (o = !o);
  }
  return o;
}, al = (e, n = !0) => {
  let t = "M ";
  return e.forEach(([o, s], l) => {
    l === 0 ? t += `${o},${s}` : t += ` L ${o},${s}`;
  }), n && (t += " Z"), t;
}, fn = (e, n) => {
  const t = Math.abs(n[0] - e[0]), o = Math.abs(n[1] - e[1]);
  return Math.sqrt(Math.pow(t, 2) + Math.pow(o, 2));
}, cl = {
  area: (e) => Math.PI * e.geometry.rx * e.geometry.ry,
  intersects: (e, n, t) => {
    const { cx: o, cy: s, rx: l, ry: f } = e.geometry, r = 0, a = Math.cos(r), c = Math.sin(r), u = n - o, p = t - s, d = a * u + c * p, _ = c * u - a * p;
    return d * d / (l * l) + _ * _ / (f * f) <= 1;
  }
};
Dn(Le.ELLIPSE, cl);
const ul = {
  area: (e) => 0,
  intersects: (e, n, t, o = 2) => {
    const [[s, l], [f, r]] = e.geometry.points, a = Math.abs((r - l) * n - (f - s) * t + f * l - r * s), c = fn([s, l], [f, r]);
    return a / c <= o;
  }
};
Dn(Le.LINE, ul);
const pl = {
  area: (e) => {
    const { polygons: n } = e.geometry;
    return n.reduce((t, o) => {
      const [s, ...l] = o.rings, f = xn(s.points), r = l.reduce((a, c) => a + xn(c.points), 0);
      return t + f - r;
    }, 0);
  },
  intersects: (e, n, t) => {
    const { polygons: o } = e.geometry;
    for (const s of o) {
      const [l, ...f] = s.rings;
      if (et(l.points, n, t)) {
        let r = !1;
        for (const a of f)
          if (et(a.points, n, t)) {
            r = !0;
            break;
          }
        if (!r) return !0;
      }
    }
    return !1;
  }
}, ft = (e) => {
  const n = e.reduce((t, o) => [...t, ...o.rings[0].points], []);
  return Xe(n);
}, En = (e) => e.rings.map((n) => al(n.points)).join(" "), hl = (e) => e.polygons.reduce((n, t) => [
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
      const f = Xs(
        s.point,
        s.type === "CURVE" && s.outHandle || s.point,
        l.type === "CURVE" && l.inHandle || l.point,
        l.point,
        10
        // number of approximation segments
      );
      t.push(...f.slice(1));
    }
  }
  return t;
}, Xs = (e, n, t, o, s = 10) => {
  const l = [];
  for (let f = 0; f <= s; f++) {
    const r = f / s, a = Math.pow(1 - r, 3) * e[0] + 3 * Math.pow(1 - r, 2) * r * n[0] + 3 * (1 - r) * Math.pow(r, 2) * t[0] + Math.pow(r, 3) * o[0], c = Math.pow(1 - r, 3) * e[1] + 3 * Math.pow(1 - r, 2) * r * n[1] + 3 * (1 - r) * Math.pow(r, 2) * t[1] + Math.pow(r, 3) * o[1];
    l.push([a, c]);
  }
  return l;
}, gl = (e, n, t) => {
  for (let o = 0; o < e.points.length - 1; o++) {
    const s = e.points[o], l = e.points[o + 1];
    if (s.type === "CURVE" || l.type === "CURVE") {
      const f = Xs(
        s.point,
        s.type === "CURVE" && s.outHandle || s.point,
        l.type === "CURVE" && l.inHandle || l.point,
        l.point,
        20
        // TODO make configurable? Based on scale factor? Length?
      );
      for (let r = 0; r < f.length - 1; r++)
        if ($t(n, f[r], f[r + 1]) <= t) return !0;
    } else if ($t(n, s.point, l.point) <= t) return !0;
  }
  return !1;
}, $t = (e, n, t) => {
  const [o, s] = e, [l, f] = n, [r, a] = t, c = r - l, u = a - f, p = Math.sqrt(c * c + u * u);
  if (p === 0)
    return Math.sqrt((o - l) * (o - l) + (s - f) * (s - f));
  const d = ((o - l) * c + (s - f) * u) / (p * p);
  return d <= 0 ? Math.sqrt((o - l) * (o - l) + (s - f) * (s - f)) : d >= 1 ? Math.sqrt((o - r) * (o - r) + (s - a) * (s - a)) : Math.abs((a - f) * o - (r - l) * s + r * f - a * l) / p;
}, _l = (e) => {
  if (!e.points || e.points.length === 0)
    return "";
  const n = [], t = e.points[0];
  n.push(`M ${t.point[0]} ${t.point[1]}`);
  for (let o = 1; o < e.points.length; o++) {
    const s = e.points[o], l = e.points[o - 1];
    if (s.type === "CURVE" || l.type === "CURVE") {
      const f = l.type === "CURVE" && l.outHandle || l.point, r = s.type === "CURVE" && s.inHandle || s.point, a = s.point;
      n.push(`C ${f[0]} ${f[1]} ${r[0]} ${r[1]} ${a[0]} ${a[1]}`);
    } else
      n.push(`L ${s.point[0]} ${s.point[1]}`);
  }
  if (e.closed) {
    const o = e.points[e.points.length - 1], s = e.points[0];
    if (o.type === "CURVE" || s.type === "CURVE") {
      const l = o.outHandle || o.point, f = s.inHandle || s.point, r = s.point;
      n.push(`C ${l[0]} ${l[1]} ${f[0]} ${f[1]} ${r[0]} ${r[1]}`);
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
}, an = typeof window > "u" || typeof navigator > "u" ? !1 : "ontouchstart" in window || navigator.maxTouchPoints > 0 || // @ts-ignore
navigator.msMaxTouchPoints > 0, kl = (e) => ({}), xt = (e) => ({ grab: (
  /*onGrab*/
  e[0]
) });
function Sl(e) {
  let n, t, o, s;
  const l = (
    /*#slots*/
    e[8].default
  ), f = $s(
    l,
    e,
    /*$$scope*/
    e[7],
    xt
  );
  return {
    c() {
      n = re("g"), f && f.c(), v(n, "class", "a9s-annotation selected");
    },
    m(r, a) {
      ae(r, n, a), f && f.m(n, null), t = !0, o || (s = [
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
    p(r, [a]) {
      f && f.p && (!t || a & /*$$scope*/
      128) && el(
        f,
        l,
        r,
        /*$$scope*/
        r[7],
        t ? xs(
          l,
          /*$$scope*/
          r[7],
          a,
          kl
        ) : nl(
          /*$$scope*/
          r[7]
        ),
        xt
      );
    },
    i(r) {
      t || (be(f, r), t = !0);
    },
    o(r) {
      Pe(f, r), t = !1;
    },
    d(r) {
      r && fe(n), f && f.d(r), o = !1, xe(s);
    }
  };
}
function Tl(e, n, t) {
  let { $$slots: o = {}, $$scope: s } = n;
  const l = Ut();
  let { shape: f } = n, { editor: r } = n, { transform: a } = n, { svgEl: c } = n, u, p, d;
  const _ = (E) => (A) => {
    if (u = E, c) {
      const { left: I, top: y } = c.getBoundingClientRect(), b = A.clientX - I, k = A.clientY - y;
      p = a.elementToImage(b, k);
    } else {
      const { offsetX: I, offsetY: y } = A;
      p = a.elementToImage(I, y);
    }
    d = f, A.target.setPointerCapture(A.pointerId), l("grab", A);
  }, g = (E) => {
    if (u) {
      const [A, I] = a.elementToImage(E.offsetX, E.offsetY), y = [A - p[0], I - p[1]];
      t(3, f = r(d, u, y)), l("change", f);
    }
  }, h = (E) => {
    E.target.releasePointerCapture(E.pointerId), u = void 0, d = f, l("release", E);
  };
  return e.$$set = (E) => {
    "shape" in E && t(3, f = E.shape), "editor" in E && t(4, r = E.editor), "transform" in E && t(5, a = E.transform), "svgEl" in E && t(6, c = E.svgEl), "$$scope" in E && t(7, s = E.$$scope);
  }, [
    _,
    g,
    h,
    f,
    r,
    a,
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
  let n, t, o, s, l, f, r, a, c = (
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
      ), v(n, "class", f = `a9s-handle ${/*$$props*/
      e[8].class || ""}`.trim());
    },
    m(u, p) {
      ae(u, n, p), Me(n, t), c && c.m(n, null), Me(n, s), r || (a = [
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
      256 && f !== (f = `a9s-handle ${/*$$props*/
      u[8].class || ""}`.trim()) && v(n, "class", f);
    },
    d(u) {
      u && fe(n), c && c.d(), r = !1, xe(a);
    }
  };
}
function Pl(e) {
  let n, t, o, s, l, f, r, a, c;
  return {
    c() {
      n = re("g"), t = re("circle"), s = re("circle"), f = re("circle"), v(
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
      e[2]), v(s, "class", "a9s-handle-buffer svelte-qtyc7s"), v(s, "role", "button"), v(s, "tabindex", "0"), v(f, "class", "a9s-handle-dot"), v(
        f,
        "cx",
        /*x*/
        e[0]
      ), v(
        f,
        "cy",
        /*y*/
        e[1]
      ), v(f, "r", r = /*handleRadius*/
      e[5] + 2 / /*scale*/
      e[2]), v(n, "class", "a9s-touch-handle");
    },
    m(u, p) {
      ae(u, n, p), Me(n, t), Me(n, s), Me(n, f), a || (c = [
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
      ], a = !0);
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
        f,
        "cx",
        /*x*/
        u[0]
      ), p & /*y*/
      2 && v(
        f,
        "cy",
        /*y*/
        u[1]
      ), p & /*handleRadius, scale*/
      36 && r !== (r = /*handleRadius*/
      u[5] + 2 / /*scale*/
      u[2]) && v(f, "r", r);
    },
    d(u) {
      u && fe(n), a = !1, xe(c);
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
      ae(o, n, s);
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
      o && fe(n);
    }
  };
}
function Ll(e) {
  let n;
  function t(s, l) {
    return an ? Pl : Ml;
  }
  let o = t()(e);
  return {
    c() {
      o.c(), n = Wn();
    },
    m(s, l) {
      o.m(s, l), ae(s, n, l);
    },
    p(s, [l]) {
      o.p(s, l);
    },
    i: wn,
    o: wn,
    d(s) {
      s && fe(n), o.d(s);
    }
  };
}
function Ol(e, n, t) {
  let o, { x: s } = n, { y: l } = n, { scale: f } = n, { selected: r = void 0 } = n, a = !1;
  const c = (y) => {
    y.pointerType === "touch" && t(4, a = !0);
  }, u = () => t(4, a = !1);
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
  function A(y) {
    Ge.call(this, e, y);
  }
  function I(y) {
    Ge.call(this, e, y);
  }
  return e.$$set = (y) => {
    t(8, n = It(It({}, n), Ft(y))), "x" in y && t(0, s = y.x), "y" in y && t(1, l = y.y), "scale" in y && t(2, f = y.scale), "selected" in y && t(3, r = y.selected);
  }, e.$$.update = () => {
    e.$$.dirty & /*scale*/
    4 && t(5, o = 4 / f);
  }, n = Ft(n), [
    s,
    l,
    f,
    r,
    a,
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
    A,
    I
  ];
}
class Ln extends An {
  constructor(n) {
    super(), Nn(this, n, Ol, Ll, Rn, { x: 0, y: 1, scale: 2, selected: 3 });
  }
}
function Hl(e) {
  let n, t, o, s, l, f, r;
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
    m(a, c) {
      ae(a, n, c), Me(n, t), Me(n, s), Me(n, l), f || (r = [
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
      ], f = !0);
    },
    p(a, c) {
      c & /*x*/
      1 && v(
        t,
        "cx",
        /*x*/
        a[0]
      ), c & /*y*/
      2 && v(
        t,
        "cy",
        /*y*/
        a[1]
      ), c & /*handleRadius*/
      4 && o !== (o = 1.75 * /*handleRadius*/
      a[2]) && v(t, "r", o), c & /*x*/
      1 && v(
        s,
        "cx",
        /*x*/
        a[0]
      ), c & /*y*/
      2 && v(
        s,
        "cy",
        /*y*/
        a[1]
      ), c & /*handleRadius*/
      4 && v(
        s,
        "r",
        /*handleRadius*/
        a[2]
      ), c & /*x*/
      1 && v(
        l,
        "cx",
        /*x*/
        a[0]
      ), c & /*y*/
      2 && v(
        l,
        "cy",
        /*y*/
        a[1]
      ), c & /*handleRadius*/
      4 && v(
        l,
        "r",
        /*handleRadius*/
        a[2]
      );
    },
    d(a) {
      a && fe(n), f = !1, xe(r);
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
      ae(t, n, o);
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
      t && fe(n);
    }
  };
}
function Cl(e) {
  let n;
  function t(s, l) {
    return an ? Il : Hl;
  }
  let o = t()(e);
  return {
    c() {
      o.c(), n = Wn();
    },
    m(s, l) {
      o.m(s, l), ae(s, n, l);
    },
    p(s, [l]) {
      o.p(s, l);
    },
    i: wn,
    o: wn,
    d(s) {
      s && fe(n), o.d(s);
    }
  };
}
function Rl(e, n, t) {
  let o, { x: s } = n, { y: l } = n, { scale: f } = n;
  const r = (c) => {
    c.pointerType;
  };
  function a(c) {
    Ge.call(this, e, c);
  }
  return e.$$set = (c) => {
    "x" in c && t(0, s = c.x), "y" in c && t(1, l = c.y), "scale" in c && t(4, f = c.scale);
  }, e.$$.update = () => {
    e.$$.dirty & /*scale*/
    16 && t(2, o = 4 / f);
  }, [s, l, o, r, f, a];
}
class js extends An {
  constructor(n) {
    super(), Nn(this, n, Rl, Cl, Rn, { x: 0, y: 1, scale: 4 });
  }
}
function at(e) {
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
    m(l, f) {
      ae(l, n, f);
    },
    p(l, f) {
      f[0] & /*midpoints, visibleMidpoint*/
      1088 && t !== (t = /*point*/
      l[28][0]) && v(n, "cx", t), f[0] & /*midpoints, visibleMidpoint*/
      1088 && o !== (o = /*point*/
      l[28][1]) && v(n, "cy", o), f[0] & /*viewportScale*/
      8 && s !== (s = Yn / /*viewportScale*/
      l[3]) && v(n, "r", s);
    },
    d(l) {
      l && fe(n);
    }
  };
}
function oo(e) {
  let n, t, o, s, l, f, r, a, c, u;
  return {
    c() {
      n = re("mask"), t = re("rect"), r = re("circle"), v(t, "x", o = /*mask*/
      e[9].x), v(t, "y", s = /*mask*/
      e[9].y), v(t, "width", l = /*mask*/
      e[9].w), v(t, "height", f = /*mask*/
      e[9].h), v(t, "class", "svelte-1h2slbm"), v(r, "cx", a = /*point*/
      e[28][0]), v(r, "cy", c = /*point*/
      e[28][1]), v(r, "r", u = Yn / /*viewportScale*/
      e[3]), v(r, "class", "svelte-1h2slbm"), v(n, "id", `${/*maskId*/
      e[19]}-inner`), v(n, "class", "a9s-polygon-editor-mask svelte-1h2slbm");
    },
    m(p, d) {
      ae(p, n, d), Me(n, t), Me(n, r);
    },
    p(p, d) {
      d[0] & /*mask*/
      512 && o !== (o = /*mask*/
      p[9].x) && v(t, "x", o), d[0] & /*mask*/
      512 && s !== (s = /*mask*/
      p[9].y) && v(t, "y", s), d[0] & /*mask*/
      512 && l !== (l = /*mask*/
      p[9].w) && v(t, "width", l), d[0] & /*mask*/
      512 && f !== (f = /*mask*/
      p[9].h) && v(t, "height", f), d[0] & /*midpoints, visibleMidpoint*/
      1088 && a !== (a = /*point*/
      p[28][0]) && v(r, "cx", a), d[0] & /*midpoints, visibleMidpoint*/
      1088 && c !== (c = /*point*/
      p[28][1]) && v(r, "cy", c), d[0] & /*viewportScale*/
      8 && u !== (u = Yn / /*viewportScale*/
      p[3]) && v(r, "r", u);
    },
    d(p) {
      p && fe(n);
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
  let n, t, o, s, l, f, r, a, c, u, p, d, _, g, h, E, A, I, y, b, k, M = (
    /*visibleMidpoint*/
    e[6] !== void 0 && !/*isHandleHovered*/
    e[7] && to(ut(e))
  ), m = (
    /*visibleMidpoint*/
    e[6] !== void 0 && !/*isHandleHovered*/
    e[7] && oo(ct(e))
  ), O = dn(
    /*geom*/
    e[5].points
  ), w = [];
  for (let L = 0; L < O.length; L += 1)
    w[L] = so(no(e, O, L));
  const S = (L) => Pe(w[L], 1, 1, () => {
    w[L] = null;
  });
  let P = (
    /*visibleMidpoint*/
    e[6] !== void 0 && !/*isHandleHovered*/
    e[7] && lo(at(e))
  );
  return {
    c() {
      n = re("defs"), t = re("mask"), o = re("rect"), a = re("polygon"), M && M.c(), m && m.c(), u = Ve(), p = re("polygon"), _ = Ve(), g = re("polygon"), E = Ve();
      for (let L = 0; L < w.length; L += 1)
        w[L].c();
      A = Ve(), P && P.c(), I = Wn(), v(o, "x", s = /*mask*/
      e[9].x), v(o, "y", l = /*mask*/
      e[9].y), v(o, "width", f = /*mask*/
      e[9].w), v(o, "height", r = /*mask*/
      e[9].h), v(o, "class", "svelte-1h2slbm"), v(a, "points", c = /*geom*/
      e[5].points.map(io).join(" ")), v(a, "class", "svelte-1h2slbm"), v(t, "id", `${/*maskId*/
      e[19]}-outer`), v(t, "class", "a9s-polygon-editor-mask svelte-1h2slbm"), v(p, "class", "a9s-outer"), v(p, "mask", `url(#${/*maskId*/
      e[19]}-outer)`), v(p, "points", d = /*geom*/
      e[5].points.map(ro).join(" ")), v(g, "class", "a9s-inner a9s-shape-handle"), v(g, "mask", `url(#${/*maskId*/
      e[19]}-inner)`), v(
        g,
        "style",
        /*computedStyle*/
        e[1]
      ), v(g, "points", h = /*geom*/
      e[5].points.map(fo).join(" "));
    },
    m(L, G) {
      ae(L, n, G), Me(n, t), Me(t, o), Me(t, a), M && M.m(t, null), m && m.m(n, null), ae(L, u, G), ae(L, p, G), ae(L, _, G), ae(L, g, G), ae(L, E, G);
      for (let C = 0; C < w.length; C += 1)
        w[C] && w[C].m(L, G);
      ae(L, A, G), P && P.m(L, G), ae(L, I, G), y = !0, b || (k = [
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
    p(L, G) {
      if (e = L, (!y || G[0] & /*mask*/
      512 && s !== (s = /*mask*/
      e[9].x)) && v(o, "x", s), (!y || G[0] & /*mask*/
      512 && l !== (l = /*mask*/
      e[9].y)) && v(o, "y", l), (!y || G[0] & /*mask*/
      512 && f !== (f = /*mask*/
      e[9].w)) && v(o, "width", f), (!y || G[0] & /*mask*/
      512 && r !== (r = /*mask*/
      e[9].h)) && v(o, "height", r), (!y || G[0] & /*geom*/
      32 && c !== (c = /*geom*/
      e[5].points.map(io).join(" "))) && v(a, "points", c), /*visibleMidpoint*/
      e[6] !== void 0 && !/*isHandleHovered*/
      e[7] ? M ? M.p(ut(e), G) : (M = to(ut(e)), M.c(), M.m(t, null)) : M && (M.d(1), M = null), /*visibleMidpoint*/
      e[6] !== void 0 && !/*isHandleHovered*/
      e[7] ? m ? m.p(ct(e), G) : (m = oo(ct(e)), m.c(), m.m(n, null)) : m && (m.d(1), m = null), (!y || G[0] & /*geom*/
      32 && d !== (d = /*geom*/
      e[5].points.map(ro).join(" "))) && v(p, "points", d), (!y || G[0] & /*computedStyle*/
      2) && v(
        g,
        "style",
        /*computedStyle*/
        e[1]
      ), (!y || G[0] & /*geom*/
      32 && h !== (h = /*geom*/
      e[5].points.map(fo).join(" "))) && v(g, "points", h), G[0] & /*geom, viewportScale, selectedCorners, onEnterHandle, onLeaveHandle, onHandlePointerDown, grab, onHandlePointerUp*/
      134322472) {
        O = dn(
          /*geom*/
          e[5].points
        );
        let C;
        for (C = 0; C < O.length; C += 1) {
          const H = no(e, O, C);
          w[C] ? (w[C].p(H, G), be(w[C], 1)) : (w[C] = so(H), w[C].c(), be(w[C], 1), w[C].m(A.parentNode, A));
        }
        for (In(), C = O.length; C < w.length; C += 1)
          S(C);
        Cn();
      }
      e[6] !== void 0 && !/*isHandleHovered*/
      e[7] ? P ? (P.p(at(e), G), G[0] & /*visibleMidpoint, isHandleHovered*/
      192 && be(P, 1)) : (P = lo(at(e)), P.c(), be(P, 1), P.m(I.parentNode, I)) : P && (In(), Pe(P, 1, 1, () => {
        P = null;
      }), Cn());
    },
    i(L) {
      if (!y) {
        for (let G = 0; G < O.length; G += 1)
          be(w[G]);
        be(P), y = !0;
      }
    },
    o(L) {
      w = w.filter(Boolean);
      for (let G = 0; G < w.length; G += 1)
        Pe(w[G]);
      Pe(P), y = !1;
    },
    d(L) {
      L && (fe(n), fe(u), fe(p), fe(_), fe(g), fe(E), fe(A), fe(I)), M && M.d(), m && m.d(), ot(w, L), P && P.d(L), b = !1, xe(k);
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
const Dl = 250, Xl = 1e3, jl = 12, Yn = 4.5, io = (e) => e.join(","), ro = (e) => e.join(","), fo = (e) => e.join(",");
function Bl(e, n, t) {
  let o, s, l;
  const f = Ut();
  let { shape: r } = n, { computedStyle: a } = n, { transform: c } = n, { viewportScale: u = 1 } = n, { svgEl: p } = n, d, _ = !1, g, h = [];
  const E = () => t(7, _ = !0), A = () => t(7, _ = !1), I = (C) => {
    if (h.length > 0 || !s.some((X) => X.visible)) {
      t(6, d = void 0);
      return;
    }
    const [H, z] = c.elementToImage(C.offsetX, C.offsetY), R = (X) => Math.pow(X[0] - H, 2) + Math.pow(X[1] - z, 2), U = o.points.reduce((X, V) => R(V) < R(X) ? V : X), F = s.filter((X) => X.visible).reduce((X, V) => R(V.point) < R(X.point) ? V : X), D = Math.pow(Xl / u, 2);
    R(U) < D || R(F.point) < D ? t(6, d = s.indexOf(F)) : t(6, d = void 0);
  }, y = () => {
    document.activeElement !== p && p.focus();
  }, b = () => {
    t(8, h = []), y();
  }, k = (C) => {
    t(7, _ = !0), C.preventDefault(), C.stopPropagation(), g = performance.now();
  }, M = (C) => (H) => {
    if (!g || an || performance.now() - g > Dl) return;
    const z = h.includes(C);
    H.metaKey || H.ctrlKey || H.shiftKey ? z ? t(8, h = h.filter((R) => R !== C)) : t(8, h = [...h, C]) : z && h.length > 1 ? t(8, h = [C]) : z ? t(8, h = []) : t(8, h = [C]), y();
  }, m = (C, H, z) => {
    y();
    let R;
    const U = C.geometry;
    h.length > 1 ? R = U.points.map(([D, X], V) => h.includes(V) ? [D + z[0], X + z[1]] : [D, X]) : H === "SHAPE" ? R = U.points.map(([D, X]) => [D + z[0], X + z[1]]) : R = U.points.map(([D, X], V) => H === `HANDLE-${V}` ? [D + z[0], X + z[1]] : [D, X]);
    const F = Xe(R);
    return { ...C, geometry: { points: R, bounds: F } };
  }, O = (C) => async (H) => {
    H.stopPropagation();
    const z = [
      ...o.points.slice(0, C + 1),
      s[C].point,
      ...o.points.slice(C + 1)
    ], R = Xe(z);
    f("change", { ...r, geometry: { points: z, bounds: R } }), await As();
    const U = [...document.querySelectorAll(".a9s-handle")][C + 1];
    if (U != null && U.firstChild) {
      const F = new PointerEvent(
        "pointerdown",
        {
          bubbles: !0,
          cancelable: !0,
          clientX: H.clientX,
          clientY: H.clientY,
          pointerId: H.pointerId,
          pointerType: H.pointerType,
          isPrimary: H.isPrimary,
          buttons: H.buttons
        }
      );
      U.firstChild.dispatchEvent(F);
    }
  }, w = () => {
    if (o.points.length - h.length < 3) return;
    const C = o.points.filter((z, R) => !h.includes(R)), H = Xe(C);
    f("change", { ...r, geometry: { points: C, bounds: H } }), t(8, h = []);
  };
  Cs(() => {
    if (an) return;
    const C = (H) => {
      (H.key === "Delete" || H.key === "Backspace") && (H.preventDefault(), w());
    };
    return p.addEventListener("pointermove", I), p.addEventListener("keydown", C), () => {
      p.removeEventListener("pointermove", I), p.removeEventListener("keydown", C);
    };
  });
  const S = `polygon-mask-${Math.random().toString(36).substring(2, 12)}`;
  function P(C) {
    Ge.call(this, e, C);
  }
  function L(C) {
    Ge.call(this, e, C);
  }
  function G(C) {
    Ge.call(this, e, C);
  }
  return e.$$set = (C) => {
    "shape" in C && t(0, r = C.shape), "computedStyle" in C && t(1, a = C.computedStyle), "transform" in C && t(2, c = C.transform), "viewportScale" in C && t(3, u = C.viewportScale), "svgEl" in C && t(4, p = C.svgEl);
  }, e.$$.update = () => {
    e.$$.dirty[0] & /*shape*/
    1 && t(5, o = r.geometry), e.$$.dirty[0] & /*geom, viewportScale*/
    40 && t(10, s = an ? [] : o.points.map((C, H) => {
      const z = H === o.points.length - 1 ? o.points[0] : o.points[H + 1], R = (C[0] + z[0]) / 2, U = (C[1] + z[1]) / 2, F = Math.sqrt(Math.pow(z[0] - R, 2) + Math.pow(z[1] - U, 2)) > jl / u;
      return { point: [R, U], visible: F };
    })), e.$$.dirty[0] & /*geom, viewportScale*/
    40 && t(9, l = bn(o.bounds, Yn / u));
  }, [
    r,
    a,
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
    A,
    I,
    b,
    k,
    M,
    m,
    O,
    S,
    P,
    L,
    G
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
  let n, t, o, s, l, f, r, a, c, u, p, d, _, g, h, E, A, I, y, b, k, M, m, O, w, S, P, L, G, C, H, z, R, U, F, D, X, V, J, ee, W, se, ve, oe, He, ce, Ee, ue, je, pe, Be, Se, K, q, Q;
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
      n = re("defs"), t = re("mask"), o = re("rect"), a = re("rect"), _ = Ve(), g = re("rect"), y = Ve(), b = re("rect"), w = Ve(), S = re("rect"), C = Ve(), H = re("rect"), F = Ve(), D = re("rect"), ee = Ve(), W = re("rect"), He = Ve(), on(ce.$$.fragment), Ee = Ve(), on(ue.$$.fragment), je = Ve(), on(pe.$$.fragment), Be = Ve(), on(Se.$$.fragment), v(o, "class", "rect-mask-bg svelte-1njczvj"), v(o, "x", s = /*mask*/
      e[6].x), v(o, "y", l = /*mask*/
      e[6].y), v(o, "width", f = /*mask*/
      e[6].w), v(o, "height", r = /*mask*/
      e[6].h), v(a, "class", "rect-mask-fg svelte-1njczvj"), v(a, "x", c = /*geom*/
      e[5].x), v(a, "y", u = /*geom*/
      e[5].y), v(a, "width", p = /*geom*/
      e[5].w), v(a, "height", d = /*geom*/
      e[5].h), v(
        t,
        "id",
        /*maskId*/
        e[8]
      ), v(t, "class", "a9s-rectangle-editor-mask svelte-1njczvj"), v(g, "class", "a9s-outer"), v(g, "mask", `url(#${/*maskId*/
      e[8]})`), v(g, "x", h = /*geom*/
      e[5].x), v(g, "y", E = /*geom*/
      e[5].y), v(g, "width", A = /*geom*/
      e[5].w), v(g, "height", I = /*geom*/
      e[5].h), v(b, "class", "a9s-inner a9s-shape-handle"), v(
        b,
        "style",
        /*computedStyle*/
        e[1]
      ), v(b, "x", k = /*geom*/
      e[5].x), v(b, "y", M = /*geom*/
      e[5].y), v(b, "width", m = /*geom*/
      e[5].w), v(b, "height", O = /*geom*/
      e[5].h), v(S, "class", "a9s-edge-handle a9s-edge-handle-top"), v(S, "x", P = /*geom*/
      e[5].x), v(S, "y", L = /*geom*/
      e[5].y), v(S, "height", 1), v(S, "width", G = /*geom*/
      e[5].w), v(H, "class", "a9s-edge-handle a9s-edge-handle-right"), v(H, "x", z = /*geom*/
      e[5].x + /*geom*/
      e[5].w), v(H, "y", R = /*geom*/
      e[5].y), v(H, "height", U = /*geom*/
      e[5].h), v(H, "width", 1), v(D, "class", "a9s-edge-handle a9s-edge-handle-bottom"), v(D, "x", X = /*geom*/
      e[5].x), v(D, "y", V = /*geom*/
      e[5].y + /*geom*/
      e[5].h), v(D, "height", 1), v(D, "width", J = /*geom*/
      e[5].w), v(W, "class", "a9s-edge-handle a9s-edge-handle-left"), v(W, "x", se = /*geom*/
      e[5].x), v(W, "y", ve = /*geom*/
      e[5].y), v(W, "height", oe = /*geom*/
      e[5].h), v(W, "width", 1);
    },
    m(N, T) {
      ae(N, n, T), Me(n, t), Me(t, o), Me(t, a), ae(N, _, T), ae(N, g, T), ae(N, y, T), ae(N, b, T), ae(N, w, T), ae(N, S, T), ae(N, C, T), ae(N, H, T), ae(N, F, T), ae(N, D, T), ae(N, ee, T), ae(N, W, T), ae(N, He, T), Je(ce, N, T), ae(N, Ee, T), Je(ue, N, T), ae(N, je, T), Je(pe, N, T), ae(N, Be, T), Je(Se, N, T), K = !0, q || (Q = [
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
        we(S, "pointerdown", function() {
          Ae(
            /*grab*/
            e[12]("TOP")
          ) && e[12]("TOP").apply(this, arguments);
        }),
        we(H, "pointerdown", function() {
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
    p(N, T) {
      e = N, (!K || T & /*mask*/
      64 && s !== (s = /*mask*/
      e[6].x)) && v(o, "x", s), (!K || T & /*mask*/
      64 && l !== (l = /*mask*/
      e[6].y)) && v(o, "y", l), (!K || T & /*mask*/
      64 && f !== (f = /*mask*/
      e[6].w)) && v(o, "width", f), (!K || T & /*mask*/
      64 && r !== (r = /*mask*/
      e[6].h)) && v(o, "height", r), (!K || T & /*geom*/
      32 && c !== (c = /*geom*/
      e[5].x)) && v(a, "x", c), (!K || T & /*geom*/
      32 && u !== (u = /*geom*/
      e[5].y)) && v(a, "y", u), (!K || T & /*geom*/
      32 && p !== (p = /*geom*/
      e[5].w)) && v(a, "width", p), (!K || T & /*geom*/
      32 && d !== (d = /*geom*/
      e[5].h)) && v(a, "height", d), (!K || T & /*geom*/
      32 && h !== (h = /*geom*/
      e[5].x)) && v(g, "x", h), (!K || T & /*geom*/
      32 && E !== (E = /*geom*/
      e[5].y)) && v(g, "y", E), (!K || T & /*geom*/
      32 && A !== (A = /*geom*/
      e[5].w)) && v(g, "width", A), (!K || T & /*geom*/
      32 && I !== (I = /*geom*/
      e[5].h)) && v(g, "height", I), (!K || T & /*computedStyle*/
      2) && v(
        b,
        "style",
        /*computedStyle*/
        e[1]
      ), (!K || T & /*geom*/
      32 && k !== (k = /*geom*/
      e[5].x)) && v(b, "x", k), (!K || T & /*geom*/
      32 && M !== (M = /*geom*/
      e[5].y)) && v(b, "y", M), (!K || T & /*geom*/
      32 && m !== (m = /*geom*/
      e[5].w)) && v(b, "width", m), (!K || T & /*geom*/
      32 && O !== (O = /*geom*/
      e[5].h)) && v(b, "height", O), (!K || T & /*geom*/
      32 && P !== (P = /*geom*/
      e[5].x)) && v(S, "x", P), (!K || T & /*geom*/
      32 && L !== (L = /*geom*/
      e[5].y)) && v(S, "y", L), (!K || T & /*geom*/
      32 && G !== (G = /*geom*/
      e[5].w)) && v(S, "width", G), (!K || T & /*geom*/
      32 && z !== (z = /*geom*/
      e[5].x + /*geom*/
      e[5].w)) && v(H, "x", z), (!K || T & /*geom*/
      32 && R !== (R = /*geom*/
      e[5].y)) && v(H, "y", R), (!K || T & /*geom*/
      32 && U !== (U = /*geom*/
      e[5].h)) && v(H, "height", U), (!K || T & /*geom*/
      32 && X !== (X = /*geom*/
      e[5].x)) && v(D, "x", X), (!K || T & /*geom*/
      32 && V !== (V = /*geom*/
      e[5].y + /*geom*/
      e[5].h)) && v(D, "y", V), (!K || T & /*geom*/
      32 && J !== (J = /*geom*/
      e[5].w)) && v(D, "width", J), (!K || T & /*geom*/
      32 && se !== (se = /*geom*/
      e[5].x)) && v(W, "x", se), (!K || T & /*geom*/
      32 && ve !== (ve = /*geom*/
      e[5].y)) && v(W, "y", ve), (!K || T & /*geom*/
      32 && oe !== (oe = /*geom*/
      e[5].h)) && v(W, "height", oe);
      const _e = {};
      T & /*geom*/
      32 && (_e.x = /*geom*/
      e[5].x), T & /*geom*/
      32 && (_e.y = /*geom*/
      e[5].y), T & /*viewportScale*/
      8 && (_e.scale = /*viewportScale*/
      e[3]), ce.$set(_e);
      const ke = {};
      T & /*geom*/
      32 && (ke.x = /*geom*/
      e[5].x + /*geom*/
      e[5].w), T & /*geom*/
      32 && (ke.y = /*geom*/
      e[5].y), T & /*viewportScale*/
      8 && (ke.scale = /*viewportScale*/
      e[3]), ue.$set(ke);
      const ie = {};
      T & /*geom*/
      32 && (ie.x = /*geom*/
      e[5].x + /*geom*/
      e[5].w), T & /*geom*/
      32 && (ie.y = /*geom*/
      e[5].y + /*geom*/
      e[5].h), T & /*viewportScale*/
      8 && (ie.scale = /*viewportScale*/
      e[3]), pe.$set(ie);
      const ye = {};
      T & /*geom*/
      32 && (ye.x = /*geom*/
      e[5].x), T & /*geom*/
      32 && (ye.y = /*geom*/
      e[5].y + /*geom*/
      e[5].h), T & /*viewportScale*/
      8 && (ye.scale = /*viewportScale*/
      e[3]), Se.$set(ye);
    },
    i(N) {
      K || (be(ce.$$.fragment, N), be(ue.$$.fragment, N), be(pe.$$.fragment, N), be(Se.$$.fragment, N), K = !0);
    },
    o(N) {
      Pe(ce.$$.fragment, N), Pe(ue.$$.fragment, N), Pe(pe.$$.fragment, N), Pe(Se.$$.fragment, N), K = !1;
    },
    d(N) {
      N && (fe(n), fe(_), fe(g), fe(y), fe(b), fe(w), fe(S), fe(C), fe(H), fe(F), fe(D), fe(ee), fe(W), fe(He), fe(Ee), fe(je), fe(Be)), $e(ce, N), $e(ue, N), $e(pe, N), $e(Se, N), q = !1, xe(Q);
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
  let o, s, { shape: l } = n, { computedStyle: f } = n, { transform: r } = n, { viewportScale: a = 1 } = n, { svgEl: c } = n;
  const u = (h, E, A) => {
    const I = h.geometry.bounds;
    let [y, b] = [I.minX, I.minY], [k, M] = [I.maxX, I.maxY];
    const [m, O] = A;
    if (E === "SHAPE")
      y += m, k += m, b += O, M += O;
    else {
      switch (E) {
        case "TOP":
        case "TOP_LEFT":
        case "TOP_RIGHT": {
          b += O;
          break;
        }
        case "BOTTOM":
        case "BOTTOM_LEFT":
        case "BOTTOM_RIGHT": {
          M += O;
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
    const w = Math.min(y, k), S = Math.min(b, M), P = Math.abs(k - y), L = Math.abs(M - b);
    return {
      ...h,
      geometry: {
        x: w,
        y: S,
        w: P,
        h: L,
        bounds: {
          minX: w,
          minY: S,
          maxX: w + P,
          maxY: S + L
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
    "shape" in h && t(0, l = h.shape), "computedStyle" in h && t(1, f = h.computedStyle), "transform" in h && t(2, r = h.transform), "viewportScale" in h && t(3, a = h.viewportScale), "svgEl" in h && t(4, c = h.svgEl);
  }, e.$$.update = () => {
    e.$$.dirty & /*shape*/
    1 && t(5, o = l.geometry), e.$$.dirty & /*geom, viewportScale*/
    40 && t(6, s = bn(o.bounds, 2 / a));
  }, [
    l,
    f,
    r,
    a,
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
var ao = Object.prototype.hasOwnProperty;
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
        if (ao.call(e, t) && ++o && !ao.call(n, t) || !(t in n) || !Nt(e[t], n[t])) return !1;
      return Object.keys(n).length === o;
    }
  }
  return e !== e && n !== n;
}
const Vl = 12, Kl = (e, n) => e.polygons.reduce((t, o, s) => {
  const l = o.rings.reduce((f, r, a) => {
    const c = r.points.map((u, p) => {
      const d = p === r.points.length - 1 ? r.points[0] : r.points[p + 1], _ = (u[0] + d[0]) / 2, g = (u[1] + d[1]) / 2, h = Math.sqrt(
        Math.pow(d[0] - _, 2) + Math.pow(d[1] - g, 2)
      ) > Vl / n;
      return { point: [_, g], visible: h, elementIdx: s, ringIdx: a, pointIdx: p };
    });
    return [...f, ...c];
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
    m(l, f) {
      ae(l, n, f);
    },
    p(l, f) {
      f[0] & /*midpoints, visibleMidpoint*/
      1088 && t !== (t = /*point*/
      l[29][0]) && v(n, "cx", t), f[0] & /*midpoints, visibleMidpoint*/
      1088 && o !== (o = /*point*/
      l[29][1]) && v(n, "cy", o), f[0] & /*viewportScale*/
      8 && s !== (s = qn / /*viewportScale*/
      l[3]) && v(n, "r", s);
    },
    d(l) {
      l && fe(n);
    }
  };
}
function mo(e) {
  let n, t, o, s, l, f, r, a, c, u;
  return {
    c() {
      n = re("mask"), t = re("rect"), r = re("circle"), v(t, "x", o = /*mask*/
      e[9].x), v(t, "y", s = /*mask*/
      e[9].y), v(t, "width", l = /*mask*/
      e[9].w), v(t, "height", f = /*mask*/
      e[9].h), v(t, "class", "svelte-1vxo6dc"), v(r, "cx", a = /*point*/
      e[29][0]), v(r, "cy", c = /*point*/
      e[29][1]), v(r, "r", u = qn / /*viewportScale*/
      e[3]), v(r, "class", "svelte-1vxo6dc"), v(n, "id", `${/*maskId*/
      e[18]}-${/*elementIdx*/
      e[32]}-inner`), v(n, "class", "a9s-multipolygon-editor-mask svelte-1vxo6dc");
    },
    m(p, d) {
      ae(p, n, d), Me(n, t), Me(n, r);
    },
    p(p, d) {
      d[0] & /*mask*/
      512 && o !== (o = /*mask*/
      p[9].x) && v(t, "x", o), d[0] & /*mask*/
      512 && s !== (s = /*mask*/
      p[9].y) && v(t, "y", s), d[0] & /*mask*/
      512 && l !== (l = /*mask*/
      p[9].w) && v(t, "width", l), d[0] & /*mask*/
      512 && f !== (f = /*mask*/
      p[9].h) && v(t, "height", f), d[0] & /*midpoints, visibleMidpoint*/
      1088 && a !== (a = /*point*/
      p[29][0]) && v(r, "cx", a), d[0] & /*midpoints, visibleMidpoint*/
      1088 && c !== (c = /*point*/
      p[29][1]) && v(r, "cy", c), d[0] & /*viewportScale*/
      8 && u !== (u = qn / /*viewportScale*/
      p[3]) && v(r, "r", u);
    },
    d(p) {
      p && fe(n);
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
      const f = {};
      l[0] & /*geom*/
      32 && (f.x = /*point*/
      e[29][0]), l[0] & /*geom*/
      32 && (f.y = /*point*/
      e[29][1]), l[0] & /*viewportScale*/
      8 && (f.scale = /*viewportScale*/
      e[3]), l[0] & /*selectedCorners*/
      256 && (f.selected = /*selectedCorners*/
      e[8].some(o)), n.$set(f);
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
  for (let f = 0; f < o.length; f += 1)
    s[f] = go(po(e, o, f));
  const l = (f) => Pe(s[f], 1, 1, () => {
    s[f] = null;
  });
  return {
    c() {
      for (let f = 0; f < s.length; f += 1)
        s[f].c();
      n = Wn();
    },
    m(f, r) {
      for (let a = 0; a < s.length; a += 1)
        s[a] && s[a].m(f, r);
      ae(f, n, r), t = !0;
    },
    p(f, r) {
      if (r[0] & /*geom, viewportScale, selectedCorners, onEnterHandle, onLeaveHandle, onHandlePointerDown, grab, onHandlePointerUp*/
      268491048) {
        o = dn(
          /*ring*/
          f[33].points
        );
        let a;
        for (a = 0; a < o.length; a += 1) {
          const c = po(f, o, a);
          s[a] ? (s[a].p(c, r), be(s[a], 1)) : (s[a] = go(c), s[a].c(), be(s[a], 1), s[a].m(n.parentNode, n));
        }
        for (In(), a = o.length; a < s.length; a += 1)
          l(a);
        Cn();
      }
    },
    i(f) {
      if (!t) {
        for (let r = 0; r < o.length; r += 1)
          be(s[r]);
        t = !0;
      }
    },
    o(f) {
      s = s.filter(Boolean);
      for (let r = 0; r < s.length; r += 1)
        Pe(s[r]);
      t = !1;
    },
    d(f) {
      f && fe(n), ot(s, f);
    }
  };
}
function yo(e) {
  let n, t, o, s, l, f, r, a, c, u, p, d, _, g, h, E, A, I = (
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
  const M = (m) => Pe(k[m], 1, 1, () => {
    k[m] = null;
  });
  return {
    c() {
      n = re("g"), t = re("defs"), o = re("mask"), s = re("rect"), c = re("path"), I && I.c(), y && y.c(), p = re("path"), _ = re("path");
      for (let m = 0; m < k.length; m += 1)
        k[m].c();
      v(s, "x", l = /*mask*/
      e[9].x), v(s, "y", f = /*mask*/
      e[9].y), v(s, "width", r = /*mask*/
      e[9].w), v(s, "height", a = /*mask*/
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
    m(m, O) {
      ae(m, n, O), Me(n, t), Me(t, o), Me(o, s), Me(o, c), I && I.m(o, null), y && y.m(t, null), Me(n, p), Me(n, _);
      for (let w = 0; w < k.length; w += 1)
        k[w] && k[w].m(n, null);
      h = !0, E || (A = [
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
    p(m, O) {
      if (e = m, (!h || O[0] & /*mask*/
      512 && l !== (l = /*mask*/
      e[9].x)) && v(s, "x", l), (!h || O[0] & /*mask*/
      512 && f !== (f = /*mask*/
      e[9].y)) && v(s, "y", f), (!h || O[0] & /*mask*/
      512 && r !== (r = /*mask*/
      e[9].w)) && v(s, "width", r), (!h || O[0] & /*mask*/
      512 && a !== (a = /*mask*/
      e[9].h)) && v(s, "height", a), (!h || O[0] & /*geom*/
      32 && u !== (u = En(
        /*element*/
        e[30]
      ))) && v(c, "d", u), /*visibleMidpoint*/
      e[6] !== void 0 && !/*isHandleHovered*/
      e[7] ? I ? I.p(dt(e), O) : (I = ho(dt(e)), I.c(), I.m(o, null)) : I && (I.d(1), I = null), /*visibleMidpoint*/
      e[6] !== void 0 && !/*isHandleHovered*/
      e[7] ? y ? y.p(ht(e), O) : (y = mo(ht(e)), y.c(), y.m(t, null)) : y && (y.d(1), y = null), (!h || O[0] & /*geom*/
      32 && d !== (d = En(
        /*element*/
        e[30]
      ))) && v(p, "d", d), (!h || O[0] & /*computedStyle*/
      2) && v(
        _,
        "style",
        /*computedStyle*/
        e[1]
      ), (!h || O[0] & /*geom*/
      32 && g !== (g = En(
        /*element*/
        e[30]
      ))) && v(_, "d", g), O[0] & /*geom, viewportScale, selectedCorners, onEnterHandle, onLeaveHandle, onHandlePointerDown, grab, onHandlePointerUp*/
      268491048) {
        b = dn(
          /*element*/
          e[30].rings
        );
        let w;
        for (w = 0; w < b.length; w += 1) {
          const S = uo(e, b, w);
          k[w] ? (k[w].p(S, O), be(k[w], 1)) : (k[w] = _o(S), k[w].c(), be(k[w], 1), k[w].m(n, null));
        }
        for (In(), w = b.length; w < k.length; w += 1)
          M(w);
        Cn();
      }
    },
    i(m) {
      if (!h) {
        for (let O = 0; O < b.length; O += 1)
          be(k[O]);
        h = !0;
      }
    },
    o(m) {
      k = k.filter(Boolean);
      for (let O = 0; O < k.length; O += 1)
        Pe(k[O]);
      h = !1;
    },
    d(m) {
      m && fe(n), I && I.d(), y && y.d(), ot(k, m), E = !1, xe(A);
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
  for (let a = 0; a < s.length; a += 1)
    l[a] = yo(co(e, s, a));
  const f = (a) => Pe(l[a], 1, 1, () => {
    l[a] = null;
  });
  let r = (
    /*visibleMidpoint*/
    e[6] !== void 0 && !/*isHandleHovered*/
    e[7] && wo(pt(e))
  );
  return {
    c() {
      for (let a = 0; a < l.length; a += 1)
        l[a].c();
      n = Ve(), r && r.c(), t = Wn();
    },
    m(a, c) {
      for (let u = 0; u < l.length; u += 1)
        l[u] && l[u].m(a, c);
      ae(a, n, c), r && r.m(a, c), ae(a, t, c), o = !0;
    },
    p(a, c) {
      if (c[0] & /*geom, viewportScale, selectedCorners, onEnterHandle, onLeaveHandle, onHandlePointerDown, grab, onHandlePointerUp, maskId, computedStyle, onShapePointerUp, midpoints, visibleMidpoint, mask, isHandleHovered*/
      268763114) {
        s = dn(
          /*geom*/
          a[5].polygons
        );
        let u;
        for (u = 0; u < s.length; u += 1) {
          const p = co(a, s, u);
          l[u] ? (l[u].p(p, c), be(l[u], 1)) : (l[u] = yo(p), l[u].c(), be(l[u], 1), l[u].m(n.parentNode, n));
        }
        for (In(), u = s.length; u < l.length; u += 1)
          f(u);
        Cn();
      }
      a[6] !== void 0 && !/*isHandleHovered*/
      a[7] ? r ? (r.p(pt(a), c), c[0] & /*visibleMidpoint, isHandleHovered*/
      192 && be(r, 1)) : (r = wo(pt(a)), r.c(), be(r, 1), r.m(t.parentNode, t)) : r && (In(), Pe(r, 1, 1, () => {
        r = null;
      }), Cn());
    },
    i(a) {
      if (!o) {
        for (let c = 0; c < s.length; c += 1)
          be(l[c]);
        be(r), o = !0;
      }
    },
    o(a) {
      l = l.filter(Boolean);
      for (let c = 0; c < l.length; c += 1)
        Pe(l[c]);
      Pe(r), o = !1;
    },
    d(a) {
      a && (fe(n), fe(t)), ot(l, a), r && r.d(a);
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
  const f = Ut();
  let { shape: r } = n, { computedStyle: a } = n, { transform: c } = n, { viewportScale: u = 1 } = n, { svgEl: p } = n, d, _ = !1, g, h = [];
  const E = () => t(7, _ = !0), A = () => t(7, _ = !1), I = (H) => {
    if (h.length > 0 || !s.some((V) => V.visible)) {
      t(6, d = void 0);
      return;
    }
    const [z, R] = c.elementToImage(H.offsetX, H.offsetY), U = (V) => Math.pow(V[0] - z, 2) + Math.pow(V[1] - R, 2), F = hl(o).reduce((V, J) => U(J) < U(V) ? J : V), D = s.filter((V) => V.visible).reduce((V, J) => U(J.point) < U(V.point) ? J : V), X = Math.pow(Ql / u, 2);
    U(F) < X || U(D.point) < X ? t(6, d = s.indexOf(D)) : t(6, d = void 0);
  }, y = () => {
    document.activeElement !== p && p.focus();
  }, b = () => {
    t(8, h = []), y();
  }, k = (H) => {
    t(7, _ = !0), H.preventDefault(), H.stopPropagation(), g = performance.now();
  }, M = (H, z, R) => (U) => {
    if (!g || an || performance.now() - g > Zl) return;
    const F = (X) => X.polygon === H && X.ring === z && X.point === R, D = h.some(F);
    U.metaKey || U.ctrlKey || U.shiftKey ? D ? t(8, h = h.filter((X) => !F(X))) : t(8, h = [...h, { polygon: H, ring: z, point: R }]) : D && h.length > 1 ? t(8, h = [{ polygon: H, ring: z, point: R }]) : D ? t(8, h = []) : t(8, h = [{ polygon: H, ring: z, point: R }]), y();
  }, m = (H, z, R) => {
    y();
    const U = H.geometry.polygons;
    let F;
    if (z === "SHAPE")
      F = U.map((D) => {
        const X = D.rings.map((J, ee) => ({ points: J.points.map((W, se) => [W[0] + R[0], W[1] + R[1]]) })), V = Xe(X[0].points);
        return { rings: X, bounds: V };
      });
    else {
      const [D, X, V, J] = z.split("-").map((ee) => parseInt(ee));
      F = U.map((ee, W) => {
        if (W === X) {
          const se = ee.rings.map((oe, He) => He === V ? { points: oe.points.map((ce, Ee) => Ee === J ? [ce[0] + R[0], ce[1] + R[1]] : ce) } : oe), ve = Xe(se[0].points);
          return { rings: se, bounds: ve };
        } else
          return ee;
      });
    }
    return {
      ...H,
      geometry: {
        polygons: F,
        bounds: ft(F)
      }
    };
  }, O = (H) => async (z) => {
    z.stopPropagation();
    const R = s[H], U = o.polygons.map((D, X) => {
      if (X === R.elementIdx) {
        const V = D.rings.map((ee, W) => W === R.ringIdx ? { points: [
          ...ee.points.slice(0, R.pointIdx + 1),
          R.point,
          ...ee.points.slice(R.pointIdx + 1)
        ] } : ee), J = Xe(V[0].points);
        return { rings: V, bounds: J };
      } else
        return D;
    });
    f("change", {
      ...r,
      geometry: {
        polygons: U,
        bounds: ft(U)
      }
    }), await As();
    const F = [...document.querySelectorAll(".a9s-handle")][H + 1];
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
    const H = o.polygons.map((z, R) => {
      if (h.some((U) => U.polygon === R)) {
        const U = z.rings.map((D, X) => {
          const V = h.filter((J) => J.polygon === R && J.ring === X);
          return V.length && D.points.length - V.length >= 3 ? { points: D.points.filter((J, ee) => !V.some((W) => W.point === ee)) } : D;
        }), F = Xe(U[0].points);
        return { rings: U, bounds: F };
      } else
        return z;
    });
    !Nt(o.polygons, H) && (f("change", {
      ...r,
      geometry: {
        polygons: H,
        bounds: ft(H)
      }
    }), t(8, h = []));
  };
  Cs(() => {
    if (an) return;
    const H = (z) => {
      (z.key === "Delete" || z.key === "Backspace") && (z.preventDefault(), w());
    };
    return p.addEventListener("pointermove", I), p.addEventListener("keydown", H), () => {
      p.removeEventListener("pointermove", I), p.removeEventListener("keydown", H);
    };
  });
  const S = `polygon-mask-${Math.random().toString(36).substring(2, 12)}`, P = (H, z, R, { polygon: U, ring: F, point: D }) => U === H && F === z && D === R;
  function L(H) {
    Ge.call(this, e, H);
  }
  function G(H) {
    Ge.call(this, e, H);
  }
  function C(H) {
    Ge.call(this, e, H);
  }
  return e.$$set = (H) => {
    "shape" in H && t(0, r = H.shape), "computedStyle" in H && t(1, a = H.computedStyle), "transform" in H && t(2, c = H.transform), "viewportScale" in H && t(3, u = H.viewportScale), "svgEl" in H && t(4, p = H.svgEl);
  }, e.$$.update = () => {
    e.$$.dirty[0] & /*shape*/
    1 && t(5, o = r.geometry), e.$$.dirty[0] & /*geom, viewportScale*/
    40 && t(10, s = an ? [] : Kl(o, u)), e.$$.dirty[0] & /*geom, viewportScale*/
    40 && t(9, l = bn(o.bounds, qn / u));
  }, [
    r,
    a,
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
    A,
    b,
    k,
    M,
    m,
    O,
    S,
    P,
    L,
    G,
    C
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
      const l = [], f = Math.max(n.dirty.length, s.length);
      for (let r = 0; r < f; r += 1)
        l[r] = n.dirty[r] | s[r];
      return l;
    }
    return n.dirty | s;
  }
  return n.dirty;
}
function si(e, n, t, o, s, l) {
  if (s) {
    const f = Us(n, t, o, l);
    e.p(f, s);
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
function B(e, n, t) {
  e.insertBefore(n, t || null);
}
function j(e) {
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
function fi(e) {
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
      return s.slice().forEach((f) => {
        f.call(e, l);
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
        kn++, Un(n), ai(n.$$);
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
function ai(e) {
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
function Qn(e, n, t, o, s, l, f, r, a, c, u, p) {
  let d = e.length, _ = l.length, g = d;
  const h = {};
  for (; g--; ) h[e[g].key] = g;
  const E = [], A = /* @__PURE__ */ new Map(), I = /* @__PURE__ */ new Map(), y = [];
  for (g = _; g--; ) {
    const m = p(s, l, g), O = t(m);
    let w = f.get(O);
    w ? y.push(() => w.p(m, n)) : (w = c(O, m), w.c()), A.set(O, E[g] = w), O in h && I.set(O, Math.abs(g - h[O]));
  }
  const b = /* @__PURE__ */ new Set(), k = /* @__PURE__ */ new Set();
  function M(m) {
    $(m, 1), m.m(r, u), f.set(m.key, m), u = m.first, _--;
  }
  for (; d && _; ) {
    const m = E[_ - 1], O = e[d - 1], w = m.key, S = O.key;
    m === O ? (u = m.first, d--, _--) : A.has(S) ? !f.has(w) || b.has(w) ? M(m) : k.has(S) ? d-- : I.get(w) > I.get(S) ? (k.add(w), M(m)) : (b.add(S), d--) : (a(O, f), d--);
  }
  for (; d--; ) {
    const m = e[d];
    A.has(m.key) || a(m, f);
  }
  for (; _; ) M(E[_ - 1]);
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
function Re(e, n, t, o, s, l, f = null, r = [-1]) {
  const a = zn;
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
    context: new Map(n.context || (a ? a.$$.context : [])),
    // everything else
    callbacks: bo(),
    dirty: r,
    skip_bound: !1,
    root: n.target || a.$$.root
  };
  f && f(c.root);
  let u = !1;
  if (c.ctx = t ? t(e, n.props || {}, (p, d, ..._) => {
    const g = _.length ? _[0] : d;
    return c.ctx && s(c.ctx[p], c.ctx[p] = g) && (!c.skip_bound && c.bound[p] && c.bound[p](g), u && pi(e, p)), d;
  }) : [], c.update(), u = !0, Oe(c.before_update), c.fragment = o ? o(c.ctx) : !1, n.target) {
    if (n.hydrate) {
      const p = ii(n.target);
      c.fragment && c.fragment.l(p), p.forEach(j);
    } else
      c.fragment && c.fragment.c();
    n.intro && $(e.$$.fragment), de(e, n.target, n.anchor), zs();
  }
  Un(a);
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
    m(l, f) {
      B(l, n, f), B(l, t, f), s && s.m(l, f), B(l, o, f);
    },
    p(l, f) {
      f & /*x1*/
      8 && i(
        n,
        "x1",
        /*x1*/
        l[3]
      ), f & /*y1*/
      16 && i(
        n,
        "y1",
        /*y1*/
        l[4]
      ), f & /*x2*/
      32 && i(
        n,
        "x2",
        /*x2*/
        l[5]
      ), f & /*y2*/
      64 && i(
        n,
        "y2",
        /*y2*/
        l[6]
      ), f & /*x1*/
      8 && i(
        t,
        "x1",
        /*x1*/
        l[3]
      ), f & /*y1*/
      16 && i(
        t,
        "y1",
        /*y1*/
        l[4]
      ), f & /*x2*/
      32 && i(
        t,
        "x2",
        /*x2*/
        l[5]
      ), f & /*y2*/
      64 && i(
        t,
        "y2",
        /*y2*/
        l[6]
      ), /*x1*/
      l[3] !== /*x2*/
      l[5] || /*y1*/
      l[4] !== /*y2*/
      l[6] ? s ? s.p(l, f) : (s = To(l), s.c(), s.m(o.parentNode, o)) : s && (s.d(1), s = null);
    },
    d(l) {
      l && (j(n), j(t), j(o)), s && s.d(l);
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
      B(o, n, s);
    },
    p(o, s) {
      s & /*y2, y1, x2, x1*/
      120 && t !== (t = /*func*/
      o[11]()) && i(n, "points", t);
    },
    d(o) {
      o && j(n);
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
      B(o, n, s), t && t.m(n, null), e[12](n);
    },
    p(o, [s]) {
      /*origin*/
      o[1] && /*cursor*/
      o[2] ? t ? t.p(o, s) : (t = So(o), t.c(), t.m(n, null)) : t && (t.d(1), t = null);
    },
    i: Te,
    o: Te,
    d(o) {
      o && j(n), t && t.d(), e[12](null);
    }
  };
}
function mi(e, n, t) {
  const o = en();
  let { addEventListener: s } = n, { drawingMode: l } = n, { transform: f } = n, { viewportScale: r } = n, a, c, u, p, d, _, g, h, E;
  const A = (m) => {
    const O = m, { timeStamp: w, offsetX: S, offsetY: P } = O;
    h = { timeStamp: w, offsetX: S, offsetY: P }, l === "drag" && (t(1, c = f.elementToImage(O.offsetX, O.offsetY)), t(2, u = c), t(3, p = c[0]), t(4, d = c[1]), t(5, _ = u[0]), t(6, g = u[1]));
  }, I = (m) => {
    const O = m || E;
    c && (t(2, u = f.elementToImage(O.offsetX, O.offsetY)), t(5, _ = u[0]), t(6, g = u[1])), m && (E = m);
  }, y = (m) => {
    const O = m;
    if (l === "click") {
      const w = performance.now() - h.timeStamp, S = fn([h.offsetX, h.offsetY], [O.offsetX, O.offsetY]);
      if (w > 300 || S > 15) return;
      c ? b() : (t(1, c = f.elementToImage(O.offsetX, O.offsetY)), t(2, u = c), t(3, p = c[0]), t(4, d = c[1]), t(5, _ = u[0]), t(6, g = u[1]));
    } else c && (O.stopPropagation(), b());
  }, b = () => {
    if (c && u && fn(c, u) > 4) {
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
    s("pointerdown", A, !0), s("pointermove", I), s("pointerup", y, !0);
  });
  const k = () => {
    const m = Math.atan2(g - d, _ - p), O = 12, w = _ - O * Math.cos(m - Math.PI / 6), S = g - O * Math.sin(m - Math.PI / 6), P = _ - O * Math.cos(m + Math.PI / 6), L = g - O * Math.sin(m + Math.PI / 6);
    return `${w},${S} ${_},${g} ${P},${L}`;
  };
  function M(m) {
    mn[m ? "unshift" : "push"](() => {
      a = m, t(0, a);
    });
  }
  return e.$$set = (m) => {
    "addEventListener" in m && t(7, s = m.addEventListener), "drawingMode" in m && t(8, l = m.drawingMode), "transform" in m && t(9, f = m.transform), "viewportScale" in m && t(10, r = m.viewportScale);
  }, [
    a,
    c,
    u,
    p,
    d,
    _,
    g,
    s,
    l,
    f,
    r,
    k,
    M
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
      B(o, n, s), B(o, t, s);
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
      o && (j(n), j(t));
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
      B(o, n, s), t && t.m(n, null), e[11](n);
    },
    p(o, [s]) {
      /*origin*/
      o[1] && /*cursor*/
      o[2] ? t ? t.p(o, s) : (t = Mo(o), t.c(), t.m(n, null)) : t && (t.d(1), t = null);
    },
    i: Te,
    o: Te,
    d(o) {
      o && j(n), t && t.d(), e[11](null);
    }
  };
}
function yi(e, n, t) {
  const o = en();
  let { addEventListener: s } = n, { drawingMode: l } = n, { transform: f } = n, { viewportScale: r } = n, a, c, u, p, d, _, g, h, E;
  const A = (M) => {
    const m = M, { timeStamp: O, offsetX: w, offsetY: S } = m;
    h = { timeStamp: O, offsetX: w, offsetY: S }, l === "drag" && (t(1, c = f.elementToImage(m.offsetX, m.offsetY)), t(2, u = c), t(3, p = c[0]), t(4, d = c[1]), t(5, _ = u[0]), t(6, g = u[1]));
  }, I = (M) => {
    const m = M || E;
    c && (t(2, u = f.elementToImage(m.offsetX, m.offsetY)), t(5, _ = u[0]), t(6, g = u[1])), M && (E = M);
  }, y = (M) => {
    const m = M;
    if (l === "click") {
      const O = performance.now() - h.timeStamp, w = fn([h.offsetX, h.offsetY], [m.offsetX, m.offsetY]);
      if (O > 300 || w > 15) return;
      c ? b() : (t(1, c = f.elementToImage(m.offsetX, m.offsetY)), t(2, u = c), t(3, p = c[0]), t(4, d = c[1]), t(5, _ = u[0]), t(6, g = u[1]));
    } else c && (m.stopPropagation(), b());
  }, b = () => {
    if (c && u && fn(c, u) > 4) {
      const M = {
        type: Le.POLYLINE,
        geometry: {
          bounds: Xe([c, u]),
          points: [{ type: "CORNER", point: c }, { type: "CORNER", point: u }]
        },
        properties: { toolType: "distance" }
      };
      o("create", M);
    }
    t(1, c = void 0), t(2, u = void 0), E = void 0;
  };
  sn(() => {
    s("pointerdown", A, !0), s("pointermove", I), s("pointerup", y, !0);
  });
  function k(M) {
    mn[M ? "unshift" : "push"](() => {
      a = M, t(0, a);
    });
  }
  return e.$$set = (M) => {
    "addEventListener" in M && t(7, s = M.addEventListener), "drawingMode" in M && t(8, l = M.drawingMode), "transform" in M && t(9, f = M.transform), "viewportScale" in M && t(10, r = M.viewportScale);
  }, [
    a,
    c,
    u,
    p,
    d,
    _,
    g,
    s,
    l,
    f,
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
    function n(r, a) {
      var c = r.x - a.x, u = r.y - a.y;
      return c * c + u * u;
    }
    function t(r, a, c) {
      var u = a.x, p = a.y, d = c.x - u, _ = c.y - p;
      if (d !== 0 || _ !== 0) {
        var g = ((r.x - u) * d + (r.y - p) * _) / (d * d + _ * _);
        g > 1 ? (u = c.x, p = c.y) : g > 0 && (u += d * g, p += _ * g);
      }
      return d = r.x - u, _ = r.y - p, d * d + _ * _;
    }
    function o(r, a) {
      for (var c = r[0], u = [c], p, d = 1, _ = r.length; d < _; d++)
        p = r[d], n(p, c) > a && (u.push(p), c = p);
      return c !== p && u.push(p), u;
    }
    function s(r, a, c, u, p) {
      for (var d = u, _, g = a + 1; g < c; g++) {
        var h = t(r[g], r[a], r[c]);
        h > d && (_ = g, d = h);
      }
      d > u && (_ - a > 1 && s(r, a, _, u, p), p.push(r[_]), c - _ > 1 && s(r, _, c, u, p));
    }
    function l(r, a) {
      var c = r.length - 1, u = [r[0]];
      return s(r, 0, c, a, u), u.push(r[c]), u;
    }
    function f(r, a, c) {
      if (r.length <= 2) return r;
      var u = a !== void 0 ? a * a : 1;
      return r = c ? r : o(r, u), r = l(r, u), r;
    }
    e.exports = f, e.exports.default = f;
  })();
})(bi);
const jn = (e, n) => n, pn = (e) => {
  let n = 1 / 0, t = 1 / 0, o = -1 / 0, s = -1 / 0;
  return e.forEach(([l, f]) => {
    n = Math.min(n, l), t = Math.min(t, f), o = Math.max(o, l), s = Math.max(s, f);
  }), { minX: n, minY: t, maxX: o, maxY: s };
}, nt = (e) => {
  let n = 0, t = e.length - 1;
  for (let o = 0; o < e.length; o++)
    n += (e[t][0] + e[o][0]) * (e[t][1] - e[o][1]), t = o;
  return Math.abs(0.5 * n);
}, tt = (e, n, t) => {
  let o = !1;
  for (let s = 0, l = e.length - 1; s < e.length; l = s++) {
    const f = e[s][0], r = e[s][1], a = e[l][0], c = e[l][1];
    r > t != c > t && n < (a - f) * (t - r) / (c - r) + f && (o = !o);
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
    const { cx: o, cy: s, rx: l, ry: f } = e.geometry, r = 0, a = Math.cos(r), c = Math.sin(r), u = n - o, p = t - s, d = a * u + c * p, _ = c * u - a * p;
    return d * d / (l * l) + _ * _ / (f * f) <= 1;
  }
};
jn(cn.ELLIPSE, ki);
const Si = {
  area: (e) => 0,
  intersects: (e, n, t, o = 2) => {
    const [[s, l], [f, r]] = e.geometry.points, a = Math.abs((r - l) * n - (f - s) * t + f * l - r * s), c = Ei([s, l], [f, r]);
    return a / c <= o;
  }
};
jn(cn.LINE, Si);
const Ti = {
  area: (e) => {
    const { polygons: n } = e.geometry;
    return n.reduce((t, o) => {
      const [s, ...l] = o.rings, f = nt(s.points), r = l.reduce((a, c) => a + nt(c.points), 0);
      return t + f - r;
    }, 0);
  },
  intersects: (e, n, t) => {
    const { polygons: o } = e.geometry;
    for (const s of o) {
      const [l, ...f] = s.rings;
      if (tt(l.points, n, t)) {
        let r = !1;
        for (const a of f)
          if (tt(a.points, n, t)) {
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
  for (let f = 0; f <= s; f++) {
    const r = f / s, a = Math.pow(1 - r, 3) * e[0] + 3 * Math.pow(1 - r, 2) * r * n[0] + 3 * (1 - r) * Math.pow(r, 2) * t[0] + Math.pow(r, 3) * o[0], c = Math.pow(1 - r, 3) * e[1] + 3 * Math.pow(1 - r, 2) * r * n[1] + 3 * (1 - r) * Math.pow(r, 2) * t[1] + Math.pow(r, 3) * o[1];
    l.push([a, c]);
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
      for (let a = 0; a < r.length - 1; a++)
        if (Lo(n, r[a], r[a + 1]) <= t) return !0;
    } else if (Lo(n, s.point, l.point) <= t) return !0;
  }
  return !1;
}, Lo = (e, n, t) => {
  const [o, s] = e, [l, f] = n, [r, a] = t, c = r - l, u = a - f, p = Math.sqrt(c * c + u * u);
  if (p === 0)
    return Math.sqrt((o - l) * (o - l) + (s - f) * (s - f));
  const d = ((o - l) * c + (s - f) * u) / (p * p);
  return d <= 0 ? Math.sqrt((o - l) * (o - l) + (s - f) * (s - f)) : d >= 1 ? Math.sqrt((o - r) * (o - r) + (s - a) * (s - a)) : Math.abs((a - f) * o - (r - l) * s + r * f - a * l) / p;
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
  ), f = ti(
    l,
    e,
    /*$$scope*/
    e[7],
    Oo
  );
  return {
    c() {
      n = Y("g"), f && f.c(), i(n, "class", "a9s-annotation selected");
    },
    m(r, a) {
      B(r, n, a), f && f.m(n, null), t = !0, o || (s = [
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
    p(r, [a]) {
      f && f.p && (!t || a & /*$$scope*/
      128) && si(
        f,
        l,
        r,
        /*$$scope*/
        r[7],
        t ? oi(
          l,
          /*$$scope*/
          r[7],
          a,
          Ni
        ) : li(
          /*$$scope*/
          r[7]
        ),
        Oo
      );
    },
    i(r) {
      t || ($(f, r), t = !0);
    },
    o(r) {
      ne(f, r), t = !1;
    },
    d(r) {
      r && j(n), f && f.d(r), o = !1, Oe(s);
    }
  };
}
function Di(e, n, t) {
  let { $$slots: o = {}, $$scope: s } = n;
  const l = en();
  let { shape: f } = n, { editor: r } = n, { transform: a } = n, { svgEl: c } = n, u, p, d;
  const _ = (E) => (A) => {
    if (u = E, c) {
      const { left: y, top: b } = c.getBoundingClientRect(), k = A.clientX - y, M = A.clientY - b;
      p = a.elementToImage(k, M);
    } else {
      const { offsetX: y, offsetY: b } = A;
      p = a.elementToImage(y, b);
    }
    d = f, A.target.setPointerCapture(A.pointerId), l("grab", A);
  }, g = (E) => {
    if (u) {
      const [A, I] = a.elementToImage(E.offsetX, E.offsetY), y = [A - p[0], I - p[1]];
      t(3, f = r(d, u, y)), l("change", f);
    }
  }, h = (E) => {
    E.target.releasePointerCapture(E.pointerId), u = void 0, d = f, l("release", E);
  };
  return e.$$set = (E) => {
    "shape" in E && t(3, f = E.shape), "editor" in E && t(4, r = E.editor), "transform" in E && t(5, a = E.transform), "svgEl" in E && t(6, c = E.svgEl), "$$scope" in E && t(7, s = E.$$scope);
  }, [
    _,
    g,
    h,
    f,
    r,
    a,
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
  let n, t, o, s, l, f, r, a, c = (
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
      ), i(n, "class", f = `a9s-handle ${/*$$props*/
      e[8].class || ""}`.trim());
    },
    m(u, p) {
      B(u, n, p), Z(n, t), c && c.m(n, null), Z(n, s), r || (a = [
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
      256 && f !== (f = `a9s-handle ${/*$$props*/
      u[8].class || ""}`.trim()) && i(n, "class", f);
    },
    d(u) {
      u && j(n), c && c.d(), r = !1, Oe(a);
    }
  };
}
function ji(e) {
  let n, t, o, s, l, f, r, a, c;
  return {
    c() {
      n = Y("g"), t = Y("circle"), s = Y("circle"), f = Y("circle"), i(
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
      e[2]), i(s, "class", "a9s-handle-buffer svelte-qtyc7s"), i(s, "role", "button"), i(s, "tabindex", "0"), i(f, "class", "a9s-handle-dot"), i(
        f,
        "cx",
        /*x*/
        e[0]
      ), i(
        f,
        "cy",
        /*y*/
        e[1]
      ), i(f, "r", r = /*handleRadius*/
      e[5] + 2 / /*scale*/
      e[2]), i(n, "class", "a9s-touch-handle");
    },
    m(u, p) {
      B(u, n, p), Z(n, t), Z(n, s), Z(n, f), a || (c = [
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
      ], a = !0);
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
        f,
        "cx",
        /*x*/
        u[0]
      ), p & /*y*/
      2 && i(
        f,
        "cy",
        /*y*/
        u[1]
      ), p & /*handleRadius, scale*/
      36 && r !== (r = /*handleRadius*/
      u[5] + 2 / /*scale*/
      u[2]) && i(f, "r", r);
    },
    d(u) {
      u && j(n), a = !1, Oe(c);
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
      B(o, n, s);
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
      o && j(n);
    }
  };
}
function Bi(e) {
  let n;
  function t(l, f) {
    return hn ? ji : Xi;
  }
  let s = t()(e);
  return {
    c() {
      s.c(), n = Ie();
    },
    m(l, f) {
      s.m(l, f), B(l, n, f);
    },
    p(l, [f]) {
      s.p(l, f);
    },
    i: Te,
    o: Te,
    d(l) {
      l && j(n), s.d(l);
    }
  };
}
function Ui(e, n, t) {
  let o, { x: s } = n, { y: l } = n, { scale: f } = n, { selected: r = void 0 } = n, a = !1;
  const c = (y) => {
    y.pointerType === "touch" && t(4, a = !0);
  }, u = () => t(4, a = !1);
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
  function A(y) {
    he.call(this, e, y);
  }
  function I(y) {
    he.call(this, e, y);
  }
  return e.$$set = (y) => {
    t(8, n = At(At({}, n), vo(y))), "x" in y && t(0, s = y.x), "y" in y && t(1, l = y.y), "scale" in y && t(2, f = y.scale), "selected" in y && t(3, r = y.selected);
  }, e.$$.update = () => {
    e.$$.dirty & /*scale*/
    4 && t(5, o = 4 / f);
  }, n = vo(n), [
    s,
    l,
    f,
    r,
    a,
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
    A,
    I
  ];
}
class Ye extends Ne {
  constructor(n) {
    super(), Re(this, n, Ui, Bi, Ce, { x: 0, y: 1, scale: 2, selected: 3 });
  }
}
function Gi(e) {
  let n, t, o, s, l, f, r;
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
    m(a, c) {
      B(a, n, c), Z(n, t), Z(n, s), Z(n, l), f || (r = [
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
      ], f = !0);
    },
    p(a, c) {
      c & /*x*/
      1 && i(
        t,
        "cx",
        /*x*/
        a[0]
      ), c & /*y*/
      2 && i(
        t,
        "cy",
        /*y*/
        a[1]
      ), c & /*handleRadius*/
      4 && o !== (o = 1.75 * /*handleRadius*/
      a[2]) && i(t, "r", o), c & /*x*/
      1 && i(
        s,
        "cx",
        /*x*/
        a[0]
      ), c & /*y*/
      2 && i(
        s,
        "cy",
        /*y*/
        a[1]
      ), c & /*handleRadius*/
      4 && i(
        s,
        "r",
        /*handleRadius*/
        a[2]
      ), c & /*x*/
      1 && i(
        l,
        "cx",
        /*x*/
        a[0]
      ), c & /*y*/
      2 && i(
        l,
        "cy",
        /*y*/
        a[1]
      ), c & /*handleRadius*/
      4 && i(
        l,
        "r",
        /*handleRadius*/
        a[2]
      );
    },
    d(a) {
      a && j(n), f = !1, Oe(r);
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
      B(t, n, o);
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
      t && j(n);
    }
  };
}
function qi(e) {
  let n;
  function t(l, f) {
    return hn ? Yi : Gi;
  }
  let s = t()(e);
  return {
    c() {
      s.c(), n = Ie();
    },
    m(l, f) {
      s.m(l, f), B(l, n, f);
    },
    p(l, [f]) {
      s.p(l, f);
    },
    i: Te,
    o: Te,
    d(l) {
      l && j(n), s.d(l);
    }
  };
}
function zi(e, n, t) {
  let o, { x: s } = n, { y: l } = n, { scale: f } = n;
  const r = (c) => {
    c.pointerType;
  };
  function a(c) {
    he.call(this, e, c);
  }
  return e.$$set = (c) => {
    "x" in c && t(0, s = c.x), "y" in c && t(1, l = c.y), "scale" in c && t(4, f = c.scale);
  }, e.$$.update = () => {
    e.$$.dirty & /*scale*/
    16 && t(2, o = 4 / f);
  }, [s, l, o, r, f, a];
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
    m(l, f) {
      B(l, n, f);
    },
    p(l, f) {
      f[0] & /*midpoints, visibleMidpoint*/
      1088 && t !== (t = /*point*/
      l[28][0]) && i(n, "cx", t), f[0] & /*midpoints, visibleMidpoint*/
      1088 && o !== (o = /*point*/
      l[28][1]) && i(n, "cy", o), f[0] & /*viewportScale*/
      8 && s !== (s = Kn / /*viewportScale*/
      l[3]) && i(n, "r", s);
    },
    d(l) {
      l && j(n);
    }
  };
}
function Ro(e) {
  let n, t, o, s, l, f, r, a, c, u;
  return {
    c() {
      n = Y("mask"), t = Y("rect"), r = Y("circle"), i(t, "x", o = /*mask*/
      e[9].x), i(t, "y", s = /*mask*/
      e[9].y), i(t, "width", l = /*mask*/
      e[9].w), i(t, "height", f = /*mask*/
      e[9].h), i(t, "class", "svelte-1h2slbm"), i(r, "cx", a = /*point*/
      e[28][0]), i(r, "cy", c = /*point*/
      e[28][1]), i(r, "r", u = Kn / /*viewportScale*/
      e[3]), i(r, "class", "svelte-1h2slbm"), i(n, "id", `${/*maskId*/
      e[19]}-inner`), i(n, "class", "a9s-polygon-editor-mask svelte-1h2slbm");
    },
    m(p, d) {
      B(p, n, d), Z(n, t), Z(n, r);
    },
    p(p, d) {
      d[0] & /*mask*/
      512 && o !== (o = /*mask*/
      p[9].x) && i(t, "x", o), d[0] & /*mask*/
      512 && s !== (s = /*mask*/
      p[9].y) && i(t, "y", s), d[0] & /*mask*/
      512 && l !== (l = /*mask*/
      p[9].w) && i(t, "width", l), d[0] & /*mask*/
      512 && f !== (f = /*mask*/
      p[9].h) && i(t, "height", f), d[0] & /*midpoints, visibleMidpoint*/
      1088 && a !== (a = /*point*/
      p[28][0]) && i(r, "cx", a), d[0] & /*midpoints, visibleMidpoint*/
      1088 && c !== (c = /*point*/
      p[28][1]) && i(r, "cy", c), d[0] & /*viewportScale*/
      8 && u !== (u = Kn / /*viewportScale*/
      p[3]) && i(r, "r", u);
    },
    d(p) {
      p && j(n);
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
  let n, t, o, s, l, f, r, a, c, u, p, d, _, g, h, E, A, I, y, b, k, M = (
    /*visibleMidpoint*/
    e[6] !== void 0 && !/*isHandleHovered*/
    e[7] && Co(bt(e))
  ), m = (
    /*visibleMidpoint*/
    e[6] !== void 0 && !/*isHandleHovered*/
    e[7] && Ro(wt(e))
  ), O = De(
    /*geom*/
    e[5].points
  ), w = [];
  for (let L = 0; L < O.length; L += 1)
    w[L] = No(Io(e, O, L));
  const S = (L) => ne(w[L], 1, 1, () => {
    w[L] = null;
  });
  let P = (
    /*visibleMidpoint*/
    e[6] !== void 0 && !/*isHandleHovered*/
    e[7] && Ao(yt(e))
  );
  return {
    c() {
      n = Y("defs"), t = Y("mask"), o = Y("rect"), a = Y("polygon"), M && M.c(), m && m.c(), u = te(), p = Y("polygon"), _ = te(), g = Y("polygon"), E = te();
      for (let L = 0; L < w.length; L += 1)
        w[L].c();
      A = te(), P && P.c(), I = Ie(), i(o, "x", s = /*mask*/
      e[9].x), i(o, "y", l = /*mask*/
      e[9].y), i(o, "width", f = /*mask*/
      e[9].w), i(o, "height", r = /*mask*/
      e[9].h), i(o, "class", "svelte-1h2slbm"), i(a, "points", c = /*geom*/
      e[5].points.map(Do).join(" ")), i(a, "class", "svelte-1h2slbm"), i(t, "id", `${/*maskId*/
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
    m(L, G) {
      B(L, n, G), Z(n, t), Z(t, o), Z(t, a), M && M.m(t, null), m && m.m(n, null), B(L, u, G), B(L, p, G), B(L, _, G), B(L, g, G), B(L, E, G);
      for (let C = 0; C < w.length; C += 1)
        w[C] && w[C].m(L, G);
      B(L, A, G), P && P.m(L, G), B(L, I, G), y = !0, b || (k = [
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
    p(L, G) {
      if (e = L, (!y || G[0] & /*mask*/
      512 && s !== (s = /*mask*/
      e[9].x)) && i(o, "x", s), (!y || G[0] & /*mask*/
      512 && l !== (l = /*mask*/
      e[9].y)) && i(o, "y", l), (!y || G[0] & /*mask*/
      512 && f !== (f = /*mask*/
      e[9].w)) && i(o, "width", f), (!y || G[0] & /*mask*/
      512 && r !== (r = /*mask*/
      e[9].h)) && i(o, "height", r), (!y || G[0] & /*geom*/
      32 && c !== (c = /*geom*/
      e[5].points.map(Do).join(" "))) && i(a, "points", c), /*visibleMidpoint*/
      e[6] !== void 0 && !/*isHandleHovered*/
      e[7] ? M ? M.p(bt(e), G) : (M = Co(bt(e)), M.c(), M.m(t, null)) : M && (M.d(1), M = null), /*visibleMidpoint*/
      e[6] !== void 0 && !/*isHandleHovered*/
      e[7] ? m ? m.p(wt(e), G) : (m = Ro(wt(e)), m.c(), m.m(n, null)) : m && (m.d(1), m = null), (!y || G[0] & /*geom*/
      32 && d !== (d = /*geom*/
      e[5].points.map(Xo).join(" "))) && i(p, "points", d), (!y || G[0] & /*computedStyle*/
      2) && i(
        g,
        "style",
        /*computedStyle*/
        e[1]
      ), (!y || G[0] & /*geom*/
      32 && h !== (h = /*geom*/
      e[5].points.map(jo).join(" "))) && i(g, "points", h), G[0] & /*geom, viewportScale, selectedCorners, onEnterHandle, onLeaveHandle, onHandlePointerDown, grab, onHandlePointerUp*/
      134322472) {
        O = De(
          /*geom*/
          e[5].points
        );
        let C;
        for (C = 0; C < O.length; C += 1) {
          const H = Io(e, O, C);
          w[C] ? (w[C].p(H, G), $(w[C], 1)) : (w[C] = No(H), w[C].c(), $(w[C], 1), w[C].m(A.parentNode, A));
        }
        for (Fe(), C = O.length; C < w.length; C += 1)
          S(C);
        We();
      }
      /*visibleMidpoint*/
      e[6] !== void 0 && !/*isHandleHovered*/
      e[7] ? P ? (P.p(yt(e), G), G[0] & /*visibleMidpoint, isHandleHovered*/
      192 && $(P, 1)) : (P = Ao(yt(e)), P.c(), $(P, 1), P.m(I.parentNode, I)) : P && (Fe(), ne(P, 1, 1, () => {
        P = null;
      }), We());
    },
    i(L) {
      if (!y) {
        for (let G = 0; G < O.length; G += 1)
          $(w[G]);
        $(P), y = !0;
      }
    },
    o(L) {
      w = w.filter(Boolean);
      for (let G = 0; G < w.length; G += 1)
        ne(w[G]);
      ne(P), y = !1;
    },
    d(L) {
      L && (j(n), j(u), j(p), j(_), j(g), j(E), j(A), j(I)), M && M.d(), m && m.d(), Xn(w, L), P && P.d(L), b = !1, Oe(k);
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
  const f = en();
  let { shape: r } = n, { computedStyle: a } = n, { transform: c } = n, { viewportScale: u = 1 } = n, { svgEl: p } = n, d, _ = !1, g, h = [];
  const E = () => t(7, _ = !0), A = () => t(7, _ = !1), I = (C) => {
    if (h.length > 0 || !s.some((V) => V.visible)) {
      t(6, d = void 0);
      return;
    }
    const [H, z] = c.elementToImage(C.offsetX, C.offsetY), R = (V) => Math.pow(V[0] - H, 2) + Math.pow(V[1] - z, 2), U = o.points.reduce((V, J) => R(J) < R(V) ? J : V), F = s.filter((V) => V.visible).reduce((V, J) => R(J.point) < R(V.point) ? J : V), D = Math.pow(Wi / u, 2);
    R(U) < D || R(F.point) < D ? t(6, d = s.indexOf(F)) : t(6, d = void 0);
  }, y = () => {
    document.activeElement !== p && p.focus();
  }, b = () => {
    t(8, h = []), y();
  }, k = (C) => {
    t(7, _ = !0), C.preventDefault(), C.stopPropagation(), g = performance.now();
  }, M = (C) => (H) => {
    if (!g || hn || performance.now() - g > Fi) return;
    const z = h.includes(C);
    H.metaKey || H.ctrlKey || H.shiftKey ? z ? t(8, h = h.filter((R) => R !== C)) : t(8, h = [...h, C]) : z && h.length > 1 ? t(8, h = [C]) : z ? t(8, h = []) : t(8, h = [C]), y();
  }, m = (C, H, z) => {
    y();
    let R;
    const U = C.geometry;
    h.length > 1 ? R = U.points.map(([D, X], V) => h.includes(V) ? [D + z[0], X + z[1]] : [D, X]) : H === "SHAPE" ? R = U.points.map(([D, X]) => [D + z[0], X + z[1]]) : R = U.points.map(([D, X], V) => H === `HANDLE-${V}` ? [D + z[0], X + z[1]] : [D, X]);
    const F = pn(R);
    return { ...C, geometry: { points: R, bounds: F } };
  }, O = (C) => async (H) => {
    H.stopPropagation();
    const z = [
      ...o.points.slice(0, C + 1),
      s[C].point,
      ...o.points.slice(C + 1)
    ], R = pn(z);
    f("change", { ...r, geometry: { points: z, bounds: R } }), await Vn();
    const U = [...document.querySelectorAll(".a9s-handle")][C + 1];
    if (U != null && U.firstChild) {
      const F = new PointerEvent(
        "pointerdown",
        {
          bubbles: !0,
          cancelable: !0,
          clientX: H.clientX,
          clientY: H.clientY,
          pointerId: H.pointerId,
          pointerType: H.pointerType,
          isPrimary: H.isPrimary,
          buttons: H.buttons
        }
      );
      U.firstChild.dispatchEvent(F);
    }
  }, w = () => {
    if (o.points.length - h.length < 3) return;
    const C = o.points.filter((z, R) => !h.includes(R)), H = pn(C);
    f("change", { ...r, geometry: { points: C, bounds: H } }), t(8, h = []);
  };
  sn(() => {
    if (hn) return;
    const C = (H) => {
      (H.key === "Delete" || H.key === "Backspace") && (H.preventDefault(), w());
    };
    return p.addEventListener("pointermove", I), p.addEventListener("keydown", C), () => {
      p.removeEventListener("pointermove", I), p.removeEventListener("keydown", C);
    };
  });
  const S = `polygon-mask-${Math.random().toString(36).substring(2, 12)}`;
  function P(C) {
    he.call(this, e, C);
  }
  function L(C) {
    he.call(this, e, C);
  }
  function G(C) {
    he.call(this, e, C);
  }
  return e.$$set = (C) => {
    "shape" in C && t(0, r = C.shape), "computedStyle" in C && t(1, a = C.computedStyle), "transform" in C && t(2, c = C.transform), "viewportScale" in C && t(3, u = C.viewportScale), "svgEl" in C && t(4, p = C.svgEl);
  }, e.$$.update = () => {
    e.$$.dirty[0] & /*shape*/
    1 && t(5, o = r.geometry), e.$$.dirty[0] & /*geom, viewportScale*/
    40 && t(10, s = hn ? [] : o.points.map((C, H) => {
      const z = H === o.points.length - 1 ? o.points[0] : o.points[H + 1], R = (C[0] + z[0]) / 2, U = (C[1] + z[1]) / 2, D = Math.sqrt(Math.pow(z[0] - R, 2) + Math.pow(z[1] - U, 2)) > Zi / u;
      return { point: [R, U], visible: D };
    })), e.$$.dirty[0] & /*geom, viewportScale*/
    40 && t(9, l = qt(o.bounds, Kn / u));
  }, [
    r,
    a,
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
    A,
    I,
    b,
    k,
    M,
    m,
    O,
    S,
    P,
    L,
    G
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
  let n, t, o, s, l, f, r, a, c, u, p, d, _, g, h, E, A, I, y, b, k, M, m, O, w, S, P, L, G, C, H, z, R, U, F, D, X, V, J, ee, W, se, ve, oe, He, ce, Ee, ue, je, pe, Be, Se, K, q, Q;
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
      n = Y("defs"), t = Y("mask"), o = Y("rect"), a = Y("rect"), _ = te(), g = Y("rect"), y = te(), b = Y("rect"), w = te(), S = Y("rect"), C = te(), H = Y("rect"), F = te(), D = Y("rect"), ee = te(), W = Y("rect"), He = te(), ge(ce.$$.fragment), Ee = te(), ge(ue.$$.fragment), je = te(), ge(pe.$$.fragment), Be = te(), ge(Se.$$.fragment), i(o, "class", "rect-mask-bg svelte-1njczvj"), i(o, "x", s = /*mask*/
      e[6].x), i(o, "y", l = /*mask*/
      e[6].y), i(o, "width", f = /*mask*/
      e[6].w), i(o, "height", r = /*mask*/
      e[6].h), i(a, "class", "rect-mask-fg svelte-1njczvj"), i(a, "x", c = /*geom*/
      e[5].x), i(a, "y", u = /*geom*/
      e[5].y), i(a, "width", p = /*geom*/
      e[5].w), i(a, "height", d = /*geom*/
      e[5].h), i(
        t,
        "id",
        /*maskId*/
        e[8]
      ), i(t, "class", "a9s-rectangle-editor-mask svelte-1njczvj"), i(g, "class", "a9s-outer"), i(g, "mask", `url(#${/*maskId*/
      e[8]})`), i(g, "x", h = /*geom*/
      e[5].x), i(g, "y", E = /*geom*/
      e[5].y), i(g, "width", A = /*geom*/
      e[5].w), i(g, "height", I = /*geom*/
      e[5].h), i(b, "class", "a9s-inner a9s-shape-handle"), i(
        b,
        "style",
        /*computedStyle*/
        e[1]
      ), i(b, "x", k = /*geom*/
      e[5].x), i(b, "y", M = /*geom*/
      e[5].y), i(b, "width", m = /*geom*/
      e[5].w), i(b, "height", O = /*geom*/
      e[5].h), i(S, "class", "a9s-edge-handle a9s-edge-handle-top"), i(S, "x", P = /*geom*/
      e[5].x), i(S, "y", L = /*geom*/
      e[5].y), i(S, "height", 1), i(S, "width", G = /*geom*/
      e[5].w), i(H, "class", "a9s-edge-handle a9s-edge-handle-right"), i(H, "x", z = /*geom*/
      e[5].x + /*geom*/
      e[5].w), i(H, "y", R = /*geom*/
      e[5].y), i(H, "height", U = /*geom*/
      e[5].h), i(H, "width", 1), i(D, "class", "a9s-edge-handle a9s-edge-handle-bottom"), i(D, "x", X = /*geom*/
      e[5].x), i(D, "y", V = /*geom*/
      e[5].y + /*geom*/
      e[5].h), i(D, "height", 1), i(D, "width", J = /*geom*/
      e[5].w), i(W, "class", "a9s-edge-handle a9s-edge-handle-left"), i(W, "x", se = /*geom*/
      e[5].x), i(W, "y", ve = /*geom*/
      e[5].y), i(W, "height", oe = /*geom*/
      e[5].h), i(W, "width", 1);
    },
    m(N, T) {
      B(N, n, T), Z(n, t), Z(t, o), Z(t, a), B(N, _, T), B(N, g, T), B(N, y, T), B(N, b, T), B(N, w, T), B(N, S, T), B(N, C, T), B(N, H, T), B(N, F, T), B(N, D, T), B(N, ee, T), B(N, W, T), B(N, He, T), de(ce, N, T), B(N, Ee, T), de(ue, N, T), B(N, je, T), de(pe, N, T), B(N, Be, T), de(Se, N, T), K = !0, q || (Q = [
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
        x(S, "pointerdown", function() {
          le(
            /*grab*/
            e[12]("TOP")
          ) && e[12]("TOP").apply(this, arguments);
        }),
        x(H, "pointerdown", function() {
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
    p(N, T) {
      e = N, (!K || T & /*mask*/
      64 && s !== (s = /*mask*/
      e[6].x)) && i(o, "x", s), (!K || T & /*mask*/
      64 && l !== (l = /*mask*/
      e[6].y)) && i(o, "y", l), (!K || T & /*mask*/
      64 && f !== (f = /*mask*/
      e[6].w)) && i(o, "width", f), (!K || T & /*mask*/
      64 && r !== (r = /*mask*/
      e[6].h)) && i(o, "height", r), (!K || T & /*geom*/
      32 && c !== (c = /*geom*/
      e[5].x)) && i(a, "x", c), (!K || T & /*geom*/
      32 && u !== (u = /*geom*/
      e[5].y)) && i(a, "y", u), (!K || T & /*geom*/
      32 && p !== (p = /*geom*/
      e[5].w)) && i(a, "width", p), (!K || T & /*geom*/
      32 && d !== (d = /*geom*/
      e[5].h)) && i(a, "height", d), (!K || T & /*geom*/
      32 && h !== (h = /*geom*/
      e[5].x)) && i(g, "x", h), (!K || T & /*geom*/
      32 && E !== (E = /*geom*/
      e[5].y)) && i(g, "y", E), (!K || T & /*geom*/
      32 && A !== (A = /*geom*/
      e[5].w)) && i(g, "width", A), (!K || T & /*geom*/
      32 && I !== (I = /*geom*/
      e[5].h)) && i(g, "height", I), (!K || T & /*computedStyle*/
      2) && i(
        b,
        "style",
        /*computedStyle*/
        e[1]
      ), (!K || T & /*geom*/
      32 && k !== (k = /*geom*/
      e[5].x)) && i(b, "x", k), (!K || T & /*geom*/
      32 && M !== (M = /*geom*/
      e[5].y)) && i(b, "y", M), (!K || T & /*geom*/
      32 && m !== (m = /*geom*/
      e[5].w)) && i(b, "width", m), (!K || T & /*geom*/
      32 && O !== (O = /*geom*/
      e[5].h)) && i(b, "height", O), (!K || T & /*geom*/
      32 && P !== (P = /*geom*/
      e[5].x)) && i(S, "x", P), (!K || T & /*geom*/
      32 && L !== (L = /*geom*/
      e[5].y)) && i(S, "y", L), (!K || T & /*geom*/
      32 && G !== (G = /*geom*/
      e[5].w)) && i(S, "width", G), (!K || T & /*geom*/
      32 && z !== (z = /*geom*/
      e[5].x + /*geom*/
      e[5].w)) && i(H, "x", z), (!K || T & /*geom*/
      32 && R !== (R = /*geom*/
      e[5].y)) && i(H, "y", R), (!K || T & /*geom*/
      32 && U !== (U = /*geom*/
      e[5].h)) && i(H, "height", U), (!K || T & /*geom*/
      32 && X !== (X = /*geom*/
      e[5].x)) && i(D, "x", X), (!K || T & /*geom*/
      32 && V !== (V = /*geom*/
      e[5].y + /*geom*/
      e[5].h)) && i(D, "y", V), (!K || T & /*geom*/
      32 && J !== (J = /*geom*/
      e[5].w)) && i(D, "width", J), (!K || T & /*geom*/
      32 && se !== (se = /*geom*/
      e[5].x)) && i(W, "x", se), (!K || T & /*geom*/
      32 && ve !== (ve = /*geom*/
      e[5].y)) && i(W, "y", ve), (!K || T & /*geom*/
      32 && oe !== (oe = /*geom*/
      e[5].h)) && i(W, "height", oe);
      const _e = {};
      T & /*geom*/
      32 && (_e.x = /*geom*/
      e[5].x), T & /*geom*/
      32 && (_e.y = /*geom*/
      e[5].y), T & /*viewportScale*/
      8 && (_e.scale = /*viewportScale*/
      e[3]), ce.$set(_e);
      const ke = {};
      T & /*geom*/
      32 && (ke.x = /*geom*/
      e[5].x + /*geom*/
      e[5].w), T & /*geom*/
      32 && (ke.y = /*geom*/
      e[5].y), T & /*viewportScale*/
      8 && (ke.scale = /*viewportScale*/
      e[3]), ue.$set(ke);
      const ie = {};
      T & /*geom*/
      32 && (ie.x = /*geom*/
      e[5].x + /*geom*/
      e[5].w), T & /*geom*/
      32 && (ie.y = /*geom*/
      e[5].y + /*geom*/
      e[5].h), T & /*viewportScale*/
      8 && (ie.scale = /*viewportScale*/
      e[3]), pe.$set(ie);
      const ye = {};
      T & /*geom*/
      32 && (ye.x = /*geom*/
      e[5].x), T & /*geom*/
      32 && (ye.y = /*geom*/
      e[5].y + /*geom*/
      e[5].h), T & /*viewportScale*/
      8 && (ye.scale = /*viewportScale*/
      e[3]), Se.$set(ye);
    },
    i(N) {
      K || ($(ce.$$.fragment, N), $(ue.$$.fragment, N), $(pe.$$.fragment, N), $(Se.$$.fragment, N), K = !0);
    },
    o(N) {
      ne(ce.$$.fragment, N), ne(ue.$$.fragment, N), ne(pe.$$.fragment, N), ne(Se.$$.fragment, N), K = !1;
    },
    d(N) {
      N && (j(n), j(_), j(g), j(y), j(b), j(w), j(S), j(C), j(H), j(F), j(D), j(ee), j(W), j(He), j(Ee), j(je), j(Be)), me(ce, N), me(ue, N), me(pe, N), me(Se, N), q = !1, Oe(Q);
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
  let o, s, { shape: l } = n, { computedStyle: f } = n, { transform: r } = n, { viewportScale: a = 1 } = n, { svgEl: c } = n;
  const u = (h, E, A) => {
    const I = h.geometry.bounds;
    let [y, b] = [I.minX, I.minY], [k, M] = [I.maxX, I.maxY];
    const [m, O] = A;
    if (E === "SHAPE")
      y += m, k += m, b += O, M += O;
    else {
      switch (E) {
        case "TOP":
        case "TOP_LEFT":
        case "TOP_RIGHT": {
          b += O;
          break;
        }
        case "BOTTOM":
        case "BOTTOM_LEFT":
        case "BOTTOM_RIGHT": {
          M += O;
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
    const w = Math.min(y, k), S = Math.min(b, M), P = Math.abs(k - y), L = Math.abs(M - b);
    return {
      ...h,
      geometry: {
        x: w,
        y: S,
        w: P,
        h: L,
        bounds: {
          minX: w,
          minY: S,
          maxX: w + P,
          maxY: S + L
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
    "shape" in h && t(0, l = h.shape), "computedStyle" in h && t(1, f = h.computedStyle), "transform" in h && t(2, r = h.transform), "viewportScale" in h && t(3, a = h.viewportScale), "svgEl" in h && t(4, c = h.svgEl);
  }, e.$$.update = () => {
    e.$$.dirty & /*shape*/
    1 && t(5, o = l.geometry), e.$$.dirty & /*geom, viewportScale*/
    40 && t(6, s = qt(o.bounds, 2 / a));
  }, [
    l,
    f,
    r,
    a,
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
  const l = o.rings.reduce((f, r, a) => {
    const c = r.points.map((u, p) => {
      const d = p === r.points.length - 1 ? r.points[0] : r.points[p + 1], _ = (u[0] + d[0]) / 2, g = (u[1] + d[1]) / 2, E = Math.sqrt(
        Math.pow(d[0] - _, 2) + Math.pow(d[1] - g, 2)
      ) > tr / n;
      return { point: [_, g], visible: E, elementIdx: s, ringIdx: a, pointIdx: p };
    });
    return [...f, ...c];
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
    m(l, f) {
      B(l, n, f);
    },
    p(l, f) {
      f[0] & /*midpoints, visibleMidpoint*/
      1088 && t !== (t = /*point*/
      l[29][0]) && i(n, "cx", t), f[0] & /*midpoints, visibleMidpoint*/
      1088 && o !== (o = /*point*/
      l[29][1]) && i(n, "cy", o), f[0] & /*viewportScale*/
      8 && s !== (s = Fn / /*viewportScale*/
      l[3]) && i(n, "r", s);
    },
    d(l) {
      l && j(n);
    }
  };
}
function zo(e) {
  let n, t, o, s, l, f, r, a, c, u;
  return {
    c() {
      n = Y("mask"), t = Y("rect"), r = Y("circle"), i(t, "x", o = /*mask*/
      e[9].x), i(t, "y", s = /*mask*/
      e[9].y), i(t, "width", l = /*mask*/
      e[9].w), i(t, "height", f = /*mask*/
      e[9].h), i(t, "class", "svelte-1vxo6dc"), i(r, "cx", a = /*point*/
      e[29][0]), i(r, "cy", c = /*point*/
      e[29][1]), i(r, "r", u = Fn / /*viewportScale*/
      e[3]), i(r, "class", "svelte-1vxo6dc"), i(n, "id", `${/*maskId*/
      e[18]}-${/*elementIdx*/
      e[32]}-inner`), i(n, "class", "a9s-multipolygon-editor-mask svelte-1vxo6dc");
    },
    m(p, d) {
      B(p, n, d), Z(n, t), Z(n, r);
    },
    p(p, d) {
      d[0] & /*mask*/
      512 && o !== (o = /*mask*/
      p[9].x) && i(t, "x", o), d[0] & /*mask*/
      512 && s !== (s = /*mask*/
      p[9].y) && i(t, "y", s), d[0] & /*mask*/
      512 && l !== (l = /*mask*/
      p[9].w) && i(t, "width", l), d[0] & /*mask*/
      512 && f !== (f = /*mask*/
      p[9].h) && i(t, "height", f), d[0] & /*midpoints, visibleMidpoint*/
      1088 && a !== (a = /*point*/
      p[29][0]) && i(r, "cx", a), d[0] & /*midpoints, visibleMidpoint*/
      1088 && c !== (c = /*point*/
      p[29][1]) && i(r, "cy", c), d[0] & /*viewportScale*/
      8 && u !== (u = Fn / /*viewportScale*/
      p[3]) && i(r, "r", u);
    },
    d(p) {
      p && j(n);
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
      const f = {};
      l[0] & /*geom*/
      32 && (f.x = /*point*/
      e[29][0]), l[0] & /*geom*/
      32 && (f.y = /*point*/
      e[29][1]), l[0] & /*viewportScale*/
      8 && (f.scale = /*viewportScale*/
      e[3]), l[0] & /*selectedCorners*/
      256 && (f.selected = /*selectedCorners*/
      e[8].some(o)), n.$set(f);
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
  for (let f = 0; f < o.length; f += 1)
    s[f] = Vo(Yo(e, o, f));
  const l = (f) => ne(s[f], 1, 1, () => {
    s[f] = null;
  });
  return {
    c() {
      for (let f = 0; f < s.length; f += 1)
        s[f].c();
      n = Ie();
    },
    m(f, r) {
      for (let a = 0; a < s.length; a += 1)
        s[a] && s[a].m(f, r);
      B(f, n, r), t = !0;
    },
    p(f, r) {
      if (r[0] & /*geom, viewportScale, selectedCorners, onEnterHandle, onLeaveHandle, onHandlePointerDown, grab, onHandlePointerUp*/
      268491048) {
        o = De(
          /*ring*/
          f[33].points
        );
        let a;
        for (a = 0; a < o.length; a += 1) {
          const c = Yo(f, o, a);
          s[a] ? (s[a].p(c, r), $(s[a], 1)) : (s[a] = Vo(c), s[a].c(), $(s[a], 1), s[a].m(n.parentNode, n));
        }
        for (Fe(), a = o.length; a < s.length; a += 1)
          l(a);
        We();
      }
    },
    i(f) {
      if (!t) {
        for (let r = 0; r < o.length; r += 1)
          $(s[r]);
        t = !0;
      }
    },
    o(f) {
      s = s.filter(Boolean);
      for (let r = 0; r < s.length; r += 1)
        ne(s[r]);
      t = !1;
    },
    d(f) {
      f && j(n), Xn(s, f);
    }
  };
}
function Fo(e) {
  let n, t, o, s, l, f, r, a, c, u, p, d, _, g, h, E, A, I = (
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
  const M = (m) => ne(k[m], 1, 1, () => {
    k[m] = null;
  });
  return {
    c() {
      n = Y("g"), t = Y("defs"), o = Y("mask"), s = Y("rect"), c = Y("path"), I && I.c(), y && y.c(), p = Y("path"), _ = Y("path");
      for (let m = 0; m < k.length; m += 1)
        k[m].c();
      i(s, "x", l = /*mask*/
      e[9].x), i(s, "y", f = /*mask*/
      e[9].y), i(s, "width", r = /*mask*/
      e[9].w), i(s, "height", a = /*mask*/
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
    m(m, O) {
      B(m, n, O), Z(n, t), Z(t, o), Z(o, s), Z(o, c), I && I.m(o, null), y && y.m(t, null), Z(n, p), Z(n, _);
      for (let w = 0; w < k.length; w += 1)
        k[w] && k[w].m(n, null);
      h = !0, E || (A = [
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
    p(m, O) {
      if (e = m, (!h || O[0] & /*mask*/
      512 && l !== (l = /*mask*/
      e[9].x)) && i(s, "x", l), (!h || O[0] & /*mask*/
      512 && f !== (f = /*mask*/
      e[9].y)) && i(s, "y", f), (!h || O[0] & /*mask*/
      512 && r !== (r = /*mask*/
      e[9].w)) && i(s, "width", r), (!h || O[0] & /*mask*/
      512 && a !== (a = /*mask*/
      e[9].h)) && i(s, "height", a), (!h || O[0] & /*geom*/
      32 && u !== (u = Sn(
        /*element*/
        e[30]
      ))) && i(c, "d", u), /*visibleMidpoint*/
      e[6] !== void 0 && !/*isHandleHovered*/
      e[7] ? I ? I.p(kt(e), O) : (I = qo(kt(e)), I.c(), I.m(o, null)) : I && (I.d(1), I = null), /*visibleMidpoint*/
      e[6] !== void 0 && !/*isHandleHovered*/
      e[7] ? y ? y.p(Et(e), O) : (y = zo(Et(e)), y.c(), y.m(t, null)) : y && (y.d(1), y = null), (!h || O[0] & /*geom*/
      32 && d !== (d = Sn(
        /*element*/
        e[30]
      ))) && i(p, "d", d), (!h || O[0] & /*computedStyle*/
      2) && i(
        _,
        "style",
        /*computedStyle*/
        e[1]
      ), (!h || O[0] & /*geom*/
      32 && g !== (g = Sn(
        /*element*/
        e[30]
      ))) && i(_, "d", g), O[0] & /*geom, viewportScale, selectedCorners, onEnterHandle, onLeaveHandle, onHandlePointerDown, grab, onHandlePointerUp*/
      268491048) {
        b = De(
          /*element*/
          e[30].rings
        );
        let w;
        for (w = 0; w < b.length; w += 1) {
          const S = Go(e, b, w);
          k[w] ? (k[w].p(S, O), $(k[w], 1)) : (k[w] = Ko(S), k[w].c(), $(k[w], 1), k[w].m(n, null));
        }
        for (Fe(), w = b.length; w < k.length; w += 1)
          M(w);
        We();
      }
    },
    i(m) {
      if (!h) {
        for (let O = 0; O < b.length; O += 1)
          $(k[O]);
        h = !0;
      }
    },
    o(m) {
      k = k.filter(Boolean);
      for (let O = 0; O < k.length; O += 1)
        ne(k[O]);
      h = !1;
    },
    d(m) {
      m && j(n), I && I.d(), y && y.d(), Xn(k, m), E = !1, Oe(A);
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
  for (let a = 0; a < s.length; a += 1)
    l[a] = Fo(Uo(e, s, a));
  const f = (a) => ne(l[a], 1, 1, () => {
    l[a] = null;
  });
  let r = (
    /*visibleMidpoint*/
    e[6] !== void 0 && !/*isHandleHovered*/
    e[7] && Wo(vt(e))
  );
  return {
    c() {
      for (let a = 0; a < l.length; a += 1)
        l[a].c();
      n = te(), r && r.c(), t = Ie();
    },
    m(a, c) {
      for (let u = 0; u < l.length; u += 1)
        l[u] && l[u].m(a, c);
      B(a, n, c), r && r.m(a, c), B(a, t, c), o = !0;
    },
    p(a, c) {
      if (c[0] & /*geom, viewportScale, selectedCorners, onEnterHandle, onLeaveHandle, onHandlePointerDown, grab, onHandlePointerUp, maskId, computedStyle, onShapePointerUp, midpoints, visibleMidpoint, mask, isHandleHovered*/
      268763114) {
        s = De(
          /*geom*/
          a[5].polygons
        );
        let u;
        for (u = 0; u < s.length; u += 1) {
          const p = Uo(a, s, u);
          l[u] ? (l[u].p(p, c), $(l[u], 1)) : (l[u] = Fo(p), l[u].c(), $(l[u], 1), l[u].m(n.parentNode, n));
        }
        for (Fe(), u = s.length; u < l.length; u += 1)
          f(u);
        We();
      }
      /*visibleMidpoint*/
      a[6] !== void 0 && !/*isHandleHovered*/
      a[7] ? r ? (r.p(vt(a), c), c[0] & /*visibleMidpoint, isHandleHovered*/
      192 && $(r, 1)) : (r = Wo(vt(a)), r.c(), $(r, 1), r.m(t.parentNode, t)) : r && (Fe(), ne(r, 1, 1, () => {
        r = null;
      }), We());
    },
    i(a) {
      if (!o) {
        for (let c = 0; c < s.length; c += 1)
          $(l[c]);
        $(r), o = !0;
      }
    },
    o(a) {
      l = l.filter(Boolean);
      for (let c = 0; c < l.length; c += 1)
        ne(l[c]);
      ne(r), o = !1;
    },
    d(a) {
      a && (j(n), j(t)), Xn(l, a), r && r.d(a);
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
function fr(e, n, t) {
  let o, s, l;
  const f = en();
  let { shape: r } = n, { computedStyle: a } = n, { transform: c } = n, { viewportScale: u = 1 } = n, { svgEl: p } = n, d, _ = !1, g, h = [];
  const E = () => t(7, _ = !0), A = () => t(7, _ = !1), I = (H) => {
    if (h.length > 0 || !s.some((J) => J.visible)) {
      t(6, d = void 0);
      return;
    }
    const [z, R] = c.elementToImage(H.offsetX, H.offsetY), U = (J) => Math.pow(J[0] - z, 2) + Math.pow(J[1] - R, 2), F = Mi(o).reduce((J, ee) => U(ee) < U(J) ? ee : J), D = s.filter((J) => J.visible).reduce((J, ee) => U(ee.point) < U(J.point) ? ee : J), X = Math.pow(rr / u, 2);
    U(F) < X || U(D.point) < X ? t(6, d = s.indexOf(D)) : t(6, d = void 0);
  }, y = () => {
    document.activeElement !== p && p.focus();
  }, b = () => {
    t(8, h = []), y();
  }, k = (H) => {
    t(7, _ = !0), H.preventDefault(), H.stopPropagation(), g = performance.now();
  }, M = (H, z, R) => (U) => {
    if (!g || hn || performance.now() - g > ir) return;
    const F = (X) => X.polygon === H && X.ring === z && X.point === R, D = h.some(F);
    U.metaKey || U.ctrlKey || U.shiftKey ? D ? t(8, h = h.filter((X) => !F(X))) : t(8, h = [...h, { polygon: H, ring: z, point: R }]) : D && h.length > 1 ? t(8, h = [{ polygon: H, ring: z, point: R }]) : D ? t(8, h = []) : t(8, h = [{ polygon: H, ring: z, point: R }]), y();
  }, m = (H, z, R) => {
    y();
    const U = H.geometry.polygons;
    let F;
    if (z === "SHAPE")
      F = U.map((D) => {
        const X = D.rings.map((J, ee) => ({ points: J.points.map((se, ve) => [se[0] + R[0], se[1] + R[1]]) })), V = pn(X[0].points);
        return { rings: X, bounds: V };
      });
    else {
      const [D, X, V, J] = z.split("-").map((ee) => parseInt(ee));
      F = U.map((ee, W) => {
        if (W === X) {
          const se = ee.rings.map((oe, He) => He === V ? { points: oe.points.map((Ee, ue) => ue === J ? [Ee[0] + R[0], Ee[1] + R[1]] : Ee) } : oe), ve = pn(se[0].points);
          return { rings: se, bounds: ve };
        } else
          return ee;
      });
    }
    return {
      ...H,
      geometry: {
        polygons: F,
        bounds: _t(F)
      }
    };
  }, O = (H) => async (z) => {
    z.stopPropagation();
    const R = s[H], U = o.polygons.map((D, X) => {
      if (X === R.elementIdx) {
        const V = D.rings.map((ee, W) => W === R.ringIdx ? { points: [
          ...ee.points.slice(0, R.pointIdx + 1),
          R.point,
          ...ee.points.slice(R.pointIdx + 1)
        ] } : ee), J = pn(V[0].points);
        return { rings: V, bounds: J };
      } else
        return D;
    });
    f("change", {
      ...r,
      geometry: {
        polygons: U,
        bounds: _t(U)
      }
    }), await Vn();
    const F = [...document.querySelectorAll(".a9s-handle")][H + 1];
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
    const H = o.polygons.map((R, U) => {
      if (h.some((D) => D.polygon === U)) {
        const D = R.rings.map((V, J) => {
          const ee = h.filter((W) => W.polygon === U && W.ring === J);
          return ee.length && V.points.length - ee.length >= 3 ? { points: V.points.filter((se, ve) => !ee.some((oe) => oe.point === ve)) } : V;
        }), X = pn(D[0].points);
        return { rings: D, bounds: X };
      } else
        return R;
    });
    !jt(o.polygons, H) && (f("change", {
      ...r,
      geometry: {
        polygons: H,
        bounds: _t(H)
      }
    }), t(8, h = []));
  };
  sn(() => {
    if (hn) return;
    const H = (z) => {
      (z.key === "Delete" || z.key === "Backspace") && (z.preventDefault(), w());
    };
    return p.addEventListener("pointermove", I), p.addEventListener("keydown", H), () => {
      p.removeEventListener("pointermove", I), p.removeEventListener("keydown", H);
    };
  });
  const S = `polygon-mask-${Math.random().toString(36).substring(2, 12)}`, P = (H, z, R, { polygon: U, ring: F, point: D }) => U === H && F === z && D === R;
  function L(H) {
    he.call(this, e, H);
  }
  function G(H) {
    he.call(this, e, H);
  }
  function C(H) {
    he.call(this, e, H);
  }
  return e.$$set = (H) => {
    "shape" in H && t(0, r = H.shape), "computedStyle" in H && t(1, a = H.computedStyle), "transform" in H && t(2, c = H.transform), "viewportScale" in H && t(3, u = H.viewportScale), "svgEl" in H && t(4, p = H.svgEl);
  }, e.$$.update = () => {
    e.$$.dirty[0] & /*shape*/
    1 && t(5, o = r.geometry), e.$$.dirty[0] & /*geom, viewportScale*/
    40 && t(10, s = hn ? [] : or(o, u)), e.$$.dirty[0] & /*geom, viewportScale*/
    40 && t(9, l = qt(o.bounds, Fn / u));
  }, [
    r,
    a,
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
    A,
    b,
    k,
    M,
    m,
    O,
    S,
    P,
    L,
    G,
    C
  ];
}
class ar extends Ne {
  constructor(n) {
    super(), Re(
      this,
      n,
      fr,
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
  let n, t, o, s, l, f, r, a, c, u, p, d, _, g, h, E, A, I, y, b, k, M, m, O, w, S, P, L, G, C, H, z, R, U, F;
  return S = new Ye({
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
  }), S.$on("pointerdown", function() {
    le(
      /*grab*/
      e[12]("TOP")
    ) && e[12]("TOP").apply(this, arguments);
  }), L = new Ye({
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
  }), L.$on("pointerdown", function() {
    le(
      /*grab*/
      e[12]("RIGHT")
    ) && e[12]("RIGHT").apply(this, arguments);
  }), C = new Ye({
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
  }), C.$on("pointerdown", function() {
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
      n = Y("defs"), t = Y("mask"), o = Y("rect"), a = Y("ellipse"), _ = te(), g = Y("ellipse"), y = te(), b = Y("ellipse"), w = te(), ge(S.$$.fragment), P = te(), ge(L.$$.fragment), G = te(), ge(C.$$.fragment), H = te(), ge(z.$$.fragment), i(o, "x", s = /*mask*/
      e[6].x), i(o, "y", l = /*mask*/
      e[6].y), i(o, "width", f = /*mask*/
      e[6].w), i(o, "height", r = /*mask*/
      e[6].h), i(o, "class", "svelte-wdm5en"), i(a, "cx", c = /*geom*/
      e[5].cx), i(a, "cy", u = /*geom*/
      e[5].cy), i(a, "rx", p = /*geom*/
      e[5].rx), i(a, "ry", d = /*geom*/
      e[5].ry), i(a, "class", "svelte-wdm5en"), i(
        t,
        "id",
        /*maskId*/
        e[8]
      ), i(t, "class", "a9s-ellipse-editor-mask svelte-wdm5en"), i(g, "class", "a9s-outer"), i(g, "mask", `url(#${/*maskId*/
      e[8]})`), i(g, "cx", h = /*geom*/
      e[5].cx), i(g, "cy", E = /*geom*/
      e[5].cy), i(g, "rx", A = /*geom*/
      e[5].rx), i(g, "ry", I = /*geom*/
      e[5].ry), i(b, "class", "a9s-inner a9s-shape-handle"), i(
        b,
        "style",
        /*computedStyle*/
        e[1]
      ), i(b, "cx", k = /*geom*/
      e[5].cx), i(b, "cy", M = /*geom*/
      e[5].cy), i(b, "rx", m = /*geom*/
      e[5].rx), i(b, "ry", O = /*geom*/
      e[5].ry);
    },
    m(D, X) {
      B(D, n, X), Z(n, t), Z(t, o), Z(t, a), B(D, _, X), B(D, g, X), B(D, y, X), B(D, b, X), B(D, w, X), de(S, D, X), B(D, P, X), de(L, D, X), B(D, G, X), de(C, D, X), B(D, H, X), de(z, D, X), R = !0, U || (F = [
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
      ], U = !0);
    },
    p(D, X) {
      e = D, (!R || X & /*mask*/
      64 && s !== (s = /*mask*/
      e[6].x)) && i(o, "x", s), (!R || X & /*mask*/
      64 && l !== (l = /*mask*/
      e[6].y)) && i(o, "y", l), (!R || X & /*mask*/
      64 && f !== (f = /*mask*/
      e[6].w)) && i(o, "width", f), (!R || X & /*mask*/
      64 && r !== (r = /*mask*/
      e[6].h)) && i(o, "height", r), (!R || X & /*geom*/
      32 && c !== (c = /*geom*/
      e[5].cx)) && i(a, "cx", c), (!R || X & /*geom*/
      32 && u !== (u = /*geom*/
      e[5].cy)) && i(a, "cy", u), (!R || X & /*geom*/
      32 && p !== (p = /*geom*/
      e[5].rx)) && i(a, "rx", p), (!R || X & /*geom*/
      32 && d !== (d = /*geom*/
      e[5].ry)) && i(a, "ry", d), (!R || X & /*geom*/
      32 && h !== (h = /*geom*/
      e[5].cx)) && i(g, "cx", h), (!R || X & /*geom*/
      32 && E !== (E = /*geom*/
      e[5].cy)) && i(g, "cy", E), (!R || X & /*geom*/
      32 && A !== (A = /*geom*/
      e[5].rx)) && i(g, "rx", A), (!R || X & /*geom*/
      32 && I !== (I = /*geom*/
      e[5].ry)) && i(g, "ry", I), (!R || X & /*computedStyle*/
      2) && i(
        b,
        "style",
        /*computedStyle*/
        e[1]
      ), (!R || X & /*geom*/
      32 && k !== (k = /*geom*/
      e[5].cx)) && i(b, "cx", k), (!R || X & /*geom*/
      32 && M !== (M = /*geom*/
      e[5].cy)) && i(b, "cy", M), (!R || X & /*geom*/
      32 && m !== (m = /*geom*/
      e[5].rx)) && i(b, "rx", m), (!R || X & /*geom*/
      32 && O !== (O = /*geom*/
      e[5].ry)) && i(b, "ry", O);
      const V = {};
      X & /*geom*/
      32 && (V.x = /*geom*/
      e[5].cx), X & /*geom*/
      32 && (V.y = /*geom*/
      e[5].cy - /*geom*/
      e[5].ry), X & /*viewportScale*/
      8 && (V.scale = /*viewportScale*/
      e[3]), S.$set(V);
      const J = {};
      X & /*geom*/
      32 && (J.x = /*geom*/
      e[5].cx + /*geom*/
      e[5].rx), X & /*geom*/
      32 && (J.y = /*geom*/
      e[5].cy), X & /*viewportScale*/
      8 && (J.scale = /*viewportScale*/
      e[3]), L.$set(J);
      const ee = {};
      X & /*geom*/
      32 && (ee.x = /*geom*/
      e[5].cx), X & /*geom*/
      32 && (ee.y = /*geom*/
      e[5].cy + /*geom*/
      e[5].ry), X & /*viewportScale*/
      8 && (ee.scale = /*viewportScale*/
      e[3]), C.$set(ee);
      const W = {};
      X & /*geom*/
      32 && (W.x = /*geom*/
      e[5].cx - /*geom*/
      e[5].rx), X & /*geom*/
      32 && (W.y = /*geom*/
      e[5].cy), X & /*viewportScale*/
      8 && (W.scale = /*viewportScale*/
      e[3]), z.$set(W);
    },
    i(D) {
      R || ($(S.$$.fragment, D), $(L.$$.fragment, D), $(C.$$.fragment, D), $(z.$$.fragment, D), R = !0);
    },
    o(D) {
      ne(S.$$.fragment, D), ne(L.$$.fragment, D), ne(C.$$.fragment, D), ne(z.$$.fragment, D), R = !1;
    },
    d(D) {
      D && (j(n), j(_), j(g), j(y), j(b), j(w), j(P), j(G), j(H)), me(S, D), me(L, D), me(C, D), me(z, D), U = !1, Oe(F);
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
  let o, s, { shape: l } = n, { computedStyle: f } = n, { transform: r } = n, { viewportScale: a = 1 } = n, { svgEl: c } = n;
  const u = (h, E, A) => {
    const I = h.geometry.bounds;
    let [y, b] = [I.minX, I.minY], [k, M] = [I.maxX, I.maxY];
    const [m, O] = A;
    if (E === "SHAPE")
      y += m, k += m, b += O, M += O;
    else
      switch (E) {
        case "TOP": {
          b += O;
          break;
        }
        case "BOTTOM": {
          M += O;
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
    const w = Math.min(y, k), S = Math.min(b, M), P = Math.abs(k - y), L = Math.abs(M - b), G = (y + k) / 2, C = (b + M) / 2, H = P / 2, z = L / 2;
    return {
      ...h,
      geometry: {
        ...h.geometry,
        cx: G,
        cy: C,
        rx: H,
        ry: z,
        bounds: {
          minX: w,
          minY: S,
          maxX: w + P,
          maxY: S + L
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
    "shape" in h && t(0, l = h.shape), "computedStyle" in h && t(1, f = h.computedStyle), "transform" in h && t(2, r = h.transform), "viewportScale" in h && t(3, a = h.viewportScale), "svgEl" in h && t(4, c = h.svgEl);
  }, e.$$.update = () => {
    e.$$.dirty & /*shape*/
    1 && t(5, o = l.geometry), e.$$.dirty & /*geom, viewportScale*/
    40 && t(6, s = bn(o.bounds, 2 / a));
  }, [
    l,
    f,
    r,
    a,
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
  let n, t, o, s, l, f, r, a, c, u, p, d, _, g, h, E, A, I, y, b, k, M;
  return {
    c() {
      n = Y("defs"), t = Y("mask"), o = Y("rect"), a = Y("ellipse"), _ = Y("ellipse"), I = Y("ellipse"), i(o, "x", s = /*x*/
      e[2] - /*buffer*/
      e[6]), i(o, "y", l = /*y*/
      e[3] - /*buffer*/
      e[6]), i(o, "width", f = /*w*/
      e[4] + 2 * /*buffer*/
      e[6]), i(o, "height", r = /*h*/
      e[5] + 2 * /*buffer*/
      e[6]), i(o, "class", "svelte-1koqlb3"), i(a, "cx", c = /*x*/
      e[2] + /*w*/
      e[4] / 2), i(a, "cy", u = /*y*/
      e[3] + /*h*/
      e[5] / 2), i(a, "rx", p = /*w*/
      e[4] / 2), i(a, "ry", d = /*h*/
      e[5] / 2), i(a, "class", "svelte-1koqlb3"), i(
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
      e[4] / 2), i(_, "ry", A = /*h*/
      e[5] / 2), i(I, "class", "a9s-inner"), i(I, "cx", y = /*x*/
      e[2] + /*w*/
      e[4] / 2), i(I, "cy", b = /*y*/
      e[3] + /*h*/
      e[5] / 2), i(I, "rx", k = /*w*/
      e[4] / 2), i(I, "ry", M = /*h*/
      e[5] / 2);
    },
    m(m, O) {
      B(m, n, O), Z(n, t), Z(t, o), Z(t, a), B(m, _, O), B(m, I, O);
    },
    p(m, O) {
      O & /*x, buffer*/
      68 && s !== (s = /*x*/
      m[2] - /*buffer*/
      m[6]) && i(o, "x", s), O & /*y, buffer*/
      72 && l !== (l = /*y*/
      m[3] - /*buffer*/
      m[6]) && i(o, "y", l), O & /*w, buffer*/
      80 && f !== (f = /*w*/
      m[4] + 2 * /*buffer*/
      m[6]) && i(o, "width", f), O & /*h, buffer*/
      96 && r !== (r = /*h*/
      m[5] + 2 * /*buffer*/
      m[6]) && i(o, "height", r), O & /*x, w*/
      20 && c !== (c = /*x*/
      m[2] + /*w*/
      m[4] / 2) && i(a, "cx", c), O & /*y, h*/
      40 && u !== (u = /*y*/
      m[3] + /*h*/
      m[5] / 2) && i(a, "cy", u), O & /*w*/
      16 && p !== (p = /*w*/
      m[4] / 2) && i(a, "rx", p), O & /*h*/
      32 && d !== (d = /*h*/
      m[5] / 2) && i(a, "ry", d), O & /*x, w*/
      20 && g !== (g = /*x*/
      m[2] + /*w*/
      m[4] / 2) && i(_, "cx", g), O & /*y, h*/
      40 && h !== (h = /*y*/
      m[3] + /*h*/
      m[5] / 2) && i(_, "cy", h), O & /*w*/
      16 && E !== (E = /*w*/
      m[4] / 2) && i(_, "rx", E), O & /*h*/
      32 && A !== (A = /*h*/
      m[5] / 2) && i(_, "ry", A), O & /*x, w*/
      20 && y !== (y = /*x*/
      m[2] + /*w*/
      m[4] / 2) && i(I, "cx", y), O & /*y, h*/
      40 && b !== (b = /*y*/
      m[3] + /*h*/
      m[5] / 2) && i(I, "cy", b), O & /*w*/
      16 && k !== (k = /*w*/
      m[4] / 2) && i(I, "rx", k), O & /*h*/
      32 && M !== (M = /*h*/
      m[5] / 2) && i(I, "ry", M);
    },
    d(m) {
      m && (j(n), j(_), j(I));
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
      B(o, n, s), t && t.m(n, null), e[12](n);
    },
    p(o, [s]) {
      /*origin*/
      o[1] ? t ? t.p(o, s) : (t = Zo(o), t.c(), t.m(n, null)) : t && (t.d(1), t = null);
    },
    i: Te,
    o: Te,
    d(o) {
      o && j(n), t && t.d(), e[12](null);
    }
  };
}
function mr(e, n, t) {
  let o;
  const s = en();
  let { addEventListener: l } = n, { drawingMode: f } = n, { transform: r } = n, { viewportScale: a } = n, c, u, p, d, _, g, h, E = !1, A = !1, I, y;
  const b = (L) => {
    const G = L;
    I = performance.now(), f === "drag" && (t(1, u = r.elementToImage(G.offsetX, G.offsetY)), p = u, t(2, d = u[0]), t(3, _ = u[1]), t(4, g = 1), t(5, h = 1));
  }, k = (L) => {
    const G = L || y;
    if (u)
      if (p = r.elementToImage(G.offsetX, G.offsetY), A) {
        const C = 2 * Math.abs(p[0] - u[0]), H = 2 * Math.abs(p[1] - u[1]);
        t(4, g = E ? Math.max(C, H) : C), t(5, h = E ? g : H), t(2, d = Math.min(p[0], u[0] - g / 2)), t(3, _ = Math.min(p[1], u[1] - h / 2));
      } else {
        const C = Math.abs(p[0] - u[0]), H = Math.abs(p[1] - u[1]);
        t(4, g = E ? Math.max(C, H) : C), t(5, h = E ? g : H), t(2, d = Math.min(p[0], u[0])), t(3, _ = Math.min(p[1], u[1]));
      }
    L && (y = L);
  }, M = (L) => {
    const G = L, C = performance.now() - I;
    if (f === "click") {
      if (C > 300) return;
      u ? m() : (t(1, u = r.elementToImage(G.offsetX, G.offsetY)), p = u, t(2, d = u[0]), t(3, _ = u[1]), t(4, g = 1), t(5, h = 1));
    } else u && (C > 300 || g * h > 100 ? (G.stopPropagation(), m()) : (t(1, u = void 0), p = void 0, y = void 0));
  }, m = () => {
    if (g * h > 15) {
      const L = {
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
      s("create", L);
    }
    t(1, u = void 0), p = void 0, y = void 0;
  }, O = (L) => {
    L.key === "Shift" && (E = !0, k()), L.key === "Control" && (A = !0, k());
  }, w = (L) => {
    L.key === "Shift" && (E = !1, k()), L.key === "Control" && (A = !1, k());
  };
  sn(() => (document.addEventListener("keyup", w), document.addEventListener("keydown", O), l("pointerdown", b), l("pointermove", k), l("pointerup", M, !0), () => {
    document.removeEventListener("keyup", w), document.removeEventListener("keydown", O);
  }));
  const S = `ellipse-mask-${Math.random().toString(36).substring(2, 12)}`;
  function P(L) {
    mn[L ? "unshift" : "push"](() => {
      c = L, t(0, c);
    });
  }
  return e.$$set = (L) => {
    "addEventListener" in L && t(8, l = L.addEventListener), "drawingMode" in L && t(9, f = L.drawingMode), "transform" in L && t(10, r = L.transform), "viewportScale" in L && t(11, a = L.viewportScale);
  }, e.$$.update = () => {
    e.$$.dirty & /*viewportScale*/
    2048 && t(6, o = 2 / a);
  }, [
    c,
    u,
    d,
    _,
    g,
    h,
    o,
    S,
    l,
    f,
    r,
    a,
    P
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
  let n, t, o, s, l, f, r, a, c, u, p, d, _, g, h, E, A, I;
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
      n = Y("line"), f = te(), r = Y("line"), d = te(), ge(_.$$.fragment), g = te(), ge(h.$$.fragment), i(n, "class", "a9s-outer"), i(n, "x1", t = /*geom*/
      e[5].points[0][0]), i(n, "y1", o = /*geom*/
      e[5].points[0][1]), i(n, "x2", s = /*geom*/
      e[5].points[1][0]), i(n, "y2", l = /*geom*/
      e[5].points[1][1]), i(r, "class", "a9s-inner a9s-shape-handle"), i(
        r,
        "style",
        /*computedStyle*/
        e[1]
      ), i(r, "x1", a = /*geom*/
      e[5].points[0][0]), i(r, "y1", c = /*geom*/
      e[5].points[0][1]), i(r, "x2", u = /*geom*/
      e[5].points[1][0]), i(r, "y2", p = /*geom*/
      e[5].points[1][1]);
    },
    m(y, b) {
      B(y, n, b), B(y, f, b), B(y, r, b), B(y, d, b), de(_, y, b), B(y, g, b), de(h, y, b), E = !0, A || (I = [
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
      ], A = !0);
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
      32 && a !== (a = /*geom*/
      e[5].points[0][0])) && i(r, "x1", a), (!E || b & /*geom*/
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
      const M = {};
      b & /*geom*/
      32 && (M.x = /*geom*/
      e[5].points[1][0]), b & /*geom*/
      32 && (M.y = /*geom*/
      e[5].points[1][1]), b & /*viewportScale*/
      8 && (M.scale = /*viewportScale*/
      e[3]), h.$set(M);
    },
    i(y) {
      E || ($(_.$$.fragment, y), $(h.$$.fragment, y), E = !0);
    },
    o(y) {
      ne(_.$$.fragment, y), ne(h.$$.fragment, y), E = !1;
    },
    d(y) {
      y && (j(n), j(f), j(r), j(d), j(g)), me(_, y), me(h, y), A = !1, Oe(I);
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
  let o, { shape: s } = n, { computedStyle: l } = n, { transform: f } = n, { viewportScale: r = 1 } = n, { svgEl: a } = n;
  const c = (_, g, h) => {
    const E = _.geometry;
    let [[A, I], [y, b]] = E.points;
    const [k, M] = h;
    if (g === "LINE")
      A += k, y += k, I += M, b += M;
    else
      switch (g) {
        case "POINT1": {
          A += k, I += M;
          break;
        }
        case "POINT2": {
          y += k, b += M;
          break;
        }
      }
    return {
      ..._,
      geometry: {
        ..._.geometry,
        points: [[A, I], [y, b]],
        bounds: Xe([[A, I], [y, b]])
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
    "shape" in _ && t(0, s = _.shape), "computedStyle" in _ && t(1, l = _.computedStyle), "transform" in _ && t(2, f = _.transform), "viewportScale" in _ && t(3, r = _.viewportScale), "svgEl" in _ && t(4, a = _.svgEl);
  }, e.$$.update = () => {
    e.$$.dirty & /*shape*/
    1 && t(5, o = s.geometry);
  }, [
    s,
    l,
    f,
    r,
    a,
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
      B(o, n, s), B(o, t, s);
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
      o && (j(n), j(t));
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
      B(o, n, s), t && t.m(n, null), e[11](n);
    },
    p(o, [s]) {
      /*origin*/
      o[1] && /*cursor*/
      o[2] ? t ? t.p(o, s) : (t = Qo(o), t.c(), t.m(n, null)) : t && (t.d(1), t = null);
    },
    i: Te,
    o: Te,
    d(o) {
      o && j(n), t && t.d(), e[11](null);
    }
  };
}
function Er(e, n, t) {
  const o = en();
  let { addEventListener: s } = n, { drawingMode: l } = n, { transform: f } = n, { viewportScale: r } = n, a, c, u, p, d, _, g, h, E;
  const A = (M) => {
    const m = M, { timeStamp: O, offsetX: w, offsetY: S } = m;
    h = { timeStamp: O, offsetX: w, offsetY: S }, l === "drag" && (t(1, c = f.elementToImage(m.offsetX, m.offsetY)), t(2, u = c), t(3, p = c[0]), t(4, d = c[1]), t(5, _ = u[0]), t(6, g = u[1]));
  }, I = (M) => {
    const m = M || E;
    c && (t(2, u = f.elementToImage(m.offsetX, m.offsetY)), t(5, _ = u[0]), t(6, g = u[1])), M && (E = M);
  }, y = (M) => {
    const m = M;
    if (l === "click") {
      const O = performance.now() - h.timeStamp, w = fn([h.offsetX, h.offsetY], [m.offsetX, m.offsetY]);
      if (O > 300 || w > 15) return;
      c ? b() : (t(1, c = f.elementToImage(m.offsetX, m.offsetY)), t(2, u = c), t(3, p = c[0]), t(4, d = c[1]), t(5, _ = u[0]), t(6, g = u[1]));
    } else c && (m.stopPropagation(), b());
  }, b = () => {
    if (c && u && fn(c, u) > 4) {
      const M = {
        type: Le.LINE,
        geometry: {
          bounds: Xe([c, u]),
          points: [c, u]
        }
      };
      o("create", M);
    }
    t(1, c = void 0), t(2, u = void 0), E = void 0;
  };
  sn(() => {
    s("pointerdown", A, !0), s("pointermove", I), s("pointerup", y, !0);
  });
  function k(M) {
    mn[M ? "unshift" : "push"](() => {
      a = M, t(0, a);
    });
  }
  return e.$$set = (M) => {
    "addEventListener" in M && t(7, s = M.addEventListener), "drawingMode" in M && t(8, l = M.drawingMode), "transform" in M && t(9, f = M.transform), "viewportScale" in M && t(10, r = M.viewportScale);
  }, [
    a,
    c,
    u,
    p,
    d,
    _,
    g,
    s,
    l,
    f,
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
  for (let f = 0; f < s.length; f += 1)
    l[f] = xo(Jo(e, s, f));
  return {
    c() {
      n = ze("div");
      for (let f = 0; f < l.length; f += 1)
        l[f].c();
      i(n, "class", "tb-color-picker svelte-19rj0sx");
    },
    m(f, r) {
      B(f, n, r);
      for (let a = 0; a < l.length; a += 1)
        l[a] && l[a].m(n, null);
      t || (o = x(
        n,
        "mousedown",
        /*onMouseDown*/
        e[11]
      ), t = !0);
    },
    p(f, r) {
      if (r & /*BG_COLORS, style, pickBgColor*/
      1057) {
        s = De(
          /*BG_COLORS*/
          f[5]
        );
        let a;
        for (a = 0; a < s.length; a += 1) {
          const c = Jo(f, s, a);
          l[a] ? l[a].p(c, r) : (l[a] = xo(c), l[a].c(), l[a].m(n, null));
        }
        for (; a < l.length; a += 1)
          l[a].d(1);
        l.length = s.length;
      }
    },
    d(f) {
      f && j(n), Xn(l, f), t = !1, o();
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
    m(l, f) {
      B(l, n, f), t || (o = x(n, "click", s), t = !0);
    },
    p(l, f) {
      e = l, f & /*style, BG_COLORS*/
      33 && Qe(
        n,
        "selected",
        /*style*/
        e[0].bgColor === /*c*/
        e[18].value
      );
    },
    d(l) {
      l && j(n), t = !1, o();
    }
  };
}
function Sr(e) {
  let n, t, o, s, l, f, r, a, c, u, p, d, _, g, h, E, A, I, y, b, k, M, m, O, w, S, P, L = (
    /*showBgPicker*/
    e[3] && $o(e)
  );
  return {
    c() {
      n = ze("div"), t = ze("button"), t.textContent = "A-", o = te(), s = ze("button"), s.textContent = "A+", l = te(), f = ze("div"), r = te(), a = ze("button"), a.innerHTML = "<strong>B</strong>", c = te(), u = ze("button"), u.innerHTML = "<em>I</em>", p = te(), d = ze("button"), d.innerHTML = "<u>U</u>", _ = te(), g = ze("div"), h = te(), E = ze("div"), A = ze("button"), I = ze("span"), I.textContent = "A", y = te(), b = ze("span"), k = te(), L && L.c(), M = te(), m = ze("div"), O = te(), w = ze("button"), w.innerHTML = '<svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor"><path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"></path></svg>', i(t, "class", "tb-btn svelte-19rj0sx"), i(t, "title", "Decrease font size"), i(s, "class", "tb-btn svelte-19rj0sx"), i(s, "title", "Increase font size"), i(f, "class", "tb-divider svelte-19rj0sx"), i(a, "class", "tb-btn svelte-19rj0sx"), i(a, "title", "Bold"), Qe(
        a,
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
      ), i(g, "class", "tb-divider svelte-19rj0sx"), i(I, "class", "tb-color-letter svelte-19rj0sx"), i(b, "class", "tb-color-swatch svelte-19rj0sx"), Ue(
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
      ), i(A, "class", "tb-btn tb-color-btn svelte-19rj0sx"), i(A, "title", "Highlight colour"), i(E, "class", "tb-color-wrap svelte-19rj0sx"), i(m, "class", "tb-divider svelte-19rj0sx"), i(w, "class", "tb-btn tb-delete svelte-19rj0sx"), i(w, "title", "Delete"), i(n, "class", "a9s-tools-text-toolbar svelte-19rj0sx"), Ue(
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
    m(G, C) {
      B(G, n, C), Z(n, t), Z(n, o), Z(n, s), Z(n, l), Z(n, f), Z(n, r), Z(n, a), Z(n, c), Z(n, u), Z(n, p), Z(n, d), Z(n, _), Z(n, g), Z(n, h), Z(n, E), Z(E, A), Z(A, I), Z(A, y), Z(A, b), Z(E, k), L && L.m(E, null), Z(n, M), Z(n, m), Z(n, O), Z(n, w), S || (P = [
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
          a,
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
          A,
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
      ], S = !0);
    },
    p(G, [C]) {
      C & /*style*/
      1 && Qe(
        a,
        "active",
        /*style*/
        G[0].bold
      ), C & /*style*/
      1 && Qe(
        u,
        "active",
        /*style*/
        G[0].italic
      ), C & /*style*/
      1 && Qe(
        d,
        "active",
        /*style*/
        G[0].underline
      ), C & /*style*/
      1 && Ue(
        b,
        "background",
        /*style*/
        G[0].bgColor !== "transparent" ? (
          /*style*/
          G[0].bgColor
        ) : "transparent"
      ), C & /*style*/
      1 && Ue(
        b,
        "border-color",
        /*style*/
        G[0].bgColor !== "transparent" ? (
          /*style*/
          G[0].bgColor
        ) : "#AAAFC3"
      ), /*showBgPicker*/
      G[3] ? L ? L.p(G, C) : (L = $o(G), L.c(), L.m(E, null)) : L && (L.d(1), L = null), C & /*x*/
      2 && Ue(
        n,
        "left",
        /*x*/
        G[1] + "px"
      ), C & /*y*/
      4 && Ue(
        n,
        "top",
        /*y*/
        G[2] + "px"
      );
    },
    i: Te,
    o: Te,
    d(G) {
      G && j(n), L && L.d(), S = !1, Oe(P);
    }
  };
}
function Tr(e, n, t) {
  let { style: o } = n, { x: s } = n, { y: l } = n;
  const f = en(), r = [
    { value: "transparent", label: "None" },
    { value: "#ffff00", label: "Yellow" },
    { value: "#00ff00", label: "Green" },
    { value: "#00ffff", label: "Cyan" },
    { value: "#ff00ff", label: "Magenta" },
    { value: "#ffffff", label: "White" },
    { value: "#000000", label: "Black" }
  ];
  let a = !1;
  const c = (k) => f("change", { ...o, ...k }), u = (k) => c({
    fontSize: Math.max(8, Math.min(72, o.fontSize + k))
  }), p = () => c({ bold: !o.bold }), d = () => c({ italic: !o.italic }), _ = () => c({ underline: !o.underline }), g = (k) => {
    c({ bgColor: k }), t(3, a = !1);
  }, h = (k) => k.preventDefault(), E = () => u(-2), A = () => u(2), I = () => t(3, a = !a), y = (k) => g(k.value), b = () => f("delete");
  return e.$$set = (k) => {
    "style" in k && t(0, o = k.style), "x" in k && t(1, s = k.x), "y" in k && t(2, l = k.y);
  }, [
    o,
    s,
    l,
    a,
    f,
    r,
    u,
    p,
    d,
    _,
    g,
    h,
    E,
    A,
    I,
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
  const f = 8 / Math.max(
    /*viewportScale*/
    n[5],
    1e-3
  );
  n[71] = f;
  const r = (
    /*pt*/
    n[64].x - /*anchorGap*/
    n[71]
  );
  n[72] = r;
  const a = (
    /*pt*/
    n[64].y - /*fs*/
    n[58]
  );
  n[73] = a;
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
  const f = !!/*style*/
  (n[56].bgColor && /*style*/
  n[56].bgColor !== "transparent");
  n[65] = f;
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
  const f = 4 / Math.max(
    /*viewportScale*/
    n[5],
    1e-3
  );
  n[84] = f;
  const r = (
    /*ann*/
    n[77].px * 20 / Math.max(
      /*viewportScale*/
      n[5],
      1e-3
    )
  );
  n[85] = r;
  const a = (
    /*ann*/
    n[77].py * 20 / Math.max(
      /*viewportScale*/
      n[5],
      1e-3
    )
  );
  return n[86] = a, n;
}
function ss(e) {
  let n, t, o, s, l, f, r, a, c, u, p, d, _, g, h, E, A, I, y, b, k, M, m = (
    /*ann*/
    e[77].length + ""
  ), O, w, S;
  return {
    c() {
      n = Y("g"), t = Y("polyline"), l = Y("line"), u = Y("line"), h = Y("g"), E = Y("rect"), M = Y("text"), O = st(m), i(t, "points", o = /*ann*/
      e[77].linePts), i(t, "fill", "none"), i(
        t,
        "stroke",
        /*strokeColor*/
        e[0]
      ), i(t, "stroke-width", "1.5"), i(t, "stroke-dasharray", s = 8 / /*viewportScale*/
      e[5] + " " + 4 / /*viewportScale*/
      e[5]), i(t, "vector-effect", "non-scaling-stroke"), i(l, "x1", f = /*ann*/
      e[77].x1 - /*ann*/
      e[77].px * /*tick*/
      e[80]), i(l, "y1", r = /*ann*/
      e[77].y1 - /*ann*/
      e[77].py * /*tick*/
      e[80]), i(l, "x2", a = /*ann*/
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
      ), i(u, "stroke-width", "1.5"), i(u, "vector-effect", "non-scaling-stroke"), i(E, "x", A = -/*pillW*/
      e[82] / 2), i(E, "y", I = -/*pillH*/
      e[83] / 2), i(E, "width", y = /*pillW*/
      e[82]), i(E, "height", b = /*pillH*/
      e[83]), i(E, "rx", k = /*rx*/
      e[84]), i(E, "fill", "rgba(0,0,0,0.7)"), i(M, "x", "0"), i(M, "y", "0"), i(M, "font-size", w = /*lfs*/
      e[81]), i(M, "font-family", "sans-serif"), i(M, "font-weight", "bold"), i(M, "fill", "white"), i(M, "text-anchor", "middle"), i(M, "dominant-baseline", "middle"), i(h, "transform", S = `translate(${/*ann*/
      e[77].mx + /*lox*/
      e[85]}, ${/*ann*/
      e[77].my + /*loy*/
      e[86]})`), i(n, "class", "a9s-tools-distance");
    },
    m(P, L) {
      B(P, n, L), Z(n, t), Z(n, l), Z(n, u), Z(n, h), Z(h, E), Z(h, M), Z(M, O);
    },
    p(P, L) {
      L[0] & /*svgAnnotations*/
      4096 && o !== (o = /*ann*/
      P[77].linePts) && i(t, "points", o), L[0] & /*strokeColor*/
      1 && i(
        t,
        "stroke",
        /*strokeColor*/
        P[0]
      ), L[0] & /*viewportScale*/
      32 && s !== (s = 8 / /*viewportScale*/
      P[5] + " " + 4 / /*viewportScale*/
      P[5]) && i(t, "stroke-dasharray", s), L[0] & /*svgAnnotations, viewportScale*/
      4128 && f !== (f = /*ann*/
      P[77].x1 - /*ann*/
      P[77].px * /*tick*/
      P[80]) && i(l, "x1", f), L[0] & /*svgAnnotations, viewportScale*/
      4128 && r !== (r = /*ann*/
      P[77].y1 - /*ann*/
      P[77].py * /*tick*/
      P[80]) && i(l, "y1", r), L[0] & /*svgAnnotations, viewportScale*/
      4128 && a !== (a = /*ann*/
      P[77].x1 + /*ann*/
      P[77].px * /*tick*/
      P[80]) && i(l, "x2", a), L[0] & /*svgAnnotations, viewportScale*/
      4128 && c !== (c = /*ann*/
      P[77].y1 + /*ann*/
      P[77].py * /*tick*/
      P[80]) && i(l, "y2", c), L[0] & /*strokeColor*/
      1 && i(
        l,
        "stroke",
        /*strokeColor*/
        P[0]
      ), L[0] & /*svgAnnotations, viewportScale*/
      4128 && p !== (p = /*ann*/
      P[77].x2 - /*ann*/
      P[77].px * /*tick*/
      P[80]) && i(u, "x1", p), L[0] & /*svgAnnotations, viewportScale*/
      4128 && d !== (d = /*ann*/
      P[77].y2 - /*ann*/
      P[77].py * /*tick*/
      P[80]) && i(u, "y1", d), L[0] & /*svgAnnotations, viewportScale*/
      4128 && _ !== (_ = /*ann*/
      P[77].x2 + /*ann*/
      P[77].px * /*tick*/
      P[80]) && i(u, "x2", _), L[0] & /*svgAnnotations, viewportScale*/
      4128 && g !== (g = /*ann*/
      P[77].y2 + /*ann*/
      P[77].py * /*tick*/
      P[80]) && i(u, "y2", g), L[0] & /*strokeColor*/
      1 && i(
        u,
        "stroke",
        /*strokeColor*/
        P[0]
      ), L[0] & /*svgAnnotations, viewportScale*/
      4128 && A !== (A = -/*pillW*/
      P[82] / 2) && i(E, "x", A), L[0] & /*viewportScale*/
      32 && I !== (I = -/*pillH*/
      P[83] / 2) && i(E, "y", I), L[0] & /*svgAnnotations, viewportScale*/
      4128 && y !== (y = /*pillW*/
      P[82]) && i(E, "width", y), L[0] & /*viewportScale*/
      32 && b !== (b = /*pillH*/
      P[83]) && i(E, "height", b), L[0] & /*viewportScale*/
      32 && k !== (k = /*rx*/
      P[84]) && i(E, "rx", k), L[0] & /*svgAnnotations*/
      4096 && m !== (m = /*ann*/
      P[77].length + "") && Gs(O, m), L[0] & /*viewportScale*/
      32 && w !== (w = /*lfs*/
      P[81]) && i(M, "font-size", w), L[0] & /*svgAnnotations, viewportScale*/
      4128 && S !== (S = `translate(${/*ann*/
      P[77].mx + /*lox*/
      P[85]}, ${/*ann*/
      P[77].my + /*loy*/
      P[86]})`) && i(h, "transform", S);
    },
    d(P) {
      P && j(n);
    }
  };
}
function Lr(e) {
  let n, t;
  return {
    c() {
      n = Y("polyline"), i(n, "points", t = /*ann*/
      e[77].arrowheadStr), i(n, "fill", "none"), i(
        n,
        "stroke",
        /*strokeColor*/
        e[0]
      ), i(n, "stroke-width", "2"), i(n, "stroke-linecap", "round"), i(n, "stroke-linejoin", "round"), i(n, "vector-effect", "non-scaling-stroke");
    },
    m(o, s) {
      B(o, n, s);
    },
    p(o, s) {
      s[0] & /*svgAnnotations*/
      4096 && t !== (t = /*ann*/
      o[77].arrowheadStr) && i(n, "points", t), s[0] & /*strokeColor*/
      1 && i(
        n,
        "stroke",
        /*strokeColor*/
        o[0]
      );
    },
    d(o) {
      o && j(n);
    }
  };
}
function ls(e, n) {
  let t, o;
  function s(a, c) {
    if (
      /*ann*/
      a[77].toolType === "arrow"
    ) return Lr;
    if (
      /*ann*/
      a[77].toolType === "distance"
    ) return ss;
  }
  function l(a, c) {
    return c === ss ? Pr(a) : a;
  }
  let f = s(n), r = f && f(l(n, f));
  return {
    key: e,
    first: null,
    c() {
      t = Ie(), r && r.c(), o = Ie(), this.first = t;
    },
    m(a, c) {
      B(a, t, c), r && r.m(a, c), B(a, o, c);
    },
    p(a, c) {
      n = a, f === (f = s(n)) && r ? r.p(l(n, f), c) : (r && r.d(1), r = f && f(l(n, f)), r && (r.c(), r.m(o.parentNode, o)));
    },
    d(a) {
      a && (j(t), j(o)), r && r.d(a);
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
      t && t.m(o, s), B(o, n, s);
    },
    p(o, s) {
      /*style*/
      o[56].bgColor && /*style*/
      o[56].bgColor !== "transparent" ? t ? t.p(o, s) : (t = rs(o), t.c(), t.m(n.parentNode, n)) : t && (t.d(1), t = null);
    },
    d(o) {
      o && j(n), t && t.d(o);
    }
  };
}
function rs(e) {
  let n, t, o, s, l, f, r;
  return {
    c() {
      n = Y("filter"), t = Y("feFlood"), s = Y("feMerge"), l = Y("feMergeNode"), f = Y("feMergeNode"), i(t, "flood-color", o = /*style*/
      e[56].bgColor), i(t, "result", "bg"), i(l, "in", "bg"), i(f, "in", "SourceGraphic"), i(n, "id", r = "a9s-tb-" + /*i*/
      e[62]), i(n, "x", "0"), i(n, "y", "-5%"), i(n, "width", "100%"), i(n, "height", "130%");
    },
    m(a, c) {
      B(a, n, c), Z(n, t), Z(n, s), Z(s, l), Z(s, f);
    },
    p(a, c) {
      c[0] & /*textAnnotations*/
      4 && o !== (o = /*style*/
      a[56].bgColor) && i(t, "flood-color", o), c[0] & /*textAnnotations*/
      4 && r !== (r = "a9s-tb-" + /*i*/
      a[62]) && i(n, "id", r);
    },
    d(a) {
      a && j(n);
    }
  };
}
function fs(e, n) {
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
    m(l, f) {
      B(l, t, f), s && s.m(l, f), B(l, o, f);
    },
    p(l, f) {
      n = l, /*selector*/
      n[53] && /*editingId*/
      n[6] !== /*id*/
      n[52] ? s ? s.p(Pt(n), f) : (s = is(Pt(n)), s.c(), s.m(o.parentNode, o)) : s && (s.d(1), s = null);
    },
    d(l) {
      l && (j(t), j(o)), s && s.d(l);
    }
  };
}
function as(e) {
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
    m(f, r) {
      s && s.m(f, r), B(f, n, r), l && l.m(f, r), B(f, o, r);
    },
    p(f, r) {
      /*editingId*/
      f[6] !== /*id*/
      f[52] ? s ? s.p(f, r) : (s = cs(f), s.c(), s.m(n.parentNode, n)) : s && (s.d(1), s = null), r[0] & /*editingId, textAnnotations, selectedIds*/
      1092 && (t = /*editingId*/
      f[6] === /*id*/
      f[52] || /*selectedIds*/
      f[10].includes(
        /*id*/
        f[52]
      )), t ? l ? l.p(Tt(f), r) : (l = us(Tt(f)), l.c(), l.m(o.parentNode, o)) : l && (l.d(1), l = null);
    },
    d(f) {
      f && (j(n), j(o)), s && s.d(f), l && l.d(f);
    }
  };
}
function cs(e) {
  let n, t, o = (
    /*displayText*/
    e[66] + ""
  ), s, l, f, r, a, c, u, p;
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
      e[64].x), i(t, "y", f = /*pt*/
      e[64].y), i(t, "font-size", r = /*fs*/
      e[58]), i(t, "font-family", "sans-serif"), i(t, "style", a = /*svgTextStyle*/
      e[25](
        /*style*/
        e[56]
      )), i(t, "filter", c = /*hasBg*/
      e[65] ? `url(#a9s-tb-${/*i*/
      e[62]})` : null), Ue(n, "pointer-events", "auto"), Ue(n, "cursor", "pointer");
    },
    m(g, h) {
      B(g, n, h), Z(n, t), Z(t, s), u || (p = [
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
      2052 && f !== (f = /*pt*/
      e[64].y) && i(t, "y", f), h[0] & /*textAnnotations*/
      4 && r !== (r = /*fs*/
      e[58]) && i(t, "font-size", r), h[0] & /*textAnnotations*/
      4 && a !== (a = /*svgTextStyle*/
      e[25](
        /*style*/
        e[56]
      )) && i(t, "style", a), h[0] & /*textAnnotations*/
      4 && c !== (c = /*hasBg*/
      e[65] ? `url(#a9s-tb-${/*i*/
      e[62]})` : null) && i(t, "filter", c);
    },
    d(g) {
      g && j(n), u = !1, Oe(p);
    }
  };
}
function us(e) {
  let n, t, o, s, l, f, r, a, c, u, p, d, _, g, h, E, A, I, y, b, k;
  function M(...w) {
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
  function O(...w) {
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
      e[74]), i(t, "height", f = /*textH*/
      e[69]), i(t, "fill", "none"), i(t, "stroke", "#888888"), i(t, "stroke-width", "1"), i(t, "stroke-dasharray", "3 3"), i(t, "vector-effect", "non-scaling-stroke"), i(r, "x", a = /*boxX*/
      e[72]), i(r, "y", c = /*boxY*/
      e[73]), i(r, "width", u = /*boxW*/
      e[74]), i(r, "height", p = /*textH*/
      e[69]), i(r, "fill", "transparent"), Ue(r, "pointer-events", "fill"), Ue(r, "cursor", "move"), i(d, "cx", _ = /*boxX*/
      e[72]), i(d, "cy", g = /*centerY*/
      e[75]), i(d, "r", h = /*anchorR*/
      e[70]), i(d, "fill", "#ff00ba"), i(d, "stroke", "white"), i(d, "stroke-width", "1"), i(d, "vector-effect", "non-scaling-stroke"), Ue(d, "pointer-events", "auto"), Ue(d, "cursor", "ew-resize"), i(E, "cx", A = /*boxX*/
      e[72] + /*boxW*/
      e[74]), i(E, "cy", I = /*centerY*/
      e[75]), i(E, "r", y = /*anchorR*/
      e[70]), i(E, "fill", "#ff00ba"), i(E, "stroke", "white"), i(E, "stroke-width", "1"), i(E, "vector-effect", "non-scaling-stroke"), Ue(E, "pointer-events", "auto"), Ue(E, "cursor", "ew-resize"), Ue(n, "pointer-events", "none");
    },
    m(w, S) {
      B(w, n, S), Z(n, t), Z(n, r), Z(n, d), Z(n, E), b || (k = [
        x(r, "mousedown", M),
        x(d, "mousedown", m),
        x(E, "mousedown", O)
      ], b = !0);
    },
    p(w, S) {
      e = w, S[0] & /*draggingPos, textAnnotations, viewportScale*/
      2084 && o !== (o = /*boxX*/
      e[72]) && i(t, "x", o), S[0] & /*draggingPos, textAnnotations*/
      2052 && s !== (s = /*boxY*/
      e[73]) && i(t, "y", s), S[0] & /*editingId, textAnnotations, editingText, localTexts, viewportScale*/
      230 && l !== (l = /*boxW*/
      e[74]) && i(t, "width", l), S[0] & /*textAnnotations*/
      4 && f !== (f = /*textH*/
      e[69]) && i(t, "height", f), S[0] & /*draggingPos, textAnnotations, viewportScale*/
      2084 && a !== (a = /*boxX*/
      e[72]) && i(r, "x", a), S[0] & /*draggingPos, textAnnotations*/
      2052 && c !== (c = /*boxY*/
      e[73]) && i(r, "y", c), S[0] & /*editingId, textAnnotations, editingText, localTexts, viewportScale*/
      230 && u !== (u = /*boxW*/
      e[74]) && i(r, "width", u), S[0] & /*textAnnotations*/
      4 && p !== (p = /*textH*/
      e[69]) && i(r, "height", p), S[0] & /*draggingPos, textAnnotations, viewportScale*/
      2084 && _ !== (_ = /*boxX*/
      e[72]) && i(d, "cx", _), S[0] & /*draggingPos, textAnnotations*/
      2052 && g !== (g = /*centerY*/
      e[75]) && i(d, "cy", g), S[0] & /*viewportScale*/
      32 && h !== (h = /*anchorR*/
      e[70]) && i(d, "r", h), S[0] & /*draggingPos, textAnnotations, viewportScale, editingId, editingText, localTexts*/
      2278 && A !== (A = /*boxX*/
      e[72] + /*boxW*/
      e[74]) && i(E, "cx", A), S[0] & /*draggingPos, textAnnotations*/
      2052 && I !== (I = /*centerY*/
      e[75]) && i(E, "cy", I), S[0] & /*viewportScale*/
      32 && y !== (y = /*anchorR*/
      e[70]) && i(E, "r", y);
    },
    d(w) {
      w && j(n), b = !1, Oe(k);
    }
  };
}
function ps(e, n) {
  let t, o, s = (
    /*selector*/
    n[53] && as(Mt(n))
  );
  return {
    key: e,
    first: null,
    c() {
      t = Ie(), s && s.c(), o = Ie(), this.first = t;
    },
    m(l, f) {
      B(l, t, f), s && s.m(l, f), B(l, o, f);
    },
    p(l, f) {
      n = l, /*selector*/
      n[53] ? s ? s.p(Mt(n), f) : (s = as(Mt(n)), s.c(), s.m(o.parentNode, o)) : s && (s.d(1), s = null);
    },
    d(l) {
      l && (j(t), j(o)), s && s.d(l);
    }
  };
}
function hs(e) {
  let n, t, o, s, l, f, r;
  function a(...u) {
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
  }), n.$on("change", a), n.$on("delete", c), {
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
      de(n, u, p), B(u, t, p), B(u, o, p), e[38](o), Eo(
        o,
        /*editingText*/
        e[7]
      ), l = !0, f || (r = [
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
      ], f = !0);
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
      u && (j(t), j(o)), me(n, u), e[38](null), f = !1, Oe(r);
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
    m(f, r) {
      B(f, t, r), l && l.m(f, r), B(f, o, r), s = !0;
    },
    p(f, r) {
      n = f, /*selector*/
      n[53] && /*editingId*/
      n[6] === /*id*/
      n[52] ? l ? (l.p(St(n), r), r[0] & /*textAnnotations, editingId*/
      68 && $(l, 1)) : (l = hs(St(n)), l.c(), $(l, 1), l.m(o.parentNode, o)) : l && (Fe(), ne(l, 1, 1, () => {
        l = null;
      }), We());
    },
    i(f) {
      s || ($(l), s = !0);
    },
    o(f) {
      ne(l), s = !1;
    },
    d(f) {
      f && (j(t), j(o)), l && l.d(f);
    }
  };
}
function Or(e) {
  let n, t, o = [], s = /* @__PURE__ */ new Map(), l, f, r, a = [], c = /* @__PURE__ */ new Map(), u = [], p = /* @__PURE__ */ new Map(), d, _ = [], g = /* @__PURE__ */ new Map(), h, E, A = De(
    /*svgAnnotations*/
    e[12]
  );
  const I = (w) => (
    /*ann*/
    w[77].id
  );
  for (let w = 0; w < A.length; w += 1) {
    let S = os(e, A, w), P = I(S);
    s.set(P, o[w] = ls(P, S));
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
    let S = ts(e, y, w), P = b(S);
    c.set(P, a[w] = fs(P, S));
  }
  let k = De(
    /*textAnnotations*/
    e[2]
  );
  const M = (w) => (
    /*id*/
    w[52]
  );
  for (let w = 0; w < k.length; w += 1) {
    let S = ns(e, k, w), P = M(S);
    p.set(P, u[w] = ps(P, S));
  }
  let m = De(
    /*textAnnotations*/
    e[2]
  );
  const O = (w) => (
    /*id*/
    w[52]
  );
  for (let w = 0; w < m.length; w += 1) {
    let S = es(e, m, w), P = O(S);
    g.set(P, _[w] = ds(P, S));
  }
  return {
    c() {
      n = Y("svg"), t = Y("g");
      for (let w = 0; w < o.length; w += 1)
        o[w].c();
      l = te(), f = Y("svg"), r = Y("defs");
      for (let w = 0; w < a.length; w += 1)
        a[w].c();
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
      ), i(n, "preserveAspectRatio", "xMinYMin meet"), i(f, "class", "a9s-tools-overlay svelte-1snhdgd"), i(f, "data-annotation-type", "TEXT"), i(
        f,
        "viewBox",
        /*viewBox*/
        e[4]
      ), i(f, "preserveAspectRatio", "xMinYMin meet"), Ue(f, "pointer-events", "none");
    },
    m(w, S) {
      B(w, n, S), Z(n, t);
      for (let P = 0; P < o.length; P += 1)
        o[P] && o[P].m(t, null);
      B(w, l, S), B(w, f, S), Z(f, r);
      for (let P = 0; P < a.length; P += 1)
        a[P] && a[P].m(r, null);
      for (let P = 0; P < u.length; P += 1)
        u[P] && u[P].m(f, null);
      e[35](f), B(w, d, S);
      for (let P = 0; P < _.length; P += 1)
        _[P] && _[P].m(w, S);
      B(w, h, S), E = !0;
    },
    p(w, S) {
      S[0] & /*svgAnnotations, strokeColor, viewportScale*/
      4129 && (A = De(
        /*svgAnnotations*/
        w[12]
      ), o = Qn(o, S, I, 1, w, A, s, t, gt, ls, null, os)), (!E || S[0] & /*viewBox*/
      16) && i(
        n,
        "viewBox",
        /*viewBox*/
        w[4]
      ), S[0] & /*textAnnotations, getStyle, editingId*/
      32836 && (y = De(
        /*textAnnotations*/
        w[2]
      ), a = Qn(a, S, b, 1, w, y, c, r, gt, fs, null, ts)), S[0] & /*draggingPos, textAnnotations, textPoint, viewportScale, measureTextWidth, editingId, editingText, localTexts, svgFontSize, getStyle, handleTextMouseDown, selectedIds, startEditing, svgTextStyle*/
      42708198 && (k = De(
        /*textAnnotations*/
        w[2]
      ), u = Qn(u, S, M, 1, w, k, p, f, gt, ps, null, ns)), (!E || S[0] & /*viewBox*/
      16) && i(
        f,
        "viewBox",
        /*viewBox*/
        w[4]
      ), S[0] & /*inputStyle, editingStyle, inputScreenPos, textAnnotations, measureTextWidth, editingText, inputEl, onInputKeyDown, commitEdit, applyStyleChange, deleteAnnotation, editingId*/
      91497412 && (m = De(
        /*textAnnotations*/
        w[2]
      ), Fe(), _ = Qn(_, S, O, 1, w, m, g, h.parentNode, ui, ds, h, es), We());
    },
    i(w) {
      if (!E) {
        for (let S = 0; S < m.length; S += 1)
          $(_[S]);
        E = !0;
      }
    },
    o(w) {
      for (let S = 0; S < _.length; S += 1)
        ne(_[S]);
      E = !1;
    },
    d(w) {
      w && (j(n), j(l), j(f), j(d), j(h));
      for (let S = 0; S < o.length; S += 1)
        o[S].d();
      for (let S = 0; S < a.length; S += 1)
        a[S].d();
      for (let S = 0; S < u.length; S += 1)
        u[S].d();
      e[35](null);
      for (let S = 0; S < _.length; S += 1)
        _[S].d(w);
    }
  };
}
function Hr(e, n, t) {
  let o, s, l, f, { anno: r } = n, { strokeColor: a = "#6a6a6a" } = n, c = null, u, p = "0 0 1 1", d = 1, _, g = null, h = "", E = { ...un }, A, I = [], y = {}, b = null, k = null, M = {}, m = null;
  const O = (q, Q) => {
    m || (m = document.createElement("canvas"));
    const N = m.getContext("2d");
    return N.font = `${Q}px sans-serif`, N.measureText(q).width;
  }, w = (q, Q) => {
    if (!u) return { x: 0, y: 0 };
    const N = u.getBoundingClientRect();
    return {
      x: (q - N.left) / d,
      y: (Q - N.top) / d
    };
  }, { store: S } = r.state;
  ni(e, S, (q) => t(29, f = q));
  const P = (q) => {
    var Q;
    return {
      ...un,
      ...((Q = q.properties) == null ? void 0 : Q.textStyle) || {}
    };
  }, L = (q) => {
    const Q = q.geometry;
    return {
      x: Q.anchorX !== void 0 ? Q.anchorX : Q.x,
      y: Q.anchorY !== void 0 ? Q.anchorY : Q.y
    };
  }, G = (q) => (q.fontSize || un.fontSize) / Math.max(d, 1e-3), C = (q, Q) => {
    const { x: N, y: T } = L(q), _e = Q.fontSize || un.fontSize;
    return {
      left: N * d,
      top: T * d - _e
    };
  }, H = () => {
    if (!c) return;
    const { naturalWidth: q, naturalHeight: Q } = c;
    !q || !Q || (t(4, p = `0 0 ${q} ${Q}`), t(5, d = c.getBoundingClientRect().width / q));
  }, z = async (q) => {
    var Q, N, T;
    ((T = (N = (Q = q.target) == null ? void 0 : Q.selector) == null ? void 0 : N.properties) == null ? void 0 : T.toolType) === "text" && (t(6, g = q.id), t(7, h = ""), t(8, E = P(q.target.selector)), await Vn(), A == null || A.focus());
  }, R = async (q) => {
    var N, T;
    const Q = o.find((_e) => _e.id === q);
    if (Q) {
      g && g !== q && F();
      try {
        r.state.selection.setSelected(q);
      } catch {
      }
      t(6, g = q), t(7, h = y[q] ?? ((T = (N = Q.bodies) == null ? void 0 : N[0]) == null ? void 0 : T.value) ?? ""), t(8, E = P(Q.target.selector)), await Vn(), A == null || A.focus();
    }
  }, U = (q) => {
    var T, _e, ke;
    if (t(10, I = (q == null ? void 0 : q.map((ie) => ie.id)) || []), !(q != null && q.length)) return;
    const Q = q[0];
    !(((ke = (_e = (T = Q == null ? void 0 : Q.target) == null ? void 0 : T.selector) == null ? void 0 : _e.properties) == null ? void 0 : ke.toolType) === "text") && g && F();
  }, F = () => {
    if (!g) return;
    const q = g, Q = h, N = o.find((T) => T.id === q);
    if (N) {
      const T = Q.trim() ? [
        {
          type: "TextualBody",
          value: Q,
          purpose: "commenting"
        }
      ] : [], _e = (E.fontSize || un.fontSize) / Math.max(d, 1e-3), ke = O(Q || "Type...", _e), ie = 8 / Math.max(d, 1e-3);
      N.target.selector.geometry;
      const ye = L(N.target.selector), Ke = ye.x - ie, qe = ye.y - _e, Ze = ye.x + ke + ie, ln = ye.y + _e * 0.2, nn = {
        bounds: { minX: Ke, minY: qe, maxX: Ze, maxY: ln },
        x: Ke,
        y: qe,
        w: Ze - Ke,
        h: ln - qe,
        anchorX: ye.x,
        anchorY: ye.y
      };
      if (r.updateAnnotation({
        ...N,
        bodies: T,
        target: {
          ...N.target,
          selector: {
            ...N.target.selector,
            geometry: nn,
            properties: {
              ...N.target.selector.properties,
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
    const N = o.find((T) => T.id === q);
    N && (r.updateAnnotation({
      ...N,
      target: {
        ...N.target,
        selector: {
          ...N.target.selector,
          properties: {
            ...N.target.selector.properties,
            textStyle: Q
          }
        }
      }
    }), g === q && t(8, E = Q));
  }, X = (q) => {
    g === q && (t(6, g = null), t(7, h = ""));
    const { [q]: Q, ...N } = y;
    t(1, y = N), r.removeAnnotation(q);
  }, V = (q, Q, N) => {
    if (q.button !== 0) return;
    q.stopPropagation();
    const T = w(q.clientX, q.clientY);
    k = { x: T.x - N.x, y: T.y - N.y }, b = Q;
  }, J = (q) => {
    if (!b || !k) return;
    const Q = w(q.clientX, q.clientY);
    t(11, M = {
      [b]: {
        x: Q.x - k.x,
        y: Q.y - k.y
      }
    });
  }, ee = () => {
    var Q, N, T, _e;
    if (!b) return;
    const q = M[b];
    if (q) {
      const ke = o.find((ie) => ie.id === b);
      if (ke) {
        const ie = ke.target.selector.geometry, ye = L(ke.target.selector), Ke = q.x - ye.x, qe = q.y - ye.y;
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
                  minY: (((N = ie.bounds) == null ? void 0 : N.minY) ?? ie.y) + qe,
                  maxX: (((T = ie.bounds) == null ? void 0 : T.maxX) ?? ie.x) + Ke,
                  maxY: (((_e = ie.bounds) == null ? void 0 : _e.maxY) ?? ie.y) + qe
                }
              }
            }
          }
        });
      }
    }
    b = null, k = null, t(11, M = {});
  }, W = (q) => {
    q.stopPropagation(), (q.key === "Enter" || q.key === "Escape") && (F(), r.cancelSelected());
  }, se = (q) => [
    `font-weight:${q.bold ? "bold" : "normal"}`,
    q.italic ? "font-style:italic" : "",
    q.underline ? "text-decoration:underline" : ""
  ].filter(Boolean).join(";"), ve = (q, Q, N) => [
    `left:${Q.left}px`,
    `top:${Q.top}px`,
    `width:${N}px`,
    `height:${(q.fontSize || un.fontSize) * 1.2}px`,
    `font-size:${q.fontSize || un.fontSize}px`,
    q.bold ? "font-weight:bold" : "",
    q.italic ? "font-style:italic" : "",
    q.underline ? "text-decoration:underline" : "",
    q.bgColor && q.bgColor !== "transparent" ? `background:${q.bgColor}` : ""
  ].filter(Boolean).join(";");
  sn(() => {
    c = r.element.querySelector("img"), c && (c.complete && H(), c.addEventListener("load", H), window.ResizeObserver && (_ = new ResizeObserver(H), _.observe(c)), r.on("createAnnotation", z), r.on("selectionChanged", U), window.addEventListener("mousemove", J), window.addEventListener("mouseup", ee));
  }), fi(() => {
    c == null || c.removeEventListener("load", H), _ == null || _.disconnect(), r.off("createAnnotation", z), r.off("selectionChanged", U), window.removeEventListener("mousemove", J), window.removeEventListener("mouseup", ee);
  });
  const oe = (q, Q, N) => V(N, q, Q), He = (q) => R(q), ce = (q, Q, N) => V(N, q, Q), Ee = (q, Q, N) => V(N, q, Q), ue = (q, Q, N) => V(N, q, Q);
  function je(q) {
    mn[q ? "unshift" : "push"](() => {
      u = q, t(3, u);
    });
  }
  const pe = (q, Q) => D(q, Q.detail), Be = (q) => X(q);
  function Se(q) {
    mn[q ? "unshift" : "push"](() => {
      A = q, t(9, A);
    });
  }
  function K() {
    h = this.value, t(7, h);
  }
  return e.$$set = (q) => {
    "anno" in q && t(27, r = q.anno), "strokeColor" in q && t(0, a = q.strokeColor);
  }, e.$$.update = () => {
    if (e.$$.dirty[0] & /*$store*/
    536870912 && t(28, o = f), e.$$.dirty[0] & /*allAnnotations*/
    268435456 && t(12, s = o.reduce(
      (q, Q) => {
        var _e, ke;
        const N = (_e = Q.target) == null ? void 0 : _e.selector, T = (ke = N == null ? void 0 : N.properties) == null ? void 0 : ke.toolType;
        if (!N) return q;
        if (T === "arrow") {
          const ie = N.geometry.points, [ye, Ke] = ie[0], [qe, Ze] = ie[1], ln = Math.atan2(Ze - Ke, qe - ye), nn = 25, Zn = [
            `${qe - nn * Math.cos(ln - Math.PI / 6)},${Ze - nn * Math.sin(ln - Math.PI / 6)}`,
            `${qe},${Ze}`,
            `${qe - nn * Math.cos(ln + Math.PI / 6)},${Ze - nn * Math.sin(ln + Math.PI / 6)}`
          ].join(" ");
          q.push({
            id: Q.id,
            toolType: "arrow",
            arrowheadStr: Zn
          });
        } else if (T === "distance") {
          const ie = N.geometry.points.map((tn) => tn.point), [ye, Ke] = ie[0], [qe, Ze] = ie[ie.length - 1];
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
      var Q, N, T;
      return {
        id: q.id,
        annotation: q,
        selector: (Q = q.target) == null ? void 0 : Q.selector,
        text: (T = (N = q.bodies) == null ? void 0 : N[0]) == null ? void 0 : T.value
      };
    }).filter(({ selector: q }) => {
      var Q;
      return ((Q = q == null ? void 0 : q.properties) == null ? void 0 : Q.toolType) === "text";
    })), e.$$.dirty[0] & /*textAnnotations, localTexts*/
    6)
      for (const { id: q, text: Q } of l)
        Q && y[q] === void 0 && t(1, y = { ...y, [q]: Q });
  }, [
    a,
    y,
    l,
    u,
    p,
    d,
    g,
    h,
    E,
    A,
    I,
    M,
    s,
    O,
    S,
    P,
    L,
    G,
    C,
    R,
    F,
    D,
    X,
    V,
    W,
    se,
    ve,
    r,
    o,
    f,
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
  let n, t, o, s, l, f = (
    /*isClosable*/
    e[1] && gs(e)
  );
  return {
    c() {
      n = Y("path"), o = Y("path"), f && f.c(), l = Ie(), i(n, "class", t = rn(`a9s-outer ${/*isClosable*/
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
    m(r, a) {
      B(r, n, a), B(r, o, a), f && f.m(r, a), B(r, l, a);
    },
    p(r, a) {
      a & /*isClosable*/
      2 && t !== (t = rn(`a9s-outer ${/*isClosable*/
      r[1] ? "closed" : "open"}`) + " svelte-1fo8cp4") && i(n, "class", t), a & /*pathString*/
      4 && i(
        n,
        "d",
        /*pathString*/
        r[2]
      ), a & /*isClosable*/
      2 && s !== (s = rn(`a9s-inner ${/*isClosable*/
      r[1] ? "closed" : "open"}`) + " svelte-1fo8cp4") && i(o, "class", s), a & /*pathString*/
      4 && i(
        o,
        "d",
        /*pathString*/
        r[2]
      ), /*isClosable*/
      r[1] ? f ? f.p(r, a) : (f = gs(r), f.c(), f.m(l.parentNode, l)) : f && (f.d(1), f = null);
    },
    d(r) {
      r && (j(n), j(o), j(l)), f && f.d(r);
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
      B(s, n, l);
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
      s && j(n);
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
      B(o, n, s), t && t.m(n, null);
    },
    p(o, [s]) {
      /*pathString*/
      o[2] ? t ? t.p(o, s) : (t = ms(o), t.c(), t.m(n, null)) : t && (t.d(1), t = null);
    },
    i: Te,
    o: Te,
    d(o) {
      o && j(n), t && t.d();
    }
  };
}
const Nr = 20, Ar = 1500;
function Dr(e, n, t) {
  let o, s, l;
  const f = en();
  let { addEventListener: r } = n, { drawingMode: a } = n, { transform: c } = n, { viewportScale: u = 1 } = n, p, d = [], _, g = !1, h;
  const E = (k) => {
    const M = k, { timeStamp: m, offsetX: O, offsetY: w } = M;
    if (p = { timeStamp: m, offsetX: O, offsetY: w }, a === "drag" && d.length === 0) {
      const S = c.elementToImage(M.offsetX, M.offsetY);
      d.push(S), t(8, _ = S);
    }
  }, A = (k) => {
    const M = k;
    if (h && clearTimeout(h), d.length > 0) {
      if (t(8, _ = c.elementToImage(M.offsetX, M.offsetY)), d.length > 2) {
        const m = fn(_, d[0]) * u;
        t(1, g = m < Nr);
      }
      M.pointerType === "touch" && (h = setTimeout(
        () => {
          y();
        },
        Ar
      ));
    }
  }, I = (k) => {
    const M = k;
    if (h && clearTimeout(h), a === "click") {
      const m = M.timeStamp - p.timeStamp, O = fn([p.offsetX, p.offsetY], [M.offsetX, M.offsetY]);
      if (m > 300 || O > 15) return;
      if (g)
        b();
      else if (d.length === 0) {
        const w = c.elementToImage(M.offsetX, M.offsetY);
        d.push(w), t(8, _ = w);
      } else
        d.push(_);
    } else {
      if (d.length === 1 && fn(d[0], _) <= 4) {
        t(0, d = []), t(8, _ = void 0);
        return;
      }
      M.stopImmediatePropagation(), g ? b() : d.push(_);
    }
  }, y = () => {
    if (!_) return;
    const k = d.slice(0, -1);
    if (k.length < 2) return;
    const M = {
      type: Le.POLYLINE,
      geometry: {
        bounds: Xe(k),
        points: k.map((m) => ({ type: "CORNER", point: m }))
      }
    };
    t(0, d = []), t(8, _ = void 0), f("create", M);
  }, b = () => {
    const k = {
      type: Le.POLYLINE,
      geometry: {
        bounds: Xe(d),
        points: d.map((M) => ({ type: "CORNER", point: M })),
        closed: !0
      }
    };
    t(0, d = []), t(8, _ = void 0), f("create", k);
  };
  return sn(() => {
    r("pointerdown", E, !0), r("pointermove", A), r("pointerup", I, !0), r("dblclick", y, !0);
  }), e.$$set = (k) => {
    "addEventListener" in k && t(4, r = k.addEventListener), "drawingMode" in k && t(5, a = k.drawingMode), "transform" in k && t(6, c = k.transform), "viewportScale" in k && t(7, u = k.viewportScale);
  }, e.$$.update = () => {
    e.$$.dirty & /*viewportScale*/
    128 && t(3, o = 4 / u), e.$$.dirty & /*cursor, isClosable, points*/
    259 && t(9, s = _ ? g ? d : [...d, _] : []), e.$$.dirty & /*coords, isClosable*/
    514 && t(2, l = s.length > 0 ? `M ${s[0][0]},${s[0][1]}` + s.slice(1).map(([k, M]) => ` L ${k},${M}`).join("") + (g ? " Z" : "") : "");
  }, [
    d,
    g,
    l,
    o,
    r,
    a,
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
  const { points: o, closed: s } = e.geometry, l = o[n], f = n === 0 ? s ? o.length - 1 : null : n - 1, r = n === o.length - 1 ? s ? 0 : null : n + 1;
  let a = 0, c = 0;
  if (f !== null && r !== null) {
    const p = o[f].point, d = o[r].point;
    a = d[0] - p[0], c = d[1] - p[1];
  } else if (f !== null) {
    const p = o[f].point;
    a = l.point[0] - p[0], c = l.point[1] - p[1];
  } else if (r !== null) {
    const p = o[r].point;
    a = p[0] - l.point[0], c = p[1] - l.point[1];
  }
  const u = Math.sqrt(a * a + c * c);
  if (u > 0) {
    const p = Math.min(0.3 * u, 100 / t);
    a = a / u * p, c = c / u * p;
  }
  return [a, c];
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
    const [s, l] = jr(e, n, t), f = o.point, r = o.inHandle || [
      f[0] - s,
      f[1] - l
    ], a = o.outHandle || [
      f[0] + s,
      f[1] + l
    ];
    return {
      ...e,
      geometry: {
        ...e.geometry,
        points: e.geometry.points.map((c, u) => u === n ? {
          ...c,
          type: "CURVE",
          inHandle: r,
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
    m(f, r) {
      B(f, n, r), s || (l = x(
        n,
        "pointerdown",
        /*pointerdown_handler_1*/
        e[8]
      ), s = !0);
    },
    p(f, r) {
      r & /*controlPoint*/
      2 && t !== (t = /*controlPoint*/
      f[1][0]) && i(n, "cx", t), r & /*controlPoint*/
      2 && o !== (o = /*controlPoint*/
      f[1][1]) && i(n, "cy", o), r & /*handleRadius*/
      8 && i(
        n,
        "r",
        /*handleRadius*/
        f[3]
      );
    },
    d(f) {
      f && j(n), s = !1, l();
    }
  };
}
function Yr(e) {
  let n, t, o, s, l, f, r, a, c;
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
      ), i(l, "class", "a9s-tangent-handle pointer-none svelte-103tdqm"), i(l, "cx", f = /*controlPoint*/
      e[1][0]), i(l, "cy", r = /*controlPoint*/
      e[1][1]), i(
        l,
        "r",
        /*handleRadius*/
        e[3]
      );
    },
    m(u, p) {
      B(u, n, p), B(u, l, p), a || (c = [
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
      ], a = !0);
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
      2 && f !== (f = /*controlPoint*/
      u[1][0]) && i(l, "cx", f), p & /*controlPoint*/
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
      u && (j(n), j(l)), a = !1, Oe(c);
    }
  };
}
function qr(e) {
  let n, t, o, s, l, f, r, a, c, u, p;
  function d(h, E) {
    return an ? Yr : Gr;
  }
  let g = d()(e);
  return {
    c() {
      n = Y("g"), t = Y("line"), r = Y("line"), g.c(), i(t, "class", "a9s-tangent-line a9s-outer svelte-103tdqm"), i(t, "x1", o = /*corner*/
      e[0][0]), i(t, "y1", s = /*corner*/
      e[0][1]), i(t, "x2", l = /*controlPoint*/
      e[1][0]), i(t, "y2", f = /*controlPoint*/
      e[1][1]), i(r, "class", "a9s-tangent-line a9s-inner svelte-103tdqm"), i(r, "x1", a = /*corner*/
      e[0][0]), i(r, "y1", c = /*corner*/
      e[0][1]), i(r, "x2", u = /*controlPoint*/
      e[1][0]), i(r, "y2", p = /*controlPoint*/
      e[1][1]), i(n, "class", "a9s-bezier-handle svelte-103tdqm");
    },
    m(h, E) {
      B(h, n, E), Z(n, t), Z(n, r), g.m(n, null);
    },
    p(h, [E]) {
      E & /*corner*/
      1 && o !== (o = /*corner*/
      h[0][0]) && i(t, "x1", o), E & /*corner*/
      1 && s !== (s = /*corner*/
      h[0][1]) && i(t, "y1", s), E & /*controlPoint*/
      2 && l !== (l = /*controlPoint*/
      h[1][0]) && i(t, "x2", l), E & /*controlPoint*/
      2 && f !== (f = /*controlPoint*/
      h[1][1]) && i(t, "y2", f), E & /*corner*/
      1 && a !== (a = /*corner*/
      h[0][0]) && i(r, "x1", a), E & /*corner*/
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
      h && j(n), g.d();
    }
  };
}
function zr(e, n, t) {
  let o, { corner: s } = n, { controlPoint: l } = n, { viewportScale: f = 1 } = n, r = !1;
  const a = (d) => {
    d.pointerType === "touch" && t(2, r = !0);
  }, c = () => t(2, r = !1);
  function u(d) {
    he.call(this, e, d);
  }
  function p(d) {
    he.call(this, e, d);
  }
  return e.$$set = (d) => {
    "corner" in d && t(0, s = d.corner), "controlPoint" in d && t(1, l = d.controlPoint), "viewportScale" in d && t(6, f = d.viewportScale);
  }, e.$$.update = () => {
    e.$$.dirty & /*viewportScale*/
    64 && t(3, o = 4 / f);
  }, [
    s,
    l,
    r,
    o,
    a,
    c,
    f,
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
  let n, t, o, s, l, f, r, a, c, u;
  return {
    c() {
      n = Y("mask"), t = Y("rect"), r = Y("circle"), i(t, "x", o = /*mask*/
      e[9].x), i(t, "y", s = /*mask*/
      e[9].y), i(t, "width", l = /*mask*/
      e[9].w), i(t, "height", f = /*mask*/
      e[9].h), i(t, "class", "svelte-sq8d4p"), i(r, "cx", a = /*point*/
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
      B(p, n, d), Z(n, t), Z(n, r);
    },
    p(p, d) {
      d[0] & /*mask*/
      512 && o !== (o = /*mask*/
      p[9].x) && i(t, "x", o), d[0] & /*mask*/
      512 && s !== (s = /*mask*/
      p[9].y) && i(t, "y", s), d[0] & /*mask*/
      512 && l !== (l = /*mask*/
      p[9].w) && i(t, "width", l), d[0] & /*mask*/
      512 && f !== (f = /*mask*/
      p[9].h) && i(t, "height", f), d[0] & /*midpoints, visibleMidpoint*/
      2112 && a !== (a = /*point*/
      p[31][0]) && i(r, "cx", a), d[0] & /*midpoints, visibleMidpoint*/
      2112 && c !== (c = /*point*/
      p[31][1]) && i(r, "cy", c), d[0] & /*viewportScale*/
      8 && u !== (u = Bt / /*viewportScale*/
      p[3]) && i(r, "r", u);
    },
    d(p) {
      p && j(n);
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
      o && o.m(s, l), B(s, n, l), t = !0;
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
      s && j(n), o && o.d(s);
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
    m(f, r) {
      s && s.m(f, r), B(f, n, r), l && l.m(f, r), B(f, t, r), o = !0;
    },
    p(f, r) {
      /*corner*/
      f[36].inHandle ? s ? (s.p(f, r), r[0] & /*geom, selectedCorners*/
      288 && $(s, 1)) : (s = vs(f), s.c(), $(s, 1), s.m(n.parentNode, n)) : s && (Fe(), ne(s, 1, 1, () => {
        s = null;
      }), We()), /*corner*/
      f[36].outHandle ? l ? (l.p(f, r), r[0] & /*geom, selectedCorners*/
      288 && $(l, 1)) : (l = Es(f), l.c(), $(l, 1), l.m(t.parentNode, t)) : l && (Fe(), ne(l, 1, 1, () => {
        l = null;
      }), We());
    },
    i(f) {
      o || ($(s), $(l), o = !0);
    },
    o(f) {
      ne(s), ne(l), o = !1;
    },
    d(f) {
      f && (j(n), j(t)), s && s.d(f), l && l.d(f);
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
  let n, t, o, s, l, f, r, a, c, u, p, d, _, g, h, E, A, I, y, b = (
    /*visibleMidpoint*/
    e[6] !== void 0 && !/*isHandleHovered*/
    e[7] && ys(Ht(e))
  ), k = (
    /*selectedCorners*/
    e[8].length === 1 && ws(Ot(e))
  ), M = De(
    /*geom*/
    e[5].points
  ), m = [];
  for (let S = 0; S < M.length; S += 1)
    m[S] = ks(_s(e, M, S));
  const O = (S) => ne(m[S], 1, 1, () => {
    m[S] = null;
  });
  let w = (
    /*visibleMidpoint*/
    e[6] !== void 0 && !/*isHandleHovered*/
    e[7] && Ss(Lt(e))
  );
  return {
    c() {
      n = Y("defs"), b && b.c(), t = te(), o = Y("g"), s = Y("rect"), c = Y("path"), p = Y("path"), _ = te(), k && k.c(), g = te();
      for (let S = 0; S < m.length; S += 1)
        m[S].c();
      h = te(), w && w.c(), E = Ie(), i(s, "x", l = /*mask*/
      e[9].x), i(s, "y", f = /*mask*/
      e[9].y), i(s, "width", r = /*mask*/
      e[9].w), i(s, "height", a = /*mask*/
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
    m(S, P) {
      B(S, n, P), b && b.m(n, null), B(S, t, P), B(S, o, P), Z(o, s), Z(o, c), Z(o, p), B(S, _, P), k && k.m(S, P), B(S, g, P);
      for (let L = 0; L < m.length; L += 1)
        m[L] && m[L].m(S, P);
      B(S, h, P), w && w.m(S, P), B(S, E, P), A = !0, I || (y = [
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
      ], I = !0);
    },
    p(S, P) {
      if (e = S, /*visibleMidpoint*/
      e[6] !== void 0 && !/*isHandleHovered*/
      e[7] ? b ? b.p(Ht(e), P) : (b = ys(Ht(e)), b.c(), b.m(n, null)) : b && (b.d(1), b = null), (!A || P[0] & /*mask*/
      512 && l !== (l = /*mask*/
      e[9].x)) && i(s, "x", l), (!A || P[0] & /*mask*/
      512 && f !== (f = /*mask*/
      e[9].y)) && i(s, "y", f), (!A || P[0] & /*mask*/
      512 && r !== (r = /*mask*/
      e[9].w)) && i(s, "width", r), (!A || P[0] & /*mask*/
      512 && a !== (a = /*mask*/
      e[9].h)) && i(s, "height", a), (!A || P[0] & /*shape*/
      1 && u !== (u = rn(`a9s-outer polyline ${/*shape*/
      e[0].geometry.closed ? "closed" : "open"}`) + " svelte-sq8d4p")) && i(c, "class", u), (!A || P[0] & /*d*/
      1024) && i(
        c,
        "d",
        /*d*/
        e[10]
      ), (!A || P[0] & /*shape*/
      1 && d !== (d = rn(`a9s-inner polyline a9s-shape-handle ${/*shape*/
      e[0].geometry.closed ? "closed" : "open"}`) + " svelte-sq8d4p")) && i(p, "class", d), (!A || P[0] & /*computedStyle*/
      2) && i(
        p,
        "style",
        /*computedStyle*/
        e[1]
      ), (!A || P[0] & /*d*/
      1024) && i(
        p,
        "d",
        /*d*/
        e[10]
      ), /*selectedCorners*/
      e[8].length === 1 ? k ? (k.p(Ot(e), P), P[0] & /*selectedCorners*/
      256 && $(k, 1)) : (k = ws(Ot(e)), k.c(), $(k, 1), k.m(g.parentNode, g)) : k && (Fe(), ne(k, 1, 1, () => {
        k = null;
      }), We()), P[0] & /*geom, viewportScale, selectedCorners, onDoubleClick, onEnterHandle, onLeaveHandle, onHandlePointerDown, grab, onHandlePointerUp*/
      1073983784) {
        M = De(
          /*geom*/
          e[5].points
        );
        let L;
        for (L = 0; L < M.length; L += 1) {
          const G = _s(e, M, L);
          m[L] ? (m[L].p(G, P), $(m[L], 1)) : (m[L] = ks(G), m[L].c(), $(m[L], 1), m[L].m(h.parentNode, h));
        }
        for (Fe(), L = M.length; L < m.length; L += 1)
          O(L);
        We();
      }
      /*visibleMidpoint*/
      e[6] !== void 0 && !/*isHandleHovered*/
      e[7] ? w ? (w.p(Lt(e), P), P[0] & /*visibleMidpoint, isHandleHovered*/
      192 && $(w, 1)) : (w = Ss(Lt(e)), w.c(), $(w, 1), w.m(E.parentNode, E)) : w && (Fe(), ne(w, 1, 1, () => {
        w = null;
      }), We());
    },
    i(S) {
      if (!A) {
        $(k);
        for (let P = 0; P < M.length; P += 1)
          $(m[P]);
        $(w), A = !0;
      }
    },
    o(S) {
      ne(k), m = m.filter(Boolean);
      for (let P = 0; P < m.length; P += 1)
        ne(m[P]);
      ne(w), A = !1;
    },
    d(S) {
      S && (j(n), j(t), j(o), j(_), j(g), j(h), j(E)), b && b.d(), k && k.d(S), Xn(m, S), w && w.d(S), I = !1, Oe(y);
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
  let o, s, l, f;
  const r = en();
  let { shape: a } = n, { computedStyle: c } = n, { transform: u } = n, { viewportScale: p = 1 } = n, { svgEl: d } = n, _, g = !1, h = null, E = [], A = !1;
  const I = () => t(7, g = !0), y = () => t(7, g = !1), b = (R) => {
    if (E.length > 0 || !s.some((W) => W.visible)) {
      t(6, _ = void 0);
      return;
    }
    const [U, F] = u.elementToImage(R.offsetX, R.offsetY), D = (W) => Math.pow(W[0] - U, 2) + Math.pow(W[1] - F, 2), X = o.points.reduce((W, se) => D(se.point) < D(W.point) ? se : W), V = s.filter((W) => W.visible).reduce((W, se) => D(se.point) < D(W.point) ? se : W), J = Math.pow(Wr / p, 2);
    D(X.point) < J || D(V.point) < J ? t(6, _ = s.indexOf(V)) : t(6, _ = void 0);
  }, k = () => {
    document.activeElement !== d && d.focus();
  }, M = () => {
    t(8, E = []), k();
  }, m = (R) => {
    t(7, g = !0), R.preventDefault(), R.stopPropagation(), h = performance.now();
  }, O = (R) => (U) => {
    if (!h || performance.now() - h > Fr) return;
    const F = E.includes(R);
    if (U.metaKey || U.ctrlKey || U.shiftKey)
      F ? t(8, E = E.filter((D) => D !== R)) : t(8, E = [...E, R]);
    else {
      const D = Ur(a, R, p);
      r("change", D), t(8, E = [R]);
    }
  }, w = (R) => () => {
    const U = o.points[R];
    if (U.type === "CORNER" || !U.inHandle && !U.outHandle) return;
    const F = o.points.map((V, J) => {
      if (J !== R) return V;
      const ee = { ...V, locked: !0 }, W = U.inHandle || U.outHandle;
      if (!W) return V;
      const se = W[0] - U.point[0], ve = W[1] - U.point[1];
      if (Math.sqrt(se ** 2 + ve ** 2) === 0) return V;
      const He = [U.point[0] - se, U.point[1] - ve];
      return U.inHandle ? (ee.inHandle = U.inHandle, ee.outHandle = He) : U.outHandle && (ee.outHandle = U.outHandle, ee.inHandle = He), ee;
    }), D = Xe(Pn(F, o.closed)), X = {
      ...a,
      geometry: { bounds: D, points: F, closed: o.closed }
    };
    r("change", X);
  }, S = (R, U, F) => {
    const D = R.geometry, [X, V] = F;
    let J;
    if (U === "SHAPE")
      J = D.points.map((W) => ({
        ...W,
        point: [W.point[0] + X, W.point[1] + V],
        inHandle: W.inHandle ? [W.inHandle[0] + X, W.inHandle[1] + V] : void 0,
        outHandle: W.outHandle ? [W.outHandle[0] + X, W.outHandle[1] + V] : void 0
      }));
    else if (U.startsWith("CORNER-")) {
      const W = parseInt(U.split("-")[1]);
      J = D.points.map((se, ve) => ve === W ? {
        ...se,
        point: [se.point[0] + X, se.point[1] + V],
        inHandle: se.inHandle ? [se.inHandle[0] + X, se.inHandle[1] + V] : void 0,
        outHandle: se.outHandle ? [se.outHandle[0] + X, se.outHandle[1] + V] : void 0
      } : se);
    } else if (U.startsWith("IN-") || U.startsWith("OUT-")) {
      const [W, se] = U.split("-"), ve = parseInt(se);
      J = D.points.map((oe, He) => {
        if (He === ve && oe.type === "CURVE") {
          const ce = A ? !1 : oe.locked, Ee = { ...oe, locked: ce };
          if (W === "IN" && oe.inHandle) {
            if (Ee.inHandle = [oe.inHandle[0] + X, oe.inHandle[1] + V], oe.outHandle && ce) {
              const ue = Ee.inHandle[0] - oe.point[0], je = Ee.inHandle[1] - oe.point[1], pe = Math.sqrt(ue ** 2 + je ** 2), Be = Math.sqrt((oe.outHandle[0] - oe.point[0]) ** 2 + (oe.outHandle[1] - oe.point[1]) ** 2);
              pe > 0 && (Ee.outHandle = [
                oe.point[0] - ue / pe * Be,
                oe.point[1] - je / pe * Be
              ]);
            }
          } else if (W === "OUT" && oe.outHandle && (Ee.outHandle = [oe.outHandle[0] + X, oe.outHandle[1] + V], oe.inHandle && ce)) {
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
      ...R,
      geometry: { bounds: ee, points: J, closed: D.closed }
    };
  }, P = (R) => async (U) => {
    U.stopPropagation();
    const F = [
      ...o.points.slice(0, R + 1),
      {
        type: "CORNER",
        point: s[R].point
      },
      ...o.points.slice(R + 1)
    ], D = Xe(Pn(F, o.closed));
    r("change", {
      ...a,
      geometry: { points: F, bounds: D, closed: o.closed }
    }), await Vn();
    const X = [...document.querySelectorAll(".a9s-handle")][R + 1];
    if (X != null && X.firstChild) {
      const V = new PointerEvent(
        "pointerdown",
        {
          bubbles: !0,
          cancelable: !0,
          clientX: U.clientX,
          clientY: U.clientY,
          pointerId: U.pointerId,
          pointerType: U.pointerType,
          isPrimary: U.isPrimary,
          buttons: U.buttons
        }
      );
      X.firstChild.dispatchEvent(V);
    }
  }, L = () => {
    const R = o.closed ? 3 : 2;
    if (o.points.length - E.length < R) return;
    const U = o.points.filter((D, X) => !E.includes(X)), F = Xe(Pn(U, o.closed));
    r("change", {
      ...a,
      geometry: {
        closed: a.geometry.closed,
        bounds: F,
        points: U
      }
    }), t(8, E = []);
  };
  sn(() => {
    const R = (F) => {
      F.altKey && !A && (A = !0), (F.key === "Delete" || F.key === "Backspace") && L();
    }, U = (F) => {
      !F.altKey && A && (A = !1);
    };
    return d.addEventListener("pointermove", b), window.addEventListener("keydown", R), window.addEventListener("keyup", U), () => {
      d.removeEventListener("pointermove", b), window.removeEventListener("keydown", R), window.removeEventListener("keyup", U);
    };
  });
  const G = `polygon-mask-${Math.random().toString(36).substring(2, 12)}`;
  function C(R) {
    he.call(this, e, R);
  }
  function H(R) {
    he.call(this, e, R);
  }
  function z(R) {
    he.call(this, e, R);
  }
  return e.$$set = (R) => {
    "shape" in R && t(0, a = R.shape), "computedStyle" in R && t(1, c = R.computedStyle), "transform" in R && t(2, u = R.transform), "viewportScale" in R && t(3, p = R.viewportScale), "svgEl" in R && t(4, d = R.svgEl);
  }, e.$$.update = () => {
    e.$$.dirty[0] & /*shape*/
    1 && t(5, o = a.geometry), e.$$.dirty[0] & /*geom, viewportScale*/
    40 && t(11, s = an ? [] : o.points.reduce(
      (R, U, F) => {
        const D = F === o.points.length - 1 ? (
          // Last point
          o.closed ? o.points[0] : void 0
        ) : o.points[F + 1];
        if (!D) return R;
        const [X, V] = Br(U, D), ee = Math.sqrt(Math.pow(D.point[0] - X, 2) + Math.pow(D.point[1] - V, 2)) > Zr / p;
        return [...R, { point: [X, V], visible: ee }];
      },
      []
    )), e.$$.dirty[0] & /*geom*/
    32 && t(10, l = _l(o)), e.$$.dirty[0] & /*geom, viewportScale*/
    40 && t(9, f = bn(o.bounds, Bt / p));
  }, [
    a,
    c,
    u,
    p,
    d,
    o,
    _,
    g,
    E,
    f,
    l,
    s,
    I,
    y,
    M,
    m,
    O,
    w,
    S,
    P,
    G,
    C,
    H,
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
  var I, y;
  let n, t, o, s, l, f, r, a, c, u, p, d, _, g, h, E, A;
  return g = new Ye({
    props: {
      class: "a9s-corner-top",
      x: (
        /*points*/
        ((I = e[5][0]) == null ? void 0 : I[0]) ?? /*center*/
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
      n = Y("defs"), t = Y("mask"), o = Y("rect"), a = Y("path"), c = te(), u = Y("path"), p = te(), d = Y("path"), _ = te(), ge(g.$$.fragment), i(o, "x", s = /*mask*/
      e[7].x), i(o, "y", l = /*mask*/
      e[7].y), i(o, "width", f = /*mask*/
      e[7].w), i(o, "height", r = /*mask*/
      e[7].h), i(o, "class", "svelte-1u8dw9g"), i(
        a,
        "d",
        /*pathString*/
        e[8]
      ), i(a, "class", "svelte-1u8dw9g"), i(
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
      B(b, n, k), Z(n, t), Z(t, o), Z(t, a), B(b, c, k), B(b, u, k), B(b, p, k), B(b, d, k), B(b, _, k), de(g, b, k), h = !0, E || (A = [
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
      var m, O;
      e = b, (!h || k & /*mask*/
      128 && s !== (s = /*mask*/
      e[7].x)) && i(o, "x", s), (!h || k & /*mask*/
      128 && l !== (l = /*mask*/
      e[7].y)) && i(o, "y", l), (!h || k & /*mask*/
      128 && f !== (f = /*mask*/
      e[7].w)) && i(o, "width", f), (!h || k & /*mask*/
      128 && r !== (r = /*mask*/
      e[7].h)) && i(o, "height", r), (!h || k & /*pathString*/
      256) && i(
        a,
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
      const M = {};
      k & /*points, center*/
      96 && (M.x = /*points*/
      ((m = e[5][0]) == null ? void 0 : m[0]) ?? /*center*/
      e[6].x), k & /*points, center, outerRadius*/
      608 && (M.y = /*points*/
      ((O = e[5][0]) == null ? void 0 : O[1]) ?? /*center*/
      e[6].y - /*outerRadius*/
      e[9]), k & /*viewportScale*/
      8 && (M.scale = /*viewportScale*/
      e[3]), g.$set(M);
    },
    i(b) {
      h || ($(g.$$.fragment, b), h = !0);
    },
    o(b) {
      ne(g.$$.fragment, b), h = !1;
    },
    d(b) {
      b && (j(n), j(c), j(u), j(p), j(d), j(_)), me(g, b), E = !1, Oe(A);
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
function ef(e, n, t) {
  let o, s, l, f, r, a, c, { shape: u } = n, { computedStyle: p } = n, { transform: d } = n, { viewportScale: _ = 1 } = n, { svgEl: g } = n;
  const h = (b, k, M) => {
    const m = b.geometry, [O, w] = M;
    let S;
    if (k === "SHAPE")
      S = m.points.map(([P, L]) => [P + O, L + w]);
    else if (k === "SCALE") {
      const P = (m.bounds.minX + m.bounds.maxX) / 2, L = (m.bounds.minY + m.bounds.maxY) / 2, G = m.points[0], C = Math.sqrt(Math.pow(G[0] - P, 2) + Math.pow(G[1] - L, 2)), H = G[1] + w, z = Math.sqrt(Math.pow(G[0] - P, 2) + Math.pow(H - L, 2)), R = C > 0 ? z / C : 1;
      S = m.points.map(([U, F]) => [P + (U - P) * R, L + (F - L) * R]);
    } else
      S = m.points;
    return {
      ...b,
      geometry: {
        bounds: Xe(S),
        points: S
      }
    };
  }, E = `star-mask-${Math.random().toString(36).substring(2, 12)}`;
  function A(b) {
    he.call(this, e, b);
  }
  function I(b) {
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
    32 && t(13, f = s.filter((b, k) => k % 2 === 0)), e.$$.dirty & /*outerPoints, center*/
    8256 && t(9, r = f.length > 0 ? Math.sqrt(Math.pow(f[0][0] - l.x, 2) + Math.pow(f[0][1] - l.y, 2)) : 0), e.$$.dirty & /*points*/
    32 && t(8, a = s.length > 0 ? `M ${s[0][0]},${s[0][1]}` + s.slice(1).map(([b, k]) => ` L ${b},${k}`).join("") + " Z" : ""), e.$$.dirty & /*geom, viewportScale*/
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
    a,
    r,
    h,
    E,
    o,
    f,
    A,
    I,
    y
  ];
}
class nf extends Ne {
  constructor(n) {
    super(), Re(this, n, ef, xr, Ce, {
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
      B(o, n, s), B(o, t, s);
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
      o && (j(n), j(t));
    }
  };
}
function tf(e) {
  let n, t = (
    /*pathString*/
    e[0] && Ts(e)
  );
  return {
    c() {
      n = Y("g"), t && t.c(), i(n, "class", "a9s-annotation a9s-rubberband");
    },
    m(o, s) {
      B(o, n, s), t && t.m(n, null);
    },
    p(o, [s]) {
      /*pathString*/
      o[0] ? t ? t.p(o, s) : (t = Ts(o), t.c(), t.m(n, null)) : t && (t.d(1), t = null);
    },
    i: Te,
    o: Te,
    d(o) {
      o && j(n), t && t.d();
    }
  };
}
const Ms = 5, Ps = 0.382;
function of(e, n, t) {
  let o, s;
  const l = en();
  let { addEventListener: f } = n, { drawingMode: r } = n, { transform: a } = n, { viewportScale: c } = n, u, p = 0, d;
  const _ = (I, y, b, k) => {
    const M = [], m = Math.PI / Ms;
    for (let O = 0; O < Ms * 2; O++) {
      const w = O % 2 === 0 ? b : k, S = O * m - Math.PI / 2;
      M.push([I + w * Math.cos(S), y + w * Math.sin(S)]);
    }
    return M;
  }, g = (I) => {
    const y = I;
    d = performance.now(), r === "drag" && (t(5, u = a.elementToImage(y.offsetX, y.offsetY)), t(6, p = 1));
  }, h = (I) => {
    const y = I;
    if (u) {
      const b = a.elementToImage(y.offsetX, y.offsetY);
      t(6, p = Math.sqrt(Math.pow(b[0] - u[0], 2) + Math.pow(b[1] - u[1], 2)));
    }
  }, E = (I) => {
    const y = I, b = performance.now() - d;
    if (r === "click") {
      if (b > 300) return;
      u ? A() : (t(5, u = a.elementToImage(y.offsetX, y.offsetY)), t(6, p = 1));
    } else u && (b > 300 || p > 10 ? (y.stopPropagation(), A()) : (t(5, u = void 0), t(6, p = 0)));
  }, A = () => {
    if (p > 10 && u) {
      const I = p * Ps, y = _(u[0], u[1], p, I), b = {
        type: Le.POLYGON,
        geometry: { bounds: Xe(y), points: y }
      };
      l("create", b);
    }
    t(5, u = void 0), t(6, p = 0);
  };
  return sn(() => {
    f("pointerdown", g), f("pointermove", h), f("pointerup", E, !0);
  }), e.$$set = (I) => {
    "addEventListener" in I && t(1, f = I.addEventListener), "drawingMode" in I && t(2, r = I.drawingMode), "transform" in I && t(3, a = I.transform), "viewportScale" in I && t(4, c = I.viewportScale);
  }, e.$$.update = () => {
    e.$$.dirty & /*center, outerRadius*/
    96 && t(7, o = u ? _(u[0], u[1], p, p * Ps) : []), e.$$.dirty & /*starPoints*/
    128 && t(0, s = o.length > 0 ? `M ${o[0][0]},${o[0][1]}` + o.slice(1).map(([I, y]) => ` L ${I},${y}`).join("") + " Z" : "");
  }, [
    s,
    f,
    r,
    a,
    c,
    u,
    p,
    o
  ];
}
class sf extends Ne {
  constructor(n) {
    super(), Re(this, n, of, tf, Ce, {
      addEventListener: 1,
      drawingMode: 2,
      transform: 3,
      viewportScale: 4
    });
  }
}
function lf(e) {
  let n, t, o, s, l, f, r, a, c, u, p, d, _, g, h, E, A, I, y, b, k, M, m, O, w, S, P, L, G, C, H, z, R, U, F, D, X, V, J, ee, W, se, ve, oe, He, ce, Ee, ue, je, pe, Be, Se, K, q, Q;
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
      n = Y("defs"), t = Y("mask"), o = Y("rect"), a = Y("rect"), _ = te(), g = Y("rect"), y = te(), b = Y("rect"), w = te(), S = Y("rect"), C = te(), H = Y("rect"), F = te(), D = Y("rect"), ee = te(), W = Y("rect"), He = te(), ge(ce.$$.fragment), Ee = te(), ge(ue.$$.fragment), je = te(), ge(pe.$$.fragment), Be = te(), ge(Se.$$.fragment), i(o, "class", "rect-mask-bg svelte-1njczvj"), i(o, "x", s = /*mask*/
      e[6].x), i(o, "y", l = /*mask*/
      e[6].y), i(o, "width", f = /*mask*/
      e[6].w), i(o, "height", r = /*mask*/
      e[6].h), i(a, "class", "rect-mask-fg svelte-1njczvj"), i(a, "x", c = /*geom*/
      e[5].x), i(a, "y", u = /*geom*/
      e[5].y), i(a, "width", p = /*geom*/
      e[5].w), i(a, "height", d = /*geom*/
      e[5].h), i(
        t,
        "id",
        /*maskId*/
        e[8]
      ), i(t, "class", "a9s-rectangle-editor-mask svelte-1njczvj"), i(g, "class", "a9s-outer"), i(g, "mask", `url(#${/*maskId*/
      e[8]})`), i(g, "x", h = /*geom*/
      e[5].x), i(g, "y", E = /*geom*/
      e[5].y), i(g, "width", A = /*geom*/
      e[5].w), i(g, "height", I = /*geom*/
      e[5].h), i(b, "class", "a9s-inner a9s-shape-handle"), i(
        b,
        "style",
        /*computedStyle*/
        e[1]
      ), i(b, "x", k = /*geom*/
      e[5].x), i(b, "y", M = /*geom*/
      e[5].y), i(b, "width", m = /*geom*/
      e[5].w), i(b, "height", O = /*geom*/
      e[5].h), i(S, "class", "a9s-edge-handle a9s-edge-handle-top"), i(S, "x", P = /*geom*/
      e[5].x), i(S, "y", L = /*geom*/
      e[5].y), i(S, "height", 1), i(S, "width", G = /*geom*/
      e[5].w), i(H, "class", "a9s-edge-handle a9s-edge-handle-right"), i(H, "x", z = /*geom*/
      e[5].x + /*geom*/
      e[5].w), i(H, "y", R = /*geom*/
      e[5].y), i(H, "height", U = /*geom*/
      e[5].h), i(H, "width", 1), i(D, "class", "a9s-edge-handle a9s-edge-handle-bottom"), i(D, "x", X = /*geom*/
      e[5].x), i(D, "y", V = /*geom*/
      e[5].y + /*geom*/
      e[5].h), i(D, "height", 1), i(D, "width", J = /*geom*/
      e[5].w), i(W, "class", "a9s-edge-handle a9s-edge-handle-left"), i(W, "x", se = /*geom*/
      e[5].x), i(W, "y", ve = /*geom*/
      e[5].y), i(W, "height", oe = /*geom*/
      e[5].h), i(W, "width", 1);
    },
    m(N, T) {
      B(N, n, T), Z(n, t), Z(t, o), Z(t, a), B(N, _, T), B(N, g, T), B(N, y, T), B(N, b, T), B(N, w, T), B(N, S, T), B(N, C, T), B(N, H, T), B(N, F, T), B(N, D, T), B(N, ee, T), B(N, W, T), B(N, He, T), de(ce, N, T), B(N, Ee, T), de(ue, N, T), B(N, je, T), de(pe, N, T), B(N, Be, T), de(Se, N, T), K = !0, q || (Q = [
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
        x(S, "pointerdown", function() {
          le(
            /*grab*/
            e[12]("TOP")
          ) && e[12]("TOP").apply(this, arguments);
        }),
        x(H, "pointerdown", function() {
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
    p(N, T) {
      e = N, (!K || T & /*mask*/
      64 && s !== (s = /*mask*/
      e[6].x)) && i(o, "x", s), (!K || T & /*mask*/
      64 && l !== (l = /*mask*/
      e[6].y)) && i(o, "y", l), (!K || T & /*mask*/
      64 && f !== (f = /*mask*/
      e[6].w)) && i(o, "width", f), (!K || T & /*mask*/
      64 && r !== (r = /*mask*/
      e[6].h)) && i(o, "height", r), (!K || T & /*geom*/
      32 && c !== (c = /*geom*/
      e[5].x)) && i(a, "x", c), (!K || T & /*geom*/
      32 && u !== (u = /*geom*/
      e[5].y)) && i(a, "y", u), (!K || T & /*geom*/
      32 && p !== (p = /*geom*/
      e[5].w)) && i(a, "width", p), (!K || T & /*geom*/
      32 && d !== (d = /*geom*/
      e[5].h)) && i(a, "height", d), (!K || T & /*geom*/
      32 && h !== (h = /*geom*/
      e[5].x)) && i(g, "x", h), (!K || T & /*geom*/
      32 && E !== (E = /*geom*/
      e[5].y)) && i(g, "y", E), (!K || T & /*geom*/
      32 && A !== (A = /*geom*/
      e[5].w)) && i(g, "width", A), (!K || T & /*geom*/
      32 && I !== (I = /*geom*/
      e[5].h)) && i(g, "height", I), (!K || T & /*computedStyle*/
      2) && i(
        b,
        "style",
        /*computedStyle*/
        e[1]
      ), (!K || T & /*geom*/
      32 && k !== (k = /*geom*/
      e[5].x)) && i(b, "x", k), (!K || T & /*geom*/
      32 && M !== (M = /*geom*/
      e[5].y)) && i(b, "y", M), (!K || T & /*geom*/
      32 && m !== (m = /*geom*/
      e[5].w)) && i(b, "width", m), (!K || T & /*geom*/
      32 && O !== (O = /*geom*/
      e[5].h)) && i(b, "height", O), (!K || T & /*geom*/
      32 && P !== (P = /*geom*/
      e[5].x)) && i(S, "x", P), (!K || T & /*geom*/
      32 && L !== (L = /*geom*/
      e[5].y)) && i(S, "y", L), (!K || T & /*geom*/
      32 && G !== (G = /*geom*/
      e[5].w)) && i(S, "width", G), (!K || T & /*geom*/
      32 && z !== (z = /*geom*/
      e[5].x + /*geom*/
      e[5].w)) && i(H, "x", z), (!K || T & /*geom*/
      32 && R !== (R = /*geom*/
      e[5].y)) && i(H, "y", R), (!K || T & /*geom*/
      32 && U !== (U = /*geom*/
      e[5].h)) && i(H, "height", U), (!K || T & /*geom*/
      32 && X !== (X = /*geom*/
      e[5].x)) && i(D, "x", X), (!K || T & /*geom*/
      32 && V !== (V = /*geom*/
      e[5].y + /*geom*/
      e[5].h)) && i(D, "y", V), (!K || T & /*geom*/
      32 && J !== (J = /*geom*/
      e[5].w)) && i(D, "width", J), (!K || T & /*geom*/
      32 && se !== (se = /*geom*/
      e[5].x)) && i(W, "x", se), (!K || T & /*geom*/
      32 && ve !== (ve = /*geom*/
      e[5].y)) && i(W, "y", ve), (!K || T & /*geom*/
      32 && oe !== (oe = /*geom*/
      e[5].h)) && i(W, "height", oe);
      const _e = {};
      T & /*geom*/
      32 && (_e.x = /*geom*/
      e[5].x), T & /*geom*/
      32 && (_e.y = /*geom*/
      e[5].y), T & /*viewportScale*/
      8 && (_e.scale = /*viewportScale*/
      e[3]), ce.$set(_e);
      const ke = {};
      T & /*geom*/
      32 && (ke.x = /*geom*/
      e[5].x + /*geom*/
      e[5].w), T & /*geom*/
      32 && (ke.y = /*geom*/
      e[5].y), T & /*viewportScale*/
      8 && (ke.scale = /*viewportScale*/
      e[3]), ue.$set(ke);
      const ie = {};
      T & /*geom*/
      32 && (ie.x = /*geom*/
      e[5].x + /*geom*/
      e[5].w), T & /*geom*/
      32 && (ie.y = /*geom*/
      e[5].y + /*geom*/
      e[5].h), T & /*viewportScale*/
      8 && (ie.scale = /*viewportScale*/
      e[3]), pe.$set(ie);
      const ye = {};
      T & /*geom*/
      32 && (ye.x = /*geom*/
      e[5].x), T & /*geom*/
      32 && (ye.y = /*geom*/
      e[5].y + /*geom*/
      e[5].h), T & /*viewportScale*/
      8 && (ye.scale = /*viewportScale*/
      e[3]), Se.$set(ye);
    },
    i(N) {
      K || ($(ce.$$.fragment, N), $(ue.$$.fragment, N), $(pe.$$.fragment, N), $(Se.$$.fragment, N), K = !0);
    },
    o(N) {
      ne(ce.$$.fragment, N), ne(ue.$$.fragment, N), ne(pe.$$.fragment, N), ne(Se.$$.fragment, N), K = !1;
    },
    d(N) {
      N && (j(n), j(_), j(g), j(y), j(b), j(w), j(S), j(C), j(H), j(F), j(D), j(ee), j(W), j(He), j(Ee), j(je), j(Be)), me(ce, N), me(ue, N), me(pe, N), me(Se, N), q = !1, Oe(Q);
    }
  };
}
function rf(e) {
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
          lf,
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
function ff(e, n, t) {
  let o, s, { shape: l } = n, { computedStyle: f } = n, { transform: r } = n, { viewportScale: a = 1 } = n, { svgEl: c } = n;
  const u = (h, E, A) => {
    const I = h.geometry.bounds;
    let [y, b] = [I.minX, I.minY], [k, M] = [I.maxX, I.maxY];
    const [m, O] = A;
    if (E === "SHAPE")
      y += m, k += m, b += O, M += O;
    else {
      switch (E) {
        case "TOP":
        case "TOP_LEFT":
        case "TOP_RIGHT": {
          b += O;
          break;
        }
        case "BOTTOM":
        case "BOTTOM_LEFT":
        case "BOTTOM_RIGHT": {
          M += O;
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
    const w = Math.min(y, k), S = Math.min(b, M), P = Math.abs(k - y), L = Math.abs(M - b);
    return {
      ...h,
      geometry: {
        x: w,
        y: S,
        w: P,
        h: L,
        bounds: {
          minX: w,
          minY: S,
          maxX: w + P,
          maxY: S + L
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
    "shape" in h && t(0, l = h.shape), "computedStyle" in h && t(1, f = h.computedStyle), "transform" in h && t(2, r = h.transform), "viewportScale" in h && t(3, a = h.viewportScale), "svgEl" in h && t(4, c = h.svgEl);
  }, e.$$.update = () => {
    e.$$.dirty & /*shape*/
    1 && t(5, o = l.geometry), e.$$.dirty & /*geom, viewportScale*/
    40 && t(6, s = bn(o.bounds, 2 / a));
  }, [
    l,
    f,
    r,
    a,
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
class af extends Ne {
  constructor(n) {
    super(), Re(this, n, ff, rf, Ce, {
      shape: 0,
      computedStyle: 1,
      transform: 2,
      viewportScale: 3,
      svgEl: 4
    });
  }
}
function cf(e) {
  let n;
  return {
    c() {
      n = Y("g"), i(n, "class", "a9s-annotation a9s-rubberband");
    },
    m(t, o) {
      B(t, n, o);
    },
    p: Te,
    i: Te,
    o: Te,
    d(t) {
      t && j(n);
    }
  };
}
function uf(e, n, t) {
  const o = en();
  let { addEventListener: s } = n, { drawingMode: l } = n, { transform: f } = n, { viewportScale: r = 1 } = n, a = 0;
  const c = (p) => {
    a = performance.now();
  }, u = (p) => {
    const d = p;
    if (performance.now() - a > 400) return;
    const [g, h] = f.elementToImage(d.offsetX, d.offsetY), E = un.fontSize / Math.max(r, 0.01), A = E * 20, I = E * 1.2, y = {
      type: Le.RECTANGLE,
      geometry: {
        bounds: {
          minX: g,
          minY: h - E,
          maxX: g + A,
          maxY: h + E * 0.2
        },
        x: g,
        y: h,
        w: A,
        h: I
      },
      properties: { toolType: "text" }
    };
    o("create", y);
  };
  return sn(() => {
    s("pointerdown", c), s("pointerup", u, !0);
  }), e.$$set = (p) => {
    "addEventListener" in p && t(0, s = p.addEventListener), "drawingMode" in p && t(1, l = p.drawingMode), "transform" in p && t(2, f = p.transform), "viewportScale" in p && t(3, r = p.viewportScale);
  }, [s, l, f, r];
}
class pf extends Ne {
  constructor(n) {
    super(), Re(this, n, uf, cf, Ce, {
      addEventListener: 0,
      drawingMode: 1,
      transform: 2,
      viewportScale: 3
    });
  }
}
const mf = (e) => {
  e.registerDrawingTool("ellipse", gr), e.registerShapeEditor(Le.ELLIPSE, hr), e.registerDrawingTool("line", kr), e.registerDrawingTool("arrow", gi), e.registerShapeEditor(Le.LINE, br), e.registerDrawingTool("path", Xr), e.registerDrawingTool("distance", wi), e.registerShapeEditor(Le.POLYLINE, Jr), e.registerDrawingTool("star", sf), e.registerShapeEditor(Le.POLYGON, nf), e.registerDrawingTool("text", pf), e.registerShapeEditor(Le.RECTANGLE, af);
  const n = Cr(e);
  return {
    setStrokeColor(t) {
      n == null || n.setStrokeColor(t);
    }
  };
};
export {
  mf as mountPlugin
};
//# sourceMappingURL=annotorious-plugin-tools.es.js.map
