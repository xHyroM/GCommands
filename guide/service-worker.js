if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let s=Promise.resolve();return a[e]||(s=new Promise((async s=>{if("document"in self){const a=document.createElement("script");a.src=e,document.head.appendChild(a),a.onload=s}else importScripts(e),s()}))),s.then((()=>{if(!a[e])throw new Error(`Module ${e} didn’t register its module`);return a[e]}))},s=(s,a)=>{Promise.all(s.map(e)).then((e=>a(1===e.length?e[0]:e)))},a={require:Promise.resolve(s)};self.define=(s,i,d)=>{a[s]||(a[s]=Promise.resolve().then((()=>{let a={};const r={uri:location.origin+s.slice(1)};return Promise.all(i.map((s=>{switch(s){case"exports":return a;case"module":return r;default:return e(s)}}))).then((e=>{const s=d(...e);return a.default||(a.default=s),a}))})))}}define("./service-worker.js",["./workbox-2c301fb6"],(function(e){"use strict";e.setCacheNameDetails({prefix:"mr-hope"}),self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.clientsClaim(),e.precacheAndRoute([{url:"assets/css/0.styles.62864a43.css",revision:"86c69f814d202e3fe6c8c1c4629d6808"},{url:"assets/img/danger-dark.7b1d6aa1.svg",revision:"7b1d6aa1bdcf013d0edfe316ab770f8e"},{url:"assets/img/danger.b143eda2.svg",revision:"b143eda243548a9982491dca4c81eed5"},{url:"assets/img/default-skin.b257fa9c.svg",revision:"b257fa9c5ac8c515ac4d77a667ce2943"},{url:"assets/img/info-dark.f8a43cf6.svg",revision:"f8a43cf67fa96a27a078530a3a43253c"},{url:"assets/img/info.88826912.svg",revision:"88826912d81d91c9e2d03164cd1481a1"},{url:"assets/img/search.83621669.svg",revision:"83621669651b9a3d4bf64d1a670ad856"},{url:"assets/img/tip-dark.075a244c.svg",revision:"075a244c83d1403c167defe81b4d7fe7"},{url:"assets/img/tip.a2b80aa5.svg",revision:"a2b80aa50b769a26da12fe352322a657"},{url:"assets/img/warning-dark.aac7e30c.svg",revision:"aac7e30c5fafc6748e21f7a9ef546698"},{url:"assets/img/warning.ec428b6d.svg",revision:"ec428b6d6d45ac5d0c610f08d757f40f"},{url:"assets/js/31.e2932c7b.js",revision:"cbba81564cb5930b0041ad21e4a7f292"},{url:"assets/js/32.2523a8d2.js",revision:"534c806929377f9aa405b70d70daeed9"},{url:"assets/js/app.7a02e7b2.js",revision:"34ed12a6e5edbaae261fe6a29837ac3d"},{url:"assets/js/layout-Blog.872fe4b7.js",revision:"9d37428f5ac5ce18d1029cfecf499d20"},{url:"assets/js/layout-Layout.0f99aa0c.js",revision:"a0901909a3803a3409db0dd824fea090"},{url:"assets/js/layout-NotFound.3d8f8870.js",revision:"0dd465aa8a10a231b6a4dde76da734a9"},{url:"assets/js/layout-Slide.7680046e.js",revision:"22eeb5312c6eda496e47be071a8f11a8"},{url:"assets/js/page-AdditionalFeatures.c33c4324.js",revision:"ba57e299af6268e7691cd54983efc0ff"},{url:"assets/js/page-ContextMenus.36451c7a.js",revision:"b5634a99e59ea6ed0e6cf2f60792cc72"},{url:"assets/js/page-Database.db293e58.js",revision:"53d403405ec537f3ade445b6b9f81a6b"},{url:"assets/js/page-Events.91abcd9d.js",revision:"6cac578b503ac4b23f49411048e8f8f1"},{url:"assets/js/page-Example.ca06e8ce.js",revision:"9e614364cb767a4f9cee687b721157d6"},{url:"assets/js/page-FAQ.ea30f112.js",revision:"9198c84b09c064229d6f5d62d5ff9df5"},{url:"assets/js/page-Home.4c436152.js",revision:"81ef60c76f5f5d87b2630ff8f79efc7d"},{url:"assets/js/page-Inhibitor.3558f2b3.js",revision:"9bf22e8cef223a19d23df4d5f4a38412"},{url:"assets/js/page-InstallingNodejsand@gcommandsvoice.53247d86.js",revision:"e1740c64686e91b13dc4a903bde39cf3"},{url:"assets/js/page-InstallingNodejsandGCommands.ffa59649.js",revision:"01ced08eda286323ea173f95042b8e9c"},{url:"assets/js/page-Introduction.9f8398eb.js",revision:"9f07071606ab8d3e6a25fb21d3c1f059"},{url:"assets/js/page-Makingabasicbot.46eed902.js",revision:"ae975b3bef341847c12fed8661e3f0ea"},{url:"assets/js/page-Mentions.f9674d58.js",revision:"84f69f35259e6dbbbb202508b41144ba"},{url:"assets/js/page-MessageComponents.70ddece1.js",revision:"6e20237074067a480e9b36766552278b"},{url:"assets/js/page-MoreEvents.caa47296.js",revision:"a99c5e104c8b3209cca78f4e0d4ddd9e"},{url:"assets/js/page-SlashCommands.ca197adf.js",revision:"53fdafeef39b49e9b509a55b59bfb7ed"},{url:"assets/js/page-Updatingfromv2tov3.7d356b88.js",revision:"c181853fe4d2352319c2af144b2ab7e3"},{url:"assets/js/page-Updatingfromv3tov4.878becc1.js",revision:"f66b92a23c0b5fb297094219e2ce67af"},{url:"assets/js/page-Updatingfromv4tov5.3f39e7cf.js",revision:"6f566c4dce831456e7af5fc6d9a42c88"},{url:"assets/js/page-Updatingfromv5tov6.0fb282d4.js",revision:"3341ebad32113ad83f0efb1362c261cc"},{url:"assets/js/page-UsingargumentsinCommands.7e31fe8e.js",revision:"6d5be2044153f8f50ab8308fb25282a6"},{url:"assets/js/vendors~layout-Blog~layout-Layout~layout-NotFound.5156f8a3.js",revision:"ea58e6536feab0dd9fa6bb89d99d1aab"},{url:"assets/js/vendors~layout-Blog~layout-Layout~layout-NotFound~layout-Slide.b4ed0d1d.js",revision:"cee7413c059f90b02f8a3f7badff5b67"},{url:"assets/js/vendors~layout-Layout.ba529c81.js",revision:"cfffff4e7f3f8a14b8c059d76c26eaea"},{url:"assets/js/vendors~photo-swipe.0dc506e3.js",revision:"9b726fc6aa2b5d8b7430aa8d7c4d1d74"},{url:"404.html",revision:"d400aa88dfa9974191d99206c2b03543"},{url:"guide/additional/fromv2tov3/index.html",revision:"58b0dda76f5827c6adb81b31a60281b4"},{url:"guide/additional/fromv3tov4/index.html",revision:"dcec75b31ac03043bd34526ec52b60e2"},{url:"guide/additional/fromv4tov5/index.html",revision:"01df770cb3fa7ed563f32a9f173614a4"},{url:"guide/additional/fromv5tov6/index.html",revision:"0cad165c92de7a474cde125d8c7854f2"},{url:"guide/arguments/usingargsincmd/index.html",revision:"967de327922428e84893ae31ef77cc21"},{url:"guide/beginner/additionalfeatures/index.html",revision:"92793b38f04eed602ace57596c2821ae"},{url:"guide/beginner/basicbot/index.html",revision:"cf475211b0e3f873b7fa14023ae1ff4e"},{url:"guide/beginner/database/index.html",revision:"0791d0055e9dd227bc4dfdd1f01b1254"},{url:"guide/beginner/events/index.html",revision:"907bccb589cc4dcac5e94b8f3de16876"},{url:"guide/faq/index.html",revision:"b52d73a32c1e584f6a2e298c643bac6c"},{url:"guide/index.html",revision:"b7b929aefb989f0bac09c6eb40869cbe"},{url:"guide/interactions/contextmenus/index.html",revision:"12559b8eee25fc9bef3ed8bafa872d8e"},{url:"guide/interactions/messagecomponents/index.html",revision:"5c5f026858181ec51813ee56592f2714"},{url:"guide/interactions/slashcommands/index.html",revision:"6d28e32cee67f091dc2461703ab99cf9"},{url:"guide/miscellaneous/inhibitor/index.html",revision:"68353b41948b9895146e771246201917"},{url:"guide/miscellaneous/mentions/index.html",revision:"4b23bb74fd5d18058640d391e215912a"},{url:"guide/miscellaneous/moreevents/index.html",revision:"926a92a0e9f3269fba921d9aeb8de41c"},{url:"guide/setup/index.html",revision:"837ee9d773a862d649b2cf642d606058"},{url:"index.html",revision:"f1643cbd9535d508040fd7969f148e4f"},{url:"voice/beginner/example/index.html",revision:"e4bb13c4e3f2f4021c80e538686dff5b"},{url:"voice/beginner/faq/index.html",revision:"1dd56fda6844ef0dfa1287ee95684949"},{url:"voice/beginner/setup/index.html",revision:"421b3def60b9788b446818ca9e82a9fe"},{url:"voice/index.html",revision:"e8688a06b95115cabbd11557e30f8493"}],{}),e.cleanupOutdatedCaches()}));
//# sourceMappingURL=service-worker.js.map
addEventListener("message", (event) => {
  const replyPort = event.ports[0];
  const message = event.data;
  if (replyPort && message && message.type === "skip-waiting")
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        (error) => replyPort.postMessage({ error })
      )
    );
});
