"use strict";var precacheConfig=[["/pet-finder/build/index.html","0e8be687985ac8db48b837b90c422db1"],["/pet-finder/build/static/css/main.8228762a.css","5b178303a454560166a8aa484b0dcec6"],["/pet-finder/build/static/js/main.94446769.js","0755a35e73f037f4f2984c7d04c733ef"],["/pet-finder/build/static/media/angle-down-solid.ec50b05f.svg","ec50b05f6924e392f910f10e4c62a76a"],["/pet-finder/build/static/media/bars-solid.311d2fad.svg","311d2fad47330aa11ae7b61b27188f87"],["/pet-finder/build/static/media/boyCat.63003ac4.jpg","63003ac4690522da8571d37c7879be68"],["/pet-finder/build/static/media/bullDog.6f396da1.jpeg","6f396da1ba1e816d6d9fe64688483eac"],["/pet-finder/build/static/media/cat-solid.f7268731.svg","f7268731b0cd53f2e16124897e8a50cc"],["/pet-finder/build/static/media/chevron-right-solid.24d33763.svg","24d33763c7beaadf176441c668ac1cec"],["/pet-finder/build/static/media/dog-solid.71701e36.svg","71701e3645fcab14de0829c19022ab1f"],["/pet-finder/build/static/media/facebook-f-brands.5b9773b8.svg","5b9773b8d40086d90218e1a741d3c79c"],["/pet-finder/build/static/media/heart-regular.cf81168e.svg","cf81168e751b6ef6c4e743c1736ec2d8"],["/pet-finder/build/static/media/heart-solid.ac40d48c.svg","ac40d48cdfd18da627a9d5389797a567"],["/pet-finder/build/static/media/instagram-brands.d006ae1c.svg","d006ae1c712292b7cf30ab84a8cb35d8"],["/pet-finder/build/static/media/muttPuppy.a2bd1f28.jpg","a2bd1f283bc9e8932ec618ea308b4cc3"],["/pet-finder/build/static/media/paw-solid-white.ab8ebd17.png","ab8ebd17726f112fb0ec2d7d66ea262c"],["/pet-finder/build/static/media/paw-solid.30aff7e1.svg","30aff7e10ed6964cce4053712b73b4b5"],["/pet-finder/build/static/media/pinterest-p-brands.67f88cb1.svg","67f88cb1190d16b5c40e5126d2e6cfc9"],["/pet-finder/build/static/media/search-solid.25ad807f.svg","25ad807f2b37842e6ababf31a7e2005a"],["/pet-finder/build/static/media/search-solid.fdbc2b7e.svg","fdbc2b7e2f8b34fa1678c27df2cacde5"],["/pet-finder/build/static/media/times-solid.78dc92e8.svg","78dc92e820725b86a3e7546e2375967f"],["/pet-finder/build/static/media/twitter-brands.8e9e8ab6.svg","8e9e8ab64f37592807062331e4677f45"],["/pet-finder/build/static/media/youtube-brands.87787d8f.svg","87787d8ff3bd6f8112a1d511c405b1bf"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(t){return t.redirected?("body"in t?Promise.resolve(t.body):t.blob()).then(function(e){return new Response(e,{headers:t.headers,status:t.status,statusText:t.statusText})}):Promise.resolve(t)},createCacheKey=function(e,t,a,n){var i=new URL(e);return n&&i.pathname.match(n)||(i.search+=(i.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),i.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,a){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(t){return a.every(function(e){return!e.test(t[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],n=new URL(t,self.location),i=createCacheKey(n,hashParamName,a,/\.\w{8}\./);return[n.toString(),i]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(n){return setOfCachedUrls(n).then(function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!a.has(t)){var e=new Request(t,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+t+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return n.put(t,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(t){return t.keys().then(function(e){return Promise.all(e.map(function(e){if(!a.has(e.url))return t.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(t){if("GET"===t.request.method){var e,a=stripIgnoredUrlParameters(t.request.url,ignoreUrlParametersMatching),n="index.html";(e=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,n),e=urlsToCacheKeys.has(a));var i="/pet-finder/build/index.html";!e&&"navigate"===t.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],t.request.url)&&(a=new URL(i,self.location).toString(),e=urlsToCacheKeys.has(a)),e&&t.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',t.request.url,e),fetch(t.request)}))}});