var H=Object.defineProperty;var u=Object.getOwnPropertySymbols;var T=Object.prototype.hasOwnProperty,B=Object.prototype.propertyIsEnumerable;var h=(a,t,s)=>t in a?H(a,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):a[t]=s,v=(a,t)=>{for(var s in t||(t={}))T.call(t,s)&&h(a,s,t[s]);if(u)for(var s of u(t))B.call(t,s)&&h(a,s,t[s]);return a};import{_ as x}from"./index.8cac2ad1.js";import{o as n,c,e as D,p as I,r as l,b as e,a as i,F as f,q as b,f as _,w as d,s as g,d as m,n as N,t as w}from"./vendor.71023684.js";import{C as V,S as L,P as M}from"./carousel.es.63414007.js";const P={},F={class:"hidden md:block"},G=D('<div class="z-50 flex items-center justify-center pt-32 md:pt-96 h-11" data-v-9de82172><svg viewBox="0 0 247 390" version="1.1" xmlns="http://www.w3.org/2000/svg" class="w-10 h-auto fill-none" data-v-9de82172><path d="M123.359,79.775l0,72.843" class="text-white stroke-current animate-scroll stroke-15" data-v-9de82172></path><path d="M236.717,123.359c0,-62.565 -50.794,-113.359 -113.358,-113.359c-62.565,0 -113.359,50.794 -113.359,113.359l0,143.237c0,62.565 50.794,113.359 113.359,113.359c62.564,0 113.358,-50.794 113.358,-113.359l0,-143.237Z" class="text-white stroke-current stroke-15 fill-none" data-v-9de82172></path></svg></div><p class="text-sm text-center mt-7" data-v-9de82172>scroll down</p>',2),q=[G];function A(a,t,s,k,p,y){return n(),c("div",F,q)}var E=x(P,[["render",A],["__scopeId","data-v-9de82172"]]),O="/mov/CG_Teaser_720p.mp4",Z="/mov/CG_Teaser_720p.webm";const J={components:{ScrollDownIcon:E,Carousel:V,Slide:L,Pagination:M},data(){return{slidersettings:{pauseAutoplayOnHover:!1}}},mounted(){this.$store.dispatch("loadHomeSections"),this.$nextTick().then(()=>document.body.classList.remove("gamepage"))},computed:v({},I(["homesections"]))},K={class:"relative"},Q={class:"w-auto bg-black md:h-screen md:pb-0"},R={class:"relative w-full mt-[4.2rem] md:mt-4 md:h-screen"},U=e("video",{autoplay:"",muted:"",loop:"",playsinline:"",preload:"auto",class:"absolute z-0 w-full h-full overflow-x-hidden md:object-cover"},[e("source",{src:O,type:"video/mp4"}),e("source",{src:Z,type:"video/webm"})],-1),W={class:"relative z-10 w-screen"},X={class:"flex items-center justify-center md:h-screen"},Y={class:"p-2 font-thin text-8xl md:text-9xl"},ee=e("span",{class:"block md:mr-20"},"\xA0",-1),te=_(),se=e("span",{class:"block ml-0 md:ml-20"},"\xA0",-1),oe={class:"relative w-full h-half md:h-screen"},ae=["src"],ne={class:"absolute inset-0 z-10 w-screen p-10 md:p-0"},ce={class:"max-w-md bg-black rounded-md bg-opacity-30"},le=["innerHTML"],re={class:"pt-4 border-t-2 border-gradient-r-curious"},de={class:"p-2 text-xl md:px-6 md:py-4 md:text-3xl"},ie={key:0,class:"block mt-3"};function _e(a,t,s,k,p,y){const $=l("ScrollDownIcon"),S=l("slide"),j=l("Pagination"),C=l("carousel"),z=l("router-link");return n(),c("div",K,[e("section",Q,[e("div",R,[U,e("div",W,[e("div",X,[e("p",Y,[ee,te,se,i($)])])])])]),(n(!0),c(f,null,b(a.homesections,o=>(n(),c("section",{class:"overflow-hidden bg-black min-h-[410px] md:min-h-screen",key:o.id},[e("div",oe,[i(C,{autoplay:2e3,"wrap-around":!0,class:"absolute w-full h-half md:h-screen"},{addons:d(({slidesCount:r})=>[r>1?(n(),g(j,{key:0})):m("",!0)]),default:d(()=>[(n(!0),c(f,null,b(o.images,r=>(n(),g(S,{key:r.id,class:"z-0 w-full h-full",settings:p.slidersettings},{default:d(()=>[e("img",{class:"object-cover w-full h-full opacity-60",src:r.path,alt:""},null,8,ae)]),_:2},1032,["settings"]))),128))]),_:2},1024),e("div",ne,[e("div",{class:N(["container flex items-center justify-center mx-auto lg:px-40 h-half md:h-screen",["md:"+o.ver,"md:"+o.hor,o.padding]])},[e("div",ce,[o.header?(n(),c("h2",{key:0,class:"p-2 text-2xl text-transparent md:px-6 md:py-4 md:text-4xl bg-clip-text bg-gradient-to-r from-cur-pink to-cur-blue",innerHTML:o.header},null,8,le)):m("",!0),e("div",re,[e("p",de,[_(w(o.text)+" ",1),o.buttontext?(n(),c("span",ie,[i(z,{class:"inline-block px-4 py-2 mt-2 text-lg text-black rounded-lg bg-cur-blue hover:bg-cur-pink hover:text-white",to:o.buttonlink},{default:d(()=>[_(w(o.buttontext),1)]),_:2},1032,["to"])])):m("",!0)])])])],2)])])]))),128))])}var ve=x(J,[["render",_e]]);export{ve as default};
