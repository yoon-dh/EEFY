<<<<<<< HEAD
if (!self.define) {
  let s,
    e = {};
  const n = (n, a) => (
    (n = new URL(n + '.js', a).href),
    e[n] ||
      new Promise(e => {
        if ('document' in self) {
          const s = document.createElement('script');
          (s.src = n), (s.onload = e), document.head.appendChild(s);
        } else (s = n), importScripts(n), e();
      }).then(() => {
        let s = e[n];
        if (!s) throw new Error(`Module ${n} didn’t register its module`);
        return s;
      })
  );
  self.define = (a, t) => {
    const i = s || ('document' in self ? document.currentScript.src : '') || location.href;
    if (e[i]) return;
    let c = {};
    const r = s => n(s, i),
      o = { module: { uri: i }, exports: c, require: r };
    e[i] = Promise.all(a.map(s => o[s] || r(s))).then(s => (t(...s), c));
  };
}
define(['./workbox-7c2a5a06'], function (s) {
  'use strict';
  importScripts(),
    self.skipWaiting(),
    s.clientsClaim(),
    s.precacheAndRoute(
      [
        { url: '/Img/회원가입.png', revision: '1d7e49183301630131638804cfc2ab4f' },
        { url: '/_next/app-build-manifest.json', revision: 'e12b137af55b9762c12d43bb8b6f46f6' },
        { url: '/_next/static/chunks/131-506a1ae46f0c88a9.js', revision: 'tvUWWLI9pzQavDsn0s29J' },
        { url: '/_next/static/chunks/281-765e7c5314950c32.js', revision: 'tvUWWLI9pzQavDsn0s29J' },
        { url: '/_next/static/chunks/341-86980236e73d61af.js', revision: 'tvUWWLI9pzQavDsn0s29J' },
        { url: '/_next/static/chunks/4-02d4a7f9d32cb14e.js', revision: 'tvUWWLI9pzQavDsn0s29J' },
        { url: '/_next/static/chunks/472-240aed5679e076a9.js', revision: 'tvUWWLI9pzQavDsn0s29J' },
        { url: '/_next/static/chunks/524-84a925e83627d860.js', revision: 'tvUWWLI9pzQavDsn0s29J' },
        { url: '/_next/static/chunks/594-5aa9d8b010fde837.js', revision: 'tvUWWLI9pzQavDsn0s29J' },
        { url: '/_next/static/chunks/73-a1914fbeedcaecab.js', revision: 'tvUWWLI9pzQavDsn0s29J' },
        { url: '/_next/static/chunks/775-3f1fe002e5ecadf6.js', revision: 'tvUWWLI9pzQavDsn0s29J' },
        { url: '/_next/static/chunks/901-9664c8fe430765e4.js', revision: 'tvUWWLI9pzQavDsn0s29J' },
        { url: '/_next/static/chunks/93854f56-91b5b1788ae21335.js', revision: 'tvUWWLI9pzQavDsn0s29J' },
        { url: '/_next/static/chunks/947-90e71ea0ced98e52.js', revision: 'tvUWWLI9pzQavDsn0s29J' },
        { url: '/_next/static/chunks/app/_not-found-5a24a86d9f181524.js', revision: 'tvUWWLI9pzQavDsn0s29J' },
        { url: '/_next/static/chunks/app/class/dashboard/page-33e3d8a19389d9eb.js', revision: 'tvUWWLI9pzQavDsn0s29J' },
        { url: '/_next/static/chunks/app/class/layout-b7a7a650f7af9eee.js', revision: 'tvUWWLI9pzQavDsn0s29J' },
        { url: '/_next/static/chunks/app/class/lecture/page-6b659de00c7c64e4.js', revision: 'tvUWWLI9pzQavDsn0s29J' },
        { url: '/_next/static/chunks/app/class/notice/page-d169202303d2f54b.js', revision: 'tvUWWLI9pzQavDsn0s29J' },
        { url: '/_next/static/chunks/app/class/page-1f83a8088c6eff2e.js', revision: 'tvUWWLI9pzQavDsn0s29J' },
        { url: '/_next/static/chunks/app/class/question/page-85a27b05e7efd4d3.js', revision: 'tvUWWLI9pzQavDsn0s29J' },
        { url: '/_next/static/chunks/app/layout-53c09e49f1e27e35.js', revision: 'tvUWWLI9pzQavDsn0s29J' },
        { url: '/_next/static/chunks/app/library/layout-9d82f4fc61503124.js', revision: 'tvUWWLI9pzQavDsn0s29J' },
        { url: '/_next/static/chunks/app/library/page-fd6a3e25edbe7005.js', revision: 'tvUWWLI9pzQavDsn0s29J' },
        { url: '/_next/static/chunks/app/library/student/page-be9cf18683b8f2ae.js', revision: 'tvUWWLI9pzQavDsn0s29J' },
        { url: '/_next/static/chunks/app/library/teacher/homework/create/page-97e5fcce9fdaa029.js', revision: 'tvUWWLI9pzQavDsn0s29J' },
        { url: '/_next/static/chunks/app/library/teacher/page-7bc0cf70e2bf01b2.js', revision: 'tvUWWLI9pzQavDsn0s29J' },
        { url: '/_next/static/chunks/app/login/page-6ef33af0379bc1f7.js', revision: 'tvUWWLI9pzQavDsn0s29J' },
        { url: '/_next/static/chunks/app/main/classlist/page-1f1771541cd7b87e.js', revision: 'tvUWWLI9pzQavDsn0s29J' },
        { url: '/_next/static/chunks/app/main/layout-e8676f9380128af2.js', revision: 'tvUWWLI9pzQavDsn0s29J' },
        { url: '/_next/static/chunks/app/main/page-acb60eb702f0b6d6.js', revision: 'tvUWWLI9pzQavDsn0s29J' },
        { url: '/_next/static/chunks/app/page-b7ddaa6dbf7c6d73.js', revision: 'tvUWWLI9pzQavDsn0s29J' },
        { url: '/_next/static/chunks/f4e5f4e1-fcf65f28a3b4aeeb.js', revision: 'tvUWWLI9pzQavDsn0s29J' },
        { url: '/_next/static/chunks/fd9d1056-223ee135c8a1e461.js', revision: 'tvUWWLI9pzQavDsn0s29J' },
        { url: '/_next/static/chunks/framework-8883d1e9be70c3da.js', revision: 'tvUWWLI9pzQavDsn0s29J' },
        { url: '/_next/static/chunks/main-app-c8a575f17e89bc54.js', revision: 'tvUWWLI9pzQavDsn0s29J' },
        { url: '/_next/static/chunks/main-f88f397a89f8776b.js', revision: 'tvUWWLI9pzQavDsn0s29J' },
        { url: '/_next/static/chunks/pages/_app-1534f180665c857f.js', revision: 'tvUWWLI9pzQavDsn0s29J' },
        { url: '/_next/static/chunks/pages/_error-b646007f40c4f0a8.js', revision: 'tvUWWLI9pzQavDsn0s29J' },
        { url: '/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js', revision: '837c0df77fd5009c9e46d446188ecfd0' },
        { url: '/_next/static/chunks/webpack-343de8b27041bc49.js', revision: 'tvUWWLI9pzQavDsn0s29J' },
        { url: '/_next/static/css/4d41614584f4fe54.css', revision: '4d41614584f4fe54' },
        { url: '/_next/static/css/afc5fa57fcc012cd.css', revision: 'afc5fa57fcc012cd' },
        { url: '/_next/static/css/b510b1c24a197679.css', revision: 'b510b1c24a197679' },
        { url: '/_next/static/tvUWWLI9pzQavDsn0s29J/_buildManifest.js', revision: '50654c4134ba6f71b423498e9447ee91' },
        { url: '/_next/static/tvUWWLI9pzQavDsn0s29J/_ssgManifest.js', revision: 'b6652df95db52feb4daf4eca35380933' },
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
    s.cleanupOutdatedCaches(),
    s.registerRoute(
      '/',
      new s.NetworkFirst({
        cacheName: 'start-url',
        plugins: [
          {
            cacheWillUpdate: async ({ request: s, response: e, event: n, state: a }) =>
              e && 'opaqueredirect' === e.type ? new Response(e.body, { status: 200, statusText: 'OK', headers: e.headers }) : e,
          },
        ],
      }),
      'GET'
    ),
    s.registerRoute(
      /^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,
      new s.CacheFirst({ cacheName: 'google-fonts-webfonts', plugins: [new s.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 31536e3 })] }),
      'GET'
    ),
    s.registerRoute(
      /^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,
      new s.StaleWhileRevalidate({ cacheName: 'google-fonts-stylesheets', plugins: [new s.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 604800 })] }),
      'GET'
    ),
    s.registerRoute(
      /\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,
      new s.StaleWhileRevalidate({ cacheName: 'static-font-assets', plugins: [new s.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 604800 })] }),
      'GET'
    ),
    s.registerRoute(
      /\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,
      new s.StaleWhileRevalidate({ cacheName: 'static-image-assets', plugins: [new s.ExpirationPlugin({ maxEntries: 64, maxAgeSeconds: 86400 })] }),
      'GET'
    ),
    s.registerRoute(
      /\/_next\/image\?url=.+$/i,
      new s.StaleWhileRevalidate({ cacheName: 'next-image', plugins: [new s.ExpirationPlugin({ maxEntries: 64, maxAgeSeconds: 86400 })] }),
      'GET'
    ),
    s.registerRoute(
      /\.(?:mp3|wav|ogg)$/i,
      new s.CacheFirst({
        cacheName: 'static-audio-assets',
        plugins: [new s.RangeRequestsPlugin(), new s.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 })],
      }),
      'GET'
    ),
    s.registerRoute(
      /\.(?:mp4)$/i,
      new s.CacheFirst({
        cacheName: 'static-video-assets',
        plugins: [new s.RangeRequestsPlugin(), new s.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 })],
      }),
      'GET'
    ),
    s.registerRoute(
      /\.(?:js)$/i,
      new s.StaleWhileRevalidate({ cacheName: 'static-js-assets', plugins: [new s.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 })] }),
      'GET'
    ),
    s.registerRoute(
      /\.(?:css|less)$/i,
      new s.StaleWhileRevalidate({ cacheName: 'static-style-assets', plugins: [new s.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 })] }),
      'GET'
    ),
    s.registerRoute(
      /\/_next\/data\/.+\/.+\.json$/i,
      new s.StaleWhileRevalidate({ cacheName: 'next-data', plugins: [new s.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 })] }),
      'GET'
    ),
    s.registerRoute(
      /\.(?:json|xml|csv)$/i,
      new s.NetworkFirst({ cacheName: 'static-data-assets', plugins: [new s.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 })] }),
      'GET'
    ),
    s.registerRoute(
      ({ url: s }) => {
        if (!(self.origin === s.origin)) return !1;
        const e = s.pathname;
        return !e.startsWith('/api/auth/') && !!e.startsWith('/api/');
      },
      new s.NetworkFirst({ cacheName: 'apis', networkTimeoutSeconds: 10, plugins: [new s.ExpirationPlugin({ maxEntries: 16, maxAgeSeconds: 86400 })] }),
      'GET'
    ),
    s.registerRoute(
      ({ url: s }) => {
        if (!(self.origin === s.origin)) return !1;
        return !s.pathname.startsWith('/api/');
      },
      new s.NetworkFirst({ cacheName: 'others', networkTimeoutSeconds: 10, plugins: [new s.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 })] }),
      'GET'
    ),
    s.registerRoute(
      ({ url: s }) => !(self.origin === s.origin),
      new s.NetworkFirst({ cacheName: 'cross-origin', networkTimeoutSeconds: 10, plugins: [new s.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 3600 })] }),
      'GET'
    );
});
=======
if(!self.define){let e,s={};const i=(i,t)=>(i=new URL(i+".js",t).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(t,c)=>{const n=e||("document"in self?document.currentScript.src:"")||location.href;if(s[n])return;let a={};const r=e=>i(e,n),f={module:{uri:n},exports:a,require:r};s[n]=Promise.all(t.map((e=>f[e]||r(e)))).then((e=>(c(...e),a)))}}define(["./workbox-7c2a5a06"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/Img/취소.png",revision:"3adc23cf1eec21a04fe5a59077368001"},{url:"/Img/화살표.png",revision:"274fc73517dfb4127b8f961c71e2d288"},{url:"/Img/회원가입.png",revision:"1d7e49183301630131638804cfc2ab4f"},{url:"/_next/app-build-manifest.json",revision:"ed3797e44967a783d35ce948a83e34a6"},{url:"/_next/static/K_Ezy236ilN5fWcIC1jbt/_buildManifest.js",revision:"50654c4134ba6f71b423498e9447ee91"},{url:"/_next/static/K_Ezy236ilN5fWcIC1jbt/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/chunks/131-5144bff94ff56b53.js",revision:"K_Ezy236ilN5fWcIC1jbt"},{url:"/_next/static/chunks/341-c81c76a3138cf62b.js",revision:"K_Ezy236ilN5fWcIC1jbt"},{url:"/_next/static/chunks/390-d7b992c080dbbff5.js",revision:"K_Ezy236ilN5fWcIC1jbt"},{url:"/_next/static/chunks/4-0381a35fdd389463.js",revision:"K_Ezy236ilN5fWcIC1jbt"},{url:"/_next/static/chunks/472-fd04dd8b909249be.js",revision:"K_Ezy236ilN5fWcIC1jbt"},{url:"/_next/static/chunks/524-f512fe52ee24990f.js",revision:"K_Ezy236ilN5fWcIC1jbt"},{url:"/_next/static/chunks/594-c1e1f34bc6457f55.js",revision:"K_Ezy236ilN5fWcIC1jbt"},{url:"/_next/static/chunks/73-c14b07e68953a4c3.js",revision:"K_Ezy236ilN5fWcIC1jbt"},{url:"/_next/static/chunks/775-d858090a5692c704.js",revision:"K_Ezy236ilN5fWcIC1jbt"},{url:"/_next/static/chunks/7a49ec60-ebb5dcf8360730a0.js",revision:"K_Ezy236ilN5fWcIC1jbt"},{url:"/_next/static/chunks/868-a803ef7dfcff641b.js",revision:"K_Ezy236ilN5fWcIC1jbt"},{url:"/_next/static/chunks/901-c1e84f5e9bc82444.js",revision:"K_Ezy236ilN5fWcIC1jbt"},{url:"/_next/static/chunks/93854f56-91b5b1788ae21335.js",revision:"K_Ezy236ilN5fWcIC1jbt"},{url:"/_next/static/chunks/947-ceee9b4bc2bbb81a.js",revision:"K_Ezy236ilN5fWcIC1jbt"},{url:"/_next/static/chunks/app/_not-found-8407815f64902bd6.js",revision:"K_Ezy236ilN5fWcIC1jbt"},{url:"/_next/static/chunks/app/class/dashboard/page-d00c25fcdd5376c5.js",revision:"K_Ezy236ilN5fWcIC1jbt"},{url:"/_next/static/chunks/app/class/layout-23c20a8e3a2c8c3f.js",revision:"K_Ezy236ilN5fWcIC1jbt"},{url:"/_next/static/chunks/app/class/lecture/page-dc3b77b9f4e0da8c.js",revision:"K_Ezy236ilN5fWcIC1jbt"},{url:"/_next/static/chunks/app/class/notice/page-a2ecbf444787ff10.js",revision:"K_Ezy236ilN5fWcIC1jbt"},{url:"/_next/static/chunks/app/class/page-3b82912418cd6083.js",revision:"K_Ezy236ilN5fWcIC1jbt"},{url:"/_next/static/chunks/app/class/question/page-004d7b3c971f6d33.js",revision:"K_Ezy236ilN5fWcIC1jbt"},{url:"/_next/static/chunks/app/class/studydetail/page-a6abf64a2a645be6.js",revision:"K_Ezy236ilN5fWcIC1jbt"},{url:"/_next/static/chunks/app/class/studylist/page-239d7d5b74f1e722.js",revision:"K_Ezy236ilN5fWcIC1jbt"},{url:"/_next/static/chunks/app/layout-6142c6152e736ada.js",revision:"K_Ezy236ilN5fWcIC1jbt"},{url:"/_next/static/chunks/app/library/layout-586e3e0c7aa51783.js",revision:"K_Ezy236ilN5fWcIC1jbt"},{url:"/_next/static/chunks/app/library/page-d21ffb6334714b19.js",revision:"K_Ezy236ilN5fWcIC1jbt"},{url:"/_next/static/chunks/app/library/student/page-5a5426fe2d491990.js",revision:"K_Ezy236ilN5fWcIC1jbt"},{url:"/_next/static/chunks/app/library/teacher/homework/create/page-39846c7ad373305e.js",revision:"K_Ezy236ilN5fWcIC1jbt"},{url:"/_next/static/chunks/app/library/teacher/page-a6a9fe058db7b538.js",revision:"K_Ezy236ilN5fWcIC1jbt"},{url:"/_next/static/chunks/app/login/page-34520c0ff375572a.js",revision:"K_Ezy236ilN5fWcIC1jbt"},{url:"/_next/static/chunks/app/main/classlist/page-1f1771541cd7b87e.js",revision:"K_Ezy236ilN5fWcIC1jbt"},{url:"/_next/static/chunks/app/main/layout-d13761f5aa0fd23d.js",revision:"K_Ezy236ilN5fWcIC1jbt"},{url:"/_next/static/chunks/app/main/page-b9f249b1ebc7088a.js",revision:"K_Ezy236ilN5fWcIC1jbt"},{url:"/_next/static/chunks/app/page-0e3267347190e46f.js",revision:"K_Ezy236ilN5fWcIC1jbt"},{url:"/_next/static/chunks/f4e5f4e1-f1efbcf816ca3ddd.js",revision:"K_Ezy236ilN5fWcIC1jbt"},{url:"/_next/static/chunks/fd9d1056-5ee88540e4b8869d.js",revision:"K_Ezy236ilN5fWcIC1jbt"},{url:"/_next/static/chunks/framework-8883d1e9be70c3da.js",revision:"K_Ezy236ilN5fWcIC1jbt"},{url:"/_next/static/chunks/main-0fad94cd65a57717.js",revision:"K_Ezy236ilN5fWcIC1jbt"},{url:"/_next/static/chunks/main-app-c8a575f17e89bc54.js",revision:"K_Ezy236ilN5fWcIC1jbt"},{url:"/_next/static/chunks/pages/_app-1534f180665c857f.js",revision:"K_Ezy236ilN5fWcIC1jbt"},{url:"/_next/static/chunks/pages/_error-b646007f40c4f0a8.js",revision:"K_Ezy236ilN5fWcIC1jbt"},{url:"/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js",revision:"837c0df77fd5009c9e46d446188ecfd0"},{url:"/_next/static/chunks/webpack-f1ac04802a7f606d.js",revision:"K_Ezy236ilN5fWcIC1jbt"},{url:"/_next/static/css/4d41614584f4fe54.css",revision:"4d41614584f4fe54"},{url:"/_next/static/css/afc5fa57fcc012cd.css",revision:"afc5fa57fcc012cd"},{url:"/_next/static/css/ba6057dd988749d5.css",revision:"ba6057dd988749d5"},{url:"/_next/static/css/bdfa9cf2c5d96504.css",revision:"bdfa9cf2c5d96504"},{url:"/asset-headphonebook-450x450.png",revision:"c6d6e982650f1076980a355c7c6d0fde"},{url:"/icon-192x192.png",revision:"76fcd20cd2feaa441edf3b069c672b65"},{url:"/icon-256x256.png",revision:"57945fb489acae6781be59b471100d97"},{url:"/icon-384x384.png",revision:"5137873f70752f5c8975060481099805"},{url:"/icon-512x512.png",revision:"bd53395c30ccf5d090affeac6b8f1bcf"},{url:"/logo.png",revision:"80edab507375153931f236468aa97ae5"},{url:"/manifest.json",revision:"baeca1a8e628820dbd20db13a1d632f5"},{url:"/next.svg",revision:"8e061864f388b47f33a1c3780831193e"},{url:"/start-logo.svg",revision:"7e88a00bbb85e52623977645295eb895"},{url:"/vercel.svg",revision:"61c6b19abff40ea7acd577be818f3976"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:i,state:t})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
>>>>>>> 9aaf3d04d424d2fb0f0d3b498d5c3c7c7620041f
