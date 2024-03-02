'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "3e30d99548263bb36b852f134dfb25d4",
".git/config": "e7777b40ad735fd6627046d036b37861",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "c1d4b0b1fc3ba65a9cc4c40d091bb4fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "8b50fba0f7036b24a9f927c31ff5975a",
".git/logs/refs/heads/main": "9fb186552c5bbe730555b5bfb326892b",
".git/objects/00/84943c80858dd1060e467615c392b5e5f7a5bb": "48d2b5ae68448358d54e3be04bf7430d",
".git/objects/07/74c17c0fa7a7e87e24a6935830998d92b52c75": "cd62ee54b7ceea7b2a7804e69b1d9134",
".git/objects/0d/92b7870ea81ffde0d495dbcc9e19a08ec97c86": "de960b639b7f71d319d45b28bb232f8e",
".git/objects/0f/3c6546e740727121f363f67d1dc7a5ca3cf27b": "96d9971716f41430845baafc716836ac",
".git/objects/13/7d0719f053fb478a0c39ebd287a32dffa42ccb": "39bac19ab1b591821d2dca25cbdb9edb",
".git/objects/15/2f3d6fab80de50061f0ec22eaaa9e83f64f2a9": "17cdc326863e9547e4bafcaa80988c32",
".git/objects/16/5ce0ddf03a820a38f48cba9aa0c9df9b6e6b79": "71df17c95c3124eada62b59e7dabda78",
".git/objects/16/ea14f83790123e7f2166283e0d11f1e4fe5775": "5713ff82889552a0451255a20900fd7e",
".git/objects/19/859f9932b72e73ff587fc61cb4e3ee99c2ed2d": "af9f940edc0c50fc0b8afd345625fe9e",
".git/objects/1d/ed819dcf3036fe95c39fdded76166c5dc9df09": "a48d36183a8235aff96f1e34bb079e54",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/20/55b7e96dce75e2eaa83285afae194d0fe96396": "a35616807e09e72bb62b68a1a7dbebf4",
".git/objects/2a/0b4a3a1e1c088df5876ccdb7eb741c808b2de8": "45f0190d996c12fc6ea7dbe79731fb24",
".git/objects/2b/f7d4aa7d9644cfe84b18227526c31522999604": "4c366ceaca7839318061b8fdb53e2c9a",
".git/objects/2d/06d2bcc670e8eebf4e7a01cd001300a2ec633f": "5e662a992c8f10f4c1378ae48f10150b",
".git/objects/32/4fc1cff3879e01c7d1ae0db962e8bc2ddeba37": "d0633170e3909472985bfa8d6d3c01cd",
".git/objects/32/ae48ac3f081f0e2478b6f4ff4fab6d981b61e4": "36e9c98b57b5efa96d7ed2d81cddfec3",
".git/objects/38/d170cf19c29a9c872d058e96a5013f8cf88651": "1f75a2759e0e825f101f1aef3fc6e6e2",
".git/objects/42/6b02a81a0af73a421eec610c49ad4c350a2e8f": "2f5d2a359d6f8e5ca1c95e0dbea06b8b",
".git/objects/44/09edf090da6cd7ebac5663e12b8243c897b924": "ff5ca0dbe0648f223cd30453e4b214e4",
".git/objects/48/53d176e9aa69cc597cd2884c549ee0dbeaa84a": "885215c8435144c3ebddc8e4aa2a228d",
".git/objects/4a/130c8ec6a12c50ec3e8e6dbe1d9fb16fc2b17a": "0b09c2400742ab1b166b42dd18aa0f40",
".git/objects/4a/39079e580dc9be820cba2fae41238c49eaa798": "ada1a19fea32fbb6719120809b9eae60",
".git/objects/4b/825dc642cb6eb9a060e54bf8d69288fbee4904": "75589287973d2772c2fc69d664e10822",
".git/objects/52/d233fe639cb60268a673014c0d53138da66b3c": "6568f0d27a1f7189af1d03b091ef23ae",
".git/objects/53/7807567919e88db2866b7825339c57e94c24d8": "970aec5149a3dbe9370a9dc982cdd022",
".git/objects/54/e1879bb46f317b90a157846880d91f9ded1ce8": "aa00290c7bbe0a26ea07e7df77debf2a",
".git/objects/55/a68d9d09bd6b39b9db8712296f8d7fc62b0ebb": "40415baa9e194a881d715452c09a8271",
".git/objects/57/db4009c071a36e8362aed868168dc96e2beb05": "182a599419359312ad2696cd97992a9d",
".git/objects/5a/7b05e1be311772247124911182fda78fde2cec": "d38bfbb93663df272dc4920186bd1040",
".git/objects/5d/ad15a50c2793c833c616255cf6be613fd0d979": "8aaed92817f6aa8654dd9abf4a39e1a3",
".git/objects/61/0edbacee7db1c097d55cc5608c21ef36bc129e": "bc9f53bbd3f43158c72b6497edb59a3c",
".git/objects/66/2d969ae8b6c5783a45c3138be39d30ee88e5c6": "d6e4a3d3877ccb18444631f08c5474cf",
".git/objects/68/c9e7c95b40aeeedbfa895f74bf4578a7fd9cc0": "91ca5f87dea16296a48249827636730f",
".git/objects/6f/9cad4c116bc8d72e2497226abb5c05ee64982c": "0d104480d68c1652a53721377a02a882",
".git/objects/71/7117947090611c3967f8681ab1ac0f79bca7fc": "ad4e74c0da46020e04043b5cf7f91098",
".git/objects/71/7809363ed19bdd7e1d78f6e421e40a96bc29e3": "9414a3044cb191cc3f57340f57c3dc93",
".git/objects/71/9896d4795cf05d215b4365529d3a5746076a7c": "6b91ae700a5463f151223d00ccb865f7",
".git/objects/7a/e38736d49b36262a6987c662dab7bc3baf73e6": "049cda4f8237164f0e323bc1df86f94a",
".git/objects/88/75b4040365ba6428fe9e5b621a2cd8aae6c142": "9bd7aa5127c70a5ea1725de01e58f83f",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8c/9cc4ae8ae646dc415c012e783ec9b4b07db8b3": "1d20208822e081f29cd172c414c5d9e6",
".git/objects/8c/c0cf763001e3b36ebb4f028bc6bd7a73f9715f": "bf3f24f263ea4856ad076359464d44df",
".git/objects/92/90748cb2fc270f87f029010b17f1c02e9ccbaa": "a30cd5b1bf00cee5ab1c408728c5e8d1",
".git/objects/94/bfb1463ad8331bfd687bc751b8920b133da744": "fd2d8c0d844b234856b36b93f652048f",
".git/objects/a1/8640920897ca46c4965a3faa3a3e306d46786b": "1a0687c0c0d5f374453ee393a52410cf",
".git/objects/a3/f1bace657250f10d01dcb3f1f2d2a2757b0893": "3ba5db6bc70669306c5699445fc02f8e",
".git/objects/af/742adee0a85dd21ea96cbd84182e30e085d6cf": "aa25b932ec40efacb1efe27e7cf25d82",
".git/objects/b5/0254288cc6319d153c4af1d64870d95ee2436f": "468a6506934a07c970a4739eae75eedd",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ba/e94eac59bb01a134a213e610f480a0e253242c": "74b3868d15b4193c862ff9bc5b8eaead",
".git/objects/bb/31578003fb65bc436cf0a451053136d29bd109": "ab6a83e0419cbbcdd40bdbdce076c623",
".git/objects/c0/44ee76ea64dca7653b7be4d35c58fb2ac987ec": "de9c1e5ecd2db882fd6337c1d30e2163",
".git/objects/c4/b7f7031fe4c6556a30c65dc578dcce97701967": "95bd2052e8d94936b0376f3ba47f0cb6",
".git/objects/c5/f4bc2a4da91586f3005813077f0d0aa9040f82": "3191028b787554cee4652f5050144bff",
".git/objects/c9/e0bb9b31a26d0b54ac38a0c0a754f63b15c77b": "992c6d2facc9e2767aac5734f1a81719",
".git/objects/d3/d1a57760d449af35268d5f98d0ac485133bc56": "df8fc66f1893320d401967c7929413d7",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d7/2c11112c7cb4e2ce754bc41470f9b829a2d00a": "d7280a766a5d6033f187d874a92b5ad6",
".git/objects/d9/43b4812ceee697897d6d2c702e937fdb6c9a7a": "077ea82a43dfff9486c67b7137106434",
".git/objects/db/a991aae048e81eb1b1375e79e7d9f8a9dcffbd": "2ff9813740bf5725add805055147f02d",
".git/objects/e2/b3114dc4ae14d3a83a3d6155a03b4d104e37ca": "45d3a896f8ee2f9ab22931d5c4ea7418",
".git/objects/e4/687c468b057c5d5c9671907e34755cf5bc3742": "dfb4f05e3963f0985f62f1cf452cb0c4",
".git/objects/e4/d2d2b287f20e38471db68f2ef887eb88307a00": "9621fb5cef410ac93a53b2d17954c71d",
".git/objects/e6/b745f90f2a4d1ee873fc396496c110db8ff0f3": "2933b2b2ca80c66b96cf80cd73d4cd16",
".git/objects/e8/2c5850db3a3482d0c954a4dc122c02de555ce7": "d357cd906b3805bf81477f5527cca086",
".git/objects/eb/28ec300f8a5509e21c9e1cb817a4ec9cb07efa": "cd6e4c089c8875b8bdbc3c0e17cdf0dd",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ed/5374f5582ea51073d69f435ac91ddb53c94c28": "e40194279b5ff061be8d19bb6991946d",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f5/79be3dc62a940b16de9e9744f963c71fd8506c": "a5918f3c1c189bad2fae2072349ec317",
".git/objects/fc/bf663b30310933841174aa505b234ecca95114": "7a4ff537ec5c80c2b3f436ffbd312e62",
".git/objects/ff/a6434bc150474290822ba8301f8cec02617904": "0d4423cf52c1214b7a4e508b3126c4d1",
".git/refs/heads/main": "2d0e463513ea1da57a8e2a3a4e42d505",
"assets/AssetManifest.bin": "a60365076a84a68e5682e433053ad15b",
"assets/AssetManifest.bin.json": "fc87e481b24b2f8d8546e0abfa8c785c",
"assets/AssetManifest.json": "f031b10fa1554c9d6aa51f1f9346e7ff",
"assets/assets/images/10.png": "c7c47205e4747391860bd646112b2b54",
"assets/assets/images/11.png": "70ec71585d98db07e235f515d9aa23bc",
"assets/assets/images/12.png": "bdd5ee97b977baa8c00a6390dd715757",
"assets/assets/images/13.png": "3453a631f0ab347afe9f4b71153014b3",
"assets/assets/images/14.png": "d96fa6e91a23fb0fe32edc9412c035b1",
"assets/assets/images/15.png": "ce7d9c4e171586b4219679db409fe3b9",
"assets/assets/images/16.png": "c898713e1767d9ed3a6b82645b76c089",
"assets/assets/images/17.png": "2f6386d09d0e827f927e7c6342ec048c",
"assets/assets/images/18.png": "f33f74235b05f5ff803f4e13fe43150b",
"assets/assets/images/2.png": "c8f9f08a5e8c10bdf886b4f3396ef1ae",
"assets/assets/images/3.png": "0ebc119ee39699c42ba36928a860546d",
"assets/assets/images/4.png": "a5fde65c10fa898891ba0995d8e13cc4",
"assets/assets/images/5.png": "0ebc119ee39699c42ba36928a860546d",
"assets/assets/images/6.png": "ad71551f36911adaa02d143205871509",
"assets/assets/images/7.png": "5aa74e2c1b671572408245dca5f293c8",
"assets/assets/images/8.png": "c898713e1767d9ed3a6b82645b76c089",
"assets/assets/images/9.png": "732d06344eeb09e05f151a984c670a05",
"assets/assets/images/hi.png": "106e9dcf3c1e38bbe60624afb0613511",
"assets/assets/images/home.png": "bcb9c10a4d1008fb6d5d9214b43d8bd6",
"assets/assets/images/logo.jpg": "a8065b0f57416a1423ebd9b8c109a747",
"assets/assets/images/logos.png": "50d8571904e574034e44e45d09e4113e",
"assets/assets/images/per.jpeg": "a36497f7f1e2975296d24c53ecb5d618",
"assets/FontManifest.json": "5eb07f8afb9a8976b712dab1a84e4ce8",
"assets/fonts/MaterialIcons-Regular.otf": "cf9a1925d9f8dab749065cb9728bbc8b",
"assets/fonts/Rubik-Bold.ttf": "b5b2632af1e2567e822e947f3c1f5b09",
"assets/fonts/Rubik-Light.ttf": "79aa600424ded269e432988cb556d283",
"assets/NOTICES": "ce5694379e7d0e0547c9a12942c0cb31",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "b6e405663692857ed122e561993fafd8",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "f3307f62ddff94d2cd8b103daf8d1b0f",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "04f83c01dded195a11d21c2edf643455",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "c86fbd9e7b17accae76e5ad116583dc4",
"canvaskit/canvaskit.js.symbols": "38cba9233b92472a36ff011dc21c2c9f",
"canvaskit/canvaskit.wasm": "3d2a2d663e8c5111ac61a46367f751ac",
"canvaskit/chromium/canvaskit.js": "43787ac5098c648979c27c13c6f804c3",
"canvaskit/chromium/canvaskit.js.symbols": "4525682ef039faeb11f24f37436dca06",
"canvaskit/chromium/canvaskit.wasm": "f5934e694f12929ed56a671617acd254",
"canvaskit/skwasm.js": "445e9e400085faead4493be2224d95aa",
"canvaskit/skwasm.js.symbols": "741d50ffba71f89345996b0aa8426af8",
"canvaskit/skwasm.wasm": "e42815763c5d05bba43f9d0337fa7d84",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "c71a09214cb6f5f8996a531350400a9a",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "7c76a64001dc7a6ceb05266eac8c765f",
"/": "7c76a64001dc7a6ceb05266eac8c765f",
"main.dart.js": "3142cec5d3837d2de363c3f9f790df35",
"manifest.json": "de7d1e006e720c69e0d98bbd9a8a969b",
"version.json": "15aecce7b143cfe50c12fc3325c493c4"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
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
