// Service Worker for ProTask Elite
const CACHE_NAME = 'protask-v2';
const assets = ['/', 'index.html', 'manifest.json'];

self.addEventListener('install', (event) => {
    event.waitUntil(caches.open(CACHE_NAME).then(cache => cache.addAll(assets)));
    self.skipWaiting();
});

self.addEventListener('activate', (event) => {
    event.waitUntil(clients.claim());
});

self.addEventListener('fetch', (event) => {
    event.respondWith(caches.match(event.request).then(res => res || fetch(event.request)));
});

// Listener for background notifications
self.addEventListener('message', (event) => {
    if (event.data.type === 'SCHEDULE_NOTIFICATION') {
        const { title, body, time, id } = event.data;
        
        // Attempt to use Notification Triggers (Modern & Reliable)
        if ('showTrigger' in Notification.prototype) {
            self.registration.showNotification(title, {
                body: body,
                tag: id,
                showTrigger: new TimestampTrigger(new Date(time).getTime()),
                icon: 'https://cdn-icons-png.flaticon.com/512/906/906334.png',
                vibrate: [200, 100, 200]
            });
        } else {
            // Fallback for older browsers: show immediately if it's time
            self.registration.showNotification(title, { body: body, tag: id });
        }
    }
});
