/* Vedasaram opening animation: sacred words drift in and are drawn into the title. Tap to skip. */
(function () {
  'use strict';
  var WORDS = [
    // Bhagavad Gītā
    'धर्मक्षेत्रे कुरुक्षेत्रे', 'कर्मण्येवाधिकारस्ते', 'योगः कर्मसु कौशलम्', 'स्थितप्रज्ञ', 'मामेकं शरणं व्रज',
    'యోగః కర్మసు కౌశలమ్', 'కృష్ణం వందే జగద్గురుమ్',
    // Rudram
    'नमस्ते रुद्र मन्यव', 'नमः शिवाय', 'ॐ नमो भगवते रुद्राय', 'నమః శివాయ',
    // Viṣṇu Sahasranāmam
    'विश्वं विष्णुर्वषट्कारः', 'शुक्लाम्बरधरं विष्णुम्', 'ఓం నమో నారాయణాయ', 'పద్మనాభ',
    // Rāmāyaṇa
    'श्रीराम जय राम', 'रामो विग्रहवान् धर्मः', 'శ్రీ రామ రామ రామేతి', 'సీతారామ',
    // Mahābhārata / Upaniṣads / Vedas
    'धर्मो रक्षति रक्षितः', 'यतो धर्मस्ततो जयः', 'असतो मा सद्गमय', 'तमसो मा ज्योतिर्गमय',
    'तत्सवितुर्वरेण्यम्', 'अहं ब्रह्मास्मि', 'तत्त्वमसि', 'सत्यमेव जयते', 'ॐ शान्तिः',
    'హరే కృష్ణ', 'ధర్మం', 'సత్యం', 'ॐ'
  ];
  var GOLD = '240,192,64';

  function run() {
    if (document.getElementById('vs-splash')) return;
    var reduce = window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches;
    var W = window.innerWidth, H = window.innerHeight, small = Math.min(W, H) < 500;

    var css = document.createElement('style');
    css.textContent =
      '#vs-splash{position:fixed;inset:0;z-index:99999;overflow:hidden;cursor:pointer;contain:strict;' +
      'background:radial-gradient(ellipse at 50% 48%,#5a1a08 0%,#2a0a04 55%,#120402 100%)}' +
      '#vs-splash .gl{position:absolute;left:50%;top:50%;width:90vmin;height:90vmin;margin:-45vmin 0 0 -45vmin;border-radius:50%;' +
      'background:radial-gradient(circle,rgba(' + GOLD + ',.32) 0%,rgba(' + GOLD + ',0) 62%);opacity:0;will-change:opacity,transform}' +
      '#vs-splash .wd{position:absolute;left:50%;top:50%;white-space:nowrap;font-weight:600;color:#ffe2a0;' +
      'font-family:"Noto Sans Telugu","Noto Sans Devanagari","Kohinoor Devanagari",serif;' +
      'text-shadow:0 0 8px rgba(' + GOLD + ',.7);opacity:0;will-change:transform,opacity;backface-visibility:hidden}' +
      '#vs-splash .t{position:absolute;left:0;right:0;top:50%;transform:translateY(-50%);text-align:center;pointer-events:none}' +
      '#vs-splash .w{font-family:"Crimson Text",Georgia,serif;font-weight:700;font-size:clamp(2.4rem,11vw,4.2rem);' +
      'color:#fff;letter-spacing:.03em;line-height:1;text-shadow:0 0 18px rgba(' + GOLD + ',.55)}' +
      '#vs-splash .w b{display:inline-block;font-weight:700;opacity:0;will-change:transform,opacity}' +
      '#vs-splash .w b.g{color:#f0c040}' +
      '#vs-splash .s{margin-top:12px;font-family:"Noto Sans Telugu",serif;font-size:clamp(.95rem,4vw,1.2rem);' +
      'color:rgba(240,210,140,.9);letter-spacing:.06em;opacity:0}' +
      '#vs-splash .k{position:absolute;bottom:max(22px,env(safe-area-inset-bottom));left:0;right:0;text-align:center;' +
      'font:12px -apple-system,system-ui,sans-serif;color:rgba(240,220,180,.4);letter-spacing:.12em;text-transform:uppercase}';
    document.head.appendChild(css);

    var root = document.createElement('div');
    root.id = 'vs-splash';
    var title = 'Vedasaram';
    var pool = WORDS.slice().sort(function () { return Math.random() - .5; }).slice(0, small ? 20 : 28);
    root.innerHTML = '<div class="gl"></div>' +
      pool.map(function (w) { return '<span class="wd">' + w + '</span>'; }).join('') +
      '<div class="t"><div class="w">' +
      title.split('').map(function (ch, i) { return '<b' + (i >= 4 ? ' class="g"' : '') + '>' + ch + '</b>'; }).join('') +
      '</div><div class="s">వేదసారం · वेदसारम्</div></div><div class="k">Tap to skip</div>';
    document.body.appendChild(root);

    var letters = root.querySelectorAll('.w b'), sub = root.querySelector('.s'), glow = root.querySelector('.gl');
    var anims = [], done = false;
    function A(el, kf, opt) { var a = el.animate(kf, opt); anims.push(a); return a; }
    var smooth = 'cubic-bezier(.45,0,.25,1)';

    function finish() {
      if (done) return;
      done = true;
      anims.forEach(function (a) { try { a.finish(); } catch (e) {} });
      var out = root.animate([{ opacity: 1 }, { opacity: 0 }], { duration: 600, easing: 'ease', fill: 'forwards' });
      root.style.pointerEvents = 'none';
      out.onfinish = function () { root.remove(); css.remove(); };
      setTimeout(function () { if (root.parentNode) { root.remove(); css.remove(); } }, 1500);
    }
    root.addEventListener('click', finish);

    var GATHER = 1500, ABSORB = 1500, FLY = 900, END;
    if (reduce) {
      for (var r = 0; r < letters.length; r++) letters[r].style.opacity = 1;
      sub.style.opacity = 1;
      setTimeout(finish, 1400);
      return;
    }

    // Words: fade in where they lie, drift a little, then spiral into the title.
    var spans = root.querySelectorAll('.wd'), lastArrive = 0;
    for (var i = 0; i < spans.length; i++) {
      var el = spans[i];
      var sz = (small ? 14 : 17) + Math.random() * (small ? 10 : 14);
      el.style.fontSize = sz + 'px';
      var half = Math.min(el.offsetWidth / 2 + 8, W / 2 - 4), hh = el.offsetHeight / 2;
      var x, y;
      do { y = 40 + Math.random() * (H - 110); } while (Math.abs(y - H / 2) < 75);
      x = half + Math.random() * (W - 2 * half);
      x -= W / 2; y -= H / 2;                       // relative to centre
      var dx = (Math.random() - .5) * 30, dy = (Math.random() - .5) * 24 - 10;
      var born = Math.random() * 700;
      var leave = GATHER + (i / spans.length) * ABSORB + Math.random() * 100;
      var total = leave + FLY;
      var spin = Math.random() < .5 ? -1 : 1;
      var sx = x + dx, sy = y + dy, ang = Math.atan2(sy, sx), dist = Math.hypot(sx, sy);
      var mid = { a: ang + spin * .7, d: dist * .45 };
      function T(px, py, sc, rot) {
        return 'translate3d(' + (px - el.offsetWidth / 2).toFixed(1) + 'px,' + (py - hh).toFixed(1) + 'px,0) scale(' + sc + ') rotate(' + rot + 'deg)';
      }
      var oBorn = born / total, oLeave = leave / total, oMid = (leave + FLY * .55) / total;
      A(el, [
        { offset: 0, transform: T(x, y, 1, 0), opacity: 0 },
        { offset: oBorn, transform: T(x, y, 1, 0), opacity: 0 },
        { offset: Math.min(oBorn + 600 / total, oLeave), opacity: .8 },
        { offset: oLeave, transform: T(sx, sy, 1, 0), opacity: .8, easing: smooth },
        { offset: oMid, transform: T(Math.cos(mid.a) * mid.d, Math.sin(mid.a) * mid.d * .8, .55, spin * 12), opacity: .75, easing: 'cubic-bezier(.4,0,1,1)' },
        { offset: 1, transform: T(0, 0, .12, spin * 20), opacity: 0 }
      ], { duration: total, fill: 'forwards' });
      lastArrive = Math.max(lastArrive, total);
    }

    // Title letters light up as the words arrive.
    for (var L = 0; L < letters.length; L++) {
      var at = GATHER + FLY * .8 + (L / (letters.length - 1)) * (lastArrive - GATHER - FLY * .8);
      A(letters[L], [
        { opacity: 0, transform: 'scale(.4)' },
        { opacity: 1, transform: 'scale(1.12)', offset: .6 },
        { opacity: 1, transform: 'scale(1)' }
      ], { duration: 520, delay: at, easing: 'ease-out', fill: 'forwards' });
    }
    A(glow, [
      { opacity: 0, transform: 'scale(.6)' },
      { opacity: .5, transform: 'scale(.9)', offset: .5 },
      { opacity: 1, transform: 'scale(1)', offset: .85 },
      { opacity: .7, transform: 'scale(1.05)' }
    ], { duration: lastArrive + 600, easing: 'ease-in-out', fill: 'forwards' });
    A(sub, [{ opacity: 0, transform: 'translateY(6px)' }, { opacity: 1, transform: 'none' }],
      { duration: 700, delay: lastArrive, easing: 'ease-out', fill: 'forwards' });

    END = lastArrive + 1300;
    var out = root.animate([{ opacity: 1 }, { opacity: 0 }], { duration: 700, delay: END, easing: 'ease', fill: 'forwards' });
    out.onfinish = function () { done = true; root.remove(); css.remove(); };
  }

  if (document.body) run(); else document.addEventListener('DOMContentLoaded', run);
})();
