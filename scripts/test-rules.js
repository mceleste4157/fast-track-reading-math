#!/usr/bin/env node
// Tests firestore.rules against the local Firestore emulator, using the SAME query/write shapes the pages use.
//   npm run test:rules        (= firebase emulators:exec --only firestore ... node scripts/test-rules.js)
const fs = require('fs'), path = require('path');
const { initializeTestEnvironment, assertSucceeds, assertFails } = require('@firebase/rules-unit-testing');
const { doc, getDoc, setDoc, updateDoc, deleteDoc, addDoc, collection, query, where, limit, getDocs } = require('firebase/firestore');

const ADMIN_EMAIL = 'celeste1311@gmail.com';
const LEGACY_READER = 'leo-school-2024-fixed', LEGACY_OWNER = 'y8r8E7FFHYgNaecDBmZPepCtPtF2';
const ACTIVITY = ['Progress', 'MathProgress', 'TypingProgress', 'TriviaScores', 'SpellingProgress', 'StudentActivity', 'WritingResponses'];

let passed = 0; const failures = [];
async function expect(label, fn, shouldSucceed) {
  try { await (shouldSucceed ? assertSucceeds(fn()) : assertFails(fn())); passed++; }
  catch (e) { failures.push(`${shouldSucceed ? 'SHOULD ALLOW' : 'SHOULD BLOCK'}: ${label}  (${String(e.message).split('\n')[0]})`); }
}
const allow = (label, fn) => expect(label, fn, true);
const block = (label, fn) => expect(label, fn, false);

