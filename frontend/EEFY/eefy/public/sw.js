if (!self.define) {
  let e,
    s = {};
  const t = (t, n) => (
    (t = new URL(t + '.js', n).href),
    s[t] ||
      new Promise(s => {
        if ('document' in self) {
          const e = document.createElement('script');
          (e.src = t), (e.onload = s), document.head.appendChild(e);
        } else (e = t), importScripts(t), s();
      }).then(() => {
        let e = s[t];
        if (!e) throw new Error(`Module ${t} didn’t register its module`);
        return e;
      })
  );
  self.define = (n, a) => {
    const c = e || ('document' in self ? document.currentScript.src : '') || location.href;
    if (s[c]) return;
    let i = {};
    const r = e => t(e, c),
      f = { module: { uri: c }, exports: i, require: r };
    s[c] = Promise.all(n.map(e => f[e] || r(e))).then(e => (a(...e), i));
  };
}
define(['./workbox-7c2a5a06'], function (e) {
  'use strict';
  importScripts(),
    self.skipWaiting(),
    e.clientsClaim(),
    e.precacheAndRoute(
      [
        { url: '/Img/취소.png', revision: '3adc23cf1eec21a04fe5a59077368001' },
        { url: '/Img/화살표.png', revision: '274fc73517dfb4127b8f961c71e2d288' },
        { url: '/Img/회원가입.png', revision: '1d7e49183301630131638804cfc2ab4f' },
        { url: '/_next/app-build-manifest.json', revision: '09af36399ac28a2c8876ae18154fb3e2' },
        { url: '/_next/static/LVWEm6GX7rN8EFvqEtVf_/_buildManifest.js', revision: '6c71246da08a1a20756670996a38cf11' },
        { url: '/_next/static/LVWEm6GX7rN8EFvqEtVf_/_ssgManifest.js', revision: 'b6652df95db52feb4daf4eca35380933' },
        { url: '/_next/static/chunks/00cbbcb7-0044be546e1b46cf.js', revision: 'LVWEm6GX7rN8EFvqEtVf_' },
        { url: '/_next/static/chunks/1282-ae8b4a385cf927c6.js', revision: 'LVWEm6GX7rN8EFvqEtVf_' },
        { url: '/_next/static/chunks/1396-917c7eeeee8a70b2.js', revision: 'LVWEm6GX7rN8EFvqEtVf_' },
        { url: '/_next/static/chunks/2080.621825ec9b8a5926.js', revision: '621825ec9b8a5926' },
        { url: '/_next/static/chunks/2482-fab303072ab90ee7.js', revision: 'LVWEm6GX7rN8EFvqEtVf_' },
        { url: '/_next/static/chunks/2503-0e2cdc7eac179994.js', revision: 'LVWEm6GX7rN8EFvqEtVf_' },
        { url: '/_next/static/chunks/2531-40d96ea57c91ff77.js', revision: 'LVWEm6GX7rN8EFvqEtVf_' },
        { url: '/_next/static/chunks/2931-63fec43c43c8c143.js', revision: 'LVWEm6GX7rN8EFvqEtVf_' },
        { url: '/_next/static/chunks/341-119c08fe6e9b9357.js', revision: 'LVWEm6GX7rN8EFvqEtVf_' },
        { url: '/_next/static/chunks/358ff52d-32f90eb9506cde80.js', revision: 'LVWEm6GX7rN8EFvqEtVf_' },
        { url: '/_next/static/chunks/3627521c-ad73fd93addaee36.js', revision: 'LVWEm6GX7rN8EFvqEtVf_' },
        { url: '/_next/static/chunks/39209d7c-12ae453b120d7545.js', revision: 'LVWEm6GX7rN8EFvqEtVf_' },
        { url: '/_next/static/chunks/3975359d.1d7b23a901d55757.js', revision: '1d7b23a901d55757' },
        { url: '/_next/static/chunks/48507feb-afb88c619d7e3e09.js', revision: 'LVWEm6GX7rN8EFvqEtVf_' },
        { url: '/_next/static/chunks/4f9d9cd8-ecd9966f56faa853.js', revision: 'LVWEm6GX7rN8EFvqEtVf_' },
        { url: '/_next/static/chunks/594-354240e308abd283.js', revision: 'LVWEm6GX7rN8EFvqEtVf_' },
        { url: '/_next/static/chunks/6691-06b669a006c9e0b9.js', revision: 'LVWEm6GX7rN8EFvqEtVf_' },
        { url: '/_next/static/chunks/7319.353f9707b4fb4adf.js', revision: '353f9707b4fb4adf' },
        { url: '/_next/static/chunks/7849-39843550c8b8f696.js', revision: 'LVWEm6GX7rN8EFvqEtVf_' },
        { url: '/_next/static/chunks/7931-e65c9e8789ed9347.js', revision: 'LVWEm6GX7rN8EFvqEtVf_' },
        { url: '/_next/static/chunks/7a49ec60-1249e31f47a0c152.js', revision: 'LVWEm6GX7rN8EFvqEtVf_' },
        { url: '/_next/static/chunks/8073-258bd452d8254cf1.js', revision: 'LVWEm6GX7rN8EFvqEtVf_' },
        { url: '/_next/static/chunks/8641.b8620fef0cc404c4.js', revision: 'b8620fef0cc404c4' },
        { url: '/_next/static/chunks/93854f56-fb23930c454b11fa.js', revision: 'LVWEm6GX7rN8EFvqEtVf_' },
        { url: '/_next/static/chunks/app/_not-found-da8a8ddfa84c2978.js', revision: 'LVWEm6GX7rN8EFvqEtVf_' },
        { url: '/_next/static/chunks/app/class/dashboard/page-0a011d928fcf0958.js', revision: 'LVWEm6GX7rN8EFvqEtVf_' },
        { url: '/_next/static/chunks/app/class/layout-0d52bf0beb190d12.js', revision: 'LVWEm6GX7rN8EFvqEtVf_' },
        { url: '/_next/static/chunks/app/class/lecture/page-78f9c35aaf099a7b.js', revision: 'LVWEm6GX7rN8EFvqEtVf_' },
        { url: '/_next/static/chunks/app/class/notice/page-4ecae6ab8321b15c.js', revision: 'LVWEm6GX7rN8EFvqEtVf_' },
        { url: '/_next/static/chunks/app/class/page-bf1b527dc49a2f04.js', revision: 'LVWEm6GX7rN8EFvqEtVf_' },
        { url: '/_next/static/chunks/app/class/question/page-02bdb19e3cabc981.js', revision: 'LVWEm6GX7rN8EFvqEtVf_' },
        { url: '/_next/static/chunks/app/class/studydetail/page-8bf6cceb695e474b.js', revision: 'LVWEm6GX7rN8EFvqEtVf_' },
        { url: '/_next/static/chunks/app/class/studydetail/speaking/page-80535b9d32984cc8.js', revision: 'LVWEm6GX7rN8EFvqEtVf_' },
        { url: '/_next/static/chunks/app/class/studylist/page-ef5c55469aba6302.js', revision: 'LVWEm6GX7rN8EFvqEtVf_' },
        { url: '/_next/static/chunks/app/layout-dbbdc3740c417811.js', revision: 'LVWEm6GX7rN8EFvqEtVf_' },
        { url: '/_next/static/chunks/app/library/layout-8953b8d9f4b7c3a5.js', revision: 'LVWEm6GX7rN8EFvqEtVf_' },
        { url: '/_next/static/chunks/app/library/page-c1274edf4c07f2af.js', revision: 'LVWEm6GX7rN8EFvqEtVf_' },
        { url: '/_next/static/chunks/app/library/student/page-1ee8282e75f29a86.js', revision: 'LVWEm6GX7rN8EFvqEtVf_' },
        { url: '/_next/static/chunks/app/library/teacher/homework/create/page-2d7e19e8ea50ed95.js', revision: 'LVWEm6GX7rN8EFvqEtVf_' },
        { url: '/_next/static/chunks/app/library/teacher/page-a1243aa8a25c4577.js', revision: 'LVWEm6GX7rN8EFvqEtVf_' },
        { url: '/_next/static/chunks/app/login/page-29d13b876b64cf8c.js', revision: 'LVWEm6GX7rN8EFvqEtVf_' },
        { url: '/_next/static/chunks/app/main/classlist/page-6e896a6d4fb92c2d.js', revision: 'LVWEm6GX7rN8EFvqEtVf_' },
        { url: '/_next/static/chunks/app/main/layout-55e832190ac274e8.js', revision: 'LVWEm6GX7rN8EFvqEtVf_' },
        { url: '/_next/static/chunks/app/main/page-c9e71dbbb6a69533.js', revision: 'LVWEm6GX7rN8EFvqEtVf_' },
        { url: '/_next/static/chunks/app/page-df7db0858434e9d0.js', revision: 'LVWEm6GX7rN8EFvqEtVf_' },
        { url: '/_next/static/chunks/bc9c3264-748c6acd657996da.js', revision: 'LVWEm6GX7rN8EFvqEtVf_' },
        { url: '/_next/static/chunks/d622d42c-308710bd8120a626.js', revision: 'LVWEm6GX7rN8EFvqEtVf_' },
        { url: '/_next/static/chunks/ec3863c0-0156e095e51c57c0.js', revision: 'LVWEm6GX7rN8EFvqEtVf_' },
        { url: '/_next/static/chunks/f4e5f4e1-7b23bdd77defa287.js', revision: 'LVWEm6GX7rN8EFvqEtVf_' },
        { url: '/_next/static/chunks/fd9d1056-ac6bc38f43211e0c.js', revision: 'LVWEm6GX7rN8EFvqEtVf_' },
        { url: '/_next/static/chunks/framework-964c2d6016b0d731.js', revision: 'LVWEm6GX7rN8EFvqEtVf_' },
        { url: '/_next/static/chunks/main-8dd8bd6fde096de9.js', revision: 'LVWEm6GX7rN8EFvqEtVf_' },
        { url: '/_next/static/chunks/main-app-9e0f963812abda76.js', revision: 'LVWEm6GX7rN8EFvqEtVf_' },
        { url: '/_next/static/chunks/pages/_app-9912df8a1866d756.js', revision: 'LVWEm6GX7rN8EFvqEtVf_' },
        { url: '/_next/static/chunks/pages/_error-075cab5055dfd011.js', revision: 'LVWEm6GX7rN8EFvqEtVf_' },
        { url: '/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js', revision: '837c0df77fd5009c9e46d446188ecfd0' },
        { url: '/_next/static/chunks/webpack-b488dd73735eb017.js', revision: 'LVWEm6GX7rN8EFvqEtVf_' },
        { url: '/_next/static/css/041e0e3e326628ea.css', revision: '041e0e3e326628ea' },
        { url: '/_next/static/css/4d41614584f4fe54.css', revision: '4d41614584f4fe54' },
        { url: '/_next/static/css/6122e5b27df29a0c.css', revision: '6122e5b27df29a0c' },
        { url: '/_next/static/css/ba6057dd988749d5.css', revision: 'ba6057dd988749d5' },
        { url: '/_next/static/media/회원가입.98773a12.png', revision: '1d7e49183301630131638804cfc2ab4f' },
        { url: '/asset-headphonebook-450x450.png', revision: 'c6d6e982650f1076980a355c7c6d0fde' },
        { url: '/dashboard.png', revision: '18126b4ddc6d44516f1d78f708f57c01' },
        { url: '/icon-192x192.png', revision: '76fcd20cd2feaa441edf3b069c672b65' },
        { url: '/icon-256x256.png', revision: '57945fb489acae6781be59b471100d97' },
        { url: '/icon-384x384.png', revision: '5137873f70752f5c8975060481099805' },
        { url: '/icon-512x512.png', revision: 'bd53395c30ccf5d090affeac6b8f1bcf' },
        { url: '/logo.png', revision: '80edab507375153931f236468aa97ae5' },
        { url: '/manifest.json', revision: 'baeca1a8e628820dbd20db13a1d632f5' },
        { url: '/next.svg', revision: '8e061864f388b47f33a1c3780831193e' },
        { url: '/start-logo.svg', revision: '7e88a00bbb85e52623977645295eb895' },
        { url: '/vercel.svg', revision: '61c6b19abff40ea7acd577be818f3976' },
      ],
      { ignoreURLParametersMatching: [] }
    ),
    e.cleanupOutdatedCaches(),
    e.registerRoute(
      '/',
      new e.NetworkFirst({
        cacheName: 'start-url',
        plugins: [
          {
            cacheWillUpdate: async ({ request: e, response: s, event: t, state: n }) =>
              s && 'opaqueredirect' === s.type ? new Response(s.body, { status: 200, statusText: 'OK', headers: s.headers }) : s,
          },
        ],
      }),
      'GET'
    ),
    e.registerRoute(
      /^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,
      new e.CacheFirst({ cacheName: 'google-fonts-webfonts', plugins: [new e.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 31536e3 })] }),
      'GET'
    ),
    e.registerRoute(
      /^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,
      new e.StaleWhileRevalidate({ cacheName: 'google-fonts-stylesheets', plugins: [new e.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 604800 })] }),
      'GET'
    ),
    e.registerRoute(
      /\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,
      new e.StaleWhileRevalidate({ cacheName: 'static-font-assets', plugins: [new e.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 604800 })] }),
      'GET'
    ),
    e.registerRoute(
      /\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,
      new e.StaleWhileRevalidate({ cacheName: 'static-image-assets', plugins: [new e.ExpirationPlugin({ maxEntries: 64, maxAgeSeconds: 86400 })] }),
      'GET'
    ),
    e.registerRoute(
      /\/_next\/image\?url=.+$/i,
      new e.StaleWhileRevalidate({ cacheName: 'next-image', plugins: [new e.ExpirationPlugin({ maxEntries: 64, maxAgeSeconds: 86400 })] }),
      'GET'
    ),
    e.registerRoute(
      /\.(?:mp3|wav|ogg)$/i,
      new e.CacheFirst({
        cacheName: 'static-audio-assets',
        plugins: [new e.RangeRequestsPlugin(), new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 })],
      }),
      'GET'
    ),
    e.registerRoute(
      /\.(?:mp4)$/i,
      new e.CacheFirst({
        cacheName: 'static-video-assets',
        plugins: [new e.RangeRequestsPlugin(), new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 })],
      }),
      'GET'
    ),
    e.registerRoute(
      /\.(?:js)$/i,
      new e.StaleWhileRevalidate({ cacheName: 'static-js-assets', plugins: [new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 })] }),
      'GET'
    ),
    e.registerRoute(
      /\.(?:css|less)$/i,
      new e.StaleWhileRevalidate({ cacheName: 'static-style-assets', plugins: [new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 })] }),
      'GET'
    ),
    e.registerRoute(
      /\/_next\/data\/.+\/.+\.json$/i,
      new e.StaleWhileRevalidate({ cacheName: 'next-data', plugins: [new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 })] }),
      'GET'
    ),
    e.registerRoute(
      /\.(?:json|xml|csv)$/i,
      new e.NetworkFirst({ cacheName: 'static-data-assets', plugins: [new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 })] }),
      'GET'
    ),
    e.registerRoute(
      ({ url: e }) => {
        if (!(self.origin === e.origin)) return !1;
        const s = e.pathname;
        return !s.startsWith('/api/auth/') && !!s.startsWith('/api/');
      },
      new e.NetworkFirst({ cacheName: 'apis', networkTimeoutSeconds: 10, plugins: [new e.ExpirationPlugin({ maxEntries: 16, maxAgeSeconds: 86400 })] }),
      'GET'
    ),
    e.registerRoute(
      ({ url: e }) => {
        if (!(self.origin === e.origin)) return !1;
        return !e.pathname.startsWith('/api/');
      },
      new e.NetworkFirst({ cacheName: 'others', networkTimeoutSeconds: 10, plugins: [new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 })] }),
      'GET'
    ),
    e.registerRoute(
      ({ url: e }) => !(self.origin === e.origin),
      new e.NetworkFirst({ cacheName: 'cross-origin', networkTimeoutSeconds: 10, plugins: [new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 3600 })] }),
      'GET'
    );
});
