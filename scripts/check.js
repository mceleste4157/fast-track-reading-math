#!/usr/bin/env node
// Fast, dependency-free sanity checks. Run before every deploy:  node scripts/check.js
// Each check exists because the mistake it catches actually reached production once.
const fs = require('fs'), path = require('path'), vm = require('vm');
const root = path.join(__dirname, '..'), pub = path.join(root, 'public');
const problems = [];
const fail = (area, msg) => problems.push(`[${area}] ${msg}`);
const read = f => fs.readFileSync(f, 'utf8');
const rel = f => path.relative(root, f);
const htmlFiles = fs.readdirSync(pub).filter(f => f.endsWith('.html')).map(f => path.join(pub, f));
const jsFiles = fs.readdirSync(pub).filter(f => f.endsWith('.js')).map(f => path.join(pub, f));
const evalIn = (file, expr) => vm.runInNewContext(read(file) + `\n;${expr}`, {});

// 1. A syntax error in one inline <script> silently kills that whole page.
for (const f of htmlFiles) {
  const src = read(f);
  [...src.matchAll(/<script>([\s\S]*?)<\/script>/g)].forEach((m, i) => {
    try { new vm.Script(m[1], { filename: `${rel(f)} (inline script ${i + 1})` }); }
    catch (e) { fail('syntax', `${rel(f)} inline script ${i + 1}: ${e.message}`); }
  });
}
for (const f of jsFiles) {
  try { new vm.Script(read(f), { filename: rel(f) }); } catch (e) { fail('syntax', `${rel(f)}: ${e.message}`); }
}

