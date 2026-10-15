const CACHE_NAME = "kinsofttech-pwa-v3";
const OFFLINE_URL = "/offline.html";
const CACHED_ASSETS = new Set([
  "/favicon.svg",
  "/pwa-icon-192.png",
  "/pwa-icon-512.png",
]);

self.addEventListener("install", (event) => {
  event.waitUntil(
    (async () => {
      const cache = await caches.open(CACHE_NAME);
      await cache.addAll([
        OFFLINE_URL,
        "/favicon.svg",
        "/pwa-icon-192.png",
        "/pwa-icon-512.png",
      ]);
      await self.skipWaiting();
    })(),
  );
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    (async () => {
      const cacheNames = await caches.keys();
      await Promise.all(
        cacheNames
          .filter((cacheName) => cacheName.startsWith("kinsofttech-pwa-") && cacheName !== CACHE_NAME)
          .map((cacheName) => caches.delete(cacheName)),
      );
      await self.clients.claim();
    })(),
  );
});

self.addEventListener("fetch", (event) => {
  const request = event.request;
  const requestUrl = new URL(request.url);

  if (
    request.method !== "GET" ||
    requestUrl.origin !== self.location.origin ||
    requestUrl.pathname.startsWith("/api/")
  ) {
    return;
  }

  if (request.mode !== "navigate") {
    if (!CACHED_ASSETS.has(requestUrl.pathname)) return;
    event.respondWith(
      caches.match(request).then((cachedAsset) => cachedAsset || fetch(request)),
    );
    return;
  }

  event.respondWith(
    fetch(request).catch(async () => {
      const offlinePage = await caches.match(OFFLINE_URL);
      if (!offlinePage) {
        throw new Error("The offline fallback is not available in the service worker cache.");
      }
      return offlinePage;
    }),
  );
});