(async () => {
  const env = await initializeTestEnvironment({
    projectId: 'demo-school-rules',
    firestore: { rules: fs.readFileSync(process.env.RULES_FILE || path.join(__dirname, '..', 'firestore.rules'), 'utf8') }
  });

  // Seed data with rules switched off: two families, the legacy profile, activity for each.
  await env.withSecurityRulesDisabled(async ctx => {
    const db = ctx.firestore();
    await setDoc(doc(db, 'StudentProfiles/kidA'), { name: 'Ava', parentUid: 'pA', readerId: 'kidA', gradeLevel: '4' });
    await setDoc(doc(db, 'StudentProfiles/kidB'), { name: 'Ben', parentUid: 'pB', readerId: 'kidB', gradeLevel: '5' });
    await setDoc(doc(db, 'StudentProfiles/6zAyLegacyDocId'), { name: 'Leo', parentUid: LEGACY_OWNER, readerId: LEGACY_READER, gradeLevel: '4' });
    for (const id of ['kidA', 'kidB', LEGACY_READER]) await setDoc(doc(db, 'StudentStats', id), { readerId: id, totalXp: 5 });
    for (const c of ACTIVITY) for (const id of ['kidA', 'kidB', LEGACY_READER]) await setDoc(doc(db, c, `${id}-1`), { readerId: id, xpEarned: 10 });
    await setDoc(doc(db, 'ParentProfiles/pA'), { email: 'a@x.com', portalPin: '1234' });
    await setDoc(doc(db, 'ParentProfiles/pB'), { email: 'b@x.com', portalPin: '4321' });
    await setDoc(doc(db, 'Suggestions/s1'), { text: 'hi' });
  });

  const anon = env.unauthenticatedContext().firestore();
  const pA = env.authenticatedContext('pA', { email: 'a@x.com' }).firestore();
  const pB = env.authenticatedContext('pB', { email: 'b@x.com' }).firestore();
  const leo = env.authenticatedContext(LEGACY_OWNER, { email: 'leo-parent@x.com' }).firestore();
  const admin = env.authenticatedContext('adminUid', { email: ADMIN_EMAIL }).firestore();

  // ── Signed-out visitors get nothing ───────────────────────────────────────
  await block('anon lists all StudentProfiles', () => getDocs(collection(anon, 'StudentProfiles')));
  await block('anon reads a profile', () => getDoc(doc(anon, 'StudentProfiles/kidA')));
  await block('anon reads StudentStats', () => getDoc(doc(anon, 'StudentStats/kidA')));
  await block('anon creates a profile', () => setDoc(doc(anon, 'StudentProfiles/x1'), { parentUid: 'pA', readerId: '' }));
  for (const c of ACTIVITY) {
    await block(`anon reads ${c}`, () => getDocs(query(collection(anon, c), where('readerId', '==', 'kidA'))));
    await block(`anon lists whole ${c}`, () => getDocs(collection(anon, c)));
    await block(`anon writes ${c}`, () => addDoc(collection(anon, c), { readerId: 'kidA' }));
  }
  await block('anon reads ParentProfiles', () => getDoc(doc(anon, 'ParentProfiles/pA')));
  await block('anon reads Suggestions', () => getDocs(collection(anon, 'Suggestions')));

  // ── A parent and their own child (the shapes the pages actually use) ──────
  await allow('login.html: profiles where parentUid == me', () => getDocs(query(collection(pA, 'StudentProfiles'), where('parentUid', '==', 'pA'))));
  await allow('math.html: read my child profile by id', () => getDoc(doc(pA, 'StudentProfiles/kidA')));
  await allow('parent.html (fixed): profile where readerId == mine AND parentUid == me', () =>
    getDocs(query(collection(pA, 'StudentProfiles'), where('readerId', '==', 'kidA'), where('parentUid', '==', 'pA'), limit(1))));
  await block('profile lookup by readerId alone (no parentUid) is refused — the old parent.html query', () =>
    getDocs(query(collection(pA, 'StudentProfiles'), where('readerId', '==', 'kidA'), limit(1))));
  await allow('read + write my child\'s StudentStats', async () => { await getDoc(doc(pA, 'StudentStats/kidA')); await setDoc(doc(pA, 'StudentStats/kidA'), { totalXp: 9, lastUpdated: 1 }, { merge: true }); });
  await allow('update my child profile (avatar / grade / goal)', () => updateDoc(doc(pA, 'StudentProfiles/kidA'), { avatarEmoji: '🦁', gradeLevel: '5', weeklyGoalStories: 7 }));
  await allow('add a child (readerId starts blank, then set to its own id)', async () => {
    const ref = await addDoc(collection(pA, 'StudentProfiles'), { name: 'New', parentUid: 'pA', readerId: '' });
    await updateDoc(doc(pA, 'StudentProfiles', ref.id), { readerId: ref.id });
  });
  await allow('delete my own child profile', () => deleteDoc(doc(pA, 'StudentProfiles/kidA')));
  await env.withSecurityRulesDisabled(async ctx => setDoc(doc(ctx.firestore(), 'StudentProfiles/kidA'), { name: 'Ava', parentUid: 'pA', readerId: 'kidA', gradeLevel: '4' }));

  for (const c of ACTIVITY) {
    await allow(`${c}: add my child's record`, () => addDoc(collection(pA, c), { readerId: 'kidA', xpEarned: 20 }));
    await allow(`${c}: query my child's records (where readerId == mine)`, () => getDocs(query(collection(pA, c), where('readerId', '==', 'kidA'))));
    await allow(`${c}: read one of my child's records`, () => getDoc(doc(pA, c, 'kidA-1')));
    await block(`${c}: add a record for ANOTHER family's child`, () => addDoc(collection(pA, c), { readerId: 'kidB' }));
    await block(`${c}: query ANOTHER family's records`, () => getDocs(query(collection(pA, c), where('readerId', '==', 'kidB'))));
    await block(`${c}: read ANOTHER family's record`, () => getDoc(doc(pA, c, 'kidB-1')));
    await block(`${c}: list the whole collection`, () => getDocs(collection(pA, c)));
    await block(`${c}: edit an existing record`, () => updateDoc(doc(pA, c, 'kidA-1'), { xpEarned: 99999 }));
    await block(`${c}: delete an existing record`, () => deleteDoc(doc(pA, c, 'kidA-1')));
  }

  // ── Parents cannot touch each other's children ────────────────────────────
  await block('read another family\'s profile', () => getDoc(doc(pA, 'StudentProfiles/kidB')));
  await block('query another family\'s profiles', () => getDocs(query(collection(pA, 'StudentProfiles'), where('parentUid', '==', 'pB'))));
  await block('list ALL profiles', () => getDocs(collection(pA, 'StudentProfiles')));
  await block('read another family\'s StudentStats', () => getDoc(doc(pA, 'StudentStats/kidB')));
  await block('write another family\'s StudentStats', () => setDoc(doc(pA, 'StudentStats/kidB'), { totalXp: 99999 }, { merge: true }));
  await block('update another family\'s profile', () => updateDoc(doc(pA, 'StudentProfiles/kidB'), { name: 'hacked' }));
  await block('delete another family\'s profile', () => deleteDoc(doc(pA, 'StudentProfiles/kidB')));
  await block('create a profile owned by someone else', () => addDoc(collection(pA, 'StudentProfiles'), { name: 'x', parentUid: 'pB', readerId: '' }));
  await block('hand over my child to another parent', () => updateDoc(doc(pA, 'StudentProfiles/kidA'), { parentUid: 'pB' }));
  await block('point my profile at another child\'s readerId (the old "legacy ID" takeover)', () => updateDoc(doc(pA, 'StudentProfiles/kidA'), { readerId: 'kidB' }));
  await block('create a profile whose readerId is another child\'s', () => addDoc(collection(pA, 'StudentProfiles'), { name: 'x', parentUid: 'pA', readerId: 'kidB' }));
  await block('claim the legacy readerId by creating that profile id', () => setDoc(doc(pA, 'StudentProfiles/' + LEGACY_READER), { name: 'x', parentUid: 'pA', readerId: '' }));
  await block('claim the legacy readerId and read Leo\'s data', async () => { await setDoc(doc(pA, 'StudentProfiles/' + LEGACY_READER), { name: 'x', parentUid: 'pA', readerId: LEGACY_READER }); });
  await block('other parent reads Leo\'s stats', () => getDoc(doc(pA, 'StudentStats/' + LEGACY_READER)));
  await block('other parent reads Leo\'s progress', () => getDocs(query(collection(pA, 'Progress'), where('readerId', '==', LEGACY_READER))));
  await block('read another parent\'s ParentProfile (their PIN)', () => getDoc(doc(pA, 'ParentProfiles/pB')));
  await block('overwrite another parent\'s ParentProfile', () => setDoc(doc(pA, 'ParentProfiles/pB'), { portalPin: '0000' }, { merge: true }));
  await allow('read + change my own ParentProfile (PIN)', async () => { await getDoc(doc(pA, 'ParentProfiles/pA')); await setDoc(doc(pA, 'ParentProfiles/pA'), { portalPin: '9999' }, { merge: true }); });

  // ── The older "Leo" profile (hand-made readerId) keeps working for its owner only ──
  await allow('legacy: Leo\'s parent reads + writes Leo\'s stats', async () => { await getDoc(doc(leo, 'StudentStats/' + LEGACY_READER)); await setDoc(doc(leo, 'StudentStats/' + LEGACY_READER), { totalXp: 7 }, { merge: true }); });
  for (const c of ACTIVITY) {
    await allow(`legacy: Leo's parent adds + queries ${c}`, async () => { await addDoc(collection(leo, c), { readerId: LEGACY_READER }); await getDocs(query(collection(leo, c), where('readerId', '==', LEGACY_READER))); });
  }
  await allow('legacy: Leo\'s profile still updates (gradeLevel / avatar)', () => updateDoc(doc(leo, 'StudentProfiles/6zAyLegacyDocId'), { gradeLevel: '5', avatarEmoji: '🚀' }));
  await block('legacy: Leo\'s parent cannot read another child\'s data', () => getDoc(doc(leo, 'StudentStats/kidA')));

  // ── Story ratings ─────────────────────────────────────────────────────────
  await allow('rate a story as my child', () => setDoc(doc(pA, 'StoryRatings/kidA_story1'), { readerId: 'kidA', storyId: 'story1', rating: 1 }));
  await allow('change my rating (set again)', () => setDoc(doc(pA, 'StoryRatings/kidA_story1'), { readerId: 'kidA', storyId: 'story1', rating: -1 }));
  await block('rate a story as someone else\'s child', () => setDoc(doc(pA, 'StoryRatings/kidB_story1'), { readerId: 'kidB', storyId: 'story1', rating: 1 }));
  await block('parents cannot read ratings', () => getDoc(doc(pA, 'StoryRatings/kidA_story1')));
  await allow('admin reads ratings', () => getDoc(doc(admin, 'StoryRatings/kidA_story1')));

  // ── Admin dashboard + tools ───────────────────────────────────────────────
  await allow('admin dashboard: list every StudentProfile', () => getDocs(collection(admin, 'StudentProfiles')));
  await allow('admin dashboard: list every StudentStats', () => getDocs(collection(admin, 'StudentStats')));
  await allow('admin dashboard: list every ParentProfile', () => getDocs(collection(admin, 'ParentProfiles')));
  for (const c of ACTIVITY.filter(x => x !== 'WritingResponses').concat(['WritingResponses'])) {
    await allow(`admin dashboard: list whole ${c}`, () => getDocs(collection(admin, c)));
  }
  await allow('admin reads suggestions', () => getDocs(collection(admin, 'Suggestions')));
  await allow('admin demo-seed: add activity for a demo readerId', () => addDoc(collection(admin, 'Progress'), { readerId: 'demo-123', xpEarned: 5 }));
  await block('admin still cannot edit activity history', () => updateDoc(doc(admin, 'Progress/kidA-1'), { xpEarned: 1 }));
  await block('a normal parent is not admin (reads all progress)', () => getDocs(collection(pB, 'Progress')));
  await block('someone using the admin address WITHOUT the right email is not admin', () => getDocs(collection(env.authenticatedContext('x', { email: 'other@x.com' }).firestore(), 'Progress')));

  // ── Suggestion box ────────────────────────────────────────────────────────
  await allow('a parent can send a suggestion', () => addDoc(collection(pA, 'Suggestions'), { text: 'more math!', uid: 'pA' }));
  await block('a parent cannot read suggestions', () => getDocs(collection(pA, 'Suggestions')));
  await block('signed-out cannot send a suggestion', () => addDoc(collection(anon, 'Suggestions'), { text: 'spam' }));
  await block('anyone else deleting a suggestion', () => deleteDoc(doc(admin, 'Suggestions/s1')));

  // ── Collections that should not exist ─────────────────────────────────────
  await block('unknown collection: read', () => getDocs(collection(pA, 'SomethingElse')));
  await block('unknown collection: write', () => addDoc(collection(pA, 'SomethingElse'), { a: 1 }));

  await env.cleanup();
  if (failures.length) {
    console.error(`\nrules test FAILED — ${failures.length} problem(s), ${passed} passed:\n  ✗ ` + failures.join('\n  ✗ ') + '\n');
    process.exit(1);
  }
  console.log(`✓ firestore.rules: all ${passed} access checks behave as intended`);
})().catch(e => { console.error('rules test crashed:', e); process.exit(1); });
