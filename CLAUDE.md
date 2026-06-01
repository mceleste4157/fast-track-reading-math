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

## Firebase rules
- Rules file: `firestore.rules`
- Deploy with: `firebase deploy --only hosting,firestore:rules`

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
