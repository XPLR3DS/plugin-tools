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
  const c = e.$$ = {
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
  f && f(c.root);
  let u = !1;
  if (c.ctx = t ? t(e, n.props || {}, (p, d, ...m) => {
    const _ = m.length ? m[0] : d;
    return c.ctx && s(c.ctx[p], c.ctx[p] = _) && (!c.skip_bound && c.bound[p] && c.bound[p](_), u && fl(e, p)), d;
  }) : [], c.update(), u = !0, $e(c.before_update), c.fragment = o ? o(c.ctx) : !1, n.target) {
    if (n.hydrate) {
      const p = sl(n.target);
      c.fragment && c.fragment.l(p), p.forEach(fe);
    } else
      c.fragment && c.fragment.c();
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
var Pe = /* @__PURE__ */ ((e) => (e.ELLIPSE = "ELLIPSE", e.MULTIPOLYGON = "MULTIPOLYGON", e.POLYGON = "POLYGON", e.POLYLINE = "POLYLINE", e.RECTANGLE = "RECTANGLE", e.LINE = "LINE", e))(Pe || {}), cl = { exports: {} };
(function(e) {
  (function() {
    function n(r, a) {
      var c = r.x - a.x, u = r.y - a.y;
      return c * c + u * u;
    }
    function t(r, a, c) {
      var u = a.x, p = a.y, d = c.x - u, m = c.y - p;
      if (d !== 0 || m !== 0) {
        var _ = ((r.x - u) * d + (r.y - p) * m) / (d * d + m * m);
        _ > 1 ? (u = c.x, p = c.y) : _ > 0 && (u += d * _, p += m * _);
      }
      return d = r.x - u, m = r.y - p, d * d + m * m;
    }
    function o(r, a) {
      for (var c = r[0], u = [c], p, d = 1, m = r.length; d < m; d++)
        p = r[d], n(p, c) > a && (u.push(p), c = p);
      return c !== p && u.push(p), u;
    }
    function s(r, a, c, u, p) {
      for (var d = u, m, _ = a + 1; _ < c; _++) {
        var h = t(r[_], r[a], r[c]);
        h > d && (m = _, d = h);
      }
      d > u && (m - a > 1 && s(r, a, m, u, p), p.push(r[m]), c - m > 1 && s(r, m, c, u, p));
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
})(cl);
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
    const f = e[s][0], r = e[s][1], a = e[l][0], c = e[l][1];
    r > t != c > t && n < (a - f) * (t - r) / (c - r) + f && (o = !o);
  }
  return o;
}, ul = (e, n = !0) => {
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
    const { cx: o, cy: s, rx: l, ry: f } = e.geometry, r = 0, a = Math.cos(r), c = Math.sin(r), u = n - o, p = t - s, d = a * u + c * p, m = c * u - a * p;
    return d * d / (l * l) + m * m / (f * f) <= 1;
  }
};
Xn(Pe.ELLIPSE, pl);
const hl = {
  area: (e) => 0,
  intersects: (e, n, t, o = 2) => {
    const [[s, l], [f, r]] = e.geometry.points, a = Math.abs((r - l) * n - (f - s) * t + f * l - r * s), c = rn([s, l], [f, r]);
    return a / c <= o;
  }
};
Xn(Pe.LINE, hl);
const dl = {
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
  return De(n);
}, kn = (e) => e.rings.map((n) => ul(n.points)).join(" "), ml = (e) => e.polygons.reduce((n, t) => [
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
    const r = f / s, a = Math.pow(1 - r, 3) * e[0] + 3 * Math.pow(1 - r, 2) * r * n[0] + 3 * (1 - r) * Math.pow(r, 2) * t[0] + Math.pow(r, 3) * o[0], c = Math.pow(1 - r, 3) * e[1] + 3 * Math.pow(1 - r, 2) * r * n[1] + 3 * (1 - r) * Math.pow(r, 2) * t[1] + Math.pow(r, 3) * o[1];
    l.push([a, c]);
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
  const [o, s] = e, [l, f] = n, [r, a] = t, c = r - l, u = a - f, p = Math.sqrt(c * c + u * u);
  if (p === 0)
    return Math.sqrt((o - l) * (o - l) + (s - f) * (s - f));
  const d = ((o - l) * c + (s - f) * u) / (p * p);
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
  let { shape: f } = n, { editor: r } = n, { transform: a } = n, { svgEl: c } = n, u, p, d;
  const m = (S) => (A) => {
    if (u = S, c) {
      const { left: P, top: w } = c.getBoundingClientRect(), b = A.clientX - P, v = A.clientY - w;
      p = a.elementToImage(b, v);
    } else {
      const { offsetX: P, offsetY: w } = A;
      p = a.elementToImage(P, w);
    }
    d = f, A.target.setPointerCapture(A.pointerId), l("grab", A);
  }, _ = (S) => {
    if (u) {
      const [A, P] = a.elementToImage(S.offsetX, S.offsetY), w = [A - p[0], P - p[1]];
      t(3, f = r(d, u, w)), l("change", f);
    }
  }, h = (S) => {
    S.target.releasePointerCapture(S.pointerId), u = void 0, d = f, l("release", S);
  };
  return e.$$set = (S) => {
    "shape" in S && t(3, f = S.shape), "editor" in S && t(4, r = S.editor), "transform" in S && t(5, a = S.transform), "svgEl" in S && t(6, c = S.svgEl), "$$scope" in S && t(7, s = S.$$scope);
  }, [
    m,
    _,
    h,
    f,
    r,
    a,
    c,
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
  let n, t, o, s, l, f, r, a, c = (
    /*selected*/
    e[3] && eo(e)
  );
  return {
    c() {
      n = ie("g"), t = ie("circle"), c && c.c(), s = ie("circle"), E(t, "class", "a9s-handle-buffer svelte-qtyc7s"), E(
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
    m(u, p) {
      ae(u, n, p), Te(n, t), c && c.m(n, null), Te(n, s), r || (a = [
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
    p(u, p) {
      p & /*x*/
      1 && E(
        t,
        "cx",
        /*x*/
        u[0]
      ), p & /*y*/
      2 && E(
        t,
        "cy",
        /*y*/
        u[1]
      ), p & /*handleRadius, scale*/
      36 && o !== (o = /*handleRadius*/
      u[5] + 6 / /*scale*/
      u[2]) && E(t, "r", o), /*selected*/
      u[3] ? c ? c.p(u, p) : (c = eo(u), c.c(), c.m(n, s)) : c && (c.d(1), c = null), p & /*selected*/
      8 && l !== (l = Wt(`a9s-handle-dot${/*selected*/
      u[3] ? " selected" : ""}`) + " svelte-qtyc7s") && E(s, "class", l), p & /*x*/
      1 && E(
        s,
        "cx",
        /*x*/
        u[0]
      ), p & /*y*/
      2 && E(
        s,
        "cy",
        /*y*/
        u[1]
      ), p & /*handleRadius*/
      32 && E(
        s,
        "r",
        /*handleRadius*/
        u[5]
      ), p & /*$$props*/
      256 && f !== (f = `a9s-handle ${/*$$props*/
      u[8].class || ""}`.trim()) && E(n, "class", f);
    },
    d(u) {
      u && fe(n), c && c.d(), r = !1, $e(a);
    }
  };
}
function Ol(e) {
  let n, t, o, s, l, f, r, a, c;
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
    m(u, p) {
      ae(u, n, p), Te(n, t), Te(n, s), Te(n, f), a || (c = [
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
    p(u, p) {
      p & /*x*/
      1 && E(
        t,
        "cx",
        /*x*/
        u[0]
      ), p & /*y*/
      2 && E(
        t,
        "cy",
        /*y*/
        u[1]
      ), p & /*handleRadius*/
      32 && o !== (o = /*handleRadius*/
      u[5] * 10) && E(t, "r", o), p & /*touched*/
      16 && Zt(
        t,
        "touched",
        /*touched*/
        u[4]
      ), p & /*x*/
      1 && E(
        s,
        "cx",
        /*x*/
        u[0]
      ), p & /*y*/
      2 && E(
        s,
        "cy",
        /*y*/
        u[1]
      ), p & /*handleRadius, scale*/
      36 && l !== (l = /*handleRadius*/
      u[5] + 10 / /*scale*/
      u[2]) && E(s, "r", l), p & /*x*/
      1 && E(
        f,
        "cx",
        /*x*/
        u[0]
      ), p & /*y*/
      2 && E(
        f,
        "cy",
        /*y*/
        u[1]
      ), p & /*handleRadius, scale*/
      36 && r !== (r = /*handleRadius*/
      u[5] + 2 / /*scale*/
      u[2]) && E(f, "r", r);
    },
    d(u) {
      u && fe(n), a = !1, $e(c);
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
  const c = (w) => {
    w.pointerType === "touch" && t(4, a = !0);
  }, u = () => t(4, a = !1);
  function p(w) {
    Ue.call(this, e, w);
  }
  function d(w) {
    Ue.call(this, e, w);
  }
  function m(w) {
    Ue.call(this, e, w);
  }
  function _(w) {
    Ue.call(this, e, w);
  }
  function h(w) {
    Ue.call(this, e, w);
  }
  function S(w) {
    Ue.call(this, e, w);
  }
  function A(w) {
    Ue.call(this, e, w);
  }
  function P(w) {
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
    c,
    u,
    n,
    p,
    d,
    m,
    _,
    h,
    S,
    A,
    P
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
    m(a, c) {
      ae(a, n, c), Te(n, t), Te(n, s), Te(n, l), f || (r = [
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
    p(a, c) {
      c & /*x*/
      1 && E(
        t,
        "cx",
        /*x*/
        a[0]
      ), c & /*y*/
      2 && E(
        t,
        "cy",
        /*y*/
        a[1]
      ), c & /*handleRadius*/
      4 && o !== (o = 1.75 * /*handleRadius*/
      a[2]) && E(t, "r", o), c & /*x*/
      1 && E(
        s,
        "cx",
        /*x*/
        a[0]
      ), c & /*y*/
      2 && E(
        s,
        "cy",
        /*y*/
        a[1]
      ), c & /*handleRadius*/
      4 && E(
        s,
        "r",
        /*handleRadius*/
        a[2]
      ), c & /*x*/
      1 && E(
        l,
        "cx",
        /*x*/
        a[0]
      ), c & /*y*/
      2 && E(
        l,
        "cy",
        /*y*/
        a[1]
      ), c & /*handleRadius*/
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
  const r = (c) => {
    c.pointerType;
  };
  function a(c) {
    Ue.call(this, e, c);
  }
  return e.$$set = (c) => {
    "x" in c && t(0, s = c.x), "y" in c && t(1, l = c.y), "scale" in c && t(4, f = c.scale);
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
  let n, t, o, s, l, f, r, a, c, u;
  return {
    c() {
      n = ie("mask"), t = ie("rect"), r = ie("circle"), E(t, "x", o = /*mask*/
      e[9].x), E(t, "y", s = /*mask*/
      e[9].y), E(t, "width", l = /*mask*/
      e[9].w), E(t, "height", f = /*mask*/
      e[9].h), E(t, "class", "svelte-1h2slbm"), E(r, "cx", a = /*point*/
      e[28][0]), E(r, "cy", c = /*point*/
      e[28][1]), E(r, "r", u = Yn / /*viewportScale*/
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
      1088 && c !== (c = /*point*/
      p[28][1]) && E(r, "cy", c), d[0] & /*viewportScale*/
      8 && u !== (u = Yn / /*viewportScale*/
      p[3]) && E(r, "r", u);
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
  let n, t, o, s, l, f, r, a, c, u, p, d, m, _, h, S, A, P, w, b, v, M = (
    /*visibleMidpoint*/
    e[6] !== void 0 && !/*isHandleHovered*/
    e[7] && to(ut(e))
  ), g = (
    /*visibleMidpoint*/
    e[6] !== void 0 && !/*isHandleHovered*/
    e[7] && oo(ct(e))
  ), H = mn(
    /*geom*/
    e[5].points
  ), y = [];
  for (let O = 0; O < H.length; O += 1)
    y[O] = so(no(e, H, O));
  const T = (O) => Me(y[O], 1, 1, () => {
    y[O] = null;
  });
  let L = (
    /*visibleMidpoint*/
    e[6] !== void 0 && !/*isHandleHovered*/
    e[7] && lo(at(e))
  );
  return {
    c() {
      n = ie("defs"), t = ie("mask"), o = ie("rect"), a = ie("polygon"), M && M.c(), g && g.c(), u = ze(), p = ie("polygon"), m = ze(), _ = ie("polygon"), S = ze();
      for (let O = 0; O < y.length; O += 1)
        y[O].c();
      A = ze(), L && L.c(), P = Zn(), E(o, "x", s = /*mask*/
      e[9].x), E(o, "y", l = /*mask*/
      e[9].y), E(o, "width", f = /*mask*/
      e[9].w), E(o, "height", r = /*mask*/
      e[9].h), E(o, "class", "svelte-1h2slbm"), E(a, "points", c = /*geom*/
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
    m(O, G) {
      ae(O, n, G), Te(n, t), Te(t, o), Te(t, a), M && M.m(t, null), g && g.m(n, null), ae(O, u, G), ae(O, p, G), ae(O, m, G), ae(O, _, G), ae(O, S, G);
      for (let R = 0; R < y.length; R += 1)
        y[R] && y[R].m(O, G);
      ae(O, A, G), L && L.m(O, G), ae(O, P, G), w = !0, b || (v = [
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
    p(O, G) {
      if (e = O, (!w || G[0] & /*mask*/
      512 && s !== (s = /*mask*/
      e[9].x)) && E(o, "x", s), (!w || G[0] & /*mask*/
      512 && l !== (l = /*mask*/
      e[9].y)) && E(o, "y", l), (!w || G[0] & /*mask*/
      512 && f !== (f = /*mask*/
      e[9].w)) && E(o, "width", f), (!w || G[0] & /*mask*/
      512 && r !== (r = /*mask*/
      e[9].h)) && E(o, "height", r), (!w || G[0] & /*geom*/
      32 && c !== (c = /*geom*/
      e[5].points.map(io).join(" "))) && E(a, "points", c), /*visibleMidpoint*/
      e[6] !== void 0 && !/*isHandleHovered*/
      e[7] ? M ? M.p(ut(e), G) : (M = to(ut(e)), M.c(), M.m(t, null)) : M && (M.d(1), M = null), /*visibleMidpoint*/
      e[6] !== void 0 && !/*isHandleHovered*/
      e[7] ? g ? g.p(ct(e), G) : (g = oo(ct(e)), g.c(), g.m(n, null)) : g && (g.d(1), g = null), (!w || G[0] & /*geom*/
      32 && d !== (d = /*geom*/
      e[5].points.map(ro).join(" "))) && E(p, "points", d), (!w || G[0] & /*computedStyle*/
      2) && E(
        _,
        "style",
        /*computedStyle*/
        e[1]
      ), (!w || G[0] & /*geom*/
      32 && h !== (h = /*geom*/
      e[5].points.map(fo).join(" "))) && E(_, "points", h), G[0] & /*geom, viewportScale, selectedCorners, onEnterHandle, onLeaveHandle, onHandlePointerDown, grab, onHandlePointerUp*/
      134322472) {
        H = mn(
          /*geom*/
          e[5].points
        );
        let R;
        for (R = 0; R < H.length; R += 1) {
          const I = no(e, H, R);
          y[R] ? (y[R].p(I, G), we(y[R], 1)) : (y[R] = so(I), y[R].c(), we(y[R], 1), y[R].m(A.parentNode, A));
        }
        for (Cn(), R = H.length; R < y.length; R += 1)
          T(R);
        Rn();
      }
      e[6] !== void 0 && !/*isHandleHovered*/
      e[7] ? L ? (L.p(at(e), G), G[0] & /*visibleMidpoint, isHandleHovered*/
      192 && we(L, 1)) : (L = lo(at(e)), L.c(), we(L, 1), L.m(P.parentNode, P)) : L && (Cn(), Me(L, 1, 1, () => {
        L = null;
      }), Rn());
    },
    i(O) {
      if (!w) {
        for (let G = 0; G < H.length; G += 1)
          we(y[G]);
        we(L), w = !0;
      }
    },
    o(O) {
      y = y.filter(Boolean);
      for (let G = 0; G < y.length; G += 1)
        Me(y[G]);
      Me(L), w = !1;
    },
    d(O) {
      O && (fe(n), fe(u), fe(p), fe(m), fe(_), fe(S), fe(A), fe(P)), M && M.d(), g && g.d(), ot(y, O), L && L.d(O), b = !1, $e(v);
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
  let { shape: r } = n, { computedStyle: a } = n, { transform: c } = n, { viewportScale: u = 1 } = n, { svgEl: p } = n, d, m = !1, _, h = [];
  const S = () => t(7, m = !0), A = () => t(7, m = !1), P = (R) => {
    if (h.length > 0 || !s.some((X) => X.visible)) {
      t(6, d = void 0);
      return;
    }
    const [I, Y] = c.elementToImage(R.offsetX, R.offsetY), N = (X) => Math.pow(X[0] - I, 2) + Math.pow(X[1] - Y, 2), U = o.points.reduce((X, V) => N(V) < N(X) ? V : X), W = s.filter((X) => X.visible).reduce((X, V) => N(V.point) < N(X.point) ? V : X), D = Math.pow(Bl / u, 2);
    N(U) < D || N(W.point) < D ? t(6, d = s.indexOf(W)) : t(6, d = void 0);
  }, w = () => {
    document.activeElement !== p && p.focus();
  }, b = () => {
    t(8, h = []), w();
  }, v = (R) => {
    t(7, m = !0), R.preventDefault(), R.stopPropagation(), _ = performance.now();
  }, M = (R) => (I) => {
    if (!_ || fn || performance.now() - _ > jl) return;
    const Y = h.includes(R);
    I.metaKey || I.ctrlKey || I.shiftKey ? Y ? t(8, h = h.filter((N) => N !== R)) : t(8, h = [...h, R]) : Y && h.length > 1 ? t(8, h = [R]) : Y ? t(8, h = []) : t(8, h = [R]), w();
  }, g = (R, I, Y) => {
    w();
    let N;
    const U = R.geometry;
    h.length > 1 ? N = U.points.map(([D, X], V) => h.includes(V) ? [D + Y[0], X + Y[1]] : [D, X]) : I === "SHAPE" ? N = U.points.map(([D, X]) => [D + Y[0], X + Y[1]]) : N = U.points.map(([D, X], V) => I === `HANDLE-${V}` ? [D + Y[0], X + Y[1]] : [D, X]);
    const W = De(N);
    return { ...R, geometry: { points: N, bounds: W } };
  }, H = (R) => async (I) => {
    I.stopPropagation();
    const Y = [
      ...o.points.slice(0, R + 1),
      s[R].point,
      ...o.points.slice(R + 1)
    ], N = De(Y);
    f("change", { ...r, geometry: { points: Y, bounds: N } }), await As();
    const U = [...document.querySelectorAll(".a9s-handle")][R + 1];
    if (U != null && U.firstChild) {
      const W = new PointerEvent(
        "pointerdown",
        {
          bubbles: !0,
          cancelable: !0,
          clientX: I.clientX,
          clientY: I.clientY,
          pointerId: I.pointerId,
          pointerType: I.pointerType,
          isPrimary: I.isPrimary,
          buttons: I.buttons
        }
      );
      U.firstChild.dispatchEvent(W);
    }
  }, y = () => {
    if (o.points.length - h.length < 3) return;
    const R = o.points.filter((Y, N) => !h.includes(N)), I = De(R);
    f("change", { ...r, geometry: { points: R, bounds: I } }), t(8, h = []);
  };
  Cs(() => {
    if (fn) return;
    const R = (I) => {
      (I.key === "Delete" || I.key === "Backspace") && (I.preventDefault(), y());
    };
    return p.addEventListener("pointermove", P), p.addEventListener("keydown", R), () => {
      p.removeEventListener("pointermove", P), p.removeEventListener("keydown", R);
    };
  });
  const T = `polygon-mask-${Math.random().toString(36).substring(2, 12)}`;
  function L(R) {
    Ue.call(this, e, R);
  }
  function O(R) {
    Ue.call(this, e, R);
  }
  function G(R) {
    Ue.call(this, e, R);
  }
  return e.$$set = (R) => {
    "shape" in R && t(0, r = R.shape), "computedStyle" in R && t(1, a = R.computedStyle), "transform" in R && t(2, c = R.transform), "viewportScale" in R && t(3, u = R.viewportScale), "svgEl" in R && t(4, p = R.svgEl);
  }, e.$$.update = () => {
    e.$$.dirty[0] & /*shape*/
    1 && t(5, o = r.geometry), e.$$.dirty[0] & /*geom, viewportScale*/
    40 && t(10, s = fn ? [] : o.points.map((R, I) => {
      const Y = I === o.points.length - 1 ? o.points[0] : o.points[I + 1], N = (R[0] + Y[0]) / 2, U = (R[1] + Y[1]) / 2, W = Math.sqrt(Math.pow(Y[0] - N, 2) + Math.pow(Y[1] - U, 2)) > Ul / u;
      return { point: [N, U], visible: W };
    })), e.$$.dirty[0] & /*geom, viewportScale*/
    40 && t(9, l = vn(o.bounds, Yn / u));
  }, [
    r,
    a,
    c,
    u,
    p,
    o,
    d,
    m,
    h,
    l,
    s,
    S,
    A,
    P,
    b,
    v,
    M,
    g,
    H,
    T,
    L,
    O,
    G
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
  let n, t, o, s, l, f, r, a, c, u, p, d, m, _, h, S, A, P, w, b, v, M, g, H, y, T, L, O, G, R, I, Y, N, U, W, D, X, V, Q, x, F, oe, be, te, Oe, ce, ve, ue, Xe, pe, je, ke, K, Fe, z;
  return ce = new On({
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
    Ne(
      /*grab*/
      e[12]("TOP_LEFT")
    ) && e[12]("TOP_LEFT").apply(this, arguments);
  }), ue = new On({
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
      n = ie("defs"), t = ie("mask"), o = ie("rect"), a = ie("rect"), m = ze(), _ = ie("rect"), w = ze(), b = ie("rect"), y = ze(), T = ie("rect"), R = ze(), I = ie("rect"), W = ze(), D = ie("rect"), x = ze(), F = ie("rect"), Oe = ze(), tn(ce.$$.fragment), ve = ze(), tn(ue.$$.fragment), Xe = ze(), tn(pe.$$.fragment), je = ze(), tn(ke.$$.fragment), E(o, "class", "rect-mask-bg svelte-1njczvj"), E(o, "x", s = /*mask*/
      e[6].x), E(o, "y", l = /*mask*/
      e[6].y), E(o, "width", f = /*mask*/
      e[6].w), E(o, "height", r = /*mask*/
      e[6].h), E(a, "class", "rect-mask-fg svelte-1njczvj"), E(a, "x", c = /*geom*/
      e[5].x), E(a, "y", u = /*geom*/
      e[5].y), E(a, "width", p = /*geom*/
      e[5].w), E(a, "height", d = /*geom*/
      e[5].h), E(
        t,
        "id",
        /*maskId*/
        e[8]
      ), E(t, "class", "a9s-rectangle-editor-mask svelte-1njczvj"), E(_, "class", "a9s-outer"), E(_, "mask", `url(#${/*maskId*/
      e[8]})`), E(_, "x", h = /*geom*/
      e[5].x), E(_, "y", S = /*geom*/
      e[5].y), E(_, "width", A = /*geom*/
      e[5].w), E(_, "height", P = /*geom*/
      e[5].h), E(b, "class", "a9s-inner a9s-shape-handle"), E(
        b,
        "style",
        /*computedStyle*/
        e[1]
      ), E(b, "x", v = /*geom*/
      e[5].x), E(b, "y", M = /*geom*/
      e[5].y), E(b, "width", g = /*geom*/
      e[5].w), E(b, "height", H = /*geom*/
      e[5].h), E(T, "class", "a9s-edge-handle a9s-edge-handle-top"), E(T, "x", L = /*geom*/
      e[5].x), E(T, "y", O = /*geom*/
      e[5].y), E(T, "height", 1), E(T, "width", G = /*geom*/
      e[5].w), E(I, "class", "a9s-edge-handle a9s-edge-handle-right"), E(I, "x", Y = /*geom*/
      e[5].x + /*geom*/
      e[5].w), E(I, "y", N = /*geom*/
      e[5].y), E(I, "height", U = /*geom*/
      e[5].h), E(I, "width", 1), E(D, "class", "a9s-edge-handle a9s-edge-handle-bottom"), E(D, "x", X = /*geom*/
      e[5].x), E(D, "y", V = /*geom*/
      e[5].y + /*geom*/
      e[5].h), E(D, "height", 1), E(D, "width", Q = /*geom*/
      e[5].w), E(F, "class", "a9s-edge-handle a9s-edge-handle-left"), E(F, "x", oe = /*geom*/
      e[5].x), E(F, "y", be = /*geom*/
      e[5].y), E(F, "height", te = /*geom*/
      e[5].h), E(F, "width", 1);
    },
    m(C, k) {
      ae(C, n, k), Te(n, t), Te(t, o), Te(t, a), ae(C, m, k), ae(C, _, k), ae(C, w, k), ae(C, b, k), ae(C, y, k), ae(C, T, k), ae(C, R, k), ae(C, I, k), ae(C, W, k), ae(C, D, k), ae(C, x, k), ae(C, F, k), ae(C, Oe, k), Qe(ce, C, k), ae(C, ve, k), Qe(ue, C, k), ae(C, Xe, k), Qe(pe, C, k), ae(C, je, k), Qe(ke, C, k), K = !0, Fe || (z = [
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
        ye(T, "pointerdown", function() {
          Ne(
            /*grab*/
            e[12]("TOP")
          ) && e[12]("TOP").apply(this, arguments);
        }),
        ye(I, "pointerdown", function() {
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
    p(C, k) {
      e = C, (!K || k & /*mask*/
      64 && s !== (s = /*mask*/
      e[6].x)) && E(o, "x", s), (!K || k & /*mask*/
      64 && l !== (l = /*mask*/
      e[6].y)) && E(o, "y", l), (!K || k & /*mask*/
      64 && f !== (f = /*mask*/
      e[6].w)) && E(o, "width", f), (!K || k & /*mask*/
      64 && r !== (r = /*mask*/
      e[6].h)) && E(o, "height", r), (!K || k & /*geom*/
      32 && c !== (c = /*geom*/
      e[5].x)) && E(a, "x", c), (!K || k & /*geom*/
      32 && u !== (u = /*geom*/
      e[5].y)) && E(a, "y", u), (!K || k & /*geom*/
      32 && p !== (p = /*geom*/
      e[5].w)) && E(a, "width", p), (!K || k & /*geom*/
      32 && d !== (d = /*geom*/
      e[5].h)) && E(a, "height", d), (!K || k & /*geom*/
      32 && h !== (h = /*geom*/
      e[5].x)) && E(_, "x", h), (!K || k & /*geom*/
      32 && S !== (S = /*geom*/
      e[5].y)) && E(_, "y", S), (!K || k & /*geom*/
      32 && A !== (A = /*geom*/
      e[5].w)) && E(_, "width", A), (!K || k & /*geom*/
      32 && P !== (P = /*geom*/
      e[5].h)) && E(_, "height", P), (!K || k & /*computedStyle*/
      2) && E(
        b,
        "style",
        /*computedStyle*/
        e[1]
      ), (!K || k & /*geom*/
      32 && v !== (v = /*geom*/
      e[5].x)) && E(b, "x", v), (!K || k & /*geom*/
      32 && M !== (M = /*geom*/
      e[5].y)) && E(b, "y", M), (!K || k & /*geom*/
      32 && g !== (g = /*geom*/
      e[5].w)) && E(b, "width", g), (!K || k & /*geom*/
      32 && H !== (H = /*geom*/
      e[5].h)) && E(b, "height", H), (!K || k & /*geom*/
      32 && L !== (L = /*geom*/
      e[5].x)) && E(T, "x", L), (!K || k & /*geom*/
      32 && O !== (O = /*geom*/
      e[5].y)) && E(T, "y", O), (!K || k & /*geom*/
      32 && G !== (G = /*geom*/
      e[5].w)) && E(T, "width", G), (!K || k & /*geom*/
      32 && Y !== (Y = /*geom*/
      e[5].x + /*geom*/
      e[5].w)) && E(I, "x", Y), (!K || k & /*geom*/
      32 && N !== (N = /*geom*/
      e[5].y)) && E(I, "y", N), (!K || k & /*geom*/
      32 && U !== (U = /*geom*/
      e[5].h)) && E(I, "height", U), (!K || k & /*geom*/
      32 && X !== (X = /*geom*/
      e[5].x)) && E(D, "x", X), (!K || k & /*geom*/
      32 && V !== (V = /*geom*/
      e[5].y + /*geom*/
      e[5].h)) && E(D, "y", V), (!K || k & /*geom*/
      32 && Q !== (Q = /*geom*/
      e[5].w)) && E(D, "width", Q), (!K || k & /*geom*/
      32 && oe !== (oe = /*geom*/
      e[5].x)) && E(F, "x", oe), (!K || k & /*geom*/
      32 && be !== (be = /*geom*/
      e[5].y)) && E(F, "y", be), (!K || k & /*geom*/
      32 && te !== (te = /*geom*/
      e[5].h)) && E(F, "height", te);
      const re = {};
      k & /*geom*/
      32 && (re.x = /*geom*/
      e[5].x), k & /*geom*/
      32 && (re.y = /*geom*/
      e[5].y), k & /*viewportScale*/
      8 && (re.scale = /*viewportScale*/
      e[3]), ce.$set(re);
      const ge = {};
      k & /*geom*/
      32 && (ge.x = /*geom*/
      e[5].x + /*geom*/
      e[5].w), k & /*geom*/
      32 && (ge.y = /*geom*/
      e[5].y), k & /*viewportScale*/
      8 && (ge.scale = /*viewportScale*/
      e[3]), ue.$set(ge);
      const Ee = {};
      k & /*geom*/
      32 && (Ee.x = /*geom*/
      e[5].x + /*geom*/
      e[5].w), k & /*geom*/
      32 && (Ee.y = /*geom*/
      e[5].y + /*geom*/
      e[5].h), k & /*viewportScale*/
      8 && (Ee.scale = /*viewportScale*/
      e[3]), pe.$set(Ee);
      const le = {};
      k & /*geom*/
      32 && (le.x = /*geom*/
      e[5].x), k & /*geom*/
      32 && (le.y = /*geom*/
      e[5].y + /*geom*/
      e[5].h), k & /*viewportScale*/
      8 && (le.scale = /*viewportScale*/
      e[3]), ke.$set(le);
    },
    i(C) {
      K || (we(ce.$$.fragment, C), we(ue.$$.fragment, C), we(pe.$$.fragment, C), we(ke.$$.fragment, C), K = !0);
    },
    o(C) {
      Me(ce.$$.fragment, C), Me(ue.$$.fragment, C), Me(pe.$$.fragment, C), Me(ke.$$.fragment, C), K = !1;
    },
    d(C) {
      C && (fe(n), fe(m), fe(_), fe(w), fe(b), fe(y), fe(T), fe(R), fe(I), fe(W), fe(D), fe(x), fe(F), fe(Oe), fe(ve), fe(Xe), fe(je)), Je(ce, C), Je(ue, C), Je(pe, C), Je(ke, C), Fe = !1, $e(z);
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
  let o, s, { shape: l } = n, { computedStyle: f } = n, { transform: r } = n, { viewportScale: a = 1 } = n, { svgEl: c } = n;
  const u = (h, S, A) => {
    const P = h.geometry.bounds;
    let [w, b] = [P.minX, P.minY], [v, M] = [P.maxX, P.maxY];
    const [g, H] = A;
    if (S === "SHAPE")
      w += g, v += g, b += H, M += H;
    else {
      switch (S) {
        case "TOP":
        case "TOP_LEFT":
        case "TOP_RIGHT": {
          b += H;
          break;
        }
        case "BOTTOM":
        case "BOTTOM_LEFT":
        case "BOTTOM_RIGHT": {
          M += H;
          break;
        }
      }
      switch (S) {
        case "LEFT":
        case "TOP_LEFT":
        case "BOTTOM_LEFT": {
          w += g;
          break;
        }
        case "RIGHT":
        case "TOP_RIGHT":
        case "BOTTOM_RIGHT": {
          v += g;
          break;
        }
      }
    }
    const y = Math.min(w, v), T = Math.min(b, M), L = Math.abs(v - w), O = Math.abs(M - b);
    return {
      ...h,
      geometry: {
        x: y,
        y: T,
        w: L,
        h: O,
        bounds: {
          minX: y,
          minY: T,
          maxX: y + L,
          maxY: T + O
        }
      }
    };
  }, p = `rect-mask-${Math.random().toString(36).substring(2, 12)}`;
  function d(h) {
    Ue.call(this, e, h);
  }
  function m(h) {
    Ue.call(this, e, h);
  }
  function _(h) {
    Ue.call(this, e, h);
  }
  return e.$$set = (h) => {
    "shape" in h && t(0, l = h.shape), "computedStyle" in h && t(1, f = h.computedStyle), "transform" in h && t(2, r = h.transform), "viewportScale" in h && t(3, a = h.viewportScale), "svgEl" in h && t(4, c = h.svgEl);
  }, e.$$.update = () => {
    e.$$.dirty & /*shape*/
    1 && t(5, o = l.geometry), e.$$.dirty & /*geom, viewportScale*/
    40 && t(6, s = vn(o.bounds, 2 / a));
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
    m,
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
    const c = r.points.map((u, p) => {
      const d = p === r.points.length - 1 ? r.points[0] : r.points[p + 1], m = (u[0] + d[0]) / 2, _ = (u[1] + d[1]) / 2, h = Math.sqrt(
        Math.pow(d[0] - m, 2) + Math.pow(d[1] - _, 2)
      ) > Fl / n;
      return { point: [m, _], visible: h, elementIdx: s, ringIdx: a, pointIdx: p };
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
  let n, t, o, s, l, f, r, a, c, u;
  return {
    c() {
      n = ie("mask"), t = ie("rect"), r = ie("circle"), E(t, "x", o = /*mask*/
      e[9].x), E(t, "y", s = /*mask*/
      e[9].y), E(t, "width", l = /*mask*/
      e[9].w), E(t, "height", f = /*mask*/
      e[9].h), E(t, "class", "svelte-1vxo6dc"), E(r, "cx", a = /*point*/
      e[29][0]), E(r, "cy", c = /*point*/
      e[29][1]), E(r, "r", u = zn / /*viewportScale*/
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
      1088 && c !== (c = /*point*/
      p[29][1]) && E(r, "cy", c), d[0] & /*viewportScale*/
      8 && u !== (u = zn / /*viewportScale*/
      p[3]) && E(r, "r", u);
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
          const c = po(f, o, a);
          s[a] ? (s[a].p(c, r), we(s[a], 1)) : (s[a] = go(c), s[a].c(), we(s[a], 1), s[a].m(n.parentNode, n));
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
  let n, t, o, s, l, f, r, a, c, u, p, d, m, _, h, S, A, P = (
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
  ), v = [];
  for (let g = 0; g < b.length; g += 1)
    v[g] = _o(uo(e, b, g));
  const M = (g) => Me(v[g], 1, 1, () => {
    v[g] = null;
  });
  return {
    c() {
      n = ie("g"), t = ie("defs"), o = ie("mask"), s = ie("rect"), c = ie("path"), P && P.c(), w && w.c(), p = ie("path"), m = ie("path");
      for (let g = 0; g < v.length; g += 1)
        v[g].c();
      E(s, "x", l = /*mask*/
      e[9].x), E(s, "y", f = /*mask*/
      e[9].y), E(s, "width", r = /*mask*/
      e[9].w), E(s, "height", a = /*mask*/
      e[9].h), E(s, "class", "svelte-1vxo6dc"), E(c, "d", u = kn(
        /*element*/
        e[30]
      )), E(c, "class", "svelte-1vxo6dc"), E(o, "id", `${/*maskId*/
      e[18]}-${/*elementIdx*/
      e[32]}-outer`), E(o, "class", "a9s-multipolygon-editor-mask svelte-1vxo6dc"), E(p, "class", "a9s-outer"), E(p, "mask", `url(#${/*maskId*/
      e[18]}-${/*elementIdx*/
      e[32]}-outer)`), E(p, "fill-rule", "evenodd"), E(p, "d", d = kn(
        /*element*/
        e[30]
      )), E(m, "class", "a9s-inner"), E(m, "mask", `url(#${/*maskId*/
      e[18]}-${/*elementIdx*/
      e[32]}-inner)`), E(
        m,
        "style",
        /*computedStyle*/
        e[1]
      ), E(m, "fill-rule", "evenodd"), E(m, "d", _ = kn(
        /*element*/
        e[30]
      ));
    },
    m(g, H) {
      ae(g, n, H), Te(n, t), Te(t, o), Te(o, s), Te(o, c), P && P.m(o, null), w && w.m(t, null), Te(n, p), Te(n, m);
      for (let y = 0; y < v.length; y += 1)
        v[y] && v[y].m(n, null);
      h = !0, S || (A = [
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
          m,
          "pointerup",
          /*onShapePointerUp*/
          e[13]
        ),
        ye(m, "pointerdown", function() {
          Ne(
            /*grab*/
            e[28]("SHAPE")
          ) && e[28]("SHAPE").apply(this, arguments);
        })
      ], S = !0);
    },
    p(g, H) {
      if (e = g, (!h || H[0] & /*mask*/
      512 && l !== (l = /*mask*/
      e[9].x)) && E(s, "x", l), (!h || H[0] & /*mask*/
      512 && f !== (f = /*mask*/
      e[9].y)) && E(s, "y", f), (!h || H[0] & /*mask*/
      512 && r !== (r = /*mask*/
      e[9].w)) && E(s, "width", r), (!h || H[0] & /*mask*/
      512 && a !== (a = /*mask*/
      e[9].h)) && E(s, "height", a), (!h || H[0] & /*geom*/
      32 && u !== (u = kn(
        /*element*/
        e[30]
      ))) && E(c, "d", u), /*visibleMidpoint*/
      e[6] !== void 0 && !/*isHandleHovered*/
      e[7] ? P ? P.p(dt(e), H) : (P = ho(dt(e)), P.c(), P.m(o, null)) : P && (P.d(1), P = null), /*visibleMidpoint*/
      e[6] !== void 0 && !/*isHandleHovered*/
      e[7] ? w ? w.p(ht(e), H) : (w = mo(ht(e)), w.c(), w.m(t, null)) : w && (w.d(1), w = null), (!h || H[0] & /*geom*/
      32 && d !== (d = kn(
        /*element*/
        e[30]
      ))) && E(p, "d", d), (!h || H[0] & /*computedStyle*/
      2) && E(
        m,
        "style",
        /*computedStyle*/
        e[1]
      ), (!h || H[0] & /*geom*/
      32 && _ !== (_ = kn(
        /*element*/
        e[30]
      ))) && E(m, "d", _), H[0] & /*geom, viewportScale, selectedCorners, onEnterHandle, onLeaveHandle, onHandlePointerDown, grab, onHandlePointerUp*/
      268491048) {
        b = mn(
          /*element*/
          e[30].rings
        );
        let y;
        for (y = 0; y < b.length; y += 1) {
          const T = uo(e, b, y);
          v[y] ? (v[y].p(T, H), we(v[y], 1)) : (v[y] = _o(T), v[y].c(), we(v[y], 1), v[y].m(n, null));
        }
        for (Cn(), y = b.length; y < v.length; y += 1)
          M(y);
        Rn();
      }
    },
    i(g) {
      if (!h) {
        for (let H = 0; H < b.length; H += 1)
          we(v[H]);
        h = !0;
      }
    },
    o(g) {
      v = v.filter(Boolean);
      for (let H = 0; H < v.length; H += 1)
        Me(v[H]);
      h = !1;
    },
    d(g) {
      g && fe(n), P && P.d(), w && w.d(), ot(v, g), S = !1, $e(A);
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
    l[a] = yo(co(e, s, a));
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
    m(a, c) {
      for (let u = 0; u < l.length; u += 1)
        l[u] && l[u].m(a, c);
      ae(a, n, c), r && r.m(a, c), ae(a, t, c), o = !0;
    },
    p(a, c) {
      if (c[0] & /*geom, viewportScale, selectedCorners, onEnterHandle, onLeaveHandle, onHandlePointerDown, grab, onHandlePointerUp, maskId, computedStyle, onShapePointerUp, midpoints, visibleMidpoint, mask, isHandleHovered*/
      268763114) {
        s = mn(
          /*geom*/
          a[5].polygons
        );
        let u;
        for (u = 0; u < s.length; u += 1) {
          const p = co(a, s, u);
          l[u] ? (l[u].p(p, c), we(l[u], 1)) : (l[u] = yo(p), l[u].c(), we(l[u], 1), l[u].m(n.parentNode, n));
        }
        for (Cn(), u = s.length; u < l.length; u += 1)
          f(u);
        Rn();
      }
      a[6] !== void 0 && !/*isHandleHovered*/
      a[7] ? r ? (r.p(pt(a), c), c[0] & /*visibleMidpoint, isHandleHovered*/
      192 && we(r, 1)) : (r = wo(pt(a)), r.c(), we(r, 1), r.m(t.parentNode, t)) : r && (Cn(), Me(r, 1, 1, () => {
        r = null;
      }), Rn());
    },
    i(a) {
      if (!o) {
        for (let c = 0; c < s.length; c += 1)
          we(l[c]);
        we(r), o = !0;
      }
    },
    o(a) {
      l = l.filter(Boolean);
      for (let c = 0; c < l.length; c += 1)
        Me(l[c]);
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
  let { shape: r } = n, { computedStyle: a } = n, { transform: c } = n, { viewportScale: u = 1 } = n, { svgEl: p } = n, d, m = !1, _, h = [];
  const S = () => t(7, m = !0), A = () => t(7, m = !1), P = (I) => {
    if (h.length > 0 || !s.some((V) => V.visible)) {
      t(6, d = void 0);
      return;
    }
    const [Y, N] = c.elementToImage(I.offsetX, I.offsetY), U = (V) => Math.pow(V[0] - Y, 2) + Math.pow(V[1] - N, 2), W = ml(o).reduce((V, Q) => U(Q) < U(V) ? Q : V), D = s.filter((V) => V.visible).reduce((V, Q) => U(Q.point) < U(V.point) ? Q : V), X = Math.pow($l / u, 2);
    U(W) < X || U(D.point) < X ? t(6, d = s.indexOf(D)) : t(6, d = void 0);
  }, w = () => {
    document.activeElement !== p && p.focus();
  }, b = () => {
    t(8, h = []), w();
  }, v = (I) => {
    t(7, m = !0), I.preventDefault(), I.stopPropagation(), _ = performance.now();
  }, M = (I, Y, N) => (U) => {
    if (!_ || fn || performance.now() - _ > Jl) return;
    const W = (X) => X.polygon === I && X.ring === Y && X.point === N, D = h.some(W);
    U.metaKey || U.ctrlKey || U.shiftKey ? D ? t(8, h = h.filter((X) => !W(X))) : t(8, h = [...h, { polygon: I, ring: Y, point: N }]) : D && h.length > 1 ? t(8, h = [{ polygon: I, ring: Y, point: N }]) : D ? t(8, h = []) : t(8, h = [{ polygon: I, ring: Y, point: N }]), w();
  }, g = (I, Y, N) => {
    w();
    const U = I.geometry.polygons;
    let W;
    if (Y === "SHAPE")
      W = U.map((D) => {
        const X = D.rings.map((Q, x) => ({ points: Q.points.map((F, oe) => [F[0] + N[0], F[1] + N[1]]) })), V = De(X[0].points);
        return { rings: X, bounds: V };
      });
    else {
      const [D, X, V, Q] = Y.split("-").map((x) => parseInt(x));
      W = U.map((x, F) => {
        if (F === X) {
          const oe = x.rings.map((te, Oe) => Oe === V ? { points: te.points.map((ce, ve) => ve === Q ? [ce[0] + N[0], ce[1] + N[1]] : ce) } : te), be = De(oe[0].points);
          return { rings: oe, bounds: be };
        } else
          return x;
      });
    }
    return {
      ...I,
      geometry: {
        polygons: W,
        bounds: ft(W)
      }
    };
  }, H = (I) => async (Y) => {
    Y.stopPropagation();
    const N = s[I], U = o.polygons.map((D, X) => {
      if (X === N.elementIdx) {
        const V = D.rings.map((x, F) => F === N.ringIdx ? { points: [
          ...x.points.slice(0, N.pointIdx + 1),
          N.point,
          ...x.points.slice(N.pointIdx + 1)
        ] } : x), Q = De(V[0].points);
        return { rings: V, bounds: Q };
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
    const W = [...document.querySelectorAll(".a9s-handle")][I + 1];
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
    const I = o.polygons.map((Y, N) => {
      if (h.some((U) => U.polygon === N)) {
        const U = Y.rings.map((D, X) => {
          const V = h.filter((Q) => Q.polygon === N && Q.ring === X);
          return V.length && D.points.length - V.length >= 3 ? { points: D.points.filter((Q, x) => !V.some((F) => F.point === x)) } : D;
        }), W = De(U[0].points);
        return { rings: U, bounds: W };
      } else
        return Y;
    });
    !Nt(o.polygons, I) && (f("change", {
      ...r,
      geometry: {
        polygons: I,
        bounds: ft(I)
      }
    }), t(8, h = []));
  };
  Cs(() => {
    if (fn) return;
    const I = (Y) => {
      (Y.key === "Delete" || Y.key === "Backspace") && (Y.preventDefault(), y());
    };
    return p.addEventListener("pointermove", P), p.addEventListener("keydown", I), () => {
      p.removeEventListener("pointermove", P), p.removeEventListener("keydown", I);
    };
  });
  const T = `polygon-mask-${Math.random().toString(36).substring(2, 12)}`, L = (I, Y, N, { polygon: U, ring: W, point: D }) => U === I && W === Y && D === N;
  function O(I) {
    Ue.call(this, e, I);
  }
  function G(I) {
    Ue.call(this, e, I);
  }
  function R(I) {
    Ue.call(this, e, I);
  }
  return e.$$set = (I) => {
    "shape" in I && t(0, r = I.shape), "computedStyle" in I && t(1, a = I.computedStyle), "transform" in I && t(2, c = I.transform), "viewportScale" in I && t(3, u = I.viewportScale), "svgEl" in I && t(4, p = I.svgEl);
  }, e.$$.update = () => {
    e.$$.dirty[0] & /*shape*/
    1 && t(5, o = r.geometry), e.$$.dirty[0] & /*geom, viewportScale*/
    40 && t(10, s = fn ? [] : Wl(o, u)), e.$$.dirty[0] & /*geom, viewportScale*/
    40 && t(9, l = vn(o.bounds, zn / u));
  }, [
    r,
    a,
    c,
    u,
    p,
    o,
    d,
    m,
    h,
    l,
    s,
    S,
    A,
    b,
    v,
    M,
    g,
    H,
    T,
    L,
    O,
    G,
    R
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
function B(e, n, t) {
  e.insertBefore(n, t || null);
}
function j(e) {
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
function ci(e) {
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
        Sn++, Gn(n), ui(n.$$);
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
function ui(e) {
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
function Qn(e, n, t, o, s, l, f, r, a, c, u, p) {
  let d = e.length, m = l.length, _ = d;
  const h = {};
  for (; _--; ) h[e[_].key] = _;
  const S = [], A = /* @__PURE__ */ new Map(), P = /* @__PURE__ */ new Map(), w = [];
  for (_ = m; _--; ) {
    const g = p(s, l, _), H = t(g);
    let y = f.get(H);
    y ? w.push(() => y.p(g, n)) : (y = c(H, g), y.c()), A.set(H, S[_] = y), H in h && P.set(H, Math.abs(_ - h[H]));
  }
  const b = /* @__PURE__ */ new Set(), v = /* @__PURE__ */ new Set();
  function M(g) {
    J(g, 1), g.m(r, u), f.set(g.key, g), u = g.first, m--;
  }
  for (; d && m; ) {
    const g = S[m - 1], H = e[d - 1], y = g.key, T = H.key;
    g === H ? (u = g.first, d--, m--) : A.has(T) ? !f.has(y) || b.has(y) ? M(g) : v.has(T) ? d-- : P.get(y) > P.get(T) ? (v.add(y), M(g)) : (b.add(T), d--) : (a(H, f), d--);
  }
  for (; d--; ) {
    const g = e[d];
    A.has(g.key) || a(g, f);
  }
  for (; m; ) M(S[m - 1]);
  return Le(w), S;
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
  const c = e.$$ = {
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
  f && f(c.root);
  let u = !1;
  if (c.ctx = t ? t(e, n.props || {}, (p, d, ...m) => {
    const _ = m.length ? m[0] : d;
    return c.ctx && s(c.ctx[p], c.ctx[p] = _) && (!c.skip_bound && c.bound[p] && c.bound[p](_), u && di(e, p)), d;
  }) : [], c.update(), u = !0, Le(c.before_update), c.fragment = o ? o(c.ctx) : !1, n.target) {
    if (n.hydrate) {
      const p = fi(n.target);
      c.fragment && c.fragment.l(p), p.forEach(j);
    } else
      c.fragment && c.fragment.c();
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
      n = q("polyline"), i(n, "class", "a9s-inner"), i(n, "fill", "none"), i(n, "points", t = /*func*/
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
      B(o, n, s), t && t.m(n, null), e[12](n);
    },
    p(o, [s]) {
      /*origin*/
      o[1] && /*cursor*/
      o[2] ? t ? t.p(o, s) : (t = So(o), t.c(), t.m(n, null)) : t && (t.d(1), t = null);
    },
    i: Se,
    o: Se,
    d(o) {
      o && j(n), t && t.d(), e[12](null);
    }
  };
}
function _i(e, n, t) {
  const o = xe();
  let { addEventListener: s } = n, { drawingMode: l } = n, { transform: f } = n, { viewportScale: r } = n, a, c, u, p, d, m, _, h, S;
  const A = (g) => {
    const H = g, { timeStamp: y, offsetX: T, offsetY: L } = H;
    h = { timeStamp: y, offsetX: T, offsetY: L }, l === "drag" && (t(1, c = f.elementToImage(H.offsetX, H.offsetY)), t(2, u = c), t(3, p = c[0]), t(4, d = c[1]), t(5, m = u[0]), t(6, _ = u[1]));
  }, P = (g) => {
    const H = g || S;
    c && (t(2, u = f.elementToImage(H.offsetX, H.offsetY)), t(5, m = u[0]), t(6, _ = u[1])), g && (S = g);
  }, w = (g) => {
    const H = g;
    if (l === "click") {
      const y = performance.now() - h.timeStamp, T = rn([h.offsetX, h.offsetY], [H.offsetX, H.offsetY]);
      if (y > 300 || T > 15) return;
      c ? b() : (t(1, c = f.elementToImage(H.offsetX, H.offsetY)), t(2, u = c), t(3, p = c[0]), t(4, d = c[1]), t(5, m = u[0]), t(6, _ = u[1]));
    } else c && (H.stopPropagation(), b());
  }, b = () => {
    if (c && u && rn(c, u) > 4) {
      const g = {
        type: Pe.LINE,
        geometry: {
          bounds: De([c, u]),
          points: [c, u]
        },
        properties: { toolType: "arrow" }
      };
      o("create", g);
    }
    t(1, c = void 0), t(2, u = void 0), S = void 0;
  };
  on(() => {
    s("pointerdown", A, !0), s("pointermove", P), s("pointerup", w, !0);
  });
  const v = () => {
    const g = Math.atan2(_ - d, m - p), H = 12, y = m - H * Math.cos(g - Math.PI / 6), T = _ - H * Math.sin(g - Math.PI / 6), L = m - H * Math.cos(g + Math.PI / 6), O = _ - H * Math.sin(g + Math.PI / 6);
    return `${y},${T} ${m},${_} ${L},${O}`;
  };
  function M(g) {
    gn[g ? "unshift" : "push"](() => {
      a = g, t(0, a);
    });
  }
  return e.$$set = (g) => {
    "addEventListener" in g && t(7, s = g.addEventListener), "drawingMode" in g && t(8, l = g.drawingMode), "transform" in g && t(9, f = g.transform), "viewportScale" in g && t(10, r = g.viewportScale);
  }, [
    a,
    c,
    u,
    p,
    d,
    m,
    _,
    s,
    l,
    f,
    r,
    v,
    M
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
      B(o, n, s), t && t.m(n, null), e[11](n);
    },
    p(o, [s]) {
      /*origin*/
      o[1] && /*cursor*/
      o[2] ? t ? t.p(o, s) : (t = Mo(o), t.c(), t.m(n, null)) : t && (t.d(1), t = null);
    },
    i: Se,
    o: Se,
    d(o) {
      o && j(n), t && t.d(), e[11](null);
    }
  };
}
function bi(e, n, t) {
  const o = xe();
  let { addEventListener: s } = n, { drawingMode: l } = n, { transform: f } = n, { viewportScale: r } = n, a, c, u, p, d, m, _, h, S;
  const A = (M) => {
    const g = M, { timeStamp: H, offsetX: y, offsetY: T } = g;
    h = { timeStamp: H, offsetX: y, offsetY: T }, l === "drag" && (t(1, c = f.elementToImage(g.offsetX, g.offsetY)), t(2, u = c), t(3, p = c[0]), t(4, d = c[1]), t(5, m = u[0]), t(6, _ = u[1]));
  }, P = (M) => {
    const g = M || S;
    c && (t(2, u = f.elementToImage(g.offsetX, g.offsetY)), t(5, m = u[0]), t(6, _ = u[1])), M && (S = M);
  }, w = (M) => {
    const g = M;
    if (l === "click") {
      const H = performance.now() - h.timeStamp, y = rn([h.offsetX, h.offsetY], [g.offsetX, g.offsetY]);
      if (H > 300 || y > 15) return;
      c ? b() : (t(1, c = f.elementToImage(g.offsetX, g.offsetY)), t(2, u = c), t(3, p = c[0]), t(4, d = c[1]), t(5, m = u[0]), t(6, _ = u[1]));
    } else c && (g.stopPropagation(), b());
  }, b = () => {
    if (c && u && rn(c, u) > 4) {
      const M = {
        type: Pe.POLYLINE,
        geometry: {
          bounds: De([c, u]),
          points: [{ type: "CORNER", point: c }, { type: "CORNER", point: u }]
        },
        properties: { toolType: "distance" }
      };
      o("create", M);
    }
    t(1, c = void 0), t(2, u = void 0), S = void 0;
  };
  on(() => {
    s("pointerdown", A, !0), s("pointermove", P), s("pointerup", w, !0);
  });
  function v(M) {
    gn[M ? "unshift" : "push"](() => {
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
    m,
    _,
    s,
    l,
    f,
    r,
    v
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
      var c = r.x - a.x, u = r.y - a.y;
      return c * c + u * u;
    }
    function t(r, a, c) {
      var u = a.x, p = a.y, d = c.x - u, m = c.y - p;
      if (d !== 0 || m !== 0) {
        var _ = ((r.x - u) * d + (r.y - p) * m) / (d * d + m * m);
        _ > 1 ? (u = c.x, p = c.y) : _ > 0 && (u += d * _, p += m * _);
      }
      return d = r.x - u, m = r.y - p, d * d + m * m;
    }
    function o(r, a) {
      for (var c = r[0], u = [c], p, d = 1, m = r.length; d < m; d++)
        p = r[d], n(p, c) > a && (u.push(p), c = p);
      return c !== p && u.push(p), u;
    }
    function s(r, a, c, u, p) {
      for (var d = u, m, _ = a + 1; _ < c; _++) {
        var h = t(r[_], r[a], r[c]);
        h > d && (m = _, d = h);
      }
      d > u && (m - a > 1 && s(r, a, m, u, p), p.push(r[m]), c - m > 1 && s(r, m, c, u, p));
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
    const f = e[s][0], r = e[s][1], a = e[l][0], c = e[l][1];
    r > t != c > t && n < (a - f) * (t - r) / (c - r) + f && (o = !o);
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
    const { cx: o, cy: s, rx: l, ry: f } = e.geometry, r = 0, a = Math.cos(r), c = Math.sin(r), u = n - o, p = t - s, d = a * u + c * p, m = c * u - a * p;
    return d * d / (l * l) + m * m / (f * f) <= 1;
  }
};
Bn(an.ELLIPSE, Ti);
const Mi = {
  area: (e) => 0,
  intersects: (e, n, t, o = 2) => {
    const [[s, l], [f, r]] = e.geometry.points, a = Math.abs((r - l) * n - (f - s) * t + f * l - r * s), c = Si([s, l], [f, r]);
    return a / c <= o;
  }
};
Bn(an.LINE, Mi);
const Pi = {
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
    const r = f / s, a = Math.pow(1 - r, 3) * e[0] + 3 * Math.pow(1 - r, 2) * r * n[0] + 3 * (1 - r) * Math.pow(r, 2) * t[0] + Math.pow(r, 3) * o[0], c = Math.pow(1 - r, 3) * e[1] + 3 * Math.pow(1 - r, 2) * r * n[1] + 3 * (1 - r) * Math.pow(r, 2) * t[1] + Math.pow(r, 3) * o[1];
    l.push([a, c]);
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
  const [o, s] = e, [l, f] = n, [r, a] = t, c = r - l, u = a - f, p = Math.sqrt(c * c + u * u);
  if (p === 0)
    return Math.sqrt((o - l) * (o - l) + (s - f) * (s - f));
  const d = ((o - l) * c + (s - f) * u) / (p * p);
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
      B(r, n, a), f && f.m(n, null), t = !0, o || (s = [
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
      r && j(n), f && f.d(r), o = !1, Le(s);
    }
  };
}
function ji(e, n, t) {
  let { $$slots: o = {}, $$scope: s } = n;
  const l = xe();
  let { shape: f } = n, { editor: r } = n, { transform: a } = n, { svgEl: c } = n, u, p, d;
  const m = (S) => (A) => {
    if (u = S, c) {
      const { left: w, top: b } = c.getBoundingClientRect(), v = A.clientX - w, M = A.clientY - b;
      p = a.elementToImage(v, M);
    } else {
      const { offsetX: w, offsetY: b } = A;
      p = a.elementToImage(w, b);
    }
    d = f, A.target.setPointerCapture(A.pointerId), l("grab", A);
  }, _ = (S) => {
    if (u) {
      const [A, P] = a.elementToImage(S.offsetX, S.offsetY), w = [A - p[0], P - p[1]];
      t(3, f = r(d, u, w)), l("change", f);
    }
  }, h = (S) => {
    S.target.releasePointerCapture(S.pointerId), u = void 0, d = f, l("release", S);
  };
  return e.$$set = (S) => {
    "shape" in S && t(3, f = S.shape), "editor" in S && t(4, r = S.editor), "transform" in S && t(5, a = S.transform), "svgEl" in S && t(6, c = S.svgEl), "$$scope" in S && t(7, s = S.$$scope);
  }, [
    m,
    _,
    h,
    f,
    r,
    a,
    c,
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
  let n, t, o, s, l, f, r, a, c = (
    /*selected*/
    e[3] && Ho(e)
  );
  return {
    c() {
      n = q("g"), t = q("circle"), c && c.c(), s = q("circle"), i(t, "class", "a9s-handle-buffer svelte-qtyc7s"), i(
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
    m(u, p) {
      B(u, n, p), Z(n, t), c && c.m(n, null), Z(n, s), r || (a = [
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
      8 && l !== (l = ln(`a9s-handle-dot${/*selected*/
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
      u && j(n), c && c.d(), r = !1, Le(a);
    }
  };
}
function Ui(e) {
  let n, t, o, s, l, f, r, a, c;
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
    m(u, p) {
      B(u, n, p), Z(n, t), Z(n, s), Z(n, f), a || (c = [
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
      16 && Ze(
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
      u && j(n), a = !1, Le(c);
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
      s.m(l, f), B(l, n, f);
    },
    p(l, [f]) {
      s.p(l, f);
    },
    i: Se,
    o: Se,
    d(l) {
      l && j(n), s.d(l);
    }
  };
}
function qi(e, n, t) {
  let o, { x: s } = n, { y: l } = n, { scale: f } = n, { selected: r = void 0 } = n, a = !1;
  const c = (w) => {
    w.pointerType === "touch" && t(4, a = !0);
  }, u = () => t(4, a = !1);
  function p(w) {
    he.call(this, e, w);
  }
  function d(w) {
    he.call(this, e, w);
  }
  function m(w) {
    he.call(this, e, w);
  }
  function _(w) {
    he.call(this, e, w);
  }
  function h(w) {
    he.call(this, e, w);
  }
  function S(w) {
    he.call(this, e, w);
  }
  function A(w) {
    he.call(this, e, w);
  }
  function P(w) {
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
    c,
    u,
    n,
    p,
    d,
    m,
    _,
    h,
    S,
    A,
    P
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
    m(a, c) {
      B(a, n, c), Z(n, t), Z(n, s), Z(n, l), f || (r = [
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
      a && j(n), f = !1, Le(r);
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
      s.m(l, f), B(l, n, f);
    },
    p(l, [f]) {
      s.p(l, f);
    },
    i: Se,
    o: Se,
    d(l) {
      l && j(n), s.d(l);
    }
  };
}
function Ki(e, n, t) {
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
      B(l, n, f);
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
      l && j(n);
    }
  };
}
function Ro(e) {
  let n, t, o, s, l, f, r, a, c, u;
  return {
    c() {
      n = q("mask"), t = q("rect"), r = q("circle"), i(t, "x", o = /*mask*/
      e[9].x), i(t, "y", s = /*mask*/
      e[9].y), i(t, "width", l = /*mask*/
      e[9].w), i(t, "height", f = /*mask*/
      e[9].h), i(t, "class", "svelte-1h2slbm"), i(r, "cx", a = /*point*/
      e[28][0]), i(r, "cy", c = /*point*/
      e[28][1]), i(r, "r", u = Fn / /*viewportScale*/
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
      8 && u !== (u = Fn / /*viewportScale*/
      p[3]) && i(r, "r", u);
    },
    d(p) {
      p && j(n);
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
  let n, t, o, s, l, f, r, a, c, u, p, d, m, _, h, S, A, P, w, b, v, M = (
    /*visibleMidpoint*/
    e[6] !== void 0 && !/*isHandleHovered*/
    e[7] && Co(bt(e))
  ), g = (
    /*visibleMidpoint*/
    e[6] !== void 0 && !/*isHandleHovered*/
    e[7] && Ro(wt(e))
  ), H = Ae(
    /*geom*/
    e[5].points
  ), y = [];
  for (let O = 0; O < H.length; O += 1)
    y[O] = No(Io(e, H, O));
  const T = (O) => ee(y[O], 1, 1, () => {
    y[O] = null;
  });
  let L = (
    /*visibleMidpoint*/
    e[6] !== void 0 && !/*isHandleHovered*/
    e[7] && Ao(yt(e))
  );
  return {
    c() {
      n = q("defs"), t = q("mask"), o = q("rect"), a = q("polygon"), M && M.c(), g && g.c(), u = ne(), p = q("polygon"), m = ne(), _ = q("polygon"), S = ne();
      for (let O = 0; O < y.length; O += 1)
        y[O].c();
      A = ne(), L && L.c(), P = He(), i(o, "x", s = /*mask*/
      e[9].x), i(o, "y", l = /*mask*/
      e[9].y), i(o, "width", f = /*mask*/
      e[9].w), i(o, "height", r = /*mask*/
      e[9].h), i(o, "class", "svelte-1h2slbm"), i(a, "points", c = /*geom*/
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
    m(O, G) {
      B(O, n, G), Z(n, t), Z(t, o), Z(t, a), M && M.m(t, null), g && g.m(n, null), B(O, u, G), B(O, p, G), B(O, m, G), B(O, _, G), B(O, S, G);
      for (let R = 0; R < y.length; R += 1)
        y[R] && y[R].m(O, G);
      B(O, A, G), L && L.m(O, G), B(O, P, G), w = !0, b || (v = [
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
    p(O, G) {
      if (e = O, (!w || G[0] & /*mask*/
      512 && s !== (s = /*mask*/
      e[9].x)) && i(o, "x", s), (!w || G[0] & /*mask*/
      512 && l !== (l = /*mask*/
      e[9].y)) && i(o, "y", l), (!w || G[0] & /*mask*/
      512 && f !== (f = /*mask*/
      e[9].w)) && i(o, "width", f), (!w || G[0] & /*mask*/
      512 && r !== (r = /*mask*/
      e[9].h)) && i(o, "height", r), (!w || G[0] & /*geom*/
      32 && c !== (c = /*geom*/
      e[5].points.map(Do).join(" "))) && i(a, "points", c), /*visibleMidpoint*/
      e[6] !== void 0 && !/*isHandleHovered*/
      e[7] ? M ? M.p(bt(e), G) : (M = Co(bt(e)), M.c(), M.m(t, null)) : M && (M.d(1), M = null), /*visibleMidpoint*/
      e[6] !== void 0 && !/*isHandleHovered*/
      e[7] ? g ? g.p(wt(e), G) : (g = Ro(wt(e)), g.c(), g.m(n, null)) : g && (g.d(1), g = null), (!w || G[0] & /*geom*/
      32 && d !== (d = /*geom*/
      e[5].points.map(Xo).join(" "))) && i(p, "points", d), (!w || G[0] & /*computedStyle*/
      2) && i(
        _,
        "style",
        /*computedStyle*/
        e[1]
      ), (!w || G[0] & /*geom*/
      32 && h !== (h = /*geom*/
      e[5].points.map(jo).join(" "))) && i(_, "points", h), G[0] & /*geom, viewportScale, selectedCorners, onEnterHandle, onLeaveHandle, onHandlePointerDown, grab, onHandlePointerUp*/
      134322472) {
        H = Ae(
          /*geom*/
          e[5].points
        );
        let R;
        for (R = 0; R < H.length; R += 1) {
          const I = Io(e, H, R);
          y[R] ? (y[R].p(I, G), J(y[R], 1)) : (y[R] = No(I), y[R].c(), J(y[R], 1), y[R].m(A.parentNode, A));
        }
        for (Ve(), R = H.length; R < y.length; R += 1)
          T(R);
        Ke();
      }
      /*visibleMidpoint*/
      e[6] !== void 0 && !/*isHandleHovered*/
      e[7] ? L ? (L.p(yt(e), G), G[0] & /*visibleMidpoint, isHandleHovered*/
      192 && J(L, 1)) : (L = Ao(yt(e)), L.c(), J(L, 1), L.m(P.parentNode, P)) : L && (Ve(), ee(L, 1, 1, () => {
        L = null;
      }), Ke());
    },
    i(O) {
      if (!w) {
        for (let G = 0; G < H.length; G += 1)
          J(y[G]);
        J(L), w = !0;
      }
    },
    o(O) {
      y = y.filter(Boolean);
      for (let G = 0; G < y.length; G += 1)
        ee(y[G]);
      ee(L), w = !1;
    },
    d(O) {
      O && (j(n), j(u), j(p), j(m), j(_), j(S), j(A), j(P)), M && M.d(), g && g.d(), jn(y, O), L && L.d(O), b = !1, Le(v);
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
  let { shape: r } = n, { computedStyle: a } = n, { transform: c } = n, { viewportScale: u = 1 } = n, { svgEl: p } = n, d, m = !1, _, h = [];
  const S = () => t(7, m = !0), A = () => t(7, m = !1), P = (R) => {
    if (h.length > 0 || !s.some((V) => V.visible)) {
      t(6, d = void 0);
      return;
    }
    const [I, Y] = c.elementToImage(R.offsetX, R.offsetY), N = (V) => Math.pow(V[0] - I, 2) + Math.pow(V[1] - Y, 2), U = o.points.reduce((V, Q) => N(Q) < N(V) ? Q : V), W = s.filter((V) => V.visible).reduce((V, Q) => N(Q.point) < N(V.point) ? Q : V), D = Math.pow(Qi / u, 2);
    N(U) < D || N(W.point) < D ? t(6, d = s.indexOf(W)) : t(6, d = void 0);
  }, w = () => {
    document.activeElement !== p && p.focus();
  }, b = () => {
    t(8, h = []), w();
  }, v = (R) => {
    t(7, m = !0), R.preventDefault(), R.stopPropagation(), _ = performance.now();
  }, M = (R) => (I) => {
    if (!_ || dn || performance.now() - _ > Zi) return;
    const Y = h.includes(R);
    I.metaKey || I.ctrlKey || I.shiftKey ? Y ? t(8, h = h.filter((N) => N !== R)) : t(8, h = [...h, R]) : Y && h.length > 1 ? t(8, h = [R]) : Y ? t(8, h = []) : t(8, h = [R]), w();
  }, g = (R, I, Y) => {
    w();
    let N;
    const U = R.geometry;
    h.length > 1 ? N = U.points.map(([D, X], V) => h.includes(V) ? [D + Y[0], X + Y[1]] : [D, X]) : I === "SHAPE" ? N = U.points.map(([D, X]) => [D + Y[0], X + Y[1]]) : N = U.points.map(([D, X], V) => I === `HANDLE-${V}` ? [D + Y[0], X + Y[1]] : [D, X]);
    const W = hn(N);
    return { ...R, geometry: { points: N, bounds: W } };
  }, H = (R) => async (I) => {
    I.stopPropagation();
    const Y = [
      ...o.points.slice(0, R + 1),
      s[R].point,
      ...o.points.slice(R + 1)
    ], N = hn(Y);
    f("change", { ...r, geometry: { points: Y, bounds: N } }), await Kn();
    const U = [...document.querySelectorAll(".a9s-handle")][R + 1];
    if (U != null && U.firstChild) {
      const W = new PointerEvent(
        "pointerdown",
        {
          bubbles: !0,
          cancelable: !0,
          clientX: I.clientX,
          clientY: I.clientY,
          pointerId: I.pointerId,
          pointerType: I.pointerType,
          isPrimary: I.isPrimary,
          buttons: I.buttons
        }
      );
      U.firstChild.dispatchEvent(W);
    }
  }, y = () => {
    if (o.points.length - h.length < 3) return;
    const R = o.points.filter((Y, N) => !h.includes(N)), I = hn(R);
    f("change", { ...r, geometry: { points: R, bounds: I } }), t(8, h = []);
  };
  on(() => {
    if (dn) return;
    const R = (I) => {
      (I.key === "Delete" || I.key === "Backspace") && (I.preventDefault(), y());
    };
    return p.addEventListener("pointermove", P), p.addEventListener("keydown", R), () => {
      p.removeEventListener("pointermove", P), p.removeEventListener("keydown", R);
    };
  });
  const T = `polygon-mask-${Math.random().toString(36).substring(2, 12)}`;
  function L(R) {
    he.call(this, e, R);
  }
  function O(R) {
    he.call(this, e, R);
  }
  function G(R) {
    he.call(this, e, R);
  }
  return e.$$set = (R) => {
    "shape" in R && t(0, r = R.shape), "computedStyle" in R && t(1, a = R.computedStyle), "transform" in R && t(2, c = R.transform), "viewportScale" in R && t(3, u = R.viewportScale), "svgEl" in R && t(4, p = R.svgEl);
  }, e.$$.update = () => {
    e.$$.dirty[0] & /*shape*/
    1 && t(5, o = r.geometry), e.$$.dirty[0] & /*geom, viewportScale*/
    40 && t(10, s = dn ? [] : o.points.map((R, I) => {
      const Y = I === o.points.length - 1 ? o.points[0] : o.points[I + 1], N = (R[0] + Y[0]) / 2, U = (R[1] + Y[1]) / 2, D = Math.sqrt(Math.pow(Y[0] - N, 2) + Math.pow(Y[1] - U, 2)) > Ji / u;
      return { point: [N, U], visible: D };
    })), e.$$.dirty[0] & /*geom, viewportScale*/
    40 && t(9, l = Yt(o.bounds, Fn / u));
  }, [
    r,
    a,
    c,
    u,
    p,
    o,
    d,
    m,
    h,
    l,
    s,
    S,
    A,
    P,
    b,
    v,
    M,
    g,
    H,
    T,
    L,
    O,
    G
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
  let n, t, o, s, l, f, r, a, c, u, p, d, m, _, h, S, A, P, w, b, v, M, g, H, y, T, L, O, G, R, I, Y, N, U, W, D, X, V, Q, x, F, oe, be, te, Oe, ce, ve, ue, Xe, pe, je, ke, K, Fe, z;
  return ce = new Ge({
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
    se(
      /*grab*/
      e[12]("TOP_LEFT")
    ) && e[12]("TOP_LEFT").apply(this, arguments);
  }), ue = new Ge({
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
      n = q("defs"), t = q("mask"), o = q("rect"), a = q("rect"), m = ne(), _ = q("rect"), w = ne(), b = q("rect"), y = ne(), T = q("rect"), R = ne(), I = q("rect"), W = ne(), D = q("rect"), x = ne(), F = q("rect"), Oe = ne(), _e(ce.$$.fragment), ve = ne(), _e(ue.$$.fragment), Xe = ne(), _e(pe.$$.fragment), je = ne(), _e(ke.$$.fragment), i(o, "class", "rect-mask-bg svelte-1njczvj"), i(o, "x", s = /*mask*/
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
      ), i(t, "class", "a9s-rectangle-editor-mask svelte-1njczvj"), i(_, "class", "a9s-outer"), i(_, "mask", `url(#${/*maskId*/
      e[8]})`), i(_, "x", h = /*geom*/
      e[5].x), i(_, "y", S = /*geom*/
      e[5].y), i(_, "width", A = /*geom*/
      e[5].w), i(_, "height", P = /*geom*/
      e[5].h), i(b, "class", "a9s-inner a9s-shape-handle"), i(
        b,
        "style",
        /*computedStyle*/
        e[1]
      ), i(b, "x", v = /*geom*/
      e[5].x), i(b, "y", M = /*geom*/
      e[5].y), i(b, "width", g = /*geom*/
      e[5].w), i(b, "height", H = /*geom*/
      e[5].h), i(T, "class", "a9s-edge-handle a9s-edge-handle-top"), i(T, "x", L = /*geom*/
      e[5].x), i(T, "y", O = /*geom*/
      e[5].y), i(T, "height", 1), i(T, "width", G = /*geom*/
      e[5].w), i(I, "class", "a9s-edge-handle a9s-edge-handle-right"), i(I, "x", Y = /*geom*/
      e[5].x + /*geom*/
      e[5].w), i(I, "y", N = /*geom*/
      e[5].y), i(I, "height", U = /*geom*/
      e[5].h), i(I, "width", 1), i(D, "class", "a9s-edge-handle a9s-edge-handle-bottom"), i(D, "x", X = /*geom*/
      e[5].x), i(D, "y", V = /*geom*/
      e[5].y + /*geom*/
      e[5].h), i(D, "height", 1), i(D, "width", Q = /*geom*/
      e[5].w), i(F, "class", "a9s-edge-handle a9s-edge-handle-left"), i(F, "x", oe = /*geom*/
      e[5].x), i(F, "y", be = /*geom*/
      e[5].y), i(F, "height", te = /*geom*/
      e[5].h), i(F, "width", 1);
    },
    m(C, k) {
      B(C, n, k), Z(n, t), Z(t, o), Z(t, a), B(C, m, k), B(C, _, k), B(C, w, k), B(C, b, k), B(C, y, k), B(C, T, k), B(C, R, k), B(C, I, k), B(C, W, k), B(C, D, k), B(C, x, k), B(C, F, k), B(C, Oe, k), de(ce, C, k), B(C, ve, k), de(ue, C, k), B(C, Xe, k), de(pe, C, k), B(C, je, k), de(ke, C, k), K = !0, Fe || (z = [
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
        $(T, "pointerdown", function() {
          se(
            /*grab*/
            e[12]("TOP")
          ) && e[12]("TOP").apply(this, arguments);
        }),
        $(I, "pointerdown", function() {
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
    p(C, k) {
      e = C, (!K || k & /*mask*/
      64 && s !== (s = /*mask*/
      e[6].x)) && i(o, "x", s), (!K || k & /*mask*/
      64 && l !== (l = /*mask*/
      e[6].y)) && i(o, "y", l), (!K || k & /*mask*/
      64 && f !== (f = /*mask*/
      e[6].w)) && i(o, "width", f), (!K || k & /*mask*/
      64 && r !== (r = /*mask*/
      e[6].h)) && i(o, "height", r), (!K || k & /*geom*/
      32 && c !== (c = /*geom*/
      e[5].x)) && i(a, "x", c), (!K || k & /*geom*/
      32 && u !== (u = /*geom*/
      e[5].y)) && i(a, "y", u), (!K || k & /*geom*/
      32 && p !== (p = /*geom*/
      e[5].w)) && i(a, "width", p), (!K || k & /*geom*/
      32 && d !== (d = /*geom*/
      e[5].h)) && i(a, "height", d), (!K || k & /*geom*/
      32 && h !== (h = /*geom*/
      e[5].x)) && i(_, "x", h), (!K || k & /*geom*/
      32 && S !== (S = /*geom*/
      e[5].y)) && i(_, "y", S), (!K || k & /*geom*/
      32 && A !== (A = /*geom*/
      e[5].w)) && i(_, "width", A), (!K || k & /*geom*/
      32 && P !== (P = /*geom*/
      e[5].h)) && i(_, "height", P), (!K || k & /*computedStyle*/
      2) && i(
        b,
        "style",
        /*computedStyle*/
        e[1]
      ), (!K || k & /*geom*/
      32 && v !== (v = /*geom*/
      e[5].x)) && i(b, "x", v), (!K || k & /*geom*/
      32 && M !== (M = /*geom*/
      e[5].y)) && i(b, "y", M), (!K || k & /*geom*/
      32 && g !== (g = /*geom*/
      e[5].w)) && i(b, "width", g), (!K || k & /*geom*/
      32 && H !== (H = /*geom*/
      e[5].h)) && i(b, "height", H), (!K || k & /*geom*/
      32 && L !== (L = /*geom*/
      e[5].x)) && i(T, "x", L), (!K || k & /*geom*/
      32 && O !== (O = /*geom*/
      e[5].y)) && i(T, "y", O), (!K || k & /*geom*/
      32 && G !== (G = /*geom*/
      e[5].w)) && i(T, "width", G), (!K || k & /*geom*/
      32 && Y !== (Y = /*geom*/
      e[5].x + /*geom*/
      e[5].w)) && i(I, "x", Y), (!K || k & /*geom*/
      32 && N !== (N = /*geom*/
      e[5].y)) && i(I, "y", N), (!K || k & /*geom*/
      32 && U !== (U = /*geom*/
      e[5].h)) && i(I, "height", U), (!K || k & /*geom*/
      32 && X !== (X = /*geom*/
      e[5].x)) && i(D, "x", X), (!K || k & /*geom*/
      32 && V !== (V = /*geom*/
      e[5].y + /*geom*/
      e[5].h)) && i(D, "y", V), (!K || k & /*geom*/
      32 && Q !== (Q = /*geom*/
      e[5].w)) && i(D, "width", Q), (!K || k & /*geom*/
      32 && oe !== (oe = /*geom*/
      e[5].x)) && i(F, "x", oe), (!K || k & /*geom*/
      32 && be !== (be = /*geom*/
      e[5].y)) && i(F, "y", be), (!K || k & /*geom*/
      32 && te !== (te = /*geom*/
      e[5].h)) && i(F, "height", te);
      const re = {};
      k & /*geom*/
      32 && (re.x = /*geom*/
      e[5].x), k & /*geom*/
      32 && (re.y = /*geom*/
      e[5].y), k & /*viewportScale*/
      8 && (re.scale = /*viewportScale*/
      e[3]), ce.$set(re);
      const ge = {};
      k & /*geom*/
      32 && (ge.x = /*geom*/
      e[5].x + /*geom*/
      e[5].w), k & /*geom*/
      32 && (ge.y = /*geom*/
      e[5].y), k & /*viewportScale*/
      8 && (ge.scale = /*viewportScale*/
      e[3]), ue.$set(ge);
      const Ee = {};
      k & /*geom*/
      32 && (Ee.x = /*geom*/
      e[5].x + /*geom*/
      e[5].w), k & /*geom*/
      32 && (Ee.y = /*geom*/
      e[5].y + /*geom*/
      e[5].h), k & /*viewportScale*/
      8 && (Ee.scale = /*viewportScale*/
      e[3]), pe.$set(Ee);
      const le = {};
      k & /*geom*/
      32 && (le.x = /*geom*/
      e[5].x), k & /*geom*/
      32 && (le.y = /*geom*/
      e[5].y + /*geom*/
      e[5].h), k & /*viewportScale*/
      8 && (le.scale = /*viewportScale*/
      e[3]), ke.$set(le);
    },
    i(C) {
      K || (J(ce.$$.fragment, C), J(ue.$$.fragment, C), J(pe.$$.fragment, C), J(ke.$$.fragment, C), K = !0);
    },
    o(C) {
      ee(ce.$$.fragment, C), ee(ue.$$.fragment, C), ee(pe.$$.fragment, C), ee(ke.$$.fragment, C), K = !1;
    },
    d(C) {
      C && (j(n), j(m), j(_), j(w), j(b), j(y), j(T), j(R), j(I), j(W), j(D), j(x), j(F), j(Oe), j(ve), j(Xe), j(je)), me(ce, C), me(ue, C), me(pe, C), me(ke, C), Fe = !1, Le(z);
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
  let o, s, { shape: l } = n, { computedStyle: f } = n, { transform: r } = n, { viewportScale: a = 1 } = n, { svgEl: c } = n;
  const u = (h, S, A) => {
    const P = h.geometry.bounds;
    let [w, b] = [P.minX, P.minY], [v, M] = [P.maxX, P.maxY];
    const [g, H] = A;
    if (S === "SHAPE")
      w += g, v += g, b += H, M += H;
    else {
      switch (S) {
        case "TOP":
        case "TOP_LEFT":
        case "TOP_RIGHT": {
          b += H;
          break;
        }
        case "BOTTOM":
        case "BOTTOM_LEFT":
        case "BOTTOM_RIGHT": {
          M += H;
          break;
        }
      }
      switch (S) {
        case "LEFT":
        case "TOP_LEFT":
        case "BOTTOM_LEFT": {
          w += g;
          break;
        }
        case "RIGHT":
        case "TOP_RIGHT":
        case "BOTTOM_RIGHT": {
          v += g;
          break;
        }
      }
    }
    const y = Math.min(w, v), T = Math.min(b, M), L = Math.abs(v - w), O = Math.abs(M - b);
    return {
      ...h,
      geometry: {
        x: y,
        y: T,
        w: L,
        h: O,
        bounds: {
          minX: y,
          minY: T,
          maxX: y + L,
          maxY: T + O
        }
      }
    };
  }, p = `rect-mask-${Math.random().toString(36).substring(2, 12)}`;
  function d(h) {
    he.call(this, e, h);
  }
  function m(h) {
    he.call(this, e, h);
  }
  function _(h) {
    he.call(this, e, h);
  }
  return e.$$set = (h) => {
    "shape" in h && t(0, l = h.shape), "computedStyle" in h && t(1, f = h.computedStyle), "transform" in h && t(2, r = h.transform), "viewportScale" in h && t(3, a = h.viewportScale), "svgEl" in h && t(4, c = h.svgEl);
  }, e.$$.update = () => {
    e.$$.dirty & /*shape*/
    1 && t(5, o = l.geometry), e.$$.dirty & /*geom, viewportScale*/
    40 && t(6, s = Yt(o.bounds, 2 / a));
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
    m,
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
    const c = r.points.map((u, p) => {
      const d = p === r.points.length - 1 ? r.points[0] : r.points[p + 1], m = (u[0] + d[0]) / 2, _ = (u[1] + d[1]) / 2, S = Math.sqrt(
        Math.pow(d[0] - m, 2) + Math.pow(d[1] - _, 2)
      ) > sr / n;
      return { point: [m, _], visible: S, elementIdx: s, ringIdx: a, pointIdx: p };
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
      B(l, n, f);
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
      l && j(n);
    }
  };
}
function zo(e) {
  let n, t, o, s, l, f, r, a, c, u;
  return {
    c() {
      n = q("mask"), t = q("rect"), r = q("circle"), i(t, "x", o = /*mask*/
      e[9].x), i(t, "y", s = /*mask*/
      e[9].y), i(t, "width", l = /*mask*/
      e[9].w), i(t, "height", f = /*mask*/
      e[9].h), i(t, "class", "svelte-1vxo6dc"), i(r, "cx", a = /*point*/
      e[29][0]), i(r, "cy", c = /*point*/
      e[29][1]), i(r, "r", u = Wn / /*viewportScale*/
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
      8 && u !== (u = Wn / /*viewportScale*/
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
      B(f, n, r), t = !0;
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
          const c = qo(f, o, a);
          s[a] ? (s[a].p(c, r), J(s[a], 1)) : (s[a] = Vo(c), s[a].c(), J(s[a], 1), s[a].m(n.parentNode, n));
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
      f && j(n), jn(s, f);
    }
  };
}
function Fo(e) {
  let n, t, o, s, l, f, r, a, c, u, p, d, m, _, h, S, A, P = (
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
  ), v = [];
  for (let g = 0; g < b.length; g += 1)
    v[g] = Ko(Go(e, b, g));
  const M = (g) => ee(v[g], 1, 1, () => {
    v[g] = null;
  });
  return {
    c() {
      n = q("g"), t = q("defs"), o = q("mask"), s = q("rect"), c = q("path"), P && P.c(), w && w.c(), p = q("path"), m = q("path");
      for (let g = 0; g < v.length; g += 1)
        v[g].c();
      i(s, "x", l = /*mask*/
      e[9].x), i(s, "y", f = /*mask*/
      e[9].y), i(s, "width", r = /*mask*/
      e[9].w), i(s, "height", a = /*mask*/
      e[9].h), i(s, "class", "svelte-1vxo6dc"), i(c, "d", u = Tn(
        /*element*/
        e[30]
      )), i(c, "class", "svelte-1vxo6dc"), i(o, "id", `${/*maskId*/
      e[18]}-${/*elementIdx*/
      e[32]}-outer`), i(o, "class", "a9s-multipolygon-editor-mask svelte-1vxo6dc"), i(p, "class", "a9s-outer"), i(p, "mask", `url(#${/*maskId*/
      e[18]}-${/*elementIdx*/
      e[32]}-outer)`), i(p, "fill-rule", "evenodd"), i(p, "d", d = Tn(
        /*element*/
        e[30]
      )), i(m, "class", "a9s-inner"), i(m, "mask", `url(#${/*maskId*/
      e[18]}-${/*elementIdx*/
      e[32]}-inner)`), i(
        m,
        "style",
        /*computedStyle*/
        e[1]
      ), i(m, "fill-rule", "evenodd"), i(m, "d", _ = Tn(
        /*element*/
        e[30]
      ));
    },
    m(g, H) {
      B(g, n, H), Z(n, t), Z(t, o), Z(o, s), Z(o, c), P && P.m(o, null), w && w.m(t, null), Z(n, p), Z(n, m);
      for (let y = 0; y < v.length; y += 1)
        v[y] && v[y].m(n, null);
      h = !0, S || (A = [
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
          m,
          "pointerup",
          /*onShapePointerUp*/
          e[13]
        ),
        $(m, "pointerdown", function() {
          se(
            /*grab*/
            e[28]("SHAPE")
          ) && e[28]("SHAPE").apply(this, arguments);
        })
      ], S = !0);
    },
    p(g, H) {
      if (e = g, (!h || H[0] & /*mask*/
      512 && l !== (l = /*mask*/
      e[9].x)) && i(s, "x", l), (!h || H[0] & /*mask*/
      512 && f !== (f = /*mask*/
      e[9].y)) && i(s, "y", f), (!h || H[0] & /*mask*/
      512 && r !== (r = /*mask*/
      e[9].w)) && i(s, "width", r), (!h || H[0] & /*mask*/
      512 && a !== (a = /*mask*/
      e[9].h)) && i(s, "height", a), (!h || H[0] & /*geom*/
      32 && u !== (u = Tn(
        /*element*/
        e[30]
      ))) && i(c, "d", u), /*visibleMidpoint*/
      e[6] !== void 0 && !/*isHandleHovered*/
      e[7] ? P ? P.p(kt(e), H) : (P = Yo(kt(e)), P.c(), P.m(o, null)) : P && (P.d(1), P = null), /*visibleMidpoint*/
      e[6] !== void 0 && !/*isHandleHovered*/
      e[7] ? w ? w.p(Et(e), H) : (w = zo(Et(e)), w.c(), w.m(t, null)) : w && (w.d(1), w = null), (!h || H[0] & /*geom*/
      32 && d !== (d = Tn(
        /*element*/
        e[30]
      ))) && i(p, "d", d), (!h || H[0] & /*computedStyle*/
      2) && i(
        m,
        "style",
        /*computedStyle*/
        e[1]
      ), (!h || H[0] & /*geom*/
      32 && _ !== (_ = Tn(
        /*element*/
        e[30]
      ))) && i(m, "d", _), H[0] & /*geom, viewportScale, selectedCorners, onEnterHandle, onLeaveHandle, onHandlePointerDown, grab, onHandlePointerUp*/
      268491048) {
        b = Ae(
          /*element*/
          e[30].rings
        );
        let y;
        for (y = 0; y < b.length; y += 1) {
          const T = Go(e, b, y);
          v[y] ? (v[y].p(T, H), J(v[y], 1)) : (v[y] = Ko(T), v[y].c(), J(v[y], 1), v[y].m(n, null));
        }
        for (Ve(), y = b.length; y < v.length; y += 1)
          M(y);
        Ke();
      }
    },
    i(g) {
      if (!h) {
        for (let H = 0; H < b.length; H += 1)
          J(v[H]);
        h = !0;
      }
    },
    o(g) {
      v = v.filter(Boolean);
      for (let H = 0; H < v.length; H += 1)
        ee(v[H]);
      h = !1;
    },
    d(g) {
      g && j(n), P && P.d(), w && w.d(), jn(v, g), S = !1, Le(A);
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
    m(a, c) {
      for (let u = 0; u < l.length; u += 1)
        l[u] && l[u].m(a, c);
      B(a, n, c), r && r.m(a, c), B(a, t, c), o = !0;
    },
    p(a, c) {
      if (c[0] & /*geom, viewportScale, selectedCorners, onEnterHandle, onLeaveHandle, onHandlePointerDown, grab, onHandlePointerUp, maskId, computedStyle, onShapePointerUp, midpoints, visibleMidpoint, mask, isHandleHovered*/
      268763114) {
        s = Ae(
          /*geom*/
          a[5].polygons
        );
        let u;
        for (u = 0; u < s.length; u += 1) {
          const p = Uo(a, s, u);
          l[u] ? (l[u].p(p, c), J(l[u], 1)) : (l[u] = Fo(p), l[u].c(), J(l[u], 1), l[u].m(n.parentNode, n));
        }
        for (Ve(), u = s.length; u < l.length; u += 1)
          f(u);
        Ke();
      }
      /*visibleMidpoint*/
      a[6] !== void 0 && !/*isHandleHovered*/
      a[7] ? r ? (r.p(vt(a), c), c[0] & /*visibleMidpoint, isHandleHovered*/
      192 && J(r, 1)) : (r = Wo(vt(a)), r.c(), J(r, 1), r.m(t.parentNode, t)) : r && (Ve(), ee(r, 1, 1, () => {
        r = null;
      }), Ke());
    },
    i(a) {
      if (!o) {
        for (let c = 0; c < s.length; c += 1)
          J(l[c]);
        J(r), o = !0;
      }
    },
    o(a) {
      l = l.filter(Boolean);
      for (let c = 0; c < l.length; c += 1)
        ee(l[c]);
      ee(r), o = !1;
    },
    d(a) {
      a && (j(n), j(t)), jn(l, a), r && r.d(a);
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
function cr(e, n, t) {
  let o, s, l;
  const f = xe();
  let { shape: r } = n, { computedStyle: a } = n, { transform: c } = n, { viewportScale: u = 1 } = n, { svgEl: p } = n, d, m = !1, _, h = [];
  const S = () => t(7, m = !0), A = () => t(7, m = !1), P = (I) => {
    if (h.length > 0 || !s.some((Q) => Q.visible)) {
      t(6, d = void 0);
      return;
    }
    const [Y, N] = c.elementToImage(I.offsetX, I.offsetY), U = (Q) => Math.pow(Q[0] - Y, 2) + Math.pow(Q[1] - N, 2), W = Li(o).reduce((Q, x) => U(x) < U(Q) ? x : Q), D = s.filter((Q) => Q.visible).reduce((Q, x) => U(x.point) < U(Q.point) ? x : Q), X = Math.pow(ar / u, 2);
    U(W) < X || U(D.point) < X ? t(6, d = s.indexOf(D)) : t(6, d = void 0);
  }, w = () => {
    document.activeElement !== p && p.focus();
  }, b = () => {
    t(8, h = []), w();
  }, v = (I) => {
    t(7, m = !0), I.preventDefault(), I.stopPropagation(), _ = performance.now();
  }, M = (I, Y, N) => (U) => {
    if (!_ || dn || performance.now() - _ > fr) return;
    const W = (X) => X.polygon === I && X.ring === Y && X.point === N, D = h.some(W);
    U.metaKey || U.ctrlKey || U.shiftKey ? D ? t(8, h = h.filter((X) => !W(X))) : t(8, h = [...h, { polygon: I, ring: Y, point: N }]) : D && h.length > 1 ? t(8, h = [{ polygon: I, ring: Y, point: N }]) : D ? t(8, h = []) : t(8, h = [{ polygon: I, ring: Y, point: N }]), w();
  }, g = (I, Y, N) => {
    w();
    const U = I.geometry.polygons;
    let W;
    if (Y === "SHAPE")
      W = U.map((D) => {
        const X = D.rings.map((Q, x) => ({ points: Q.points.map((oe, be) => [oe[0] + N[0], oe[1] + N[1]]) })), V = hn(X[0].points);
        return { rings: X, bounds: V };
      });
    else {
      const [D, X, V, Q] = Y.split("-").map((x) => parseInt(x));
      W = U.map((x, F) => {
        if (F === X) {
          const oe = x.rings.map((te, Oe) => Oe === V ? { points: te.points.map((ve, ue) => ue === Q ? [ve[0] + N[0], ve[1] + N[1]] : ve) } : te), be = hn(oe[0].points);
          return { rings: oe, bounds: be };
        } else
          return x;
      });
    }
    return {
      ...I,
      geometry: {
        polygons: W,
        bounds: _t(W)
      }
    };
  }, H = (I) => async (Y) => {
    Y.stopPropagation();
    const N = s[I], U = o.polygons.map((D, X) => {
      if (X === N.elementIdx) {
        const V = D.rings.map((x, F) => F === N.ringIdx ? { points: [
          ...x.points.slice(0, N.pointIdx + 1),
          N.point,
          ...x.points.slice(N.pointIdx + 1)
        ] } : x), Q = hn(V[0].points);
        return { rings: V, bounds: Q };
      } else
        return D;
    });
    f("change", {
      ...r,
      geometry: {
        polygons: U,
        bounds: _t(U)
      }
    }), await Kn();
    const W = [...document.querySelectorAll(".a9s-handle")][I + 1];
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
    const I = o.polygons.map((N, U) => {
      if (h.some((D) => D.polygon === U)) {
        const D = N.rings.map((V, Q) => {
          const x = h.filter((F) => F.polygon === U && F.ring === Q);
          return x.length && V.points.length - x.length >= 3 ? { points: V.points.filter((oe, be) => !x.some((te) => te.point === be)) } : V;
        }), X = hn(D[0].points);
        return { rings: D, bounds: X };
      } else
        return N;
    });
    !jt(o.polygons, I) && (f("change", {
      ...r,
      geometry: {
        polygons: I,
        bounds: _t(I)
      }
    }), t(8, h = []));
  };
  on(() => {
    if (dn) return;
    const I = (Y) => {
      (Y.key === "Delete" || Y.key === "Backspace") && (Y.preventDefault(), y());
    };
    return p.addEventListener("pointermove", P), p.addEventListener("keydown", I), () => {
      p.removeEventListener("pointermove", P), p.removeEventListener("keydown", I);
    };
  });
  const T = `polygon-mask-${Math.random().toString(36).substring(2, 12)}`, L = (I, Y, N, { polygon: U, ring: W, point: D }) => U === I && W === Y && D === N;
  function O(I) {
    he.call(this, e, I);
  }
  function G(I) {
    he.call(this, e, I);
  }
  function R(I) {
    he.call(this, e, I);
  }
  return e.$$set = (I) => {
    "shape" in I && t(0, r = I.shape), "computedStyle" in I && t(1, a = I.computedStyle), "transform" in I && t(2, c = I.transform), "viewportScale" in I && t(3, u = I.viewportScale), "svgEl" in I && t(4, p = I.svgEl);
  }, e.$$.update = () => {
    e.$$.dirty[0] & /*shape*/
    1 && t(5, o = r.geometry), e.$$.dirty[0] & /*geom, viewportScale*/
    40 && t(10, s = dn ? [] : lr(o, u)), e.$$.dirty[0] & /*geom, viewportScale*/
    40 && t(9, l = Yt(o.bounds, Wn / u));
  }, [
    r,
    a,
    c,
    u,
    p,
    o,
    d,
    m,
    h,
    l,
    s,
    S,
    A,
    b,
    v,
    M,
    g,
    H,
    T,
    L,
    O,
    G,
    R
  ];
}
class ur extends Re {
  constructor(n) {
    super(), Ce(
      this,
      n,
      cr,
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
  let n, t, o, s, l, f, r, a, c, u, p, d, m, _, h, S, A, P, w, b, v, M, g, H, y, T, L, O, G, R, I, Y, N, U, W;
  return T = new Ge({
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
    se(
      /*grab*/
      e[12]("TOP")
    ) && e[12]("TOP").apply(this, arguments);
  }), O = new Ge({
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
  }), O.$on("pointerdown", function() {
    se(
      /*grab*/
      e[12]("RIGHT")
    ) && e[12]("RIGHT").apply(this, arguments);
  }), R = new Ge({
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
  }), R.$on("pointerdown", function() {
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
      n = q("defs"), t = q("mask"), o = q("rect"), a = q("ellipse"), m = ne(), _ = q("ellipse"), w = ne(), b = q("ellipse"), y = ne(), _e(T.$$.fragment), L = ne(), _e(O.$$.fragment), G = ne(), _e(R.$$.fragment), I = ne(), _e(Y.$$.fragment), i(o, "x", s = /*mask*/
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
      ), i(t, "class", "a9s-ellipse-editor-mask svelte-wdm5en"), i(_, "class", "a9s-outer"), i(_, "mask", `url(#${/*maskId*/
      e[8]})`), i(_, "cx", h = /*geom*/
      e[5].cx), i(_, "cy", S = /*geom*/
      e[5].cy), i(_, "rx", A = /*geom*/
      e[5].rx), i(_, "ry", P = /*geom*/
      e[5].ry), i(b, "class", "a9s-inner a9s-shape-handle"), i(
        b,
        "style",
        /*computedStyle*/
        e[1]
      ), i(b, "cx", v = /*geom*/
      e[5].cx), i(b, "cy", M = /*geom*/
      e[5].cy), i(b, "rx", g = /*geom*/
      e[5].rx), i(b, "ry", H = /*geom*/
      e[5].ry);
    },
    m(D, X) {
      B(D, n, X), Z(n, t), Z(t, o), Z(t, a), B(D, m, X), B(D, _, X), B(D, w, X), B(D, b, X), B(D, y, X), de(T, D, X), B(D, L, X), de(O, D, X), B(D, G, X), de(R, D, X), B(D, I, X), de(Y, D, X), N = !0, U || (W = [
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
      ], U = !0);
    },
    p(D, X) {
      e = D, (!N || X & /*mask*/
      64 && s !== (s = /*mask*/
      e[6].x)) && i(o, "x", s), (!N || X & /*mask*/
      64 && l !== (l = /*mask*/
      e[6].y)) && i(o, "y", l), (!N || X & /*mask*/
      64 && f !== (f = /*mask*/
      e[6].w)) && i(o, "width", f), (!N || X & /*mask*/
      64 && r !== (r = /*mask*/
      e[6].h)) && i(o, "height", r), (!N || X & /*geom*/
      32 && c !== (c = /*geom*/
      e[5].cx)) && i(a, "cx", c), (!N || X & /*geom*/
      32 && u !== (u = /*geom*/
      e[5].cy)) && i(a, "cy", u), (!N || X & /*geom*/
      32 && p !== (p = /*geom*/
      e[5].rx)) && i(a, "rx", p), (!N || X & /*geom*/
      32 && d !== (d = /*geom*/
      e[5].ry)) && i(a, "ry", d), (!N || X & /*geom*/
      32 && h !== (h = /*geom*/
      e[5].cx)) && i(_, "cx", h), (!N || X & /*geom*/
      32 && S !== (S = /*geom*/
      e[5].cy)) && i(_, "cy", S), (!N || X & /*geom*/
      32 && A !== (A = /*geom*/
      e[5].rx)) && i(_, "rx", A), (!N || X & /*geom*/
      32 && P !== (P = /*geom*/
      e[5].ry)) && i(_, "ry", P), (!N || X & /*computedStyle*/
      2) && i(
        b,
        "style",
        /*computedStyle*/
        e[1]
      ), (!N || X & /*geom*/
      32 && v !== (v = /*geom*/
      e[5].cx)) && i(b, "cx", v), (!N || X & /*geom*/
      32 && M !== (M = /*geom*/
      e[5].cy)) && i(b, "cy", M), (!N || X & /*geom*/
      32 && g !== (g = /*geom*/
      e[5].rx)) && i(b, "rx", g), (!N || X & /*geom*/
      32 && H !== (H = /*geom*/
      e[5].ry)) && i(b, "ry", H);
      const V = {};
      X & /*geom*/
      32 && (V.x = /*geom*/
      e[5].cx), X & /*geom*/
      32 && (V.y = /*geom*/
      e[5].cy - /*geom*/
      e[5].ry), X & /*viewportScale*/
      8 && (V.scale = /*viewportScale*/
      e[3]), T.$set(V);
      const Q = {};
      X & /*geom*/
      32 && (Q.x = /*geom*/
      e[5].cx + /*geom*/
      e[5].rx), X & /*geom*/
      32 && (Q.y = /*geom*/
      e[5].cy), X & /*viewportScale*/
      8 && (Q.scale = /*viewportScale*/
      e[3]), O.$set(Q);
      const x = {};
      X & /*geom*/
      32 && (x.x = /*geom*/
      e[5].cx), X & /*geom*/
      32 && (x.y = /*geom*/
      e[5].cy + /*geom*/
      e[5].ry), X & /*viewportScale*/
      8 && (x.scale = /*viewportScale*/
      e[3]), R.$set(x);
      const F = {};
      X & /*geom*/
      32 && (F.x = /*geom*/
      e[5].cx - /*geom*/
      e[5].rx), X & /*geom*/
      32 && (F.y = /*geom*/
      e[5].cy), X & /*viewportScale*/
      8 && (F.scale = /*viewportScale*/
      e[3]), Y.$set(F);
    },
    i(D) {
      N || (J(T.$$.fragment, D), J(O.$$.fragment, D), J(R.$$.fragment, D), J(Y.$$.fragment, D), N = !0);
    },
    o(D) {
      ee(T.$$.fragment, D), ee(O.$$.fragment, D), ee(R.$$.fragment, D), ee(Y.$$.fragment, D), N = !1;
    },
    d(D) {
      D && (j(n), j(m), j(_), j(w), j(b), j(y), j(L), j(G), j(I)), me(T, D), me(O, D), me(R, D), me(Y, D), U = !1, Le(W);
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
  let o, s, { shape: l } = n, { computedStyle: f } = n, { transform: r } = n, { viewportScale: a = 1 } = n, { svgEl: c } = n;
  const u = (h, S, A) => {
    const P = h.geometry.bounds;
    let [w, b] = [P.minX, P.minY], [v, M] = [P.maxX, P.maxY];
    const [g, H] = A;
    if (S === "SHAPE")
      w += g, v += g, b += H, M += H;
    else
      switch (S) {
        case "TOP": {
          b += H;
          break;
        }
        case "BOTTOM": {
          M += H;
          break;
        }
        case "LEFT": {
          w += g;
          break;
        }
        case "RIGHT": {
          v += g;
          break;
        }
      }
    const y = Math.min(w, v), T = Math.min(b, M), L = Math.abs(v - w), O = Math.abs(M - b), G = (w + v) / 2, R = (b + M) / 2, I = L / 2, Y = O / 2;
    return {
      ...h,
      geometry: {
        ...h.geometry,
        cx: G,
        cy: R,
        rx: I,
        ry: Y,
        bounds: {
          minX: y,
          minY: T,
          maxX: y + L,
          maxY: T + O
        }
      }
    };
  }, p = `ellipse-mask-${Math.random().toString(36).substring(2, 12)}`;
  function d(h) {
    he.call(this, e, h);
  }
  function m(h) {
    he.call(this, e, h);
  }
  function _(h) {
    he.call(this, e, h);
  }
  return e.$$set = (h) => {
    "shape" in h && t(0, l = h.shape), "computedStyle" in h && t(1, f = h.computedStyle), "transform" in h && t(2, r = h.transform), "viewportScale" in h && t(3, a = h.viewportScale), "svgEl" in h && t(4, c = h.svgEl);
  }, e.$$.update = () => {
    e.$$.dirty & /*shape*/
    1 && t(5, o = l.geometry), e.$$.dirty & /*geom, viewportScale*/
    40 && t(6, s = vn(o.bounds, 2 / a));
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
    m,
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
  let n, t, o, s, l, f, r, a, c, u, p, d, m, _, h, S, A, P, w, b, v, M;
  return {
    c() {
      n = q("defs"), t = q("mask"), o = q("rect"), a = q("ellipse"), m = q("ellipse"), P = q("ellipse"), i(o, "x", s = /*x*/
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
      ), i(t, "class", "a9s-rubberband-ellipse-mask svelte-1koqlb3"), i(m, "class", "a9s-outer"), i(m, "mask", `url(#${/*maskId*/
      e[7]})`), i(m, "cx", _ = /*x*/
      e[2] + /*w*/
      e[4] / 2), i(m, "cy", h = /*y*/
      e[3] + /*h*/
      e[5] / 2), i(m, "rx", S = /*w*/
      e[4] / 2), i(m, "ry", A = /*h*/
      e[5] / 2), i(P, "class", "a9s-inner"), i(P, "cx", w = /*x*/
      e[2] + /*w*/
      e[4] / 2), i(P, "cy", b = /*y*/
      e[3] + /*h*/
      e[5] / 2), i(P, "rx", v = /*w*/
      e[4] / 2), i(P, "ry", M = /*h*/
      e[5] / 2);
    },
    m(g, H) {
      B(g, n, H), Z(n, t), Z(t, o), Z(t, a), B(g, m, H), B(g, P, H);
    },
    p(g, H) {
      H & /*x, buffer*/
      68 && s !== (s = /*x*/
      g[2] - /*buffer*/
      g[6]) && i(o, "x", s), H & /*y, buffer*/
      72 && l !== (l = /*y*/
      g[3] - /*buffer*/
      g[6]) && i(o, "y", l), H & /*w, buffer*/
      80 && f !== (f = /*w*/
      g[4] + 2 * /*buffer*/
      g[6]) && i(o, "width", f), H & /*h, buffer*/
      96 && r !== (r = /*h*/
      g[5] + 2 * /*buffer*/
      g[6]) && i(o, "height", r), H & /*x, w*/
      20 && c !== (c = /*x*/
      g[2] + /*w*/
      g[4] / 2) && i(a, "cx", c), H & /*y, h*/
      40 && u !== (u = /*y*/
      g[3] + /*h*/
      g[5] / 2) && i(a, "cy", u), H & /*w*/
      16 && p !== (p = /*w*/
      g[4] / 2) && i(a, "rx", p), H & /*h*/
      32 && d !== (d = /*h*/
      g[5] / 2) && i(a, "ry", d), H & /*x, w*/
      20 && _ !== (_ = /*x*/
      g[2] + /*w*/
      g[4] / 2) && i(m, "cx", _), H & /*y, h*/
      40 && h !== (h = /*y*/
      g[3] + /*h*/
      g[5] / 2) && i(m, "cy", h), H & /*w*/
      16 && S !== (S = /*w*/
      g[4] / 2) && i(m, "rx", S), H & /*h*/
      32 && A !== (A = /*h*/
      g[5] / 2) && i(m, "ry", A), H & /*x, w*/
      20 && w !== (w = /*x*/
      g[2] + /*w*/
      g[4] / 2) && i(P, "cx", w), H & /*y, h*/
      40 && b !== (b = /*y*/
      g[3] + /*h*/
      g[5] / 2) && i(P, "cy", b), H & /*w*/
      16 && v !== (v = /*w*/
      g[4] / 2) && i(P, "rx", v), H & /*h*/
      32 && M !== (M = /*h*/
      g[5] / 2) && i(P, "ry", M);
    },
    d(g) {
      g && (j(n), j(m), j(P));
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
      B(o, n, s), t && t.m(n, null), e[12](n);
    },
    p(o, [s]) {
      /*origin*/
      o[1] ? t ? t.p(o, s) : (t = Zo(o), t.c(), t.m(n, null)) : t && (t.d(1), t = null);
    },
    i: Se,
    o: Se,
    d(o) {
      o && j(n), t && t.d(), e[12](null);
    }
  };
}
function _r(e, n, t) {
  let o;
  const s = xe();
  let { addEventListener: l } = n, { drawingMode: f } = n, { transform: r } = n, { viewportScale: a } = n, c, u, p, d, m, _, h, S = !1, A = !1, P, w;
  const b = (O) => {
    const G = O;
    P = performance.now(), f === "drag" && (t(1, u = r.elementToImage(G.offsetX, G.offsetY)), p = u, t(2, d = u[0]), t(3, m = u[1]), t(4, _ = 1), t(5, h = 1));
  }, v = (O) => {
    const G = O || w;
    if (u)
      if (p = r.elementToImage(G.offsetX, G.offsetY), A) {
        const R = 2 * Math.abs(p[0] - u[0]), I = 2 * Math.abs(p[1] - u[1]);
        t(4, _ = S ? Math.max(R, I) : R), t(5, h = S ? _ : I), t(2, d = Math.min(p[0], u[0] - _ / 2)), t(3, m = Math.min(p[1], u[1] - h / 2));
      } else {
        const R = Math.abs(p[0] - u[0]), I = Math.abs(p[1] - u[1]);
        t(4, _ = S ? Math.max(R, I) : R), t(5, h = S ? _ : I), t(2, d = Math.min(p[0], u[0])), t(3, m = Math.min(p[1], u[1]));
      }
    O && (w = O);
  }, M = (O) => {
    const G = O, R = performance.now() - P;
    if (f === "click") {
      if (R > 300) return;
      u ? g() : (t(1, u = r.elementToImage(G.offsetX, G.offsetY)), p = u, t(2, d = u[0]), t(3, m = u[1]), t(4, _ = 1), t(5, h = 1));
    } else u && (R > 300 || _ * h > 100 ? (G.stopPropagation(), g()) : (t(1, u = void 0), p = void 0, w = void 0));
  }, g = () => {
    if (_ * h > 15) {
      const O = {
        type: Pe.ELLIPSE,
        geometry: {
          bounds: {
            minX: d,
            minY: m,
            maxX: d + _,
            maxY: m + h
          },
          cx: d + _ / 2,
          cy: m + h / 2,
          rx: _ / 2,
          ry: h / 2
        }
      };
      s("create", O);
    }
    t(1, u = void 0), p = void 0, w = void 0;
  }, H = (O) => {
    O.key === "Shift" && (S = !0, v()), O.key === "Control" && (A = !0, v());
  }, y = (O) => {
    O.key === "Shift" && (S = !1, v()), O.key === "Control" && (A = !1, v());
  };
  on(() => (document.addEventListener("keyup", y), document.addEventListener("keydown", H), l("pointerdown", b), l("pointermove", v), l("pointerup", M, !0), () => {
    document.removeEventListener("keyup", y), document.removeEventListener("keydown", H);
  }));
  const T = `ellipse-mask-${Math.random().toString(36).substring(2, 12)}`;
  function L(O) {
    gn[O ? "unshift" : "push"](() => {
      c = O, t(0, c);
    });
  }
  return e.$$set = (O) => {
    "addEventListener" in O && t(8, l = O.addEventListener), "drawingMode" in O && t(9, f = O.drawingMode), "transform" in O && t(10, r = O.transform), "viewportScale" in O && t(11, a = O.viewportScale);
  }, e.$$.update = () => {
    e.$$.dirty & /*viewportScale*/
    2048 && t(6, o = 2 / a);
  }, [
    c,
    u,
    d,
    m,
    _,
    h,
    o,
    T,
    l,
    f,
    r,
    a,
    L
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
  let n, t, o, s, l, f, r, a, c, u, p, d, m, _, h, S, A, P;
  return m = new Ge({
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
  }), m.$on("pointerdown", function() {
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
      n = q("line"), f = ne(), r = q("line"), d = ne(), _e(m.$$.fragment), _ = ne(), _e(h.$$.fragment), i(n, "class", "a9s-outer"), i(n, "x1", t = /*geom*/
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
    m(w, b) {
      B(w, n, b), B(w, f, b), B(w, r, b), B(w, d, b), de(m, w, b), B(w, _, b), de(h, w, b), S = !0, A || (P = [
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
      ], A = !0);
    },
    p(w, b) {
      e = w, (!S || b & /*geom*/
      32 && t !== (t = /*geom*/
      e[5].points[0][0])) && i(n, "x1", t), (!S || b & /*geom*/
      32 && o !== (o = /*geom*/
      e[5].points[0][1])) && i(n, "y1", o), (!S || b & /*geom*/
      32 && s !== (s = /*geom*/
      e[5].points[1][0])) && i(n, "x2", s), (!S || b & /*geom*/
      32 && l !== (l = /*geom*/
      e[5].points[1][1])) && i(n, "y2", l), (!S || b & /*computedStyle*/
      2) && i(
        r,
        "style",
        /*computedStyle*/
        e[1]
      ), (!S || b & /*geom*/
      32 && a !== (a = /*geom*/
      e[5].points[0][0])) && i(r, "x1", a), (!S || b & /*geom*/
      32 && c !== (c = /*geom*/
      e[5].points[0][1])) && i(r, "y1", c), (!S || b & /*geom*/
      32 && u !== (u = /*geom*/
      e[5].points[1][0])) && i(r, "x2", u), (!S || b & /*geom*/
      32 && p !== (p = /*geom*/
      e[5].points[1][1])) && i(r, "y2", p);
      const v = {};
      b & /*geom*/
      32 && (v.x = /*geom*/
      e[5].points[0][0]), b & /*geom*/
      32 && (v.y = /*geom*/
      e[5].points[0][1]), b & /*viewportScale*/
      8 && (v.scale = /*viewportScale*/
      e[3]), m.$set(v);
      const M = {};
      b & /*geom*/
      32 && (M.x = /*geom*/
      e[5].points[1][0]), b & /*geom*/
      32 && (M.y = /*geom*/
      e[5].points[1][1]), b & /*viewportScale*/
      8 && (M.scale = /*viewportScale*/
      e[3]), h.$set(M);
    },
    i(w) {
      S || (J(m.$$.fragment, w), J(h.$$.fragment, w), S = !0);
    },
    o(w) {
      ee(m.$$.fragment, w), ee(h.$$.fragment, w), S = !1;
    },
    d(w) {
      w && (j(n), j(f), j(r), j(d), j(_)), me(m, w), me(h, w), A = !1, Le(P);
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
  const c = (m, _, h) => {
    const S = m.geometry;
    let [[A, P], [w, b]] = S.points;
    const [v, M] = h;
    if (_ === "LINE")
      A += v, w += v, P += M, b += M;
    else
      switch (_) {
        case "POINT1": {
          A += v, P += M;
          break;
        }
        case "POINT2": {
          w += v, b += M;
          break;
        }
      }
    return {
      ...m,
      geometry: {
        ...m.geometry,
        points: [[A, P], [w, b]],
        bounds: De([[A, P], [w, b]])
      }
    };
  };
  function u(m) {
    he.call(this, e, m);
  }
  function p(m) {
    he.call(this, e, m);
  }
  function d(m) {
    he.call(this, e, m);
  }
  return e.$$set = (m) => {
    "shape" in m && t(0, s = m.shape), "computedStyle" in m && t(1, l = m.computedStyle), "transform" in m && t(2, f = m.transform), "viewportScale" in m && t(3, r = m.viewportScale), "svgEl" in m && t(4, a = m.svgEl);
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
      B(o, n, s), t && t.m(n, null), e[11](n);
    },
    p(o, [s]) {
      /*origin*/
      o[1] && /*cursor*/
      o[2] ? t ? t.p(o, s) : (t = Qo(o), t.c(), t.m(n, null)) : t && (t.d(1), t = null);
    },
    i: Se,
    o: Se,
    d(o) {
      o && j(n), t && t.d(), e[11](null);
    }
  };
}
function Sr(e, n, t) {
  const o = xe();
  let { addEventListener: s } = n, { drawingMode: l } = n, { transform: f } = n, { viewportScale: r } = n, a, c, u, p, d, m, _, h, S;
  const A = (M) => {
    const g = M, { timeStamp: H, offsetX: y, offsetY: T } = g;
    h = { timeStamp: H, offsetX: y, offsetY: T }, l === "drag" && (t(1, c = f.elementToImage(g.offsetX, g.offsetY)), t(2, u = c), t(3, p = c[0]), t(4, d = c[1]), t(5, m = u[0]), t(6, _ = u[1]));
  }, P = (M) => {
    const g = M || S;
    c && (t(2, u = f.elementToImage(g.offsetX, g.offsetY)), t(5, m = u[0]), t(6, _ = u[1])), M && (S = M);
  }, w = (M) => {
    const g = M;
    if (l === "click") {
      const H = performance.now() - h.timeStamp, y = rn([h.offsetX, h.offsetY], [g.offsetX, g.offsetY]);
      if (H > 300 || y > 15) return;
      c ? b() : (t(1, c = f.elementToImage(g.offsetX, g.offsetY)), t(2, u = c), t(3, p = c[0]), t(4, d = c[1]), t(5, m = u[0]), t(6, _ = u[1]));
    } else c && (g.stopPropagation(), b());
  }, b = () => {
    if (c && u && rn(c, u) > 4) {
      const M = {
        type: Pe.LINE,
        geometry: {
          bounds: De([c, u]),
          points: [c, u]
        }
      };
      o("create", M);
    }
    t(1, c = void 0), t(2, u = void 0), S = void 0;
  };
  on(() => {
    s("pointerdown", A, !0), s("pointermove", P), s("pointerup", w, !0);
  });
  function v(M) {
    gn[M ? "unshift" : "push"](() => {
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
    m,
    _,
    s,
    l,
    f,
    r,
    v
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
      B(f, n, r);
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
          const c = Jo(f, s, a);
          l[a] ? l[a].p(c, r) : (l[a] = xo(c), l[a].c(), l[a].m(n, null));
        }
        for (; a < l.length; a += 1)
          l[a].d(1);
        l.length = s.length;
      }
    },
    d(f) {
      f && j(n), jn(l, f), t = !1, o();
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
      B(l, n, f), t || (o = $(n, "click", s), t = !0);
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
      l && j(n), t = !1, o();
    }
  };
}
function Mr(e) {
  let n, t, o, s, l, f, r, a, c, u, p, d, m, _, h, S, A, P, w, b, v, M, g, H, y, T, L, O = (
    /*showBgPicker*/
    e[3] && $o(e)
  );
  return {
    c() {
      n = qe("div"), t = qe("button"), t.textContent = "A-", o = ne(), s = qe("button"), s.textContent = "A+", l = ne(), f = qe("div"), r = ne(), a = qe("button"), a.innerHTML = "<strong>B</strong>", c = ne(), u = qe("button"), u.innerHTML = "<em>I</em>", p = ne(), d = qe("button"), d.innerHTML = "<u>U</u>", m = ne(), _ = qe("div"), h = ne(), S = qe("div"), A = qe("button"), P = qe("span"), P.textContent = "A", w = ne(), b = qe("span"), v = ne(), O && O.c(), M = ne(), g = qe("div"), H = ne(), y = qe("button"), y.innerHTML = '<svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor"><path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"></path></svg>', i(t, "class", "tb-btn svelte-19rj0sx"), i(t, "title", "Decrease font size"), i(s, "class", "tb-btn svelte-19rj0sx"), i(s, "title", "Increase font size"), i(f, "class", "tb-divider svelte-19rj0sx"), i(a, "class", "tb-btn svelte-19rj0sx"), i(a, "title", "Bold"), Ze(
        a,
        "active",
        /*style*/
        e[0].bold
      ), i(u, "class", "tb-btn svelte-19rj0sx"), i(u, "title", "Italic"), Ze(
        u,
        "active",
        /*style*/
        e[0].italic
      ), i(d, "class", "tb-btn svelte-19rj0sx"), i(d, "title", "Underline"), Ze(
        d,
        "active",
        /*style*/
        e[0].underline
      ), i(_, "class", "tb-divider svelte-19rj0sx"), i(P, "class", "tb-color-letter svelte-19rj0sx"), i(b, "class", "tb-color-swatch svelte-19rj0sx"), Be(
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
      ), i(A, "class", "tb-btn tb-color-btn svelte-19rj0sx"), i(A, "title", "Highlight colour"), i(S, "class", "tb-color-wrap svelte-19rj0sx"), i(g, "class", "tb-divider svelte-19rj0sx"), i(y, "class", "tb-btn tb-delete svelte-19rj0sx"), i(y, "title", "Delete"), i(n, "class", "a9s-tools-text-toolbar svelte-19rj0sx"), Be(
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
    m(G, R) {
      B(G, n, R), Z(n, t), Z(n, o), Z(n, s), Z(n, l), Z(n, f), Z(n, r), Z(n, a), Z(n, c), Z(n, u), Z(n, p), Z(n, d), Z(n, m), Z(n, _), Z(n, h), Z(n, S), Z(S, A), Z(A, P), Z(A, w), Z(A, b), Z(S, v), O && O.m(S, null), Z(n, M), Z(n, g), Z(n, H), Z(n, y), T || (L = [
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
          u,
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
          A,
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
      ], T = !0);
    },
    p(G, [R]) {
      R & /*style*/
      1 && Ze(
        a,
        "active",
        /*style*/
        G[0].bold
      ), R & /*style*/
      1 && Ze(
        u,
        "active",
        /*style*/
        G[0].italic
      ), R & /*style*/
      1 && Ze(
        d,
        "active",
        /*style*/
        G[0].underline
      ), R & /*style*/
      1 && Be(
        b,
        "background",
        /*style*/
        G[0].bgColor !== "transparent" ? (
          /*style*/
          G[0].bgColor
        ) : "transparent"
      ), R & /*style*/
      1 && Be(
        b,
        "border-color",
        /*style*/
        G[0].bgColor !== "transparent" ? (
          /*style*/
          G[0].bgColor
        ) : "#AAAFC3"
      ), /*showBgPicker*/
      G[3] ? O ? O.p(G, R) : (O = $o(G), O.c(), O.m(S, null)) : O && (O.d(1), O = null), R & /*x*/
      2 && Be(
        n,
        "left",
        /*x*/
        G[1] + "px"
      ), R & /*y*/
      4 && Be(
        n,
        "top",
        /*y*/
        G[2] + "px"
      );
    },
    i: Se,
    o: Se,
    d(G) {
      G && j(n), O && O.d(), T = !1, Le(L);
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
  const c = (v) => f("change", { ...o, ...v }), u = (v) => c({
    fontSize: Math.max(8, Math.min(72, o.fontSize + v))
  }), p = () => c({ bold: !o.bold }), d = () => c({ italic: !o.italic }), m = () => c({ underline: !o.underline }), _ = (v) => {
    c({ bgColor: v }), t(3, a = !1);
  }, h = (v) => v.preventDefault(), S = () => u(-2), A = () => u(2), P = () => t(3, a = !a), w = (v) => _(v.value), b = () => f("delete");
  return e.$$set = (v) => {
    "style" in v && t(0, o = v.style), "x" in v && t(1, s = v.x), "y" in v && t(2, l = v.y);
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
    m,
    _,
    h,
    S,
    A,
    P,
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
function Or(e) {
  const n = e.slice(), t = (
    /*ann*/
    n[77].u
  );
  return n[80] = t, n;
}
function ss(e) {
  let n, t, o, s, l, f, r, a, c, u, p, d, m, _, h, S, A, P, w, b, v, M = (
    /*ann*/
    e[77].length + ""
  ), g, H, y, T;
  return {
    c() {
      n = q("g"), t = q("polyline"), s = q("line"), c = q("line"), _ = q("g"), h = q("rect"), v = q("text"), g = st(M), i(t, "points", o = /*ann*/
      e[77].linePts), i(t, "fill", "none"), i(
        t,
        "stroke",
        /*strokeColor*/
        e[0]
      ), i(t, "stroke-width", "1.5"), i(t, "stroke-dasharray", "8 5"), i(t, "vector-effect", "non-scaling-stroke"), i(s, "x1", l = /*ann*/
      e[77].x1 - /*ann*/
      e[77].px * /*u*/
      e[80]), i(s, "y1", f = /*ann*/
      e[77].y1 - /*ann*/
      e[77].py * /*u*/
      e[80]), i(s, "x2", r = /*ann*/
      e[77].x1 + /*ann*/
      e[77].px * /*u*/
      e[80]), i(s, "y2", a = /*ann*/
      e[77].y1 + /*ann*/
      e[77].py * /*u*/
      e[80]), i(
        s,
        "stroke",
        /*strokeColor*/
        e[0]
      ), i(s, "stroke-width", "1.5"), i(s, "vector-effect", "non-scaling-stroke"), i(c, "x1", u = /*ann*/
      e[77].x2 - /*ann*/
      e[77].px * /*u*/
      e[80]), i(c, "y1", p = /*ann*/
      e[77].y2 - /*ann*/
      e[77].py * /*u*/
      e[80]), i(c, "x2", d = /*ann*/
      e[77].x2 + /*ann*/
      e[77].px * /*u*/
      e[80]), i(c, "y2", m = /*ann*/
      e[77].y2 + /*ann*/
      e[77].py * /*u*/
      e[80]), i(
        c,
        "stroke",
        /*strokeColor*/
        e[0]
      ), i(c, "stroke-width", "1.5"), i(c, "vector-effect", "non-scaling-stroke"), i(h, "x", S = -/*u*/
      e[80] * 3), i(h, "y", A = /*u*/
      e[80] * 0.4), i(h, "width", P = /*u*/
      e[80] * 6), i(h, "height", w = /*u*/
      e[80] * 1.4), i(h, "rx", b = /*u*/
      e[80] * 0.25), i(h, "fill", "rgba(0,0,0,0.65)"), i(v, "x", "0"), i(v, "y", H = /*u*/
      e[80] * 1.1), i(v, "font-size", y = /*u*/
      e[80]), i(v, "font-family", "sans-serif"), i(v, "fill", "white"), i(v, "text-anchor", "middle"), i(v, "dominant-baseline", "middle"), i(_, "transform", T = `translate(${/*ann*/
      e[77].mx}, ${/*ann*/
      e[77].my})`), i(n, "class", "a9s-tools-distance");
    },
    m(L, O) {
      B(L, n, O), Z(n, t), Z(n, s), Z(n, c), Z(n, _), Z(_, h), Z(_, v), Z(v, g);
    },
    p(L, O) {
      O[0] & /*svgAnnotations*/
      4096 && o !== (o = /*ann*/
      L[77].linePts) && i(t, "points", o), O[0] & /*strokeColor*/
      1 && i(
        t,
        "stroke",
        /*strokeColor*/
        L[0]
      ), O[0] & /*svgAnnotations*/
      4096 && l !== (l = /*ann*/
      L[77].x1 - /*ann*/
      L[77].px * /*u*/
      L[80]) && i(s, "x1", l), O[0] & /*svgAnnotations*/
      4096 && f !== (f = /*ann*/
      L[77].y1 - /*ann*/
      L[77].py * /*u*/
      L[80]) && i(s, "y1", f), O[0] & /*svgAnnotations*/
      4096 && r !== (r = /*ann*/
      L[77].x1 + /*ann*/
      L[77].px * /*u*/
      L[80]) && i(s, "x2", r), O[0] & /*svgAnnotations*/
      4096 && a !== (a = /*ann*/
      L[77].y1 + /*ann*/
      L[77].py * /*u*/
      L[80]) && i(s, "y2", a), O[0] & /*strokeColor*/
      1 && i(
        s,
        "stroke",
        /*strokeColor*/
        L[0]
      ), O[0] & /*svgAnnotations*/
      4096 && u !== (u = /*ann*/
      L[77].x2 - /*ann*/
      L[77].px * /*u*/
      L[80]) && i(c, "x1", u), O[0] & /*svgAnnotations*/
      4096 && p !== (p = /*ann*/
      L[77].y2 - /*ann*/
      L[77].py * /*u*/
      L[80]) && i(c, "y1", p), O[0] & /*svgAnnotations*/
      4096 && d !== (d = /*ann*/
      L[77].x2 + /*ann*/
      L[77].px * /*u*/
      L[80]) && i(c, "x2", d), O[0] & /*svgAnnotations*/
      4096 && m !== (m = /*ann*/
      L[77].y2 + /*ann*/
      L[77].py * /*u*/
      L[80]) && i(c, "y2", m), O[0] & /*strokeColor*/
      1 && i(
        c,
        "stroke",
        /*strokeColor*/
        L[0]
      ), O[0] & /*svgAnnotations*/
      4096 && S !== (S = -/*u*/
      L[80] * 3) && i(h, "x", S), O[0] & /*svgAnnotations*/
      4096 && A !== (A = /*u*/
      L[80] * 0.4) && i(h, "y", A), O[0] & /*svgAnnotations*/
      4096 && P !== (P = /*u*/
      L[80] * 6) && i(h, "width", P), O[0] & /*svgAnnotations*/
      4096 && w !== (w = /*u*/
      L[80] * 1.4) && i(h, "height", w), O[0] & /*svgAnnotations*/
      4096 && b !== (b = /*u*/
      L[80] * 0.25) && i(h, "rx", b), O[0] & /*svgAnnotations*/
      4096 && M !== (M = /*ann*/
      L[77].length + "") && Gs(g, M), O[0] & /*svgAnnotations*/
      4096 && H !== (H = /*u*/
      L[80] * 1.1) && i(v, "y", H), O[0] & /*svgAnnotations*/
      4096 && y !== (y = /*u*/
      L[80]) && i(v, "font-size", y), O[0] & /*svgAnnotations*/
      4096 && T !== (T = `translate(${/*ann*/
      L[77].mx}, ${/*ann*/
      L[77].my})`) && i(_, "transform", T);
    },
    d(L) {
      L && j(n);
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
    ) return Hr;
    if (
      /*ann*/
      a[77].toolType === "distance"
    ) return ss;
  }
  function l(a, c) {
    return c === ss ? Or(a) : a;
  }
  let f = s(n), r = f && f(l(n, f));
  return {
    key: e,
    first: null,
    c() {
      t = He(), r && r.c(), o = He(), this.first = t;
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
      t && t.c(), n = He();
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
      n = q("filter"), t = q("feFlood"), s = q("feMerge"), l = q("feMergeNode"), f = q("feMergeNode"), i(t, "flood-color", o = /*style*/
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
      t = He(), s && s.c(), o = He(), this.first = t;
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
      s && s.c(), n = He(), l && l.c(), o = He();
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
  function m() {
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
      )), i(t, "filter", c = /*hasBg*/
      e[65] ? `url(#a9s-tb-${/*i*/
      e[62]})` : null), Be(n, "pointer-events", "auto"), Be(n, "cursor", "pointer");
    },
    m(_, h) {
      B(_, n, h), Z(n, t), Z(t, s), u || (p = [
        $(n, "mousedown", d),
        $(n, "click", m)
      ], u = !0);
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
      4 && c !== (c = /*hasBg*/
      e[65] ? `url(#a9s-tb-${/*i*/
      e[62]})` : null) && i(t, "filter", c);
    },
    d(_) {
      _ && j(n), u = !1, Le(p);
    }
  };
}
function us(e) {
  let n, t, o, s, l, f, r, a, c, u, p, d, m, _, h, S, A, P, w, b, v;
  function M(...y) {
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
  function g(...y) {
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
  function H(...y) {
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
      n = q("g"), t = q("rect"), r = q("rect"), d = q("circle"), S = q("circle"), i(t, "x", o = /*boxX*/
      e[72]), i(t, "y", s = /*boxY*/
      e[73]), i(t, "width", l = /*boxW*/
      e[74]), i(t, "height", f = /*textH*/
      e[69]), i(t, "fill", "none"), i(t, "stroke", "#888888"), i(t, "stroke-width", "1"), i(t, "stroke-dasharray", "3 3"), i(t, "vector-effect", "non-scaling-stroke"), i(r, "x", a = /*boxX*/
      e[72]), i(r, "y", c = /*boxY*/
      e[73]), i(r, "width", u = /*boxW*/
      e[74]), i(r, "height", p = /*textH*/
      e[69]), i(r, "fill", "transparent"), Be(r, "pointer-events", "fill"), Be(r, "cursor", "move"), i(d, "cx", m = /*boxX*/
      e[72]), i(d, "cy", _ = /*centerY*/
      e[75]), i(d, "r", h = /*anchorR*/
      e[70]), i(d, "fill", "#ff00ba"), i(d, "stroke", "white"), i(d, "stroke-width", "1"), i(d, "vector-effect", "non-scaling-stroke"), Be(d, "pointer-events", "auto"), Be(d, "cursor", "ew-resize"), i(S, "cx", A = /*boxX*/
      e[72] + /*boxW*/
      e[74]), i(S, "cy", P = /*centerY*/
      e[75]), i(S, "r", w = /*anchorR*/
      e[70]), i(S, "fill", "#ff00ba"), i(S, "stroke", "white"), i(S, "stroke-width", "1"), i(S, "vector-effect", "non-scaling-stroke"), Be(S, "pointer-events", "auto"), Be(S, "cursor", "ew-resize"), Be(n, "pointer-events", "none");
    },
    m(y, T) {
      B(y, n, T), Z(n, t), Z(n, r), Z(n, d), Z(n, S), b || (v = [
        $(r, "mousedown", M),
        $(d, "mousedown", g),
        $(S, "mousedown", H)
      ], b = !0);
    },
    p(y, T) {
      e = y, T[0] & /*draggingPos, textAnnotations, viewportScale*/
      2084 && o !== (o = /*boxX*/
      e[72]) && i(t, "x", o), T[0] & /*draggingPos, textAnnotations*/
      2052 && s !== (s = /*boxY*/
      e[73]) && i(t, "y", s), T[0] & /*editingId, textAnnotations, editingText, localTexts, viewportScale*/
      230 && l !== (l = /*boxW*/
      e[74]) && i(t, "width", l), T[0] & /*textAnnotations*/
      4 && f !== (f = /*textH*/
      e[69]) && i(t, "height", f), T[0] & /*draggingPos, textAnnotations, viewportScale*/
      2084 && a !== (a = /*boxX*/
      e[72]) && i(r, "x", a), T[0] & /*draggingPos, textAnnotations*/
      2052 && c !== (c = /*boxY*/
      e[73]) && i(r, "y", c), T[0] & /*editingId, textAnnotations, editingText, localTexts, viewportScale*/
      230 && u !== (u = /*boxW*/
      e[74]) && i(r, "width", u), T[0] & /*textAnnotations*/
      4 && p !== (p = /*textH*/
      e[69]) && i(r, "height", p), T[0] & /*draggingPos, textAnnotations, viewportScale*/
      2084 && m !== (m = /*boxX*/
      e[72]) && i(d, "cx", m), T[0] & /*draggingPos, textAnnotations*/
      2052 && _ !== (_ = /*centerY*/
      e[75]) && i(d, "cy", _), T[0] & /*viewportScale*/
      32 && h !== (h = /*anchorR*/
      e[70]) && i(d, "r", h), T[0] & /*draggingPos, textAnnotations, viewportScale, editingId, editingText, localTexts*/
      2278 && A !== (A = /*boxX*/
      e[72] + /*boxW*/
      e[74]) && i(S, "cx", A), T[0] & /*draggingPos, textAnnotations*/
      2052 && P !== (P = /*centerY*/
      e[75]) && i(S, "cy", P), T[0] & /*viewportScale*/
      32 && w !== (w = /*anchorR*/
      e[70]) && i(S, "r", w);
    },
    d(y) {
      y && j(n), b = !1, Le(v);
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
      e[37](
        /*id*/
        e[52],
        ...u
      )
    );
  }
  function c() {
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
  }), n.$on("change", a), n.$on("delete", c), {
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
    m(u, p) {
      de(n, u, p), B(u, t, p), B(u, o, p), e[39](o), Eo(
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
      l || (J(n.$$.fragment, u), l = !0);
    },
    o(u) {
      ee(n.$$.fragment, u), l = !1;
    },
    d(u) {
      u && (j(t), j(o)), me(n, u), e[39](null), f = !1, Le(r);
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
      B(f, t, r), l && l.m(f, r), B(f, o, r), s = !0;
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
      f && (j(t), j(o)), l && l.d(f);
    }
  };
}
function Ir(e) {
  let n, t, o = [], s = /* @__PURE__ */ new Map(), l, f, r, a = [], c = /* @__PURE__ */ new Map(), u = [], p = /* @__PURE__ */ new Map(), d, m = [], _ = /* @__PURE__ */ new Map(), h, S, A = Ae(
    /*svgAnnotations*/
    e[12]
  );
  const P = (y) => (
    /*ann*/
    y[77].id
  );
  for (let y = 0; y < A.length; y += 1) {
    let T = os(e, A, y), L = P(T);
    s.set(L, o[y] = ls(L, T));
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
    let T = ts(e, w, y), L = b(T);
    c.set(L, a[y] = fs(L, T));
  }
  let v = Ae(
    /*textAnnotations*/
    e[2]
  );
  const M = (y) => (
    /*id*/
    y[52]
  );
  for (let y = 0; y < v.length; y += 1) {
    let T = ns(e, v, y), L = M(T);
    p.set(L, u[y] = ps(L, T));
  }
  let g = Ae(
    /*textAnnotations*/
    e[2]
  );
  const H = (y) => (
    /*id*/
    y[52]
  );
  for (let y = 0; y < g.length; y += 1) {
    let T = es(e, g, y), L = H(T);
    _.set(L, m[y] = ds(L, T));
  }
  return {
    c() {
      n = q("svg"), t = q("g");
      for (let y = 0; y < o.length; y += 1)
        o[y].c();
      l = ne(), f = q("svg"), r = q("defs");
      for (let y = 0; y < a.length; y += 1)
        a[y].c();
      for (let y = 0; y < u.length; y += 1)
        u[y].c();
      d = ne();
      for (let y = 0; y < m.length; y += 1)
        m[y].c();
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
    m(y, T) {
      B(y, n, T), Z(n, t);
      for (let L = 0; L < o.length; L += 1)
        o[L] && o[L].m(t, null);
      B(y, l, T), B(y, f, T), Z(f, r);
      for (let L = 0; L < a.length; L += 1)
        a[L] && a[L].m(r, null);
      for (let L = 0; L < u.length; L += 1)
        u[L] && u[L].m(f, null);
      e[36](f), B(y, d, T);
      for (let L = 0; L < m.length; L += 1)
        m[L] && m[L].m(y, T);
      B(y, h, T), S = !0;
    },
    p(y, T) {
      T[0] & /*svgAnnotations, strokeColor*/
      4097 && (A = Ae(
        /*svgAnnotations*/
        y[12]
      ), o = Qn(o, T, P, 1, y, A, s, t, gt, ls, null, os)), (!S || T[0] & /*viewBox*/
      16) && i(
        n,
        "viewBox",
        /*viewBox*/
        y[4]
      ), T[0] & /*textAnnotations, getStyle, editingId*/
      32836 && (w = Ae(
        /*textAnnotations*/
        y[2]
      ), a = Qn(a, T, b, 1, y, w, c, r, gt, fs, null, ts)), T[0] & /*draggingPos, textAnnotations, textPoint, viewportScale, measureTextWidth, editingId, editingText, localTexts, svgFontSize, getStyle, handleTextMouseDown, selectedIds, startEditing, svgTextStyle*/
      42708198 && (v = Ae(
        /*textAnnotations*/
        y[2]
      ), u = Qn(u, T, M, 1, y, v, p, f, gt, ps, null, ns)), (!S || T[0] & /*viewBox*/
      16) && i(
        f,
        "viewBox",
        /*viewBox*/
        y[4]
      ), T[0] & /*inputStyle, editingStyle, inputScreenPos, textAnnotations, measureTextWidth, editingText, inputEl, onInputKeyDown, commitEdit, applyStyleChange, deleteAnnotation, editingId*/
      91497412 && (g = Ae(
        /*textAnnotations*/
        y[2]
      ), Ve(), m = Qn(m, T, H, 1, y, g, _, h.parentNode, hi, ds, h, es), Ke());
    },
    i(y) {
      if (!S) {
        for (let T = 0; T < g.length; T += 1)
          J(m[T]);
        S = !0;
      }
    },
    o(y) {
      for (let T = 0; T < m.length; T += 1)
        ee(m[T]);
      S = !1;
    },
    d(y) {
      y && (j(n), j(l), j(f), j(d), j(h));
      for (let T = 0; T < o.length; T += 1)
        o[T].d();
      for (let T = 0; T < a.length; T += 1)
        a[T].d();
      for (let T = 0; T < u.length; T += 1)
        u[T].d();
      e[36](null);
      for (let T = 0; T < m.length; T += 1)
        m[T].d(y);
    }
  };
}
function Cr(e, n, t) {
  let o, s, l, f, { anno: r } = n, { strokeColor: a = "#6a6a6a" } = n, c = null, u, p = "0 0 1 1", d = 1, m = 1, _, h = null, S = "", A = { ...pn }, P, w = [], b = {}, v = null, M = null, g = {}, H = null;
  const y = (z, C) => {
    H || (H = document.createElement("canvas"));
    const k = H.getContext("2d");
    return k.font = `${C}px sans-serif`, k.measureText(z).width;
  }, T = (z, C) => {
    if (!u) return { x: 0, y: 0 };
    const k = u.getBoundingClientRect();
    return {
      x: (z - k.left) / m,
      y: (C - k.top) / m
    };
  }, { store: L } = r.state;
  oi(e, L, (z) => t(30, f = z));
  const O = (z) => {
    var C;
    return {
      ...pn,
      ...((C = z.properties) == null ? void 0 : C.textStyle) || {}
    };
  }, G = (z) => {
    const C = z.geometry;
    return { x: C.x, y: C.y };
  }, R = (z) => (z.fontSize || pn.fontSize) / Math.max(m, 1e-3), I = (z, C) => {
    const { x: k, y: re } = G(z), ge = C.fontSize || pn.fontSize;
    return {
      left: k * m,
      top: re * m - ge
    };
  }, Y = () => {
    if (!c) return;
    const { naturalWidth: z, naturalHeight: C } = c;
    !z || !C || (t(28, d = z), t(4, p = `0 0 ${z} ${C}`), t(5, m = c.getBoundingClientRect().width / z));
  }, N = async (z) => {
    var C, k, re;
    ((re = (k = (C = z.target) == null ? void 0 : C.selector) == null ? void 0 : k.properties) == null ? void 0 : re.toolType) === "text" && (t(6, h = z.id), t(7, S = ""), t(8, A = O(z.target.selector)), await Kn(), P == null || P.focus());
  }, U = async (z) => {
    var k, re;
    const C = o.find((ge) => ge.id === z);
    if (C) {
      h && h !== z && D();
      try {
        r.state.selection.setSelected(z);
      } catch {
      }
      t(6, h = z), t(7, S = b[z] ?? ((re = (k = C.bodies) == null ? void 0 : k[0]) == null ? void 0 : re.value) ?? ""), t(8, A = O(C.target.selector)), await Kn(), P == null || P.focus();
    }
  }, W = (z) => {
    var re, ge, Ee;
    if (t(10, w = (z == null ? void 0 : z.map((le) => le.id)) || []), !(z != null && z.length)) return;
    const C = z[0];
    !(((Ee = (ge = (re = C == null ? void 0 : C.target) == null ? void 0 : re.selector) == null ? void 0 : ge.properties) == null ? void 0 : Ee.toolType) === "text") && h && D();
  }, D = () => {
    if (!h) return;
    const z = h, C = S, k = o.find((re) => re.id === z);
    if (k) {
      const re = C.trim() ? [
        {
          type: "TextualBody",
          value: C,
          purpose: "commenting"
        }
      ] : [], ge = (A.fontSize || pn.fontSize) / Math.max(m, 1e-3), Ee = y(C || "Type...", ge), le = ge * 1.2, We = 8 / Math.max(m, 1e-3), Ye = k.target.selector.geometry, en = {
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
        ...k,
        bodies: re,
        target: {
          ...k.target,
          selector: {
            ...k.target.selector,
            geometry: en,
            properties: {
              ...k.target.selector.properties,
              textStyle: A
            }
          }
        }
      }), C.trim())
        t(1, b = {
          ...b,
          [z]: C
        });
      else {
        const { [z]: sn, ...cn } = b;
        t(1, b = cn);
      }
    }
    t(6, h = null), t(7, S = "");
  }, X = (z, C) => {
    const k = o.find((re) => re.id === z);
    k && (r.updateAnnotation({
      ...k,
      target: {
        ...k.target,
        selector: {
          ...k.target.selector,
          properties: {
            ...k.target.selector.properties,
            textStyle: C
          }
        }
      }
    }), h === z && t(8, A = C));
  }, V = (z) => {
    h === z && (t(6, h = null), t(7, S = ""));
    const { [z]: C, ...k } = b;
    t(1, b = k), r.removeAnnotation(z);
  }, Q = (z, C, k) => {
    if (z.button !== 0) return;
    z.stopPropagation();
    const re = T(z.clientX, z.clientY);
    M = { x: re.x - k.x, y: re.y - k.y }, v = C;
  }, x = (z) => {
    if (!v || !M) return;
    const C = T(z.clientX, z.clientY);
    t(11, g = {
      [v]: {
        x: C.x - M.x,
        y: C.y - M.y
      }
    });
  }, F = () => {
    var C, k, re, ge;
    if (!v) return;
    const z = g[v];
    if (z) {
      const Ee = o.find((le) => le.id === v);
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
                  minX: (((C = le.bounds) == null ? void 0 : C.minX) ?? le.x) + We,
                  minY: (((k = le.bounds) == null ? void 0 : k.minY) ?? le.y) + Ye,
                  maxX: (((re = le.bounds) == null ? void 0 : re.maxX) ?? le.x) + We,
                  maxY: (((ge = le.bounds) == null ? void 0 : ge.maxY) ?? le.y) + Ye
                }
              }
            }
          }
        });
      }
    }
    v = null, M = null, t(11, g = {});
  }, oe = (z) => {
    z.stopPropagation(), (z.key === "Enter" || z.key === "Escape") && (D(), r.cancelSelected());
  }, be = (z) => [
    z.bold ? "font-weight:bold" : "",
    z.italic ? "font-style:italic" : "",
    z.underline ? "text-decoration:underline" : ""
  ].filter(Boolean).join(";"), te = (z, C, k) => [
    `left:${C.left}px`,
    `top:${C.top}px`,
    `width:${k}px`,
    `height:${(z.fontSize || pn.fontSize) * 1.2}px`,
    `font-size:${z.fontSize || pn.fontSize}px`,
    z.bold ? "font-weight:bold" : "",
    z.italic ? "font-style:italic" : "",
    z.underline ? "text-decoration:underline" : "",
    z.bgColor && z.bgColor !== "transparent" ? `background:${z.bgColor}` : ""
  ].filter(Boolean).join(";");
  on(() => {
    c = r.element.querySelector("img"), c && (c.complete && Y(), c.addEventListener("load", Y), window.ResizeObserver && (_ = new ResizeObserver(Y), _.observe(c)), r.on("createAnnotation", N), r.on("selectionChanged", W), window.addEventListener("mousemove", x), window.addEventListener("mouseup", F));
  }), ci(() => {
    c == null || c.removeEventListener("load", Y), _ == null || _.disconnect(), r.off("createAnnotation", N), r.off("selectionChanged", W), window.removeEventListener("mousemove", x), window.removeEventListener("mouseup", F);
  });
  const Oe = (z, C, k) => Q(k, z, C), ce = (z) => U(z), ve = (z, C, k) => Q(k, z, C), ue = (z, C, k) => Q(k, z, C), Xe = (z, C, k) => Q(k, z, C);
  function pe(z) {
    gn[z ? "unshift" : "push"](() => {
      u = z, t(3, u);
    });
  }
  const je = (z, C) => X(z, C.detail), ke = (z) => V(z);
  function K(z) {
    gn[z ? "unshift" : "push"](() => {
      P = z, t(9, P);
    });
  }
  function Fe() {
    S = this.value, t(7, S);
  }
  return e.$$set = (z) => {
    "anno" in z && t(27, r = z.anno), "strokeColor" in z && t(0, a = z.strokeColor);
  }, e.$$.update = () => {
    if (e.$$.dirty[0] & /*$store*/
    1073741824 && t(29, o = f), e.$$.dirty[0] & /*allAnnotations, naturalWidth*/
    805306368 && t(12, s = o.reduce(
      (z, C) => {
        var ge, Ee;
        const k = (ge = C.target) == null ? void 0 : ge.selector, re = (Ee = k == null ? void 0 : k.properties) == null ? void 0 : Ee.toolType;
        if (!k) return z;
        if (re === "arrow") {
          const le = k.geometry.points, [We, Ye] = le[0], [en, sn] = le[1], cn = Math.atan2(sn - Ye, en - We), un = 25, lt = [
            `${en - un * Math.cos(cn - Math.PI / 6)},${sn - un * Math.sin(cn - Math.PI / 6)}`,
            `${en},${sn}`,
            `${en - un * Math.cos(cn + Math.PI / 6)},${sn - un * Math.sin(cn + Math.PI / 6)}`
          ].join(" ");
          z.push({
            id: C.id,
            toolType: "arrow",
            arrowheadStr: lt
          });
        } else if (re === "distance") {
          const le = k.geometry.points.map((nn) => nn.point), [We, Ye] = le[0], [en, sn] = le[le.length - 1];
          let cn = 0;
          for (let nn = 1; nn < le.length; nn++) cn += Math.hypot(le[nn][0] - le[nn - 1][0], le[nn][1] - le[nn - 1][1]);
          const un = Math.hypot(en - We, sn - Ye), lt = un > 0 ? -(sn - Ye) / un : 0, Fs = un > 0 ? (en - We) / un : 1, Ws = d * 0.012;
          z.push({
            id: C.id,
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
            length: `${Math.round(cn)} px`
          });
        }
        return z;
      },
      []
    )), e.$$.dirty[0] & /*allAnnotations*/
    536870912 && t(2, l = o.map((z) => {
      var C, k, re;
      return {
        id: z.id,
        annotation: z,
        selector: (C = z.target) == null ? void 0 : C.selector,
        text: (re = (k = z.bodies) == null ? void 0 : k[0]) == null ? void 0 : re.value
      };
    }).filter(({ selector: z }) => {
      var C;
      return ((C = z == null ? void 0 : z.properties) == null ? void 0 : C.toolType) === "text";
    })), e.$$.dirty[0] & /*textAnnotations, localTexts*/
    6)
      for (const { id: z, text: C } of l)
        C && b[z] === void 0 && t(1, b = { ...b, [z]: C });
  }, [
    a,
    b,
    l,
    u,
    p,
    m,
    h,
    S,
    A,
    P,
    w,
    g,
    s,
    y,
    L,
    O,
    G,
    R,
    I,
    U,
    D,
    X,
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
    ce,
    ve,
    ue,
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
      B(r, n, a), B(r, o, a), f && f.m(r, a), B(r, l, a);
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
      r && (j(n), j(o), j(l)), f && f.d(r);
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
      B(o, n, s), t && t.m(n, null);
    },
    p(o, [s]) {
      /*pathString*/
      o[2] ? t ? t.p(o, s) : (t = ms(o), t.c(), t.m(n, null)) : t && (t.d(1), t = null);
    },
    i: Se,
    o: Se,
    d(o) {
      o && j(n), t && t.d();
    }
  };
}
const Dr = 20, Xr = 1500;
function jr(e, n, t) {
  let o, s, l;
  const f = xe();
  let { addEventListener: r } = n, { drawingMode: a } = n, { transform: c } = n, { viewportScale: u = 1 } = n, p, d = [], m, _ = !1, h;
  const S = (v) => {
    const M = v, { timeStamp: g, offsetX: H, offsetY: y } = M;
    if (p = { timeStamp: g, offsetX: H, offsetY: y }, a === "drag" && d.length === 0) {
      const T = c.elementToImage(M.offsetX, M.offsetY);
      d.push(T), t(8, m = T);
    }
  }, A = (v) => {
    const M = v;
    if (h && clearTimeout(h), d.length > 0) {
      if (t(8, m = c.elementToImage(M.offsetX, M.offsetY)), d.length > 2) {
        const g = rn(m, d[0]) * u;
        t(1, _ = g < Dr);
      }
      M.pointerType === "touch" && (h = setTimeout(
        () => {
          w();
        },
        Xr
      ));
    }
  }, P = (v) => {
    const M = v;
    if (h && clearTimeout(h), a === "click") {
      const g = M.timeStamp - p.timeStamp, H = rn([p.offsetX, p.offsetY], [M.offsetX, M.offsetY]);
      if (g > 300 || H > 15) return;
      if (_)
        b();
      else if (d.length === 0) {
        const y = c.elementToImage(M.offsetX, M.offsetY);
        d.push(y), t(8, m = y);
      } else
        d.push(m);
    } else {
      if (d.length === 1 && rn(d[0], m) <= 4) {
        t(0, d = []), t(8, m = void 0);
        return;
      }
      M.stopImmediatePropagation(), _ ? b() : d.push(m);
    }
  }, w = () => {
    if (!m) return;
    const v = d.slice(0, -1);
    if (v.length < 2) return;
    const M = {
      type: Pe.POLYLINE,
      geometry: {
        bounds: De(v),
        points: v.map((g) => ({ type: "CORNER", point: g }))
      }
    };
    t(0, d = []), t(8, m = void 0), f("create", M);
  }, b = () => {
    const v = {
      type: Pe.POLYLINE,
      geometry: {
        bounds: De(d),
        points: d.map((M) => ({ type: "CORNER", point: M })),
        closed: !0
      }
    };
    t(0, d = []), t(8, m = void 0), f("create", v);
  };
  return on(() => {
    r("pointerdown", S, !0), r("pointermove", A), r("pointerup", P, !0), r("dblclick", w, !0);
  }), e.$$set = (v) => {
    "addEventListener" in v && t(4, r = v.addEventListener), "drawingMode" in v && t(5, a = v.drawingMode), "transform" in v && t(6, c = v.transform), "viewportScale" in v && t(7, u = v.viewportScale);
  }, e.$$.update = () => {
    e.$$.dirty & /*viewportScale*/
    128 && t(3, o = 4 / u), e.$$.dirty & /*cursor, isClosable, points*/
    259 && t(9, s = m ? _ ? d : [...d, m] : []), e.$$.dirty & /*coords, isClosable*/
    514 && t(2, l = s.length > 0 ? `M ${s[0][0]},${s[0][1]}` + s.slice(1).map(([v, M]) => ` L ${v},${M}`).join("") + (_ ? " Z" : "") : "");
  }, [
    d,
    _,
    l,
    o,
    r,
    a,
    c,
    u,
    m,
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
      B(f, n, r), s || (l = $(
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
function zr(e) {
  let n, t, o, s, l, f, r, a, c;
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
    m(u, p) {
      B(u, n, p), B(u, l, p), a || (c = [
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
    p(u, p) {
      p & /*controlPoint*/
      2 && t !== (t = /*controlPoint*/
      u[1][0]) && i(n, "cx", t), p & /*controlPoint*/
      2 && o !== (o = /*controlPoint*/
      u[1][1]) && i(n, "cy", o), p & /*handleRadius*/
      8 && s !== (s = 3 * /*handleRadius*/
      u[3]) && i(n, "r", s), p & /*touched*/
      4 && Ze(
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
      u && (j(n), j(l)), a = !1, Le(c);
    }
  };
}
function Vr(e) {
  let n, t, o, s, l, f, r, a, c, u, p;
  function d(h, S) {
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
      e[0][0]), i(r, "y1", c = /*corner*/
      e[0][1]), i(r, "x2", u = /*controlPoint*/
      e[1][0]), i(r, "y2", p = /*controlPoint*/
      e[1][1]), i(n, "class", "a9s-bezier-handle svelte-103tdqm");
    },
    m(h, S) {
      B(h, n, S), Z(n, t), Z(n, r), _.m(n, null);
    },
    p(h, [S]) {
      S & /*corner*/
      1 && o !== (o = /*corner*/
      h[0][0]) && i(t, "x1", o), S & /*corner*/
      1 && s !== (s = /*corner*/
      h[0][1]) && i(t, "y1", s), S & /*controlPoint*/
      2 && l !== (l = /*controlPoint*/
      h[1][0]) && i(t, "x2", l), S & /*controlPoint*/
      2 && f !== (f = /*controlPoint*/
      h[1][1]) && i(t, "y2", f), S & /*corner*/
      1 && a !== (a = /*corner*/
      h[0][0]) && i(r, "x1", a), S & /*corner*/
      1 && c !== (c = /*corner*/
      h[0][1]) && i(r, "y1", c), S & /*controlPoint*/
      2 && u !== (u = /*controlPoint*/
      h[1][0]) && i(r, "x2", u), S & /*controlPoint*/
      2 && p !== (p = /*controlPoint*/
      h[1][1]) && i(r, "y2", p), _.p(h, S);
    },
    i: Se,
    o: Se,
    d(h) {
      h && j(n), _.d();
    }
  };
}
function Kr(e, n, t) {
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
  let n, t, o, s, l, f, r, a, c, u;
  return {
    c() {
      n = q("mask"), t = q("rect"), r = q("circle"), i(t, "x", o = /*mask*/
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
      o && o.c(), n = He();
    },
    m(s, l) {
      o && o.m(s, l), B(s, n, l), t = !0;
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
      s && s.c(), n = ne(), l && l.c(), t = He();
    },
    m(f, r) {
      s && s.m(f, r), B(f, n, r), l && l.m(f, r), B(f, t, r), o = !0;
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
  let n, t, o, s, l, f, r, a, c, u, p, d, m, _, h, S, A, P, w, b = (
    /*visibleMidpoint*/
    e[6] !== void 0 && !/*isHandleHovered*/
    e[7] && ys(Ht(e))
  ), v = (
    /*selectedCorners*/
    e[8].length === 1 && ws(Ot(e))
  ), M = Ae(
    /*geom*/
    e[5].points
  ), g = [];
  for (let T = 0; T < M.length; T += 1)
    g[T] = ks(_s(e, M, T));
  const H = (T) => ee(g[T], 1, 1, () => {
    g[T] = null;
  });
  let y = (
    /*visibleMidpoint*/
    e[6] !== void 0 && !/*isHandleHovered*/
    e[7] && Ss(Lt(e))
  );
  return {
    c() {
      n = q("defs"), b && b.c(), t = ne(), o = q("g"), s = q("rect"), c = q("path"), p = q("path"), m = ne(), v && v.c(), _ = ne();
      for (let T = 0; T < g.length; T += 1)
        g[T].c();
      h = ne(), y && y.c(), S = He(), i(s, "x", l = /*mask*/
      e[9].x), i(s, "y", f = /*mask*/
      e[9].y), i(s, "width", r = /*mask*/
      e[9].w), i(s, "height", a = /*mask*/
      e[9].h), i(s, "class", "mask-buffer svelte-sq8d4p"), i(c, "class", u = ln(`a9s-outer polyline ${/*shape*/
      e[0].geometry.closed ? "closed" : "open"}`) + " svelte-sq8d4p"), i(
        c,
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
    m(T, L) {
      B(T, n, L), b && b.m(n, null), B(T, t, L), B(T, o, L), Z(o, s), Z(o, c), Z(o, p), B(T, m, L), v && v.m(T, L), B(T, _, L);
      for (let O = 0; O < g.length; O += 1)
        g[O] && g[O].m(T, L);
      B(T, h, L), y && y.m(T, L), B(T, S, L), A = !0, P || (w = [
        $(
          c,
          "pointerup",
          /*onShapePointerUp*/
          e[14]
        ),
        $(c, "pointerdown", function() {
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
      ], P = !0);
    },
    p(T, L) {
      if (e = T, /*visibleMidpoint*/
      e[6] !== void 0 && !/*isHandleHovered*/
      e[7] ? b ? b.p(Ht(e), L) : (b = ys(Ht(e)), b.c(), b.m(n, null)) : b && (b.d(1), b = null), (!A || L[0] & /*mask*/
      512 && l !== (l = /*mask*/
      e[9].x)) && i(s, "x", l), (!A || L[0] & /*mask*/
      512 && f !== (f = /*mask*/
      e[9].y)) && i(s, "y", f), (!A || L[0] & /*mask*/
      512 && r !== (r = /*mask*/
      e[9].w)) && i(s, "width", r), (!A || L[0] & /*mask*/
      512 && a !== (a = /*mask*/
      e[9].h)) && i(s, "height", a), (!A || L[0] & /*shape*/
      1 && u !== (u = ln(`a9s-outer polyline ${/*shape*/
      e[0].geometry.closed ? "closed" : "open"}`) + " svelte-sq8d4p")) && i(c, "class", u), (!A || L[0] & /*d*/
      1024) && i(
        c,
        "d",
        /*d*/
        e[10]
      ), (!A || L[0] & /*shape*/
      1 && d !== (d = ln(`a9s-inner polyline a9s-shape-handle ${/*shape*/
      e[0].geometry.closed ? "closed" : "open"}`) + " svelte-sq8d4p")) && i(p, "class", d), (!A || L[0] & /*computedStyle*/
      2) && i(
        p,
        "style",
        /*computedStyle*/
        e[1]
      ), (!A || L[0] & /*d*/
      1024) && i(
        p,
        "d",
        /*d*/
        e[10]
      ), /*selectedCorners*/
      e[8].length === 1 ? v ? (v.p(Ot(e), L), L[0] & /*selectedCorners*/
      256 && J(v, 1)) : (v = ws(Ot(e)), v.c(), J(v, 1), v.m(_.parentNode, _)) : v && (Ve(), ee(v, 1, 1, () => {
        v = null;
      }), Ke()), L[0] & /*geom, viewportScale, selectedCorners, onDoubleClick, onEnterHandle, onLeaveHandle, onHandlePointerDown, grab, onHandlePointerUp*/
      1073983784) {
        M = Ae(
          /*geom*/
          e[5].points
        );
        let O;
        for (O = 0; O < M.length; O += 1) {
          const G = _s(e, M, O);
          g[O] ? (g[O].p(G, L), J(g[O], 1)) : (g[O] = ks(G), g[O].c(), J(g[O], 1), g[O].m(h.parentNode, h));
        }
        for (Ve(), O = M.length; O < g.length; O += 1)
          H(O);
        Ke();
      }
      /*visibleMidpoint*/
      e[6] !== void 0 && !/*isHandleHovered*/
      e[7] ? y ? (y.p(Lt(e), L), L[0] & /*visibleMidpoint, isHandleHovered*/
      192 && J(y, 1)) : (y = Ss(Lt(e)), y.c(), J(y, 1), y.m(S.parentNode, S)) : y && (Ve(), ee(y, 1, 1, () => {
        y = null;
      }), Ke());
    },
    i(T) {
      if (!A) {
        J(v);
        for (let L = 0; L < M.length; L += 1)
          J(g[L]);
        J(y), A = !0;
      }
    },
    o(T) {
      ee(v), g = g.filter(Boolean);
      for (let L = 0; L < g.length; L += 1)
        ee(g[L]);
      ee(y), A = !1;
    },
    d(T) {
      T && (j(n), j(t), j(o), j(m), j(_), j(h), j(S)), b && b.d(), v && v.d(T), jn(g, T), y && y.d(T), P = !1, Le(w);
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
  let { shape: a } = n, { computedStyle: c } = n, { transform: u } = n, { viewportScale: p = 1 } = n, { svgEl: d } = n, m, _ = !1, h = null, S = [], A = !1;
  const P = () => t(7, _ = !0), w = () => t(7, _ = !1), b = (N) => {
    if (S.length > 0 || !s.some((F) => F.visible)) {
      t(6, m = void 0);
      return;
    }
    const [U, W] = u.elementToImage(N.offsetX, N.offsetY), D = (F) => Math.pow(F[0] - U, 2) + Math.pow(F[1] - W, 2), X = o.points.reduce((F, oe) => D(oe.point) < D(F.point) ? oe : F), V = s.filter((F) => F.visible).reduce((F, oe) => D(oe.point) < D(F.point) ? oe : F), Q = Math.pow(Qr / p, 2);
    D(X.point) < Q || D(V.point) < Q ? t(6, m = s.indexOf(V)) : t(6, m = void 0);
  }, v = () => {
    document.activeElement !== d && d.focus();
  }, M = () => {
    t(8, S = []), v();
  }, g = (N) => {
    t(7, _ = !0), N.preventDefault(), N.stopPropagation(), h = performance.now();
  }, H = (N) => (U) => {
    if (!h || performance.now() - h > Zr) return;
    const W = S.includes(N);
    if (U.metaKey || U.ctrlKey || U.shiftKey)
      W ? t(8, S = S.filter((D) => D !== N)) : t(8, S = [...S, N]);
    else {
      const D = qr(a, N, p);
      r("change", D), t(8, S = [N]);
    }
  }, y = (N) => () => {
    const U = o.points[N];
    if (U.type === "CORNER" || !U.inHandle && !U.outHandle) return;
    const W = o.points.map((V, Q) => {
      if (Q !== N) return V;
      const x = { ...V, locked: !0 }, F = U.inHandle || U.outHandle;
      if (!F) return V;
      const oe = F[0] - U.point[0], be = F[1] - U.point[1];
      if (Math.sqrt(oe ** 2 + be ** 2) === 0) return V;
      const Oe = [U.point[0] - oe, U.point[1] - be];
      return U.inHandle ? (x.inHandle = U.inHandle, x.outHandle = Oe) : U.outHandle && (x.outHandle = U.outHandle, x.inHandle = Oe), x;
    }), D = De(Ln(W, o.closed)), X = {
      ...a,
      geometry: { bounds: D, points: W, closed: o.closed }
    };
    r("change", X);
  }, T = (N, U, W) => {
    const D = N.geometry, [X, V] = W;
    let Q;
    if (U === "SHAPE")
      Q = D.points.map((F) => ({
        ...F,
        point: [F.point[0] + X, F.point[1] + V],
        inHandle: F.inHandle ? [F.inHandle[0] + X, F.inHandle[1] + V] : void 0,
        outHandle: F.outHandle ? [F.outHandle[0] + X, F.outHandle[1] + V] : void 0
      }));
    else if (U.startsWith("CORNER-")) {
      const F = parseInt(U.split("-")[1]);
      Q = D.points.map((oe, be) => be === F ? {
        ...oe,
        point: [oe.point[0] + X, oe.point[1] + V],
        inHandle: oe.inHandle ? [oe.inHandle[0] + X, oe.inHandle[1] + V] : void 0,
        outHandle: oe.outHandle ? [oe.outHandle[0] + X, oe.outHandle[1] + V] : void 0
      } : oe);
    } else if (U.startsWith("IN-") || U.startsWith("OUT-")) {
      const [F, oe] = U.split("-"), be = parseInt(oe);
      Q = D.points.map((te, Oe) => {
        if (Oe === be && te.type === "CURVE") {
          const ce = A ? !1 : te.locked, ve = { ...te, locked: ce };
          if (F === "IN" && te.inHandle) {
            if (ve.inHandle = [te.inHandle[0] + X, te.inHandle[1] + V], te.outHandle && ce) {
              const ue = ve.inHandle[0] - te.point[0], Xe = ve.inHandle[1] - te.point[1], pe = Math.sqrt(ue ** 2 + Xe ** 2), je = Math.sqrt((te.outHandle[0] - te.point[0]) ** 2 + (te.outHandle[1] - te.point[1]) ** 2);
              pe > 0 && (ve.outHandle = [
                te.point[0] - ue / pe * je,
                te.point[1] - Xe / pe * je
              ]);
            }
          } else if (F === "OUT" && te.outHandle && (ve.outHandle = [te.outHandle[0] + X, te.outHandle[1] + V], te.inHandle && ce)) {
            const ue = ve.outHandle[0] - te.point[0], Xe = ve.outHandle[1] - te.point[1], pe = Math.sqrt(ue ** 2 + Xe ** 2), je = Math.sqrt((te.inHandle[0] - te.point[0]) ** 2 + (te.inHandle[1] - te.point[1]) ** 2);
            pe > 0 && (ve.inHandle = [
              te.point[0] - ue / pe * je,
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
      ...N,
      geometry: { bounds: x, points: Q, closed: D.closed }
    };
  }, L = (N) => async (U) => {
    U.stopPropagation();
    const W = [
      ...o.points.slice(0, N + 1),
      {
        type: "CORNER",
        point: s[N].point
      },
      ...o.points.slice(N + 1)
    ], D = De(Ln(W, o.closed));
    r("change", {
      ...a,
      geometry: { points: W, bounds: D, closed: o.closed }
    }), await Kn();
    const X = [...document.querySelectorAll(".a9s-handle")][N + 1];
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
  }, O = () => {
    const N = o.closed ? 3 : 2;
    if (o.points.length - S.length < N) return;
    const U = o.points.filter((D, X) => !S.includes(X)), W = De(Ln(U, o.closed));
    r("change", {
      ...a,
      geometry: {
        closed: a.geometry.closed,
        bounds: W,
        points: U
      }
    }), t(8, S = []);
  };
  on(() => {
    const N = (W) => {
      W.altKey && !A && (A = !0), (W.key === "Delete" || W.key === "Backspace") && O();
    }, U = (W) => {
      !W.altKey && A && (A = !1);
    };
    return d.addEventListener("pointermove", b), window.addEventListener("keydown", N), window.addEventListener("keyup", U), () => {
      d.removeEventListener("pointermove", b), window.removeEventListener("keydown", N), window.removeEventListener("keyup", U);
    };
  });
  const G = `polygon-mask-${Math.random().toString(36).substring(2, 12)}`;
  function R(N) {
    he.call(this, e, N);
  }
  function I(N) {
    he.call(this, e, N);
  }
  function Y(N) {
    he.call(this, e, N);
  }
  return e.$$set = (N) => {
    "shape" in N && t(0, a = N.shape), "computedStyle" in N && t(1, c = N.computedStyle), "transform" in N && t(2, u = N.transform), "viewportScale" in N && t(3, p = N.viewportScale), "svgEl" in N && t(4, d = N.svgEl);
  }, e.$$.update = () => {
    e.$$.dirty[0] & /*shape*/
    1 && t(5, o = a.geometry), e.$$.dirty[0] & /*geom, viewportScale*/
    40 && t(11, s = fn ? [] : o.points.reduce(
      (N, U, W) => {
        const D = W === o.points.length - 1 ? (
          // Last point
          o.closed ? o.points[0] : void 0
        ) : o.points[W + 1];
        if (!D) return N;
        const [X, V] = Gr(U, D), x = Math.sqrt(Math.pow(D.point[0] - X, 2) + Math.pow(D.point[1] - V, 2)) > Jr / p;
        return [...N, { point: [X, V], visible: x }];
      },
      []
    )), e.$$.dirty[0] & /*geom*/
    32 && t(10, l = wl(o)), e.$$.dirty[0] & /*geom, viewportScale*/
    40 && t(9, f = vn(o.bounds, Bt / p));
  }, [
    a,
    c,
    u,
    p,
    d,
    o,
    m,
    _,
    S,
    f,
    l,
    s,
    P,
    w,
    M,
    g,
    H,
    y,
    T,
    L,
    G,
    R,
    I,
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
  var P, w;
  let n, t, o, s, l, f, r, a, c, u, p, d, m, _, h, S, A;
  return _ = new Ge({
    props: {
      class: "a9s-corner-top",
      x: (
        /*points*/
        ((P = e[5][0]) == null ? void 0 : P[0]) ?? /*center*/
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
      n = q("defs"), t = q("mask"), o = q("rect"), a = q("path"), c = ne(), u = q("path"), p = ne(), d = q("path"), m = ne(), _e(_.$$.fragment), i(o, "x", s = /*mask*/
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
    m(b, v) {
      B(b, n, v), Z(n, t), Z(t, o), Z(t, a), B(b, c, v), B(b, u, v), B(b, p, v), B(b, d, v), B(b, m, v), de(_, b, v), h = !0, S || (A = [
        $(u, "pointerdown", function() {
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
      ], S = !0);
    },
    p(b, v) {
      var g, H;
      e = b, (!h || v & /*mask*/
      128 && s !== (s = /*mask*/
      e[7].x)) && i(o, "x", s), (!h || v & /*mask*/
      128 && l !== (l = /*mask*/
      e[7].y)) && i(o, "y", l), (!h || v & /*mask*/
      128 && f !== (f = /*mask*/
      e[7].w)) && i(o, "width", f), (!h || v & /*mask*/
      128 && r !== (r = /*mask*/
      e[7].h)) && i(o, "height", r), (!h || v & /*pathString*/
      256) && i(
        a,
        "d",
        /*pathString*/
        e[8]
      ), (!h || v & /*pathString*/
      256) && i(
        u,
        "d",
        /*pathString*/
        e[8]
      ), (!h || v & /*computedStyle*/
      2) && i(
        d,
        "style",
        /*computedStyle*/
        e[1]
      ), (!h || v & /*pathString*/
      256) && i(
        d,
        "d",
        /*pathString*/
        e[8]
      );
      const M = {};
      v & /*points, center*/
      96 && (M.x = /*points*/
      ((g = e[5][0]) == null ? void 0 : g[0]) ?? /*center*/
      e[6].x), v & /*points, center, outerRadius*/
      608 && (M.y = /*points*/
      ((H = e[5][0]) == null ? void 0 : H[1]) ?? /*center*/
      e[6].y - /*outerRadius*/
      e[9]), v & /*viewportScale*/
      8 && (M.scale = /*viewportScale*/
      e[3]), _.$set(M);
    },
    i(b) {
      h || (J(_.$$.fragment, b), h = !0);
    },
    o(b) {
      ee(_.$$.fragment, b), h = !1;
    },
    d(b) {
      b && (j(n), j(c), j(u), j(p), j(d), j(m)), me(_, b), S = !1, Le(A);
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
  let o, s, l, f, r, a, c, { shape: u } = n, { computedStyle: p } = n, { transform: d } = n, { viewportScale: m = 1 } = n, { svgEl: _ } = n;
  const h = (b, v, M) => {
    const g = b.geometry, [H, y] = M;
    let T;
    if (v === "SHAPE")
      T = g.points.map(([L, O]) => [L + H, O + y]);
    else if (v === "SCALE") {
      const L = (g.bounds.minX + g.bounds.maxX) / 2, O = (g.bounds.minY + g.bounds.maxY) / 2, G = g.points[0], R = Math.sqrt(Math.pow(G[0] - L, 2) + Math.pow(G[1] - O, 2)), I = G[1] + y, Y = Math.sqrt(Math.pow(G[0] - L, 2) + Math.pow(I - O, 2)), N = R > 0 ? Y / R : 1;
      T = g.points.map(([U, W]) => [L + (U - L) * N, O + (W - O) * N]);
    } else
      T = g.points;
    return {
      ...b,
      geometry: {
        bounds: De(T),
        points: T
      }
    };
  }, S = `star-mask-${Math.random().toString(36).substring(2, 12)}`;
  function A(b) {
    he.call(this, e, b);
  }
  function P(b) {
    he.call(this, e, b);
  }
  function w(b) {
    he.call(this, e, b);
  }
  return e.$$set = (b) => {
    "shape" in b && t(0, u = b.shape), "computedStyle" in b && t(1, p = b.computedStyle), "transform" in b && t(2, d = b.transform), "viewportScale" in b && t(3, m = b.viewportScale), "svgEl" in b && t(4, _ = b.svgEl);
  }, e.$$.update = () => {
    e.$$.dirty & /*shape*/
    1 && t(12, o = u.geometry), e.$$.dirty & /*geom*/
    4096 && t(5, s = o.points), e.$$.dirty & /*geom*/
    4096 && t(6, l = {
      x: (o.bounds.minX + o.bounds.maxX) / 2,
      y: (o.bounds.minY + o.bounds.maxY) / 2
    }), e.$$.dirty & /*points*/
    32 && t(13, f = s.filter((b, v) => v % 2 === 0)), e.$$.dirty & /*outerPoints, center*/
    8256 && t(9, r = f.length > 0 ? Math.sqrt(Math.pow(f[0][0] - l.x, 2) + Math.pow(f[0][1] - l.y, 2)) : 0), e.$$.dirty & /*points*/
    32 && t(8, a = s.length > 0 ? `M ${s[0][0]},${s[0][1]}` + s.slice(1).map(([b, v]) => ` L ${b},${v}`).join("") + " Z" : ""), e.$$.dirty & /*geom, viewportScale*/
    4104 && t(7, c = vn(o.bounds, 2 / m));
  }, [
    u,
    p,
    d,
    m,
    _,
    s,
    l,
    c,
    a,
    r,
    h,
    S,
    o,
    f,
    A,
    P,
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
      B(o, n, s), t && t.m(n, null);
    },
    p(o, [s]) {
      /*pathString*/
      o[0] ? t ? t.p(o, s) : (t = Ts(o), t.c(), t.m(n, null)) : t && (t.d(1), t = null);
    },
    i: Se,
    o: Se,
    d(o) {
      o && j(n), t && t.d();
    }
  };
}
const Ms = 5, Ps = 0.382;
function lf(e, n, t) {
  let o, s;
  const l = xe();
  let { addEventListener: f } = n, { drawingMode: r } = n, { transform: a } = n, { viewportScale: c } = n, u, p = 0, d;
  const m = (P, w, b, v) => {
    const M = [], g = Math.PI / Ms;
    for (let H = 0; H < Ms * 2; H++) {
      const y = H % 2 === 0 ? b : v, T = H * g - Math.PI / 2;
      M.push([P + y * Math.cos(T), w + y * Math.sin(T)]);
    }
    return M;
  }, _ = (P) => {
    const w = P;
    d = performance.now(), r === "drag" && (t(5, u = a.elementToImage(w.offsetX, w.offsetY)), t(6, p = 1));
  }, h = (P) => {
    const w = P;
    if (u) {
      const b = a.elementToImage(w.offsetX, w.offsetY);
      t(6, p = Math.sqrt(Math.pow(b[0] - u[0], 2) + Math.pow(b[1] - u[1], 2)));
    }
  }, S = (P) => {
    const w = P, b = performance.now() - d;
    if (r === "click") {
      if (b > 300) return;
      u ? A() : (t(5, u = a.elementToImage(w.offsetX, w.offsetY)), t(6, p = 1));
    } else u && (b > 300 || p > 10 ? (w.stopPropagation(), A()) : (t(5, u = void 0), t(6, p = 0)));
  }, A = () => {
    if (p > 10 && u) {
      const P = p * Ps, w = m(u[0], u[1], p, P), b = {
        type: Pe.POLYGON,
        geometry: { bounds: De(w), points: w }
      };
      l("create", b);
    }
    t(5, u = void 0), t(6, p = 0);
  };
  return on(() => {
    f("pointerdown", _), f("pointermove", h), f("pointerup", S, !0);
  }), e.$$set = (P) => {
    "addEventListener" in P && t(1, f = P.addEventListener), "drawingMode" in P && t(2, r = P.drawingMode), "transform" in P && t(3, a = P.transform), "viewportScale" in P && t(4, c = P.viewportScale);
  }, e.$$.update = () => {
    e.$$.dirty & /*center, outerRadius*/
    96 && t(7, o = u ? m(u[0], u[1], p, p * Ps) : []), e.$$.dirty & /*starPoints*/
    128 && t(0, s = o.length > 0 ? `M ${o[0][0]},${o[0][1]}` + o.slice(1).map(([P, w]) => ` L ${P},${w}`).join("") + " Z" : "");
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
  let n, t, o, s, l, f, r, a, c, u, p, d, m, _, h, S, A, P, w, b, v, M, g, H, y, T, L, O, G, R, I, Y, N, U, W, D, X, V, Q, x, F, oe, be, te, Oe, ce, ve, ue, Xe, pe, je, ke, K, Fe, z;
  return ce = new Ge({
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
    se(
      /*grab*/
      e[12]("TOP_LEFT")
    ) && e[12]("TOP_LEFT").apply(this, arguments);
  }), ue = new Ge({
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
      n = q("defs"), t = q("mask"), o = q("rect"), a = q("rect"), m = ne(), _ = q("rect"), w = ne(), b = q("rect"), y = ne(), T = q("rect"), R = ne(), I = q("rect"), W = ne(), D = q("rect"), x = ne(), F = q("rect"), Oe = ne(), _e(ce.$$.fragment), ve = ne(), _e(ue.$$.fragment), Xe = ne(), _e(pe.$$.fragment), je = ne(), _e(ke.$$.fragment), i(o, "class", "rect-mask-bg svelte-1njczvj"), i(o, "x", s = /*mask*/
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
      ), i(t, "class", "a9s-rectangle-editor-mask svelte-1njczvj"), i(_, "class", "a9s-outer"), i(_, "mask", `url(#${/*maskId*/
      e[8]})`), i(_, "x", h = /*geom*/
      e[5].x), i(_, "y", S = /*geom*/
      e[5].y), i(_, "width", A = /*geom*/
      e[5].w), i(_, "height", P = /*geom*/
      e[5].h), i(b, "class", "a9s-inner a9s-shape-handle"), i(
        b,
        "style",
        /*computedStyle*/
        e[1]
      ), i(b, "x", v = /*geom*/
      e[5].x), i(b, "y", M = /*geom*/
      e[5].y), i(b, "width", g = /*geom*/
      e[5].w), i(b, "height", H = /*geom*/
      e[5].h), i(T, "class", "a9s-edge-handle a9s-edge-handle-top"), i(T, "x", L = /*geom*/
      e[5].x), i(T, "y", O = /*geom*/
      e[5].y), i(T, "height", 1), i(T, "width", G = /*geom*/
      e[5].w), i(I, "class", "a9s-edge-handle a9s-edge-handle-right"), i(I, "x", Y = /*geom*/
      e[5].x + /*geom*/
      e[5].w), i(I, "y", N = /*geom*/
      e[5].y), i(I, "height", U = /*geom*/
      e[5].h), i(I, "width", 1), i(D, "class", "a9s-edge-handle a9s-edge-handle-bottom"), i(D, "x", X = /*geom*/
      e[5].x), i(D, "y", V = /*geom*/
      e[5].y + /*geom*/
      e[5].h), i(D, "height", 1), i(D, "width", Q = /*geom*/
      e[5].w), i(F, "class", "a9s-edge-handle a9s-edge-handle-left"), i(F, "x", oe = /*geom*/
      e[5].x), i(F, "y", be = /*geom*/
      e[5].y), i(F, "height", te = /*geom*/
      e[5].h), i(F, "width", 1);
    },
    m(C, k) {
      B(C, n, k), Z(n, t), Z(t, o), Z(t, a), B(C, m, k), B(C, _, k), B(C, w, k), B(C, b, k), B(C, y, k), B(C, T, k), B(C, R, k), B(C, I, k), B(C, W, k), B(C, D, k), B(C, x, k), B(C, F, k), B(C, Oe, k), de(ce, C, k), B(C, ve, k), de(ue, C, k), B(C, Xe, k), de(pe, C, k), B(C, je, k), de(ke, C, k), K = !0, Fe || (z = [
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
        $(T, "pointerdown", function() {
          se(
            /*grab*/
            e[12]("TOP")
          ) && e[12]("TOP").apply(this, arguments);
        }),
        $(I, "pointerdown", function() {
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
    p(C, k) {
      e = C, (!K || k & /*mask*/
      64 && s !== (s = /*mask*/
      e[6].x)) && i(o, "x", s), (!K || k & /*mask*/
      64 && l !== (l = /*mask*/
      e[6].y)) && i(o, "y", l), (!K || k & /*mask*/
      64 && f !== (f = /*mask*/
      e[6].w)) && i(o, "width", f), (!K || k & /*mask*/
      64 && r !== (r = /*mask*/
      e[6].h)) && i(o, "height", r), (!K || k & /*geom*/
      32 && c !== (c = /*geom*/
      e[5].x)) && i(a, "x", c), (!K || k & /*geom*/
      32 && u !== (u = /*geom*/
      e[5].y)) && i(a, "y", u), (!K || k & /*geom*/
      32 && p !== (p = /*geom*/
      e[5].w)) && i(a, "width", p), (!K || k & /*geom*/
      32 && d !== (d = /*geom*/
      e[5].h)) && i(a, "height", d), (!K || k & /*geom*/
      32 && h !== (h = /*geom*/
      e[5].x)) && i(_, "x", h), (!K || k & /*geom*/
      32 && S !== (S = /*geom*/
      e[5].y)) && i(_, "y", S), (!K || k & /*geom*/
      32 && A !== (A = /*geom*/
      e[5].w)) && i(_, "width", A), (!K || k & /*geom*/
      32 && P !== (P = /*geom*/
      e[5].h)) && i(_, "height", P), (!K || k & /*computedStyle*/
      2) && i(
        b,
        "style",
        /*computedStyle*/
        e[1]
      ), (!K || k & /*geom*/
      32 && v !== (v = /*geom*/
      e[5].x)) && i(b, "x", v), (!K || k & /*geom*/
      32 && M !== (M = /*geom*/
      e[5].y)) && i(b, "y", M), (!K || k & /*geom*/
      32 && g !== (g = /*geom*/
      e[5].w)) && i(b, "width", g), (!K || k & /*geom*/
      32 && H !== (H = /*geom*/
      e[5].h)) && i(b, "height", H), (!K || k & /*geom*/
      32 && L !== (L = /*geom*/
      e[5].x)) && i(T, "x", L), (!K || k & /*geom*/
      32 && O !== (O = /*geom*/
      e[5].y)) && i(T, "y", O), (!K || k & /*geom*/
      32 && G !== (G = /*geom*/
      e[5].w)) && i(T, "width", G), (!K || k & /*geom*/
      32 && Y !== (Y = /*geom*/
      e[5].x + /*geom*/
      e[5].w)) && i(I, "x", Y), (!K || k & /*geom*/
      32 && N !== (N = /*geom*/
      e[5].y)) && i(I, "y", N), (!K || k & /*geom*/
      32 && U !== (U = /*geom*/
      e[5].h)) && i(I, "height", U), (!K || k & /*geom*/
      32 && X !== (X = /*geom*/
      e[5].x)) && i(D, "x", X), (!K || k & /*geom*/
      32 && V !== (V = /*geom*/
      e[5].y + /*geom*/
      e[5].h)) && i(D, "y", V), (!K || k & /*geom*/
      32 && Q !== (Q = /*geom*/
      e[5].w)) && i(D, "width", Q), (!K || k & /*geom*/
      32 && oe !== (oe = /*geom*/
      e[5].x)) && i(F, "x", oe), (!K || k & /*geom*/
      32 && be !== (be = /*geom*/
      e[5].y)) && i(F, "y", be), (!K || k & /*geom*/
      32 && te !== (te = /*geom*/
      e[5].h)) && i(F, "height", te);
      const re = {};
      k & /*geom*/
      32 && (re.x = /*geom*/
      e[5].x), k & /*geom*/
      32 && (re.y = /*geom*/
      e[5].y), k & /*viewportScale*/
      8 && (re.scale = /*viewportScale*/
      e[3]), ce.$set(re);
      const ge = {};
      k & /*geom*/
      32 && (ge.x = /*geom*/
      e[5].x + /*geom*/
      e[5].w), k & /*geom*/
      32 && (ge.y = /*geom*/
      e[5].y), k & /*viewportScale*/
      8 && (ge.scale = /*viewportScale*/
      e[3]), ue.$set(ge);
      const Ee = {};
      k & /*geom*/
      32 && (Ee.x = /*geom*/
      e[5].x + /*geom*/
      e[5].w), k & /*geom*/
      32 && (Ee.y = /*geom*/
      e[5].y + /*geom*/
      e[5].h), k & /*viewportScale*/
      8 && (Ee.scale = /*viewportScale*/
      e[3]), pe.$set(Ee);
      const le = {};
      k & /*geom*/
      32 && (le.x = /*geom*/
      e[5].x), k & /*geom*/
      32 && (le.y = /*geom*/
      e[5].y + /*geom*/
      e[5].h), k & /*viewportScale*/
      8 && (le.scale = /*viewportScale*/
      e[3]), ke.$set(le);
    },
    i(C) {
      K || (J(ce.$$.fragment, C), J(ue.$$.fragment, C), J(pe.$$.fragment, C), J(ke.$$.fragment, C), K = !0);
    },
    o(C) {
      ee(ce.$$.fragment, C), ee(ue.$$.fragment, C), ee(pe.$$.fragment, C), ee(ke.$$.fragment, C), K = !1;
    },
    d(C) {
      C && (j(n), j(m), j(_), j(w), j(b), j(y), j(T), j(R), j(I), j(W), j(D), j(x), j(F), j(Oe), j(ve), j(Xe), j(je)), me(ce, C), me(ue, C), me(pe, C), me(ke, C), Fe = !1, Le(z);
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
function cf(e, n, t) {
  let o, s, { shape: l } = n, { computedStyle: f } = n, { transform: r } = n, { viewportScale: a = 1 } = n, { svgEl: c } = n;
  const u = (h, S, A) => {
    const P = h.geometry.bounds;
    let [w, b] = [P.minX, P.minY], [v, M] = [P.maxX, P.maxY];
    const [g, H] = A;
    if (S === "SHAPE")
      w += g, v += g, b += H, M += H;
    else {
      switch (S) {
        case "TOP":
        case "TOP_LEFT":
        case "TOP_RIGHT": {
          b += H;
          break;
        }
        case "BOTTOM":
        case "BOTTOM_LEFT":
        case "BOTTOM_RIGHT": {
          M += H;
          break;
        }
      }
      switch (S) {
        case "LEFT":
        case "TOP_LEFT":
        case "BOTTOM_LEFT": {
          w += g;
          break;
        }
        case "RIGHT":
        case "TOP_RIGHT":
        case "BOTTOM_RIGHT": {
          v += g;
          break;
        }
      }
    }
    const y = Math.min(w, v), T = Math.min(b, M), L = Math.abs(v - w), O = Math.abs(M - b);
    return {
      ...h,
      geometry: {
        x: y,
        y: T,
        w: L,
        h: O,
        bounds: {
          minX: y,
          minY: T,
          maxX: y + L,
          maxY: T + O
        }
      }
    };
  }, p = `rect-mask-${Math.random().toString(36).substring(2, 12)}`;
  function d(h) {
    he.call(this, e, h);
  }
  function m(h) {
    he.call(this, e, h);
  }
  function _(h) {
    he.call(this, e, h);
  }
  return e.$$set = (h) => {
    "shape" in h && t(0, l = h.shape), "computedStyle" in h && t(1, f = h.computedStyle), "transform" in h && t(2, r = h.transform), "viewportScale" in h && t(3, a = h.viewportScale), "svgEl" in h && t(4, c = h.svgEl);
  }, e.$$.update = () => {
    e.$$.dirty & /*shape*/
    1 && t(5, o = l.geometry), e.$$.dirty & /*geom, viewportScale*/
    40 && t(6, s = vn(o.bounds, 2 / a));
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
    m,
    _
  ];
}
class uf extends Re {
  constructor(n) {
    super(), Ce(this, n, cf, af, Ie, {
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
      B(t, n, o);
    },
    p: Se,
    i: Se,
    o: Se,
    d(t) {
      t && j(n);
    }
  };
}
function hf(e, n, t) {
  const o = xe();
  let { addEventListener: s } = n, { drawingMode: l } = n, { transform: f } = n, { viewportScale: r = 1 } = n, a = 0;
  const c = (p) => {
    a = performance.now();
  }, u = (p) => {
    const d = p;
    if (performance.now() - a > 400) return;
    const [_, h] = f.elementToImage(d.offsetX, d.offsetY), S = pn.fontSize / Math.max(r, 0.01), A = S * 20, P = S * 1.2, w = {
      type: Pe.RECTANGLE,
      geometry: {
        bounds: {
          minX: _,
          minY: h - S,
          maxX: _ + A,
          maxY: h + S * 0.2
        },
        x: _,
        y: h,
        w: A,
        h: P
      },
      properties: { toolType: "text" }
    };
    o("create", w);
  };
  return on(() => {
    s("pointerdown", c), s("pointerup", u, !0);
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
  e.registerDrawingTool("ellipse", yr), e.registerShapeEditor(Pe.ELLIPSE, mr), e.registerDrawingTool("line", Tr), e.registerDrawingTool("arrow", yi), e.registerShapeEditor(Pe.LINE, Er), e.registerDrawingTool("path", Br), e.registerDrawingTool("distance", vi), e.registerShapeEditor(Pe.POLYLINE, xr), e.registerDrawingTool("star", rf), e.registerShapeEditor(Pe.POLYGON, of), e.registerDrawingTool("text", df), e.registerShapeEditor(Pe.RECTANGLE, uf);
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
