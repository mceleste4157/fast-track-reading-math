// FAST Track — Service Worker v2
// Caches static assets so the app works offline
const CACHE = 'fast-track-v2';
const STATIC = [
  '/', '/index.html', '/login.html', '/library.html', '/progress.html',
  '/read.html', '/quiz.html', '/results.html',
  '/math.html', '/math-quiz.html', '/math-results.html',
  '/vocab.html', '/trivia.html',
  '/typing.html', '/typing-practice.html',
  '/stories.js', '/math-data.js'
];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(STATIC)).then(() => self.skipWaiting()));
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(keys => Promise.all(
      keys.filter(k => k !== CACHE).map(k => caches.delete(k))
    )).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', e => {
  const url = e.request.url;
  // Let Firebase/Firestore/Auth requests go straight to network
  if (url.includes('firestore.googleapis') || url.includes('firebase') ||
      url.includes('googleapis.com') || url.includes('gstatic.com') ||
      url.includes('fonts.g')) {
    return;
  }
  e.respondWith(
    caches.match(e.request).then(cached => {
      if (cached) return cached;
      return fetch(e.request).then(res => {
        if (res.ok && e.request.method === 'GET') {
          const clone = res.clone();
          caches.open(CACHE).then(c => c.put(e.request, clone));
        }
        return res;
      });
    }).catch(() => caches.match('/index.html'))
  );
});
