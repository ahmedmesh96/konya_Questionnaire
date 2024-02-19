'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "ad60f709200d285a5b40ba8e54a399ff",
"favicon.ico": "413e3987a2657ca002361cadf32920b7",
"index.html": "8e0ae43793898bf312ab1471e6b78f7f",
"/": "8e0ae43793898bf312ab1471e6b78f7f",
"main.dart.js": "570e8a7a26ea470e937403681925828e",
"flutter.js": "7d69e653079438abfbb24b82a655b0a4",
"favicon.png": "c4830dc074c65e86808dc681945c45a7",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "0460cfd154701ae5ad391267cea831c7",
"assets/AssetManifest.json": "d2629f7966f03533e6e6e449804150ae",
"assets/NOTICES": "9d1f3ca37d94ad45bbf274d37a915857",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/AssetManifest.bin.json": "61576961c591d0afc34514a9853637f6",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/packages/wakelock_plus/assets/no_sleep.js": "7748a45cd593f33280669b29c2c8919a",
"assets/shaders/ink_sparkle.frag": "4096b5150bac93c41cbc9b45276bd90f",
"assets/AssetManifest.bin": "291747d0f7ace14b48aae064c88f5320",
"assets/fonts/MaterialIcons-Regular.otf": "a6f660ba1f0ca6c3721b7214d8260a35",
"assets/assets/img/natural_shisha.png": "4550e580be6a7b6a69788cb93c55df86",
"assets/assets/img/iced_tea_and_coffee.png": "9b39517eacf2cac00a05976060867235",
"assets/assets/img/hot_berevages.png": "9258633ec363cda3b613a39951b99f15",
"assets/assets/img/side_dishes.png": "28b54377cfbb4f3bdfd6ab9cfebb89bf",
"assets/assets/img/hot_appetizers.png": "0462def01427feb3cb6431a5b17c3823",
"assets/assets/img/ramz.json": "da9196eba7afc73838b4b431e2e01f77",
"assets/assets/img/shisha.png": "661693a4358eedf6e303ea6468af38ca",
"assets/assets/img/baklawa.png": "01054d9e7b941ee666c2fb68f7bfbad1",
"assets/assets/img/serbat.png": "b510836cc6e355c8d8e1c3c7d4923542",
"assets/assets/img/morning_breakfast.png": "f68b3cfbd68408e1e59ef8901ab3a576",
"assets/assets/img/ramazan.mp4": "6e9e10814de6404814a52a5e44f98c88",
"assets/assets/img/diet_food.png": "bf8ff4e2004017005fe7ca27b1549e89",
"assets/assets/img/dessert.png": "67677d5187e36f5a5c50e7a2f0a8552d",
"assets/assets/img/hot_coffee.png": "2ba5f88201fabf331766889217596652",
"assets/assets/img/durum.png": "783009b5d5854b8ae5f14cd4b49cddc5",
"assets/assets/img/soft_drink.png": "e5fd170670018bca2db5a06288fdd7e9",
"assets/assets/img/mevlana_shak.png": "183c9b55fade5474af2ca7f4a6ea77fb",
"assets/assets/img/cold_appetizers.png": "76d565a94065c5cffffc67fe42203b56",
"assets/assets/img/our_signutare.png": "1edd45398c28b0d0adf3392339b30535",
"assets/assets/img/konya.png": "b42624c2910fbca657cafb54ee982436",
"assets/assets/img/premium_shisha.png": "98332007f6a6cec6393c941f1a819510",
"assets/assets/img/hot_appetizers.svg": "aae938e02ea162d966be24a2c25dc6b8",
"assets/assets/img/konya_logo.png": "7a6fd4d3268df372589d16214539bd96",
"assets/assets/img/cocktails.png": "75fd709dc9cc950ed906253a25eaf5b4",
"assets/assets/img/ram.json": "ba71fd28dd23fd5d55834258fa2b9e3f",
"assets/assets/img/salad.png": "d95a2cc83ec5178823ea119190771e61",
"assets/assets/img/cold_berevages.png": "051b121c23de565afc6364c9e722b3be",
"assets/assets/img/fresh_juice.png": "70f58d754d9e380e51976d31c847b591",
"assets/assets/img/turkish_pide.png": "7630bd039bee42499ef8046b1895dbab",
"assets/assets/img/clasic_shisha.png": "87fdaec059b2f4d99852debdd64c89e9",
"assets/assets/img/ramazan.jpeg": "72bccad7aca07f36e938e89b71650e5e",
"assets/assets/img/hot_tea.png": "e4127c73e28c13da45e7c33398832d3d",
"assets/assets/img/turkish_grill.png": "3e1c594655556dfe6e0e7ee1fde56208",
"assets/assets/img/soup.png": "9caf51471aaa1ecf386631c6f9ffc263",
"canvaskit/skwasm.js": "87063acf45c5e1ab9565dcf06b0c18b8",
"canvaskit/skwasm.wasm": "2fc47c0a0c3c7af8542b601634fe9674",
"canvaskit/chromium/canvaskit.js": "0ae8bbcc58155679458a0f7a00f66873",
"canvaskit/chromium/canvaskit.wasm": "143af6ff368f9cd21c863bfa4274c406",
"canvaskit/canvaskit.js": "eb8797020acdbdf96a12fb0405582c1b",
"canvaskit/canvaskit.wasm": "73584c1a3367e3eaf757647a8f5c5989",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
