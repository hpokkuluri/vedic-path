// Vedasaram service worker — makes the app open without an internet connection.
//
// The app page is fetched from the network first (so new versions arrive as soon
// as you are online) and falls back to the saved copy when offline or slow.
// Fonts and icons are served from the saved copy.
const CACHE = 'vedasaram-v8';
const PAGE = './index.html';
const SHELL = ['./', PAGE, './kids.js', './ramayana.js', './ramayana/bala.js', './ramayana/ayodhya.js', './stories.js', './audio/index.js', './manifest.json', './icons/icon-180.png', './icons/icon-192.png', './icons/icon-512.png', './icons/tile-ramayana.jpg'];
const FONT_CSS = [
  'https://fonts.googleapis.com/css2?family=Crimson+Text:ital,wght@0,400;0,600;0,700;1,400&display=swap',
  'https://fonts.googleapis.com/css2?family=Noto+Sans+Telugu:wght@400;600&display=swap',
];
const NETWORK_TIMEOUT_MS = 4000;

// Save the font stylesheets and the font files they point to (best effort).
async function cacheFonts(cache) {
  for (const cssUrl of FONT_CSS) {
    try {
      const res = await fetch(cssUrl);
      if (!res.ok) continue;
      const css = await res.clone().text();
      await cache.put(cssUrl, res);
      const files = [...css.matchAll(/url\((https:\/\/fonts\.gstatic\.com\/[^)]+)\)/g)].map(m => m[1]);
      await Promise.all([...new Set(files)].map(u =>
        fetch(u).then(r => r.ok ? cache.put(u, r) : null).catch(() => null)));
    } catch (e) { /* offline or blocked — fonts fall back to the device's own */ }
  }
}

self.addEventListener('install', event => {
  event.waitUntil((async () => {
    const cache = await caches.open(CACHE);
    await cache.addAll(SHELL.map(u => new Request(u, { cache: 'reload' })));
    await cacheFonts(cache);
    await self.skipWaiting();
  })());
});

self.addEventListener('activate', event => {
  event.waitUntil((async () => {
    const names = await caches.keys();
    await Promise.all(names.filter(n => n !== CACHE).map(n => caches.delete(n)));
    await self.clients.claim();
  })());
});

function isAppPage(request, url) {
  if (url.origin !== self.location.origin) return false;
  if (request.mode === 'navigate') return true;
  const scope = new URL('./', self.location).pathname;
  return url.pathname === scope || url.pathname === scope + 'index.html';
}
// The app's own scripts (e.g. stories.js, updated daily) — also network first
function isAppScript(url) {
  return url.origin === self.location.origin && url.pathname.endsWith('.js') && !url.pathname.endsWith('/sw.js');
}

// Network first, saved copy if the network fails or takes too long.
async function pageFromNetworkFirst(request, key = PAGE) {
  const cache = await caches.open(CACHE);
  const saved = await cache.match(key, { ignoreSearch: true });
  const fromNetwork = fetch(request).then(res => {
    if (res && res.ok) cache.put(key, res.clone());
    return res;
  });
  if (!saved) return fromNetwork;
  const timeout = new Promise(resolve => setTimeout(() => resolve(null), NETWORK_TIMEOUT_MS));
  try {
    const res = await Promise.race([fromNetwork, timeout]);
    if (res && res.ok) return res;
  } catch (e) { /* offline */ }
  fromNetwork.catch(() => {});
  return saved;
}

// Saved copy first; otherwise fetch and save.
async function cacheFirst(request) {
  const cache = await caches.open(CACHE);
  const saved = await cache.match(request, { ignoreVary: true });
  if (saved) return saved;
  const res = await fetch(request);
  if (res && (res.ok || res.type === 'opaque')) cache.put(request, res.clone());
  return res;
}

self.addEventListener('fetch', event => {
  const request = event.request;
  if (request.method !== 'GET') return;            // update checks (HEAD) go straight to the network
  if (request.cache === 'no-store') return;        // explicit "check for updates" requests
  const url = new URL(request.url);
  if (isAppPage(request, url)) {
    event.respondWith(pageFromNetworkFirst(request));
  } else if (isAppScript(url)) {
    event.respondWith(pageFromNetworkFirst(request, url.origin + url.pathname));
  } else if (url.origin === self.location.origin ||
             url.hostname === 'fonts.googleapis.com' || url.hostname === 'fonts.gstatic.com') {
    event.respondWith(cacheFirst(request).catch(() => Response.error()));
  }
});
