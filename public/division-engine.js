// division-engine.js — place-value ("partial quotient") and traditional long-division walkthroughs.
// Shared by the browser (random practice sets in math-practice.js) and by Node (scripts/ tests).
// Pure functions only: given N and d they return the steps a child sees under "Show Me How".
(function (root) {
  const fmt = n => n.toLocaleString('en-US');

  // Place-value "partial quotients": take out big friendly chunks of the divisor (grade-4 strategy,
  // no standard algorithm). Returns the chunk list plus quotient/remainder.
  function partial(N, d) {
    let rem = N; const chunks = [];
    for (const p of [1000, 100, 10, 1]) {
      const unit = d * p;
      if (unit > rem) { chunks.push({ skipped: p, unit, rem }); continue; }
      const k = Math.floor(rem / unit);
      const prod = d * k * p;
      chunks.push({ amt: k * p, prod, from: rem, to: rem - prod });
      rem -= prod;
    }
    const taken = chunks.filter(c => c.amt);
    const q = taken.reduce((s, c) => s + c.amt, 0);
    return { chunks, taken, q, r: rem };
  }

  function divSteps(N, d, { intro = true } = {}) {
    const { chunks, taken, q, r } = partial(N, d);
    const steps = [];
    if (intro) steps.push(`Think: how many groups of ${d} fit into ${fmt(N)}? Take out big, friendly chunks.`);
    let started = false;
    chunks.forEach(c => {
      if (c.skipped) {
        // Only mention an empty place when it falls between real chunks (e.g. the 0 in 805).
        if (started && c.skipped > 1) steps.push(`${d} × ${fmt(c.skipped * 1)} = ${fmt(c.unit)} is more than ${fmt(c.rem)}, so there are 0 groups of ${fmt(c.skipped)}.`);
        return;
      }
      started = true;
      steps.push(`Take out ${fmt(c.amt)} groups of ${d}: ${d} × ${fmt(c.amt)} = ${fmt(c.prod)}\n  Left over: ${fmt(c.from)} − ${fmt(c.prod)} = ${fmt(c.to)}`);
    });
    if (taken.length > 1) steps.push(`Add the groups: ${taken.map(c => fmt(c.amt)).join(' + ')} = ${fmt(q)}`);
    steps.push(`So ${fmt(N)} ÷ ${d} = ${fmt(q)}${r ? ' R ' + r : ''}`);
    steps.push(`Check: ${d} × ${fmt(q)}${r ? ' + ' + r : ''} = ${fmt(N)} ✓`);
    return { steps, q, r };
  }


  // ── Traditional long division: Divide → Multiply → Subtract → Bring down ──
  function longDivWork(N, d) {
    const digs = String(N).split('').map(Number), n = digs.length;
    let i = 0, cur = digs[0];
    while (cur < d && i < n - 1) { i++; cur = cur * 10 + digs[i]; }
    const startI = i, work = []; let rem;
    for (;;) {
      const qd = Math.floor(cur / d), prod = qd * d; rem = cur - prod;
      const hasNext = i < n - 1;
      const nextDigit = hasNext ? digs[i + 1] : null;
      const nextCur = hasNext ? rem * 10 + nextDigit : null;
      work.push({ i, cur, qd, prod, rem, nextDigit, nextCur, first: i === startI });
      if (!hasNext) break;
      cur = nextCur; i++;
    }
    return { digs, n, startI, work, q: Number(work.map(w => w.qd).join('')), r: rem };
  }

  // Monospace picture of the finished problem (shown inside <pre>).
  function ldDiagram(d, L) {
    const { digs, n, work } = L, dl = String(d).length, lead = ' '.repeat(dl + 3);
    const row = places => {
      const cells = Array(n).fill('  ');
      places.forEach(([idx, ch]) => { cells[idx] = ch + ' '; });
      return (lead + cells.join('')).replace(/\s+$/, '');
    };
    const spread = (str, lastCell) => str.split('').map((ch, k) => [lastCell - str.length + 1 + k, ch]);
    const rows = [
      row(work.map(w => [w.i, String(w.qd)])),
      ' '.repeat(dl + 1) + '┌' + '─'.repeat(2 * n + 1),
      `${d} │ ` + digs.map(x => x + ' ').join('').trimEnd()
    ];
    work.forEach(w => {
      const ps = String(w.prod);
      rows.push(row(spread(ps, w.i)));
      rows.push(row(spread('─'.repeat(ps.length), w.i)));
      const diff = w.nextCur !== null ? String(w.nextCur) : String(w.rem);
      rows.push(row(spread(diff, w.nextCur !== null ? w.i + 1 : w.i)));
    });
    return rows.join('\n');
  }

  const WORDS = ['', 'one', 'two', 'three', 'four'];
  function longDiv(N, d, { pre = [], final = [] } = {}) {
    const L = longDivWork(N, d);
    const steps = [...pre];
    steps.push(`Long division repeats four moves: Divide → Multiply → Subtract → Bring down.\nSet it up with ${d} on the outside and ${fmt(N)} on the inside.`);
    L.work.forEach(w => {
      let lead;
      if (w.first && L.startI > 0) {
        const firstDigits = L.digs.slice(0, L.startI).join('');
        lead = `The first digit${L.startI > 1 ? 's' : ''} (${firstDigits}) ${L.startI > 1 ? 'are' : 'is'} too small to divide by ${d}, so we start with the first ${WORDS[L.startI + 1] || L.startI + 1} digits: ${w.cur}.`;
      } else lead = w.first ? `Start with ${w.cur}.` : `Now we have ${w.cur}.`;
      const bring = w.nextCur !== null
        ? `Bring down the ${w.nextDigit}: now we have ${w.nextCur}`
        : `No more digits to bring down. ${w.rem ? `${w.rem} is left over — that is the remainder.` : 'Nothing is left over.'}`;
      steps.push([
        lead,
        `Divide: ${w.cur} ÷ ${d} = ${w.qd}  → ${w.qd === 0 ? `${d} doesn't fit, so write 0 on top` : `write ${w.qd} on top`}`,
        `Multiply: ${w.qd} × ${d} = ${w.prod}`,
        `Subtract: ${w.cur} − ${w.prod} = ${w.rem}`,
        bring
      ].join('\n'));
    });
    steps.push(`Here is the finished problem on paper:<pre>${ldDiagram(d, L)}</pre>`);
    steps.push([
      `Read the answer across the top: ${fmt(L.q)}${L.r ? ' R ' + L.r : ''}`,
      `Check: ${d} × ${fmt(L.q)}${L.r ? ' + ' + L.r : ''} = ${fmt(N)} ✓`,
      ...final
    ].join('\n'));
    return { steps, L };
  }

  var api = { fmt: fmt, partial: partial, divSteps: divSteps, longDivWork: longDivWork, ldDiagram: ldDiagram, longDiv: longDiv };
  if (typeof module !== 'undefined' && module.exports) module.exports = api;
  else root.DivisionEngine = api;
})(typeof window !== 'undefined' ? window : this);
