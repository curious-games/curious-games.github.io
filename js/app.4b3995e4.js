(function(e){function a(a){for(var n,r,o=a[0],u=a[1],l=a[2],s=0,d=[];s<o.length;s++)r=o[s],Object.prototype.hasOwnProperty.call(i,r)&&i[r]&&d.push(i[r][0]),i[r]=0;for(n in u)Object.prototype.hasOwnProperty.call(u,n)&&(e[n]=u[n]);m&&m(a);while(d.length)d.shift()();return c.push.apply(c,l||[]),t()}function t(){for(var e,a=0;a<c.length;a++){for(var t=c[a],n=!0,r=1;r<t.length;r++){var o=t[r];0!==i[o]&&(n=!1)}n&&(c.splice(a--,1),e=u(u.s=t[0]))}return e}var n={},r={app:0},i={app:0},c=[];function o(e){return u.p+"js/"+({}[e]||e)+"."+{"chunk-03e85b4f":"4e553648","chunk-2991811b":"db5442d2","chunk-2d0b5a71":"01fcaa24","chunk-2d0d0a10":"e8eb2ced","chunk-2d20811b":"45f511d0","chunk-2d210c47":"5441bbb1","chunk-6c796c57":"3c6d1ee0","chunk-26b9528e":"3e8c844c","chunk-34bd50e6":"e42e4ede","chunk-4c7a57d2":"f5d6287c","chunk-75cc5886":"7459fac6","chunk-ebff9384":"24bd45df","chunk-ed69430a":"c0ad7730"}[e]+".js"}function u(a){if(n[a])return n[a].exports;var t=n[a]={i:a,l:!1,exports:{}};return e[a].call(t.exports,t,t.exports,u),t.l=!0,t.exports}u.e=function(e){var a=[],t={"chunk-03e85b4f":1,"chunk-2991811b":1,"chunk-26b9528e":1,"chunk-34bd50e6":1,"chunk-4c7a57d2":1,"chunk-75cc5886":1,"chunk-ebff9384":1,"chunk-ed69430a":1};r[e]?a.push(r[e]):0!==r[e]&&t[e]&&a.push(r[e]=new Promise((function(a,t){for(var n="css/"+({}[e]||e)+"."+{"chunk-03e85b4f":"d6a9b787","chunk-2991811b":"426daed0","chunk-2d0b5a71":"31d6cfe0","chunk-2d0d0a10":"31d6cfe0","chunk-2d20811b":"31d6cfe0","chunk-2d210c47":"31d6cfe0","chunk-6c796c57":"31d6cfe0","chunk-26b9528e":"f4b2ffbf","chunk-34bd50e6":"0030781d","chunk-4c7a57d2":"2005e48b","chunk-75cc5886":"d6a9b787","chunk-ebff9384":"d6a9b787","chunk-ed69430a":"d6a9b787"}[e]+".css",i=u.p+n,c=document.getElementsByTagName("link"),o=0;o<c.length;o++){var l=c[o],s=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(s===n||s===i))return a()}var d=document.getElementsByTagName("style");for(o=0;o<d.length;o++){l=d[o],s=l.getAttribute("data-href");if(s===n||s===i)return a()}var m=document.createElement("link");m.rel="stylesheet",m.type="text/css",m.onload=a,m.onerror=function(a){var n=a&&a.target&&a.target.src||i,c=new Error("Loading CSS chunk "+e+" failed.\n("+n+")");c.code="CSS_CHUNK_LOAD_FAILED",c.request=n,delete r[e],m.parentNode.removeChild(m),t(c)},m.href=i;var f=document.getElementsByTagName("head")[0];f.appendChild(m)})).then((function(){r[e]=0})));var n=i[e];if(0!==n)if(n)a.push(n[2]);else{var c=new Promise((function(a,t){n=i[e]=[a,t]}));a.push(n[2]=c);var l,s=document.createElement("script");s.charset="utf-8",s.timeout=120,u.nc&&s.setAttribute("nonce",u.nc),s.src=o(e);var d=new Error;l=function(a){s.onerror=s.onload=null,clearTimeout(m);var t=i[e];if(0!==t){if(t){var n=a&&("load"===a.type?"missing":a.type),r=a&&a.target&&a.target.src;d.message="Loading chunk "+e+" failed.\n("+n+": "+r+")",d.name="ChunkLoadError",d.type=n,d.request=r,t[1](d)}i[e]=void 0}};var m=setTimeout((function(){l({type:"timeout",target:s})}),12e4);s.onerror=s.onload=l,document.head.appendChild(s)}return Promise.all(a)},u.m=e,u.c=n,u.d=function(e,a,t){u.o(e,a)||Object.defineProperty(e,a,{enumerable:!0,get:t})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,a){if(1&a&&(e=u(e)),8&a)return e;if(4&a&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(u.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&a&&"string"!=typeof e)for(var n in e)u.d(t,n,function(a){return e[a]}.bind(null,n));return t},u.n=function(e){var a=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(a,"a",a),a},u.o=function(e,a){return Object.prototype.hasOwnProperty.call(e,a)},u.p="/",u.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],s=l.push.bind(l);l.push=a,l=l.slice();for(var d=0;d<l.length;d++)a(l[d]);var m=s;c.push([0,"chunk-vendors"]),t()})({0:function(e,a,t){e.exports=t("56d7")},1:function(e,a){},"49f8":function(e,a,t){var n={"./en.json":"edd4","./tr.json":"ffeb"};function r(e){var a=i(e);return t(a)}function i(e){if(!t.o(n,e)){var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}return n[e]}r.keys=function(){return Object.keys(n)},r.resolve=i,e.exports=r,r.id="49f8"},"56d7":function(e,a,t){"use strict";t.r(a);t("cadf"),t("551c"),t("f751"),t("097d");var n=t("2b0e"),r=t("dc96"),i=t.n(r),c=t("1881"),o=t.n(c),u=t("f206"),l=t.n(u),s=(t("def6"),function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{staticClass:"relative flex flex-col min-h-screen font-sans text-white"},[t("div",{staticClass:"fixed z-30 h-29"},[t("div",{staticClass:"fixed z-40 w-screen bg-black border-b border-gray-600 h-29"}),t("header",{staticClass:"fixed z-50 w-full"},[t("nav",{staticClass:"container relative px-8 pt-8 pb-5 mx-auto lg:flex lg:items-center lg:justify-between md:flex-wrap"},[t("div",{staticClass:"flex items-center justify-between lg:flex-none"},[t("div",{staticClass:"h-20 -mt-2 lg:mt-3 lg:h-32"},[t("router-link",{attrs:{to:"/"+e.$i18n.locale+"/"}},[t("img",{staticClass:"w-20 lg:w-32",attrs:{src:"/gfx/CG_Logo_Black.png",alt:"logo"}})])],1),t("div",{staticClass:"flex -mt-6 place-content-end lg:hidden"},[t("button",{staticClass:"right-0 px-3 py-2 border border-gray-500 rounded hover:text-gray-400 hover:border-gray-600",on:{click:e.toggleMenu}},[t("svg",{staticClass:"w-3 h-3 current-color",attrs:{viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"}},[t("path",{attrs:{d:"M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z",fill:"gray"}})])])])]),t("div",{staticClass:"z-40 text-center bg-black lg:border-b lg:-mt-3 lg:border-gradient-r-curious rounded-b-xl"},[t("ul",{staticClass:"flex-grow block w-full p-4 font-bold tracking-wide uppercase lg:p-0.5 lg:px-2 lg:pb-1 gap-x-8 lg:flex lg:flex-initial lg:w-auto lg:mt-0",class:e.menuOpen?"block":"hidden"},[t("li",{staticClass:"mb-6 lg:mb-0"},[t("router-link",{staticClass:"text-copy-primary hover:text-gray-400",attrs:{to:"/"+e.$i18n.locale+"/"}},[e._v(e._s(e.$t("nav.home")))])],1),t("li",{staticClass:"mb-6 lg:mb-0"},[t("router-link",{staticClass:"text-copy-primary hover:text-gray-400",attrs:{to:"/"+e.$i18n.locale+"/games"}},[e._v(e._s(e.$t("nav.games")))])],1),t("li",{staticClass:"mb-6 lg:mb-0"},[t("router-link",{staticClass:"text-copy-primary hover:text-gray-400",attrs:{to:"/"+e.$i18n.locale+"/partners"}},[e._v(e._s(e.$t("nav.partners")))])],1),t("li",{staticClass:"mb-6 lg:mb-0"},[t("router-link",{staticClass:"text-copy-primary hover:text-gray-400",attrs:{to:"/"+e.$i18n.locale+"/career"}},[e._v(e._s(e.$t("nav.career")))])],1),t("li",{staticClass:"mb-6 lg:mb-0"},[t("router-link",{staticClass:"text-copy-primary hover:text-gray-400",attrs:{to:"/"+e.$i18n.locale+"/contact"}},[e._v(e._s(e.$t("nav.contact")))])],1)])])])]),e.menuOpen?t("div",{staticClass:"outside",on:{click:function(a){return e.away()}}}):e._e()]),t("div",{staticClass:"flex-grow -mt-3 text-lg"},[t("router-view")],1),e._m(0)])}),d=[function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{staticClass:"grid grid-cols-3 overflow-hidden text-white bg-black md:h-36 "},[t("div",{staticClass:"grid col-span-3 md:col-span-1"},[t("p",{staticClass:"self-end p-4 text-xxs"},[e._v("Curious Games is the owner of all software and all other material on this website. All intellectual property rights and any other protected rights vested therein exclusively belong to Curious Games. Any kind of exploitation of Curious Games intellectual property rights requires our written approval.")])]),t("div",{staticClass:"grid col-span-3 md:col-span-1"},[t("img",{staticClass:"self-end place-self-center h-28",attrs:{src:"/gfx/footer.png",alt:"hello"}})])])}],m={name:"app",data:function(){return{menuOpen:!1}},methods:{toggleMenu:function(){this.menuOpen=!this.menuOpen},away:function(){this.menuOpen=!1}}},f=m,h=(t("a271"),t("2877")),b=Object(h["a"])(f,s,d,!1,null,"aa71f958",null),p=b.exports,k=t("8c4f"),g=(t("4917"),t("ac6a"),t("a925"));function v(){var e=t("49f8"),a={};return e.keys().forEach((function(t){var n=t.match(/([A-Za-z0-9-_]+)\./i);if(n&&n.length>1){var r=n[1];a[r]=e(t)}})),a}n["a"].use(g["a"]);var y=new g["a"]({locale:"en",fallbackLocale:"en",messages:v()});n["a"].use(k["a"]);var x=["Home-k9.vue","Home-bug.vue"],C=new k["a"]({mode:"history",base:"/",routes:[{path:"/",redirect:"/".concat(y.locale,"/")},{path:"/:lang",component:{render:function(e){return e("router-view")}},children:[{path:"/",name:"home",component:function(){return t("9dac")("./".concat(x[Math.floor(Math.random()*x.length)]))}},{path:"games",name:"games",component:function(){return t.e("chunk-2d20811b").then(t.bind(null,"a2e9"))}},{path:"games/cockroachracers",name:"games.cockroachracers",props:{gamePage:!0},component:function(){return t.e("chunk-2991811b").then(t.bind(null,"c6ba"))}},{path:"games/robodog",name:"robodog",component:function(){return t.e("chunk-ed69430a").then(t.bind(null,"180f"))}},{path:"games/cyberrace",name:"cyberrace",component:function(){return t.e("chunk-ebff9384").then(t.bind(null,"c1a3"))}},{path:"games/tronbikers",name:"tronbikers",component:function(){return t.e("chunk-03e85b4f").then(t.bind(null,"0add"))}},{path:"games/catchacrab",name:"catchacrab",component:function(){return t.e("chunk-75cc5886").then(t.bind(null,"f4d5"))}},{path:"partners",name:"partners",component:function(){return t.e("chunk-2d0b5a71").then(t.bind(null,"1a8c"))}},{path:"career",name:"career",component:function(){return t.e("chunk-2d0d0a10").then(t.bind(null,"6990"))}},{path:"contact",name:"contact",component:function(){return t.e("chunk-2d210c47").then(t.bind(null,"b8fa"))}}]}]}),w=t("d6d3"),O=t.n(w);t("fda2");n["a"].use(l.a),n["a"].use(i.a),n["a"].use(o.a),n["a"].use(O.a),n["a"].config.productionTip=!1,C.beforeEach((function(e,a,t){var n=e.params.lang;n||(n="en"),y.locale=n,t()})),new n["a"]({router:C,i18n:y,render:function(e){return e(p)}}).$mount("#app")},"960e":function(e,a,t){},"9dac":function(e,a,t){var n={"./Career":["6990","chunk-2d0d0a10"],"./Career.vue":["6990","chunk-2d0d0a10"],"./Contact":["b8fa","chunk-2d210c47"],"./Contact.vue":["b8fa","chunk-2d210c47"],"./Games":["a2e9","chunk-2d20811b"],"./Games.vue":["a2e9","chunk-2d20811b"],"./Home":["bb51","chunk-6c796c57","chunk-34bd50e6"],"./Home-bug":["8b21","chunk-6c796c57","chunk-26b9528e"],"./Home-bug.vue":["8b21","chunk-6c796c57","chunk-26b9528e"],"./Home-k9":["7e82","chunk-6c796c57","chunk-4c7a57d2"],"./Home-k9.vue":["7e82","chunk-6c796c57","chunk-4c7a57d2"],"./Home.vue":["bb51","chunk-6c796c57","chunk-34bd50e6"],"./Partners":["1a8c","chunk-2d0b5a71"],"./Partners.vue":["1a8c","chunk-2d0b5a71"],"./games/Catchacrab":["f4d5","chunk-75cc5886"],"./games/Catchacrab.vue":["f4d5","chunk-75cc5886"],"./games/Cockroachracers":["c6ba","chunk-2991811b"],"./games/Cockroachracers.vue":["c6ba","chunk-2991811b"],"./games/Cyberrace":["c1a3","chunk-ebff9384"],"./games/Cyberrace.vue":["c1a3","chunk-ebff9384"],"./games/Robodog":["180f","chunk-ed69430a"],"./games/Robodog.vue":["180f","chunk-ed69430a"],"./games/Tronbikers":["0add","chunk-03e85b4f"],"./games/Tronbikers.vue":["0add","chunk-03e85b4f"]};function r(e){if(!t.o(n,e))return Promise.resolve().then((function(){var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}));var a=n[e],r=a[0];return Promise.all(a.slice(1).map(t.e)).then((function(){return t(r)}))}r.keys=function(){return Object.keys(n)},r.id="9dac",e.exports=r},a271:function(e,a,t){"use strict";t("960e")},def6:function(e,a,t){},edd4:function(e){e.exports=JSON.parse('{"nav":{"features":"Features","home":"Home","games":"Games","partners":"Partners","career":"Career","contact":"Contact"},"home":{"title":"Home","content":"Lorem ipsum dolor sit amet consectetur <a href=\'#\' class=\'text-blue-600 hover:text-blue-800\'>adipisicing</a> elit. Aut dicta incidunt ea ut commodi quidem temporibus illo quia. Et itaque deleniti veniam tempore facere ipsum animi totam culpa minima vel voluptatem adipisci natus blanditiis similique sunt expedita, ex dicta doloremque repellat vitae temporibus. Quisquam quia, accusantium blanditiis architecto facilis saepe! Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad unde laborum ut suscipit iure aliquam sapiente doloribus exercitationem nam sint."},"about":{"title":"About","content":"Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut dicta incidunt ea ut commodi quidem temporibus illo quia. Et itaque deleniti veniam tempore facere ipsum animi totam culpa minima vel voluptatem adipisci natus blanditiis similique sunt expedita, ex dicta doloremque repellat vitae temporibus. Quisquam quia, accusantium blanditiis architecto facilis saepe! Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad unde laborum ut suscipit iure aliquam sapiente doloribus exercitationem nam sint."}}')},ffeb:function(e){e.exports=JSON.parse('{"nav":{"features":"Özellikler","home":"Anasayfa","games":"Oyunlar","partners":"Ortaklar","career":"İş Olanakları","contact":"İletişim"},"home":{"title":"Anasayfa","content":"Yapacakmış mıknatıslı <a href=\'#\' class=\'text-blue-600 hover:text-blue-800\'>okuma</a> sayfası gülüyorum de layıkıyla beğendim gül duyulmamış hesap makinesi yazın. Dışarı çıktılar anlamsız masanın gül değerli olduğu için salladı düşünüyor beğendim masaya doğru cesurca yaptı beğendim salladı lakin yapacakmış. Otobüs şafak ama mutlu oldular beğendim hesap makinesi sıradanlıktan un değirmeni lakin çakıl. Tv yazın filmini mi cezbelendi sarmal açılmadan dolayı sarmal açılmadan dolayı bundan dolayı mutlu oldular bilgiyasayarı ama sıla batarya kutusu değerli olduğu için. Ama türemiş sıfat koyun yapacakmış göze çarpan bilgiyasayarı ekşili çorba mutlu oldular masaya doğru öyle ki sokaklarda de göze çarpan tv. Uzattı eve doğru sıradanlıktan tv gitti göze çarpan sevindi salladı şafak layıkıyla. Kapının kulu batarya kutusu eve doğru biber hesap makinesi adanaya telefonu de batarya kutusu."},"about":{"title":"Hakkımızda","content":"Yapacakmış mıknatıslı okuma sayfası gülüyorum de layıkıyla beğendim gül duyulmamış hesap makinesi yazın. Dışarı çıktılar anlamsız masanın gül değerli olduğu için salladı düşünüyor beğendim masaya doğru cesurca yaptı beğendim salladı lakin yapacakmış. Otobüs şafak ama mutlu oldular beğendim hesap makinesi sıradanlıktan un değirmeni lakin çakıl. Tv yazın filmini mi cezbelendi sarmal açılmadan dolayı sarmal açılmadan dolayı bundan dolayı mutlu oldular bilgiyasayarı ama sıla batarya kutusu değerli olduğu için. Ama türemiş sıfat koyun yapacakmış göze çarpan bilgiyasayarı ekşili çorba mutlu oldular masaya doğru öyle ki sokaklarda de göze çarpan tv. Uzattı eve doğru sıradanlıktan tv gitti göze çarpan sevindi salladı şafak layıkıyla. Kapının kulu batarya kutusu eve doğru biber hesap makinesi adanaya telefonu de batarya kutusu."}}')}});
//# sourceMappingURL=app.4b3995e4.js.map