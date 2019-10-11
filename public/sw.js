self.addEventListener('install', function(event) {
    console.log('[Service Worker] Install Service Worker ...', event);
});

self.addEventListener('activate', function(event) {
    console.log('[Service Worker] Activating Service Worker ...', event);
});
