if(!self.define){let s,a={};const e=(e,i)=>(e=new URL(e+".js",i).href,a[e]||new Promise((a=>{if("document"in self){const s=document.createElement("script");s.src=e,s.onload=a,document.head.appendChild(s)}else s=e,importScripts(e),a()})).then((()=>{let s=a[e];if(!s)throw new Error(`Module ${e} didn’t register its module`);return s})));self.define=(i,n)=>{const c=s||("document"in self?document.currentScript.src:"")||location.href;if(a[c])return;let t={};const l=s=>e(s,c),r={module:{uri:c},exports:t,require:l};a[c]=Promise.all(i.map((s=>r[s]||l(s)))).then((s=>(n(...s),t)))}}define(["./workbox-7c2a5a06"],(function(s){"use strict";importScripts(),self.skipWaiting(),s.clientsClaim(),s.precacheAndRoute([{url:"/Img/Backpack.png",revision:"27947bbbf5cbbd21b602db2d61b288ab"},{url:"/Img/SpinnerSample.gif",revision:"96de35a71a7b5674e7cea5742b8b98ff"},{url:"/Img/다운로드.png",revision:"a339a9b08f25958aed1e89fd5276c653"},{url:"/Img/열기.png",revision:"af63e487e055e5f1ef2cbdebb4678cdc"},{url:"/Img/취소.png",revision:"3adc23cf1eec21a04fe5a59077368001"},{url:"/Img/화살표.png",revision:"274fc73517dfb4127b8f961c71e2d288"},{url:"/Img/회원가입.png",revision:"1d7e49183301630131638804cfc2ab4f"},{url:"/Sound/message.mp3",revision:"27c016df38e6ad38501785969ed3d31c"},{url:"/_next/app-build-manifest.json",revision:"b2dc648ea4c214c0f60594242ae4a5dd"},{url:"/_next/static/chunks/00cbbcb7-87da92e2b0aa93bd.js",revision:"lQdiqKlko0W9aAaPsnDVj"},{url:"/_next/static/chunks/12038df7-322ddd0bc0961ae8.js",revision:"lQdiqKlko0W9aAaPsnDVj"},{url:"/_next/static/chunks/1269-54b3eadaaa544550.js",revision:"lQdiqKlko0W9aAaPsnDVj"},{url:"/_next/static/chunks/17d537d6.e4abc194abd13831.js",revision:"e4abc194abd13831"},{url:"/_next/static/chunks/2503-2ed88f45a8aad08b.js",revision:"lQdiqKlko0W9aAaPsnDVj"},{url:"/_next/static/chunks/2531-dc2ae366b58c32fe.js",revision:"lQdiqKlko0W9aAaPsnDVj"},{url:"/_next/static/chunks/2965-acfaa07620829cb0.js",revision:"lQdiqKlko0W9aAaPsnDVj"},{url:"/_next/static/chunks/3208.b730c0838ca27cc5.js",revision:"b730c0838ca27cc5"},{url:"/_next/static/chunks/3258-d962691d76ac312b.js",revision:"lQdiqKlko0W9aAaPsnDVj"},{url:"/_next/static/chunks/341-9031d6ce326f92cb.js",revision:"lQdiqKlko0W9aAaPsnDVj"},{url:"/_next/static/chunks/358ff52d-85aa0e43e4c84b75.js",revision:"lQdiqKlko0W9aAaPsnDVj"},{url:"/_next/static/chunks/3627521c-b7c7b28d7c7938f0.js",revision:"lQdiqKlko0W9aAaPsnDVj"},{url:"/_next/static/chunks/3842-e7530ce3194bb050.js",revision:"lQdiqKlko0W9aAaPsnDVj"},{url:"/_next/static/chunks/3896-fe469721714243af.js",revision:"lQdiqKlko0W9aAaPsnDVj"},{url:"/_next/static/chunks/39209d7c-9eb03b640dfe4f38.js",revision:"lQdiqKlko0W9aAaPsnDVj"},{url:"/_next/static/chunks/39aecf79-d1a73fafef960d95.js",revision:"lQdiqKlko0W9aAaPsnDVj"},{url:"/_next/static/chunks/4090-62f8f51edbd535a6.js",revision:"lQdiqKlko0W9aAaPsnDVj"},{url:"/_next/static/chunks/449-fde07dbc59faf51c.js",revision:"lQdiqKlko0W9aAaPsnDVj"},{url:"/_next/static/chunks/48507feb-d17e6612446c6281.js",revision:"lQdiqKlko0W9aAaPsnDVj"},{url:"/_next/static/chunks/4b494101-0265720d0c918479.js",revision:"lQdiqKlko0W9aAaPsnDVj"},{url:"/_next/static/chunks/4cb6dfa8-2a2f47f2f8667763.js",revision:"lQdiqKlko0W9aAaPsnDVj"},{url:"/_next/static/chunks/4f53ad1b-5294163201ae7212.js",revision:"lQdiqKlko0W9aAaPsnDVj"},{url:"/_next/static/chunks/4f9d9cd8-7f508293dcb94056.js",revision:"lQdiqKlko0W9aAaPsnDVj"},{url:"/_next/static/chunks/594-d8921fc59d84fc1c.js",revision:"lQdiqKlko0W9aAaPsnDVj"},{url:"/_next/static/chunks/6291-5ffcb697d45bcf8e.js",revision:"lQdiqKlko0W9aAaPsnDVj"},{url:"/_next/static/chunks/6487-386c9e00ef64b026.js",revision:"lQdiqKlko0W9aAaPsnDVj"},{url:"/_next/static/chunks/6595-16c59ab9c0006289.js",revision:"lQdiqKlko0W9aAaPsnDVj"},{url:"/_next/static/chunks/6691-ac51ba30e0c6e08d.js",revision:"lQdiqKlko0W9aAaPsnDVj"},{url:"/_next/static/chunks/7319.358307964f091265.js",revision:"358307964f091265"},{url:"/_next/static/chunks/737dfa3e-32d0409e707bcfe7.js",revision:"lQdiqKlko0W9aAaPsnDVj"},{url:"/_next/static/chunks/7582-efe4eb2daa5ee5cd.js",revision:"lQdiqKlko0W9aAaPsnDVj"},{url:"/_next/static/chunks/7635-3d7898d9fd9bbd31.js",revision:"lQdiqKlko0W9aAaPsnDVj"},{url:"/_next/static/chunks/7a49ec60-1d6d6a58e4119b53.js",revision:"lQdiqKlko0W9aAaPsnDVj"},{url:"/_next/static/chunks/8036-691f6b73776cb534.js",revision:"lQdiqKlko0W9aAaPsnDVj"},{url:"/_next/static/chunks/8315-4a0a926161327962.js",revision:"lQdiqKlko0W9aAaPsnDVj"},{url:"/_next/static/chunks/8641.078d36236e241e43.js",revision:"078d36236e241e43"},{url:"/_next/static/chunks/8879-56d63ae616afe253.js",revision:"lQdiqKlko0W9aAaPsnDVj"},{url:"/_next/static/chunks/8dc5345f-7b21ca8980e060af.js",revision:"lQdiqKlko0W9aAaPsnDVj"},{url:"/_next/static/chunks/93854f56-1222bb81409e0d6a.js",revision:"lQdiqKlko0W9aAaPsnDVj"},{url:"/_next/static/chunks/aaea2bcf-10fe941641d43f45.js",revision:"lQdiqKlko0W9aAaPsnDVj"},{url:"/_next/static/chunks/app/_not-found-d975140b04da8b09.js",revision:"lQdiqKlko0W9aAaPsnDVj"},{url:"/_next/static/chunks/app/class/%5BclassId%5D/dashboard/page-bc49fa0ce9704f19.js",revision:"lQdiqKlko0W9aAaPsnDVj"},{url:"/_next/static/chunks/app/class/%5BclassId%5D/layout-feac1d04aa9b5fc3.js",revision:"lQdiqKlko0W9aAaPsnDVj"},{url:"/_next/static/chunks/app/class/%5BclassId%5D/lecture/%5BlectureId%5D/page-f6f0b76fb53ef03c.js",revision:"lQdiqKlko0W9aAaPsnDVj"},{url:"/_next/static/chunks/app/class/%5BclassId%5D/lecture/create/page-55ba4ee8f7cbde31.js",revision:"lQdiqKlko0W9aAaPsnDVj"},{url:"/_next/static/chunks/app/class/%5BclassId%5D/lecture/layout-f93bc62d77102c0e.js",revision:"lQdiqKlko0W9aAaPsnDVj"},{url:"/_next/static/chunks/app/class/%5BclassId%5D/lecture/page-b94a9d23e27f4edd.js",revision:"lQdiqKlko0W9aAaPsnDVj"},{url:"/_next/static/chunks/app/class/%5BclassId%5D/notice/%5BnoticeId%5D/page-edca3e76758638d4.js",revision:"lQdiqKlko0W9aAaPsnDVj"},{url:"/_next/static/chunks/app/class/%5BclassId%5D/notice/create/page-57aa4e37ef43403d.js",revision:"lQdiqKlko0W9aAaPsnDVj"},{url:"/_next/static/chunks/app/class/%5BclassId%5D/notice/layout-423b989844d168c5.js",revision:"lQdiqKlko0W9aAaPsnDVj"},{url:"/_next/static/chunks/app/class/%5BclassId%5D/notice/page-f468ee63b1c83ad0.js",revision:"lQdiqKlko0W9aAaPsnDVj"},{url:"/_next/static/chunks/app/class/%5BclassId%5D/question/%5BquestionId%5D/page-b03a9f22589da32f.js",revision:"lQdiqKlko0W9aAaPsnDVj"},{url:"/_next/static/chunks/app/class/%5BclassId%5D/question/create/page-daf3134c9dbf3ec6.js",revision:"lQdiqKlko0W9aAaPsnDVj"},{url:"/_next/static/chunks/app/class/%5BclassId%5D/question/layout-ccbf42322fda1a53.js",revision:"lQdiqKlko0W9aAaPsnDVj"},{url:"/_next/static/chunks/app/class/%5BclassId%5D/question/page-0d7cf3293fa6410e.js",revision:"lQdiqKlko0W9aAaPsnDVj"},{url:"/_next/static/chunks/app/class/%5BclassId%5D/studylist/listening/%5BhomeworkId%5D/problem/%5BproblemId%5D/page-f0e8d17e9c19395a.js",revision:"lQdiqKlko0W9aAaPsnDVj"},{url:"/_next/static/chunks/app/class/%5BclassId%5D/studylist/listening/page-2e29129011bea5e9.js",revision:"lQdiqKlko0W9aAaPsnDVj"},{url:"/_next/static/chunks/app/class/%5BclassId%5D/studylist/page-71eac69563a1bd94.js",revision:"lQdiqKlko0W9aAaPsnDVj"},{url:"/_next/static/chunks/app/class/%5BclassId%5D/studylist/reading/%5Bhomeworkid%5D/explanation/%5Bproblemid%5D/page-3da6a379980a3305.js",revision:"lQdiqKlko0W9aAaPsnDVj"},{url:"/_next/static/chunks/app/class/%5BclassId%5D/studylist/reading/%5Bhomeworkid%5D/layout-93d5c25cc9de2ea7.js",revision:"lQdiqKlko0W9aAaPsnDVj"},{url:"/_next/static/chunks/app/class/%5BclassId%5D/studylist/reading/%5Bhomeworkid%5D/problem/%5Bproblemid%5D/page-9ea34d38fe5cc594.js",revision:"lQdiqKlko0W9aAaPsnDVj"},{url:"/_next/static/chunks/app/class/%5BclassId%5D/studylist/reading/page-a607a7e26eb9736c.js",revision:"lQdiqKlko0W9aAaPsnDVj"},{url:"/_next/static/chunks/app/class/%5BclassId%5D/studylist/speaking/%5BhomeworkId%5D/problem/%5BproblemId%5D/page-40cfc90cbba72172.js",revision:"lQdiqKlko0W9aAaPsnDVj"},{url:"/_next/static/chunks/app/class/%5BclassId%5D/studylist/speaking/%5BhomeworkId%5D/problem/page-a2548b2c446ff8ce.js",revision:"lQdiqKlko0W9aAaPsnDVj"},{url:"/_next/static/chunks/app/class/%5BclassId%5D/studylist/speaking/page-1710250e8ee5c764.js",revision:"lQdiqKlko0W9aAaPsnDVj"},{url:"/_next/static/chunks/app/class/page-f2ec89f2aab64cee.js",revision:"lQdiqKlko0W9aAaPsnDVj"},{url:"/_next/static/chunks/app/layout-a4fde2375d74fd6c.js",revision:"lQdiqKlko0W9aAaPsnDVj"},{url:"/_next/static/chunks/app/login/page-54d27d111191b69f.js",revision:"lQdiqKlko0W9aAaPsnDVj"},{url:"/_next/static/chunks/app/main/classlist/page-d90a1d264bb1d13f.js",revision:"lQdiqKlko0W9aAaPsnDVj"},{url:"/_next/static/chunks/app/main/layout-f4da18e6d3f3c2e8.js",revision:"lQdiqKlko0W9aAaPsnDVj"},{url:"/_next/static/chunks/app/main/library/homework/assign/%5BhomeworkId%5D/page-dc3ea8a5606bdbe7.js",revision:"lQdiqKlko0W9aAaPsnDVj"},{url:"/_next/static/chunks/app/main/library/homework/create/page-b3d306f0bccb1956.js",revision:"lQdiqKlko0W9aAaPsnDVj"},{url:"/_next/static/chunks/app/main/library/student/listening/%5BhomeworkId%5D/page-5af18694b027d6d4.js",revision:"lQdiqKlko0W9aAaPsnDVj"},{url:"/_next/static/chunks/app/main/library/student/listening/page-9bfca39cbc8ef43b.js",revision:"lQdiqKlko0W9aAaPsnDVj"},{url:"/_next/static/chunks/app/main/library/student/page-9d98d85feedda7f9.js",revision:"lQdiqKlko0W9aAaPsnDVj"},{url:"/_next/static/chunks/app/main/library/student/reading/%5BhomeworkId%5D/page-fcffaa9ff10880bb.js",revision:"lQdiqKlko0W9aAaPsnDVj"},{url:"/_next/static/chunks/app/main/library/student/reading/page-b37fee54f7260144.js",revision:"lQdiqKlko0W9aAaPsnDVj"},{url:"/_next/static/chunks/app/main/library/student/speaking/%5BhomeworkId%5D/page-2ec5b2d6c66ebb79.js",revision:"lQdiqKlko0W9aAaPsnDVj"},{url:"/_next/static/chunks/app/main/library/student/speaking/page-de43a3790df61c61.js",revision:"lQdiqKlko0W9aAaPsnDVj"},{url:"/_next/static/chunks/app/main/library/teacher/listening/%5BhomeworkId%5D/page-2f239743db31f603.js",revision:"lQdiqKlko0W9aAaPsnDVj"},{url:"/_next/static/chunks/app/main/library/teacher/listening/page-c24589c780fc5091.js",revision:"lQdiqKlko0W9aAaPsnDVj"},{url:"/_next/static/chunks/app/main/library/teacher/page-49708f8d0868765d.js",revision:"lQdiqKlko0W9aAaPsnDVj"},{url:"/_next/static/chunks/app/main/library/teacher/reading/%5BhomeworkId%5D/page-64e36e8f1098fd86.js",revision:"lQdiqKlko0W9aAaPsnDVj"},{url:"/_next/static/chunks/app/main/library/teacher/reading/page-d7f853b99fae0486.js",revision:"lQdiqKlko0W9aAaPsnDVj"},{url:"/_next/static/chunks/app/main/library/teacher/speaking/%5BhomeworkId%5D/page-de5f10d1f0be2403.js",revision:"lQdiqKlko0W9aAaPsnDVj"},{url:"/_next/static/chunks/app/main/library/teacher/speaking/page-ddd393a0b91c1327.js",revision:"lQdiqKlko0W9aAaPsnDVj"},{url:"/_next/static/chunks/app/page-67d5e98c3e29b44c.js",revision:"lQdiqKlko0W9aAaPsnDVj"},{url:"/_next/static/chunks/app/test/page-a19ba45c52ab310b.js",revision:"lQdiqKlko0W9aAaPsnDVj"},{url:"/_next/static/chunks/bc9c3264-15c1f0b661665235.js",revision:"lQdiqKlko0W9aAaPsnDVj"},{url:"/_next/static/chunks/ca377847-64aaa5788badee79.js",revision:"lQdiqKlko0W9aAaPsnDVj"},{url:"/_next/static/chunks/d622d42c-5b6d970b82ad676c.js",revision:"lQdiqKlko0W9aAaPsnDVj"},{url:"/_next/static/chunks/ec3863c0-0c541fcb7a43dd5f.js",revision:"lQdiqKlko0W9aAaPsnDVj"},{url:"/_next/static/chunks/f1dbb792-652abac9db3871d8.js",revision:"lQdiqKlko0W9aAaPsnDVj"},{url:"/_next/static/chunks/f4e5f4e1-9d862876aaeb6343.js",revision:"lQdiqKlko0W9aAaPsnDVj"},{url:"/_next/static/chunks/fd9d1056-81eab0bbd26b1eb6.js",revision:"lQdiqKlko0W9aAaPsnDVj"},{url:"/_next/static/chunks/framework-4498e84bb0ba1830.js",revision:"lQdiqKlko0W9aAaPsnDVj"},{url:"/_next/static/chunks/main-a17035e5b6dbc2da.js",revision:"lQdiqKlko0W9aAaPsnDVj"},{url:"/_next/static/chunks/main-app-5ae0005219bfee4c.js",revision:"lQdiqKlko0W9aAaPsnDVj"},{url:"/_next/static/chunks/pages/_app-a88fc46701f6c6d9.js",revision:"lQdiqKlko0W9aAaPsnDVj"},{url:"/_next/static/chunks/pages/_error-e092f2694d86fff0.js",revision:"lQdiqKlko0W9aAaPsnDVj"},{url:"/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js",revision:"837c0df77fd5009c9e46d446188ecfd0"},{url:"/_next/static/chunks/webpack-84cd78a0a4607d1c.js",revision:"lQdiqKlko0W9aAaPsnDVj"},{url:"/_next/static/css/0f95cc300e539de3.css",revision:"0f95cc300e539de3"},{url:"/_next/static/css/6122e5b27df29a0c.css",revision:"6122e5b27df29a0c"},{url:"/_next/static/css/6f034f8ec6f90d29.css",revision:"6f034f8ec6f90d29"},{url:"/_next/static/css/854eb55ebbd65909.css",revision:"854eb55ebbd65909"},{url:"/_next/static/css/b520a8fbfc31c3a2.css",revision:"b520a8fbfc31c3a2"},{url:"/_next/static/css/ba6057dd988749d5.css",revision:"ba6057dd988749d5"},{url:"/_next/static/css/efeac11ea3db668a.css",revision:"efeac11ea3db668a"},{url:"/_next/static/lQdiqKlko0W9aAaPsnDVj/_buildManifest.js",revision:"c1d0d17a0e43a3061959521d2d0f78ba"},{url:"/_next/static/lQdiqKlko0W9aAaPsnDVj/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/media/Backpack.a332b464.png",revision:"27947bbbf5cbbd21b602db2d61b288ab"},{url:"/_next/static/media/다운로드.0a6736c3.png",revision:"a339a9b08f25958aed1e89fd5276c653"},{url:"/_next/static/media/열기.d76e18ac.png",revision:"af63e487e055e5f1ef2cbdebb4678cdc"},{url:"/_next/static/media/회원가입.98773a12.png",revision:"1d7e49183301630131638804cfc2ab4f"},{url:"/asset-headphonebook-450x450.png",revision:"c6d6e982650f1076980a355c7c6d0fde"},{url:"/dashboard.png",revision:"18126b4ddc6d44516f1d78f708f57c01"},{url:"/firebase-messaging-sw.js",revision:"b93916301db129f1e8774595ae6fcc7e"},{url:"/icon-192x192.png",revision:"76fcd20cd2feaa441edf3b069c672b65"},{url:"/icon-256x256.png",revision:"57945fb489acae6781be59b471100d97"},{url:"/icon-384x384.png",revision:"5137873f70752f5c8975060481099805"},{url:"/icon-512x512.png",revision:"bd53395c30ccf5d090affeac6b8f1bcf"},{url:"/logo.png",revision:"80edab507375153931f236468aa97ae5"},{url:"/manifest.json",revision:"baeca1a8e628820dbd20db13a1d632f5"},{url:"/next.svg",revision:"8e061864f388b47f33a1c3780831193e"},{url:"/start-logo.svg",revision:"7e88a00bbb85e52623977645295eb895"},{url:"/vercel.svg",revision:"61c6b19abff40ea7acd577be818f3976"}],{ignoreURLParametersMatching:[]}),s.cleanupOutdatedCaches(),s.registerRoute("/",new s.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:s,response:a,event:e,state:i})=>a&&"opaqueredirect"===a.type?new Response(a.body,{status:200,statusText:"OK",headers:a.headers}):a}]}),"GET"),s.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new s.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new s.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),s.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new s.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new s.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),s.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new s.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new s.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),s.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new s.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new s.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),s.registerRoute(/\/_next\/image\?url=.+$/i,new s.StaleWhileRevalidate({cacheName:"next-image",plugins:[new s.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),s.registerRoute(/\.(?:mp3|wav|ogg)$/i,new s.CacheFirst({cacheName:"static-audio-assets",plugins:[new s.RangeRequestsPlugin,new s.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),s.registerRoute(/\.(?:mp4)$/i,new s.CacheFirst({cacheName:"static-video-assets",plugins:[new s.RangeRequestsPlugin,new s.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),s.registerRoute(/\.(?:js)$/i,new s.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new s.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),s.registerRoute(/\.(?:css|less)$/i,new s.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new s.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),s.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new s.StaleWhileRevalidate({cacheName:"next-data",plugins:[new s.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),s.registerRoute(/\.(?:json|xml|csv)$/i,new s.NetworkFirst({cacheName:"static-data-assets",plugins:[new s.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),s.registerRoute((({url:s})=>{if(!(self.origin===s.origin))return!1;const a=s.pathname;return!a.startsWith("/api/auth/")&&!!a.startsWith("/api/")}),new s.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new s.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),s.registerRoute((({url:s})=>{if(!(self.origin===s.origin))return!1;return!s.pathname.startsWith("/api/")}),new s.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new s.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),s.registerRoute((({url:s})=>!(self.origin===s.origin)),new s.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new s.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
