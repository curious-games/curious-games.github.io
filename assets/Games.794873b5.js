var m=Object.defineProperty;var i=Object.getOwnPropertySymbols;var u=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable;var l=(s,e,t)=>e in s?m(s,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):s[e]=t,c=(s,e)=>{for(var t in e||(e={}))u.call(e,t)&&l(s,t,e[t]);if(i)for(var t of i(e))p.call(e,t)&&l(s,t,e[t]);return s};import{p as _,u as f,r as h,o as a,c as r,F as v,q as x,b as n,I as b,a as g,w as k}from"./vendor.71023684.js";import{_ as w}from"./index.675d8899.js";const y={mounted(){this.$store.dispatch("loadGames"),window.scrollTo(0,0)},computed:c({},_(["games"])),setup(){f({title:"Curious Games - Games"})}},$={class:"mt-16 md:mt-29"},G={class:"md:w-2/5"},j=["innerHTML"];function z(s,e,t,B,C,L){const d=h("router-link");return a(),r("div",$,[(a(!0),r(v,null,x(s.games,o=>(a(),r("div",{class:"relative h-80 md:h-108",key:o.id},[n("div",{class:"absolute inset-0 z-0 bg-center bg-cover",style:b({backgroundImage:"url("+o.image+")"})},null,4),g(d,{to:"/en/games/"+o.slug+"/",class:"absolute inset-0 z-10 flex items-center justify-center text-4xl font-semibold text-white duration-300 md:text-6xl md:opacity-0 md:bg-black/50 hover:opacity-100"},{default:k(()=>[n("div",G,[n("p",{innerHTML:o.title},null,8,j)])]),_:2},1032,["to"])]))),128))])}var H=w(y,[["render",z]]);export{H as default};
