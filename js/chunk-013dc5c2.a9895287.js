(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-013dc5c2"],{"2e08":function(e,t,i){var n=i("9def"),r=i("9744"),s=i("be13");e.exports=function(e,t,i,a){var o=String(s(e)),c=o.length,u=void 0===i?" ":String(i),l=n(t);if(l<=c||""==u)return o;var h=l-c,d=r.call(u,Math.ceil(h/u.length));return d.length>h&&(d=d.slice(0,h)),a?d+o:o+d}},3191:function(e,t,i){"use strict";i.r(t);var n=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},r=[function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"w-screen mx-auto scroll-container"},[i("section",{staticClass:"w-screen scroll-sequence__container bugs-show-container"},[i("div",{staticClass:"sticky inset-0 h-screen bg-center bg-no-repeat bg-cover -z-5 scroll-sequence bugs-show-sequence"}),i("div",{staticClass:"max-w-full p-16 text-white scroll-sequence__content"},[i("div",{staticClass:"grid mx-0 -mt-half mb-mega floater place-content-start"},[i("div",{staticClass:"max-w-md pt-4 border-t-2 border-gradient-r-curious"},[i("p",{staticClass:"text-xl"},[e._v("Curious Games is the "),i("b",[e._v("world’s first virtual sports publisher")]),e._v(" dedicated to alternative virtual contests.")])])]),i("div",{staticClass:"grid mx-0 my-mega floater place-content-end"},[i("div",{staticClass:"max-w-md pt-4 border-t-2 border-gradient-r-curious place-self-end"},[i("p",{staticClass:"text-xl"},[e._v("Delivering the "),i("b",[e._v("highest quality content with real time data driven AI markets")]),e._v(" for the most intuitive of gaming experiences.")])])]),i("div",{staticClass:"grid mx-0 my-mega floater place-content-center"},[i("div",{staticClass:"max-w-md pt-4 border-t-2 border-gradient-r-curious"},[i("p",{staticClass:"text-xl"},[e._v("Dynamic in game assets produced by "),i("b",[e._v("Oscar and Bafta award winning VFX artists")]),e._v(" and interactive entertainment industry veterans. ")])])]),i("div",{staticClass:"grid mx-0 my-mega floater place-content-end"},[i("div",{staticClass:"max-w-md pt-4 border-t-2 border-gradient-r-curious place-self-end"},[i("p",{staticClass:"text-xl"},[e._v("Our virtual contests can be "),i("b",[e._v("streamed seamlessly")]),e._v(" with mobile optimisation or locally rendered to the venue of your choice. Available through "),i("b",[e._v("one single API with no additional integration")]),e._v(".")])])]),i("div",{staticClass:"grid mx-0 my-mega floater place-content-center"},[i("div",{staticClass:"max-w-md pt-4 border-t-2 border-gradient-r-curious"},[i("p",{staticClass:"text-xl"},[e._v("The game logic behind each of our virtual contests are "),i("b",[e._v("fully customisable")]),e._v(" to meet specific content or regulatory requirements including market localisation and branded or sponsored content.")])])])])])])}],s=(i("8e6e"),i("456d"),i("2397"),i("7618")),a=(i("55dd"),i("4e2b")),o=i("308d"),c=i("6bb5"),u=(i("c5f6"),i("87f3"),i("ac6a"),i("d225")),l=i("b0b4"),h=i("bd86"),d=(i("6b54"),i("f576"),i("2781")),g=i.n(d);function f(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function m(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?f(Object(i),!0).forEach((function(t){Object(h["a"])(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):f(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function v(e){var t=p();return function(){var i,n=Object(c["a"])(e);if(t){var r=Object(c["a"])(this).constructor;i=Reflect.construct(n,arguments,r)}else i=n.apply(this,arguments);return Object(o["a"])(this,i)}}function p(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}var b={mounted:function(){window.scrollTo(0,0);var e=20,t=function(e){return"/img/sequence/bugs/".concat(e.toString().padStart(4,"0"),".jpg")},i=function(){for(var i=1;i<e;i++){var n=new Image;n.src=t(i)}};i();for(var n=[],r=0;r<=90;r++)n.push("".concat("000".concat(r).slice(-4),".jpg"));var o=window.requestAnimationFrame||window.mozRequestAnimationFrame||window.webkitRequestAnimationFrame||window.msRequestAnimationFrame,c=function(){function e(){Object(u["a"])(this,e),Object(h["a"])(this,"listeners",{})}return Object(l["a"])(e,[{key:"addListener",value:function(e,t){return this.listeners[e]=this.listeners[e]||[],this.listeners[e].push(t),this}},{key:"on",value:function(e,t){return this.addListener(e,t)}},{key:"once",value:function(e,t){var i=this;this.listeners[e]=this.listeners[e]||[];var n=function n(){t(),i.off(e,n)};return this.listeners[e].push(n),this}},{key:"off",value:function(e,t){return this.removeListener(e,t)}},{key:"removeListener",value:function(e,t){var i=this.listeners[e];if(!i)return this;for(var n=i.length;n>0;n--)if(i[n]===t){i.splice(n,1);break}return this}},{key:"emit",value:function(e){for(var t=arguments.length,i=new Array(t>1?t-1:0),n=1;n<t;n++)i[n-1]=arguments[n];var r=this.listeners[e];return!!r&&(r.forEach((function(e){e.apply(void 0,i)})),!0)}},{key:"listenerCount",value:function(e){var t=this.listeners[e]||[];return t.length}},{key:"rawListeners",value:function(e){return this.listeners[e]}}]),e}(),d=function(){function e(t){Object(u["a"])(this,e),this.images=t.images,this.container=t.container,this.cover=t.cover,this.displayIndex=0}return Object(l["a"])(e,[{key:"setup",value:function(){var e=this;this.canvas=document.createElement("canvas"),this.container.appendChild(this.canvas),this.ctx=this.canvas.getContext("2d"),window.addEventListener("resize",(function(){return e.resize()})),this.resize()}},{key:"renderIndex",value:function(e){if(this.images[e])return this.drawImage(e);for(var t=Number.MAX_SAFE_INTEGER,i=e;i>=0;i--)if(this.images[i]){t=i;break}for(var n=Number.MAX_SAFE_INTEGER,r=e,s=this.images.length;r<s;r++)if(this.images[r]){n=r;break}this.images[t]?this.drawImage(t):this.images[n]&&this.drawImage(n)}},{key:"drawImage",value:function(e){this.displayIndex=e,this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height);var t=Math.floor((this.canvas.width-this.images[this.displayIndex].naturalWidth)/2),i=Math.floor((this.canvas.height-this.images[this.displayIndex].naturalHeight)/2);this.cover?this.drawImageCover(this.ctx,this.images[this.displayIndex]):this.ctx.drawImage(this.images[this.displayIndex],t,i)}},{key:"resize",value:function(){var e=this.container.clientWidth,t=this.container.clientHeight;this.canvas.style.height="".concat(t,"px"),this.canvas.style.width="".concat(e,"px"),this.canvas.height=t,this.canvas.width=e,this.renderIndex(this.displayIndex)}},{key:"drawImageCover",value:function(e,t,i,n,r,s,a,o){2===arguments.length&&(i=n=0,r=e.canvas.width,s=e.canvas.height),a="number"===typeof a?a:.5,o="number"===typeof o?o:.5,a<0&&(a=0),o<0&&(o=0),a>1&&(a=1),o>1&&(o=1);var c,u,l,h,d=t.width,g=t.height,f=Math.min(r/d,s/g),m=d*f,v=g*f,p=1;m<r&&(p=r/m),Math.abs(p-1)<1e-14&&v<s&&(p=s/v),m*=p,v*=p,l=d/(m/r),h=g/(v/s),c=(d-l)*a,u=(g-h)*o,c<0&&(c=0),u<0&&(u=0),l>d&&(l=d),h>g&&(h=g),e.drawImage(t,c,u,l,h,i,n,r,s)}}]),e}(),f=function(e){Object(a["a"])(i,e);var t=v(i);function i(e){var n;return Object(u["a"])(this,i),n=t.call(this),n.images=e.imgsRef,n.imageNames=e.images,n.imagesRoot=e.imagesRoot,n.sequenceLength=e.images.length,n.priorityFranes=e.priorityFrames,n.complete=!1,n.loadIndex=0,n.priorityQueue=n.createPriorityQueue(),n.loadingQueue=n.createLoadingQueue(),n.loadNextImage(),n}return Object(l["a"])(i,[{key:"loadImage",value:function(e){var t=this;if(this.images[e])return this.loadNextImage();var i=function i(){n.removeEventListener("load",i),t.images[e]=n,0===e&&t.emit("FIRST_IMAGE_LOADED"),t.loadNextImage()},n=new Image;n.addEventListener("load",i),n.src=(this.imagesRoot?this.imagesRoot:"")+this.imageNames[e]}},{key:"loadNextImage",value:function(){this.priorityQueue.length?(this.loadImage(this.priorityQueue.shift()),this.priorityQueue.length||this.emit("PRIORITY_IMAGES_LOADED")):this.loadingQueue.length?this.loadImage(this.loadingQueue.shift()):(this.complete=!0,this.emit("IMAGES_LOADED"))}},{key:"createPriorityQueue",value:function(){var e=this.priorityFrames||[];return e.length||(e.push(0),e.push(Math.round(this.sequenceLength/2)),e.push(this.sequenceLength-1)),e}},{key:"createLoadingQueue",value:function(){var e=this;return this.imageNames.map((function(e,t){return t})).sort((function(t,i){return Math.abs(t-e.sequenceLength/2)-Math.abs(i-e.sequenceLength/2)}))}}]),i}(c),p=function(){function e(t){Object(u["a"])(this,e),this.opts=m({container:"body",starts:"out",ends:"out",imagesRoot:"",cover:!1},t),this.container="object"===Object(s["a"])(t.container)?t.container:document.querySelector(t.container),this.scrollWith=t.scrollWith?"object"===Object(s["a"])(t.scrollWith)?t.scrollWith:document.querySelector(t.scrollWith):this.container,this.images=Array(t.images.length),this.imagesToLoad=t.images,this.priorityFrames=t.priorityFrames,this.loader=new f({imgsRef:this.images,images:this.imagesToLoad,imagesRoot:this.opts.imagesRoot,priorityFrames:this.priorityFrames}),this.canvas=new d({container:this.container,images:this.images,cover:this.opts.cover}),this.init()}return Object(l["a"])(e,[{key:"init",value:function(){var e=this;this.canvas.setup(),this.loader.once("FIRST_IMAGE_LOADED",(function(){e.canvas.renderIndex(0)})),this.loader.once("PRIORITY_IMAGES_LOADED",(function(){window.addEventListener("scroll",(function(){return e.changeOnWindowScroll()}))})),this.loader.once("IMAGES_LOADED",(function(){console.log("Sequence Loaded")}))}},{key:"changeOnWindowScroll",value:function(){var e=this,t=100/(this.images.length-1),i=Math.floor(this.percentScrolled/t);o((function(){return e.canvas.renderIndex(i)}))}},{key:"percentScrolled",get:function(){var e=this.opts,t=e.starts,i=e.ends,n=this.scrollWith,r=document.documentElement,s=r.scrollTop||window.pageYOffset,a=n.clientHeight||n.offsetHeight,o=r.clientHeight,c=n,u=0;do{u+=c.offsetTop,c=c.offsetParent}while(c&&c!==window);var l=s-u,h=a+o;"out"===t&&(l+=o),"in"===i&&(h-=o),"in"==t&&(h-=o);var d=l/h*100;return d>100?100:d<0?0:d}}]),e}();new p({container:".bugs-show-sequence",scrollWith:".bugs-show-container",images:n,imagesRoot:"/img/sequence/bugs/",priorityFrames:[0,1,2,3,4,5,6,7,8,9,10],cover:!0,playUntil:"scroll-out",starts:"in"}),new p({});g()({targets:".floater",cssProps:{viewportY:!0,visibleY:!0}})}},y=b,w=(i("7853"),i("2877")),x=Object(w["a"])(y,n,r,!1,null,"76701999",null);t["default"]=x.exports},3846:function(e,t,i){i("9e1e")&&"g"!=/./g.flags&&i("86cc").f(RegExp.prototype,"flags",{configurable:!0,get:i("0bfb")})},"6b54":function(e,t,i){"use strict";i("3846");var n=i("cb7c"),r=i("0bfb"),s=i("9e1e"),a="toString",o=/./[a],c=function(e){i("2aba")(RegExp.prototype,a,e,!0)};i("79e5")((function(){return"/a/b"!=o.call({source:"a",flags:"b"})}))?c((function(){var e=n(this);return"/".concat(e.source,"/","flags"in e?e.flags:!s&&e instanceof RegExp?r.call(e):void 0)})):o.name!=a&&c((function(){return o.call(this)}))},7853:function(e,t,i){"use strict";i("8683")},8683:function(e,t,i){},9744:function(e,t,i){"use strict";var n=i("4588"),r=i("be13");e.exports=function(e){var t=String(r(this)),i="",s=n(e);if(s<0||s==1/0)throw RangeError("Count can't be negative");for(;s>0;(s>>>=1)&&(t+=t))1&s&&(i+=t);return i}},f576:function(e,t,i){"use strict";var n=i("5ca1"),r=i("2e08"),s=i("a25f"),a=/Version\/10\.\d+(\.\d+)?( Mobile\/\w+)? Safari\//.test(s);n(n.P+n.F*a,"String",{padStart:function(e){return r(this,e,arguments.length>1?arguments[1]:void 0,!0)}})}}]);
//# sourceMappingURL=chunk-013dc5c2.a9895287.js.map