// 2. Math questions: broken options / answers / steps are shown to kids as-is.
let MATH = [];
try { MATH = evalIn(path.join(pub, 'math-data.js'), 'MATH_SETS'); } catch (e) { fail('math', 'could not load math-data.js: ' + e.message); }
const setIds = new Set();
MATH.forEach(s => {
  if (setIds.has(s.id)) fail('math', `duplicate set id ${s.id}`); setIds.add(s.id);
  if (!s.title || !s.coverEmoji || !s.coverColor || !s.topic) fail('math', `${s.id}: missing title/cover/topic`);
  if (!Array.isArray(s.grades) || !s.grades.length || s.grades.some(g => !Number.isInteger(g) || g < 1 || g > 8)) fail('math', `${s.id}: bad grades`);
  if (!Array.isArray(s.questions) || s.questions.length < 1) fail('math', `${s.id}: no questions`);
  (s.questions || []).forEach((q, i) => {
    const t = `${s.id} Q${i + 1}`;
    if (!q.question) fail('math', `${t}: empty question`);
    if (!Array.isArray(q.options) || q.options.length !== 4 || new Set(q.options).size !== 4 || q.options.some(o => !String(o).trim())) fail('math', `${t}: needs 4 distinct non-empty options`);
    if (!Number.isInteger(q.correctIndex) || !q.options || q.correctIndex < 0 || q.correctIndex >= q.options.length) fail('math', `${t}: correctIndex out of range`);
    if (!q.explanation) fail('math', `${t}: missing explanation`);
    if (!Array.isArray(q.steps) || !q.steps.length) fail('math', `${t}: missing Show Me How steps`);
    // "undefined" is a legitimate math answer choice (0 ÷ 5, y-coordinate...), so only scan options for NaN/[object.
    const prose = [q.question, q.explanation, ...(q.steps || []), ...(q.altSteps || [])].join('\n');
    if (/\bNaN\b|\bundefined\b|\[object/.test(prose) || /\bNaN\b|\[object/.test((q.options || []).join('\n'))) fail('math', `${t}: contains NaN/undefined/[object`);
    if (q.altSteps && (!q.altLabel || !q.altSteps.length)) fail('math', `${t}: altSteps needs altLabel`);
  });
});

// 3. Stories + the files derived from them.
let STORIES = [];
try { STORIES = evalIn(path.join(pub, 'stories.js'), 'STORIES'); } catch (e) { fail('stories', 'could not load stories.js: ' + e.message); }
const storyIds = new Set();
STORIES.forEach(s => {
  if (storyIds.has(s.id)) fail('stories', `duplicate story id ${s.id}`); storyIds.add(s.id);
  if (!s.title || !s.text) fail('stories', `${s.id}: missing title/text`);
  (s.questions || []).forEach((q, i) => {
    if (!Array.isArray(q.options) || q.options.length < 2 || !Number.isInteger(q.correctIndex) || q.correctIndex < 0 || q.correctIndex >= q.options.length)
      fail('stories', `${s.id} Q${i + 1}: bad options/correctIndex`);
  });
});
try {
  const { spawnSync } = require('child_process');
  const r = spawnSync(process.execPath, [path.join(__dirname, 'build-data.js'), '--check'], { encoding: 'utf8' });
  if (r.status !== 0) fail('derived-data', (r.stderr || 'build-data.js --check failed').trim());
} catch (e) { fail('derived-data', e.message); }

// 4. Service worker + offline-download list must agree, and every file they name must exist.
try {
  const swSrc = read(path.join(pub, 'sw.js'));
  const sw = vm.runInNewContext(swSrc + '\n;({CACHE,STATIC_ASSETS})', { self: { addEventListener() {} }, caches: {}, fetch() {} });
  sw.STATIC_ASSETS.filter(a => !a.startsWith('/__/')).forEach(a => {
    if (!fs.existsSync(path.join(pub, a.split('?')[0]))) fail('service-worker', `sw.js caches ${a} but public/${a.split('?')[0]} does not exist`);
  });
  const ix = read(path.join(pub, 'index.html'));
  const cacheName = (ix.match(/caches\.open\('([^']+)'\)/) || [])[1];
  if (cacheName !== sw.CACHE) fail('service-worker', `index.html offline download uses cache "${cacheName}" but sw.js uses "${sw.CACHE}" (downloads would be saved where the worker never looks)`);
  const listSrc = (ix.match(/const ASSETS = (\[[\s\S]*?\]);/) || [])[1];
  if (listSrc) new Function('return ' + listSrc)().filter(a => !a.startsWith('/__/')).forEach(a => {
    if (!fs.existsSync(path.join(pub, a.split('?')[0]))) fail('service-worker', `index.html offline list names ${a} but it does not exist`);
    if (!sw.STATIC_ASSETS.includes(a)) fail('service-worker', `index.html offline list has ${a} that sw.js does not precache`);
  });
} catch (e) { fail('service-worker', e.message); }

// 5. Every page must reference files that exist (typos here silently break a page).
for (const f of htmlFiles) {
  const src = read(f);
  [...src.matchAll(/<(?:script|link|a)\b[^>]*?\b(?:src|href)="([^"]+)"/g)].forEach(m => {
    let u = m[1];
    if (/^(https?:|mailto:|tel:|javascript:|data:|#)/.test(u) || u.startsWith('/__/') || /\$\{|'\s*\+|\+\s*'/.test(u)) return;
    u = u.split('#')[0].split('?')[0];
    if (!u) return;
    if (!fs.existsSync(path.join(pub, u.replace(/^\//, '')))) fail('references', `${rel(f)} points to "${m[1]}" which does not exist`);
  });
}

// 6. Every Firestore collection the pages use needs a security rule (SpellingProgress and
//    StoryRatings had none, so every save to them was silently rejected).
const rules = read(path.join(root, 'firestore.rules'));
const ruled = new Set([...rules.matchAll(/match \/([A-Za-z]+)\/\{/g)].map(m => m[1]));
const used = new Set();
for (const f of htmlFiles) for (const m of read(f).matchAll(/collection\('([A-Za-z_]+)'\)/g)) used.add(m[1]);
used.forEach(c => { if (!ruled.has(c)) fail('firestore-rules', `code uses collection "${c}" but firestore.rules has no rule for it`); });

// 7. Pages that call reportSaveError() must load the helper that defines it.
for (const f of htmlFiles) {
  const src = read(f);
  if (/reportSaveError\(/.test(src) && !/app-errors\.js/.test(src)) fail('helpers', `${rel(f)} calls reportSaveError() but does not load app-errors.js`);
}

if (problems.length) {
  console.error(`\n${problems.length} problem(s) found:\n`);
  problems.forEach(p => console.error('  ✗ ' + p));
  console.error('');
  process.exit(1);
}
console.log(`✓ all checks passed — ${htmlFiles.length} pages, ${MATH.length} math sets (${MATH.reduce((n, s) => n + s.questions.length, 0)} questions), ${STORIES.length} stories, ${used.size} Firestore collections`);
