const version = '';


self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(version).then(function(cache) {
      return cache.addAll([
    'index.html',
	'calc1.html',
	'info.html',
	'quiz.html',
	'bit.css',
	'calc1.css',
	'info.css',
    'quiz.css',
    'bit.js',
	'calc1.js',
	'quiz.js',
    'notfound.txt',
    'package.json',
    'server.js',
	'/1.jpeg',
	'/2.jpeg',
	'/3.jpeg',
	'/4.jpeg',
	'/5.jpeg',
	'/6.png',
	'/7.jpeg',
    '/8.png',
    '/9.jpeg',
	'/10.jpeg',
	'/11.jpeg',
	'/12.jpeg',
	'/13.jpeg',
	'/14.jpeg',
	'/15.jpeg',
    'favicon1.ico',
	'icon-512x512.png',
    'icon-384x384.png',
    'icon-256x256.png',
    'icon-192x192.png',
	'manifest.json'
      ]);
    })
  );
});

self.addEventListener('fetch', function(event) {
  event.respondWith(caches.match(event.request).then(function(response) {
    // caches.match() always resolves
    // but in case of success response will have value
    if (response !== undefined) {
      return response;
    } else {
      return fetch(event.request).then(function (response) {
        // response may be used only once
        // we need to save clone to put one copy in cache
        // and serve second one
        let responseClone = response.clone();

        caches.open(version).then(function (cache) {
          cache.put(event.request, responseClone);
        });
        return response;
      }).catch(function () {
        return caches.match('/notfound.txt');
      });
    }
  }));
});