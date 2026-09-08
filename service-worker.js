const MELAYANE_CACHE = "melayane-pwa-v2";

const MELAYANE_ASSETS = [
  "/MELAYANE/",
  "/MELAYANE/index.html",
  "/MELAYANE/manifest.json",
  "/MELAYANE/offline.html",
  "/MELAYANE/assets/icon-melayane-192-final.png",
  "/MELAYANE/assets/icon-melayane-512.png"
];

self.addEventListener("install", function (event) {
  event.waitUntil(
    caches.open(MELAYANE_CACHE).then(function (cache) {
      return cache.addAll(MELAYANE_ASSETS);
    })
  );

  self.skipWaiting();
});

self.addEventListener("activate", function (event) {
  event.waitUntil(
    caches.keys().then(function (chaves) {
      return Promise.all(
        chaves.map(function (chave) {
          if (chave !== MELAYANE_CACHE) {
            return caches.delete(chave);
          }
        })
      );
    })
  );

  self.clients.claim();
});

self.addEventListener("fetch", function (event) {
  var pedido = event.request;
  var url = new URL(pedido.url);

  if (pedido.method !== "GET") {
    return;
  }

  if (url.origin !== self.location.origin) {
    return;
  }

  event.respondWith(
    fetch(pedido)
      .then(function (resposta) {
        if (!resposta || resposta.status !== 200 || resposta.type === "opaque") {
          return resposta;
        }

        var copia = resposta.clone();

        caches.open(MELAYANE_CACHE).then(function (cache) {
          cache.put(pedido, copia);
        });

        return resposta;
      })
      .catch(function () {
        return caches.match(pedido).then(function (respostaCache) {
          if (respostaCache) {
            return respostaCache;
          }

          if (pedido.mode === "navigate") {
            return caches.match("/MELAYANE/offline.html");
          }

          return Response.error();
        });
      })
  );
});
