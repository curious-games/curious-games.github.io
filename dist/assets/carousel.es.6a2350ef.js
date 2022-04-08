import{i as se,j as i,k as L,p as w,l as pe,q as Se,s as ge,u as z,v as re,x as ye,y as _,z as b}from"./index.95ea1feb.js";/**
 * Vue 3 Carousel 0.1.38
 * (c) 2022
 * @license MIT
 */const m={itemsToShow:1,itemsToScroll:1,modelValue:0,transition:300,autoplay:0,snapAlign:"center",wrapAround:!1,pauseAutoplayOnHover:!1,mouseDrag:!0,touchDrag:!0,dir:"ltr",breakpoints:void 0};function xe(t,a){let l;return function(...o){l&&clearTimeout(l),l=setTimeout(()=>{t(...o),l=null},a)}}function we(t,a){let l;return function(...o){const y=this;l||(t.apply(y,o),l=!0,setTimeout(()=>l=!1,a))}}function be(t){var a,l,o;return t?((l=(a=t[0])===null||a===void 0?void 0:a.type)===null||l===void 0?void 0:l.name)==="CarouselSlide"?t:((o=t[0])===null||o===void 0?void 0:o.children)||[]:[]}function Te(t,a){if(t.wrapAround)return a-1;switch(t.snapAlign){case"start":return a-t.itemsToShow;case"end":return a-1;case"center":case"center-odd":return a-Math.ceil(t.itemsToShow/2);case"center-even":return a-Math.ceil(t.itemsToShow/2);default:return 0}}function Ae(t){if(t.wrapAround)return 0;switch(t.snapAlign){case"start":return 0;case"end":return t.itemsToShow-1;case"center":case"center-odd":return Math.floor((t.itemsToShow-1)/2);case"center-even":return Math.floor((t.itemsToShow-2)/2);default:return 0}}function ue(t,a,l,o){return t.wrapAround?a:Math.min(Math.max(a,o),l)}function Me({slidesBuffer:t,currentSlide:a,snapAlign:l,itemsToShow:o,wrapAround:y,slidesCount:h}){let s=t.indexOf(a);if(s===-1&&(s=t.indexOf(Math.ceil(a))),l==="center"||l==="center-odd"?s-=(o-1)/2:l==="center-even"?s-=(o-2)/2:l==="end"&&(s-=o-1),!y){const u=h-o,v=0;s=Math.max(Math.min(s,u),v)}return s}var Oe=se({name:"Carousel",props:{itemsToShow:{default:m.itemsToShow,type:Number},itemsToScroll:{default:m.itemsToScroll,type:Number},wrapAround:{default:m.wrapAround,type:Boolean},snapAlign:{default:m.snapAlign,validator(t){return["start","end","center","center-even","center-odd"].includes(t)}},transition:{default:m.transition,type:Number},breakpoints:{default:m.breakpoints,type:Object},autoplay:{default:m.autoplay,type:Number},pauseAutoplayOnHover:{default:m.pauseAutoplayOnHover,type:Boolean},modelValue:{default:void 0,type:Number},mouseDrag:{default:m.mouseDrag,type:Boolean},touchDrag:{default:m.touchDrag,type:Boolean},dir:{default:m.dir,validator(t){return["rtl","ltr"].includes(t)}},settings:{default(){return{}},type:Object}},setup(t,{slots:a,emit:l,expose:o}){var y;const h=i(null),s=i([]),u=i([]),v=i(0),r=i(1),C=i(null),j=i(null);let T=i({}),p=Object.assign({},m);const n=L(Object.assign({},p)),d=i((y=n.modelValue)!==null&&y!==void 0?y:0),ce=i(0),U=i(0),O=i(0),k=i(0);w("config",n),w("slidesBuffer",u),w("slidesCount",r),w("currentSlide",d),w("maxSlide",O),w("minSlide",k);function W(){const e=Object.assign(Object.assign({},t),t.settings);T=i(Object.assign({},e.breakpoints)),p=Object.assign(Object.assign({},e),{settings:void 0,breakpoints:void 0}),R(p)}function E(){const e=Object.keys(T.value).map(f=>Number(f)).sort((f,g)=>+g-+f);let c=Object.assign({},p);e.some(f=>window.matchMedia(`(min-width: ${f}px)`).matches?(c=Object.assign(Object.assign({},c),T.value[f]),!0):!1),R(c)}function R(e){for(let c in e)n[c]=e[c]}const de=xe(()=>{T.value&&(E(),D()),N()},16);function N(){if(!h.value)return;const e=h.value.getBoundingClientRect();v.value=e.width/n.itemsToShow}function D(){r.value=Math.max(s.value.length,1),!(r.value<=0)&&(U.value=Math.ceil((r.value-1)/2),O.value=Te(n,r.value),k.value=Ae(n),d.value=ue(n,d.value,O.value,k.value))}function V(){const e=[...Array(r.value).keys()];if(n.wrapAround&&n.itemsToShow+1<=r.value){let g=(n.itemsToShow!==1?Math.round((r.value-n.itemsToShow)/2):0)-d.value;if(n.snapAlign==="end"?g+=Math.floor(n.itemsToShow-1):(n.snapAlign==="center"||n.snapAlign==="center-odd")&&g++,g<0)for(let M=g;M<0;M++)e.push(Number(e.shift()));else for(let M=0;M<g;M++)e.unshift(Number(e.pop()))}u.value=e}pe(()=>{T.value&&(E(),D()),Se(()=>setTimeout(N,16)),n.autoplay&&n.autoplay>0&&K(),window.addEventListener("resize",de,{passive:!0})}),ge(()=>{j.value&&clearTimeout(j.value),Q(!1)});let S=!1;const I={x:0,y:0},P={x:0,y:0},A=L({x:0,y:0}),q=i(!1),X=i(!1),fe=()=>{X.value=!0},ve=()=>{X.value=!1},G=we(e=>{S||e.preventDefault(),P.x=S?e.touches[0].clientX:e.clientX,P.y=S?e.touches[0].clientY:e.clientY;const c=P.x-I.x,f=P.y-I.y;A.y=f,A.x=c},16);function F(e){S=e.type==="touchstart",S||e.preventDefault(),!(!S&&e.button!==0||B.value)&&(q.value=!0,I.x=S?e.touches[0].clientX:e.clientX,I.y=S?e.touches[0].clientY:e.clientY,document.addEventListener(S?"touchmove":"mousemove",G),document.addEventListener(S?"touchend":"mouseup",J))}function J(){q.value=!1;const e=n.dir==="rtl"?-1:1,c=Math.sign(A.x)*.4,f=Math.round(A.x/v.value+c)*e;let g=ue(n,d.value-f,O.value,k.value);x(g),A.x=0,A.y=0,document.removeEventListener(S?"touchmove":"mousemove",G),document.removeEventListener(S?"touchend":"mouseup",J)}function K(){C.value=setInterval(()=>{n.pauseAutoplayOnHover&&X.value||H()},n.autoplay)}function Q(e=!0){!C.value||(clearInterval(C.value),e&&K())}const B=i(!1);function x(e,c=!1){if(Q(),d.value===e||B.value)return;const f=r.value-1;if(e>f)return x(e-r.value);if(e<0)return x(e+r.value);B.value=!0,ce.value=d.value,d.value=e,c||l("update:modelValue",d.value),j.value=setTimeout(()=>{n.wrapAround&&V(),B.value=!1},n.transition)}function H(){let e=d.value+n.itemsToScroll;n.wrapAround||(e=Math.min(e,O.value)),x(e)}function Z(){let e=d.value-n.itemsToScroll;n.wrapAround||(e=Math.max(e,k.value)),x(e)}const ee={slideTo:x,next:H,prev:Z};w("nav",ee);const te=z(()=>Me({slidesBuffer:u.value,itemsToShow:n.itemsToShow,snapAlign:n.snapAlign,wrapAround:Boolean(n.wrapAround),currentSlide:d.value,slidesCount:r.value}));w("slidesToScroll",te);const me=z(()=>{const e=n.dir==="rtl"?-1:1,c=te.value*v.value*e;return{transform:`translateX(${A.x-c}px)`,transition:`${B.value?n.transition:0}ms`}});function ne(){W()}function ae(){W(),E(),D(),V(),N()}function le(){D(),V()}re(()=>Object.values(t),ae),ne(),ye(()=>{const e=r.value!==s.value.length;t.modelValue!==void 0&&d.value!==t.modelValue&&x(Number(t.modelValue),!0),e&&le()});const oe={config:n,slidesBuffer:u,slidesCount:r,slideWidth:v,currentSlide:d,maxSlide:O,minSlide:k,middleSlide:U};o({updateBreakpointsConfigs:E,updateSlidesData:D,updateSlideWidth:N,updateSlidesBuffer:V,initCarousel:ne,restartCarousel:ae,updateCarousel:le,slideTo:x,next:H,prev:Z,nav:ee,data:oe});const Y=a.default||a.slides,$=a.addons,ie=L(oe);return()=>{const e=be(Y==null?void 0:Y(ie)),c=($==null?void 0:$(ie))||[];s.value=e,e.forEach((M,he)=>M.props.index=he);const f=_("ol",{class:"carousel__track",style:me.value,onMousedown:n.mouseDrag?F:null,onTouchstart:n.touchDrag?F:null},e),g=_("div",{class:"carousel__viewport"},f);return _("section",{ref:h,class:{carousel:!0,"carousel--rtl":n.dir==="rtl"},dir:n.dir,"aria-label":"Gallery",onMouseenter:fe,onMouseleave:ve},[g,c])}}}),ke=se({name:"CarouselSlide",props:{index:{type:Number,default:1}},setup(t,{slots:a}){const l=b("config",L(Object.assign({},m))),o=b("slidesBuffer",i([])),y=b("currentSlide",i(0)),h=b("slidesToScroll",i(0)),s=i(t.index);l.wrapAround&&(u(),re(o,u));function u(){s.value=o.value.indexOf(t.index)}const v=z(()=>{const p=l.itemsToShow;return{width:`${1/p*100}%`,order:s.value.toString()}}),r=()=>t.index===y.value,C=()=>{const p=Math.ceil(h.value),n=Math.floor(h.value+l.itemsToShow);return o.value.slice(p,n).includes(t.index)},j=()=>t.index===o.value[Math.ceil(h.value)-1],T=()=>t.index===o.value[Math.floor(h.value+l.itemsToShow)];return()=>{var p;return _("li",{style:v.value,class:{carousel__slide:!0,"carousel__slide--active":r(),"carousel__slide--visible":C(),"carousel__slide--prev":j(),"carousel__slide--next":T()}},(p=a.default)===null||p===void 0?void 0:p.call(a))}}});const Ce=()=>{const t=b("maxSlide",i(1)),a=b("minSlide",i(1)),l=b("currentSlide",i(1)),o=b("nav",{});function y(u){o.slideTo(u)}const h=u=>{const v=l.value;return v===u||v>t.value&&u>=t.value||v<a.value&&u<=a.value},s=[];for(let u=a.value;u<t.value+1;u++){const v=_("button",{type:"button",class:{"carousel__pagination-button":!0,"carousel__pagination-button--active":h(u)},"aria-label":`Navigate to slide ${u+1}`,onClick:()=>y(u)}),r=_("li",{class:"carousel__pagination-item",key:u},v);s.push(r)}return _("ol",{class:"carousel__pagination"},s)};export{Oe as C,Ce as P,ke as S};
