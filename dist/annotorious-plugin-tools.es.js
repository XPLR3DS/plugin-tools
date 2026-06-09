var Ds = Object.defineProperty;
var js = (e, n, t) => n in e ? Ds(e, n, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[n] = t;
var Jn = (e, n, t) => js(e, typeof n != "symbol" ? n + "" : n, t);
var Xs = Object.defineProperty, Bs = (e, n, t) => n in e ? Xs(e, n, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[n] = t, At = (e, n, t) => Bs(e, typeof n != "symbol" ? n + "" : n, t);
function un() {
}
function vt(e, n) {
  for (const t in n) e[t] = n[t];
  return (
    /** @type {T & S} */
    e
  );
}
function _s(e) {
  return e();
}
function Dt() {
  return /* @__PURE__ */ Object.create(null);
}
function Ze(e) {
  e.forEach(_s);
}
function Oe(e) {
  return typeof e == "function";
}
function Mn(e, n) {
  return e != e ? n == n : e !== n || e && typeof e == "object" || typeof e == "function";
}
function Us(e) {
  return Object.keys(e).length === 0;
}
function Gs(e, n, t, o) {
  if (e) {
    const s = ys(e, n, t, o);
    return e[0](s);
  }
}
function ys(e, n, t, o) {
  return e[1] && o ? vt(t.ctx.slice(), e[1](o(n))) : t.ctx;
}
function qs(e, n, t, o) {
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
function Ys(e, n, t, o, s, l) {
  if (s) {
    const f = ys(n, t, o, l);
    e.p(f, s);
  }
}
function zs(e) {
  if (e.ctx.length > 32) {
    const n = [], t = e.ctx.length / 32;
    for (let o = 0; o < t; o++)
      n[o] = -1;
    return n;
  }
  return -1;
}
function jt(e) {
  const n = {};
  for (const t in e) t[0] !== "$" && (n[t] = e[t]);
  return n;
}
function Xt(e) {
  return e ?? "";
}
function ve(e, n) {
  e.appendChild(n);
}
function fe(e, n, t) {
  e.insertBefore(n, t || null);
}
function re(e) {
  e.parentNode && e.parentNode.removeChild(e);
}
function Wn(e, n) {
  for (let t = 0; t < e.length; t += 1)
    e[t] && e[t].d(n);
}
function ie(e) {
  return document.createElementNS("http://www.w3.org/2000/svg", e);
}
function ws(e) {
  return document.createTextNode(e);
}
function je() {
  return ws(" ");
}
function qn() {
  return ws("");
}
function _e(e, n, t, o) {
  return e.addEventListener(n, t, o), () => e.removeEventListener(n, t, o);
}
function v(e, n, t) {
  t == null ? e.removeAttribute(n) : e.getAttribute(n) !== t && e.setAttribute(n, t);
}
function Vs(e) {
  return Array.from(e.childNodes);
}
function Bt(e, n, t) {
  e.classList.toggle(n, !!t);
}
function Ks(e, n, { bubbles: t = !1, cancelable: o = !1 } = {}) {
  return new CustomEvent(e, { detail: n, bubbles: t, cancelable: o });
}
let An;
function Rn(e) {
  An = e;
}
function bs() {
  if (!An) throw new Error("Function called outside component initialization");
  return An;
}
function vs(e) {
  bs().$$.on_mount.push(e);
}
function Ht() {
  const e = bs();
  return (n, t, { cancelable: o = !1 } = {}) => {
    const s = e.$$.callbacks[n];
    if (s) {
      const l = Ks(
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
function Re(e, n) {
  const t = e.$$.callbacks[n.type];
  t && t.slice().forEach((o) => o.call(this, n));
}
const yn = [], Ut = [];
let En = [];
const Gt = [], Es = /* @__PURE__ */ Promise.resolve();
let Et = !1;
function ks() {
  Et || (Et = !0, Es.then(Ss));
}
function Ts() {
  return ks(), Es;
}
function kt(e) {
  En.push(e);
}
const $n = /* @__PURE__ */ new Set();
let dn = 0;
function Ss() {
  if (dn !== 0)
    return;
  const e = An;
  do {
    try {
      for (; dn < yn.length; ) {
        const n = yn[dn];
        dn++, Rn(n), Fs(n.$$);
      }
    } catch (n) {
      throw yn.length = 0, dn = 0, n;
    }
    for (Rn(null), yn.length = 0, dn = 0; Ut.length; ) Ut.pop()();
    for (let n = 0; n < En.length; n += 1) {
      const t = En[n];
      $n.has(t) || ($n.add(t), t());
    }
    En.length = 0;
  } while (yn.length);
  for (; Gt.length; )
    Gt.pop()();
  Et = !1, $n.clear(), Rn(e);
}
function Fs(e) {
  if (e.fragment !== null) {
    e.update(), Ze(e.before_update);
    const n = e.dirty;
    e.dirty = [-1], e.fragment && e.fragment.p(e.ctx, n), e.after_update.forEach(kt);
  }
}
function Zs(e) {
  const n = [], t = [];
  En.forEach((o) => e.indexOf(o) === -1 ? n.push(o) : t.push(o)), t.forEach((o) => o()), En = n;
}
const Yn = /* @__PURE__ */ new Set();
let an;
function Tn() {
  an = {
    r: 0,
    c: [],
    p: an
    // parent group
  };
}
function Sn() {
  an.r || Ze(an.c), an = an.p;
}
function ye(e, n) {
  e && e.i && (Yn.delete(e), e.i(n));
}
function Ee(e, n, t, o) {
  if (e && e.o) {
    if (Yn.has(e)) return;
    Yn.add(e), an.c.push(() => {
      Yn.delete(e), o && (t && e.d(1), o());
    }), e.o(n);
  } else o && o();
}
function rn(e) {
  return (e == null ? void 0 : e.length) !== void 0 ? e : Array.from(e);
}
function Je(e) {
  e && e.c();
}
function Ke(e, n, t) {
  const { fragment: o, after_update: s } = e.$$;
  o && o.m(n, t), kt(() => {
    const l = e.$$.on_mount.map(_s).filter(Oe);
    e.$$.on_destroy ? e.$$.on_destroy.push(...l) : Ze(l), e.$$.on_mount = [];
  }), s.forEach(kt);
}
function Fe(e, n) {
  const t = e.$$;
  t.fragment !== null && (Zs(t.after_update), Ze(t.on_destroy), t.fragment && t.fragment.d(n), t.on_destroy = t.fragment = null, t.ctx = []);
}
function Ws(e, n) {
  e.$$.dirty[0] === -1 && (yn.push(e), ks(), e.$$.dirty.fill(0)), e.$$.dirty[n / 31 | 0] |= 1 << n % 31;
}
function Pn(e, n, t, o, s, l, f = null, r = [-1]) {
  const a = An;
  Rn(e);
  const c = e.$$ = {
    fragment: null,
    ctx: [],
    // state
    props: l,
    update: un,
    not_equal: s,
    bound: Dt(),
    // lifecycle
    on_mount: [],
    on_destroy: [],
    on_disconnect: [],
    before_update: [],
    after_update: [],
    context: new Map(n.context || (a ? a.$$.context : [])),
    // everything else
    callbacks: Dt(),
    dirty: r,
    skip_bound: !1,
    root: n.target || a.$$.root
  };
  f && f(c.root);
  let u = !1;
  if (c.ctx = t ? t(e, n.props || {}, (p, h, ...g) => {
    const y = g.length ? g[0] : h;
    return c.ctx && s(c.ctx[p], c.ctx[p] = y) && (!c.skip_bound && c.bound[p] && c.bound[p](y), u && Ws(e, p)), h;
  }) : [], c.update(), u = !0, Ze(c.before_update), c.fragment = o ? o(c.ctx) : !1, n.target) {
    if (n.hydrate) {
      const p = Vs(n.target);
      c.fragment && c.fragment.l(p), p.forEach(re);
    } else
      c.fragment && c.fragment.c();
    n.intro && ye(e.$$.fragment), Ke(e, n.target, n.anchor), Ss();
  }
  Rn(a);
}
class Ln {
  constructor() {
    At(this, "$$"), At(this, "$$set");
  }
  /** @returns {void} */
  $destroy() {
    Fe(this, 1), this.$destroy = un;
  }
  /**
   * @template {Extract<keyof Events, string>} K
   * @param {K} type
   * @param {((e: Events[K]) => void) | null | undefined} callback
   * @returns {() => void}
   */
  $on(n, t) {
    if (!Oe(t))
      return un;
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
    this.$$set && !Us(n) && (this.$$.skip_bound = !0, this.$$set(n), this.$$.skip_bound = !1);
  }
}
const Qs = "4";
typeof window < "u" && (window.__svelte || (window.__svelte = { v: /* @__PURE__ */ new Set() })).v.add(Qs);
var ke = /* @__PURE__ */ ((e) => (e.ELLIPSE = "ELLIPSE", e.MULTIPOLYGON = "MULTIPOLYGON", e.POLYGON = "POLYGON", e.POLYLINE = "POLYLINE", e.RECTANGLE = "RECTANGLE", e.LINE = "LINE", e))(ke || {}), Js = { exports: {} };
(function(e) {
  (function() {
    function n(r, a) {
      var c = r.x - a.x, u = r.y - a.y;
      return c * c + u * u;
    }
    function t(r, a, c) {
      var u = a.x, p = a.y, h = c.x - u, g = c.y - p;
      if (h !== 0 || g !== 0) {
        var y = ((r.x - u) * h + (r.y - p) * g) / (h * h + g * g);
        y > 1 ? (u = c.x, p = c.y) : y > 0 && (u += h * y, p += g * y);
      }
      return h = r.x - u, g = r.y - p, h * h + g * g;
    }
    function o(r, a) {
      for (var c = r[0], u = [c], p, h = 1, g = r.length; h < g; h++)
        p = r[h], n(p, c) > a && (u.push(p), c = p);
      return c !== p && u.push(p), u;
    }
    function s(r, a, c, u, p) {
      for (var h = u, g, y = a + 1; y < c; y++) {
        var d = t(r[y], r[a], r[c]);
        d > h && (g = y, h = d);
      }
      h > u && (g - a > 1 && s(r, a, g, u, p), p.push(r[g]), c - g > 1 && s(r, g, c, u, p));
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
})(Js);
const On = (e, n) => n, He = (e) => {
  let n = 1 / 0, t = 1 / 0, o = -1 / 0, s = -1 / 0;
  return e.forEach(([l, f]) => {
    n = Math.min(n, l), t = Math.min(t, f), o = Math.max(o, l), s = Math.max(s, f);
  }), { minX: n, minY: t, maxX: o, maxY: s };
}, Vn = (e) => {
  let n = 0, t = e.length - 1;
  for (let o = 0; o < e.length; o++)
    n += (e[t][0] + e[o][0]) * (e[t][1] - e[o][1]), t = o;
  return Math.abs(0.5 * n);
}, Kn = (e, n, t) => {
  let o = !1;
  for (let s = 0, l = e.length - 1; s < e.length; l = s++) {
    const f = e[s][0], r = e[s][1], a = e[l][0], c = e[l][1];
    r > t != c > t && n < (a - f) * (t - r) / (c - r) + f && (o = !o);
  }
  return o;
}, $s = (e, n = !0) => {
  let t = "M ";
  return e.forEach(([o, s], l) => {
    l === 0 ? t += `${o},${s}` : t += ` L ${o},${s}`;
  }), n && (t += " Z"), t;
}, en = (e, n) => {
  const t = Math.abs(n[0] - e[0]), o = Math.abs(n[1] - e[1]);
  return Math.sqrt(Math.pow(t, 2) + Math.pow(o, 2));
}, xs = {
  area: (e) => Math.PI * e.geometry.rx * e.geometry.ry,
  intersects: (e, n, t) => {
    const { cx: o, cy: s, rx: l, ry: f } = e.geometry, r = 0, a = Math.cos(r), c = Math.sin(r), u = n - o, p = t - s, h = a * u + c * p, g = c * u - a * p;
    return h * h / (l * l) + g * g / (f * f) <= 1;
  }
};
On(ke.ELLIPSE, xs);
const el = {
  area: (e) => 0,
  intersects: (e, n, t, o = 2) => {
    const [[s, l], [f, r]] = e.geometry.points, a = Math.abs((r - l) * n - (f - s) * t + f * l - r * s), c = en([s, l], [f, r]);
    return a / c <= o;
  }
};
On(ke.LINE, el);
const nl = {
  area: (e) => {
    const { polygons: n } = e.geometry;
    return n.reduce((t, o) => {
      const [s, ...l] = o.rings, f = Vn(s.points), r = l.reduce((a, c) => a + Vn(c.points), 0);
      return t + f - r;
    }, 0);
  },
  intersects: (e, n, t) => {
    const { polygons: o } = e.geometry;
    for (const s of o) {
      const [l, ...f] = s.rings;
      if (Kn(l.points, n, t)) {
        let r = !1;
        for (const a of f)
          if (Kn(a.points, n, t)) {
            r = !0;
            break;
          }
        if (!r) return !0;
      }
    }
    return !1;
  }
}, xn = (e) => {
  const n = e.reduce((t, o) => [...t, ...o.rings[0].points], []);
  return He(n);
}, mn = (e) => e.rings.map((n) => $s(n.points)).join(" "), tl = (e) => e.polygons.reduce((n, t) => [
  ...n,
  ...t.rings.reduce((o, s) => [...o, ...s.points], [])
], []);
On(ke.MULTIPOLYGON, nl);
const ol = {
  area: (e) => {
    const n = e.geometry.points;
    return Vn(n);
  },
  intersects: (e, n, t) => {
    const o = e.geometry.points;
    return Kn(o, n, t);
  }
};
On(ke.POLYGON, ol);
const sl = {
  area: (e) => {
    const n = e.geometry;
    if (!n.closed || n.points.length < 3)
      return 0;
    const t = bn(n.points, n.closed);
    return Vn(t);
  },
  intersects: (e, n, t, o = 2) => {
    const s = e.geometry;
    if (s.closed) {
      const l = bn(s.points, s.closed);
      return Kn(l, n, t);
    } else
      return ll(s, [n, t], o);
  }
}, bn = (e, n = !1) => {
  const t = [];
  for (let o = 0; o < e.length; o++) {
    const s = e[o], l = e[(o + 1) % e.length];
    if (t.push(s.point), (o < e.length - 1 || n) && (s.type === "CURVE" || l.type == "CURVE")) {
      const f = Ms(
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
}, Ms = (e, n, t, o, s = 10) => {
  const l = [];
  for (let f = 0; f <= s; f++) {
    const r = f / s, a = Math.pow(1 - r, 3) * e[0] + 3 * Math.pow(1 - r, 2) * r * n[0] + 3 * (1 - r) * Math.pow(r, 2) * t[0] + Math.pow(r, 3) * o[0], c = Math.pow(1 - r, 3) * e[1] + 3 * Math.pow(1 - r, 2) * r * n[1] + 3 * (1 - r) * Math.pow(r, 2) * t[1] + Math.pow(r, 3) * o[1];
    l.push([a, c]);
  }
  return l;
}, ll = (e, n, t) => {
  for (let o = 0; o < e.points.length - 1; o++) {
    const s = e.points[o], l = e.points[o + 1];
    if (s.type === "CURVE" || l.type === "CURVE") {
      const f = Ms(
        s.point,
        s.type === "CURVE" && s.outHandle || s.point,
        l.type === "CURVE" && l.inHandle || l.point,
        l.point,
        20
        // TODO make configurable? Based on scale factor? Length?
      );
      for (let r = 0; r < f.length - 1; r++)
        if (qt(n, f[r], f[r + 1]) <= t) return !0;
    } else if (qt(n, s.point, l.point) <= t) return !0;
  }
  return !1;
}, qt = (e, n, t) => {
  const [o, s] = e, [l, f] = n, [r, a] = t, c = r - l, u = a - f, p = Math.sqrt(c * c + u * u);
  if (p === 0)
    return Math.sqrt((o - l) * (o - l) + (s - f) * (s - f));
  const h = ((o - l) * c + (s - f) * u) / (p * p);
  return h <= 0 ? Math.sqrt((o - l) * (o - l) + (s - f) * (s - f)) : h >= 1 ? Math.sqrt((o - r) * (o - r) + (s - a) * (s - a)) : Math.abs((a - f) * o - (r - l) * s + r * f - a * l) / p;
}, il = (e) => {
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
On(ke.POLYLINE, sl);
const rl = {
  area: (e) => e.geometry.w * e.geometry.h,
  intersects: (e, n, t) => n >= e.geometry.x && n <= e.geometry.x + e.geometry.w && t >= e.geometry.y && t <= e.geometry.y + e.geometry.h
};
On(ke.RECTANGLE, rl);
const fl = [];
for (let e = 0; e < 256; ++e)
  fl.push((e + 256).toString(16).slice(1));
typeof crypto < "u" && crypto.randomUUID && crypto.randomUUID.bind(crypto);
const al = [];
for (let e = 0; e < 256; ++e)
  al.push((e + 256).toString(16).slice(1));
typeof crypto < "u" && crypto.randomUUID && crypto.randomUUID.bind(crypto);
const cl = "useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict";
let ul = (e = 21) => {
  let n = "", t = crypto.getRandomValues(new Uint8Array(e |= 0));
  for (; e--; )
    n += cl[t[e] & 63];
  return n;
};
ul();
const hn = (e, n = 0) => {
  const { minX: t, minY: o, maxX: s, maxY: l } = e;
  return {
    x: t - n,
    y: o - n,
    w: s - t + 2 * n,
    h: l - o + 2 * n
  };
}, nn = typeof window > "u" || typeof navigator > "u" ? !1 : "ontouchstart" in window || navigator.maxTouchPoints > 0 || // @ts-ignore
navigator.msMaxTouchPoints > 0, pl = (e) => ({}), Yt = (e) => ({ grab: (
  /*onGrab*/
  e[0]
) });
function hl(e) {
  let n, t, o, s;
  const l = (
    /*#slots*/
    e[8].default
  ), f = Gs(
    l,
    e,
    /*$$scope*/
    e[7],
    Yt
  );
  return {
    c() {
      n = ie("g"), f && f.c(), v(n, "class", "a9s-annotation selected");
    },
    m(r, a) {
      fe(r, n, a), f && f.m(n, null), t = !0, o || (s = [
        _e(
          n,
          "pointerup",
          /*onRelease*/
          e[2]
        ),
        _e(
          n,
          "pointermove",
          /*onPointerMove*/
          e[1]
        )
      ], o = !0);
    },
    p(r, [a]) {
      f && f.p && (!t || a & /*$$scope*/
      128) && Ys(
        f,
        l,
        r,
        /*$$scope*/
        r[7],
        t ? qs(
          l,
          /*$$scope*/
          r[7],
          a,
          pl
        ) : zs(
          /*$$scope*/
          r[7]
        ),
        Yt
      );
    },
    i(r) {
      t || (ye(f, r), t = !0);
    },
    o(r) {
      Ee(f, r), t = !1;
    },
    d(r) {
      r && re(n), f && f.d(r), o = !1, Ze(s);
    }
  };
}
function dl(e, n, t) {
  let { $$slots: o = {}, $$scope: s } = n;
  const l = Ht();
  let { shape: f } = n, { editor: r } = n, { transform: a } = n, { svgEl: c } = n, u, p, h;
  const g = (E) => (A) => {
    if (u = E, c) {
      const { left: L, top: b } = c.getBoundingClientRect(), m = A.clientX - L, w = A.clientY - b;
      p = a.elementToImage(m, w);
    } else {
      const { offsetX: L, offsetY: b } = A;
      p = a.elementToImage(L, b);
    }
    h = f, A.target.setPointerCapture(A.pointerId), l("grab", A);
  }, y = (E) => {
    if (u) {
      const [A, L] = a.elementToImage(E.offsetX, E.offsetY), b = [A - p[0], L - p[1]];
      t(3, f = r(h, u, b)), l("change", f);
    }
  }, d = (E) => {
    E.target.releasePointerCapture(E.pointerId), u = void 0, h = f, l("release", E);
  };
  return e.$$set = (E) => {
    "shape" in E && t(3, f = E.shape), "editor" in E && t(4, r = E.editor), "transform" in E && t(5, a = E.transform), "svgEl" in E && t(6, c = E.svgEl), "$$scope" in E && t(7, s = E.$$scope);
  }, [
    g,
    y,
    d,
    f,
    r,
    a,
    c,
    s,
    o
  ];
}
class It extends Ln {
  constructor(n) {
    super(), Pn(this, n, dl, hl, Mn, {
      shape: 3,
      editor: 4,
      transform: 5,
      svgEl: 6
    });
  }
}
function ml(e) {
  let n, t, o, s, l, f, r, a, c = (
    /*selected*/
    e[3] && zt(e)
  );
  return {
    c() {
      n = ie("g"), t = ie("circle"), c && c.c(), s = ie("circle"), v(t, "class", "a9s-handle-buffer svelte-qtyc7s"), v(
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
      e[2]), v(t, "role", "button"), v(t, "tabindex", "0"), v(s, "class", l = Xt(`a9s-handle-dot${/*selected*/
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
      fe(u, n, p), ve(n, t), c && c.m(n, null), ve(n, s), r || (a = [
        _e(
          t,
          "dblclick",
          /*dblclick_handler_1*/
          e[12]
        ),
        _e(
          t,
          "pointerenter",
          /*pointerenter_handler*/
          e[13]
        ),
        _e(
          t,
          "pointerleave",
          /*pointerleave_handler*/
          e[14]
        ),
        _e(
          t,
          "pointerdown",
          /*pointerdown_handler_1*/
          e[15]
        ),
        _e(
          t,
          "pointerdown",
          /*onPointerDown*/
          e[6]
        ),
        _e(
          t,
          "pointerup",
          /*pointerup_handler_1*/
          e[16]
        ),
        _e(
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
      u[3] ? c ? c.p(u, p) : (c = zt(u), c.c(), c.m(n, s)) : c && (c.d(1), c = null), p & /*selected*/
      8 && l !== (l = Xt(`a9s-handle-dot${/*selected*/
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
      u && re(n), c && c.d(), r = !1, Ze(a);
    }
  };
}
function gl(e) {
  let n, t, o, s, l, f, r, a, c;
  return {
    c() {
      n = ie("g"), t = ie("circle"), s = ie("circle"), f = ie("circle"), v(
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
      e[5] * 10), v(t, "class", "a9s-touch-halo"), Bt(
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
      fe(u, n, p), ve(n, t), ve(n, s), ve(n, f), a || (c = [
        _e(
          s,
          "dblclick",
          /*dblclick_handler*/
          e[9]
        ),
        _e(
          s,
          "pointerdown",
          /*pointerdown_handler*/
          e[10]
        ),
        _e(
          s,
          "pointerdown",
          /*onPointerDown*/
          e[6]
        ),
        _e(
          s,
          "pointerup",
          /*pointerup_handler*/
          e[11]
        ),
        _e(
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
      16 && Bt(
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
      u && re(n), a = !1, Ze(c);
    }
  };
}
function zt(e) {
  let n, t;
  return {
    c() {
      n = ie("circle"), v(n, "class", "a9s-handle-selected"), v(
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
      o && re(n);
    }
  };
}
function _l(e) {
  let n;
  function t(s, l) {
    return nn ? gl : ml;
  }
  let o = t()(e);
  return {
    c() {
      o.c(), n = qn();
    },
    m(s, l) {
      o.m(s, l), fe(s, n, l);
    },
    p(s, [l]) {
      o.p(s, l);
    },
    i: un,
    o: un,
    d(s) {
      s && re(n), o.d(s);
    }
  };
}
function yl(e, n, t) {
  let o, { x: s } = n, { y: l } = n, { scale: f } = n, { selected: r = void 0 } = n, a = !1;
  const c = (b) => {
    b.pointerType === "touch" && t(4, a = !0);
  }, u = () => t(4, a = !1);
  function p(b) {
    Re.call(this, e, b);
  }
  function h(b) {
    Re.call(this, e, b);
  }
  function g(b) {
    Re.call(this, e, b);
  }
  function y(b) {
    Re.call(this, e, b);
  }
  function d(b) {
    Re.call(this, e, b);
  }
  function E(b) {
    Re.call(this, e, b);
  }
  function A(b) {
    Re.call(this, e, b);
  }
  function L(b) {
    Re.call(this, e, b);
  }
  return e.$$set = (b) => {
    t(8, n = vt(vt({}, n), jt(b))), "x" in b && t(0, s = b.x), "y" in b && t(1, l = b.y), "scale" in b && t(2, f = b.scale), "selected" in b && t(3, r = b.selected);
  }, e.$$.update = () => {
    e.$$.dirty & /*scale*/
    4 && t(5, o = 4 / f);
  }, n = jt(n), [
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
    h,
    g,
    y,
    d,
    E,
    A,
    L
  ];
}
class vn extends Ln {
  constructor(n) {
    super(), Pn(this, n, yl, _l, Mn, { x: 0, y: 1, scale: 2, selected: 3 });
  }
}
function wl(e) {
  let n, t, o, s, l, f, r;
  return {
    c() {
      n = ie("g"), t = ie("circle"), s = ie("circle"), l = ie("circle"), v(t, "class", "a9s-polygon-midpoint-buffer svelte-12ykj76"), v(
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
      fe(a, n, c), ve(n, t), ve(n, s), ve(n, l), f || (r = [
        _e(
          t,
          "pointerdown",
          /*pointerdown_handler*/
          e[5]
        ),
        _e(
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
      a && re(n), f = !1, Ze(r);
    }
  };
}
function bl(e) {
  let n;
  return {
    c() {
      n = ie("circle"), v(
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
      t && re(n);
    }
  };
}
function vl(e) {
  let n;
  function t(s, l) {
    return nn ? bl : wl;
  }
  let o = t()(e);
  return {
    c() {
      o.c(), n = qn();
    },
    m(s, l) {
      o.m(s, l), fe(s, n, l);
    },
    p(s, [l]) {
      o.p(s, l);
    },
    i: un,
    o: un,
    d(s) {
      s && re(n), o.d(s);
    }
  };
}
function El(e, n, t) {
  let o, { x: s } = n, { y: l } = n, { scale: f } = n;
  const r = (c) => {
    c.pointerType;
  };
  function a(c) {
    Re.call(this, e, c);
  }
  return e.$$set = (c) => {
    "x" in c && t(0, s = c.x), "y" in c && t(1, l = c.y), "scale" in c && t(4, f = c.scale);
  }, e.$$.update = () => {
    e.$$.dirty & /*scale*/
    16 && t(2, o = 4 / f);
  }, [s, l, o, r, f, a];
}
class Ps extends Ln {
  constructor(n) {
    super(), Pn(this, n, El, vl, Mn, { x: 0, y: 1, scale: 4 });
  }
}
function et(e) {
  const n = e.slice(), t = (
    /*midpoints*/
    n[10][
      /*visibleMidpoint*/
      n[6]
    ]
  );
  return n[28] = t.point, n;
}
function Vt(e, n, t) {
  const o = e.slice();
  return o[28] = n[t], o[30] = t, o;
}
function nt(e) {
  const n = e.slice(), t = (
    /*midpoints*/
    n[10][
      /*visibleMidpoint*/
      n[6]
    ]
  );
  return n[28] = t.point, n;
}
function tt(e) {
  const n = e.slice(), t = (
    /*midpoints*/
    n[10][
      /*visibleMidpoint*/
      n[6]
    ]
  );
  return n[28] = t.point, n;
}
function Kt(e) {
  let n, t, o, s;
  return {
    c() {
      n = ie("circle"), v(n, "cx", t = /*point*/
      e[28][0]), v(n, "cy", o = /*point*/
      e[28][1]), v(n, "r", s = Dn / /*viewportScale*/
      e[3]), v(n, "class", "svelte-1h2slbm");
    },
    m(l, f) {
      fe(l, n, f);
    },
    p(l, f) {
      f[0] & /*midpoints, visibleMidpoint*/
      1088 && t !== (t = /*point*/
      l[28][0]) && v(n, "cx", t), f[0] & /*midpoints, visibleMidpoint*/
      1088 && o !== (o = /*point*/
      l[28][1]) && v(n, "cy", o), f[0] & /*viewportScale*/
      8 && s !== (s = Dn / /*viewportScale*/
      l[3]) && v(n, "r", s);
    },
    d(l) {
      l && re(n);
    }
  };
}
function Ft(e) {
  let n, t, o, s, l, f, r, a, c, u;
  return {
    c() {
      n = ie("mask"), t = ie("rect"), r = ie("circle"), v(t, "x", o = /*mask*/
      e[9].x), v(t, "y", s = /*mask*/
      e[9].y), v(t, "width", l = /*mask*/
      e[9].w), v(t, "height", f = /*mask*/
      e[9].h), v(t, "class", "svelte-1h2slbm"), v(r, "cx", a = /*point*/
      e[28][0]), v(r, "cy", c = /*point*/
      e[28][1]), v(r, "r", u = Dn / /*viewportScale*/
      e[3]), v(r, "class", "svelte-1h2slbm"), v(n, "id", `${/*maskId*/
      e[19]}-inner`), v(n, "class", "a9s-polygon-editor-mask svelte-1h2slbm");
    },
    m(p, h) {
      fe(p, n, h), ve(n, t), ve(n, r);
    },
    p(p, h) {
      h[0] & /*mask*/
      512 && o !== (o = /*mask*/
      p[9].x) && v(t, "x", o), h[0] & /*mask*/
      512 && s !== (s = /*mask*/
      p[9].y) && v(t, "y", s), h[0] & /*mask*/
      512 && l !== (l = /*mask*/
      p[9].w) && v(t, "width", l), h[0] & /*mask*/
      512 && f !== (f = /*mask*/
      p[9].h) && v(t, "height", f), h[0] & /*midpoints, visibleMidpoint*/
      1088 && a !== (a = /*point*/
      p[28][0]) && v(r, "cx", a), h[0] & /*midpoints, visibleMidpoint*/
      1088 && c !== (c = /*point*/
      p[28][1]) && v(r, "cy", c), h[0] & /*viewportScale*/
      8 && u !== (u = Dn / /*viewportScale*/
      p[3]) && v(r, "r", u);
    },
    d(p) {
      p && re(n);
    }
  };
}
function Zt(e) {
  let n, t;
  return n = new vn({
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
    Oe(
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
      Je(n.$$.fragment);
    },
    m(o, s) {
      Ke(n, o, s), t = !0;
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
      t || (ye(n.$$.fragment, o), t = !0);
    },
    o(o) {
      Ee(n.$$.fragment, o), t = !1;
    },
    d(o) {
      Fe(n, o);
    }
  };
}
function Wt(e) {
  let n, t;
  return n = new Ps({
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
    Oe(
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
      Je(n.$$.fragment);
    },
    m(o, s) {
      Ke(n, o, s), t = !0;
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
      t || (ye(n.$$.fragment, o), t = !0);
    },
    o(o) {
      Ee(n.$$.fragment, o), t = !1;
    },
    d(o) {
      Fe(n, o);
    }
  };
}
function kl(e) {
  let n, t, o, s, l, f, r, a, c, u, p, h, g, y, d, E, A, L, b, m, w, k = (
    /*visibleMidpoint*/
    e[6] !== void 0 && !/*isHandleHovered*/
    e[7] && Kt(tt(e))
  ), _ = (
    /*visibleMidpoint*/
    e[6] !== void 0 && !/*isHandleHovered*/
    e[7] && Ft(nt(e))
  ), M = rn(
    /*geom*/
    e[5].points
  ), S = [];
  for (let I = 0; I < M.length; I += 1)
    S[I] = Zt(Vt(e, M, I));
  const N = (I) => Ee(S[I], 1, 1, () => {
    S[I] = null;
  });
  let G = (
    /*visibleMidpoint*/
    e[6] !== void 0 && !/*isHandleHovered*/
    e[7] && Wt(et(e))
  );
  return {
    c() {
      n = ie("defs"), t = ie("mask"), o = ie("rect"), a = ie("polygon"), k && k.c(), _ && _.c(), u = je(), p = ie("polygon"), g = je(), y = ie("polygon"), E = je();
      for (let I = 0; I < S.length; I += 1)
        S[I].c();
      A = je(), G && G.c(), L = qn(), v(o, "x", s = /*mask*/
      e[9].x), v(o, "y", l = /*mask*/
      e[9].y), v(o, "width", f = /*mask*/
      e[9].w), v(o, "height", r = /*mask*/
      e[9].h), v(o, "class", "svelte-1h2slbm"), v(a, "points", c = /*geom*/
      e[5].points.map(Qt).join(" ")), v(a, "class", "svelte-1h2slbm"), v(t, "id", `${/*maskId*/
      e[19]}-outer`), v(t, "class", "a9s-polygon-editor-mask svelte-1h2slbm"), v(p, "class", "a9s-outer"), v(p, "mask", `url(#${/*maskId*/
      e[19]}-outer)`), v(p, "points", h = /*geom*/
      e[5].points.map(Jt).join(" ")), v(y, "class", "a9s-inner a9s-shape-handle"), v(y, "mask", `url(#${/*maskId*/
      e[19]}-inner)`), v(
        y,
        "style",
        /*computedStyle*/
        e[1]
      ), v(y, "points", d = /*geom*/
      e[5].points.map($t).join(" "));
    },
    m(I, U) {
      fe(I, n, U), ve(n, t), ve(t, o), ve(t, a), k && k.m(t, null), _ && _.m(n, null), fe(I, u, U), fe(I, p, U), fe(I, g, U), fe(I, y, U), fe(I, E, U);
      for (let H = 0; H < S.length; H += 1)
        S[H] && S[H].m(I, U);
      fe(I, A, U), G && G.m(I, U), fe(I, L, U), b = !0, m || (w = [
        _e(
          p,
          "pointerup",
          /*onShapePointerUp*/
          e[14]
        ),
        _e(p, "pointerdown", function() {
          Oe(
            /*grab*/
            e[27]("SHAPE")
          ) && e[27]("SHAPE").apply(this, arguments);
        }),
        _e(
          y,
          "pointermove",
          /*onPointerMove*/
          e[13]
        ),
        _e(
          y,
          "pointerup",
          /*onShapePointerUp*/
          e[14]
        ),
        _e(y, "pointerdown", function() {
          Oe(
            /*grab*/
            e[27]("SHAPE")
          ) && e[27]("SHAPE").apply(this, arguments);
        })
      ], m = !0);
    },
    p(I, U) {
      if (e = I, (!b || U[0] & /*mask*/
      512 && s !== (s = /*mask*/
      e[9].x)) && v(o, "x", s), (!b || U[0] & /*mask*/
      512 && l !== (l = /*mask*/
      e[9].y)) && v(o, "y", l), (!b || U[0] & /*mask*/
      512 && f !== (f = /*mask*/
      e[9].w)) && v(o, "width", f), (!b || U[0] & /*mask*/
      512 && r !== (r = /*mask*/
      e[9].h)) && v(o, "height", r), (!b || U[0] & /*geom*/
      32 && c !== (c = /*geom*/
      e[5].points.map(Qt).join(" "))) && v(a, "points", c), /*visibleMidpoint*/
      e[6] !== void 0 && !/*isHandleHovered*/
      e[7] ? k ? k.p(tt(e), U) : (k = Kt(tt(e)), k.c(), k.m(t, null)) : k && (k.d(1), k = null), /*visibleMidpoint*/
      e[6] !== void 0 && !/*isHandleHovered*/
      e[7] ? _ ? _.p(nt(e), U) : (_ = Ft(nt(e)), _.c(), _.m(n, null)) : _ && (_.d(1), _ = null), (!b || U[0] & /*geom*/
      32 && h !== (h = /*geom*/
      e[5].points.map(Jt).join(" "))) && v(p, "points", h), (!b || U[0] & /*computedStyle*/
      2) && v(
        y,
        "style",
        /*computedStyle*/
        e[1]
      ), (!b || U[0] & /*geom*/
      32 && d !== (d = /*geom*/
      e[5].points.map($t).join(" "))) && v(y, "points", d), U[0] & /*geom, viewportScale, selectedCorners, onEnterHandle, onLeaveHandle, onHandlePointerDown, grab, onHandlePointerUp*/
      134322472) {
        M = rn(
          /*geom*/
          e[5].points
        );
        let H;
        for (H = 0; H < M.length; H += 1) {
          const T = Vt(e, M, H);
          S[H] ? (S[H].p(T, U), ye(S[H], 1)) : (S[H] = Zt(T), S[H].c(), ye(S[H], 1), S[H].m(A.parentNode, A));
        }
        for (Tn(), H = M.length; H < S.length; H += 1)
          N(H);
        Sn();
      }
      e[6] !== void 0 && !/*isHandleHovered*/
      e[7] ? G ? (G.p(et(e), U), U[0] & /*visibleMidpoint, isHandleHovered*/
      192 && ye(G, 1)) : (G = Wt(et(e)), G.c(), ye(G, 1), G.m(L.parentNode, L)) : G && (Tn(), Ee(G, 1, 1, () => {
        G = null;
      }), Sn());
    },
    i(I) {
      if (!b) {
        for (let U = 0; U < M.length; U += 1)
          ye(S[U]);
        ye(G), b = !0;
      }
    },
    o(I) {
      S = S.filter(Boolean);
      for (let U = 0; U < S.length; U += 1)
        Ee(S[U]);
      Ee(G), b = !1;
    },
    d(I) {
      I && (re(n), re(u), re(p), re(g), re(y), re(E), re(A), re(L)), k && k.d(), _ && _.d(), Wn(S, I), G && G.d(I), m = !1, Ze(w);
    }
  };
}
function Tl(e) {
  let n, t;
  return n = new It({
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
          kl,
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
      Je(n.$$.fragment);
    },
    m(o, s) {
      Ke(n, o, s), t = !0;
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
      t || (ye(n.$$.fragment, o), t = !0);
    },
    o(o) {
      Ee(n.$$.fragment, o), t = !1;
    },
    d(o) {
      Fe(n, o);
    }
  };
}
const Sl = 250, Ml = 1e3, Pl = 12, Dn = 4.5, Qt = (e) => e.join(","), Jt = (e) => e.join(","), $t = (e) => e.join(",");
function Ll(e, n, t) {
  let o, s, l;
  const f = Ht();
  let { shape: r } = n, { computedStyle: a } = n, { transform: c } = n, { viewportScale: u = 1 } = n, { svgEl: p } = n, h, g = !1, y, d = [];
  const E = () => t(7, g = !0), A = () => t(7, g = !1), L = (H) => {
    if (d.length > 0 || !s.some((D) => D.visible)) {
      t(6, h = void 0);
      return;
    }
    const [T, q] = c.elementToImage(H.offsetX, H.offsetY), C = (D) => Math.pow(D[0] - T, 2) + Math.pow(D[1] - q, 2), B = o.points.reduce((D, V) => C(V) < C(D) ? V : D), Z = s.filter((D) => D.visible).reduce((D, V) => C(V.point) < C(D.point) ? V : D), R = Math.pow(Ml / u, 2);
    C(B) < R || C(Z.point) < R ? t(6, h = s.indexOf(Z)) : t(6, h = void 0);
  }, b = () => {
    document.activeElement !== p && p.focus();
  }, m = () => {
    t(8, d = []), b();
  }, w = (H) => {
    t(7, g = !0), H.preventDefault(), H.stopPropagation(), y = performance.now();
  }, k = (H) => (T) => {
    if (!y || nn || performance.now() - y > Sl) return;
    const q = d.includes(H);
    T.metaKey || T.ctrlKey || T.shiftKey ? q ? t(8, d = d.filter((C) => C !== H)) : t(8, d = [...d, H]) : q && d.length > 1 ? t(8, d = [H]) : q ? t(8, d = []) : t(8, d = [H]), b();
  }, _ = (H, T, q) => {
    b();
    let C;
    const B = H.geometry;
    d.length > 1 ? C = B.points.map(([R, D], V) => d.includes(V) ? [R + q[0], D + q[1]] : [R, D]) : T === "SHAPE" ? C = B.points.map(([R, D]) => [R + q[0], D + q[1]]) : C = B.points.map(([R, D], V) => T === `HANDLE-${V}` ? [R + q[0], D + q[1]] : [R, D]);
    const Z = He(C);
    return { ...H, geometry: { points: C, bounds: Z } };
  }, M = (H) => async (T) => {
    T.stopPropagation();
    const q = [
      ...o.points.slice(0, H + 1),
      s[H].point,
      ...o.points.slice(H + 1)
    ], C = He(q);
    f("change", { ...r, geometry: { points: q, bounds: C } }), await Ts();
    const B = [...document.querySelectorAll(".a9s-handle")][H + 1];
    if (B != null && B.firstChild) {
      const Z = new PointerEvent(
        "pointerdown",
        {
          bubbles: !0,
          cancelable: !0,
          clientX: T.clientX,
          clientY: T.clientY,
          pointerId: T.pointerId,
          pointerType: T.pointerType,
          isPrimary: T.isPrimary,
          buttons: T.buttons
        }
      );
      B.firstChild.dispatchEvent(Z);
    }
  }, S = () => {
    if (o.points.length - d.length < 3) return;
    const H = o.points.filter((q, C) => !d.includes(C)), T = He(H);
    f("change", { ...r, geometry: { points: H, bounds: T } }), t(8, d = []);
  };
  vs(() => {
    if (nn) return;
    const H = (T) => {
      (T.key === "Delete" || T.key === "Backspace") && (T.preventDefault(), S());
    };
    return p.addEventListener("pointermove", L), p.addEventListener("keydown", H), () => {
      p.removeEventListener("pointermove", L), p.removeEventListener("keydown", H);
    };
  });
  const N = `polygon-mask-${Math.random().toString(36).substring(2, 12)}`;
  function G(H) {
    Re.call(this, e, H);
  }
  function I(H) {
    Re.call(this, e, H);
  }
  function U(H) {
    Re.call(this, e, H);
  }
  return e.$$set = (H) => {
    "shape" in H && t(0, r = H.shape), "computedStyle" in H && t(1, a = H.computedStyle), "transform" in H && t(2, c = H.transform), "viewportScale" in H && t(3, u = H.viewportScale), "svgEl" in H && t(4, p = H.svgEl);
  }, e.$$.update = () => {
    e.$$.dirty[0] & /*shape*/
    1 && t(5, o = r.geometry), e.$$.dirty[0] & /*geom, viewportScale*/
    40 && t(10, s = nn ? [] : o.points.map((H, T) => {
      const q = T === o.points.length - 1 ? o.points[0] : o.points[T + 1], C = (H[0] + q[0]) / 2, B = (H[1] + q[1]) / 2, Z = Math.sqrt(Math.pow(q[0] - C, 2) + Math.pow(q[1] - B, 2)) > Pl / u;
      return { point: [C, B], visible: Z };
    })), e.$$.dirty[0] & /*geom, viewportScale*/
    40 && t(9, l = hn(o.bounds, Dn / u));
  }, [
    r,
    a,
    c,
    u,
    p,
    o,
    h,
    g,
    d,
    l,
    s,
    E,
    A,
    L,
    m,
    w,
    k,
    _,
    M,
    N,
    G,
    I,
    U
  ];
}
class Ol extends Ln {
  constructor(n) {
    super(), Pn(
      this,
      n,
      Ll,
      Tl,
      Mn,
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
function Hl(e) {
  let n, t, o, s, l, f, r, a, c, u, p, h, g, y, d, E, A, L, b, m, w, k, _, M, S, N, G, I, U, H, T, q, C, B, Z, R, D, V, Q, ne, P, K, oe, $, me, le, ce, ae, Te, ue, Ie, be, F, Qe, on;
  return le = new vn({
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
  }), le.$on("pointerdown", function() {
    Oe(
      /*grab*/
      e[12]("TOP_LEFT")
    ) && e[12]("TOP_LEFT").apply(this, arguments);
  }), ae = new vn({
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
  }), ae.$on("pointerdown", function() {
    Oe(
      /*grab*/
      e[12]("TOP_RIGHT")
    ) && e[12]("TOP_RIGHT").apply(this, arguments);
  }), ue = new vn({
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
    Oe(
      /*grab*/
      e[12]("BOTTOM_RIGHT")
    ) && e[12]("BOTTOM_RIGHT").apply(this, arguments);
  }), be = new vn({
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
  }), be.$on("pointerdown", function() {
    Oe(
      /*grab*/
      e[12]("BOTTOM_LEFT")
    ) && e[12]("BOTTOM_LEFT").apply(this, arguments);
  }), {
    c() {
      n = ie("defs"), t = ie("mask"), o = ie("rect"), a = ie("rect"), g = je(), y = ie("rect"), b = je(), m = ie("rect"), S = je(), N = ie("rect"), H = je(), T = ie("rect"), Z = je(), R = ie("rect"), ne = je(), P = ie("rect"), me = je(), Je(le.$$.fragment), ce = je(), Je(ae.$$.fragment), Te = je(), Je(ue.$$.fragment), Ie = je(), Je(be.$$.fragment), v(o, "class", "rect-mask-bg svelte-1njczvj"), v(o, "x", s = /*mask*/
      e[6].x), v(o, "y", l = /*mask*/
      e[6].y), v(o, "width", f = /*mask*/
      e[6].w), v(o, "height", r = /*mask*/
      e[6].h), v(a, "class", "rect-mask-fg svelte-1njczvj"), v(a, "x", c = /*geom*/
      e[5].x), v(a, "y", u = /*geom*/
      e[5].y), v(a, "width", p = /*geom*/
      e[5].w), v(a, "height", h = /*geom*/
      e[5].h), v(
        t,
        "id",
        /*maskId*/
        e[8]
      ), v(t, "class", "a9s-rectangle-editor-mask svelte-1njczvj"), v(y, "class", "a9s-outer"), v(y, "mask", `url(#${/*maskId*/
      e[8]})`), v(y, "x", d = /*geom*/
      e[5].x), v(y, "y", E = /*geom*/
      e[5].y), v(y, "width", A = /*geom*/
      e[5].w), v(y, "height", L = /*geom*/
      e[5].h), v(m, "class", "a9s-inner a9s-shape-handle"), v(
        m,
        "style",
        /*computedStyle*/
        e[1]
      ), v(m, "x", w = /*geom*/
      e[5].x), v(m, "y", k = /*geom*/
      e[5].y), v(m, "width", _ = /*geom*/
      e[5].w), v(m, "height", M = /*geom*/
      e[5].h), v(N, "class", "a9s-edge-handle a9s-edge-handle-top"), v(N, "x", G = /*geom*/
      e[5].x), v(N, "y", I = /*geom*/
      e[5].y), v(N, "height", 1), v(N, "width", U = /*geom*/
      e[5].w), v(T, "class", "a9s-edge-handle a9s-edge-handle-right"), v(T, "x", q = /*geom*/
      e[5].x + /*geom*/
      e[5].w), v(T, "y", C = /*geom*/
      e[5].y), v(T, "height", B = /*geom*/
      e[5].h), v(T, "width", 1), v(R, "class", "a9s-edge-handle a9s-edge-handle-bottom"), v(R, "x", D = /*geom*/
      e[5].x), v(R, "y", V = /*geom*/
      e[5].y + /*geom*/
      e[5].h), v(R, "height", 1), v(R, "width", Q = /*geom*/
      e[5].w), v(P, "class", "a9s-edge-handle a9s-edge-handle-left"), v(P, "x", K = /*geom*/
      e[5].x), v(P, "y", oe = /*geom*/
      e[5].y), v(P, "height", $ = /*geom*/
      e[5].h), v(P, "width", 1);
    },
    m(Y, O) {
      fe(Y, n, O), ve(n, t), ve(t, o), ve(t, a), fe(Y, g, O), fe(Y, y, O), fe(Y, b, O), fe(Y, m, O), fe(Y, S, O), fe(Y, N, O), fe(Y, H, O), fe(Y, T, O), fe(Y, Z, O), fe(Y, R, O), fe(Y, ne, O), fe(Y, P, O), fe(Y, me, O), Ke(le, Y, O), fe(Y, ce, O), Ke(ae, Y, O), fe(Y, Te, O), Ke(ue, Y, O), fe(Y, Ie, O), Ke(be, Y, O), F = !0, Qe || (on = [
        _e(y, "pointerdown", function() {
          Oe(
            /*grab*/
            e[12]("SHAPE")
          ) && e[12]("SHAPE").apply(this, arguments);
        }),
        _e(m, "pointerdown", function() {
          Oe(
            /*grab*/
            e[12]("SHAPE")
          ) && e[12]("SHAPE").apply(this, arguments);
        }),
        _e(N, "pointerdown", function() {
          Oe(
            /*grab*/
            e[12]("TOP")
          ) && e[12]("TOP").apply(this, arguments);
        }),
        _e(T, "pointerdown", function() {
          Oe(
            /*grab*/
            e[12]("RIGHT")
          ) && e[12]("RIGHT").apply(this, arguments);
        }),
        _e(R, "pointerdown", function() {
          Oe(
            /*grab*/
            e[12]("BOTTOM")
          ) && e[12]("BOTTOM").apply(this, arguments);
        }),
        _e(P, "pointerdown", function() {
          Oe(
            /*grab*/
            e[12]("LEFT")
          ) && e[12]("LEFT").apply(this, arguments);
        })
      ], Qe = !0);
    },
    p(Y, O) {
      e = Y, (!F || O & /*mask*/
      64 && s !== (s = /*mask*/
      e[6].x)) && v(o, "x", s), (!F || O & /*mask*/
      64 && l !== (l = /*mask*/
      e[6].y)) && v(o, "y", l), (!F || O & /*mask*/
      64 && f !== (f = /*mask*/
      e[6].w)) && v(o, "width", f), (!F || O & /*mask*/
      64 && r !== (r = /*mask*/
      e[6].h)) && v(o, "height", r), (!F || O & /*geom*/
      32 && c !== (c = /*geom*/
      e[5].x)) && v(a, "x", c), (!F || O & /*geom*/
      32 && u !== (u = /*geom*/
      e[5].y)) && v(a, "y", u), (!F || O & /*geom*/
      32 && p !== (p = /*geom*/
      e[5].w)) && v(a, "width", p), (!F || O & /*geom*/
      32 && h !== (h = /*geom*/
      e[5].h)) && v(a, "height", h), (!F || O & /*geom*/
      32 && d !== (d = /*geom*/
      e[5].x)) && v(y, "x", d), (!F || O & /*geom*/
      32 && E !== (E = /*geom*/
      e[5].y)) && v(y, "y", E), (!F || O & /*geom*/
      32 && A !== (A = /*geom*/
      e[5].w)) && v(y, "width", A), (!F || O & /*geom*/
      32 && L !== (L = /*geom*/
      e[5].h)) && v(y, "height", L), (!F || O & /*computedStyle*/
      2) && v(
        m,
        "style",
        /*computedStyle*/
        e[1]
      ), (!F || O & /*geom*/
      32 && w !== (w = /*geom*/
      e[5].x)) && v(m, "x", w), (!F || O & /*geom*/
      32 && k !== (k = /*geom*/
      e[5].y)) && v(m, "y", k), (!F || O & /*geom*/
      32 && _ !== (_ = /*geom*/
      e[5].w)) && v(m, "width", _), (!F || O & /*geom*/
      32 && M !== (M = /*geom*/
      e[5].h)) && v(m, "height", M), (!F || O & /*geom*/
      32 && G !== (G = /*geom*/
      e[5].x)) && v(N, "x", G), (!F || O & /*geom*/
      32 && I !== (I = /*geom*/
      e[5].y)) && v(N, "y", I), (!F || O & /*geom*/
      32 && U !== (U = /*geom*/
      e[5].w)) && v(N, "width", U), (!F || O & /*geom*/
      32 && q !== (q = /*geom*/
      e[5].x + /*geom*/
      e[5].w)) && v(T, "x", q), (!F || O & /*geom*/
      32 && C !== (C = /*geom*/
      e[5].y)) && v(T, "y", C), (!F || O & /*geom*/
      32 && B !== (B = /*geom*/
      e[5].h)) && v(T, "height", B), (!F || O & /*geom*/
      32 && D !== (D = /*geom*/
      e[5].x)) && v(R, "x", D), (!F || O & /*geom*/
      32 && V !== (V = /*geom*/
      e[5].y + /*geom*/
      e[5].h)) && v(R, "y", V), (!F || O & /*geom*/
      32 && Q !== (Q = /*geom*/
      e[5].w)) && v(R, "width", Q), (!F || O & /*geom*/
      32 && K !== (K = /*geom*/
      e[5].x)) && v(P, "x", K), (!F || O & /*geom*/
      32 && oe !== (oe = /*geom*/
      e[5].y)) && v(P, "y", oe), (!F || O & /*geom*/
      32 && $ !== ($ = /*geom*/
      e[5].h)) && v(P, "height", $);
      const Ge = {};
      O & /*geom*/
      32 && (Ge.x = /*geom*/
      e[5].x), O & /*geom*/
      32 && (Ge.y = /*geom*/
      e[5].y), O & /*viewportScale*/
      8 && (Ge.scale = /*viewportScale*/
      e[3]), le.$set(Ge);
      const qe = {};
      O & /*geom*/
      32 && (qe.x = /*geom*/
      e[5].x + /*geom*/
      e[5].w), O & /*geom*/
      32 && (qe.y = /*geom*/
      e[5].y), O & /*viewportScale*/
      8 && (qe.scale = /*viewportScale*/
      e[3]), ae.$set(qe);
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
      const ze = {};
      O & /*geom*/
      32 && (ze.x = /*geom*/
      e[5].x), O & /*geom*/
      32 && (ze.y = /*geom*/
      e[5].y + /*geom*/
      e[5].h), O & /*viewportScale*/
      8 && (ze.scale = /*viewportScale*/
      e[3]), be.$set(ze);
    },
    i(Y) {
      F || (ye(le.$$.fragment, Y), ye(ae.$$.fragment, Y), ye(ue.$$.fragment, Y), ye(be.$$.fragment, Y), F = !0);
    },
    o(Y) {
      Ee(le.$$.fragment, Y), Ee(ae.$$.fragment, Y), Ee(ue.$$.fragment, Y), Ee(be.$$.fragment, Y), F = !1;
    },
    d(Y) {
      Y && (re(n), re(g), re(y), re(b), re(m), re(S), re(N), re(H), re(T), re(Z), re(R), re(ne), re(P), re(me), re(ce), re(Te), re(Ie)), Fe(le, Y), Fe(ae, Y), Fe(ue, Y), Fe(be, Y), Qe = !1, Ze(on);
    }
  };
}
function Il(e) {
  let n, t;
  return n = new It({
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
          Hl,
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
      Je(n.$$.fragment);
    },
    m(o, s) {
      Ke(n, o, s), t = !0;
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
      t || (ye(n.$$.fragment, o), t = !0);
    },
    o(o) {
      Ee(n.$$.fragment, o), t = !1;
    },
    d(o) {
      Fe(n, o);
    }
  };
}
function Cl(e, n, t) {
  let o, s, { shape: l } = n, { computedStyle: f } = n, { transform: r } = n, { viewportScale: a = 1 } = n, { svgEl: c } = n;
  const u = (d, E, A) => {
    const L = d.geometry.bounds;
    let [b, m] = [L.minX, L.minY], [w, k] = [L.maxX, L.maxY];
    const [_, M] = A;
    if (E === "SHAPE")
      b += _, w += _, m += M, k += M;
    else {
      switch (E) {
        case "TOP":
        case "TOP_LEFT":
        case "TOP_RIGHT": {
          m += M;
          break;
        }
        case "BOTTOM":
        case "BOTTOM_LEFT":
        case "BOTTOM_RIGHT": {
          k += M;
          break;
        }
      }
      switch (E) {
        case "LEFT":
        case "TOP_LEFT":
        case "BOTTOM_LEFT": {
          b += _;
          break;
        }
        case "RIGHT":
        case "TOP_RIGHT":
        case "BOTTOM_RIGHT": {
          w += _;
          break;
        }
      }
    }
    const S = Math.min(b, w), N = Math.min(m, k), G = Math.abs(w - b), I = Math.abs(k - m);
    return {
      ...d,
      geometry: {
        x: S,
        y: N,
        w: G,
        h: I,
        bounds: {
          minX: S,
          minY: N,
          maxX: S + G,
          maxY: N + I
        }
      }
    };
  }, p = `rect-mask-${Math.random().toString(36).substring(2, 12)}`;
  function h(d) {
    Re.call(this, e, d);
  }
  function g(d) {
    Re.call(this, e, d);
  }
  function y(d) {
    Re.call(this, e, d);
  }
  return e.$$set = (d) => {
    "shape" in d && t(0, l = d.shape), "computedStyle" in d && t(1, f = d.computedStyle), "transform" in d && t(2, r = d.transform), "viewportScale" in d && t(3, a = d.viewportScale), "svgEl" in d && t(4, c = d.svgEl);
  }, e.$$.update = () => {
    e.$$.dirty & /*shape*/
    1 && t(5, o = l.geometry), e.$$.dirty & /*geom, viewportScale*/
    40 && t(6, s = hn(o.bounds, 2 / a));
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
    h,
    g,
    y
  ];
}
class Rl extends Ln {
  constructor(n) {
    super(), Pn(this, n, Cl, Il, Mn, {
      shape: 0,
      computedStyle: 1,
      transform: 2,
      viewportScale: 3,
      svgEl: 4
    });
  }
}
var xt = Object.prototype.hasOwnProperty;
function Tt(e, n) {
  var t, o;
  if (e === n) return !0;
  if (e && n && (t = e.constructor) === n.constructor) {
    if (t === Date) return e.getTime() === n.getTime();
    if (t === RegExp) return e.toString() === n.toString();
    if (t === Array) {
      if ((o = e.length) === n.length)
        for (; o-- && Tt(e[o], n[o]); ) ;
      return o === -1;
    }
    if (!t || typeof e == "object") {
      o = 0;
      for (t in e)
        if (xt.call(e, t) && ++o && !xt.call(n, t) || !(t in n) || !Tt(e[t], n[t])) return !1;
      return Object.keys(n).length === o;
    }
  }
  return e !== e && n !== n;
}
const Nl = 12, Al = (e, n) => e.polygons.reduce((t, o, s) => {
  const l = o.rings.reduce((f, r, a) => {
    const c = r.points.map((u, p) => {
      const h = p === r.points.length - 1 ? r.points[0] : r.points[p + 1], g = (u[0] + h[0]) / 2, y = (u[1] + h[1]) / 2, d = Math.sqrt(
        Math.pow(h[0] - g, 2) + Math.pow(h[1] - y, 2)
      ) > Nl / n;
      return { point: [g, y], visible: d, elementIdx: s, ringIdx: a, pointIdx: p };
    });
    return [...f, ...c];
  }, []);
  return [...t, ...l];
}, []);
function ot(e) {
  const n = e.slice(), t = (
    /*midpoints*/
    n[10][
      /*visibleMidpoint*/
      n[6]
    ]
  );
  return n[29] = t.point, n;
}
function eo(e, n, t) {
  const o = e.slice();
  return o[30] = n[t], o[32] = t, o;
}
function no(e, n, t) {
  const o = e.slice();
  return o[33] = n[t], o[35] = t, o;
}
function to(e, n, t) {
  const o = e.slice();
  return o[29] = n[t], o[37] = t, o;
}
function st(e) {
  const n = e.slice(), t = (
    /*midpoints*/
    n[10][
      /*visibleMidpoint*/
      n[6]
    ]
  );
  return n[29] = t.point, n;
}
function lt(e) {
  const n = e.slice(), t = (
    /*midpoints*/
    n[10][
      /*visibleMidpoint*/
      n[6]
    ]
  );
  return n[29] = t.point, n;
}
function oo(e) {
  let n, t, o, s;
  return {
    c() {
      n = ie("circle"), v(n, "cx", t = /*point*/
      e[29][0]), v(n, "cy", o = /*point*/
      e[29][1]), v(n, "r", s = jn / /*viewportScale*/
      e[3]), v(n, "class", "svelte-1vxo6dc");
    },
    m(l, f) {
      fe(l, n, f);
    },
    p(l, f) {
      f[0] & /*midpoints, visibleMidpoint*/
      1088 && t !== (t = /*point*/
      l[29][0]) && v(n, "cx", t), f[0] & /*midpoints, visibleMidpoint*/
      1088 && o !== (o = /*point*/
      l[29][1]) && v(n, "cy", o), f[0] & /*viewportScale*/
      8 && s !== (s = jn / /*viewportScale*/
      l[3]) && v(n, "r", s);
    },
    d(l) {
      l && re(n);
    }
  };
}
function so(e) {
  let n, t, o, s, l, f, r, a, c, u;
  return {
    c() {
      n = ie("mask"), t = ie("rect"), r = ie("circle"), v(t, "x", o = /*mask*/
      e[9].x), v(t, "y", s = /*mask*/
      e[9].y), v(t, "width", l = /*mask*/
      e[9].w), v(t, "height", f = /*mask*/
      e[9].h), v(t, "class", "svelte-1vxo6dc"), v(r, "cx", a = /*point*/
      e[29][0]), v(r, "cy", c = /*point*/
      e[29][1]), v(r, "r", u = jn / /*viewportScale*/
      e[3]), v(r, "class", "svelte-1vxo6dc"), v(n, "id", `${/*maskId*/
      e[18]}-${/*elementIdx*/
      e[32]}-inner`), v(n, "class", "a9s-multipolygon-editor-mask svelte-1vxo6dc");
    },
    m(p, h) {
      fe(p, n, h), ve(n, t), ve(n, r);
    },
    p(p, h) {
      h[0] & /*mask*/
      512 && o !== (o = /*mask*/
      p[9].x) && v(t, "x", o), h[0] & /*mask*/
      512 && s !== (s = /*mask*/
      p[9].y) && v(t, "y", s), h[0] & /*mask*/
      512 && l !== (l = /*mask*/
      p[9].w) && v(t, "width", l), h[0] & /*mask*/
      512 && f !== (f = /*mask*/
      p[9].h) && v(t, "height", f), h[0] & /*midpoints, visibleMidpoint*/
      1088 && a !== (a = /*point*/
      p[29][0]) && v(r, "cx", a), h[0] & /*midpoints, visibleMidpoint*/
      1088 && c !== (c = /*point*/
      p[29][1]) && v(r, "cy", c), h[0] & /*viewportScale*/
      8 && u !== (u = jn / /*viewportScale*/
      p[3]) && v(r, "r", u);
    },
    d(p) {
      p && re(n);
    }
  };
}
function lo(e) {
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
  return n = new vn({
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
    Oe(
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
      Je(n.$$.fragment);
    },
    m(s, l) {
      Ke(n, s, l), t = !0;
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
      t || (ye(n.$$.fragment, s), t = !0);
    },
    o(s) {
      Ee(n.$$.fragment, s), t = !1;
    },
    d(s) {
      Fe(n, s);
    }
  };
}
function io(e) {
  let n, t, o = rn(
    /*ring*/
    e[33].points
  ), s = [];
  for (let f = 0; f < o.length; f += 1)
    s[f] = lo(to(e, o, f));
  const l = (f) => Ee(s[f], 1, 1, () => {
    s[f] = null;
  });
  return {
    c() {
      for (let f = 0; f < s.length; f += 1)
        s[f].c();
      n = qn();
    },
    m(f, r) {
      for (let a = 0; a < s.length; a += 1)
        s[a] && s[a].m(f, r);
      fe(f, n, r), t = !0;
    },
    p(f, r) {
      if (r[0] & /*geom, viewportScale, selectedCorners, onEnterHandle, onLeaveHandle, onHandlePointerDown, grab, onHandlePointerUp*/
      268491048) {
        o = rn(
          /*ring*/
          f[33].points
        );
        let a;
        for (a = 0; a < o.length; a += 1) {
          const c = to(f, o, a);
          s[a] ? (s[a].p(c, r), ye(s[a], 1)) : (s[a] = lo(c), s[a].c(), ye(s[a], 1), s[a].m(n.parentNode, n));
        }
        for (Tn(), a = o.length; a < s.length; a += 1)
          l(a);
        Sn();
      }
    },
    i(f) {
      if (!t) {
        for (let r = 0; r < o.length; r += 1)
          ye(s[r]);
        t = !0;
      }
    },
    o(f) {
      s = s.filter(Boolean);
      for (let r = 0; r < s.length; r += 1)
        Ee(s[r]);
      t = !1;
    },
    d(f) {
      f && re(n), Wn(s, f);
    }
  };
}
function ro(e) {
  let n, t, o, s, l, f, r, a, c, u, p, h, g, y, d, E, A, L = (
    /*visibleMidpoint*/
    e[6] !== void 0 && !/*isHandleHovered*/
    e[7] && oo(lt(e))
  ), b = (
    /*visibleMidpoint*/
    e[6] !== void 0 && !/*isHandleHovered*/
    e[7] && so(st(e))
  ), m = rn(
    /*element*/
    e[30].rings
  ), w = [];
  for (let _ = 0; _ < m.length; _ += 1)
    w[_] = io(no(e, m, _));
  const k = (_) => Ee(w[_], 1, 1, () => {
    w[_] = null;
  });
  return {
    c() {
      n = ie("g"), t = ie("defs"), o = ie("mask"), s = ie("rect"), c = ie("path"), L && L.c(), b && b.c(), p = ie("path"), g = ie("path");
      for (let _ = 0; _ < w.length; _ += 1)
        w[_].c();
      v(s, "x", l = /*mask*/
      e[9].x), v(s, "y", f = /*mask*/
      e[9].y), v(s, "width", r = /*mask*/
      e[9].w), v(s, "height", a = /*mask*/
      e[9].h), v(s, "class", "svelte-1vxo6dc"), v(c, "d", u = mn(
        /*element*/
        e[30]
      )), v(c, "class", "svelte-1vxo6dc"), v(o, "id", `${/*maskId*/
      e[18]}-${/*elementIdx*/
      e[32]}-outer`), v(o, "class", "a9s-multipolygon-editor-mask svelte-1vxo6dc"), v(p, "class", "a9s-outer"), v(p, "mask", `url(#${/*maskId*/
      e[18]}-${/*elementIdx*/
      e[32]}-outer)`), v(p, "fill-rule", "evenodd"), v(p, "d", h = mn(
        /*element*/
        e[30]
      )), v(g, "class", "a9s-inner"), v(g, "mask", `url(#${/*maskId*/
      e[18]}-${/*elementIdx*/
      e[32]}-inner)`), v(
        g,
        "style",
        /*computedStyle*/
        e[1]
      ), v(g, "fill-rule", "evenodd"), v(g, "d", y = mn(
        /*element*/
        e[30]
      ));
    },
    m(_, M) {
      fe(_, n, M), ve(n, t), ve(t, o), ve(o, s), ve(o, c), L && L.m(o, null), b && b.m(t, null), ve(n, p), ve(n, g);
      for (let S = 0; S < w.length; S += 1)
        w[S] && w[S].m(n, null);
      d = !0, E || (A = [
        _e(
          p,
          "pointerup",
          /*onShapePointerUp*/
          e[13]
        ),
        _e(p, "pointerdown", function() {
          Oe(
            /*grab*/
            e[28]("SHAPE")
          ) && e[28]("SHAPE").apply(this, arguments);
        }),
        _e(
          g,
          "pointerup",
          /*onShapePointerUp*/
          e[13]
        ),
        _e(g, "pointerdown", function() {
          Oe(
            /*grab*/
            e[28]("SHAPE")
          ) && e[28]("SHAPE").apply(this, arguments);
        })
      ], E = !0);
    },
    p(_, M) {
      if (e = _, (!d || M[0] & /*mask*/
      512 && l !== (l = /*mask*/
      e[9].x)) && v(s, "x", l), (!d || M[0] & /*mask*/
      512 && f !== (f = /*mask*/
      e[9].y)) && v(s, "y", f), (!d || M[0] & /*mask*/
      512 && r !== (r = /*mask*/
      e[9].w)) && v(s, "width", r), (!d || M[0] & /*mask*/
      512 && a !== (a = /*mask*/
      e[9].h)) && v(s, "height", a), (!d || M[0] & /*geom*/
      32 && u !== (u = mn(
        /*element*/
        e[30]
      ))) && v(c, "d", u), /*visibleMidpoint*/
      e[6] !== void 0 && !/*isHandleHovered*/
      e[7] ? L ? L.p(lt(e), M) : (L = oo(lt(e)), L.c(), L.m(o, null)) : L && (L.d(1), L = null), /*visibleMidpoint*/
      e[6] !== void 0 && !/*isHandleHovered*/
      e[7] ? b ? b.p(st(e), M) : (b = so(st(e)), b.c(), b.m(t, null)) : b && (b.d(1), b = null), (!d || M[0] & /*geom*/
      32 && h !== (h = mn(
        /*element*/
        e[30]
      ))) && v(p, "d", h), (!d || M[0] & /*computedStyle*/
      2) && v(
        g,
        "style",
        /*computedStyle*/
        e[1]
      ), (!d || M[0] & /*geom*/
      32 && y !== (y = mn(
        /*element*/
        e[30]
      ))) && v(g, "d", y), M[0] & /*geom, viewportScale, selectedCorners, onEnterHandle, onLeaveHandle, onHandlePointerDown, grab, onHandlePointerUp*/
      268491048) {
        m = rn(
          /*element*/
          e[30].rings
        );
        let S;
        for (S = 0; S < m.length; S += 1) {
          const N = no(e, m, S);
          w[S] ? (w[S].p(N, M), ye(w[S], 1)) : (w[S] = io(N), w[S].c(), ye(w[S], 1), w[S].m(n, null));
        }
        for (Tn(), S = m.length; S < w.length; S += 1)
          k(S);
        Sn();
      }
    },
    i(_) {
      if (!d) {
        for (let M = 0; M < m.length; M += 1)
          ye(w[M]);
        d = !0;
      }
    },
    o(_) {
      w = w.filter(Boolean);
      for (let M = 0; M < w.length; M += 1)
        Ee(w[M]);
      d = !1;
    },
    d(_) {
      _ && re(n), L && L.d(), b && b.d(), Wn(w, _), E = !1, Ze(A);
    }
  };
}
function fo(e) {
  let n, t;
  return n = new Ps({
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
    Oe(
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
      Je(n.$$.fragment);
    },
    m(o, s) {
      Ke(n, o, s), t = !0;
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
      t || (ye(n.$$.fragment, o), t = !0);
    },
    o(o) {
      Ee(n.$$.fragment, o), t = !1;
    },
    d(o) {
      Fe(n, o);
    }
  };
}
function Dl(e) {
  let n, t, o, s = rn(
    /*geom*/
    e[5].polygons
  ), l = [];
  for (let a = 0; a < s.length; a += 1)
    l[a] = ro(eo(e, s, a));
  const f = (a) => Ee(l[a], 1, 1, () => {
    l[a] = null;
  });
  let r = (
    /*visibleMidpoint*/
    e[6] !== void 0 && !/*isHandleHovered*/
    e[7] && fo(ot(e))
  );
  return {
    c() {
      for (let a = 0; a < l.length; a += 1)
        l[a].c();
      n = je(), r && r.c(), t = qn();
    },
    m(a, c) {
      for (let u = 0; u < l.length; u += 1)
        l[u] && l[u].m(a, c);
      fe(a, n, c), r && r.m(a, c), fe(a, t, c), o = !0;
    },
    p(a, c) {
      if (c[0] & /*geom, viewportScale, selectedCorners, onEnterHandle, onLeaveHandle, onHandlePointerDown, grab, onHandlePointerUp, maskId, computedStyle, onShapePointerUp, midpoints, visibleMidpoint, mask, isHandleHovered*/
      268763114) {
        s = rn(
          /*geom*/
          a[5].polygons
        );
        let u;
        for (u = 0; u < s.length; u += 1) {
          const p = eo(a, s, u);
          l[u] ? (l[u].p(p, c), ye(l[u], 1)) : (l[u] = ro(p), l[u].c(), ye(l[u], 1), l[u].m(n.parentNode, n));
        }
        for (Tn(), u = s.length; u < l.length; u += 1)
          f(u);
        Sn();
      }
      a[6] !== void 0 && !/*isHandleHovered*/
      a[7] ? r ? (r.p(ot(a), c), c[0] & /*visibleMidpoint, isHandleHovered*/
      192 && ye(r, 1)) : (r = fo(ot(a)), r.c(), ye(r, 1), r.m(t.parentNode, t)) : r && (Tn(), Ee(r, 1, 1, () => {
        r = null;
      }), Sn());
    },
    i(a) {
      if (!o) {
        for (let c = 0; c < s.length; c += 1)
          ye(l[c]);
        ye(r), o = !0;
      }
    },
    o(a) {
      l = l.filter(Boolean);
      for (let c = 0; c < l.length; c += 1)
        Ee(l[c]);
      Ee(r), o = !1;
    },
    d(a) {
      a && (re(n), re(t)), Wn(l, a), r && r.d(a);
    }
  };
}
function jl(e) {
  let n, t;
  return n = new It({
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
          Dl,
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
      Je(n.$$.fragment);
    },
    m(o, s) {
      Ke(n, o, s), t = !0;
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
      t || (ye(n.$$.fragment, o), t = !0);
    },
    o(o) {
      Ee(n.$$.fragment, o), t = !1;
    },
    d(o) {
      Fe(n, o);
    }
  };
}
const Xl = 250, Bl = 1e3, jn = 4.5;
function Ul(e, n, t) {
  let o, s, l;
  const f = Ht();
  let { shape: r } = n, { computedStyle: a } = n, { transform: c } = n, { viewportScale: u = 1 } = n, { svgEl: p } = n, h, g = !1, y, d = [];
  const E = () => t(7, g = !0), A = () => t(7, g = !1), L = (T) => {
    if (d.length > 0 || !s.some((V) => V.visible)) {
      t(6, h = void 0);
      return;
    }
    const [q, C] = c.elementToImage(T.offsetX, T.offsetY), B = (V) => Math.pow(V[0] - q, 2) + Math.pow(V[1] - C, 2), Z = tl(o).reduce((V, Q) => B(Q) < B(V) ? Q : V), R = s.filter((V) => V.visible).reduce((V, Q) => B(Q.point) < B(V.point) ? Q : V), D = Math.pow(Bl / u, 2);
    B(Z) < D || B(R.point) < D ? t(6, h = s.indexOf(R)) : t(6, h = void 0);
  }, b = () => {
    document.activeElement !== p && p.focus();
  }, m = () => {
    t(8, d = []), b();
  }, w = (T) => {
    t(7, g = !0), T.preventDefault(), T.stopPropagation(), y = performance.now();
  }, k = (T, q, C) => (B) => {
    if (!y || nn || performance.now() - y > Xl) return;
    const Z = (D) => D.polygon === T && D.ring === q && D.point === C, R = d.some(Z);
    B.metaKey || B.ctrlKey || B.shiftKey ? R ? t(8, d = d.filter((D) => !Z(D))) : t(8, d = [...d, { polygon: T, ring: q, point: C }]) : R && d.length > 1 ? t(8, d = [{ polygon: T, ring: q, point: C }]) : R ? t(8, d = []) : t(8, d = [{ polygon: T, ring: q, point: C }]), b();
  }, _ = (T, q, C) => {
    b();
    const B = T.geometry.polygons;
    let Z;
    if (q === "SHAPE")
      Z = B.map((R) => {
        const D = R.rings.map((Q, ne) => ({ points: Q.points.map((P, K) => [P[0] + C[0], P[1] + C[1]]) })), V = He(D[0].points);
        return { rings: D, bounds: V };
      });
    else {
      const [R, D, V, Q] = q.split("-").map((ne) => parseInt(ne));
      Z = B.map((ne, P) => {
        if (P === D) {
          const K = ne.rings.map(($, me) => me === V ? { points: $.points.map((le, ce) => ce === Q ? [le[0] + C[0], le[1] + C[1]] : le) } : $), oe = He(K[0].points);
          return { rings: K, bounds: oe };
        } else
          return ne;
      });
    }
    return {
      ...T,
      geometry: {
        polygons: Z,
        bounds: xn(Z)
      }
    };
  }, M = (T) => async (q) => {
    q.stopPropagation();
    const C = s[T], B = o.polygons.map((R, D) => {
      if (D === C.elementIdx) {
        const V = R.rings.map((ne, P) => P === C.ringIdx ? { points: [
          ...ne.points.slice(0, C.pointIdx + 1),
          C.point,
          ...ne.points.slice(C.pointIdx + 1)
        ] } : ne), Q = He(V[0].points);
        return { rings: V, bounds: Q };
      } else
        return R;
    });
    f("change", {
      ...r,
      geometry: {
        polygons: B,
        bounds: xn(B)
      }
    }), await Ts();
    const Z = [...document.querySelectorAll(".a9s-handle")][T + 1];
    if (Z != null && Z.firstChild) {
      const R = new PointerEvent(
        "pointerdown",
        {
          bubbles: !0,
          cancelable: !0,
          clientX: q.clientX,
          clientY: q.clientY,
          pointerId: q.pointerId,
          pointerType: q.pointerType,
          isPrimary: q.isPrimary,
          buttons: q.buttons
        }
      );
      Z.firstChild.dispatchEvent(R);
    }
  }, S = () => {
    const T = o.polygons.map((q, C) => {
      if (d.some((B) => B.polygon === C)) {
        const B = q.rings.map((R, D) => {
          const V = d.filter((Q) => Q.polygon === C && Q.ring === D);
          return V.length && R.points.length - V.length >= 3 ? { points: R.points.filter((Q, ne) => !V.some((P) => P.point === ne)) } : R;
        }), Z = He(B[0].points);
        return { rings: B, bounds: Z };
      } else
        return q;
    });
    !Tt(o.polygons, T) && (f("change", {
      ...r,
      geometry: {
        polygons: T,
        bounds: xn(T)
      }
    }), t(8, d = []));
  };
  vs(() => {
    if (nn) return;
    const T = (q) => {
      (q.key === "Delete" || q.key === "Backspace") && (q.preventDefault(), S());
    };
    return p.addEventListener("pointermove", L), p.addEventListener("keydown", T), () => {
      p.removeEventListener("pointermove", L), p.removeEventListener("keydown", T);
    };
  });
  const N = `polygon-mask-${Math.random().toString(36).substring(2, 12)}`, G = (T, q, C, { polygon: B, ring: Z, point: R }) => B === T && Z === q && R === C;
  function I(T) {
    Re.call(this, e, T);
  }
  function U(T) {
    Re.call(this, e, T);
  }
  function H(T) {
    Re.call(this, e, T);
  }
  return e.$$set = (T) => {
    "shape" in T && t(0, r = T.shape), "computedStyle" in T && t(1, a = T.computedStyle), "transform" in T && t(2, c = T.transform), "viewportScale" in T && t(3, u = T.viewportScale), "svgEl" in T && t(4, p = T.svgEl);
  }, e.$$.update = () => {
    e.$$.dirty[0] & /*shape*/
    1 && t(5, o = r.geometry), e.$$.dirty[0] & /*geom, viewportScale*/
    40 && t(10, s = nn ? [] : Al(o, u)), e.$$.dirty[0] & /*geom, viewportScale*/
    40 && t(9, l = hn(o.bounds, jn / u));
  }, [
    r,
    a,
    c,
    u,
    p,
    o,
    h,
    g,
    d,
    l,
    s,
    E,
    A,
    m,
    w,
    k,
    _,
    M,
    N,
    G,
    I,
    U,
    H
  ];
}
class Gl extends Ln {
  constructor(n) {
    super(), Pn(
      this,
      n,
      Ul,
      jl,
      Mn,
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
ke.RECTANGLE, ke.POLYGON, ke.MULTIPOLYGON;
typeof navigator > "u" || navigator.userAgent.indexOf("Mac OS X");
function we() {
}
function St(e, n) {
  for (const t in n) e[t] = n[t];
  return (
    /** @type {T & S} */
    e
  );
}
function Ls(e) {
  return e();
}
function ao() {
  return /* @__PURE__ */ Object.create(null);
}
function Se(e) {
  e.forEach(Ls);
}
function se(e) {
  return typeof e == "function";
}
function Me(e, n) {
  return e != e ? n == n : e !== n || e && typeof e == "object" || typeof e == "function";
}
function ql(e) {
  return Object.keys(e).length === 0;
}
function Yl(e, ...n) {
  if (e == null) {
    for (const o of n)
      o(void 0);
    return we;
  }
  const t = e.subscribe(...n);
  return t.unsubscribe ? () => t.unsubscribe() : t;
}
function zl(e, n, t) {
  e.$$.on_destroy.push(Yl(n, t));
}
function Vl(e, n, t, o) {
  if (e) {
    const s = Os(e, n, t, o);
    return e[0](s);
  }
}
function Os(e, n, t, o) {
  return e[1] && o ? St(t.ctx.slice(), e[1](o(n))) : t.ctx;
}
function Kl(e, n, t, o) {
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
function Fl(e, n, t, o, s, l) {
  if (s) {
    const f = Os(n, t, o, l);
    e.p(f, s);
  }
}
function Zl(e) {
  if (e.ctx.length > 32) {
    const n = [], t = e.ctx.length / 32;
    for (let o = 0; o < t; o++)
      n[o] = -1;
    return n;
  }
  return -1;
}
function co(e) {
  const n = {};
  for (const t in e) t[0] !== "$" && (n[t] = e[t]);
  return n;
}
function xe(e) {
  return e ?? "";
}
function J(e, n) {
  e.appendChild(n);
}
function X(e, n, t) {
  e.insertBefore(n, t || null);
}
function j(e) {
  e.parentNode && e.parentNode.removeChild(e);
}
function Hn(e, n) {
  for (let t = 0; t < e.length; t += 1)
    e[t] && e[t].d(n);
}
function De(e) {
  return document.createElement(e);
}
function z(e) {
  return document.createElementNS("http://www.w3.org/2000/svg", e);
}
function Qn(e) {
  return document.createTextNode(e);
}
function te() {
  return Qn(" ");
}
function Ce() {
  return Qn("");
}
function x(e, n, t, o) {
  return e.addEventListener(n, t, o), () => e.removeEventListener(n, t, o);
}
function i(e, n, t) {
  t == null ? e.removeAttribute(n) : e.getAttribute(n) !== t && e.setAttribute(n, t);
}
function Wl(e) {
  return Array.from(e.childNodes);
}
function Hs(e, n) {
  n = "" + n, e.data !== n && (e.data = /** @type {string} */
  n);
}
function Xe(e, n, t, o) {
  t == null ? e.style.removeProperty(n) : e.style.setProperty(n, t, "");
}
function Ve(e, n, t) {
  e.classList.toggle(n, !!t);
}
function Ql(e, n, { bubbles: t = !1, cancelable: o = !1 } = {}) {
  return new CustomEvent(e, { detail: n, bubbles: t, cancelable: o });
}
let Xn;
function Nn(e) {
  Xn = e;
}
function Ct() {
  if (!Xn) throw new Error("Function called outside component initialization");
  return Xn;
}
function $e(e) {
  Ct().$$.on_mount.push(e);
}
function Jl(e) {
  Ct().$$.on_destroy.push(e);
}
function We() {
  const e = Ct();
  return (n, t, { cancelable: o = !1 } = {}) => {
    const s = e.$$.callbacks[n];
    if (s) {
      const l = Ql(
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
function pe(e, n) {
  const t = e.$$.callbacks[n.type];
  t && t.slice().forEach((o) => o.call(this, n));
}
const wn = [], pn = [];
let kn = [];
const uo = [], Is = /* @__PURE__ */ Promise.resolve();
let Mt = !1;
function Cs() {
  Mt || (Mt = !0, Is.then(Rs));
}
function Bn() {
  return Cs(), Is;
}
function Pt(e) {
  kn.push(e);
}
const it = /* @__PURE__ */ new Set();
let gn = 0;
function Rs() {
  if (gn !== 0)
    return;
  const e = Xn;
  do {
    try {
      for (; gn < wn.length; ) {
        const n = wn[gn];
        gn++, Nn(n), $l(n.$$);
      }
    } catch (n) {
      throw wn.length = 0, gn = 0, n;
    }
    for (Nn(null), wn.length = 0, gn = 0; pn.length; ) pn.pop()();
    for (let n = 0; n < kn.length; n += 1) {
      const t = kn[n];
      it.has(t) || (it.add(t), t());
    }
    kn.length = 0;
  } while (wn.length);
  for (; uo.length; )
    uo.pop()();
  Mt = !1, it.clear(), Nn(e);
}
function $l(e) {
  if (e.fragment !== null) {
    e.update(), Se(e.before_update);
    const n = e.dirty;
    e.dirty = [-1], e.fragment && e.fragment.p(e.ctx, n), e.after_update.forEach(Pt);
  }
}
function xl(e) {
  const n = [], t = [];
  kn.forEach((o) => e.indexOf(o) === -1 ? n.push(o) : t.push(o)), t.forEach((o) => o()), kn = n;
}
const zn = /* @__PURE__ */ new Set();
let cn;
function Be() {
  cn = {
    r: 0,
    c: [],
    p: cn
    // parent group
  };
}
function Ue() {
  cn.r || Se(cn.c), cn = cn.p;
}
function W(e, n) {
  e && e.i && (zn.delete(e), e.i(n));
}
function ee(e, n, t, o) {
  if (e && e.o) {
    if (zn.has(e)) return;
    zn.add(e), cn.c.push(() => {
      zn.delete(e), o && (t && e.d(1), o());
    }), e.o(n);
  } else o && o();
}
function Ne(e) {
  return (e == null ? void 0 : e.length) !== void 0 ? e : Array.from(e);
}
function po(e, n) {
  e.d(1), n.delete(e.key);
}
function ei(e, n) {
  ee(e, 1, 1, () => {
    n.delete(e.key);
  });
}
function rt(e, n, t, o, s, l, f, r, a, c, u, p) {
  let h = e.length, g = l.length, y = h;
  const d = {};
  for (; y--; ) d[e[y].key] = y;
  const E = [], A = /* @__PURE__ */ new Map(), L = /* @__PURE__ */ new Map(), b = [];
  for (y = g; y--; ) {
    const _ = p(s, l, y), M = t(_);
    let S = f.get(M);
    S ? b.push(() => S.p(_, n)) : (S = c(M, _), S.c()), A.set(M, E[y] = S), M in d && L.set(M, Math.abs(y - d[M]));
  }
  const m = /* @__PURE__ */ new Set(), w = /* @__PURE__ */ new Set();
  function k(_) {
    W(_, 1), _.m(r, u), f.set(_.key, _), u = _.first, g--;
  }
  for (; h && g; ) {
    const _ = E[g - 1], M = e[h - 1], S = _.key, N = M.key;
    _ === M ? (u = _.first, h--, g--) : A.has(N) ? !f.has(S) || m.has(S) ? k(_) : w.has(N) ? h-- : L.get(S) > L.get(N) ? (w.add(S), k(_)) : (m.add(N), h--) : (a(M, f), h--);
  }
  for (; h--; ) {
    const _ = e[h];
    A.has(_.key) || a(_, f);
  }
  for (; g; ) k(E[g - 1]);
  return Se(b), E;
}
function ge(e) {
  e && e.c();
}
function he(e, n, t) {
  const { fragment: o, after_update: s } = e.$$;
  o && o.m(n, t), Pt(() => {
    const l = e.$$.on_mount.map(Ls).filter(se);
    e.$$.on_destroy ? e.$$.on_destroy.push(...l) : Se(l), e.$$.on_mount = [];
  }), s.forEach(Pt);
}
function de(e, n) {
  const t = e.$$;
  t.fragment !== null && (xl(t.after_update), Se(t.on_destroy), t.fragment && t.fragment.d(n), t.on_destroy = t.fragment = null, t.ctx = []);
}
function ni(e, n) {
  e.$$.dirty[0] === -1 && (wn.push(e), Cs(), e.$$.dirty.fill(0)), e.$$.dirty[n / 31 | 0] |= 1 << n % 31;
}
function Pe(e, n, t, o, s, l, f = null, r = [-1]) {
  const a = Xn;
  Nn(e);
  const c = e.$$ = {
    fragment: null,
    ctx: [],
    // state
    props: l,
    update: we,
    not_equal: s,
    bound: ao(),
    // lifecycle
    on_mount: [],
    on_destroy: [],
    on_disconnect: [],
    before_update: [],
    after_update: [],
    context: new Map(n.context || (a ? a.$$.context : [])),
    // everything else
    callbacks: ao(),
    dirty: r,
    skip_bound: !1,
    root: n.target || a.$$.root
  };
  f && f(c.root);
  let u = !1;
  if (c.ctx = t ? t(e, n.props || {}, (p, h, ...g) => {
    const y = g.length ? g[0] : h;
    return c.ctx && s(c.ctx[p], c.ctx[p] = y) && (!c.skip_bound && c.bound[p] && c.bound[p](y), u && ni(e, p)), h;
  }) : [], c.update(), u = !0, Se(c.before_update), c.fragment = o ? o(c.ctx) : !1, n.target) {
    if (n.hydrate) {
      const p = Wl(n.target);
      c.fragment && c.fragment.l(p), p.forEach(j);
    } else
      c.fragment && c.fragment.c();
    n.intro && W(e.$$.fragment), he(e, n.target, n.anchor), Rs();
  }
  Nn(a);
}
class Le {
  constructor() {
    /**
     * ### PRIVATE API
     *
     * Do not use, may change at any time
     *
     * @type {any}
     */
    Jn(this, "$$");
    /**
     * ### PRIVATE API
     *
     * Do not use, may change at any time
     *
     * @type {any}
     */
    Jn(this, "$$set");
  }
  /** @returns {void} */
  $destroy() {
    de(this, 1), this.$destroy = we;
  }
  /**
   * @template {Extract<keyof Events, string>} K
   * @param {K} type
   * @param {((e: Events[K]) => void) | null | undefined} callback
   * @returns {() => void}
   */
  $on(n, t) {
    if (!se(t))
      return we;
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
    this.$$set && !ql(n) && (this.$$.skip_bound = !0, this.$$set(n), this.$$.skip_bound = !1);
  }
}
const ti = "4";
typeof window < "u" && (window.__svelte || (window.__svelte = { v: /* @__PURE__ */ new Set() })).v.add(ti);
function ho(e) {
  let n, t, o, s = (
    /*x1*/
    (e[3] !== /*x2*/
    e[5] || /*y1*/
    e[4] !== /*y2*/
    e[6]) && mo(e)
  );
  return {
    c() {
      n = z("line"), t = z("line"), s && s.c(), o = Ce(), i(n, "class", "a9s-outer"), i(
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
      X(l, n, f), X(l, t, f), s && s.m(l, f), X(l, o, f);
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
      l[6] ? s ? s.p(l, f) : (s = mo(l), s.c(), s.m(o.parentNode, o)) : s && (s.d(1), s = null);
    },
    d(l) {
      l && (j(n), j(t), j(o)), s && s.d(l);
    }
  };
}
function mo(e) {
  let n, t;
  return {
    c() {
      n = z("polyline"), i(n, "class", "a9s-inner"), i(n, "fill", "none"), i(n, "points", t = /*func*/
      e[11]());
    },
    m(o, s) {
      X(o, n, s);
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
function oi(e) {
  let n, t = (
    /*origin*/
    e[1] && /*cursor*/
    e[2] && ho(e)
  );
  return {
    c() {
      n = z("g"), t && t.c(), i(n, "class", "a9s-annotation a9s-rubberband");
    },
    m(o, s) {
      X(o, n, s), t && t.m(n, null), e[12](n);
    },
    p(o, [s]) {
      /*origin*/
      o[1] && /*cursor*/
      o[2] ? t ? t.p(o, s) : (t = ho(o), t.c(), t.m(n, null)) : t && (t.d(1), t = null);
    },
    i: we,
    o: we,
    d(o) {
      o && j(n), t && t.d(), e[12](null);
    }
  };
}
function si(e, n, t) {
  const o = We();
  let { addEventListener: s } = n, { drawingMode: l } = n, { transform: f } = n, { viewportScale: r } = n, a, c, u, p, h, g, y, d, E;
  const A = (_) => {
    const M = _, { timeStamp: S, offsetX: N, offsetY: G } = M;
    d = { timeStamp: S, offsetX: N, offsetY: G }, l === "drag" && (t(1, c = f.elementToImage(M.offsetX, M.offsetY)), t(2, u = c), t(3, p = c[0]), t(4, h = c[1]), t(5, g = u[0]), t(6, y = u[1]));
  }, L = (_) => {
    const M = _ || E;
    c && (t(2, u = f.elementToImage(M.offsetX, M.offsetY)), t(5, g = u[0]), t(6, y = u[1])), _ && (E = _);
  }, b = (_) => {
    const M = _;
    if (l === "click") {
      const S = performance.now() - d.timeStamp, N = en([d.offsetX, d.offsetY], [M.offsetX, M.offsetY]);
      if (S > 300 || N > 15) return;
      c ? m() : (t(1, c = f.elementToImage(M.offsetX, M.offsetY)), t(2, u = c), t(3, p = c[0]), t(4, h = c[1]), t(5, g = u[0]), t(6, y = u[1]));
    } else c && (M.stopPropagation(), m());
  }, m = () => {
    if (c && u && en(c, u) > 4) {
      const _ = {
        type: ke.LINE,
        geometry: {
          bounds: He([c, u]),
          points: [c, u]
        },
        properties: { toolType: "arrow" }
      };
      o("create", _);
    }
    t(1, c = void 0), t(2, u = void 0), E = void 0;
  };
  $e(() => {
    s("pointerdown", A, !0), s("pointermove", L), s("pointerup", b, !0);
  });
  const w = () => {
    const _ = Math.atan2(y - h, g - p), M = 12, S = g - M * Math.cos(_ - Math.PI / 6), N = y - M * Math.sin(_ - Math.PI / 6), G = g - M * Math.cos(_ + Math.PI / 6), I = y - M * Math.sin(_ + Math.PI / 6);
    return `${S},${N} ${g},${y} ${G},${I}`;
  };
  function k(_) {
    pn[_ ? "unshift" : "push"](() => {
      a = _, t(0, a);
    });
  }
  return e.$$set = (_) => {
    "addEventListener" in _ && t(7, s = _.addEventListener), "drawingMode" in _ && t(8, l = _.drawingMode), "transform" in _ && t(9, f = _.transform), "viewportScale" in _ && t(10, r = _.viewportScale);
  }, [
    a,
    c,
    u,
    p,
    h,
    g,
    y,
    s,
    l,
    f,
    r,
    w,
    k
  ];
}
class li extends Le {
  constructor(n) {
    super(), Pe(this, n, si, oi, Me, {
      addEventListener: 7,
      drawingMode: 8,
      transform: 9,
      viewportScale: 10
    });
  }
}
function go(e) {
  let n, t;
  return {
    c() {
      n = z("line"), t = z("line"), i(n, "class", "a9s-outer"), i(
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
      X(o, n, s), X(o, t, s);
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
function ii(e) {
  let n, t = (
    /*origin*/
    e[1] && /*cursor*/
    e[2] && go(e)
  );
  return {
    c() {
      n = z("g"), t && t.c(), i(n, "class", "a9s-annotation a9s-rubberband");
    },
    m(o, s) {
      X(o, n, s), t && t.m(n, null), e[11](n);
    },
    p(o, [s]) {
      /*origin*/
      o[1] && /*cursor*/
      o[2] ? t ? t.p(o, s) : (t = go(o), t.c(), t.m(n, null)) : t && (t.d(1), t = null);
    },
    i: we,
    o: we,
    d(o) {
      o && j(n), t && t.d(), e[11](null);
    }
  };
}
function ri(e, n, t) {
  const o = We();
  let { addEventListener: s } = n, { drawingMode: l } = n, { transform: f } = n, { viewportScale: r } = n, a, c, u, p, h, g, y, d, E;
  const A = (k) => {
    const _ = k, { timeStamp: M, offsetX: S, offsetY: N } = _;
    d = { timeStamp: M, offsetX: S, offsetY: N }, l === "drag" && (t(1, c = f.elementToImage(_.offsetX, _.offsetY)), t(2, u = c), t(3, p = c[0]), t(4, h = c[1]), t(5, g = u[0]), t(6, y = u[1]));
  }, L = (k) => {
    const _ = k || E;
    c && (t(2, u = f.elementToImage(_.offsetX, _.offsetY)), t(5, g = u[0]), t(6, y = u[1])), k && (E = k);
  }, b = (k) => {
    const _ = k;
    if (l === "click") {
      const M = performance.now() - d.timeStamp, S = en([d.offsetX, d.offsetY], [_.offsetX, _.offsetY]);
      if (M > 300 || S > 15) return;
      c ? m() : (t(1, c = f.elementToImage(_.offsetX, _.offsetY)), t(2, u = c), t(3, p = c[0]), t(4, h = c[1]), t(5, g = u[0]), t(6, y = u[1]));
    } else c && (_.stopPropagation(), m());
  }, m = () => {
    if (c && u && en(c, u) > 4) {
      const k = {
        type: ke.POLYLINE,
        geometry: {
          bounds: He([c, u]),
          points: [{ type: "CORNER", point: c }, { type: "CORNER", point: u }]
        },
        properties: { toolType: "distance" }
      };
      o("create", k);
    }
    t(1, c = void 0), t(2, u = void 0), E = void 0;
  };
  $e(() => {
    s("pointerdown", A, !0), s("pointermove", L), s("pointerup", b, !0);
  });
  function w(k) {
    pn[k ? "unshift" : "push"](() => {
      a = k, t(0, a);
    });
  }
  return e.$$set = (k) => {
    "addEventListener" in k && t(7, s = k.addEventListener), "drawingMode" in k && t(8, l = k.drawingMode), "transform" in k && t(9, f = k.transform), "viewportScale" in k && t(10, r = k.viewportScale);
  }, [
    a,
    c,
    u,
    p,
    h,
    g,
    y,
    s,
    l,
    f,
    r,
    w
  ];
}
class fi extends Le {
  constructor(n) {
    super(), Pe(this, n, ri, ii, Me, {
      addEventListener: 7,
      drawingMode: 8,
      transform: 9,
      viewportScale: 10
    });
  }
}
var tn = /* @__PURE__ */ ((e) => (e.ELLIPSE = "ELLIPSE", e.MULTIPOLYGON = "MULTIPOLYGON", e.POLYGON = "POLYGON", e.POLYLINE = "POLYLINE", e.RECTANGLE = "RECTANGLE", e.LINE = "LINE", e))(tn || {}), ai = { exports: {} };
(function(e) {
  (function() {
    function n(r, a) {
      var c = r.x - a.x, u = r.y - a.y;
      return c * c + u * u;
    }
    function t(r, a, c) {
      var u = a.x, p = a.y, h = c.x - u, g = c.y - p;
      if (h !== 0 || g !== 0) {
        var y = ((r.x - u) * h + (r.y - p) * g) / (h * h + g * g);
        y > 1 ? (u = c.x, p = c.y) : y > 0 && (u += h * y, p += g * y);
      }
      return h = r.x - u, g = r.y - p, h * h + g * g;
    }
    function o(r, a) {
      for (var c = r[0], u = [c], p, h = 1, g = r.length; h < g; h++)
        p = r[h], n(p, c) > a && (u.push(p), c = p);
      return c !== p && u.push(p), u;
    }
    function s(r, a, c, u, p) {
      for (var h = u, g, y = a + 1; y < c; y++) {
        var d = t(r[y], r[a], r[c]);
        d > h && (g = y, h = d);
      }
      h > u && (g - a > 1 && s(r, a, g, u, p), p.push(r[g]), c - g > 1 && s(r, g, c, u, p));
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
})(ai);
const In = (e, n) => n, sn = (e) => {
  let n = 1 / 0, t = 1 / 0, o = -1 / 0, s = -1 / 0;
  return e.forEach(([l, f]) => {
    n = Math.min(n, l), t = Math.min(t, f), o = Math.max(o, l), s = Math.max(s, f);
  }), { minX: n, minY: t, maxX: o, maxY: s };
}, Fn = (e) => {
  let n = 0, t = e.length - 1;
  for (let o = 0; o < e.length; o++)
    n += (e[t][0] + e[o][0]) * (e[t][1] - e[o][1]), t = o;
  return Math.abs(0.5 * n);
}, Zn = (e, n, t) => {
  let o = !1;
  for (let s = 0, l = e.length - 1; s < e.length; l = s++) {
    const f = e[s][0], r = e[s][1], a = e[l][0], c = e[l][1];
    r > t != c > t && n < (a - f) * (t - r) / (c - r) + f && (o = !o);
  }
  return o;
}, ci = (e, n = !0) => {
  let t = "M ";
  return e.forEach(([o, s], l) => {
    l === 0 ? t += `${o},${s}` : t += ` L ${o},${s}`;
  }), n && (t += " Z"), t;
}, ui = (e, n) => {
  const t = Math.abs(n[0] - e[0]), o = Math.abs(n[1] - e[1]);
  return Math.sqrt(Math.pow(t, 2) + Math.pow(o, 2));
}, pi = {
  area: (e) => Math.PI * e.geometry.rx * e.geometry.ry,
  intersects: (e, n, t) => {
    const { cx: o, cy: s, rx: l, ry: f } = e.geometry, r = 0, a = Math.cos(r), c = Math.sin(r), u = n - o, p = t - s, h = a * u + c * p, g = c * u - a * p;
    return h * h / (l * l) + g * g / (f * f) <= 1;
  }
};
In(tn.ELLIPSE, pi);
const hi = {
  area: (e) => 0,
  intersects: (e, n, t, o = 2) => {
    const [[s, l], [f, r]] = e.geometry.points, a = Math.abs((r - l) * n - (f - s) * t + f * l - r * s), c = ui([s, l], [f, r]);
    return a / c <= o;
  }
};
In(tn.LINE, hi);
const di = {
  area: (e) => {
    const { polygons: n } = e.geometry;
    return n.reduce((t, o) => {
      const [s, ...l] = o.rings, f = Fn(s.points), r = l.reduce((a, c) => a + Fn(c.points), 0);
      return t + f - r;
    }, 0);
  },
  intersects: (e, n, t) => {
    const { polygons: o } = e.geometry;
    for (const s of o) {
      const [l, ...f] = s.rings;
      if (Zn(l.points, n, t)) {
        let r = !1;
        for (const a of f)
          if (Zn(a.points, n, t)) {
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
  return sn(n);
}, _n = (e) => e.rings.map((t) => ci(t.points)).join(" "), mi = (e) => e.polygons.reduce((n, t) => [
  ...n,
  ...t.rings.reduce((o, s) => [...o, ...s.points], [])
], []);
In(tn.MULTIPOLYGON, di);
const gi = {
  area: (e) => {
    const n = e.geometry.points;
    return Fn(n);
  },
  intersects: (e, n, t) => {
    const o = e.geometry.points;
    return Zn(o, n, t);
  }
};
In(tn.POLYGON, gi);
const _i = {
  area: (e) => {
    const n = e.geometry;
    if (!n.closed || n.points.length < 3)
      return 0;
    const t = _o(n.points, n.closed);
    return Fn(t);
  },
  intersects: (e, n, t, o = 2) => {
    const s = e.geometry;
    if (s.closed) {
      const l = _o(s.points, s.closed);
      return Zn(l, n, t);
    } else
      return yi(s, [n, t], o);
  }
}, _o = (e, n = !1) => {
  const t = [];
  for (let o = 0; o < e.length; o++) {
    const s = e[o], l = e[(o + 1) % e.length];
    if (t.push(s.point), (o < e.length - 1 || n) && (s.type === "CURVE" || l.type == "CURVE")) {
      const r = Ns(
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
}, Ns = (e, n, t, o, s = 10) => {
  const l = [];
  for (let f = 0; f <= s; f++) {
    const r = f / s, a = Math.pow(1 - r, 3) * e[0] + 3 * Math.pow(1 - r, 2) * r * n[0] + 3 * (1 - r) * Math.pow(r, 2) * t[0] + Math.pow(r, 3) * o[0], c = Math.pow(1 - r, 3) * e[1] + 3 * Math.pow(1 - r, 2) * r * n[1] + 3 * (1 - r) * Math.pow(r, 2) * t[1] + Math.pow(r, 3) * o[1];
    l.push([a, c]);
  }
  return l;
}, yi = (e, n, t) => {
  for (let o = 0; o < e.points.length - 1; o++) {
    const s = e.points[o], l = e.points[o + 1];
    if (s.type === "CURVE" || l.type === "CURVE") {
      const r = Ns(
        s.point,
        s.type === "CURVE" && s.outHandle || s.point,
        l.type === "CURVE" && l.inHandle || l.point,
        l.point,
        20
        // TODO make configurable? Based on scale factor? Length?
      );
      for (let a = 0; a < r.length - 1; a++)
        if (yo(n, r[a], r[a + 1]) <= t) return !0;
    } else if (yo(n, s.point, l.point) <= t) return !0;
  }
  return !1;
}, yo = (e, n, t) => {
  const [o, s] = e, [l, f] = n, [r, a] = t, c = r - l, u = a - f, p = Math.sqrt(c * c + u * u);
  if (p === 0)
    return Math.sqrt((o - l) * (o - l) + (s - f) * (s - f));
  const h = ((o - l) * c + (s - f) * u) / (p * p);
  return h <= 0 ? Math.sqrt((o - l) * (o - l) + (s - f) * (s - f)) : h >= 1 ? Math.sqrt((o - r) * (o - r) + (s - a) * (s - a)) : Math.abs((a - f) * o - (r - l) * s + r * f - a * l) / p;
};
In(tn.POLYLINE, _i);
const wi = {
  area: (e) => e.geometry.w * e.geometry.h,
  intersects: (e, n, t) => n >= e.geometry.x && n <= e.geometry.x + e.geometry.w && t >= e.geometry.y && t <= e.geometry.y + e.geometry.h
};
In(tn.RECTANGLE, wi);
const bi = [];
for (let e = 0; e < 256; ++e)
  bi.push((e + 256).toString(16).slice(1));
typeof crypto < "u" && crypto.randomUUID && crypto.randomUUID.bind(crypto);
const vi = "useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict";
let Ei = (e = 21) => {
  let n = "", t = crypto.getRandomValues(new Uint8Array(e |= 0));
  for (; e--; )
    n += vi[t[e] & 63];
  return n;
};
Ei();
const Rt = (e, n = 0) => {
  const { minX: t, minY: o, maxX: s, maxY: l } = e;
  return {
    x: t - n,
    y: o - n,
    w: s - t + 2 * n,
    h: l - o + 2 * n
  };
}, ln = typeof window > "u" || typeof navigator > "u" ? !1 : "ontouchstart" in window || navigator.maxTouchPoints > 0 || // @ts-ignore
navigator.msMaxTouchPoints > 0, ki = (e) => ({}), wo = (e) => ({ grab: (
  /*onGrab*/
  e[0]
) });
function Ti(e) {
  let n, t, o, s;
  const l = (
    /*#slots*/
    e[8].default
  ), f = Vl(
    l,
    e,
    /*$$scope*/
    e[7],
    wo
  );
  return {
    c() {
      n = z("g"), f && f.c(), i(n, "class", "a9s-annotation selected");
    },
    m(r, a) {
      X(r, n, a), f && f.m(n, null), t = !0, o || (s = [
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
      128) && Fl(
        f,
        l,
        r,
        /*$$scope*/
        r[7],
        t ? Kl(
          l,
          /*$$scope*/
          r[7],
          a,
          ki
        ) : Zl(
          /*$$scope*/
          r[7]
        ),
        wo
      );
    },
    i(r) {
      t || (W(f, r), t = !0);
    },
    o(r) {
      ee(f, r), t = !1;
    },
    d(r) {
      r && j(n), f && f.d(r), o = !1, Se(s);
    }
  };
}
function Si(e, n, t) {
  let { $$slots: o = {}, $$scope: s } = n;
  const l = We();
  let { shape: f } = n, { editor: r } = n, { transform: a } = n, { svgEl: c } = n, u, p, h;
  const g = (E) => (A) => {
    if (u = E, c) {
      const { left: b, top: m } = c.getBoundingClientRect(), w = A.clientX - b, k = A.clientY - m;
      p = a.elementToImage(w, k);
    } else {
      const { offsetX: b, offsetY: m } = A;
      p = a.elementToImage(b, m);
    }
    h = f, A.target.setPointerCapture(A.pointerId), l("grab", A);
  }, y = (E) => {
    if (u) {
      const [A, L] = a.elementToImage(E.offsetX, E.offsetY), b = [A - p[0], L - p[1]];
      t(3, f = r(h, u, b)), l("change", f);
    }
  }, d = (E) => {
    E.target.releasePointerCapture(E.pointerId), u = void 0, h = f, l("release", E);
  };
  return e.$$set = (E) => {
    "shape" in E && t(3, f = E.shape), "editor" in E && t(4, r = E.editor), "transform" in E && t(5, a = E.transform), "svgEl" in E && t(6, c = E.svgEl), "$$scope" in E && t(7, s = E.$$scope);
  }, [
    g,
    y,
    d,
    f,
    r,
    a,
    c,
    s,
    o
  ];
}
class fn extends Le {
  constructor(n) {
    super(), Pe(this, n, Si, Ti, Me, {
      shape: 3,
      editor: 4,
      transform: 5,
      svgEl: 6
    });
  }
}
function Mi(e) {
  let n, t, o, s, l, f, r, a, c = (
    /*selected*/
    e[3] && bo(e)
  );
  return {
    c() {
      n = z("g"), t = z("circle"), c && c.c(), s = z("circle"), i(t, "class", "a9s-handle-buffer svelte-qtyc7s"), i(
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
      e[2]), i(t, "role", "button"), i(t, "tabindex", "0"), i(s, "class", l = xe(`a9s-handle-dot${/*selected*/
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
      X(u, n, p), J(n, t), c && c.m(n, null), J(n, s), r || (a = [
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
      u[3] ? c ? c.p(u, p) : (c = bo(u), c.c(), c.m(n, s)) : c && (c.d(1), c = null), p & /*selected*/
      8 && l !== (l = xe(`a9s-handle-dot${/*selected*/
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
      u && j(n), c && c.d(), r = !1, Se(a);
    }
  };
}
function Pi(e) {
  let n, t, o, s, l, f, r, a, c;
  return {
    c() {
      n = z("g"), t = z("circle"), s = z("circle"), f = z("circle"), i(
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
      e[5] * 10), i(t, "class", "a9s-touch-halo"), Ve(
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
      X(u, n, p), J(n, t), J(n, s), J(n, f), a || (c = [
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
      16 && Ve(
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
      u && j(n), a = !1, Se(c);
    }
  };
}
function bo(e) {
  let n, t;
  return {
    c() {
      n = z("circle"), i(n, "class", "a9s-handle-selected"), i(
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
      X(o, n, s);
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
function Li(e) {
  let n;
  function t(l, f) {
    return ln ? Pi : Mi;
  }
  let s = t()(e);
  return {
    c() {
      s.c(), n = Ce();
    },
    m(l, f) {
      s.m(l, f), X(l, n, f);
    },
    p(l, [f]) {
      s.p(l, f);
    },
    i: we,
    o: we,
    d(l) {
      l && j(n), s.d(l);
    }
  };
}
function Oi(e, n, t) {
  let o, { x: s } = n, { y: l } = n, { scale: f } = n, { selected: r = void 0 } = n, a = !1;
  const c = (b) => {
    b.pointerType === "touch" && t(4, a = !0);
  }, u = () => t(4, a = !1);
  function p(b) {
    pe.call(this, e, b);
  }
  function h(b) {
    pe.call(this, e, b);
  }
  function g(b) {
    pe.call(this, e, b);
  }
  function y(b) {
    pe.call(this, e, b);
  }
  function d(b) {
    pe.call(this, e, b);
  }
  function E(b) {
    pe.call(this, e, b);
  }
  function A(b) {
    pe.call(this, e, b);
  }
  function L(b) {
    pe.call(this, e, b);
  }
  return e.$$set = (b) => {
    t(8, n = St(St({}, n), co(b))), "x" in b && t(0, s = b.x), "y" in b && t(1, l = b.y), "scale" in b && t(2, f = b.scale), "selected" in b && t(3, r = b.selected);
  }, e.$$.update = () => {
    e.$$.dirty & /*scale*/
    4 && t(5, o = 4 / f);
  }, n = co(n), [
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
    h,
    g,
    y,
    d,
    E,
    A,
    L
  ];
}
class Ae extends Le {
  constructor(n) {
    super(), Pe(this, n, Oi, Li, Me, { x: 0, y: 1, scale: 2, selected: 3 });
  }
}
function Hi(e) {
  let n, t, o, s, l, f, r;
  return {
    c() {
      n = z("g"), t = z("circle"), s = z("circle"), l = z("circle"), i(t, "class", "a9s-polygon-midpoint-buffer svelte-12ykj76"), i(
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
      X(a, n, c), J(n, t), J(n, s), J(n, l), f || (r = [
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
      a && j(n), f = !1, Se(r);
    }
  };
}
function Ii(e) {
  let n;
  return {
    c() {
      n = z("circle"), i(
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
      X(t, n, o);
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
function Ci(e) {
  let n;
  function t(l, f) {
    return ln ? Ii : Hi;
  }
  let s = t()(e);
  return {
    c() {
      s.c(), n = Ce();
    },
    m(l, f) {
      s.m(l, f), X(l, n, f);
    },
    p(l, [f]) {
      s.p(l, f);
    },
    i: we,
    o: we,
    d(l) {
      l && j(n), s.d(l);
    }
  };
}
function Ri(e, n, t) {
  let o, { x: s } = n, { y: l } = n, { scale: f } = n;
  const r = (c) => {
    c.pointerType;
  };
  function a(c) {
    pe.call(this, e, c);
  }
  return e.$$set = (c) => {
    "x" in c && t(0, s = c.x), "y" in c && t(1, l = c.y), "scale" in c && t(4, f = c.scale);
  }, e.$$.update = () => {
    e.$$.dirty & /*scale*/
    16 && t(2, o = 4 / f);
  }, [s, l, o, r, f, a];
}
class Nt extends Le {
  constructor(n) {
    super(), Pe(this, n, Ri, Ci, Me, { x: 0, y: 1, scale: 4 });
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
function vo(e, n, t) {
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
function Eo(e) {
  let n, t, o, s;
  return {
    c() {
      n = z("circle"), i(n, "cx", t = /*point*/
      e[28][0]), i(n, "cy", o = /*point*/
      e[28][1]), i(n, "r", s = Un / /*viewportScale*/
      e[3]), i(n, "class", "svelte-1h2slbm");
    },
    m(l, f) {
      X(l, n, f);
    },
    p(l, f) {
      f[0] & /*midpoints, visibleMidpoint*/
      1088 && t !== (t = /*point*/
      l[28][0]) && i(n, "cx", t), f[0] & /*midpoints, visibleMidpoint*/
      1088 && o !== (o = /*point*/
      l[28][1]) && i(n, "cy", o), f[0] & /*viewportScale*/
      8 && s !== (s = Un / /*viewportScale*/
      l[3]) && i(n, "r", s);
    },
    d(l) {
      l && j(n);
    }
  };
}
function ko(e) {
  let n, t, o, s, l, f, r, a, c, u;
  return {
    c() {
      n = z("mask"), t = z("rect"), r = z("circle"), i(t, "x", o = /*mask*/
      e[9].x), i(t, "y", s = /*mask*/
      e[9].y), i(t, "width", l = /*mask*/
      e[9].w), i(t, "height", f = /*mask*/
      e[9].h), i(t, "class", "svelte-1h2slbm"), i(r, "cx", a = /*point*/
      e[28][0]), i(r, "cy", c = /*point*/
      e[28][1]), i(r, "r", u = Un / /*viewportScale*/
      e[3]), i(r, "class", "svelte-1h2slbm"), i(n, "id", `${/*maskId*/
      e[19]}-inner`), i(n, "class", "a9s-polygon-editor-mask svelte-1h2slbm");
    },
    m(p, h) {
      X(p, n, h), J(n, t), J(n, r);
    },
    p(p, h) {
      h[0] & /*mask*/
      512 && o !== (o = /*mask*/
      p[9].x) && i(t, "x", o), h[0] & /*mask*/
      512 && s !== (s = /*mask*/
      p[9].y) && i(t, "y", s), h[0] & /*mask*/
      512 && l !== (l = /*mask*/
      p[9].w) && i(t, "width", l), h[0] & /*mask*/
      512 && f !== (f = /*mask*/
      p[9].h) && i(t, "height", f), h[0] & /*midpoints, visibleMidpoint*/
      1088 && a !== (a = /*point*/
      p[28][0]) && i(r, "cx", a), h[0] & /*midpoints, visibleMidpoint*/
      1088 && c !== (c = /*point*/
      p[28][1]) && i(r, "cy", c), h[0] & /*viewportScale*/
      8 && u !== (u = Un / /*viewportScale*/
      p[3]) && i(r, "r", u);
    },
    d(p) {
      p && j(n);
    }
  };
}
function To(e) {
  let n, t;
  return n = new Ae({
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
      ge(n.$$.fragment);
    },
    m(o, s) {
      he(n, o, s), t = !0;
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
      t || (W(n.$$.fragment, o), t = !0);
    },
    o(o) {
      ee(n.$$.fragment, o), t = !1;
    },
    d(o) {
      de(n, o);
    }
  };
}
function So(e) {
  let n, t;
  return n = new Nt({
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
      ge(n.$$.fragment);
    },
    m(o, s) {
      he(n, o, s), t = !0;
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
      t || (W(n.$$.fragment, o), t = !0);
    },
    o(o) {
      ee(n.$$.fragment, o), t = !1;
    },
    d(o) {
      de(n, o);
    }
  };
}
function Ni(e) {
  let n, t, o, s, l, f, r, a, c, u, p, h, g, y, d, E, A, L, b, m, w, k = (
    /*visibleMidpoint*/
    e[6] !== void 0 && !/*isHandleHovered*/
    e[7] && Eo(ut(e))
  ), _ = (
    /*visibleMidpoint*/
    e[6] !== void 0 && !/*isHandleHovered*/
    e[7] && ko(ct(e))
  ), M = Ne(
    /*geom*/
    e[5].points
  ), S = [];
  for (let I = 0; I < M.length; I += 1)
    S[I] = To(vo(e, M, I));
  const N = (I) => ee(S[I], 1, 1, () => {
    S[I] = null;
  });
  let G = (
    /*visibleMidpoint*/
    e[6] !== void 0 && !/*isHandleHovered*/
    e[7] && So(at(e))
  );
  return {
    c() {
      n = z("defs"), t = z("mask"), o = z("rect"), a = z("polygon"), k && k.c(), _ && _.c(), u = te(), p = z("polygon"), g = te(), y = z("polygon"), E = te();
      for (let I = 0; I < S.length; I += 1)
        S[I].c();
      A = te(), G && G.c(), L = Ce(), i(o, "x", s = /*mask*/
      e[9].x), i(o, "y", l = /*mask*/
      e[9].y), i(o, "width", f = /*mask*/
      e[9].w), i(o, "height", r = /*mask*/
      e[9].h), i(o, "class", "svelte-1h2slbm"), i(a, "points", c = /*geom*/
      e[5].points.map(Mo).join(" ")), i(a, "class", "svelte-1h2slbm"), i(t, "id", `${/*maskId*/
      e[19]}-outer`), i(t, "class", "a9s-polygon-editor-mask svelte-1h2slbm"), i(p, "class", "a9s-outer"), i(p, "mask", `url(#${/*maskId*/
      e[19]}-outer)`), i(p, "points", h = /*geom*/
      e[5].points.map(Po).join(" ")), i(y, "class", "a9s-inner a9s-shape-handle"), i(y, "mask", `url(#${/*maskId*/
      e[19]}-inner)`), i(
        y,
        "style",
        /*computedStyle*/
        e[1]
      ), i(y, "points", d = /*geom*/
      e[5].points.map(Lo).join(" "));
    },
    m(I, U) {
      X(I, n, U), J(n, t), J(t, o), J(t, a), k && k.m(t, null), _ && _.m(n, null), X(I, u, U), X(I, p, U), X(I, g, U), X(I, y, U), X(I, E, U);
      for (let H = 0; H < S.length; H += 1)
        S[H] && S[H].m(I, U);
      X(I, A, U), G && G.m(I, U), X(I, L, U), b = !0, m || (w = [
        x(
          p,
          "pointerup",
          /*onShapePointerUp*/
          e[14]
        ),
        x(p, "pointerdown", function() {
          se(
            /*grab*/
            e[27]("SHAPE")
          ) && e[27]("SHAPE").apply(this, arguments);
        }),
        x(
          y,
          "pointermove",
          /*onPointerMove*/
          e[13]
        ),
        x(
          y,
          "pointerup",
          /*onShapePointerUp*/
          e[14]
        ),
        x(y, "pointerdown", function() {
          se(
            /*grab*/
            e[27]("SHAPE")
          ) && e[27]("SHAPE").apply(this, arguments);
        })
      ], m = !0);
    },
    p(I, U) {
      if (e = I, (!b || U[0] & /*mask*/
      512 && s !== (s = /*mask*/
      e[9].x)) && i(o, "x", s), (!b || U[0] & /*mask*/
      512 && l !== (l = /*mask*/
      e[9].y)) && i(o, "y", l), (!b || U[0] & /*mask*/
      512 && f !== (f = /*mask*/
      e[9].w)) && i(o, "width", f), (!b || U[0] & /*mask*/
      512 && r !== (r = /*mask*/
      e[9].h)) && i(o, "height", r), (!b || U[0] & /*geom*/
      32 && c !== (c = /*geom*/
      e[5].points.map(Mo).join(" "))) && i(a, "points", c), /*visibleMidpoint*/
      e[6] !== void 0 && !/*isHandleHovered*/
      e[7] ? k ? k.p(ut(e), U) : (k = Eo(ut(e)), k.c(), k.m(t, null)) : k && (k.d(1), k = null), /*visibleMidpoint*/
      e[6] !== void 0 && !/*isHandleHovered*/
      e[7] ? _ ? _.p(ct(e), U) : (_ = ko(ct(e)), _.c(), _.m(n, null)) : _ && (_.d(1), _ = null), (!b || U[0] & /*geom*/
      32 && h !== (h = /*geom*/
      e[5].points.map(Po).join(" "))) && i(p, "points", h), (!b || U[0] & /*computedStyle*/
      2) && i(
        y,
        "style",
        /*computedStyle*/
        e[1]
      ), (!b || U[0] & /*geom*/
      32 && d !== (d = /*geom*/
      e[5].points.map(Lo).join(" "))) && i(y, "points", d), U[0] & /*geom, viewportScale, selectedCorners, onEnterHandle, onLeaveHandle, onHandlePointerDown, grab, onHandlePointerUp*/
      134322472) {
        M = Ne(
          /*geom*/
          e[5].points
        );
        let H;
        for (H = 0; H < M.length; H += 1) {
          const T = vo(e, M, H);
          S[H] ? (S[H].p(T, U), W(S[H], 1)) : (S[H] = To(T), S[H].c(), W(S[H], 1), S[H].m(A.parentNode, A));
        }
        for (Be(), H = M.length; H < S.length; H += 1)
          N(H);
        Ue();
      }
      /*visibleMidpoint*/
      e[6] !== void 0 && !/*isHandleHovered*/
      e[7] ? G ? (G.p(at(e), U), U[0] & /*visibleMidpoint, isHandleHovered*/
      192 && W(G, 1)) : (G = So(at(e)), G.c(), W(G, 1), G.m(L.parentNode, L)) : G && (Be(), ee(G, 1, 1, () => {
        G = null;
      }), Ue());
    },
    i(I) {
      if (!b) {
        for (let U = 0; U < M.length; U += 1)
          W(S[U]);
        W(G), b = !0;
      }
    },
    o(I) {
      S = S.filter(Boolean);
      for (let U = 0; U < S.length; U += 1)
        ee(S[U]);
      ee(G), b = !1;
    },
    d(I) {
      I && (j(n), j(u), j(p), j(g), j(y), j(E), j(A), j(L)), k && k.d(), _ && _.d(), Hn(S, I), G && G.d(I), m = !1, Se(w);
    }
  };
}
function Ai(e) {
  let n, t;
  return n = new fn({
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
          Ni,
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
      he(n, o, s), t = !0;
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
      t || (W(n.$$.fragment, o), t = !0);
    },
    o(o) {
      ee(n.$$.fragment, o), t = !1;
    },
    d(o) {
      de(n, o);
    }
  };
}
const Di = 250, ji = 1e3, Xi = 12, Un = 4.5, Mo = (e) => e.join(","), Po = (e) => e.join(","), Lo = (e) => e.join(",");
function Bi(e, n, t) {
  let o, s, l;
  const f = We();
  let { shape: r } = n, { computedStyle: a } = n, { transform: c } = n, { viewportScale: u = 1 } = n, { svgEl: p } = n, h, g = !1, y, d = [];
  const E = () => t(7, g = !0), A = () => t(7, g = !1), L = (H) => {
    if (d.length > 0 || !s.some((V) => V.visible)) {
      t(6, h = void 0);
      return;
    }
    const [T, q] = c.elementToImage(H.offsetX, H.offsetY), C = (V) => Math.pow(V[0] - T, 2) + Math.pow(V[1] - q, 2), B = o.points.reduce((V, Q) => C(Q) < C(V) ? Q : V), Z = s.filter((V) => V.visible).reduce((V, Q) => C(Q.point) < C(V.point) ? Q : V), R = Math.pow(ji / u, 2);
    C(B) < R || C(Z.point) < R ? t(6, h = s.indexOf(Z)) : t(6, h = void 0);
  }, b = () => {
    document.activeElement !== p && p.focus();
  }, m = () => {
    t(8, d = []), b();
  }, w = (H) => {
    t(7, g = !0), H.preventDefault(), H.stopPropagation(), y = performance.now();
  }, k = (H) => (T) => {
    if (!y || ln || performance.now() - y > Di) return;
    const q = d.includes(H);
    T.metaKey || T.ctrlKey || T.shiftKey ? q ? t(8, d = d.filter((C) => C !== H)) : t(8, d = [...d, H]) : q && d.length > 1 ? t(8, d = [H]) : q ? t(8, d = []) : t(8, d = [H]), b();
  }, _ = (H, T, q) => {
    b();
    let C;
    const B = H.geometry;
    d.length > 1 ? C = B.points.map(([R, D], V) => d.includes(V) ? [R + q[0], D + q[1]] : [R, D]) : T === "SHAPE" ? C = B.points.map(([R, D]) => [R + q[0], D + q[1]]) : C = B.points.map(([R, D], V) => T === `HANDLE-${V}` ? [R + q[0], D + q[1]] : [R, D]);
    const Z = sn(C);
    return { ...H, geometry: { points: C, bounds: Z } };
  }, M = (H) => async (T) => {
    T.stopPropagation();
    const q = [
      ...o.points.slice(0, H + 1),
      s[H].point,
      ...o.points.slice(H + 1)
    ], C = sn(q);
    f("change", { ...r, geometry: { points: q, bounds: C } }), await Bn();
    const B = [...document.querySelectorAll(".a9s-handle")][H + 1];
    if (B != null && B.firstChild) {
      const Z = new PointerEvent(
        "pointerdown",
        {
          bubbles: !0,
          cancelable: !0,
          clientX: T.clientX,
          clientY: T.clientY,
          pointerId: T.pointerId,
          pointerType: T.pointerType,
          isPrimary: T.isPrimary,
          buttons: T.buttons
        }
      );
      B.firstChild.dispatchEvent(Z);
    }
  }, S = () => {
    if (o.points.length - d.length < 3) return;
    const H = o.points.filter((q, C) => !d.includes(C)), T = sn(H);
    f("change", { ...r, geometry: { points: H, bounds: T } }), t(8, d = []);
  };
  $e(() => {
    if (ln) return;
    const H = (T) => {
      (T.key === "Delete" || T.key === "Backspace") && (T.preventDefault(), S());
    };
    return p.addEventListener("pointermove", L), p.addEventListener("keydown", H), () => {
      p.removeEventListener("pointermove", L), p.removeEventListener("keydown", H);
    };
  });
  const N = `polygon-mask-${Math.random().toString(36).substring(2, 12)}`;
  function G(H) {
    pe.call(this, e, H);
  }
  function I(H) {
    pe.call(this, e, H);
  }
  function U(H) {
    pe.call(this, e, H);
  }
  return e.$$set = (H) => {
    "shape" in H && t(0, r = H.shape), "computedStyle" in H && t(1, a = H.computedStyle), "transform" in H && t(2, c = H.transform), "viewportScale" in H && t(3, u = H.viewportScale), "svgEl" in H && t(4, p = H.svgEl);
  }, e.$$.update = () => {
    e.$$.dirty[0] & /*shape*/
    1 && t(5, o = r.geometry), e.$$.dirty[0] & /*geom, viewportScale*/
    40 && t(10, s = ln ? [] : o.points.map((H, T) => {
      const q = T === o.points.length - 1 ? o.points[0] : o.points[T + 1], C = (H[0] + q[0]) / 2, B = (H[1] + q[1]) / 2, R = Math.sqrt(Math.pow(q[0] - C, 2) + Math.pow(q[1] - B, 2)) > Xi / u;
      return { point: [C, B], visible: R };
    })), e.$$.dirty[0] & /*geom, viewportScale*/
    40 && t(9, l = Rt(o.bounds, Un / u));
  }, [
    r,
    a,
    c,
    u,
    p,
    o,
    h,
    g,
    d,
    l,
    s,
    E,
    A,
    L,
    m,
    w,
    k,
    _,
    M,
    N,
    G,
    I,
    U
  ];
}
class Ui extends Le {
  constructor(n) {
    super(), Pe(
      this,
      n,
      Bi,
      Ai,
      Me,
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
function Gi(e) {
  let n, t, o, s, l, f, r, a, c, u, p, h, g, y, d, E, A, L, b, m, w, k, _, M, S, N, G, I, U, H, T, q, C, B, Z, R, D, V, Q, ne, P, K, oe, $, me, le, ce, ae, Te, ue, Ie, be, F, Qe, on;
  return le = new Ae({
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
  }), le.$on("pointerdown", function() {
    se(
      /*grab*/
      e[12]("TOP_LEFT")
    ) && e[12]("TOP_LEFT").apply(this, arguments);
  }), ae = new Ae({
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
  }), ae.$on("pointerdown", function() {
    se(
      /*grab*/
      e[12]("TOP_RIGHT")
    ) && e[12]("TOP_RIGHT").apply(this, arguments);
  }), ue = new Ae({
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
    se(
      /*grab*/
      e[12]("BOTTOM_RIGHT")
    ) && e[12]("BOTTOM_RIGHT").apply(this, arguments);
  }), be = new Ae({
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
  }), be.$on("pointerdown", function() {
    se(
      /*grab*/
      e[12]("BOTTOM_LEFT")
    ) && e[12]("BOTTOM_LEFT").apply(this, arguments);
  }), {
    c() {
      n = z("defs"), t = z("mask"), o = z("rect"), a = z("rect"), g = te(), y = z("rect"), b = te(), m = z("rect"), S = te(), N = z("rect"), H = te(), T = z("rect"), Z = te(), R = z("rect"), ne = te(), P = z("rect"), me = te(), ge(le.$$.fragment), ce = te(), ge(ae.$$.fragment), Te = te(), ge(ue.$$.fragment), Ie = te(), ge(be.$$.fragment), i(o, "class", "rect-mask-bg svelte-1njczvj"), i(o, "x", s = /*mask*/
      e[6].x), i(o, "y", l = /*mask*/
      e[6].y), i(o, "width", f = /*mask*/
      e[6].w), i(o, "height", r = /*mask*/
      e[6].h), i(a, "class", "rect-mask-fg svelte-1njczvj"), i(a, "x", c = /*geom*/
      e[5].x), i(a, "y", u = /*geom*/
      e[5].y), i(a, "width", p = /*geom*/
      e[5].w), i(a, "height", h = /*geom*/
      e[5].h), i(
        t,
        "id",
        /*maskId*/
        e[8]
      ), i(t, "class", "a9s-rectangle-editor-mask svelte-1njczvj"), i(y, "class", "a9s-outer"), i(y, "mask", `url(#${/*maskId*/
      e[8]})`), i(y, "x", d = /*geom*/
      e[5].x), i(y, "y", E = /*geom*/
      e[5].y), i(y, "width", A = /*geom*/
      e[5].w), i(y, "height", L = /*geom*/
      e[5].h), i(m, "class", "a9s-inner a9s-shape-handle"), i(
        m,
        "style",
        /*computedStyle*/
        e[1]
      ), i(m, "x", w = /*geom*/
      e[5].x), i(m, "y", k = /*geom*/
      e[5].y), i(m, "width", _ = /*geom*/
      e[5].w), i(m, "height", M = /*geom*/
      e[5].h), i(N, "class", "a9s-edge-handle a9s-edge-handle-top"), i(N, "x", G = /*geom*/
      e[5].x), i(N, "y", I = /*geom*/
      e[5].y), i(N, "height", 1), i(N, "width", U = /*geom*/
      e[5].w), i(T, "class", "a9s-edge-handle a9s-edge-handle-right"), i(T, "x", q = /*geom*/
      e[5].x + /*geom*/
      e[5].w), i(T, "y", C = /*geom*/
      e[5].y), i(T, "height", B = /*geom*/
      e[5].h), i(T, "width", 1), i(R, "class", "a9s-edge-handle a9s-edge-handle-bottom"), i(R, "x", D = /*geom*/
      e[5].x), i(R, "y", V = /*geom*/
      e[5].y + /*geom*/
      e[5].h), i(R, "height", 1), i(R, "width", Q = /*geom*/
      e[5].w), i(P, "class", "a9s-edge-handle a9s-edge-handle-left"), i(P, "x", K = /*geom*/
      e[5].x), i(P, "y", oe = /*geom*/
      e[5].y), i(P, "height", $ = /*geom*/
      e[5].h), i(P, "width", 1);
    },
    m(Y, O) {
      X(Y, n, O), J(n, t), J(t, o), J(t, a), X(Y, g, O), X(Y, y, O), X(Y, b, O), X(Y, m, O), X(Y, S, O), X(Y, N, O), X(Y, H, O), X(Y, T, O), X(Y, Z, O), X(Y, R, O), X(Y, ne, O), X(Y, P, O), X(Y, me, O), he(le, Y, O), X(Y, ce, O), he(ae, Y, O), X(Y, Te, O), he(ue, Y, O), X(Y, Ie, O), he(be, Y, O), F = !0, Qe || (on = [
        x(y, "pointerdown", function() {
          se(
            /*grab*/
            e[12]("SHAPE")
          ) && e[12]("SHAPE").apply(this, arguments);
        }),
        x(m, "pointerdown", function() {
          se(
            /*grab*/
            e[12]("SHAPE")
          ) && e[12]("SHAPE").apply(this, arguments);
        }),
        x(N, "pointerdown", function() {
          se(
            /*grab*/
            e[12]("TOP")
          ) && e[12]("TOP").apply(this, arguments);
        }),
        x(T, "pointerdown", function() {
          se(
            /*grab*/
            e[12]("RIGHT")
          ) && e[12]("RIGHT").apply(this, arguments);
        }),
        x(R, "pointerdown", function() {
          se(
            /*grab*/
            e[12]("BOTTOM")
          ) && e[12]("BOTTOM").apply(this, arguments);
        }),
        x(P, "pointerdown", function() {
          se(
            /*grab*/
            e[12]("LEFT")
          ) && e[12]("LEFT").apply(this, arguments);
        })
      ], Qe = !0);
    },
    p(Y, O) {
      e = Y, (!F || O & /*mask*/
      64 && s !== (s = /*mask*/
      e[6].x)) && i(o, "x", s), (!F || O & /*mask*/
      64 && l !== (l = /*mask*/
      e[6].y)) && i(o, "y", l), (!F || O & /*mask*/
      64 && f !== (f = /*mask*/
      e[6].w)) && i(o, "width", f), (!F || O & /*mask*/
      64 && r !== (r = /*mask*/
      e[6].h)) && i(o, "height", r), (!F || O & /*geom*/
      32 && c !== (c = /*geom*/
      e[5].x)) && i(a, "x", c), (!F || O & /*geom*/
      32 && u !== (u = /*geom*/
      e[5].y)) && i(a, "y", u), (!F || O & /*geom*/
      32 && p !== (p = /*geom*/
      e[5].w)) && i(a, "width", p), (!F || O & /*geom*/
      32 && h !== (h = /*geom*/
      e[5].h)) && i(a, "height", h), (!F || O & /*geom*/
      32 && d !== (d = /*geom*/
      e[5].x)) && i(y, "x", d), (!F || O & /*geom*/
      32 && E !== (E = /*geom*/
      e[5].y)) && i(y, "y", E), (!F || O & /*geom*/
      32 && A !== (A = /*geom*/
      e[5].w)) && i(y, "width", A), (!F || O & /*geom*/
      32 && L !== (L = /*geom*/
      e[5].h)) && i(y, "height", L), (!F || O & /*computedStyle*/
      2) && i(
        m,
        "style",
        /*computedStyle*/
        e[1]
      ), (!F || O & /*geom*/
      32 && w !== (w = /*geom*/
      e[5].x)) && i(m, "x", w), (!F || O & /*geom*/
      32 && k !== (k = /*geom*/
      e[5].y)) && i(m, "y", k), (!F || O & /*geom*/
      32 && _ !== (_ = /*geom*/
      e[5].w)) && i(m, "width", _), (!F || O & /*geom*/
      32 && M !== (M = /*geom*/
      e[5].h)) && i(m, "height", M), (!F || O & /*geom*/
      32 && G !== (G = /*geom*/
      e[5].x)) && i(N, "x", G), (!F || O & /*geom*/
      32 && I !== (I = /*geom*/
      e[5].y)) && i(N, "y", I), (!F || O & /*geom*/
      32 && U !== (U = /*geom*/
      e[5].w)) && i(N, "width", U), (!F || O & /*geom*/
      32 && q !== (q = /*geom*/
      e[5].x + /*geom*/
      e[5].w)) && i(T, "x", q), (!F || O & /*geom*/
      32 && C !== (C = /*geom*/
      e[5].y)) && i(T, "y", C), (!F || O & /*geom*/
      32 && B !== (B = /*geom*/
      e[5].h)) && i(T, "height", B), (!F || O & /*geom*/
      32 && D !== (D = /*geom*/
      e[5].x)) && i(R, "x", D), (!F || O & /*geom*/
      32 && V !== (V = /*geom*/
      e[5].y + /*geom*/
      e[5].h)) && i(R, "y", V), (!F || O & /*geom*/
      32 && Q !== (Q = /*geom*/
      e[5].w)) && i(R, "width", Q), (!F || O & /*geom*/
      32 && K !== (K = /*geom*/
      e[5].x)) && i(P, "x", K), (!F || O & /*geom*/
      32 && oe !== (oe = /*geom*/
      e[5].y)) && i(P, "y", oe), (!F || O & /*geom*/
      32 && $ !== ($ = /*geom*/
      e[5].h)) && i(P, "height", $);
      const Ge = {};
      O & /*geom*/
      32 && (Ge.x = /*geom*/
      e[5].x), O & /*geom*/
      32 && (Ge.y = /*geom*/
      e[5].y), O & /*viewportScale*/
      8 && (Ge.scale = /*viewportScale*/
      e[3]), le.$set(Ge);
      const qe = {};
      O & /*geom*/
      32 && (qe.x = /*geom*/
      e[5].x + /*geom*/
      e[5].w), O & /*geom*/
      32 && (qe.y = /*geom*/
      e[5].y), O & /*viewportScale*/
      8 && (qe.scale = /*viewportScale*/
      e[3]), ae.$set(qe);
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
      const ze = {};
      O & /*geom*/
      32 && (ze.x = /*geom*/
      e[5].x), O & /*geom*/
      32 && (ze.y = /*geom*/
      e[5].y + /*geom*/
      e[5].h), O & /*viewportScale*/
      8 && (ze.scale = /*viewportScale*/
      e[3]), be.$set(ze);
    },
    i(Y) {
      F || (W(le.$$.fragment, Y), W(ae.$$.fragment, Y), W(ue.$$.fragment, Y), W(be.$$.fragment, Y), F = !0);
    },
    o(Y) {
      ee(le.$$.fragment, Y), ee(ae.$$.fragment, Y), ee(ue.$$.fragment, Y), ee(be.$$.fragment, Y), F = !1;
    },
    d(Y) {
      Y && (j(n), j(g), j(y), j(b), j(m), j(S), j(N), j(H), j(T), j(Z), j(R), j(ne), j(P), j(me), j(ce), j(Te), j(Ie)), de(le, Y), de(ae, Y), de(ue, Y), de(be, Y), Qe = !1, Se(on);
    }
  };
}
function qi(e) {
  let n, t;
  return n = new fn({
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
          Gi,
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
      he(n, o, s), t = !0;
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
      t || (W(n.$$.fragment, o), t = !0);
    },
    o(o) {
      ee(n.$$.fragment, o), t = !1;
    },
    d(o) {
      de(n, o);
    }
  };
}
function Yi(e, n, t) {
  let o, s, { shape: l } = n, { computedStyle: f } = n, { transform: r } = n, { viewportScale: a = 1 } = n, { svgEl: c } = n;
  const u = (d, E, A) => {
    const L = d.geometry.bounds;
    let [b, m] = [L.minX, L.minY], [w, k] = [L.maxX, L.maxY];
    const [_, M] = A;
    if (E === "SHAPE")
      b += _, w += _, m += M, k += M;
    else {
      switch (E) {
        case "TOP":
        case "TOP_LEFT":
        case "TOP_RIGHT": {
          m += M;
          break;
        }
        case "BOTTOM":
        case "BOTTOM_LEFT":
        case "BOTTOM_RIGHT": {
          k += M;
          break;
        }
      }
      switch (E) {
        case "LEFT":
        case "TOP_LEFT":
        case "BOTTOM_LEFT": {
          b += _;
          break;
        }
        case "RIGHT":
        case "TOP_RIGHT":
        case "BOTTOM_RIGHT": {
          w += _;
          break;
        }
      }
    }
    const S = Math.min(b, w), N = Math.min(m, k), G = Math.abs(w - b), I = Math.abs(k - m);
    return {
      ...d,
      geometry: {
        x: S,
        y: N,
        w: G,
        h: I,
        bounds: {
          minX: S,
          minY: N,
          maxX: S + G,
          maxY: N + I
        }
      }
    };
  }, p = `rect-mask-${Math.random().toString(36).substring(2, 12)}`;
  function h(d) {
    pe.call(this, e, d);
  }
  function g(d) {
    pe.call(this, e, d);
  }
  function y(d) {
    pe.call(this, e, d);
  }
  return e.$$set = (d) => {
    "shape" in d && t(0, l = d.shape), "computedStyle" in d && t(1, f = d.computedStyle), "transform" in d && t(2, r = d.transform), "viewportScale" in d && t(3, a = d.viewportScale), "svgEl" in d && t(4, c = d.svgEl);
  }, e.$$.update = () => {
    e.$$.dirty & /*shape*/
    1 && t(5, o = l.geometry), e.$$.dirty & /*geom, viewportScale*/
    40 && t(6, s = Rt(o.bounds, 2 / a));
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
    h,
    g,
    y
  ];
}
let zi = class extends Le {
  constructor(n) {
    super(), Pe(this, n, Yi, qi, Me, {
      shape: 0,
      computedStyle: 1,
      transform: 2,
      viewportScale: 3,
      svgEl: 4
    });
  }
};
var Oo = Object.prototype.hasOwnProperty;
function Lt(e, n) {
  var t, o;
  if (e === n) return !0;
  if (e && n && (t = e.constructor) === n.constructor) {
    if (t === Date) return e.getTime() === n.getTime();
    if (t === RegExp) return e.toString() === n.toString();
    if (t === Array) {
      if ((o = e.length) === n.length)
        for (; o-- && Lt(e[o], n[o]); ) ;
      return o === -1;
    }
    if (!t || typeof e == "object") {
      o = 0;
      for (t in e)
        if (Oo.call(e, t) && ++o && !Oo.call(n, t) || !(t in n) || !Lt(e[t], n[t])) return !1;
      return Object.keys(n).length === o;
    }
  }
  return e !== e && n !== n;
}
const Vi = 12, Ki = (e, n) => e.polygons.reduce((t, o, s) => {
  const l = o.rings.reduce((f, r, a) => {
    const c = r.points.map((u, p) => {
      const h = p === r.points.length - 1 ? r.points[0] : r.points[p + 1], g = (u[0] + h[0]) / 2, y = (u[1] + h[1]) / 2, E = Math.sqrt(
        Math.pow(h[0] - g, 2) + Math.pow(h[1] - y, 2)
      ) > Vi / n;
      return { point: [g, y], visible: E, elementIdx: s, ringIdx: a, pointIdx: p };
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
function Ho(e, n, t) {
  const o = e.slice();
  return o[30] = n[t], o[32] = t, o;
}
function Io(e, n, t) {
  const o = e.slice();
  return o[33] = n[t], o[35] = t, o;
}
function Co(e, n, t) {
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
function Ro(e) {
  let n, t, o, s;
  return {
    c() {
      n = z("circle"), i(n, "cx", t = /*point*/
      e[29][0]), i(n, "cy", o = /*point*/
      e[29][1]), i(n, "r", s = Gn / /*viewportScale*/
      e[3]), i(n, "class", "svelte-1vxo6dc");
    },
    m(l, f) {
      X(l, n, f);
    },
    p(l, f) {
      f[0] & /*midpoints, visibleMidpoint*/
      1088 && t !== (t = /*point*/
      l[29][0]) && i(n, "cx", t), f[0] & /*midpoints, visibleMidpoint*/
      1088 && o !== (o = /*point*/
      l[29][1]) && i(n, "cy", o), f[0] & /*viewportScale*/
      8 && s !== (s = Gn / /*viewportScale*/
      l[3]) && i(n, "r", s);
    },
    d(l) {
      l && j(n);
    }
  };
}
function No(e) {
  let n, t, o, s, l, f, r, a, c, u;
  return {
    c() {
      n = z("mask"), t = z("rect"), r = z("circle"), i(t, "x", o = /*mask*/
      e[9].x), i(t, "y", s = /*mask*/
      e[9].y), i(t, "width", l = /*mask*/
      e[9].w), i(t, "height", f = /*mask*/
      e[9].h), i(t, "class", "svelte-1vxo6dc"), i(r, "cx", a = /*point*/
      e[29][0]), i(r, "cy", c = /*point*/
      e[29][1]), i(r, "r", u = Gn / /*viewportScale*/
      e[3]), i(r, "class", "svelte-1vxo6dc"), i(n, "id", `${/*maskId*/
      e[18]}-${/*elementIdx*/
      e[32]}-inner`), i(n, "class", "a9s-multipolygon-editor-mask svelte-1vxo6dc");
    },
    m(p, h) {
      X(p, n, h), J(n, t), J(n, r);
    },
    p(p, h) {
      h[0] & /*mask*/
      512 && o !== (o = /*mask*/
      p[9].x) && i(t, "x", o), h[0] & /*mask*/
      512 && s !== (s = /*mask*/
      p[9].y) && i(t, "y", s), h[0] & /*mask*/
      512 && l !== (l = /*mask*/
      p[9].w) && i(t, "width", l), h[0] & /*mask*/
      512 && f !== (f = /*mask*/
      p[9].h) && i(t, "height", f), h[0] & /*midpoints, visibleMidpoint*/
      1088 && a !== (a = /*point*/
      p[29][0]) && i(r, "cx", a), h[0] & /*midpoints, visibleMidpoint*/
      1088 && c !== (c = /*point*/
      p[29][1]) && i(r, "cy", c), h[0] & /*viewportScale*/
      8 && u !== (u = Gn / /*viewportScale*/
      p[3]) && i(r, "r", u);
    },
    d(p) {
      p && j(n);
    }
  };
}
function Ao(e) {
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
  return n = new Ae({
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
      ge(n.$$.fragment);
    },
    m(s, l) {
      he(n, s, l), t = !0;
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
      t || (W(n.$$.fragment, s), t = !0);
    },
    o(s) {
      ee(n.$$.fragment, s), t = !1;
    },
    d(s) {
      de(n, s);
    }
  };
}
function Do(e) {
  let n, t, o = Ne(
    /*ring*/
    e[33].points
  ), s = [];
  for (let f = 0; f < o.length; f += 1)
    s[f] = Ao(Co(e, o, f));
  const l = (f) => ee(s[f], 1, 1, () => {
    s[f] = null;
  });
  return {
    c() {
      for (let f = 0; f < s.length; f += 1)
        s[f].c();
      n = Ce();
    },
    m(f, r) {
      for (let a = 0; a < s.length; a += 1)
        s[a] && s[a].m(f, r);
      X(f, n, r), t = !0;
    },
    p(f, r) {
      if (r[0] & /*geom, viewportScale, selectedCorners, onEnterHandle, onLeaveHandle, onHandlePointerDown, grab, onHandlePointerUp*/
      268491048) {
        o = Ne(
          /*ring*/
          f[33].points
        );
        let a;
        for (a = 0; a < o.length; a += 1) {
          const c = Co(f, o, a);
          s[a] ? (s[a].p(c, r), W(s[a], 1)) : (s[a] = Ao(c), s[a].c(), W(s[a], 1), s[a].m(n.parentNode, n));
        }
        for (Be(), a = o.length; a < s.length; a += 1)
          l(a);
        Ue();
      }
    },
    i(f) {
      if (!t) {
        for (let r = 0; r < o.length; r += 1)
          W(s[r]);
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
      f && j(n), Hn(s, f);
    }
  };
}
function jo(e) {
  let n, t, o, s, l, f, r, a, c, u, p, h, g, y, d, E, A, L = (
    /*visibleMidpoint*/
    e[6] !== void 0 && !/*isHandleHovered*/
    e[7] && Ro(dt(e))
  ), b = (
    /*visibleMidpoint*/
    e[6] !== void 0 && !/*isHandleHovered*/
    e[7] && No(ht(e))
  ), m = Ne(
    /*element*/
    e[30].rings
  ), w = [];
  for (let _ = 0; _ < m.length; _ += 1)
    w[_] = Do(Io(e, m, _));
  const k = (_) => ee(w[_], 1, 1, () => {
    w[_] = null;
  });
  return {
    c() {
      n = z("g"), t = z("defs"), o = z("mask"), s = z("rect"), c = z("path"), L && L.c(), b && b.c(), p = z("path"), g = z("path");
      for (let _ = 0; _ < w.length; _ += 1)
        w[_].c();
      i(s, "x", l = /*mask*/
      e[9].x), i(s, "y", f = /*mask*/
      e[9].y), i(s, "width", r = /*mask*/
      e[9].w), i(s, "height", a = /*mask*/
      e[9].h), i(s, "class", "svelte-1vxo6dc"), i(c, "d", u = _n(
        /*element*/
        e[30]
      )), i(c, "class", "svelte-1vxo6dc"), i(o, "id", `${/*maskId*/
      e[18]}-${/*elementIdx*/
      e[32]}-outer`), i(o, "class", "a9s-multipolygon-editor-mask svelte-1vxo6dc"), i(p, "class", "a9s-outer"), i(p, "mask", `url(#${/*maskId*/
      e[18]}-${/*elementIdx*/
      e[32]}-outer)`), i(p, "fill-rule", "evenodd"), i(p, "d", h = _n(
        /*element*/
        e[30]
      )), i(g, "class", "a9s-inner"), i(g, "mask", `url(#${/*maskId*/
      e[18]}-${/*elementIdx*/
      e[32]}-inner)`), i(
        g,
        "style",
        /*computedStyle*/
        e[1]
      ), i(g, "fill-rule", "evenodd"), i(g, "d", y = _n(
        /*element*/
        e[30]
      ));
    },
    m(_, M) {
      X(_, n, M), J(n, t), J(t, o), J(o, s), J(o, c), L && L.m(o, null), b && b.m(t, null), J(n, p), J(n, g);
      for (let S = 0; S < w.length; S += 1)
        w[S] && w[S].m(n, null);
      d = !0, E || (A = [
        x(
          p,
          "pointerup",
          /*onShapePointerUp*/
          e[13]
        ),
        x(p, "pointerdown", function() {
          se(
            /*grab*/
            e[28]("SHAPE")
          ) && e[28]("SHAPE").apply(this, arguments);
        }),
        x(
          g,
          "pointerup",
          /*onShapePointerUp*/
          e[13]
        ),
        x(g, "pointerdown", function() {
          se(
            /*grab*/
            e[28]("SHAPE")
          ) && e[28]("SHAPE").apply(this, arguments);
        })
      ], E = !0);
    },
    p(_, M) {
      if (e = _, (!d || M[0] & /*mask*/
      512 && l !== (l = /*mask*/
      e[9].x)) && i(s, "x", l), (!d || M[0] & /*mask*/
      512 && f !== (f = /*mask*/
      e[9].y)) && i(s, "y", f), (!d || M[0] & /*mask*/
      512 && r !== (r = /*mask*/
      e[9].w)) && i(s, "width", r), (!d || M[0] & /*mask*/
      512 && a !== (a = /*mask*/
      e[9].h)) && i(s, "height", a), (!d || M[0] & /*geom*/
      32 && u !== (u = _n(
        /*element*/
        e[30]
      ))) && i(c, "d", u), /*visibleMidpoint*/
      e[6] !== void 0 && !/*isHandleHovered*/
      e[7] ? L ? L.p(dt(e), M) : (L = Ro(dt(e)), L.c(), L.m(o, null)) : L && (L.d(1), L = null), /*visibleMidpoint*/
      e[6] !== void 0 && !/*isHandleHovered*/
      e[7] ? b ? b.p(ht(e), M) : (b = No(ht(e)), b.c(), b.m(t, null)) : b && (b.d(1), b = null), (!d || M[0] & /*geom*/
      32 && h !== (h = _n(
        /*element*/
        e[30]
      ))) && i(p, "d", h), (!d || M[0] & /*computedStyle*/
      2) && i(
        g,
        "style",
        /*computedStyle*/
        e[1]
      ), (!d || M[0] & /*geom*/
      32 && y !== (y = _n(
        /*element*/
        e[30]
      ))) && i(g, "d", y), M[0] & /*geom, viewportScale, selectedCorners, onEnterHandle, onLeaveHandle, onHandlePointerDown, grab, onHandlePointerUp*/
      268491048) {
        m = Ne(
          /*element*/
          e[30].rings
        );
        let S;
        for (S = 0; S < m.length; S += 1) {
          const N = Io(e, m, S);
          w[S] ? (w[S].p(N, M), W(w[S], 1)) : (w[S] = Do(N), w[S].c(), W(w[S], 1), w[S].m(n, null));
        }
        for (Be(), S = m.length; S < w.length; S += 1)
          k(S);
        Ue();
      }
    },
    i(_) {
      if (!d) {
        for (let M = 0; M < m.length; M += 1)
          W(w[M]);
        d = !0;
      }
    },
    o(_) {
      w = w.filter(Boolean);
      for (let M = 0; M < w.length; M += 1)
        ee(w[M]);
      d = !1;
    },
    d(_) {
      _ && j(n), L && L.d(), b && b.d(), Hn(w, _), E = !1, Se(A);
    }
  };
}
function Xo(e) {
  let n, t;
  return n = new Nt({
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
      ge(n.$$.fragment);
    },
    m(o, s) {
      he(n, o, s), t = !0;
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
      t || (W(n.$$.fragment, o), t = !0);
    },
    o(o) {
      ee(n.$$.fragment, o), t = !1;
    },
    d(o) {
      de(n, o);
    }
  };
}
function Fi(e) {
  let n, t, o, s = Ne(
    /*geom*/
    e[5].polygons
  ), l = [];
  for (let a = 0; a < s.length; a += 1)
    l[a] = jo(Ho(e, s, a));
  const f = (a) => ee(l[a], 1, 1, () => {
    l[a] = null;
  });
  let r = (
    /*visibleMidpoint*/
    e[6] !== void 0 && !/*isHandleHovered*/
    e[7] && Xo(pt(e))
  );
  return {
    c() {
      for (let a = 0; a < l.length; a += 1)
        l[a].c();
      n = te(), r && r.c(), t = Ce();
    },
    m(a, c) {
      for (let u = 0; u < l.length; u += 1)
        l[u] && l[u].m(a, c);
      X(a, n, c), r && r.m(a, c), X(a, t, c), o = !0;
    },
    p(a, c) {
      if (c[0] & /*geom, viewportScale, selectedCorners, onEnterHandle, onLeaveHandle, onHandlePointerDown, grab, onHandlePointerUp, maskId, computedStyle, onShapePointerUp, midpoints, visibleMidpoint, mask, isHandleHovered*/
      268763114) {
        s = Ne(
          /*geom*/
          a[5].polygons
        );
        let u;
        for (u = 0; u < s.length; u += 1) {
          const p = Ho(a, s, u);
          l[u] ? (l[u].p(p, c), W(l[u], 1)) : (l[u] = jo(p), l[u].c(), W(l[u], 1), l[u].m(n.parentNode, n));
        }
        for (Be(), u = s.length; u < l.length; u += 1)
          f(u);
        Ue();
      }
      /*visibleMidpoint*/
      a[6] !== void 0 && !/*isHandleHovered*/
      a[7] ? r ? (r.p(pt(a), c), c[0] & /*visibleMidpoint, isHandleHovered*/
      192 && W(r, 1)) : (r = Xo(pt(a)), r.c(), W(r, 1), r.m(t.parentNode, t)) : r && (Be(), ee(r, 1, 1, () => {
        r = null;
      }), Ue());
    },
    i(a) {
      if (!o) {
        for (let c = 0; c < s.length; c += 1)
          W(l[c]);
        W(r), o = !0;
      }
    },
    o(a) {
      l = l.filter(Boolean);
      for (let c = 0; c < l.length; c += 1)
        ee(l[c]);
      ee(r), o = !1;
    },
    d(a) {
      a && (j(n), j(t)), Hn(l, a), r && r.d(a);
    }
  };
}
function Zi(e) {
  let n, t;
  return n = new fn({
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
          Fi,
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
      he(n, o, s), t = !0;
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
      t || (W(n.$$.fragment, o), t = !0);
    },
    o(o) {
      ee(n.$$.fragment, o), t = !1;
    },
    d(o) {
      de(n, o);
    }
  };
}
const Wi = 250, Qi = 1e3, Gn = 4.5;
function Ji(e, n, t) {
  let o, s, l;
  const f = We();
  let { shape: r } = n, { computedStyle: a } = n, { transform: c } = n, { viewportScale: u = 1 } = n, { svgEl: p } = n, h, g = !1, y, d = [];
  const E = () => t(7, g = !0), A = () => t(7, g = !1), L = (T) => {
    if (d.length > 0 || !s.some((Q) => Q.visible)) {
      t(6, h = void 0);
      return;
    }
    const [q, C] = c.elementToImage(T.offsetX, T.offsetY), B = (Q) => Math.pow(Q[0] - q, 2) + Math.pow(Q[1] - C, 2), Z = mi(o).reduce((Q, ne) => B(ne) < B(Q) ? ne : Q), R = s.filter((Q) => Q.visible).reduce((Q, ne) => B(ne.point) < B(Q.point) ? ne : Q), D = Math.pow(Qi / u, 2);
    B(Z) < D || B(R.point) < D ? t(6, h = s.indexOf(R)) : t(6, h = void 0);
  }, b = () => {
    document.activeElement !== p && p.focus();
  }, m = () => {
    t(8, d = []), b();
  }, w = (T) => {
    t(7, g = !0), T.preventDefault(), T.stopPropagation(), y = performance.now();
  }, k = (T, q, C) => (B) => {
    if (!y || ln || performance.now() - y > Wi) return;
    const Z = (D) => D.polygon === T && D.ring === q && D.point === C, R = d.some(Z);
    B.metaKey || B.ctrlKey || B.shiftKey ? R ? t(8, d = d.filter((D) => !Z(D))) : t(8, d = [...d, { polygon: T, ring: q, point: C }]) : R && d.length > 1 ? t(8, d = [{ polygon: T, ring: q, point: C }]) : R ? t(8, d = []) : t(8, d = [{ polygon: T, ring: q, point: C }]), b();
  }, _ = (T, q, C) => {
    b();
    const B = T.geometry.polygons;
    let Z;
    if (q === "SHAPE")
      Z = B.map((R) => {
        const D = R.rings.map((Q, ne) => ({ points: Q.points.map((K, oe) => [K[0] + C[0], K[1] + C[1]]) })), V = sn(D[0].points);
        return { rings: D, bounds: V };
      });
    else {
      const [R, D, V, Q] = q.split("-").map((ne) => parseInt(ne));
      Z = B.map((ne, P) => {
        if (P === D) {
          const K = ne.rings.map(($, me) => me === V ? { points: $.points.map((ce, ae) => ae === Q ? [ce[0] + C[0], ce[1] + C[1]] : ce) } : $), oe = sn(K[0].points);
          return { rings: K, bounds: oe };
        } else
          return ne;
      });
    }
    return {
      ...T,
      geometry: {
        polygons: Z,
        bounds: ft(Z)
      }
    };
  }, M = (T) => async (q) => {
    q.stopPropagation();
    const C = s[T], B = o.polygons.map((R, D) => {
      if (D === C.elementIdx) {
        const V = R.rings.map((ne, P) => P === C.ringIdx ? { points: [
          ...ne.points.slice(0, C.pointIdx + 1),
          C.point,
          ...ne.points.slice(C.pointIdx + 1)
        ] } : ne), Q = sn(V[0].points);
        return { rings: V, bounds: Q };
      } else
        return R;
    });
    f("change", {
      ...r,
      geometry: {
        polygons: B,
        bounds: ft(B)
      }
    }), await Bn();
    const Z = [...document.querySelectorAll(".a9s-handle")][T + 1];
    if (Z != null && Z.firstChild) {
      const R = new PointerEvent(
        "pointerdown",
        {
          bubbles: !0,
          cancelable: !0,
          clientX: q.clientX,
          clientY: q.clientY,
          pointerId: q.pointerId,
          pointerType: q.pointerType,
          isPrimary: q.isPrimary,
          buttons: q.buttons
        }
      );
      Z.firstChild.dispatchEvent(R);
    }
  }, S = () => {
    const T = o.polygons.map((C, B) => {
      if (d.some((R) => R.polygon === B)) {
        const R = C.rings.map((V, Q) => {
          const ne = d.filter((P) => P.polygon === B && P.ring === Q);
          return ne.length && V.points.length - ne.length >= 3 ? { points: V.points.filter((K, oe) => !ne.some(($) => $.point === oe)) } : V;
        }), D = sn(R[0].points);
        return { rings: R, bounds: D };
      } else
        return C;
    });
    !Lt(o.polygons, T) && (f("change", {
      ...r,
      geometry: {
        polygons: T,
        bounds: ft(T)
      }
    }), t(8, d = []));
  };
  $e(() => {
    if (ln) return;
    const T = (q) => {
      (q.key === "Delete" || q.key === "Backspace") && (q.preventDefault(), S());
    };
    return p.addEventListener("pointermove", L), p.addEventListener("keydown", T), () => {
      p.removeEventListener("pointermove", L), p.removeEventListener("keydown", T);
    };
  });
  const N = `polygon-mask-${Math.random().toString(36).substring(2, 12)}`, G = (T, q, C, { polygon: B, ring: Z, point: R }) => B === T && Z === q && R === C;
  function I(T) {
    pe.call(this, e, T);
  }
  function U(T) {
    pe.call(this, e, T);
  }
  function H(T) {
    pe.call(this, e, T);
  }
  return e.$$set = (T) => {
    "shape" in T && t(0, r = T.shape), "computedStyle" in T && t(1, a = T.computedStyle), "transform" in T && t(2, c = T.transform), "viewportScale" in T && t(3, u = T.viewportScale), "svgEl" in T && t(4, p = T.svgEl);
  }, e.$$.update = () => {
    e.$$.dirty[0] & /*shape*/
    1 && t(5, o = r.geometry), e.$$.dirty[0] & /*geom, viewportScale*/
    40 && t(10, s = ln ? [] : Ki(o, u)), e.$$.dirty[0] & /*geom, viewportScale*/
    40 && t(9, l = Rt(o.bounds, Gn / u));
  }, [
    r,
    a,
    c,
    u,
    p,
    o,
    h,
    g,
    d,
    l,
    s,
    E,
    A,
    m,
    w,
    k,
    _,
    M,
    N,
    G,
    I,
    U,
    H
  ];
}
class $i extends Le {
  constructor(n) {
    super(), Pe(
      this,
      n,
      Ji,
      Zi,
      Me,
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
tn.RECTANGLE, tn.POLYGON, tn.MULTIPOLYGON;
typeof navigator > "u" ? !1 : navigator.userAgent.indexOf("Mac OS X") !== -1;
function xi(e) {
  let n, t, o, s, l, f, r, a, c, u, p, h, g, y, d, E, A, L, b, m, w, k, _, M, S, N, G, I, U, H, T, q, C, B, Z;
  return N = new Ae({
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
  }), N.$on("pointerdown", function() {
    se(
      /*grab*/
      e[12]("TOP")
    ) && e[12]("TOP").apply(this, arguments);
  }), I = new Ae({
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
  }), I.$on("pointerdown", function() {
    se(
      /*grab*/
      e[12]("RIGHT")
    ) && e[12]("RIGHT").apply(this, arguments);
  }), H = new Ae({
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
  }), H.$on("pointerdown", function() {
    se(
      /*grab*/
      e[12]("BOTTOM")
    ) && e[12]("BOTTOM").apply(this, arguments);
  }), q = new Ae({
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
  }), q.$on("pointerdown", function() {
    se(
      /*grab*/
      e[12]("LEFT")
    ) && e[12]("LEFT").apply(this, arguments);
  }), {
    c() {
      n = z("defs"), t = z("mask"), o = z("rect"), a = z("ellipse"), g = te(), y = z("ellipse"), b = te(), m = z("ellipse"), S = te(), ge(N.$$.fragment), G = te(), ge(I.$$.fragment), U = te(), ge(H.$$.fragment), T = te(), ge(q.$$.fragment), i(o, "x", s = /*mask*/
      e[6].x), i(o, "y", l = /*mask*/
      e[6].y), i(o, "width", f = /*mask*/
      e[6].w), i(o, "height", r = /*mask*/
      e[6].h), i(o, "class", "svelte-wdm5en"), i(a, "cx", c = /*geom*/
      e[5].cx), i(a, "cy", u = /*geom*/
      e[5].cy), i(a, "rx", p = /*geom*/
      e[5].rx), i(a, "ry", h = /*geom*/
      e[5].ry), i(a, "class", "svelte-wdm5en"), i(
        t,
        "id",
        /*maskId*/
        e[8]
      ), i(t, "class", "a9s-ellipse-editor-mask svelte-wdm5en"), i(y, "class", "a9s-outer"), i(y, "mask", `url(#${/*maskId*/
      e[8]})`), i(y, "cx", d = /*geom*/
      e[5].cx), i(y, "cy", E = /*geom*/
      e[5].cy), i(y, "rx", A = /*geom*/
      e[5].rx), i(y, "ry", L = /*geom*/
      e[5].ry), i(m, "class", "a9s-inner a9s-shape-handle"), i(
        m,
        "style",
        /*computedStyle*/
        e[1]
      ), i(m, "cx", w = /*geom*/
      e[5].cx), i(m, "cy", k = /*geom*/
      e[5].cy), i(m, "rx", _ = /*geom*/
      e[5].rx), i(m, "ry", M = /*geom*/
      e[5].ry);
    },
    m(R, D) {
      X(R, n, D), J(n, t), J(t, o), J(t, a), X(R, g, D), X(R, y, D), X(R, b, D), X(R, m, D), X(R, S, D), he(N, R, D), X(R, G, D), he(I, R, D), X(R, U, D), he(H, R, D), X(R, T, D), he(q, R, D), C = !0, B || (Z = [
        x(y, "pointerdown", function() {
          se(
            /*grab*/
            e[12]("SHAPE")
          ) && e[12]("SHAPE").apply(this, arguments);
        }),
        x(m, "pointerdown", function() {
          se(
            /*grab*/
            e[12]("SHAPE")
          ) && e[12]("SHAPE").apply(this, arguments);
        })
      ], B = !0);
    },
    p(R, D) {
      e = R, (!C || D & /*mask*/
      64 && s !== (s = /*mask*/
      e[6].x)) && i(o, "x", s), (!C || D & /*mask*/
      64 && l !== (l = /*mask*/
      e[6].y)) && i(o, "y", l), (!C || D & /*mask*/
      64 && f !== (f = /*mask*/
      e[6].w)) && i(o, "width", f), (!C || D & /*mask*/
      64 && r !== (r = /*mask*/
      e[6].h)) && i(o, "height", r), (!C || D & /*geom*/
      32 && c !== (c = /*geom*/
      e[5].cx)) && i(a, "cx", c), (!C || D & /*geom*/
      32 && u !== (u = /*geom*/
      e[5].cy)) && i(a, "cy", u), (!C || D & /*geom*/
      32 && p !== (p = /*geom*/
      e[5].rx)) && i(a, "rx", p), (!C || D & /*geom*/
      32 && h !== (h = /*geom*/
      e[5].ry)) && i(a, "ry", h), (!C || D & /*geom*/
      32 && d !== (d = /*geom*/
      e[5].cx)) && i(y, "cx", d), (!C || D & /*geom*/
      32 && E !== (E = /*geom*/
      e[5].cy)) && i(y, "cy", E), (!C || D & /*geom*/
      32 && A !== (A = /*geom*/
      e[5].rx)) && i(y, "rx", A), (!C || D & /*geom*/
      32 && L !== (L = /*geom*/
      e[5].ry)) && i(y, "ry", L), (!C || D & /*computedStyle*/
      2) && i(
        m,
        "style",
        /*computedStyle*/
        e[1]
      ), (!C || D & /*geom*/
      32 && w !== (w = /*geom*/
      e[5].cx)) && i(m, "cx", w), (!C || D & /*geom*/
      32 && k !== (k = /*geom*/
      e[5].cy)) && i(m, "cy", k), (!C || D & /*geom*/
      32 && _ !== (_ = /*geom*/
      e[5].rx)) && i(m, "rx", _), (!C || D & /*geom*/
      32 && M !== (M = /*geom*/
      e[5].ry)) && i(m, "ry", M);
      const V = {};
      D & /*geom*/
      32 && (V.x = /*geom*/
      e[5].cx), D & /*geom*/
      32 && (V.y = /*geom*/
      e[5].cy - /*geom*/
      e[5].ry), D & /*viewportScale*/
      8 && (V.scale = /*viewportScale*/
      e[3]), N.$set(V);
      const Q = {};
      D & /*geom*/
      32 && (Q.x = /*geom*/
      e[5].cx + /*geom*/
      e[5].rx), D & /*geom*/
      32 && (Q.y = /*geom*/
      e[5].cy), D & /*viewportScale*/
      8 && (Q.scale = /*viewportScale*/
      e[3]), I.$set(Q);
      const ne = {};
      D & /*geom*/
      32 && (ne.x = /*geom*/
      e[5].cx), D & /*geom*/
      32 && (ne.y = /*geom*/
      e[5].cy + /*geom*/
      e[5].ry), D & /*viewportScale*/
      8 && (ne.scale = /*viewportScale*/
      e[3]), H.$set(ne);
      const P = {};
      D & /*geom*/
      32 && (P.x = /*geom*/
      e[5].cx - /*geom*/
      e[5].rx), D & /*geom*/
      32 && (P.y = /*geom*/
      e[5].cy), D & /*viewportScale*/
      8 && (P.scale = /*viewportScale*/
      e[3]), q.$set(P);
    },
    i(R) {
      C || (W(N.$$.fragment, R), W(I.$$.fragment, R), W(H.$$.fragment, R), W(q.$$.fragment, R), C = !0);
    },
    o(R) {
      ee(N.$$.fragment, R), ee(I.$$.fragment, R), ee(H.$$.fragment, R), ee(q.$$.fragment, R), C = !1;
    },
    d(R) {
      R && (j(n), j(g), j(y), j(b), j(m), j(S), j(G), j(U), j(T)), de(N, R), de(I, R), de(H, R), de(q, R), B = !1, Se(Z);
    }
  };
}
function er(e) {
  let n, t;
  return n = new fn({
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
          xi,
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
      he(n, o, s), t = !0;
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
      t || (W(n.$$.fragment, o), t = !0);
    },
    o(o) {
      ee(n.$$.fragment, o), t = !1;
    },
    d(o) {
      de(n, o);
    }
  };
}
function nr(e, n, t) {
  let o, s, { shape: l } = n, { computedStyle: f } = n, { transform: r } = n, { viewportScale: a = 1 } = n, { svgEl: c } = n;
  const u = (d, E, A) => {
    const L = d.geometry.bounds;
    let [b, m] = [L.minX, L.minY], [w, k] = [L.maxX, L.maxY];
    const [_, M] = A;
    if (E === "SHAPE")
      b += _, w += _, m += M, k += M;
    else
      switch (E) {
        case "TOP": {
          m += M;
          break;
        }
        case "BOTTOM": {
          k += M;
          break;
        }
        case "LEFT": {
          b += _;
          break;
        }
        case "RIGHT": {
          w += _;
          break;
        }
      }
    const S = Math.min(b, w), N = Math.min(m, k), G = Math.abs(w - b), I = Math.abs(k - m), U = (b + w) / 2, H = (m + k) / 2, T = G / 2, q = I / 2;
    return {
      ...d,
      geometry: {
        ...d.geometry,
        cx: U,
        cy: H,
        rx: T,
        ry: q,
        bounds: {
          minX: S,
          minY: N,
          maxX: S + G,
          maxY: N + I
        }
      }
    };
  }, p = `ellipse-mask-${Math.random().toString(36).substring(2, 12)}`;
  function h(d) {
    pe.call(this, e, d);
  }
  function g(d) {
    pe.call(this, e, d);
  }
  function y(d) {
    pe.call(this, e, d);
  }
  return e.$$set = (d) => {
    "shape" in d && t(0, l = d.shape), "computedStyle" in d && t(1, f = d.computedStyle), "transform" in d && t(2, r = d.transform), "viewportScale" in d && t(3, a = d.viewportScale), "svgEl" in d && t(4, c = d.svgEl);
  }, e.$$.update = () => {
    e.$$.dirty & /*shape*/
    1 && t(5, o = l.geometry), e.$$.dirty & /*geom, viewportScale*/
    40 && t(6, s = hn(o.bounds, 2 / a));
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
    h,
    g,
    y
  ];
}
class tr extends Le {
  constructor(n) {
    super(), Pe(this, n, nr, er, Me, {
      shape: 0,
      computedStyle: 1,
      transform: 2,
      viewportScale: 3,
      svgEl: 4
    });
  }
}
function Bo(e) {
  let n, t, o, s, l, f, r, a, c, u, p, h, g, y, d, E, A, L, b, m, w, k;
  return {
    c() {
      n = z("defs"), t = z("mask"), o = z("rect"), a = z("ellipse"), g = z("ellipse"), L = z("ellipse"), i(o, "x", s = /*x*/
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
      e[4] / 2), i(a, "ry", h = /*h*/
      e[5] / 2), i(a, "class", "svelte-1koqlb3"), i(
        t,
        "id",
        /*maskId*/
        e[7]
      ), i(t, "class", "a9s-rubberband-ellipse-mask svelte-1koqlb3"), i(g, "class", "a9s-outer"), i(g, "mask", `url(#${/*maskId*/
      e[7]})`), i(g, "cx", y = /*x*/
      e[2] + /*w*/
      e[4] / 2), i(g, "cy", d = /*y*/
      e[3] + /*h*/
      e[5] / 2), i(g, "rx", E = /*w*/
      e[4] / 2), i(g, "ry", A = /*h*/
      e[5] / 2), i(L, "class", "a9s-inner"), i(L, "cx", b = /*x*/
      e[2] + /*w*/
      e[4] / 2), i(L, "cy", m = /*y*/
      e[3] + /*h*/
      e[5] / 2), i(L, "rx", w = /*w*/
      e[4] / 2), i(L, "ry", k = /*h*/
      e[5] / 2);
    },
    m(_, M) {
      X(_, n, M), J(n, t), J(t, o), J(t, a), X(_, g, M), X(_, L, M);
    },
    p(_, M) {
      M & /*x, buffer*/
      68 && s !== (s = /*x*/
      _[2] - /*buffer*/
      _[6]) && i(o, "x", s), M & /*y, buffer*/
      72 && l !== (l = /*y*/
      _[3] - /*buffer*/
      _[6]) && i(o, "y", l), M & /*w, buffer*/
      80 && f !== (f = /*w*/
      _[4] + 2 * /*buffer*/
      _[6]) && i(o, "width", f), M & /*h, buffer*/
      96 && r !== (r = /*h*/
      _[5] + 2 * /*buffer*/
      _[6]) && i(o, "height", r), M & /*x, w*/
      20 && c !== (c = /*x*/
      _[2] + /*w*/
      _[4] / 2) && i(a, "cx", c), M & /*y, h*/
      40 && u !== (u = /*y*/
      _[3] + /*h*/
      _[5] / 2) && i(a, "cy", u), M & /*w*/
      16 && p !== (p = /*w*/
      _[4] / 2) && i(a, "rx", p), M & /*h*/
      32 && h !== (h = /*h*/
      _[5] / 2) && i(a, "ry", h), M & /*x, w*/
      20 && y !== (y = /*x*/
      _[2] + /*w*/
      _[4] / 2) && i(g, "cx", y), M & /*y, h*/
      40 && d !== (d = /*y*/
      _[3] + /*h*/
      _[5] / 2) && i(g, "cy", d), M & /*w*/
      16 && E !== (E = /*w*/
      _[4] / 2) && i(g, "rx", E), M & /*h*/
      32 && A !== (A = /*h*/
      _[5] / 2) && i(g, "ry", A), M & /*x, w*/
      20 && b !== (b = /*x*/
      _[2] + /*w*/
      _[4] / 2) && i(L, "cx", b), M & /*y, h*/
      40 && m !== (m = /*y*/
      _[3] + /*h*/
      _[5] / 2) && i(L, "cy", m), M & /*w*/
      16 && w !== (w = /*w*/
      _[4] / 2) && i(L, "rx", w), M & /*h*/
      32 && k !== (k = /*h*/
      _[5] / 2) && i(L, "ry", k);
    },
    d(_) {
      _ && (j(n), j(g), j(L));
    }
  };
}
function or(e) {
  let n, t = (
    /*origin*/
    e[1] && Bo(e)
  );
  return {
    c() {
      n = z("g"), t && t.c(), i(n, "class", "a9s-annotation a9s-rubberband");
    },
    m(o, s) {
      X(o, n, s), t && t.m(n, null), e[12](n);
    },
    p(o, [s]) {
      /*origin*/
      o[1] ? t ? t.p(o, s) : (t = Bo(o), t.c(), t.m(n, null)) : t && (t.d(1), t = null);
    },
    i: we,
    o: we,
    d(o) {
      o && j(n), t && t.d(), e[12](null);
    }
  };
}
function sr(e, n, t) {
  let o;
  const s = We();
  let { addEventListener: l } = n, { drawingMode: f } = n, { transform: r } = n, { viewportScale: a } = n, c, u, p, h, g, y, d, E = !1, A = !1, L, b;
  const m = (I) => {
    const U = I;
    L = performance.now(), f === "drag" && (t(1, u = r.elementToImage(U.offsetX, U.offsetY)), p = u, t(2, h = u[0]), t(3, g = u[1]), t(4, y = 1), t(5, d = 1));
  }, w = (I) => {
    const U = I || b;
    if (u)
      if (p = r.elementToImage(U.offsetX, U.offsetY), A) {
        const H = 2 * Math.abs(p[0] - u[0]), T = 2 * Math.abs(p[1] - u[1]);
        t(4, y = E ? Math.max(H, T) : H), t(5, d = E ? y : T), t(2, h = Math.min(p[0], u[0] - y / 2)), t(3, g = Math.min(p[1], u[1] - d / 2));
      } else {
        const H = Math.abs(p[0] - u[0]), T = Math.abs(p[1] - u[1]);
        t(4, y = E ? Math.max(H, T) : H), t(5, d = E ? y : T), t(2, h = Math.min(p[0], u[0])), t(3, g = Math.min(p[1], u[1]));
      }
    I && (b = I);
  }, k = (I) => {
    const U = I, H = performance.now() - L;
    if (f === "click") {
      if (H > 300) return;
      u ? _() : (t(1, u = r.elementToImage(U.offsetX, U.offsetY)), p = u, t(2, h = u[0]), t(3, g = u[1]), t(4, y = 1), t(5, d = 1));
    } else u && (H > 300 || y * d > 100 ? (U.stopPropagation(), _()) : (t(1, u = void 0), p = void 0, b = void 0));
  }, _ = () => {
    if (y * d > 15) {
      const I = {
        type: ke.ELLIPSE,
        geometry: {
          bounds: {
            minX: h,
            minY: g,
            maxX: h + y,
            maxY: g + d
          },
          cx: h + y / 2,
          cy: g + d / 2,
          rx: y / 2,
          ry: d / 2
        }
      };
      s("create", I);
    }
    t(1, u = void 0), p = void 0, b = void 0;
  }, M = (I) => {
    I.key === "Shift" && (E = !0, w()), I.key === "Control" && (A = !0, w());
  }, S = (I) => {
    I.key === "Shift" && (E = !1, w()), I.key === "Control" && (A = !1, w());
  };
  $e(() => (document.addEventListener("keyup", S), document.addEventListener("keydown", M), l("pointerdown", m), l("pointermove", w), l("pointerup", k, !0), () => {
    document.removeEventListener("keyup", S), document.removeEventListener("keydown", M);
  }));
  const N = `ellipse-mask-${Math.random().toString(36).substring(2, 12)}`;
  function G(I) {
    pn[I ? "unshift" : "push"](() => {
      c = I, t(0, c);
    });
  }
  return e.$$set = (I) => {
    "addEventListener" in I && t(8, l = I.addEventListener), "drawingMode" in I && t(9, f = I.drawingMode), "transform" in I && t(10, r = I.transform), "viewportScale" in I && t(11, a = I.viewportScale);
  }, e.$$.update = () => {
    e.$$.dirty & /*viewportScale*/
    2048 && t(6, o = 2 / a);
  }, [
    c,
    u,
    h,
    g,
    y,
    d,
    o,
    N,
    l,
    f,
    r,
    a,
    G
  ];
}
class lr extends Le {
  constructor(n) {
    super(), Pe(this, n, sr, or, Me, {
      addEventListener: 8,
      drawingMode: 9,
      transform: 10,
      viewportScale: 11
    });
  }
}
function ir(e) {
  let n, t, o, s, l, f, r, a, c, u, p, h, g, y, d, E, A, L;
  return g = new Ae({
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
  }), d = new Ae({
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
  }), d.$on("pointerdown", function() {
    se(
      /*grab*/
      e[10]("POINT2")
    ) && e[10]("POINT2").apply(this, arguments);
  }), {
    c() {
      n = z("line"), f = te(), r = z("line"), h = te(), ge(g.$$.fragment), y = te(), ge(d.$$.fragment), i(n, "class", "a9s-outer"), i(n, "x1", t = /*geom*/
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
    m(b, m) {
      X(b, n, m), X(b, f, m), X(b, r, m), X(b, h, m), he(g, b, m), X(b, y, m), he(d, b, m), E = !0, A || (L = [
        x(n, "pointerdown", function() {
          se(
            /*grab*/
            e[10]("LINE")
          ) && e[10]("LINE").apply(this, arguments);
        }),
        x(r, "pointerdown", function() {
          se(
            /*grab*/
            e[10]("LINE")
          ) && e[10]("LINE").apply(this, arguments);
        })
      ], A = !0);
    },
    p(b, m) {
      e = b, (!E || m & /*geom*/
      32 && t !== (t = /*geom*/
      e[5].points[0][0])) && i(n, "x1", t), (!E || m & /*geom*/
      32 && o !== (o = /*geom*/
      e[5].points[0][1])) && i(n, "y1", o), (!E || m & /*geom*/
      32 && s !== (s = /*geom*/
      e[5].points[1][0])) && i(n, "x2", s), (!E || m & /*geom*/
      32 && l !== (l = /*geom*/
      e[5].points[1][1])) && i(n, "y2", l), (!E || m & /*computedStyle*/
      2) && i(
        r,
        "style",
        /*computedStyle*/
        e[1]
      ), (!E || m & /*geom*/
      32 && a !== (a = /*geom*/
      e[5].points[0][0])) && i(r, "x1", a), (!E || m & /*geom*/
      32 && c !== (c = /*geom*/
      e[5].points[0][1])) && i(r, "y1", c), (!E || m & /*geom*/
      32 && u !== (u = /*geom*/
      e[5].points[1][0])) && i(r, "x2", u), (!E || m & /*geom*/
      32 && p !== (p = /*geom*/
      e[5].points[1][1])) && i(r, "y2", p);
      const w = {};
      m & /*geom*/
      32 && (w.x = /*geom*/
      e[5].points[0][0]), m & /*geom*/
      32 && (w.y = /*geom*/
      e[5].points[0][1]), m & /*viewportScale*/
      8 && (w.scale = /*viewportScale*/
      e[3]), g.$set(w);
      const k = {};
      m & /*geom*/
      32 && (k.x = /*geom*/
      e[5].points[1][0]), m & /*geom*/
      32 && (k.y = /*geom*/
      e[5].points[1][1]), m & /*viewportScale*/
      8 && (k.scale = /*viewportScale*/
      e[3]), d.$set(k);
    },
    i(b) {
      E || (W(g.$$.fragment, b), W(d.$$.fragment, b), E = !0);
    },
    o(b) {
      ee(g.$$.fragment, b), ee(d.$$.fragment, b), E = !1;
    },
    d(b) {
      b && (j(n), j(f), j(r), j(h), j(y)), de(g, b), de(d, b), A = !1, Se(L);
    }
  };
}
function rr(e) {
  let n, t;
  return n = new fn({
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
          ir,
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
      he(n, o, s), t = !0;
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
      t || (W(n.$$.fragment, o), t = !0);
    },
    o(o) {
      ee(n.$$.fragment, o), t = !1;
    },
    d(o) {
      de(n, o);
    }
  };
}
function fr(e, n, t) {
  let o, { shape: s } = n, { computedStyle: l } = n, { transform: f } = n, { viewportScale: r = 1 } = n, { svgEl: a } = n;
  const c = (g, y, d) => {
    const E = g.geometry;
    let [[A, L], [b, m]] = E.points;
    const [w, k] = d;
    if (y === "LINE")
      A += w, b += w, L += k, m += k;
    else
      switch (y) {
        case "POINT1": {
          A += w, L += k;
          break;
        }
        case "POINT2": {
          b += w, m += k;
          break;
        }
      }
    return {
      ...g,
      geometry: {
        ...g.geometry,
        points: [[A, L], [b, m]],
        bounds: He([[A, L], [b, m]])
      }
    };
  };
  function u(g) {
    pe.call(this, e, g);
  }
  function p(g) {
    pe.call(this, e, g);
  }
  function h(g) {
    pe.call(this, e, g);
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
    c,
    u,
    p,
    h
  ];
}
class ar extends Le {
  constructor(n) {
    super(), Pe(this, n, fr, rr, Me, {
      shape: 0,
      computedStyle: 1,
      transform: 2,
      viewportScale: 3,
      svgEl: 4
    });
  }
}
function Uo(e) {
  let n, t;
  return {
    c() {
      n = z("line"), t = z("line"), i(n, "class", "a9s-outer"), i(
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
      X(o, n, s), X(o, t, s);
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
function cr(e) {
  let n, t = (
    /*origin*/
    e[1] && /*cursor*/
    e[2] && Uo(e)
  );
  return {
    c() {
      n = z("g"), t && t.c(), i(n, "class", "a9s-annotation a9s-rubberband");
    },
    m(o, s) {
      X(o, n, s), t && t.m(n, null), e[11](n);
    },
    p(o, [s]) {
      /*origin*/
      o[1] && /*cursor*/
      o[2] ? t ? t.p(o, s) : (t = Uo(o), t.c(), t.m(n, null)) : t && (t.d(1), t = null);
    },
    i: we,
    o: we,
    d(o) {
      o && j(n), t && t.d(), e[11](null);
    }
  };
}
function ur(e, n, t) {
  const o = We();
  let { addEventListener: s } = n, { drawingMode: l } = n, { transform: f } = n, { viewportScale: r } = n, a, c, u, p, h, g, y, d, E;
  const A = (k) => {
    const _ = k, { timeStamp: M, offsetX: S, offsetY: N } = _;
    d = { timeStamp: M, offsetX: S, offsetY: N }, l === "drag" && (t(1, c = f.elementToImage(_.offsetX, _.offsetY)), t(2, u = c), t(3, p = c[0]), t(4, h = c[1]), t(5, g = u[0]), t(6, y = u[1]));
  }, L = (k) => {
    const _ = k || E;
    c && (t(2, u = f.elementToImage(_.offsetX, _.offsetY)), t(5, g = u[0]), t(6, y = u[1])), k && (E = k);
  }, b = (k) => {
    const _ = k;
    if (l === "click") {
      const M = performance.now() - d.timeStamp, S = en([d.offsetX, d.offsetY], [_.offsetX, _.offsetY]);
      if (M > 300 || S > 15) return;
      c ? m() : (t(1, c = f.elementToImage(_.offsetX, _.offsetY)), t(2, u = c), t(3, p = c[0]), t(4, h = c[1]), t(5, g = u[0]), t(6, y = u[1]));
    } else c && (_.stopPropagation(), m());
  }, m = () => {
    if (c && u && en(c, u) > 4) {
      const k = {
        type: ke.LINE,
        geometry: {
          bounds: He([c, u]),
          points: [c, u]
        }
      };
      o("create", k);
    }
    t(1, c = void 0), t(2, u = void 0), E = void 0;
  };
  $e(() => {
    s("pointerdown", A, !0), s("pointermove", L), s("pointerup", b, !0);
  });
  function w(k) {
    pn[k ? "unshift" : "push"](() => {
      a = k, t(0, a);
    });
  }
  return e.$$set = (k) => {
    "addEventListener" in k && t(7, s = k.addEventListener), "drawingMode" in k && t(8, l = k.drawingMode), "transform" in k && t(9, f = k.transform), "viewportScale" in k && t(10, r = k.viewportScale);
  }, [
    a,
    c,
    u,
    p,
    h,
    g,
    y,
    s,
    l,
    f,
    r,
    w
  ];
}
class pr extends Le {
  constructor(n) {
    super(), Pe(this, n, ur, cr, Me, {
      addEventListener: 7,
      drawingMode: 8,
      transform: 9,
      viewportScale: 10
    });
  }
}
function Go(e, n, t) {
  const o = e.slice();
  return o[18] = n[t], o;
}
function qo(e) {
  let n, t, o, s = Ne(
    /*BG_COLORS*/
    e[5]
  ), l = [];
  for (let f = 0; f < s.length; f += 1)
    l[f] = Yo(Go(e, s, f));
  return {
    c() {
      n = De("div");
      for (let f = 0; f < l.length; f += 1)
        l[f].c();
      i(n, "class", "tb-color-picker svelte-19rj0sx");
    },
    m(f, r) {
      X(f, n, r);
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
        s = Ne(
          /*BG_COLORS*/
          f[5]
        );
        let a;
        for (a = 0; a < s.length; a += 1) {
          const c = Go(f, s, a);
          l[a] ? l[a].p(c, r) : (l[a] = Yo(c), l[a].c(), l[a].m(n, null));
        }
        for (; a < l.length; a += 1)
          l[a].d(1);
        l.length = s.length;
      }
    },
    d(f) {
      f && j(n), Hn(l, f), t = !1, o();
    }
  };
}
function Yo(e) {
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
      n = De("button"), i(n, "class", "tb-swatch svelte-19rj0sx"), i(
        n,
        "title",
        /*c*/
        e[18].label
      ), Xe(
        n,
        "background",
        /*c*/
        e[18].value !== "transparent" ? (
          /*c*/
          e[18].value
        ) : "var(--checker)"
      ), Ve(
        n,
        "selected",
        /*style*/
        e[0].bgColor === /*c*/
        e[18].value
      );
    },
    m(l, f) {
      X(l, n, f), t || (o = x(n, "click", s), t = !0);
    },
    p(l, f) {
      e = l, f & /*style, BG_COLORS*/
      33 && Ve(
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
function hr(e) {
  let n, t, o, s, l, f, r, a, c, u, p, h, g, y, d, E, A, L, b, m, w, k, _, M, S, N, G, I = (
    /*showBgPicker*/
    e[3] && qo(e)
  );
  return {
    c() {
      n = De("div"), t = De("button"), t.textContent = "A-", o = te(), s = De("button"), s.textContent = "A+", l = te(), f = De("div"), r = te(), a = De("button"), a.innerHTML = "<strong>B</strong>", c = te(), u = De("button"), u.innerHTML = "<em>I</em>", p = te(), h = De("button"), h.innerHTML = "<u>U</u>", g = te(), y = De("div"), d = te(), E = De("div"), A = De("button"), L = De("span"), L.textContent = "A", b = te(), m = De("span"), w = te(), I && I.c(), k = te(), _ = De("div"), M = te(), S = De("button"), S.innerHTML = '<svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor"><path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"></path></svg>', i(t, "class", "tb-btn svelte-19rj0sx"), i(t, "title", "Decrease font size"), i(s, "class", "tb-btn svelte-19rj0sx"), i(s, "title", "Increase font size"), i(f, "class", "tb-divider svelte-19rj0sx"), i(a, "class", "tb-btn svelte-19rj0sx"), i(a, "title", "Bold"), Ve(
        a,
        "active",
        /*style*/
        e[0].bold
      ), i(u, "class", "tb-btn svelte-19rj0sx"), i(u, "title", "Italic"), Ve(
        u,
        "active",
        /*style*/
        e[0].italic
      ), i(h, "class", "tb-btn svelte-19rj0sx"), i(h, "title", "Underline"), Ve(
        h,
        "active",
        /*style*/
        e[0].underline
      ), i(y, "class", "tb-divider svelte-19rj0sx"), i(L, "class", "tb-color-letter svelte-19rj0sx"), i(m, "class", "tb-color-swatch svelte-19rj0sx"), Xe(
        m,
        "background",
        /*style*/
        e[0].bgColor !== "transparent" ? (
          /*style*/
          e[0].bgColor
        ) : "transparent"
      ), Xe(
        m,
        "border-color",
        /*style*/
        e[0].bgColor !== "transparent" ? (
          /*style*/
          e[0].bgColor
        ) : "#AAAFC3"
      ), i(A, "class", "tb-btn tb-color-btn svelte-19rj0sx"), i(A, "title", "Highlight colour"), i(E, "class", "tb-color-wrap svelte-19rj0sx"), i(_, "class", "tb-divider svelte-19rj0sx"), i(S, "class", "tb-btn tb-delete svelte-19rj0sx"), i(S, "title", "Delete"), i(n, "class", "a9s-tools-text-toolbar svelte-19rj0sx"), Xe(
        n,
        "left",
        /*x*/
        e[1] + "px"
      ), Xe(
        n,
        "top",
        /*y*/
        e[2] + "px"
      );
    },
    m(U, H) {
      X(U, n, H), J(n, t), J(n, o), J(n, s), J(n, l), J(n, f), J(n, r), J(n, a), J(n, c), J(n, u), J(n, p), J(n, h), J(n, g), J(n, y), J(n, d), J(n, E), J(E, A), J(A, L), J(A, b), J(A, m), J(E, w), I && I.m(E, null), J(n, k), J(n, _), J(n, M), J(n, S), N || (G = [
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
          h,
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
          S,
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
      ], N = !0);
    },
    p(U, [H]) {
      H & /*style*/
      1 && Ve(
        a,
        "active",
        /*style*/
        U[0].bold
      ), H & /*style*/
      1 && Ve(
        u,
        "active",
        /*style*/
        U[0].italic
      ), H & /*style*/
      1 && Ve(
        h,
        "active",
        /*style*/
        U[0].underline
      ), H & /*style*/
      1 && Xe(
        m,
        "background",
        /*style*/
        U[0].bgColor !== "transparent" ? (
          /*style*/
          U[0].bgColor
        ) : "transparent"
      ), H & /*style*/
      1 && Xe(
        m,
        "border-color",
        /*style*/
        U[0].bgColor !== "transparent" ? (
          /*style*/
          U[0].bgColor
        ) : "#AAAFC3"
      ), /*showBgPicker*/
      U[3] ? I ? I.p(U, H) : (I = qo(U), I.c(), I.m(E, null)) : I && (I.d(1), I = null), H & /*x*/
      2 && Xe(
        n,
        "left",
        /*x*/
        U[1] + "px"
      ), H & /*y*/
      4 && Xe(
        n,
        "top",
        /*y*/
        U[2] + "px"
      );
    },
    i: we,
    o: we,
    d(U) {
      U && j(n), I && I.d(), N = !1, Se(G);
    }
  };
}
function dr(e, n, t) {
  let { style: o } = n, { x: s } = n, { y: l } = n;
  const f = We(), r = [
    { value: "transparent", label: "None" },
    { value: "#ffff00", label: "Yellow" },
    { value: "#00ff00", label: "Green" },
    { value: "#00ffff", label: "Cyan" },
    { value: "#ff00ff", label: "Magenta" },
    { value: "#ffffff", label: "White" },
    { value: "#000000", label: "Black" }
  ];
  let a = !1;
  const c = (w) => f("change", { ...o, ...w }), u = (w) => c({
    fontSize: Math.max(8, Math.min(72, o.fontSize + w))
  }), p = () => c({ bold: !o.bold }), h = () => c({ italic: !o.italic }), g = () => c({ underline: !o.underline }), y = (w) => {
    c({ bgColor: w }), t(3, a = !1);
  }, d = (w) => w.preventDefault(), E = () => u(-2), A = () => u(2), L = () => t(3, a = !a), b = (w) => y(w.value), m = () => f("delete");
  return e.$$set = (w) => {
    "style" in w && t(0, o = w.style), "x" in w && t(1, s = w.x), "y" in w && t(2, l = w.y);
  }, [
    o,
    s,
    l,
    a,
    f,
    r,
    u,
    p,
    h,
    g,
    y,
    d,
    E,
    A,
    L,
    b,
    m
  ];
}
class mr extends Le {
  constructor(n) {
    super(), Pe(this, n, dr, hr, Me, { style: 0, x: 1, y: 2 });
  }
}
const Cn = {
  fontSize: 16,
  bold: !1,
  italic: !1,
  underline: !1,
  bgColor: "transparent"
};
function zo(e, n, t) {
  const o = e.slice();
  return o[38] = n[t].id, o[39] = n[t].selector, o;
}
function mt(e) {
  const n = e.slice(), t = (
    /*editingStyle*/
    n[5]
  );
  n[42] = t;
  const o = (
    /*inputScreenPos*/
    n[14](
      /*selector*/
      n[39],
      /*style*/
      n[42]
    )
  );
  n[43] = o;
  const s = (
    /*editingId*/
    n[3] === /*id*/
    n[38]
  );
  return n[44] = s, n;
}
function Vo(e, n, t) {
  const o = e.slice();
  return o[38] = n[t].id, o[39] = n[t].selector, o[45] = n[t].text, o;
}
function gt(e) {
  const n = e.slice(), t = (
    /*textPoint*/
    n[12](
      /*selector*/
      n[39]
    )
  );
  n[48] = t;
  const o = (
    /*getStyle*/
    n[11](
      /*selector*/
      n[39]
    )
  );
  n[42] = o;
  const s = (
    /*selectedIds*/
    n[7].includes(
      /*id*/
      n[38]
    )
  );
  return n[44] = s, n;
}
function Ko(e, n, t) {
  const o = e.slice();
  return o[38] = n[t].id, o[39] = n[t].selector, o;
}
function gr(e) {
  const n = e.slice(), t = (
    /*polylineGeometry*/
    n[22](
      /*selector*/
      n[39]
    )
  );
  n[52] = t;
  const o = (
    /*midpoint*/
    n[23](
      /*points*/
      n[52]
    )
  );
  return n[53] = o, n;
}
function _r(e) {
  const n = e.slice(), t = (
    /*lineGeometry*/
    n[21](
      /*selector*/
      n[39]
    )
  );
  return n[52] = t, n;
}
function _t(e) {
  var o;
  const n = e.slice(), t = (
    /*selector*/
    (o = n[39].properties) == null ? void 0 : o.toolType
  );
  return n[51] = t, n;
}
function Fo(e) {
  let n;
  function t(f, r) {
    if (
      /*toolType*/
      f[51] === "arrow"
    ) return Wo;
    if (
      /*toolType*/
      f[51] === "distance"
    ) return Zo;
  }
  function o(f, r) {
    if (r === Wo) return _r(f);
    if (r === Zo) return gr(f);
  }
  let s = t(e), l = s && s(o(e, s));
  return {
    c() {
      l && l.c(), n = Ce();
    },
    m(f, r) {
      l && l.m(f, r), X(f, n, r);
    },
    p(f, r) {
      s === (s = t(f)) && l ? l.p(o(f, s), r) : (l && l.d(1), l = s && s(o(f, s)), l && (l.c(), l.m(n.parentNode, n)));
    },
    d(f) {
      f && j(n), l && l.d(f);
    }
  };
}
function Zo(e) {
  let n, t, o, s = (
    /*formatLength*/
    e[20](
      /*points*/
      e[52]
    ) + ""
  ), l, f;
  return {
    c() {
      n = z("g"), t = z("rect"), o = z("text"), l = Qn(s), i(t, "x", "-32"), i(t, "y", "-24"), i(t, "width", "64"), i(t, "height", "18"), i(t, "rx", "3"), i(t, "class", "svelte-4xwjv8"), i(o, "x", "0"), i(o, "y", "-11"), i(o, "text-anchor", "middle"), i(o, "class", "svelte-4xwjv8"), i(n, "class", "a9s-tools-distance-label svelte-4xwjv8"), i(n, "transform", f = `translate(${/*center*/
      e[53][0]}, ${/*center*/
      e[53][1]})`);
    },
    m(r, a) {
      X(r, n, a), J(n, t), J(n, o), J(o, l);
    },
    p(r, a) {
      a[0] & /*svgAnnotations*/
      512 && s !== (s = /*formatLength*/
      r[20](
        /*points*/
        r[52]
      ) + "") && Hs(l, s), a[0] & /*svgAnnotations*/
      512 && f !== (f = `translate(${/*center*/
      r[53][0]}, ${/*center*/
      r[53][1]})`) && i(n, "transform", f);
    },
    d(r) {
      r && j(n);
    }
  };
}
function Wo(e) {
  let n, t;
  return {
    c() {
      n = z("polyline"), i(n, "class", "a9s-tools-arrowhead svelte-4xwjv8"), i(n, "points", t = /*arrowheadPoints*/
      e[24](
        /*points*/
        e[52]
      ));
    },
    m(o, s) {
      X(o, n, s);
    },
    p(o, s) {
      s[0] & /*svgAnnotations*/
      512 && t !== (t = /*arrowheadPoints*/
      o[24](
        /*points*/
        o[52]
      )) && i(n, "points", t);
    },
    d(o) {
      o && j(n);
    }
  };
}
function Qo(e, n) {
  let t, o, s = (
    /*selector*/
    n[39] && Fo(_t(n))
  );
  return {
    key: e,
    first: null,
    c() {
      t = Ce(), s && s.c(), o = Ce(), this.first = t;
    },
    m(l, f) {
      X(l, t, f), s && s.m(l, f), X(l, o, f);
    },
    p(l, f) {
      n = l, /*selector*/
      n[39] ? s ? s.p(_t(n), f) : (s = Fo(_t(n)), s.c(), s.m(o.parentNode, o)) : s && (s.d(1), s = null);
    },
    d(l) {
      l && (j(t), j(o)), s && s.d(l);
    }
  };
}
function Jo(e) {
  let n, t, o, s = (
    /*text*/
    (e[45] || "") + ""
  ), l, f, r, a, c, u = (
    /*style*/
    e[42].bgColor && /*style*/
    e[42].bgColor !== "transparent" && $o(e)
  ), p = (
    /*focused*/
    e[44] && xo(e)
  );
  return {
    c() {
      n = z("g"), u && u.c(), t = Ce(), p && p.c(), o = z("text"), l = Qn(s), i(o, "x", f = /*pt*/
      e[48].x), i(o, "y", r = /*pt*/
      e[48].y), i(o, "font-size", a = /*svgFontSize*/
      e[13](
        /*style*/
        e[42]
      )), i(o, "font-family", "sans-serif"), i(o, "style", c = /*svgTextStyle*/
      e[25](
        /*style*/
        e[42]
      )), Xe(o, "pointer-events", "none"), Xe(n, "pointer-events", "none");
    },
    m(h, g) {
      X(h, n, g), u && u.m(n, null), J(n, t), p && p.m(n, null), J(n, o), J(o, l);
    },
    p(h, g) {
      /*style*/
      h[42].bgColor && /*style*/
      h[42].bgColor !== "transparent" ? u ? u.p(h, g) : (u = $o(h), u.c(), u.m(n, t)) : u && (u.d(1), u = null), /*focused*/
      h[44] ? p ? p.p(h, g) : (p = xo(h), p.c(), p.m(n, o)) : p && (p.d(1), p = null), g[0] & /*textAnnotations*/
      256 && s !== (s = /*text*/
      (h[45] || "") + "") && Hs(l, s), g[0] & /*textAnnotations*/
      256 && f !== (f = /*pt*/
      h[48].x) && i(o, "x", f), g[0] & /*textAnnotations*/
      256 && r !== (r = /*pt*/
      h[48].y) && i(o, "y", r), g[0] & /*textAnnotations*/
      256 && a !== (a = /*svgFontSize*/
      h[13](
        /*style*/
        h[42]
      )) && i(o, "font-size", a), g[0] & /*textAnnotations*/
      256 && c !== (c = /*svgTextStyle*/
      h[25](
        /*style*/
        h[42]
      )) && i(o, "style", c);
      const y = g[0] & /*textAnnotations*/
      256;
      (g[0] & /*textAnnotations*/
      256 || y) && Xe(o, "pointer-events", "none");
    },
    d(h) {
      h && j(n), u && u.d(), p && p.d();
    }
  };
}
function $o(e) {
  let n, t, o, s, l;
  return {
    c() {
      n = z("rect"), i(n, "x", t = /*pt*/
      e[48].x), i(n, "y", o = /*pt*/
      e[48].y - /*svgFontSize*/
      e[13](
        /*style*/
        e[42]
      )), i(
        n,
        "width",
        /*naturalWidth*/
        e[1]
      ), i(n, "height", s = /*svgFontSize*/
      e[13](
        /*style*/
        e[42]
      ) * 1.3), i(n, "fill", l = /*style*/
      e[42].bgColor), Xe(n, "pointer-events", "none");
    },
    m(f, r) {
      X(f, n, r);
    },
    p(f, r) {
      r[0] & /*textAnnotations*/
      256 && t !== (t = /*pt*/
      f[48].x) && i(n, "x", t), r[0] & /*textAnnotations*/
      256 && o !== (o = /*pt*/
      f[48].y - /*svgFontSize*/
      f[13](
        /*style*/
        f[42]
      )) && i(n, "y", o), r[0] & /*naturalWidth*/
      2 && i(
        n,
        "width",
        /*naturalWidth*/
        f[1]
      ), r[0] & /*textAnnotations*/
      256 && s !== (s = /*svgFontSize*/
      f[13](
        /*style*/
        f[42]
      ) * 1.3) && i(n, "height", s), r[0] & /*textAnnotations*/
      256 && l !== (l = /*style*/
      f[42].bgColor) && i(n, "fill", l);
    },
    d(f) {
      f && j(n);
    }
  };
}
function xo(e) {
  let n, t, o, s, l, f, r;
  return {
    c() {
      n = z("rect"), i(n, "x", t = /*pt*/
      e[48].x - 2 / /*viewportScale*/
      e[2]), i(n, "y", o = /*pt*/
      e[48].y - /*svgFontSize*/
      e[13](
        /*style*/
        e[42]
      ) - 2 / /*viewportScale*/
      e[2]), i(n, "width", s = 200 / /*viewportScale*/
      e[2]), i(n, "height", l = /*svgFontSize*/
      e[13](
        /*style*/
        e[42]
      ) * 1.3 + 4 / /*viewportScale*/
      e[2]), i(n, "fill", "none"), i(n, "stroke", "rgba(80,80,80,0.5)"), i(n, "stroke-width", f = 1 / /*viewportScale*/
      e[2]), i(n, "stroke-dasharray", r = `${4 / /*viewportScale*/
      e[2]},${3 / /*viewportScale*/
      e[2]}`), Xe(n, "pointer-events", "none");
    },
    m(a, c) {
      X(a, n, c);
    },
    p(a, c) {
      c[0] & /*textAnnotations, viewportScale*/
      260 && t !== (t = /*pt*/
      a[48].x - 2 / /*viewportScale*/
      a[2]) && i(n, "x", t), c[0] & /*textAnnotations, viewportScale*/
      260 && o !== (o = /*pt*/
      a[48].y - /*svgFontSize*/
      a[13](
        /*style*/
        a[42]
      ) - 2 / /*viewportScale*/
      a[2]) && i(n, "y", o), c[0] & /*viewportScale*/
      4 && s !== (s = 200 / /*viewportScale*/
      a[2]) && i(n, "width", s), c[0] & /*textAnnotations, viewportScale*/
      260 && l !== (l = /*svgFontSize*/
      a[13](
        /*style*/
        a[42]
      ) * 1.3 + 4 / /*viewportScale*/
      a[2]) && i(n, "height", l), c[0] & /*viewportScale*/
      4 && f !== (f = 1 / /*viewportScale*/
      a[2]) && i(n, "stroke-width", f), c[0] & /*viewportScale*/
      4 && r !== (r = `${4 / /*viewportScale*/
      a[2]},${3 / /*viewportScale*/
      a[2]}`) && i(n, "stroke-dasharray", r);
    },
    d(a) {
      a && j(n);
    }
  };
}
function es(e, n) {
  let t, o, s = (
    /*selector*/
    n[39] && /*editingId*/
    n[3] !== /*id*/
    n[38] && Jo(gt(n))
  );
  return {
    key: e,
    first: null,
    c() {
      t = Ce(), s && s.c(), o = Ce(), this.first = t;
    },
    m(l, f) {
      X(l, t, f), s && s.m(l, f), X(l, o, f);
    },
    p(l, f) {
      n = l, /*selector*/
      n[39] && /*editingId*/
      n[3] !== /*id*/
      n[38] ? s ? s.p(gt(n), f) : (s = Jo(gt(n)), s.c(), s.m(o.parentNode, o)) : s && (s.d(1), s = null);
    },
    d(l) {
      l && (j(t), j(o)), s && s.d(l);
    }
  };
}
function ns(e) {
  let n, t, o, s, l, f, r = (
    /*focused*/
    e[44] && ts(e)
  );
  return {
    c() {
      r && r.c(), n = te(), t = De("input"), i(t, "type", "text"), t.value = /*editingText*/
      e[4], i(t, "class", "a9s-tools-text-input svelte-4xwjv8"), i(t, "style", o = /*inputStyle*/
      e[26](
        /*style*/
        e[42],
        /*pos*/
        e[43]
      )), i(t, "placeholder", "Type...");
    },
    m(a, c) {
      r && r.m(a, c), X(a, n, c), X(a, t, c), e[32](t), s = !0, l || (f = [
        x(
          t,
          "input",
          /*onTextInput*/
          e[18]
        ),
        x(
          t,
          "keydown",
          /*onInputKeyDown*/
          e[19]
        ),
        x(
          t,
          "blur",
          /*commitEdit*/
          e[15]
        )
      ], l = !0);
    },
    p(a, c) {
      /*focused*/
      a[44] ? r ? (r.p(a, c), c[0] & /*editingId, textAnnotations*/
      264 && W(r, 1)) : (r = ts(a), r.c(), W(r, 1), r.m(n.parentNode, n)) : r && (Be(), ee(r, 1, 1, () => {
        r = null;
      }), Ue()), (!s || c[0] & /*editingText*/
      16 && t.value !== /*editingText*/
      a[4]) && (t.value = /*editingText*/
      a[4]), (!s || c[0] & /*editingStyle, textAnnotations*/
      288 && o !== (o = /*inputStyle*/
      a[26](
        /*style*/
        a[42],
        /*pos*/
        a[43]
      ))) && i(t, "style", o);
    },
    i(a) {
      s || (W(r), s = !0);
    },
    o(a) {
      ee(r), s = !1;
    },
    d(a) {
      a && (j(n), j(t)), r && r.d(a), e[32](null), l = !1, Se(f);
    }
  };
}
function ts(e) {
  let n, t;
  function o(...l) {
    return (
      /*change_handler*/
      e[30](
        /*id*/
        e[38],
        ...l
      )
    );
  }
  function s() {
    return (
      /*delete_handler*/
      e[31](
        /*id*/
        e[38]
      )
    );
  }
  return n = new mr({
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
  }), n.$on("change", o), n.$on("delete", s), {
    c() {
      ge(n.$$.fragment);
    },
    m(l, f) {
      he(n, l, f), t = !0;
    },
    p(l, f) {
      e = l;
      const r = {};
      f[0] & /*editingStyle*/
      32 && (r.style = /*style*/
      e[42]), f[0] & /*textAnnotations, editingStyle*/
      288 && (r.x = /*pos*/
      e[43].left), f[0] & /*textAnnotations, editingStyle*/
      288 && (r.y = /*pos*/
      e[43].top), n.$set(r);
    },
    i(l) {
      t || (W(n.$$.fragment, l), t = !0);
    },
    o(l) {
      ee(n.$$.fragment, l), t = !1;
    },
    d(l) {
      de(n, l);
    }
  };
}
function os(e, n) {
  let t, o, s, l = (
    /*selector*/
    n[39] && /*editingId*/
    n[3] === /*id*/
    n[38] && ns(mt(n))
  );
  return {
    key: e,
    first: null,
    c() {
      t = Ce(), l && l.c(), o = Ce(), this.first = t;
    },
    m(f, r) {
      X(f, t, r), l && l.m(f, r), X(f, o, r), s = !0;
    },
    p(f, r) {
      n = f, /*selector*/
      n[39] && /*editingId*/
      n[3] === /*id*/
      n[38] ? l ? (l.p(mt(n), r), r[0] & /*textAnnotations, editingId*/
      264 && W(l, 1)) : (l = ns(mt(n)), l.c(), W(l, 1), l.m(o.parentNode, o)) : l && (Be(), ee(l, 1, 1, () => {
        l = null;
      }), Ue());
    },
    i(f) {
      s || (W(l), s = !0);
    },
    o(f) {
      ee(l), s = !1;
    },
    d(f) {
      f && (j(t), j(o)), l && l.d(f);
    }
  };
}
function yr(e) {
  let n, t, o = [], s = /* @__PURE__ */ new Map(), l, f, r = [], a = /* @__PURE__ */ new Map(), c, u = [], p = /* @__PURE__ */ new Map(), h, g, y = Ne(
    /*svgAnnotations*/
    e[9]
  );
  const d = (m) => (
    /*id*/
    m[38]
  );
  for (let m = 0; m < y.length; m += 1) {
    let w = Ko(e, y, m), k = d(w);
    s.set(k, o[m] = Qo(k, w));
  }
  let E = Ne(
    /*textAnnotations*/
    e[8]
  );
  const A = (m) => (
    /*id*/
    m[38]
  );
  for (let m = 0; m < E.length; m += 1) {
    let w = Vo(e, E, m), k = A(w);
    a.set(k, r[m] = es(k, w));
  }
  let L = Ne(
    /*textAnnotations*/
    e[8]
  );
  const b = (m) => (
    /*id*/
    m[38]
  );
  for (let m = 0; m < L.length; m += 1) {
    let w = zo(e, L, m), k = b(w);
    p.set(k, u[m] = os(k, w));
  }
  return {
    c() {
      n = z("svg"), t = z("g");
      for (let m = 0; m < o.length; m += 1)
        o[m].c();
      l = te(), f = z("svg");
      for (let m = 0; m < r.length; m += 1)
        r[m].c();
      c = te();
      for (let m = 0; m < u.length; m += 1)
        u[m].c();
      h = Ce(), i(n, "class", "a9s-tools-overlay svelte-4xwjv8"), i(
        n,
        "viewBox",
        /*viewBox*/
        e[0]
      ), i(n, "preserveAspectRatio", "xMinYMin meet"), i(f, "class", "a9s-tools-overlay svelte-4xwjv8"), i(f, "data-annotation-type", "TEXT"), i(
        f,
        "viewBox",
        /*viewBox*/
        e[0]
      ), i(f, "preserveAspectRatio", "xMinYMin meet"), Xe(f, "pointer-events", "none");
    },
    m(m, w) {
      X(m, n, w), J(n, t);
      for (let k = 0; k < o.length; k += 1)
        o[k] && o[k].m(t, null);
      X(m, l, w), X(m, f, w);
      for (let k = 0; k < r.length; k += 1)
        r[k] && r[k].m(f, null);
      X(m, c, w);
      for (let k = 0; k < u.length; k += 1)
        u[k] && u[k].m(m, w);
      X(m, h, w), g = !0;
    },
    p(m, w) {
      w[0] & /*arrowheadPoints, lineGeometry, svgAnnotations, midpoint, polylineGeometry, formatLength*/
      32506368 && (y = Ne(
        /*svgAnnotations*/
        m[9]
      ), o = rt(o, w, d, 1, m, y, s, t, po, Qo, null, Ko)), (!g || w[0] & /*viewBox*/
      1) && i(
        n,
        "viewBox",
        /*viewBox*/
        m[0]
      ), w[0] & /*textPoint, textAnnotations, svgFontSize, getStyle, svgTextStyle, viewportScale, selectedIds, naturalWidth, editingId*/
      33569166 && (E = Ne(
        /*textAnnotations*/
        m[8]
      ), r = rt(r, w, A, 1, m, E, a, f, po, es, null, Vo)), (!g || w[0] & /*viewBox*/
      1) && i(
        f,
        "viewBox",
        /*viewBox*/
        m[0]
      ), w[0] & /*editingText, inputStyle, editingStyle, inputScreenPos, textAnnotations, inputEl, onTextInput, onInputKeyDown, commitEdit, applyStyleChange, deleteAnnotation, editingId*/
      68141432 && (L = Ne(
        /*textAnnotations*/
        m[8]
      ), Be(), u = rt(u, w, b, 1, m, L, p, h.parentNode, ei, os, h, zo), Ue());
    },
    i(m) {
      if (!g) {
        for (let w = 0; w < L.length; w += 1)
          W(u[w]);
        g = !0;
      }
    },
    o(m) {
      for (let w = 0; w < u.length; w += 1)
        ee(u[w]);
      g = !1;
    },
    d(m) {
      m && (j(n), j(l), j(f), j(c), j(h));
      for (let w = 0; w < o.length; w += 1)
        o[w].d();
      for (let w = 0; w < r.length; w += 1)
        r[w].d();
      for (let w = 0; w < u.length; w += 1)
        u[w].d(m);
    }
  };
}
function wr(e, n, t) {
  let o, s, l, f, { anno: r } = n, a = null, c = "0 0 1 1", u = 1, p = 1, h, g = null, y = "", d = { ...Cn }, E, A = [];
  const { store: L } = r.state;
  zl(e, L, (P) => t(29, f = P));
  const b = (P) => {
    var K;
    return {
      ...Cn,
      ...((K = P.properties) == null ? void 0 : K.textStyle) || {}
    };
  }, m = (P) => {
    const K = P.geometry;
    return { x: K.x, y: K.y };
  }, w = (P) => (P.fontSize || Cn.fontSize) / p, k = (P, K) => {
    const { x: oe, y: $ } = m(P), me = K.fontSize || Cn.fontSize;
    return {
      left: oe * p,
      top: $ * p - me
      // input top sits one font-size above baseline
    };
  }, _ = () => {
    if (!a) return;
    const { naturalWidth: P, naturalHeight: K } = a;
    !P || !K || (t(1, u = P), t(0, c = `0 0 ${P} ${K}`), t(2, p = a.getBoundingClientRect().width / P));
  }, M = async (P) => {
    var K, oe, $;
    (($ = (oe = (K = P.target) == null ? void 0 : K.selector) == null ? void 0 : oe.properties) == null ? void 0 : $.toolType) === "text" && (t(3, g = P.id), t(4, y = ""), t(5, d = b(P.target.selector)), await Bn(), E == null || E.focus());
  }, S = async (P) => {
    var $, me, le, ce, ae;
    if (t(7, A = (P == null ? void 0 : P.map((Te) => Te.id)) || []), !(P != null && P.length)) {
      g && N();
      return;
    }
    const K = P[0];
    ((le = (me = ($ = K == null ? void 0 : K.target) == null ? void 0 : $.selector) == null ? void 0 : me.properties) == null ? void 0 : le.toolType) === "text" ? g !== K.id && (g && N(), t(3, g = K.id), t(4, y = ((ae = (ce = K.bodies) == null ? void 0 : ce[0]) == null ? void 0 : ae.value) || ""), t(5, d = b(K.target.selector)), await Bn(), E == null || E.focus()) : g && N();
  }, N = () => {
    if (!g) return;
    const P = o.find((K) => K.id === g);
    if (P) {
      const K = y.trim() ? [
        {
          type: "TextualBody",
          value: y,
          purpose: "commenting"
        }
      ] : [];
      r.updateAnnotation({
        ...P,
        bodies: K,
        target: {
          ...P.target,
          selector: {
            ...P.target.selector,
            properties: {
              ...P.target.selector.properties,
              textStyle: d
            }
          }
        }
      });
    }
    t(3, g = null), t(4, y = "");
  }, G = (P, K) => {
    const oe = o.find(($) => $.id === P);
    oe && (r.updateAnnotation({
      ...oe,
      target: {
        ...oe.target,
        selector: {
          ...oe.target.selector,
          properties: {
            ...oe.target.selector.properties,
            textStyle: K
          }
        }
      }
    }), g === P && t(5, d = K));
  }, I = (P) => {
    g === P && (t(3, g = null), t(4, y = "")), r.removeAnnotation(P);
  }, U = (P) => {
    t(4, y = P.target.value);
  }, H = (P) => {
    P.stopPropagation(), (P.key === "Enter" || P.key === "Escape") && (N(), r.cancelSelected());
  };
  $e(() => {
    a = r.element.querySelector("img"), a && (a.complete && _(), a.addEventListener("load", _), window.ResizeObserver && (h = new ResizeObserver(_), h.observe(a)), r.on("createAnnotation", M), r.on("selectionChanged", S));
  }), Jl(() => {
    a == null || a.removeEventListener("load", _), h == null || h.disconnect(), r.off("createAnnotation", M), r.off("selectionChanged", S);
  });
  const T = (P) => {
    let K = 0;
    for (let oe = 1; oe < P.length; oe++) {
      const [$, me] = P[oe - 1], [le, ce] = P[oe];
      K += Math.hypot(le - $, ce - me);
    }
    return `${Math.round(K)} px`;
  }, q = (P) => P.geometry.points, C = (P) => P.geometry.points.map((K) => K.point), B = (P) => [
    (P[0][0] + P[P.length - 1][0]) / 2,
    (P[0][1] + P[P.length - 1][1]) / 2
  ], Z = (P) => {
    const [[K, oe], [$, me]] = P, le = Math.atan2(me - oe, $ - K), ce = 12, ae = $ - ce * Math.cos(le - Math.PI / 6), Te = me - ce * Math.sin(le - Math.PI / 6), ue = $ - ce * Math.cos(le + Math.PI / 6), Ie = me - ce * Math.sin(le + Math.PI / 6);
    return `${ae},${Te} ${$},${me} ${ue},${Ie}`;
  }, R = (P) => [
    P.bold ? "font-weight:bold" : "",
    P.italic ? "font-style:italic" : "",
    P.underline ? "text-decoration:underline" : ""
  ].filter(Boolean).join(";"), D = (P, K) => [
    `left:${K.left}px`,
    `top:${K.top}px`,
    `font-size:${P.fontSize || Cn.fontSize}px`,
    P.bold ? "font-weight:bold" : "",
    P.italic ? "font-style:italic" : "",
    P.underline ? "text-decoration:underline" : "",
    P.bgColor && P.bgColor !== "transparent" ? `background:${P.bgColor}` : ""
  ].filter(Boolean).join(";"), V = (P, K) => G(P, K.detail), Q = (P) => I(P);
  function ne(P) {
    pn[P ? "unshift" : "push"](() => {
      E = P, t(6, E);
    });
  }
  return e.$$set = (P) => {
    "anno" in P && t(27, r = P.anno);
  }, e.$$.update = () => {
    e.$$.dirty[0] & /*$store*/
    536870912 && t(28, o = f), e.$$.dirty[0] & /*allAnnotations*/
    268435456 && t(9, s = o.map((P) => {
      var K;
      return { id: P.id, selector: (K = P.target) == null ? void 0 : K.selector };
    }).filter(({ selector: P }) => {
      var K;
      return ["arrow", "distance"].includes(((K = P == null ? void 0 : P.properties) == null ? void 0 : K.toolType) || "");
    })), e.$$.dirty[0] & /*allAnnotations*/
    268435456 && t(8, l = o.map((P) => {
      var K, oe, $;
      return {
        id: P.id,
        annotation: P,
        selector: (K = P.target) == null ? void 0 : K.selector,
        text: ($ = (oe = P.bodies) == null ? void 0 : oe[0]) == null ? void 0 : $.value
      };
    }).filter(({ selector: P }) => {
      var K;
      return ((K = P == null ? void 0 : P.properties) == null ? void 0 : K.toolType) === "text";
    }));
  }, [
    c,
    u,
    p,
    g,
    y,
    d,
    E,
    A,
    l,
    s,
    L,
    b,
    m,
    w,
    k,
    N,
    G,
    I,
    U,
    H,
    T,
    q,
    C,
    B,
    Z,
    R,
    D,
    r,
    o,
    f,
    V,
    Q,
    ne
  ];
}
class br extends Le {
  constructor(n) {
    super(), Pe(this, n, wr, yr, Me, { anno: 27 }, null, [-1, -1]);
  }
}
const vr = (e) => {
  if ("element" in e)
    return new br({
      target: e.element,
      props: { anno: e }
    });
};
function ss(e) {
  let n, t, o, s, l, f = (
    /*isClosable*/
    e[1] && ls(e)
  );
  return {
    c() {
      n = z("path"), o = z("path"), f && f.c(), l = Ce(), i(n, "class", t = xe(`a9s-outer ${/*isClosable*/
      e[1] ? "closed" : "open"}`) + " svelte-1fo8cp4"), i(
        n,
        "d",
        /*pathString*/
        e[2]
      ), i(o, "class", s = xe(`a9s-inner ${/*isClosable*/
      e[1] ? "closed" : "open"}`) + " svelte-1fo8cp4"), i(
        o,
        "d",
        /*pathString*/
        e[2]
      );
    },
    m(r, a) {
      X(r, n, a), X(r, o, a), f && f.m(r, a), X(r, l, a);
    },
    p(r, a) {
      a & /*isClosable*/
      2 && t !== (t = xe(`a9s-outer ${/*isClosable*/
      r[1] ? "closed" : "open"}`) + " svelte-1fo8cp4") && i(n, "class", t), a & /*pathString*/
      4 && i(
        n,
        "d",
        /*pathString*/
        r[2]
      ), a & /*isClosable*/
      2 && s !== (s = xe(`a9s-inner ${/*isClosable*/
      r[1] ? "closed" : "open"}`) + " svelte-1fo8cp4") && i(o, "class", s), a & /*pathString*/
      4 && i(
        o,
        "d",
        /*pathString*/
        r[2]
      ), /*isClosable*/
      r[1] ? f ? f.p(r, a) : (f = ls(r), f.c(), f.m(l.parentNode, l)) : f && (f.d(1), f = null);
    },
    d(r) {
      r && (j(n), j(o), j(l)), f && f.d(r);
    }
  };
}
function ls(e) {
  let n, t, o;
  return {
    c() {
      n = z("circle"), i(n, "class", "a9s-handle svelte-1fo8cp4"), i(n, "cx", t = /*points*/
      e[0][0][0]), i(n, "cy", o = /*points*/
      e[0][0][1]), i(
        n,
        "r",
        /*handleRadius*/
        e[3]
      );
    },
    m(s, l) {
      X(s, n, l);
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
function Er(e) {
  let n, t = (
    /*pathString*/
    e[2] && ss(e)
  );
  return {
    c() {
      n = z("g"), t && t.c(), i(n, "class", "a9s-annotation a9s-rubberband");
    },
    m(o, s) {
      X(o, n, s), t && t.m(n, null);
    },
    p(o, [s]) {
      /*pathString*/
      o[2] ? t ? t.p(o, s) : (t = ss(o), t.c(), t.m(n, null)) : t && (t.d(1), t = null);
    },
    i: we,
    o: we,
    d(o) {
      o && j(n), t && t.d();
    }
  };
}
const kr = 20, Tr = 1500;
function Sr(e, n, t) {
  let o, s, l;
  const f = We();
  let { addEventListener: r } = n, { drawingMode: a } = n, { transform: c } = n, { viewportScale: u = 1 } = n, p, h = [], g, y = !1, d;
  const E = (w) => {
    const k = w, { timeStamp: _, offsetX: M, offsetY: S } = k;
    if (p = { timeStamp: _, offsetX: M, offsetY: S }, a === "drag" && h.length === 0) {
      const N = c.elementToImage(k.offsetX, k.offsetY);
      h.push(N), t(8, g = N);
    }
  }, A = (w) => {
    const k = w;
    if (d && clearTimeout(d), h.length > 0) {
      if (t(8, g = c.elementToImage(k.offsetX, k.offsetY)), h.length > 2) {
        const _ = en(g, h[0]) * u;
        t(1, y = _ < kr);
      }
      k.pointerType === "touch" && (d = setTimeout(
        () => {
          b();
        },
        Tr
      ));
    }
  }, L = (w) => {
    const k = w;
    if (d && clearTimeout(d), a === "click") {
      const _ = k.timeStamp - p.timeStamp, M = en([p.offsetX, p.offsetY], [k.offsetX, k.offsetY]);
      if (_ > 300 || M > 15) return;
      if (y)
        m();
      else if (h.length === 0) {
        const S = c.elementToImage(k.offsetX, k.offsetY);
        h.push(S), t(8, g = S);
      } else
        h.push(g);
    } else {
      if (h.length === 1 && en(h[0], g) <= 4) {
        t(0, h = []), t(8, g = void 0);
        return;
      }
      k.stopImmediatePropagation(), y ? m() : h.push(g);
    }
  }, b = () => {
    if (!g) return;
    const w = h.slice(0, -1);
    if (w.length < 2) return;
    const k = {
      type: ke.POLYLINE,
      geometry: {
        bounds: He(w),
        points: w.map((_) => ({ type: "CORNER", point: _ }))
      }
    };
    t(0, h = []), t(8, g = void 0), f("create", k);
  }, m = () => {
    const w = {
      type: ke.POLYLINE,
      geometry: {
        bounds: He(h),
        points: h.map((k) => ({ type: "CORNER", point: k })),
        closed: !0
      }
    };
    t(0, h = []), t(8, g = void 0), f("create", w);
  };
  return $e(() => {
    r("pointerdown", E, !0), r("pointermove", A), r("pointerup", L, !0), r("dblclick", b, !0);
  }), e.$$set = (w) => {
    "addEventListener" in w && t(4, r = w.addEventListener), "drawingMode" in w && t(5, a = w.drawingMode), "transform" in w && t(6, c = w.transform), "viewportScale" in w && t(7, u = w.viewportScale);
  }, e.$$.update = () => {
    e.$$.dirty & /*viewportScale*/
    128 && t(3, o = 4 / u), e.$$.dirty & /*cursor, isClosable, points*/
    259 && t(9, s = g ? y ? h : [...h, g] : []), e.$$.dirty & /*coords, isClosable*/
    514 && t(2, l = s.length > 0 ? `M ${s[0][0]},${s[0][1]}` + s.slice(1).map(([w, k]) => ` L ${w},${k}`).join("") + (y ? " Z" : "") : "");
  }, [
    h,
    y,
    l,
    o,
    r,
    a,
    c,
    u,
    g,
    s
  ];
}
class Mr extends Le {
  constructor(n) {
    super(), Pe(this, n, Sr, Er, Me, {
      addEventListener: 4,
      drawingMode: 5,
      transform: 6,
      viewportScale: 7
    });
  }
}
const Pr = (e, n, t) => {
  const { points: o, closed: s } = e.geometry, l = o[n], f = n === 0 ? s ? o.length - 1 : null : n - 1, r = n === o.length - 1 ? s ? 0 : null : n + 1;
  let a = 0, c = 0;
  if (f !== null && r !== null) {
    const p = o[f].point, h = o[r].point;
    a = h[0] - p[0], c = h[1] - p[1];
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
}, Lr = (e, n) => {
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
}, Or = (e, n, t) => {
  const o = e.geometry.points[n];
  if (o.type === "CORNER") {
    const [s, l] = Pr(e, n, t), f = o.point, r = o.inHandle || [
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
function Hr(e) {
  let n, t, o, s, l;
  return {
    c() {
      n = z("circle"), i(n, "class", "a9s-tangent-handle svelte-103tdqm"), i(n, "cx", t = /*controlPoint*/
      e[1][0]), i(n, "cy", o = /*controlPoint*/
      e[1][1]), i(
        n,
        "r",
        /*handleRadius*/
        e[3]
      );
    },
    m(f, r) {
      X(f, n, r), s || (l = x(
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
function Ir(e) {
  let n, t, o, s, l, f, r, a, c;
  return {
    c() {
      n = z("circle"), l = z("circle"), i(n, "cx", t = /*controlPoint*/
      e[1][0]), i(n, "cy", o = /*controlPoint*/
      e[1][1]), i(n, "class", "a9s-tangent-handle-buffer svelte-103tdqm"), i(n, "r", s = 3 * /*handleRadius*/
      e[3]), Ve(
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
      X(u, n, p), X(u, l, p), a || (c = [
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
      4 && Ve(
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
      u && (j(n), j(l)), a = !1, Se(c);
    }
  };
}
function Cr(e) {
  let n, t, o, s, l, f, r, a, c, u, p;
  function h(d, E) {
    return nn ? Ir : Hr;
  }
  let y = h()(e);
  return {
    c() {
      n = z("g"), t = z("line"), r = z("line"), y.c(), i(t, "class", "a9s-tangent-line a9s-outer svelte-103tdqm"), i(t, "x1", o = /*corner*/
      e[0][0]), i(t, "y1", s = /*corner*/
      e[0][1]), i(t, "x2", l = /*controlPoint*/
      e[1][0]), i(t, "y2", f = /*controlPoint*/
      e[1][1]), i(r, "class", "a9s-tangent-line a9s-inner svelte-103tdqm"), i(r, "x1", a = /*corner*/
      e[0][0]), i(r, "y1", c = /*corner*/
      e[0][1]), i(r, "x2", u = /*controlPoint*/
      e[1][0]), i(r, "y2", p = /*controlPoint*/
      e[1][1]), i(n, "class", "a9s-bezier-handle svelte-103tdqm");
    },
    m(d, E) {
      X(d, n, E), J(n, t), J(n, r), y.m(n, null);
    },
    p(d, [E]) {
      E & /*corner*/
      1 && o !== (o = /*corner*/
      d[0][0]) && i(t, "x1", o), E & /*corner*/
      1 && s !== (s = /*corner*/
      d[0][1]) && i(t, "y1", s), E & /*controlPoint*/
      2 && l !== (l = /*controlPoint*/
      d[1][0]) && i(t, "x2", l), E & /*controlPoint*/
      2 && f !== (f = /*controlPoint*/
      d[1][1]) && i(t, "y2", f), E & /*corner*/
      1 && a !== (a = /*corner*/
      d[0][0]) && i(r, "x1", a), E & /*corner*/
      1 && c !== (c = /*corner*/
      d[0][1]) && i(r, "y1", c), E & /*controlPoint*/
      2 && u !== (u = /*controlPoint*/
      d[1][0]) && i(r, "x2", u), E & /*controlPoint*/
      2 && p !== (p = /*controlPoint*/
      d[1][1]) && i(r, "y2", p), y.p(d, E);
    },
    i: we,
    o: we,
    d(d) {
      d && j(n), y.d();
    }
  };
}
function Rr(e, n, t) {
  let o, { corner: s } = n, { controlPoint: l } = n, { viewportScale: f = 1 } = n, r = !1;
  const a = (h) => {
    h.pointerType === "touch" && t(2, r = !0);
  }, c = () => t(2, r = !1);
  function u(h) {
    pe.call(this, e, h);
  }
  function p(h) {
    pe.call(this, e, h);
  }
  return e.$$set = (h) => {
    "corner" in h && t(0, s = h.corner), "controlPoint" in h && t(1, l = h.controlPoint), "viewportScale" in h && t(6, f = h.viewportScale);
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
class As extends Le {
  constructor(n) {
    super(), Pe(this, n, Rr, Cr, Me, {
      corner: 0,
      controlPoint: 1,
      viewportScale: 6
    });
  }
}
function yt(e) {
  const n = e.slice(), t = (
    /*midpoints*/
    n[11][
      /*visibleMidpoint*/
      n[6]
    ]
  );
  return n[31] = t.point, n;
}
function is(e, n, t) {
  const o = e.slice();
  return o[32] = n[t], o[34] = t, o;
}
function wt(e) {
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
function bt(e) {
  const n = e.slice(), t = (
    /*midpoints*/
    n[11][
      /*visibleMidpoint*/
      n[6]
    ]
  );
  return n[31] = t.point, n;
}
function rs(e) {
  let n, t, o, s, l, f, r, a, c, u;
  return {
    c() {
      n = z("mask"), t = z("rect"), r = z("circle"), i(t, "x", o = /*mask*/
      e[9].x), i(t, "y", s = /*mask*/
      e[9].y), i(t, "width", l = /*mask*/
      e[9].w), i(t, "height", f = /*mask*/
      e[9].h), i(t, "class", "svelte-sq8d4p"), i(r, "cx", a = /*point*/
      e[31][0]), i(r, "cy", c = /*point*/
      e[31][1]), i(r, "r", u = Ot / /*viewportScale*/
      e[3]), i(r, "class", "svelte-sq8d4p"), i(
        n,
        "id",
        /*maskId*/
        e[20]
      ), i(n, "class", "a9s-polygon-editor-mask svelte-sq8d4p");
    },
    m(p, h) {
      X(p, n, h), J(n, t), J(n, r);
    },
    p(p, h) {
      h[0] & /*mask*/
      512 && o !== (o = /*mask*/
      p[9].x) && i(t, "x", o), h[0] & /*mask*/
      512 && s !== (s = /*mask*/
      p[9].y) && i(t, "y", s), h[0] & /*mask*/
      512 && l !== (l = /*mask*/
      p[9].w) && i(t, "width", l), h[0] & /*mask*/
      512 && f !== (f = /*mask*/
      p[9].h) && i(t, "height", f), h[0] & /*midpoints, visibleMidpoint*/
      2112 && a !== (a = /*point*/
      p[31][0]) && i(r, "cx", a), h[0] & /*midpoints, visibleMidpoint*/
      2112 && c !== (c = /*point*/
      p[31][1]) && i(r, "cy", c), h[0] & /*viewportScale*/
      8 && u !== (u = Ot / /*viewportScale*/
      p[3]) && i(r, "r", u);
    },
    d(p) {
      p && j(n);
    }
  };
}
function fs(e) {
  let n, t, o = (
    /*corner*/
    e[36].type === "CURVE" && as(e)
  );
  return {
    c() {
      o && o.c(), n = Ce();
    },
    m(s, l) {
      o && o.m(s, l), X(s, n, l), t = !0;
    },
    p(s, l) {
      /*corner*/
      s[36].type === "CURVE" ? o ? (o.p(s, l), l[0] & /*geom, selectedCorners*/
      288 && W(o, 1)) : (o = as(s), o.c(), W(o, 1), o.m(n.parentNode, n)) : o && (Be(), ee(o, 1, 1, () => {
        o = null;
      }), Ue());
    },
    i(s) {
      t || (W(o), t = !0);
    },
    o(s) {
      ee(o), t = !1;
    },
    d(s) {
      s && j(n), o && o.d(s);
    }
  };
}
function as(e) {
  let n, t, o, s = (
    /*corner*/
    e[36].inHandle && cs(e)
  ), l = (
    /*corner*/
    e[36].outHandle && us(e)
  );
  return {
    c() {
      s && s.c(), n = te(), l && l.c(), t = Ce();
    },
    m(f, r) {
      s && s.m(f, r), X(f, n, r), l && l.m(f, r), X(f, t, r), o = !0;
    },
    p(f, r) {
      /*corner*/
      f[36].inHandle ? s ? (s.p(f, r), r[0] & /*geom, selectedCorners*/
      288 && W(s, 1)) : (s = cs(f), s.c(), W(s, 1), s.m(n.parentNode, n)) : s && (Be(), ee(s, 1, 1, () => {
        s = null;
      }), Ue()), /*corner*/
      f[36].outHandle ? l ? (l.p(f, r), r[0] & /*geom, selectedCorners*/
      288 && W(l, 1)) : (l = us(f), l.c(), W(l, 1), l.m(t.parentNode, t)) : l && (Be(), ee(l, 1, 1, () => {
        l = null;
      }), Ue());
    },
    i(f) {
      o || (W(s), W(l), o = !0);
    },
    o(f) {
      ee(s), ee(l), o = !1;
    },
    d(f) {
      f && (j(n), j(t)), s && s.d(f), l && l.d(f);
    }
  };
}
function cs(e) {
  let n, t;
  return n = new As({
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
      ge(n.$$.fragment);
    },
    m(o, s) {
      he(n, o, s), t = !0;
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
      t || (W(n.$$.fragment, o), t = !0);
    },
    o(o) {
      ee(n.$$.fragment, o), t = !1;
    },
    d(o) {
      de(n, o);
    }
  };
}
function us(e) {
  let n, t;
  return n = new As({
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
      ge(n.$$.fragment);
    },
    m(o, s) {
      he(n, o, s), t = !0;
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
      t || (W(n.$$.fragment, o), t = !0);
    },
    o(o) {
      ee(n.$$.fragment, o), t = !1;
    },
    d(o) {
      de(n, o);
    }
  };
}
function ps(e) {
  let n, t;
  return n = new Ae({
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
      ge(n.$$.fragment);
    },
    m(o, s) {
      he(n, o, s), t = !0;
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
      t || (W(n.$$.fragment, o), t = !0);
    },
    o(o) {
      ee(n.$$.fragment, o), t = !1;
    },
    d(o) {
      de(n, o);
    }
  };
}
function hs(e) {
  let n, t;
  return n = new Nt({
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
      ge(n.$$.fragment);
    },
    m(o, s) {
      he(n, o, s), t = !0;
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
      t || (W(n.$$.fragment, o), t = !0);
    },
    o(o) {
      ee(n.$$.fragment, o), t = !1;
    },
    d(o) {
      de(n, o);
    }
  };
}
function Nr(e) {
  let n, t, o, s, l, f, r, a, c, u, p, h, g, y, d, E, A, L, b, m = (
    /*visibleMidpoint*/
    e[6] !== void 0 && !/*isHandleHovered*/
    e[7] && rs(bt(e))
  ), w = (
    /*selectedCorners*/
    e[8].length === 1 && fs(wt(e))
  ), k = Ne(
    /*geom*/
    e[5].points
  ), _ = [];
  for (let N = 0; N < k.length; N += 1)
    _[N] = ps(is(e, k, N));
  const M = (N) => ee(_[N], 1, 1, () => {
    _[N] = null;
  });
  let S = (
    /*visibleMidpoint*/
    e[6] !== void 0 && !/*isHandleHovered*/
    e[7] && hs(yt(e))
  );
  return {
    c() {
      n = z("defs"), m && m.c(), t = te(), o = z("g"), s = z("rect"), c = z("path"), p = z("path"), g = te(), w && w.c(), y = te();
      for (let N = 0; N < _.length; N += 1)
        _[N].c();
      d = te(), S && S.c(), E = Ce(), i(s, "x", l = /*mask*/
      e[9].x), i(s, "y", f = /*mask*/
      e[9].y), i(s, "width", r = /*mask*/
      e[9].w), i(s, "height", a = /*mask*/
      e[9].h), i(s, "class", "mask-buffer svelte-sq8d4p"), i(c, "class", u = xe(`a9s-outer polyline ${/*shape*/
      e[0].geometry.closed ? "closed" : "open"}`) + " svelte-sq8d4p"), i(
        c,
        "d",
        /*d*/
        e[10]
      ), i(p, "class", h = xe(`a9s-inner polyline a9s-shape-handle ${/*shape*/
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
    m(N, G) {
      X(N, n, G), m && m.m(n, null), X(N, t, G), X(N, o, G), J(o, s), J(o, c), J(o, p), X(N, g, G), w && w.m(N, G), X(N, y, G);
      for (let I = 0; I < _.length; I += 1)
        _[I] && _[I].m(N, G);
      X(N, d, G), S && S.m(N, G), X(N, E, G), A = !0, L || (b = [
        x(
          c,
          "pointerup",
          /*onShapePointerUp*/
          e[14]
        ),
        x(c, "pointerdown", function() {
          se(
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
          se(
            /*grab*/
            e[30]("SHAPE")
          ) && e[30]("SHAPE").apply(this, arguments);
        })
      ], L = !0);
    },
    p(N, G) {
      if (e = N, /*visibleMidpoint*/
      e[6] !== void 0 && !/*isHandleHovered*/
      e[7] ? m ? m.p(bt(e), G) : (m = rs(bt(e)), m.c(), m.m(n, null)) : m && (m.d(1), m = null), (!A || G[0] & /*mask*/
      512 && l !== (l = /*mask*/
      e[9].x)) && i(s, "x", l), (!A || G[0] & /*mask*/
      512 && f !== (f = /*mask*/
      e[9].y)) && i(s, "y", f), (!A || G[0] & /*mask*/
      512 && r !== (r = /*mask*/
      e[9].w)) && i(s, "width", r), (!A || G[0] & /*mask*/
      512 && a !== (a = /*mask*/
      e[9].h)) && i(s, "height", a), (!A || G[0] & /*shape*/
      1 && u !== (u = xe(`a9s-outer polyline ${/*shape*/
      e[0].geometry.closed ? "closed" : "open"}`) + " svelte-sq8d4p")) && i(c, "class", u), (!A || G[0] & /*d*/
      1024) && i(
        c,
        "d",
        /*d*/
        e[10]
      ), (!A || G[0] & /*shape*/
      1 && h !== (h = xe(`a9s-inner polyline a9s-shape-handle ${/*shape*/
      e[0].geometry.closed ? "closed" : "open"}`) + " svelte-sq8d4p")) && i(p, "class", h), (!A || G[0] & /*computedStyle*/
      2) && i(
        p,
        "style",
        /*computedStyle*/
        e[1]
      ), (!A || G[0] & /*d*/
      1024) && i(
        p,
        "d",
        /*d*/
        e[10]
      ), /*selectedCorners*/
      e[8].length === 1 ? w ? (w.p(wt(e), G), G[0] & /*selectedCorners*/
      256 && W(w, 1)) : (w = fs(wt(e)), w.c(), W(w, 1), w.m(y.parentNode, y)) : w && (Be(), ee(w, 1, 1, () => {
        w = null;
      }), Ue()), G[0] & /*geom, viewportScale, selectedCorners, onDoubleClick, onEnterHandle, onLeaveHandle, onHandlePointerDown, grab, onHandlePointerUp*/
      1073983784) {
        k = Ne(
          /*geom*/
          e[5].points
        );
        let I;
        for (I = 0; I < k.length; I += 1) {
          const U = is(e, k, I);
          _[I] ? (_[I].p(U, G), W(_[I], 1)) : (_[I] = ps(U), _[I].c(), W(_[I], 1), _[I].m(d.parentNode, d));
        }
        for (Be(), I = k.length; I < _.length; I += 1)
          M(I);
        Ue();
      }
      /*visibleMidpoint*/
      e[6] !== void 0 && !/*isHandleHovered*/
      e[7] ? S ? (S.p(yt(e), G), G[0] & /*visibleMidpoint, isHandleHovered*/
      192 && W(S, 1)) : (S = hs(yt(e)), S.c(), W(S, 1), S.m(E.parentNode, E)) : S && (Be(), ee(S, 1, 1, () => {
        S = null;
      }), Ue());
    },
    i(N) {
      if (!A) {
        W(w);
        for (let G = 0; G < k.length; G += 1)
          W(_[G]);
        W(S), A = !0;
      }
    },
    o(N) {
      ee(w), _ = _.filter(Boolean);
      for (let G = 0; G < _.length; G += 1)
        ee(_[G]);
      ee(S), A = !1;
    },
    d(N) {
      N && (j(n), j(t), j(o), j(g), j(y), j(d), j(E)), m && m.d(), w && w.d(N), Hn(_, N), S && S.d(N), L = !1, Se(b);
    }
  };
}
function Ar(e) {
  let n, t;
  return n = new fn({
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
          Nr,
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
      he(n, o, s), t = !0;
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
      t || (W(n.$$.fragment, o), t = !0);
    },
    o(o) {
      ee(n.$$.fragment, o), t = !1;
    },
    d(o) {
      de(n, o);
    }
  };
}
const Dr = 250, jr = 1e3, Xr = 12, Ot = 4.5;
function Br(e, n, t) {
  let o, s, l, f;
  const r = We();
  let { shape: a } = n, { computedStyle: c } = n, { transform: u } = n, { viewportScale: p = 1 } = n, { svgEl: h } = n, g, y = !1, d = null, E = [], A = !1;
  const L = () => t(7, y = !0), b = () => t(7, y = !1), m = (C) => {
    if (E.length > 0 || !s.some((P) => P.visible)) {
      t(6, g = void 0);
      return;
    }
    const [B, Z] = u.elementToImage(C.offsetX, C.offsetY), R = (P) => Math.pow(P[0] - B, 2) + Math.pow(P[1] - Z, 2), D = o.points.reduce((P, K) => R(K.point) < R(P.point) ? K : P), V = s.filter((P) => P.visible).reduce((P, K) => R(K.point) < R(P.point) ? K : P), Q = Math.pow(jr / p, 2);
    R(D.point) < Q || R(V.point) < Q ? t(6, g = s.indexOf(V)) : t(6, g = void 0);
  }, w = () => {
    document.activeElement !== h && h.focus();
  }, k = () => {
    t(8, E = []), w();
  }, _ = (C) => {
    t(7, y = !0), C.preventDefault(), C.stopPropagation(), d = performance.now();
  }, M = (C) => (B) => {
    if (!d || performance.now() - d > Dr) return;
    const Z = E.includes(C);
    if (A) {
      const R = Or(a, C, p);
      r("change", R), (!Z || E.length > 1) && t(8, E = [C]);
    } else B.metaKey || B.ctrlKey || B.shiftKey ? Z ? t(8, E = E.filter((R) => R !== C)) : t(8, E = [...E, C]) : Z && E.length > 1 ? t(8, E = [C]) : Z ? t(8, E = []) : t(8, E = [C]);
  }, S = (C) => () => {
    const B = o.points[C];
    if (B.type === "CORNER" || !B.inHandle && !B.outHandle) return;
    const Z = o.points.map((V, Q) => {
      if (Q !== C) return V;
      const ne = { ...V, locked: !0 }, P = B.inHandle || B.outHandle;
      if (!P) return V;
      const K = P[0] - B.point[0], oe = P[1] - B.point[1];
      if (Math.sqrt(K ** 2 + oe ** 2) === 0) return V;
      const me = [B.point[0] - K, B.point[1] - oe];
      return B.inHandle ? (ne.inHandle = B.inHandle, ne.outHandle = me) : B.outHandle && (ne.outHandle = B.outHandle, ne.inHandle = me), ne;
    }), R = He(bn(Z, o.closed)), D = {
      ...a,
      geometry: { bounds: R, points: Z, closed: o.closed }
    };
    r("change", D);
  }, N = (C, B, Z) => {
    const R = C.geometry, [D, V] = Z;
    let Q;
    if (B === "SHAPE")
      Q = R.points.map((P) => ({
        ...P,
        point: [P.point[0] + D, P.point[1] + V],
        inHandle: P.inHandle ? [P.inHandle[0] + D, P.inHandle[1] + V] : void 0,
        outHandle: P.outHandle ? [P.outHandle[0] + D, P.outHandle[1] + V] : void 0
      }));
    else if (B.startsWith("CORNER-")) {
      const P = parseInt(B.split("-")[1]);
      Q = R.points.map((K, oe) => oe === P ? {
        ...K,
        point: [K.point[0] + D, K.point[1] + V],
        inHandle: K.inHandle ? [K.inHandle[0] + D, K.inHandle[1] + V] : void 0,
        outHandle: K.outHandle ? [K.outHandle[0] + D, K.outHandle[1] + V] : void 0
      } : K);
    } else if (B.startsWith("IN-") || B.startsWith("OUT-")) {
      const [P, K] = B.split("-"), oe = parseInt(K);
      Q = R.points.map(($, me) => {
        if (me === oe && $.type === "CURVE") {
          const le = A ? !1 : $.locked, ce = { ...$, locked: le };
          if (P === "IN" && $.inHandle) {
            if (ce.inHandle = [$.inHandle[0] + D, $.inHandle[1] + V], $.outHandle && le) {
              const ae = ce.inHandle[0] - $.point[0], Te = ce.inHandle[1] - $.point[1], ue = Math.sqrt(ae ** 2 + Te ** 2), Ie = Math.sqrt(($.outHandle[0] - $.point[0]) ** 2 + ($.outHandle[1] - $.point[1]) ** 2);
              ue > 0 && (ce.outHandle = [
                $.point[0] - ae / ue * Ie,
                $.point[1] - Te / ue * Ie
              ]);
            }
          } else if (P === "OUT" && $.outHandle && (ce.outHandle = [$.outHandle[0] + D, $.outHandle[1] + V], $.inHandle && le)) {
            const ae = ce.outHandle[0] - $.point[0], Te = ce.outHandle[1] - $.point[1], ue = Math.sqrt(ae ** 2 + Te ** 2), Ie = Math.sqrt(($.inHandle[0] - $.point[0]) ** 2 + ($.inHandle[1] - $.point[1]) ** 2);
            ue > 0 && (ce.inHandle = [
              $.point[0] - ae / ue * Ie,
              $.point[1] - Te / ue * Ie
            ]);
          }
          return ce;
        }
        return $;
      });
    } else
      Q = R.points;
    const ne = He(bn(Q, R.closed));
    return {
      ...C,
      geometry: { bounds: ne, points: Q, closed: R.closed }
    };
  }, G = (C) => async (B) => {
    B.stopPropagation();
    const Z = [
      ...o.points.slice(0, C + 1),
      {
        type: "CORNER",
        point: s[C].point
      },
      ...o.points.slice(C + 1)
    ], R = He(bn(Z, o.closed));
    r("change", {
      ...a,
      geometry: { points: Z, bounds: R, closed: o.closed }
    }), await Bn();
    const D = [...document.querySelectorAll(".a9s-handle")][C + 1];
    if (D != null && D.firstChild) {
      const V = new PointerEvent(
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
      D.firstChild.dispatchEvent(V);
    }
  }, I = () => {
    const C = o.closed ? 3 : 2;
    if (o.points.length - E.length < C) return;
    const B = o.points.filter((R, D) => !E.includes(D)), Z = He(bn(B, o.closed));
    r("change", {
      ...a,
      geometry: {
        closed: a.geometry.closed,
        bounds: Z,
        points: B
      }
    }), t(8, E = []);
  };
  $e(() => {
    const C = (Z) => {
      Z.altKey && !A && (A = !0), (Z.key === "Delete" || Z.key === "Backspace") && I();
    }, B = (Z) => {
      !Z.altKey && A && (A = !1);
    };
    return h.addEventListener("pointermove", m), window.addEventListener("keydown", C), window.addEventListener("keyup", B), () => {
      h.removeEventListener("pointermove", m), window.removeEventListener("keydown", C), window.removeEventListener("keyup", B);
    };
  });
  const U = `polygon-mask-${Math.random().toString(36).substring(2, 12)}`;
  function H(C) {
    pe.call(this, e, C);
  }
  function T(C) {
    pe.call(this, e, C);
  }
  function q(C) {
    pe.call(this, e, C);
  }
  return e.$$set = (C) => {
    "shape" in C && t(0, a = C.shape), "computedStyle" in C && t(1, c = C.computedStyle), "transform" in C && t(2, u = C.transform), "viewportScale" in C && t(3, p = C.viewportScale), "svgEl" in C && t(4, h = C.svgEl);
  }, e.$$.update = () => {
    e.$$.dirty[0] & /*shape*/
    1 && t(5, o = a.geometry), e.$$.dirty[0] & /*geom, viewportScale*/
    40 && t(11, s = nn ? [] : o.points.reduce(
      (C, B, Z) => {
        const R = Z === o.points.length - 1 ? (
          // Last point
          o.closed ? o.points[0] : void 0
        ) : o.points[Z + 1];
        if (!R) return C;
        const [D, V] = Lr(B, R), ne = Math.sqrt(Math.pow(R.point[0] - D, 2) + Math.pow(R.point[1] - V, 2)) > Xr / p;
        return [...C, { point: [D, V], visible: ne }];
      },
      []
    )), e.$$.dirty[0] & /*geom*/
    32 && t(10, l = il(o)), e.$$.dirty[0] & /*geom, viewportScale*/
    40 && t(9, f = hn(o.bounds, Ot / p));
  }, [
    a,
    c,
    u,
    p,
    h,
    o,
    g,
    y,
    E,
    f,
    l,
    s,
    L,
    b,
    k,
    _,
    M,
    S,
    N,
    G,
    U,
    H,
    T,
    q
  ];
}
class Ur extends Le {
  constructor(n) {
    super(), Pe(
      this,
      n,
      Br,
      Ar,
      Me,
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
function Gr(e) {
  var L, b;
  let n, t, o, s, l, f, r, a, c, u, p, h, g, y, d, E, A;
  return y = new Ae({
    props: {
      class: "a9s-corner-top",
      x: (
        /*points*/
        ((L = e[5][0]) == null ? void 0 : L[0]) ?? /*center*/
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
  }), y.$on("pointerdown", function() {
    se(
      /*grab*/
      e[17]("SCALE")
    ) && e[17]("SCALE").apply(this, arguments);
  }), {
    c() {
      n = z("defs"), t = z("mask"), o = z("rect"), a = z("path"), c = te(), u = z("path"), p = te(), h = z("path"), g = te(), ge(y.$$.fragment), i(o, "x", s = /*mask*/
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
      ), i(h, "class", "a9s-inner a9s-shape-handle"), i(
        h,
        "style",
        /*computedStyle*/
        e[1]
      ), i(
        h,
        "d",
        /*pathString*/
        e[8]
      );
    },
    m(m, w) {
      X(m, n, w), J(n, t), J(t, o), J(t, a), X(m, c, w), X(m, u, w), X(m, p, w), X(m, h, w), X(m, g, w), he(y, m, w), d = !0, E || (A = [
        x(u, "pointerdown", function() {
          se(
            /*grab*/
            e[17]("SHAPE")
          ) && e[17]("SHAPE").apply(this, arguments);
        }),
        x(h, "pointerdown", function() {
          se(
            /*grab*/
            e[17]("SHAPE")
          ) && e[17]("SHAPE").apply(this, arguments);
        })
      ], E = !0);
    },
    p(m, w) {
      var _, M;
      e = m, (!d || w & /*mask*/
      128 && s !== (s = /*mask*/
      e[7].x)) && i(o, "x", s), (!d || w & /*mask*/
      128 && l !== (l = /*mask*/
      e[7].y)) && i(o, "y", l), (!d || w & /*mask*/
      128 && f !== (f = /*mask*/
      e[7].w)) && i(o, "width", f), (!d || w & /*mask*/
      128 && r !== (r = /*mask*/
      e[7].h)) && i(o, "height", r), (!d || w & /*pathString*/
      256) && i(
        a,
        "d",
        /*pathString*/
        e[8]
      ), (!d || w & /*pathString*/
      256) && i(
        u,
        "d",
        /*pathString*/
        e[8]
      ), (!d || w & /*computedStyle*/
      2) && i(
        h,
        "style",
        /*computedStyle*/
        e[1]
      ), (!d || w & /*pathString*/
      256) && i(
        h,
        "d",
        /*pathString*/
        e[8]
      );
      const k = {};
      w & /*points, center*/
      96 && (k.x = /*points*/
      ((_ = e[5][0]) == null ? void 0 : _[0]) ?? /*center*/
      e[6].x), w & /*points, center, outerRadius*/
      608 && (k.y = /*points*/
      ((M = e[5][0]) == null ? void 0 : M[1]) ?? /*center*/
      e[6].y - /*outerRadius*/
      e[9]), w & /*viewportScale*/
      8 && (k.scale = /*viewportScale*/
      e[3]), y.$set(k);
    },
    i(m) {
      d || (W(y.$$.fragment, m), d = !0);
    },
    o(m) {
      ee(y.$$.fragment, m), d = !1;
    },
    d(m) {
      m && (j(n), j(c), j(u), j(p), j(h), j(g)), de(y, m), E = !1, Se(A);
    }
  };
}
function qr(e) {
  let n, t;
  return n = new fn({
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
          Gr,
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
      he(n, o, s), t = !0;
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
      t || (W(n.$$.fragment, o), t = !0);
    },
    o(o) {
      ee(n.$$.fragment, o), t = !1;
    },
    d(o) {
      de(n, o);
    }
  };
}
function Yr(e, n, t) {
  let o, s, l, f, r, a, c, { shape: u } = n, { computedStyle: p } = n, { transform: h } = n, { viewportScale: g = 1 } = n, { svgEl: y } = n;
  const d = (m, w, k) => {
    const _ = m.geometry, [M, S] = k;
    let N;
    if (w === "SHAPE")
      N = _.points.map(([G, I]) => [G + M, I + S]);
    else if (w === "SCALE") {
      const G = (_.bounds.minX + _.bounds.maxX) / 2, I = (_.bounds.minY + _.bounds.maxY) / 2, U = _.points[0], H = Math.sqrt(Math.pow(U[0] - G, 2) + Math.pow(U[1] - I, 2)), T = U[1] + S, q = Math.sqrt(Math.pow(U[0] - G, 2) + Math.pow(T - I, 2)), C = H > 0 ? q / H : 1;
      N = _.points.map(([B, Z]) => [G + (B - G) * C, I + (Z - I) * C]);
    } else
      N = _.points;
    return {
      ...m,
      geometry: {
        bounds: He(N),
        points: N
      }
    };
  }, E = `star-mask-${Math.random().toString(36).substring(2, 12)}`;
  function A(m) {
    pe.call(this, e, m);
  }
  function L(m) {
    pe.call(this, e, m);
  }
  function b(m) {
    pe.call(this, e, m);
  }
  return e.$$set = (m) => {
    "shape" in m && t(0, u = m.shape), "computedStyle" in m && t(1, p = m.computedStyle), "transform" in m && t(2, h = m.transform), "viewportScale" in m && t(3, g = m.viewportScale), "svgEl" in m && t(4, y = m.svgEl);
  }, e.$$.update = () => {
    e.$$.dirty & /*shape*/
    1 && t(12, o = u.geometry), e.$$.dirty & /*geom*/
    4096 && t(5, s = o.points), e.$$.dirty & /*geom*/
    4096 && t(6, l = {
      x: (o.bounds.minX + o.bounds.maxX) / 2,
      y: (o.bounds.minY + o.bounds.maxY) / 2
    }), e.$$.dirty & /*points*/
    32 && t(13, f = s.filter((m, w) => w % 2 === 0)), e.$$.dirty & /*outerPoints, center*/
    8256 && t(9, r = f.length > 0 ? Math.sqrt(Math.pow(f[0][0] - l.x, 2) + Math.pow(f[0][1] - l.y, 2)) : 0), e.$$.dirty & /*points*/
    32 && t(8, a = s.length > 0 ? `M ${s[0][0]},${s[0][1]}` + s.slice(1).map(([m, w]) => ` L ${m},${w}`).join("") + " Z" : ""), e.$$.dirty & /*geom, viewportScale*/
    4104 && t(7, c = hn(o.bounds, 2 / g));
  }, [
    u,
    p,
    h,
    g,
    y,
    s,
    l,
    c,
    a,
    r,
    d,
    E,
    o,
    f,
    A,
    L,
    b
  ];
}
class zr extends Le {
  constructor(n) {
    super(), Pe(this, n, Yr, qr, Me, {
      shape: 0,
      computedStyle: 1,
      transform: 2,
      viewportScale: 3,
      svgEl: 4
    });
  }
}
function ds(e) {
  let n, t;
  return {
    c() {
      n = z("path"), t = z("path"), i(n, "class", "a9s-outer svelte-1ohtpx8"), i(
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
      X(o, n, s), X(o, t, s);
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
function Vr(e) {
  let n, t = (
    /*pathString*/
    e[0] && ds(e)
  );
  return {
    c() {
      n = z("g"), t && t.c(), i(n, "class", "a9s-annotation a9s-rubberband");
    },
    m(o, s) {
      X(o, n, s), t && t.m(n, null);
    },
    p(o, [s]) {
      /*pathString*/
      o[0] ? t ? t.p(o, s) : (t = ds(o), t.c(), t.m(n, null)) : t && (t.d(1), t = null);
    },
    i: we,
    o: we,
    d(o) {
      o && j(n), t && t.d();
    }
  };
}
const ms = 5, gs = 0.382;
function Kr(e, n, t) {
  let o, s;
  const l = We();
  let { addEventListener: f } = n, { drawingMode: r } = n, { transform: a } = n, { viewportScale: c } = n, u, p = 0, h;
  const g = (L, b, m, w) => {
    const k = [], _ = Math.PI / ms;
    for (let M = 0; M < ms * 2; M++) {
      const S = M % 2 === 0 ? m : w, N = M * _ - Math.PI / 2;
      k.push([L + S * Math.cos(N), b + S * Math.sin(N)]);
    }
    return k;
  }, y = (L) => {
    const b = L;
    h = performance.now(), r === "drag" && (t(5, u = a.elementToImage(b.offsetX, b.offsetY)), t(6, p = 1));
  }, d = (L) => {
    const b = L;
    if (u) {
      const m = a.elementToImage(b.offsetX, b.offsetY);
      t(6, p = Math.sqrt(Math.pow(m[0] - u[0], 2) + Math.pow(m[1] - u[1], 2)));
    }
  }, E = (L) => {
    const b = L, m = performance.now() - h;
    if (r === "click") {
      if (m > 300) return;
      u ? A() : (t(5, u = a.elementToImage(b.offsetX, b.offsetY)), t(6, p = 1));
    } else u && (m > 300 || p > 10 ? (b.stopPropagation(), A()) : (t(5, u = void 0), t(6, p = 0)));
  }, A = () => {
    if (p > 10 && u) {
      const L = p * gs, b = g(u[0], u[1], p, L), m = {
        type: ke.POLYGON,
        geometry: { bounds: He(b), points: b }
      };
      l("create", m);
    }
    t(5, u = void 0), t(6, p = 0);
  };
  return $e(() => {
    f("pointerdown", y), f("pointermove", d), f("pointerup", E, !0);
  }), e.$$set = (L) => {
    "addEventListener" in L && t(1, f = L.addEventListener), "drawingMode" in L && t(2, r = L.drawingMode), "transform" in L && t(3, a = L.transform), "viewportScale" in L && t(4, c = L.viewportScale);
  }, e.$$.update = () => {
    e.$$.dirty & /*center, outerRadius*/
    96 && t(7, o = u ? g(u[0], u[1], p, p * gs) : []), e.$$.dirty & /*starPoints*/
    128 && t(0, s = o.length > 0 ? `M ${o[0][0]},${o[0][1]}` + o.slice(1).map(([L, b]) => ` L ${L},${b}`).join("") + " Z" : "");
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
class Fr extends Le {
  constructor(n) {
    super(), Pe(this, n, Kr, Vr, Me, {
      addEventListener: 1,
      drawingMode: 2,
      transform: 3,
      viewportScale: 4
    });
  }
}
function Zr(e) {
  let n, t, o, s, l, f, r, a, c, u, p, h, g, y, d, E, A, L, b, m, w, k, _, M, S, N, G, I, U, H, T, q, C, B, Z, R, D, V, Q, ne, P, K, oe, $, me, le, ce, ae, Te, ue, Ie, be, F, Qe, on;
  return le = new Ae({
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
  }), le.$on("pointerdown", function() {
    se(
      /*grab*/
      e[12]("TOP_LEFT")
    ) && e[12]("TOP_LEFT").apply(this, arguments);
  }), ae = new Ae({
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
  }), ae.$on("pointerdown", function() {
    se(
      /*grab*/
      e[12]("TOP_RIGHT")
    ) && e[12]("TOP_RIGHT").apply(this, arguments);
  }), ue = new Ae({
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
    se(
      /*grab*/
      e[12]("BOTTOM_RIGHT")
    ) && e[12]("BOTTOM_RIGHT").apply(this, arguments);
  }), be = new Ae({
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
  }), be.$on("pointerdown", function() {
    se(
      /*grab*/
      e[12]("BOTTOM_LEFT")
    ) && e[12]("BOTTOM_LEFT").apply(this, arguments);
  }), {
    c() {
      n = z("defs"), t = z("mask"), o = z("rect"), a = z("rect"), g = te(), y = z("rect"), b = te(), m = z("rect"), S = te(), N = z("rect"), H = te(), T = z("rect"), Z = te(), R = z("rect"), ne = te(), P = z("rect"), me = te(), ge(le.$$.fragment), ce = te(), ge(ae.$$.fragment), Te = te(), ge(ue.$$.fragment), Ie = te(), ge(be.$$.fragment), i(o, "class", "rect-mask-bg svelte-1njczvj"), i(o, "x", s = /*mask*/
      e[6].x), i(o, "y", l = /*mask*/
      e[6].y), i(o, "width", f = /*mask*/
      e[6].w), i(o, "height", r = /*mask*/
      e[6].h), i(a, "class", "rect-mask-fg svelte-1njczvj"), i(a, "x", c = /*geom*/
      e[5].x), i(a, "y", u = /*geom*/
      e[5].y), i(a, "width", p = /*geom*/
      e[5].w), i(a, "height", h = /*geom*/
      e[5].h), i(
        t,
        "id",
        /*maskId*/
        e[8]
      ), i(t, "class", "a9s-rectangle-editor-mask svelte-1njczvj"), i(y, "class", "a9s-outer"), i(y, "mask", `url(#${/*maskId*/
      e[8]})`), i(y, "x", d = /*geom*/
      e[5].x), i(y, "y", E = /*geom*/
      e[5].y), i(y, "width", A = /*geom*/
      e[5].w), i(y, "height", L = /*geom*/
      e[5].h), i(m, "class", "a9s-inner a9s-shape-handle"), i(
        m,
        "style",
        /*computedStyle*/
        e[1]
      ), i(m, "x", w = /*geom*/
      e[5].x), i(m, "y", k = /*geom*/
      e[5].y), i(m, "width", _ = /*geom*/
      e[5].w), i(m, "height", M = /*geom*/
      e[5].h), i(N, "class", "a9s-edge-handle a9s-edge-handle-top"), i(N, "x", G = /*geom*/
      e[5].x), i(N, "y", I = /*geom*/
      e[5].y), i(N, "height", 1), i(N, "width", U = /*geom*/
      e[5].w), i(T, "class", "a9s-edge-handle a9s-edge-handle-right"), i(T, "x", q = /*geom*/
      e[5].x + /*geom*/
      e[5].w), i(T, "y", C = /*geom*/
      e[5].y), i(T, "height", B = /*geom*/
      e[5].h), i(T, "width", 1), i(R, "class", "a9s-edge-handle a9s-edge-handle-bottom"), i(R, "x", D = /*geom*/
      e[5].x), i(R, "y", V = /*geom*/
      e[5].y + /*geom*/
      e[5].h), i(R, "height", 1), i(R, "width", Q = /*geom*/
      e[5].w), i(P, "class", "a9s-edge-handle a9s-edge-handle-left"), i(P, "x", K = /*geom*/
      e[5].x), i(P, "y", oe = /*geom*/
      e[5].y), i(P, "height", $ = /*geom*/
      e[5].h), i(P, "width", 1);
    },
    m(Y, O) {
      X(Y, n, O), J(n, t), J(t, o), J(t, a), X(Y, g, O), X(Y, y, O), X(Y, b, O), X(Y, m, O), X(Y, S, O), X(Y, N, O), X(Y, H, O), X(Y, T, O), X(Y, Z, O), X(Y, R, O), X(Y, ne, O), X(Y, P, O), X(Y, me, O), he(le, Y, O), X(Y, ce, O), he(ae, Y, O), X(Y, Te, O), he(ue, Y, O), X(Y, Ie, O), he(be, Y, O), F = !0, Qe || (on = [
        x(y, "pointerdown", function() {
          se(
            /*grab*/
            e[12]("SHAPE")
          ) && e[12]("SHAPE").apply(this, arguments);
        }),
        x(m, "pointerdown", function() {
          se(
            /*grab*/
            e[12]("SHAPE")
          ) && e[12]("SHAPE").apply(this, arguments);
        }),
        x(N, "pointerdown", function() {
          se(
            /*grab*/
            e[12]("TOP")
          ) && e[12]("TOP").apply(this, arguments);
        }),
        x(T, "pointerdown", function() {
          se(
            /*grab*/
            e[12]("RIGHT")
          ) && e[12]("RIGHT").apply(this, arguments);
        }),
        x(R, "pointerdown", function() {
          se(
            /*grab*/
            e[12]("BOTTOM")
          ) && e[12]("BOTTOM").apply(this, arguments);
        }),
        x(P, "pointerdown", function() {
          se(
            /*grab*/
            e[12]("LEFT")
          ) && e[12]("LEFT").apply(this, arguments);
        })
      ], Qe = !0);
    },
    p(Y, O) {
      e = Y, (!F || O & /*mask*/
      64 && s !== (s = /*mask*/
      e[6].x)) && i(o, "x", s), (!F || O & /*mask*/
      64 && l !== (l = /*mask*/
      e[6].y)) && i(o, "y", l), (!F || O & /*mask*/
      64 && f !== (f = /*mask*/
      e[6].w)) && i(o, "width", f), (!F || O & /*mask*/
      64 && r !== (r = /*mask*/
      e[6].h)) && i(o, "height", r), (!F || O & /*geom*/
      32 && c !== (c = /*geom*/
      e[5].x)) && i(a, "x", c), (!F || O & /*geom*/
      32 && u !== (u = /*geom*/
      e[5].y)) && i(a, "y", u), (!F || O & /*geom*/
      32 && p !== (p = /*geom*/
      e[5].w)) && i(a, "width", p), (!F || O & /*geom*/
      32 && h !== (h = /*geom*/
      e[5].h)) && i(a, "height", h), (!F || O & /*geom*/
      32 && d !== (d = /*geom*/
      e[5].x)) && i(y, "x", d), (!F || O & /*geom*/
      32 && E !== (E = /*geom*/
      e[5].y)) && i(y, "y", E), (!F || O & /*geom*/
      32 && A !== (A = /*geom*/
      e[5].w)) && i(y, "width", A), (!F || O & /*geom*/
      32 && L !== (L = /*geom*/
      e[5].h)) && i(y, "height", L), (!F || O & /*computedStyle*/
      2) && i(
        m,
        "style",
        /*computedStyle*/
        e[1]
      ), (!F || O & /*geom*/
      32 && w !== (w = /*geom*/
      e[5].x)) && i(m, "x", w), (!F || O & /*geom*/
      32 && k !== (k = /*geom*/
      e[5].y)) && i(m, "y", k), (!F || O & /*geom*/
      32 && _ !== (_ = /*geom*/
      e[5].w)) && i(m, "width", _), (!F || O & /*geom*/
      32 && M !== (M = /*geom*/
      e[5].h)) && i(m, "height", M), (!F || O & /*geom*/
      32 && G !== (G = /*geom*/
      e[5].x)) && i(N, "x", G), (!F || O & /*geom*/
      32 && I !== (I = /*geom*/
      e[5].y)) && i(N, "y", I), (!F || O & /*geom*/
      32 && U !== (U = /*geom*/
      e[5].w)) && i(N, "width", U), (!F || O & /*geom*/
      32 && q !== (q = /*geom*/
      e[5].x + /*geom*/
      e[5].w)) && i(T, "x", q), (!F || O & /*geom*/
      32 && C !== (C = /*geom*/
      e[5].y)) && i(T, "y", C), (!F || O & /*geom*/
      32 && B !== (B = /*geom*/
      e[5].h)) && i(T, "height", B), (!F || O & /*geom*/
      32 && D !== (D = /*geom*/
      e[5].x)) && i(R, "x", D), (!F || O & /*geom*/
      32 && V !== (V = /*geom*/
      e[5].y + /*geom*/
      e[5].h)) && i(R, "y", V), (!F || O & /*geom*/
      32 && Q !== (Q = /*geom*/
      e[5].w)) && i(R, "width", Q), (!F || O & /*geom*/
      32 && K !== (K = /*geom*/
      e[5].x)) && i(P, "x", K), (!F || O & /*geom*/
      32 && oe !== (oe = /*geom*/
      e[5].y)) && i(P, "y", oe), (!F || O & /*geom*/
      32 && $ !== ($ = /*geom*/
      e[5].h)) && i(P, "height", $);
      const Ge = {};
      O & /*geom*/
      32 && (Ge.x = /*geom*/
      e[5].x), O & /*geom*/
      32 && (Ge.y = /*geom*/
      e[5].y), O & /*viewportScale*/
      8 && (Ge.scale = /*viewportScale*/
      e[3]), le.$set(Ge);
      const qe = {};
      O & /*geom*/
      32 && (qe.x = /*geom*/
      e[5].x + /*geom*/
      e[5].w), O & /*geom*/
      32 && (qe.y = /*geom*/
      e[5].y), O & /*viewportScale*/
      8 && (qe.scale = /*viewportScale*/
      e[3]), ae.$set(qe);
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
      const ze = {};
      O & /*geom*/
      32 && (ze.x = /*geom*/
      e[5].x), O & /*geom*/
      32 && (ze.y = /*geom*/
      e[5].y + /*geom*/
      e[5].h), O & /*viewportScale*/
      8 && (ze.scale = /*viewportScale*/
      e[3]), be.$set(ze);
    },
    i(Y) {
      F || (W(le.$$.fragment, Y), W(ae.$$.fragment, Y), W(ue.$$.fragment, Y), W(be.$$.fragment, Y), F = !0);
    },
    o(Y) {
      ee(le.$$.fragment, Y), ee(ae.$$.fragment, Y), ee(ue.$$.fragment, Y), ee(be.$$.fragment, Y), F = !1;
    },
    d(Y) {
      Y && (j(n), j(g), j(y), j(b), j(m), j(S), j(N), j(H), j(T), j(Z), j(R), j(ne), j(P), j(me), j(ce), j(Te), j(Ie)), de(le, Y), de(ae, Y), de(ue, Y), de(be, Y), Qe = !1, Se(on);
    }
  };
}
function Wr(e) {
  let n, t;
  return n = new fn({
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
          Zr,
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
      he(n, o, s), t = !0;
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
      t || (W(n.$$.fragment, o), t = !0);
    },
    o(o) {
      ee(n.$$.fragment, o), t = !1;
    },
    d(o) {
      de(n, o);
    }
  };
}
function Qr(e, n, t) {
  let o, s, { shape: l } = n, { computedStyle: f } = n, { transform: r } = n, { viewportScale: a = 1 } = n, { svgEl: c } = n;
  const u = (d, E, A) => {
    const L = d.geometry.bounds;
    let [b, m] = [L.minX, L.minY], [w, k] = [L.maxX, L.maxY];
    const [_, M] = A;
    if (E === "SHAPE")
      b += _, w += _, m += M, k += M;
    else {
      switch (E) {
        case "TOP":
        case "TOP_LEFT":
        case "TOP_RIGHT": {
          m += M;
          break;
        }
        case "BOTTOM":
        case "BOTTOM_LEFT":
        case "BOTTOM_RIGHT": {
          k += M;
          break;
        }
      }
      switch (E) {
        case "LEFT":
        case "TOP_LEFT":
        case "BOTTOM_LEFT": {
          b += _;
          break;
        }
        case "RIGHT":
        case "TOP_RIGHT":
        case "BOTTOM_RIGHT": {
          w += _;
          break;
        }
      }
    }
    const S = Math.min(b, w), N = Math.min(m, k), G = Math.abs(w - b), I = Math.abs(k - m);
    return {
      ...d,
      geometry: {
        x: S,
        y: N,
        w: G,
        h: I,
        bounds: {
          minX: S,
          minY: N,
          maxX: S + G,
          maxY: N + I
        }
      }
    };
  }, p = `rect-mask-${Math.random().toString(36).substring(2, 12)}`;
  function h(d) {
    pe.call(this, e, d);
  }
  function g(d) {
    pe.call(this, e, d);
  }
  function y(d) {
    pe.call(this, e, d);
  }
  return e.$$set = (d) => {
    "shape" in d && t(0, l = d.shape), "computedStyle" in d && t(1, f = d.computedStyle), "transform" in d && t(2, r = d.transform), "viewportScale" in d && t(3, a = d.viewportScale), "svgEl" in d && t(4, c = d.svgEl);
  }, e.$$.update = () => {
    e.$$.dirty & /*shape*/
    1 && t(5, o = l.geometry), e.$$.dirty & /*geom, viewportScale*/
    40 && t(6, s = hn(o.bounds, 2 / a));
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
    h,
    g,
    y
  ];
}
class Jr extends Le {
  constructor(n) {
    super(), Pe(this, n, Qr, Wr, Me, {
      shape: 0,
      computedStyle: 1,
      transform: 2,
      viewportScale: 3,
      svgEl: 4
    });
  }
}
function $r(e) {
  let n;
  return {
    c() {
      n = z("g"), i(n, "class", "a9s-annotation a9s-rubberband");
    },
    m(t, o) {
      X(t, n, o);
    },
    p: we,
    i: we,
    o: we,
    d(t) {
      t && j(n);
    }
  };
}
function xr(e, n, t) {
  const o = We();
  let { addEventListener: s } = n, { drawingMode: l } = n, { transform: f } = n, { viewportScale: r = 1 } = n, a = 0;
  const c = (p) => {
    a = performance.now();
  }, u = (p) => {
    const h = p;
    if (performance.now() - a > 400) return;
    const [y, d] = f.elementToImage(h.offsetX, h.offsetY), E = {
      type: ke.RECTANGLE,
      geometry: {
        bounds: {
          minX: y,
          minY: d - 1,
          maxX: y + 1,
          maxY: d
        },
        x: y,
        y: d - 1,
        w: 1,
        h: 1
      },
      properties: { toolType: "text" }
    };
    o("create", E);
  };
  return $e(() => {
    s("pointerdown", c), s("pointerup", u, !0);
  }), e.$$set = (p) => {
    "addEventListener" in p && t(0, s = p.addEventListener), "drawingMode" in p && t(1, l = p.drawingMode), "transform" in p && t(2, f = p.transform), "viewportScale" in p && t(3, r = p.viewportScale);
  }, [s, l, f, r];
}
class ef extends Le {
  constructor(n) {
    super(), Pe(this, n, xr, $r, Me, {
      addEventListener: 0,
      drawingMode: 1,
      transform: 2,
      viewportScale: 3
    });
  }
}
const of = (e) => {
  e.registerDrawingTool("ellipse", lr), e.registerShapeEditor(ke.ELLIPSE, tr), e.registerDrawingTool("line", pr), e.registerDrawingTool("arrow", li), e.registerShapeEditor(ke.LINE, ar), e.registerDrawingTool("path", Mr), e.registerDrawingTool("distance", fi), e.registerShapeEditor(ke.POLYLINE, Ur), e.registerDrawingTool("star", Fr), e.registerShapeEditor(ke.POLYGON, zr), e.registerDrawingTool("text", ef), e.registerShapeEditor(ke.RECTANGLE, Jr), vr(e);
};
export {
  of as mountPlugin
};
//# sourceMappingURL=annotorious-plugin-tools.es.js.map
