// Checks the Great Sages files before publishing:  node tools/check_sages.js
// Fails (exit 1) on any problem so a broken sage never goes live.
const fs = require('fs'), path = require('path');
const root = path.join(__dirname, '..');
global.window = {};
const files = fs.readdirSync(path.join(root, 'sages')).filter(f => f.endsWith('.js')).sort();
for (const f of ['ramayana/bala.js', 'ramayana/ayodhya.js', 'ramayana/aranya.js', 'ramayana/kishkindha.js'])
  if (fs.existsSync(path.join(root, f))) eval(fs.readFileSync(path.join(root, f), 'utf8'));
const errs = [];
for (const f of files) {
  try { eval(fs.readFileSync(path.join(root, 'sages', f), 'utf8')); }
  catch (e) { errs.push(`sages/${f}: does not parse — ${e.message}`); }
}
const index = fs.readFileSync(path.join(root, 'index.html'), 'utf8');
const sw = fs.readFileSync(path.join(root, 'sw.js'), 'utf8');
const sagesJs = fs.readFileSync(path.join(root, 'sages.js'), 'utf8');
const sageKeys = [...sagesJs.matchAll(/^\s+\['([a-z]+)', '/gm)].map(m => m[1]);
for (const f of files) {
  if (!index.includes(`<script src="sages/${f}"></script>`)) errs.push(`index.html: missing <script src="sages/${f}"></script>`);
  if (!sw.includes(`'./sages/${f}'`)) errs.push(`sw.js: SHELL is missing './sages/${f}'`);
  if (index.indexOf(`sages/${f}"`) > index.indexOf('<script src="sages.js">')) errs.push(`index.html: sages/${f} must load before sages.js`);
}
const W = window.RMY_WHO || {}, CH = window.SAGE_CHAPTERS || [], PLAN = window.SAGE_PLAN || {};
const rids = new Set((window.RMY_CHAPTERS || []).map(c => c.id));
const ids = new Set(), orders = new Set(), teRe = /[ఀ-౿]/;
const TYPES = ['p', 'h', 'sloka', 'dyk', 'src', 'more', 'link', 'sglink'];
const names = (s, where) => { for (const m of String(s).matchAll(/\{(\w+)\|/g)) if (!W[m[1]]) errs.push(`${where}: name key "${m[1]}" has no RMY_WHO entry`); };
for (const c of CH) {
  const w = c.id || '(no id)';
  if (ids.has(c.id)) errs.push(`${w}: duplicate id`); ids.add(c.id);
  if (orders.has(c.order)) errs.push(`${w}: duplicate order ${c.order}`); orders.add(c.order);
  if (!sageKeys.includes(c.sage)) errs.push(`${w}: sage "${c.sage}" is not in the SAGES list in sages.js`);
  if (!PLAN[c.sage] || !PLAN[c.sage][c.n - 1]) errs.push(`${w}: no SAGE_PLAN entry for chapter ${c.n}`);
  if (!/^\d{4}-\d{2}-\d{2}$/.test(c.date || '')) errs.push(`${w}: date must be YYYY-MM-DD`);
  if (!c.title || !teRe.test(c.titleTe || '') || !c.src) errs.push(`${w}: title, Telugu titleTe and src required`);
  for (const k of c.who || []) if (!W[k]) errs.push(`${w}: who "${k}" has no RMY_WHO entry`);
  if (!Array.isArray(c.pages) || c.pages.length < 2) errs.push(`${w}: needs at least 2 pages`);
  const walk = (bl, pg) => bl.forEach(b => {
    if (!TYPES.includes(b[0])) errs.push(`${w} p${pg}: unknown block "${b[0]}"`);
    if (b[0] === 'p') { if (!teRe.test(b[2] || '')) errs.push(`${w} p${pg}: paragraph without Telugu`); names(b[1] + b[2], `${w} p${pg}`); }
    if (b[0] === 'dyk' || b[0] === 'src' || b[0] === 'h') if (!teRe.test(b[b[0] === 'dyk' ? 3 : 2] || '')) errs.push(`${w} p${pg}: ${b[0]} without Telugu`);
    if (b[0] === 'link' && !rids.has(b[3])) errs.push(`${w} p${pg}: Rāmāyaṇa chapter "${b[3]}" does not exist`);
    if (b[0] === 'sglink' && !CH.some(x => x.id === b[3])) errs.push(`${w} p${pg}: sage chapter "${b[3]}" does not exist`);
    if (b[0] === 'more') walk(b[5] || [], pg);
  });
  (c.pages || []).forEach((p, i) => walk(p, i + 1));
  for (const r of c.remember || []) names(r[0] + r[1], `${w} remember`);
  if (!c.remember || !c.think) errs.push(`${w}: remember and think required`);
}
for (const k of Object.keys(PLAN)) {
  const have = CH.filter(c => c.sage === k).map(c => c.n).sort((a, b) => a - b);
  have.forEach((n, i) => { if (n !== i + 1) errs.push(`${k}: chapter numbers must run 1, 2, 3… (found ${have.join(',')})`); });
}
if (errs.length) { console.error(errs.join('\n')); process.exit(1); }
const by = {}; CH.forEach(c => by[c.sage] = (by[c.sage] || 0) + 1);
console.log('OK —', Object.entries(by).map(([k, n]) => `${k}: ${n}`).join(', '));
