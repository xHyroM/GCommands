import{d as e,r as t,c as s,k as l,o as n,b as r,f as a,e as o,w as d,t as i,F as c,q as p,g as u,p as m,x as v,h as y,z as f,y as h,s as b,E as g,P as x,L as k}from"./vendor.e3d02f40.js";import{i as w,u as T,_ as $}from"./index.0ff2360f.js";import{_,m as q}from"./SourceButton.vue_vue&type=script&setup=true&lang.1c9590f3.js";import{_ as j,a as E,t as M,b as A,c as L,d as Z,p as H}from"./See.vue_vue&type=script&setup=true&lang.b7a6ee3b.js";import{_ as C,a as S}from"./chevron-down.ab799887.js";import{a as D,b as I,D as P}from"./headlessui.esm.3a73b942.js";function B(e){return`${"static"===e.scope?"s-":""}${e.name}`}const V={key:0},R={class:"text-gray-800 dark:text-gray-100 py-2 text-md font-bold uppercase flex gap-1 items-center"},z={class:"sr-only"},F=u(" Properties "),U={class:"text-gray-200 text-sm font-semibold uppercase"},G={key:0,class:"inline-flex items-center justify-center w-6 h-6 rounded-md bg-discord-blurple-500"},J={key:1,class:"inline-flex items-center justify-center w-6 h-6 rounded-md bg-discord-blurple-500"},K={key:2,class:"inline-flex items-center justify-center w-6 h-6 rounded-md bg-discord-red-500"},N={key:3,class:"inline-flex items-center justify-center w-6 h-6 rounded-md bg-discord-red-500"},O={key:1},Q={class:"text-gray-800 dark:text-gray-100 py-2 text-md font-bold uppercase flex gap-1 items-center"},W={class:"sr-only"},X=u(" Methods "),Y={class:"text-gray-200 text-sm font-semibold uppercase"},ee={key:0,class:"inline-flex items-center justify-center w-6 h-6 rounded-md bg-discord-blurple-500"},te={key:1,class:"inline-flex items-center justify-center w-6 h-6 rounded-md bg-discord-blurple-500"},se={key:2,class:"inline-flex items-center justify-center w-6 h-6 rounded-md bg-discord-red-500"},le={key:3,class:"inline-flex items-center justify-center w-6 h-6 rounded-md bg-discord-red-500"},ne={key:2},re={class:"text-gray-800 dark:text-gray-100 py-2 text-md font-bold uppercase flex gap-1 items-center"},ae={class:"sr-only"},oe=u(" Events "),de={key:0,class:"\n\t\t\t\t\t\t\t\ttext-gray-200 text-sm\n\t\t\t\t\t\t\t\tfont-semibold\n\t\t\t\t\t\t\t\tuppercase\n\t\t\t\t\t\t\t\tinline-flex\n\t\t\t\t\t\t\t\titems-center\n\t\t\t\t\t\t\t\tjustify-center\n\t\t\t\t\t\t\t\tw-6\n\t\t\t\t\t\t\t\th-6\n\t\t\t\t\t\t\t\trounded-md\n\t\t\t\t\t\t\t\tbg-discord-red-500\n\t\t\t\t\t\t\t"};var ie=e({expose:[],props:{properties:{type:Array,required:!1},methods:{type:Array,required:!1},events:{type:Array,required:!1}},setup(e){const h=e,b=v(f).greater("lg"),g=t(!1),x=s((()=>{var e;return w.value?h.properties:null==(e=h.properties)?void 0:e.filter((e=>"private"!==e.access))})),k=s((()=>{var e;return w.value?h.methods:null==(e=h.methods)?void 0:e.filter((e=>"private"!==e.access))})),T=s((()=>{var e;return w.value?h.events:null==(e=h.events)?void 0:e.filter((e=>"private"!==e.access))})),$=e=>{const t=document.getElementById(`doc-for-${e}`);null==t||t.scrollIntoView({behavior:"smooth",block:"start"})};return l(b,(()=>g.value=!0),{immediate:!0}),(t,s)=>{const l=C,v=S,f=y("router-link");return n(),r("div",{class:["grid sm:grid-cols-2 mb-10",e.events&&e.events.length?"md:grid-cols-3":null]},[a(x)&&a(x).length?(n(),r("div",V,[o(a(P),{"default-open":g.value},{default:d((({open:e})=>[o(a(D),{class:"focus:outline-none",tabindex:"-1"},{default:d((()=>[o("div",R,[o("button",{class:"leading-3 rounded-md p-1 focus:outline-none focus-visible:ring-1 focus-visible:ring-white","aria-expanded":e},[o("span",z,i(e?"Shrink":"Expand"),1),o(l,{class:["inline-block",{hidden:e}],"aria-hidden":"true"},null,8,["class"]),o(v,{class:["inline-block",{hidden:!e}],"aria-hidden":"true"},null,8,["class"])],8,["aria-expanded"]),F])])),_:2},1024),o(a(I),{as:"ul",class:"no-list !mt-0 pl-2"},{default:d((()=>[(n(!0),r(c,null,p(a(x),(e=>(n(),r("li",{key:a(B)(e),class:"\n\t\t\t\t\t\t\tcursor-pointer\n\t\t\t\t\t\t\tmb-14\n\t\t\t\t\t\t\tborder-l-4 border-transparent\n\t\t\t\t\t\t\trounded-sm\n\t\t\t\t\t\t\thover:border-l-4 hover:border-discord-blurple-500\n\t\t\t\t\t\t",onClick:t=>$(a(B)(e))},[o(f,{to:{name:"docs-source-tag-class-class",query:{scrollTo:a(B)(e)}},class:"mx-2"},{default:d((()=>[u(i(e.name),1)])),_:2},1032,["to"]),o("span",U,["static"===e.scope?(n(),r("span",G,"S")):m("",!0),e.abstract?(n(),r("span",J,"A")):m("",!0),e.deprecated?(n(),r("span",K,"D")):m("",!0),"private"===e.access?(n(),r("span",N,"P")):m("",!0)])],8,["onClick"])))),128))])),_:1})])),_:1},8,["default-open"])])):m("",!0),a(k)&&a(k).length?(n(),r("div",O,[o(a(P),{"default-open":g.value},{default:d((({open:e})=>[o(a(D),{class:"focus:outline-none",tabindex:"-1"},{default:d((()=>[o("div",Q,[o("button",{class:"leading-3 rounded-md p-1 focus:outline-none focus-visible:ring-1 focus-visible:ring-white","aria-expanded":e},[o("span",W,i(e?"Shrink":"Expand"),1),o(l,{class:["inline-block",{hidden:e}],"aria-hidden":"true"},null,8,["class"]),o(v,{class:["inline-block",{hidden:!e}],"aria-hidden":"true"},null,8,["class"])],8,["aria-expanded"]),X])])),_:2},1024),o(a(I),{as:"ul",class:"no-list !mt-0 pl-2"},{default:d((()=>[(n(!0),r(c,null,p(a(k),(e=>(n(),r("li",{key:a(B)(e),class:"\n\t\t\t\t\t\t\tcursor-pointer\n\t\t\t\t\t\t\tborder-l-4 border-transparent\n\t\t\t\t\t\t\trounded-sm\n\t\t\t\t\t\t\thover:border-l-4 hover:border-discord-blurple-500\n\t\t\t\t\t\t",onClick:t=>$(a(B)(e))},[o(f,{to:{name:"docs-source-tag-class-class",query:{scrollTo:a(B)(e)}},class:"mx-2"},{default:d((()=>[u(i(e.name),1)])),_:2},1032,["to"]),o("span",Y,["static"===e.scope?(n(),r("span",ee,"S")):m("",!0),e.abstract?(n(),r("span",te,"A")):m("",!0),e.deprecated?(n(),r("span",se,"D")):m("",!0),"private"===e.access?(n(),r("span",le,"P")):m("",!0)])],8,["onClick"])))),128))])),_:1})])),_:1},8,["default-open"])])):m("",!0),a(T)&&a(T).length?(n(),r("div",ne,[o(a(P),{"default-open":g.value},{default:d((({open:e})=>[o(a(D),{class:"focus:outline-none",tabindex:"-1"},{default:d((()=>[o("div",re,[o("button",{class:"leading-3 rounded-md p-1 focus:outline-none focus-visible:ring-1 focus-visible:ring-white","aria-expanded":e},[o("span",ae,i(e?"Shrink":"Expand"),1),o(l,{class:["inline-block",{hidden:e}],"aria-hidden":"true"},null,8,["class"]),o(v,{class:["inline-block",{hidden:!e}],"aria-hidden":"true"},null,8,["class"])],8,["aria-expanded"]),oe])])),_:2},1024),o(a(I),{as:"ul",class:"no-list !mt-0 pl-2"},{default:d((()=>[(n(!0),r(c,null,p(a(T),(e=>(n(),r("li",{key:e.name,class:"\n\t\t\t\t\t\t\tcursor-pointer\n\t\t\t\t\t\t\tborder-l-4 border-transparent\n\t\t\t\t\t\t\trounded-sm\n\t\t\t\t\t\t\thover:border-l-4 hover:border-discord-blurple-500\n\t\t\t\t\t\t",onClick:t=>$(`e-${e.name}`)},[o(f,{to:{name:"docs-source-tag-class-class",query:{scrollTo:`e-${e.name}`}},class:"mx-2"},{default:d((()=>[u(i(e.name),1)])),_:2},1032,["to"]),e.deprecated?(n(),r("span",de,"D")):m("",!0)],8,["onClick"])))),128))])),_:1})])),_:1},8,["default-open"])])):m("",!0)],2)}}});const ce={class:"flex items-center"},pe={class:"inline-block mr-2"},ue={class:"space-x-2 text-gray-200 text-sm font-semibold uppercase pt-6"},me={key:0,class:"inline-flex items-center px-2.5 py-0.5 rounded-md bg-discord-blurple-500"},ve={key:1,class:"inline-flex items-center px-2.5 py-0.5 rounded-md bg-discord-blurple-500"},ye={key:2,class:"inline-flex items-center px-2.5 py-0.5 rounded-md bg-discord-red-500"},fe={key:3,class:"inline-flex items-center px-2.5 py-0.5 rounded-md bg-discord-red-500"},he={class:"grid pl-2.5"},be={class:"font-semibold"},ge=u(" Type: "),xe={key:1},ke=u(" Default: "),we=o("div",{class:"w-full pr-32 lg:pr-96"},[o("div",{class:"h-px bg-gradient-to-r from-gray-500 rounded-full"})],-1);var Te=e({expose:[],props:{prop:{type:null,required:!0}},setup(e){const t=e,l=h(),v=b(),f=T(),g=s((()=>f.state.docs)),x=s((()=>q(L(t.prop.description,g.value,l,v)))),k=s((()=>`${"static"===t.prop.scope?"s-":""}${t.prop.name}`));return(t,s)=>{const l=y("router-link");return n(),r(c,null,[o("div",{id:`doc-for-${a(k)}`,class:"scroll-to mb-8"},[o(_,{class:"float-right mt-8",meta:e.prop.meta},null,8,["meta"]),o("div",ce,[o("h3",pe,[o(l,{to:{name:"docs-source-tag-class-class",query:{scrollTo:a(k)}}},{default:d((()=>[u("."+i(e.prop.name),1)])),_:1},8,["to"])]),o("span",ue,["static"===e.prop.scope?(n(),r("span",me,"Static")):m("",!0),e.prop.readonly?(n(),r("span",ve,"Read-only")):m("",!0),e.prop.deprecated?(n(),r("span",ye,"Deprecated")):m("",!0),"private"===e.prop.access?(n(),r("span",fe,"Private")):m("",!0)])]),o("div",he,[o("p",{class:"noprose",innerHTML:a(x)},null,8,["innerHTML"]),e.prop.props&&e.prop.props.length>0?(n(),r(j,{key:0,parameters:e.prop.props},null,8,["parameters"])):m("",!0),o("div",be,[ge,(n(!0),r(c,null,p(e.prop.type,(t=>(n(),r(E,{key:a(M)(t),names:t,nullable:e.prop.nullable},null,8,["names","nullable"])))),128))]),e.prop.default?(n(),r("div",xe,[ke,o("code",null,i(e.prop.default),1)])):m("",!0),e.prop.see?(n(),r(A,{key:2,see:e.prop.see},null,8,["see"])):m("",!0)])],8,["id"]),we],64)}}});const $e={class:"flex items-center"},_e={class:"inline-block mr-2"},qe=u(") "),je={class:"space-x-2 text-gray-200 text-sm font-semibold uppercase pt-6"},Ee={key:0,class:"inline-flex items-center px-2.5 py-0.5 rounded-md bg-discord-blurple-500"},Me={key:1,class:"inline-flex items-center px-2.5 py-0.5 rounded-md bg-discord-blurple-500"},Ae={key:2,class:"inline-flex items-center px-2.5 py-0.5 rounded-md bg-discord-red-500"},Le={key:3,class:"inline-flex items-center px-2.5 py-0.5 rounded-md bg-discord-red-500"},Ze={class:"grid pl-2.5"},He={class:"font-semibold"},Ce=u(" Returns: "),Se={key:0},De={key:1},Ie={key:1,class:"font-semibold"},Pe=u(" Throws: "),Be={key:2,class:"font-semibold"},Ve=u(" Emits: "),Re={key:0},ze={key:3,class:"font-semibold mt-3"},Fe=u(" Examples: "),Ue=o("div",{class:"w-full pr-32 lg:pr-96"},[o("div",{class:"h-px bg-gradient-to-r from-gray-500 rounded-full"})],-1);var Ge=e({expose:[],props:{method:{type:null,required:!0}},setup(e){const t=e,l=h(),v=b(),f=T(),g=s((()=>f.state.docs)),x=s((()=>q(L(t.method.description,g.value,l,v)))),k=s((()=>q(L(t.method.returns.description,g.value,l,v)))),w=s((()=>t.method.params?t.method.params.filter((e=>!e.name.includes("."))):null)),C=s((()=>t.method.emits?t.method.emits.map((e=>H(e.replace(/:event/i,""),g.value))):null)),S=s((()=>`${"static"===t.method.scope?"s-":""}${t.method.name}`));return(t,s)=>{const l=y("router-link");return n(),r(c,null,[o("div",{id:`doc-for-${a(S)}`,class:"scroll-to mb-8"},[o(_,{class:"float-right mt-9",meta:e.method.meta},null,8,["meta"]),o("div",$e,[o("h3",_e,[o(l,{to:{name:"docs-source-tag-class-class",query:{scrollTo:a(S)}}},{default:d((()=>[u(" ."+i(e.method.name)+"(",1),(n(!0),r(c,null,p(a(w),(e=>(n(),r("span",{key:e.name,class:["method-param text-discord-blurple-560 dark:text-discord-blurple-300 opacity-90 dark:opacity-75",e.optional?"optional":""]},i(e.variable?"...":"")+i(e.name),3)))),128)),qe])),_:1},8,["to"])]),o("span",je,["static"===e.method.scope?(n(),r("span",Ee,"Static")):m("",!0),e.method.abstract?(n(),r("span",Me,"Abstract")):m("",!0),e.method.deprecated?(n(),r("span",Ae,"Deprecated")):m("",!0),"private"===e.method.access?(n(),r("span",Le,"Private")):m("",!0)])]),o("div",Ze,[o("p",{class:"noprose",innerHTML:a(x)},null,8,["innerHTML"]),e.method.params?(n(),r(j,{key:0,parameters:e.method.params},null,8,["parameters"])):m("",!0),o("div",He,[Ce,e.method.returns&&Array.isArray(e.method.returns)?(n(),r("span",Se,[(n(!0),r(c,null,p(e.method.returns,(e=>(n(),r(E,{key:a(M)(e),names:e},null,8,["names"])))),128))])):e.method.returns&&!Array.isArray(e.method.returns)?(n(),r("span",De,[(n(!0),r(c,null,p(e.method.returns.types||e.method.returns,(t=>(n(),r(E,{key:a(M)(t),names:t,variable:e.method.returns.variable,nullable:e.method.returns.nullable},null,8,["names","variable","nullable"])))),128))])):(n(),r(Z,{key:2,type:["void"]})),e.method.returns&&!Array.isArray(e.method.returns)&&e.method.returns.description?(n(),r("p",{key:3,class:"noprose",innerHTML:a(k)},null,8,["innerHTML"])):m("",!0)]),e.method.throws?(n(),r("div",Ie,[Pe,(n(!0),r(c,null,p(e.method.throws,(e=>(n(),r(E,{key:e,names:e},null,8,["names"])))),128))])):m("",!0),a(C)?(n(),r("div",Be,[Ve,a(C).length>1?(n(),r("ul",Re,[(n(!0),r(c,null,p(a(C),(e=>(n(),r("li",{key:e.text},[o(l,{to:e.link},{default:d((()=>[u(i(e.text),1)])),_:2},1032,["to"])])))),128))])):(n(),r(l,{key:1,to:a(C)[0].link},{default:d((()=>[u(i(a(C)[0].text),1)])),_:1},8,["to"]))])):m("",!0),e.method.examples?(n(),r("div",ze,[Fe,(n(!0),r(c,null,p(e.method.examples,(e=>(n(),r($,{key:e,class:"mt-3",code:e},null,8,["code"])))),128))])):m("",!0),e.method.see?(n(),r(A,{key:4,see:e.method.see},null,8,["see"])):m("",!0)])],8,["id"]),Ue],64)}}});const Je={class:"flex items-center"},Ke={class:"inline-block mr-2"},Ne={key:0,class:"\n\t\t\t\t\tinline-flex\n\t\t\t\t\titems-center\n\t\t\t\t\tpx-2.5\n\t\t\t\t\tpy-0.5\n\t\t\t\t\trounded-md\n\t\t\t\t\ttext-sm\n\t\t\t\t\tfont-medium\n\t\t\t\t\tbg-discord-red-500\n\t\t\t\t\ttext-gray-200\n\t\t\t\t\tuppercase\n\t\t\t\t\tpt-6\n\t\t\t\t"},Oe={class:"grid pl-2.5"},Qe=o("div",{class:"w-full pr-32 lg:pr-96"},[o("div",{class:"h-px bg-gradient-to-r from-gray-500 rounded-full"})],-1);var We=e({expose:[],props:{event:{type:null,required:!0}},setup(e){const t=e,l=h(),p=b(),v=T(),f=s((()=>v.state.docs)),g=s((()=>q(L(t.event.description,f.value,l,p))));return(t,s)=>{const l=y("router-link");return n(),r(c,null,[o("div",{id:`doc-for-e-${e.event.name}`,class:"scroll-to mb-8"},[o(_,{class:"float-right mt-8",meta:e.event.meta},null,8,["meta"]),o("div",Je,[o("h3",Ke,[o(l,{to:{name:"docs-source-tag-class-class",query:{scrollTo:`e-${e.event.name}`}}},{default:d((()=>[u(i(e.event.name),1)])),_:1},8,["to"])]),e.event.deprecated?(n(),r("span",Ne,"Deprecated")):m("",!0)]),o("div",Oe,[o("p",{class:"noprose",innerHTML:a(g)},null,8,["innerHTML"]),e.event.params&&e.event.params.length?(n(),r(j,{key:0,parameters:e.event.params},null,8,["parameters"])):m("",!0),e.event.see?(n(),r(A,{key:1,see:e.event.see},null,8,["see"])):m("",!0)])],8,["id"]),Qe],64)}}});const Xe={class:"mx-auto py-16 px-4 sm:px-8 lg:py-8 w-full"},Ye={class:"prose prose-discord dark:prose-light break-words-legacy mx-auto max-w-4xl lg:max-w-full"},et={class:"font-bold !mt-3"},tt={key:0},st=u(" extends "),lt={key:1},nt=u(" implements "),rt={key:1,class:"grid"},at=o("h2",{class:"!mt-2"},"Constructor",-1),ot=u(");"),dt={key:2,class:"!mt-4"},it={key:3},ct={key:4};var pt=e({expose:[],setup(e){var l;g.configure({ignoreUnescapedHTML:!0});const d=h(),v=b(),y=T(),f=t(),$=s((()=>y.state.docs)),A=null==(l=$.value)?void 0:l.classes.find((e=>e.name===v.params.class)),H=s((()=>q(L(null==A?void 0:A.description,$.value,d,v)))),C=s((()=>(null==A?void 0:A.construct)&&A.construct.params?A.construct.params.filter((e=>!e.name.includes("."))):null)),S=s((()=>{if(!(null==A?void 0:A.props))return null;let e=A.props;return w.value||(e=e.filter((e=>"private"!==e.access))),e.sort(((e,t)=>`${"static"===e.scope?"ZZZ":""}${e.name}`.localeCompare(`${"static"===t.scope?"ZZZ":""}${t.name}`)))})),D=s((()=>{if(!(null==A?void 0:A.methods))return null;let e=A.methods;return w.value||(e=e.filter((e=>"private"!==e.access))),e.sort(((e,t)=>`${"static"===e.scope?"ZZZ":""}${e.name}`.localeCompare(`${"static"===t.scope?"ZZZ":""}${t.name}`)))}));return x((()=>{const e=document.getElementById(`doc-for-${v.query.scrollTo}`);null==e||e.scrollIntoView({behavior:"smooth",block:"start"});const t=document.getElementById("container");!v.query.scrollTo&&t&&t.scrollTop>200&&t.scrollTo({top:0,behavior:"smooth"}),f.value&&g.highlightElement(f.value)})),k((()=>v.query.scrollTo),(()=>{const e=document.getElementById(`doc-for-${v.query.scrollTo}`);null==e||e.scrollIntoView({behavior:"smooth",block:"start"})})),(e,t)=>{var s,l,d,v,y,h,b,g,x,k,w,T,q,L,I,P,V,R,z,F,U;return n(),r("div",Xe,[o(_,{class:"float-right mt-2",meta:null==(s=a(A))?void 0:s.meta},null,8,["meta"]),o("div",Ye,[o("h1",{id:`doc-for-${null==(l=a(A))?void 0:l.name}`,class:"!mb-3"},i(null==(d=a(A))?void 0:d.name),9,["id"]),o("p",et,[(null==(v=a(A))?void 0:v.extends)?(n(),r("span",tt,[st,"string"==typeof(null==(y=a(A))?void 0:y.extends[0])?(n(),r(Z,{key:0,type:null==(h=a(A))?void 0:h.extends},null,8,["type"])):(n(!0),r(c,{key:1},p(null==(b=a(A))?void 0:b.extends,(e=>(n(),r(E,{key:a(M)(e),names:e},null,8,["names"])))),128))])):m("",!0),(null==(g=a(A))?void 0:g.implements)?(n(),r("span",lt,[nt,"string"==typeof(null==(x=a(A))?void 0:x.implements[0])?(n(),r(Z,{key:0,type:null==(k=a(A))?void 0:k.implements},null,8,["type"])):(n(!0),r(c,{key:1},p(null==(w=a(A))?void 0:w.implements,(e=>(n(),r(E,{key:a(M)(e),names:e},null,8,["names"])))),128))])):m("",!0)]),(null==(T=a(A))?void 0:T.description)?(n(),r("p",{key:0,class:"!mb-2",innerHTML:a(H)},null,8,["innerHTML"])):m("",!0),(null==(q=a(A))?void 0:q.construct)?(n(),r("div",rt,[at,o("pre",{ref:f,class:"javascript"},[o("code",null,[u("new "+i(null==(L=a($))?void 0:L.global)+"."+i(null==(I=a(A))?void 0:I.name)+"(",1),(n(!0),r(c,null,p(a(C),((e,t)=>{var s,l;return n(),r("span",{key:e.name},i(e.name)+i((null!=(l=null==(s=a(C))?void 0:s.length)?l:1)-1!==t?", ":""),1)})),128)),ot])],512),a(A).construct.params?(n(),r(j,{key:0,parameters:a(A).construct.params},null,8,["parameters"])):m("",!0)])):m("",!0),o(ie,{properties:null==(P=a(A))?void 0:P.props,methods:null==(V=a(A))?void 0:V.methods,events:null==(R=a(A))?void 0:R.events},null,8,["properties","methods","events"]),a(S)&&a(S).length?(n(),r("h2",dt,"Properties")):m("",!0),(n(!0),r(c,null,p(a(S),(e=>(n(),r(Te,{key:a(B)(e),prop:e},null,8,["prop"])))),128)),a(D)&&a(D).length?(n(),r("h2",it,"Methods")):m("",!0),(n(!0),r(c,null,p(a(D),(e=>(n(),r(Ge,{key:a(B)(e),method:e},null,8,["method"])))),128)),(null==(z=a(A))?void 0:z.events)&&(null==(F=a(A))?void 0:F.events.length)?(n(),r("h2",ct,"Events")):m("",!0),(n(!0),r(c,null,p(null==(U=a(A))?void 0:U.events,(e=>(n(),r(We,{key:`e-${e.name}`,event:e},null,8,["event"])))),128))])])}}});export default pt;
