self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open('sansabo-v1').then((cache) => {
      return cache.addAll(['/index.html', '/logo.svg', '/manifest.webmanifest']);
    }),
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((cached) => {
      return cached || fetch(event.request);
    }),
  );
});
