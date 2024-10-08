'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "601ec3589de6b823e7622bd72c488731",
".git/config": "238b0cf7ae90f106defd3571baa9d0fb",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "4f223952a90f52b4918bdc792db301d0",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "14fddfd315ffecb254e379d8f4b6c09d",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "7ed74cd3809ce9f4b10f429c43823b18",
".git/logs/refs/heads/main": "5536198b830841954a3597063f0c5bfc",
".git/logs/refs/remotes/origin/main": "8f248bb20904a9c9b7432f72f1093e3c",
".git/objects/07/f9eaac1f345df8066f20751695f44af7838482": "38557e99e989749d51581d0e5366d828",
".git/objects/08/32d0db2def1613c1c45aa4fe9156a1c6b7d589": "e05df183e5eeaddf39672a2516f9c41d",
".git/objects/09/d3e9b882656755616bef8195f27746ca850782": "877224bd4a5ed1f03bebef071f15d082",
".git/objects/10/bc122c0d4bbd48b2ef2b478c10b937be5a098f": "7af79e2892a6ff8a2974ab2f686ce9e9",
".git/objects/12/e01b8c208eb8a29d5e4ed36de698a7d1f44bd6": "99616d9ca51d6fef6ee1f8399d8064db",
".git/objects/17/fbbe36f778a03cc4dfb2627291f58c8e6d19c9": "b6f597f2a2f54645e1e5e89addf680c3",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/25/8b3eee70f98b2ece403869d9fe41ff8d32b7e1": "05e38b9242f2ece7b4208c191bc7b258",
".git/objects/31/fda26009a8ac0feb8e8b66a7343dec7a47da92": "f8d08a3ab8bf206d140238f8ac03a0a6",
".git/objects/32/aa3cae58a7432051fc105cc91fca4d95d1d011": "4f8558ca16d04c4f28116d3292ae263d",
".git/objects/33/9e7bed1d82b4b5c9b48fb7f5a72f0464656fc4": "3ceacb6efa09f4c4306a7bbe226be810",
".git/objects/39/eb761f17b6f2a147ae2b22c9ce4e53167192cd": "945fe2c6ecad386186038cc486c57fa7",
".git/objects/3a/50bcf246953eac45889af16d2b3677deda2eba": "8088ab04e577ee09b6b83d07fe7586ee",
".git/objects/3a/5d8a6fd8359adadbcc2805ae43d8f4f4464c45": "95b62c860643141c78ac93a51f02ef82",
".git/objects/3a/7525f2996a1138fe67d2a0904bf5d214bfd22c": "ab6f2f6356cba61e57d5c10c2e18739d",
".git/objects/40/0d5b186c9951e294699e64671b9dde52c6f6a0": "f6bd3c7f9b239e8898bace6f9a7446b9",
".git/objects/42/2ae74145dd0c7ffe849d90329fee7277bc3f2a": "56ba267855851ae9c40f1e9724a44e5c",
".git/objects/43/e945ab6eb260082a208bd533abc7f495ba5150": "dcafb50ea7462ea1508a85c44e7a60e5",
".git/objects/44/a8b8e41b111fcf913a963e318b98e7f6976886": "5014fdb68f6b941b7c134a717a3a2bc6",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/48/069fc4c82ac734928066969cb507c70ea7fa05": "69d26686370cba50f0283fcda30a4d11",
".git/objects/4e/045b627c208d8ce7231e4c44ca43c050f19abd": "599eb1cc2d4e437c63240b6c82550e47",
".git/objects/52/896f461139823daf687cc35421b4042e303fbc": "63a42eee682858c78a1735754a5479b4",
".git/objects/56/df5989d76ed1c97905c126b7aa99c74444473f": "a16210554fbab3f4ce5729ea71f3081b",
".git/objects/5f/3c9c497fc3aced1361823daa379134013df366": "da524170a683dd2bdad215d4b27b98cc",
".git/objects/6b/e909fbf40b23748412f0ea89bf0fae827ed976": "5f118419157d9534688915220cc803f7",
".git/objects/75/11c6ebc509c512f297f967597e0b584883e945": "bbf00a9e05322802737ad80617bdb9a9",
".git/objects/7d/e5d1429f5e24fa7dd28454b2e99357613a3dac": "3791fbf2c6402e2294532b20decf6518",
".git/objects/84/0516208d35dcb4298847ab835e2ef84ada92fa": "36a4a870d8d9c1c623d8e1be329049da",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/89/a110aeb0daf703fd6925955be1dc7a6dfdd33d": "d3a9a1648608e433f75f195993be9336",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8e/5d7ea4271cfc52a11c3b1c6b8c36c5d5988ecf": "0414fcc2d894b8691b1b743a801f79bf",
".git/objects/90/bcfcf0a77ab618a826db0fd8b0942963b653af": "fc109675cdf1233dd6599a4c3c0a7a69",
".git/objects/98/57c9b3b0448c92818efc5fda0f206b21914168": "ecbde07c564dabbec0f249821051b8af",
".git/objects/9a/f6c06694dec54c589f0011311fcd9c8b31b1b8": "2eb6f86184dc52f90fe99faa2ff00cc6",
".git/objects/9f/b7270a58f06c79d4e7931d1ff941ca3f1039cd": "01459981ba3248135e2de244e4e1e0e5",
".git/objects/a3/34fb0646d6b654fcf02da07e8465c908a20a2a": "fe7402a20b1bb53b873a371bba9b903d",
".git/objects/aa/fcbc7f34849e7d5ff689f1dee1576e774c445b": "8d4f3c43c752b0a07a2530a6166cc6db",
".git/objects/ac/5d359983764f7439f72276af29784f999cc17a": "dd8768bed0ebd3abc88e99a04ddcde4c",
".git/objects/b1/5ad935a6a00c2433c7fadad53602c1d0324365": "8f96f41fe1f2721c9e97d75caa004410",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/0efadfd3b29e71449fe720b0d503d3a71e78fc": "1e1acdc2ff3aebde051a6ce6c0c9315c",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/bd/36c9842fc7fd42dfc81d871a318f8a4384fce5": "dfd6761ebec66fdaed9affac2f0522c3",
".git/objects/c0/f9d26e35aa1aa80b28be331a41f517e2f11476": "39b783560b0e5762a2bf31f8d078ea94",
".git/objects/ce/5c6124d961d533502de24d583e1b767770c7cf": "e5fda56698dcb4866eb7a3966d4f6008",
".git/objects/d0/23371979cf1e985205df19078051c10de0a82d": "700b71074bad7afee32068791dec7442",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d5/bb50b3c3bc534b51ba035a5e8495ba7af5025b": "81d30e6f235d2cd1960b1a0d917b3043",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/da/fd65422747502c19b5c74b4230282644d2169c": "d8a62caf99a372ff6c7692e143787ce3",
".git/objects/de/860f141d702da721699de8c21f6887949f7449": "f2766bc81ce4c76044efd05187be7f83",
".git/objects/e6/5459a05b5d5b8a3985cb611fff4af13757740a": "22d1265371c9ccf733162d0c37f95ea7",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f6/0ed40369d7b50ab3c6d6e32f9dd0d810c09123": "dcbcdf93ea729e63bf4d2ab1651745e1",
".git/objects/fa/6c392d7b86940da0ee6e7a0f3c3f56c0117ec2": "f60c1acb45bc5327c8932042ac6467b4",
".git/objects/ff/f5a9247fa14bcb4a7f677ef7ade9ff0330e828": "4c4a4d7f6231e4b31cc693b9f28cdcca",
".git/ORIG_HEAD": "6860f0fc49029c9b748dc8c394fc19e3",
".git/refs/heads/main": "b6fe83e034d6446843b9b699ca7a0003",
".git/refs/remotes/origin/main": "b6fe83e034d6446843b9b699ca7a0003",
"assets/AssetManifest.bin": "c850d7c0ab699081203e8365f8c3c65b",
"assets/AssetManifest.bin.json": "957b22c052419713ed0e91e7c3ac6d45",
"assets/AssetManifest.json": "1d6938752b89ad1f06cbe8c55a3770bf",
"assets/assets/flag-brazil.png": "8cfba2af02d8033ee09dc2e866a24e05",
"assets/assets/flag-us.png": "94a6d34ac826f51d3c11148058cb94b5",
"assets/assets/github.png": "a90cedcaac3f83b8e7bc478053ba7ffe",
"assets/assets/instagram.png": "4ace98a58e84c8d5839b7298f785ab8d",
"assets/assets/linkedin.png": "fe91bed50349fcf843d7e65467313f4f",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "d4e412b6e9393410056b2dcd6381b580",
"assets/NOTICES": "1d6fa971a9431b630b417bb3cd7996a8",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/skwasm.js": "694fda5704053957c2594de355805228",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"flutter_bootstrap.js": "f6ef0d2d687f766619c1a8ea8986adc5",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "71e50c338ee3da42954716bbdec71b3b",
"/": "71e50c338ee3da42954716bbdec71b3b",
"main.dart.js": "a23264c5278c255b8a2c03cc4b9788b5",
"manifest.json": "d8fe34f7ae4c072a77b924e01dac8a50",
"README.md": "748afa9780bb8f91bd4248b0028968a4",
"version.json": "9b818ca9511483c901bed1545384376c"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
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
