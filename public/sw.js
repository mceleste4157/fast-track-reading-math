// FAST Track — Service Worker v11
// HTML: network-first (always fresh after deploys)
// JS/CSS/other assets: cache-first (fast loads)
// Offline: core pages + stories/math data + Firebase SDK pre-cached
const CACHE = 'fast-track-v11';
const STATIC_ASSETS = [
  // Core data
  '/stories-meta.js',
  '/stories.js?v=20260705',
  '/math-data.js',
  '/dark.css',
  // Firebase SDK (served from same origin — must be cached for offline)
  '/__/firebase/10.0.0/firebase-app-compat.js',
  '/__/firebase/10.0.0/firebase-auth-compat.js',
  '/__/firebase/10.0.0/firebase-firestore-compat.js',
  '/__/firebase/init.js',
  // All app pages
  '/index.html',
  '/login.html',
  '/library.html',
  '/read.html',
  '/quiz.html',
  '/results.html',
  '/progress.html',
  '/math.html',
  '/math-quiz.html',
  '/math-results.html',
  '/spelling.html',
  '/vocab.html',
  '/vocab-game.html',
  '/trivia.html',
  '/typing-practice.html',
  '/story-type.html',
  '/parent-portal.html',
];

self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE)
      .then(c => c.addAll(STATIC_ASSETS))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys()
      .then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
      .then(() => self.clients.matchAll().then(clients =>
        clients.forEach(c => c.postMessage({ type: 'SW_UPDATED' }))
      ))
  );
});

self.addEventListener('fetch', e => {
  const url = e.request.url;

  // Only skip caching for live Firestore/Auth API network calls (not the SDK scripts)
  if (url.includes('firestore.googleapis.com') ||
      url.includes('identitytoolkit.googleapis.com') ||
      url.includes('securetoken.googleapis.com') ||
      url.includes('googleapis.com/google.firestore') ||
      url.includes('gstatic.com') ||
      url.includes('fonts.googleapis')) {
    return;
  }

  const isHTML = e.request.destination === 'document' ||
                 url.endsWith('.html') || url.endsWith('/');

  if (isHTML) {
    // Network-first: always try to get fresh HTML, fall back to cache if offline
    e.respondWith(
      fetch(e.request).then(res => {
        if (res.ok) caches.open(CACHE).then(c => c.put(e.request, res.clone()));
        return res;
      }).catch(() => caches.match(e.request).then(c => c || caches.match('/index.html')))
    );
  } else {
    // Cache-first: serve from cache instantly, update in background
    e.respondWith(
      caches.match(e.request).then(cached => {
        const network = fetch(e.request).then(res => {
          if (res.ok && e.request.method === 'GET')
            caches.open(CACHE).then(c => c.put(e.request, res.clone()));
          return res;
        }).catch(() => cached);
        return cached || network;
      })
    );
  }
});
