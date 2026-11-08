// math-practice.js — "fresh every time" practice sets.
// The regular topics in math-data.js always show the same 8 questions, so kids start to memorize them.
// These sets are built in the browser each time a quiz opens (new numbers, same grade-level skills,
// every question with a Show Me How walkthrough). Needs math-data.js and division-engine.js first.
(function () {
  var E = window.DivisionEngine;
  if (!E || typeof MATH_SETS === 'undefined') return;
  var fmt = E.fmt;

  function rnd(lo, hi) { return lo + Math.floor(Math.random() * (hi - lo + 1)); }
  function shuffle(a) {
    a = a.slice();
    for (var i = a.length - 1; i > 0; i--) { var j = Math.floor(Math.random() * (i + 1)); var t = a[i]; a[i] = a[j]; a[j] = t; }
    return a;
  }
  function uniq(a) { return a.filter(function (x, i) { return a.indexOf(x) === i; }); }

  // Four options in random order, exactly one correct. Throws if fewer than 3 distinct wrong answers exist
  // (callers retry with new numbers).
  function make(question, correct, wrong, explanation, steps, altSteps) {
    var w = uniq(wrong.filter(function (x) { return x !== correct; }));
    if (w.length < 3) throw new Error('not enough distractors for: ' + question);
    var options = shuffle([correct].concat(shuffle(w).slice(0, 3)));
    var q = { question: question, options: options, correctIndex: options.indexOf(correct), explanation: explanation, steps: steps };
    if (altSteps) { q.altLabel = 'Long division'; q.altSteps = altSteps; }
    return q;
  }
  function positive(list) { return list.filter(function (n) { return n > 0; }).map(String); }
  function multiples(d, upTo) { var out = []; for (var i = 1; i <= upTo; i++) out.push(d * i); return out; }

  // ── Multiplication facts ──────────────────────────────────────────────────
  function multSteps(x, y) {
    var a = Math.min(x, y), b = Math.max(x, y), p = a * b;
    if (a <= 3) {
      var run = [], sum = 0;
      for (var i = 0; i < a; i++) { sum += b; run.push(sum); }
      return ['Think of ' + a + ' × ' + b + ' as adding ' + b + ' a total of ' + a + ' times.', Array(a).fill(b).join(' + ') + ' = ' + p, a + ' × ' + b + ' = ' + p];
    }
    if (b === 10) return ['Multiplying by 10: write the number, then add a 0.', a + ' → ' + a + '0', a + ' × 10 = ' + p];
    if (b === 11) return ['Break 11 into 10 + 1.', a + ' × 10 = ' + a * 10, a + ' × 1 = ' + a, 'Add: ' + a * 10 + ' + ' + a + ' = ' + p];
    if (b === 12) return ['Break 12 into 10 + 2.', a + ' × 10 = ' + a * 10, a + ' × 2 = ' + a * 2, 'Add: ' + a * 10 + ' + ' + a * 2 + ' = ' + p];
    return ['Break ' + b + ' into 5 + ' + (b - 5) + '.', a + ' × 5 = ' + a * 5, a + ' × ' + (b - 5) + ' = ' + a * (b - 5), 'Add: ' + a * 5 + ' + ' + a * (b - 5) + ' = ' + p];
  }

  function multFact(x, y) {
    var p = x * y;
    if (Math.random() < 0.3) {   // missing factor:  x × ? = p
      var steps = ['Finding the missing factor is division: ' + x + ' × ? = ' + p + ' means ' + p + ' ÷ ' + x + '.',
        'Count by ' + x + 's until you reach ' + p + ': ' + multiples(x, y).join(', '),
        'It took ' + y + ' counts, so the missing factor is ' + y + '.'];
      return make(x + ' × ? = ' + p, String(y), positive([y + 1, y - 1, y + 2, y - 2, p - x, x]),
        x + ' × ' + y + ' = ' + p + ', so the missing factor is ' + y + '.', steps);
    }
    return make('What is ' + x + ' × ' + y + '?', String(p),
      positive([x * (y + 1), x * (y - 1), (x + 1) * y, (x - 1) * y, x + y, p + 10, p - 10, p + 2, p - 2]),
      x + ' × ' + y + ' = ' + p + '.', multSteps(x, y));
  }

  // ── Division facts ────────────────────────────────────────────────────────
  function divFact(d, q) {
    var N = d * q;
    var count = ['Count by ' + d + 's until you reach ' + N + ': ' + multiples(d, q).join(', '), 'It took ' + q + ' counts, so ' + N + ' ÷ ' + d + ' = ' + q + '.'];
    if (Math.random() < 0.25) {
      return make('Which multiplication fact can you use to solve ' + N + ' ÷ ' + d + '?', d + ' × ' + q + ' = ' + N,
        [d + ' × ' + (q + 1) + ' = ' + N, N + ' × ' + d + ' = ' + q, q + ' + ' + d + ' = ' + N, d + ' × ' + (q > 2 ? q - 1 : q + 2) + ' = ' + N],
        'Division and multiplication are partners. ' + N + ' ÷ ' + d + ' asks "' + d + ' × ? = ' + N + '", and ' + d + ' × ' + q + ' = ' + N + '.',
        ['Division and multiplication are partners: ' + N + ' ÷ ' + d + ' asks "' + d + ' × ? = ' + N + '".'].concat(count));
    }
    return make('What is ' + N + ' ÷ ' + d + '?', String(q), positive([q + 1, q - 1, q + 2, q - 2, d, N - d]),
      N + ' ÷ ' + d + ' = ' + q + ', because ' + d + ' × ' + q + ' = ' + N + '.',
      ['Think: ' + d + ' × ? = ' + N].concat(count, ['Check: ' + d + ' × ' + q + ' = ' + N + ' ✓']));
  }

  // ── Division with bigger numbers (grade 4): place-value steps + a Long division view ──
  function divBig(N, d) {
    var s = E.divSteps(N, d), q = s.q, r = s.r;
    var correct = r ? fmt(q) + ' R ' + r : fmt(q);
    var wrong = r
      ? [fmt(q) + ' R ' + (r + 1 < d ? r + 1 : r - 1), fmt(q + 1) + ' R ' + r, fmt(q - 1) + ' R ' + (r + d), fmt(q) + ' R ' + (d - r), fmt(q)]
      : [fmt(q + 10), q > 10 ? fmt(q - 10) : fmt(q + 11), fmt(q + 1), q > 1 ? fmt(q - 1) : fmt(q + 2), fmt(q * 10)];
    return make('What is ' + fmt(N) + ' ÷ ' + d + '?', correct, wrong,
      fmt(N) + ' ÷ ' + d + ' = ' + correct + '. Check: ' + d + ' × ' + fmt(q) + (r ? ' + ' + r : '') + ' = ' + fmt(N) + '.',
      s.steps, E.longDiv(N, d).steps);
  }

  var STORY_TEMPLATES = {
    drop: [['A bakery packs {N} muffins into boxes of {d}. How many FULL boxes can it fill?', 'boxes'],
           ['A teacher has {N} pencils and gives each student {d}. How many students can get a full set of {d} pencils?', 'students']],
    roundup: [['{N} students are going on a field trip. Each van seats {d}. How many vans are needed so everyone has a seat?', 'vans'],
              ['A farm stand has {N} apples. Each bag holds {d}. How many bags are needed to hold ALL the apples?', 'bags']],
    leftover: [['{N} stickers are shared equally among {d} friends. How many stickers are left over?', 'stickers'],
               ['A ranger puts {N} turtle eggs into {d} nests, the same number in each. How many eggs are left over?', 'eggs']]
  };

  function divStory(mode, N, d) {
    var tpl = STORY_TEMPLATES[mode][rnd(0, 1)], text = tpl[0].replace('{N}', N).replace(/\{d\}/g, d), unit = tpl[1];
    var base = E.divSteps(N, d, { intro: false }), q = base.q, r = base.r;
    var head = 'Read carefully: we divide ' + fmt(N) + ' into groups of ' + d + '.', correct, wrong, tail, why;
    if (mode === 'drop') {
      correct = q + ' ' + unit; wrong = [q + 1, q - 1, r, q + r].map(function (n) { return n + ' ' + unit; });
      tail = ["The " + r + " left over aren't enough to make another full group, so we don't count them.", 'Answer: ' + q + ' full ' + unit + '.'];
      why = fmt(N) + ' ÷ ' + d + ' = ' + q + ' R ' + r + '. Only full groups count, so the answer is ' + q + ' ' + unit + '.';
    } else if (mode === 'roundup') {
      correct = (q + 1) + ' ' + unit; wrong = [q, q + 2, r, q - 1].map(function (n) { return n + ' ' + unit; });
      tail = ['The ' + r + ' left over still need a spot, so we need one more group: ' + q + ' + 1 = ' + (q + 1) + '.', 'Answer: ' + (q + 1) + ' ' + unit + '.'];
      why = fmt(N) + ' ÷ ' + d + ' = ' + q + ' R ' + r + '. The ' + r + ' extra still need one more, so ' + q + ' + 1 = ' + (q + 1) + ' ' + unit + '.';
    } else {
      correct = r + ' ' + unit; wrong = [q, q + 1, d, r + 1].map(function (n) { return n + ' ' + unit; });
      tail = ['The remainder is the number left over after sharing as evenly as possible.', 'Answer: ' + r + ' ' + unit + ' left over.'];
      why = fmt(N) + ' ÷ ' + d + ' = ' + q + ' R ' + r + '. The remainder, ' + r + ', is what is left over.';
    }
    return make(text, correct, wrong, why, [head].concat(base.steps.slice(0, -1), tail), E.longDiv(N, d, { pre: [head], final: tail }).steps);
  }

  // Build n questions; a generator that fails (rare duplicate-distractor case) is retried with new numbers.
  function collect(count, makers) {
    var out = [], seen = {};
    for (var i = 0; i < count; i++) {
      var q = null;
      for (var attempt = 0; attempt < 40 && !q; attempt++) {
        try { var c = makers[i](); if (!seen[c.question]) { q = c; seen[c.question] = 1; } } catch (e) { /* retry */ }
      }
      if (!q) throw new Error('could not build practice question ' + (i + 1));
      out.push(q);
    }
    return out;
  }

  function pairs(count) {   // distinct unordered fact pairs from 2..12
    var seen = {}, out = [];
    while (out.length < count) {
      var x = rnd(2, 12), y = rnd(2, 12), k = Math.min(x, y) + 'x' + Math.max(x, y);
      if (!seen[k]) { seen[k] = 1; out.push(Math.random() < 0.5 ? [x, y] : [y, x]); }
    }
    return out;
  }

  function nDigit(digits, withRemainder) {   // 1-digit divisor; returns [N, d] with an N of the requested size
    for (;;) {
      var d = rnd(2, 9), lo = digits === 2 ? 20 : Math.pow(10, digits - 1), hi = Math.pow(10, digits) - 1;   // 2-digit starts at 20: 12 ÷ 6 is just a fact
      var qLo = Math.ceil(lo / d), qHi = Math.floor((hi - (withRemainder ? d - 1 : 0)) / d);
      if (qHi < qLo) continue;
      var q = rnd(qLo, qHi), r = withRemainder ? rnd(1, d - 1) : 0, N = d * q + r;
      if (N >= lo && N <= hi) return [N, d];
    }
  }
  function storyNums(needRemainder) {
    for (;;) { var d = rnd(3, 9), N = rnd(50, 400); if (!needRemainder || N % d) return [N, d]; }
  }

  var DEFS = [
    { id: 'practice-mult-facts', title: 'Multiplication Facts (New Every Time)', coverEmoji: '🎲', coverColor: '#0ea5e9', topic: 'multiplication', grades: [3, 4, 5],
      build: function () {
        return collect(8, pairs(8).map(function (p) { return function () { return multFact(p[0], p[1]); }; }));
      } },
    { id: 'practice-div-facts', title: 'Division Facts (New Every Time)', coverEmoji: '🎯', coverColor: '#14b8a6', topic: 'division', grades: [3, 4],
      build: function () {
        return collect(8, pairs(8).map(function (p) { return function () { return divFact(p[0], p[1]); }; }));
      } },
    { id: 'practice-division-g4', title: 'Division Practice (New Every Time)', coverEmoji: '🔁', coverColor: '#7c3aed', topic: 'division', grades: [4, 5],
      build: function () {
        var modes = shuffle(['drop', 'roundup', 'leftover']).slice(0, 2);
        var makers = [[2, false], [2, true], [3, false], [3, true], [4, false], [4, true]].map(function (spec) {
          return function () { var nd = nDigit(spec[0], spec[1]); return divBig(nd[0], nd[1]); };
        }).concat(modes.map(function (m) { return function () { var nd = storyNums(true); return divStory(m, nd[0], nd[1]); }; }));
        return collect(8, makers);
      } }
  ];

  // Each page load gets its own fresh set of questions (built the first time they're read, then kept
  // for that page so the quiz can't change underneath the student).
  DEFS.forEach(function (def) {
    if (MATH_SETS.some(function (s) { return s.id === def.id; })) return;
    var cache = null;
    var set = { id: def.id, title: def.title, coverEmoji: def.coverEmoji, coverColor: def.coverColor, topic: def.topic, grades: def.grades, dynamic: true };
    Object.defineProperty(set, 'questions', { enumerable: true, get: function () { return cache || (cache = def.build()); } });
    MATH_SETS.push(set);
  });
})();
