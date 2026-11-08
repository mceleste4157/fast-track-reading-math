#!/usr/bin/env node
// Regenerates the small data files that are derived from public/stories.js.
//   node scripts/build-data.js          write the files
//   node scripts/build-data.js --check  exit 1 if any file is out of date (used by scripts/check.js)
const fs = require('fs'), path = require('path'), vm = require('vm');
const pub = path.join(__dirname, '..', 'public');
const read = f => fs.readFileSync(path.join(pub, f), 'utf8');

function load(file, name) { return vm.runInNewContext(read(file) + `\n;${name}`, {}); }
const STORIES = load('stories.js', 'STORIES');

// The Library estimates each story's reading level from its full text. Instead of shipping 2 MB of
// text to every page just for that, compute it once here — using the Library's OWN function, pulled
// straight out of library.html so the two can never disagree.
function extractFunction(src, name) {
  const start = src.indexOf(`function ${name}(`);
  if (start < 0) throw new Error(`function ${name} not found`);
  let depth = 0, i = src.indexOf('{', start);
  for (; i < src.length; i++) { if (src[i] === '{') depth++; else if (src[i] === '}' && --depth === 0) break; }
  return src.slice(start, i + 1);
}
const readingGrade = vm.runInNewContext(
  `const readingGradeCache = new Map();\n${extractFunction(read('library.html'), 'estimateReadingGrade')}\n;estimateReadingGrade`, {});

const outputs = {};

// Library cards / home screen / parent + progress pages: everything except the story text,
// questions and vocabulary. `rg` = estimated reading grade, `paired` = two-passage stories.
outputs['stories-meta.js'] = 'const STORIES_META = ' + JSON.stringify(STORIES.map(s => {
  const m = {
    id: s.id, title: s.title, topic: s.topic, grades: s.grades, coverEmoji: s.coverEmoji, coverColor: s.coverColor,
    gradeLevel: s.gradeLevel, level: s.level, readTimeMin: s.readTimeMin, wordCount: s.wordCount, rg: readingGrade(s)
  };
  if (s.paired) m.paired = true;
  return m;
})) + ';';

// Vocabulary / spelling / flashcard pages only need each story's word list (~85% smaller than stories.js).
outputs['stories-vocab.js'] = 'const STORIES = ' + JSON.stringify(STORIES.map(s => ({
  id: s.id, title: s.title, topic: s.topic, coverEmoji: s.coverEmoji, coverColor: s.coverColor,
  grades: s.grades, gradeLevel: s.gradeLevel, level: s.level, vocabulary: s.vocabulary
}))) + ';';

module.exports = { outputs, STORIES };

if (require.main === module) {
  const check = process.argv.includes('--check');
  let stale = 0;
  for (const [file, text] of Object.entries(outputs)) {
    const p = path.join(pub, file);
    const current = fs.existsSync(p) ? fs.readFileSync(p, 'utf8') : null;
    const same = current !== null && current.replace(/\s+$/, '') === text.replace(/\s+$/, '');
    if (check) { if (!same) { stale++; console.error(`OUT OF DATE: public/${file} — run "node scripts/build-data.js"`); } }
    else { fs.writeFileSync(p, text + '\n'); console.log(`wrote public/${file} (${(text.length / 1024).toFixed(0)} KB)`); }
  }
  if (check) process.exit(stale ? 1 : 0);
}
