import{m as ie,p as x,q as L,s as u,v as se,x as z,y as _,z as b,A as pe,B as Se,C as ge}from"./vendor.36ea9c45.js";/**
 * Vue 3 Carousel 0.1.35
 * (c) 2021
 * @license MIT
 */const m={itemsToShow:1,itemsToScroll:1,modelValue:0,transition:300,autoplay:0,snapAlign:"center",wrapAround:!1,pauseAutoplayOnHover:!1,mouseDrag:!0,touchDrag:!0,breakpoints:void 0};function ye(t,a){let l;return function(...o){l&&clearTimeout(l),l=setTimeout(()=>{t(...o),l=null},a)}}function we(t,a){let l;return function(...o){const S=this;l||(t.apply(S,o),l=!0,setTimeout(()=>l=!1,a))}}function xe(t){var a,l,o;return t?((l=(a=t[0])===null||a===void 0?void 0:a.type)===null||l===void 0?void 0:l.name)==="CarouselSlide"?t:((o=t[0])===null||o===void 0?void 0:o.children)||[]:[]}function be(t,a){if(t.wrapAround)return a-1;switch(t.snapAlign){case"start":return a-t.itemsToShow;case"end":return a-1;case"center":case"center-odd":return a-Math.ceil(t.itemsToShow/2);case"center-even":return a-Math.ceil(t.itemsToShow/2);default:return 0}}function Te(t){if(t.wrapAround)return 0;switch(t.snapAlign){case"start":return 0;case"end":return t.itemsToShow-1;case"center":case"center-odd":return Math.floor((t.itemsToShow-1)/2);case"center-even":return Math.floor((t.itemsToShow-2)/2);default:return 0}}function re(t,a,l,o){return t.wrapAround?a:Math.min(Math.max(a,o),l)}function Ae({slidesBuffer:t,currentSlide:a,snapAlign:l,itemsToShow:o,wrapAround:S,slidesCount:h}){let r=t.indexOf(a);if(l==="center"||l==="center-odd"?r-=(o-1)/2:l==="center-even"?r-=(o-2)/2:l==="end"&&(r-=o-1),!S){const i=h-o,v=0;r=Math.max(Math.min(r,i),v)}return r}var _e=ie({name:"Carousel",props:{itemsToShow:{default:m.itemsToShow,type:Number},itemsToScroll:{default:m.itemsToScroll,type:Number},wrapAround:{default:m.wrapAround,type:Boolean},snapAlign:{default:m.snapAlign,validator(t){return["start","end","center","center-even","center-odd"].includes(t)}},transition:{default:m.transition,type:Number},breakpoints:{default:m.breakpoints,type:Object},autoplay:{default:m.autoplay,type:Number},pauseAutoplayOnHover:{default:m.pauseAutoplayOnHover,type:Boolean},modelValue:{default:void 0,type:Number},mouseDrag:{default:m.mouseDrag,type:Boolean},touchDrag:{default:m.touchDrag,type:Boolean},settings:{default(){return{}},type:Object}},setup(t,{slots:a,emit:l,expose:o}){var S;const h=u(null),r=u([]),i=u([]),v=u(0),s=u(1),j=u(null),k=u(null);let T=u({}),g=Object.assign({},m);const n=L(Object.assign({},m)),d=u((S=n.modelValue)!==null&&S!==void 0?S:0),ce=u(0),U=u(0),O=u(0),C=u(0);b("config",n),b("slidesBuffer",i),b("slidesCount",s),b("currentSlide",d),b("maxSlide",O),b("minSlide",C);function W(){const e=Object.assign(Object.assign({},t),t.settings);T=u(Object.assign({},e.breakpoints)),g=Object.assign(Object.assign({},e),{settings:void 0,breakpoints:void 0}),R(g)}function E(){const e=Object.keys(T.value).map(f=>Number(f)).sort((f,y)=>+y-+f);let c=Object.assign({},g);e.some(f=>window.matchMedia(`(min-width: ${f}px)`).matches?(c=Object.assign(Object.assign({},c),T.value[f]),!0):!1),R(c)}function R(e){for(let c in e)n[c]=e[c]}const de=ye(()=>{T.value&&(E(),D()),N()},16);function N(){if(!h.value)return;const e=h.value.getBoundingClientRect();v.value=e.width/n.itemsToShow}function D(){s.value=r.value.length,!(s.value<=0)&&(U.value=Math.ceil((s.value-1)/2),O.value=be(n,s.value),C.value=Te(n),d.value=re(n,d.value,O.value,C.value))}function V(){const e=[...Array(s.value).keys()];if(n.wrapAround&&n.itemsToShow+1<=s.value){let y=(n.itemsToShow!==1?Math.round((s.value-n.itemsToShow)/2):0)-d.value;if(n.snapAlign==="end"?y+=Math.floor(n.itemsToShow-1):(n.snapAlign==="center"||n.snapAlign==="center-odd")&&y++,y<0)for(let M=y;M<0;M++)e.push(Number(e.shift()));else for(let M=0;M<y;M++)e.unshift(Number(e.pop()))}i.value=e}pe(()=>{T.value&&(E(),D()),N(),n.autoplay&&n.autoplay>0&&K(),window.addEventListener("resize",de,{passive:!0})}),Se(()=>{k.value&&clearTimeout(k.value),Q(!1)});let p=!1;const I={x:0,y:0},P={x:0,y:0},A=L({x:0,y:0}),q=u(!1),X=u(!1),fe=()=>{X.value=!0},ve=()=>{X.value=!1},G=we(e=>{p||e.preventDefault(),P.x=p?e.touches[0].clientX:e.clientX,P.y=p?e.touches[0].clientY:e.clientY;const c=P.x-I.x,f=P.y-I.y;A.y=f,A.x=c},16);function F(e){p=e.type==="touchstart",p||e.preventDefault(),!(!p&&e.button!==0||B.value)&&(q.value=!0,I.x=p?e.touches[0].clientX:e.clientX,I.y=p?e.touches[0].clientY:e.clientY,document.addEventListener(p?"touchmove":"mousemove",G),document.addEventListener(p?"touchend":"mouseup",J))}function J(){q.value=!1;const e=Math.sign(A.x)*.4,c=Math.round(A.x/v.value+e);let f=re(n,d.value-c,O.value,C.value);w(f),A.x=0,A.y=0,document.removeEventListener(p?"touchmove":"mousemove",G),document.removeEventListener(p?"touchend":"mouseup",J)}function K(){j.value=setInterval(()=>{n.pauseAutoplayOnHover&&X.value||H()},n.autoplay)}function Q(e=!0){!j.value||(clearInterval(j.value),e&&K())}const B=u(!1);function w(e,c=!1){if(Q(),d.value===e||B.value)return;const f=s.value-1;if(e>f)return w(e-s.value);if(e<0)return w(e+s.value);B.value=!0,ce.value=d.value,d.value=e,c||l("update:modelValue",d.value),k.value=setTimeout(()=>{n.wrapAround&&V(),B.value=!1},n.transition)}function H(){let e=d.value+n.itemsToScroll;n.wrapAround||(e=Math.min(e,O.value)),w(e)}function Z(){let e=d.value-n.itemsToScroll;n.wrapAround||(e=Math.max(e,C.value)),w(e)}const ee={slideTo:w,next:H,prev:Z};b("nav",ee);const te=z(()=>Ae({slidesBuffer:i.value,itemsToShow:n.itemsToShow,snapAlign:n.snapAlign,wrapAround:Boolean(n.wrapAround),currentSlide:d.value,slidesCount:s.value}));b("slidesToScroll",te);const me=z(()=>({transform:`translateX(${A.x-te.value*v.value}px)`,transition:`${B.value?n.transition:0}ms`}));function ne(){W()}function ae(){W(),E(),D(),V(),N()}function le(){D(),V()}se(t,ae),ne(),ge(()=>{const e=s.value!==r.value.length;t.modelValue!==void 0&&d.value!==t.modelValue&&w(Number(t.modelValue),!0),e&&le()});const oe={config:n,slidesBuffer:i,slidesCount:s,slideWidth:v,currentSlide:d,maxSlide:O,minSlide:C,middleSlide:U};o({updateBreakpointsConfigs:E,updateSlidesData:D,updateSlideWidth:N,updateSlidesBuffer:V,initCarousel:ne,restartCarousel:ae,updateCarousel:le,slideTo:w,next:H,prev:Z,nav:ee,data:oe});const Y=a.default||a.slides,$=a.addons,ue=L(oe);return()=>{const e=xe(Y==null?void 0:Y(ue)),c=($==null?void 0:$(ue))||[];r.value=e,e.forEach((M,he)=>M.props.index=he);const f=_("ol",{class:"carousel__track",style:me.value,onMousedown:n.mouseDrag?F:null,onTouchstart:n.touchDrag?F:null},e),y=_("div",{class:"carousel__viewport"},f);return _("section",{ref:h,class:"carousel","aria-label":"Gallery",onMouseenter:fe,onMouseleave:ve},[y,c])}}}),Oe=ie({name:"CarouselSlide",props:{index:{type:Number,default:1}},setup(t,{slots:a}){const l=x("config",L(Object.assign({},m))),o=x("slidesBuffer",u([])),S=x("currentSlide",u(0)),h=x("slidesToScroll",u(0)),r=u(t.index);l.wrapAround&&(i(),se(o,i));function i(){r.value=o.value.indexOf(t.index)}const v=z(()=>{const g=l.itemsToShow;return{width:`${1/g*100}%`,order:r.value.toString()}}),s=()=>t.index===S.value,j=()=>{const g=Math.ceil(h.value),n=Math.floor(h.value+l.itemsToShow);return o.value.slice(g,n).includes(t.index)},k=()=>t.index===o.value[Math.ceil(h.value)-1],T=()=>t.index===o.value[Math.floor(h.value+l.itemsToShow)];return()=>{var g;return _("li",{style:v.value,class:{carousel__slide:!0,"carousel__slide--active":s(),"carousel__slide--visible":j(),"carousel__slide--prev":k(),"carousel__slide--next":T()}},(g=a.default)===null||g===void 0?void 0:g.call(a))}}});const Ce=()=>{const t=x("maxSlide",u(1)),a=x("minSlide",u(1)),l=x("currentSlide",u(1)),o=x("nav",{});function S(i){o.slideTo(i)}const h=i=>{const v=l.value;return v===i||v>t.value&&i>=t.value||v<a.value&&i<=a.value},r=[];for(let i=a.value;i<t.value+1;i++){const v=_("button",{type:"button",class:{"carousel__pagination-button":!0,"carousel__pagination-button--active":h(i)},"aria-label":`Navigate to slide ${i+1}`,onClick:()=>S(i)}),s=_("li",{class:"carousel__pagination-item",key:i},v);r.push(s)}return _("ol",{class:"carousel__pagination"},r)};export{_e as C,Ce as P,Oe as S};
