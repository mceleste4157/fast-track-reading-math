// math-topics.js — groups the ~25 fine-grained topics in math-data.js into the ~14 "units" a class would
// teach, in roughly the order a school year goes. Used by:
//   • math.html — the guided "Up next" path and the parent's weekly focus
//   • parent-portal.html — the "This week's math focus" choice (stored as StudentProfiles.mathFocus = group id)
// scripts/check.js fails if a topic in math-data.js isn't in exactly one group, so new topics can't be missed.
window.MATH_TOPIC_GROUPS = [
  { id: 'place-value',    label: 'Place value & rounding',        emoji: '🔢', topics: ['place-value'] },
  { id: 'add-subtract',   label: 'Adding & subtracting',          emoji: '➕', topics: ['addition', 'subtraction', 'math-facts'] },
  { id: 'multiplication', label: 'Multiplication',                emoji: '✖️', topics: ['multiplication'] },
  { id: 'division',       label: 'Division',                      emoji: '➗', topics: ['division'] },
  { id: 'fractions',      label: 'Fractions',                     emoji: '🍕', topics: ['fractions'] },
  { id: 'decimals',       label: 'Decimals',                      emoji: '🔟', topics: ['decimals'] },
  { id: 'measurement',    label: 'Measurement, time & money',     emoji: '📏', topics: ['measurement', 'time'] },
  { id: 'geometry',       label: 'Shapes, area & perimeter',      emoji: '📐', topics: ['geometry', 'area', 'perimeter', 'area-perimeter', 'angles'] },
  { id: 'data',           label: 'Data, graphs & probability',    emoji: '📊', topics: ['data', 'data-graphs'] },
  { id: 'patterns',       label: 'Patterns & number sense',       emoji: '🧩', topics: ['patterns', 'number-theory', 'number-sense'] },
  { id: 'word-problems',  label: 'Word problems',                 emoji: '📝', topics: ['word-problems'] },
  { id: 'ratios',         label: 'Ratios, rates & percent',       emoji: '⚖️', topics: ['ratios'] },
  { id: 'integers',       label: 'Negative numbers (integers)',   emoji: '🌡️', topics: ['integers'] },
  { id: 'algebra',        label: 'Expressions & equations',       emoji: '🔤', topics: ['algebra', 'operations'] }
];

// group id for a set's topic ('' if unknown)
window.mathGroupOfTopic = function (topic) {
  var g = window.MATH_TOPIC_GROUPS.find(function (x) { return x.topics.indexOf(topic) !== -1; });
  return g ? g.id : '';
};
