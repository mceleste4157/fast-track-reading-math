// FAST Track — Service Worker v8
// HTML: network-first (always fresh after deploys)
// JS/CSS/other assets: cache-first (fast loads)
// Offline: core app pages + story/math data pre-cached so reading works offline
const CACHE = 'fast-track-v8';
const STATIC_ASSETS = [
  // Core data — pre-cache so stories/math work offline
  '/stories.js?v=20260603',
  '/math-data.js',
  // Key app pages
  '/index.html',
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
];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(STATIC_ASSETS)).then(() => self.skipWaiting()));
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(keys => Promise.all(
      keys.filter(k => k !== CACHE).map(k => caches.delete(k))
    )).then(() => self.clients.claim()).then(() => {
      // Tell all clients to reload when new version activates
      return self.clients.matchAll().then(clients => {
        clients.forEach(client => client.postMessage({ type: 'SW_UPDATED' }));
      });
    })
  );
});

self.addEventListener('fetch', e => {
  const url = e.request.url;

  // Pass Firebase/external requests straight through
  if (url.includes('firestore.googleapis') || url.includes('firebase') ||
      url.includes('googleapis.com') || url.includes('gstatic.com') ||
      url.includes('fonts.g')) {
    return;
  }

  const isHTML = e.request.destination === 'document' ||
                 url.endsWith('.html') || url.endsWith('/');

  if (isHTML) {
    // Network-first: always try to get fresh HTML, fall back to cache if offline
    e.respondWith(
      fetch(e.request).then(res => {
        if (res.ok) {
          const clone = res.clone();
          caches.open(CACHE).then(c => c.put(e.request, clone));
        }
        return res;
      }).catch(() => caches.match(e.request).then(c => c || caches.match('/index.html')))
    );
  } else {
    // Cache-first: serve JS/CSS/images from cache, update in background
    e.respondWith(
      caches.match(e.request).then(cached => {
        const network = fetch(e.request).then(res => {
          if (res.ok && e.request.method === 'GET') {
            caches.open(CACHE).then(c => c.put(e.request, res.clone()));
          }
          return res;
        });
        return cached || network;
      })
    );
  }
});
