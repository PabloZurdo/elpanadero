/* Animación de los anuncios de Vivamóvil (El Panadero).
   Cada anuncio animado lleva la clase .vmx. Sus elementos llevan .kx y .k1…k8 (fase en la que entran)
   y, si salen antes del final, .ko2…ko8 (fase en la que se van). El motor añade al anuncio, o a cada
   diapositiva (.sl), las clases kon1…konN de forma acumulada según el tiempo de data-steps (ms).
   data-dur = duración de cada pase o diapositiva; data-loops = pases (máximo 3); data-end = diapositiva
   en la que se para. Al terminar queda el fotograma final, que es el anuncio completo.
   Normas: animación de 30 s como máximo y parada en el último fotograma; con «reducir movimiento»
   se muestra directamente el fotograma final; solo arranca cuando el anuncio está a la vista. */
(function () {
  "use strict";
  var MAXK = 8;
  var RM = false;
  try { RM = window.matchMedia("(prefers-reduced-motion: reduce)").matches; } catch (e) {}

  function stage(sc, n) { for (var i = 1; i <= MAXK; i++) sc.classList.toggle("kon" + i, i <= n); }

  function countUp(el) {
    var to = String(el.getAttribute("data-to") || el.textContent);
    var v = parseFloat(to.replace(/\./g, "").replace(",", "."));
    if (!isFinite(v)) return;
    var from = parseFloat(String(el.getAttribute("data-from") || "0").replace(",", ".")) || 0;
    var dec = (to.split(",")[1] || "").length, t0 = null, D = from > v ? 1100 : 750;
    function f(t) {
      if (!el.isConnected) return;
      if (t0 === null) t0 = t;
      var p = Math.min(1, (t - t0) / D), e = 1 - Math.pow(1 - p, 3);
      el.textContent = p < 1 ? (from + (v - from) * e).toFixed(dec).replace(".", ",") : to;
      if (p < 1) requestAnimationFrame(f);
    }
    requestAnimationFrame(f);
  }

  function play(ad) {
    var slides = Array.prototype.slice.call(ad.querySelectorAll(".sl"));
    var scopes = slides.length ? slides : [ad];
    var loops = Math.min(3, Math.max(1, +ad.getAttribute("data-loops") || 3));
    var end = Math.min(+ad.getAttribute("data-end") || 0, scopes.length - 1);
    var timers = [];
    function at(ms, fn) {
      timers.push(setTimeout(function () {
        if (!ad.isConnected) { timers.forEach(clearTimeout); return; }
        fn();
      }, ms));
    }
    function steps(sc) { return String(sc.getAttribute("data-steps") || ad.getAttribute("data-steps") || "").split(",").filter(Boolean).map(Number); }
    function dur(sc) { return +(sc.getAttribute("data-dur") || ad.getAttribute("data-dur") || 7000); }
    function show(sc) {
      if (slides.length) {
        slides.forEach(function (s) {
          if (s !== sc && s.classList.contains("act")) at(700, function () { if (!s.classList.contains("act")) stage(s, 0); });
          s.classList.toggle("act", s === sc);
        });
        var h = sc.getAttribute("data-href");
        if (h) ad.setAttribute("href", h);
      }
      stage(sc, 0);
      void sc.offsetWidth;
    }
    var cards = Array.prototype.slice.call(ad.querySelectorAll(".card"));
    if (RM) { show(scopes[end]); stage(scopes[end], MAXK); ad.classList.add("done"); return; }
    ad.classList.add("playing");
    var loopLen = scopes.reduce(function (n, sc) { return n + dur(sc); }, 0);
    var t = 0, stopAbs = 0, finished = false;
    for (var l = 0; l < loops && !finished; l++) {
      for (var i = 0; i < scopes.length; i++) {
        var last = l === loops - 1 && i === end;
        (function (sc, t, last) {
          var st = steps(sc), d = dur(sc);
          at(t, function () { show(sc); });
          st.forEach(function (ms, k) {
            at(t + ms, function () {
              stage(sc, k + 1);
              Array.prototype.forEach.call(sc.querySelectorAll(".k" + (k + 1) + " .cnt, .cnt.k" + (k + 1)), countUp);
            });
          });
          if (!last && !slides.length) at(t + d - 520, function () { stage(sc, 0); });
        })(scopes[i], t, last);
        if (last) { stopAbs = t + (steps(scopes[i]).slice(-1)[0] || 0); finished = true; break; }
        t += dur(scopes[i]);
      }
    }
    // tarjetas a pantalla completa (logotipo, teléfono): data-in y data-out en ms desde el inicio de cada pase
    var lastOut = stopAbs;
    cards.forEach(function (c) {
      var ci = +c.getAttribute("data-in") || 0, co = +c.getAttribute("data-out") || ci + 1500;
      for (var l = 0; l < loops; l++) {
        var a = l * loopLen + ci, b = l * loopLen + co;
        if (a > stopAbs + 1500) break;
        at(a, function () { c.classList.add("cin"); });
        at(b, function () { c.classList.remove("cin"); });
        lastOut = Math.max(lastOut, b);
      }
    });
    at(lastOut + 1200, function () { ad.classList.remove("playing"); ad.classList.add("done"); });
  }

  var io = null;
  if ("IntersectionObserver" in window) {
    io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting && en.intersectionRatio >= 0.5) { io.unobserve(en.target); play(en.target); }
      });
    }, { threshold: [0.5] });
  }

  function scan(root) {
    Array.prototype.forEach.call((root || document).querySelectorAll(".vmx:not(.armed)"), function (ad) {
      ad.classList.add("armed");
      if (io && !RM) io.observe(ad); else play(ad);
    });
  }

  window.VMAnim = { scan: scan };
})();
