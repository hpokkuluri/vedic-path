// Checks stories.js before publishing:  node tools/check_stories.js
// Fails (exit 1) on any problem so a broken story never goes live.
const fs = require('fs'), path = require('path');
const root = path.join(__dirname, '..');
global.window = {};
eval(fs.readFileSync(path.join(root, 'stories.js'), 'utf8'));
const kit = fs.readFileSync(path.join(root, 'kids.js'), 'utf8');
const bgBlock = kit.slice(kit.indexOf('const BG = {'), kit.indexOf('const SKIN'));
const bgs = [...bgBlock.matchAll(/^\s{4}(\w+): \(\) =>/gm)].map(m => m[1]);
const propsBlock = kit.slice(kit.indexOf('const PROPS = {'), kit.indexOf('function kidsScene'));
const props = [...propsBlock.matchAll(/^\s{4}(\w+): \(/gm)].map(m => m[1]);
const S = window.KIDS_STORIES, ids = new Set(), errs = [];
const teRe = /[ఀ-౿]/;
for (const s of S) {
  const where = s.id || '(no id)';
  if (!/^[a-z0-9-]+$/.test(s.id || '')) errs.push(`${where}: bad id`);
  if (ids.has(s.id)) errs.push(`${where}: duplicate id`); ids.add(s.id);
  if (!/^\d{4}-\d{2}-\d{2}$/.test(s.added || '')) errs.push(`${where}: added must be YYYY-MM-DD`);
  if (!['Ramayana', 'Mahabharata'].includes(s.epic)) errs.push(`${where}: epic must be Ramayana or Mahabharata`);
  if (!s.title || !s.title.en || !teRe.test(s.title.te || '')) errs.push(`${where}: title.en and Telugu title.te required`);
  if (s.chars && (!Array.isArray(s.chars) || !s.chars.length)) errs.push(`${where}: chars must be a non-empty list`);
  if (!s.moral || !s.moral.en || !teRe.test(s.moral.te || '')) errs.push(`${where}: moral.en and Telugu moral.te required`);
  if (!Array.isArray(s.pages) || s.pages.length < 2 || s.pages.length > 5) errs.push(`${where}: needs 2–5 pages`);
  (s.pages || []).forEach((p, i) => {
    const w = (p.en || '').split(/\s+/).length;
    if (w < 60 || w > 170) errs.push(`${where} page ${i + 1}: English is ${w} words (keep 60–170)`);
    if (!teRe.test(p.te || '')) errs.push(`${where} page ${i + 1}: Telugu text missing`);
    for (const sc of [p.scene, s.cover].filter(Boolean)) {
      if (!bgs.includes(sc.bg)) errs.push(`${where} page ${i + 1}: unknown background "${sc.bg}"`);
      for (const pr of sc.props || []) if (!props.includes(pr[0])) errs.push(`${where} page ${i + 1}: unknown prop "${pr[0]}"`);
    }
  });
}
if (errs.length) { console.error(errs.join('\n')); process.exit(1); }
console.log(`OK: ${S.length} stories. Backgrounds: ${bgs.join(', ')}. Props: ${props.join(', ')}`);
