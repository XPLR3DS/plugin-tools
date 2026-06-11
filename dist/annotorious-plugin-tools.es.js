var Zs = Object.defineProperty;
var Qs = (e, n, t) => n in e ? Zs(e, n, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[n] = t;
var it = (e, n, t) => Qs(e, typeof n != "symbol" ? n + "" : n, t);
var Js = Object.defineProperty, $s = (e, n, t) => n in e ? Js(e, n, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[n] = t, Vt = (e, n, t) => $s(e, typeof n != "symbol" ? n + "" : n, t);
function bn() {
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
function $e(e) {
  e.forEach(Ls);
}
function Ne(e) {
  return typeof e == "function";
}
function Nn(e, n) {
  return e != e ? n == n : e !== n || e && typeof e == "object" || typeof e == "function";
}
function xs(e) {
  return Object.keys(e).length === 0;
}
function el(e, n, t, o) {
  if (e) {
    const s = Os(e, n, t, o);
    return e[0](s);
  }
}
function Os(e, n, t, o) {
  return e[1] && o ? It(t.ctx.slice(), e[1](o(n))) : t.ctx;
}
function nl(e, n, t, o) {
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
function tl(e, n, t, o, s, l) {
  if (s) {
    const f = Os(n, t, o, l);
    e.p(f, s);
  }
}
function ol(e) {
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
function Te(e, n) {
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
function ie(e) {
  return document.createElementNS("http://www.w3.org/2000/svg", e);
}
function Hs(e) {
  return document.createTextNode(e);
}
function ze() {
  return Hs(" ");
}
function Zn() {
  return Hs("");
}
function ye(e, n, t, o) {
  return e.addEventListener(n, t, o), () => e.removeEventListener(n, t, o);
}
function E(e, n, t) {
  t == null ? e.removeAttribute(n) : e.getAttribute(n) !== t && e.setAttribute(n, t);
}
function sl(e) {
  return Array.from(e.childNodes);
}
function Zt(e, n, t) {
  e.classList.toggle(n, !!t);
}
function ll(e, n, { bubbles: t = !1, cancelable: o = !1 } = {}) {
  return new CustomEvent(e, { detail: n, bubbles: t, cancelable: o });
}
let qn;
function Un(e) {
  qn = e;
}
function Is() {
  if (!qn) throw new Error("Function called outside component initialization");
  return qn;
}
function Cs(e) {
  Is().$$.on_mount.push(e);
}
function Ut() {
  const e = Is();
  return (n, t, { cancelable: o = !1 } = {}) => {
    const s = e.$$.callbacks[n];
    if (s) {
      const l = ll(
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
function Ue(e, n) {
  const t = e.$$.callbacks[n.type];
  t && t.slice().forEach((o) => o.call(this, n));
}
const Mn = [], Qt = [];
let Hn = [];
const Jt = [], Rs = /* @__PURE__ */ Promise.resolve();
let Ct = !1;
function Ns() {
  Ct || (Ct = !0, Rs.then(Ds));
}
function As() {
  return Ns(), Rs;
}
function Rt(e) {
  Hn.push(e);
}
const rt = /* @__PURE__ */ new Set();
let En = 0;
function Ds() {
  if (En !== 0)
    return;
  const e = qn;
  do {
    try {
      for (; En < Mn.length; ) {
        const n = Mn[En];
        En++, Un(n), il(n.$$);
      }
    } catch (n) {
      throw Mn.length = 0, En = 0, n;
    }
    for (Un(null), Mn.length = 0, En = 0; Qt.length; ) Qt.pop()();
    for (let n = 0; n < Hn.length; n += 1) {
      const t = Hn[n];
      rt.has(t) || (rt.add(t), t());
    }
    Hn.length = 0;
  } while (Mn.length);
  for (; Jt.length; )
    Jt.pop()();
  Ct = !1, rt.clear(), Un(e);
}
function il(e) {
  if (e.fragment !== null) {
    e.update(), $e(e.before_update);
    const n = e.dirty;
    e.dirty = [-1], e.fragment && e.fragment.p(e.ctx, n), e.after_update.forEach(Rt);
  }
}
function rl(e) {
  const n = [], t = [];
  Hn.forEach((o) => e.indexOf(o) === -1 ? n.push(o) : t.push(o)), t.forEach((o) => o()), Hn = n;
}
const Jn = /* @__PURE__ */ new Set();
let yn;
function Cn() {
  yn = {
    r: 0,
    c: [],
    p: yn
    // parent group
  };
}
function Rn() {
  yn.r || $e(yn.c), yn = yn.p;
}
function we(e, n) {
  e && e.i && (Jn.delete(e), e.i(n));
}
function Me(e, n, t, o) {
  if (e && e.o) {
    if (Jn.has(e)) return;
    Jn.add(e), yn.c.push(() => {
      Jn.delete(e), o && (t && e.d(1), o());
    }), e.o(n);
  } else o && o();
}
function mn(e) {
  return (e == null ? void 0 : e.length) !== void 0 ? e : Array.from(e);
}
function tn(e) {
  e && e.c();
}
function Qe(e, n, t) {
  const { fragment: o, after_update: s } = e.$$;
  o && o.m(n, t), Rt(() => {
    const l = e.$$.on_mount.map(Ls).filter(Ne);
    e.$$.on_destroy ? e.$$.on_destroy.push(...l) : $e(l), e.$$.on_mount = [];
  }), s.forEach(Rt);
}
function Je(e, n) {
  const t = e.$$;
  t.fragment !== null && (rl(t.after_update), $e(t.on_destroy), t.fragment && t.fragment.d(n), t.on_destroy = t.fragment = null, t.ctx = []);
}
function fl(e, n) {
  e.$$.dirty[0] === -1 && (Mn.push(e), Ns(), e.$$.dirty.fill(0)), e.$$.dirty[n / 31 | 0] |= 1 << n % 31;
}
function An(e, n, t, o, s, l, f = null, r = [-1]) {
  const a = qn;
  Un(e);
  const u = e.$$ = {
    fragment: null,
    ctx: [],
    // state
    props: l,
    update: bn,
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
  f && f(u.root);
  let c = !1;
  if (u.ctx = t ? t(e, n.props || {}, (p, d, ...g) => {
    const _ = g.length ? g[0] : d;
    return u.ctx && s(u.ctx[p], u.ctx[p] = _) && (!u.skip_bound && u.bound[p] && u.bound[p](_), c && fl(e, p)), d;
  }) : [], u.update(), c = !0, $e(u.before_update), u.fragment = o ? o(u.ctx) : !1, n.target) {
    if (n.hydrate) {
      const p = sl(n.target);
      u.fragment && u.fragment.l(p), p.forEach(fe);
    } else
      u.fragment && u.fragment.c();
    n.intro && we(e.$$.fragment), Qe(e, n.target, n.anchor), Ds();
  }
  Un(a);
}
class Dn {
  constructor() {
    Vt(this, "$$"), Vt(this, "$$set");
  }
  /** @returns {void} */
  $destroy() {
    Je(this, 1), this.$destroy = bn;
  }
  /**
   * @template {Extract<keyof Events, string>} K
   * @param {K} type
   * @param {((e: Events[K]) => void) | null | undefined} callback
   * @returns {() => void}
   */
  $on(n, t) {
    if (!Ne(t))
      return bn;
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
    this.$$set && !xs(n) && (this.$$.skip_bound = !0, this.$$set(n), this.$$.skip_bound = !1);
  }
}
const al = "4";
typeof window < "u" && (window.__svelte || (window.__svelte = { v: /* @__PURE__ */ new Set() })).v.add(al);
var Pe = /* @__PURE__ */ ((e) => (e.ELLIPSE = "ELLIPSE", e.MULTIPOLYGON = "MULTIPOLYGON", e.POLYGON = "POLYGON", e.POLYLINE = "POLYLINE", e.RECTANGLE = "RECTANGLE", e.LINE = "LINE", e))(Pe || {}), ul = { exports: {} };
(function(e) {
  (function() {
    function n(r, a) {
      var u = r.x - a.x, c = r.y - a.y;
      return u * u + c * c;
    }
    function t(r, a, u) {
      var c = a.x, p = a.y, d = u.x - c, g = u.y - p;
      if (d !== 0 || g !== 0) {
        var _ = ((r.x - c) * d + (r.y - p) * g) / (d * d + g * g);
        _ > 1 ? (c = u.x, p = u.y) : _ > 0 && (c += d * _, p += g * _);
      }
      return d = r.x - c, g = r.y - p, d * d + g * g;
    }
    function o(r, a) {
      for (var u = r[0], c = [u], p, d = 1, g = r.length; d < g; d++)
        p = r[d], n(p, u) > a && (c.push(p), u = p);
      return u !== p && c.push(p), c;
    }
    function s(r, a, u, c, p) {
      for (var d = c, g, _ = a + 1; _ < u; _++) {
        var h = t(r[_], r[a], r[u]);
        h > d && (g = _, d = h);
      }
      d > c && (g - a > 1 && s(r, a, g, c, p), p.push(r[g]), u - g > 1 && s(r, g, u, c, p));
    }
    function l(r, a) {
      var u = r.length - 1, c = [r[0]];
      return s(r, 0, u, a, c), c.push(r[u]), c;
    }
    function f(r, a, u) {
      if (r.length <= 2) return r;
      var c = a !== void 0 ? a * a : 1;
      return r = u ? r : o(r, c), r = l(r, c), r;
    }
    e.exports = f, e.exports.default = f;
  })();
})(ul);
const Xn = (e, n) => n, De = (e) => {
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
    const f = e[s][0], r = e[s][1], a = e[l][0], u = e[l][1];
    r > t != u > t && n < (a - f) * (t - r) / (u - r) + f && (o = !o);
  }
  return o;
}, cl = (e, n = !0) => {
  let t = "M ";
  return e.forEach(([o, s], l) => {
    l === 0 ? t += `${o},${s}` : t += ` L ${o},${s}`;
  }), n && (t += " Z"), t;
}, rn = (e, n) => {
  const t = Math.abs(n[0] - e[0]), o = Math.abs(n[1] - e[1]);
  return Math.sqrt(Math.pow(t, 2) + Math.pow(o, 2));
}, pl = {
  area: (e) => Math.PI * e.geometry.rx * e.geometry.ry,
  intersects: (e, n, t) => {
    const { cx: o, cy: s, rx: l, ry: f } = e.geometry, r = 0, a = Math.cos(r), u = Math.sin(r), c = n - o, p = t - s, d = a * c + u * p, g = u * c - a * p;
    return d * d / (l * l) + g * g / (f * f) <= 1;
  }
};
Xn(Pe.ELLIPSE, pl);
const hl = {
  area: (e) => 0,
  intersects: (e, n, t, o = 2) => {
    const [[s, l], [f, r]] = e.geometry.points, a = Math.abs((r - l) * n - (f - s) * t + f * l - r * s), u = rn([s, l], [f, r]);
    return a / u <= o;
  }
};
Xn(Pe.LINE, hl);
const dl = {
  area: (e) => {
    const { polygons: n } = e.geometry;
    return n.reduce((t, o) => {
      const [s, ...l] = o.rings, f = xn(s.points), r = l.reduce((a, u) => a + xn(u.points), 0);
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
  return De(n);
}, kn = (e) => e.rings.map((n) => cl(n.points)).join(" "), ml = (e) => e.polygons.reduce((n, t) => [
  ...n,
  ...t.rings.reduce((o, s) => [...o, ...s.points], [])
], []);
Xn(Pe.MULTIPOLYGON, dl);
const gl = {
  area: (e) => {
    const n = e.geometry.points;
    return xn(n);
  },
  intersects: (e, n, t) => {
    const o = e.geometry.points;
    return et(o, n, t);
  }
};
Xn(Pe.POLYGON, gl);
const _l = {
  area: (e) => {
    const n = e.geometry;
    if (!n.closed || n.points.length < 3)
      return 0;
    const t = Ln(n.points, n.closed);
    return xn(t);
  },
  intersects: (e, n, t, o = 2) => {
    const s = e.geometry;
    if (s.closed) {
      const l = Ln(s.points, s.closed);
      return et(l, n, t);
    } else
      return yl(s, [n, t], o);
  }
}, Ln = (e, n = !1) => {
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
    const r = f / s, a = Math.pow(1 - r, 3) * e[0] + 3 * Math.pow(1 - r, 2) * r * n[0] + 3 * (1 - r) * Math.pow(r, 2) * t[0] + Math.pow(r, 3) * o[0], u = Math.pow(1 - r, 3) * e[1] + 3 * Math.pow(1 - r, 2) * r * n[1] + 3 * (1 - r) * Math.pow(r, 2) * t[1] + Math.pow(r, 3) * o[1];
    l.push([a, u]);
  }
  return l;
}, yl = (e, n, t) => {
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
  const [o, s] = e, [l, f] = n, [r, a] = t, u = r - l, c = a - f, p = Math.sqrt(u * u + c * c);
  if (p === 0)
    return Math.sqrt((o - l) * (o - l) + (s - f) * (s - f));
  const d = ((o - l) * u + (s - f) * c) / (p * p);
  return d <= 0 ? Math.sqrt((o - l) * (o - l) + (s - f) * (s - f)) : d >= 1 ? Math.sqrt((o - r) * (o - r) + (s - a) * (s - a)) : Math.abs((a - f) * o - (r - l) * s + r * f - a * l) / p;
}, wl = (e) => {
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
Xn(Pe.POLYLINE, _l);
const bl = {
  area: (e) => e.geometry.w * e.geometry.h,
  intersects: (e, n, t) => n >= e.geometry.x && n <= e.geometry.x + e.geometry.w && t >= e.geometry.y && t <= e.geometry.y + e.geometry.h
};
Xn(Pe.RECTANGLE, bl);
const vl = [];
for (let e = 0; e < 256; ++e)
  vl.push((e + 256).toString(16).slice(1));
typeof crypto < "u" && crypto.randomUUID && crypto.randomUUID.bind(crypto);
const El = [];
for (let e = 0; e < 256; ++e)
  El.push((e + 256).toString(16).slice(1));
typeof crypto < "u" && crypto.randomUUID && crypto.randomUUID.bind(crypto);
const kl = "useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict";
let Sl = (e = 21) => {
  let n = "", t = crypto.getRandomValues(new Uint8Array(e |= 0));
  for (; e--; )
    n += kl[t[e] & 63];
  return n;
};
Sl();
const vn = (e, n = 0) => {
  const { minX: t, minY: o, maxX: s, maxY: l } = e;
  return {
    x: t - n,
    y: o - n,
    w: s - t + 2 * n,
    h: l - o + 2 * n
  };
}, fn = typeof window > "u" || typeof navigator > "u" ? !1 : "ontouchstart" in window || navigator.maxTouchPoints > 0 || // @ts-ignore
navigator.msMaxTouchPoints > 0, Tl = (e) => ({}), xt = (e) => ({ grab: (
  /*onGrab*/
  e[0]
) });
function Ml(e) {
  let n, t, o, s;
  const l = (
    /*#slots*/
    e[8].default
  ), f = el(
    l,
    e,
    /*$$scope*/
    e[7],
    xt
  );
  return {
    c() {
      n = ie("g"), f && f.c(), E(n, "class", "a9s-annotation selected");
    },
    m(r, a) {
      ae(r, n, a), f && f.m(n, null), t = !0, o || (s = [
        ye(
          n,
          "pointerup",
          /*onRelease*/
          e[2]
        ),
        ye(
          n,
          "pointermove",
          /*onPointerMove*/
          e[1]
        )
      ], o = !0);
    },
    p(r, [a]) {
      f && f.p && (!t || a & /*$$scope*/
      128) && tl(
        f,
        l,
        r,
        /*$$scope*/
        r[7],
        t ? nl(
          l,
          /*$$scope*/
          r[7],
          a,
          Tl
        ) : ol(
          /*$$scope*/
          r[7]
        ),
        xt
      );
    },
    i(r) {
      t || (we(f, r), t = !0);
    },
    o(r) {
      Me(f, r), t = !1;
    },
    d(r) {
      r && fe(n), f && f.d(r), o = !1, $e(s);
    }
  };
}
function Pl(e, n, t) {
  let { $$slots: o = {}, $$scope: s } = n;
  const l = Ut();
  let { shape: f } = n, { editor: r } = n, { transform: a } = n, { svgEl: u } = n, c, p, d;
  const g = (v) => (N) => {
    if (c = v, u) {
      const { left: L, top: w } = u.getBoundingClientRect(), b = N.clientX - L, k = N.clientY - w;
      p = a.elementToImage(b, k);
    } else {
      const { offsetX: L, offsetY: w } = N;
      p = a.elementToImage(L, w);
    }
    d = f, N.target.setPointerCapture(N.pointerId), l("grab", N);
  }, _ = (v) => {
    if (c) {
      const [N, L] = a.elementToImage(v.offsetX, v.offsetY), w = [N - p[0], L - p[1]];
      t(3, f = r(d, c, w)), l("change", f);
    }
  }, h = (v) => {
    v.target.releasePointerCapture(v.pointerId), c = void 0, d = f, l("release", v);
  };
  return e.$$set = (v) => {
    "shape" in v && t(3, f = v.shape), "editor" in v && t(4, r = v.editor), "transform" in v && t(5, a = v.transform), "svgEl" in v && t(6, u = v.svgEl), "$$scope" in v && t(7, s = v.$$scope);
  }, [
    g,
    _,
    h,
    f,
    r,
    a,
    u,
    s,
    o
  ];
}
class Gt extends Dn {
  constructor(n) {
    super(), An(this, n, Pl, Ml, Nn, {
      shape: 3,
      editor: 4,
      transform: 5,
      svgEl: 6
    });
  }
}
function Ll(e) {
  let n, t, o, s, l, f, r, a, u = (
    /*selected*/
    e[3] && eo(e)
  );
  return {
    c() {
      n = ie("g"), t = ie("circle"), u && u.c(), s = ie("circle"), E(t, "class", "a9s-handle-buffer svelte-qtyc7s"), E(
        t,
        "cx",
        /*x*/
        e[0]
      ), E(
        t,
        "cy",
        /*y*/
        e[1]
      ), E(t, "r", o = /*handleRadius*/
      e[5] + 6 / /*scale*/
      e[2]), E(t, "role", "button"), E(t, "tabindex", "0"), E(s, "class", l = Wt(`a9s-handle-dot${/*selected*/
      e[3] ? " selected" : ""}`) + " svelte-qtyc7s"), E(
        s,
        "cx",
        /*x*/
        e[0]
      ), E(
        s,
        "cy",
        /*y*/
        e[1]
      ), E(
        s,
        "r",
        /*handleRadius*/
        e[5]
      ), E(n, "class", f = `a9s-handle ${/*$$props*/
      e[8].class || ""}`.trim());
    },
    m(c, p) {
      ae(c, n, p), Te(n, t), u && u.m(n, null), Te(n, s), r || (a = [
        ye(
          t,
          "dblclick",
          /*dblclick_handler_1*/
          e[12]
        ),
        ye(
          t,
          "pointerenter",
          /*pointerenter_handler*/
          e[13]
        ),
        ye(
          t,
          "pointerleave",
          /*pointerleave_handler*/
          e[14]
        ),
        ye(
          t,
          "pointerdown",
          /*pointerdown_handler_1*/
          e[15]
        ),
        ye(
          t,
          "pointerdown",
          /*onPointerDown*/
          e[6]
        ),
        ye(
          t,
          "pointerup",
          /*pointerup_handler_1*/
          e[16]
        ),
        ye(
          t,
          "pointerup",
          /*onPointerUp*/
          e[7]
        )
      ], r = !0);
    },
    p(c, p) {
      p & /*x*/
      1 && E(
        t,
        "cx",
        /*x*/
        c[0]
      ), p & /*y*/
      2 && E(
        t,
        "cy",
        /*y*/
        c[1]
      ), p & /*handleRadius, scale*/
      36 && o !== (o = /*handleRadius*/
      c[5] + 6 / /*scale*/
      c[2]) && E(t, "r", o), /*selected*/
      c[3] ? u ? u.p(c, p) : (u = eo(c), u.c(), u.m(n, s)) : u && (u.d(1), u = null), p & /*selected*/
      8 && l !== (l = Wt(`a9s-handle-dot${/*selected*/
      c[3] ? " selected" : ""}`) + " svelte-qtyc7s") && E(s, "class", l), p & /*x*/
      1 && E(
        s,
        "cx",
        /*x*/
        c[0]
      ), p & /*y*/
      2 && E(
        s,
        "cy",
        /*y*/
        c[1]
      ), p & /*handleRadius*/
      32 && E(
        s,
        "r",
        /*handleRadius*/
        c[5]
      ), p & /*$$props*/
      256 && f !== (f = `a9s-handle ${/*$$props*/
      c[8].class || ""}`.trim()) && E(n, "class", f);
    },
    d(c) {
      c && fe(n), u && u.d(), r = !1, $e(a);
    }
  };
}
function Ol(e) {
  let n, t, o, s, l, f, r, a, u;
  return {
    c() {
      n = ie("g"), t = ie("circle"), s = ie("circle"), f = ie("circle"), E(
        t,
        "cx",
        /*x*/
        e[0]
      ), E(
        t,
        "cy",
        /*y*/
        e[1]
      ), E(t, "r", o = /*handleRadius*/
      e[5] * 10), E(t, "class", "a9s-touch-halo"), Zt(
        t,
        "touched",
        /*touched*/
        e[4]
      ), E(
        s,
        "cx",
        /*x*/
        e[0]
      ), E(
        s,
        "cy",
        /*y*/
        e[1]
      ), E(s, "r", l = /*handleRadius*/
      e[5] + 10 / /*scale*/
      e[2]), E(s, "class", "a9s-handle-buffer svelte-qtyc7s"), E(s, "role", "button"), E(s, "tabindex", "0"), E(f, "class", "a9s-handle-dot"), E(
        f,
        "cx",
        /*x*/
        e[0]
      ), E(
        f,
        "cy",
        /*y*/
        e[1]
      ), E(f, "r", r = /*handleRadius*/
      e[5] + 2 / /*scale*/
      e[2]), E(n, "class", "a9s-touch-handle");
    },
    m(c, p) {
      ae(c, n, p), Te(n, t), Te(n, s), Te(n, f), a || (u = [
        ye(
          s,
          "dblclick",
          /*dblclick_handler*/
          e[9]
        ),
        ye(
          s,
          "pointerdown",
          /*pointerdown_handler*/
          e[10]
        ),
        ye(
          s,
          "pointerdown",
          /*onPointerDown*/
          e[6]
        ),
        ye(
          s,
          "pointerup",
          /*pointerup_handler*/
          e[11]
        ),
        ye(
          s,
          "pointerup",
          /*onPointerUp*/
          e[7]
        )
      ], a = !0);
    },
    p(c, p) {
      p & /*x*/
      1 && E(
        t,
        "cx",
        /*x*/
        c[0]
      ), p & /*y*/
      2 && E(
        t,
        "cy",
        /*y*/
        c[1]
      ), p & /*handleRadius*/
      32 && o !== (o = /*handleRadius*/
      c[5] * 10) && E(t, "r", o), p & /*touched*/
      16 && Zt(
        t,
        "touched",
        /*touched*/
        c[4]
      ), p & /*x*/
      1 && E(
        s,
        "cx",
        /*x*/
        c[0]
      ), p & /*y*/
      2 && E(
        s,
        "cy",
        /*y*/
        c[1]
      ), p & /*handleRadius, scale*/
      36 && l !== (l = /*handleRadius*/
      c[5] + 10 / /*scale*/
      c[2]) && E(s, "r", l), p & /*x*/
      1 && E(
        f,
        "cx",
        /*x*/
        c[0]
      ), p & /*y*/
      2 && E(
        f,
        "cy",
        /*y*/
        c[1]
      ), p & /*handleRadius, scale*/
      36 && r !== (r = /*handleRadius*/
      c[5] + 2 / /*scale*/
      c[2]) && E(f, "r", r);
    },
    d(c) {
      c && fe(n), a = !1, $e(u);
    }
  };
}
function eo(e) {
  let n, t;
  return {
    c() {
      n = ie("circle"), E(n, "class", "a9s-handle-selected"), E(
        n,
        "cx",
        /*x*/
        e[0]
      ), E(
        n,
        "cy",
        /*y*/
        e[1]
      ), E(n, "r", t = /*handleRadius*/
      e[5] + 8 / /*scale*/
      e[2]);
    },
    m(o, s) {
      ae(o, n, s);
    },
    p(o, s) {
      s & /*x*/
      1 && E(
        n,
        "cx",
        /*x*/
        o[0]
      ), s & /*y*/
      2 && E(
        n,
        "cy",
        /*y*/
        o[1]
      ), s & /*handleRadius, scale*/
      36 && t !== (t = /*handleRadius*/
      o[5] + 8 / /*scale*/
      o[2]) && E(n, "r", t);
    },
    d(o) {
      o && fe(n);
    }
  };
}
function Hl(e) {
  let n;
  function t(s, l) {
    return fn ? Ol : Ll;
  }
  let o = t()(e);
  return {
    c() {
      o.c(), n = Zn();
    },
    m(s, l) {
      o.m(s, l), ae(s, n, l);
    },
    p(s, [l]) {
      o.p(s, l);
    },
    i: bn,
    o: bn,
    d(s) {
      s && fe(n), o.d(s);
    }
  };
}
function Il(e, n, t) {
  let o, { x: s } = n, { y: l } = n, { scale: f } = n, { selected: r = void 0 } = n, a = !1;
  const u = (w) => {
    w.pointerType === "touch" && t(4, a = !0);
  }, c = () => t(4, a = !1);
  function p(w) {
    Ue.call(this, e, w);
  }
  function d(w) {
    Ue.call(this, e, w);
  }
  function g(w) {
    Ue.call(this, e, w);
  }
  function _(w) {
    Ue.call(this, e, w);
  }
  function h(w) {
    Ue.call(this, e, w);
  }
  function v(w) {
    Ue.call(this, e, w);
  }
  function N(w) {
    Ue.call(this, e, w);
  }
  function L(w) {
    Ue.call(this, e, w);
  }
  return e.$$set = (w) => {
    t(8, n = It(It({}, n), Ft(w))), "x" in w && t(0, s = w.x), "y" in w && t(1, l = w.y), "scale" in w && t(2, f = w.scale), "selected" in w && t(3, r = w.selected);
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
    u,
    c,
    n,
    p,
    d,
    g,
    _,
    h,
    v,
    N,
    L
  ];
}
class On extends Dn {
  constructor(n) {
    super(), An(this, n, Il, Hl, Nn, { x: 0, y: 1, scale: 2, selected: 3 });
  }
}
function Cl(e) {
  let n, t, o, s, l, f, r;
  return {
    c() {
      n = ie("g"), t = ie("circle"), s = ie("circle"), l = ie("circle"), E(t, "class", "a9s-polygon-midpoint-buffer svelte-12ykj76"), E(
        t,
        "cx",
        /*x*/
        e[0]
      ), E(
        t,
        "cy",
        /*y*/
        e[1]
      ), E(t, "r", o = 1.75 * /*handleRadius*/
      e[2]), E(s, "class", "a9s-polygon-midpoint-outer svelte-12ykj76"), E(
        s,
        "cx",
        /*x*/
        e[0]
      ), E(
        s,
        "cy",
        /*y*/
        e[1]
      ), E(
        s,
        "r",
        /*handleRadius*/
        e[2]
      ), E(l, "class", "a9s-polygon-midpoint-inner svelte-12ykj76"), E(
        l,
        "cx",
        /*x*/
        e[0]
      ), E(
        l,
        "cy",
        /*y*/
        e[1]
      ), E(
        l,
        "r",
        /*handleRadius*/
        e[2]
      ), E(n, "class", "a9s-polygon-midpoint svelte-12ykj76");
    },
    m(a, u) {
      ae(a, n, u), Te(n, t), Te(n, s), Te(n, l), f || (r = [
        ye(
          t,
          "pointerdown",
          /*pointerdown_handler*/
          e[5]
        ),
        ye(
          t,
          "pointerdown",
          /*onPointerDown*/
          e[3]
        )
      ], f = !0);
    },
    p(a, u) {
      u & /*x*/
      1 && E(
        t,
        "cx",
        /*x*/
        a[0]
      ), u & /*y*/
      2 && E(
        t,
        "cy",
        /*y*/
        a[1]
      ), u & /*handleRadius*/
      4 && o !== (o = 1.75 * /*handleRadius*/
      a[2]) && E(t, "r", o), u & /*x*/
      1 && E(
        s,
        "cx",
        /*x*/
        a[0]
      ), u & /*y*/
      2 && E(
        s,
        "cy",
        /*y*/
        a[1]
      ), u & /*handleRadius*/
      4 && E(
        s,
        "r",
        /*handleRadius*/
        a[2]
      ), u & /*x*/
      1 && E(
        l,
        "cx",
        /*x*/
        a[0]
      ), u & /*y*/
      2 && E(
        l,
        "cy",
        /*y*/
        a[1]
      ), u & /*handleRadius*/
      4 && E(
        l,
        "r",
        /*handleRadius*/
        a[2]
      );
    },
    d(a) {
      a && fe(n), f = !1, $e(r);
    }
  };
}
function Rl(e) {
  let n;
  return {
    c() {
      n = ie("circle"), E(
        n,
        "cx",
        /*x*/
        e[0]
      ), E(
        n,
        "cy",
        /*y*/
        e[1]
      ), E(
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
      1 && E(
        n,
        "cx",
        /*x*/
        t[0]
      ), o & /*y*/
      2 && E(
        n,
        "cy",
        /*y*/
        t[1]
      ), o & /*handleRadius*/
      4 && E(
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
function Nl(e) {
  let n;
  function t(s, l) {
    return fn ? Rl : Cl;
  }
  let o = t()(e);
  return {
    c() {
      o.c(), n = Zn();
    },
    m(s, l) {
      o.m(s, l), ae(s, n, l);
    },
    p(s, [l]) {
      o.p(s, l);
    },
    i: bn,
    o: bn,
    d(s) {
      s && fe(n), o.d(s);
    }
  };
}
function Al(e, n, t) {
  let o, { x: s } = n, { y: l } = n, { scale: f } = n;
  const r = (u) => {
    u.pointerType;
  };
  function a(u) {
    Ue.call(this, e, u);
  }
  return e.$$set = (u) => {
    "x" in u && t(0, s = u.x), "y" in u && t(1, l = u.y), "scale" in u && t(4, f = u.scale);
  }, e.$$.update = () => {
    e.$$.dirty & /*scale*/
    16 && t(2, o = 4 / f);
  }, [s, l, o, r, f, a];
}
class js extends Dn {
  constructor(n) {
    super(), An(this, n, Al, Nl, Nn, { x: 0, y: 1, scale: 4 });
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
function to(e) {
  let n, t, o, s;
  return {
    c() {
      n = ie("circle"), E(n, "cx", t = /*point*/
      e[28][0]), E(n, "cy", o = /*point*/
      e[28][1]), E(n, "r", s = Yn / /*viewportScale*/
      e[3]), E(n, "class", "svelte-1h2slbm");
    },
    m(l, f) {
      ae(l, n, f);
    },
    p(l, f) {
      f[0] & /*midpoints, visibleMidpoint*/
      1088 && t !== (t = /*point*/
      l[28][0]) && E(n, "cx", t), f[0] & /*midpoints, visibleMidpoint*/
      1088 && o !== (o = /*point*/
      l[28][1]) && E(n, "cy", o), f[0] & /*viewportScale*/
      8 && s !== (s = Yn / /*viewportScale*/
      l[3]) && E(n, "r", s);
    },
    d(l) {
      l && fe(n);
    }
  };
}
function oo(e) {
  let n, t, o, s, l, f, r, a, u, c;
  return {
    c() {
      n = ie("mask"), t = ie("rect"), r = ie("circle"), E(t, "x", o = /*mask*/
      e[9].x), E(t, "y", s = /*mask*/
      e[9].y), E(t, "width", l = /*mask*/
      e[9].w), E(t, "height", f = /*mask*/
      e[9].h), E(t, "class", "svelte-1h2slbm"), E(r, "cx", a = /*point*/
      e[28][0]), E(r, "cy", u = /*point*/
      e[28][1]), E(r, "r", c = Yn / /*viewportScale*/
      e[3]), E(r, "class", "svelte-1h2slbm"), E(n, "id", `${/*maskId*/
      e[19]}-inner`), E(n, "class", "a9s-polygon-editor-mask svelte-1h2slbm");
    },
    m(p, d) {
      ae(p, n, d), Te(n, t), Te(n, r);
    },
    p(p, d) {
      d[0] & /*mask*/
      512 && o !== (o = /*mask*/
      p[9].x) && E(t, "x", o), d[0] & /*mask*/
      512 && s !== (s = /*mask*/
      p[9].y) && E(t, "y", s), d[0] & /*mask*/
      512 && l !== (l = /*mask*/
      p[9].w) && E(t, "width", l), d[0] & /*mask*/
      512 && f !== (f = /*mask*/
      p[9].h) && E(t, "height", f), d[0] & /*midpoints, visibleMidpoint*/
      1088 && a !== (a = /*point*/
      p[28][0]) && E(r, "cx", a), d[0] & /*midpoints, visibleMidpoint*/
      1088 && u !== (u = /*point*/
      p[28][1]) && E(r, "cy", u), d[0] & /*viewportScale*/
      8 && c !== (c = Yn / /*viewportScale*/
      p[3]) && E(r, "r", c);
    },
    d(p) {
      p && fe(n);
    }
  };
}
function so(e) {
  let n, t;
  return n = new On({
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
    Ne(
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
      tn(n.$$.fragment);
    },
    m(o, s) {
      Qe(n, o, s), t = !0;
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
      t || (we(n.$$.fragment, o), t = !0);
    },
    o(o) {
      Me(n.$$.fragment, o), t = !1;
    },
    d(o) {
      Je(n, o);
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
    Ne(
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
      tn(n.$$.fragment);
    },
    m(o, s) {
      Qe(n, o, s), t = !0;
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
      t || (we(n.$$.fragment, o), t = !0);
    },
    o(o) {
      Me(n.$$.fragment, o), t = !1;
    },
    d(o) {
      Je(n, o);
    }
  };
}
function Dl(e) {
  let n, t, o, s, l, f, r, a, u, c, p, d, g, _, h, v, N, L, w, b, k, P = (
    /*visibleMidpoint*/
    e[6] !== void 0 && !/*isHandleHovered*/
    e[7] && to(ct(e))
  ), m = (
    /*visibleMidpoint*/
    e[6] !== void 0 && !/*isHandleHovered*/
    e[7] && oo(ut(e))
  ), O = mn(
    /*geom*/
    e[5].points
  ), y = [];
  for (let T = 0; T < O.length; T += 1)
    y[T] = so(no(e, O, T));
  const M = (T) => Me(y[T], 1, 1, () => {
    y[T] = null;
  });
  let A = (
    /*visibleMidpoint*/
    e[6] !== void 0 && !/*isHandleHovered*/
    e[7] && lo(at(e))
  );
  return {
    c() {
      n = ie("defs"), t = ie("mask"), o = ie("rect"), a = ie("polygon"), P && P.c(), m && m.c(), c = ze(), p = ie("polygon"), g = ze(), _ = ie("polygon"), v = ze();
      for (let T = 0; T < y.length; T += 1)
        y[T].c();
      N = ze(), A && A.c(), L = Zn(), E(o, "x", s = /*mask*/
      e[9].x), E(o, "y", l = /*mask*/
      e[9].y), E(o, "width", f = /*mask*/
      e[9].w), E(o, "height", r = /*mask*/
      e[9].h), E(o, "class", "svelte-1h2slbm"), E(a, "points", u = /*geom*/
      e[5].points.map(io).join(" ")), E(a, "class", "svelte-1h2slbm"), E(t, "id", `${/*maskId*/
      e[19]}-outer`), E(t, "class", "a9s-polygon-editor-mask svelte-1h2slbm"), E(p, "class", "a9s-outer"), E(p, "mask", `url(#${/*maskId*/
      e[19]}-outer)`), E(p, "points", d = /*geom*/
      e[5].points.map(ro).join(" ")), E(_, "class", "a9s-inner a9s-shape-handle"), E(_, "mask", `url(#${/*maskId*/
      e[19]}-inner)`), E(
        _,
        "style",
        /*computedStyle*/
        e[1]
      ), E(_, "points", h = /*geom*/
      e[5].points.map(fo).join(" "));
    },
    m(T, X) {
      ae(T, n, X), Te(n, t), Te(t, o), Te(t, a), P && P.m(t, null), m && m.m(n, null), ae(T, c, X), ae(T, p, X), ae(T, g, X), ae(T, _, X), ae(T, v, X);
      for (let C = 0; C < y.length; C += 1)
        y[C] && y[C].m(T, X);
      ae(T, N, X), A && A.m(T, X), ae(T, L, X), w = !0, b || (k = [
        ye(
          p,
          "pointerup",
          /*onShapePointerUp*/
          e[14]
        ),
        ye(p, "pointerdown", function() {
          Ne(
            /*grab*/
            e[27]("SHAPE")
          ) && e[27]("SHAPE").apply(this, arguments);
        }),
        ye(
          _,
          "pointermove",
          /*onPointerMove*/
          e[13]
        ),
        ye(
          _,
          "pointerup",
          /*onShapePointerUp*/
          e[14]
        ),
        ye(_, "pointerdown", function() {
          Ne(
            /*grab*/
            e[27]("SHAPE")
          ) && e[27]("SHAPE").apply(this, arguments);
        })
      ], b = !0);
    },
    p(T, X) {
      if (e = T, (!w || X[0] & /*mask*/
      512 && s !== (s = /*mask*/
      e[9].x)) && E(o, "x", s), (!w || X[0] & /*mask*/
      512 && l !== (l = /*mask*/
      e[9].y)) && E(o, "y", l), (!w || X[0] & /*mask*/
      512 && f !== (f = /*mask*/
      e[9].w)) && E(o, "width", f), (!w || X[0] & /*mask*/
      512 && r !== (r = /*mask*/
      e[9].h)) && E(o, "height", r), (!w || X[0] & /*geom*/
      32 && u !== (u = /*geom*/
      e[5].points.map(io).join(" "))) && E(a, "points", u), /*visibleMidpoint*/
      e[6] !== void 0 && !/*isHandleHovered*/
      e[7] ? P ? P.p(ct(e), X) : (P = to(ct(e)), P.c(), P.m(t, null)) : P && (P.d(1), P = null), /*visibleMidpoint*/
      e[6] !== void 0 && !/*isHandleHovered*/
      e[7] ? m ? m.p(ut(e), X) : (m = oo(ut(e)), m.c(), m.m(n, null)) : m && (m.d(1), m = null), (!w || X[0] & /*geom*/
      32 && d !== (d = /*geom*/
      e[5].points.map(ro).join(" "))) && E(p, "points", d), (!w || X[0] & /*computedStyle*/
      2) && E(
        _,
        "style",
        /*computedStyle*/
        e[1]
      ), (!w || X[0] & /*geom*/
      32 && h !== (h = /*geom*/
      e[5].points.map(fo).join(" "))) && E(_, "points", h), X[0] & /*geom, viewportScale, selectedCorners, onEnterHandle, onLeaveHandle, onHandlePointerDown, grab, onHandlePointerUp*/
      134322472) {
        O = mn(
          /*geom*/
          e[5].points
        );
        let C;
        for (C = 0; C < O.length; C += 1) {
          const H = no(e, O, C);
          y[C] ? (y[C].p(H, X), we(y[C], 1)) : (y[C] = so(H), y[C].c(), we(y[C], 1), y[C].m(N.parentNode, N));
        }
        for (Cn(), C = O.length; C < y.length; C += 1)
          M(C);
        Rn();
      }
      e[6] !== void 0 && !/*isHandleHovered*/
      e[7] ? A ? (A.p(at(e), X), X[0] & /*visibleMidpoint, isHandleHovered*/
      192 && we(A, 1)) : (A = lo(at(e)), A.c(), we(A, 1), A.m(L.parentNode, L)) : A && (Cn(), Me(A, 1, 1, () => {
        A = null;
      }), Rn());
    },
    i(T) {
      if (!w) {
        for (let X = 0; X < O.length; X += 1)
          we(y[X]);
        we(A), w = !0;
      }
    },
    o(T) {
      y = y.filter(Boolean);
      for (let X = 0; X < y.length; X += 1)
        Me(y[X]);
      Me(A), w = !1;
    },
    d(T) {
      T && (fe(n), fe(c), fe(p), fe(g), fe(_), fe(v), fe(N), fe(L)), P && P.d(), m && m.d(), ot(y, T), A && A.d(T), b = !1, $e(k);
    }
  };
}
function Xl(e) {
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
          Dl,
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
      tn(n.$$.fragment);
    },
    m(o, s) {
      Qe(n, o, s), t = !0;
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
      t || (we(n.$$.fragment, o), t = !0);
    },
    o(o) {
      Me(n.$$.fragment, o), t = !1;
    },
    d(o) {
      Je(n, o);
    }
  };
}
const jl = 250, Bl = 1e3, Ul = 12, Yn = 4.5, io = (e) => e.join(","), ro = (e) => e.join(","), fo = (e) => e.join(",");
function Gl(e, n, t) {
  let o, s, l;
  const f = Ut();
  let { shape: r } = n, { computedStyle: a } = n, { transform: u } = n, { viewportScale: c = 1 } = n, { svgEl: p } = n, d, g = !1, _, h = [];
  const v = () => t(7, g = !0), N = () => t(7, g = !1), L = (C) => {
    if (h.length > 0 || !s.some((j) => j.visible)) {
      t(6, d = void 0);
      return;
    }
    const [H, Y] = u.elementToImage(C.offsetX, C.offsetY), R = (j) => Math.pow(j[0] - H, 2) + Math.pow(j[1] - Y, 2), G = o.points.reduce((j, V) => R(V) < R(j) ? V : j), W = s.filter((j) => j.visible).reduce((j, V) => R(V.point) < R(j.point) ? V : j), D = Math.pow(Bl / c, 2);
    R(G) < D || R(W.point) < D ? t(6, d = s.indexOf(W)) : t(6, d = void 0);
  }, w = () => {
    document.activeElement !== p && p.focus();
  }, b = () => {
    t(8, h = []), w();
  }, k = (C) => {
    t(7, g = !0), C.preventDefault(), C.stopPropagation(), _ = performance.now();
  }, P = (C) => (H) => {
    if (!_ || fn || performance.now() - _ > jl) return;
    const Y = h.includes(C);
    H.metaKey || H.ctrlKey || H.shiftKey ? Y ? t(8, h = h.filter((R) => R !== C)) : t(8, h = [...h, C]) : Y && h.length > 1 ? t(8, h = [C]) : Y ? t(8, h = []) : t(8, h = [C]), w();
  }, m = (C, H, Y) => {
    w();
    let R;
    const G = C.geometry;
    h.length > 1 ? R = G.points.map(([D, j], V) => h.includes(V) ? [D + Y[0], j + Y[1]] : [D, j]) : H === "SHAPE" ? R = G.points.map(([D, j]) => [D + Y[0], j + Y[1]]) : R = G.points.map(([D, j], V) => H === `HANDLE-${V}` ? [D + Y[0], j + Y[1]] : [D, j]);
    const W = De(R);
    return { ...C, geometry: { points: R, bounds: W } };
  }, O = (C) => async (H) => {
    H.stopPropagation();
    const Y = [
      ...o.points.slice(0, C + 1),
      s[C].point,
      ...o.points.slice(C + 1)
    ], R = De(Y);
    f("change", { ...r, geometry: { points: Y, bounds: R } }), await As();
    const G = [...document.querySelectorAll(".a9s-handle")][C + 1];
    if (G != null && G.firstChild) {
      const W = new PointerEvent(
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
      G.firstChild.dispatchEvent(W);
    }
  }, y = () => {
    if (o.points.length - h.length < 3) return;
    const C = o.points.filter((Y, R) => !h.includes(R)), H = De(C);
    f("change", { ...r, geometry: { points: C, bounds: H } }), t(8, h = []);
  };
  Cs(() => {
    if (fn) return;
    const C = (H) => {
      (H.key === "Delete" || H.key === "Backspace") && (H.preventDefault(), y());
    };
    return p.addEventListener("pointermove", L), p.addEventListener("keydown", C), () => {
      p.removeEventListener("pointermove", L), p.removeEventListener("keydown", C);
    };
  });
  const M = `polygon-mask-${Math.random().toString(36).substring(2, 12)}`;
  function A(C) {
    Ue.call(this, e, C);
  }
  function T(C) {
    Ue.call(this, e, C);
  }
  function X(C) {
    Ue.call(this, e, C);
  }
  return e.$$set = (C) => {
    "shape" in C && t(0, r = C.shape), "computedStyle" in C && t(1, a = C.computedStyle), "transform" in C && t(2, u = C.transform), "viewportScale" in C && t(3, c = C.viewportScale), "svgEl" in C && t(4, p = C.svgEl);
  }, e.$$.update = () => {
    e.$$.dirty[0] & /*shape*/
    1 && t(5, o = r.geometry), e.$$.dirty[0] & /*geom, viewportScale*/
    40 && t(10, s = fn ? [] : o.points.map((C, H) => {
      const Y = H === o.points.length - 1 ? o.points[0] : o.points[H + 1], R = (C[0] + Y[0]) / 2, G = (C[1] + Y[1]) / 2, W = Math.sqrt(Math.pow(Y[0] - R, 2) + Math.pow(Y[1] - G, 2)) > Ul / c;
      return { point: [R, G], visible: W };
    })), e.$$.dirty[0] & /*geom, viewportScale*/
    40 && t(9, l = vn(o.bounds, Yn / c));
  }, [
    r,
    a,
    u,
    c,
    p,
    o,
    d,
    g,
    h,
    l,
    s,
    v,
    N,
    L,
    b,
    k,
    P,
    m,
    O,
    M,
    A,
    T,
    X
  ];
}
class ql extends Dn {
  constructor(n) {
    super(), An(
      this,
      n,
      Gl,
      Xl,
      Nn,
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
function Yl(e) {
  let n, t, o, s, l, f, r, a, u, c, p, d, g, _, h, v, N, L, w, b, k, P, m, O, y, M, A, T, X, C, H, Y, R, G, W, D, j, V, Q, x, F, oe, be, te, Oe, ue, ve, ce, Xe, pe, je, ke, K, Fe, z;
  return ue = new On({
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
  }), ue.$on("pointerdown", function() {
    Ne(
      /*grab*/
      e[12]("TOP_LEFT")
    ) && e[12]("TOP_LEFT").apply(this, arguments);
  }), ce = new On({
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
  }), ce.$on("pointerdown", function() {
    Ne(
      /*grab*/
      e[12]("TOP_RIGHT")
    ) && e[12]("TOP_RIGHT").apply(this, arguments);
  }), pe = new On({
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
    Ne(
      /*grab*/
      e[12]("BOTTOM_RIGHT")
    ) && e[12]("BOTTOM_RIGHT").apply(this, arguments);
  }), ke = new On({
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
  }), ke.$on("pointerdown", function() {
    Ne(
      /*grab*/
      e[12]("BOTTOM_LEFT")
    ) && e[12]("BOTTOM_LEFT").apply(this, arguments);
  }), {
    c() {
      n = ie("defs"), t = ie("mask"), o = ie("rect"), a = ie("rect"), g = ze(), _ = ie("rect"), w = ze(), b = ie("rect"), y = ze(), M = ie("rect"), C = ze(), H = ie("rect"), W = ze(), D = ie("rect"), x = ze(), F = ie("rect"), Oe = ze(), tn(ue.$$.fragment), ve = ze(), tn(ce.$$.fragment), Xe = ze(), tn(pe.$$.fragment), je = ze(), tn(ke.$$.fragment), E(o, "class", "rect-mask-bg svelte-1njczvj"), E(o, "x", s = /*mask*/
      e[6].x), E(o, "y", l = /*mask*/
      e[6].y), E(o, "width", f = /*mask*/
      e[6].w), E(o, "height", r = /*mask*/
      e[6].h), E(a, "class", "rect-mask-fg svelte-1njczvj"), E(a, "x", u = /*geom*/
      e[5].x), E(a, "y", c = /*geom*/
      e[5].y), E(a, "width", p = /*geom*/
      e[5].w), E(a, "height", d = /*geom*/
      e[5].h), E(
        t,
        "id",
        /*maskId*/
        e[8]
      ), E(t, "class", "a9s-rectangle-editor-mask svelte-1njczvj"), E(_, "class", "a9s-outer"), E(_, "mask", `url(#${/*maskId*/
      e[8]})`), E(_, "x", h = /*geom*/
      e[5].x), E(_, "y", v = /*geom*/
      e[5].y), E(_, "width", N = /*geom*/
      e[5].w), E(_, "height", L = /*geom*/
      e[5].h), E(b, "class", "a9s-inner a9s-shape-handle"), E(
        b,
        "style",
        /*computedStyle*/
        e[1]
      ), E(b, "x", k = /*geom*/
      e[5].x), E(b, "y", P = /*geom*/
      e[5].y), E(b, "width", m = /*geom*/
      e[5].w), E(b, "height", O = /*geom*/
      e[5].h), E(M, "class", "a9s-edge-handle a9s-edge-handle-top"), E(M, "x", A = /*geom*/
      e[5].x), E(M, "y", T = /*geom*/
      e[5].y), E(M, "height", 1), E(M, "width", X = /*geom*/
      e[5].w), E(H, "class", "a9s-edge-handle a9s-edge-handle-right"), E(H, "x", Y = /*geom*/
      e[5].x + /*geom*/
      e[5].w), E(H, "y", R = /*geom*/
      e[5].y), E(H, "height", G = /*geom*/
      e[5].h), E(H, "width", 1), E(D, "class", "a9s-edge-handle a9s-edge-handle-bottom"), E(D, "x", j = /*geom*/
      e[5].x), E(D, "y", V = /*geom*/
      e[5].y + /*geom*/
      e[5].h), E(D, "height", 1), E(D, "width", Q = /*geom*/
      e[5].w), E(F, "class", "a9s-edge-handle a9s-edge-handle-left"), E(F, "x", oe = /*geom*/
      e[5].x), E(F, "y", be = /*geom*/
      e[5].y), E(F, "height", te = /*geom*/
      e[5].h), E(F, "width", 1);
    },
    m(I, S) {
      ae(I, n, S), Te(n, t), Te(t, o), Te(t, a), ae(I, g, S), ae(I, _, S), ae(I, w, S), ae(I, b, S), ae(I, y, S), ae(I, M, S), ae(I, C, S), ae(I, H, S), ae(I, W, S), ae(I, D, S), ae(I, x, S), ae(I, F, S), ae(I, Oe, S), Qe(ue, I, S), ae(I, ve, S), Qe(ce, I, S), ae(I, Xe, S), Qe(pe, I, S), ae(I, je, S), Qe(ke, I, S), K = !0, Fe || (z = [
        ye(_, "pointerdown", function() {
          Ne(
            /*grab*/
            e[12]("SHAPE")
          ) && e[12]("SHAPE").apply(this, arguments);
        }),
        ye(b, "pointerdown", function() {
          Ne(
            /*grab*/
            e[12]("SHAPE")
          ) && e[12]("SHAPE").apply(this, arguments);
        }),
        ye(M, "pointerdown", function() {
          Ne(
            /*grab*/
            e[12]("TOP")
          ) && e[12]("TOP").apply(this, arguments);
        }),
        ye(H, "pointerdown", function() {
          Ne(
            /*grab*/
            e[12]("RIGHT")
          ) && e[12]("RIGHT").apply(this, arguments);
        }),
        ye(D, "pointerdown", function() {
          Ne(
            /*grab*/
            e[12]("BOTTOM")
          ) && e[12]("BOTTOM").apply(this, arguments);
        }),
        ye(F, "pointerdown", function() {
          Ne(
            /*grab*/
            e[12]("LEFT")
          ) && e[12]("LEFT").apply(this, arguments);
        })
      ], Fe = !0);
    },
    p(I, S) {
      e = I, (!K || S & /*mask*/
      64 && s !== (s = /*mask*/
      e[6].x)) && E(o, "x", s), (!K || S & /*mask*/
      64 && l !== (l = /*mask*/
      e[6].y)) && E(o, "y", l), (!K || S & /*mask*/
      64 && f !== (f = /*mask*/
      e[6].w)) && E(o, "width", f), (!K || S & /*mask*/
      64 && r !== (r = /*mask*/
      e[6].h)) && E(o, "height", r), (!K || S & /*geom*/
      32 && u !== (u = /*geom*/
      e[5].x)) && E(a, "x", u), (!K || S & /*geom*/
      32 && c !== (c = /*geom*/
      e[5].y)) && E(a, "y", c), (!K || S & /*geom*/
      32 && p !== (p = /*geom*/
      e[5].w)) && E(a, "width", p), (!K || S & /*geom*/
      32 && d !== (d = /*geom*/
      e[5].h)) && E(a, "height", d), (!K || S & /*geom*/
      32 && h !== (h = /*geom*/
      e[5].x)) && E(_, "x", h), (!K || S & /*geom*/
      32 && v !== (v = /*geom*/
      e[5].y)) && E(_, "y", v), (!K || S & /*geom*/
      32 && N !== (N = /*geom*/
      e[5].w)) && E(_, "width", N), (!K || S & /*geom*/
      32 && L !== (L = /*geom*/
      e[5].h)) && E(_, "height", L), (!K || S & /*computedStyle*/
      2) && E(
        b,
        "style",
        /*computedStyle*/
        e[1]
      ), (!K || S & /*geom*/
      32 && k !== (k = /*geom*/
      e[5].x)) && E(b, "x", k), (!K || S & /*geom*/
      32 && P !== (P = /*geom*/
      e[5].y)) && E(b, "y", P), (!K || S & /*geom*/
      32 && m !== (m = /*geom*/
      e[5].w)) && E(b, "width", m), (!K || S & /*geom*/
      32 && O !== (O = /*geom*/
      e[5].h)) && E(b, "height", O), (!K || S & /*geom*/
      32 && A !== (A = /*geom*/
      e[5].x)) && E(M, "x", A), (!K || S & /*geom*/
      32 && T !== (T = /*geom*/
      e[5].y)) && E(M, "y", T), (!K || S & /*geom*/
      32 && X !== (X = /*geom*/
      e[5].w)) && E(M, "width", X), (!K || S & /*geom*/
      32 && Y !== (Y = /*geom*/
      e[5].x + /*geom*/
      e[5].w)) && E(H, "x", Y), (!K || S & /*geom*/
      32 && R !== (R = /*geom*/
      e[5].y)) && E(H, "y", R), (!K || S & /*geom*/
      32 && G !== (G = /*geom*/
      e[5].h)) && E(H, "height", G), (!K || S & /*geom*/
      32 && j !== (j = /*geom*/
      e[5].x)) && E(D, "x", j), (!K || S & /*geom*/
      32 && V !== (V = /*geom*/
      e[5].y + /*geom*/
      e[5].h)) && E(D, "y", V), (!K || S & /*geom*/
      32 && Q !== (Q = /*geom*/
      e[5].w)) && E(D, "width", Q), (!K || S & /*geom*/
      32 && oe !== (oe = /*geom*/
      e[5].x)) && E(F, "x", oe), (!K || S & /*geom*/
      32 && be !== (be = /*geom*/
      e[5].y)) && E(F, "y", be), (!K || S & /*geom*/
      32 && te !== (te = /*geom*/
      e[5].h)) && E(F, "height", te);
      const re = {};
      S & /*geom*/
      32 && (re.x = /*geom*/
      e[5].x), S & /*geom*/
      32 && (re.y = /*geom*/
      e[5].y), S & /*viewportScale*/
      8 && (re.scale = /*viewportScale*/
      e[3]), ue.$set(re);
      const ge = {};
      S & /*geom*/
      32 && (ge.x = /*geom*/
      e[5].x + /*geom*/
      e[5].w), S & /*geom*/
      32 && (ge.y = /*geom*/
      e[5].y), S & /*viewportScale*/
      8 && (ge.scale = /*viewportScale*/
      e[3]), ce.$set(ge);
      const Ee = {};
      S & /*geom*/
      32 && (Ee.x = /*geom*/
      e[5].x + /*geom*/
      e[5].w), S & /*geom*/
      32 && (Ee.y = /*geom*/
      e[5].y + /*geom*/
      e[5].h), S & /*viewportScale*/
      8 && (Ee.scale = /*viewportScale*/
      e[3]), pe.$set(Ee);
      const le = {};
      S & /*geom*/
      32 && (le.x = /*geom*/
      e[5].x), S & /*geom*/
      32 && (le.y = /*geom*/
      e[5].y + /*geom*/
      e[5].h), S & /*viewportScale*/
      8 && (le.scale = /*viewportScale*/
      e[3]), ke.$set(le);
    },
    i(I) {
      K || (we(ue.$$.fragment, I), we(ce.$$.fragment, I), we(pe.$$.fragment, I), we(ke.$$.fragment, I), K = !0);
    },
    o(I) {
      Me(ue.$$.fragment, I), Me(ce.$$.fragment, I), Me(pe.$$.fragment, I), Me(ke.$$.fragment, I), K = !1;
    },
    d(I) {
      I && (fe(n), fe(g), fe(_), fe(w), fe(b), fe(y), fe(M), fe(C), fe(H), fe(W), fe(D), fe(x), fe(F), fe(Oe), fe(ve), fe(Xe), fe(je)), Je(ue, I), Je(ce, I), Je(pe, I), Je(ke, I), Fe = !1, $e(z);
    }
  };
}
function zl(e) {
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
          Yl,
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
      tn(n.$$.fragment);
    },
    m(o, s) {
      Qe(n, o, s), t = !0;
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
      t || (we(n.$$.fragment, o), t = !0);
    },
    o(o) {
      Me(n.$$.fragment, o), t = !1;
    },
    d(o) {
      Je(n, o);
    }
  };
}
function Vl(e, n, t) {
  let o, s, { shape: l } = n, { computedStyle: f } = n, { transform: r } = n, { viewportScale: a = 1 } = n, { svgEl: u } = n;
  const c = (h, v, N) => {
    const L = h.geometry.bounds;
    let [w, b] = [L.minX, L.minY], [k, P] = [L.maxX, L.maxY];
    const [m, O] = N;
    if (v === "SHAPE")
      w += m, k += m, b += O, P += O;
    else {
      switch (v) {
        case "TOP":
        case "TOP_LEFT":
        case "TOP_RIGHT": {
          b += O;
          break;
        }
        case "BOTTOM":
        case "BOTTOM_LEFT":
        case "BOTTOM_RIGHT": {
          P += O;
          break;
        }
      }
      switch (v) {
        case "LEFT":
        case "TOP_LEFT":
        case "BOTTOM_LEFT": {
          w += m;
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
    const y = Math.min(w, k), M = Math.min(b, P), A = Math.abs(k - w), T = Math.abs(P - b);
    return {
      ...h,
      geometry: {
        x: y,
        y: M,
        w: A,
        h: T,
        bounds: {
          minX: y,
          minY: M,
          maxX: y + A,
          maxY: M + T
        }
      }
    };
  }, p = `rect-mask-${Math.random().toString(36).substring(2, 12)}`;
  function d(h) {
    Ue.call(this, e, h);
  }
  function g(h) {
    Ue.call(this, e, h);
  }
  function _(h) {
    Ue.call(this, e, h);
  }
  return e.$$set = (h) => {
    "shape" in h && t(0, l = h.shape), "computedStyle" in h && t(1, f = h.computedStyle), "transform" in h && t(2, r = h.transform), "viewportScale" in h && t(3, a = h.viewportScale), "svgEl" in h && t(4, u = h.svgEl);
  }, e.$$.update = () => {
    e.$$.dirty & /*shape*/
    1 && t(5, o = l.geometry), e.$$.dirty & /*geom, viewportScale*/
    40 && t(6, s = vn(o.bounds, 2 / a));
  }, [
    l,
    f,
    r,
    a,
    u,
    o,
    s,
    c,
    p,
    d,
    g,
    _
  ];
}
class Kl extends Dn {
  constructor(n) {
    super(), An(this, n, Vl, zl, Nn, {
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
const Fl = 12, Wl = (e, n) => e.polygons.reduce((t, o, s) => {
  const l = o.rings.reduce((f, r, a) => {
    const u = r.points.map((c, p) => {
      const d = p === r.points.length - 1 ? r.points[0] : r.points[p + 1], g = (c[0] + d[0]) / 2, _ = (c[1] + d[1]) / 2, h = Math.sqrt(
        Math.pow(d[0] - g, 2) + Math.pow(d[1] - _, 2)
      ) > Fl / n;
      return { point: [g, _], visible: h, elementIdx: s, ringIdx: a, pointIdx: p };
    });
    return [...f, ...u];
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
function uo(e, n, t) {
  const o = e.slice();
  return o[30] = n[t], o[32] = t, o;
}
function co(e, n, t) {
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
      n = ie("circle"), E(n, "cx", t = /*point*/
      e[29][0]), E(n, "cy", o = /*point*/
      e[29][1]), E(n, "r", s = zn / /*viewportScale*/
      e[3]), E(n, "class", "svelte-1vxo6dc");
    },
    m(l, f) {
      ae(l, n, f);
    },
    p(l, f) {
      f[0] & /*midpoints, visibleMidpoint*/
      1088 && t !== (t = /*point*/
      l[29][0]) && E(n, "cx", t), f[0] & /*midpoints, visibleMidpoint*/
      1088 && o !== (o = /*point*/
      l[29][1]) && E(n, "cy", o), f[0] & /*viewportScale*/
      8 && s !== (s = zn / /*viewportScale*/
      l[3]) && E(n, "r", s);
    },
    d(l) {
      l && fe(n);
    }
  };
}
function mo(e) {
  let n, t, o, s, l, f, r, a, u, c;
  return {
    c() {
      n = ie("mask"), t = ie("rect"), r = ie("circle"), E(t, "x", o = /*mask*/
      e[9].x), E(t, "y", s = /*mask*/
      e[9].y), E(t, "width", l = /*mask*/
      e[9].w), E(t, "height", f = /*mask*/
      e[9].h), E(t, "class", "svelte-1vxo6dc"), E(r, "cx", a = /*point*/
      e[29][0]), E(r, "cy", u = /*point*/
      e[29][1]), E(r, "r", c = zn / /*viewportScale*/
      e[3]), E(r, "class", "svelte-1vxo6dc"), E(n, "id", `${/*maskId*/
      e[18]}-${/*elementIdx*/
      e[32]}-inner`), E(n, "class", "a9s-multipolygon-editor-mask svelte-1vxo6dc");
    },
    m(p, d) {
      ae(p, n, d), Te(n, t), Te(n, r);
    },
    p(p, d) {
      d[0] & /*mask*/
      512 && o !== (o = /*mask*/
      p[9].x) && E(t, "x", o), d[0] & /*mask*/
      512 && s !== (s = /*mask*/
      p[9].y) && E(t, "y", s), d[0] & /*mask*/
      512 && l !== (l = /*mask*/
      p[9].w) && E(t, "width", l), d[0] & /*mask*/
      512 && f !== (f = /*mask*/
      p[9].h) && E(t, "height", f), d[0] & /*midpoints, visibleMidpoint*/
      1088 && a !== (a = /*point*/
      p[29][0]) && E(r, "cx", a), d[0] & /*midpoints, visibleMidpoint*/
      1088 && u !== (u = /*point*/
      p[29][1]) && E(r, "cy", u), d[0] & /*viewportScale*/
      8 && c !== (c = zn / /*viewportScale*/
      p[3]) && E(r, "r", c);
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
  return n = new On({
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
    Ne(
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
      tn(n.$$.fragment);
    },
    m(s, l) {
      Qe(n, s, l), t = !0;
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
      t || (we(n.$$.fragment, s), t = !0);
    },
    o(s) {
      Me(n.$$.fragment, s), t = !1;
    },
    d(s) {
      Je(n, s);
    }
  };
}
function _o(e) {
  let n, t, o = mn(
    /*ring*/
    e[33].points
  ), s = [];
  for (let f = 0; f < o.length; f += 1)
    s[f] = go(po(e, o, f));
  const l = (f) => Me(s[f], 1, 1, () => {
    s[f] = null;
  });
  return {
    c() {
      for (let f = 0; f < s.length; f += 1)
        s[f].c();
      n = Zn();
    },
    m(f, r) {
      for (let a = 0; a < s.length; a += 1)
        s[a] && s[a].m(f, r);
      ae(f, n, r), t = !0;
    },
    p(f, r) {
      if (r[0] & /*geom, viewportScale, selectedCorners, onEnterHandle, onLeaveHandle, onHandlePointerDown, grab, onHandlePointerUp*/
      268491048) {
        o = mn(
          /*ring*/
          f[33].points
        );
        let a;
        for (a = 0; a < o.length; a += 1) {
          const u = po(f, o, a);
          s[a] ? (s[a].p(u, r), we(s[a], 1)) : (s[a] = go(u), s[a].c(), we(s[a], 1), s[a].m(n.parentNode, n));
        }
        for (Cn(), a = o.length; a < s.length; a += 1)
          l(a);
        Rn();
      }
    },
    i(f) {
      if (!t) {
        for (let r = 0; r < o.length; r += 1)
          we(s[r]);
        t = !0;
      }
    },
    o(f) {
      s = s.filter(Boolean);
      for (let r = 0; r < s.length; r += 1)
        Me(s[r]);
      t = !1;
    },
    d(f) {
      f && fe(n), ot(s, f);
    }
  };
}
function yo(e) {
  let n, t, o, s, l, f, r, a, u, c, p, d, g, _, h, v, N, L = (
    /*visibleMidpoint*/
    e[6] !== void 0 && !/*isHandleHovered*/
    e[7] && ho(dt(e))
  ), w = (
    /*visibleMidpoint*/
    e[6] !== void 0 && !/*isHandleHovered*/
    e[7] && mo(ht(e))
  ), b = mn(
    /*element*/
    e[30].rings
  ), k = [];
  for (let m = 0; m < b.length; m += 1)
    k[m] = _o(co(e, b, m));
  const P = (m) => Me(k[m], 1, 1, () => {
    k[m] = null;
  });
  return {
    c() {
      n = ie("g"), t = ie("defs"), o = ie("mask"), s = ie("rect"), u = ie("path"), L && L.c(), w && w.c(), p = ie("path"), g = ie("path");
      for (let m = 0; m < k.length; m += 1)
        k[m].c();
      E(s, "x", l = /*mask*/
      e[9].x), E(s, "y", f = /*mask*/
      e[9].y), E(s, "width", r = /*mask*/
      e[9].w), E(s, "height", a = /*mask*/
      e[9].h), E(s, "class", "svelte-1vxo6dc"), E(u, "d", c = kn(
        /*element*/
        e[30]
      )), E(u, "class", "svelte-1vxo6dc"), E(o, "id", `${/*maskId*/
      e[18]}-${/*elementIdx*/
      e[32]}-outer`), E(o, "class", "a9s-multipolygon-editor-mask svelte-1vxo6dc"), E(p, "class", "a9s-outer"), E(p, "mask", `url(#${/*maskId*/
      e[18]}-${/*elementIdx*/
      e[32]}-outer)`), E(p, "fill-rule", "evenodd"), E(p, "d", d = kn(
        /*element*/
        e[30]
      )), E(g, "class", "a9s-inner"), E(g, "mask", `url(#${/*maskId*/
      e[18]}-${/*elementIdx*/
      e[32]}-inner)`), E(
        g,
        "style",
        /*computedStyle*/
        e[1]
      ), E(g, "fill-rule", "evenodd"), E(g, "d", _ = kn(
        /*element*/
        e[30]
      ));
    },
    m(m, O) {
      ae(m, n, O), Te(n, t), Te(t, o), Te(o, s), Te(o, u), L && L.m(o, null), w && w.m(t, null), Te(n, p), Te(n, g);
      for (let y = 0; y < k.length; y += 1)
        k[y] && k[y].m(n, null);
      h = !0, v || (N = [
        ye(
          p,
          "pointerup",
          /*onShapePointerUp*/
          e[13]
        ),
        ye(p, "pointerdown", function() {
          Ne(
            /*grab*/
            e[28]("SHAPE")
          ) && e[28]("SHAPE").apply(this, arguments);
        }),
        ye(
          g,
          "pointerup",
          /*onShapePointerUp*/
          e[13]
        ),
        ye(g, "pointerdown", function() {
          Ne(
            /*grab*/
            e[28]("SHAPE")
          ) && e[28]("SHAPE").apply(this, arguments);
        })
      ], v = !0);
    },
    p(m, O) {
      if (e = m, (!h || O[0] & /*mask*/
      512 && l !== (l = /*mask*/
      e[9].x)) && E(s, "x", l), (!h || O[0] & /*mask*/
      512 && f !== (f = /*mask*/
      e[9].y)) && E(s, "y", f), (!h || O[0] & /*mask*/
      512 && r !== (r = /*mask*/
      e[9].w)) && E(s, "width", r), (!h || O[0] & /*mask*/
      512 && a !== (a = /*mask*/
      e[9].h)) && E(s, "height", a), (!h || O[0] & /*geom*/
      32 && c !== (c = kn(
        /*element*/
        e[30]
      ))) && E(u, "d", c), /*visibleMidpoint*/
      e[6] !== void 0 && !/*isHandleHovered*/
      e[7] ? L ? L.p(dt(e), O) : (L = ho(dt(e)), L.c(), L.m(o, null)) : L && (L.d(1), L = null), /*visibleMidpoint*/
      e[6] !== void 0 && !/*isHandleHovered*/
      e[7] ? w ? w.p(ht(e), O) : (w = mo(ht(e)), w.c(), w.m(t, null)) : w && (w.d(1), w = null), (!h || O[0] & /*geom*/
      32 && d !== (d = kn(
        /*element*/
        e[30]
      ))) && E(p, "d", d), (!h || O[0] & /*computedStyle*/
      2) && E(
        g,
        "style",
        /*computedStyle*/
        e[1]
      ), (!h || O[0] & /*geom*/
      32 && _ !== (_ = kn(
        /*element*/
        e[30]
      ))) && E(g, "d", _), O[0] & /*geom, viewportScale, selectedCorners, onEnterHandle, onLeaveHandle, onHandlePointerDown, grab, onHandlePointerUp*/
      268491048) {
        b = mn(
          /*element*/
          e[30].rings
        );
        let y;
        for (y = 0; y < b.length; y += 1) {
          const M = co(e, b, y);
          k[y] ? (k[y].p(M, O), we(k[y], 1)) : (k[y] = _o(M), k[y].c(), we(k[y], 1), k[y].m(n, null));
        }
        for (Cn(), y = b.length; y < k.length; y += 1)
          P(y);
        Rn();
      }
    },
    i(m) {
      if (!h) {
        for (let O = 0; O < b.length; O += 1)
          we(k[O]);
        h = !0;
      }
    },
    o(m) {
      k = k.filter(Boolean);
      for (let O = 0; O < k.length; O += 1)
        Me(k[O]);
      h = !1;
    },
    d(m) {
      m && fe(n), L && L.d(), w && w.d(), ot(k, m), v = !1, $e(N);
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
    Ne(
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
      tn(n.$$.fragment);
    },
    m(o, s) {
      Qe(n, o, s), t = !0;
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
      t || (we(n.$$.fragment, o), t = !0);
    },
    o(o) {
      Me(n.$$.fragment, o), t = !1;
    },
    d(o) {
      Je(n, o);
    }
  };
}
function Zl(e) {
  let n, t, o, s = mn(
    /*geom*/
    e[5].polygons
  ), l = [];
  for (let a = 0; a < s.length; a += 1)
    l[a] = yo(uo(e, s, a));
  const f = (a) => Me(l[a], 1, 1, () => {
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
      n = ze(), r && r.c(), t = Zn();
    },
    m(a, u) {
      for (let c = 0; c < l.length; c += 1)
        l[c] && l[c].m(a, u);
      ae(a, n, u), r && r.m(a, u), ae(a, t, u), o = !0;
    },
    p(a, u) {
      if (u[0] & /*geom, viewportScale, selectedCorners, onEnterHandle, onLeaveHandle, onHandlePointerDown, grab, onHandlePointerUp, maskId, computedStyle, onShapePointerUp, midpoints, visibleMidpoint, mask, isHandleHovered*/
      268763114) {
        s = mn(
          /*geom*/
          a[5].polygons
        );
        let c;
        for (c = 0; c < s.length; c += 1) {
          const p = uo(a, s, c);
          l[c] ? (l[c].p(p, u), we(l[c], 1)) : (l[c] = yo(p), l[c].c(), we(l[c], 1), l[c].m(n.parentNode, n));
        }
        for (Cn(), c = s.length; c < l.length; c += 1)
          f(c);
        Rn();
      }
      a[6] !== void 0 && !/*isHandleHovered*/
      a[7] ? r ? (r.p(pt(a), u), u[0] & /*visibleMidpoint, isHandleHovered*/
      192 && we(r, 1)) : (r = wo(pt(a)), r.c(), we(r, 1), r.m(t.parentNode, t)) : r && (Cn(), Me(r, 1, 1, () => {
        r = null;
      }), Rn());
    },
    i(a) {
      if (!o) {
        for (let u = 0; u < s.length; u += 1)
          we(l[u]);
        we(r), o = !0;
      }
    },
    o(a) {
      l = l.filter(Boolean);
      for (let u = 0; u < l.length; u += 1)
        Me(l[u]);
      Me(r), o = !1;
    },
    d(a) {
      a && (fe(n), fe(t)), ot(l, a), r && r.d(a);
    }
  };
}
function Ql(e) {
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
          Zl,
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
      tn(n.$$.fragment);
    },
    m(o, s) {
      Qe(n, o, s), t = !0;
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
      t || (we(n.$$.fragment, o), t = !0);
    },
    o(o) {
      Me(n.$$.fragment, o), t = !1;
    },
    d(o) {
      Je(n, o);
    }
  };
}
const Jl = 250, $l = 1e3, zn = 4.5;
function xl(e, n, t) {
  let o, s, l;
  const f = Ut();
  let { shape: r } = n, { computedStyle: a } = n, { transform: u } = n, { viewportScale: c = 1 } = n, { svgEl: p } = n, d, g = !1, _, h = [];
  const v = () => t(7, g = !0), N = () => t(7, g = !1), L = (H) => {
    if (h.length > 0 || !s.some((V) => V.visible)) {
      t(6, d = void 0);
      return;
    }
    const [Y, R] = u.elementToImage(H.offsetX, H.offsetY), G = (V) => Math.pow(V[0] - Y, 2) + Math.pow(V[1] - R, 2), W = ml(o).reduce((V, Q) => G(Q) < G(V) ? Q : V), D = s.filter((V) => V.visible).reduce((V, Q) => G(Q.point) < G(V.point) ? Q : V), j = Math.pow($l / c, 2);
    G(W) < j || G(D.point) < j ? t(6, d = s.indexOf(D)) : t(6, d = void 0);
  }, w = () => {
    document.activeElement !== p && p.focus();
  }, b = () => {
    t(8, h = []), w();
  }, k = (H) => {
    t(7, g = !0), H.preventDefault(), H.stopPropagation(), _ = performance.now();
  }, P = (H, Y, R) => (G) => {
    if (!_ || fn || performance.now() - _ > Jl) return;
    const W = (j) => j.polygon === H && j.ring === Y && j.point === R, D = h.some(W);
    G.metaKey || G.ctrlKey || G.shiftKey ? D ? t(8, h = h.filter((j) => !W(j))) : t(8, h = [...h, { polygon: H, ring: Y, point: R }]) : D && h.length > 1 ? t(8, h = [{ polygon: H, ring: Y, point: R }]) : D ? t(8, h = []) : t(8, h = [{ polygon: H, ring: Y, point: R }]), w();
  }, m = (H, Y, R) => {
    w();
    const G = H.geometry.polygons;
    let W;
    if (Y === "SHAPE")
      W = G.map((D) => {
        const j = D.rings.map((Q, x) => ({ points: Q.points.map((F, oe) => [F[0] + R[0], F[1] + R[1]]) })), V = De(j[0].points);
        return { rings: j, bounds: V };
      });
    else {
      const [D, j, V, Q] = Y.split("-").map((x) => parseInt(x));
      W = G.map((x, F) => {
        if (F === j) {
          const oe = x.rings.map((te, Oe) => Oe === V ? { points: te.points.map((ue, ve) => ve === Q ? [ue[0] + R[0], ue[1] + R[1]] : ue) } : te), be = De(oe[0].points);
          return { rings: oe, bounds: be };
        } else
          return x;
      });
    }
    return {
      ...H,
      geometry: {
        polygons: W,
        bounds: ft(W)
      }
    };
  }, O = (H) => async (Y) => {
    Y.stopPropagation();
    const R = s[H], G = o.polygons.map((D, j) => {
      if (j === R.elementIdx) {
        const V = D.rings.map((x, F) => F === R.ringIdx ? { points: [
          ...x.points.slice(0, R.pointIdx + 1),
          R.point,
          ...x.points.slice(R.pointIdx + 1)
        ] } : x), Q = De(V[0].points);
        return { rings: V, bounds: Q };
      } else
        return D;
    });
    f("change", {
      ...r,
      geometry: {
        polygons: G,
        bounds: ft(G)
      }
    }), await As();
    const W = [...document.querySelectorAll(".a9s-handle")][H + 1];
    if (W != null && W.firstChild) {
      const D = new PointerEvent(
        "pointerdown",
        {
          bubbles: !0,
          cancelable: !0,
          clientX: Y.clientX,
          clientY: Y.clientY,
          pointerId: Y.pointerId,
          pointerType: Y.pointerType,
          isPrimary: Y.isPrimary,
          buttons: Y.buttons
        }
      );
      W.firstChild.dispatchEvent(D);
    }
  }, y = () => {
    const H = o.polygons.map((Y, R) => {
      if (h.some((G) => G.polygon === R)) {
        const G = Y.rings.map((D, j) => {
          const V = h.filter((Q) => Q.polygon === R && Q.ring === j);
          return V.length && D.points.length - V.length >= 3 ? { points: D.points.filter((Q, x) => !V.some((F) => F.point === x)) } : D;
        }), W = De(G[0].points);
        return { rings: G, bounds: W };
      } else
        return Y;
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
    if (fn) return;
    const H = (Y) => {
      (Y.key === "Delete" || Y.key === "Backspace") && (Y.preventDefault(), y());
    };
    return p.addEventListener("pointermove", L), p.addEventListener("keydown", H), () => {
      p.removeEventListener("pointermove", L), p.removeEventListener("keydown", H);
    };
  });
  const M = `polygon-mask-${Math.random().toString(36).substring(2, 12)}`, A = (H, Y, R, { polygon: G, ring: W, point: D }) => G === H && W === Y && D === R;
  function T(H) {
    Ue.call(this, e, H);
  }
  function X(H) {
    Ue.call(this, e, H);
  }
  function C(H) {
    Ue.call(this, e, H);
  }
  return e.$$set = (H) => {
    "shape" in H && t(0, r = H.shape), "computedStyle" in H && t(1, a = H.computedStyle), "transform" in H && t(2, u = H.transform), "viewportScale" in H && t(3, c = H.viewportScale), "svgEl" in H && t(4, p = H.svgEl);
  }, e.$$.update = () => {
    e.$$.dirty[0] & /*shape*/
    1 && t(5, o = r.geometry), e.$$.dirty[0] & /*geom, viewportScale*/
    40 && t(10, s = fn ? [] : Wl(o, c)), e.$$.dirty[0] & /*geom, viewportScale*/
    40 && t(9, l = vn(o.bounds, zn / c));
  }, [
    r,
    a,
    u,
    c,
    p,
    o,
    d,
    g,
    h,
    l,
    s,
    v,
    N,
    b,
    k,
    P,
    m,
    O,
    M,
    A,
    T,
    X,
    C
  ];
}
class ei extends Dn {
  constructor(n) {
    super(), An(
      this,
      n,
      xl,
      Ql,
      Nn,
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
Pe.RECTANGLE, Pe.POLYGON, Pe.MULTIPOLYGON;
typeof navigator > "u" || navigator.userAgent.indexOf("Mac OS X");
function Se() {
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
function Le(e) {
  e.forEach(Bs);
}
function se(e) {
  return typeof e == "function";
}
function Ie(e, n) {
  return e != e ? n == n : e !== n || e && typeof e == "object" || typeof e == "function";
}
function ni(e) {
  return Object.keys(e).length === 0;
}
function ti(e, ...n) {
  if (e == null) {
    for (const o of n)
      o(void 0);
    return Se;
  }
  const t = e.subscribe(...n);
  return t.unsubscribe ? () => t.unsubscribe() : t;
}
function oi(e, n, t) {
  e.$$.on_destroy.push(ti(n, t));
}
function si(e, n, t, o) {
  if (e) {
    const s = Us(e, n, t, o);
    return e[0](s);
  }
}
function Us(e, n, t, o) {
  return e[1] && o ? At(t.ctx.slice(), e[1](o(n))) : t.ctx;
}
function li(e, n, t, o) {
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
function ii(e, n, t, o, s, l) {
  if (s) {
    const f = Us(n, t, o, l);
    e.p(f, s);
  }
}
function ri(e) {
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
function ln(e) {
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
function jn(e, n) {
  for (let t = 0; t < e.length; t += 1)
    e[t] && e[t].d(n);
}
function qe(e) {
  return document.createElement(e);
}
function q(e) {
  return document.createElementNS("http://www.w3.org/2000/svg", e);
}
function st(e) {
  return document.createTextNode(e);
}
function ne() {
  return st(" ");
}
function He() {
  return st("");
}
function $(e, n, t, o) {
  return e.addEventListener(n, t, o), () => e.removeEventListener(n, t, o);
}
function i(e, n, t) {
  t == null ? e.removeAttribute(n) : e.getAttribute(n) !== t && e.setAttribute(n, t);
}
function fi(e) {
  return Array.from(e.childNodes);
}
function Gs(e, n) {
  n = "" + n, e.data !== n && (e.data = /** @type {string} */
  n);
}
function Eo(e, n) {
  e.value = n ?? "";
}
function Be(e, n, t, o) {
  t == null ? e.style.removeProperty(n) : e.style.setProperty(n, t, "");
}
function Ze(e, n, t) {
  e.classList.toggle(n, !!t);
}
function ai(e, n, { bubbles: t = !1, cancelable: o = !1 } = {}) {
  return new CustomEvent(e, { detail: n, bubbles: t, cancelable: o });
}
let Vn;
function Gn(e) {
  Vn = e;
}
function qt() {
  if (!Vn) throw new Error("Function called outside component initialization");
  return Vn;
}
function on(e) {
  qt().$$.on_mount.push(e);
}
function ui(e) {
  qt().$$.on_destroy.push(e);
}
function xe() {
  const e = qt();
  return (n, t, { cancelable: o = !1 } = {}) => {
    const s = e.$$.callbacks[n];
    if (s) {
      const l = ai(
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
const Pn = [], gn = [];
let In = [];
const ko = [], qs = /* @__PURE__ */ Promise.resolve();
let Dt = !1;
function Ys() {
  Dt || (Dt = !0, qs.then(zs));
}
function Kn() {
  return Ys(), qs;
}
function Xt(e) {
  In.push(e);
}
const mt = /* @__PURE__ */ new Set();
let Sn = 0;
function zs() {
  if (Sn !== 0)
    return;
  const e = Vn;
  do {
    try {
      for (; Sn < Pn.length; ) {
        const n = Pn[Sn];
        Sn++, Gn(n), ci(n.$$);
      }
    } catch (n) {
      throw Pn.length = 0, Sn = 0, n;
    }
    for (Gn(null), Pn.length = 0, Sn = 0; gn.length; ) gn.pop()();
    for (let n = 0; n < In.length; n += 1) {
      const t = In[n];
      mt.has(t) || (mt.add(t), t());
    }
    In.length = 0;
  } while (Pn.length);
  for (; ko.length; )
    ko.pop()();
  Dt = !1, mt.clear(), Gn(e);
}
function ci(e) {
  if (e.fragment !== null) {
    e.update(), Le(e.before_update);
    const n = e.dirty;
    e.dirty = [-1], e.fragment && e.fragment.p(e.ctx, n), e.after_update.forEach(Xt);
  }
}
function pi(e) {
  const n = [], t = [];
  In.forEach((o) => e.indexOf(o) === -1 ? n.push(o) : t.push(o)), t.forEach((o) => o()), In = n;
}
const $n = /* @__PURE__ */ new Set();
let wn;
function Ve() {
  wn = {
    r: 0,
    c: [],
    p: wn
    // parent group
  };
}
function Ke() {
  wn.r || Le(wn.c), wn = wn.p;
}
function J(e, n) {
  e && e.i && ($n.delete(e), e.i(n));
}
function ee(e, n, t, o) {
  if (e && e.o) {
    if ($n.has(e)) return;
    $n.add(e), wn.c.push(() => {
      $n.delete(e), o && (t && e.d(1), o());
    }), e.o(n);
  } else o && o();
}
function Ae(e) {
  return (e == null ? void 0 : e.length) !== void 0 ? e : Array.from(e);
}
function gt(e, n) {
  e.d(1), n.delete(e.key);
}
function hi(e, n) {
  ee(e, 1, 1, () => {
    n.delete(e.key);
  });
}
function Qn(e, n, t, o, s, l, f, r, a, u, c, p) {
  let d = e.length, g = l.length, _ = d;
  const h = {};
  for (; _--; ) h[e[_].key] = _;
  const v = [], N = /* @__PURE__ */ new Map(), L = /* @__PURE__ */ new Map(), w = [];
  for (_ = g; _--; ) {
    const m = p(s, l, _), O = t(m);
    let y = f.get(O);
    y ? w.push(() => y.p(m, n)) : (y = u(O, m), y.c()), N.set(O, v[_] = y), O in h && L.set(O, Math.abs(_ - h[O]));
  }
  const b = /* @__PURE__ */ new Set(), k = /* @__PURE__ */ new Set();
  function P(m) {
    J(m, 1), m.m(r, c), f.set(m.key, m), c = m.first, g--;
  }
  for (; d && g; ) {
    const m = v[g - 1], O = e[d - 1], y = m.key, M = O.key;
    m === O ? (c = m.first, d--, g--) : N.has(M) ? !f.has(y) || b.has(y) ? P(m) : k.has(M) ? d-- : L.get(y) > L.get(M) ? (k.add(y), P(m)) : (b.add(M), d--) : (a(O, f), d--);
  }
  for (; d--; ) {
    const m = e[d];
    N.has(m.key) || a(m, f);
  }
  for (; g; ) P(v[g - 1]);
  return Le(w), v;
}
function _e(e) {
  e && e.c();
}
function de(e, n, t) {
  const { fragment: o, after_update: s } = e.$$;
  o && o.m(n, t), Xt(() => {
    const l = e.$$.on_mount.map(Bs).filter(se);
    e.$$.on_destroy ? e.$$.on_destroy.push(...l) : Le(l), e.$$.on_mount = [];
  }), s.forEach(Xt);
}
function me(e, n) {
  const t = e.$$;
  t.fragment !== null && (pi(t.after_update), Le(t.on_destroy), t.fragment && t.fragment.d(n), t.on_destroy = t.fragment = null, t.ctx = []);
}
function di(e, n) {
  e.$$.dirty[0] === -1 && (Pn.push(e), Ys(), e.$$.dirty.fill(0)), e.$$.dirty[n / 31 | 0] |= 1 << n % 31;
}
function Ce(e, n, t, o, s, l, f = null, r = [-1]) {
  const a = Vn;
  Gn(e);
  const u = e.$$ = {
    fragment: null,
    ctx: [],
    // state
    props: l,
    update: Se,
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
  f && f(u.root);
  let c = !1;
  if (u.ctx = t ? t(e, n.props || {}, (p, d, ...g) => {
    const _ = g.length ? g[0] : d;
    return u.ctx && s(u.ctx[p], u.ctx[p] = _) && (!u.skip_bound && u.bound[p] && u.bound[p](_), c && di(e, p)), d;
  }) : [], u.update(), c = !0, Le(u.before_update), u.fragment = o ? o(u.ctx) : !1, n.target) {
    if (n.hydrate) {
      const p = fi(n.target);
      u.fragment && u.fragment.l(p), p.forEach(B);
    } else
      u.fragment && u.fragment.c();
    n.intro && J(e.$$.fragment), de(e, n.target, n.anchor), zs();
  }
  Gn(a);
}
class Re {
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
    me(this, 1), this.$destroy = Se;
  }
  /**
   * @template {Extract<keyof Events, string>} K
   * @param {K} type
   * @param {((e: Events[K]) => void) | null | undefined} callback
   * @returns {() => void}
   */
  $on(n, t) {
    if (!se(t))
      return Se;
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
    this.$$set && !ni(n) && (this.$$.skip_bound = !0, this.$$set(n), this.$$.skip_bound = !1);
  }
}
const mi = "4";
typeof window < "u" && (window.__svelte || (window.__svelte = { v: /* @__PURE__ */ new Set() })).v.add(mi);
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
      n = q("line"), t = q("line"), s && s.c(), o = He(), i(n, "class", "a9s-outer"), i(
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
      U(l, n, f), U(l, t, f), s && s.m(l, f), U(l, o, f);
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
      l && (B(n), B(t), B(o)), s && s.d(l);
    }
  };
}
function To(e) {
  let n, t;
  return {
    c() {
      n = q("polyline"), i(n, "class", "a9s-inner"), i(n, "fill", "none"), i(n, "points", t = /*func*/
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
function gi(e) {
  let n, t = (
    /*origin*/
    e[1] && /*cursor*/
    e[2] && So(e)
  );
  return {
    c() {
      n = q("g"), t && t.c(), i(n, "class", "a9s-annotation a9s-rubberband");
    },
    m(o, s) {
      U(o, n, s), t && t.m(n, null), e[12](n);
    },
    p(o, [s]) {
      /*origin*/
      o[1] && /*cursor*/
      o[2] ? t ? t.p(o, s) : (t = So(o), t.c(), t.m(n, null)) : t && (t.d(1), t = null);
    },
    i: Se,
    o: Se,
    d(o) {
      o && B(n), t && t.d(), e[12](null);
    }
  };
}
function _i(e, n, t) {
  const o = xe();
  let { addEventListener: s } = n, { drawingMode: l } = n, { transform: f } = n, { viewportScale: r } = n, a, u, c, p, d, g, _, h, v;
  const N = (m) => {
    const O = m, { timeStamp: y, offsetX: M, offsetY: A } = O;
    h = { timeStamp: y, offsetX: M, offsetY: A }, l === "drag" && (t(1, u = f.elementToImage(O.offsetX, O.offsetY)), t(2, c = u), t(3, p = u[0]), t(4, d = u[1]), t(5, g = c[0]), t(6, _ = c[1]));
  }, L = (m) => {
    const O = m || v;
    u && (t(2, c = f.elementToImage(O.offsetX, O.offsetY)), t(5, g = c[0]), t(6, _ = c[1])), m && (v = m);
  }, w = (m) => {
    const O = m;
    if (l === "click") {
      const y = performance.now() - h.timeStamp, M = rn([h.offsetX, h.offsetY], [O.offsetX, O.offsetY]);
      if (y > 300 || M > 15) return;
      u ? b() : (t(1, u = f.elementToImage(O.offsetX, O.offsetY)), t(2, c = u), t(3, p = u[0]), t(4, d = u[1]), t(5, g = c[0]), t(6, _ = c[1]));
    } else u && (O.stopPropagation(), b());
  }, b = () => {
    if (u && c && rn(u, c) > 4) {
      const m = {
        type: Pe.LINE,
        geometry: {
          bounds: De([u, c]),
          points: [u, c]
        },
        properties: { toolType: "arrow" }
      };
      o("create", m);
    }
    t(1, u = void 0), t(2, c = void 0), v = void 0;
  };
  on(() => {
    s("pointerdown", N, !0), s("pointermove", L), s("pointerup", w, !0);
  });
  const k = () => {
    const m = Math.atan2(_ - d, g - p), O = 12, y = g - O * Math.cos(m - Math.PI / 6), M = _ - O * Math.sin(m - Math.PI / 6), A = g - O * Math.cos(m + Math.PI / 6), T = _ - O * Math.sin(m + Math.PI / 6);
    return `${y},${M} ${g},${_} ${A},${T}`;
  };
  function P(m) {
    gn[m ? "unshift" : "push"](() => {
      a = m, t(0, a);
    });
  }
  return e.$$set = (m) => {
    "addEventListener" in m && t(7, s = m.addEventListener), "drawingMode" in m && t(8, l = m.drawingMode), "transform" in m && t(9, f = m.transform), "viewportScale" in m && t(10, r = m.viewportScale);
  }, [
    a,
    u,
    c,
    p,
    d,
    g,
    _,
    s,
    l,
    f,
    r,
    k,
    P
  ];
}
class yi extends Re {
  constructor(n) {
    super(), Ce(this, n, _i, gi, Ie, {
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
      n = q("line"), t = q("line"), i(n, "class", "a9s-outer"), i(
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
function wi(e) {
  let n, t = (
    /*origin*/
    e[1] && /*cursor*/
    e[2] && Mo(e)
  );
  return {
    c() {
      n = q("g"), t && t.c(), i(n, "class", "a9s-annotation a9s-rubberband");
    },
    m(o, s) {
      U(o, n, s), t && t.m(n, null), e[11](n);
    },
    p(o, [s]) {
      /*origin*/
      o[1] && /*cursor*/
      o[2] ? t ? t.p(o, s) : (t = Mo(o), t.c(), t.m(n, null)) : t && (t.d(1), t = null);
    },
    i: Se,
    o: Se,
    d(o) {
      o && B(n), t && t.d(), e[11](null);
    }
  };
}
function bi(e, n, t) {
  const o = xe();
  let { addEventListener: s } = n, { drawingMode: l } = n, { transform: f } = n, { viewportScale: r } = n, a, u, c, p, d, g, _, h, v;
  const N = (P) => {
    const m = P, { timeStamp: O, offsetX: y, offsetY: M } = m;
    h = { timeStamp: O, offsetX: y, offsetY: M }, l === "drag" && (t(1, u = f.elementToImage(m.offsetX, m.offsetY)), t(2, c = u), t(3, p = u[0]), t(4, d = u[1]), t(5, g = c[0]), t(6, _ = c[1]));
  }, L = (P) => {
    const m = P || v;
    u && (t(2, c = f.elementToImage(m.offsetX, m.offsetY)), t(5, g = c[0]), t(6, _ = c[1])), P && (v = P);
  }, w = (P) => {
    const m = P;
    if (l === "click") {
      const O = performance.now() - h.timeStamp, y = rn([h.offsetX, h.offsetY], [m.offsetX, m.offsetY]);
      if (O > 300 || y > 15) return;
      u ? b() : (t(1, u = f.elementToImage(m.offsetX, m.offsetY)), t(2, c = u), t(3, p = u[0]), t(4, d = u[1]), t(5, g = c[0]), t(6, _ = c[1]));
    } else u && (m.stopPropagation(), b());
  }, b = () => {
    if (u && c && rn(u, c) > 4) {
      const P = {
        type: Pe.POLYLINE,
        geometry: {
          bounds: De([u, c]),
          points: [{ type: "CORNER", point: u }, { type: "CORNER", point: c }]
        },
        properties: { toolType: "distance" }
      };
      o("create", P);
    }
    t(1, u = void 0), t(2, c = void 0), v = void 0;
  };
  on(() => {
    s("pointerdown", N, !0), s("pointermove", L), s("pointerup", w, !0);
  });
  function k(P) {
    gn[P ? "unshift" : "push"](() => {
      a = P, t(0, a);
    });
  }
  return e.$$set = (P) => {
    "addEventListener" in P && t(7, s = P.addEventListener), "drawingMode" in P && t(8, l = P.drawingMode), "transform" in P && t(9, f = P.transform), "viewportScale" in P && t(10, r = P.viewportScale);
  }, [
    a,
    u,
    c,
    p,
    d,
    g,
    _,
    s,
    l,
    f,
    r,
    k
  ];
}
class vi extends Re {
  constructor(n) {
    super(), Ce(this, n, bi, wi, Ie, {
      addEventListener: 7,
      drawingMode: 8,
      transform: 9,
      viewportScale: 10
    });
  }
}
var an = /* @__PURE__ */ ((e) => (e.ELLIPSE = "ELLIPSE", e.MULTIPOLYGON = "MULTIPOLYGON", e.POLYGON = "POLYGON", e.POLYLINE = "POLYLINE", e.RECTANGLE = "RECTANGLE", e.LINE = "LINE", e))(an || {}), Ei = { exports: {} };
(function(e) {
  (function() {
    function n(r, a) {
      var u = r.x - a.x, c = r.y - a.y;
      return u * u + c * c;
    }
    function t(r, a, u) {
      var c = a.x, p = a.y, d = u.x - c, g = u.y - p;
      if (d !== 0 || g !== 0) {
        var _ = ((r.x - c) * d + (r.y - p) * g) / (d * d + g * g);
        _ > 1 ? (c = u.x, p = u.y) : _ > 0 && (c += d * _, p += g * _);
      }
      return d = r.x - c, g = r.y - p, d * d + g * g;
    }
    function o(r, a) {
      for (var u = r[0], c = [u], p, d = 1, g = r.length; d < g; d++)
        p = r[d], n(p, u) > a && (c.push(p), u = p);
      return u !== p && c.push(p), c;
    }
    function s(r, a, u, c, p) {
      for (var d = c, g, _ = a + 1; _ < u; _++) {
        var h = t(r[_], r[a], r[u]);
        h > d && (g = _, d = h);
      }
      d > c && (g - a > 1 && s(r, a, g, c, p), p.push(r[g]), u - g > 1 && s(r, g, u, c, p));
    }
    function l(r, a) {
      var u = r.length - 1, c = [r[0]];
      return s(r, 0, u, a, c), c.push(r[u]), c;
    }
    function f(r, a, u) {
      if (r.length <= 2) return r;
      var c = a !== void 0 ? a * a : 1;
      return r = u ? r : o(r, c), r = l(r, c), r;
    }
    e.exports = f, e.exports.default = f;
  })();
})(Ei);
const Bn = (e, n) => n, hn = (e) => {
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
    const f = e[s][0], r = e[s][1], a = e[l][0], u = e[l][1];
    r > t != u > t && n < (a - f) * (t - r) / (u - r) + f && (o = !o);
  }
  return o;
}, ki = (e, n = !0) => {
  let t = "M ";
  return e.forEach(([o, s], l) => {
    l === 0 ? t += `${o},${s}` : t += ` L ${o},${s}`;
  }), n && (t += " Z"), t;
}, Si = (e, n) => {
  const t = Math.abs(n[0] - e[0]), o = Math.abs(n[1] - e[1]);
  return Math.sqrt(Math.pow(t, 2) + Math.pow(o, 2));
}, Ti = {
  area: (e) => Math.PI * e.geometry.rx * e.geometry.ry,
  intersects: (e, n, t) => {
    const { cx: o, cy: s, rx: l, ry: f } = e.geometry, r = 0, a = Math.cos(r), u = Math.sin(r), c = n - o, p = t - s, d = a * c + u * p, g = u * c - a * p;
    return d * d / (l * l) + g * g / (f * f) <= 1;
  }
};
Bn(an.ELLIPSE, Ti);
const Mi = {
  area: (e) => 0,
  intersects: (e, n, t, o = 2) => {
    const [[s, l], [f, r]] = e.geometry.points, a = Math.abs((r - l) * n - (f - s) * t + f * l - r * s), u = Si([s, l], [f, r]);
    return a / u <= o;
  }
};
Bn(an.LINE, Mi);
const Pi = {
  area: (e) => {
    const { polygons: n } = e.geometry;
    return n.reduce((t, o) => {
      const [s, ...l] = o.rings, f = nt(s.points), r = l.reduce((a, u) => a + nt(u.points), 0);
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
  return hn(n);
}, Tn = (e) => e.rings.map((t) => ki(t.points)).join(" "), Li = (e) => e.polygons.reduce((n, t) => [
  ...n,
  ...t.rings.reduce((o, s) => [...o, ...s.points], [])
], []);
Bn(an.MULTIPOLYGON, Pi);
const Oi = {
  area: (e) => {
    const n = e.geometry.points;
    return nt(n);
  },
  intersects: (e, n, t) => {
    const o = e.geometry.points;
    return tt(o, n, t);
  }
};
Bn(an.POLYGON, Oi);
const Hi = {
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
      return Ii(s, [n, t], o);
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
    const r = f / s, a = Math.pow(1 - r, 3) * e[0] + 3 * Math.pow(1 - r, 2) * r * n[0] + 3 * (1 - r) * Math.pow(r, 2) * t[0] + Math.pow(r, 3) * o[0], u = Math.pow(1 - r, 3) * e[1] + 3 * Math.pow(1 - r, 2) * r * n[1] + 3 * (1 - r) * Math.pow(r, 2) * t[1] + Math.pow(r, 3) * o[1];
    l.push([a, u]);
  }
  return l;
}, Ii = (e, n, t) => {
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
  const [o, s] = e, [l, f] = n, [r, a] = t, u = r - l, c = a - f, p = Math.sqrt(u * u + c * c);
  if (p === 0)
    return Math.sqrt((o - l) * (o - l) + (s - f) * (s - f));
  const d = ((o - l) * u + (s - f) * c) / (p * p);
  return d <= 0 ? Math.sqrt((o - l) * (o - l) + (s - f) * (s - f)) : d >= 1 ? Math.sqrt((o - r) * (o - r) + (s - a) * (s - a)) : Math.abs((a - f) * o - (r - l) * s + r * f - a * l) / p;
};
Bn(an.POLYLINE, Hi);
const Ci = {
  area: (e) => e.geometry.w * e.geometry.h,
  intersects: (e, n, t) => n >= e.geometry.x && n <= e.geometry.x + e.geometry.w && t >= e.geometry.y && t <= e.geometry.y + e.geometry.h
};
Bn(an.RECTANGLE, Ci);
const Ri = [];
for (let e = 0; e < 256; ++e)
  Ri.push((e + 256).toString(16).slice(1));
typeof crypto < "u" && crypto.randomUUID && crypto.randomUUID.bind(crypto);
const Ni = "useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict";
let Ai = (e = 21) => {
  let n = "", t = crypto.getRandomValues(new Uint8Array(e |= 0));
  for (; e--; )
    n += Ni[t[e] & 63];
  return n;
};
Ai();
const Yt = (e, n = 0) => {
  const { minX: t, minY: o, maxX: s, maxY: l } = e;
  return {
    x: t - n,
    y: o - n,
    w: s - t + 2 * n,
    h: l - o + 2 * n
  };
}, dn = typeof window > "u" || typeof navigator > "u" ? !1 : "ontouchstart" in window || navigator.maxTouchPoints > 0 || // @ts-ignore
navigator.msMaxTouchPoints > 0, Di = (e) => ({}), Oo = (e) => ({ grab: (
  /*onGrab*/
  e[0]
) });
function Xi(e) {
  let n, t, o, s;
  const l = (
    /*#slots*/
    e[8].default
  ), f = si(
    l,
    e,
    /*$$scope*/
    e[7],
    Oo
  );
  return {
    c() {
      n = q("g"), f && f.c(), i(n, "class", "a9s-annotation selected");
    },
    m(r, a) {
      U(r, n, a), f && f.m(n, null), t = !0, o || (s = [
        $(
          n,
          "pointerup",
          /*onRelease*/
          e[2]
        ),
        $(
          n,
          "pointermove",
          /*onPointerMove*/
          e[1]
        )
      ], o = !0);
    },
    p(r, [a]) {
      f && f.p && (!t || a & /*$$scope*/
      128) && ii(
        f,
        l,
        r,
        /*$$scope*/
        r[7],
        t ? li(
          l,
          /*$$scope*/
          r[7],
          a,
          Di
        ) : ri(
          /*$$scope*/
          r[7]
        ),
        Oo
      );
    },
    i(r) {
      t || (J(f, r), t = !0);
    },
    o(r) {
      ee(f, r), t = !1;
    },
    d(r) {
      r && B(n), f && f.d(r), o = !1, Le(s);
    }
  };
}
function ji(e, n, t) {
  let { $$slots: o = {}, $$scope: s } = n;
  const l = xe();
  let { shape: f } = n, { editor: r } = n, { transform: a } = n, { svgEl: u } = n, c, p, d;
  const g = (v) => (N) => {
    if (c = v, u) {
      const { left: w, top: b } = u.getBoundingClientRect(), k = N.clientX - w, P = N.clientY - b;
      p = a.elementToImage(k, P);
    } else {
      const { offsetX: w, offsetY: b } = N;
      p = a.elementToImage(w, b);
    }
    d = f, N.target.setPointerCapture(N.pointerId), l("grab", N);
  }, _ = (v) => {
    if (c) {
      const [N, L] = a.elementToImage(v.offsetX, v.offsetY), w = [N - p[0], L - p[1]];
      t(3, f = r(d, c, w)), l("change", f);
    }
  }, h = (v) => {
    v.target.releasePointerCapture(v.pointerId), c = void 0, d = f, l("release", v);
  };
  return e.$$set = (v) => {
    "shape" in v && t(3, f = v.shape), "editor" in v && t(4, r = v.editor), "transform" in v && t(5, a = v.transform), "svgEl" in v && t(6, u = v.svgEl), "$$scope" in v && t(7, s = v.$$scope);
  }, [
    g,
    _,
    h,
    f,
    r,
    a,
    u,
    s,
    o
  ];
}
class _n extends Re {
  constructor(n) {
    super(), Ce(this, n, ji, Xi, Ie, {
      shape: 3,
      editor: 4,
      transform: 5,
      svgEl: 6
    });
  }
}
function Bi(e) {
  let n, t, o, s, l, f, r, a, u = (
    /*selected*/
    e[3] && Ho(e)
  );
  return {
    c() {
      n = q("g"), t = q("circle"), u && u.c(), s = q("circle"), i(t, "class", "a9s-handle-buffer svelte-qtyc7s"), i(
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
      e[2]), i(t, "role", "button"), i(t, "tabindex", "0"), i(s, "class", l = ln(`a9s-handle-dot${/*selected*/
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
    m(c, p) {
      U(c, n, p), Z(n, t), u && u.m(n, null), Z(n, s), r || (a = [
        $(
          t,
          "dblclick",
          /*dblclick_handler_1*/
          e[12]
        ),
        $(
          t,
          "pointerenter",
          /*pointerenter_handler*/
          e[13]
        ),
        $(
          t,
          "pointerleave",
          /*pointerleave_handler*/
          e[14]
        ),
        $(
          t,
          "pointerdown",
          /*pointerdown_handler_1*/
          e[15]
        ),
        $(
          t,
          "pointerdown",
          /*onPointerDown*/
          e[6]
        ),
        $(
          t,
          "pointerup",
          /*pointerup_handler_1*/
          e[16]
        ),
        $(
          t,
          "pointerup",
          /*onPointerUp*/
          e[7]
        )
      ], r = !0);
    },
    p(c, p) {
      p & /*x*/
      1 && i(
        t,
        "cx",
        /*x*/
        c[0]
      ), p & /*y*/
      2 && i(
        t,
        "cy",
        /*y*/
        c[1]
      ), p & /*handleRadius, scale*/
      36 && o !== (o = /*handleRadius*/
      c[5] + 6 / /*scale*/
      c[2]) && i(t, "r", o), /*selected*/
      c[3] ? u ? u.p(c, p) : (u = Ho(c), u.c(), u.m(n, s)) : u && (u.d(1), u = null), p & /*selected*/
      8 && l !== (l = ln(`a9s-handle-dot${/*selected*/
      c[3] ? " selected" : ""}`) + " svelte-qtyc7s") && i(s, "class", l), p & /*x*/
      1 && i(
        s,
        "cx",
        /*x*/
        c[0]
      ), p & /*y*/
      2 && i(
        s,
        "cy",
        /*y*/
        c[1]
      ), p & /*handleRadius*/
      32 && i(
        s,
        "r",
        /*handleRadius*/
        c[5]
      ), p & /*$$props*/
      256 && f !== (f = `a9s-handle ${/*$$props*/
      c[8].class || ""}`.trim()) && i(n, "class", f);
    },
    d(c) {
      c && B(n), u && u.d(), r = !1, Le(a);
    }
  };
}
function Ui(e) {
  let n, t, o, s, l, f, r, a, u;
  return {
    c() {
      n = q("g"), t = q("circle"), s = q("circle"), f = q("circle"), i(
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
      e[5] * 10), i(t, "class", "a9s-touch-halo"), Ze(
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
    m(c, p) {
      U(c, n, p), Z(n, t), Z(n, s), Z(n, f), a || (u = [
        $(
          s,
          "dblclick",
          /*dblclick_handler*/
          e[9]
        ),
        $(
          s,
          "pointerdown",
          /*pointerdown_handler*/
          e[10]
        ),
        $(
          s,
          "pointerdown",
          /*onPointerDown*/
          e[6]
        ),
        $(
          s,
          "pointerup",
          /*pointerup_handler*/
          e[11]
        ),
        $(
          s,
          "pointerup",
          /*onPointerUp*/
          e[7]
        )
      ], a = !0);
    },
    p(c, p) {
      p & /*x*/
      1 && i(
        t,
        "cx",
        /*x*/
        c[0]
      ), p & /*y*/
      2 && i(
        t,
        "cy",
        /*y*/
        c[1]
      ), p & /*handleRadius*/
      32 && o !== (o = /*handleRadius*/
      c[5] * 10) && i(t, "r", o), p & /*touched*/
      16 && Ze(
        t,
        "touched",
        /*touched*/
        c[4]
      ), p & /*x*/
      1 && i(
        s,
        "cx",
        /*x*/
        c[0]
      ), p & /*y*/
      2 && i(
        s,
        "cy",
        /*y*/
        c[1]
      ), p & /*handleRadius, scale*/
      36 && l !== (l = /*handleRadius*/
      c[5] + 10 / /*scale*/
      c[2]) && i(s, "r", l), p & /*x*/
      1 && i(
        f,
        "cx",
        /*x*/
        c[0]
      ), p & /*y*/
      2 && i(
        f,
        "cy",
        /*y*/
        c[1]
      ), p & /*handleRadius, scale*/
      36 && r !== (r = /*handleRadius*/
      c[5] + 2 / /*scale*/
      c[2]) && i(f, "r", r);
    },
    d(c) {
      c && B(n), a = !1, Le(u);
    }
  };
}
function Ho(e) {
  let n, t;
  return {
    c() {
      n = q("circle"), i(n, "class", "a9s-handle-selected"), i(
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
function Gi(e) {
  let n;
  function t(l, f) {
    return dn ? Ui : Bi;
  }
  let s = t()(e);
  return {
    c() {
      s.c(), n = He();
    },
    m(l, f) {
      s.m(l, f), U(l, n, f);
    },
    p(l, [f]) {
      s.p(l, f);
    },
    i: Se,
    o: Se,
    d(l) {
      l && B(n), s.d(l);
    }
  };
}
function qi(e, n, t) {
  let o, { x: s } = n, { y: l } = n, { scale: f } = n, { selected: r = void 0 } = n, a = !1;
  const u = (w) => {
    w.pointerType === "touch" && t(4, a = !0);
  }, c = () => t(4, a = !1);
  function p(w) {
    he.call(this, e, w);
  }
  function d(w) {
    he.call(this, e, w);
  }
  function g(w) {
    he.call(this, e, w);
  }
  function _(w) {
    he.call(this, e, w);
  }
  function h(w) {
    he.call(this, e, w);
  }
  function v(w) {
    he.call(this, e, w);
  }
  function N(w) {
    he.call(this, e, w);
  }
  function L(w) {
    he.call(this, e, w);
  }
  return e.$$set = (w) => {
    t(8, n = At(At({}, n), vo(w))), "x" in w && t(0, s = w.x), "y" in w && t(1, l = w.y), "scale" in w && t(2, f = w.scale), "selected" in w && t(3, r = w.selected);
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
    u,
    c,
    n,
    p,
    d,
    g,
    _,
    h,
    v,
    N,
    L
  ];
}
class Ge extends Re {
  constructor(n) {
    super(), Ce(this, n, qi, Gi, Ie, { x: 0, y: 1, scale: 2, selected: 3 });
  }
}
function Yi(e) {
  let n, t, o, s, l, f, r;
  return {
    c() {
      n = q("g"), t = q("circle"), s = q("circle"), l = q("circle"), i(t, "class", "a9s-polygon-midpoint-buffer svelte-12ykj76"), i(
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
    m(a, u) {
      U(a, n, u), Z(n, t), Z(n, s), Z(n, l), f || (r = [
        $(
          t,
          "pointerdown",
          /*pointerdown_handler*/
          e[5]
        ),
        $(
          t,
          "pointerdown",
          /*onPointerDown*/
          e[3]
        )
      ], f = !0);
    },
    p(a, u) {
      u & /*x*/
      1 && i(
        t,
        "cx",
        /*x*/
        a[0]
      ), u & /*y*/
      2 && i(
        t,
        "cy",
        /*y*/
        a[1]
      ), u & /*handleRadius*/
      4 && o !== (o = 1.75 * /*handleRadius*/
      a[2]) && i(t, "r", o), u & /*x*/
      1 && i(
        s,
        "cx",
        /*x*/
        a[0]
      ), u & /*y*/
      2 && i(
        s,
        "cy",
        /*y*/
        a[1]
      ), u & /*handleRadius*/
      4 && i(
        s,
        "r",
        /*handleRadius*/
        a[2]
      ), u & /*x*/
      1 && i(
        l,
        "cx",
        /*x*/
        a[0]
      ), u & /*y*/
      2 && i(
        l,
        "cy",
        /*y*/
        a[1]
      ), u & /*handleRadius*/
      4 && i(
        l,
        "r",
        /*handleRadius*/
        a[2]
      );
    },
    d(a) {
      a && B(n), f = !1, Le(r);
    }
  };
}
function zi(e) {
  let n;
  return {
    c() {
      n = q("circle"), i(
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
function Vi(e) {
  let n;
  function t(l, f) {
    return dn ? zi : Yi;
  }
  let s = t()(e);
  return {
    c() {
      s.c(), n = He();
    },
    m(l, f) {
      s.m(l, f), U(l, n, f);
    },
    p(l, [f]) {
      s.p(l, f);
    },
    i: Se,
    o: Se,
    d(l) {
      l && B(n), s.d(l);
    }
  };
}
function Ki(e, n, t) {
  let o, { x: s } = n, { y: l } = n, { scale: f } = n;
  const r = (u) => {
    u.pointerType;
  };
  function a(u) {
    he.call(this, e, u);
  }
  return e.$$set = (u) => {
    "x" in u && t(0, s = u.x), "y" in u && t(1, l = u.y), "scale" in u && t(4, f = u.scale);
  }, e.$$.update = () => {
    e.$$.dirty & /*scale*/
    16 && t(2, o = 4 / f);
  }, [s, l, o, r, f, a];
}
class zt extends Re {
  constructor(n) {
    super(), Ce(this, n, Ki, Vi, Ie, { x: 0, y: 1, scale: 4 });
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
      n = q("circle"), i(n, "cx", t = /*point*/
      e[28][0]), i(n, "cy", o = /*point*/
      e[28][1]), i(n, "r", s = Fn / /*viewportScale*/
      e[3]), i(n, "class", "svelte-1h2slbm");
    },
    m(l, f) {
      U(l, n, f);
    },
    p(l, f) {
      f[0] & /*midpoints, visibleMidpoint*/
      1088 && t !== (t = /*point*/
      l[28][0]) && i(n, "cx", t), f[0] & /*midpoints, visibleMidpoint*/
      1088 && o !== (o = /*point*/
      l[28][1]) && i(n, "cy", o), f[0] & /*viewportScale*/
      8 && s !== (s = Fn / /*viewportScale*/
      l[3]) && i(n, "r", s);
    },
    d(l) {
      l && B(n);
    }
  };
}
function Ro(e) {
  let n, t, o, s, l, f, r, a, u, c;
  return {
    c() {
      n = q("mask"), t = q("rect"), r = q("circle"), i(t, "x", o = /*mask*/
      e[9].x), i(t, "y", s = /*mask*/
      e[9].y), i(t, "width", l = /*mask*/
      e[9].w), i(t, "height", f = /*mask*/
      e[9].h), i(t, "class", "svelte-1h2slbm"), i(r, "cx", a = /*point*/
      e[28][0]), i(r, "cy", u = /*point*/
      e[28][1]), i(r, "r", c = Fn / /*viewportScale*/
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
      512 && f !== (f = /*mask*/
      p[9].h) && i(t, "height", f), d[0] & /*midpoints, visibleMidpoint*/
      1088 && a !== (a = /*point*/
      p[28][0]) && i(r, "cx", a), d[0] & /*midpoints, visibleMidpoint*/
      1088 && u !== (u = /*point*/
      p[28][1]) && i(r, "cy", u), d[0] & /*viewportScale*/
      8 && c !== (c = Fn / /*viewportScale*/
      p[3]) && i(r, "r", c);
    },
    d(p) {
      p && B(n);
    }
  };
}
function No(e) {
  let n, t;
  return n = new Ge({
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
    se(
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
      _e(n.$$.fragment);
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
      t || (J(n.$$.fragment, o), t = !0);
    },
    o(o) {
      ee(n.$$.fragment, o), t = !1;
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
    se(
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
      _e(n.$$.fragment);
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
      t || (J(n.$$.fragment, o), t = !0);
    },
    o(o) {
      ee(n.$$.fragment, o), t = !1;
    },
    d(o) {
      me(n, o);
    }
  };
}
function Fi(e) {
  let n, t, o, s, l, f, r, a, u, c, p, d, g, _, h, v, N, L, w, b, k, P = (
    /*visibleMidpoint*/
    e[6] !== void 0 && !/*isHandleHovered*/
    e[7] && Co(bt(e))
  ), m = (
    /*visibleMidpoint*/
    e[6] !== void 0 && !/*isHandleHovered*/
    e[7] && Ro(wt(e))
  ), O = Ae(
    /*geom*/
    e[5].points
  ), y = [];
  for (let T = 0; T < O.length; T += 1)
    y[T] = No(Io(e, O, T));
  const M = (T) => ee(y[T], 1, 1, () => {
    y[T] = null;
  });
  let A = (
    /*visibleMidpoint*/
    e[6] !== void 0 && !/*isHandleHovered*/
    e[7] && Ao(yt(e))
  );
  return {
    c() {
      n = q("defs"), t = q("mask"), o = q("rect"), a = q("polygon"), P && P.c(), m && m.c(), c = ne(), p = q("polygon"), g = ne(), _ = q("polygon"), v = ne();
      for (let T = 0; T < y.length; T += 1)
        y[T].c();
      N = ne(), A && A.c(), L = He(), i(o, "x", s = /*mask*/
      e[9].x), i(o, "y", l = /*mask*/
      e[9].y), i(o, "width", f = /*mask*/
      e[9].w), i(o, "height", r = /*mask*/
      e[9].h), i(o, "class", "svelte-1h2slbm"), i(a, "points", u = /*geom*/
      e[5].points.map(Do).join(" ")), i(a, "class", "svelte-1h2slbm"), i(t, "id", `${/*maskId*/
      e[19]}-outer`), i(t, "class", "a9s-polygon-editor-mask svelte-1h2slbm"), i(p, "class", "a9s-outer"), i(p, "mask", `url(#${/*maskId*/
      e[19]}-outer)`), i(p, "points", d = /*geom*/
      e[5].points.map(Xo).join(" ")), i(_, "class", "a9s-inner a9s-shape-handle"), i(_, "mask", `url(#${/*maskId*/
      e[19]}-inner)`), i(
        _,
        "style",
        /*computedStyle*/
        e[1]
      ), i(_, "points", h = /*geom*/
      e[5].points.map(jo).join(" "));
    },
    m(T, X) {
      U(T, n, X), Z(n, t), Z(t, o), Z(t, a), P && P.m(t, null), m && m.m(n, null), U(T, c, X), U(T, p, X), U(T, g, X), U(T, _, X), U(T, v, X);
      for (let C = 0; C < y.length; C += 1)
        y[C] && y[C].m(T, X);
      U(T, N, X), A && A.m(T, X), U(T, L, X), w = !0, b || (k = [
        $(
          p,
          "pointerup",
          /*onShapePointerUp*/
          e[14]
        ),
        $(p, "pointerdown", function() {
          se(
            /*grab*/
            e[27]("SHAPE")
          ) && e[27]("SHAPE").apply(this, arguments);
        }),
        $(
          _,
          "pointermove",
          /*onPointerMove*/
          e[13]
        ),
        $(
          _,
          "pointerup",
          /*onShapePointerUp*/
          e[14]
        ),
        $(_, "pointerdown", function() {
          se(
            /*grab*/
            e[27]("SHAPE")
          ) && e[27]("SHAPE").apply(this, arguments);
        })
      ], b = !0);
    },
    p(T, X) {
      if (e = T, (!w || X[0] & /*mask*/
      512 && s !== (s = /*mask*/
      e[9].x)) && i(o, "x", s), (!w || X[0] & /*mask*/
      512 && l !== (l = /*mask*/
      e[9].y)) && i(o, "y", l), (!w || X[0] & /*mask*/
      512 && f !== (f = /*mask*/
      e[9].w)) && i(o, "width", f), (!w || X[0] & /*mask*/
      512 && r !== (r = /*mask*/
      e[9].h)) && i(o, "height", r), (!w || X[0] & /*geom*/
      32 && u !== (u = /*geom*/
      e[5].points.map(Do).join(" "))) && i(a, "points", u), /*visibleMidpoint*/
      e[6] !== void 0 && !/*isHandleHovered*/
      e[7] ? P ? P.p(bt(e), X) : (P = Co(bt(e)), P.c(), P.m(t, null)) : P && (P.d(1), P = null), /*visibleMidpoint*/
      e[6] !== void 0 && !/*isHandleHovered*/
      e[7] ? m ? m.p(wt(e), X) : (m = Ro(wt(e)), m.c(), m.m(n, null)) : m && (m.d(1), m = null), (!w || X[0] & /*geom*/
      32 && d !== (d = /*geom*/
      e[5].points.map(Xo).join(" "))) && i(p, "points", d), (!w || X[0] & /*computedStyle*/
      2) && i(
        _,
        "style",
        /*computedStyle*/
        e[1]
      ), (!w || X[0] & /*geom*/
      32 && h !== (h = /*geom*/
      e[5].points.map(jo).join(" "))) && i(_, "points", h), X[0] & /*geom, viewportScale, selectedCorners, onEnterHandle, onLeaveHandle, onHandlePointerDown, grab, onHandlePointerUp*/
      134322472) {
        O = Ae(
          /*geom*/
          e[5].points
        );
        let C;
        for (C = 0; C < O.length; C += 1) {
          const H = Io(e, O, C);
          y[C] ? (y[C].p(H, X), J(y[C], 1)) : (y[C] = No(H), y[C].c(), J(y[C], 1), y[C].m(N.parentNode, N));
        }
        for (Ve(), C = O.length; C < y.length; C += 1)
          M(C);
        Ke();
      }
      /*visibleMidpoint*/
      e[6] !== void 0 && !/*isHandleHovered*/
      e[7] ? A ? (A.p(yt(e), X), X[0] & /*visibleMidpoint, isHandleHovered*/
      192 && J(A, 1)) : (A = Ao(yt(e)), A.c(), J(A, 1), A.m(L.parentNode, L)) : A && (Ve(), ee(A, 1, 1, () => {
        A = null;
      }), Ke());
    },
    i(T) {
      if (!w) {
        for (let X = 0; X < O.length; X += 1)
          J(y[X]);
        J(A), w = !0;
      }
    },
    o(T) {
      y = y.filter(Boolean);
      for (let X = 0; X < y.length; X += 1)
        ee(y[X]);
      ee(A), w = !1;
    },
    d(T) {
      T && (B(n), B(c), B(p), B(g), B(_), B(v), B(N), B(L)), P && P.d(), m && m.d(), jn(y, T), A && A.d(T), b = !1, Le(k);
    }
  };
}
function Wi(e) {
  let n, t;
  return n = new _n({
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
          Fi,
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
      _e(n.$$.fragment);
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
      t || (J(n.$$.fragment, o), t = !0);
    },
    o(o) {
      ee(n.$$.fragment, o), t = !1;
    },
    d(o) {
      me(n, o);
    }
  };
}
const Zi = 250, Qi = 1e3, Ji = 12, Fn = 4.5, Do = (e) => e.join(","), Xo = (e) => e.join(","), jo = (e) => e.join(",");
function $i(e, n, t) {
  let o, s, l;
  const f = xe();
  let { shape: r } = n, { computedStyle: a } = n, { transform: u } = n, { viewportScale: c = 1 } = n, { svgEl: p } = n, d, g = !1, _, h = [];
  const v = () => t(7, g = !0), N = () => t(7, g = !1), L = (C) => {
    if (h.length > 0 || !s.some((V) => V.visible)) {
      t(6, d = void 0);
      return;
    }
    const [H, Y] = u.elementToImage(C.offsetX, C.offsetY), R = (V) => Math.pow(V[0] - H, 2) + Math.pow(V[1] - Y, 2), G = o.points.reduce((V, Q) => R(Q) < R(V) ? Q : V), W = s.filter((V) => V.visible).reduce((V, Q) => R(Q.point) < R(V.point) ? Q : V), D = Math.pow(Qi / c, 2);
    R(G) < D || R(W.point) < D ? t(6, d = s.indexOf(W)) : t(6, d = void 0);
  }, w = () => {
    document.activeElement !== p && p.focus();
  }, b = () => {
    t(8, h = []), w();
  }, k = (C) => {
    t(7, g = !0), C.preventDefault(), C.stopPropagation(), _ = performance.now();
  }, P = (C) => (H) => {
    if (!_ || dn || performance.now() - _ > Zi) return;
    const Y = h.includes(C);
    H.metaKey || H.ctrlKey || H.shiftKey ? Y ? t(8, h = h.filter((R) => R !== C)) : t(8, h = [...h, C]) : Y && h.length > 1 ? t(8, h = [C]) : Y ? t(8, h = []) : t(8, h = [C]), w();
  }, m = (C, H, Y) => {
    w();
    let R;
    const G = C.geometry;
    h.length > 1 ? R = G.points.map(([D, j], V) => h.includes(V) ? [D + Y[0], j + Y[1]] : [D, j]) : H === "SHAPE" ? R = G.points.map(([D, j]) => [D + Y[0], j + Y[1]]) : R = G.points.map(([D, j], V) => H === `HANDLE-${V}` ? [D + Y[0], j + Y[1]] : [D, j]);
    const W = hn(R);
    return { ...C, geometry: { points: R, bounds: W } };
  }, O = (C) => async (H) => {
    H.stopPropagation();
    const Y = [
      ...o.points.slice(0, C + 1),
      s[C].point,
      ...o.points.slice(C + 1)
    ], R = hn(Y);
    f("change", { ...r, geometry: { points: Y, bounds: R } }), await Kn();
    const G = [...document.querySelectorAll(".a9s-handle")][C + 1];
    if (G != null && G.firstChild) {
      const W = new PointerEvent(
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
      G.firstChild.dispatchEvent(W);
    }
  }, y = () => {
    if (o.points.length - h.length < 3) return;
    const C = o.points.filter((Y, R) => !h.includes(R)), H = hn(C);
    f("change", { ...r, geometry: { points: C, bounds: H } }), t(8, h = []);
  };
  on(() => {
    if (dn) return;
    const C = (H) => {
      (H.key === "Delete" || H.key === "Backspace") && (H.preventDefault(), y());
    };
    return p.addEventListener("pointermove", L), p.addEventListener("keydown", C), () => {
      p.removeEventListener("pointermove", L), p.removeEventListener("keydown", C);
    };
  });
  const M = `polygon-mask-${Math.random().toString(36).substring(2, 12)}`;
  function A(C) {
    he.call(this, e, C);
  }
  function T(C) {
    he.call(this, e, C);
  }
  function X(C) {
    he.call(this, e, C);
  }
  return e.$$set = (C) => {
    "shape" in C && t(0, r = C.shape), "computedStyle" in C && t(1, a = C.computedStyle), "transform" in C && t(2, u = C.transform), "viewportScale" in C && t(3, c = C.viewportScale), "svgEl" in C && t(4, p = C.svgEl);
  }, e.$$.update = () => {
    e.$$.dirty[0] & /*shape*/
    1 && t(5, o = r.geometry), e.$$.dirty[0] & /*geom, viewportScale*/
    40 && t(10, s = dn ? [] : o.points.map((C, H) => {
      const Y = H === o.points.length - 1 ? o.points[0] : o.points[H + 1], R = (C[0] + Y[0]) / 2, G = (C[1] + Y[1]) / 2, D = Math.sqrt(Math.pow(Y[0] - R, 2) + Math.pow(Y[1] - G, 2)) > Ji / c;
      return { point: [R, G], visible: D };
    })), e.$$.dirty[0] & /*geom, viewportScale*/
    40 && t(9, l = Yt(o.bounds, Fn / c));
  }, [
    r,
    a,
    u,
    c,
    p,
    o,
    d,
    g,
    h,
    l,
    s,
    v,
    N,
    L,
    b,
    k,
    P,
    m,
    O,
    M,
    A,
    T,
    X
  ];
}
class xi extends Re {
  constructor(n) {
    super(), Ce(
      this,
      n,
      $i,
      Wi,
      Ie,
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
function er(e) {
  let n, t, o, s, l, f, r, a, u, c, p, d, g, _, h, v, N, L, w, b, k, P, m, O, y, M, A, T, X, C, H, Y, R, G, W, D, j, V, Q, x, F, oe, be, te, Oe, ue, ve, ce, Xe, pe, je, ke, K, Fe, z;
  return ue = new Ge({
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
  }), ue.$on("pointerdown", function() {
    se(
      /*grab*/
      e[12]("TOP_LEFT")
    ) && e[12]("TOP_LEFT").apply(this, arguments);
  }), ce = new Ge({
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
  }), ce.$on("pointerdown", function() {
    se(
      /*grab*/
      e[12]("TOP_RIGHT")
    ) && e[12]("TOP_RIGHT").apply(this, arguments);
  }), pe = new Ge({
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
    se(
      /*grab*/
      e[12]("BOTTOM_RIGHT")
    ) && e[12]("BOTTOM_RIGHT").apply(this, arguments);
  }), ke = new Ge({
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
  }), ke.$on("pointerdown", function() {
    se(
      /*grab*/
      e[12]("BOTTOM_LEFT")
    ) && e[12]("BOTTOM_LEFT").apply(this, arguments);
  }), {
    c() {
      n = q("defs"), t = q("mask"), o = q("rect"), a = q("rect"), g = ne(), _ = q("rect"), w = ne(), b = q("rect"), y = ne(), M = q("rect"), C = ne(), H = q("rect"), W = ne(), D = q("rect"), x = ne(), F = q("rect"), Oe = ne(), _e(ue.$$.fragment), ve = ne(), _e(ce.$$.fragment), Xe = ne(), _e(pe.$$.fragment), je = ne(), _e(ke.$$.fragment), i(o, "class", "rect-mask-bg svelte-1njczvj"), i(o, "x", s = /*mask*/
      e[6].x), i(o, "y", l = /*mask*/
      e[6].y), i(o, "width", f = /*mask*/
      e[6].w), i(o, "height", r = /*mask*/
      e[6].h), i(a, "class", "rect-mask-fg svelte-1njczvj"), i(a, "x", u = /*geom*/
      e[5].x), i(a, "y", c = /*geom*/
      e[5].y), i(a, "width", p = /*geom*/
      e[5].w), i(a, "height", d = /*geom*/
      e[5].h), i(
        t,
        "id",
        /*maskId*/
        e[8]
      ), i(t, "class", "a9s-rectangle-editor-mask svelte-1njczvj"), i(_, "class", "a9s-outer"), i(_, "mask", `url(#${/*maskId*/
      e[8]})`), i(_, "x", h = /*geom*/
      e[5].x), i(_, "y", v = /*geom*/
      e[5].y), i(_, "width", N = /*geom*/
      e[5].w), i(_, "height", L = /*geom*/
      e[5].h), i(b, "class", "a9s-inner a9s-shape-handle"), i(
        b,
        "style",
        /*computedStyle*/
        e[1]
      ), i(b, "x", k = /*geom*/
      e[5].x), i(b, "y", P = /*geom*/
      e[5].y), i(b, "width", m = /*geom*/
      e[5].w), i(b, "height", O = /*geom*/
      e[5].h), i(M, "class", "a9s-edge-handle a9s-edge-handle-top"), i(M, "x", A = /*geom*/
      e[5].x), i(M, "y", T = /*geom*/
      e[5].y), i(M, "height", 1), i(M, "width", X = /*geom*/
      e[5].w), i(H, "class", "a9s-edge-handle a9s-edge-handle-right"), i(H, "x", Y = /*geom*/
      e[5].x + /*geom*/
      e[5].w), i(H, "y", R = /*geom*/
      e[5].y), i(H, "height", G = /*geom*/
      e[5].h), i(H, "width", 1), i(D, "class", "a9s-edge-handle a9s-edge-handle-bottom"), i(D, "x", j = /*geom*/
      e[5].x), i(D, "y", V = /*geom*/
      e[5].y + /*geom*/
      e[5].h), i(D, "height", 1), i(D, "width", Q = /*geom*/
      e[5].w), i(F, "class", "a9s-edge-handle a9s-edge-handle-left"), i(F, "x", oe = /*geom*/
      e[5].x), i(F, "y", be = /*geom*/
      e[5].y), i(F, "height", te = /*geom*/
      e[5].h), i(F, "width", 1);
    },
    m(I, S) {
      U(I, n, S), Z(n, t), Z(t, o), Z(t, a), U(I, g, S), U(I, _, S), U(I, w, S), U(I, b, S), U(I, y, S), U(I, M, S), U(I, C, S), U(I, H, S), U(I, W, S), U(I, D, S), U(I, x, S), U(I, F, S), U(I, Oe, S), de(ue, I, S), U(I, ve, S), de(ce, I, S), U(I, Xe, S), de(pe, I, S), U(I, je, S), de(ke, I, S), K = !0, Fe || (z = [
        $(_, "pointerdown", function() {
          se(
            /*grab*/
            e[12]("SHAPE")
          ) && e[12]("SHAPE").apply(this, arguments);
        }),
        $(b, "pointerdown", function() {
          se(
            /*grab*/
            e[12]("SHAPE")
          ) && e[12]("SHAPE").apply(this, arguments);
        }),
        $(M, "pointerdown", function() {
          se(
            /*grab*/
            e[12]("TOP")
          ) && e[12]("TOP").apply(this, arguments);
        }),
        $(H, "pointerdown", function() {
          se(
            /*grab*/
            e[12]("RIGHT")
          ) && e[12]("RIGHT").apply(this, arguments);
        }),
        $(D, "pointerdown", function() {
          se(
            /*grab*/
            e[12]("BOTTOM")
          ) && e[12]("BOTTOM").apply(this, arguments);
        }),
        $(F, "pointerdown", function() {
          se(
            /*grab*/
            e[12]("LEFT")
          ) && e[12]("LEFT").apply(this, arguments);
        })
      ], Fe = !0);
    },
    p(I, S) {
      e = I, (!K || S & /*mask*/
      64 && s !== (s = /*mask*/
      e[6].x)) && i(o, "x", s), (!K || S & /*mask*/
      64 && l !== (l = /*mask*/
      e[6].y)) && i(o, "y", l), (!K || S & /*mask*/
      64 && f !== (f = /*mask*/
      e[6].w)) && i(o, "width", f), (!K || S & /*mask*/
      64 && r !== (r = /*mask*/
      e[6].h)) && i(o, "height", r), (!K || S & /*geom*/
      32 && u !== (u = /*geom*/
      e[5].x)) && i(a, "x", u), (!K || S & /*geom*/
      32 && c !== (c = /*geom*/
      e[5].y)) && i(a, "y", c), (!K || S & /*geom*/
      32 && p !== (p = /*geom*/
      e[5].w)) && i(a, "width", p), (!K || S & /*geom*/
      32 && d !== (d = /*geom*/
      e[5].h)) && i(a, "height", d), (!K || S & /*geom*/
      32 && h !== (h = /*geom*/
      e[5].x)) && i(_, "x", h), (!K || S & /*geom*/
      32 && v !== (v = /*geom*/
      e[5].y)) && i(_, "y", v), (!K || S & /*geom*/
      32 && N !== (N = /*geom*/
      e[5].w)) && i(_, "width", N), (!K || S & /*geom*/
      32 && L !== (L = /*geom*/
      e[5].h)) && i(_, "height", L), (!K || S & /*computedStyle*/
      2) && i(
        b,
        "style",
        /*computedStyle*/
        e[1]
      ), (!K || S & /*geom*/
      32 && k !== (k = /*geom*/
      e[5].x)) && i(b, "x", k), (!K || S & /*geom*/
      32 && P !== (P = /*geom*/
      e[5].y)) && i(b, "y", P), (!K || S & /*geom*/
      32 && m !== (m = /*geom*/
      e[5].w)) && i(b, "width", m), (!K || S & /*geom*/
      32 && O !== (O = /*geom*/
      e[5].h)) && i(b, "height", O), (!K || S & /*geom*/
      32 && A !== (A = /*geom*/
      e[5].x)) && i(M, "x", A), (!K || S & /*geom*/
      32 && T !== (T = /*geom*/
      e[5].y)) && i(M, "y", T), (!K || S & /*geom*/
      32 && X !== (X = /*geom*/
      e[5].w)) && i(M, "width", X), (!K || S & /*geom*/
      32 && Y !== (Y = /*geom*/
      e[5].x + /*geom*/
      e[5].w)) && i(H, "x", Y), (!K || S & /*geom*/
      32 && R !== (R = /*geom*/
      e[5].y)) && i(H, "y", R), (!K || S & /*geom*/
      32 && G !== (G = /*geom*/
      e[5].h)) && i(H, "height", G), (!K || S & /*geom*/
      32 && j !== (j = /*geom*/
      e[5].x)) && i(D, "x", j), (!K || S & /*geom*/
      32 && V !== (V = /*geom*/
      e[5].y + /*geom*/
      e[5].h)) && i(D, "y", V), (!K || S & /*geom*/
      32 && Q !== (Q = /*geom*/
      e[5].w)) && i(D, "width", Q), (!K || S & /*geom*/
      32 && oe !== (oe = /*geom*/
      e[5].x)) && i(F, "x", oe), (!K || S & /*geom*/
      32 && be !== (be = /*geom*/
      e[5].y)) && i(F, "y", be), (!K || S & /*geom*/
      32 && te !== (te = /*geom*/
      e[5].h)) && i(F, "height", te);
      const re = {};
      S & /*geom*/
      32 && (re.x = /*geom*/
      e[5].x), S & /*geom*/
      32 && (re.y = /*geom*/
      e[5].y), S & /*viewportScale*/
      8 && (re.scale = /*viewportScale*/
      e[3]), ue.$set(re);
      const ge = {};
      S & /*geom*/
      32 && (ge.x = /*geom*/
      e[5].x + /*geom*/
      e[5].w), S & /*geom*/
      32 && (ge.y = /*geom*/
      e[5].y), S & /*viewportScale*/
      8 && (ge.scale = /*viewportScale*/
      e[3]), ce.$set(ge);
      const Ee = {};
      S & /*geom*/
      32 && (Ee.x = /*geom*/
      e[5].x + /*geom*/
      e[5].w), S & /*geom*/
      32 && (Ee.y = /*geom*/
      e[5].y + /*geom*/
      e[5].h), S & /*viewportScale*/
      8 && (Ee.scale = /*viewportScale*/
      e[3]), pe.$set(Ee);
      const le = {};
      S & /*geom*/
      32 && (le.x = /*geom*/
      e[5].x), S & /*geom*/
      32 && (le.y = /*geom*/
      e[5].y + /*geom*/
      e[5].h), S & /*viewportScale*/
      8 && (le.scale = /*viewportScale*/
      e[3]), ke.$set(le);
    },
    i(I) {
      K || (J(ue.$$.fragment, I), J(ce.$$.fragment, I), J(pe.$$.fragment, I), J(ke.$$.fragment, I), K = !0);
    },
    o(I) {
      ee(ue.$$.fragment, I), ee(ce.$$.fragment, I), ee(pe.$$.fragment, I), ee(ke.$$.fragment, I), K = !1;
    },
    d(I) {
      I && (B(n), B(g), B(_), B(w), B(b), B(y), B(M), B(C), B(H), B(W), B(D), B(x), B(F), B(Oe), B(ve), B(Xe), B(je)), me(ue, I), me(ce, I), me(pe, I), me(ke, I), Fe = !1, Le(z);
    }
  };
}
function nr(e) {
  let n, t;
  return n = new _n({
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
          er,
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
      _e(n.$$.fragment);
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
      t || (J(n.$$.fragment, o), t = !0);
    },
    o(o) {
      ee(n.$$.fragment, o), t = !1;
    },
    d(o) {
      me(n, o);
    }
  };
}
function tr(e, n, t) {
  let o, s, { shape: l } = n, { computedStyle: f } = n, { transform: r } = n, { viewportScale: a = 1 } = n, { svgEl: u } = n;
  const c = (h, v, N) => {
    const L = h.geometry.bounds;
    let [w, b] = [L.minX, L.minY], [k, P] = [L.maxX, L.maxY];
    const [m, O] = N;
    if (v === "SHAPE")
      w += m, k += m, b += O, P += O;
    else {
      switch (v) {
        case "TOP":
        case "TOP_LEFT":
        case "TOP_RIGHT": {
          b += O;
          break;
        }
        case "BOTTOM":
        case "BOTTOM_LEFT":
        case "BOTTOM_RIGHT": {
          P += O;
          break;
        }
      }
      switch (v) {
        case "LEFT":
        case "TOP_LEFT":
        case "BOTTOM_LEFT": {
          w += m;
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
    const y = Math.min(w, k), M = Math.min(b, P), A = Math.abs(k - w), T = Math.abs(P - b);
    return {
      ...h,
      geometry: {
        x: y,
        y: M,
        w: A,
        h: T,
        bounds: {
          minX: y,
          minY: M,
          maxX: y + A,
          maxY: M + T
        }
      }
    };
  }, p = `rect-mask-${Math.random().toString(36).substring(2, 12)}`;
  function d(h) {
    he.call(this, e, h);
  }
  function g(h) {
    he.call(this, e, h);
  }
  function _(h) {
    he.call(this, e, h);
  }
  return e.$$set = (h) => {
    "shape" in h && t(0, l = h.shape), "computedStyle" in h && t(1, f = h.computedStyle), "transform" in h && t(2, r = h.transform), "viewportScale" in h && t(3, a = h.viewportScale), "svgEl" in h && t(4, u = h.svgEl);
  }, e.$$.update = () => {
    e.$$.dirty & /*shape*/
    1 && t(5, o = l.geometry), e.$$.dirty & /*geom, viewportScale*/
    40 && t(6, s = Yt(o.bounds, 2 / a));
  }, [
    l,
    f,
    r,
    a,
    u,
    o,
    s,
    c,
    p,
    d,
    g,
    _
  ];
}
let or = class extends Re {
  constructor(n) {
    super(), Ce(this, n, tr, nr, Ie, {
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
const sr = 12, lr = (e, n) => e.polygons.reduce((t, o, s) => {
  const l = o.rings.reduce((f, r, a) => {
    const u = r.points.map((c, p) => {
      const d = p === r.points.length - 1 ? r.points[0] : r.points[p + 1], g = (c[0] + d[0]) / 2, _ = (c[1] + d[1]) / 2, v = Math.sqrt(
        Math.pow(d[0] - g, 2) + Math.pow(d[1] - _, 2)
      ) > sr / n;
      return { point: [g, _], visible: v, elementIdx: s, ringIdx: a, pointIdx: p };
    });
    return [...f, ...u];
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
function qo(e, n, t) {
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
function Yo(e) {
  let n, t, o, s;
  return {
    c() {
      n = q("circle"), i(n, "cx", t = /*point*/
      e[29][0]), i(n, "cy", o = /*point*/
      e[29][1]), i(n, "r", s = Wn / /*viewportScale*/
      e[3]), i(n, "class", "svelte-1vxo6dc");
    },
    m(l, f) {
      U(l, n, f);
    },
    p(l, f) {
      f[0] & /*midpoints, visibleMidpoint*/
      1088 && t !== (t = /*point*/
      l[29][0]) && i(n, "cx", t), f[0] & /*midpoints, visibleMidpoint*/
      1088 && o !== (o = /*point*/
      l[29][1]) && i(n, "cy", o), f[0] & /*viewportScale*/
      8 && s !== (s = Wn / /*viewportScale*/
      l[3]) && i(n, "r", s);
    },
    d(l) {
      l && B(n);
    }
  };
}
function zo(e) {
  let n, t, o, s, l, f, r, a, u, c;
  return {
    c() {
      n = q("mask"), t = q("rect"), r = q("circle"), i(t, "x", o = /*mask*/
      e[9].x), i(t, "y", s = /*mask*/
      e[9].y), i(t, "width", l = /*mask*/
      e[9].w), i(t, "height", f = /*mask*/
      e[9].h), i(t, "class", "svelte-1vxo6dc"), i(r, "cx", a = /*point*/
      e[29][0]), i(r, "cy", u = /*point*/
      e[29][1]), i(r, "r", c = Wn / /*viewportScale*/
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
      512 && f !== (f = /*mask*/
      p[9].h) && i(t, "height", f), d[0] & /*midpoints, visibleMidpoint*/
      1088 && a !== (a = /*point*/
      p[29][0]) && i(r, "cx", a), d[0] & /*midpoints, visibleMidpoint*/
      1088 && u !== (u = /*point*/
      p[29][1]) && i(r, "cy", u), d[0] & /*viewportScale*/
      8 && c !== (c = Wn / /*viewportScale*/
      p[3]) && i(r, "r", c);
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
  return n = new Ge({
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
    se(
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
      _e(n.$$.fragment);
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
      t || (J(n.$$.fragment, s), t = !0);
    },
    o(s) {
      ee(n.$$.fragment, s), t = !1;
    },
    d(s) {
      me(n, s);
    }
  };
}
function Ko(e) {
  let n, t, o = Ae(
    /*ring*/
    e[33].points
  ), s = [];
  for (let f = 0; f < o.length; f += 1)
    s[f] = Vo(qo(e, o, f));
  const l = (f) => ee(s[f], 1, 1, () => {
    s[f] = null;
  });
  return {
    c() {
      for (let f = 0; f < s.length; f += 1)
        s[f].c();
      n = He();
    },
    m(f, r) {
      for (let a = 0; a < s.length; a += 1)
        s[a] && s[a].m(f, r);
      U(f, n, r), t = !0;
    },
    p(f, r) {
      if (r[0] & /*geom, viewportScale, selectedCorners, onEnterHandle, onLeaveHandle, onHandlePointerDown, grab, onHandlePointerUp*/
      268491048) {
        o = Ae(
          /*ring*/
          f[33].points
        );
        let a;
        for (a = 0; a < o.length; a += 1) {
          const u = qo(f, o, a);
          s[a] ? (s[a].p(u, r), J(s[a], 1)) : (s[a] = Vo(u), s[a].c(), J(s[a], 1), s[a].m(n.parentNode, n));
        }
        for (Ve(), a = o.length; a < s.length; a += 1)
          l(a);
        Ke();
      }
    },
    i(f) {
      if (!t) {
        for (let r = 0; r < o.length; r += 1)
          J(s[r]);
        t = !0;
      }
    },
    o(f) {
      s = s.filter(Boolean);
      for (let r = 0; r < s.length; r += 1)
        ee(s[r]);
      t = !1;
    },
    d(f) {
      f && B(n), jn(s, f);
    }
  };
}
function Fo(e) {
  let n, t, o, s, l, f, r, a, u, c, p, d, g, _, h, v, N, L = (
    /*visibleMidpoint*/
    e[6] !== void 0 && !/*isHandleHovered*/
    e[7] && Yo(kt(e))
  ), w = (
    /*visibleMidpoint*/
    e[6] !== void 0 && !/*isHandleHovered*/
    e[7] && zo(Et(e))
  ), b = Ae(
    /*element*/
    e[30].rings
  ), k = [];
  for (let m = 0; m < b.length; m += 1)
    k[m] = Ko(Go(e, b, m));
  const P = (m) => ee(k[m], 1, 1, () => {
    k[m] = null;
  });
  return {
    c() {
      n = q("g"), t = q("defs"), o = q("mask"), s = q("rect"), u = q("path"), L && L.c(), w && w.c(), p = q("path"), g = q("path");
      for (let m = 0; m < k.length; m += 1)
        k[m].c();
      i(s, "x", l = /*mask*/
      e[9].x), i(s, "y", f = /*mask*/
      e[9].y), i(s, "width", r = /*mask*/
      e[9].w), i(s, "height", a = /*mask*/
      e[9].h), i(s, "class", "svelte-1vxo6dc"), i(u, "d", c = Tn(
        /*element*/
        e[30]
      )), i(u, "class", "svelte-1vxo6dc"), i(o, "id", `${/*maskId*/
      e[18]}-${/*elementIdx*/
      e[32]}-outer`), i(o, "class", "a9s-multipolygon-editor-mask svelte-1vxo6dc"), i(p, "class", "a9s-outer"), i(p, "mask", `url(#${/*maskId*/
      e[18]}-${/*elementIdx*/
      e[32]}-outer)`), i(p, "fill-rule", "evenodd"), i(p, "d", d = Tn(
        /*element*/
        e[30]
      )), i(g, "class", "a9s-inner"), i(g, "mask", `url(#${/*maskId*/
      e[18]}-${/*elementIdx*/
      e[32]}-inner)`), i(
        g,
        "style",
        /*computedStyle*/
        e[1]
      ), i(g, "fill-rule", "evenodd"), i(g, "d", _ = Tn(
        /*element*/
        e[30]
      ));
    },
    m(m, O) {
      U(m, n, O), Z(n, t), Z(t, o), Z(o, s), Z(o, u), L && L.m(o, null), w && w.m(t, null), Z(n, p), Z(n, g);
      for (let y = 0; y < k.length; y += 1)
        k[y] && k[y].m(n, null);
      h = !0, v || (N = [
        $(
          p,
          "pointerup",
          /*onShapePointerUp*/
          e[13]
        ),
        $(p, "pointerdown", function() {
          se(
            /*grab*/
            e[28]("SHAPE")
          ) && e[28]("SHAPE").apply(this, arguments);
        }),
        $(
          g,
          "pointerup",
          /*onShapePointerUp*/
          e[13]
        ),
        $(g, "pointerdown", function() {
          se(
            /*grab*/
            e[28]("SHAPE")
          ) && e[28]("SHAPE").apply(this, arguments);
        })
      ], v = !0);
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
      32 && c !== (c = Tn(
        /*element*/
        e[30]
      ))) && i(u, "d", c), /*visibleMidpoint*/
      e[6] !== void 0 && !/*isHandleHovered*/
      e[7] ? L ? L.p(kt(e), O) : (L = Yo(kt(e)), L.c(), L.m(o, null)) : L && (L.d(1), L = null), /*visibleMidpoint*/
      e[6] !== void 0 && !/*isHandleHovered*/
      e[7] ? w ? w.p(Et(e), O) : (w = zo(Et(e)), w.c(), w.m(t, null)) : w && (w.d(1), w = null), (!h || O[0] & /*geom*/
      32 && d !== (d = Tn(
        /*element*/
        e[30]
      ))) && i(p, "d", d), (!h || O[0] & /*computedStyle*/
      2) && i(
        g,
        "style",
        /*computedStyle*/
        e[1]
      ), (!h || O[0] & /*geom*/
      32 && _ !== (_ = Tn(
        /*element*/
        e[30]
      ))) && i(g, "d", _), O[0] & /*geom, viewportScale, selectedCorners, onEnterHandle, onLeaveHandle, onHandlePointerDown, grab, onHandlePointerUp*/
      268491048) {
        b = Ae(
          /*element*/
          e[30].rings
        );
        let y;
        for (y = 0; y < b.length; y += 1) {
          const M = Go(e, b, y);
          k[y] ? (k[y].p(M, O), J(k[y], 1)) : (k[y] = Ko(M), k[y].c(), J(k[y], 1), k[y].m(n, null));
        }
        for (Ve(), y = b.length; y < k.length; y += 1)
          P(y);
        Ke();
      }
    },
    i(m) {
      if (!h) {
        for (let O = 0; O < b.length; O += 1)
          J(k[O]);
        h = !0;
      }
    },
    o(m) {
      k = k.filter(Boolean);
      for (let O = 0; O < k.length; O += 1)
        ee(k[O]);
      h = !1;
    },
    d(m) {
      m && B(n), L && L.d(), w && w.d(), jn(k, m), v = !1, Le(N);
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
    se(
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
      _e(n.$$.fragment);
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
      t || (J(n.$$.fragment, o), t = !0);
    },
    o(o) {
      ee(n.$$.fragment, o), t = !1;
    },
    d(o) {
      me(n, o);
    }
  };
}
function ir(e) {
  let n, t, o, s = Ae(
    /*geom*/
    e[5].polygons
  ), l = [];
  for (let a = 0; a < s.length; a += 1)
    l[a] = Fo(Uo(e, s, a));
  const f = (a) => ee(l[a], 1, 1, () => {
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
      n = ne(), r && r.c(), t = He();
    },
    m(a, u) {
      for (let c = 0; c < l.length; c += 1)
        l[c] && l[c].m(a, u);
      U(a, n, u), r && r.m(a, u), U(a, t, u), o = !0;
    },
    p(a, u) {
      if (u[0] & /*geom, viewportScale, selectedCorners, onEnterHandle, onLeaveHandle, onHandlePointerDown, grab, onHandlePointerUp, maskId, computedStyle, onShapePointerUp, midpoints, visibleMidpoint, mask, isHandleHovered*/
      268763114) {
        s = Ae(
          /*geom*/
          a[5].polygons
        );
        let c;
        for (c = 0; c < s.length; c += 1) {
          const p = Uo(a, s, c);
          l[c] ? (l[c].p(p, u), J(l[c], 1)) : (l[c] = Fo(p), l[c].c(), J(l[c], 1), l[c].m(n.parentNode, n));
        }
        for (Ve(), c = s.length; c < l.length; c += 1)
          f(c);
        Ke();
      }
      /*visibleMidpoint*/
      a[6] !== void 0 && !/*isHandleHovered*/
      a[7] ? r ? (r.p(vt(a), u), u[0] & /*visibleMidpoint, isHandleHovered*/
      192 && J(r, 1)) : (r = Wo(vt(a)), r.c(), J(r, 1), r.m(t.parentNode, t)) : r && (Ve(), ee(r, 1, 1, () => {
        r = null;
      }), Ke());
    },
    i(a) {
      if (!o) {
        for (let u = 0; u < s.length; u += 1)
          J(l[u]);
        J(r), o = !0;
      }
    },
    o(a) {
      l = l.filter(Boolean);
      for (let u = 0; u < l.length; u += 1)
        ee(l[u]);
      ee(r), o = !1;
    },
    d(a) {
      a && (B(n), B(t)), jn(l, a), r && r.d(a);
    }
  };
}
function rr(e) {
  let n, t;
  return n = new _n({
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
          ir,
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
      _e(n.$$.fragment);
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
      t || (J(n.$$.fragment, o), t = !0);
    },
    o(o) {
      ee(n.$$.fragment, o), t = !1;
    },
    d(o) {
      me(n, o);
    }
  };
}
const fr = 250, ar = 1e3, Wn = 4.5;
function ur(e, n, t) {
  let o, s, l;
  const f = xe();
  let { shape: r } = n, { computedStyle: a } = n, { transform: u } = n, { viewportScale: c = 1 } = n, { svgEl: p } = n, d, g = !1, _, h = [];
  const v = () => t(7, g = !0), N = () => t(7, g = !1), L = (H) => {
    if (h.length > 0 || !s.some((Q) => Q.visible)) {
      t(6, d = void 0);
      return;
    }
    const [Y, R] = u.elementToImage(H.offsetX, H.offsetY), G = (Q) => Math.pow(Q[0] - Y, 2) + Math.pow(Q[1] - R, 2), W = Li(o).reduce((Q, x) => G(x) < G(Q) ? x : Q), D = s.filter((Q) => Q.visible).reduce((Q, x) => G(x.point) < G(Q.point) ? x : Q), j = Math.pow(ar / c, 2);
    G(W) < j || G(D.point) < j ? t(6, d = s.indexOf(D)) : t(6, d = void 0);
  }, w = () => {
    document.activeElement !== p && p.focus();
  }, b = () => {
    t(8, h = []), w();
  }, k = (H) => {
    t(7, g = !0), H.preventDefault(), H.stopPropagation(), _ = performance.now();
  }, P = (H, Y, R) => (G) => {
    if (!_ || dn || performance.now() - _ > fr) return;
    const W = (j) => j.polygon === H && j.ring === Y && j.point === R, D = h.some(W);
    G.metaKey || G.ctrlKey || G.shiftKey ? D ? t(8, h = h.filter((j) => !W(j))) : t(8, h = [...h, { polygon: H, ring: Y, point: R }]) : D && h.length > 1 ? t(8, h = [{ polygon: H, ring: Y, point: R }]) : D ? t(8, h = []) : t(8, h = [{ polygon: H, ring: Y, point: R }]), w();
  }, m = (H, Y, R) => {
    w();
    const G = H.geometry.polygons;
    let W;
    if (Y === "SHAPE")
      W = G.map((D) => {
        const j = D.rings.map((Q, x) => ({ points: Q.points.map((oe, be) => [oe[0] + R[0], oe[1] + R[1]]) })), V = hn(j[0].points);
        return { rings: j, bounds: V };
      });
    else {
      const [D, j, V, Q] = Y.split("-").map((x) => parseInt(x));
      W = G.map((x, F) => {
        if (F === j) {
          const oe = x.rings.map((te, Oe) => Oe === V ? { points: te.points.map((ve, ce) => ce === Q ? [ve[0] + R[0], ve[1] + R[1]] : ve) } : te), be = hn(oe[0].points);
          return { rings: oe, bounds: be };
        } else
          return x;
      });
    }
    return {
      ...H,
      geometry: {
        polygons: W,
        bounds: _t(W)
      }
    };
  }, O = (H) => async (Y) => {
    Y.stopPropagation();
    const R = s[H], G = o.polygons.map((D, j) => {
      if (j === R.elementIdx) {
        const V = D.rings.map((x, F) => F === R.ringIdx ? { points: [
          ...x.points.slice(0, R.pointIdx + 1),
          R.point,
          ...x.points.slice(R.pointIdx + 1)
        ] } : x), Q = hn(V[0].points);
        return { rings: V, bounds: Q };
      } else
        return D;
    });
    f("change", {
      ...r,
      geometry: {
        polygons: G,
        bounds: _t(G)
      }
    }), await Kn();
    const W = [...document.querySelectorAll(".a9s-handle")][H + 1];
    if (W != null && W.firstChild) {
      const D = new PointerEvent(
        "pointerdown",
        {
          bubbles: !0,
          cancelable: !0,
          clientX: Y.clientX,
          clientY: Y.clientY,
          pointerId: Y.pointerId,
          pointerType: Y.pointerType,
          isPrimary: Y.isPrimary,
          buttons: Y.buttons
        }
      );
      W.firstChild.dispatchEvent(D);
    }
  }, y = () => {
    const H = o.polygons.map((R, G) => {
      if (h.some((D) => D.polygon === G)) {
        const D = R.rings.map((V, Q) => {
          const x = h.filter((F) => F.polygon === G && F.ring === Q);
          return x.length && V.points.length - x.length >= 3 ? { points: V.points.filter((oe, be) => !x.some((te) => te.point === be)) } : V;
        }), j = hn(D[0].points);
        return { rings: D, bounds: j };
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
  on(() => {
    if (dn) return;
    const H = (Y) => {
      (Y.key === "Delete" || Y.key === "Backspace") && (Y.preventDefault(), y());
    };
    return p.addEventListener("pointermove", L), p.addEventListener("keydown", H), () => {
      p.removeEventListener("pointermove", L), p.removeEventListener("keydown", H);
    };
  });
  const M = `polygon-mask-${Math.random().toString(36).substring(2, 12)}`, A = (H, Y, R, { polygon: G, ring: W, point: D }) => G === H && W === Y && D === R;
  function T(H) {
    he.call(this, e, H);
  }
  function X(H) {
    he.call(this, e, H);
  }
  function C(H) {
    he.call(this, e, H);
  }
  return e.$$set = (H) => {
    "shape" in H && t(0, r = H.shape), "computedStyle" in H && t(1, a = H.computedStyle), "transform" in H && t(2, u = H.transform), "viewportScale" in H && t(3, c = H.viewportScale), "svgEl" in H && t(4, p = H.svgEl);
  }, e.$$.update = () => {
    e.$$.dirty[0] & /*shape*/
    1 && t(5, o = r.geometry), e.$$.dirty[0] & /*geom, viewportScale*/
    40 && t(10, s = dn ? [] : lr(o, c)), e.$$.dirty[0] & /*geom, viewportScale*/
    40 && t(9, l = Yt(o.bounds, Wn / c));
  }, [
    r,
    a,
    u,
    c,
    p,
    o,
    d,
    g,
    h,
    l,
    s,
    v,
    N,
    b,
    k,
    P,
    m,
    O,
    M,
    A,
    T,
    X,
    C
  ];
}
class cr extends Re {
  constructor(n) {
    super(), Ce(
      this,
      n,
      ur,
      rr,
      Ie,
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
an.RECTANGLE, an.POLYGON, an.MULTIPOLYGON;
typeof navigator > "u" ? !1 : navigator.userAgent.indexOf("Mac OS X") !== -1;
function pr(e) {
  let n, t, o, s, l, f, r, a, u, c, p, d, g, _, h, v, N, L, w, b, k, P, m, O, y, M, A, T, X, C, H, Y, R, G, W;
  return M = new Ge({
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
  }), M.$on("pointerdown", function() {
    se(
      /*grab*/
      e[12]("TOP")
    ) && e[12]("TOP").apply(this, arguments);
  }), T = new Ge({
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
    se(
      /*grab*/
      e[12]("RIGHT")
    ) && e[12]("RIGHT").apply(this, arguments);
  }), C = new Ge({
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
    se(
      /*grab*/
      e[12]("BOTTOM")
    ) && e[12]("BOTTOM").apply(this, arguments);
  }), Y = new Ge({
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
  }), Y.$on("pointerdown", function() {
    se(
      /*grab*/
      e[12]("LEFT")
    ) && e[12]("LEFT").apply(this, arguments);
  }), {
    c() {
      n = q("defs"), t = q("mask"), o = q("rect"), a = q("ellipse"), g = ne(), _ = q("ellipse"), w = ne(), b = q("ellipse"), y = ne(), _e(M.$$.fragment), A = ne(), _e(T.$$.fragment), X = ne(), _e(C.$$.fragment), H = ne(), _e(Y.$$.fragment), i(o, "x", s = /*mask*/
      e[6].x), i(o, "y", l = /*mask*/
      e[6].y), i(o, "width", f = /*mask*/
      e[6].w), i(o, "height", r = /*mask*/
      e[6].h), i(o, "class", "svelte-wdm5en"), i(a, "cx", u = /*geom*/
      e[5].cx), i(a, "cy", c = /*geom*/
      e[5].cy), i(a, "rx", p = /*geom*/
      e[5].rx), i(a, "ry", d = /*geom*/
      e[5].ry), i(a, "class", "svelte-wdm5en"), i(
        t,
        "id",
        /*maskId*/
        e[8]
      ), i(t, "class", "a9s-ellipse-editor-mask svelte-wdm5en"), i(_, "class", "a9s-outer"), i(_, "mask", `url(#${/*maskId*/
      e[8]})`), i(_, "cx", h = /*geom*/
      e[5].cx), i(_, "cy", v = /*geom*/
      e[5].cy), i(_, "rx", N = /*geom*/
      e[5].rx), i(_, "ry", L = /*geom*/
      e[5].ry), i(b, "class", "a9s-inner a9s-shape-handle"), i(
        b,
        "style",
        /*computedStyle*/
        e[1]
      ), i(b, "cx", k = /*geom*/
      e[5].cx), i(b, "cy", P = /*geom*/
      e[5].cy), i(b, "rx", m = /*geom*/
      e[5].rx), i(b, "ry", O = /*geom*/
      e[5].ry);
    },
    m(D, j) {
      U(D, n, j), Z(n, t), Z(t, o), Z(t, a), U(D, g, j), U(D, _, j), U(D, w, j), U(D, b, j), U(D, y, j), de(M, D, j), U(D, A, j), de(T, D, j), U(D, X, j), de(C, D, j), U(D, H, j), de(Y, D, j), R = !0, G || (W = [
        $(_, "pointerdown", function() {
          se(
            /*grab*/
            e[12]("SHAPE")
          ) && e[12]("SHAPE").apply(this, arguments);
        }),
        $(b, "pointerdown", function() {
          se(
            /*grab*/
            e[12]("SHAPE")
          ) && e[12]("SHAPE").apply(this, arguments);
        })
      ], G = !0);
    },
    p(D, j) {
      e = D, (!R || j & /*mask*/
      64 && s !== (s = /*mask*/
      e[6].x)) && i(o, "x", s), (!R || j & /*mask*/
      64 && l !== (l = /*mask*/
      e[6].y)) && i(o, "y", l), (!R || j & /*mask*/
      64 && f !== (f = /*mask*/
      e[6].w)) && i(o, "width", f), (!R || j & /*mask*/
      64 && r !== (r = /*mask*/
      e[6].h)) && i(o, "height", r), (!R || j & /*geom*/
      32 && u !== (u = /*geom*/
      e[5].cx)) && i(a, "cx", u), (!R || j & /*geom*/
      32 && c !== (c = /*geom*/
      e[5].cy)) && i(a, "cy", c), (!R || j & /*geom*/
      32 && p !== (p = /*geom*/
      e[5].rx)) && i(a, "rx", p), (!R || j & /*geom*/
      32 && d !== (d = /*geom*/
      e[5].ry)) && i(a, "ry", d), (!R || j & /*geom*/
      32 && h !== (h = /*geom*/
      e[5].cx)) && i(_, "cx", h), (!R || j & /*geom*/
      32 && v !== (v = /*geom*/
      e[5].cy)) && i(_, "cy", v), (!R || j & /*geom*/
      32 && N !== (N = /*geom*/
      e[5].rx)) && i(_, "rx", N), (!R || j & /*geom*/
      32 && L !== (L = /*geom*/
      e[5].ry)) && i(_, "ry", L), (!R || j & /*computedStyle*/
      2) && i(
        b,
        "style",
        /*computedStyle*/
        e[1]
      ), (!R || j & /*geom*/
      32 && k !== (k = /*geom*/
      e[5].cx)) && i(b, "cx", k), (!R || j & /*geom*/
      32 && P !== (P = /*geom*/
      e[5].cy)) && i(b, "cy", P), (!R || j & /*geom*/
      32 && m !== (m = /*geom*/
      e[5].rx)) && i(b, "rx", m), (!R || j & /*geom*/
      32 && O !== (O = /*geom*/
      e[5].ry)) && i(b, "ry", O);
      const V = {};
      j & /*geom*/
      32 && (V.x = /*geom*/
      e[5].cx), j & /*geom*/
      32 && (V.y = /*geom*/
      e[5].cy - /*geom*/
      e[5].ry), j & /*viewportScale*/
      8 && (V.scale = /*viewportScale*/
      e[3]), M.$set(V);
      const Q = {};
      j & /*geom*/
      32 && (Q.x = /*geom*/
      e[5].cx + /*geom*/
      e[5].rx), j & /*geom*/
      32 && (Q.y = /*geom*/
      e[5].cy), j & /*viewportScale*/
      8 && (Q.scale = /*viewportScale*/
      e[3]), T.$set(Q);
      const x = {};
      j & /*geom*/
      32 && (x.x = /*geom*/
      e[5].cx), j & /*geom*/
      32 && (x.y = /*geom*/
      e[5].cy + /*geom*/
      e[5].ry), j & /*viewportScale*/
      8 && (x.scale = /*viewportScale*/
      e[3]), C.$set(x);
      const F = {};
      j & /*geom*/
      32 && (F.x = /*geom*/
      e[5].cx - /*geom*/
      e[5].rx), j & /*geom*/
      32 && (F.y = /*geom*/
      e[5].cy), j & /*viewportScale*/
      8 && (F.scale = /*viewportScale*/
      e[3]), Y.$set(F);
    },
    i(D) {
      R || (J(M.$$.fragment, D), J(T.$$.fragment, D), J(C.$$.fragment, D), J(Y.$$.fragment, D), R = !0);
    },
    o(D) {
      ee(M.$$.fragment, D), ee(T.$$.fragment, D), ee(C.$$.fragment, D), ee(Y.$$.fragment, D), R = !1;
    },
    d(D) {
      D && (B(n), B(g), B(_), B(w), B(b), B(y), B(A), B(X), B(H)), me(M, D), me(T, D), me(C, D), me(Y, D), G = !1, Le(W);
    }
  };
}
function hr(e) {
  let n, t;
  return n = new _n({
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
          pr,
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
      _e(n.$$.fragment);
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
      t || (J(n.$$.fragment, o), t = !0);
    },
    o(o) {
      ee(n.$$.fragment, o), t = !1;
    },
    d(o) {
      me(n, o);
    }
  };
}
function dr(e, n, t) {
  let o, s, { shape: l } = n, { computedStyle: f } = n, { transform: r } = n, { viewportScale: a = 1 } = n, { svgEl: u } = n;
  const c = (h, v, N) => {
    const L = h.geometry.bounds;
    let [w, b] = [L.minX, L.minY], [k, P] = [L.maxX, L.maxY];
    const [m, O] = N;
    if (v === "SHAPE")
      w += m, k += m, b += O, P += O;
    else
      switch (v) {
        case "TOP": {
          b += O;
          break;
        }
        case "BOTTOM": {
          P += O;
          break;
        }
        case "LEFT": {
          w += m;
          break;
        }
        case "RIGHT": {
          k += m;
          break;
        }
      }
    const y = Math.min(w, k), M = Math.min(b, P), A = Math.abs(k - w), T = Math.abs(P - b), X = (w + k) / 2, C = (b + P) / 2, H = A / 2, Y = T / 2;
    return {
      ...h,
      geometry: {
        ...h.geometry,
        cx: X,
        cy: C,
        rx: H,
        ry: Y,
        bounds: {
          minX: y,
          minY: M,
          maxX: y + A,
          maxY: M + T
        }
      }
    };
  }, p = `ellipse-mask-${Math.random().toString(36).substring(2, 12)}`;
  function d(h) {
    he.call(this, e, h);
  }
  function g(h) {
    he.call(this, e, h);
  }
  function _(h) {
    he.call(this, e, h);
  }
  return e.$$set = (h) => {
    "shape" in h && t(0, l = h.shape), "computedStyle" in h && t(1, f = h.computedStyle), "transform" in h && t(2, r = h.transform), "viewportScale" in h && t(3, a = h.viewportScale), "svgEl" in h && t(4, u = h.svgEl);
  }, e.$$.update = () => {
    e.$$.dirty & /*shape*/
    1 && t(5, o = l.geometry), e.$$.dirty & /*geom, viewportScale*/
    40 && t(6, s = vn(o.bounds, 2 / a));
  }, [
    l,
    f,
    r,
    a,
    u,
    o,
    s,
    c,
    p,
    d,
    g,
    _
  ];
}
class mr extends Re {
  constructor(n) {
    super(), Ce(this, n, dr, hr, Ie, {
      shape: 0,
      computedStyle: 1,
      transform: 2,
      viewportScale: 3,
      svgEl: 4
    });
  }
}
function Zo(e) {
  let n, t, o, s, l, f, r, a, u, c, p, d, g, _, h, v, N, L, w, b, k, P;
  return {
    c() {
      n = q("defs"), t = q("mask"), o = q("rect"), a = q("ellipse"), g = q("ellipse"), L = q("ellipse"), i(o, "x", s = /*x*/
      e[2] - /*buffer*/
      e[6]), i(o, "y", l = /*y*/
      e[3] - /*buffer*/
      e[6]), i(o, "width", f = /*w*/
      e[4] + 2 * /*buffer*/
      e[6]), i(o, "height", r = /*h*/
      e[5] + 2 * /*buffer*/
      e[6]), i(o, "class", "svelte-1koqlb3"), i(a, "cx", u = /*x*/
      e[2] + /*w*/
      e[4] / 2), i(a, "cy", c = /*y*/
      e[3] + /*h*/
      e[5] / 2), i(a, "rx", p = /*w*/
      e[4] / 2), i(a, "ry", d = /*h*/
      e[5] / 2), i(a, "class", "svelte-1koqlb3"), i(
        t,
        "id",
        /*maskId*/
        e[7]
      ), i(t, "class", "a9s-rubberband-ellipse-mask svelte-1koqlb3"), i(g, "class", "a9s-outer"), i(g, "mask", `url(#${/*maskId*/
      e[7]})`), i(g, "cx", _ = /*x*/
      e[2] + /*w*/
      e[4] / 2), i(g, "cy", h = /*y*/
      e[3] + /*h*/
      e[5] / 2), i(g, "rx", v = /*w*/
      e[4] / 2), i(g, "ry", N = /*h*/
      e[5] / 2), i(L, "class", "a9s-inner"), i(L, "cx", w = /*x*/
      e[2] + /*w*/
      e[4] / 2), i(L, "cy", b = /*y*/
      e[3] + /*h*/
      e[5] / 2), i(L, "rx", k = /*w*/
      e[4] / 2), i(L, "ry", P = /*h*/
      e[5] / 2);
    },
    m(m, O) {
      U(m, n, O), Z(n, t), Z(t, o), Z(t, a), U(m, g, O), U(m, L, O);
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
      20 && u !== (u = /*x*/
      m[2] + /*w*/
      m[4] / 2) && i(a, "cx", u), O & /*y, h*/
      40 && c !== (c = /*y*/
      m[3] + /*h*/
      m[5] / 2) && i(a, "cy", c), O & /*w*/
      16 && p !== (p = /*w*/
      m[4] / 2) && i(a, "rx", p), O & /*h*/
      32 && d !== (d = /*h*/
      m[5] / 2) && i(a, "ry", d), O & /*x, w*/
      20 && _ !== (_ = /*x*/
      m[2] + /*w*/
      m[4] / 2) && i(g, "cx", _), O & /*y, h*/
      40 && h !== (h = /*y*/
      m[3] + /*h*/
      m[5] / 2) && i(g, "cy", h), O & /*w*/
      16 && v !== (v = /*w*/
      m[4] / 2) && i(g, "rx", v), O & /*h*/
      32 && N !== (N = /*h*/
      m[5] / 2) && i(g, "ry", N), O & /*x, w*/
      20 && w !== (w = /*x*/
      m[2] + /*w*/
      m[4] / 2) && i(L, "cx", w), O & /*y, h*/
      40 && b !== (b = /*y*/
      m[3] + /*h*/
      m[5] / 2) && i(L, "cy", b), O & /*w*/
      16 && k !== (k = /*w*/
      m[4] / 2) && i(L, "rx", k), O & /*h*/
      32 && P !== (P = /*h*/
      m[5] / 2) && i(L, "ry", P);
    },
    d(m) {
      m && (B(n), B(g), B(L));
    }
  };
}
function gr(e) {
  let n, t = (
    /*origin*/
    e[1] && Zo(e)
  );
  return {
    c() {
      n = q("g"), t && t.c(), i(n, "class", "a9s-annotation a9s-rubberband");
    },
    m(o, s) {
      U(o, n, s), t && t.m(n, null), e[12](n);
    },
    p(o, [s]) {
      /*origin*/
      o[1] ? t ? t.p(o, s) : (t = Zo(o), t.c(), t.m(n, null)) : t && (t.d(1), t = null);
    },
    i: Se,
    o: Se,
    d(o) {
      o && B(n), t && t.d(), e[12](null);
    }
  };
}
function _r(e, n, t) {
  let o;
  const s = xe();
  let { addEventListener: l } = n, { drawingMode: f } = n, { transform: r } = n, { viewportScale: a } = n, u, c, p, d, g, _, h, v = !1, N = !1, L, w;
  const b = (T) => {
    const X = T;
    L = performance.now(), f === "drag" && (t(1, c = r.elementToImage(X.offsetX, X.offsetY)), p = c, t(2, d = c[0]), t(3, g = c[1]), t(4, _ = 1), t(5, h = 1));
  }, k = (T) => {
    const X = T || w;
    if (c)
      if (p = r.elementToImage(X.offsetX, X.offsetY), N) {
        const C = 2 * Math.abs(p[0] - c[0]), H = 2 * Math.abs(p[1] - c[1]);
        t(4, _ = v ? Math.max(C, H) : C), t(5, h = v ? _ : H), t(2, d = Math.min(p[0], c[0] - _ / 2)), t(3, g = Math.min(p[1], c[1] - h / 2));
      } else {
        const C = Math.abs(p[0] - c[0]), H = Math.abs(p[1] - c[1]);
        t(4, _ = v ? Math.max(C, H) : C), t(5, h = v ? _ : H), t(2, d = Math.min(p[0], c[0])), t(3, g = Math.min(p[1], c[1]));
      }
    T && (w = T);
  }, P = (T) => {
    const X = T, C = performance.now() - L;
    if (f === "click") {
      if (C > 300) return;
      c ? m() : (t(1, c = r.elementToImage(X.offsetX, X.offsetY)), p = c, t(2, d = c[0]), t(3, g = c[1]), t(4, _ = 1), t(5, h = 1));
    } else c && (C > 300 || _ * h > 100 ? (X.stopPropagation(), m()) : (t(1, c = void 0), p = void 0, w = void 0));
  }, m = () => {
    if (_ * h > 15) {
      const T = {
        type: Pe.ELLIPSE,
        geometry: {
          bounds: {
            minX: d,
            minY: g,
            maxX: d + _,
            maxY: g + h
          },
          cx: d + _ / 2,
          cy: g + h / 2,
          rx: _ / 2,
          ry: h / 2
        }
      };
      s("create", T);
    }
    t(1, c = void 0), p = void 0, w = void 0;
  }, O = (T) => {
    T.key === "Shift" && (v = !0, k()), T.key === "Control" && (N = !0, k());
  }, y = (T) => {
    T.key === "Shift" && (v = !1, k()), T.key === "Control" && (N = !1, k());
  };
  on(() => (document.addEventListener("keyup", y), document.addEventListener("keydown", O), l("pointerdown", b), l("pointermove", k), l("pointerup", P, !0), () => {
    document.removeEventListener("keyup", y), document.removeEventListener("keydown", O);
  }));
  const M = `ellipse-mask-${Math.random().toString(36).substring(2, 12)}`;
  function A(T) {
    gn[T ? "unshift" : "push"](() => {
      u = T, t(0, u);
    });
  }
  return e.$$set = (T) => {
    "addEventListener" in T && t(8, l = T.addEventListener), "drawingMode" in T && t(9, f = T.drawingMode), "transform" in T && t(10, r = T.transform), "viewportScale" in T && t(11, a = T.viewportScale);
  }, e.$$.update = () => {
    e.$$.dirty & /*viewportScale*/
    2048 && t(6, o = 2 / a);
  }, [
    u,
    c,
    d,
    g,
    _,
    h,
    o,
    M,
    l,
    f,
    r,
    a,
    A
  ];
}
class yr extends Re {
  constructor(n) {
    super(), Ce(this, n, _r, gr, Ie, {
      addEventListener: 8,
      drawingMode: 9,
      transform: 10,
      viewportScale: 11
    });
  }
}
function wr(e) {
  let n, t, o, s, l, f, r, a, u, c, p, d, g, _, h, v, N, L;
  return g = new Ge({
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
    se(
      /*grab*/
      e[10]("POINT1")
    ) && e[10]("POINT1").apply(this, arguments);
  }), h = new Ge({
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
    se(
      /*grab*/
      e[10]("POINT2")
    ) && e[10]("POINT2").apply(this, arguments);
  }), {
    c() {
      n = q("line"), f = ne(), r = q("line"), d = ne(), _e(g.$$.fragment), _ = ne(), _e(h.$$.fragment), i(n, "class", "a9s-outer"), i(n, "x1", t = /*geom*/
      e[5].points[0][0]), i(n, "y1", o = /*geom*/
      e[5].points[0][1]), i(n, "x2", s = /*geom*/
      e[5].points[1][0]), i(n, "y2", l = /*geom*/
      e[5].points[1][1]), i(r, "class", "a9s-inner a9s-shape-handle"), i(
        r,
        "style",
        /*computedStyle*/
        e[1]
      ), i(r, "x1", a = /*geom*/
      e[5].points[0][0]), i(r, "y1", u = /*geom*/
      e[5].points[0][1]), i(r, "x2", c = /*geom*/
      e[5].points[1][0]), i(r, "y2", p = /*geom*/
      e[5].points[1][1]);
    },
    m(w, b) {
      U(w, n, b), U(w, f, b), U(w, r, b), U(w, d, b), de(g, w, b), U(w, _, b), de(h, w, b), v = !0, N || (L = [
        $(n, "pointerdown", function() {
          se(
            /*grab*/
            e[10]("LINE")
          ) && e[10]("LINE").apply(this, arguments);
        }),
        $(r, "pointerdown", function() {
          se(
            /*grab*/
            e[10]("LINE")
          ) && e[10]("LINE").apply(this, arguments);
        })
      ], N = !0);
    },
    p(w, b) {
      e = w, (!v || b & /*geom*/
      32 && t !== (t = /*geom*/
      e[5].points[0][0])) && i(n, "x1", t), (!v || b & /*geom*/
      32 && o !== (o = /*geom*/
      e[5].points[0][1])) && i(n, "y1", o), (!v || b & /*geom*/
      32 && s !== (s = /*geom*/
      e[5].points[1][0])) && i(n, "x2", s), (!v || b & /*geom*/
      32 && l !== (l = /*geom*/
      e[5].points[1][1])) && i(n, "y2", l), (!v || b & /*computedStyle*/
      2) && i(
        r,
        "style",
        /*computedStyle*/
        e[1]
      ), (!v || b & /*geom*/
      32 && a !== (a = /*geom*/
      e[5].points[0][0])) && i(r, "x1", a), (!v || b & /*geom*/
      32 && u !== (u = /*geom*/
      e[5].points[0][1])) && i(r, "y1", u), (!v || b & /*geom*/
      32 && c !== (c = /*geom*/
      e[5].points[1][0])) && i(r, "x2", c), (!v || b & /*geom*/
      32 && p !== (p = /*geom*/
      e[5].points[1][1])) && i(r, "y2", p);
      const k = {};
      b & /*geom*/
      32 && (k.x = /*geom*/
      e[5].points[0][0]), b & /*geom*/
      32 && (k.y = /*geom*/
      e[5].points[0][1]), b & /*viewportScale*/
      8 && (k.scale = /*viewportScale*/
      e[3]), g.$set(k);
      const P = {};
      b & /*geom*/
      32 && (P.x = /*geom*/
      e[5].points[1][0]), b & /*geom*/
      32 && (P.y = /*geom*/
      e[5].points[1][1]), b & /*viewportScale*/
      8 && (P.scale = /*viewportScale*/
      e[3]), h.$set(P);
    },
    i(w) {
      v || (J(g.$$.fragment, w), J(h.$$.fragment, w), v = !0);
    },
    o(w) {
      ee(g.$$.fragment, w), ee(h.$$.fragment, w), v = !1;
    },
    d(w) {
      w && (B(n), B(f), B(r), B(d), B(_)), me(g, w), me(h, w), N = !1, Le(L);
    }
  };
}
function br(e) {
  let n, t;
  return n = new _n({
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
          wr,
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
      _e(n.$$.fragment);
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
      t || (J(n.$$.fragment, o), t = !0);
    },
    o(o) {
      ee(n.$$.fragment, o), t = !1;
    },
    d(o) {
      me(n, o);
    }
  };
}
function vr(e, n, t) {
  let o, { shape: s } = n, { computedStyle: l } = n, { transform: f } = n, { viewportScale: r = 1 } = n, { svgEl: a } = n;
  const u = (g, _, h) => {
    const v = g.geometry;
    let [[N, L], [w, b]] = v.points;
    const [k, P] = h;
    if (_ === "LINE")
      N += k, w += k, L += P, b += P;
    else
      switch (_) {
        case "POINT1": {
          N += k, L += P;
          break;
        }
        case "POINT2": {
          w += k, b += P;
          break;
        }
      }
    return {
      ...g,
      geometry: {
        ...g.geometry,
        points: [[N, L], [w, b]],
        bounds: De([[N, L], [w, b]])
      }
    };
  };
  function c(g) {
    he.call(this, e, g);
  }
  function p(g) {
    he.call(this, e, g);
  }
  function d(g) {
    he.call(this, e, g);
  }
  return e.$$set = (g) => {
    "shape" in g && t(0, s = g.shape), "computedStyle" in g && t(1, l = g.computedStyle), "transform" in g && t(2, f = g.transform), "viewportScale" in g && t(3, r = g.viewportScale), "svgEl" in g && t(4, a = g.svgEl);
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
    u,
    c,
    p,
    d
  ];
}
class Er extends Re {
  constructor(n) {
    super(), Ce(this, n, vr, br, Ie, {
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
      n = q("line"), t = q("line"), i(n, "class", "a9s-outer"), i(
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
function kr(e) {
  let n, t = (
    /*origin*/
    e[1] && /*cursor*/
    e[2] && Qo(e)
  );
  return {
    c() {
      n = q("g"), t && t.c(), i(n, "class", "a9s-annotation a9s-rubberband");
    },
    m(o, s) {
      U(o, n, s), t && t.m(n, null), e[11](n);
    },
    p(o, [s]) {
      /*origin*/
      o[1] && /*cursor*/
      o[2] ? t ? t.p(o, s) : (t = Qo(o), t.c(), t.m(n, null)) : t && (t.d(1), t = null);
    },
    i: Se,
    o: Se,
    d(o) {
      o && B(n), t && t.d(), e[11](null);
    }
  };
}
function Sr(e, n, t) {
  const o = xe();
  let { addEventListener: s } = n, { drawingMode: l } = n, { transform: f } = n, { viewportScale: r } = n, a, u, c, p, d, g, _, h, v;
  const N = (P) => {
    const m = P, { timeStamp: O, offsetX: y, offsetY: M } = m;
    h = { timeStamp: O, offsetX: y, offsetY: M }, l === "drag" && (t(1, u = f.elementToImage(m.offsetX, m.offsetY)), t(2, c = u), t(3, p = u[0]), t(4, d = u[1]), t(5, g = c[0]), t(6, _ = c[1]));
  }, L = (P) => {
    const m = P || v;
    u && (t(2, c = f.elementToImage(m.offsetX, m.offsetY)), t(5, g = c[0]), t(6, _ = c[1])), P && (v = P);
  }, w = (P) => {
    const m = P;
    if (l === "click") {
      const O = performance.now() - h.timeStamp, y = rn([h.offsetX, h.offsetY], [m.offsetX, m.offsetY]);
      if (O > 300 || y > 15) return;
      u ? b() : (t(1, u = f.elementToImage(m.offsetX, m.offsetY)), t(2, c = u), t(3, p = u[0]), t(4, d = u[1]), t(5, g = c[0]), t(6, _ = c[1]));
    } else u && (m.stopPropagation(), b());
  }, b = () => {
    if (u && c && rn(u, c) > 4) {
      const P = {
        type: Pe.LINE,
        geometry: {
          bounds: De([u, c]),
          points: [u, c]
        }
      };
      o("create", P);
    }
    t(1, u = void 0), t(2, c = void 0), v = void 0;
  };
  on(() => {
    s("pointerdown", N, !0), s("pointermove", L), s("pointerup", w, !0);
  });
  function k(P) {
    gn[P ? "unshift" : "push"](() => {
      a = P, t(0, a);
    });
  }
  return e.$$set = (P) => {
    "addEventListener" in P && t(7, s = P.addEventListener), "drawingMode" in P && t(8, l = P.drawingMode), "transform" in P && t(9, f = P.transform), "viewportScale" in P && t(10, r = P.viewportScale);
  }, [
    a,
    u,
    c,
    p,
    d,
    g,
    _,
    s,
    l,
    f,
    r,
    k
  ];
}
class Tr extends Re {
  constructor(n) {
    super(), Ce(this, n, Sr, kr, Ie, {
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
  let n, t, o, s = Ae(
    /*BG_COLORS*/
    e[5]
  ), l = [];
  for (let f = 0; f < s.length; f += 1)
    l[f] = xo(Jo(e, s, f));
  return {
    c() {
      n = qe("div");
      for (let f = 0; f < l.length; f += 1)
        l[f].c();
      i(n, "class", "tb-color-picker svelte-19rj0sx");
    },
    m(f, r) {
      U(f, n, r);
      for (let a = 0; a < l.length; a += 1)
        l[a] && l[a].m(n, null);
      t || (o = $(
        n,
        "mousedown",
        /*onMouseDown*/
        e[11]
      ), t = !0);
    },
    p(f, r) {
      if (r & /*BG_COLORS, style, pickBgColor*/
      1057) {
        s = Ae(
          /*BG_COLORS*/
          f[5]
        );
        let a;
        for (a = 0; a < s.length; a += 1) {
          const u = Jo(f, s, a);
          l[a] ? l[a].p(u, r) : (l[a] = xo(u), l[a].c(), l[a].m(n, null));
        }
        for (; a < l.length; a += 1)
          l[a].d(1);
        l.length = s.length;
      }
    },
    d(f) {
      f && B(n), jn(l, f), t = !1, o();
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
      n = qe("button"), i(n, "class", "tb-swatch svelte-19rj0sx"), i(
        n,
        "title",
        /*c*/
        e[18].label
      ), Be(
        n,
        "background",
        /*c*/
        e[18].value !== "transparent" ? (
          /*c*/
          e[18].value
        ) : "var(--checker)"
      ), Ze(
        n,
        "selected",
        /*style*/
        e[0].bgColor === /*c*/
        e[18].value
      );
    },
    m(l, f) {
      U(l, n, f), t || (o = $(n, "click", s), t = !0);
    },
    p(l, f) {
      e = l, f & /*style, BG_COLORS*/
      33 && Ze(
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
function Mr(e) {
  let n, t, o, s, l, f, r, a, u, c, p, d, g, _, h, v, N, L, w, b, k, P, m, O, y, M, A, T = (
    /*showBgPicker*/
    e[3] && $o(e)
  );
  return {
    c() {
      n = qe("div"), t = qe("button"), t.textContent = "A-", o = ne(), s = qe("button"), s.textContent = "A+", l = ne(), f = qe("div"), r = ne(), a = qe("button"), a.innerHTML = "<strong>B</strong>", u = ne(), c = qe("button"), c.innerHTML = "<em>I</em>", p = ne(), d = qe("button"), d.innerHTML = "<u>U</u>", g = ne(), _ = qe("div"), h = ne(), v = qe("div"), N = qe("button"), L = qe("span"), L.textContent = "A", w = ne(), b = qe("span"), k = ne(), T && T.c(), P = ne(), m = qe("div"), O = ne(), y = qe("button"), y.innerHTML = '<svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor"><path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"></path></svg>', i(t, "class", "tb-btn svelte-19rj0sx"), i(t, "title", "Decrease font size"), i(s, "class", "tb-btn svelte-19rj0sx"), i(s, "title", "Increase font size"), i(f, "class", "tb-divider svelte-19rj0sx"), i(a, "class", "tb-btn svelte-19rj0sx"), i(a, "title", "Bold"), Ze(
        a,
        "active",
        /*style*/
        e[0].bold
      ), i(c, "class", "tb-btn svelte-19rj0sx"), i(c, "title", "Italic"), Ze(
        c,
        "active",
        /*style*/
        e[0].italic
      ), i(d, "class", "tb-btn svelte-19rj0sx"), i(d, "title", "Underline"), Ze(
        d,
        "active",
        /*style*/
        e[0].underline
      ), i(_, "class", "tb-divider svelte-19rj0sx"), i(L, "class", "tb-color-letter svelte-19rj0sx"), i(b, "class", "tb-color-swatch svelte-19rj0sx"), Be(
        b,
        "background",
        /*style*/
        e[0].bgColor !== "transparent" ? (
          /*style*/
          e[0].bgColor
        ) : "transparent"
      ), Be(
        b,
        "border-color",
        /*style*/
        e[0].bgColor !== "transparent" ? (
          /*style*/
          e[0].bgColor
        ) : "#AAAFC3"
      ), i(N, "class", "tb-btn tb-color-btn svelte-19rj0sx"), i(N, "title", "Highlight colour"), i(v, "class", "tb-color-wrap svelte-19rj0sx"), i(m, "class", "tb-divider svelte-19rj0sx"), i(y, "class", "tb-btn tb-delete svelte-19rj0sx"), i(y, "title", "Delete"), i(n, "class", "a9s-tools-text-toolbar svelte-19rj0sx"), Be(
        n,
        "left",
        /*x*/
        e[1] + "px"
      ), Be(
        n,
        "top",
        /*y*/
        e[2] + "px"
      );
    },
    m(X, C) {
      U(X, n, C), Z(n, t), Z(n, o), Z(n, s), Z(n, l), Z(n, f), Z(n, r), Z(n, a), Z(n, u), Z(n, c), Z(n, p), Z(n, d), Z(n, g), Z(n, _), Z(n, h), Z(n, v), Z(v, N), Z(N, L), Z(N, w), Z(N, b), Z(v, k), T && T.m(v, null), Z(n, P), Z(n, m), Z(n, O), Z(n, y), M || (A = [
        $(
          t,
          "click",
          /*click_handler*/
          e[12]
        ),
        $(
          s,
          "click",
          /*click_handler_1*/
          e[13]
        ),
        $(
          a,
          "click",
          /*toggleBold*/
          e[7]
        ),
        $(
          c,
          "click",
          /*toggleItalic*/
          e[8]
        ),
        $(
          d,
          "click",
          /*toggleUnderline*/
          e[9]
        ),
        $(
          N,
          "click",
          /*click_handler_2*/
          e[14]
        ),
        $(
          y,
          "click",
          /*click_handler_4*/
          e[16]
        ),
        $(
          n,
          "mousedown",
          /*onMouseDown*/
          e[11]
        )
      ], M = !0);
    },
    p(X, [C]) {
      C & /*style*/
      1 && Ze(
        a,
        "active",
        /*style*/
        X[0].bold
      ), C & /*style*/
      1 && Ze(
        c,
        "active",
        /*style*/
        X[0].italic
      ), C & /*style*/
      1 && Ze(
        d,
        "active",
        /*style*/
        X[0].underline
      ), C & /*style*/
      1 && Be(
        b,
        "background",
        /*style*/
        X[0].bgColor !== "transparent" ? (
          /*style*/
          X[0].bgColor
        ) : "transparent"
      ), C & /*style*/
      1 && Be(
        b,
        "border-color",
        /*style*/
        X[0].bgColor !== "transparent" ? (
          /*style*/
          X[0].bgColor
        ) : "#AAAFC3"
      ), /*showBgPicker*/
      X[3] ? T ? T.p(X, C) : (T = $o(X), T.c(), T.m(v, null)) : T && (T.d(1), T = null), C & /*x*/
      2 && Be(
        n,
        "left",
        /*x*/
        X[1] + "px"
      ), C & /*y*/
      4 && Be(
        n,
        "top",
        /*y*/
        X[2] + "px"
      );
    },
    i: Se,
    o: Se,
    d(X) {
      X && B(n), T && T.d(), M = !1, Le(A);
    }
  };
}
function Pr(e, n, t) {
  let { style: o } = n, { x: s } = n, { y: l } = n;
  const f = xe(), r = [
    { value: "transparent", label: "None" },
    { value: "#ffff00", label: "Yellow" },
    { value: "#00ff00", label: "Green" },
    { value: "#00ffff", label: "Cyan" },
    { value: "#ff00ff", label: "Magenta" },
    { value: "#ffffff", label: "White" },
    { value: "#000000", label: "Black" }
  ];
  let a = !1;
  const u = (k) => f("change", { ...o, ...k }), c = (k) => u({
    fontSize: Math.max(8, Math.min(72, o.fontSize + k))
  }), p = () => u({ bold: !o.bold }), d = () => u({ italic: !o.italic }), g = () => u({ underline: !o.underline }), _ = (k) => {
    u({ bgColor: k }), t(3, a = !1);
  }, h = (k) => k.preventDefault(), v = () => c(-2), N = () => c(2), L = () => t(3, a = !a), w = (k) => _(k.value), b = () => f("delete");
  return e.$$set = (k) => {
    "style" in k && t(0, o = k.style), "x" in k && t(1, s = k.x), "y" in k && t(2, l = k.y);
  }, [
    o,
    s,
    l,
    a,
    f,
    r,
    c,
    p,
    d,
    g,
    _,
    h,
    v,
    N,
    L,
    w,
    b
  ];
}
class Lr extends Re {
  constructor(n) {
    super(), Ce(this, n, Pr, Mr, Ie, { style: 0, x: 1, y: 2 });
  }
}
const pn = {
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
    n[56].fontSize || pn.fontSize
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
  const u = (
    /*textW*/
    n[68] + /*anchorGap*/
    n[71] * 2
  );
  n[74] = u;
  const c = (
    /*boxY*/
    n[73] + /*textH*/
    n[69] / 2
  );
  return n[75] = c, n;
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
function Or(e) {
  const n = e.slice(), t = (
    /*ann*/
    n[77].u
  );
  return n[80] = t, n;
}
function ss(e) {
  let n, t, o, s, l, f, r, a, u, c, p, d, g, _, h, v, N, L, w, b, k, P, m = (
    /*ann*/
    e[77].length + ""
  ), O, y, M, A;
  return {
    c() {
      n = q("g"), t = q("polyline"), l = q("line"), c = q("line"), h = q("g"), v = q("rect"), P = q("text"), O = st(m), i(t, "points", o = /*ann*/
      e[77].linePts), i(t, "fill", "none"), i(
        t,
        "stroke",
        /*strokeColor*/
        e[0]
      ), i(t, "stroke-width", "1.5"), i(t, "stroke-dasharray", s = 8 / /*viewportScale*/
      e[5] + " " + 4 / /*viewportScale*/
      e[5]), i(t, "vector-effect", "non-scaling-stroke"), i(l, "x1", f = /*ann*/
      e[77].x1 - /*ann*/
      e[77].px * /*u*/
      e[80]), i(l, "y1", r = /*ann*/
      e[77].y1 - /*ann*/
      e[77].py * /*u*/
      e[80]), i(l, "x2", a = /*ann*/
      e[77].x1 + /*ann*/
      e[77].px * /*u*/
      e[80]), i(l, "y2", u = /*ann*/
      e[77].y1 + /*ann*/
      e[77].py * /*u*/
      e[80]), i(
        l,
        "stroke",
        /*strokeColor*/
        e[0]
      ), i(l, "stroke-width", "1.5"), i(l, "vector-effect", "non-scaling-stroke"), i(c, "x1", p = /*ann*/
      e[77].x2 - /*ann*/
      e[77].px * /*u*/
      e[80]), i(c, "y1", d = /*ann*/
      e[77].y2 - /*ann*/
      e[77].py * /*u*/
      e[80]), i(c, "x2", g = /*ann*/
      e[77].x2 + /*ann*/
      e[77].px * /*u*/
      e[80]), i(c, "y2", _ = /*ann*/
      e[77].y2 + /*ann*/
      e[77].py * /*u*/
      e[80]), i(
        c,
        "stroke",
        /*strokeColor*/
        e[0]
      ), i(c, "stroke-width", "1.5"), i(c, "vector-effect", "non-scaling-stroke"), i(v, "x", N = -/*u*/
      e[80] * 3), i(v, "y", L = /*u*/
      e[80] * 0.4), i(v, "width", w = /*u*/
      e[80] * 6), i(v, "height", b = /*u*/
      e[80] * 1.4), i(v, "rx", k = /*u*/
      e[80] * 0.25), i(v, "fill", "rgba(0,0,0,0.65)"), i(P, "x", "0"), i(P, "y", y = /*u*/
      e[80] * 1.1), i(P, "font-size", M = /*u*/
      e[80]), i(P, "font-family", "sans-serif"), i(P, "fill", "white"), i(P, "text-anchor", "middle"), i(P, "dominant-baseline", "middle"), i(h, "transform", A = `translate(${/*ann*/
      e[77].mx}, ${/*ann*/
      e[77].my})`), i(n, "class", "a9s-tools-distance");
    },
    m(T, X) {
      U(T, n, X), Z(n, t), Z(n, l), Z(n, c), Z(n, h), Z(h, v), Z(h, P), Z(P, O);
    },
    p(T, X) {
      X[0] & /*svgAnnotations*/
      4096 && o !== (o = /*ann*/
      T[77].linePts) && i(t, "points", o), X[0] & /*strokeColor*/
      1 && i(
        t,
        "stroke",
        /*strokeColor*/
        T[0]
      ), X[0] & /*viewportScale*/
      32 && s !== (s = 8 / /*viewportScale*/
      T[5] + " " + 4 / /*viewportScale*/
      T[5]) && i(t, "stroke-dasharray", s), X[0] & /*svgAnnotations*/
      4096 && f !== (f = /*ann*/
      T[77].x1 - /*ann*/
      T[77].px * /*u*/
      T[80]) && i(l, "x1", f), X[0] & /*svgAnnotations*/
      4096 && r !== (r = /*ann*/
      T[77].y1 - /*ann*/
      T[77].py * /*u*/
      T[80]) && i(l, "y1", r), X[0] & /*svgAnnotations*/
      4096 && a !== (a = /*ann*/
      T[77].x1 + /*ann*/
      T[77].px * /*u*/
      T[80]) && i(l, "x2", a), X[0] & /*svgAnnotations*/
      4096 && u !== (u = /*ann*/
      T[77].y1 + /*ann*/
      T[77].py * /*u*/
      T[80]) && i(l, "y2", u), X[0] & /*strokeColor*/
      1 && i(
        l,
        "stroke",
        /*strokeColor*/
        T[0]
      ), X[0] & /*svgAnnotations*/
      4096 && p !== (p = /*ann*/
      T[77].x2 - /*ann*/
      T[77].px * /*u*/
      T[80]) && i(c, "x1", p), X[0] & /*svgAnnotations*/
      4096 && d !== (d = /*ann*/
      T[77].y2 - /*ann*/
      T[77].py * /*u*/
      T[80]) && i(c, "y1", d), X[0] & /*svgAnnotations*/
      4096 && g !== (g = /*ann*/
      T[77].x2 + /*ann*/
      T[77].px * /*u*/
      T[80]) && i(c, "x2", g), X[0] & /*svgAnnotations*/
      4096 && _ !== (_ = /*ann*/
      T[77].y2 + /*ann*/
      T[77].py * /*u*/
      T[80]) && i(c, "y2", _), X[0] & /*strokeColor*/
      1 && i(
        c,
        "stroke",
        /*strokeColor*/
        T[0]
      ), X[0] & /*svgAnnotations*/
      4096 && N !== (N = -/*u*/
      T[80] * 3) && i(v, "x", N), X[0] & /*svgAnnotations*/
      4096 && L !== (L = /*u*/
      T[80] * 0.4) && i(v, "y", L), X[0] & /*svgAnnotations*/
      4096 && w !== (w = /*u*/
      T[80] * 6) && i(v, "width", w), X[0] & /*svgAnnotations*/
      4096 && b !== (b = /*u*/
      T[80] * 1.4) && i(v, "height", b), X[0] & /*svgAnnotations*/
      4096 && k !== (k = /*u*/
      T[80] * 0.25) && i(v, "rx", k), X[0] & /*svgAnnotations*/
      4096 && m !== (m = /*ann*/
      T[77].length + "") && Gs(O, m), X[0] & /*svgAnnotations*/
      4096 && y !== (y = /*u*/
      T[80] * 1.1) && i(P, "y", y), X[0] & /*svgAnnotations*/
      4096 && M !== (M = /*u*/
      T[80]) && i(P, "font-size", M), X[0] & /*svgAnnotations*/
      4096 && A !== (A = `translate(${/*ann*/
      T[77].mx}, ${/*ann*/
      T[77].my})`) && i(h, "transform", A);
    },
    d(T) {
      T && B(n);
    }
  };
}
function Hr(e) {
  let n, t;
  return {
    c() {
      n = q("polyline"), i(n, "points", t = /*ann*/
      e[77].arrowheadStr), i(n, "fill", "none"), i(
        n,
        "stroke",
        /*strokeColor*/
        e[0]
      ), i(n, "stroke-width", "2"), i(n, "stroke-linecap", "round"), i(n, "stroke-linejoin", "round"), i(n, "vector-effect", "non-scaling-stroke");
    },
    m(o, s) {
      U(o, n, s);
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
      o && B(n);
    }
  };
}
function ls(e, n) {
  let t, o;
  function s(a, u) {
    if (
      /*ann*/
      a[77].toolType === "arrow"
    ) return Hr;
    if (
      /*ann*/
      a[77].toolType === "distance"
    ) return ss;
  }
  function l(a, u) {
    return u === ss ? Or(a) : a;
  }
  let f = s(n), r = f && f(l(n, f));
  return {
    key: e,
    first: null,
    c() {
      t = He(), r && r.c(), o = He(), this.first = t;
    },
    m(a, u) {
      U(a, t, u), r && r.m(a, u), U(a, o, u);
    },
    p(a, u) {
      n = a, f === (f = s(n)) && r ? r.p(l(n, f), u) : (r && r.d(1), r = f && f(l(n, f)), r && (r.c(), r.m(o.parentNode, o)));
    },
    d(a) {
      a && (B(t), B(o)), r && r.d(a);
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
      t && t.c(), n = He();
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
  let n, t, o, s, l, f, r;
  return {
    c() {
      n = q("filter"), t = q("feFlood"), s = q("feMerge"), l = q("feMergeNode"), f = q("feMergeNode"), i(t, "flood-color", o = /*style*/
      e[56].bgColor), i(t, "result", "bg"), i(l, "in", "bg"), i(f, "in", "SourceGraphic"), i(n, "id", r = "a9s-tb-" + /*i*/
      e[62]), i(n, "x", "0"), i(n, "y", "-5%"), i(n, "width", "100%"), i(n, "height", "130%");
    },
    m(a, u) {
      U(a, n, u), Z(n, t), Z(n, s), Z(s, l), Z(s, f);
    },
    p(a, u) {
      u[0] & /*textAnnotations*/
      4 && o !== (o = /*style*/
      a[56].bgColor) && i(t, "flood-color", o), u[0] & /*textAnnotations*/
      4 && r !== (r = "a9s-tb-" + /*i*/
      a[62]) && i(n, "id", r);
    },
    d(a) {
      a && B(n);
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
      t = He(), s && s.c(), o = He(), this.first = t;
    },
    m(l, f) {
      U(l, t, f), s && s.m(l, f), U(l, o, f);
    },
    p(l, f) {
      n = l, /*selector*/
      n[53] && /*editingId*/
      n[6] !== /*id*/
      n[52] ? s ? s.p(Pt(n), f) : (s = is(Pt(n)), s.c(), s.m(o.parentNode, o)) : s && (s.d(1), s = null);
    },
    d(l) {
      l && (B(t), B(o)), s && s.d(l);
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
    e[52] && us(e)
  ), l = t && cs(Tt(e));
  return {
    c() {
      s && s.c(), n = He(), l && l.c(), o = He();
    },
    m(f, r) {
      s && s.m(f, r), U(f, n, r), l && l.m(f, r), U(f, o, r);
    },
    p(f, r) {
      /*editingId*/
      f[6] !== /*id*/
      f[52] ? s ? s.p(f, r) : (s = us(f), s.c(), s.m(n.parentNode, n)) : s && (s.d(1), s = null), r[0] & /*editingId, textAnnotations, selectedIds*/
      1092 && (t = /*editingId*/
      f[6] === /*id*/
      f[52] || /*selectedIds*/
      f[10].includes(
        /*id*/
        f[52]
      )), t ? l ? l.p(Tt(f), r) : (l = cs(Tt(f)), l.c(), l.m(o.parentNode, o)) : l && (l.d(1), l = null);
    },
    d(f) {
      f && (B(n), B(o)), s && s.d(f), l && l.d(f);
    }
  };
}
function us(e) {
  let n, t, o = (
    /*displayText*/
    e[66] + ""
  ), s, l, f, r, a, u, c, p;
  function d(..._) {
    return (
      /*mousedown_handler*/
      e[31](
        /*id*/
        e[52],
        /*rawPt*/
        e[63],
        ..._
      )
    );
  }
  function g() {
    return (
      /*click_handler*/
      e[32](
        /*id*/
        e[52]
      )
    );
  }
  return {
    c() {
      n = q("g"), t = q("text"), s = st(o), i(t, "x", l = /*pt*/
      e[64].x), i(t, "y", f = /*pt*/
      e[64].y), i(t, "font-size", r = /*fs*/
      e[58]), i(t, "font-family", "sans-serif"), i(t, "style", a = /*svgTextStyle*/
      e[25](
        /*style*/
        e[56]
      )), i(t, "filter", u = /*hasBg*/
      e[65] ? `url(#a9s-tb-${/*i*/
      e[62]})` : null), Be(n, "pointer-events", "auto"), Be(n, "cursor", "pointer");
    },
    m(_, h) {
      U(_, n, h), Z(n, t), Z(t, s), c || (p = [
        $(n, "mousedown", d),
        $(n, "click", g)
      ], c = !0);
    },
    p(_, h) {
      e = _, h[0] & /*localTexts, textAnnotations*/
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
      4 && u !== (u = /*hasBg*/
      e[65] ? `url(#a9s-tb-${/*i*/
      e[62]})` : null) && i(t, "filter", u);
    },
    d(_) {
      _ && B(n), c = !1, Le(p);
    }
  };
}
function cs(e) {
  let n, t, o, s, l, f, r, a, u, c, p, d, g, _, h, v, N, L, w, b, k;
  function P(...y) {
    return (
      /*mousedown_handler_1*/
      e[33](
        /*id*/
        e[52],
        /*pt*/
        e[64],
        ...y
      )
    );
  }
  function m(...y) {
    return (
      /*mousedown_handler_2*/
      e[34](
        /*id*/
        e[52],
        /*pt*/
        e[64],
        ...y
      )
    );
  }
  function O(...y) {
    return (
      /*mousedown_handler_3*/
      e[35](
        /*id*/
        e[52],
        /*pt*/
        e[64],
        ...y
      )
    );
  }
  return {
    c() {
      n = q("g"), t = q("rect"), r = q("rect"), d = q("circle"), v = q("circle"), i(t, "x", o = /*boxX*/
      e[72]), i(t, "y", s = /*boxY*/
      e[73]), i(t, "width", l = /*boxW*/
      e[74]), i(t, "height", f = /*textH*/
      e[69]), i(t, "fill", "none"), i(t, "stroke", "#888888"), i(t, "stroke-width", "1"), i(t, "stroke-dasharray", "3 3"), i(t, "vector-effect", "non-scaling-stroke"), i(r, "x", a = /*boxX*/
      e[72]), i(r, "y", u = /*boxY*/
      e[73]), i(r, "width", c = /*boxW*/
      e[74]), i(r, "height", p = /*textH*/
      e[69]), i(r, "fill", "transparent"), Be(r, "pointer-events", "fill"), Be(r, "cursor", "move"), i(d, "cx", g = /*boxX*/
      e[72]), i(d, "cy", _ = /*centerY*/
      e[75]), i(d, "r", h = /*anchorR*/
      e[70]), i(d, "fill", "#ff00ba"), i(d, "stroke", "white"), i(d, "stroke-width", "1"), i(d, "vector-effect", "non-scaling-stroke"), Be(d, "pointer-events", "auto"), Be(d, "cursor", "ew-resize"), i(v, "cx", N = /*boxX*/
      e[72] + /*boxW*/
      e[74]), i(v, "cy", L = /*centerY*/
      e[75]), i(v, "r", w = /*anchorR*/
      e[70]), i(v, "fill", "#ff00ba"), i(v, "stroke", "white"), i(v, "stroke-width", "1"), i(v, "vector-effect", "non-scaling-stroke"), Be(v, "pointer-events", "auto"), Be(v, "cursor", "ew-resize"), Be(n, "pointer-events", "none");
    },
    m(y, M) {
      U(y, n, M), Z(n, t), Z(n, r), Z(n, d), Z(n, v), b || (k = [
        $(r, "mousedown", P),
        $(d, "mousedown", m),
        $(v, "mousedown", O)
      ], b = !0);
    },
    p(y, M) {
      e = y, M[0] & /*draggingPos, textAnnotations, viewportScale*/
      2084 && o !== (o = /*boxX*/
      e[72]) && i(t, "x", o), M[0] & /*draggingPos, textAnnotations*/
      2052 && s !== (s = /*boxY*/
      e[73]) && i(t, "y", s), M[0] & /*editingId, textAnnotations, editingText, localTexts, viewportScale*/
      230 && l !== (l = /*boxW*/
      e[74]) && i(t, "width", l), M[0] & /*textAnnotations*/
      4 && f !== (f = /*textH*/
      e[69]) && i(t, "height", f), M[0] & /*draggingPos, textAnnotations, viewportScale*/
      2084 && a !== (a = /*boxX*/
      e[72]) && i(r, "x", a), M[0] & /*draggingPos, textAnnotations*/
      2052 && u !== (u = /*boxY*/
      e[73]) && i(r, "y", u), M[0] & /*editingId, textAnnotations, editingText, localTexts, viewportScale*/
      230 && c !== (c = /*boxW*/
      e[74]) && i(r, "width", c), M[0] & /*textAnnotations*/
      4 && p !== (p = /*textH*/
      e[69]) && i(r, "height", p), M[0] & /*draggingPos, textAnnotations, viewportScale*/
      2084 && g !== (g = /*boxX*/
      e[72]) && i(d, "cx", g), M[0] & /*draggingPos, textAnnotations*/
      2052 && _ !== (_ = /*centerY*/
      e[75]) && i(d, "cy", _), M[0] & /*viewportScale*/
      32 && h !== (h = /*anchorR*/
      e[70]) && i(d, "r", h), M[0] & /*draggingPos, textAnnotations, viewportScale, editingId, editingText, localTexts*/
      2278 && N !== (N = /*boxX*/
      e[72] + /*boxW*/
      e[74]) && i(v, "cx", N), M[0] & /*draggingPos, textAnnotations*/
      2052 && L !== (L = /*centerY*/
      e[75]) && i(v, "cy", L), M[0] & /*viewportScale*/
      32 && w !== (w = /*anchorR*/
      e[70]) && i(v, "r", w);
    },
    d(y) {
      y && B(n), b = !1, Le(k);
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
      t = He(), s && s.c(), o = He(), this.first = t;
    },
    m(l, f) {
      U(l, t, f), s && s.m(l, f), U(l, o, f);
    },
    p(l, f) {
      n = l, /*selector*/
      n[53] ? s ? s.p(Mt(n), f) : (s = as(Mt(n)), s.c(), s.m(o.parentNode, o)) : s && (s.d(1), s = null);
    },
    d(l) {
      l && (B(t), B(o)), s && s.d(l);
    }
  };
}
function hs(e) {
  let n, t, o, s, l, f, r;
  function a(...c) {
    return (
      /*change_handler*/
      e[37](
        /*id*/
        e[52],
        ...c
      )
    );
  }
  function u() {
    return (
      /*delete_handler*/
      e[38](
        /*id*/
        e[52]
      )
    );
  }
  return n = new Lr({
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
  }), n.$on("change", a), n.$on("delete", u), {
    c() {
      _e(n.$$.fragment), t = ne(), o = qe("input"), i(o, "type", "text"), i(o, "class", "a9s-tools-text-input svelte-1snhdgd"), i(o, "style", s = /*inputStyle*/
      e[26](
        /*style*/
        e[56],
        /*pos*/
        e[57],
        /*inputW*/
        e[59]
      )), i(o, "placeholder", "Type...");
    },
    m(c, p) {
      de(n, c, p), U(c, t, p), U(c, o, p), e[39](o), Eo(
        o,
        /*editingText*/
        e[7]
      ), l = !0, f || (r = [
        $(
          o,
          "input",
          /*input_input_handler*/
          e[40]
        ),
        $(
          o,
          "keydown",
          /*onInputKeyDown*/
          e[24]
        ),
        $(
          o,
          "blur",
          /*commitEdit*/
          e[20]
        )
      ], f = !0);
    },
    p(c, p) {
      e = c;
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
    i(c) {
      l || (J(n.$$.fragment, c), l = !0);
    },
    o(c) {
      ee(n.$$.fragment, c), l = !1;
    },
    d(c) {
      c && (B(t), B(o)), me(n, c), e[39](null), f = !1, Le(r);
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
      t = He(), l && l.c(), o = He(), this.first = t;
    },
    m(f, r) {
      U(f, t, r), l && l.m(f, r), U(f, o, r), s = !0;
    },
    p(f, r) {
      n = f, /*selector*/
      n[53] && /*editingId*/
      n[6] === /*id*/
      n[52] ? l ? (l.p(St(n), r), r[0] & /*textAnnotations, editingId*/
      68 && J(l, 1)) : (l = hs(St(n)), l.c(), J(l, 1), l.m(o.parentNode, o)) : l && (Ve(), ee(l, 1, 1, () => {
        l = null;
      }), Ke());
    },
    i(f) {
      s || (J(l), s = !0);
    },
    o(f) {
      ee(l), s = !1;
    },
    d(f) {
      f && (B(t), B(o)), l && l.d(f);
    }
  };
}
function Ir(e) {
  let n, t, o = [], s = /* @__PURE__ */ new Map(), l, f, r, a = [], u = /* @__PURE__ */ new Map(), c = [], p = /* @__PURE__ */ new Map(), d, g = [], _ = /* @__PURE__ */ new Map(), h, v, N = Ae(
    /*svgAnnotations*/
    e[12]
  );
  const L = (y) => (
    /*ann*/
    y[77].id
  );
  for (let y = 0; y < N.length; y += 1) {
    let M = os(e, N, y), A = L(M);
    s.set(A, o[y] = ls(A, M));
  }
  let w = Ae(
    /*textAnnotations*/
    e[2]
  );
  const b = (y) => (
    /*id*/
    y[52]
  );
  for (let y = 0; y < w.length; y += 1) {
    let M = ts(e, w, y), A = b(M);
    u.set(A, a[y] = fs(A, M));
  }
  let k = Ae(
    /*textAnnotations*/
    e[2]
  );
  const P = (y) => (
    /*id*/
    y[52]
  );
  for (let y = 0; y < k.length; y += 1) {
    let M = ns(e, k, y), A = P(M);
    p.set(A, c[y] = ps(A, M));
  }
  let m = Ae(
    /*textAnnotations*/
    e[2]
  );
  const O = (y) => (
    /*id*/
    y[52]
  );
  for (let y = 0; y < m.length; y += 1) {
    let M = es(e, m, y), A = O(M);
    _.set(A, g[y] = ds(A, M));
  }
  return {
    c() {
      n = q("svg"), t = q("g");
      for (let y = 0; y < o.length; y += 1)
        o[y].c();
      l = ne(), f = q("svg"), r = q("defs");
      for (let y = 0; y < a.length; y += 1)
        a[y].c();
      for (let y = 0; y < c.length; y += 1)
        c[y].c();
      d = ne();
      for (let y = 0; y < g.length; y += 1)
        g[y].c();
      h = He(), i(n, "class", "a9s-tools-overlay svelte-1snhdgd"), i(
        n,
        "viewBox",
        /*viewBox*/
        e[4]
      ), i(n, "preserveAspectRatio", "xMinYMin meet"), i(f, "class", "a9s-tools-overlay svelte-1snhdgd"), i(f, "data-annotation-type", "TEXT"), i(
        f,
        "viewBox",
        /*viewBox*/
        e[4]
      ), i(f, "preserveAspectRatio", "xMinYMin meet"), Be(f, "pointer-events", "none");
    },
    m(y, M) {
      U(y, n, M), Z(n, t);
      for (let A = 0; A < o.length; A += 1)
        o[A] && o[A].m(t, null);
      U(y, l, M), U(y, f, M), Z(f, r);
      for (let A = 0; A < a.length; A += 1)
        a[A] && a[A].m(r, null);
      for (let A = 0; A < c.length; A += 1)
        c[A] && c[A].m(f, null);
      e[36](f), U(y, d, M);
      for (let A = 0; A < g.length; A += 1)
        g[A] && g[A].m(y, M);
      U(y, h, M), v = !0;
    },
    p(y, M) {
      M[0] & /*svgAnnotations, strokeColor, viewportScale*/
      4129 && (N = Ae(
        /*svgAnnotations*/
        y[12]
      ), o = Qn(o, M, L, 1, y, N, s, t, gt, ls, null, os)), (!v || M[0] & /*viewBox*/
      16) && i(
        n,
        "viewBox",
        /*viewBox*/
        y[4]
      ), M[0] & /*textAnnotations, getStyle, editingId*/
      32836 && (w = Ae(
        /*textAnnotations*/
        y[2]
      ), a = Qn(a, M, b, 1, y, w, u, r, gt, fs, null, ts)), M[0] & /*draggingPos, textAnnotations, textPoint, viewportScale, measureTextWidth, editingId, editingText, localTexts, svgFontSize, getStyle, handleTextMouseDown, selectedIds, startEditing, svgTextStyle*/
      42708198 && (k = Ae(
        /*textAnnotations*/
        y[2]
      ), c = Qn(c, M, P, 1, y, k, p, f, gt, ps, null, ns)), (!v || M[0] & /*viewBox*/
      16) && i(
        f,
        "viewBox",
        /*viewBox*/
        y[4]
      ), M[0] & /*inputStyle, editingStyle, inputScreenPos, textAnnotations, measureTextWidth, editingText, inputEl, onInputKeyDown, commitEdit, applyStyleChange, deleteAnnotation, editingId*/
      91497412 && (m = Ae(
        /*textAnnotations*/
        y[2]
      ), Ve(), g = Qn(g, M, O, 1, y, m, _, h.parentNode, hi, ds, h, es), Ke());
    },
    i(y) {
      if (!v) {
        for (let M = 0; M < m.length; M += 1)
          J(g[M]);
        v = !0;
      }
    },
    o(y) {
      for (let M = 0; M < g.length; M += 1)
        ee(g[M]);
      v = !1;
    },
    d(y) {
      y && (B(n), B(l), B(f), B(d), B(h));
      for (let M = 0; M < o.length; M += 1)
        o[M].d();
      for (let M = 0; M < a.length; M += 1)
        a[M].d();
      for (let M = 0; M < c.length; M += 1)
        c[M].d();
      e[36](null);
      for (let M = 0; M < g.length; M += 1)
        g[M].d(y);
    }
  };
}
function Cr(e, n, t) {
  let o, s, l, f, { anno: r } = n, { strokeColor: a = "#6a6a6a" } = n, u = null, c, p = "0 0 1 1", d = 1, g = 1, _, h = null, v = "", N = { ...pn }, L, w = [], b = {}, k = null, P = null, m = {}, O = null;
  const y = (z, I) => {
    O || (O = document.createElement("canvas"));
    const S = O.getContext("2d");
    return S.font = `${I}px sans-serif`, S.measureText(z).width;
  }, M = (z, I) => {
    if (!c) return { x: 0, y: 0 };
    const S = c.getBoundingClientRect();
    return {
      x: (z - S.left) / g,
      y: (I - S.top) / g
    };
  }, { store: A } = r.state;
  oi(e, A, (z) => t(30, f = z));
  const T = (z) => {
    var I;
    return {
      ...pn,
      ...((I = z.properties) == null ? void 0 : I.textStyle) || {}
    };
  }, X = (z) => {
    const I = z.geometry;
    return { x: I.x, y: I.y };
  }, C = (z) => (z.fontSize || pn.fontSize) / Math.max(g, 1e-3), H = (z, I) => {
    const { x: S, y: re } = X(z), ge = I.fontSize || pn.fontSize;
    return {
      left: S * g,
      top: re * g - ge
    };
  }, Y = () => {
    if (!u) return;
    const { naturalWidth: z, naturalHeight: I } = u;
    !z || !I || (t(28, d = z), t(4, p = `0 0 ${z} ${I}`), t(5, g = u.getBoundingClientRect().width / z));
  }, R = async (z) => {
    var I, S, re;
    ((re = (S = (I = z.target) == null ? void 0 : I.selector) == null ? void 0 : S.properties) == null ? void 0 : re.toolType) === "text" && (t(6, h = z.id), t(7, v = ""), t(8, N = T(z.target.selector)), await Kn(), L == null || L.focus());
  }, G = async (z) => {
    var S, re;
    const I = o.find((ge) => ge.id === z);
    if (I) {
      h && h !== z && D();
      try {
        r.state.selection.setSelected(z);
      } catch {
      }
      t(6, h = z), t(7, v = b[z] ?? ((re = (S = I.bodies) == null ? void 0 : S[0]) == null ? void 0 : re.value) ?? ""), t(8, N = T(I.target.selector)), await Kn(), L == null || L.focus();
    }
  }, W = (z) => {
    var re, ge, Ee;
    if (t(10, w = (z == null ? void 0 : z.map((le) => le.id)) || []), !(z != null && z.length)) return;
    const I = z[0];
    !(((Ee = (ge = (re = I == null ? void 0 : I.target) == null ? void 0 : re.selector) == null ? void 0 : ge.properties) == null ? void 0 : Ee.toolType) === "text") && h && D();
  }, D = () => {
    if (!h) return;
    const z = h, I = v, S = o.find((re) => re.id === z);
    if (S) {
      const re = I.trim() ? [
        {
          type: "TextualBody",
          value: I,
          purpose: "commenting"
        }
      ] : [], ge = (N.fontSize || pn.fontSize) / Math.max(g, 1e-3), Ee = y(I || "Type...", ge), le = ge * 1.2, We = 8 / Math.max(g, 1e-3), Ye = S.target.selector.geometry, en = {
        bounds: {
          minX: Ye.x - We,
          minY: Ye.y - ge,
          maxX: Ye.x + Ee + We,
          maxY: Ye.y + ge * 0.2
        },
        x: Ye.x,
        y: Ye.y,
        w: Ee,
        h: le
      };
      if (r.updateAnnotation({
        ...S,
        bodies: re,
        target: {
          ...S.target,
          selector: {
            ...S.target.selector,
            geometry: en,
            properties: {
              ...S.target.selector.properties,
              textStyle: N
            }
          }
        }
      }), I.trim())
        t(1, b = {
          ...b,
          [z]: I
        });
      else {
        const { [z]: sn, ...un } = b;
        t(1, b = un);
      }
    }
    t(6, h = null), t(7, v = "");
  }, j = (z, I) => {
    const S = o.find((re) => re.id === z);
    S && (r.updateAnnotation({
      ...S,
      target: {
        ...S.target,
        selector: {
          ...S.target.selector,
          properties: {
            ...S.target.selector.properties,
            textStyle: I
          }
        }
      }
    }), h === z && t(8, N = I));
  }, V = (z) => {
    h === z && (t(6, h = null), t(7, v = ""));
    const { [z]: I, ...S } = b;
    t(1, b = S), r.removeAnnotation(z);
  }, Q = (z, I, S) => {
    if (z.button !== 0) return;
    z.stopPropagation();
    const re = M(z.clientX, z.clientY);
    P = { x: re.x - S.x, y: re.y - S.y }, k = I;
  }, x = (z) => {
    if (!k || !P) return;
    const I = M(z.clientX, z.clientY);
    t(11, m = {
      [k]: {
        x: I.x - P.x,
        y: I.y - P.y
      }
    });
  }, F = () => {
    var I, S, re, ge;
    if (!k) return;
    const z = m[k];
    if (z) {
      const Ee = o.find((le) => le.id === k);
      if (Ee) {
        const le = Ee.target.selector.geometry, We = z.x - le.x, Ye = z.y - le.y;
        r.updateAnnotation({
          ...Ee,
          target: {
            ...Ee.target,
            selector: {
              ...Ee.target.selector,
              geometry: {
                ...le,
                x: z.x,
                y: z.y,
                bounds: {
                  minX: (((I = le.bounds) == null ? void 0 : I.minX) ?? le.x) + We,
                  minY: (((S = le.bounds) == null ? void 0 : S.minY) ?? le.y) + Ye,
                  maxX: (((re = le.bounds) == null ? void 0 : re.maxX) ?? le.x) + We,
                  maxY: (((ge = le.bounds) == null ? void 0 : ge.maxY) ?? le.y) + Ye
                }
              }
            }
          }
        });
      }
    }
    k = null, P = null, t(11, m = {});
  }, oe = (z) => {
    z.stopPropagation(), (z.key === "Enter" || z.key === "Escape") && (D(), r.cancelSelected());
  }, be = (z) => [
    z.bold ? "font-weight:bold" : "",
    z.italic ? "font-style:italic" : "",
    z.underline ? "text-decoration:underline" : ""
  ].filter(Boolean).join(";"), te = (z, I, S) => [
    `left:${I.left}px`,
    `top:${I.top}px`,
    `width:${S}px`,
    `height:${(z.fontSize || pn.fontSize) * 1.2}px`,
    `font-size:${z.fontSize || pn.fontSize}px`,
    z.bold ? "font-weight:bold" : "",
    z.italic ? "font-style:italic" : "",
    z.underline ? "text-decoration:underline" : "",
    z.bgColor && z.bgColor !== "transparent" ? `background:${z.bgColor}` : ""
  ].filter(Boolean).join(";");
  on(() => {
    u = r.element.querySelector("img"), u && (u.complete && Y(), u.addEventListener("load", Y), window.ResizeObserver && (_ = new ResizeObserver(Y), _.observe(u)), r.on("createAnnotation", R), r.on("selectionChanged", W), window.addEventListener("mousemove", x), window.addEventListener("mouseup", F));
  }), ui(() => {
    u == null || u.removeEventListener("load", Y), _ == null || _.disconnect(), r.off("createAnnotation", R), r.off("selectionChanged", W), window.removeEventListener("mousemove", x), window.removeEventListener("mouseup", F);
  });
  const Oe = (z, I, S) => Q(S, z, I), ue = (z) => G(z), ve = (z, I, S) => Q(S, z, I), ce = (z, I, S) => Q(S, z, I), Xe = (z, I, S) => Q(S, z, I);
  function pe(z) {
    gn[z ? "unshift" : "push"](() => {
      c = z, t(3, c);
    });
  }
  const je = (z, I) => j(z, I.detail), ke = (z) => V(z);
  function K(z) {
    gn[z ? "unshift" : "push"](() => {
      L = z, t(9, L);
    });
  }
  function Fe() {
    v = this.value, t(7, v);
  }
  return e.$$set = (z) => {
    "anno" in z && t(27, r = z.anno), "strokeColor" in z && t(0, a = z.strokeColor);
  }, e.$$.update = () => {
    if (e.$$.dirty[0] & /*$store*/
    1073741824 && t(29, o = f), e.$$.dirty[0] & /*allAnnotations, naturalWidth*/
    805306368 && t(12, s = o.reduce(
      (z, I) => {
        var ge, Ee;
        const S = (ge = I.target) == null ? void 0 : ge.selector, re = (Ee = S == null ? void 0 : S.properties) == null ? void 0 : Ee.toolType;
        if (!S) return z;
        if (re === "arrow") {
          const le = S.geometry.points, [We, Ye] = le[0], [en, sn] = le[1], un = Math.atan2(sn - Ye, en - We), cn = 25, lt = [
            `${en - cn * Math.cos(un - Math.PI / 6)},${sn - cn * Math.sin(un - Math.PI / 6)}`,
            `${en},${sn}`,
            `${en - cn * Math.cos(un + Math.PI / 6)},${sn - cn * Math.sin(un + Math.PI / 6)}`
          ].join(" ");
          z.push({
            id: I.id,
            toolType: "arrow",
            arrowheadStr: lt
          });
        } else if (re === "distance") {
          const le = S.geometry.points.map((nn) => nn.point), [We, Ye] = le[0], [en, sn] = le[le.length - 1];
          let un = 0;
          for (let nn = 1; nn < le.length; nn++) un += Math.hypot(le[nn][0] - le[nn - 1][0], le[nn][1] - le[nn - 1][1]);
          const cn = Math.hypot(en - We, sn - Ye), lt = cn > 0 ? -(sn - Ye) / cn : 0, Fs = cn > 0 ? (en - We) / cn : 1, Ws = d * 0.012;
          z.push({
            id: I.id,
            toolType: "distance",
            linePts: le.map((nn) => `${nn[0]},${nn[1]}`).join(" "),
            x1: We,
            y1: Ye,
            x2: en,
            y2: sn,
            mx: (We + en) / 2,
            my: (Ye + sn) / 2,
            px: lt,
            py: Fs,
            u: Ws,
            length: `${un.toFixed(1)}px`
          });
        }
        return z;
      },
      []
    )), e.$$.dirty[0] & /*allAnnotations*/
    536870912 && t(2, l = o.map((z) => {
      var I, S, re;
      return {
        id: z.id,
        annotation: z,
        selector: (I = z.target) == null ? void 0 : I.selector,
        text: (re = (S = z.bodies) == null ? void 0 : S[0]) == null ? void 0 : re.value
      };
    }).filter(({ selector: z }) => {
      var I;
      return ((I = z == null ? void 0 : z.properties) == null ? void 0 : I.toolType) === "text";
    })), e.$$.dirty[0] & /*textAnnotations, localTexts*/
    6)
      for (const { id: z, text: I } of l)
        I && b[z] === void 0 && t(1, b = { ...b, [z]: I });
  }, [
    a,
    b,
    l,
    c,
    p,
    g,
    h,
    v,
    N,
    L,
    w,
    m,
    s,
    y,
    A,
    T,
    X,
    C,
    H,
    G,
    D,
    j,
    V,
    Q,
    oe,
    be,
    te,
    r,
    d,
    o,
    f,
    Oe,
    ue,
    ve,
    ce,
    Xe,
    pe,
    je,
    ke,
    K,
    Fe
  ];
}
class Rr extends Re {
  constructor(n) {
    super(), Ce(this, n, Cr, Ir, Ie, { anno: 27, strokeColor: 0 }, null, [-1, -1, -1]);
  }
}
const Nr = (e) => {
  if (!("element" in e))
    return null;
  const n = new Rr({
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
      n = q("path"), o = q("path"), f && f.c(), l = He(), i(n, "class", t = ln(`a9s-outer ${/*isClosable*/
      e[1] ? "closed" : "open"}`) + " svelte-1fo8cp4"), i(
        n,
        "d",
        /*pathString*/
        e[2]
      ), i(o, "class", s = ln(`a9s-inner ${/*isClosable*/
      e[1] ? "closed" : "open"}`) + " svelte-1fo8cp4"), i(
        o,
        "d",
        /*pathString*/
        e[2]
      );
    },
    m(r, a) {
      U(r, n, a), U(r, o, a), f && f.m(r, a), U(r, l, a);
    },
    p(r, a) {
      a & /*isClosable*/
      2 && t !== (t = ln(`a9s-outer ${/*isClosable*/
      r[1] ? "closed" : "open"}`) + " svelte-1fo8cp4") && i(n, "class", t), a & /*pathString*/
      4 && i(
        n,
        "d",
        /*pathString*/
        r[2]
      ), a & /*isClosable*/
      2 && s !== (s = ln(`a9s-inner ${/*isClosable*/
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
      r && (B(n), B(o), B(l)), f && f.d(r);
    }
  };
}
function gs(e) {
  let n, t, o;
  return {
    c() {
      n = q("circle"), i(n, "class", "a9s-handle svelte-1fo8cp4"), i(n, "cx", t = /*points*/
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
function Ar(e) {
  let n, t = (
    /*pathString*/
    e[2] && ms(e)
  );
  return {
    c() {
      n = q("g"), t && t.c(), i(n, "class", "a9s-annotation a9s-rubberband");
    },
    m(o, s) {
      U(o, n, s), t && t.m(n, null);
    },
    p(o, [s]) {
      /*pathString*/
      o[2] ? t ? t.p(o, s) : (t = ms(o), t.c(), t.m(n, null)) : t && (t.d(1), t = null);
    },
    i: Se,
    o: Se,
    d(o) {
      o && B(n), t && t.d();
    }
  };
}
const Dr = 20, Xr = 1500;
function jr(e, n, t) {
  let o, s, l;
  const f = xe();
  let { addEventListener: r } = n, { drawingMode: a } = n, { transform: u } = n, { viewportScale: c = 1 } = n, p, d = [], g, _ = !1, h;
  const v = (k) => {
    const P = k, { timeStamp: m, offsetX: O, offsetY: y } = P;
    if (p = { timeStamp: m, offsetX: O, offsetY: y }, a === "drag" && d.length === 0) {
      const M = u.elementToImage(P.offsetX, P.offsetY);
      d.push(M), t(8, g = M);
    }
  }, N = (k) => {
    const P = k;
    if (h && clearTimeout(h), d.length > 0) {
      if (t(8, g = u.elementToImage(P.offsetX, P.offsetY)), d.length > 2) {
        const m = rn(g, d[0]) * c;
        t(1, _ = m < Dr);
      }
      P.pointerType === "touch" && (h = setTimeout(
        () => {
          w();
        },
        Xr
      ));
    }
  }, L = (k) => {
    const P = k;
    if (h && clearTimeout(h), a === "click") {
      const m = P.timeStamp - p.timeStamp, O = rn([p.offsetX, p.offsetY], [P.offsetX, P.offsetY]);
      if (m > 300 || O > 15) return;
      if (_)
        b();
      else if (d.length === 0) {
        const y = u.elementToImage(P.offsetX, P.offsetY);
        d.push(y), t(8, g = y);
      } else
        d.push(g);
    } else {
      if (d.length === 1 && rn(d[0], g) <= 4) {
        t(0, d = []), t(8, g = void 0);
        return;
      }
      P.stopImmediatePropagation(), _ ? b() : d.push(g);
    }
  }, w = () => {
    if (!g) return;
    const k = d.slice(0, -1);
    if (k.length < 2) return;
    const P = {
      type: Pe.POLYLINE,
      geometry: {
        bounds: De(k),
        points: k.map((m) => ({ type: "CORNER", point: m }))
      }
    };
    t(0, d = []), t(8, g = void 0), f("create", P);
  }, b = () => {
    const k = {
      type: Pe.POLYLINE,
      geometry: {
        bounds: De(d),
        points: d.map((P) => ({ type: "CORNER", point: P })),
        closed: !0
      }
    };
    t(0, d = []), t(8, g = void 0), f("create", k);
  };
  return on(() => {
    r("pointerdown", v, !0), r("pointermove", N), r("pointerup", L, !0), r("dblclick", w, !0);
  }), e.$$set = (k) => {
    "addEventListener" in k && t(4, r = k.addEventListener), "drawingMode" in k && t(5, a = k.drawingMode), "transform" in k && t(6, u = k.transform), "viewportScale" in k && t(7, c = k.viewportScale);
  }, e.$$.update = () => {
    e.$$.dirty & /*viewportScale*/
    128 && t(3, o = 4 / c), e.$$.dirty & /*cursor, isClosable, points*/
    259 && t(9, s = g ? _ ? d : [...d, g] : []), e.$$.dirty & /*coords, isClosable*/
    514 && t(2, l = s.length > 0 ? `M ${s[0][0]},${s[0][1]}` + s.slice(1).map(([k, P]) => ` L ${k},${P}`).join("") + (_ ? " Z" : "") : "");
  }, [
    d,
    _,
    l,
    o,
    r,
    a,
    u,
    c,
    g,
    s
  ];
}
class Br extends Re {
  constructor(n) {
    super(), Ce(this, n, jr, Ar, Ie, {
      addEventListener: 4,
      drawingMode: 5,
      transform: 6,
      viewportScale: 7
    });
  }
}
const Ur = (e, n, t) => {
  const { points: o, closed: s } = e.geometry, l = o[n], f = n === 0 ? s ? o.length - 1 : null : n - 1, r = n === o.length - 1 ? s ? 0 : null : n + 1;
  let a = 0, u = 0;
  if (f !== null && r !== null) {
    const p = o[f].point, d = o[r].point;
    a = d[0] - p[0], u = d[1] - p[1];
  } else if (f !== null) {
    const p = o[f].point;
    a = l.point[0] - p[0], u = l.point[1] - p[1];
  } else if (r !== null) {
    const p = o[r].point;
    a = p[0] - l.point[0], u = p[1] - l.point[1];
  }
  const c = Math.sqrt(a * a + u * u);
  if (c > 0) {
    const p = Math.min(0.3 * c, 100 / t);
    a = a / c * p, u = u / c * p;
  }
  return [a, u];
}, Gr = (e, n) => {
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
}, qr = (e, n, t) => {
  const o = e.geometry.points[n];
  if (o.type === "CORNER") {
    const [s, l] = Ur(e, n, t), f = o.point, r = o.inHandle || [
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
        points: e.geometry.points.map((u, c) => c === n ? {
          ...u,
          type: "CURVE",
          inHandle: r,
          outHandle: a,
          locked: !0
        } : u)
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
function Yr(e) {
  let n, t, o, s, l;
  return {
    c() {
      n = q("circle"), i(n, "class", "a9s-tangent-handle svelte-103tdqm"), i(n, "cx", t = /*controlPoint*/
      e[1][0]), i(n, "cy", o = /*controlPoint*/
      e[1][1]), i(
        n,
        "r",
        /*handleRadius*/
        e[3]
      );
    },
    m(f, r) {
      U(f, n, r), s || (l = $(
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
      f && B(n), s = !1, l();
    }
  };
}
function zr(e) {
  let n, t, o, s, l, f, r, a, u;
  return {
    c() {
      n = q("circle"), l = q("circle"), i(n, "cx", t = /*controlPoint*/
      e[1][0]), i(n, "cy", o = /*controlPoint*/
      e[1][1]), i(n, "class", "a9s-tangent-handle-buffer svelte-103tdqm"), i(n, "r", s = 3 * /*handleRadius*/
      e[3]), Ze(
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
    m(c, p) {
      U(c, n, p), U(c, l, p), a || (u = [
        $(
          n,
          "pointerdown",
          /*pointerdown_handler*/
          e[7]
        ),
        $(
          n,
          "pointerdown",
          /*onPointerDown*/
          e[4]
        ),
        $(
          n,
          "pointerup",
          /*onPointerUp*/
          e[5]
        )
      ], a = !0);
    },
    p(c, p) {
      p & /*controlPoint*/
      2 && t !== (t = /*controlPoint*/
      c[1][0]) && i(n, "cx", t), p & /*controlPoint*/
      2 && o !== (o = /*controlPoint*/
      c[1][1]) && i(n, "cy", o), p & /*handleRadius*/
      8 && s !== (s = 3 * /*handleRadius*/
      c[3]) && i(n, "r", s), p & /*touched*/
      4 && Ze(
        n,
        "touched",
        /*touched*/
        c[2]
      ), p & /*controlPoint*/
      2 && f !== (f = /*controlPoint*/
      c[1][0]) && i(l, "cx", f), p & /*controlPoint*/
      2 && r !== (r = /*controlPoint*/
      c[1][1]) && i(l, "cy", r), p & /*handleRadius*/
      8 && i(
        l,
        "r",
        /*handleRadius*/
        c[3]
      );
    },
    d(c) {
      c && (B(n), B(l)), a = !1, Le(u);
    }
  };
}
function Vr(e) {
  let n, t, o, s, l, f, r, a, u, c, p;
  function d(h, v) {
    return fn ? zr : Yr;
  }
  let _ = d()(e);
  return {
    c() {
      n = q("g"), t = q("line"), r = q("line"), _.c(), i(t, "class", "a9s-tangent-line a9s-outer svelte-103tdqm"), i(t, "x1", o = /*corner*/
      e[0][0]), i(t, "y1", s = /*corner*/
      e[0][1]), i(t, "x2", l = /*controlPoint*/
      e[1][0]), i(t, "y2", f = /*controlPoint*/
      e[1][1]), i(r, "class", "a9s-tangent-line a9s-inner svelte-103tdqm"), i(r, "x1", a = /*corner*/
      e[0][0]), i(r, "y1", u = /*corner*/
      e[0][1]), i(r, "x2", c = /*controlPoint*/
      e[1][0]), i(r, "y2", p = /*controlPoint*/
      e[1][1]), i(n, "class", "a9s-bezier-handle svelte-103tdqm");
    },
    m(h, v) {
      U(h, n, v), Z(n, t), Z(n, r), _.m(n, null);
    },
    p(h, [v]) {
      v & /*corner*/
      1 && o !== (o = /*corner*/
      h[0][0]) && i(t, "x1", o), v & /*corner*/
      1 && s !== (s = /*corner*/
      h[0][1]) && i(t, "y1", s), v & /*controlPoint*/
      2 && l !== (l = /*controlPoint*/
      h[1][0]) && i(t, "x2", l), v & /*controlPoint*/
      2 && f !== (f = /*controlPoint*/
      h[1][1]) && i(t, "y2", f), v & /*corner*/
      1 && a !== (a = /*corner*/
      h[0][0]) && i(r, "x1", a), v & /*corner*/
      1 && u !== (u = /*corner*/
      h[0][1]) && i(r, "y1", u), v & /*controlPoint*/
      2 && c !== (c = /*controlPoint*/
      h[1][0]) && i(r, "x2", c), v & /*controlPoint*/
      2 && p !== (p = /*controlPoint*/
      h[1][1]) && i(r, "y2", p), _.p(h, v);
    },
    i: Se,
    o: Se,
    d(h) {
      h && B(n), _.d();
    }
  };
}
function Kr(e, n, t) {
  let o, { corner: s } = n, { controlPoint: l } = n, { viewportScale: f = 1 } = n, r = !1;
  const a = (d) => {
    d.pointerType === "touch" && t(2, r = !0);
  }, u = () => t(2, r = !1);
  function c(d) {
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
    u,
    f,
    c,
    p
  ];
}
class Ks extends Re {
  constructor(n) {
    super(), Ce(this, n, Kr, Vr, Ie, {
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
  let n, t, o, s, l, f, r, a, u, c;
  return {
    c() {
      n = q("mask"), t = q("rect"), r = q("circle"), i(t, "x", o = /*mask*/
      e[9].x), i(t, "y", s = /*mask*/
      e[9].y), i(t, "width", l = /*mask*/
      e[9].w), i(t, "height", f = /*mask*/
      e[9].h), i(t, "class", "svelte-sq8d4p"), i(r, "cx", a = /*point*/
      e[31][0]), i(r, "cy", u = /*point*/
      e[31][1]), i(r, "r", c = Bt / /*viewportScale*/
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
      512 && f !== (f = /*mask*/
      p[9].h) && i(t, "height", f), d[0] & /*midpoints, visibleMidpoint*/
      2112 && a !== (a = /*point*/
      p[31][0]) && i(r, "cx", a), d[0] & /*midpoints, visibleMidpoint*/
      2112 && u !== (u = /*point*/
      p[31][1]) && i(r, "cy", u), d[0] & /*viewportScale*/
      8 && c !== (c = Bt / /*viewportScale*/
      p[3]) && i(r, "r", c);
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
      o && o.c(), n = He();
    },
    m(s, l) {
      o && o.m(s, l), U(s, n, l), t = !0;
    },
    p(s, l) {
      /*corner*/
      s[36].type === "CURVE" ? o ? (o.p(s, l), l[0] & /*geom, selectedCorners*/
      288 && J(o, 1)) : (o = bs(s), o.c(), J(o, 1), o.m(n.parentNode, n)) : o && (Ve(), ee(o, 1, 1, () => {
        o = null;
      }), Ke());
    },
    i(s) {
      t || (J(o), t = !0);
    },
    o(s) {
      ee(o), t = !1;
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
      s && s.c(), n = ne(), l && l.c(), t = He();
    },
    m(f, r) {
      s && s.m(f, r), U(f, n, r), l && l.m(f, r), U(f, t, r), o = !0;
    },
    p(f, r) {
      /*corner*/
      f[36].inHandle ? s ? (s.p(f, r), r[0] & /*geom, selectedCorners*/
      288 && J(s, 1)) : (s = vs(f), s.c(), J(s, 1), s.m(n.parentNode, n)) : s && (Ve(), ee(s, 1, 1, () => {
        s = null;
      }), Ke()), /*corner*/
      f[36].outHandle ? l ? (l.p(f, r), r[0] & /*geom, selectedCorners*/
      288 && J(l, 1)) : (l = Es(f), l.c(), J(l, 1), l.m(t.parentNode, t)) : l && (Ve(), ee(l, 1, 1, () => {
        l = null;
      }), Ke());
    },
    i(f) {
      o || (J(s), J(l), o = !0);
    },
    o(f) {
      ee(s), ee(l), o = !1;
    },
    d(f) {
      f && (B(n), B(t)), s && s.d(f), l && l.d(f);
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
    se(
      /*grab*/
      e[30](`IN-${/*selectedCorner*/
      e[35]}`)
    ) && e[30](`IN-${/*selectedCorner*/
    e[35]}`).apply(this, arguments);
  }), {
    c() {
      _e(n.$$.fragment);
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
      t || (J(n.$$.fragment, o), t = !0);
    },
    o(o) {
      ee(n.$$.fragment, o), t = !1;
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
    se(
      /*grab*/
      e[30](`OUT-${/*selectedCorner*/
      e[35]}`)
    ) && e[30](`OUT-${/*selectedCorner*/
    e[35]}`).apply(this, arguments);
  }), {
    c() {
      _e(n.$$.fragment);
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
      t || (J(n.$$.fragment, o), t = !0);
    },
    o(o) {
      ee(n.$$.fragment, o), t = !1;
    },
    d(o) {
      me(n, o);
    }
  };
}
function ks(e) {
  let n, t;
  return n = new Ge({
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
    se(
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
      _e(n.$$.fragment);
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
      t || (J(n.$$.fragment, o), t = !0);
    },
    o(o) {
      ee(n.$$.fragment, o), t = !1;
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
    se(
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
      _e(n.$$.fragment);
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
      t || (J(n.$$.fragment, o), t = !0);
    },
    o(o) {
      ee(n.$$.fragment, o), t = !1;
    },
    d(o) {
      me(n, o);
    }
  };
}
function Fr(e) {
  let n, t, o, s, l, f, r, a, u, c, p, d, g, _, h, v, N, L, w, b = (
    /*visibleMidpoint*/
    e[6] !== void 0 && !/*isHandleHovered*/
    e[7] && ys(Ht(e))
  ), k = (
    /*selectedCorners*/
    e[8].length === 1 && ws(Ot(e))
  ), P = Ae(
    /*geom*/
    e[5].points
  ), m = [];
  for (let M = 0; M < P.length; M += 1)
    m[M] = ks(_s(e, P, M));
  const O = (M) => ee(m[M], 1, 1, () => {
    m[M] = null;
  });
  let y = (
    /*visibleMidpoint*/
    e[6] !== void 0 && !/*isHandleHovered*/
    e[7] && Ss(Lt(e))
  );
  return {
    c() {
      n = q("defs"), b && b.c(), t = ne(), o = q("g"), s = q("rect"), u = q("path"), p = q("path"), g = ne(), k && k.c(), _ = ne();
      for (let M = 0; M < m.length; M += 1)
        m[M].c();
      h = ne(), y && y.c(), v = He(), i(s, "x", l = /*mask*/
      e[9].x), i(s, "y", f = /*mask*/
      e[9].y), i(s, "width", r = /*mask*/
      e[9].w), i(s, "height", a = /*mask*/
      e[9].h), i(s, "class", "mask-buffer svelte-sq8d4p"), i(u, "class", c = ln(`a9s-outer polyline ${/*shape*/
      e[0].geometry.closed ? "closed" : "open"}`) + " svelte-sq8d4p"), i(
        u,
        "d",
        /*d*/
        e[10]
      ), i(p, "class", d = ln(`a9s-inner polyline a9s-shape-handle ${/*shape*/
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
    m(M, A) {
      U(M, n, A), b && b.m(n, null), U(M, t, A), U(M, o, A), Z(o, s), Z(o, u), Z(o, p), U(M, g, A), k && k.m(M, A), U(M, _, A);
      for (let T = 0; T < m.length; T += 1)
        m[T] && m[T].m(M, A);
      U(M, h, A), y && y.m(M, A), U(M, v, A), N = !0, L || (w = [
        $(
          u,
          "pointerup",
          /*onShapePointerUp*/
          e[14]
        ),
        $(u, "pointerdown", function() {
          se(
            /*grab*/
            e[30]("SHAPE")
          ) && e[30]("SHAPE").apply(this, arguments);
        }),
        $(
          p,
          "pointerup",
          /*onShapePointerUp*/
          e[14]
        ),
        $(p, "pointerdown", function() {
          se(
            /*grab*/
            e[30]("SHAPE")
          ) && e[30]("SHAPE").apply(this, arguments);
        })
      ], L = !0);
    },
    p(M, A) {
      if (e = M, /*visibleMidpoint*/
      e[6] !== void 0 && !/*isHandleHovered*/
      e[7] ? b ? b.p(Ht(e), A) : (b = ys(Ht(e)), b.c(), b.m(n, null)) : b && (b.d(1), b = null), (!N || A[0] & /*mask*/
      512 && l !== (l = /*mask*/
      e[9].x)) && i(s, "x", l), (!N || A[0] & /*mask*/
      512 && f !== (f = /*mask*/
      e[9].y)) && i(s, "y", f), (!N || A[0] & /*mask*/
      512 && r !== (r = /*mask*/
      e[9].w)) && i(s, "width", r), (!N || A[0] & /*mask*/
      512 && a !== (a = /*mask*/
      e[9].h)) && i(s, "height", a), (!N || A[0] & /*shape*/
      1 && c !== (c = ln(`a9s-outer polyline ${/*shape*/
      e[0].geometry.closed ? "closed" : "open"}`) + " svelte-sq8d4p")) && i(u, "class", c), (!N || A[0] & /*d*/
      1024) && i(
        u,
        "d",
        /*d*/
        e[10]
      ), (!N || A[0] & /*shape*/
      1 && d !== (d = ln(`a9s-inner polyline a9s-shape-handle ${/*shape*/
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
      256 && J(k, 1)) : (k = ws(Ot(e)), k.c(), J(k, 1), k.m(_.parentNode, _)) : k && (Ve(), ee(k, 1, 1, () => {
        k = null;
      }), Ke()), A[0] & /*geom, viewportScale, selectedCorners, onDoubleClick, onEnterHandle, onLeaveHandle, onHandlePointerDown, grab, onHandlePointerUp*/
      1073983784) {
        P = Ae(
          /*geom*/
          e[5].points
        );
        let T;
        for (T = 0; T < P.length; T += 1) {
          const X = _s(e, P, T);
          m[T] ? (m[T].p(X, A), J(m[T], 1)) : (m[T] = ks(X), m[T].c(), J(m[T], 1), m[T].m(h.parentNode, h));
        }
        for (Ve(), T = P.length; T < m.length; T += 1)
          O(T);
        Ke();
      }
      /*visibleMidpoint*/
      e[6] !== void 0 && !/*isHandleHovered*/
      e[7] ? y ? (y.p(Lt(e), A), A[0] & /*visibleMidpoint, isHandleHovered*/
      192 && J(y, 1)) : (y = Ss(Lt(e)), y.c(), J(y, 1), y.m(v.parentNode, v)) : y && (Ve(), ee(y, 1, 1, () => {
        y = null;
      }), Ke());
    },
    i(M) {
      if (!N) {
        J(k);
        for (let A = 0; A < P.length; A += 1)
          J(m[A]);
        J(y), N = !0;
      }
    },
    o(M) {
      ee(k), m = m.filter(Boolean);
      for (let A = 0; A < m.length; A += 1)
        ee(m[A]);
      ee(y), N = !1;
    },
    d(M) {
      M && (B(n), B(t), B(o), B(g), B(_), B(h), B(v)), b && b.d(), k && k.d(M), jn(m, M), y && y.d(M), L = !1, Le(w);
    }
  };
}
function Wr(e) {
  let n, t;
  return n = new _n({
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
          Fr,
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
      _e(n.$$.fragment);
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
      t || (J(n.$$.fragment, o), t = !0);
    },
    o(o) {
      ee(n.$$.fragment, o), t = !1;
    },
    d(o) {
      me(n, o);
    }
  };
}
const Zr = 250, Qr = 1e3, Jr = 12, Bt = 4.5;
function $r(e, n, t) {
  let o, s, l, f;
  const r = xe();
  let { shape: a } = n, { computedStyle: u } = n, { transform: c } = n, { viewportScale: p = 1 } = n, { svgEl: d } = n, g, _ = !1, h = null, v = [], N = !1;
  const L = () => t(7, _ = !0), w = () => t(7, _ = !1), b = (R) => {
    if (v.length > 0 || !s.some((F) => F.visible)) {
      t(6, g = void 0);
      return;
    }
    const [G, W] = c.elementToImage(R.offsetX, R.offsetY), D = (F) => Math.pow(F[0] - G, 2) + Math.pow(F[1] - W, 2), j = o.points.reduce((F, oe) => D(oe.point) < D(F.point) ? oe : F), V = s.filter((F) => F.visible).reduce((F, oe) => D(oe.point) < D(F.point) ? oe : F), Q = Math.pow(Qr / p, 2);
    D(j.point) < Q || D(V.point) < Q ? t(6, g = s.indexOf(V)) : t(6, g = void 0);
  }, k = () => {
    document.activeElement !== d && d.focus();
  }, P = () => {
    t(8, v = []), k();
  }, m = (R) => {
    t(7, _ = !0), R.preventDefault(), R.stopPropagation(), h = performance.now();
  }, O = (R) => (G) => {
    if (!h || performance.now() - h > Zr) return;
    const W = v.includes(R);
    if (G.metaKey || G.ctrlKey || G.shiftKey)
      W ? t(8, v = v.filter((D) => D !== R)) : t(8, v = [...v, R]);
    else {
      const D = qr(a, R, p);
      r("change", D), t(8, v = [R]);
    }
  }, y = (R) => () => {
    const G = o.points[R];
    if (G.type === "CORNER" || !G.inHandle && !G.outHandle) return;
    const W = o.points.map((V, Q) => {
      if (Q !== R) return V;
      const x = { ...V, locked: !0 }, F = G.inHandle || G.outHandle;
      if (!F) return V;
      const oe = F[0] - G.point[0], be = F[1] - G.point[1];
      if (Math.sqrt(oe ** 2 + be ** 2) === 0) return V;
      const Oe = [G.point[0] - oe, G.point[1] - be];
      return G.inHandle ? (x.inHandle = G.inHandle, x.outHandle = Oe) : G.outHandle && (x.outHandle = G.outHandle, x.inHandle = Oe), x;
    }), D = De(Ln(W, o.closed)), j = {
      ...a,
      geometry: { bounds: D, points: W, closed: o.closed }
    };
    r("change", j);
  }, M = (R, G, W) => {
    const D = R.geometry, [j, V] = W;
    let Q;
    if (G === "SHAPE")
      Q = D.points.map((F) => ({
        ...F,
        point: [F.point[0] + j, F.point[1] + V],
        inHandle: F.inHandle ? [F.inHandle[0] + j, F.inHandle[1] + V] : void 0,
        outHandle: F.outHandle ? [F.outHandle[0] + j, F.outHandle[1] + V] : void 0
      }));
    else if (G.startsWith("CORNER-")) {
      const F = parseInt(G.split("-")[1]);
      Q = D.points.map((oe, be) => be === F ? {
        ...oe,
        point: [oe.point[0] + j, oe.point[1] + V],
        inHandle: oe.inHandle ? [oe.inHandle[0] + j, oe.inHandle[1] + V] : void 0,
        outHandle: oe.outHandle ? [oe.outHandle[0] + j, oe.outHandle[1] + V] : void 0
      } : oe);
    } else if (G.startsWith("IN-") || G.startsWith("OUT-")) {
      const [F, oe] = G.split("-"), be = parseInt(oe);
      Q = D.points.map((te, Oe) => {
        if (Oe === be && te.type === "CURVE") {
          const ue = N ? !1 : te.locked, ve = { ...te, locked: ue };
          if (F === "IN" && te.inHandle) {
            if (ve.inHandle = [te.inHandle[0] + j, te.inHandle[1] + V], te.outHandle && ue) {
              const ce = ve.inHandle[0] - te.point[0], Xe = ve.inHandle[1] - te.point[1], pe = Math.sqrt(ce ** 2 + Xe ** 2), je = Math.sqrt((te.outHandle[0] - te.point[0]) ** 2 + (te.outHandle[1] - te.point[1]) ** 2);
              pe > 0 && (ve.outHandle = [
                te.point[0] - ce / pe * je,
                te.point[1] - Xe / pe * je
              ]);
            }
          } else if (F === "OUT" && te.outHandle && (ve.outHandle = [te.outHandle[0] + j, te.outHandle[1] + V], te.inHandle && ue)) {
            const ce = ve.outHandle[0] - te.point[0], Xe = ve.outHandle[1] - te.point[1], pe = Math.sqrt(ce ** 2 + Xe ** 2), je = Math.sqrt((te.inHandle[0] - te.point[0]) ** 2 + (te.inHandle[1] - te.point[1]) ** 2);
            pe > 0 && (ve.inHandle = [
              te.point[0] - ce / pe * je,
              te.point[1] - Xe / pe * je
            ]);
          }
          return ve;
        }
        return te;
      });
    } else
      Q = D.points;
    const x = De(Ln(Q, D.closed));
    return {
      ...R,
      geometry: { bounds: x, points: Q, closed: D.closed }
    };
  }, A = (R) => async (G) => {
    G.stopPropagation();
    const W = [
      ...o.points.slice(0, R + 1),
      {
        type: "CORNER",
        point: s[R].point
      },
      ...o.points.slice(R + 1)
    ], D = De(Ln(W, o.closed));
    r("change", {
      ...a,
      geometry: { points: W, bounds: D, closed: o.closed }
    }), await Kn();
    const j = [...document.querySelectorAll(".a9s-handle")][R + 1];
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
  }, T = () => {
    const R = o.closed ? 3 : 2;
    if (o.points.length - v.length < R) return;
    const G = o.points.filter((D, j) => !v.includes(j)), W = De(Ln(G, o.closed));
    r("change", {
      ...a,
      geometry: {
        closed: a.geometry.closed,
        bounds: W,
        points: G
      }
    }), t(8, v = []);
  };
  on(() => {
    const R = (W) => {
      W.altKey && !N && (N = !0), (W.key === "Delete" || W.key === "Backspace") && T();
    }, G = (W) => {
      !W.altKey && N && (N = !1);
    };
    return d.addEventListener("pointermove", b), window.addEventListener("keydown", R), window.addEventListener("keyup", G), () => {
      d.removeEventListener("pointermove", b), window.removeEventListener("keydown", R), window.removeEventListener("keyup", G);
    };
  });
  const X = `polygon-mask-${Math.random().toString(36).substring(2, 12)}`;
  function C(R) {
    he.call(this, e, R);
  }
  function H(R) {
    he.call(this, e, R);
  }
  function Y(R) {
    he.call(this, e, R);
  }
  return e.$$set = (R) => {
    "shape" in R && t(0, a = R.shape), "computedStyle" in R && t(1, u = R.computedStyle), "transform" in R && t(2, c = R.transform), "viewportScale" in R && t(3, p = R.viewportScale), "svgEl" in R && t(4, d = R.svgEl);
  }, e.$$.update = () => {
    e.$$.dirty[0] & /*shape*/
    1 && t(5, o = a.geometry), e.$$.dirty[0] & /*geom, viewportScale*/
    40 && t(11, s = fn ? [] : o.points.reduce(
      (R, G, W) => {
        const D = W === o.points.length - 1 ? (
          // Last point
          o.closed ? o.points[0] : void 0
        ) : o.points[W + 1];
        if (!D) return R;
        const [j, V] = Gr(G, D), x = Math.sqrt(Math.pow(D.point[0] - j, 2) + Math.pow(D.point[1] - V, 2)) > Jr / p;
        return [...R, { point: [j, V], visible: x }];
      },
      []
    )), e.$$.dirty[0] & /*geom*/
    32 && t(10, l = wl(o)), e.$$.dirty[0] & /*geom, viewportScale*/
    40 && t(9, f = vn(o.bounds, Bt / p));
  }, [
    a,
    u,
    c,
    p,
    d,
    o,
    g,
    _,
    v,
    f,
    l,
    s,
    L,
    w,
    P,
    m,
    O,
    y,
    M,
    A,
    X,
    C,
    H,
    Y
  ];
}
class xr extends Re {
  constructor(n) {
    super(), Ce(
      this,
      n,
      $r,
      Wr,
      Ie,
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
function ef(e) {
  var L, w;
  let n, t, o, s, l, f, r, a, u, c, p, d, g, _, h, v, N;
  return _ = new Ge({
    props: {
      class: "a9s-corner-top",
      x: (
        /*points*/
        ((L = e[5][0]) == null ? void 0 : L[0]) ?? /*center*/
        e[6].x
      ),
      y: (
        /*points*/
        ((w = e[5][0]) == null ? void 0 : w[1]) ?? /*center*/
        e[6].y - /*outerRadius*/
        e[9]
      ),
      scale: (
        /*viewportScale*/
        e[3]
      )
    }
  }), _.$on("pointerdown", function() {
    se(
      /*grab*/
      e[17]("SCALE")
    ) && e[17]("SCALE").apply(this, arguments);
  }), {
    c() {
      n = q("defs"), t = q("mask"), o = q("rect"), a = q("path"), u = ne(), c = q("path"), p = ne(), d = q("path"), g = ne(), _e(_.$$.fragment), i(o, "x", s = /*mask*/
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
      ), i(t, "class", "a9s-star-editor-mask svelte-1u8dw9g"), i(c, "class", "a9s-outer"), i(c, "mask", `url(#${/*maskId*/
      e[11]})`), i(
        c,
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
      U(b, n, k), Z(n, t), Z(t, o), Z(t, a), U(b, u, k), U(b, c, k), U(b, p, k), U(b, d, k), U(b, g, k), de(_, b, k), h = !0, v || (N = [
        $(c, "pointerdown", function() {
          se(
            /*grab*/
            e[17]("SHAPE")
          ) && e[17]("SHAPE").apply(this, arguments);
        }),
        $(d, "pointerdown", function() {
          se(
            /*grab*/
            e[17]("SHAPE")
          ) && e[17]("SHAPE").apply(this, arguments);
        })
      ], v = !0);
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
        c,
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
      ((O = e[5][0]) == null ? void 0 : O[1]) ?? /*center*/
      e[6].y - /*outerRadius*/
      e[9]), k & /*viewportScale*/
      8 && (P.scale = /*viewportScale*/
      e[3]), _.$set(P);
    },
    i(b) {
      h || (J(_.$$.fragment, b), h = !0);
    },
    o(b) {
      ee(_.$$.fragment, b), h = !1;
    },
    d(b) {
      b && (B(n), B(u), B(c), B(p), B(d), B(g)), me(_, b), v = !1, Le(N);
    }
  };
}
function nf(e) {
  let n, t;
  return n = new _n({
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
          ef,
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
      _e(n.$$.fragment);
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
      t || (J(n.$$.fragment, o), t = !0);
    },
    o(o) {
      ee(n.$$.fragment, o), t = !1;
    },
    d(o) {
      me(n, o);
    }
  };
}
function tf(e, n, t) {
  let o, s, l, f, r, a, u, { shape: c } = n, { computedStyle: p } = n, { transform: d } = n, { viewportScale: g = 1 } = n, { svgEl: _ } = n;
  const h = (b, k, P) => {
    const m = b.geometry, [O, y] = P;
    let M;
    if (k === "SHAPE")
      M = m.points.map(([A, T]) => [A + O, T + y]);
    else if (k === "SCALE") {
      const A = (m.bounds.minX + m.bounds.maxX) / 2, T = (m.bounds.minY + m.bounds.maxY) / 2, X = m.points[0], C = Math.sqrt(Math.pow(X[0] - A, 2) + Math.pow(X[1] - T, 2)), H = X[1] + y, Y = Math.sqrt(Math.pow(X[0] - A, 2) + Math.pow(H - T, 2)), R = C > 0 ? Y / C : 1;
      M = m.points.map(([G, W]) => [A + (G - A) * R, T + (W - T) * R]);
    } else
      M = m.points;
    return {
      ...b,
      geometry: {
        bounds: De(M),
        points: M
      }
    };
  }, v = `star-mask-${Math.random().toString(36).substring(2, 12)}`;
  function N(b) {
    he.call(this, e, b);
  }
  function L(b) {
    he.call(this, e, b);
  }
  function w(b) {
    he.call(this, e, b);
  }
  return e.$$set = (b) => {
    "shape" in b && t(0, c = b.shape), "computedStyle" in b && t(1, p = b.computedStyle), "transform" in b && t(2, d = b.transform), "viewportScale" in b && t(3, g = b.viewportScale), "svgEl" in b && t(4, _ = b.svgEl);
  }, e.$$.update = () => {
    e.$$.dirty & /*shape*/
    1 && t(12, o = c.geometry), e.$$.dirty & /*geom*/
    4096 && t(5, s = o.points), e.$$.dirty & /*geom*/
    4096 && t(6, l = {
      x: (o.bounds.minX + o.bounds.maxX) / 2,
      y: (o.bounds.minY + o.bounds.maxY) / 2
    }), e.$$.dirty & /*points*/
    32 && t(13, f = s.filter((b, k) => k % 2 === 0)), e.$$.dirty & /*outerPoints, center*/
    8256 && t(9, r = f.length > 0 ? Math.sqrt(Math.pow(f[0][0] - l.x, 2) + Math.pow(f[0][1] - l.y, 2)) : 0), e.$$.dirty & /*points*/
    32 && t(8, a = s.length > 0 ? `M ${s[0][0]},${s[0][1]}` + s.slice(1).map(([b, k]) => ` L ${b},${k}`).join("") + " Z" : ""), e.$$.dirty & /*geom, viewportScale*/
    4104 && t(7, u = vn(o.bounds, 2 / g));
  }, [
    c,
    p,
    d,
    g,
    _,
    s,
    l,
    u,
    a,
    r,
    h,
    v,
    o,
    f,
    N,
    L,
    w
  ];
}
class of extends Re {
  constructor(n) {
    super(), Ce(this, n, tf, nf, Ie, {
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
      n = q("path"), t = q("path"), i(n, "class", "a9s-outer svelte-1ohtpx8"), i(
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
function sf(e) {
  let n, t = (
    /*pathString*/
    e[0] && Ts(e)
  );
  return {
    c() {
      n = q("g"), t && t.c(), i(n, "class", "a9s-annotation a9s-rubberband");
    },
    m(o, s) {
      U(o, n, s), t && t.m(n, null);
    },
    p(o, [s]) {
      /*pathString*/
      o[0] ? t ? t.p(o, s) : (t = Ts(o), t.c(), t.m(n, null)) : t && (t.d(1), t = null);
    },
    i: Se,
    o: Se,
    d(o) {
      o && B(n), t && t.d();
    }
  };
}
const Ms = 5, Ps = 0.382;
function lf(e, n, t) {
  let o, s;
  const l = xe();
  let { addEventListener: f } = n, { drawingMode: r } = n, { transform: a } = n, { viewportScale: u } = n, c, p = 0, d;
  const g = (L, w, b, k) => {
    const P = [], m = Math.PI / Ms;
    for (let O = 0; O < Ms * 2; O++) {
      const y = O % 2 === 0 ? b : k, M = O * m - Math.PI / 2;
      P.push([L + y * Math.cos(M), w + y * Math.sin(M)]);
    }
    return P;
  }, _ = (L) => {
    const w = L;
    d = performance.now(), r === "drag" && (t(5, c = a.elementToImage(w.offsetX, w.offsetY)), t(6, p = 1));
  }, h = (L) => {
    const w = L;
    if (c) {
      const b = a.elementToImage(w.offsetX, w.offsetY);
      t(6, p = Math.sqrt(Math.pow(b[0] - c[0], 2) + Math.pow(b[1] - c[1], 2)));
    }
  }, v = (L) => {
    const w = L, b = performance.now() - d;
    if (r === "click") {
      if (b > 300) return;
      c ? N() : (t(5, c = a.elementToImage(w.offsetX, w.offsetY)), t(6, p = 1));
    } else c && (b > 300 || p > 10 ? (w.stopPropagation(), N()) : (t(5, c = void 0), t(6, p = 0)));
  }, N = () => {
    if (p > 10 && c) {
      const L = p * Ps, w = g(c[0], c[1], p, L), b = {
        type: Pe.POLYGON,
        geometry: { bounds: De(w), points: w }
      };
      l("create", b);
    }
    t(5, c = void 0), t(6, p = 0);
  };
  return on(() => {
    f("pointerdown", _), f("pointermove", h), f("pointerup", v, !0);
  }), e.$$set = (L) => {
    "addEventListener" in L && t(1, f = L.addEventListener), "drawingMode" in L && t(2, r = L.drawingMode), "transform" in L && t(3, a = L.transform), "viewportScale" in L && t(4, u = L.viewportScale);
  }, e.$$.update = () => {
    e.$$.dirty & /*center, outerRadius*/
    96 && t(7, o = c ? g(c[0], c[1], p, p * Ps) : []), e.$$.dirty & /*starPoints*/
    128 && t(0, s = o.length > 0 ? `M ${o[0][0]},${o[0][1]}` + o.slice(1).map(([L, w]) => ` L ${L},${w}`).join("") + " Z" : "");
  }, [
    s,
    f,
    r,
    a,
    u,
    c,
    p,
    o
  ];
}
class rf extends Re {
  constructor(n) {
    super(), Ce(this, n, lf, sf, Ie, {
      addEventListener: 1,
      drawingMode: 2,
      transform: 3,
      viewportScale: 4
    });
  }
}
function ff(e) {
  let n, t, o, s, l, f, r, a, u, c, p, d, g, _, h, v, N, L, w, b, k, P, m, O, y, M, A, T, X, C, H, Y, R, G, W, D, j, V, Q, x, F, oe, be, te, Oe, ue, ve, ce, Xe, pe, je, ke, K, Fe, z;
  return ue = new Ge({
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
  }), ue.$on("pointerdown", function() {
    se(
      /*grab*/
      e[12]("TOP_LEFT")
    ) && e[12]("TOP_LEFT").apply(this, arguments);
  }), ce = new Ge({
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
  }), ce.$on("pointerdown", function() {
    se(
      /*grab*/
      e[12]("TOP_RIGHT")
    ) && e[12]("TOP_RIGHT").apply(this, arguments);
  }), pe = new Ge({
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
    se(
      /*grab*/
      e[12]("BOTTOM_RIGHT")
    ) && e[12]("BOTTOM_RIGHT").apply(this, arguments);
  }), ke = new Ge({
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
  }), ke.$on("pointerdown", function() {
    se(
      /*grab*/
      e[12]("BOTTOM_LEFT")
    ) && e[12]("BOTTOM_LEFT").apply(this, arguments);
  }), {
    c() {
      n = q("defs"), t = q("mask"), o = q("rect"), a = q("rect"), g = ne(), _ = q("rect"), w = ne(), b = q("rect"), y = ne(), M = q("rect"), C = ne(), H = q("rect"), W = ne(), D = q("rect"), x = ne(), F = q("rect"), Oe = ne(), _e(ue.$$.fragment), ve = ne(), _e(ce.$$.fragment), Xe = ne(), _e(pe.$$.fragment), je = ne(), _e(ke.$$.fragment), i(o, "class", "rect-mask-bg svelte-1njczvj"), i(o, "x", s = /*mask*/
      e[6].x), i(o, "y", l = /*mask*/
      e[6].y), i(o, "width", f = /*mask*/
      e[6].w), i(o, "height", r = /*mask*/
      e[6].h), i(a, "class", "rect-mask-fg svelte-1njczvj"), i(a, "x", u = /*geom*/
      e[5].x), i(a, "y", c = /*geom*/
      e[5].y), i(a, "width", p = /*geom*/
      e[5].w), i(a, "height", d = /*geom*/
      e[5].h), i(
        t,
        "id",
        /*maskId*/
        e[8]
      ), i(t, "class", "a9s-rectangle-editor-mask svelte-1njczvj"), i(_, "class", "a9s-outer"), i(_, "mask", `url(#${/*maskId*/
      e[8]})`), i(_, "x", h = /*geom*/
      e[5].x), i(_, "y", v = /*geom*/
      e[5].y), i(_, "width", N = /*geom*/
      e[5].w), i(_, "height", L = /*geom*/
      e[5].h), i(b, "class", "a9s-inner a9s-shape-handle"), i(
        b,
        "style",
        /*computedStyle*/
        e[1]
      ), i(b, "x", k = /*geom*/
      e[5].x), i(b, "y", P = /*geom*/
      e[5].y), i(b, "width", m = /*geom*/
      e[5].w), i(b, "height", O = /*geom*/
      e[5].h), i(M, "class", "a9s-edge-handle a9s-edge-handle-top"), i(M, "x", A = /*geom*/
      e[5].x), i(M, "y", T = /*geom*/
      e[5].y), i(M, "height", 1), i(M, "width", X = /*geom*/
      e[5].w), i(H, "class", "a9s-edge-handle a9s-edge-handle-right"), i(H, "x", Y = /*geom*/
      e[5].x + /*geom*/
      e[5].w), i(H, "y", R = /*geom*/
      e[5].y), i(H, "height", G = /*geom*/
      e[5].h), i(H, "width", 1), i(D, "class", "a9s-edge-handle a9s-edge-handle-bottom"), i(D, "x", j = /*geom*/
      e[5].x), i(D, "y", V = /*geom*/
      e[5].y + /*geom*/
      e[5].h), i(D, "height", 1), i(D, "width", Q = /*geom*/
      e[5].w), i(F, "class", "a9s-edge-handle a9s-edge-handle-left"), i(F, "x", oe = /*geom*/
      e[5].x), i(F, "y", be = /*geom*/
      e[5].y), i(F, "height", te = /*geom*/
      e[5].h), i(F, "width", 1);
    },
    m(I, S) {
      U(I, n, S), Z(n, t), Z(t, o), Z(t, a), U(I, g, S), U(I, _, S), U(I, w, S), U(I, b, S), U(I, y, S), U(I, M, S), U(I, C, S), U(I, H, S), U(I, W, S), U(I, D, S), U(I, x, S), U(I, F, S), U(I, Oe, S), de(ue, I, S), U(I, ve, S), de(ce, I, S), U(I, Xe, S), de(pe, I, S), U(I, je, S), de(ke, I, S), K = !0, Fe || (z = [
        $(_, "pointerdown", function() {
          se(
            /*grab*/
            e[12]("SHAPE")
          ) && e[12]("SHAPE").apply(this, arguments);
        }),
        $(b, "pointerdown", function() {
          se(
            /*grab*/
            e[12]("SHAPE")
          ) && e[12]("SHAPE").apply(this, arguments);
        }),
        $(M, "pointerdown", function() {
          se(
            /*grab*/
            e[12]("TOP")
          ) && e[12]("TOP").apply(this, arguments);
        }),
        $(H, "pointerdown", function() {
          se(
            /*grab*/
            e[12]("RIGHT")
          ) && e[12]("RIGHT").apply(this, arguments);
        }),
        $(D, "pointerdown", function() {
          se(
            /*grab*/
            e[12]("BOTTOM")
          ) && e[12]("BOTTOM").apply(this, arguments);
        }),
        $(F, "pointerdown", function() {
          se(
            /*grab*/
            e[12]("LEFT")
          ) && e[12]("LEFT").apply(this, arguments);
        })
      ], Fe = !0);
    },
    p(I, S) {
      e = I, (!K || S & /*mask*/
      64 && s !== (s = /*mask*/
      e[6].x)) && i(o, "x", s), (!K || S & /*mask*/
      64 && l !== (l = /*mask*/
      e[6].y)) && i(o, "y", l), (!K || S & /*mask*/
      64 && f !== (f = /*mask*/
      e[6].w)) && i(o, "width", f), (!K || S & /*mask*/
      64 && r !== (r = /*mask*/
      e[6].h)) && i(o, "height", r), (!K || S & /*geom*/
      32 && u !== (u = /*geom*/
      e[5].x)) && i(a, "x", u), (!K || S & /*geom*/
      32 && c !== (c = /*geom*/
      e[5].y)) && i(a, "y", c), (!K || S & /*geom*/
      32 && p !== (p = /*geom*/
      e[5].w)) && i(a, "width", p), (!K || S & /*geom*/
      32 && d !== (d = /*geom*/
      e[5].h)) && i(a, "height", d), (!K || S & /*geom*/
      32 && h !== (h = /*geom*/
      e[5].x)) && i(_, "x", h), (!K || S & /*geom*/
      32 && v !== (v = /*geom*/
      e[5].y)) && i(_, "y", v), (!K || S & /*geom*/
      32 && N !== (N = /*geom*/
      e[5].w)) && i(_, "width", N), (!K || S & /*geom*/
      32 && L !== (L = /*geom*/
      e[5].h)) && i(_, "height", L), (!K || S & /*computedStyle*/
      2) && i(
        b,
        "style",
        /*computedStyle*/
        e[1]
      ), (!K || S & /*geom*/
      32 && k !== (k = /*geom*/
      e[5].x)) && i(b, "x", k), (!K || S & /*geom*/
      32 && P !== (P = /*geom*/
      e[5].y)) && i(b, "y", P), (!K || S & /*geom*/
      32 && m !== (m = /*geom*/
      e[5].w)) && i(b, "width", m), (!K || S & /*geom*/
      32 && O !== (O = /*geom*/
      e[5].h)) && i(b, "height", O), (!K || S & /*geom*/
      32 && A !== (A = /*geom*/
      e[5].x)) && i(M, "x", A), (!K || S & /*geom*/
      32 && T !== (T = /*geom*/
      e[5].y)) && i(M, "y", T), (!K || S & /*geom*/
      32 && X !== (X = /*geom*/
      e[5].w)) && i(M, "width", X), (!K || S & /*geom*/
      32 && Y !== (Y = /*geom*/
      e[5].x + /*geom*/
      e[5].w)) && i(H, "x", Y), (!K || S & /*geom*/
      32 && R !== (R = /*geom*/
      e[5].y)) && i(H, "y", R), (!K || S & /*geom*/
      32 && G !== (G = /*geom*/
      e[5].h)) && i(H, "height", G), (!K || S & /*geom*/
      32 && j !== (j = /*geom*/
      e[5].x)) && i(D, "x", j), (!K || S & /*geom*/
      32 && V !== (V = /*geom*/
      e[5].y + /*geom*/
      e[5].h)) && i(D, "y", V), (!K || S & /*geom*/
      32 && Q !== (Q = /*geom*/
      e[5].w)) && i(D, "width", Q), (!K || S & /*geom*/
      32 && oe !== (oe = /*geom*/
      e[5].x)) && i(F, "x", oe), (!K || S & /*geom*/
      32 && be !== (be = /*geom*/
      e[5].y)) && i(F, "y", be), (!K || S & /*geom*/
      32 && te !== (te = /*geom*/
      e[5].h)) && i(F, "height", te);
      const re = {};
      S & /*geom*/
      32 && (re.x = /*geom*/
      e[5].x), S & /*geom*/
      32 && (re.y = /*geom*/
      e[5].y), S & /*viewportScale*/
      8 && (re.scale = /*viewportScale*/
      e[3]), ue.$set(re);
      const ge = {};
      S & /*geom*/
      32 && (ge.x = /*geom*/
      e[5].x + /*geom*/
      e[5].w), S & /*geom*/
      32 && (ge.y = /*geom*/
      e[5].y), S & /*viewportScale*/
      8 && (ge.scale = /*viewportScale*/
      e[3]), ce.$set(ge);
      const Ee = {};
      S & /*geom*/
      32 && (Ee.x = /*geom*/
      e[5].x + /*geom*/
      e[5].w), S & /*geom*/
      32 && (Ee.y = /*geom*/
      e[5].y + /*geom*/
      e[5].h), S & /*viewportScale*/
      8 && (Ee.scale = /*viewportScale*/
      e[3]), pe.$set(Ee);
      const le = {};
      S & /*geom*/
      32 && (le.x = /*geom*/
      e[5].x), S & /*geom*/
      32 && (le.y = /*geom*/
      e[5].y + /*geom*/
      e[5].h), S & /*viewportScale*/
      8 && (le.scale = /*viewportScale*/
      e[3]), ke.$set(le);
    },
    i(I) {
      K || (J(ue.$$.fragment, I), J(ce.$$.fragment, I), J(pe.$$.fragment, I), J(ke.$$.fragment, I), K = !0);
    },
    o(I) {
      ee(ue.$$.fragment, I), ee(ce.$$.fragment, I), ee(pe.$$.fragment, I), ee(ke.$$.fragment, I), K = !1;
    },
    d(I) {
      I && (B(n), B(g), B(_), B(w), B(b), B(y), B(M), B(C), B(H), B(W), B(D), B(x), B(F), B(Oe), B(ve), B(Xe), B(je)), me(ue, I), me(ce, I), me(pe, I), me(ke, I), Fe = !1, Le(z);
    }
  };
}
function af(e) {
  let n, t;
  return n = new _n({
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
          ff,
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
      _e(n.$$.fragment);
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
      t || (J(n.$$.fragment, o), t = !0);
    },
    o(o) {
      ee(n.$$.fragment, o), t = !1;
    },
    d(o) {
      me(n, o);
    }
  };
}
function uf(e, n, t) {
  let o, s, { shape: l } = n, { computedStyle: f } = n, { transform: r } = n, { viewportScale: a = 1 } = n, { svgEl: u } = n;
  const c = (h, v, N) => {
    const L = h.geometry.bounds;
    let [w, b] = [L.minX, L.minY], [k, P] = [L.maxX, L.maxY];
    const [m, O] = N;
    if (v === "SHAPE")
      w += m, k += m, b += O, P += O;
    else {
      switch (v) {
        case "TOP":
        case "TOP_LEFT":
        case "TOP_RIGHT": {
          b += O;
          break;
        }
        case "BOTTOM":
        case "BOTTOM_LEFT":
        case "BOTTOM_RIGHT": {
          P += O;
          break;
        }
      }
      switch (v) {
        case "LEFT":
        case "TOP_LEFT":
        case "BOTTOM_LEFT": {
          w += m;
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
    const y = Math.min(w, k), M = Math.min(b, P), A = Math.abs(k - w), T = Math.abs(P - b);
    return {
      ...h,
      geometry: {
        x: y,
        y: M,
        w: A,
        h: T,
        bounds: {
          minX: y,
          minY: M,
          maxX: y + A,
          maxY: M + T
        }
      }
    };
  }, p = `rect-mask-${Math.random().toString(36).substring(2, 12)}`;
  function d(h) {
    he.call(this, e, h);
  }
  function g(h) {
    he.call(this, e, h);
  }
  function _(h) {
    he.call(this, e, h);
  }
  return e.$$set = (h) => {
    "shape" in h && t(0, l = h.shape), "computedStyle" in h && t(1, f = h.computedStyle), "transform" in h && t(2, r = h.transform), "viewportScale" in h && t(3, a = h.viewportScale), "svgEl" in h && t(4, u = h.svgEl);
  }, e.$$.update = () => {
    e.$$.dirty & /*shape*/
    1 && t(5, o = l.geometry), e.$$.dirty & /*geom, viewportScale*/
    40 && t(6, s = vn(o.bounds, 2 / a));
  }, [
    l,
    f,
    r,
    a,
    u,
    o,
    s,
    c,
    p,
    d,
    g,
    _
  ];
}
class cf extends Re {
  constructor(n) {
    super(), Ce(this, n, uf, af, Ie, {
      shape: 0,
      computedStyle: 1,
      transform: 2,
      viewportScale: 3,
      svgEl: 4
    });
  }
}
function pf(e) {
  let n;
  return {
    c() {
      n = q("g"), i(n, "class", "a9s-annotation a9s-rubberband");
    },
    m(t, o) {
      U(t, n, o);
    },
    p: Se,
    i: Se,
    o: Se,
    d(t) {
      t && B(n);
    }
  };
}
function hf(e, n, t) {
  const o = xe();
  let { addEventListener: s } = n, { drawingMode: l } = n, { transform: f } = n, { viewportScale: r = 1 } = n, a = 0;
  const u = (p) => {
    a = performance.now();
  }, c = (p) => {
    const d = p;
    if (performance.now() - a > 400) return;
    const [_, h] = f.elementToImage(d.offsetX, d.offsetY), v = pn.fontSize / Math.max(r, 0.01), N = v * 20, L = v * 1.2, w = {
      type: Pe.RECTANGLE,
      geometry: {
        bounds: {
          minX: _,
          minY: h - v,
          maxX: _ + N,
          maxY: h + v * 0.2
        },
        x: _,
        y: h,
        w: N,
        h: L
      },
      properties: { toolType: "text" }
    };
    o("create", w);
  };
  return on(() => {
    s("pointerdown", u), s("pointerup", c, !0);
  }), e.$$set = (p) => {
    "addEventListener" in p && t(0, s = p.addEventListener), "drawingMode" in p && t(1, l = p.drawingMode), "transform" in p && t(2, f = p.transform), "viewportScale" in p && t(3, r = p.viewportScale);
  }, [s, l, f, r];
}
class df extends Re {
  constructor(n) {
    super(), Ce(this, n, hf, pf, Ie, {
      addEventListener: 0,
      drawingMode: 1,
      transform: 2,
      viewportScale: 3
    });
  }
}
const _f = (e) => {
  e.registerDrawingTool("ellipse", yr), e.registerShapeEditor(Pe.ELLIPSE, mr), e.registerDrawingTool("line", Tr), e.registerDrawingTool("arrow", yi), e.registerShapeEditor(Pe.LINE, Er), e.registerDrawingTool("path", Br), e.registerDrawingTool("distance", vi), e.registerShapeEditor(Pe.POLYLINE, xr), e.registerDrawingTool("star", rf), e.registerShapeEditor(Pe.POLYGON, of), e.registerDrawingTool("text", df), e.registerShapeEditor(Pe.RECTANGLE, cf);
  const n = Nr(e);
  return {
    setStrokeColor(t) {
      n == null || n.setStrokeColor(t);
    }
  };
};
export {
  _f as mountPlugin
};
//# sourceMappingURL=annotorious-plugin-tools.es.js.map
