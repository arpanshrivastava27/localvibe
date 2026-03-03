// LocalVibe Service Worker — offline caching
const CACHE_NAME = 'localvibe-v2';
const ASSETS = [
    '/',
    '/index.html',
    '/style.css',
    '/app.js',
    '/places-data.js',
    '/i18n.js'
];

self.addEventListener('install', e => {
    e.waitUntil(caches.open(CACHE_NAME).then(c => c.addAll(ASSETS)));
    self.skipWaiting();
});

self.addEventListener('activate', e => {
    e.waitUntil(caches.keys().then(keys =>
        Promise.all(keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k)))
    ));
    self.clients.claim();
});

self.addEventListener('fetch', e => {
    // Network first, fallback to cache
    e.respondWith(
        fetch(e.request).catch(() => caches.match(e.request))
    );
});
