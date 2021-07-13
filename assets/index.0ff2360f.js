import{C as t,r as e,c as s,a as n,u as o,d as r,o as a,b as l,e as i,t as c,f as d,w as u,g as h,h as p,i as m,j as g,k as f,l as v,m as b,v as w,n as x,p as y,F as k,q as _,T as M,s as S,x as j,y as C,z as R,A as T,B as G,D as O,E as A,G as z,H as E,I as L,J as P,K as $}from"./vendor.e3d02f40.js";const D=t=>{if(!t.ok)throw new Error("Failed to fetch docs data file from GitHub");return t.json()};const N=new Set(["docs","master","dev"]);var W=new class{constructor(t){var e,s,n,o,r;this.options=t,this.id=this.options.id,this.name=this.options.name,this.global=this.options.global,this.repo=this.options.repo,this.defaultTag=null!=(e=this.options.defaultTag)?e:"master",this.defaultFile=null!=(s=this.options.defaultFile)?s:{category:"general",id:"welcome"},this.source=null!=(n=this.options.source)?n:`https://github.com/${this.repo}/blob/`,this.branchFilter=null!=(o=this.options.branchFilter)?o:t=>"master"!==t,this.tagFilter=null!=(r=this.options.tagFilter)?r:()=>!0,this.tags=null,this.recentTag=null}fetchTags(){return this.tags?Promise.resolve(this.tags):Promise.all([fetch(`https://api.github.com/repos/${this.repo}/branches`).then(D),fetch(`https://api.github.com/repos/${this.repo}/tags`).then(D)]).catch((t=>{if(localStorage[`source-${this.id}`]){console.error(t);const e=JSON.parse(localStorage[`source-${this.id}`]);return[e.branches,e.tags]}throw t})).then((e=>{const[s,n]=e;this.tags=[this.defaultTag],localStorage[`source-${this.id}`]=JSON.stringify({branches:s,tags:n});for(const t of s)t.name!==this.defaultTag&&this.branchFilter(t.name)&&this.tags.push(t.name);const o={};for(const r of n)if(t.valid(r.name)){const e=`${t.major(r.name)}.${t.minor(r.name)}`,s=t.patch(r.name);if(s<o[e])continue;o[e]=s}for(const r of n)if(r.name!==this.defaultTag&&this.tagFilter(r.name)){if(t.valid(r.name)){const e=`${t.major(r.name)}.${t.minor(r.name)}`;if(t.patch(r.name)<o[e])continue}this.tags.push(r.name)}return this.tags}))}async fetchDocs(t){const e=await fetch(`https://raw.githubusercontent.com/${this.repo}/docs/docs/${t}.json`);return D(e)}}({id:"main",name:"Main library",global:"GCommands",repo:"Garlic-Team/GCommands",defaultTag:"main",branchFilter:t=>!N.has(t)&&!t.startsWith("dependabot/"),tagFilter:e=>t.gte(e,"9.0.0")});const I=e(!1);class U{constructor(t,e){this.name=t.toLowerCase(),this.related=new Set([e])}addRelated(t){this.related.add(t)}matches(t){return t.includes(this.name)}}var J,F;(F=J||(J={}))[F.Class=0]="Class",F[F.Method=1]="Method",F[F.Property=2]="Property",F[F.Events=3]="Events",F[F.Typedefs=4]="Typedefs";class B{constructor(t,e,s,n,o,r){switch(this.name=t,this.type=e,this.parentName=s,this.parentType=n,this.access=o,this.scope=r,e){case 0:case 4:this.computedName=t;break;case 1:this.computedName=`${null!=s?s:""}.${t}()`;break;case 2:this.computedName=`${null!=s?s:""}.${t}`;break;case 3:this.computedName=`${null!=s?s:""}#${t}`}this.nameLowerCase=t.toLowerCase(),this.cleanedComputedName=this.computedName.replace(/[().#]/,"").toLowerCase()}get isPriority(){return 0===this.type||4===this.type}getLinkPath(){var t,e;if(4===this.type||4===this.parentType)return{name:"docs-source-tag-typedef-typedef",params:{typedef:null!=(t=this.parentName)?t:this.name}};const s={name:"docs-source-tag-class-class",params:{class:null!=(e=this.parentName)?e:this.name}};return 1!==this.type&&2!==this.type||(s.query={scrollTo:this.name}),3===this.type&&(s.query={scrollTo:`e-${this.name}`}),s}}const q=s((()=>Z.state.searchIndex)),Y=s((()=>Z.state.searchRef));function H(t){const e=t.replace(/[\s().#]/g,"").toLowerCase();if(""===e)return[];let s=q.value.reduce(((t,s)=>{if(e.includes(s.name))for(const e of s.related){const n=t.get(e);n?(n.numMatches+=1,n.lengthMatches+=s.name.length):t.set(e,{numMatches:1,lengthMatches:s.name.length})}return t}),new Map);0===s.size&&e.length<10&&(s=q.value.reduce(((t,s)=>{if(s.name.includes(e))for(const e of s.related){const n=t.get(e);n?(n.numMatches+=1,n.lengthMatches+=s.name.length):t.set(e,{numMatches:1,lengthMatches:s.name.length})}return t}),new Map));return Array.from(s.entries()).map((([t,e])=>[Y.value[t],e])).filter((([t])=>"private"!==t.access||I.value)).sort((([t,s],[n,o])=>{let r=0;return t.nameLowerCase===e?r+=t.isPriority?-10:-4:n.nameLowerCase===e&&(r+=n.isPriority?10:4),e.length>=7&&(t.cleanedComputedName.includes(e)&&(r-=30),n.cleanedComputedName.includes(e)&&(r+=30)),s.numMatches===o.numMatches&&(t.isPriority&&(r-=6),n.isPriority&&(r+=6),s.numMatches>1&&(r+=Math.abs(e.length-t.computedName.length)-Math.abs(e.length-n.computedName.length)),r+=o.lengthMatches-s.lengthMatches),o.numMatches-s.numMatches+r})).map((([t,e])=>t))}const V=e(null),K=Symbol("docs"),Z=n({state:{sources:[{source:W,name:W.name,id:W.id}],source:W,tag:W.defaultTag,docs:null,branches:[],file:null,stats:{downloads:`${225e6.toLocaleString()}+`,stars:`${11e3.toLocaleString()}+`,contributors:`${100..toLocaleString()}+`},searchIndex:[],searchRef:[]},mutations:{setSource(t,{source:e}){t.source=e},setTag(t,{tag:e}){t.tag=e},setDocs(t,{docs:e}){t.docs=e},setBranches(t,{branches:e}){t.branches=e},setFile(t,{file:e}){t.file=e},setStats(t,{stats:e}){t.stats=e},setSearchIndex(t,{searchIndex:e,searchRef:s}){t.searchIndex=e,t.searchRef=s}},actions:{fetchStats:async({commit:t})=>{let e=0,s=0,n=0;const o=t=>t.json(),r=()=>{},[a,l,i]=await Promise.all([fetch("https://api.npmjs.org/downloads/range/2013-08-21:2100-08-21/gcommands").then(o,r),fetch("https://api.github.com/repos/Garlic-Team/gcommands").then(o,r),fetch("https://api.github.com/repos/Garlic-Team/gcommands/stats/contributors").then(o,r)]);if(a){e=0;for(const t of a.downloads)e+=t.downloads}l&&(s=l.stargazers_count),i&&(n=i.length),t({type:"setStats",stats:{downloads:`${e.toLocaleString()}+`,stars:`${s.toLocaleString()}+`,contributors:`${n.toLocaleString()}+`}})},fetchDocs:async({commit:t},{inputSource:e,inputTag:s=e.defaultTag})=>{var n,o,r,a;let l;try{l=await e.fetchDocs(s)}catch(h){return t({type:"setDocs",docs:null}),t({type:"setTag",docs:null}),void(V.value=h)}const i=[],c=[];let d=0;const u=(t,e,s,n,o,r)=>{const a=function(t){var e,s;return/^[_A-Z]+$/.test(t)?null!=(e=t.match(/[A-Z]+/g))?e:[]:null!=(s=t.match(/(([A-Z]{2,})(?=[A-Z]))|[A-Z][a-z]+|[a-z]+/g))?s:[]}(t),l=new B(t,e,s,n,o,r);i.push(l);const u=[];for(const i of a){const t=i.toLowerCase();let e=c.findIndex((e=>e.name===t));e>-1?c[e].addRelated(d):e=c.push(new U(t,d))-1,u.push(e)}return d+=1,u};for(const p of l.classes){const t=u(p.name,J.Class,void 0,void 0,p.access,p.scope),e=[];for(const s of null!=(n=p.methods)?n:[])u(s.name,J.Method,p.name,J.Class,s.access,s.scope),e.push(d-1);for(const s of null!=(o=p.props)?o:[])u(s.name,J.Property,p.name,J.Class,s.access,s.scope),e.push(d-1);for(const s of null!=(r=p.events)?r:[])u(s.name,J.Events,p.name,J.Class,s.access,s.scope),e.push(d-1);for(const s of t)for(const t of e)c[s].related.add(t)}for(const p of l.typedefs){const t=u(p.name,J.Typedefs,void 0,void 0,p.access,p.scope),e=[];for(const s of null!=(a=p.props)?a:[])u(s.name,J.Property,p.name,J.Typedefs,s.access,s.scope),e.push(d-1);for(const s of t)for(const t of e)c[s].related.add(t)}t({type:"setSearchIndex",searchIndex:c,searchRef:i}),l.classes.sort(((t,e)=>t.name.localeCompare(e.name))),l.typedefs.sort(((t,e)=>t.name.localeCompare(e.name)));for(const p of l.classes)p.props&&p.props.sort(((t,e)=>t.name.localeCompare(e.name))),p.methods&&p.methods.sort(((t,e)=>t.name.localeCompare(e.name))),p.events&&p.events.sort(((t,e)=>t.name.localeCompare(e.name)));l.links={string:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String",number:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number",bigint:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/BigInt",boolean:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean",symbol:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol",void:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined",Object:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object",Function:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function",function:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function",Array:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array",Set:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set",Map:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map",Date:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date",RegExp:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp",Promise:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise",Error:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error",EventEmitter:"https://nodejs.org/dist/latest/docs/api/events.html#events_class_eventemitter",Timeout:"https://nodejs.org/dist/latest/docs/api/timers.html#timers_class_timeout",Immediate:"https://nodejs.org/dist/latest/docs/api/timers.html#timers_class_immediate",Buffer:"https://nodejs.org/dist/latest/docs/api/buffer.html#buffer_class_buffer",ReadableStream:"https://nodejs.org/dist/latest/docs/api/stream.html#stream_class_stream_readable",ChildProcess:"https://nodejs.org/dist/latest/docs/api/child_process.html#child_process_class_childprocess",Worker:"https://nodejs.org/api/worker_threads.html#worker_threads_class_worker",MessagePort:"https://nodejs.org/api/worker_threads.html#worker_threads_class_messageport"},l.externals=l.externals||[],l.classes=l.classes||[],l.typedefs=l.typedefs||[];for(const p of l.externals)l.links[p.name]=p.see[0].replace(/\{@link\s+(.+?)\s*\}/i,"$1");for(const p of l.classes)l.links[p.name]={name:"docs-source-tag-class-class",params:{class:p.name}};for(const p of l.typedefs)l.links[p.name]={name:"docs-source-tag-typedef-typedef",params:{typedef:p.name}};l.global=e.global,l.source=e.source,l.id=e.id,l.tag=s,t({type:"setDocs",docs:l})},fetchTags:async({commit:t},{currentSource:e})=>{t({type:"setBranches",branches:await e.fetchTags()})}}});function Q(){return o(K)}var X=r({expose:[],setup(t){const e=Q(),n=s((()=>e.state.stats.downloads)),o=s((()=>e.state.stats.stars)),r=s((()=>e.state.stats.contributors));return(t,e)=>(a(),l("ul",null,[i("li",null,c(d(n))+" downloads",1),i("li",null,c(d(o))+" stars",1),i("li",null,c(d(r))+" contributors",1)]))}});const tt={class:"bg-discord-blurple-560"},et={class:"max-w-3xl mx-auto text-center px-16 pt-10 pb-4 text-gray-200"},st=h("GCommands"),nt=i("p",{class:"mb-4"},[h("An easy to use, advanced Discord Slash commands"),i("br"),h("Website originally created by the discord.js team ")],-1),ot={class:"text-xs break-words-legacy"},rt=i("br",null,null,-1);var at=r({expose:[],setup(t){const s=e("5323e8eab35d450382dbe8c43e5aedc4388a33f3"),n=e(new Date(1626159374586).toUTCString());return(t,e)=>{const o=p("router-link");return a(),l("footer",tt,[i("div",et,[i("strong",null,[i(o,{to:"/"},{default:u((()=>[st])),_:1})]),nt,i(X,{class:"mb-4"}),i("p",ot,[h(" commit: "+c(s.value),1),rt,h(" built at: "+c(n.value),1)])])])}}});const lt={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",width:"1.2em",height:"1.2em",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 24 24"},it=i("g",{fill:"none"},[i("path",{d:"M10 6H6a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-4M14 4h6m0 0v6m0-6L10 14",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"})],-1);var ct={render:function(t,e){return a(),l("svg",lt,[it])}};const dt={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",width:"1.2em",height:"1.2em",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 24 24"},ut=i("g",{fill:"none"},[i("path",{d:"M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 1 1-8 0a4 4 0 0 1 8 0z",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"})],-1);var ht={render:function(t,e){return a(),l("svg",dt,[ut])}};const pt={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",width:"1.2em",height:"1.2em",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 24 24"},mt=i("g",{fill:"none"},[i("path",{d:"M20.354 15.354A9 9 0 0 1 8.646 3.646A9.003 9.003 0 0 0 12 21a9.003 9.003 0 0 0 8.354-5.646z",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"})],-1);var gt={render:function(t,e){return a(),l("svg",pt,[mt])}};const ft={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",width:"1.2em",height:"1.2em",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 24 24"},vt=i("g",{fill:"none"},[i("path",{d:"M21 21l-6-6m2-5a7 7 0 1 1-14 0a7 7 0 0 1 14 0z",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"})],-1);var bt={render:function(t,e){return a(),l("svg",ft,[vt])}};const wt={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",width:"1.2em",height:"1.2em",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 24 24"},xt=i("g",{fill:"none"},[i("path",{d:"M14 5l7 7m0 0l-7 7m7-7H3",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"})],-1);var yt={render:function(t,e){return a(),l("svg",wt,[xt])}};const kt={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",width:"1.2em",height:"1.2em",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 24 24"},_t=i("g",{fill:"none"},[i("path",{d:"M4 6h16M4 12h16M4 18h16",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"})],-1);var Mt={render:function(t,e){return a(),l("svg",kt,[_t])}};const St={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",width:"1.2em",height:"1.2em",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 24 24"},jt=i("g",{fill:"none"},[i("path",{d:"M6 18L18 6M6 6l12 12",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"})],-1);var Ct={render:function(t,e){return a(),l("svg",St,[jt])}};const Rt=m({storageKey:"theme"}),Tt=g(Rt),Gt={class:"sticky top-0 z-20"},Ot={class:"bg-discord-blurple-560"},At={class:"max-w-7xl mx-auto px-2 sm:px-4 md:flex md:justify-between lg:px-8"},zt={class:"hidden md:flex md:py-2 md:space-x-4 lg:space-x-8","aria-label":"Global navigation"},Et=h(" GCommands "),Lt=h(" Documentation "),Pt=i("span",{class:"mr-2"},"GitHub",-1),$t={href:"https://gcommands.js.org/guide/",class:"\n\t\t\t\t\t\t\ttext-gray-200\n\t\t\t\t\t\t\thover:bg-discord-blurple-630 hover:text-white\n\t\t\t\t\t\t\trounded-md\n\t\t\t\t\t\t\tpy-2\n\t\t\t\t\t\t\tpx-3\n\t\t\t\t\t\t\tinline-flex\n\t\t\t\t\t\t\titems-center\n\t\t\t\t\t\t\ttext-sm\n\t\t\t\t\t\t\tfont-semibold\n\t\t\t\t\t\t\tfocus:outline-none\n\t\t\t\t\t\t\tfocus-visible:ring-1 focus-visible:ring-white\n\t\t\t\t\t\t",target:"_blank",rel:"noopener"},Dt=i("span",{class:"mr-2"},"Guide",-1),Nt={class:"relative h-16 flex md:max-w-md md:w-full lg:max-w-lg"},Wt={class:"relative z-10 flex items-center md:hidden"},It={class:"relative z-0 flex-1 px-2 flex lg:gap-2 items-center justify-center md:justify-end"},Ut=i("label",{for:"search",class:"sr-only"},"Search",-1),Jt={class:"relative"},Ft={class:"pointer-events-none absolute inset-y-0 left-0 pl-3 flex items-center","aria-hidden":"true"},Bt={class:"relative z-10 flex items-center md:hidden"},qt=i("span",{class:"sr-only"},"Open menu",-1),Yt={key:0,id:"mobile-menu",class:"md:hidden","aria-label":"Global navigation"},Ht={class:"pt-2 pb-3 px-2 space-y-1"},Vt=h("discord.js"),Kt=h("Documentation"),Zt=i("span",{class:"mr-2"},"Github",-1),Qt=i("span",{class:"mr-2"},"Guide",-1);var Xt=r({expose:[],setup(t){const n=C(),o=S(),r=Q(),m=j(R).greater("md"),g=e(!1),T=e(),G=e(""),O=e(!1),A=e(-1),z=s((()=>{var t;return null==(t=r.state.source)?void 0:t.repo})),E=s((()=>(A.value=-1,H(G.value).slice(0,7)))),L=()=>{if(E.value.length)return O.value=!1,A.value>=0?(n.push(E.value[A.value].getLinkPath()),void(A.value=-1)):n.push({name:"docs-source-tag-search",query:{query:G.value}})},P=t=>{A.value+=1,A.value>Math.min(6,E.value.length-1)&&(A.value=0),t.preventDefault()},$=t=>{A.value-=1,A.value<0&&(A.value=Math.min(6,E.value.length-1)),t.preventDefault()},D=t=>{if(!t.target)return;const e=t.target.getAttribute("data-index");e&&(A.value=parseInt(e,10))};return f(m,(()=>g.value=!1)),v(T,(()=>{O.value=!1,A.value=-1})),(t,e)=>{const s=p("router-link"),n=ct,r=ht,m=gt,f=bt,v=yt,S=Mt,j=Ct;return a(),l("div",Gt,[i("header",Ot,[i("div",At,[i("nav",zt,[i(s,{to:"/",class:"\n\t\t\t\t\t\t\ttext-gray-200\n\t\t\t\t\t\t\thover:bg-discord-blurple-630 hover:text-white\n\t\t\t\t\t\t\trounded-md\n\t\t\t\t\t\t\tpy-2\n\t\t\t\t\t\t\tpx-3\n\t\t\t\t\t\t\tinline-flex\n\t\t\t\t\t\t\titems-center\n\t\t\t\t\t\t\ttext-sm\n\t\t\t\t\t\t\tfont-semibold\n\t\t\t\t\t\t\tfocus:outline-none\n\t\t\t\t\t\t\tfocus-visible:ring-1 focus-visible:ring-white\n\t\t\t\t\t\t","active-class":"bg-discord-blurple-600"},{default:u((()=>[Et])),_:1}),i(s,{to:"/docs",class:"\n\t\t\t\t\t\t\ttext-gray-200\n\t\t\t\t\t\t\thover:bg-discord-blurple-630 hover:text-white\n\t\t\t\t\t\t\trounded-md\n\t\t\t\t\t\t\tpy-2\n\t\t\t\t\t\t\tpx-3\n\t\t\t\t\t\t\tinline-flex\n\t\t\t\t\t\t\titems-center\n\t\t\t\t\t\t\ttext-sm\n\t\t\t\t\t\t\tfont-semibold\n\t\t\t\t\t\t\tfocus:outline-none\n\t\t\t\t\t\t\tfocus-visible:ring-1 focus-visible:ring-white\n\t\t\t\t\t\t","active-class":"bg-discord-blurple-600"},{default:u((()=>[Lt])),_:1}),i("a",{href:`https://github.com/${d(z)}`,class:"\n\t\t\t\t\t\t\ttext-gray-200\n\t\t\t\t\t\t\thover:bg-discord-blurple-630 hover:text-white\n\t\t\t\t\t\t\trounded-md\n\t\t\t\t\t\t\tpy-2\n\t\t\t\t\t\t\tpx-3\n\t\t\t\t\t\t\tinline-flex\n\t\t\t\t\t\t\titems-center\n\t\t\t\t\t\t\ttext-sm\n\t\t\t\t\t\t\tfont-semibold\n\t\t\t\t\t\t\tfocus:outline-none\n\t\t\t\t\t\t\tfocus-visible:ring-1 focus-visible:ring-white\n\t\t\t\t\t\t",target:"_blank",rel:"noopener"},[Pt,i(n,{class:"h-5 w-5"})],8,["href"]),i("a",$t,[Dt,i(n,{class:"h-5 w-5"})])]),i("div",Nt,[i("div",Wt,[i("button",{class:"\n\t\t\t\t\t\t\t\trounded-md\n\t\t\t\t\t\t\t\tp-2\n\t\t\t\t\t\t\t\tinline-flex\n\t\t\t\t\t\t\t\titems-center\n\t\t\t\t\t\t\t\tjustify-center\n\t\t\t\t\t\t\t\thover:bg-discord-blurple-630\n\t\t\t\t\t\t\t\tfocus:outline-none focus:ring-2 focus:ring-inset focus:ring-white focus:bg-discord-blurple-630\n\t\t\t\t\t\t\t","aria-label":"Switch to "+(d(Rt)?"light theme":"dark theme"),onClick:e[1]||(e[1]=t=>d(Tt)())},[d(Rt)?(a(),l(m,{key:1,class:"fill-current text-gray-200 hover:text-white h-6 w-6","aria-hidden":"true"})):(a(),l(r,{key:0,class:"fill-current text-gray-200 hover:text-white h-6 w-6","aria-hidden":"true"}))],8,["aria-label"])]),i("div",It,[i("button",{class:"\n\t\t\t\t\t\t\t\thidden\n\t\t\t\t\t\t\t\tmd:block\n\t\t\t\t\t\t\t\trounded-md\n\t\t\t\t\t\t\t\tp-2\n\t\t\t\t\t\t\t\thover:bg-discord-blurple-630\n\t\t\t\t\t\t\t\tfocus:outline-none focus:ring-1 focus:ring-inset focus:ring-white\n\t\t\t\t\t\t\t","aria-label":"Switch to "+(d(Rt)?"light theme":"dark theme"),onClick:e[2]||(e[2]=t=>d(Tt)())},[d(Rt)?(a(),l(m,{key:1,class:"fill-current text-gray-200 hover:text-white h-6 w-6","aria-hidden":"true"})):(a(),l(r,{key:0,class:"fill-current text-gray-200 hover:text-white h-6 w-6","aria-hidden":"true"}))],8,["aria-label"]),"/"!==d(o).path?(a(),l("div",{key:0,ref:T,class:"w-full sm:max-w-lg lg:max-w-xs"},[Ut,i("div",Jt,[i("div",Ft,[i(f,{class:"h-5 w-5 text-gray-200"})]),b(i("input",{id:"search","onUpdate:modelValue":e[3]||(e[3]=t=>G.value=t),name:"search",class:"\n\t\t\t\t\t\t\t\t\t\tblock\n\t\t\t\t\t\t\t\t\t\tw-full\n\t\t\t\t\t\t\t\t\t\tbg-discord-blurple-600\n\t\t\t\t\t\t\t\t\t\tborder border-transparent\n\t\t\t\t\t\t\t\t\t\trounded-md\n\t\t\t\t\t\t\t\t\t\tpy-2\n\t\t\t\t\t\t\t\t\t\tpl-10\n\t\t\t\t\t\t\t\t\t\tpr-3\n\t\t\t\t\t\t\t\t\t\ttext-base text-white\n\t\t\t\t\t\t\t\t\t\tplaceholder-gray-200\n\t\t\t\t\t\t\t\t\t\tfocus:outline-none\n\t\t\t\t\t\t\t\t\t\tfocus:bg-discord-blurple-630\n\t\t\t\t\t\t\t\t\t\tfocus:text-gray-200\n\t\t\t\t\t\t\t\t\t\tfocus:placeholder-gray-200\n\t\t\t\t\t\t\t\t\t\tfocus:ring-2\n\t\t\t\t\t\t\t\t\t\tfocus:ring-inset\n\t\t\t\t\t\t\t\t\t\tfocus:ring-white\n\t\t\t\t\t\t\t\t\t\tlg:focus:ring-1\n\t\t\t\t\t\t\t\t\t",placeholder:"Search",type:"search",autocomplete:"off",autocapitalize:"off",autocorrect:"off",onFocus:e[4]||(e[4]=t=>O.value=!0),onInput:e[5]||(e[5]=t=>O.value=!0),onKeyup:x(L,["enter"]),onKeydown:[x($,["up"]),x(P,["down"])]},null,40,["onKeyup","onKeydown"]),[[w,G.value]]),O.value&&G.value&&d(E).length?(a(),l("div",{key:0,class:"absolute cursor-pointer inset-y-0 right-0 pr-3 flex items-center","aria-hidden":"true",onClick:L},[i(v,{class:"h-5 w-5 text-gray-200"})])):y("",!0),O.value&&G.value&&d(E).length?(a(),l("div",{key:1,class:"absolute mt-1 w-full break-words-legacy border bg-discord-blurple-600 rounded-md",onMouseover:D},[i("ul",null,[(a(!0),l(k,null,_(d(E),((t,n)=>(a(),l("li",{key:t.computedName,class:["\n\t\t\t\t\t\t\t\t\t\t\t\teven:bg-discord-blurple-560\n\t\t\t\t\t\t\t\t\t\t\t\tdark:even:bg-discord-blurple-630\n\t\t\t\t\t\t\t\t\t\t\t\thover:bg-discord-blurple-630\n\t\t\t\t\t\t\t\t\t\t\t\tdark:hover:bg-discord-blurple-660\n\t\t\t\t\t\t\t\t\t\t\t\trounded-md\n\t\t\t\t\t\t\t\t\t\t\t\ttext-gray-200\n\t\t\t\t\t\t\t\t\t\t\t",{"ring-1 ring-gray-200 even:bg-discord-blurple-630 dark:even:bg-discord-blurple-660 bg-discord-blurple-630 dark:bg-discord-blurple-660":n===A.value}]},[i(s,{class:"\n\t\t\t\t\t\t\t\t\t\t\t\t\tblock\n\t\t\t\t\t\t\t\t\t\t\t\t\tfocus:outline-none\n\t\t\t\t\t\t\t\t\t\t\t\t\tpy-3\n\t\t\t\t\t\t\t\t\t\t\t\t\tpx-4\n\t\t\t\t\t\t\t\t\t\t\t\t\tfocus-visible:ring-1\n\t\t\t\t\t\t\t\t\t\t\t\t\tfocus-visible:ring-gray-200\n\t\t\t\t\t\t\t\t\t\t\t\t\tfocus-visible:rounded-md\n\t\t\t\t\t\t\t\t\t\t\t\t\tfocus-visible:bg-discord-blurple-630\n\t\t\t\t\t\t\t\t\t\t\t\t\tdark:focus-visible:bg-discord-blurple-660\n\t\t\t\t\t\t\t\t\t\t\t\t",exact:"",to:t.getLinkPath(),"data-index":n,onClick:e[6]||(e[6]=t=>O.value=!1)},{default:u((()=>[h(c(t.computedName),1)])),_:2},1032,["to","data-index"])],2)))),128))])],32)):y("",!0)])],512)):y("",!0)]),i("div",Bt,[i("button",{type:"button",class:"\n\t\t\t\t\t\t\t\trounded-md\n\t\t\t\t\t\t\t\tp-2\n\t\t\t\t\t\t\t\tinline-flex\n\t\t\t\t\t\t\t\titems-center\n\t\t\t\t\t\t\t\tjustify-center\n\t\t\t\t\t\t\t\ttext-gray-200\n\t\t\t\t\t\t\t\thover:bg-discord-blurple-630 hover:text-white\n\t\t\t\t\t\t\t\tfocus:outline-none focus:ring-2 focus:ring-inset focus:ring-white\n\t\t\t\t\t\t\t","aria-controls":"mobile-menu","aria-expanded":g.value,onClick:e[7]||(e[7]=t=>g.value=!g.value)},[qt,i(S,{class:{hidden:g.value,block:!g.value},"aria-hidden":"true"},null,8,["class"]),i(j,{class:{block:g.value,hidden:!g.value},"aria-hidden":"true"},null,8,["class"])],8,["aria-expanded"])])])]),i(M,{"enter-active-class":"transition transform-gpu duration-300 ease-out","enter-from-class":"translate-x-12 opacity-0","enter-to-class":"translate-x-0 opacity-100"},{default:u((()=>[g.value?(a(),l("nav",Yt,[i("div",Ht,[i(s,{to:"/",class:"\n\t\t\t\t\t\t\t\ttext-gray-200\n\t\t\t\t\t\t\t\thover:bg-discord-blurple-630 hover:text-white\n\t\t\t\t\t\t\t\tblock\n\t\t\t\t\t\t\t\trounded-md\n\t\t\t\t\t\t\t\tpy-2\n\t\t\t\t\t\t\t\tpx-3\n\t\t\t\t\t\t\t\ttext-base\n\t\t\t\t\t\t\t\tfont-semibold\n\t\t\t\t\t\t\t",onClick:e[8]||(e[8]=t=>g.value=!g.value)},{default:u((()=>[Vt])),_:1}),i(s,{to:"/docs",class:"\n\t\t\t\t\t\t\t\ttext-gray-200\n\t\t\t\t\t\t\t\thover:bg-discord-blurple-630 hover:text-white\n\t\t\t\t\t\t\t\tblock\n\t\t\t\t\t\t\t\trounded-md\n\t\t\t\t\t\t\t\tpy-2\n\t\t\t\t\t\t\t\tpx-3\n\t\t\t\t\t\t\t\ttext-base\n\t\t\t\t\t\t\t\tfont-semibold\n\t\t\t\t\t\t\t",onClick:e[9]||(e[9]=t=>g.value=!g.value)},{default:u((()=>[Kt])),_:1}),i("a",{href:`https://github.com/${d(z)}`,class:"\n\t\t\t\t\t\t\t\ttext-gray-200\n\t\t\t\t\t\t\t\thover:bg-discord-blurple-630 hover:text-white\n\t\t\t\t\t\t\t\tblock\n\t\t\t\t\t\t\t\trounded-md\n\t\t\t\t\t\t\t\tpy-2\n\t\t\t\t\t\t\t\tpx-3\n\t\t\t\t\t\t\t\ttext-base\n\t\t\t\t\t\t\t\tfont-semibold\n\t\t\t\t\t\t\t",target:"_blank",rel:"noopener",onClick:e[10]||(e[10]=t=>g.value=!g.value)},[Zt,i(n,{class:"h-5 w-5 inline-block"})],8,["href"]),i("a",{href:"https://discordjs.guide",class:"\n\t\t\t\t\t\t\t\ttext-gray-200\n\t\t\t\t\t\t\t\thover:bg-discord-blurple-630 hover:text-white\n\t\t\t\t\t\t\t\tblock\n\t\t\t\t\t\t\t\trounded-md\n\t\t\t\t\t\t\t\tpy-2\n\t\t\t\t\t\t\t\tpx-3\n\t\t\t\t\t\t\t\ttext-base\n\t\t\t\t\t\t\t\tfont-semibold\n\t\t\t\t\t\t\t",target:"_blank",rel:"noopener",onClick:e[11]||(e[11]=t=>g.value=!g.value)},[Qt,i(n,{class:"h-5 w-5 inline-block"})])])])):y("",!0)])),_:1})])])}}});const te={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",width:"1.2em",height:"1.2em",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 24 24"},ee=i("g",{fill:"none"},[i("path",{d:"M4 16v1a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"})],-1);var se={render:function(t,e){return a(),l("svg",te,[ee])}};function ne(t={}){const{immediate:s=!0,onNeedRefresh:n,onOfflineReady:o}=t,r=e(!1),a=e(!1);return{updateServiceWorker:function(t={}){const{immediate:e=!1,onNeedRefresh:s,onOfflineReady:n}=t;let o;return"serviceWorker"in navigator&&(o=new T("/sw.js",{scope:"/"}),o.addEventListener("activated",(t=>{t.isUpdate?window.location.reload():null==n||n()})),o.register({immediate:e}).then((t=>t))),async(t=!0)=>{}}({immediate:s,onNeedRefresh(){r.value=!0,null==n||n()},onOfflineReady(){a.value=!0,null==o||o()}}),offlineReady:a,needRefresh:r}}const oe={key:0,class:"fixed bottom-0 inset-x-0 pb-2 sm:pb-5 z-20"},re={class:"max-w-7xl mx-auto px-2 sm:px-6 lg:px-8"},ae={class:"p-2 rounded-lg bg-discord-blurple-600 dark:bg-discord-blurple-700 shadow-lg sm:p-3"},le={class:"flex items-center justify-between flex-wrap"},ie={class:"w-0 flex-1 flex items-center"},ce={class:"flex p-2 rounded-lg bg-discord-blurple-530 dark:bg-discord-blurple-630"},de={class:"ml-3 font-medium text-white truncate"},ue={class:"sm:hidden"},he={class:"hidden sm:inline"},pe={key:0,class:"order-3 mt-2 flex-shrink-0 w-full sm:order-2 sm:mt-0 sm:w-auto"},me={class:"order-2 flex-shrink-0 sm:order-3 sm:ml-2"},ge=i("span",{class:"sr-only"},"Dismiss",-1);var fe=r({expose:[],setup(t){const{offlineReady:e,needRefresh:s,updateServiceWorker:n}=ne(),o=()=>{e.value=!1,s.value=!1};return(t,r)=>{const u=se,h=Ct;return d(e)||d(s)?(a(),l("div",oe,[i("div",re,[i("div",ae,[i("div",le,[i("div",ie,[i("span",ce,[i(u,{class:"fill-current text-gray-200 h-6 w-6","aria-hidden":"true"})]),i("p",de,[i("span",ue,c(d(e)?"App ready to work offline.":"New content available."),1),i("span",he,c(d(e)?"App ready to work offline.":"New content available, click refresh to update."),1)])]),d(s)?(a(),l("div",pe,[i("button",{class:"\n\t\t\t\t\t\t\t\tflex\n\t\t\t\t\t\t\t\titems-center\n\t\t\t\t\t\t\t\tjustify-center\n\t\t\t\t\t\t\t\tpx-4\n\t\t\t\t\t\t\t\tpy-2\n\t\t\t\t\t\t\t\tborder border-transparent\n\t\t\t\t\t\t\t\trounded-md\n\t\t\t\t\t\t\t\ttext-sm\n\t\t\t\t\t\t\t\tfont-medium\n\t\t\t\t\t\t\t\ttext-gray-200\n\t\t\t\t\t\t\t\tbg-discord-blurple-530\n\t\t\t\t\t\t\t\tdark:bg-discord-blurple-630\n\t\t\t\t\t\t\t\thover:bg-discord-blurple-460\n\t\t\t\t\t\t\t\tdark:hover:bg-discord-blurple-600\n\t\t\t\t\t\t\t\tfocus:outline-none\n\t\t\t\t\t\t\t\tfocus-visible:ring-1 focus-visible:ring-white\n\t\t\t\t\t\t\t",onClick:r[1]||(r[1]=t=>d(n)(!0))}," Refresh ")])):y("",!0),i("div",me,[i("button",{type:"button",class:"-mr-1 flex p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-white",onClick:o},[ge,i(h,{class:"fill-current text-gray-200 h-6 w-6","aria-hidden":"true"})])])])])])])):y("",!0)}}});const ve={class:"min-h-full grid grid-layout"},be={id:"container",class:"grid grid-layout-container lg:custom-scroll"},we={class:"bg-white dark:bg-[#1d1d1d]"};var xe=r({expose:[],setup:t=>(Q().dispatch("fetchStats"),(t,e)=>{const s=p("router-view"),n=at;return a(),l(k,null,[i("div",ve,[i(Xt),i("div",be,[i("div",we,[i(s)]),i(n)])]),i(fe)],64)})});let ye;const ke={},_e=function(t,e){if(!e)return t();if(void 0===ye){const t=document.createElement("link").relList;ye=t&&t.supports&&t.supports("modulepreload")?"modulepreload":"preload"}return Promise.all(e.map((t=>{if(t in ke)return;ke[t]=!0;const e=t.endsWith(".css"),s=e?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${t}"]${s}`))return;const n=document.createElement("link");return n.rel=e?"stylesheet":ye,e||(n.as="script",n.crossOrigin=""),n.href=t,document.head.appendChild(n),e?new Promise(((t,e)=>{n.addEventListener("load",t),n.addEventListener("error",e)})):void 0}))).then((()=>t()))},Me={},Se={style:{color:"white","font-size":"120px","font-weight":"bold"}};Me.render=function(t,e){return a(),l("h1",Se,"GCommands")};const je={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",width:"1.2em",height:"1.2em",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 24 24"},Ce=i("g",{fill:"none"},[i("path",{d:"M8 5H6a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-1M8 5a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2M8 5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2m0 0h2a2 2 0 0 1 2 2v3m2 4H10m0 0l3-3m-3 3l3 3",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"})],-1);var Re={render:function(t,e){return a(),l("svg",je,[Ce])}};const Te={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",width:"1.2em",height:"1.2em",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 24 24"},Ge=i("g",{fill:"none"},[i("path",{d:"M9 5H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2M9 5a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2M9 5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2m-6 9l2 2l4-4",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"})],-1);var Oe={render:function(t,e){return a(),l("svg",Te,[Ge])}};const Ae={class:"text-gray-200 bg-discord-blurple-560 p-4 md:text-lg mx-auto rounded-md shadow flex items-center"},ze=i("span",{class:"hover:text-white mr-2"},"npm install gcommands",-1);var Ee=r({expose:[],setup(t){const s=e(),n=e(!1),o=G((t=>{t(),n.value=!1}),1e3),{show:r,hide:c}=O(s,{theme:"discord",content:"Copied",trigger:"manual",hideOnClick:!1}),d=async()=>{try{await navigator.clipboard.writeText("npm install gcommands"),r()}catch{}n.value=!0,o(c)};return(t,e)=>{const o=Re,r=Oe;return a(),l("code",Ae,[ze,i("button",{ref:s,class:"focus:outline-none","aria-label":"Copy install command"},[n.value?(a(),l(r,{key:1,class:"inline-block fill-current text-discord-green-500 cursor-pointer mb-1","aria-hidden":"true",onClick:d})):(a(),l(o,{key:0,class:"inline-block fill-current text-gray-200 cursor-pointer hover:text-white mb-1","aria-hidden":"true",onClick:d}))],512)])}}});const Le={class:"grid"},Pe={class:"overflow-x-auto lg:custom-scroll"},$e={class:"relative"},De={class:"my-0 javascript"};var Ne=r({expose:[],props:{code:{type:String,required:!0}},setup(t){const s=t,n=e(),o=e(!1),r=G((t=>{t(),o.value=!1}),1e3),{show:c,hide:u}=O(n,{theme:"discord",content:"Copied",trigger:"manual",hideOnClick:!1}),h=async()=>{try{await navigator.clipboard.writeText(s.code),c()}catch{}o.value=!0,r(u)};return(e,s)=>{const r=Re,c=Oe;return a(),l("div",Le,[i("div",Pe,[i("div",$e,[i("pre",De,[i("code",{innerHTML:d(A).highlight(t.code,{language:"javascript"}).value},null,8,["innerHTML"])]),i("button",{ref:n,class:"\n\t\t\t\t\t\tabsolute\n\t\t\t\t\t\tright-0\n\t\t\t\t\t\ttop-0\n\t\t\t\t\t\tmt-4\n\t\t\t\t\t\tmr-4\n\t\t\t\t\t\tinline-block\n\t\t\t\t\t\thover:text-white\n\t\t\t\t\t\tfocus:outline-none\n\t\t\t\t\t\tfocus-visible:ring-1 focus-visible:ring-gray-200\n\t\t\t\t\t","aria-label":"Copy code"},[o.value?(a(),l(c,{key:1,class:"fill-current text-discord-green-600 dark:text-discord-green-500","aria-hidden":"true",onClick:h})):(a(),l(r,{key:0,class:"fill-current text-gray-700 dark:text-gray-200","aria-hidden":"true",onClick:h}))],512)])])])}}});const We={class:"bg-discord-blurple-500 py-20"},Ie={class:"max-w-3xl sm:mx-auto text-center px-8 sm:px-16 flex flex-col gap-10 md:px-12"},Ue={class:"\n\t\t\tprose prose-discord\n\t\t\tdark:prose-light\n\t\t\tlg:prose-lg\n\t\t\tpx-6\n\t\t\tmx-auto\n\t\t\tpb-8\n\t\t\tw-full\n\t\t\txl:grid xl:grid-cols-2 xl:gap-x-12 xl:max-w-7xl\n\t\t"},Je=i("div",null,[i("h2",null,"About"),i("p",null,[h(" GCommands is a "),i("a",{href:"https://discord.js.org"},"djs"),h(" framework in "),i("a",{href:"https://nodejs.org"},"Nodejs"),h(" that makes it easier for you to work with the bot. You can create slash/normal/both commands very easily. You can take a look at our "),i("a",{href:"https://gcommands.js.org/guide/"},"guide")])],-1),Fe=i("h2",null,"Example",-1),Be=i("div",null,[i("h2",null,"Why?"),i("ul",null,[i("li",null,"Easy to use"),i("li",null,"Customizable"),i("li",null,"Commands"),i("li",null,"Flexible"),i("li",null,"100% Promise-based")])],-1),qe=i("h2",null,"Statistics",-1),Ye=i("p",{class:"text-center"},"... and growing!",-1);const He=[{name:"all",path:"/:all(.*)",component:()=>_e((()=>import("./[...all].58c6b97b.js")),["/assets/[...all].58c6b97b.js","/assets/vendor.e3d02f40.js"]),props:!0},{name:"index",path:"/",component:r({expose:[],setup(t){const n=Q(),o=e(z`
const { Client } = require("discord.js")
const { GCommands } = require("gcommands")
const client = Client();

client.on("ready", () => {
    const gc = new GCommands(client, {
        cmdDir: "commands/",
        eventDir: "events/",
        language: "english",
        unkownCommandMessage: false,
        slash: {
            slash: "both",
            prefix: "."
        },
        database: "url"
        /* DB SUPPORT
         * redis://user:pass@localhost:6379
         * mongodb://user:pass@localhost:27017/dbname
         * sqlite://path/to/database.sqlite
         * postgresql://user:pass@localhost:5432/dbname
         * mysql://user:pass@localhost:3306/dbname
        */
    })

    gc.on("debug", (debug)=>{console.log(debug)})
    gc.on("log", (log)=>{console.log(log)})
})

client.login("bot token")`);return s((()=>n.state.docs)).value||(n.dispatch("fetchDocs",{inputSource:W}),n.dispatch("fetchTags",{currentSource:W})),(t,e)=>(a(),l(k,null,[i("div",We,[i("div",Ie,[i(Me,{class:"filter drop-shadow-lg my-6"}),i(Ee)])]),i("div",Ue,[Je,i("div",null,[Fe,i(Ne,{code:o.value},null,8,["code"])]),Be,i("div",null,[qe,i(X),Ye])])],64))}}),props:!0},{path:"/docs",component:()=>_e((()=>import("./docs.ef471dbf.js")),["/assets/docs.ef471dbf.js","/assets/docs.675be814.css","/assets/vendor.e3d02f40.js","/assets/chevron-down.ab799887.js","/assets/headlessui.esm.3a73b942.js","/assets/Spinner.8494312d.js","/assets/Spinner.af24072b.css"]),children:[{name:"docs-source",path:":source",component:()=>_e((()=>import("./index.b4ec57b6.js")),["/assets/index.b4ec57b6.js","/assets/Spinner.8494312d.js","/assets/Spinner.af24072b.css","/assets/vendor.e3d02f40.js"]),props:!0},{name:"docs-source-tag-search",path:":source/:tag/search",component:()=>_e((()=>import("./search.7d000a71.js")),["/assets/search.7d000a71.js","/assets/search.055dc457.css","/assets/vendor.e3d02f40.js"]),props:!0},{name:"docs-source-tag-class-class",path:":source/:tag/class/:class",component:()=>_e((()=>import("./[class].625a3de5.js")),["/assets/[class].625a3de5.js","/assets/[class].32241939.css","/assets/vendor.e3d02f40.js","/assets/SourceButton.vue_vue&type=script&setup=true&lang.1c9590f3.js","/assets/See.vue_vue&type=script&setup=true&lang.b7a6ee3b.js","/assets/See.vue_vue&type=script&setup=true&lang.9c59f874.css","/assets/chevron-down.ab799887.js","/assets/headlessui.esm.3a73b942.js"]),props:!0},{name:"docs-source-tag-typedef-typedef",path:":source/:tag/typedef/:typedef",component:()=>_e((()=>import("./[typedef].ad72d74b.js")),["/assets/[typedef].ad72d74b.js","/assets/vendor.e3d02f40.js","/assets/SourceButton.vue_vue&type=script&setup=true&lang.1c9590f3.js","/assets/See.vue_vue&type=script&setup=true&lang.b7a6ee3b.js","/assets/See.vue_vue&type=script&setup=true&lang.9c59f874.css","/assets/headlessui.esm.3a73b942.js"]),props:!0},{name:"docs-source-tag-category-file",path:":source/:tag/:category/:file",component:()=>_e((()=>import("./[file].c98e8101.js")),["/assets/[file].c98e8101.js","/assets/vendor.e3d02f40.js","/assets/SourceButton.vue_vue&type=script&setup=true&lang.1c9590f3.js"]),props:!0}],props:!0}];var Ve=E({history:L(),routes:He});const Ke=P(xe);Ke.use(Z,K),Ke.use(Ve),Ke.use($),Ke.mount("#app");export{J as D,W as M,Ne as _,ct as a,V as f,I as i,H as s,Q as u};
