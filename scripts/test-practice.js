#!/usr/bin/env node
// Builds each "fresh every time" practice set many times and re-derives every correct answer from the
// question text itself, so a generator bug (wrong answer key, duplicate options, NaN) is caught before kids see it.
//   node scripts/test-practice.js [iterations]
const fs = require('fs'), path = require('path'), vm = require('vm');
const pub = path.join(__dirname, '..', 'public');
const E = require(path.join(pub, 'division-engine.js'));
const code = fs.readFileSync(path.join(pub, 'math-practice.js'), 'utf8');
const mathData = fs.readFileSync(path.join(pub, 'math-data.js'), 'utf8');
const ITER = parseInt(process.argv[2], 10) || 300;
const num = s => Number(String(s).replace(/,/g, ''));
const fmt = n => n.toLocaleString('en-US');
const problems = [];
const bad = (set, q, msg) => { if (problems.length < 25) problems.push(`${set} :: "${q}" — ${msg}`); else if (problems.length === 25) problems.push('…more'); };

const origTexts = (() => {   // every set's hand-written questions, straight from math-data.js
  const c = vm.createContext({ window: {} }); vm.runInContext(mathData, c);
  return JSON.parse(vm.runInContext("JSON.stringify(Object.fromEntries(MATH_SETS.map(s => [s.id, s.questions.map(q => q.question)])))", c));
})();
let questionsChecked = 0, setsBuilt = 0;
for (let it = 0; it < ITER; it++) {
  const ctx = { window: { DivisionEngine: E }, Math, Object, Error, Array, String, Number };
  vm.createContext(ctx);
  vm.runInContext(mathData, ctx);     // real math-data.js first, then the generators on top (as in the browser)
  vm.runInContext(code, ctx);
  const allSets = vm.runInContext('MATH_SETS', ctx);
  for (const set of allSets.filter(s => s.dynamic || s.freshExtra)) {
    let qs;
    try { qs = set.questions; setsBuilt++; } catch (e) { bad(set.id, '(build)', e.message); continue; }
    const hasFresh = !!set.freshExtra, baseCount = hasFresh ? 8 : 0;
    if (qs.length !== (hasFresh ? 8 + set.freshExtra : 8)) bad(set.id, '(set)', `unexpected question count ${qs.length}`);
    if (new Set(qs.map(q => q.question)).size !== qs.length) bad(set.id, '(set)', 'duplicate questions in one set');
    if (set.questions !== qs) bad(set.id, '(set)', 'questions changed between reads (must stay fixed for one page load)');
    if (hasFresh) origTexts[set.id].forEach((t, i) => { if (!qs[i] || qs[i].question !== t) bad(set.id, t, 'hand-written question changed or moved'); });
    for (const q of qs.slice(baseCount)) {
      questionsChecked++;
      const correct = q.options[q.correctIndex];
      if (q.options.length !== 4 || new Set(q.options).size !== 4) bad(set.id, q.question, 'options not 4 distinct');
      if (!Number.isInteger(q.correctIndex) || correct === undefined) bad(set.id, q.question, 'bad correctIndex');
      if (!Array.isArray(q.steps) || q.steps.length < 3) bad(set.id, q.question, 'fewer than 3 steps');
      if (/NaN|undefined|\[object/.test([q.question, q.explanation, ...q.options, ...q.steps, ...(q.altSteps || [])].join('\n'))) bad(set.id, q.question, 'NaN/undefined in text');

      let m, want = null;
      if ((m = q.question.match(/^What is (\d+) × (\d+)\?$/))) want = String(+m[1] * +m[2]);
      else if ((m = q.question.match(/^(\d+) × \? = (\d+)$/))) want = String(+m[2] / +m[1]);
      else if ((m = q.question.match(/^What is ([\d,]+) ÷ (\d+)\?$/))) {
        const N = num(m[1]), d = +m[2], qq = Math.floor(N / d), r = N % d;
        want = r ? `${fmt(qq)} R ${r}` : fmt(qq);
        if (set.id === 'division-remainders-g4' && r === 0) bad(set.id, q.question, 'remainders practice question has no remainder');
        if (d > 1 && (set.id === 'practice-division-g4' || (set.freshExtra && set.id !== 'division-basics')) && !q.altSteps) bad(set.id, q.question, 'division question without a Long division view');
      } else if ((m = q.question.match(/^What is the remainder when ([\d,]+) is divided by (\d+)\?$/))) want = String(num(m[1]) % +m[2]);
      else if ((m = q.question.match(/^Which multiplication fact can you use to solve (\d+) ÷ (\d+)\?$/))) want = `${m[2]} × ${+m[1] / +m[2]} = ${m[1]}`;
      else if (set.id === 'practice-division-g4' || set.freshExtra) {   // word problem: N then d are the first two numbers
        const nums = q.question.match(/\d[\d,]*/g).map(num), N = nums[0], d = nums[1];
        const qq = Math.floor(N / d), r = N % d, unit = (correct.match(/^[\d,]+ (\w+)$/) || [])[1];
        const kw = /FULL|full set|needed|left over/.test(q.question);
        if (!kw && r !== 0) bad(set.id, q.question, 'evenly-dividing story has a remainder');
        if (kw && r === 0) bad(set.id, q.question, 'remainder story divides evenly');
        want = /FULL|full set/.test(q.question) ? `${qq} ${unit}` : /needed/.test(q.question) ? `${qq + 1} ${unit}` : /left over/.test(q.question) ? `${r} ${unit}` : (r === 0 ? `${fmt(qq)} ${unit}` : null);
      }
      if (want === null) bad(set.id, q.question, 'test cannot recognise this question shape');
      else if (correct !== want) bad(set.id, q.question, `marked answer "${correct}" but the right answer is "${want}"`);
      if (q.altSteps) {
        if (!q.altLabel || q.altSteps.length < 4) bad(set.id, q.question, 'bad Long division view');
        if (!q.altSteps.some(s => /<pre>/.test(s))) bad(set.id, q.question, 'Long division view has no finished layout');
      }
    }
  }
}
if (problems.length) { console.error(`practice-set test FAILED (${problems.length}):\n  ✗ ` + problems.join('\n  ✗ ')); process.exit(1); }
console.log(`✓ practice sets: ${setsBuilt} sets / ${questionsChecked} random questions built and re-verified`);
