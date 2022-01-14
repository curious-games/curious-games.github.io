import{j as w}from"./games.67b984ad.js";import{C as L,S as G,P as j}from"./carousel.es.e38c5860.js";import{_ as C}from"./index.e116f9d7.js";import{r as i,o as e,c as o,F as p,k as u,b as r,w as d,l as h,d as a,D,a as t,t as l}from"./vendor.36ea9c45.js";const M={props:["slug"],components:{Carousel:L,Slide:G,Pagination:j},data(){return{games:w.games,plyroptions:{controls:["play-large","play","progress","current-time","mute","volume","fullscreen"]},slidersettings:{pauseAutoplayOnHover:!1}}},methods:{filteredGame(c){return this.games.filter(_=>_.slug===c)}},mounted(){window.scrollTo(0,0),this.$nextTick().then(()=>document.body.classList.add("gamepage"))}},T={class:"pt-20 md:pt-26"},B={class:"container relative py-10 mx-auto text-black md:px-0"},H={class:"grid grid-cols-6 gap-4 mx-4 md:mx-0 auto-cols-max"},S={class:"relative mb-10 md:mb-0"},N=t("svg",{class:"w-10 h-10 ml-2 md:ml-4 md:w-16 md:h-16 md:ml-0 fill-cur-blue",viewBox:"0 0 200 200",xmlns:"http://www.w3.org/2000/svg"},[t("path",{d:"M100 15a85 85 0 1 0 85 85 84.93 84.93 0 0 0-85-85Zm0 150a65 65 0 1 1 65-65 64.87 64.87 0 0 1-65 65Zm16.5-107.5a9.67 9.67 0 0 0-14 0L74 86a19.92 19.92 0 0 0 0 28.5l28.5 28.5a9.9 9.9 0 0 0 14-14l-28-29L117 71.5c3.5-3.5 3.5-10-.5-14Z"})],-1),P={class:"grid col-span-6 md:col-span-5 md:pl-6"},R={class:"col-span-5 mb-8 text-2xl font-semibold md:text-6xl"},V=["innerHTML"],Z={class:"col-span-5 col-start-1 pr-4 md:px-4 md:col-span-3 md:font-thin md:pl-0"},A=t("h2",{class:"mb-8 text-xl font-semibold md:text-3xl"},"About game",-1),F=["innerHTML"],z={class:"col-span-6 md:col-span-2 md:text-right"},E=t("h2",{class:"mb-8 text-xl font-semibold md:px-4 md:text-3xl md:px-0"},"Specifications",-1),I={class:"grid grid-cols-2 gap-4 p-6 bg-gray-100 rounded-lg bg-opacity-70 md:font-thin"},O={key:0,class:"text-gray-800"},$={class:"text-gray-500"},q={key:1,class:"text-gray-800"},J={class:"text-gray-500"},K={key:2,class:"text-gray-800"},Q={class:"text-gray-500"},U={key:3,class:"text-gray-800"},W={class:"text-gray-500"},X={key:4,class:"text-gray-800"},Y={class:"text-gray-500"},tt={key:5,class:"text-gray-800"},st={class:"text-gray-500"},et={key:0,class:"col-span-6 px-4 mt-6 md:px-0 md:mt-24 md:col-start-1"},ot=["data-poster"],at=["src"];function lt(c,_,x,it,m,y){const v=i("slide"),g=i("Pagination"),b=i("carousel"),f=i("router-link"),k=i("vue-plyr");return e(),o("div",T,[(e(!0),o(p,null,u(y.filteredGame(x.slug),s=>(e(),o("div",{key:s.id},[r(b,{autoplay:3e3},{addons:d(({slidesCount:n})=>[n>1?(e(),h(g,{key:0})):a("",!0)]),default:d(()=>[(e(!0),o(p,null,u(s.sliders,n=>(e(),h(v,{key:n.id,class:"bg-center bg-cover h-80 md:h-108",style:D({backgroundImage:"url("+n.slide+")"}),settings:m.slidersettings},null,8,["style","settings"]))),128))]),_:2},1024),t("div",B,[t("div",H,[t("div",S,[r(f,{to:"/en/games/",class:"absolute top-0 right-0 w-16 pl-2 mb-8 md:mr-6"},{default:d(()=>[N]),_:1})]),t("div",P,[t("div",R,[t("p",{innerHTML:s.title},null,8,V)]),t("div",Z,[A,t("div",{class:"text-black about",innerHTML:s.about},null,8,F)]),t("div",z,[E,t("div",I,[s.date?(e(),o("div",O,"Release Date")):a("",!0),t("div",$,l(s.date),1),s.type?(e(),o("div",q,"Game type")):a("",!0),t("div",J,l(s.type),1),s.mobile?(e(),o("div",K,"Mobile")):a("",!0),t("div",Q,l(s.mobile),1),s.rng?(e(),o("div",U,"RNG Certified")):a("",!0),t("div",W,l(s.rng),1),s.resolution?(e(),o("div",X,"Game resolution")):a("",!0),t("div",Y,l(s.resolution),1),s.duration?(e(),o("div",tt,"Race Duration")):a("",!0),t("div",st,l(s.duration),1)])]),s.video?(e(),o("div",et,[r(k,{options:m.plyroptions},{default:d(()=>[t("video",{playsinline:"","data-poster":s.poster},[t("source",{src:s.video,type:"video/mp4"},null,8,at)],8,ot)]),_:2},1032,["options"])])):a("",!0)])])])]))),128))])}var _t=C(M,[["render",lt]]);export{_t as default};
