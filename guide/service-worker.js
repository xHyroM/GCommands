if(!self.define){let e,s={};const a=(a,i)=>(a=new URL(a+".js",i).href,s[a]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=s,document.head.appendChild(e)}else e=a,importScripts(a),s()})).then((()=>{let e=s[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(i,d)=>{const n=e||("document"in self?document.currentScript.src:"")||location.href;if(s[n])return;let c={};const r=e=>a(e,n),t={module:{uri:n},exports:c,require:r};s[n]=Promise.all(i.map((e=>t[e]||r(e)))).then((e=>(d(...e),c)))}}define(["./workbox-0dfb1c68"],(function(e){"use strict";e.setCacheNameDetails({prefix:"mr-hope"}),self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.clientsClaim(),e.precacheAndRoute([{url:"assets/css/0.styles.1dda2d36.css",revision:"50f8d502c7246df103cc4d5baabd5411"},{url:"assets/img/danger-dark.7b1d6aa1.svg",revision:"7b1d6aa1bdcf013d0edfe316ab770f8e"},{url:"assets/img/danger.b143eda2.svg",revision:"b143eda243548a9982491dca4c81eed5"},{url:"assets/img/default-skin.b257fa9c.svg",revision:"b257fa9c5ac8c515ac4d77a667ce2943"},{url:"assets/img/info-dark.f8a43cf6.svg",revision:"f8a43cf67fa96a27a078530a3a43253c"},{url:"assets/img/info.88826912.svg",revision:"88826912d81d91c9e2d03164cd1481a1"},{url:"assets/img/search.83621669.svg",revision:"83621669651b9a3d4bf64d1a670ad856"},{url:"assets/img/tip-dark.075a244c.svg",revision:"075a244c83d1403c167defe81b4d7fe7"},{url:"assets/img/tip.a2b80aa5.svg",revision:"a2b80aa50b769a26da12fe352322a657"},{url:"assets/img/warning-dark.aac7e30c.svg",revision:"aac7e30c5fafc6748e21f7a9ef546698"},{url:"assets/img/warning.ec428b6d.svg",revision:"ec428b6d6d45ac5d0c610f08d757f40f"},{url:"assets/js/45.4e6c7bcd.js",revision:"6cf266519bee965869e546a8cc8e9dd5"},{url:"assets/js/46.8925b7d3.js",revision:"bce467b915dd0c08cb2f56c8adce29b9"},{url:"assets/js/app.481e1825.js",revision:"eb7c50754090f0a6f5a6e72b8c1ea78a"},{url:"assets/js/layout-Blog.872fe4b7.js",revision:"9d37428f5ac5ce18d1029cfecf499d20"},{url:"assets/js/layout-Layout.0f99aa0c.js",revision:"a0901909a3803a3409db0dd824fea090"},{url:"assets/js/layout-NotFound.7e414c35.js",revision:"0dd465aa8a10a231b6a4dde76da734a9"},{url:"assets/js/layout-Slide.4105128c.js",revision:"22eeb5312c6eda496e47be071a8f11a8"},{url:"assets/js/page-AdditionalFeatures.ecfb4ab5.js",revision:"dd3affdbeebd1bc0a87d8d9e3a216d95"},{url:"assets/js/page-ContextMenus.c8b6b154.js",revision:"0ab41d1de64b1f630e2ce1ae93e43584"},{url:"assets/js/page-Creatingacomponent.f29d9016.js",revision:"0e1859c7d3cac961ab15501b0f1fd255"},{url:"assets/js/page-Creatingaevent.e99db17a.js",revision:"43abacb07ba140061450155bcd1c699b"},{url:"assets/js/page-Creatingyourfirstcommand.0c7ba392.js",revision:"0dcc1d071c6bdcc3485e24e420a56ee3"},{url:"assets/js/page-Example.941635f9.js",revision:"ee75dd83f745e6dcb35acc5f879cab31"},{url:"assets/js/page-FAQ.60624cd9.js",revision:"135fc8a3796083690cfbebb31646dea6"},{url:"assets/js/page-Gettingstarted.6a7524f3.js",revision:"95367d34758e243c0ea1a8f48102ccb4"},{url:"assets/js/page-GuildLanguage.6d7915ca.js",revision:"563518f402d6e74d80658909e39c736d"},{url:"assets/js/page-GuildPrefix.7536ad63.js",revision:"52427c186790ff04d563938dd6eb4689"},{url:"assets/js/page-Home.ffb5ce78.js",revision:"221cb0f6a5048a159ad73b2518b067c4"},{url:"assets/js/page-Ikeepgettingtheerror403MissingAccess.a32e0cb5.js",revision:"2b2fac9c55c0b4af98d61a87b0de532c"},{url:"assets/js/page-Ikeepgettingtheerrorguildisnotdefined.4b8e6541.js",revision:"6276061a725036d487da40c2ae009709"},{url:"assets/js/page-Inhibitor.7bc0c671.js",revision:"e5fdc0e007d96f2f97273d3b1cf1bf88"},{url:"assets/js/page-InstallingNodejsand@gcommandsvoice.810e2c78.js",revision:"26b7d5c56caa461eb8e1e21f9821c4d7"},{url:"assets/js/page-InstallingNodejsandGCommands.a314897c.js",revision:"a5d45a8365b03fe57b306ed38391e63f"},{url:"assets/js/page-Introduction.c1fe08d5.js",revision:"7ada3fb6095b49be8abcca35c1e40576"},{url:"assets/js/page-Makingabasicbot.5a01be8e.js",revision:"87df43d3ce4e62d843df14313b2c1154"},{url:"assets/js/page-Mentions.7d11342d.js",revision:"5d0711f995a6e5b52ba0c2804c5f58fc"},{url:"assets/js/page-MessageComponents.bc3ae791.js",revision:"695d4c3925768004745d47c63ea2f22c"},{url:"assets/js/page-MoreEvents.4c874c61.js",revision:"10cbb7ea2b796addb1a411f74a46a0c8"},{url:"assets/js/page-Setup.09fdcc7d.js",revision:"39ae5bf7bad3383bbba57a25e1883da4"},{url:"assets/js/page-ThealwaysObtainoptionincommands.4230c3ae.js",revision:"8ddae27588fb527647bc6e51f7c75a86"},{url:"assets/js/page-Updatingfromv2tov3.cc016a54.js",revision:"c7012dddd4ba8a87069e049f2dd898a8"},{url:"assets/js/page-Updatingfromv3tov4.9ed765cd.js",revision:"38ca41b158b6f8b173350c8f85b60f29"},{url:"assets/js/page-Updatingfromv4tov5.58386d67.js",revision:"fe5f49f8d52bcc563e8cbb8d9f367faf"},{url:"assets/js/page-Updatingfromv5tov6.38d22d0e.js",revision:"da494ac33e62dc5f1d38fe5abaa2ae88"},{url:"assets/js/page-Updatingfromv6tov7.7c8e0678.js",revision:"99faa0aca8e43b40022dc814d9d77058"},{url:"assets/js/page-Updatingfromv7tov8.43e0210e.js",revision:"06f7fdd25a8ad951f93836b91c229592"},{url:"assets/js/page-Usingacustomlanguagefile.34535455.js",revision:"2e914d027318bf2c64950d139be8ad57"},{url:"assets/js/page-Usingargumentsincommands.c58f4f97.js",revision:"939619d52eba584ee671f8158c53a779"},{url:"assets/js/page-Usingsubcommands.dc276c1d.js",revision:"4dcb2bcdfc6e1fc827de4fa2cd3bad31"},{url:"assets/js/page-Usingthecommandbuilders.6efdb7ef.js",revision:"4d09d2dac6087599b92df95be9041267"},{url:"assets/js/page-Usingtheeventbuilder.9b634141.js",revision:"5777bd87c062890899cb37941b97c534"},{url:"assets/js/page-Whatarealltheobjectsinthefirstargumentofacommand.f514d50f.js",revision:"d6fc788eadac3254ca9432f5e01905a5"},{url:"assets/js/vendors~layout-Blog~layout-Layout~layout-NotFound.36a115fd.js",revision:"45d22ec5a11824b582a382a2cf398d7e"},{url:"assets/js/vendors~layout-Blog~layout-Layout~layout-NotFound~layout-Slide.2cf2cb47.js",revision:"cee7413c059f90b02f8a3f7badff5b67"},{url:"assets/js/vendors~layout-Layout.17f0c660.js",revision:"b55c239b0a70f1ef0d429deaeff764e2"},{url:"assets/js/vendors~photo-swipe.d3fc4295.js",revision:"4f629bb94b765c8a3a473a4909072c90"},{url:"404.html",revision:"92997e7f5842e09c12439fe25f91ee3e"},{url:"guide/additional/fromv2tov3/index.html",revision:"b1f7f77973ce968465709ec9ae70baf3"},{url:"guide/additional/fromv3tov4/index.html",revision:"27f57d0ca4e2484972a09a5c7fe017ba"},{url:"guide/additional/fromv4tov5/index.html",revision:"8ade944793e59ac4e7e2fe933cda9643"},{url:"guide/additional/fromv5tov6/index.html",revision:"460b3f4ac1458c705d90ea74f21d9176"},{url:"guide/additional/fromv6tov7/index.html",revision:"ca94b6587c1fa9adac3af77836a2830e"},{url:"guide/additional/fromv7tov8/index.html",revision:"87bd3916249ccf441b1e0a0dcb33d4fc"},{url:"guide/commands/additionalfeatures/index.html",revision:"9291ea7fdc8d7b88decbaf83c5e535ef"},{url:"guide/commands/first/index.html",revision:"be4755645c846f4d8339d111ec1ac7a5"},{url:"guide/commands/gettingstarted/index.html",revision:"faf1b31f941c52437af1405863b3bbc1"},{url:"guide/commands/usingargs/index.html",revision:"35b4fdb95652d7a91875d067533c06d1"},{url:"guide/commands/usingbuilders/index.html",revision:"0f588066f543ea49256214387b066a8b"},{url:"guide/commands/usingsub/index.html",revision:"bc1bc236113e2e225135a00a77c24c53"},{url:"guide/components/create/index.html",revision:"c456b53409788e27f02ea34d1f7a928a"},{url:"guide/components/setup/index.html",revision:"361ac6e02c2be63b27394121cec659f8"},{url:"guide/database/guildlanguage/index.html",revision:"09e9e0306c65391a1f0788f893413c8c"},{url:"guide/database/prefix/index.html",revision:"fea34714a6d376a8639d49f44d4a8b11"},{url:"guide/database/setup/index.html",revision:"0a9209f2ed9eeaa23abbd19d25cbf6bd"},{url:"guide/events/create/index.html",revision:"1cd2551900fa7419de69fa2c3533e6bd"},{url:"guide/events/moreevents/index.html",revision:"2a328a159942f28fceb2b91a4dd9aebb"},{url:"guide/events/setup/index.html",revision:"e97673964c8100aa039506d2c35b73d5"},{url:"guide/events/usingbuilder/index.html",revision:"4db3b43a74ba8b8b213d754d3e42e130"},{url:"guide/gettingstarted/basicbot/index.html",revision:"d35f1283edbd595346df15bf26c8e6aa"},{url:"guide/gettingstarted/installation/index.html",revision:"d6d0f3b517371fc8b6dd9df22e9c2852"},{url:"guide/index.html",revision:"32a0218ea2df28f668fd8da9b4b3fbdd"},{url:"guide/interactions/contextmenus/index.html",revision:"e516c134ebaa69c5c1f5ddbbf8893331"},{url:"guide/interactions/messagecomponents/index.html",revision:"81826ae5916436cddd630f51e7ba6cfa"},{url:"guide/other/alwaysobtain/index.html",revision:"a2cfd5b616558d8f55d3c40febb4c57b"},{url:"guide/other/customlanguagefile/index.html",revision:"584c70924b124d71f37050da7fee38a8"},{url:"guide/other/inhibitor/index.html",revision:"51a81231fa442688cf11065a07601b9c"},{url:"guide/other/mentions/index.html",revision:"579a70c85371de0ac97044711974ff4f"},{url:"guide/questions/commandrunoptions/index.html",revision:"dba216459714a93072cd10beb5c57da3"},{url:"guide/questions/guildundefined/index.html",revision:"5e202f5c472dc9f01f3a991caa88f968"},{url:"guide/questions/missingacces/index.html",revision:"a69a51fa623deeff4722727022fbc2b8"},{url:"index.html",revision:"ba7e406ebe26077482ffa4f6e431836e"},{url:"voice/beginner/example/index.html",revision:"77eb2382c3ef3e9950f09fd9c5914b1f"},{url:"voice/beginner/faq/index.html",revision:"9825368d0553d3ab4deee7a8e56a875b"},{url:"voice/beginner/setup/index.html",revision:"7002facdfcb677432986ddefc061dd0a"},{url:"voice/index.html",revision:"939144d612af35d4e0abb6daa9b27115"}],{}),e.cleanupOutdatedCaches()}));
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
