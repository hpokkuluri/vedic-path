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

    var css = document.createElement('style');
    css.textContent =
      '#vs-splash{position:fixed;inset:0;z-index:99999;overflow:hidden;cursor:pointer;' +
      'background:radial-gradient(ellipse at 50% 48%,#5a1a08 0%,#2a0a04 55%,#120402 100%);transition:opacity .7s ease}' +
      '#vs-splash canvas{position:absolute;inset:0;width:100%;height:100%}' +
      '#vs-splash .t{position:absolute;left:0;right:0;top:50%;transform:translateY(-50%);text-align:center;pointer-events:none}' +
      '#vs-splash .w{font-family:"Crimson Text",Georgia,serif;font-weight:700;font-size:clamp(2.4rem,11vw,4.2rem);' +
      'color:#fff;letter-spacing:.03em;line-height:1}' +
      '#vs-splash .w b{display:inline-block;font-weight:700;opacity:0;transform:scale(.4);filter:blur(6px);' +
      'transition:opacity .35s ease,transform .45s cubic-bezier(.2,1.6,.4,1),filter .4s ease}' +
      '#vs-splash .w b.g{color:#f0c040}' +
      '#vs-splash .w b.on{opacity:1;transform:none;filter:none;text-shadow:0 0 18px rgba(' + GOLD + ',.55)}' +
      '#vs-splash .s{margin-top:12px;font-family:"Noto Sans Telugu",serif;font-size:clamp(.95rem,4vw,1.2rem);' +
      'color:rgba(240,210,140,.9);letter-spacing:.06em;opacity:0;transition:opacity .8s ease}' +
      '#vs-splash .s.on{opacity:1}' +
      '#vs-splash .k{position:absolute;bottom:max(22px,env(safe-area-inset-bottom));left:0;right:0;text-align:center;' +
      'font:12px -apple-system,system-ui,sans-serif;color:rgba(240,220,180,.4);letter-spacing:.12em;text-transform:uppercase}' +
      '#vs-splash.pulse .w{animation:vsPulse 1.1s ease}' +
      '@keyframes vsPulse{0%{filter:none}40%{filter:drop-shadow(0 0 22px rgba(' + GOLD + ',.9))}100%{filter:none}}';
    document.head.appendChild(css);

    var root = document.createElement('div');
    root.id = 'vs-splash';
    var title = 'Vedasaram';
    root.innerHTML = '<canvas></canvas><div class="t"><div class="w">' +
      title.split('').map(function (ch, i) { return '<b' + (i >= 4 ? ' class="g"' : '') + '>' + ch + '</b>'; }).join('') +
      '</div><div class="s">వేదసారం · वेदसारम्</div></div><div class="k">Tap to skip</div>';
    document.body.appendChild(root);

    var letters = root.querySelectorAll('.w b');
    var sub = root.querySelector('.s');
    var done = false, raf = 0;

    function finish() {
      if (done) return;
      done = true;
      for (var i = 0; i < letters.length; i++) letters[i].classList.add('on');
      sub.classList.add('on');
      root.style.opacity = '0';
      setTimeout(function () { cancelAnimationFrame(raf); root.remove(); css.remove(); }, 750);
    }
    root.addEventListener('click', finish);

    if (reduce) {
      for (var r = 0; r < letters.length; r++) letters[r].classList.add('on');
      sub.classList.add('on');
      setTimeout(finish, 1400);
      return;
    }

    var cv = root.querySelector('canvas'), cx = cv.getContext('2d');
    var W, H, dpr;
    function size() {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      W = window.innerWidth; H = window.innerHeight;
      cv.width = W * dpr; cv.height = H * dpr;
      cx.setTransform(dpr, 0, 0, dpr, 0, 0);
    }
    size();
    window.addEventListener('resize', size);

    var small = Math.min(W, H) < 500;
    var pool = WORDS.slice().sort(function () { return Math.random() - .5; }).slice(0, small ? 22 : 30);
    var GATHER = 1700, ABSORB = 1500;   // ms: drift phase, then words fly in over this span
    var words = pool.map(function (text, i) {
      var sz = (small ? 14 : 17) + Math.random() * (small ? 10 : 14);
      cx.font = '600 ' + sz + 'px "Noto Sans Telugu","Noto Sans Devanagari",serif';
      var half = Math.min(cx.measureText(text).width / 2 + 8, W / 2 - 4);
      var y;
      do { y = 40 + Math.random() * (H - 110); } while (Math.abs(y - H / 2) < 75);
      return {
        text: text,
        x: half + Math.random() * (W - 2 * half), y: y,
        vx: (Math.random() - .5) * .2, vy: (Math.random() - .5) * .2 - .06,
        size: sz,
        born: Math.random() * 900,
        start: GATHER + (i / pool.length) * ABSORB + Math.random() * 120,
        dur: 650 + Math.random() * 250,
        spin: (Math.random() < .5 ? -1 : 1) * (.6 + Math.random() * .6),
        hit: false
      };
    });
    var sparks = [], absorbed = 0, t0 = performance.now();

    function ease(t) { return t < .5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2; }

    function frame(now) {
      var t = now - t0;
      cx.clearRect(0, 0, W, H);
      var mx = W / 2, my = H / 2;

      // soft gathering glow at the centre
      var glow = Math.min(1, absorbed / words.length) * .55 + .1;
      var g = cx.createRadialGradient(mx, my, 0, mx, my, Math.min(W, H) * .45);
      g.addColorStop(0, 'rgba(' + GOLD + ',' + (glow * .35) + ')');
      g.addColorStop(1, 'rgba(' + GOLD + ',0)');
      cx.fillStyle = g; cx.fillRect(0, 0, W, H);

      cx.textAlign = 'center'; cx.textBaseline = 'middle';
      for (var i = 0; i < words.length; i++) {
        var w = words[i];
        if (t < w.born) continue;
        var alpha, x, y, s, rot = 0;
        if (t < w.start) {
          w.x += w.vx; w.y += w.vy;
          alpha = Math.min(1, (t - w.born) / 600) * .75;
          x = w.x; y = w.y; s = w.size;
          w.sx = x; w.sy = y;
        } else {
          var p = Math.min(1, (t - w.start) / w.dur), e = ease(p);
          var dx = w.sx - mx, dy = w.sy - my;
          var ang = Math.atan2(dy, dx) + w.spin * e * 1.4, dist = Math.hypot(dx, dy) * (1 - e);
          x = mx + Math.cos(ang) * dist; y = my + Math.sin(ang) * dist * .8;
          s = w.size * (1 - e * .8); alpha = .85 * (1 - Math.pow(p, 4)); rot = w.spin * e * .5;
          if (p >= 1 && !w.hit) {
            w.hit = true; absorbed++;
            var n = Math.round(absorbed / words.length * letters.length);
            for (var L = 0; L < n; L++) letters[L].classList.add('on');
            for (var k = 0; k < 8; k++) {
              var sa = Math.random() * Math.PI * 2, sp = 1 + Math.random() * 3;
              sparks.push({ x: mx + (Math.random() - .5) * 140, y: my + (Math.random() - .5) * 30,
                vx: Math.cos(sa) * sp, vy: Math.sin(sa) * sp, life: 1 });
            }
          }
          if (p >= 1) continue;
        }
        cx.save();
        cx.translate(x, y); cx.rotate(rot);
        cx.font = '600 ' + s.toFixed(1) + 'px "Noto Sans Telugu","Noto Sans Devanagari","Kohinoor Devanagari",serif';
        cx.shadowColor = 'rgba(' + GOLD + ',.8)'; cx.shadowBlur = 10;
        cx.fillStyle = 'rgba(255,226,160,' + alpha.toFixed(3) + ')';
        cx.fillText(w.text, 0, 0);
        cx.restore();
      }

      for (var j = sparks.length - 1; j >= 0; j--) {
        var sk = sparks[j];
        sk.x += sk.vx; sk.y += sk.vy; sk.vx *= .96; sk.vy *= .96; sk.life -= .025;
        if (sk.life <= 0) { sparks.splice(j, 1); continue; }
        cx.fillStyle = 'rgba(255,214,120,' + sk.life.toFixed(3) + ')';
        cx.beginPath(); cx.arc(sk.x, sk.y, 1.6 * sk.life + .4, 0, 6.283); cx.fill();
      }

      if (absorbed === words.length && !root.classList.contains('pulse')) {
        root.classList.add('pulse');
        sub.classList.add('on');
        setTimeout(finish, 1500);
      }
      if (!done) raf = requestAnimationFrame(frame);
    }
    raf = requestAnimationFrame(frame);
    setTimeout(finish, 7000); // safety net
  }

  if (document.body) run(); else document.addEventListener('DOMContentLoaded', run);
})();
