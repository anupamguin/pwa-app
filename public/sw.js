let cacheData = "appV1";
this.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(cacheData).then((cache) => {
      cache.addAll([
        "/static/js/main.chunk.js",
        "/static/js/vendors~main.chunk.js",
        "/static/js/bundle.js",
        "/static/js/0.chunk.js",
        "/index.html",
        "/",
        "/users",
        "/about",
      ]);
    })
  );
});

this.addEventListener("fetch", (event) => {
  if (!navigator.onLine) {
    //if online then fetch from server other wise enter this if condition and fetch from cache
    event.respondWith(
      caches.match(event.request).then((response) => {
        if (response) {
          return response;
        }

        let requestUrl = event.request.clone();
        fetch(requestUrl);
      })
    );
  }
});
