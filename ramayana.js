// ─────────────── ŚRĪ RĀMĀYAṆA READER ───────────────
// Book home (view-ramayana) + chapter reader (view-rmyread).
// Chapter text lives in ramayana/*.js as window.RMY_CHAPTERS entries.
// Block types in chapter pages:
//   ['p', en, te]                         paragraph (names: {key|Text})
//   ['sloka', teLines[], enLines[], meaningEn, meaningTe]
//   ['dyk', icon, en, te]                 "Did you know?" box
//   ['more', titleEn, titleTe, noteEn, noteTe, blocks[]]   tap-to-open box
// Reading progress stays on this phone (localStorage 'vedic_rmy').
(function () {
  // [key, name, Telugu, subtitle, Telugu subtitle, icon, gradient, photo]
  const KANDAS = [
    ['bala', 'Bāla Kāṇḍa', 'బాల కాండ', 'The Book of Childhood', 'బాల్యం', '🏹', 'linear-gradient(160deg,#5a1e06,#e08a2c)', 'icons/tile-ramayana.jpg'],
    ['ayodhya', 'Ayodhyā Kāṇḍa', 'అయోధ్య కాండ', 'The Book of Ayodhyā', 'పట్టాభిషేకం, వనవాసం', '👑', 'linear-gradient(160deg,#4a1a3a,#c0507a)'],
    ['aranya', 'Araṇya Kāṇḍa', 'అరణ్య కాండ', 'The Book of the Forest', 'అడవిలో జీవితం', '🌲', 'linear-gradient(160deg,#0f3a22,#3f9a5a)'],
    ['kishkindha', 'Kiṣkindhā Kāṇḍa', 'కిష్కింధ కాండ', 'The Kingdom of the Vānaras', 'వానర రాజ్యం', '🐒', 'linear-gradient(160deg,#5a3a0a,#c8902a)'],
    ['sundara', 'Sundara Kāṇḍa', 'సుందర కాండ', 'The Beautiful Book — Hanumān', 'హనుమంతుని సాహసం', '🙏', 'linear-gradient(160deg,#0a2a5a,#2a7ac0)'],
    ['yuddha', 'Yuddha Kāṇḍa', 'యుద్ధ కాండ', 'The Book of the War', 'లంకా యుద్ధం', '⚔️', 'linear-gradient(160deg,#4a0a0a,#c03a2a)'],
    ['uttara', 'Uttara Kāṇḍa', 'ఉత్తర కాండ', 'The Later Book', 'తరువాతి కథ', '🪷', 'linear-gradient(160deg,#2a1a4a,#8a5ac0)'],
  ];
  const KMETA = k => KANDAS.find(x => x[0] === k) || KANDAS[0];
  const NEW_DAYS = 21;
  const FS = ['1.08rem', '1.22rem', '1.38rem', '1.6rem'];

  const chapters = () => (window.RMY_CHAPTERS || []).slice().sort((a, b) => a.order - b.order);
  const chap = id => chapters().find(c => c.id === id);
  const plan = k => (window.RMY_PLAN || {})[k] || [];
  const WHO = () => window.RMY_WHO || {};

  let S = { done: {}, pos: {}, opened: {}, last: '', mode: '', fs: 1 };
  try { Object.assign(S, JSON.parse(localStorage.getItem('vedic_rmy') || '{}')); } catch (e) {}
  // Language follows the app-wide setting (Home / Settings), so both always agree
  const MODE = () => { const l = (typeof settings !== 'undefined' && settings.language) || 'both'; return ['en', 'te', 'both'].includes(l) ? l : 'both'; };
  const save = () => { try { localStorage.setItem('vedic_rmy', JSON.stringify(S)); } catch (e) {} };

  const esc = s => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;');
  // {key|Text} → tappable name; *word* → italic
  const fmt = s => String(s)
    .replace(/\{(\w+)\|([^}]+)\}/g, (m, k, t) => `<span class="nm" onclick="rmyWho('${k}')">${t}</span>`)
    .replace(/\*([^*]+)\*/g, '<i>$1</i>');

  // ── scene art ──
  let SCN = 0;
  function scene(name, uid) {
    const g = `rmy${uid}${++SCN}`;
    if (name === 'yajna') return `<svg viewBox="0 0 320 220" preserveAspectRatio="xMidYMid slice">
      <defs><linearGradient id="${g}s" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#3a1a3e"/><stop offset=".6" stop-color="#b8540c"/><stop offset="1" stop-color="#f3b061"/></linearGradient>
      <radialGradient id="${g}f" cx=".5" cy=".7" r=".6"><stop offset="0" stop-color="#fff3b0"/><stop offset=".5" stop-color="#ffb02e"/><stop offset="1" stop-color="#e2461a"/></radialGradient></defs>
      <rect width="320" height="220" fill="url(#${g}s)"/>
      <g fill="#5a2410" opacity=".75"><rect x="20" y="96" width="70" height="60"/><path d="M20 96 L55 64 L90 96Z"/><rect x="230" y="90" width="76" height="66"/><path d="M230 90 L268 54 L306 90Z"/><rect x="110" y="104" width="100" height="52"/><path d="M146 104 L160 70 L174 104Z"/><circle cx="160" cy="66" r="5"/></g>
      <rect y="150" width="320" height="70" fill="#7a4a22"/>
      <g stroke="#d9a74a" stroke-width="5" stroke-linecap="round"><path d="M70 196 V128"/><path d="M250 196 V128"/></g>
      <g fill="#d9a74a"><rect x="62" y="124" width="16" height="6" rx="2"/><rect x="242" y="124" width="16" height="6" rx="2"/></g>
      <path d="M118 196 L202 196 L192 176 L128 176Z" fill="#c9962e"/><rect x="128" y="170" width="64" height="8" fill="#e1b45a"/>
      <path d="M160 92 C150 118 132 128 140 152 C146 168 174 168 180 152 C188 130 168 122 160 92Z" fill="url(#${g}f)"/>
      <path d="M160 122 C154 138 150 146 154 156 C158 164 166 162 168 154 C170 144 164 138 160 122Z" fill="#fff6c8"/>
      <g fill="#3a1608"><circle cx="104" cy="172" r="7"/><path d="M92 196 Q104 176 116 196Z"/><circle cx="216" cy="172" r="7"/><path d="M204 196 Q216 176 228 196Z"/></g>
      <g fill="#f6e2c0" opacity=".9" transform="translate(262 150)"><path d="M0 18 Q4 6 18 6 L32 6 Q40 0 44 6 L40 10 L38 22 L34 22 L34 14 L14 14 L12 24 L8 24 L8 16 Q2 20 0 18Z"/></g>
      </svg>`;
    const SC = {
      // gods in the night sky; Viṣṇu's light on Garuḍa
      sky: `<defs><linearGradient id="${g}a" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#0b1440"/><stop offset="1" stop-color="#3b2a7a"/></linearGradient>
        <radialGradient id="${g}b" cx=".5" cy=".42" r=".45"><stop offset="0" stop-color="#fff6c8"/><stop offset=".4" stop-color="#f3c25a" stop-opacity=".8"/><stop offset="1" stop-color="#f3c25a" stop-opacity="0"/></radialGradient></defs>
        <rect width="320" height="220" fill="url(#${g}a)"/>
        <g fill="#fff" opacity=".8"><circle cx="30" cy="30" r="1.4"/><circle cx="80" cy="60" r="1"/><circle cx="270" cy="34" r="1.6"/><circle cx="240" cy="90" r="1"/><circle cx="50" cy="120" r="1.2"/><circle cx="300" cy="140" r="1.1"/><circle cx="120" cy="24" r="1"/></g>
        <circle cx="160" cy="92" r="96" fill="url(#${g}b)"/>
        <g fill="#f6d27a"><path d="M160 70 L120 96 L60 88 L118 108 L160 100 L202 108 L260 88 L200 96Z"/><circle cx="160" cy="66" r="10"/><path d="M150 112 L160 140 L170 112Z"/></g>
        <g fill="#3a7ad0"><circle cx="160" cy="48" r="9"/><path d="M148 58 Q160 52 172 58 L170 84 L150 84Z"/></g>
        <circle cx="160" cy="36" r="5" fill="#f6d27a"/>
        <g fill="#efe6ff" opacity=".7"><ellipse cx="60" cy="190" rx="70" ry="22"/><ellipse cx="170" cy="200" rx="90" ry="20"/><ellipse cx="280" cy="188" rx="60" ry="22"/></g>`,
      // palace of Ayodhyā with a cradle and festive lamps
      palace: `<defs><linearGradient id="${g}a" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#f7c873"/><stop offset="1" stop-color="#fbe7c2"/></linearGradient></defs>
        <rect width="320" height="220" fill="url(#${g}a)"/>
        <g fill="#c96f2a"><rect x="40" y="70" width="240" height="110"/><rect x="140" y="40" width="40" height="140"/></g>
        <g fill="#e1b45a"><path d="M134 40 L160 10 L186 40Z"/><path d="M34 70 L70 44 L106 70Z"/><path d="M214 70 L250 44 L286 70Z"/></g>
        <g fill="#7a2e0c"><path d="M70 180 V120 a14 14 0 0 1 28 0 V180Z"/><path d="M222 180 V120 a14 14 0 0 1 28 0 V180Z"/><path d="M148 180 V130 a12 12 0 0 1 24 0 V180Z"/></g>
        <path d="M30 70 Q60 86 90 70 Q120 86 150 70 Q180 86 210 70 Q240 86 270 70 Q290 80 300 70" fill="none" stroke="#e2461a" stroke-width="3"/>
        <g fill="#2f7a4f"><circle cx="60" cy="74" r="3"/><circle cx="120" cy="76" r="3"/><circle cx="200" cy="76" r="3"/><circle cx="260" cy="74" r="3"/></g>
        <rect y="180" width="320" height="40" fill="#9c6a3c"/>
        <g transform="translate(130 160)"><path d="M0 14 Q30 34 60 14 Z" fill="#f6e2c0" stroke="#7a4a22" stroke-width="2"/><circle cx="30" cy="12" r="7" fill="#7aa6e0"/><path d="M10 0 Q30 -14 50 0" stroke="#7a4a22" stroke-width="2" fill="none"/></g>
        <g fill="#ffb02e"><circle cx="20" cy="196" r="4"/><circle cx="300" cy="196" r="4"/><circle cx="110" cy="200" r="3"/><circle cx="210" cy="200" r="3"/></g>`,
      // sage and two boys walking at dawn along a river road
      road: `<defs><linearGradient id="${g}a" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#ffcf8a"/><stop offset=".6" stop-color="#fde8c4"/><stop offset="1" stop-color="#e9d2a6"/></linearGradient></defs>
        <rect width="320" height="220" fill="url(#${g}a)"/><circle cx="250" cy="70" r="24" fill="#fff1c4"/>
        <path d="M0 130 Q80 110 160 126 T320 120 L320 150 L0 150Z" fill="#a9c48a"/>
        <path d="M0 150 L320 150 L320 220 L0 220Z" fill="#c8a46a"/><path d="M0 150 Q160 140 320 158 L320 172 Q160 156 0 166Z" fill="#7fb3b0" opacity=".8"/>
        <g fill="#5a3015"><g transform="translate(70 150)"><circle cx="0" cy="-34" r="6"/><path d="M-9 -26 Q0 -30 9 -26 L11 4 L-11 4Z"/><path d="M12 -20 L22 4" stroke="#5a3015" stroke-width="2"/></g>
        <g transform="translate(118 154)"><circle cx="0" cy="-26" r="5"/><path d="M-6 -20 L6 -20 L8 2 L-8 2Z"/><path d="M10 -30 Q18 -14 10 2" stroke="#5a3015" stroke-width="2" fill="none"/></g>
        <g transform="translate(150 156)"><circle cx="0" cy="-24" r="5"/><path d="M-6 -18 L6 -18 L8 2 L-8 2Z"/><path d="M10 -28 Q17 -13 10 2" stroke="#5a3015" stroke-width="2" fill="none"/></g></g>
        <g fill="#3f7a46"><ellipse cx="290" cy="128" rx="26" ry="18"/><ellipse cx="20" cy="124" rx="22" ry="14"/></g>`,
      // dark forest at dusk with a looming shape
      forest: `<defs><linearGradient id="${g}a" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#2a1a2e"/><stop offset="1" stop-color="#5a3a2a"/></linearGradient></defs>
        <rect width="320" height="220" fill="url(#${g}a)"/><circle cx="250" cy="50" r="16" fill="#f3d39a" opacity=".8"/>
        <g fill="#1a2a1a"><path d="M0 220 L0 90 L20 60 L40 90 L40 220Z"/><path d="M280 220 L280 80 L300 50 L320 80 L320 220Z"/><path d="M40 220 L40 120 L60 96 L80 120 L80 220Z"/><path d="M240 220 L240 110 L258 90 L276 110 L276 220Z"/></g>
        <path d="M120 200 Q110 120 160 96 Q210 120 200 200Z" fill="#3a1010" opacity=".85"/><g fill="#ff5a2a"><circle cx="148" cy="124" r="4"/><circle cx="172" cy="124" r="4"/></g>
        <rect y="196" width="320" height="24" fill="#2a1a10"/>
        <g transform="translate(66 196)" fill="#f6e2c0"><circle cx="0" cy="-30" r="5"/><path d="M-6 -24 L6 -24 L8 0 L-8 0Z"/><path d="M12 -40 Q24 -18 12 4" stroke="#f6e2c0" stroke-width="2.5" fill="none"/><path d="M12 -18 L44 -26" stroke="#ffd36a" stroke-width="2"/></g>`,
      // glowing divine weapons around a sage and a prince
      weapons: `<defs><radialGradient id="${g}a" cx=".5" cy=".5" r=".7"><stop offset="0" stop-color="#4a2a6a"/><stop offset="1" stop-color="#140a24"/></radialGradient></defs>
        <rect width="320" height="220" fill="url(#${g}a)"/>
        <g stroke-linecap="round" stroke-width="4" fill="none"><circle cx="160" cy="96" r="58" stroke="#f6d27a" opacity=".35"/>
        <path d="M100 60 l20 20" stroke="#7ad0ff"/><path d="M220 60 l-20 20" stroke="#ff8a5a"/><path d="M90 130 l24 -6" stroke="#a6ff9a"/><path d="M230 130 l-24 -6" stroke="#ffd36a"/>
        <circle cx="160" cy="30" r="12" stroke="#ffd36a"/><path d="M160 18 v-6 M160 42 v6 M148 30 h-6 M172 30 h6" stroke="#ffd36a"/></g>
        <path d="M262 92 l14 -24 l14 24 M276 68 v50" stroke="#e8e0ff" stroke-width="3" fill="none"/>
        <g fill="#f6e2c0"><g transform="translate(130 196)"><circle cx="0" cy="-48" r="8"/><path d="M-12 -38 Q0 -44 12 -38 L16 0 L-16 0Z"/></g>
        <g transform="translate(192 196)"><circle cx="0" cy="-40" r="7"/><path d="M-9 -32 L9 -32 L11 0 L-11 0Z"/><path d="M14 -48 Q24 -24 14 2" stroke="#f6e2c0" stroke-width="2.5" fill="none"/></g></g>`,
      // Gaṅgā falling from the sky into Śiva's hair, then flowing across the plains
      ganga: `<defs><linearGradient id="${g}a" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#7ab8e8"/><stop offset="1" stop-color="#d8eef7"/></linearGradient><linearGradient id="${g}w" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#ffffff"/><stop offset="1" stop-color="#5aa8d0"/></linearGradient></defs>
        <rect width="320" height="220" fill="url(#${g}a)"/>
        <g fill="#f4f8fb"><path d="M0 130 L50 60 L90 110 L140 40 L200 116 L250 66 L320 130Z"/></g><g fill="#9ab0c4"><path d="M0 130 L50 60 L64 80 L30 130Z M140 40 L160 66 L118 130 L100 130Z M250 66 L270 92 L240 130 L226 130Z"/></g>
        <path d="M150 0 Q170 40 158 80 Q150 100 160 116" stroke="url(#${g}w)" stroke-width="16" fill="none" opacity=".9"/>
        <ellipse cx="160" cy="120" rx="26" ry="14" fill="#3a2a1a"/><circle cx="160" cy="140" r="12" fill="#5a7aa8"/><path d="M146 152 L174 152 L180 176 L140 176Z" fill="#5a7aa8"/>
        <path d="M0 196 Q80 176 160 188 T320 184 L320 220 L0 220Z" fill="#4a98c8"/><path d="M0 176 Q160 160 320 172 L320 190 Q160 176 0 196Z" fill="#a6c48a"/>
        <g transform="translate(250 176)" fill="#7a4a22"><rect x="-14" y="-10" width="28" height="12" rx="3"/><circle cx="-8" cy="4" r="5" fill="#3a2a1a"/><circle cx="8" cy="4" r="5" fill="#3a2a1a"/><path d="M14 -6 L28 -12" stroke="#7a4a22" stroke-width="3"/></g>`,
      // churning of the ocean: mountain, serpent rope, tortoise
      ocean: `<defs><linearGradient id="${g}a" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#1a3a6a"/><stop offset="1" stop-color="#4aa0c8"/></linearGradient></defs>
        <rect width="320" height="220" fill="url(#${g}a)"/><circle cx="60" cy="40" r="14" fill="#f6f0d0"/>
        <path d="M160 30 L210 150 L110 150Z" fill="#6a5a4a"/><path d="M160 30 L176 70 L144 70Z" fill="#e8e0d0"/>
        <path d="M60 120 Q110 96 160 112 Q210 128 260 104" stroke="#2f7a4f" stroke-width="9" fill="none" stroke-linecap="round"/><circle cx="264" cy="102" r="8" fill="#2f7a4f"/>
        <rect y="150" width="320" height="70" fill="#2a6a9a"/><g stroke="#cfeaf5" stroke-width="2" fill="none" opacity=".8"><path d="M20 168 q10 -6 20 0 t20 0"/><path d="M220 180 q10 -6 20 0 t20 0"/><path d="M110 196 q10 -6 20 0 t20 0"/></g>
        <ellipse cx="160" cy="160" rx="56" ry="14" fill="#7a8a4a"/><g fill="#f6e2c0"><circle cx="40" cy="120" r="7"/><circle cx="282" cy="118" r="7"/></g>`,
      // a quiet hermitage glowing as Ahalyā appears
      ahalya: `<defs><linearGradient id="${g}a" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#d8e8c8"/><stop offset="1" stop-color="#f6efd8"/></linearGradient><radialGradient id="${g}b" cx=".5" cy=".5" r=".5"><stop offset="0" stop-color="#fff6c8"/><stop offset="1" stop-color="#fff6c8" stop-opacity="0"/></radialGradient></defs>
        <rect width="320" height="220" fill="url(#${g}a)"/>
        <g fill="#7a5a3a"><path d="M30 150 L80 110 L130 150Z"/><rect x="40" y="150" width="80" height="40"/></g><rect x="70" y="164" width="18" height="26" fill="#3a2a1a"/>
        <g fill="#4c8c51"><ellipse cx="270" cy="96" rx="40" ry="30"/><rect x="266" y="120" width="8" height="70" fill="#5a3a1e"/></g>
        <circle cx="190" cy="140" r="62" fill="url(#${g}b)"/><g fill="#c0392b"><circle cx="190" cy="112" r="9"/><path d="M176 124 Q190 118 204 124 L210 186 L170 186Z"/></g>
        <rect y="186" width="320" height="34" fill="#9cb07a"/>
        <g fill="#5a3015"><g transform="translate(250 186)"><circle cx="0" cy="-28" r="6"/><path d="M-7 -21 L7 -21 L9 0 L-9 0Z"/></g><g transform="translate(276 186)"><circle cx="0" cy="-26" r="5"/><path d="M-6 -20 L6 -20 L8 0 L-8 0Z"/></g></g>
        <g fill="#f08aa0"><circle cx="150" cy="40" r="3"/><circle cx="230" cy="30" r="3"/><circle cx="190" cy="54" r="3"/></g>`,
      // Śiva's great bow on its cart in Janaka's hall
      mithila: `<defs><linearGradient id="${g}a" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#7a1a1a"/><stop offset="1" stop-color="#d0802a"/></linearGradient></defs>
        <rect width="320" height="220" fill="url(#${g}a)"/>
        <g fill="#5a120c" opacity=".6"><rect x="20" y="20" width="18" height="160"/><rect x="282" y="20" width="18" height="160"/></g>
        <path d="M30 20 Q160 60 290 20" stroke="#f6d27a" stroke-width="4" fill="none"/>
        <path d="M70 110 Q160 30 250 110" stroke="#e1b45a" stroke-width="9" fill="none" stroke-linecap="round"/><path d="M160 54 l-6 -8 m6 8 l6 -8" stroke="#fff6c8" stroke-width="3"/>
        <path d="M70 110 L250 110" stroke="#fff6c8" stroke-width="1.5"/>
        <rect x="80" y="120" width="160" height="26" rx="4" fill="#5a3a1a"/><g fill="#3a2a1a"><circle cx="100" cy="152" r="10"/><circle cx="140" cy="152" r="10"/><circle cx="180" cy="152" r="10"/><circle cx="220" cy="152" r="10"/></g>
        <rect y="168" width="320" height="52" fill="#8a4a1a"/><g fill="#f6e2c0" opacity=".9"><circle cx="40" cy="190" r="6"/><circle cx="60" cy="194" r="6"/><circle cx="262" cy="190" r="6"/><circle cx="282" cy="194" r="6"/></g>`,
      // stormy sky and Paraśurāma with his axe
      storm: `<defs><linearGradient id="${g}a" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#1a1a2a"/><stop offset="1" stop-color="#5a3a3a"/></linearGradient></defs>
        <rect width="320" height="220" fill="url(#${g}a)"/>
        <g fill="#3a3a4a"><ellipse cx="60" cy="40" rx="70" ry="26"/><ellipse cx="200" cy="30" rx="90" ry="28"/><ellipse cx="300" cy="50" rx="50" ry="22"/></g>
        <path d="M230 50 L216 84 L230 84 L212 120" stroke="#fff6a0" stroke-width="3" fill="none"/>
        <rect y="180" width="320" height="40" fill="#2a1a1a"/>
        <g transform="translate(150 180)" fill="#e8a060"><circle cx="0" cy="-74" r="10"/><path d="M-6 -86 Q0 -100 8 -84" stroke="#3a1a0a" stroke-width="5" fill="none"/><path d="M-16 -62 Q0 -68 16 -62 L22 0 L-22 0Z" fill="#c0392b"/>
        <path d="M18 -60 L46 -100" stroke="#8a6a4a" stroke-width="4"/><path d="M40 -112 Q60 -104 52 -88 L44 -96Z" fill="#cfd8e0"/></g>
        <g transform="translate(250 180)" fill="#f6e2c0"><circle cx="0" cy="-40" r="7"/><path d="M-9 -32 L9 -32 L11 0 L-11 0Z"/><path d="M-16 -54 Q-28 -28 -16 2" stroke="#f6e2c0" stroke-width="2.5" fill="none"/></g>`,
      // moonlit river with the Himālaya far away
      night: `<defs><linearGradient id="${g}a" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#0d1838"/><stop offset="1" stop-color="#2a3a6a"/></linearGradient></defs>
        <rect width="320" height="220" fill="url(#${g}a)"/><circle cx="250" cy="46" r="20" fill="#f6f0d0"/>
        <g fill="#fff" opacity=".8"><circle cx="40" cy="30" r="1.3"/><circle cx="90" cy="50" r="1"/><circle cx="150" cy="24" r="1.4"/><circle cx="200" cy="70" r="1"/><circle cx="30" cy="80" r="1"/></g>
        <g fill="#7f8fb8"><path d="M0 130 L40 90 L70 112 L110 70 L150 110 L190 84 L240 120 L280 92 L320 124 L320 140 L0 140Z"/></g><g fill="#e8eef8" opacity=".8"><path d="M110 70 L122 84 L98 84Z M40 90 L50 100 L30 100Z M280 92 L290 102 L270 102Z"/></g>
        <path d="M0 140 L320 140 L320 220 L0 220Z" fill="#1d2d52"/><path d="M200 140 Q240 170 250 220 L280 220 Q260 170 230 140Z" fill="#f6f0d0" opacity=".25"/>
        <g fill="#2a4a2a"><ellipse cx="40" cy="150" rx="40" ry="12"/></g>
        <g fill="#6a9a8a"><path d="M30 214 Q34 180 38 214Z M44 214 Q50 176 54 214Z M58 214 Q62 186 66 214Z"/></g>
        <g fill="#c8d4ef"><circle cx="160" cy="34" r="2.2"/><circle cx="168" cy="38" r="2.2"/><circle cx="174" cy="32" r="2.2"/><circle cx="162" cy="44" r="2.2"/><circle cx="170" cy="46" r="2.2"/><circle cx="178" cy="42" r="2.2"/></g>`,
    };
    if (SC[name]) return `<svg viewBox="0 0 320 220" preserveAspectRatio="xMidYMid slice">${SC[name]}</svg>`;
    // default: tamasa — river at dusk, sage, krauñca birds
    return `<svg viewBox="0 0 320 220" preserveAspectRatio="xMidYMid slice">
      <defs><linearGradient id="${g}s" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#f6b45c"/><stop offset=".55" stop-color="#f3d39a"/><stop offset="1" stop-color="#fbe9c8"/></linearGradient>
      <linearGradient id="${g}r" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#7fb3b0"/><stop offset="1" stop-color="#3f7f86"/></linearGradient></defs>
      <rect width="320" height="220" fill="url(#${g}s)"/><circle cx="92" cy="98" r="30" fill="#fff4d6" opacity=".9"/>
      <path d="M0 120 L40 92 L78 112 L120 80 L170 110 L220 86 L270 112 L320 96 L320 140 L0 140Z" fill="#c98a52" opacity=".55"/>
      <path d="M0 132 L60 112 L110 128 L160 108 L220 126 L280 110 L320 124 L320 150 L0 150Z" fill="#9c6a3c" opacity=".55"/>
      <rect y="146" width="320" height="74" fill="url(#${g}r)"/>
      <g stroke="#e8f4f1" stroke-width="2" stroke-linecap="round" opacity=".7"><path d="M30 168h30"/><path d="M110 182h44"/><path d="M60 200h26"/><path d="M180 164h22"/><path d="M150 206h40"/></g>
      <path d="M0 150 Q40 140 80 150 L80 156 L0 158Z" fill="#6c8f4a"/>
      <g stroke="#55703a" stroke-width="2.4" stroke-linecap="round"><path d="M14 158 l-4 -22"/><path d="M22 158 l2 -26"/><path d="M30 158 l6 -20"/><path d="M40 156 l-2 -18"/></g>
      <path d="M262 150 C258 120 266 98 258 70" stroke="#5a3a1e" stroke-width="10" fill="none" stroke-linecap="round"/>
      <path d="M258 96 C238 86 222 88 210 80" stroke="#5a3a1e" stroke-width="5" fill="none" stroke-linecap="round"/>
      <ellipse cx="262" cy="56" rx="54" ry="34" fill="#3f7a46"/><ellipse cx="226" cy="70" rx="30" ry="20" fill="#4c8c51"/><ellipse cx="292" cy="72" rx="28" ry="20" fill="#35693c"/>
      <g transform="translate(196 40)"><path d="M0 10 Q10 0 20 8 Q30 0 40 10 Q30 6 20 14 Q10 6 0 10Z" fill="#6b5a66"/></g>
      <g transform="translate(206 140)"><ellipse cx="14" cy="6" rx="14" ry="6" fill="#6b5a66"/><path d="M24 2 l14 -6" stroke="#6b5a66" stroke-width="3" stroke-linecap="round"/><path d="M-16 -12 L18 6" stroke="#4a2f17" stroke-width="2"/></g>
      <g transform="translate(118 116)" fill="#5b3015"><circle cx="8" cy="0" r="6"/><path d="M-2 6 Q8 2 18 6 L22 34 L-6 34Z"/></g>
      </svg>`;
  }

  // ── blocks → HTML ──
  function blocks(list, firstPara) {
    let first = firstPara;
    return list.map(b => {
      const t = b[0];
      if (t === 'p') { const h = `<p class="para${first ? ' first' : ''}">${fmt(b[1])}</p><p class="para-te">${fmt(b[2])}</p>`; first = false; return h; }
      if (t === 'sloka') return `<div class="sloka"><div class="sk-te">${b[1].map(esc).join('<br>')}</div><div class="sk-en">${b[2].map(esc).join('<br>')}</div>
        <div class="sk-m"><span class="en">“${esc(b[3])}”</span><span class="te">“${esc(b[4])}”</span></div></div>`;
      if (t === 'dyk') return `<div class="dyk"><div class="ic">${b[1]}</div><div><b>Did you know?</b><p><span class="en">${fmt(b[2])}</span><span class="te">${fmt(b[3])}</span></p></div></div>`;
      if (t === 'more') return `<details class="sank"><summary><span class="en">${esc(b[1])}<small>${esc(b[3])}</small></span><span class="te">${esc(b[2])}<small>${esc(b[4])}</small></span></summary><div class="sank-body">${blocks(b[5], false)}</div></details>`;
      return '';
    }).join('');
  }
  const words = c => JSON.stringify(c.pages).replace(/<[^>]+>/g, '').split(/[^A-Za-zĀ-ž]+/).length;
  const minutes = c => Math.max(3, Math.round(words(c) / 180));   // counts the English words
  const isNew = c => !S.opened[c.id] && c.date && (Date.now() - new Date(c.date + 'T00:00:00').getTime()) < NEW_DAYS * 864e5;

  // ── book home ──
  window.openRamayana = () => { state.kids = ''; showView('ramayana'); };
  window.openRmyKanda = k => { state.kids = 'k:' + k; showView('ramayana'); };
  window.openRmyChapter = id => { state.kids = id; showView('rmyread'); };
  // state.kids: '' → the seven kāṇḍas; 'k:<kanda>' → that kāṇḍa's chapters
  const cover = () => `<div class="cover">
      <svg class="bow" viewBox="0 0 100 200" fill="none" stroke="#fff" stroke-width="5" stroke-linecap="round"><path d="M30 10 C95 60 95 140 30 190"/><path d="M30 10 L30 190" stroke-width="2"/><path d="M10 100 L88 100" stroke-width="3"/><path d="M80 92 L92 100 L80 108"/></svg>
      <h1>Śrī Rāmāyaṇa</h1><div class="h1te">శ్రీ రామాయణం</div>
      <p>Vālmīki's story of Rāma, retold for the whole family.</p>
      <div class="byline">Retold by <b>Hari Pokkuluri</b><span class="te">కథనం: హరి పొక్కులూరి</span></div>
    </div>`;
  function continueCard() {
    const cont = chap(S.last) || chapters()[0];
    if (!cont) return '';
    const pct = Math.round(((S.pos[cont.id] || 0) / (cont.pages.length + 1)) * 100);
    return `<div class="continue" onclick="openRmyChapter('${cont.id}')">
      <div class="thumb">${scene(cont.scene, 't')}</div>
      <div class="ci"><small>${S.pos[cont.id] ? 'Continue reading' : 'Start reading'}</small><b>${esc(cont.title)}</b>
      <span>${KMETA(cont.kanda)[1]} · Chapter ${cont.n}</span><div class="bar"><i style="width:${pct}%"></i></div></div>
      <span class="go">▶</span></div>`;
  }
  window.renderRamayana = function () {
    const el = document.getElementById('view-ramayana');
    const sel = (state.kids || '').startsWith('k:') ? state.kids.slice(2) : '';
    if (sel) { renderKanda(el, sel); return; }
    const tiles = KANDAS.map(([k, n, nt, sub, subTe, icon, grad, photo], i) => {
      const list = chapters().filter(c => c.kanda === k), total = plan(k).length;
      const read = list.filter(c => S.done[c.id]).length, fresh = list.some(isNew);
      const meta = list.length ? `${list.length}${total ? ' of ' + total : ''} chapters${read ? ' · ' + read + ' read' : ''}` : 'Coming soon';
      return `<button class="ktile${list.length ? '' : ' soon'}" onclick="openRmyKanda('${k}')">
        <span class="kbg" style="background:${grad}"></span>
        ${photo ? `<span class="kphoto" style="background-image:url('${photo}')"></span><span class="kshade"></span>` : ''}
        ${fresh ? '<span class="knew">NEW</span>' : ''}
        <span class="kno">${i + 1}</span>
        ${photo ? '' : `<span class="kic">${icon}</span>`}
        <span class="kname">${n}</span><span class="kte">${nt}</span>
        <span class="kmeta">${meta}</span>
      </button>`;
    }).join('');
    el.innerHTML = `<div class="rmy">${cover()}${continueCard()}
      <div class="sec-t">The Seven Kāṇḍas · ఏడు కాండలు</div>
      <div class="kgrid">${tiles}</div></div>`;
  };
  function renderKanda(el, k) {
    const [key, n, nt, sub, subTe, icon, grad, photo] = KMETA(k);
    const list = chapters().filter(c => c.kanda === key), pl = plan(key);
    const read = list.filter(c => S.done[c.id]).length;
    const rows = pl.length ? pl.map((p, i) => {
      const c = list.find(x => x.n === i + 1);
      if (!c) return `<div class="ch soon"><span class="n">${i + 1}</span><span class="t"><b>${esc(p[0])}</b><span>${esc(p[1])} · coming soon</span></span></div>`;
      const d = S.done[c.id];
      return `<button class="ch${d ? ' done' : ''}" onclick="openRmyChapter('${c.id}')"><span class="n">${d ? '✓' : c.n}</span>
        <span class="t"><b>${esc(c.title)}</b><span class="tt">${esc(c.titleTe)}</span><span>Sargas ${esc(c.sargas)} · ${c.pages.length + 2} pages · ~${minutes(c)} min</span></span>
        ${isNew(c) ? '<span class="new">NEW</span>' : ''}</button>`;
    }).join('') : `<div class="kempty">${icon}<p>The chapters of ${n} are being written.<br><span class="te">ఈ కాండ అధ్యాయాలు త్వరలో వస్తాయి.</span></p></div>`;
    el.innerHTML = `<div class="rmy">
      <div class="khead" style="background:${grad}">
        ${photo ? `<span class="kphoto" style="background-image:url('${photo}')"></span><span class="kshade"></span>` : ''}
        <button class="kback" onclick="openRamayana()" aria-label="All kāṇḍas">‹</button>
        <div class="kht">${photo ? '' : `<span class="kic">${icon}</span>`}<h1>${n}</h1><div class="h1te">${nt}</div>
        <p>${sub} · <span class="te">${subTe}</span></p>
        ${pl.length ? `<div class="kprog"><div class="bar"><i style="width:${Math.round(read / pl.length * 100)}%"></i></div><span>${read} of ${pl.length} chapters read</span></div>` : ''}</div>
      </div>
      <div class="chlist" style="padding-top:16px">${rows}</div>
    </div>`;
  }

  // ── reader ──
  let page = 0;
  window.renderRmyRead = function () {
    const el = document.getElementById('view-rmyread');
    const c = chap(state.kids);
    if (!c) { showView('ramayana'); return; }
    S.last = c.id; S.opened[c.id] = true; save();
    const total = c.pages.length + 2;
    page = Math.min(S.pos[c.id] || 0, total - 1);
    const who = (c.who || []).filter(k => WHO()[k]);
    const opener = `<div class="scene">${scene(c.scene, 'o')}</div>
      <div class="chno">${KMETA(c.kanda)[1]} · Chapter ${c.n}</div>
      <div class="optitle">${esc(c.title)}</div><div class="optitle-te">${esc(c.titleTe)}</div>
      <div class="meta"><span>📖 Sargas ${esc(c.sargas)}</span><span>⏱ ~${minutes(c)} min</span><span>📄 ${total} pages</span></div>
      ${c.n === 1 ? `<div class="opby">Retold by <b>Hari Pokkuluri</b> · <span class="te">కథనం: హరి పొక్కులూరి</span></div>` : ''}
      ${who.length ? `<div class="who-t">In this chapter</div><div class="whos">${who.map(k => `<button class="who" onclick="rmyWho('${k}')"><span class="av">${WHO()[k].av}</span><span class="wn">${esc(WHO()[k].en)}</span></button>`).join('')}</div>` : ''}
      <div class="hint">Swipe to begin →</div>`;
    const p = plan(c.kanda), nextPlan = p[c.n], nextC = chapters().find(x => x.kanda === c.kanda && x.n === c.n + 1);
    const end = `<div class="end-h"><div class="lotus">🪷</div><h2>Chapter complete</h2><p class="te">అధ్యాయం పూర్తయింది</p></div>
      ${c.remember ? `<div class="box"><h3>Remember</h3><ul>${c.remember.map(r => `<li><span><span class="en">${fmt(r[0])}</span><span class="te">${fmt(r[1])}</span></span></li>`).join('')}</ul></div>` : ''}
      ${c.think ? `<div class="box think"><h3>Think about it</h3><p><span class="en">${fmt(c.think[0])}</span><span class="te">${fmt(c.think[1])}</span></p></div>` : ''}
      ${nextPlan ? `<div class="box next"${nextC ? ` onclick="openRmyChapter('${nextC.id}')"` : ''}><div><small>Up next · Chapter ${c.n + 1}${nextC ? '' : ' · coming soon'}</small><b>${esc(nextPlan[0])}</b><span>Sargas ${esc(nextPlan[1].replace(/^Sargas? /, ''))}</span></div>${nextC ? '<span class="go">›</span>' : ''}</div>` : ''}
      <button class="markbtn${S.done[c.id] ? ' did' : ''}" onclick="rmyDone('${c.id}', this)">${S.done[c.id] ? '✓ Read' : 'Mark chapter as read'}</button>`;
    const pages = [opener, ...c.pages.map((b, i) => blocks(b, i === 0)), end];
    el.innerHTML = `<div class="rmy rmy-read mode-${MODE()}" id="rmy-read" style="--fs:${FS[S.fs] || FS[1]}" data-noswipe>
      <div class="rbar"><button class="x" onclick="openRmyKanda('${c.kanda}')" aria-label="Chapters">☰</button>
        <div class="where"><b>Ch ${c.n}</b></div>
        <div class="lang">${[['en', 'English'], ['te', 'తెలుగు'], ['both', 'Both']].map(([m, t]) => `<button data-m="${m}" class="${MODE() === m ? 'on' : ''}${m === 'te' ? ' te' : ''}" onclick="rmyMode('${m}')">${t}</button>`).join('')}</div>
        <button class="aa" onclick="rmyFont()" aria-label="Text size">Aa</button></div>
      <div class="prog"><i id="rmy-prog"></i></div>
      <div class="pages" id="rmy-pages"><div class="track" id="rmy-track">${pages.map(h => `<div class="page">${h}</div>`).join('')}</div></div>
      <div class="rnav"><button class="pb" id="rmy-prev" onclick="rmyGo(-1)" aria-label="Previous page">‹</button>
        <div class="dots">${pages.map(() => '<i></i>').join('')}</div>
        <button class="pb" id="rmy-next" onclick="rmyGo(1)" aria-label="Next page">›</button></div>
    </div>`;
    swipe(document.getElementById('rmy-pages'));
    rmyGo(0, true);
  };
  window.rmyGo = function (d, quiet) {
    const c = chap(state.kids); if (!c) return;
    const n = c.pages.length + 2;
    page = Math.max(0, Math.min(n - 1, page + d));
    const tr = document.getElementById('rmy-track'); if (!tr) return;
    tr.style.transform = `translateX(${-page * 100}%)`;
    [...tr.children].forEach((pg, i) => pg.classList.toggle('cur', i === page));
    fitHeight();
    document.querySelectorAll('#rmy-read .dots i').forEach((x, i) => x.classList.toggle('on', i === page));
    document.getElementById('rmy-prev').disabled = page === 0;
    document.getElementById('rmy-next').disabled = page === n - 1;
    document.getElementById('rmy-prog').style.width = Math.round(page / (n - 1) * 100) + '%';
    S.pos[c.id] = page; save();
    if (!quiet) { const m = document.getElementById('main'); if (m) m.scrollTo({ top: 0, behavior: 'smooth' }); }
  };
  // The page strip is as tall as the page being read (not the longest page)
  let ro = null;
  function fitHeight() {
    const cur = document.querySelector('#rmy-track .page.cur'), box = document.getElementById('rmy-pages');
    if (!cur || !box) return;
    box.style.height = cur.offsetHeight + 'px';
    if (window.ResizeObserver) { if (ro) ro.disconnect(); ro = new ResizeObserver(() => { box.style.height = cur.offsetHeight + 'px'; }); ro.observe(cur); }
  }
  function swipe(el) {
    let x0 = null, y0 = 0;
    el.addEventListener('touchstart', e => { x0 = e.touches[0].clientX; y0 = e.touches[0].clientY; }, { passive: true });
    el.addEventListener('touchend', e => {
      if (x0 === null) return;
      const dx = e.changedTouches[0].clientX - x0, dy = e.changedTouches[0].clientY - y0;
      if (Math.abs(dx) > 50 && Math.abs(dx) > Math.abs(dy) * 1.4) rmyGo(dx < 0 ? 1 : -1);
      x0 = null;
    }, { passive: true });
  }
  window.rmyMode = m => {
    if (typeof settings !== 'undefined') { settings.language = m; if (typeof saveSettings === 'function') saveSettings(); }
    const r = document.getElementById('rmy-read');
    r.classList.remove('mode-en', 'mode-te', 'mode-both'); r.classList.add('mode-' + m);
    r.querySelectorAll('.lang button').forEach(b => b.classList.toggle('on', b.dataset.m === m));
  };
  window.rmyFont = () => { S.fs = (S.fs + 1) % FS.length; save(); document.getElementById('rmy-read').style.setProperty('--fs', FS[S.fs]); };
  window.rmyDone = (id, btn) => { S.done[id] = !S.done[id]; save(); btn.classList.toggle('did', !!S.done[id]); btn.textContent = S.done[id] ? '✓ Read' : 'Mark chapter as read'; };

  // ── who's-who sheet ──
  window.rmyWho = function (k) {
    const w = WHO()[k]; if (!w) return;
    let bg = document.getElementById('rmy-sheetbg');
    if (!bg) {
      document.body.insertAdjacentHTML('beforeend', `<div class="rmy-sheetbg" id="rmy-sheetbg" onclick="rmyWhoClose()"></div><div class="rmy rmy-sheet" id="rmy-sheet" data-noswipe><div class="grab"></div><div id="rmy-sheetc"></div></div>`);
      bg = document.getElementById('rmy-sheetbg');
    }
    const sh = document.getElementById('rmy-sheet');
    sh.className = `rmy rmy-sheet mode-${MODE()}`;
    document.getElementById('rmy-sheetc').innerHTML = `<div class="row"><span class="av">${w.av}</span><h4>${esc(w.en)}<span class="te">${esc(w.te)}</span></h4></div>
      <p><span class="en">${esc(w.d)}</span><span class="te">${esc(w.dt)}</span></p>`;
    requestAnimationFrame(() => { sh.classList.add('on'); bg.classList.add('on'); });
  };
  window.rmyWhoClose = () => { document.getElementById('rmy-sheet').classList.remove('on'); document.getElementById('rmy-sheetbg').classList.remove('on'); };

  // ── styles (scoped to .rmy, using the app's theme colours) ──
  const css = `
.rmy{--te:color-mix(in srgb,var(--accent) 62%,var(--fg));--gold:#c9962e;--leaf:#2f7a4f;--tint:color-mix(in srgb,var(--accent) 9%,var(--card-bg));--shadow:0 6px 22px rgba(90,50,10,.10);font-family:system-ui,-apple-system,sans-serif;color:var(--fg)}
.rmy .te{font-family:'Noto Sans Telugu',sans-serif}
.rmy button{font:inherit;color:inherit;background:none;border:none;cursor:pointer}
.rmy .cover{position:relative;padding:22px 20px 26px;color:#fff;overflow:hidden;background:radial-gradient(120% 90% at 80% 0%,#e08a2c 0%,#b8540c 38%,#5a1e06 100%)}
.rmy .cover .bow{position:absolute;right:-20px;top:16px;width:160px;opacity:.22}
.rmy .cover h1{font-family:'Crimson Text',serif;font-size:2.3rem;line-height:1;letter-spacing:.01em}
.rmy .cover .h1te{font-family:'Noto Sans Telugu',sans-serif;font-size:1.1rem;opacity:.9;margin-top:6px}
.rmy .cover p{font-size:.86rem;opacity:.85;margin-top:8px;max-width:30ch;line-height:1.45}
.rmy .byline{margin-top:12px;font-size:.84rem;font-family:'Crimson Text',serif;font-style:italic}
.rmy .byline b{font-style:normal}.rmy .byline .te{display:block;font-style:normal;font-size:.78rem;opacity:.85;margin-top:2px}
.rmy .kandas{display:flex;gap:8px;overflow-x:auto;padding:16px 16px 4px;scrollbar-width:none}.rmy .kandas::-webkit-scrollbar{display:none}
.rmy .kchip{flex:none;padding:7px 13px;border-radius:999px;border:1.5px solid var(--border);font-size:.8rem;font-weight:600;color:var(--fg2);background:var(--card-bg)}
.rmy .kchip.on{background:var(--accent);border-color:var(--accent);color:#fff}.rmy .kchip.lock{opacity:.45}
.rmy .continue{margin:14px 16px 6px;border-radius:18px;background:var(--card-bg);box-shadow:var(--shadow);border:1px solid var(--border);display:flex;gap:14px;padding:12px;align-items:center;cursor:pointer}
.rmy .continue .thumb{width:72px;height:72px;border-radius:12px;overflow:hidden;flex:none}.rmy .continue .thumb svg,.rmy .scene svg{width:100%;height:100%;display:block}
.rmy .continue .ci{min-width:0;flex:1}.rmy .continue small{font-size:.68rem;font-weight:700;letter-spacing:.09em;color:var(--accent);text-transform:uppercase}
.rmy .continue b{display:block;font-family:'Crimson Text',serif;font-size:1.18rem;margin:2px 0;line-height:1.15}.rmy .continue span{font-size:.76rem;color:var(--fg3)}
.rmy .bar{height:5px;border-radius:5px;background:var(--border);margin-top:8px;overflow:hidden}.rmy .bar i{display:block;height:100%;background:linear-gradient(90deg,var(--accent),var(--gold))}
.rmy .go{width:38px;height:38px;border-radius:50%;background:var(--accent);color:#fff;display:flex;align-items:center;justify-content:center;flex:none;font-size:1rem}
.rmy .kgrid{display:grid;grid-template-columns:repeat(2,1fr);gap:12px;padding:0 16px 40px}
.rmy .ktile{position:relative;overflow:hidden;border-radius:18px;height:calc((min(100vw,680px) - 76px) / 2);max-height:300px;display:flex;flex-direction:column;align-items:center;justify-content:flex-end;padding:12px 10px 14px;color:#fff;text-align:center;box-shadow:0 4px 18px rgba(0,0,0,.18)}
.rmy .ktile:active{transform:scale(.97)}
.rmy .kbg,.rmy .kphoto,.rmy .kshade{position:absolute;inset:0}
.rmy .kphoto{background-size:cover;background-position:center}
.rmy .kshade{background:linear-gradient(180deg,rgba(0,0,0,.05) 30%,rgba(30,10,0,.78) 100%)}
.rmy .ktile>span:not(.kbg):not(.kphoto):not(.kshade){position:relative}
.rmy .kno{position:absolute!important;top:10px;left:12px;font-family:'Crimson Text',serif;font-weight:700;font-size:1.1rem;opacity:.85}
.rmy .knew{position:absolute!important;top:10px;right:10px;font-size:.6rem;font-weight:700;background:#fff;color:var(--accent);border-radius:6px;padding:2px 6px;letter-spacing:.05em}
.rmy .kic{font-size:1.9rem;line-height:1;margin-bottom:6px}
.rmy .kname{font-family:'Crimson Text',serif;font-weight:700;font-size:1.12rem;line-height:1.1;text-shadow:0 1px 4px rgba(0,0,0,.4)}
.rmy .kte{font-family:'Noto Sans Telugu',sans-serif;font-size:.78rem;opacity:.92;margin-top:2px}
.rmy .kmeta{font-size:.68rem;opacity:.85;margin-top:5px;letter-spacing:.02em}
.rmy .ktile.soon .kbg{filter:saturate(.55) brightness(.85)}.rmy .ktile.soon .kmeta{opacity:.7}
.rmy .khead{position:relative;overflow:hidden;color:#fff;padding:18px 20px 22px;min-height:200px;display:flex;flex-direction:column}
.rmy .khead .kphoto{background-position:center 30%}.rmy .khead .kshade{background:linear-gradient(180deg,rgba(0,0,0,.25),rgba(30,10,0,.82))}
.rmy .kback{position:relative;width:36px;height:36px;border-radius:50%;background:rgba(255,255,255,.18)!important;border:1.5px solid rgba(255,255,255,.35)!important;color:#fff!important;font-size:1.3rem}
.rmy .kht{position:relative;margin-top:auto;padding-top:18px}
.rmy .kht .kic{display:block;font-size:2rem}
.rmy .kht h1{font-family:'Crimson Text',serif;font-size:2.1rem;line-height:1.05;margin:4px 0 0}
.rmy .kht .h1te{font-family:'Noto Sans Telugu',sans-serif;font-size:1.05rem;opacity:.92;margin-top:4px}
.rmy .kht p{font-size:.84rem;opacity:.88;margin:6px 0 0}
.rmy .kprog{margin-top:12px}.rmy .kprog .bar{background:rgba(255,255,255,.3)}.rmy .kprog span{font-size:.74rem;opacity:.85;display:block;margin-top:5px}
.rmy .kempty{text-align:center;padding:40px 20px;color:var(--fg3);font-size:2.4rem}.rmy .kempty p{font-size:.92rem;line-height:1.6;margin-top:10px}
.rmy .sec-t{padding:18px 20px 8px;font-size:.72rem;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:var(--fg3)}
.rmy .chlist{padding:0 16px 40px;display:flex;flex-direction:column;gap:8px}
.rmy .ch{display:flex;align-items:center;gap:12px;padding:12px 14px;border-radius:14px;background:var(--card-bg);border:1px solid var(--border);text-align:left;width:100%}
.rmy .ch .n{width:34px;height:34px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-family:'Crimson Text',serif;font-weight:700;font-size:1.1rem;color:var(--accent);border:1.5px solid var(--border);flex:none}
.rmy .ch.done .n{background:var(--leaf);border-color:var(--leaf);color:#fff;font-size:.9rem}
.rmy .ch .t{flex:1;min-width:0}.rmy .ch .t b{display:block;font-size:.95rem;font-weight:600;color:var(--fg)}.rmy .ch .t span{display:block;font-size:.74rem;color:var(--fg3)}
.rmy .ch .t .tt{font-family:'Noto Sans Telugu',sans-serif;font-size:.78rem;color:var(--te)}
.rmy .ch .new{font-size:.62rem;font-weight:700;background:var(--accent);color:#fff;border-radius:6px;padding:2px 6px;letter-spacing:.05em}
.rmy .ch.soon{opacity:.5}
.rmy-read{position:relative}
.rmy .rbar{position:sticky;top:0;z-index:20;display:flex;align-items:center;gap:8px;padding:10px 12px;background:var(--bg);border-bottom:1px solid var(--border)}
.rmy .rbar .x,.rmy .aa{width:34px;height:34px;border-radius:50%;border:1.5px solid var(--border);flex:none}
.rmy .aa{font-family:'Crimson Text',serif;font-weight:700}
.rmy .rbar .where{flex:1;min-width:0;font-size:.78rem;color:var(--fg3);white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.rmy .rbar .where b{color:var(--fg);font-weight:600}
.rmy .lang{display:flex;border:1.5px solid var(--border);border-radius:999px;overflow:hidden;flex:none}
.rmy .lang button{padding:7px 11px;font-size:.8rem;font-weight:600;color:var(--fg2)}.rmy .lang button.te{font-family:'Noto Sans Telugu',sans-serif;font-size:.84rem}.rmy .lang button.on{background:var(--accent);color:#fff}
.rmy .prog{height:3px;background:var(--border)}.rmy .prog i{display:block;height:100%;width:0;background:linear-gradient(90deg,var(--accent),var(--gold));transition:width .35s}
.rmy .pages{overflow:hidden;touch-action:pan-y}
.rmy .track{display:flex;align-items:flex-start;transition:transform .38s cubic-bezier(.2,.8,.2,1)}
.rmy .page{flex:0 0 100%;min-width:0;max-width:100%;overflow-wrap:break-word;padding:22px 20px 24px}
.rmy .pages{transition:height .3s}
.rmy .scene{border-radius:20px;overflow:hidden;box-shadow:var(--shadow);aspect-ratio:16/11}
.rmy .chno{display:flex;align-items:center;gap:10px;margin-top:20px;color:var(--accent);font-size:.72rem;font-weight:700;letter-spacing:.14em;text-transform:uppercase}
.rmy .chno:after{content:"";flex:1;height:1px;background:var(--border)}
.rmy .optitle{font-family:'Crimson Text',serif;font-size:2.1rem;line-height:1.08;margin-top:8px;font-weight:700}
.rmy .optitle-te{font-family:'Noto Sans Telugu',sans-serif;font-size:1.12rem;color:var(--te);margin-top:6px;font-weight:600}
.rmy .meta{display:flex;flex-wrap:wrap;gap:6px 14px;margin-top:12px;font-size:.78rem;color:var(--fg3)}
.rmy .opby{margin-top:10px;font-family:'Crimson Text',serif;font-style:italic;font-size:.98rem;color:var(--fg2)}.rmy .opby b{font-style:normal;color:var(--accent)}.rmy .opby .te{font-style:normal;font-size:.82rem;color:var(--te)}
.rmy .who-t{margin-top:22px;font-size:.72rem;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:var(--fg3)}
.rmy .whos{display:flex;gap:10px;margin-top:10px;overflow-x:auto;padding-bottom:4px;scrollbar-width:none}
.rmy .who{flex:none;width:72px;text-align:center}
.rmy .av{width:56px;height:56px;margin:0 auto;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:1.55rem;border:2px solid var(--gold);background:var(--tint)}
.rmy .who .wn{display:block;font-size:.72rem;margin-top:5px;color:var(--fg2);font-weight:600;line-height:1.2}
.rmy .hint{margin-top:24px;text-align:center;font-size:.8rem;color:var(--fg3);animation:rmynudge 1.8s ease-in-out infinite}
@keyframes rmynudge{50%{transform:translateX(6px)}}
.rmy .para{font-family:'Crimson Text',serif;font-size:var(--fs,1.22rem);line-height:1.6;color:var(--fg);margin:0 0 14px}
.rmy .para.first:first-letter{float:left;font-size:3.4em;line-height:.82;padding:6px 8px 0 0;color:var(--accent);font-weight:700}
.rmy .para-te{font-family:'Noto Sans Telugu',sans-serif;font-size:calc(var(--fs,1.22rem)*.86);line-height:1.85;color:var(--te);margin:-4px 0 18px;padding-left:12px;border-left:3px solid var(--border)}
.rmy.mode-te .para-te{border:0;padding:0;color:var(--fg);margin-top:0}
.rmy.mode-en .para-te,.rmy.mode-te .para{display:none}
.rmy .nm{color:var(--accent);font-weight:600;border-bottom:1.5px dotted var(--accent);cursor:pointer}
.rmy .para-te .nm{color:inherit;border-bottom-color:var(--te)}
.rmy .sloka{margin:22px 0;border-radius:18px;padding:20px 16px 16px;text-align:center;position:relative;background:linear-gradient(180deg,var(--tint),var(--card-bg));border:1.5px solid var(--gold);box-shadow:var(--shadow)}
.rmy .sloka:before,.rmy .sloka:after{content:"❁";position:absolute;top:-12px;left:50%;transform:translateX(-50%);background:var(--bg);padding:0 8px;color:var(--gold);font-size:1rem}
.rmy .sloka:after{top:auto;bottom:-12px}
.rmy .sk-te{font-family:'Noto Sans Telugu',sans-serif;font-size:1.06rem;line-height:1.8;font-weight:600}
.rmy .sk-en{font-family:'Crimson Text',serif;font-style:italic;font-size:1.04rem;line-height:1.5;color:var(--fg2);margin-top:8px}
.rmy .sk-m{font-size:.86rem;line-height:1.55;color:var(--fg2);margin-top:12px;padding-top:12px;border-top:1px dashed var(--border);text-align:left}
.rmy .sk-m .te{display:block;margin-top:6px;color:var(--te)}
.rmy .dyk{display:flex;gap:12px;margin:18px 0;padding:14px;border-radius:16px;background:var(--card-bg);border:1px solid var(--border);box-shadow:var(--shadow)}
.rmy .dyk .ic{font-size:1.5rem;line-height:1}.rmy .dyk b{display:block;font-size:.7rem;letter-spacing:.1em;text-transform:uppercase;color:var(--leaf);margin-bottom:4px}
.rmy .dyk p{font-size:.9rem;line-height:1.5;color:var(--fg2);margin:0}.rmy .dyk .te{display:block;margin-top:6px;color:var(--te);font-size:.86rem}
.rmy.mode-en .te.te-x,.rmy.mode-en .dyk .te,.rmy.mode-te .dyk .en,.rmy.mode-en .sk-m .te,.rmy.mode-te .sk-m .en,.rmy.mode-en .box .te,.rmy.mode-te .box .en,.rmy.mode-en .rmy-sheet .te{display:none}
.rmy .sank{margin:18px 0;border:1.5px solid var(--gold);border-radius:16px;background:var(--card-bg);box-shadow:var(--shadow);overflow:hidden}
.rmy .sank summary{list-style:none;cursor:pointer;padding:14px 16px;font-weight:600;font-size:.95rem}
.rmy .sank summary::-webkit-details-marker{display:none}
.rmy .sank summary small{display:block;font-weight:400;font-size:.76rem;color:var(--fg3);margin-top:2px}
.rmy .sank summary .te{display:none}.rmy.mode-te .sank summary .te{display:block}.rmy.mode-te .sank summary .en{display:none}
.rmy .sank[open] summary{border-bottom:1px dashed var(--border)}
.rmy .sank-body{padding:14px 16px 4px}.rmy .sank-body .para{font-size:calc(var(--fs,1.22rem)*.9)}
.rmy .end-h{text-align:center;margin-top:6px}.rmy .end-h .lotus{font-size:2.6rem}.rmy .end-h h2{font-family:'Crimson Text',serif;font-size:1.8rem;margin:4px 0 0}.rmy .end-h p{font-size:.85rem;color:var(--fg3);margin:2px 0 0}
.rmy .box{margin-top:18px;border-radius:18px;padding:16px;background:var(--card-bg);border:1px solid var(--border);box-shadow:var(--shadow)}
.rmy .box h3{font-size:.72rem;letter-spacing:.1em;text-transform:uppercase;color:var(--accent);margin:0 0 10px}
.rmy .box ul{margin:0;padding:0}.rmy .box li{list-style:none;display:flex;gap:10px;font-size:.93rem;line-height:1.5;margin-bottom:9px}
.rmy .box li:before{content:"✓";color:var(--leaf);font-weight:700}.rmy .box .te{display:block;color:var(--te);font-size:.86rem}
.rmy .box p{margin:0;font-size:.95rem;line-height:1.5}
.rmy .think{background:var(--tint);border-color:color-mix(in srgb,var(--gold) 50%,var(--border))}
.rmy .next{display:flex;align-items:center;gap:12px;cursor:pointer}.rmy .next>div{flex:1}
.rmy .next small{display:block;font-size:.68rem;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:var(--fg3)}
.rmy .next b{display:block;font-family:'Crimson Text',serif;font-size:1.15rem}.rmy .next span{font-size:.8rem;color:var(--fg3)}
.rmy .markbtn{display:block;width:100%;margin-top:18px;padding:14px;border-radius:14px;background:var(--accent);color:#fff!important;font-weight:700;font-size:1rem}
.rmy .markbtn.did{background:var(--leaf)}
.rmy .rnav{position:sticky;bottom:0;z-index:20;display:flex;align-items:center;justify-content:space-between;padding:10px 16px 12px;background:linear-gradient(0deg,var(--bg) 70%,transparent)}
.rmy .pb{width:44px;height:44px;border-radius:50%;background:var(--card-bg)!important;border:1.5px solid var(--border)!important;font-size:1.2rem;box-shadow:var(--shadow)}
.rmy .pb:disabled{opacity:.3}
.rmy .dots{display:flex;gap:5px;flex-wrap:wrap;justify-content:center;max-width:65%}
.rmy .dots i{width:7px;height:7px;border-radius:4px;background:var(--border);transition:all .3s}.rmy .dots i.on{width:20px;background:var(--accent)}
.rmy-sheetbg{position:fixed;inset:0;background:rgba(0,0,0,.35);z-index:400;opacity:0;pointer-events:none;transition:opacity .25s}
.rmy-sheetbg.on{opacity:1;pointer-events:auto}
.rmy-sheet{position:fixed;left:50%;bottom:0;transform:translate(-50%,110%);visibility:hidden;width:100%;max-width:520px;z-index:401;background:var(--card-bg);border-radius:22px 22px 0 0;padding:10px 22px calc(26px + env(safe-area-inset-bottom));transition:transform .3s cubic-bezier(.2,.8,.2,1);box-shadow:0 -10px 30px rgba(0,0,0,.2)}
.rmy-sheet.on{transform:translate(-50%,0);visibility:visible}
.rmy-sheet .grab{width:40px;height:4px;border-radius:2px;background:var(--border);margin:0 auto 14px}
.rmy-sheet .row{display:flex;gap:14px;align-items:center}.rmy-sheet .av{margin:0}
.rmy-sheet h4{font-family:'Crimson Text',serif;font-size:1.5rem;line-height:1.1;margin:0}.rmy-sheet h4 .te{font-size:1rem;color:var(--te);display:block}
.rmy-sheet p{margin:12px 0 0;font-size:.93rem;line-height:1.55;color:var(--fg2)}.rmy-sheet p .te{display:block;margin-top:6px;color:var(--te)}
.rmy-sheet.mode-te p .en,.rmy-sheet.mode-en p .te{display:none}
`;
  const st = document.createElement('style'); st.textContent = css; document.head.appendChild(st);

  // If the app was reopened on a Rāmāyaṇa page, draw it now that this file has loaded
  if (typeof state !== 'undefined' && (state.view === 'ramayana' || state.view === 'rmyread')) renderCurrentView();
})();
