const CACHE_NAME = 'tag-scanner-v1';
const ASSETS = [
  './',
  './index.html',
  './manifest.json',
  './logo.png'
];

// Instala y guarda los archivos en el celular
self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS))
  );
});

// Permite que la app funcione sin conexión
self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((res) => res || fetch(e.request))
  );
});
