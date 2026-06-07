const CACHE = 'sd-album-v1';
const ASSETS = [
  '/admin.html',
  '/admin.js',
  '/style.css',
  '/manifest.json',
  '/logo_opt.png'
];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(ASSETS)));
});

self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(r => r || fetch(e.request))
  );
});
