// MEG-TEC service worker — exists purely so Chrome/Edge offer the install
// prompt for this app. Deliberately network-passthrough only (no caching),
// so the form always loads the latest deployed version rather than a stale
// cached copy — matches the same minimal approach used by the Dashboard and
// MEG-EAF service workers.
//
// Because this file lives at /tec/service-worker.js, its default scope is
// /tec/ and everything below it — it will never intercept requests for the
// Dashboard or any other form living elsewhere in this repo.

self.addEventListener("install", (event) => {
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(self.clients.claim());
});

self.addEventListener("fetch", (event) => {
  event.respondWith(fetch(event.request));
});
