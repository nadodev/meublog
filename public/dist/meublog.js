var tt = !1, nt = !1, K = [], rt = -1;
function ni(e) {
  ri(e);
}
function ri(e) {
  K.includes(e) || K.push(e), ii();
}
function xn(e) {
  let t = K.indexOf(e);
  t !== -1 && t > rt && K.splice(t, 1);
}
function ii() {
  !nt && !tt && (tt = !0, queueMicrotask(si));
}
function si() {
  tt = !1, nt = !0;
  for (let e = 0; e < K.length; e++)
    K[e](), rt = e;
  K.length = 0, rt = -1, nt = !1;
}
var te, G, ne, wn, it = !0;
function oi(e) {
  it = !1, e(), it = !0;
}
function ai(e) {
  te = e.reactive, ne = e.release, G = (t) => e.effect(t, { scheduler: (n) => {
    it ? ni(n) : n();
  } }), wn = e.raw;
}
function Vt(e) {
  G = e;
}
function ci(e) {
  let t = () => {
  };
  return [(r) => {
    let i = G(r);
    return e._x_effects || (e._x_effects = /* @__PURE__ */ new Set(), e._x_runEffects = () => {
      e._x_effects.forEach((s) => s());
    }), e._x_effects.add(i), t = () => {
      i !== void 0 && (e._x_effects.delete(i), ne(i));
    }, i;
  }, () => {
    t();
  }];
}
function En(e, t) {
  let n = !0, r, i = G(() => {
    let s = e();
    JSON.stringify(s), n ? r = s : queueMicrotask(() => {
      t(s, r), r = s;
    }), n = !1;
  });
  return () => ne(i);
}
var Sn = [], An = [], On = [];
function ui(e) {
  On.push(e);
}
function St(e, t) {
  typeof t == "function" ? (e._x_cleanups || (e._x_cleanups = []), e._x_cleanups.push(t)) : (t = e, An.push(t));
}
function vn(e) {
  Sn.push(e);
}
function Rn(e, t, n) {
  e._x_attributeCleanups || (e._x_attributeCleanups = {}), e._x_attributeCleanups[t] || (e._x_attributeCleanups[t] = []), e._x_attributeCleanups[t].push(n);
}
function Tn(e, t) {
  e._x_attributeCleanups && Object.entries(e._x_attributeCleanups).forEach(([n, r]) => {
    (t === void 0 || t.includes(n)) && (r.forEach((i) => i()), delete e._x_attributeCleanups[n]);
  });
}
function li(e) {
  if (e._x_cleanups)
    for (; e._x_cleanups.length; )
      e._x_cleanups.pop()();
}
var At = new MutationObserver(Tt), Ot = !1;
function vt() {
  At.observe(document, { subtree: !0, childList: !0, attributes: !0, attributeOldValue: !0 }), Ot = !0;
}
function Cn() {
  fi(), At.disconnect(), Ot = !1;
}
var oe = [];
function fi() {
  let e = At.takeRecords();
  oe.push(() => e.length > 0 && Tt(e));
  let t = oe.length;
  queueMicrotask(() => {
    if (oe.length === t)
      for (; oe.length > 0; )
        oe.shift()();
  });
}
function O(e) {
  if (!Ot)
    return e();
  Cn();
  let t = e();
  return vt(), t;
}
var Rt = !1, Ne = [];
function di() {
  Rt = !0;
}
function pi() {
  Rt = !1, Tt(Ne), Ne = [];
}
function Tt(e) {
  if (Rt) {
    Ne = Ne.concat(e);
    return;
  }
  let t = /* @__PURE__ */ new Set(), n = /* @__PURE__ */ new Set(), r = /* @__PURE__ */ new Map(), i = /* @__PURE__ */ new Map();
  for (let s = 0; s < e.length; s++)
    if (!e[s].target._x_ignoreMutationObserver && (e[s].type === "childList" && (e[s].addedNodes.forEach((o) => o.nodeType === 1 && t.add(o)), e[s].removedNodes.forEach((o) => o.nodeType === 1 && n.add(o))), e[s].type === "attributes")) {
      let o = e[s].target, a = e[s].attributeName, c = e[s].oldValue, l = () => {
        r.has(o) || r.set(o, []), r.get(o).push({ name: a, value: o.getAttribute(a) });
      }, d = () => {
        i.has(o) || i.set(o, []), i.get(o).push(a);
      };
      o.hasAttribute(a) && c === null ? l() : o.hasAttribute(a) ? (d(), l()) : d();
    }
  i.forEach((s, o) => {
    Tn(o, s);
  }), r.forEach((s, o) => {
    Sn.forEach((a) => a(o, s));
  });
  for (let s of n)
    t.has(s) || An.forEach((o) => o(s));
  t.forEach((s) => {
    s._x_ignoreSelf = !0, s._x_ignore = !0;
  });
  for (let s of t)
    n.has(s) || s.isConnected && (delete s._x_ignoreSelf, delete s._x_ignore, On.forEach((o) => o(s)), s._x_ignore = !0, s._x_ignoreSelf = !0);
  t.forEach((s) => {
    delete s._x_ignoreSelf, delete s._x_ignore;
  }), t = null, n = null, r = null, i = null;
}
function Pn(e) {
  return me(Z(e));
}
function _e(e, t, n) {
  return e._x_dataStack = [t, ...Z(n || e)], () => {
    e._x_dataStack = e._x_dataStack.filter((r) => r !== t);
  };
}
function Z(e) {
  return e._x_dataStack ? e._x_dataStack : typeof ShadowRoot == "function" && e instanceof ShadowRoot ? Z(e.host) : e.parentNode ? Z(e.parentNode) : [];
}
function me(e) {
  return new Proxy({ objects: e }, hi);
}
var hi = {
  ownKeys({ objects: e }) {
    return Array.from(
      new Set(e.flatMap((t) => Object.keys(t)))
    );
  },
  has({ objects: e }, t) {
    return t == Symbol.unscopables ? !1 : e.some(
      (n) => Object.prototype.hasOwnProperty.call(n, t) || Reflect.has(n, t)
    );
  },
  get({ objects: e }, t, n) {
    return t == "toJSON" ? _i : Reflect.get(
      e.find(
        (r) => Reflect.has(r, t)
      ) || {},
      t,
      n
    );
  },
  set({ objects: e }, t, n, r) {
    const i = e.find(
      (o) => Object.prototype.hasOwnProperty.call(o, t)
    ) || e[e.length - 1], s = Object.getOwnPropertyDescriptor(i, t);
    return s != null && s.set && (s != null && s.get) ? Reflect.set(i, t, n, r) : Reflect.set(i, t, n);
  }
};
function _i() {
  return Reflect.ownKeys(this).reduce((t, n) => (t[n] = Reflect.get(this, n), t), {});
}
function Nn(e) {
  let t = (r) => typeof r == "object" && !Array.isArray(r) && r !== null, n = (r, i = "") => {
    Object.entries(Object.getOwnPropertyDescriptors(r)).forEach(([s, { value: o, enumerable: a }]) => {
      if (a === !1 || o === void 0 || typeof o == "object" && o !== null && o.__v_skip)
        return;
      let c = i === "" ? s : `${i}.${s}`;
      typeof o == "object" && o !== null && o._x_interceptor ? r[s] = o.initialize(e, c, s) : t(o) && o !== r && !(o instanceof Element) && n(o, c);
    });
  };
  return n(e);
}
function Fn(e, t = () => {
}) {
  let n = {
    initialValue: void 0,
    _x_interceptor: !0,
    initialize(r, i, s) {
      return e(this.initialValue, () => mi(r, i), (o) => st(r, i, o), i, s);
    }
  };
  return t(n), (r) => {
    if (typeof r == "object" && r !== null && r._x_interceptor) {
      let i = n.initialize.bind(n);
      n.initialize = (s, o, a) => {
        let c = r.initialize(s, o, a);
        return n.initialValue = c, i(s, o, a);
      };
    } else
      n.initialValue = r;
    return n;
  };
}
function mi(e, t) {
  return t.split(".").reduce((n, r) => n[r], e);
}
function st(e, t, n) {
  if (typeof t == "string" && (t = t.split(".")), t.length === 1)
    e[t[0]] = n;
  else {
    if (t.length === 0)
      throw error;
    return e[t[0]] || (e[t[0]] = {}), st(e[t[0]], t.slice(1), n);
  }
}
var Mn = {};
function F(e, t) {
  Mn[e] = t;
}
function ot(e, t) {
  return Object.entries(Mn).forEach(([n, r]) => {
    let i = null;
    function s() {
      if (i)
        return i;
      {
        let [o, a] = kn(t);
        return i = { interceptor: Fn, ...o }, St(t, a), i;
      }
    }
    Object.defineProperty(e, `$${n}`, {
      get() {
        return r(t, s());
      },
      enumerable: !1
    });
  }), e;
}
function yi(e, t, n, ...r) {
  try {
    return n(...r);
  } catch (i) {
    pe(i, e, t);
  }
}
function pe(e, t, n = void 0) {
  e = Object.assign(
    e ?? { message: "No error message given." },
    { el: t, expression: n }
  ), console.warn(`Alpine Expression Error: ${e.message}

${n ? 'Expression: "' + n + `"

` : ""}`, t), setTimeout(() => {
    throw e;
  }, 0);
}
var Re = !0;
function Ln(e) {
  let t = Re;
  Re = !1;
  let n = e();
  return Re = t, n;
}
function J(e, t, n = {}) {
  let r;
  return v(e, t)((i) => r = i, n), r;
}
function v(...e) {
  return jn(...e);
}
var jn = In;
function gi(e) {
  jn = e;
}
function In(e, t) {
  let n = {};
  ot(n, e);
  let r = [n, ...Z(e)], i = typeof t == "function" ? bi(r, t) : wi(r, t, e);
  return yi.bind(null, e, t, i);
}
function bi(e, t) {
  return (n = () => {
  }, { scope: r = {}, params: i = [] } = {}) => {
    let s = t.apply(me([r, ...e]), i);
    Fe(n, s);
  };
}
var Je = {};
function xi(e, t) {
  if (Je[e])
    return Je[e];
  let n = Object.getPrototypeOf(async function() {
  }).constructor, r = /^[\n\s]*if.*\(.*\)/.test(e.trim()) || /^(let|const)\s/.test(e.trim()) ? `(async()=>{ ${e} })()` : e, s = (() => {
    try {
      let o = new n(
        ["__self", "scope"],
        `with (scope) { __self.result = ${r} }; __self.finished = true; return __self.result;`
      );
      return Object.defineProperty(o, "name", {
        value: `[Alpine] ${e}`
      }), o;
    } catch (o) {
      return pe(o, t, e), Promise.resolve();
    }
  })();
  return Je[e] = s, s;
}
function wi(e, t, n) {
  let r = xi(t, n);
  return (i = () => {
  }, { scope: s = {}, params: o = [] } = {}) => {
    r.result = void 0, r.finished = !1;
    let a = me([s, ...e]);
    if (typeof r == "function") {
      let c = r(r, a).catch((l) => pe(l, n, t));
      r.finished ? (Fe(i, r.result, a, o, n), r.result = void 0) : c.then((l) => {
        Fe(i, l, a, o, n);
      }).catch((l) => pe(l, n, t)).finally(() => r.result = void 0);
    }
  };
}
function Fe(e, t, n, r, i) {
  if (Re && typeof t == "function") {
    let s = t.apply(n, r);
    s instanceof Promise ? s.then((o) => Fe(e, o, n, r)).catch((o) => pe(o, i, t)) : e(s);
  } else
    typeof t == "object" && t instanceof Promise ? t.then((s) => e(s)) : e(t);
}
var Ct = "x-";
function re(e = "") {
  return Ct + e;
}
function Ei(e) {
  Ct = e;
}
var Me = {};
function A(e, t) {
  return Me[e] = t, {
    before(n) {
      if (!Me[n]) {
        console.warn(String.raw`Cannot find directive \`${n}\`. \`${e}\` will use the default order of execution`);
        return;
      }
      const r = z.indexOf(n);
      z.splice(r >= 0 ? r : z.indexOf("DEFAULT"), 0, e);
    }
  };
}
function Si(e) {
  return Object.keys(Me).includes(e);
}
function Pt(e, t, n) {
  if (t = Array.from(t), e._x_virtualDirectives) {
    let s = Object.entries(e._x_virtualDirectives).map(([a, c]) => ({ name: a, value: c })), o = Bn(s);
    s = s.map((a) => o.find((c) => c.name === a.name) ? {
      name: `x-bind:${a.name}`,
      value: `"${a.value}"`
    } : a), t = t.concat(s);
  }
  let r = {};
  return t.map(Hn((s, o) => r[s] = o)).filter(zn).map(vi(r, n)).sort(Ri).map((s) => Oi(e, s));
}
function Bn(e) {
  return Array.from(e).map(Hn()).filter((t) => !zn(t));
}
var at = !1, le = /* @__PURE__ */ new Map(), Dn = Symbol();
function Ai(e) {
  at = !0;
  let t = Symbol();
  Dn = t, le.set(t, []);
  let n = () => {
    for (; le.get(t).length; )
      le.get(t).shift()();
    le.delete(t);
  }, r = () => {
    at = !1, n();
  };
  e(n), r();
}
function kn(e) {
  let t = [], n = (a) => t.push(a), [r, i] = ci(e);
  return t.push(i), [{
    Alpine: ge,
    effect: r,
    cleanup: n,
    evaluateLater: v.bind(v, e),
    evaluate: J.bind(J, e)
  }, () => t.forEach((a) => a())];
}
function Oi(e, t) {
  let n = () => {
  }, r = Me[t.type] || n, [i, s] = kn(e);
  Rn(e, t.original, s);
  let o = () => {
    e._x_ignore || e._x_ignoreSelf || (r.inline && r.inline(e, t, i), r = r.bind(r, e, t, i), at ? le.get(Dn).push(r) : r());
  };
  return o.runCleanups = s, o;
}
var $n = (e, t) => ({ name: n, value: r }) => (n.startsWith(e) && (n = n.replace(e, t)), { name: n, value: r }), Un = (e) => e;
function Hn(e = () => {
}) {
  return ({ name: t, value: n }) => {
    let { name: r, value: i } = qn.reduce((s, o) => o(s), { name: t, value: n });
    return r !== t && e(r, t), { name: r, value: i };
  };
}
var qn = [];
function Nt(e) {
  qn.push(e);
}
function zn({ name: e }) {
  return Kn().test(e);
}
var Kn = () => new RegExp(`^${Ct}([^:^.]+)\\b`);
function vi(e, t) {
  return ({ name: n, value: r }) => {
    let i = n.match(Kn()), s = n.match(/:([a-zA-Z0-9\-_:]+)/), o = n.match(/\.[^.\]]+(?=[^\]]*$)/g) || [], a = t || e[n] || n;
    return {
      type: i ? i[1] : null,
      value: s ? s[1] : null,
      modifiers: o.map((c) => c.replace(".", "")),
      expression: r,
      original: a
    };
  };
}
var ct = "DEFAULT", z = [
  "ignore",
  "ref",
  "data",
  "id",
  "anchor",
  "bind",
  "init",
  "for",
  "model",
  "modelable",
  "transition",
  "show",
  "if",
  ct,
  "teleport"
];
function Ri(e, t) {
  let n = z.indexOf(e.type) === -1 ? ct : e.type, r = z.indexOf(t.type) === -1 ? ct : t.type;
  return z.indexOf(n) - z.indexOf(r);
}
function fe(e, t, n = {}) {
  e.dispatchEvent(
    new CustomEvent(t, {
      detail: n,
      bubbles: !0,
      // Allows events to pass the shadow DOM barrier.
      composed: !0,
      cancelable: !0
    })
  );
}
function k(e, t) {
  if (typeof ShadowRoot == "function" && e instanceof ShadowRoot) {
    Array.from(e.children).forEach((i) => k(i, t));
    return;
  }
  let n = !1;
  if (t(e, () => n = !0), n)
    return;
  let r = e.firstElementChild;
  for (; r; )
    k(r, t), r = r.nextElementSibling;
}
function T(e, ...t) {
  console.warn(`Alpine Warning: ${e}`, ...t);
}
var Xt = !1;
function Ti() {
  Xt && T("Alpine has already been initialized on this page. Calling Alpine.start() more than once can cause problems."), Xt = !0, document.body || T("Unable to initialize. Trying to load Alpine before `<body>` is available. Did you forget to add `defer` in Alpine's `<script>` tag?"), fe(document, "alpine:init"), fe(document, "alpine:initializing"), vt(), ui((t) => I(t, k)), St((t) => Zn(t)), vn((t, n) => {
    Pt(t, n).forEach((r) => r());
  });
  let e = (t) => !je(t.parentElement, !0);
  Array.from(document.querySelectorAll(Vn().join(","))).filter(e).forEach((t) => {
    I(t);
  }), fe(document, "alpine:initialized"), setTimeout(() => {
    Ni();
  });
}
var Ft = [], Jn = [];
function Wn() {
  return Ft.map((e) => e());
}
function Vn() {
  return Ft.concat(Jn).map((e) => e());
}
function Xn(e) {
  Ft.push(e);
}
function Gn(e) {
  Jn.push(e);
}
function je(e, t = !1) {
  return ye(e, (n) => {
    if ((t ? Vn() : Wn()).some((i) => n.matches(i)))
      return !0;
  });
}
function ye(e, t) {
  if (e) {
    if (t(e))
      return e;
    if (e._x_teleportBack && (e = e._x_teleportBack), !!e.parentElement)
      return ye(e.parentElement, t);
  }
}
function Ci(e) {
  return Wn().some((t) => e.matches(t));
}
var Yn = [];
function Pi(e) {
  Yn.push(e);
}
function I(e, t = k, n = () => {
}) {
  Ai(() => {
    t(e, (r, i) => {
      n(r, i), Yn.forEach((s) => s(r, i)), Pt(r, r.attributes).forEach((s) => s()), r._x_ignore && i();
    });
  });
}
function Zn(e, t = k) {
  t(e, (n) => {
    Tn(n), li(n);
  });
}
function Ni() {
  [
    ["ui", "dialog", ["[x-dialog], [x-popover]"]],
    ["anchor", "anchor", ["[x-anchor]"]],
    ["sort", "sort", ["[x-sort]"]]
  ].forEach(([t, n, r]) => {
    Si(n) || r.some((i) => {
      if (document.querySelector(i))
        return T(`found "${i}", but missing ${t} plugin`), !0;
    });
  });
}
var ut = [], Mt = !1;
function Lt(e = () => {
}) {
  return queueMicrotask(() => {
    Mt || setTimeout(() => {
      lt();
    });
  }), new Promise((t) => {
    ut.push(() => {
      e(), t();
    });
  });
}
function lt() {
  for (Mt = !1; ut.length; )
    ut.shift()();
}
function Fi() {
  Mt = !0;
}
function jt(e, t) {
  return Array.isArray(t) ? Gt(e, t.join(" ")) : typeof t == "object" && t !== null ? Mi(e, t) : typeof t == "function" ? jt(e, t()) : Gt(e, t);
}
function Gt(e, t) {
  let n = (i) => i.split(" ").filter((s) => !e.classList.contains(s)).filter(Boolean), r = (i) => (e.classList.add(...i), () => {
    e.classList.remove(...i);
  });
  return t = t === !0 ? t = "" : t || "", r(n(t));
}
function Mi(e, t) {
  let n = (a) => a.split(" ").filter(Boolean), r = Object.entries(t).flatMap(([a, c]) => c ? n(a) : !1).filter(Boolean), i = Object.entries(t).flatMap(([a, c]) => c ? !1 : n(a)).filter(Boolean), s = [], o = [];
  return i.forEach((a) => {
    e.classList.contains(a) && (e.classList.remove(a), o.push(a));
  }), r.forEach((a) => {
    e.classList.contains(a) || (e.classList.add(a), s.push(a));
  }), () => {
    o.forEach((a) => e.classList.add(a)), s.forEach((a) => e.classList.remove(a));
  };
}
function Ie(e, t) {
  return typeof t == "object" && t !== null ? Li(e, t) : ji(e, t);
}
function Li(e, t) {
  let n = {};
  return Object.entries(t).forEach(([r, i]) => {
    n[r] = e.style[r], r.startsWith("--") || (r = Ii(r)), e.style.setProperty(r, i);
  }), setTimeout(() => {
    e.style.length === 0 && e.removeAttribute("style");
  }), () => {
    Ie(e, n);
  };
}
function ji(e, t) {
  let n = e.getAttribute("style", t);
  return e.setAttribute("style", t), () => {
    e.setAttribute("style", n || "");
  };
}
function Ii(e) {
  return e.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase();
}
function ft(e, t = () => {
}) {
  let n = !1;
  return function() {
    n ? t.apply(this, arguments) : (n = !0, e.apply(this, arguments));
  };
}
A("transition", (e, { value: t, modifiers: n, expression: r }, { evaluate: i }) => {
  typeof r == "function" && (r = i(r)), r !== !1 && (!r || typeof r == "boolean" ? Di(e, n, t) : Bi(e, r, t));
});
function Bi(e, t, n) {
  Qn(e, jt, ""), {
    enter: (i) => {
      e._x_transition.enter.during = i;
    },
    "enter-start": (i) => {
      e._x_transition.enter.start = i;
    },
    "enter-end": (i) => {
      e._x_transition.enter.end = i;
    },
    leave: (i) => {
      e._x_transition.leave.during = i;
    },
    "leave-start": (i) => {
      e._x_transition.leave.start = i;
    },
    "leave-end": (i) => {
      e._x_transition.leave.end = i;
    }
  }[n](t);
}
function Di(e, t, n) {
  Qn(e, Ie);
  let r = !t.includes("in") && !t.includes("out") && !n, i = r || t.includes("in") || ["enter"].includes(n), s = r || t.includes("out") || ["leave"].includes(n);
  t.includes("in") && !r && (t = t.filter((y, x) => x < t.indexOf("out"))), t.includes("out") && !r && (t = t.filter((y, x) => x > t.indexOf("out")));
  let o = !t.includes("opacity") && !t.includes("scale"), a = o || t.includes("opacity"), c = o || t.includes("scale"), l = a ? 0 : 1, d = c ? ae(t, "scale", 95) / 100 : 1, f = ae(t, "delay", 0) / 1e3, m = ae(t, "origin", "center"), b = "opacity, transform", h = ae(t, "duration", 150) / 1e3, _ = ae(t, "duration", 75) / 1e3, p = "cubic-bezier(0.4, 0.0, 0.2, 1)";
  i && (e._x_transition.enter.during = {
    transformOrigin: m,
    transitionDelay: `${f}s`,
    transitionProperty: b,
    transitionDuration: `${h}s`,
    transitionTimingFunction: p
  }, e._x_transition.enter.start = {
    opacity: l,
    transform: `scale(${d})`
  }, e._x_transition.enter.end = {
    opacity: 1,
    transform: "scale(1)"
  }), s && (e._x_transition.leave.during = {
    transformOrigin: m,
    transitionDelay: `${f}s`,
    transitionProperty: b,
    transitionDuration: `${_}s`,
    transitionTimingFunction: p
  }, e._x_transition.leave.start = {
    opacity: 1,
    transform: "scale(1)"
  }, e._x_transition.leave.end = {
    opacity: l,
    transform: `scale(${d})`
  });
}
function Qn(e, t, n = {}) {
  e._x_transition || (e._x_transition = {
    enter: { during: n, start: n, end: n },
    leave: { during: n, start: n, end: n },
    in(r = () => {
    }, i = () => {
    }) {
      dt(e, t, {
        during: this.enter.during,
        start: this.enter.start,
        end: this.enter.end
      }, r, i);
    },
    out(r = () => {
    }, i = () => {
    }) {
      dt(e, t, {
        during: this.leave.during,
        start: this.leave.start,
        end: this.leave.end
      }, r, i);
    }
  });
}
window.Element.prototype._x_toggleAndCascadeWithTransitions = function(e, t, n, r) {
  const i = document.visibilityState === "visible" ? requestAnimationFrame : setTimeout;
  let s = () => i(n);
  if (t) {
    e._x_transition && (e._x_transition.enter || e._x_transition.leave) ? e._x_transition.enter && (Object.entries(e._x_transition.enter.during).length || Object.entries(e._x_transition.enter.start).length || Object.entries(e._x_transition.enter.end).length) ? e._x_transition.in(n) : s() : e._x_transition ? e._x_transition.in(n) : s();
    return;
  }
  e._x_hidePromise = e._x_transition ? new Promise((o, a) => {
    e._x_transition.out(() => {
    }, () => o(r)), e._x_transitioning && e._x_transitioning.beforeCancel(() => a({ isFromCancelledTransition: !0 }));
  }) : Promise.resolve(r), queueMicrotask(() => {
    let o = er(e);
    o ? (o._x_hideChildren || (o._x_hideChildren = []), o._x_hideChildren.push(e)) : i(() => {
      let a = (c) => {
        let l = Promise.all([
          c._x_hidePromise,
          ...(c._x_hideChildren || []).map(a)
        ]).then(([d]) => d());
        return delete c._x_hidePromise, delete c._x_hideChildren, l;
      };
      a(e).catch((c) => {
        if (!c.isFromCancelledTransition)
          throw c;
      });
    });
  });
};
function er(e) {
  let t = e.parentNode;
  if (t)
    return t._x_hidePromise ? t : er(t);
}
function dt(e, t, { during: n, start: r, end: i } = {}, s = () => {
}, o = () => {
}) {
  if (e._x_transitioning && e._x_transitioning.cancel(), Object.keys(n).length === 0 && Object.keys(r).length === 0 && Object.keys(i).length === 0) {
    s(), o();
    return;
  }
  let a, c, l;
  ki(e, {
    start() {
      a = t(e, r);
    },
    during() {
      c = t(e, n);
    },
    before: s,
    end() {
      a(), l = t(e, i);
    },
    after: o,
    cleanup() {
      c(), l();
    }
  });
}
function ki(e, t) {
  let n, r, i, s = ft(() => {
    O(() => {
      n = !0, r || t.before(), i || (t.end(), lt()), t.after(), e.isConnected && t.cleanup(), delete e._x_transitioning;
    });
  });
  e._x_transitioning = {
    beforeCancels: [],
    beforeCancel(o) {
      this.beforeCancels.push(o);
    },
    cancel: ft(function() {
      for (; this.beforeCancels.length; )
        this.beforeCancels.shift()();
      s();
    }),
    finish: s
  }, O(() => {
    t.start(), t.during();
  }), Fi(), requestAnimationFrame(() => {
    if (n)
      return;
    let o = Number(getComputedStyle(e).transitionDuration.replace(/,.*/, "").replace("s", "")) * 1e3, a = Number(getComputedStyle(e).transitionDelay.replace(/,.*/, "").replace("s", "")) * 1e3;
    o === 0 && (o = Number(getComputedStyle(e).animationDuration.replace("s", "")) * 1e3), O(() => {
      t.before();
    }), r = !0, requestAnimationFrame(() => {
      n || (O(() => {
        t.end();
      }), lt(), setTimeout(e._x_transitioning.finish, o + a), i = !0);
    });
  });
}
function ae(e, t, n) {
  if (e.indexOf(t) === -1)
    return n;
  const r = e[e.indexOf(t) + 1];
  if (!r || t === "scale" && isNaN(r))
    return n;
  if (t === "duration" || t === "delay") {
    let i = r.match(/([0-9]+)ms/);
    if (i)
      return i[1];
  }
  return t === "origin" && ["top", "right", "left", "center", "bottom"].includes(e[e.indexOf(t) + 2]) ? [r, e[e.indexOf(t) + 2]].join(" ") : r;
}
var $ = !1;
function H(e, t = () => {
}) {
  return (...n) => $ ? t(...n) : e(...n);
}
function $i(e) {
  return (...t) => $ && e(...t);
}
var tr = [];
function Be(e) {
  tr.push(e);
}
function Ui(e, t) {
  tr.forEach((n) => n(e, t)), $ = !0, nr(() => {
    I(t, (n, r) => {
      r(n, () => {
      });
    });
  }), $ = !1;
}
var pt = !1;
function Hi(e, t) {
  t._x_dataStack || (t._x_dataStack = e._x_dataStack), $ = !0, pt = !0, nr(() => {
    qi(t);
  }), $ = !1, pt = !1;
}
function qi(e) {
  let t = !1;
  I(e, (r, i) => {
    k(r, (s, o) => {
      if (t && Ci(s))
        return o();
      t = !0, i(s, o);
    });
  });
}
function nr(e) {
  let t = G;
  Vt((n, r) => {
    let i = t(n);
    return ne(i), () => {
    };
  }), e(), Vt(t);
}
function rr(e, t, n, r = []) {
  switch (e._x_bindings || (e._x_bindings = te({})), e._x_bindings[t] = n, t = r.includes("camel") ? Yi(t) : t, t) {
    case "value":
      zi(e, n);
      break;
    case "style":
      Ji(e, n);
      break;
    case "class":
      Ki(e, n);
      break;
    case "selected":
    case "checked":
      Wi(e, t, n);
      break;
    default:
      ir(e, t, n);
      break;
  }
}
function zi(e, t) {
  if (e.type === "radio")
    e.attributes.value === void 0 && (e.value = t), window.fromModel && (typeof t == "boolean" ? e.checked = Te(e.value) === t : e.checked = Yt(e.value, t));
  else if (e.type === "checkbox")
    Number.isInteger(t) ? e.value = t : !Array.isArray(t) && typeof t != "boolean" && ![null, void 0].includes(t) ? e.value = String(t) : Array.isArray(t) ? e.checked = t.some((n) => Yt(n, e.value)) : e.checked = !!t;
  else if (e.tagName === "SELECT")
    Gi(e, t);
  else {
    if (e.value === t)
      return;
    e.value = t === void 0 ? "" : t;
  }
}
function Ki(e, t) {
  e._x_undoAddedClasses && e._x_undoAddedClasses(), e._x_undoAddedClasses = jt(e, t);
}
function Ji(e, t) {
  e._x_undoAddedStyles && e._x_undoAddedStyles(), e._x_undoAddedStyles = Ie(e, t);
}
function Wi(e, t, n) {
  ir(e, t, n), Xi(e, t, n);
}
function ir(e, t, n) {
  [null, void 0, !1].includes(n) && Zi(t) ? e.removeAttribute(t) : (sr(t) && (n = t), Vi(e, t, n));
}
function Vi(e, t, n) {
  e.getAttribute(t) != n && e.setAttribute(t, n);
}
function Xi(e, t, n) {
  e[t] !== n && (e[t] = n);
}
function Gi(e, t) {
  const n = [].concat(t).map((r) => r + "");
  Array.from(e.options).forEach((r) => {
    r.selected = n.includes(r.value);
  });
}
function Yi(e) {
  return e.toLowerCase().replace(/-(\w)/g, (t, n) => n.toUpperCase());
}
function Yt(e, t) {
  return e == t;
}
function Te(e) {
  return [1, "1", "true", "on", "yes", !0].includes(e) ? !0 : [0, "0", "false", "off", "no", !1].includes(e) ? !1 : e ? !!e : null;
}
function sr(e) {
  return [
    "disabled",
    "checked",
    "required",
    "readonly",
    "open",
    "selected",
    "autofocus",
    "itemscope",
    "multiple",
    "novalidate",
    "allowfullscreen",
    "allowpaymentrequest",
    "formnovalidate",
    "autoplay",
    "controls",
    "loop",
    "muted",
    "playsinline",
    "default",
    "ismap",
    "reversed",
    "async",
    "defer",
    "nomodule"
  ].includes(e);
}
function Zi(e) {
  return !["aria-pressed", "aria-checked", "aria-expanded", "aria-selected"].includes(e);
}
function Qi(e, t, n) {
  return e._x_bindings && e._x_bindings[t] !== void 0 ? e._x_bindings[t] : or(e, t, n);
}
function es(e, t, n, r = !0) {
  if (e._x_bindings && e._x_bindings[t] !== void 0)
    return e._x_bindings[t];
  if (e._x_inlineBindings && e._x_inlineBindings[t] !== void 0) {
    let i = e._x_inlineBindings[t];
    return i.extract = r, Ln(() => J(e, i.expression));
  }
  return or(e, t, n);
}
function or(e, t, n) {
  let r = e.getAttribute(t);
  return r === null ? typeof n == "function" ? n() : n : r === "" ? !0 : sr(t) ? !![t, "true"].includes(r) : r;
}
function ar(e, t) {
  var n;
  return function() {
    var r = this, i = arguments, s = function() {
      n = null, e.apply(r, i);
    };
    clearTimeout(n), n = setTimeout(s, t);
  };
}
function cr(e, t) {
  let n;
  return function() {
    let r = this, i = arguments;
    n || (e.apply(r, i), n = !0, setTimeout(() => n = !1, t));
  };
}
function ur({ get: e, set: t }, { get: n, set: r }) {
  let i = !0, s, o = G(() => {
    let a = e(), c = n();
    if (i)
      r(We(a)), i = !1;
    else {
      let l = JSON.stringify(a), d = JSON.stringify(c);
      l !== s ? r(We(a)) : l !== d && t(We(c));
    }
    s = JSON.stringify(e()), JSON.stringify(n());
  });
  return () => {
    ne(o);
  };
}
function We(e) {
  return typeof e == "object" ? JSON.parse(JSON.stringify(e)) : e;
}
function ts(e) {
  (Array.isArray(e) ? e : [e]).forEach((n) => n(ge));
}
var q = {}, Zt = !1;
function ns(e, t) {
  if (Zt || (q = te(q), Zt = !0), t === void 0)
    return q[e];
  q[e] = t, typeof t == "object" && t !== null && t.hasOwnProperty("init") && typeof t.init == "function" && q[e].init(), Nn(q[e]);
}
function rs() {
  return q;
}
var lr = {};
function is(e, t) {
  let n = typeof t != "function" ? () => t : t;
  return e instanceof Element ? fr(e, n()) : (lr[e] = n, () => {
  });
}
function ss(e) {
  return Object.entries(lr).forEach(([t, n]) => {
    Object.defineProperty(e, t, {
      get() {
        return (...r) => n(...r);
      }
    });
  }), e;
}
function fr(e, t, n) {
  let r = [];
  for (; r.length; )
    r.pop()();
  let i = Object.entries(t).map(([o, a]) => ({ name: o, value: a })), s = Bn(i);
  return i = i.map((o) => s.find((a) => a.name === o.name) ? {
    name: `x-bind:${o.name}`,
    value: `"${o.value}"`
  } : o), Pt(e, i, n).map((o) => {
    r.push(o.runCleanups), o();
  }), () => {
    for (; r.length; )
      r.pop()();
  };
}
var dr = {};
function os(e, t) {
  dr[e] = t;
}
function as(e, t) {
  return Object.entries(dr).forEach(([n, r]) => {
    Object.defineProperty(e, n, {
      get() {
        return (...i) => r.bind(t)(...i);
      },
      enumerable: !1
    });
  }), e;
}
var cs = {
  get reactive() {
    return te;
  },
  get release() {
    return ne;
  },
  get effect() {
    return G;
  },
  get raw() {
    return wn;
  },
  version: "3.13.10",
  flushAndStopDeferringMutations: pi,
  dontAutoEvaluateFunctions: Ln,
  disableEffectScheduling: oi,
  startObservingMutations: vt,
  stopObservingMutations: Cn,
  setReactivityEngine: ai,
  onAttributeRemoved: Rn,
  onAttributesAdded: vn,
  closestDataStack: Z,
  skipDuringClone: H,
  onlyDuringClone: $i,
  addRootSelector: Xn,
  addInitSelector: Gn,
  interceptClone: Be,
  addScopeToNode: _e,
  deferMutations: di,
  mapAttributes: Nt,
  evaluateLater: v,
  interceptInit: Pi,
  setEvaluator: gi,
  mergeProxies: me,
  extractProp: es,
  findClosest: ye,
  onElRemoved: St,
  closestRoot: je,
  destroyTree: Zn,
  interceptor: Fn,
  // INTERNAL: not public API and is subject to change without major release.
  transition: dt,
  // INTERNAL
  setStyles: Ie,
  // INTERNAL
  mutateDom: O,
  directive: A,
  entangle: ur,
  throttle: cr,
  debounce: ar,
  evaluate: J,
  initTree: I,
  nextTick: Lt,
  prefixed: re,
  prefix: Ei,
  plugin: ts,
  magic: F,
  store: ns,
  start: Ti,
  clone: Hi,
  // INTERNAL
  cloneNode: Ui,
  // INTERNAL
  bound: Qi,
  $data: Pn,
  watch: En,
  walk: k,
  data: os,
  bind: is
}, ge = cs;
function us(e, t) {
  const n = /* @__PURE__ */ Object.create(null), r = e.split(",");
  for (let i = 0; i < r.length; i++)
    n[r[i]] = !0;
  return (i) => !!n[i];
}
var ls = Object.freeze({}), fs = Object.prototype.hasOwnProperty, De = (e, t) => fs.call(e, t), W = Array.isArray, de = (e) => pr(e) === "[object Map]", ds = (e) => typeof e == "string", It = (e) => typeof e == "symbol", ke = (e) => e !== null && typeof e == "object", ps = Object.prototype.toString, pr = (e) => ps.call(e), hr = (e) => pr(e).slice(8, -1), Bt = (e) => ds(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, hs = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return (n) => t[n] || (t[n] = e(n));
}, _s = hs((e) => e.charAt(0).toUpperCase() + e.slice(1)), _r = (e, t) => e !== t && (e === e || t === t), ht = /* @__PURE__ */ new WeakMap(), ce = [], M, V = Symbol("iterate"), _t = Symbol("Map key iterate");
function ms(e) {
  return e && e._isEffect === !0;
}
function ys(e, t = ls) {
  ms(e) && (e = e.raw);
  const n = xs(e, t);
  return t.lazy || n(), n;
}
function gs(e) {
  e.active && (mr(e), e.options.onStop && e.options.onStop(), e.active = !1);
}
var bs = 0;
function xs(e, t) {
  const n = function() {
    if (!n.active)
      return e();
    if (!ce.includes(n)) {
      mr(n);
      try {
        return Es(), ce.push(n), M = n, e();
      } finally {
        ce.pop(), yr(), M = ce[ce.length - 1];
      }
    }
  };
  return n.id = bs++, n.allowRecurse = !!t.allowRecurse, n._isEffect = !0, n.active = !0, n.raw = e, n.deps = [], n.options = t, n;
}
function mr(e) {
  const { deps: t } = e;
  if (t.length) {
    for (let n = 0; n < t.length; n++)
      t[n].delete(e);
    t.length = 0;
  }
}
var Q = !0, Dt = [];
function ws() {
  Dt.push(Q), Q = !1;
}
function Es() {
  Dt.push(Q), Q = !0;
}
function yr() {
  const e = Dt.pop();
  Q = e === void 0 ? !0 : e;
}
function N(e, t, n) {
  if (!Q || M === void 0)
    return;
  let r = ht.get(e);
  r || ht.set(e, r = /* @__PURE__ */ new Map());
  let i = r.get(n);
  i || r.set(n, i = /* @__PURE__ */ new Set()), i.has(M) || (i.add(M), M.deps.push(i), M.options.onTrack && M.options.onTrack({
    effect: M,
    target: e,
    type: t,
    key: n
  }));
}
function U(e, t, n, r, i, s) {
  const o = ht.get(e);
  if (!o)
    return;
  const a = /* @__PURE__ */ new Set(), c = (d) => {
    d && d.forEach((f) => {
      (f !== M || f.allowRecurse) && a.add(f);
    });
  };
  if (t === "clear")
    o.forEach(c);
  else if (n === "length" && W(e))
    o.forEach((d, f) => {
      (f === "length" || f >= r) && c(d);
    });
  else
    switch (n !== void 0 && c(o.get(n)), t) {
      case "add":
        W(e) ? Bt(n) && c(o.get("length")) : (c(o.get(V)), de(e) && c(o.get(_t)));
        break;
      case "delete":
        W(e) || (c(o.get(V)), de(e) && c(o.get(_t)));
        break;
      case "set":
        de(e) && c(o.get(V));
        break;
    }
  const l = (d) => {
    d.options.onTrigger && d.options.onTrigger({
      effect: d,
      target: e,
      key: n,
      type: t,
      newValue: r,
      oldValue: i,
      oldTarget: s
    }), d.options.scheduler ? d.options.scheduler(d) : d();
  };
  a.forEach(l);
}
var Ss = /* @__PURE__ */ us("__proto__,__v_isRef,__isVue"), gr = new Set(Object.getOwnPropertyNames(Symbol).map((e) => Symbol[e]).filter(It)), As = /* @__PURE__ */ br(), Os = /* @__PURE__ */ br(!0), Qt = /* @__PURE__ */ vs();
function vs() {
  const e = {};
  return ["includes", "indexOf", "lastIndexOf"].forEach((t) => {
    e[t] = function(...n) {
      const r = E(this);
      for (let s = 0, o = this.length; s < o; s++)
        N(r, "get", s + "");
      const i = r[t](...n);
      return i === -1 || i === !1 ? r[t](...n.map(E)) : i;
    };
  }), ["push", "pop", "shift", "unshift", "splice"].forEach((t) => {
    e[t] = function(...n) {
      ws();
      const r = E(this)[t].apply(this, n);
      return yr(), r;
    };
  }), e;
}
function br(e = !1, t = !1) {
  return function(r, i, s) {
    if (i === "__v_isReactive")
      return !e;
    if (i === "__v_isReadonly")
      return e;
    if (i === "__v_raw" && s === (e ? t ? $s : Sr : t ? ks : Er).get(r))
      return r;
    const o = W(r);
    if (!e && o && De(Qt, i))
      return Reflect.get(Qt, i, s);
    const a = Reflect.get(r, i, s);
    return (It(i) ? gr.has(i) : Ss(i)) || (e || N(r, "get", i), t) ? a : mt(a) ? !o || !Bt(i) ? a.value : a : ke(a) ? e ? Ar(a) : Ht(a) : a;
  };
}
var Rs = /* @__PURE__ */ Ts();
function Ts(e = !1) {
  return function(n, r, i, s) {
    let o = n[r];
    if (!e && (i = E(i), o = E(o), !W(n) && mt(o) && !mt(i)))
      return o.value = i, !0;
    const a = W(n) && Bt(r) ? Number(r) < n.length : De(n, r), c = Reflect.set(n, r, i, s);
    return n === E(s) && (a ? _r(i, o) && U(n, "set", r, i, o) : U(n, "add", r, i)), c;
  };
}
function Cs(e, t) {
  const n = De(e, t), r = e[t], i = Reflect.deleteProperty(e, t);
  return i && n && U(e, "delete", t, void 0, r), i;
}
function Ps(e, t) {
  const n = Reflect.has(e, t);
  return (!It(t) || !gr.has(t)) && N(e, "has", t), n;
}
function Ns(e) {
  return N(e, "iterate", W(e) ? "length" : V), Reflect.ownKeys(e);
}
var Fs = {
  get: As,
  set: Rs,
  deleteProperty: Cs,
  has: Ps,
  ownKeys: Ns
}, Ms = {
  get: Os,
  set(e, t) {
    return console.warn(`Set operation on key "${String(t)}" failed: target is readonly.`, e), !0;
  },
  deleteProperty(e, t) {
    return console.warn(`Delete operation on key "${String(t)}" failed: target is readonly.`, e), !0;
  }
}, kt = (e) => ke(e) ? Ht(e) : e, $t = (e) => ke(e) ? Ar(e) : e, Ut = (e) => e, $e = (e) => Reflect.getPrototypeOf(e);
function Ee(e, t, n = !1, r = !1) {
  e = e.__v_raw;
  const i = E(e), s = E(t);
  t !== s && !n && N(i, "get", t), !n && N(i, "get", s);
  const { has: o } = $e(i), a = r ? Ut : n ? $t : kt;
  if (o.call(i, t))
    return a(e.get(t));
  if (o.call(i, s))
    return a(e.get(s));
  e !== i && e.get(t);
}
function Se(e, t = !1) {
  const n = this.__v_raw, r = E(n), i = E(e);
  return e !== i && !t && N(r, "has", e), !t && N(r, "has", i), e === i ? n.has(e) : n.has(e) || n.has(i);
}
function Ae(e, t = !1) {
  return e = e.__v_raw, !t && N(E(e), "iterate", V), Reflect.get(e, "size", e);
}
function en(e) {
  e = E(e);
  const t = E(this);
  return $e(t).has.call(t, e) || (t.add(e), U(t, "add", e, e)), this;
}
function tn(e, t) {
  t = E(t);
  const n = E(this), { has: r, get: i } = $e(n);
  let s = r.call(n, e);
  s ? wr(n, r, e) : (e = E(e), s = r.call(n, e));
  const o = i.call(n, e);
  return n.set(e, t), s ? _r(t, o) && U(n, "set", e, t, o) : U(n, "add", e, t), this;
}
function nn(e) {
  const t = E(this), { has: n, get: r } = $e(t);
  let i = n.call(t, e);
  i ? wr(t, n, e) : (e = E(e), i = n.call(t, e));
  const s = r ? r.call(t, e) : void 0, o = t.delete(e);
  return i && U(t, "delete", e, void 0, s), o;
}
function rn() {
  const e = E(this), t = e.size !== 0, n = de(e) ? new Map(e) : new Set(e), r = e.clear();
  return t && U(e, "clear", void 0, void 0, n), r;
}
function Oe(e, t) {
  return function(r, i) {
    const s = this, o = s.__v_raw, a = E(o), c = t ? Ut : e ? $t : kt;
    return !e && N(a, "iterate", V), o.forEach((l, d) => r.call(i, c(l), c(d), s));
  };
}
function ve(e, t, n) {
  return function(...r) {
    const i = this.__v_raw, s = E(i), o = de(s), a = e === "entries" || e === Symbol.iterator && o, c = e === "keys" && o, l = i[e](...r), d = n ? Ut : t ? $t : kt;
    return !t && N(s, "iterate", c ? _t : V), {
      // iterator protocol
      next() {
        const { value: f, done: m } = l.next();
        return m ? { value: f, done: m } : {
          value: a ? [d(f[0]), d(f[1])] : d(f),
          done: m
        };
      },
      // iterable protocol
      [Symbol.iterator]() {
        return this;
      }
    };
  };
}
function B(e) {
  return function(...t) {
    {
      const n = t[0] ? `on key "${t[0]}" ` : "";
      console.warn(`${_s(e)} operation ${n}failed: target is readonly.`, E(this));
    }
    return e === "delete" ? !1 : this;
  };
}
function Ls() {
  const e = {
    get(s) {
      return Ee(this, s);
    },
    get size() {
      return Ae(this);
    },
    has: Se,
    add: en,
    set: tn,
    delete: nn,
    clear: rn,
    forEach: Oe(!1, !1)
  }, t = {
    get(s) {
      return Ee(this, s, !1, !0);
    },
    get size() {
      return Ae(this);
    },
    has: Se,
    add: en,
    set: tn,
    delete: nn,
    clear: rn,
    forEach: Oe(!1, !0)
  }, n = {
    get(s) {
      return Ee(this, s, !0);
    },
    get size() {
      return Ae(this, !0);
    },
    has(s) {
      return Se.call(this, s, !0);
    },
    add: B(
      "add"
      /* ADD */
    ),
    set: B(
      "set"
      /* SET */
    ),
    delete: B(
      "delete"
      /* DELETE */
    ),
    clear: B(
      "clear"
      /* CLEAR */
    ),
    forEach: Oe(!0, !1)
  }, r = {
    get(s) {
      return Ee(this, s, !0, !0);
    },
    get size() {
      return Ae(this, !0);
    },
    has(s) {
      return Se.call(this, s, !0);
    },
    add: B(
      "add"
      /* ADD */
    ),
    set: B(
      "set"
      /* SET */
    ),
    delete: B(
      "delete"
      /* DELETE */
    ),
    clear: B(
      "clear"
      /* CLEAR */
    ),
    forEach: Oe(!0, !0)
  };
  return ["keys", "values", "entries", Symbol.iterator].forEach((s) => {
    e[s] = ve(s, !1, !1), n[s] = ve(s, !0, !1), t[s] = ve(s, !1, !0), r[s] = ve(s, !0, !0);
  }), [
    e,
    n,
    t,
    r
  ];
}
var [js, Is, Ea, Sa] = /* @__PURE__ */ Ls();
function xr(e, t) {
  const n = e ? Is : js;
  return (r, i, s) => i === "__v_isReactive" ? !e : i === "__v_isReadonly" ? e : i === "__v_raw" ? r : Reflect.get(De(n, i) && i in r ? n : r, i, s);
}
var Bs = {
  get: /* @__PURE__ */ xr(!1)
}, Ds = {
  get: /* @__PURE__ */ xr(!0)
};
function wr(e, t, n) {
  const r = E(n);
  if (r !== n && t.call(e, r)) {
    const i = hr(e);
    console.warn(`Reactive ${i} contains both the raw and reactive versions of the same object${i === "Map" ? " as keys" : ""}, which can lead to inconsistencies. Avoid differentiating between the raw and reactive versions of an object and only use the reactive version if possible.`);
  }
}
var Er = /* @__PURE__ */ new WeakMap(), ks = /* @__PURE__ */ new WeakMap(), Sr = /* @__PURE__ */ new WeakMap(), $s = /* @__PURE__ */ new WeakMap();
function Us(e) {
  switch (e) {
    case "Object":
    case "Array":
      return 1;
    case "Map":
    case "Set":
    case "WeakMap":
    case "WeakSet":
      return 2;
    default:
      return 0;
  }
}
function Hs(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : Us(hr(e));
}
function Ht(e) {
  return e && e.__v_isReadonly ? e : Or(e, !1, Fs, Bs, Er);
}
function Ar(e) {
  return Or(e, !0, Ms, Ds, Sr);
}
function Or(e, t, n, r, i) {
  if (!ke(e))
    return console.warn(`value cannot be made reactive: ${String(e)}`), e;
  if (e.__v_raw && !(t && e.__v_isReactive))
    return e;
  const s = i.get(e);
  if (s)
    return s;
  const o = Hs(e);
  if (o === 0)
    return e;
  const a = new Proxy(e, o === 2 ? r : n);
  return i.set(e, a), a;
}
function E(e) {
  return e && E(e.__v_raw) || e;
}
function mt(e) {
  return !!(e && e.__v_isRef === !0);
}
F("nextTick", () => Lt);
F("dispatch", (e) => fe.bind(fe, e));
F("watch", (e, { evaluateLater: t, cleanup: n }) => (r, i) => {
  let s = t(r), a = En(() => {
    let c;
    return s((l) => c = l), c;
  }, i);
  n(a);
});
F("store", rs);
F("data", (e) => Pn(e));
F("root", (e) => je(e));
F("refs", (e) => (e._x_refs_proxy || (e._x_refs_proxy = me(qs(e))), e._x_refs_proxy));
function qs(e) {
  let t = [];
  return ye(e, (n) => {
    n._x_refs && t.push(n._x_refs);
  }), t;
}
var Ve = {};
function vr(e) {
  return Ve[e] || (Ve[e] = 0), ++Ve[e];
}
function zs(e, t) {
  return ye(e, (n) => {
    if (n._x_ids && n._x_ids[t])
      return !0;
  });
}
function Ks(e, t) {
  e._x_ids || (e._x_ids = {}), e._x_ids[t] || (e._x_ids[t] = vr(t));
}
F("id", (e, { cleanup: t }) => (n, r = null) => {
  let i = `${n}${r ? `-${r}` : ""}`;
  return Js(e, i, t, () => {
    let s = zs(e, n), o = s ? s._x_ids[n] : vr(n);
    return r ? `${n}-${o}-${r}` : `${n}-${o}`;
  });
});
Be((e, t) => {
  e._x_id && (t._x_id = e._x_id);
});
function Js(e, t, n, r) {
  if (e._x_id || (e._x_id = {}), e._x_id[t])
    return e._x_id[t];
  let i = r();
  return e._x_id[t] = i, n(() => {
    delete e._x_id[t];
  }), i;
}
F("el", (e) => e);
Rr("Focus", "focus", "focus");
Rr("Persist", "persist", "persist");
function Rr(e, t, n) {
  F(t, (r) => T(`You can't use [$${t}] without first installing the "${e}" plugin here: https://alpinejs.dev/plugins/${n}`, r));
}
A("modelable", (e, { expression: t }, { effect: n, evaluateLater: r, cleanup: i }) => {
  let s = r(t), o = () => {
    let d;
    return s((f) => d = f), d;
  }, a = r(`${t} = __placeholder`), c = (d) => a(() => {
  }, { scope: { __placeholder: d } }), l = o();
  c(l), queueMicrotask(() => {
    if (!e._x_model)
      return;
    e._x_removeModelListeners.default();
    let d = e._x_model.get, f = e._x_model.set, m = ur(
      {
        get() {
          return d();
        },
        set(b) {
          f(b);
        }
      },
      {
        get() {
          return o();
        },
        set(b) {
          c(b);
        }
      }
    );
    i(m);
  });
});
A("teleport", (e, { modifiers: t, expression: n }, { cleanup: r }) => {
  e.tagName.toLowerCase() !== "template" && T("x-teleport can only be used on a <template> tag", e);
  let i = sn(n), s = e.content.cloneNode(!0).firstElementChild;
  e._x_teleport = s, s._x_teleportBack = e, e.setAttribute("data-teleport-template", !0), s.setAttribute("data-teleport-target", !0), e._x_forwardEvents && e._x_forwardEvents.forEach((a) => {
    s.addEventListener(a, (c) => {
      c.stopPropagation(), e.dispatchEvent(new c.constructor(c.type, c));
    });
  }), _e(s, {}, e);
  let o = (a, c, l) => {
    l.includes("prepend") ? c.parentNode.insertBefore(a, c) : l.includes("append") ? c.parentNode.insertBefore(a, c.nextSibling) : c.appendChild(a);
  };
  O(() => {
    o(s, i, t), H(() => {
      I(s), s._x_ignore = !0;
    })();
  }), e._x_teleportPutBack = () => {
    let a = sn(n);
    O(() => {
      o(e._x_teleport, a, t);
    });
  }, r(() => s.remove());
});
var Ws = document.createElement("div");
function sn(e) {
  let t = H(() => document.querySelector(e), () => Ws)();
  return t || T(`Cannot find x-teleport element for selector: "${e}"`), t;
}
var Tr = () => {
};
Tr.inline = (e, { modifiers: t }, { cleanup: n }) => {
  t.includes("self") ? e._x_ignoreSelf = !0 : e._x_ignore = !0, n(() => {
    t.includes("self") ? delete e._x_ignoreSelf : delete e._x_ignore;
  });
};
A("ignore", Tr);
A("effect", H((e, { expression: t }, { effect: n }) => {
  n(v(e, t));
}));
function yt(e, t, n, r) {
  let i = e, s = (c) => r(c), o = {}, a = (c, l) => (d) => l(c, d);
  if (n.includes("dot") && (t = Vs(t)), n.includes("camel") && (t = Xs(t)), n.includes("passive") && (o.passive = !0), n.includes("capture") && (o.capture = !0), n.includes("window") && (i = window), n.includes("document") && (i = document), n.includes("debounce")) {
    let c = n[n.indexOf("debounce") + 1] || "invalid-wait", l = Le(c.split("ms")[0]) ? Number(c.split("ms")[0]) : 250;
    s = ar(s, l);
  }
  if (n.includes("throttle")) {
    let c = n[n.indexOf("throttle") + 1] || "invalid-wait", l = Le(c.split("ms")[0]) ? Number(c.split("ms")[0]) : 250;
    s = cr(s, l);
  }
  return n.includes("prevent") && (s = a(s, (c, l) => {
    l.preventDefault(), c(l);
  })), n.includes("stop") && (s = a(s, (c, l) => {
    l.stopPropagation(), c(l);
  })), n.includes("once") && (s = a(s, (c, l) => {
    c(l), i.removeEventListener(t, s, o);
  })), (n.includes("away") || n.includes("outside")) && (i = document, s = a(s, (c, l) => {
    e.contains(l.target) || l.target.isConnected !== !1 && (e.offsetWidth < 1 && e.offsetHeight < 1 || e._x_isShown !== !1 && c(l));
  })), n.includes("self") && (s = a(s, (c, l) => {
    l.target === e && c(l);
  })), s = a(s, (c, l) => {
    Ys(t) && Zs(l, n) || c(l);
  }), i.addEventListener(t, s, o), () => {
    i.removeEventListener(t, s, o);
  };
}
function Vs(e) {
  return e.replace(/-/g, ".");
}
function Xs(e) {
  return e.toLowerCase().replace(/-(\w)/g, (t, n) => n.toUpperCase());
}
function Le(e) {
  return !Array.isArray(e) && !isNaN(e);
}
function Gs(e) {
  return [" ", "_"].includes(
    e
  ) ? e : e.replace(/([a-z])([A-Z])/g, "$1-$2").replace(/[_\s]/, "-").toLowerCase();
}
function Ys(e) {
  return ["keydown", "keyup"].includes(e);
}
function Zs(e, t) {
  let n = t.filter((s) => !["window", "document", "prevent", "stop", "once", "capture"].includes(s));
  if (n.includes("debounce")) {
    let s = n.indexOf("debounce");
    n.splice(s, Le((n[s + 1] || "invalid-wait").split("ms")[0]) ? 2 : 1);
  }
  if (n.includes("throttle")) {
    let s = n.indexOf("throttle");
    n.splice(s, Le((n[s + 1] || "invalid-wait").split("ms")[0]) ? 2 : 1);
  }
  if (n.length === 0 || n.length === 1 && on(e.key).includes(n[0]))
    return !1;
  const i = ["ctrl", "shift", "alt", "meta", "cmd", "super"].filter((s) => n.includes(s));
  return n = n.filter((s) => !i.includes(s)), !(i.length > 0 && i.filter((o) => ((o === "cmd" || o === "super") && (o = "meta"), e[`${o}Key`])).length === i.length && on(e.key).includes(n[0]));
}
function on(e) {
  if (!e)
    return [];
  e = Gs(e);
  let t = {
    ctrl: "control",
    slash: "/",
    space: " ",
    spacebar: " ",
    cmd: "meta",
    esc: "escape",
    up: "arrow-up",
    down: "arrow-down",
    left: "arrow-left",
    right: "arrow-right",
    period: ".",
    comma: ",",
    equal: "=",
    minus: "-",
    underscore: "_"
  };
  return t[e] = e, Object.keys(t).map((n) => {
    if (t[n] === e)
      return n;
  }).filter((n) => n);
}
A("model", (e, { modifiers: t, expression: n }, { effect: r, cleanup: i }) => {
  let s = e;
  t.includes("parent") && (s = e.parentNode);
  let o = v(s, n), a;
  typeof n == "string" ? a = v(s, `${n} = __placeholder`) : typeof n == "function" && typeof n() == "string" ? a = v(s, `${n()} = __placeholder`) : a = () => {
  };
  let c = () => {
    let m;
    return o((b) => m = b), an(m) ? m.get() : m;
  }, l = (m) => {
    let b;
    o((h) => b = h), an(b) ? b.set(m) : a(() => {
    }, {
      scope: { __placeholder: m }
    });
  };
  typeof n == "string" && e.type === "radio" && O(() => {
    e.hasAttribute("name") || e.setAttribute("name", n);
  });
  var d = e.tagName.toLowerCase() === "select" || ["checkbox", "radio"].includes(e.type) || t.includes("lazy") ? "change" : "input";
  let f = $ ? () => {
  } : yt(e, d, t, (m) => {
    l(Xe(e, t, m, c()));
  });
  if (t.includes("fill") && ([void 0, null, ""].includes(c()) || e.type === "checkbox" && Array.isArray(c()) || e.tagName.toLowerCase() === "select" && e.multiple) && l(
    Xe(e, t, { target: e }, c())
  ), e._x_removeModelListeners || (e._x_removeModelListeners = {}), e._x_removeModelListeners.default = f, i(() => e._x_removeModelListeners.default()), e.form) {
    let m = yt(e.form, "reset", [], (b) => {
      Lt(() => e._x_model && e._x_model.set(Xe(e, t, { target: e }, c())));
    });
    i(() => m());
  }
  e._x_model = {
    get() {
      return c();
    },
    set(m) {
      l(m);
    }
  }, e._x_forceModelUpdate = (m) => {
    m === void 0 && typeof n == "string" && n.match(/\./) && (m = ""), window.fromModel = !0, O(() => rr(e, "value", m)), delete window.fromModel;
  }, r(() => {
    let m = c();
    t.includes("unintrusive") && document.activeElement.isSameNode(e) || e._x_forceModelUpdate(m);
  });
});
function Xe(e, t, n, r) {
  return O(() => {
    if (n instanceof CustomEvent && n.detail !== void 0)
      return n.detail !== null && n.detail !== void 0 ? n.detail : n.target.value;
    if (e.type === "checkbox")
      if (Array.isArray(r)) {
        let i = null;
        return t.includes("number") ? i = Ge(n.target.value) : t.includes("boolean") ? i = Te(n.target.value) : i = n.target.value, n.target.checked ? r.includes(i) ? r : r.concat([i]) : r.filter((s) => !Qs(s, i));
      } else
        return n.target.checked;
    else {
      if (e.tagName.toLowerCase() === "select" && e.multiple)
        return t.includes("number") ? Array.from(n.target.selectedOptions).map((i) => {
          let s = i.value || i.text;
          return Ge(s);
        }) : t.includes("boolean") ? Array.from(n.target.selectedOptions).map((i) => {
          let s = i.value || i.text;
          return Te(s);
        }) : Array.from(n.target.selectedOptions).map((i) => i.value || i.text);
      {
        let i;
        return e.type === "radio" ? n.target.checked ? i = n.target.value : i = r : i = n.target.value, t.includes("number") ? Ge(i) : t.includes("boolean") ? Te(i) : t.includes("trim") ? i.trim() : i;
      }
    }
  });
}
function Ge(e) {
  let t = e ? parseFloat(e) : null;
  return eo(t) ? t : e;
}
function Qs(e, t) {
  return e == t;
}
function eo(e) {
  return !Array.isArray(e) && !isNaN(e);
}
function an(e) {
  return e !== null && typeof e == "object" && typeof e.get == "function" && typeof e.set == "function";
}
A("cloak", (e) => queueMicrotask(() => O(() => e.removeAttribute(re("cloak")))));
Gn(() => `[${re("init")}]`);
A("init", H((e, { expression: t }, { evaluate: n }) => typeof t == "string" ? !!t.trim() && n(t, {}, !1) : n(t, {}, !1)));
A("text", (e, { expression: t }, { effect: n, evaluateLater: r }) => {
  let i = r(t);
  n(() => {
    i((s) => {
      O(() => {
        e.textContent = s;
      });
    });
  });
});
A("html", (e, { expression: t }, { effect: n, evaluateLater: r }) => {
  let i = r(t);
  n(() => {
    i((s) => {
      O(() => {
        e.innerHTML = s, e._x_ignoreSelf = !0, I(e), delete e._x_ignoreSelf;
      });
    });
  });
});
Nt($n(":", Un(re("bind:"))));
var Cr = (e, { value: t, modifiers: n, expression: r, original: i }, { effect: s, cleanup: o }) => {
  if (!t) {
    let c = {};
    ss(c), v(e, r)((d) => {
      fr(e, d, i);
    }, { scope: c });
    return;
  }
  if (t === "key")
    return to(e, r);
  if (e._x_inlineBindings && e._x_inlineBindings[t] && e._x_inlineBindings[t].extract)
    return;
  let a = v(e, r);
  s(() => a((c) => {
    c === void 0 && typeof r == "string" && r.match(/\./) && (c = ""), O(() => rr(e, t, c, n));
  })), o(() => {
    e._x_undoAddedClasses && e._x_undoAddedClasses(), e._x_undoAddedStyles && e._x_undoAddedStyles();
  });
};
Cr.inline = (e, { value: t, modifiers: n, expression: r }) => {
  t && (e._x_inlineBindings || (e._x_inlineBindings = {}), e._x_inlineBindings[t] = { expression: r, extract: !1 });
};
A("bind", Cr);
function to(e, t) {
  e._x_keyExpression = t;
}
Xn(() => `[${re("data")}]`);
A("data", (e, { expression: t }, { cleanup: n }) => {
  if (no(e))
    return;
  t = t === "" ? "{}" : t;
  let r = {};
  ot(r, e);
  let i = {};
  as(i, r);
  let s = J(e, t, { scope: i });
  (s === void 0 || s === !0) && (s = {}), ot(s, e);
  let o = te(s);
  Nn(o);
  let a = _e(e, o);
  o.init && J(e, o.init), n(() => {
    o.destroy && J(e, o.destroy), a();
  });
});
Be((e, t) => {
  e._x_dataStack && (t._x_dataStack = e._x_dataStack, t.setAttribute("data-has-alpine-state", !0));
});
function no(e) {
  return $ ? pt ? !0 : e.hasAttribute("data-has-alpine-state") : !1;
}
A("show", (e, { modifiers: t, expression: n }, { effect: r }) => {
  let i = v(e, n);
  e._x_doHide || (e._x_doHide = () => {
    O(() => {
      e.style.setProperty("display", "none", t.includes("important") ? "important" : void 0);
    });
  }), e._x_doShow || (e._x_doShow = () => {
    O(() => {
      e.style.length === 1 && e.style.display === "none" ? e.removeAttribute("style") : e.style.removeProperty("display");
    });
  });
  let s = () => {
    e._x_doHide(), e._x_isShown = !1;
  }, o = () => {
    e._x_doShow(), e._x_isShown = !0;
  }, a = () => setTimeout(o), c = ft(
    (f) => f ? o() : s(),
    (f) => {
      typeof e._x_toggleAndCascadeWithTransitions == "function" ? e._x_toggleAndCascadeWithTransitions(e, f, o, s) : f ? a() : s();
    }
  ), l, d = !0;
  r(() => i((f) => {
    !d && f === l || (t.includes("immediate") && (f ? a() : s()), c(f), l = f, d = !1);
  }));
});
A("for", (e, { expression: t }, { effect: n, cleanup: r }) => {
  let i = io(t), s = v(e, i.items), o = v(
    e,
    // the x-bind:key expression is stored for our use instead of evaluated.
    e._x_keyExpression || "index"
  );
  e._x_prevKeys = [], e._x_lookup = {}, n(() => ro(e, i, s, o)), r(() => {
    Object.values(e._x_lookup).forEach((a) => a.remove()), delete e._x_prevKeys, delete e._x_lookup;
  });
});
function ro(e, t, n, r) {
  let i = (o) => typeof o == "object" && !Array.isArray(o), s = e;
  n((o) => {
    so(o) && o >= 0 && (o = Array.from(Array(o).keys(), (p) => p + 1)), o === void 0 && (o = []);
    let a = e._x_lookup, c = e._x_prevKeys, l = [], d = [];
    if (i(o))
      o = Object.entries(o).map(([p, y]) => {
        let x = cn(t, y, p, o);
        r((w) => {
          d.includes(w) && T("Duplicate key on x-for", e), d.push(w);
        }, { scope: { index: p, ...x } }), l.push(x);
      });
    else
      for (let p = 0; p < o.length; p++) {
        let y = cn(t, o[p], p, o);
        r((x) => {
          d.includes(x) && T("Duplicate key on x-for", e), d.push(x);
        }, { scope: { index: p, ...y } }), l.push(y);
      }
    let f = [], m = [], b = [], h = [];
    for (let p = 0; p < c.length; p++) {
      let y = c[p];
      d.indexOf(y) === -1 && b.push(y);
    }
    c = c.filter((p) => !b.includes(p));
    let _ = "template";
    for (let p = 0; p < d.length; p++) {
      let y = d[p], x = c.indexOf(y);
      if (x === -1)
        c.splice(p, 0, y), f.push([_, p]);
      else if (x !== p) {
        let w = c.splice(p, 1)[0], R = c.splice(x - 1, 1)[0];
        c.splice(p, 0, R), c.splice(x, 0, w), m.push([w, R]);
      } else
        h.push(y);
      _ = y;
    }
    for (let p = 0; p < b.length; p++) {
      let y = b[p];
      a[y]._x_effects && a[y]._x_effects.forEach(xn), a[y].remove(), a[y] = null, delete a[y];
    }
    for (let p = 0; p < m.length; p++) {
      let [y, x] = m[p], w = a[y], R = a[x], Y = document.createElement("div");
      O(() => {
        R || T('x-for ":key" is undefined or invalid', s, x, a), R.after(Y), w.after(R), R._x_currentIfEl && R.after(R._x_currentIfEl), Y.before(w), w._x_currentIfEl && w.after(w._x_currentIfEl), Y.remove();
      }), R._x_refreshXForScope(l[d.indexOf(x)]);
    }
    for (let p = 0; p < f.length; p++) {
      let [y, x] = f[p], w = y === "template" ? s : a[y];
      w._x_currentIfEl && (w = w._x_currentIfEl);
      let R = l[x], Y = d[x], se = document.importNode(s.content, !0).firstElementChild, Wt = te(R);
      _e(se, Wt, s), se._x_refreshXForScope = (Qr) => {
        Object.entries(Qr).forEach(([ei, ti]) => {
          Wt[ei] = ti;
        });
      }, O(() => {
        w.after(se), H(() => I(se))();
      }), typeof Y == "object" && T("x-for key cannot be an object, it must be a string or an integer", s), a[Y] = se;
    }
    for (let p = 0; p < h.length; p++)
      a[h[p]]._x_refreshXForScope(l[d.indexOf(h[p])]);
    s._x_prevKeys = d;
  });
}
function io(e) {
  let t = /,([^,\}\]]*)(?:,([^,\}\]]*))?$/, n = /^\s*\(|\)\s*$/g, r = /([\s\S]*?)\s+(?:in|of)\s+([\s\S]*)/, i = e.match(r);
  if (!i)
    return;
  let s = {};
  s.items = i[2].trim();
  let o = i[1].replace(n, "").trim(), a = o.match(t);
  return a ? (s.item = o.replace(t, "").trim(), s.index = a[1].trim(), a[2] && (s.collection = a[2].trim())) : s.item = o, s;
}
function cn(e, t, n, r) {
  let i = {};
  return /^\[.*\]$/.test(e.item) && Array.isArray(t) ? e.item.replace("[", "").replace("]", "").split(",").map((o) => o.trim()).forEach((o, a) => {
    i[o] = t[a];
  }) : /^\{.*\}$/.test(e.item) && !Array.isArray(t) && typeof t == "object" ? e.item.replace("{", "").replace("}", "").split(",").map((o) => o.trim()).forEach((o) => {
    i[o] = t[o];
  }) : i[e.item] = t, e.index && (i[e.index] = n), e.collection && (i[e.collection] = r), i;
}
function so(e) {
  return !Array.isArray(e) && !isNaN(e);
}
function Pr() {
}
Pr.inline = (e, { expression: t }, { cleanup: n }) => {
  let r = je(e);
  r._x_refs || (r._x_refs = {}), r._x_refs[t] = e, n(() => delete r._x_refs[t]);
};
A("ref", Pr);
A("if", (e, { expression: t }, { effect: n, cleanup: r }) => {
  e.tagName.toLowerCase() !== "template" && T("x-if can only be used on a <template> tag", e);
  let i = v(e, t), s = () => {
    if (e._x_currentIfEl)
      return e._x_currentIfEl;
    let a = e.content.cloneNode(!0).firstElementChild;
    return _e(a, {}, e), O(() => {
      e.after(a), H(() => I(a))();
    }), e._x_currentIfEl = a, e._x_undoIf = () => {
      k(a, (c) => {
        c._x_effects && c._x_effects.forEach(xn);
      }), a.remove(), delete e._x_currentIfEl;
    }, a;
  }, o = () => {
    e._x_undoIf && (e._x_undoIf(), delete e._x_undoIf);
  };
  n(() => i((a) => {
    a ? s() : o();
  })), r(() => e._x_undoIf && e._x_undoIf());
});
A("id", (e, { expression: t }, { evaluate: n }) => {
  n(t).forEach((i) => Ks(e, i));
});
Be((e, t) => {
  e._x_ids && (t._x_ids = e._x_ids);
});
Nt($n("@", Un(re("on:"))));
A("on", H((e, { value: t, modifiers: n, expression: r }, { cleanup: i }) => {
  let s = r ? v(e, r) : () => {
  };
  e.tagName.toLowerCase() === "template" && (e._x_forwardEvents || (e._x_forwardEvents = []), e._x_forwardEvents.includes(t) || e._x_forwardEvents.push(t));
  let o = yt(e, t, n, (a) => {
    s(() => {
    }, { scope: { $event: a }, params: [a] });
  });
  i(() => o());
}));
Ue("Collapse", "collapse", "collapse");
Ue("Intersect", "intersect", "intersect");
Ue("Focus", "trap", "focus");
Ue("Mask", "mask", "mask");
function Ue(e, t, n) {
  A(t, (r) => T(`You can't use [x-${t}] without first installing the "${e}" plugin here: https://alpinejs.dev/plugins/${n}`, r));
}
ge.setEvaluator(In);
ge.setReactivityEngine({ reactive: Ht, effect: ys, release: gs, raw: E });
var oo = ge, Nr = oo;
function Fr(e, t) {
  return function() {
    return e.apply(t, arguments);
  };
}
const { toString: ao } = Object.prototype, { getPrototypeOf: qt } = Object, He = /* @__PURE__ */ ((e) => (t) => {
  const n = ao.call(t);
  return e[n] || (e[n] = n.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null)), j = (e) => (e = e.toLowerCase(), (t) => He(t) === e), qe = (e) => (t) => typeof t === e, { isArray: ie } = Array, he = qe("undefined");
function co(e) {
  return e !== null && !he(e) && e.constructor !== null && !he(e.constructor) && C(e.constructor.isBuffer) && e.constructor.isBuffer(e);
}
const Mr = j("ArrayBuffer");
function uo(e) {
  let t;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? t = ArrayBuffer.isView(e) : t = e && e.buffer && Mr(e.buffer), t;
}
const lo = qe("string"), C = qe("function"), Lr = qe("number"), ze = (e) => e !== null && typeof e == "object", fo = (e) => e === !0 || e === !1, Ce = (e) => {
  if (He(e) !== "object")
    return !1;
  const t = qt(e);
  return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e);
}, po = j("Date"), ho = j("File"), _o = j("Blob"), mo = j("FileList"), yo = (e) => ze(e) && C(e.pipe), go = (e) => {
  let t;
  return e && (typeof FormData == "function" && e instanceof FormData || C(e.append) && ((t = He(e)) === "formdata" || // detect form-data instance
  t === "object" && C(e.toString) && e.toString() === "[object FormData]"));
}, bo = j("URLSearchParams"), xo = (e) => e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function be(e, t, { allOwnKeys: n = !1 } = {}) {
  if (e === null || typeof e > "u")
    return;
  let r, i;
  if (typeof e != "object" && (e = [e]), ie(e))
    for (r = 0, i = e.length; r < i; r++)
      t.call(null, e[r], r, e);
  else {
    const s = n ? Object.getOwnPropertyNames(e) : Object.keys(e), o = s.length;
    let a;
    for (r = 0; r < o; r++)
      a = s[r], t.call(null, e[a], a, e);
  }
}
function jr(e, t) {
  t = t.toLowerCase();
  const n = Object.keys(e);
  let r = n.length, i;
  for (; r-- > 0; )
    if (i = n[r], t === i.toLowerCase())
      return i;
  return null;
}
const Ir = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global, Br = (e) => !he(e) && e !== Ir;
function gt() {
  const { caseless: e } = Br(this) && this || {}, t = {}, n = (r, i) => {
    const s = e && jr(t, i) || i;
    Ce(t[s]) && Ce(r) ? t[s] = gt(t[s], r) : Ce(r) ? t[s] = gt({}, r) : ie(r) ? t[s] = r.slice() : t[s] = r;
  };
  for (let r = 0, i = arguments.length; r < i; r++)
    arguments[r] && be(arguments[r], n);
  return t;
}
const wo = (e, t, n, { allOwnKeys: r } = {}) => (be(t, (i, s) => {
  n && C(i) ? e[s] = Fr(i, n) : e[s] = i;
}, { allOwnKeys: r }), e), Eo = (e) => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e), So = (e, t, n, r) => {
  e.prototype = Object.create(t.prototype, r), e.prototype.constructor = e, Object.defineProperty(e, "super", {
    value: t.prototype
  }), n && Object.assign(e.prototype, n);
}, Ao = (e, t, n, r) => {
  let i, s, o;
  const a = {};
  if (t = t || {}, e == null)
    return t;
  do {
    for (i = Object.getOwnPropertyNames(e), s = i.length; s-- > 0; )
      o = i[s], (!r || r(o, e, t)) && !a[o] && (t[o] = e[o], a[o] = !0);
    e = n !== !1 && qt(e);
  } while (e && (!n || n(e, t)) && e !== Object.prototype);
  return t;
}, Oo = (e, t, n) => {
  e = String(e), (n === void 0 || n > e.length) && (n = e.length), n -= t.length;
  const r = e.indexOf(t, n);
  return r !== -1 && r === n;
}, vo = (e) => {
  if (!e)
    return null;
  if (ie(e))
    return e;
  let t = e.length;
  if (!Lr(t))
    return null;
  const n = new Array(t);
  for (; t-- > 0; )
    n[t] = e[t];
  return n;
}, Ro = /* @__PURE__ */ ((e) => (t) => e && t instanceof e)(typeof Uint8Array < "u" && qt(Uint8Array)), To = (e, t) => {
  const r = (e && e[Symbol.iterator]).call(e);
  let i;
  for (; (i = r.next()) && !i.done; ) {
    const s = i.value;
    t.call(e, s[0], s[1]);
  }
}, Co = (e, t) => {
  let n;
  const r = [];
  for (; (n = e.exec(t)) !== null; )
    r.push(n);
  return r;
}, Po = j("HTMLFormElement"), No = (e) => e.toLowerCase().replace(
  /[-_\s]([a-z\d])(\w*)/g,
  function(n, r, i) {
    return r.toUpperCase() + i;
  }
), un = (({ hasOwnProperty: e }) => (t, n) => e.call(t, n))(Object.prototype), Fo = j("RegExp"), Dr = (e, t) => {
  const n = Object.getOwnPropertyDescriptors(e), r = {};
  be(n, (i, s) => {
    let o;
    (o = t(i, s, e)) !== !1 && (r[s] = o || i);
  }), Object.defineProperties(e, r);
}, Mo = (e) => {
  Dr(e, (t, n) => {
    if (C(e) && ["arguments", "caller", "callee"].indexOf(n) !== -1)
      return !1;
    const r = e[n];
    if (C(r)) {
      if (t.enumerable = !1, "writable" in t) {
        t.writable = !1;
        return;
      }
      t.set || (t.set = () => {
        throw Error("Can not rewrite read-only method '" + n + "'");
      });
    }
  });
}, Lo = (e, t) => {
  const n = {}, r = (i) => {
    i.forEach((s) => {
      n[s] = !0;
    });
  };
  return ie(e) ? r(e) : r(String(e).split(t)), n;
}, jo = () => {
}, Io = (e, t) => (e = +e, Number.isFinite(e) ? e : t), Ye = "abcdefghijklmnopqrstuvwxyz", ln = "0123456789", kr = {
  DIGIT: ln,
  ALPHA: Ye,
  ALPHA_DIGIT: Ye + Ye.toUpperCase() + ln
}, Bo = (e = 16, t = kr.ALPHA_DIGIT) => {
  let n = "";
  const { length: r } = t;
  for (; e--; )
    n += t[Math.random() * r | 0];
  return n;
};
function Do(e) {
  return !!(e && C(e.append) && e[Symbol.toStringTag] === "FormData" && e[Symbol.iterator]);
}
const ko = (e) => {
  const t = new Array(10), n = (r, i) => {
    if (ze(r)) {
      if (t.indexOf(r) >= 0)
        return;
      if (!("toJSON" in r)) {
        t[i] = r;
        const s = ie(r) ? [] : {};
        return be(r, (o, a) => {
          const c = n(o, i + 1);
          !he(c) && (s[a] = c);
        }), t[i] = void 0, s;
      }
    }
    return r;
  };
  return n(e, 0);
}, $o = j("AsyncFunction"), Uo = (e) => e && (ze(e) || C(e)) && C(e.then) && C(e.catch), u = {
  isArray: ie,
  isArrayBuffer: Mr,
  isBuffer: co,
  isFormData: go,
  isArrayBufferView: uo,
  isString: lo,
  isNumber: Lr,
  isBoolean: fo,
  isObject: ze,
  isPlainObject: Ce,
  isUndefined: he,
  isDate: po,
  isFile: ho,
  isBlob: _o,
  isRegExp: Fo,
  isFunction: C,
  isStream: yo,
  isURLSearchParams: bo,
  isTypedArray: Ro,
  isFileList: mo,
  forEach: be,
  merge: gt,
  extend: wo,
  trim: xo,
  stripBOM: Eo,
  inherits: So,
  toFlatObject: Ao,
  kindOf: He,
  kindOfTest: j,
  endsWith: Oo,
  toArray: vo,
  forEachEntry: To,
  matchAll: Co,
  isHTMLForm: Po,
  hasOwnProperty: un,
  hasOwnProp: un,
  // an alias to avoid ESLint no-prototype-builtins detection
  reduceDescriptors: Dr,
  freezeMethods: Mo,
  toObjectSet: Lo,
  toCamelCase: No,
  noop: jo,
  toFiniteNumber: Io,
  findKey: jr,
  global: Ir,
  isContextDefined: Br,
  ALPHABET: kr,
  generateString: Bo,
  isSpecCompliantForm: Do,
  toJSONObject: ko,
  isAsyncFn: $o,
  isThenable: Uo
};
function g(e, t, n, r, i) {
  Error.call(this), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack, this.message = e, this.name = "AxiosError", t && (this.code = t), n && (this.config = n), r && (this.request = r), i && (this.response = i);
}
u.inherits(g, Error, {
  toJSON: function() {
    return {
      // Standard
      message: this.message,
      name: this.name,
      // Microsoft
      description: this.description,
      number: this.number,
      // Mozilla
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      // Axios
      config: u.toJSONObject(this.config),
      code: this.code,
      status: this.response && this.response.status ? this.response.status : null
    };
  }
});
const $r = g.prototype, Ur = {};
[
  "ERR_BAD_OPTION_VALUE",
  "ERR_BAD_OPTION",
  "ECONNABORTED",
  "ETIMEDOUT",
  "ERR_NETWORK",
  "ERR_FR_TOO_MANY_REDIRECTS",
  "ERR_DEPRECATED",
  "ERR_BAD_RESPONSE",
  "ERR_BAD_REQUEST",
  "ERR_CANCELED",
  "ERR_NOT_SUPPORT",
  "ERR_INVALID_URL"
  // eslint-disable-next-line func-names
].forEach((e) => {
  Ur[e] = { value: e };
});
Object.defineProperties(g, Ur);
Object.defineProperty($r, "isAxiosError", { value: !0 });
g.from = (e, t, n, r, i, s) => {
  const o = Object.create($r);
  return u.toFlatObject(e, o, function(c) {
    return c !== Error.prototype;
  }, (a) => a !== "isAxiosError"), g.call(o, e.message, t, n, r, i), o.cause = e, o.name = e.name, s && Object.assign(o, s), o;
};
const Ho = null;
function bt(e) {
  return u.isPlainObject(e) || u.isArray(e);
}
function Hr(e) {
  return u.endsWith(e, "[]") ? e.slice(0, -2) : e;
}
function fn(e, t, n) {
  return e ? e.concat(t).map(function(i, s) {
    return i = Hr(i), !n && s ? "[" + i + "]" : i;
  }).join(n ? "." : "") : t;
}
function qo(e) {
  return u.isArray(e) && !e.some(bt);
}
const zo = u.toFlatObject(u, {}, null, function(t) {
  return /^is[A-Z]/.test(t);
});
function Ke(e, t, n) {
  if (!u.isObject(e))
    throw new TypeError("target must be an object");
  t = t || new FormData(), n = u.toFlatObject(n, {
    metaTokens: !0,
    dots: !1,
    indexes: !1
  }, !1, function(_, p) {
    return !u.isUndefined(p[_]);
  });
  const r = n.metaTokens, i = n.visitor || d, s = n.dots, o = n.indexes, c = (n.Blob || typeof Blob < "u" && Blob) && u.isSpecCompliantForm(t);
  if (!u.isFunction(i))
    throw new TypeError("visitor must be a function");
  function l(h) {
    if (h === null)
      return "";
    if (u.isDate(h))
      return h.toISOString();
    if (!c && u.isBlob(h))
      throw new g("Blob is not supported. Use a Buffer instead.");
    return u.isArrayBuffer(h) || u.isTypedArray(h) ? c && typeof Blob == "function" ? new Blob([h]) : Buffer.from(h) : h;
  }
  function d(h, _, p) {
    let y = h;
    if (h && !p && typeof h == "object") {
      if (u.endsWith(_, "{}"))
        _ = r ? _ : _.slice(0, -2), h = JSON.stringify(h);
      else if (u.isArray(h) && qo(h) || (u.isFileList(h) || u.endsWith(_, "[]")) && (y = u.toArray(h)))
        return _ = Hr(_), y.forEach(function(w, R) {
          !(u.isUndefined(w) || w === null) && t.append(
            // eslint-disable-next-line no-nested-ternary
            o === !0 ? fn([_], R, s) : o === null ? _ : _ + "[]",
            l(w)
          );
        }), !1;
    }
    return bt(h) ? !0 : (t.append(fn(p, _, s), l(h)), !1);
  }
  const f = [], m = Object.assign(zo, {
    defaultVisitor: d,
    convertValue: l,
    isVisitable: bt
  });
  function b(h, _) {
    if (!u.isUndefined(h)) {
      if (f.indexOf(h) !== -1)
        throw Error("Circular reference detected in " + _.join("."));
      f.push(h), u.forEach(h, function(y, x) {
        (!(u.isUndefined(y) || y === null) && i.call(
          t,
          y,
          u.isString(x) ? x.trim() : x,
          _,
          m
        )) === !0 && b(y, _ ? _.concat(x) : [x]);
      }), f.pop();
    }
  }
  if (!u.isObject(e))
    throw new TypeError("data must be an object");
  return b(e), t;
}
function dn(e) {
  const t = {
    "!": "%21",
    "'": "%27",
    "(": "%28",
    ")": "%29",
    "~": "%7E",
    "%20": "+",
    "%00": "\0"
  };
  return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g, function(r) {
    return t[r];
  });
}
function zt(e, t) {
  this._pairs = [], e && Ke(e, this, t);
}
const qr = zt.prototype;
qr.append = function(t, n) {
  this._pairs.push([t, n]);
};
qr.toString = function(t) {
  const n = t ? function(r) {
    return t.call(this, r, dn);
  } : dn;
  return this._pairs.map(function(i) {
    return n(i[0]) + "=" + n(i[1]);
  }, "").join("&");
};
function Ko(e) {
  return encodeURIComponent(e).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
}
function zr(e, t, n) {
  if (!t)
    return e;
  const r = n && n.encode || Ko, i = n && n.serialize;
  let s;
  if (i ? s = i(t, n) : s = u.isURLSearchParams(t) ? t.toString() : new zt(t, n).toString(r), s) {
    const o = e.indexOf("#");
    o !== -1 && (e = e.slice(0, o)), e += (e.indexOf("?") === -1 ? "?" : "&") + s;
  }
  return e;
}
class pn {
  constructor() {
    this.handlers = [];
  }
  /**
   * Add a new interceptor to the stack
   *
   * @param {Function} fulfilled The function to handle `then` for a `Promise`
   * @param {Function} rejected The function to handle `reject` for a `Promise`
   *
   * @return {Number} An ID used to remove interceptor later
   */
  use(t, n, r) {
    return this.handlers.push({
      fulfilled: t,
      rejected: n,
      synchronous: r ? r.synchronous : !1,
      runWhen: r ? r.runWhen : null
    }), this.handlers.length - 1;
  }
  /**
   * Remove an interceptor from the stack
   *
   * @param {Number} id The ID that was returned by `use`
   *
   * @returns {Boolean} `true` if the interceptor was removed, `false` otherwise
   */
  eject(t) {
    this.handlers[t] && (this.handlers[t] = null);
  }
  /**
   * Clear all interceptors from the stack
   *
   * @returns {void}
   */
  clear() {
    this.handlers && (this.handlers = []);
  }
  /**
   * Iterate over all the registered interceptors
   *
   * This method is particularly useful for skipping over any
   * interceptors that may have become `null` calling `eject`.
   *
   * @param {Function} fn The function to call for each interceptor
   *
   * @returns {void}
   */
  forEach(t) {
    u.forEach(this.handlers, function(r) {
      r !== null && t(r);
    });
  }
}
const Kr = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1
}, Jo = typeof URLSearchParams < "u" ? URLSearchParams : zt, Wo = typeof FormData < "u" ? FormData : null, Vo = typeof Blob < "u" ? Blob : null, Xo = {
  isBrowser: !0,
  classes: {
    URLSearchParams: Jo,
    FormData: Wo,
    Blob: Vo
  },
  protocols: ["http", "https", "file", "blob", "url", "data"]
}, Jr = typeof window < "u" && typeof document < "u", Go = ((e) => Jr && ["ReactNative", "NativeScript", "NS"].indexOf(e) < 0)(typeof navigator < "u" && navigator.product), Yo = typeof WorkerGlobalScope < "u" && // eslint-disable-next-line no-undef
self instanceof WorkerGlobalScope && typeof self.importScripts == "function", Zo = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  hasBrowserEnv: Jr,
  hasStandardBrowserEnv: Go,
  hasStandardBrowserWebWorkerEnv: Yo
}, Symbol.toStringTag, { value: "Module" })), L = {
  ...Zo,
  ...Xo
};
function Qo(e, t) {
  return Ke(e, new L.classes.URLSearchParams(), Object.assign({
    visitor: function(n, r, i, s) {
      return L.isNode && u.isBuffer(n) ? (this.append(r, n.toString("base64")), !1) : s.defaultVisitor.apply(this, arguments);
    }
  }, t));
}
function ea(e) {
  return u.matchAll(/\w+|\[(\w*)]/g, e).map((t) => t[0] === "[]" ? "" : t[1] || t[0]);
}
function ta(e) {
  const t = {}, n = Object.keys(e);
  let r;
  const i = n.length;
  let s;
  for (r = 0; r < i; r++)
    s = n[r], t[s] = e[s];
  return t;
}
function Wr(e) {
  function t(n, r, i, s) {
    let o = n[s++];
    if (o === "__proto__")
      return !0;
    const a = Number.isFinite(+o), c = s >= n.length;
    return o = !o && u.isArray(i) ? i.length : o, c ? (u.hasOwnProp(i, o) ? i[o] = [i[o], r] : i[o] = r, !a) : ((!i[o] || !u.isObject(i[o])) && (i[o] = []), t(n, r, i[o], s) && u.isArray(i[o]) && (i[o] = ta(i[o])), !a);
  }
  if (u.isFormData(e) && u.isFunction(e.entries)) {
    const n = {};
    return u.forEachEntry(e, (r, i) => {
      t(ea(r), i, n, 0);
    }), n;
  }
  return null;
}
function na(e, t, n) {
  if (u.isString(e))
    try {
      return (t || JSON.parse)(e), u.trim(e);
    } catch (r) {
      if (r.name !== "SyntaxError")
        throw r;
    }
  return (n || JSON.stringify)(e);
}
const xe = {
  transitional: Kr,
  adapter: ["xhr", "http"],
  transformRequest: [function(t, n) {
    const r = n.getContentType() || "", i = r.indexOf("application/json") > -1, s = u.isObject(t);
    if (s && u.isHTMLForm(t) && (t = new FormData(t)), u.isFormData(t))
      return i ? JSON.stringify(Wr(t)) : t;
    if (u.isArrayBuffer(t) || u.isBuffer(t) || u.isStream(t) || u.isFile(t) || u.isBlob(t))
      return t;
    if (u.isArrayBufferView(t))
      return t.buffer;
    if (u.isURLSearchParams(t))
      return n.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), t.toString();
    let a;
    if (s) {
      if (r.indexOf("application/x-www-form-urlencoded") > -1)
        return Qo(t, this.formSerializer).toString();
      if ((a = u.isFileList(t)) || r.indexOf("multipart/form-data") > -1) {
        const c = this.env && this.env.FormData;
        return Ke(
          a ? { "files[]": t } : t,
          c && new c(),
          this.formSerializer
        );
      }
    }
    return s || i ? (n.setContentType("application/json", !1), na(t)) : t;
  }],
  transformResponse: [function(t) {
    const n = this.transitional || xe.transitional, r = n && n.forcedJSONParsing, i = this.responseType === "json";
    if (t && u.isString(t) && (r && !this.responseType || i)) {
      const o = !(n && n.silentJSONParsing) && i;
      try {
        return JSON.parse(t);
      } catch (a) {
        if (o)
          throw a.name === "SyntaxError" ? g.from(a, g.ERR_BAD_RESPONSE, this, null, this.response) : a;
      }
    }
    return t;
  }],
  /**
   * A timeout in milliseconds to abort a request. If set to 0 (default) a
   * timeout is not created.
   */
  timeout: 0,
  xsrfCookieName: "XSRF-TOKEN",
  xsrfHeaderName: "X-XSRF-TOKEN",
  maxContentLength: -1,
  maxBodyLength: -1,
  env: {
    FormData: L.classes.FormData,
    Blob: L.classes.Blob
  },
  validateStatus: function(t) {
    return t >= 200 && t < 300;
  },
  headers: {
    common: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": void 0
    }
  }
};
u.forEach(["delete", "get", "head", "post", "put", "patch"], (e) => {
  xe.headers[e] = {};
});
const ra = u.toObjectSet([
  "age",
  "authorization",
  "content-length",
  "content-type",
  "etag",
  "expires",
  "from",
  "host",
  "if-modified-since",
  "if-unmodified-since",
  "last-modified",
  "location",
  "max-forwards",
  "proxy-authorization",
  "referer",
  "retry-after",
  "user-agent"
]), ia = (e) => {
  const t = {};
  let n, r, i;
  return e && e.split(`
`).forEach(function(o) {
    i = o.indexOf(":"), n = o.substring(0, i).trim().toLowerCase(), r = o.substring(i + 1).trim(), !(!n || t[n] && ra[n]) && (n === "set-cookie" ? t[n] ? t[n].push(r) : t[n] = [r] : t[n] = t[n] ? t[n] + ", " + r : r);
  }), t;
}, hn = Symbol("internals");
function ue(e) {
  return e && String(e).trim().toLowerCase();
}
function Pe(e) {
  return e === !1 || e == null ? e : u.isArray(e) ? e.map(Pe) : String(e);
}
function sa(e) {
  const t = /* @__PURE__ */ Object.create(null), n = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let r;
  for (; r = n.exec(e); )
    t[r[1]] = r[2];
  return t;
}
const oa = (e) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());
function Ze(e, t, n, r, i) {
  if (u.isFunction(r))
    return r.call(this, t, n);
  if (i && (t = n), !!u.isString(t)) {
    if (u.isString(r))
      return t.indexOf(r) !== -1;
    if (u.isRegExp(r))
      return r.test(t);
  }
}
function aa(e) {
  return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (t, n, r) => n.toUpperCase() + r);
}
function ca(e, t) {
  const n = u.toCamelCase(" " + t);
  ["get", "set", "has"].forEach((r) => {
    Object.defineProperty(e, r + n, {
      value: function(i, s, o) {
        return this[r].call(this, t, i, s, o);
      },
      configurable: !0
    });
  });
}
class P {
  constructor(t) {
    t && this.set(t);
  }
  set(t, n, r) {
    const i = this;
    function s(a, c, l) {
      const d = ue(c);
      if (!d)
        throw new Error("header name must be a non-empty string");
      const f = u.findKey(i, d);
      (!f || i[f] === void 0 || l === !0 || l === void 0 && i[f] !== !1) && (i[f || c] = Pe(a));
    }
    const o = (a, c) => u.forEach(a, (l, d) => s(l, d, c));
    return u.isPlainObject(t) || t instanceof this.constructor ? o(t, n) : u.isString(t) && (t = t.trim()) && !oa(t) ? o(ia(t), n) : t != null && s(n, t, r), this;
  }
  get(t, n) {
    if (t = ue(t), t) {
      const r = u.findKey(this, t);
      if (r) {
        const i = this[r];
        if (!n)
          return i;
        if (n === !0)
          return sa(i);
        if (u.isFunction(n))
          return n.call(this, i, r);
        if (u.isRegExp(n))
          return n.exec(i);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(t, n) {
    if (t = ue(t), t) {
      const r = u.findKey(this, t);
      return !!(r && this[r] !== void 0 && (!n || Ze(this, this[r], r, n)));
    }
    return !1;
  }
  delete(t, n) {
    const r = this;
    let i = !1;
    function s(o) {
      if (o = ue(o), o) {
        const a = u.findKey(r, o);
        a && (!n || Ze(r, r[a], a, n)) && (delete r[a], i = !0);
      }
    }
    return u.isArray(t) ? t.forEach(s) : s(t), i;
  }
  clear(t) {
    const n = Object.keys(this);
    let r = n.length, i = !1;
    for (; r--; ) {
      const s = n[r];
      (!t || Ze(this, this[s], s, t, !0)) && (delete this[s], i = !0);
    }
    return i;
  }
  normalize(t) {
    const n = this, r = {};
    return u.forEach(this, (i, s) => {
      const o = u.findKey(r, s);
      if (o) {
        n[o] = Pe(i), delete n[s];
        return;
      }
      const a = t ? aa(s) : String(s).trim();
      a !== s && delete n[s], n[a] = Pe(i), r[a] = !0;
    }), this;
  }
  concat(...t) {
    return this.constructor.concat(this, ...t);
  }
  toJSON(t) {
    const n = /* @__PURE__ */ Object.create(null);
    return u.forEach(this, (r, i) => {
      r != null && r !== !1 && (n[i] = t && u.isArray(r) ? r.join(", ") : r);
    }), n;
  }
  [Symbol.iterator]() {
    return Object.entries(this.toJSON())[Symbol.iterator]();
  }
  toString() {
    return Object.entries(this.toJSON()).map(([t, n]) => t + ": " + n).join(`
`);
  }
  get [Symbol.toStringTag]() {
    return "AxiosHeaders";
  }
  static from(t) {
    return t instanceof this ? t : new this(t);
  }
  static concat(t, ...n) {
    const r = new this(t);
    return n.forEach((i) => r.set(i)), r;
  }
  static accessor(t) {
    const r = (this[hn] = this[hn] = {
      accessors: {}
    }).accessors, i = this.prototype;
    function s(o) {
      const a = ue(o);
      r[a] || (ca(i, o), r[a] = !0);
    }
    return u.isArray(t) ? t.forEach(s) : s(t), this;
  }
}
P.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
u.reduceDescriptors(P.prototype, ({ value: e }, t) => {
  let n = t[0].toUpperCase() + t.slice(1);
  return {
    get: () => e,
    set(r) {
      this[n] = r;
    }
  };
});
u.freezeMethods(P);
function Qe(e, t) {
  const n = this || xe, r = t || n, i = P.from(r.headers);
  let s = r.data;
  return u.forEach(e, function(a) {
    s = a.call(n, s, i.normalize(), t ? t.status : void 0);
  }), i.normalize(), s;
}
function Vr(e) {
  return !!(e && e.__CANCEL__);
}
function we(e, t, n) {
  g.call(this, e ?? "canceled", g.ERR_CANCELED, t, n), this.name = "CanceledError";
}
u.inherits(we, g, {
  __CANCEL__: !0
});
function ua(e, t, n) {
  const r = n.config.validateStatus;
  !n.status || !r || r(n.status) ? e(n) : t(new g(
    "Request failed with status code " + n.status,
    [g.ERR_BAD_REQUEST, g.ERR_BAD_RESPONSE][Math.floor(n.status / 100) - 4],
    n.config,
    n.request,
    n
  ));
}
const la = L.hasStandardBrowserEnv ? (
  // Standard browser envs support document.cookie
  {
    write(e, t, n, r, i, s) {
      const o = [e + "=" + encodeURIComponent(t)];
      u.isNumber(n) && o.push("expires=" + new Date(n).toGMTString()), u.isString(r) && o.push("path=" + r), u.isString(i) && o.push("domain=" + i), s === !0 && o.push("secure"), document.cookie = o.join("; ");
    },
    read(e) {
      const t = document.cookie.match(new RegExp("(^|;\\s*)(" + e + ")=([^;]*)"));
      return t ? decodeURIComponent(t[3]) : null;
    },
    remove(e) {
      this.write(e, "", Date.now() - 864e5);
    }
  }
) : (
  // Non-standard browser env (web workers, react-native) lack needed support.
  {
    write() {
    },
    read() {
      return null;
    },
    remove() {
    }
  }
);
function fa(e) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
}
function da(e, t) {
  return t ? e.replace(/\/?\/$/, "") + "/" + t.replace(/^\/+/, "") : e;
}
function Xr(e, t) {
  return e && !fa(t) ? da(e, t) : t;
}
const pa = L.hasStandardBrowserEnv ? (
  // Standard browser envs have full support of the APIs needed to test
  // whether the request URL is of the same origin as current location.
  function() {
    const t = /(msie|trident)/i.test(navigator.userAgent), n = document.createElement("a");
    let r;
    function i(s) {
      let o = s;
      return t && (n.setAttribute("href", o), o = n.href), n.setAttribute("href", o), {
        href: n.href,
        protocol: n.protocol ? n.protocol.replace(/:$/, "") : "",
        host: n.host,
        search: n.search ? n.search.replace(/^\?/, "") : "",
        hash: n.hash ? n.hash.replace(/^#/, "") : "",
        hostname: n.hostname,
        port: n.port,
        pathname: n.pathname.charAt(0) === "/" ? n.pathname : "/" + n.pathname
      };
    }
    return r = i(window.location.href), function(o) {
      const a = u.isString(o) ? i(o) : o;
      return a.protocol === r.protocol && a.host === r.host;
    };
  }()
) : (
  // Non standard browser envs (web workers, react-native) lack needed support.
  /* @__PURE__ */ function() {
    return function() {
      return !0;
    };
  }()
);
function ha(e) {
  const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
  return t && t[1] || "";
}
function _a(e, t) {
  e = e || 10;
  const n = new Array(e), r = new Array(e);
  let i = 0, s = 0, o;
  return t = t !== void 0 ? t : 1e3, function(c) {
    const l = Date.now(), d = r[s];
    o || (o = l), n[i] = c, r[i] = l;
    let f = s, m = 0;
    for (; f !== i; )
      m += n[f++], f = f % e;
    if (i = (i + 1) % e, i === s && (s = (s + 1) % e), l - o < t)
      return;
    const b = d && l - d;
    return b ? Math.round(m * 1e3 / b) : void 0;
  };
}
function _n(e, t) {
  let n = 0;
  const r = _a(50, 250);
  return (i) => {
    const s = i.loaded, o = i.lengthComputable ? i.total : void 0, a = s - n, c = r(a), l = s <= o;
    n = s;
    const d = {
      loaded: s,
      total: o,
      progress: o ? s / o : void 0,
      bytes: a,
      rate: c || void 0,
      estimated: c && o && l ? (o - s) / c : void 0,
      event: i
    };
    d[t ? "download" : "upload"] = !0, e(d);
  };
}
const ma = typeof XMLHttpRequest < "u", ya = ma && function(e) {
  return new Promise(function(n, r) {
    let i = e.data;
    const s = P.from(e.headers).normalize();
    let { responseType: o, withXSRFToken: a } = e, c;
    function l() {
      e.cancelToken && e.cancelToken.unsubscribe(c), e.signal && e.signal.removeEventListener("abort", c);
    }
    let d;
    if (u.isFormData(i)) {
      if (L.hasStandardBrowserEnv || L.hasStandardBrowserWebWorkerEnv)
        s.setContentType(!1);
      else if ((d = s.getContentType()) !== !1) {
        const [_, ...p] = d ? d.split(";").map((y) => y.trim()).filter(Boolean) : [];
        s.setContentType([_ || "multipart/form-data", ...p].join("; "));
      }
    }
    let f = new XMLHttpRequest();
    if (e.auth) {
      const _ = e.auth.username || "", p = e.auth.password ? unescape(encodeURIComponent(e.auth.password)) : "";
      s.set("Authorization", "Basic " + btoa(_ + ":" + p));
    }
    const m = Xr(e.baseURL, e.url);
    f.open(e.method.toUpperCase(), zr(m, e.params, e.paramsSerializer), !0), f.timeout = e.timeout;
    function b() {
      if (!f)
        return;
      const _ = P.from(
        "getAllResponseHeaders" in f && f.getAllResponseHeaders()
      ), y = {
        data: !o || o === "text" || o === "json" ? f.responseText : f.response,
        status: f.status,
        statusText: f.statusText,
        headers: _,
        config: e,
        request: f
      };
      ua(function(w) {
        n(w), l();
      }, function(w) {
        r(w), l();
      }, y), f = null;
    }
    if ("onloadend" in f ? f.onloadend = b : f.onreadystatechange = function() {
      !f || f.readyState !== 4 || f.status === 0 && !(f.responseURL && f.responseURL.indexOf("file:") === 0) || setTimeout(b);
    }, f.onabort = function() {
      f && (r(new g("Request aborted", g.ECONNABORTED, e, f)), f = null);
    }, f.onerror = function() {
      r(new g("Network Error", g.ERR_NETWORK, e, f)), f = null;
    }, f.ontimeout = function() {
      let p = e.timeout ? "timeout of " + e.timeout + "ms exceeded" : "timeout exceeded";
      const y = e.transitional || Kr;
      e.timeoutErrorMessage && (p = e.timeoutErrorMessage), r(new g(
        p,
        y.clarifyTimeoutError ? g.ETIMEDOUT : g.ECONNABORTED,
        e,
        f
      )), f = null;
    }, L.hasStandardBrowserEnv && (a && u.isFunction(a) && (a = a(e)), a || a !== !1 && pa(m))) {
      const _ = e.xsrfHeaderName && e.xsrfCookieName && la.read(e.xsrfCookieName);
      _ && s.set(e.xsrfHeaderName, _);
    }
    i === void 0 && s.setContentType(null), "setRequestHeader" in f && u.forEach(s.toJSON(), function(p, y) {
      f.setRequestHeader(y, p);
    }), u.isUndefined(e.withCredentials) || (f.withCredentials = !!e.withCredentials), o && o !== "json" && (f.responseType = e.responseType), typeof e.onDownloadProgress == "function" && f.addEventListener("progress", _n(e.onDownloadProgress, !0)), typeof e.onUploadProgress == "function" && f.upload && f.upload.addEventListener("progress", _n(e.onUploadProgress)), (e.cancelToken || e.signal) && (c = (_) => {
      f && (r(!_ || _.type ? new we(null, e, f) : _), f.abort(), f = null);
    }, e.cancelToken && e.cancelToken.subscribe(c), e.signal && (e.signal.aborted ? c() : e.signal.addEventListener("abort", c)));
    const h = ha(m);
    if (h && L.protocols.indexOf(h) === -1) {
      r(new g("Unsupported protocol " + h + ":", g.ERR_BAD_REQUEST, e));
      return;
    }
    f.send(i || null);
  });
}, xt = {
  http: Ho,
  xhr: ya
};
u.forEach(xt, (e, t) => {
  if (e) {
    try {
      Object.defineProperty(e, "name", { value: t });
    } catch {
    }
    Object.defineProperty(e, "adapterName", { value: t });
  }
});
const mn = (e) => `- ${e}`, ga = (e) => u.isFunction(e) || e === null || e === !1, Gr = {
  getAdapter: (e) => {
    e = u.isArray(e) ? e : [e];
    const { length: t } = e;
    let n, r;
    const i = {};
    for (let s = 0; s < t; s++) {
      n = e[s];
      let o;
      if (r = n, !ga(n) && (r = xt[(o = String(n)).toLowerCase()], r === void 0))
        throw new g(`Unknown adapter '${o}'`);
      if (r)
        break;
      i[o || "#" + s] = r;
    }
    if (!r) {
      const s = Object.entries(i).map(
        ([a, c]) => `adapter ${a} ` + (c === !1 ? "is not supported by the environment" : "is not available in the build")
      );
      let o = t ? s.length > 1 ? `since :
` + s.map(mn).join(`
`) : " " + mn(s[0]) : "as no adapter specified";
      throw new g(
        "There is no suitable adapter to dispatch the request " + o,
        "ERR_NOT_SUPPORT"
      );
    }
    return r;
  },
  adapters: xt
};
function et(e) {
  if (e.cancelToken && e.cancelToken.throwIfRequested(), e.signal && e.signal.aborted)
    throw new we(null, e);
}
function yn(e) {
  return et(e), e.headers = P.from(e.headers), e.data = Qe.call(
    e,
    e.transformRequest
  ), ["post", "put", "patch"].indexOf(e.method) !== -1 && e.headers.setContentType("application/x-www-form-urlencoded", !1), Gr.getAdapter(e.adapter || xe.adapter)(e).then(function(r) {
    return et(e), r.data = Qe.call(
      e,
      e.transformResponse,
      r
    ), r.headers = P.from(r.headers), r;
  }, function(r) {
    return Vr(r) || (et(e), r && r.response && (r.response.data = Qe.call(
      e,
      e.transformResponse,
      r.response
    ), r.response.headers = P.from(r.response.headers))), Promise.reject(r);
  });
}
const gn = (e) => e instanceof P ? { ...e } : e;
function ee(e, t) {
  t = t || {};
  const n = {};
  function r(l, d, f) {
    return u.isPlainObject(l) && u.isPlainObject(d) ? u.merge.call({ caseless: f }, l, d) : u.isPlainObject(d) ? u.merge({}, d) : u.isArray(d) ? d.slice() : d;
  }
  function i(l, d, f) {
    if (u.isUndefined(d)) {
      if (!u.isUndefined(l))
        return r(void 0, l, f);
    } else
      return r(l, d, f);
  }
  function s(l, d) {
    if (!u.isUndefined(d))
      return r(void 0, d);
  }
  function o(l, d) {
    if (u.isUndefined(d)) {
      if (!u.isUndefined(l))
        return r(void 0, l);
    } else
      return r(void 0, d);
  }
  function a(l, d, f) {
    if (f in t)
      return r(l, d);
    if (f in e)
      return r(void 0, l);
  }
  const c = {
    url: s,
    method: s,
    data: s,
    baseURL: o,
    transformRequest: o,
    transformResponse: o,
    paramsSerializer: o,
    timeout: o,
    timeoutMessage: o,
    withCredentials: o,
    withXSRFToken: o,
    adapter: o,
    responseType: o,
    xsrfCookieName: o,
    xsrfHeaderName: o,
    onUploadProgress: o,
    onDownloadProgress: o,
    decompress: o,
    maxContentLength: o,
    maxBodyLength: o,
    beforeRedirect: o,
    transport: o,
    httpAgent: o,
    httpsAgent: o,
    cancelToken: o,
    socketPath: o,
    responseEncoding: o,
    validateStatus: a,
    headers: (l, d) => i(gn(l), gn(d), !0)
  };
  return u.forEach(Object.keys(Object.assign({}, e, t)), function(d) {
    const f = c[d] || i, m = f(e[d], t[d], d);
    u.isUndefined(m) && f !== a || (n[d] = m);
  }), n;
}
const Yr = "1.6.8", Kt = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((e, t) => {
  Kt[e] = function(r) {
    return typeof r === e || "a" + (t < 1 ? "n " : " ") + e;
  };
});
const bn = {};
Kt.transitional = function(t, n, r) {
  function i(s, o) {
    return "[Axios v" + Yr + "] Transitional option '" + s + "'" + o + (r ? ". " + r : "");
  }
  return (s, o, a) => {
    if (t === !1)
      throw new g(
        i(o, " has been removed" + (n ? " in " + n : "")),
        g.ERR_DEPRECATED
      );
    return n && !bn[o] && (bn[o] = !0, console.warn(
      i(
        o,
        " has been deprecated since v" + n + " and will be removed in the near future"
      )
    )), t ? t(s, o, a) : !0;
  };
};
function ba(e, t, n) {
  if (typeof e != "object")
    throw new g("options must be an object", g.ERR_BAD_OPTION_VALUE);
  const r = Object.keys(e);
  let i = r.length;
  for (; i-- > 0; ) {
    const s = r[i], o = t[s];
    if (o) {
      const a = e[s], c = a === void 0 || o(a, s, e);
      if (c !== !0)
        throw new g("option " + s + " must be " + c, g.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (n !== !0)
      throw new g("Unknown option " + s, g.ERR_BAD_OPTION);
  }
}
const wt = {
  assertOptions: ba,
  validators: Kt
}, D = wt.validators;
class X {
  constructor(t) {
    this.defaults = t, this.interceptors = {
      request: new pn(),
      response: new pn()
    };
  }
  /**
   * Dispatch a request
   *
   * @param {String|Object} configOrUrl The config specific for this request (merged with this.defaults)
   * @param {?Object} config
   *
   * @returns {Promise} The Promise to be fulfilled
   */
  async request(t, n) {
    try {
      return await this._request(t, n);
    } catch (r) {
      if (r instanceof Error) {
        let i;
        Error.captureStackTrace ? Error.captureStackTrace(i = {}) : i = new Error();
        const s = i.stack ? i.stack.replace(/^.+\n/, "") : "";
        r.stack ? s && !String(r.stack).endsWith(s.replace(/^.+\n.+\n/, "")) && (r.stack += `
` + s) : r.stack = s;
      }
      throw r;
    }
  }
  _request(t, n) {
    typeof t == "string" ? (n = n || {}, n.url = t) : n = t || {}, n = ee(this.defaults, n);
    const { transitional: r, paramsSerializer: i, headers: s } = n;
    r !== void 0 && wt.assertOptions(r, {
      silentJSONParsing: D.transitional(D.boolean),
      forcedJSONParsing: D.transitional(D.boolean),
      clarifyTimeoutError: D.transitional(D.boolean)
    }, !1), i != null && (u.isFunction(i) ? n.paramsSerializer = {
      serialize: i
    } : wt.assertOptions(i, {
      encode: D.function,
      serialize: D.function
    }, !0)), n.method = (n.method || this.defaults.method || "get").toLowerCase();
    let o = s && u.merge(
      s.common,
      s[n.method]
    );
    s && u.forEach(
      ["delete", "get", "head", "post", "put", "patch", "common"],
      (h) => {
        delete s[h];
      }
    ), n.headers = P.concat(o, s);
    const a = [];
    let c = !0;
    this.interceptors.request.forEach(function(_) {
      typeof _.runWhen == "function" && _.runWhen(n) === !1 || (c = c && _.synchronous, a.unshift(_.fulfilled, _.rejected));
    });
    const l = [];
    this.interceptors.response.forEach(function(_) {
      l.push(_.fulfilled, _.rejected);
    });
    let d, f = 0, m;
    if (!c) {
      const h = [yn.bind(this), void 0];
      for (h.unshift.apply(h, a), h.push.apply(h, l), m = h.length, d = Promise.resolve(n); f < m; )
        d = d.then(h[f++], h[f++]);
      return d;
    }
    m = a.length;
    let b = n;
    for (f = 0; f < m; ) {
      const h = a[f++], _ = a[f++];
      try {
        b = h(b);
      } catch (p) {
        _.call(this, p);
        break;
      }
    }
    try {
      d = yn.call(this, b);
    } catch (h) {
      return Promise.reject(h);
    }
    for (f = 0, m = l.length; f < m; )
      d = d.then(l[f++], l[f++]);
    return d;
  }
  getUri(t) {
    t = ee(this.defaults, t);
    const n = Xr(t.baseURL, t.url);
    return zr(n, t.params, t.paramsSerializer);
  }
}
u.forEach(["delete", "get", "head", "options"], function(t) {
  X.prototype[t] = function(n, r) {
    return this.request(ee(r || {}, {
      method: t,
      url: n,
      data: (r || {}).data
    }));
  };
});
u.forEach(["post", "put", "patch"], function(t) {
  function n(r) {
    return function(s, o, a) {
      return this.request(ee(a || {}, {
        method: t,
        headers: r ? {
          "Content-Type": "multipart/form-data"
        } : {},
        url: s,
        data: o
      }));
    };
  }
  X.prototype[t] = n(), X.prototype[t + "Form"] = n(!0);
});
class Jt {
  constructor(t) {
    if (typeof t != "function")
      throw new TypeError("executor must be a function.");
    let n;
    this.promise = new Promise(function(s) {
      n = s;
    });
    const r = this;
    this.promise.then((i) => {
      if (!r._listeners)
        return;
      let s = r._listeners.length;
      for (; s-- > 0; )
        r._listeners[s](i);
      r._listeners = null;
    }), this.promise.then = (i) => {
      let s;
      const o = new Promise((a) => {
        r.subscribe(a), s = a;
      }).then(i);
      return o.cancel = function() {
        r.unsubscribe(s);
      }, o;
    }, t(function(s, o, a) {
      r.reason || (r.reason = new we(s, o, a), n(r.reason));
    });
  }
  /**
   * Throws a `CanceledError` if cancellation has been requested.
   */
  throwIfRequested() {
    if (this.reason)
      throw this.reason;
  }
  /**
   * Subscribe to the cancel signal
   */
  subscribe(t) {
    if (this.reason) {
      t(this.reason);
      return;
    }
    this._listeners ? this._listeners.push(t) : this._listeners = [t];
  }
  /**
   * Unsubscribe from the cancel signal
   */
  unsubscribe(t) {
    if (!this._listeners)
      return;
    const n = this._listeners.indexOf(t);
    n !== -1 && this._listeners.splice(n, 1);
  }
  /**
   * Returns an object that contains a new `CancelToken` and a function that, when called,
   * cancels the `CancelToken`.
   */
  static source() {
    let t;
    return {
      token: new Jt(function(i) {
        t = i;
      }),
      cancel: t
    };
  }
}
function xa(e) {
  return function(n) {
    return e.apply(null, n);
  };
}
function wa(e) {
  return u.isObject(e) && e.isAxiosError === !0;
}
const Et = {
  Continue: 100,
  SwitchingProtocols: 101,
  Processing: 102,
  EarlyHints: 103,
  Ok: 200,
  Created: 201,
  Accepted: 202,
  NonAuthoritativeInformation: 203,
  NoContent: 204,
  ResetContent: 205,
  PartialContent: 206,
  MultiStatus: 207,
  AlreadyReported: 208,
  ImUsed: 226,
  MultipleChoices: 300,
  MovedPermanently: 301,
  Found: 302,
  SeeOther: 303,
  NotModified: 304,
  UseProxy: 305,
  Unused: 306,
  TemporaryRedirect: 307,
  PermanentRedirect: 308,
  BadRequest: 400,
  Unauthorized: 401,
  PaymentRequired: 402,
  Forbidden: 403,
  NotFound: 404,
  MethodNotAllowed: 405,
  NotAcceptable: 406,
  ProxyAuthenticationRequired: 407,
  RequestTimeout: 408,
  Conflict: 409,
  Gone: 410,
  LengthRequired: 411,
  PreconditionFailed: 412,
  PayloadTooLarge: 413,
  UriTooLong: 414,
  UnsupportedMediaType: 415,
  RangeNotSatisfiable: 416,
  ExpectationFailed: 417,
  ImATeapot: 418,
  MisdirectedRequest: 421,
  UnprocessableEntity: 422,
  Locked: 423,
  FailedDependency: 424,
  TooEarly: 425,
  UpgradeRequired: 426,
  PreconditionRequired: 428,
  TooManyRequests: 429,
  RequestHeaderFieldsTooLarge: 431,
  UnavailableForLegalReasons: 451,
  InternalServerError: 500,
  NotImplemented: 501,
  BadGateway: 502,
  ServiceUnavailable: 503,
  GatewayTimeout: 504,
  HttpVersionNotSupported: 505,
  VariantAlsoNegotiates: 506,
  InsufficientStorage: 507,
  LoopDetected: 508,
  NotExtended: 510,
  NetworkAuthenticationRequired: 511
};
Object.entries(Et).forEach(([e, t]) => {
  Et[t] = e;
});
function Zr(e) {
  const t = new X(e), n = Fr(X.prototype.request, t);
  return u.extend(n, X.prototype, t, { allOwnKeys: !0 }), u.extend(n, t, null, { allOwnKeys: !0 }), n.create = function(i) {
    return Zr(ee(e, i));
  }, n;
}
const S = Zr(xe);
S.Axios = X;
S.CanceledError = we;
S.CancelToken = Jt;
S.isCancel = Vr;
S.VERSION = Yr;
S.toFormData = Ke;
S.AxiosError = g;
S.Cancel = S.CanceledError;
S.all = function(t) {
  return Promise.all(t);
};
S.spread = xa;
S.isAxiosError = wa;
S.mergeConfig = ee;
S.AxiosHeaders = P;
S.formToJSON = (e) => Wr(u.isHTMLForm(e) ? new FormData(e) : e);
S.getAdapter = Gr.getAdapter;
S.HttpStatusCode = Et;
S.default = S;
window.axios = S;
window.axios.defaults.headers.common["X-Requested-With"] = "XMLHttpRequest";
window.Alpine = Nr;
Nr.start();
