// Checks the Vedas files before publishing:  node tools/check_vedas.js
// Fails (exit 1) on any problem so a broken book never goes live.
const fs = require('fs'), path = require('path');
const root = path.join(__dirname, '..');
global.window = {};
const files = fs.existsSync(path.join(root, 'vedas')) ? fs.readdirSync(path.join(root, 'vedas')).filter(f => f.endsWith('.js')).sort() : [];
const sageFiles = fs.readdirSync(path.join(root, 'sages')).filter(f => f.endsWith('.js'));
for (const f of ['ramayana/bala.js', 'ramayana/ayodhya.js', 'ramayana/aranya.js', 'ramayana/kishkindha.js'])
  if (fs.existsSync(path.join(root, f))) eval(fs.readFileSync(path.join(root, f), 'utf8'));
const errs = [];
for (const f of sageFiles) eval(fs.readFileSync(path.join(root, 'sages', f), 'utf8'));
const SAGE_CH = window.SAGE_CHAPTERS || [];
for (const f of files) {
  try { eval(fs.readFileSync(path.join(root, 'vedas', f), 'utf8')); }
  catch (e) { errs.push(`vedas/${f}: does not parse — ${e.message}`); }
}
const index = fs.readFileSync(path.join(root, 'index.html'), 'utf8');
const sw = fs.readFileSync(path.join(root, 'sw.js'), 'utf8');
const sagesJs = fs.readFileSync(path.join(root, 'vedas.js'), 'utf8');
const sageKeys = [...sagesJs.matchAll(/^\s+\['([a-z]+)', '/gm)].map(m => m[1]);
for (const f of files) {
  if (!index.includes(`<script src="vedas/${f}"></script>`)) errs.push(`index.html: missing <script src="vedas/${f}"></script>`);
  if (!sw.includes(`'./vedas/${f}'`)) errs.push(`sw.js: SHELL is missing './vedas/${f}'`);
  if (index.indexOf(`vedas/${f}"`) > index.indexOf('<script src="vedas.js">')) errs.push(`index.html: vedas/${f} must load before vedas.js`);
}
if (files.length) {
  if (!index.includes('<script src="vedas.js"></script>')) errs.push('index.html: missing <script src="vedas.js"></script> (after sages.js)');
  else if (index.indexOf('<script src="vedas.js">') < index.indexOf('<script src="sages.js">')) errs.push('index.html: vedas.js must load after sages.js');
  if (!sw.includes("'./vedas.js'")) errs.push("sw.js: SHELL is missing './vedas.js'");
  for (const id of ['view-vedas', 'view-vedaread']) if (!index.includes(`id="${id}"`)) errs.push(`index.html: missing <div class="view" id="${id}">`);
  if (!/key:'vedas'/.test(index)) errs.push("index.html: missing the home tile { key:'vedas', … action:\"openVedas()\" }");
}
const W = window.RMY_WHO || {}, CH = window.VEDA_CHAPTERS || [], PLAN = window.VEDA_PLAN || {};
const rids = new Set((window.RMY_CHAPTERS || []).map(c => c.id));
const ids = new Set(), orders = new Set(), teRe = /[ఀ-౿]/;
const TYPES = ['p', 'h', 'dyk', 'src', 'more', 'link', 'sglink', 'vdlink'];  // no 'sloka': Hari asked for no verses
const names = (s, where) => { for (const m of String(s).matchAll(/\{(\w+)\|/g)) if (!W[m[1]]) errs.push(`${where}: name key "${m[1]}" has no RMY_WHO entry`); };
for (const c of CH) {
  const w = c.id || '(no id)';
  if (ids.has(c.id)) errs.push(`${w}: duplicate id`); ids.add(c.id);
  if (orders.has(c.order)) errs.push(`${w}: duplicate order ${c.order}`); orders.add(c.order);
  if (!sageKeys.includes(c.book)) errs.push(`${w}: book "${c.book}" is not in the list in vedas.js`);
  if (!PLAN[c.book] || !PLAN[c.book][c.n - 1]) errs.push(`${w}: no SAGE_PLAN entry for chapter ${c.n}`);
  if (!/^\d{4}-\d{2}-\d{2}$/.test(c.date || '')) errs.push(`${w}: date must be YYYY-MM-DD`);
  if (!c.title || !teRe.test(c.titleTe || '') || !c.src) errs.push(`${w}: title, Telugu titleTe and src required`);
  if (!(c.pages || []).some(p => p.some(b => b[0] === 'src'))) errs.push(`${w}: add a 'src' block (where this comes from) on the last page`);
  for (const k of c.who || []) if (!W[k]) errs.push(`${w}: who "${k}" has no RMY_WHO entry`);
  if (!Array.isArray(c.pages) || c.pages.length < 2) errs.push(`${w}: needs at least 2 pages`);
  const walk = (bl, pg) => bl.forEach(b => {
    if (!TYPES.includes(b[0])) errs.push(`${w} p${pg}: unknown block "${b[0]}"`);
    if (b[0] === 'p') { if (!teRe.test(b[2] || '')) errs.push(`${w} p${pg}: paragraph without Telugu`); names(b[1] + b[2], `${w} p${pg}`); }
    if (b[0] === 'dyk' || b[0] === 'src' || b[0] === 'h') if (!teRe.test(b[b[0] === 'dyk' ? 3 : 2] || '')) errs.push(`${w} p${pg}: ${b[0]} without Telugu`);
    if (b[0] === 'link' && !rids.has(b[3])) errs.push(`${w} p${pg}: Rāmāyaṇa chapter "${b[3]}" does not exist`);
    if (b[0] === 'sglink' && !SAGE_CH.some(x => x.id === b[3])) errs.push(`${w} p${pg}: sage chapter "${b[3]}" does not exist`);
    if (b[0] === 'vdlink' && !CH.some(x => x.id === b[3])) errs.push(`${w} p${pg}: Vedas chapter "${b[3]}" does not exist`);
    if (b[0] === 'more') walk(b[5] || [], pg);
  });
  (c.pages || []).forEach((p, i) => walk(p, i + 1));
  for (const r of c.remember || []) names(r[0] + r[1], `${w} remember`);
  if (!c.remember || !c.think) errs.push(`${w}: remember and think required`);
}
for (const k of Object.keys(PLAN)) {
  const have = CH.filter(c => c.book === k).map(c => c.n).sort((a, b) => a - b);
  have.forEach((n, i) => { if (n !== i + 1) errs.push(`${k}: chapter numbers must run 1, 2, 3… (found ${have.join(',')})`); });
}
if (errs.length) { console.error(errs.join('\n')); process.exit(1); }
const by = {}; CH.forEach(c => by[c.book] = (by[c.book] || 0) + 1);
console.log('OK —', Object.entries(by).map(([k, n]) => `${k}: ${n}`).join(', ') || 'no books yet');
