import{r as f,o as g,c as h,a as o,b as c,w as u,n as y,d as b,p as w,e as C,f as d,g as O,h as k,i as E,j as G,u as P}from"./vendor.12f02877.js";const L=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function i(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerpolicy&&(r.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?r.credentials="include":e.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(e){if(e.ep)return;e.ep=!0;const r=i(e);fetch(e.href,r)}};L();var V="/gfx/CG_Logo_Black.png",A="/gfx/footer.png";var j=(l,t)=>{for(const[i,n]of t)l[i]=n;return l};const I={name:"app",data(){return{menuOpen:!1}},methods:{toggleMenu(){this.menuOpen=!this.menuOpen},away(){this.menuOpen=!1}}},p=l=>(w("data-v-1756e1aa"),l=l(),C(),l),D={class:"relative flex flex-col min-h-screen font-sans text-white"},R={class:"fixed z-30 h-29"},S=p(()=>o("div",{class:"fixed z-40 w-screen h-20 bg-black border-b border-gray-600 md:h-29"},null,-1)),T={class:"fixed z-50 w-full"},z={class:"container relative px-8 pt-8 pb-5 mx-auto lg:flex lg:items-center lg:justify-between md:flex-wrap"},F={class:"flex items-center justify-between lg:flex-none"},H={class:"h-20 -mt-2 lg:mt-3 lg:h-32"},N=p(()=>o("img",{src:V,alt:"logo",class:"w-20 lg:w-32"},null,-1)),B={class:"flex -mt-6 place-content-end lg:hidden"},M=p(()=>o("svg",{class:"w-3 h-3 current-color",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"},[o("path",{d:"M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z",fill:"gray"})],-1)),q=[M],W={class:"z-40 -mt-6 text-center bg-black lg:border-b lg:-mt-3 lg:border-gradient-r-curious rounded-b-xl"},K={class:"mb-6 lg:mb-0"},J=d("Home"),Q={class:"mb-6 lg:mb-0"},U=d("Games"),X={class:"mb-6 lg:mb-0"},Y=d("Partners"),Z={class:"mb-6 lg:mb-0"},$=d("Career"),ee={class:"mb-6 lg:mb-0"},te=d("Contact"),oe={class:"flex-grow -mt-3 text-lg"},se=p(()=>o("div",{class:"grid grid-cols-3 overflow-hidden text-white bg-black md:h-36"},[o("div",{class:"grid col-span-3 md:col-span-1"},[o("p",{class:"self-end p-4 text-xxs"},"Curious Games is the owner of all software and all other material on this website. All intellectual property rights and any other protected rights vested therein exclusively belong to Curious Games. Any kind of exploitation of Curious Games intellectual property rights requires our written approval.")]),o("div",{class:"grid col-span-3 md:col-span-1"},[o("img",{src:A,alt:"hello",class:"self-end place-self-center h-28"})])],-1));function re(l,t,i,n,e,r){const s=f("router-link"),_=f("router-view");return g(),h("div",D,[o("div",R,[S,o("header",T,[o("nav",z,[o("div",F,[o("div",H,[c(s,{to:"/en/"},{default:u(()=>[N]),_:1})]),o("div",B,[o("button",{onClick:t[0]||(t[0]=(...a)=>r.toggleMenu&&r.toggleMenu(...a)),class:"right-0 px-3 py-2 border border-gray-500 rounded hover:text-gray-400 hover:border-gray-600"},q)])]),o("div",W,[o("ul",{class:y(["flex-grow block w-full p-4 font-bold tracking-wide uppercase lg:p-0.5 lg:px-2 lg:pb-1 gap-x-8 lg:flex lg:flex-initial lg:w-auto lg:mt-0",e.menuOpen?"block":"hidden"])},[o("li",K,[c(s,{onClick:t[1]||(t[1]=a=>e.menuOpen=!e.menuOpen),to:"/en/",class:"text-copy-primary hover:text-gray-400"},{default:u(()=>[J]),_:1})]),o("li",Q,[c(s,{onClick:t[2]||(t[2]=a=>e.menuOpen=!e.menuOpen),to:"/en/games",class:"text-copy-primary hover:text-gray-400 game"},{default:u(()=>[U]),_:1})]),o("li",X,[c(s,{onClick:t[3]||(t[3]=a=>e.menuOpen=!e.menuOpen),to:"/en/partners",class:"text-copy-primary hover:text-gray-400"},{default:u(()=>[Y]),_:1})]),o("li",Z,[c(s,{onClick:t[4]||(t[4]=a=>e.menuOpen=!e.menuOpen),to:"/en/career",class:"text-copy-primary hover:text-gray-400"},{default:u(()=>[$]),_:1})]),o("li",ee,[c(s,{onClick:t[5]||(t[5]=a=>e.menuOpen=!e.menuOpen),to:"/en/contact",class:"text-copy-primary hover:text-gray-400"},{default:u(()=>[te]),_:1})])],2)])])]),e.menuOpen?(g(),h("div",{key:0,class:"outside",onClick:t[6]||(t[6]=a=>r.away())})):b("",!0)]),o("div",oe,[c(_)]),se])}var ne=j(I,[["render",re],["__scopeId","data-v-1756e1aa"]]);const le="modulepreload",v={},ie="/",m=function(t,i){return!i||i.length===0?t():Promise.all(i.map(n=>{if(n=`${ie}${n}`,n in v)return;v[n]=!0;const e=n.endsWith(".css"),r=e?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${n}"]${r}`))return;const s=document.createElement("link");if(s.rel=e?"stylesheet":le,e||(s.as="script",s.crossOrigin=""),s.href=n,document.head.appendChild(s),e)return new Promise((_,a)=>{s.addEventListener("load",_),s.addEventListener("error",a)})})).then(()=>t())},ae=[{path:"/",redirect:"/en/"},{path:"/en/",name:"Home",component:()=>m(()=>import("./Home.d7a43b61.js"),["assets/Home.d7a43b61.js","assets/Home.dbc0fbe9.css","assets/vendor.12f02877.js"]),meta:{title:"Curious Games - Welcome"}},{path:"/en/games",name:"Games",component:()=>m(()=>import("./Games.3e514643.js"),["assets/Games.3e514643.js","assets/games.1a311048.js","assets/vendor.12f02877.js"]),meta:{title:"Curious Games - Games"}},{path:"/en/games/:slug",name:"GameDetail",component:()=>m(()=>import("./GameDetail.42ec1b92.js"),["assets/GameDetail.42ec1b92.js","assets/GameDetail.4b463a5e.css","assets/games.1a311048.js","assets/vendor.12f02877.js"]),props:!0,meta:{title:"Curious Games - Game Detail"}},{path:"/en/career",name:"Career",component:()=>m(()=>import("./Career.5ace806c.js"),["assets/Career.5ace806c.js","assets/vendor.12f02877.js"]),meta:{title:"Curious Games - Career"}},{path:"/en/contact",name:"Contact",component:()=>m(()=>import("./Contact.473773d1.js"),["assets/Contact.473773d1.js","assets/vendor.12f02877.js"]),meta:{title:"Curious Games - Contact"}},{path:"/en/partners",name:"Partners",component:()=>m(()=>import("./Partners.0d200ae8.js"),["assets/Partners.0d200ae8.js","assets/vendor.12f02877.js"]),meta:{title:"Curious Games - Partners"}},{path:"/:catchAll(.*)",name:"FourOFour",component:()=>m(()=>import("./FourOFour.af3543a6.js"),["assets/FourOFour.af3543a6.js","assets/vendor.12f02877.js"])}],x=O({history:k(),routes:ae});x.beforeEach((l,t,i)=>{document.title=l.meta.title?l.meta.title:"Curious Games",i()});var ce={state:{cssFramework:"Tailwind",jsFramework:{main:"Vue 3.0",list:["Router","Vuex 4.0"]},webServer:"Vite",features:["ESLint","Prettier"]}};const me=E({modules:{stack:ce}});G(ne).use(x).use(me).use(P).mount("#app");export{j as _};
