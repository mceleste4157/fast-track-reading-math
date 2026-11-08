#!/usr/bin/env node
// Regenerates the small data files that are derived from public/stories.js.
//   node scripts/build-data.js          write the files
//   node scripts/build-data.js --check  exit 1 if any file is out of date (used by scripts/check.js)
const fs = require('fs'), path = require('path'), vm = require('vm');
const pub = path.join(__dirname, '..', 'public');
const read = f => fs.readFileSync(path.join(pub, f), 'utf8');

function load(file, name) { return vm.runInNewContext(read(file) + `\n;${name}`, {}); }
const STORIES = load('stories.js', 'STORIES');

const outputs = {};

// Library cards / home screen: everything except the story text and questions.
outputs['stories-meta.js'] = 'const STORIES_META = ' + JSON.stringify(STORIES.map(s => ({
  id: s.id, title: s.title, topic: s.topic, grades: s.grades, coverEmoji: s.coverEmoji, coverColor: s.coverColor,
  gradeLevel: s.gradeLevel, level: s.level, readTimeMin: s.readTimeMin, wordCount: s.wordCount
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
