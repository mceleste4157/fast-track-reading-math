# FAST Track Reading & Math — Claude Code Guide

## Project
- **Firebase project:** `school-cbdc7` (school-cbdc7.web.app)
- **GitHub repo:** mceleste4157/fast-track-reading-math
- **Stack:** Vanilla HTML/CSS/JS, Firebase SDK v10 (compat, CDN), Firestore, Firebase Auth, Firebase Hosting

## Deploy
```bash
# Hosting + rules
firebase deploy --only hosting,firestore:rules

# Hosting only (faster, no rule changes)
firebase deploy --only hosting
```

## Git workflow — always push after changes

After every session, commit and push to GitHub:
```bash
cd /Users/mark/Desktop/school-app

# Stage changed files specifically (not git add -A)
git add public/<changed-files> firestore.rules

# Commit
git commit -m "Description of changes"

# Push to main
git push origin main
```

Branch naming for larger features: `feature/`, `fix/`, or `chore/` prefix.

## Firebase rules (who can read/write what)
- Rules file: `firestore.rules`. Kids don't sign in — the **parent's** Firebase sign-in stays on the device and a child's
  data is only readable/writable by the parent who owns that child (`StudentProfiles/{readerId}.parentUid`).
  Every page that touches Firestore must load `firebase-auth-compat.js` (otherwise requests are anonymous and rejected)
  and kid pages load `auth-guard.js` (sends you to sign-in if the parent's session expired). `scripts/check.js` enforces both.
- A child's `readerId` = the id of their StudentProfiles document. Only Leo (`leo-school-2024-fixed`) predates that and is
  listed explicitly in the rules (`legacyReader/legacyOwner`).
- A new collection needs a `match` block in the rules or every save to it fails silently (this bit SpellingProgress and StoryRatings).
- Admin = the account with email celeste1311@gmail.com (reads everything; dashboard).
- Deploy rules with: `firebase deploy --only firestore:rules` (hosting deploys automatically from main).
- Test rules locally: `npm run test:rules` (Firestore emulator; needs Java). Checks: `npm run check`.
- Derived data: `public/stories-meta.js` and `public/stories-vocab.js` are generated from `stories.js` — run `npm run build:data`
  after editing stories (check.js fails if they're stale). Practice sets that are "new every time" live in `math-practice.js`.

## Code conventions
- Firebase SDK loaded via `/__/firebase/10.0.0/*.js` (hosting auto-config)
- Real-time data: use `onSnapshot` for live views, `.get()` for one-time reads
- All Firestore writes include `timestamp: firebase.firestore.FieldValue.serverTimestamp()`
- Escape user content with `escHtml()` before injecting into innerHTML
- CSS variables in `:root` — Inter font, `--purple: #7c3aed`, `--teal: #0891b2`

## Auth model
- Parents log in via Firebase Auth (email/password) on `login.html`
- After auth, parent sees kid selector — tap a kid to start their session
- Kid session stored in `localStorage.readerProfile`
- Parent portal (`parent-portal.html`, `parent.html`) requires a 4-digit portal PIN
- PIN stored in `ParentProfiles/{uid}.portalPin`
- Student Switch User button requires parent PIN (enforced on `index.html`)

## Key collections
| Collection | Purpose |
|---|---|
| `StudentProfiles` | Kid profiles (name, grade, PIN, avatar, math settings) |
| `ParentProfiles`  | Parent accounts (email, displayName, portalPin) |
| `Progress`        | Reading quiz results |
| `MathProgress`    | Math quiz results |
| `TypingProgress`  | Typing lesson results |
| `StudentStats`    | Streak, badges, weekly counts |
| `StudentActivity` | Activity log (story/math completions) |
| `Suggestions`     | Parent suggestions (admin-only read) |

## Admin email
- `celeste1311@gmail.com` — sees all suggestions in parent portal
- Can read `Suggestions` collection (enforced in Firestore rules)

## Per-child configurable settings (stored on StudentProfile)
- `mathUnlockScore` — stars needed to unlock Math Zone (0 = always unlocked)
- `dailyReadMinutes` — reading required before math each day (0 = no gate)
- `dailyMathMinutes` — daily math time limit (0 = no limit)
- `weeklyGoalStories` — weekly story goal shown on home screen
