(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-f0b6dd90"],{"1e21":function(e,t,i){"use strict";i("3cfd")},"3cfd":function(e,t,i){},"9bad":function(e,t,i){"use strict";i.r(t);var n=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},s=[function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"w-screen mx-auto scroll-container"},[i("section",{staticClass:"w-screen scroll-sequence__container robodog-show-container"},[i("div",{staticClass:"sticky inset-0 h-screen bg-center bg-no-repeat bg-cover -z-5 scroll-sequence robodog-show-sequence"}),i("div",{staticClass:"max-w-full p-16 text-white scroll-sequence__content"},[i("div",{staticClass:"grid mx-0 -mt-half mb-mega floater place-content-start"},[i("div",{staticClass:"max-w-md pt-4 border-t-2 border-gradient-r-curious"},[i("p",{staticClass:"text-xl"},[e._v("Curious Games is the "),i("b",[e._v("world’s first virtual sports publisher")]),e._v(" dedicated to alternative virtual contests.")])])]),i("div",{staticClass:"grid mx-0 my-mega floater place-content-end"},[i("div",{staticClass:"max-w-md pt-4 border-t-2 border-gradient-r-curious place-self-end"},[i("p",{staticClass:"text-xl"},[e._v("Delivering the "),i("b",[e._v("highest quality content with real time data driven AI markets")]),e._v(" for the most intuitive of gaming experiences.")])])]),i("div",{staticClass:"grid mx-0 my-mega floater place-content-center"},[i("div",{staticClass:"max-w-md pt-4 border-t-2 border-gradient-r-curious"},[i("p",{staticClass:"text-xl"},[e._v("Dynamic in game assets produced by "),i("b",[e._v("Oscar and Bafta award winning VFX artists")]),e._v(" and interactive entertainment industry veterans. ")])])]),i("div",{staticClass:"grid mx-0 my-mega floater place-content-end"},[i("div",{staticClass:"max-w-md pt-4 border-t-2 border-gradient-r-curious place-self-end"},[i("p",{staticClass:"text-xl"},[e._v("Our virtual contests can be "),i("b",[e._v("streamed seamlessly")]),e._v(" with mobile optimisation or locally rendered to the venue of your choice. Available through "),i("b",[e._v("one single API with no additional integration")]),e._v(".")])])]),i("div",{staticClass:"grid mx-0 my-mega floater place-content-center"},[i("div",{staticClass:"max-w-md pt-4 border-t-2 border-gradient-r-curious"},[i("p",{staticClass:"text-xl"},[e._v("The game logic behind each of our virtual contests are "),i("b",[e._v("fully customisable")]),e._v(" to meet specific content or regulatory requirements including market localisation and branded or sponsored content.")])])])])])])}],r=(i("8e6e"),i("456d"),i("2397"),i("7618")),a=(i("55dd"),i("4e2b")),o=i("308d"),c=i("6bb5"),l=(i("c5f6"),i("87f3"),i("ac6a"),i("d225")),u=i("b0b4"),h=i("bd86"),d=i("2781"),m=i.n(d);function g(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function v(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?g(Object(i),!0).forEach((function(t){Object(h["a"])(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):g(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function f(e){var t=p();return function(){var i,n=Object(c["a"])(e);if(t){var s=Object(c["a"])(this).constructor;i=Reflect.construct(n,arguments,s)}else i=n.apply(this,arguments);return Object(o["a"])(this,i)}}function p(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}var b={components:{},mounted:function(){for(var e=[],t=0;t<=90;t++)e.push("".concat("000".concat(t).slice(-4),".jpg"));var i=window.requestAnimationFrame||window.mozRequestAnimationFrame||window.webkitRequestAnimationFrame||window.msRequestAnimationFrame,n=function(){function e(){Object(l["a"])(this,e),Object(h["a"])(this,"listeners",{})}return Object(u["a"])(e,[{key:"addListener",value:function(e,t){return this.listeners[e]=this.listeners[e]||[],this.listeners[e].push(t),this}},{key:"on",value:function(e,t){return this.addListener(e,t)}},{key:"once",value:function(e,t){var i=this;this.listeners[e]=this.listeners[e]||[];var n=function n(){t(),i.off(e,n)};return this.listeners[e].push(n),this}},{key:"off",value:function(e,t){return this.removeListener(e,t)}},{key:"removeListener",value:function(e,t){var i=this.listeners[e];if(!i)return this;for(var n=i.length;n>0;n--)if(i[n]===t){i.splice(n,1);break}return this}},{key:"emit",value:function(e){for(var t=arguments.length,i=new Array(t>1?t-1:0),n=1;n<t;n++)i[n-1]=arguments[n];var s=this.listeners[e];return!!s&&(s.forEach((function(e){e.apply(void 0,i)})),!0)}},{key:"listenerCount",value:function(e){var t=this.listeners[e]||[];return t.length}},{key:"rawListeners",value:function(e){return this.listeners[e]}}]),e}(),s=function(){function e(t){Object(l["a"])(this,e),this.images=t.images,this.container=t.container,this.cover=t.cover,this.displayIndex=0}return Object(u["a"])(e,[{key:"setup",value:function(){var e=this;this.canvas=document.createElement("canvas"),this.container.appendChild(this.canvas),this.ctx=this.canvas.getContext("2d"),window.addEventListener("resize",(function(){return e.resize()})),this.resize()}},{key:"renderIndex",value:function(e){if(this.images[e])return this.drawImage(e);for(var t=Number.MAX_SAFE_INTEGER,i=e;i>=0;i--)if(this.images[i]){t=i;break}for(var n=Number.MAX_SAFE_INTEGER,s=e,r=this.images.length;s<r;s++)if(this.images[s]){n=s;break}this.images[t]?this.drawImage(t):this.images[n]&&this.drawImage(n)}},{key:"drawImage",value:function(e){this.displayIndex=e,this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height);var t=Math.floor((this.canvas.width-this.images[this.displayIndex].naturalWidth)/2),i=Math.floor((this.canvas.height-this.images[this.displayIndex].naturalHeight)/2);this.cover?this.drawImageCover(this.ctx,this.images[this.displayIndex]):this.ctx.drawImage(this.images[this.displayIndex],t,i)}},{key:"resize",value:function(){var e=this.container.clientWidth,t=this.container.clientHeight;this.canvas.style.height="".concat(t,"px"),this.canvas.style.width="".concat(e,"px"),this.canvas.height=t,this.canvas.width=e,this.renderIndex(this.displayIndex)}},{key:"drawImageCover",value:function(e,t,i,n,s,r,a,o){2===arguments.length&&(i=n=0,s=e.canvas.width,r=e.canvas.height),a="number"===typeof a?a:.5,o="number"===typeof o?o:.5,a<0&&(a=0),o<0&&(o=0),a>1&&(a=1),o>1&&(o=1);var c,l,u,h,d=t.width,m=t.height,g=Math.min(s/d,r/m),v=d*g,f=m*g,p=1;v<s&&(p=s/v),Math.abs(p-1)<1e-14&&f<r&&(p=r/f),v*=p,f*=p,u=d/(v/s),h=m/(f/r),c=(d-u)*a,l=(m-h)*o,c<0&&(c=0),l<0&&(l=0),u>d&&(u=d),h>m&&(h=m),e.drawImage(t,c,l,u,h,i,n,s,r)}}]),e}(),o=function(e){Object(a["a"])(i,e);var t=f(i);function i(e){var n;return Object(l["a"])(this,i),n=t.call(this),n.images=e.imgsRef,n.imageNames=e.images,n.imagesRoot=e.imagesRoot,n.sequenceLength=e.images.length,n.priorityFranes=e.priorityFrames,n.complete=!1,n.loadIndex=0,n.priorityQueue=n.createPriorityQueue(),n.loadingQueue=n.createLoadingQueue(),n.loadNextImage(),n}return Object(u["a"])(i,[{key:"loadImage",value:function(e){var t=this;if(this.images[e])return this.loadNextImage();var i=function i(){n.removeEventListener("load",i),t.images[e]=n,0===e&&t.emit("FIRST_IMAGE_LOADED"),t.loadNextImage()},n=new Image;n.addEventListener("load",i),n.src=(this.imagesRoot?this.imagesRoot:"")+this.imageNames[e]}},{key:"loadNextImage",value:function(){this.priorityQueue.length?(this.loadImage(this.priorityQueue.shift()),this.priorityQueue.length||this.emit("PRIORITY_IMAGES_LOADED")):this.loadingQueue.length?this.loadImage(this.loadingQueue.shift()):(this.complete=!0,this.emit("IMAGES_LOADED"))}},{key:"createPriorityQueue",value:function(){var e=this.priorityFrames||[];return e.length||(e.push(0),e.push(Math.round(this.sequenceLength/2)),e.push(this.sequenceLength-1)),e}},{key:"createLoadingQueue",value:function(){var e=this;return this.imageNames.map((function(e,t){return t})).sort((function(t,i){return Math.abs(t-e.sequenceLength/2)-Math.abs(i-e.sequenceLength/2)}))}}]),i}(n),c=function(){function e(t){Object(l["a"])(this,e),this.opts=v({container:"body",starts:"out",ends:"out",imagesRoot:"",cover:!1},t),this.container="object"===Object(r["a"])(t.container)?t.container:document.querySelector(t.container),this.scrollWith=t.scrollWith?"object"===Object(r["a"])(t.scrollWith)?t.scrollWith:document.querySelector(t.scrollWith):this.container,this.images=Array(t.images.length),this.imagesToLoad=t.images,this.priorityFrames=t.priorityFrames,this.loader=new o({imgsRef:this.images,images:this.imagesToLoad,imagesRoot:this.opts.imagesRoot,priorityFrames:this.priorityFrames}),this.canvas=new s({container:this.container,images:this.images,cover:this.opts.cover}),this.init()}return Object(u["a"])(e,[{key:"init",value:function(){var e=this;this.canvas.setup(),this.loader.once("FIRST_IMAGE_LOADED",(function(){e.canvas.renderIndex(0)})),this.loader.once("PRIORITY_IMAGES_LOADED",(function(){window.addEventListener("scroll",(function(){return e.changeOnWindowScroll()}))})),this.loader.once("IMAGES_LOADED",(function(){console.log("Sequence Loaded")}))}},{key:"changeOnWindowScroll",value:function(){var e=this,t=100/(this.images.length-1),n=Math.floor(this.percentScrolled/t);i((function(){return e.canvas.renderIndex(n)}))}},{key:"percentScrolled",get:function(){var e=this.opts,t=e.starts,i=e.ends,n=this.scrollWith,s=document.documentElement,r=s.scrollTop||window.pageYOffset,a=n.clientHeight||n.offsetHeight,o=s.clientHeight,c=n,l=0;do{l+=c.offsetTop,c=c.offsetParent}while(c&&c!==window);var u=r-l,h=a+o;"out"===t&&(u+=o),"in"===i&&(h-=o),"in"==t&&(h-=o);var d=u/h*100;return d>100?100:d<0?0:d}}]),e}();new c({container:".robodog-show-sequence",scrollWith:".robodog-show-container",images:e,imagesRoot:"/img/sequence/robodog-md/",priorityFrames:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,40,60,80],cover:!0,playUntil:"scroll-out",starts:"in"}),new c({});m()({targets:".floater",cssProps:{viewportY:!0,visibleY:!0}})}},y=b,w=(i("1e21"),i("2877")),x=Object(w["a"])(y,n,s,!1,null,"1698292f",null);t["default"]=x.exports}}]);
//# sourceMappingURL=chunk-f0b6dd90.5aaf5cbe.js.map