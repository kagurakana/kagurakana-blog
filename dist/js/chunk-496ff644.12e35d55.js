(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-496ff644"],{"2a28":function(t,e,i){"use strict";i.d(e,"a",(function(){return s})),i.d(e,"b",(function(){return a})),i.d(e,"c",(function(){return r})),i.d(e,"d",(function(){return l}));var n=i("2275"),o=i("eb21");const s=Object(o["h"])("v-card__actions"),a=Object(o["h"])("v-card__subtitle"),r=Object(o["h"])("v-card__text"),l=Object(o["h"])("v-card__title");n["a"]},"2c8b":function(t,e,i){},"54b55":function(t,e,i){t.exports=i.p+"img/bili.c32d1231.svg"},5981:function(t,e,i){},6844:function(t,e,i){"use strict";var n=i("fb97"),o=i("b767"),s=i("bd86"),a=i("07ca"),r=i("eb21");e["a"]=Object(a["a"])(n["a"],o["a"]).extend({name:"VLazy",directives:{intersect:s["a"]},props:{options:{type:Object,default:()=>({root:void 0,rootMargin:void 0,threshold:void 0})},tag:{type:String,default:"div"},transition:{type:String,default:"fade-transition"}},computed:{styles(){return{...this.measurableStyles}}},methods:{genContent(){const t=this.isActive&&Object(r["m"])(this);return this.transition?this.$createElement("transition",{props:{name:this.transition}},t):t},onObserve(t,e,i){this.isActive||(this.isActive=i)}},render(t){return t(this.tag,{staticClass:"v-lazy",attrs:this.$attrs,directives:[{name:"intersect",value:{handler:this.onObserve,options:this.options}}],on:this.$listeners,style:this.styles},[this.genContent()])}})},7094:function(t,e,i){
/*!
 * clipboard.js v2.0.8
 * https://clipboardjs.com/
 *
 * Licensed MIT © Zeno Rocha
 */
(function(e,i){t.exports=i()})(0,(function(){return function(){var t={134:function(t,e,i){"use strict";i.d(e,{default:function(){return A}});var n=i(279),o=i.n(n),s=i(370),a=i.n(s),r=i(817),l=i.n(r);function c(t){return c="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},c(t)}function u(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function d(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function h(t,e,i){return e&&d(t.prototype,e),i&&d(t,i),t}var v=function(){function t(e){u(this,t),this.resolveOptions(e),this.initSelection()}return h(t,[{key:"resolveOptions",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.action=t.action,this.container=t.container,this.emitter=t.emitter,this.target=t.target,this.text=t.text,this.trigger=t.trigger,this.selectedText=""}},{key:"initSelection",value:function(){this.text?this.selectFake():this.target&&this.selectTarget()}},{key:"createFakeElement",value:function(){var t="rtl"===document.documentElement.getAttribute("dir");this.fakeElem=document.createElement("textarea"),this.fakeElem.style.fontSize="12pt",this.fakeElem.style.border="0",this.fakeElem.style.padding="0",this.fakeElem.style.margin="0",this.fakeElem.style.position="absolute",this.fakeElem.style[t?"right":"left"]="-9999px";var e=window.pageYOffset||document.documentElement.scrollTop;return this.fakeElem.style.top="".concat(e,"px"),this.fakeElem.setAttribute("readonly",""),this.fakeElem.value=this.text,this.fakeElem}},{key:"selectFake",value:function(){var t=this,e=this.createFakeElement();this.fakeHandlerCallback=function(){return t.removeFake()},this.fakeHandler=this.container.addEventListener("click",this.fakeHandlerCallback)||!0,this.container.appendChild(e),this.selectedText=l()(e),this.copyText(),this.removeFake()}},{key:"removeFake",value:function(){this.fakeHandler&&(this.container.removeEventListener("click",this.fakeHandlerCallback),this.fakeHandler=null,this.fakeHandlerCallback=null),this.fakeElem&&(this.container.removeChild(this.fakeElem),this.fakeElem=null)}},{key:"selectTarget",value:function(){this.selectedText=l()(this.target),this.copyText()}},{key:"copyText",value:function(){var t;try{t=document.execCommand(this.action)}catch(e){t=!1}this.handleResult(t)}},{key:"handleResult",value:function(t){this.emitter.emit(t?"success":"error",{action:this.action,text:this.selectedText,trigger:this.trigger,clearSelection:this.clearSelection.bind(this)})}},{key:"clearSelection",value:function(){this.trigger&&this.trigger.focus(),document.activeElement.blur(),window.getSelection().removeAllRanges()}},{key:"destroy",value:function(){this.removeFake()}},{key:"action",set:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"copy";if(this._action=t,"copy"!==this._action&&"cut"!==this._action)throw new Error('Invalid "action" value, use either "copy" or "cut"')},get:function(){return this._action}},{key:"target",set:function(t){if(void 0!==t){if(!t||"object"!==c(t)||1!==t.nodeType)throw new Error('Invalid "target" value, use a valid Element');if("copy"===this.action&&t.hasAttribute("disabled"))throw new Error('Invalid "target" attribute. Please use "readonly" instead of "disabled" attribute');if("cut"===this.action&&(t.hasAttribute("readonly")||t.hasAttribute("disabled")))throw new Error('Invalid "target" attribute. You can\'t cut text from elements with "readonly" or "disabled" attributes');this._target=t}},get:function(){return this._target}}]),t}(),f=v;function m(t){return m="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},m(t)}function p(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function g(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function y(t,e,i){return e&&g(t.prototype,e),i&&g(t,i),t}function b(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&k(t,e)}function k(t,e){return k=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},k(t,e)}function _(t){var e=C();return function(){var i,n=E(t);if(e){var o=E(this).constructor;i=Reflect.construct(n,arguments,o)}else i=n.apply(this,arguments);return x(this,i)}}function x(t,e){return!e||"object"!==m(e)&&"function"!==typeof e?w(t):e}function w(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function C(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}function E(t){return E=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},E(t)}function S(t,e){var i="data-clipboard-".concat(t);if(e.hasAttribute(i))return e.getAttribute(i)}var j=function(t){b(i,t);var e=_(i);function i(t,n){var o;return p(this,i),o=e.call(this),o.resolveOptions(n),o.listenClick(t),o}return y(i,[{key:"resolveOptions",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.action="function"===typeof t.action?t.action:this.defaultAction,this.target="function"===typeof t.target?t.target:this.defaultTarget,this.text="function"===typeof t.text?t.text:this.defaultText,this.container="object"===m(t.container)?t.container:document.body}},{key:"listenClick",value:function(t){var e=this;this.listener=a()(t,"click",(function(t){return e.onClick(t)}))}},{key:"onClick",value:function(t){var e=t.delegateTarget||t.currentTarget;this.clipboardAction&&(this.clipboardAction=null),this.clipboardAction=new f({action:this.action(e),target:this.target(e),text:this.text(e),container:this.container,trigger:e,emitter:this})}},{key:"defaultAction",value:function(t){return S("action",t)}},{key:"defaultTarget",value:function(t){var e=S("target",t);if(e)return document.querySelector(e)}},{key:"defaultText",value:function(t){return S("text",t)}},{key:"destroy",value:function(){this.listener.destroy(),this.clipboardAction&&(this.clipboardAction.destroy(),this.clipboardAction=null)}}],[{key:"isSupported",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:["copy","cut"],e="string"===typeof t?[t]:t,i=!!document.queryCommandSupported;return e.forEach((function(t){i=i&&!!document.queryCommandSupported(t)})),i}}]),i}(o()),A=j},828:function(t){var e=9;if("undefined"!==typeof Element&&!Element.prototype.matches){var i=Element.prototype;i.matches=i.matchesSelector||i.mozMatchesSelector||i.msMatchesSelector||i.oMatchesSelector||i.webkitMatchesSelector}function n(t,i){while(t&&t.nodeType!==e){if("function"===typeof t.matches&&t.matches(i))return t;t=t.parentNode}}t.exports=n},438:function(t,e,i){var n=i(828);function o(t,e,i,n,o){var s=a.apply(this,arguments);return t.addEventListener(i,s,o),{destroy:function(){t.removeEventListener(i,s,o)}}}function s(t,e,i,n,s){return"function"===typeof t.addEventListener?o.apply(null,arguments):"function"===typeof i?o.bind(null,document).apply(null,arguments):("string"===typeof t&&(t=document.querySelectorAll(t)),Array.prototype.map.call(t,(function(t){return o(t,e,i,n,s)})))}function a(t,e,i,o){return function(i){i.delegateTarget=n(i.target,e),i.delegateTarget&&o.call(t,i)}}t.exports=s},879:function(t,e){e.node=function(t){return void 0!==t&&t instanceof HTMLElement&&1===t.nodeType},e.nodeList=function(t){var i=Object.prototype.toString.call(t);return void 0!==t&&("[object NodeList]"===i||"[object HTMLCollection]"===i)&&"length"in t&&(0===t.length||e.node(t[0]))},e.string=function(t){return"string"===typeof t||t instanceof String},e.fn=function(t){var e=Object.prototype.toString.call(t);return"[object Function]"===e}},370:function(t,e,i){var n=i(879),o=i(438);function s(t,e,i){if(!t&&!e&&!i)throw new Error("Missing required arguments");if(!n.string(e))throw new TypeError("Second argument must be a String");if(!n.fn(i))throw new TypeError("Third argument must be a Function");if(n.node(t))return a(t,e,i);if(n.nodeList(t))return r(t,e,i);if(n.string(t))return l(t,e,i);throw new TypeError("First argument must be a String, HTMLElement, HTMLCollection, or NodeList")}function a(t,e,i){return t.addEventListener(e,i),{destroy:function(){t.removeEventListener(e,i)}}}function r(t,e,i){return Array.prototype.forEach.call(t,(function(t){t.addEventListener(e,i)})),{destroy:function(){Array.prototype.forEach.call(t,(function(t){t.removeEventListener(e,i)}))}}}function l(t,e,i){return o(document.body,t,e,i)}t.exports=s},817:function(t){function e(t){var e;if("SELECT"===t.nodeName)t.focus(),e=t.value;else if("INPUT"===t.nodeName||"TEXTAREA"===t.nodeName){var i=t.hasAttribute("readonly");i||t.setAttribute("readonly",""),t.select(),t.setSelectionRange(0,t.value.length),i||t.removeAttribute("readonly"),e=t.value}else{t.hasAttribute("contenteditable")&&t.focus();var n=window.getSelection(),o=document.createRange();o.selectNodeContents(t),n.removeAllRanges(),n.addRange(o),e=n.toString()}return e}t.exports=e},279:function(t){function e(){}e.prototype={on:function(t,e,i){var n=this.e||(this.e={});return(n[t]||(n[t]=[])).push({fn:e,ctx:i}),this},once:function(t,e,i){var n=this;function o(){n.off(t,o),e.apply(i,arguments)}return o._=e,this.on(t,o,i)},emit:function(t){var e=[].slice.call(arguments,1),i=((this.e||(this.e={}))[t]||[]).slice(),n=0,o=i.length;for(n;n<o;n++)i[n].fn.apply(i[n].ctx,e);return this},off:function(t,e){var i=this.e||(this.e={}),n=i[t],o=[];if(n&&e)for(var s=0,a=n.length;s<a;s++)n[s].fn!==e&&n[s].fn._!==e&&o.push(n[s]);return o.length?i[t]=o:delete i[t],this}},t.exports=e,t.exports.TinyEmitter=e}},e={};function i(n){if(e[n])return e[n].exports;var o=e[n]={exports:{}};return t[n](o,o.exports,i),o.exports}return function(){i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,{a:e}),e}}(),function(){i.d=function(t,e){for(var n in e)i.o(e,n)&&!i.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})}}(),function(){i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),i(134)}().default}))},8879:function(t,e,i){},9205:function(t,e,i){"use strict";i("2c8b");var n=i("595b"),o=n["a"].extend({name:"v-theme-provider",props:{root:Boolean},computed:{isDark(){return this.root?this.rootIsDark:n["a"].options.computed.isDark.call(this)}},render(){return this.$slots.default&&this.$slots.default.find(t=>!t.isComment&&" "!==t.text)}}),s=i("e2b1"),a=i("0e93"),r=i("ed1f"),l=i("411e"),c=i("a593"),u=c["a"].extend({name:"returnable",props:{returnValue:null},data:()=>({isActive:!1,originalValue:null}),watch:{isActive(t){t?this.originalValue=this.returnValue:this.$emit("update:return-value",this.originalValue)}},methods:{save(t){this.originalValue=t,setTimeout(()=>{this.isActive=!1})}}}),d=i("6e59"),h=i("b767"),v=i("daa8"),f=i("07ca"),m=i("3251"),p=i("eb21");const g=Object(f["a"])(s["a"],a["a"],r["a"],l["a"],u,d["a"],h["a"]);e["a"]=g.extend({name:"v-dialog",directives:{ClickOutside:v["a"]},props:{dark:Boolean,disabled:Boolean,fullscreen:Boolean,light:Boolean,maxWidth:{type:[String,Number],default:"none"},noClickAnimation:Boolean,origin:{type:String,default:"center center"},persistent:Boolean,retainFocus:{type:Boolean,default:!0},scrollable:Boolean,transition:{type:[String,Boolean],default:"dialog-transition"},width:{type:[String,Number],default:"auto"}},data(){return{activatedBy:null,animate:!1,animateTimeout:-1,isActive:!!this.value,stackMinZIndex:200,previousActiveElement:null}},computed:{classes(){return{[("v-dialog "+this.contentClass).trim()]:!0,"v-dialog--active":this.isActive,"v-dialog--persistent":this.persistent,"v-dialog--fullscreen":this.fullscreen,"v-dialog--scrollable":this.scrollable,"v-dialog--animated":this.animate}},contentClasses(){return{"v-dialog__content":!0,"v-dialog__content--active":this.isActive}},hasActivator(){return Boolean(!!this.$slots.activator||!!this.$scopedSlots.activator)}},watch:{isActive(t){var e;t?(this.show(),this.hideScroll()):(this.removeOverlay(),this.unbind(),null==(e=this.previousActiveElement)||e.focus())},fullscreen(t){this.isActive&&(t?(this.hideScroll(),this.removeOverlay(!1)):(this.showScroll(),this.genOverlay()))}},created(){this.$attrs.hasOwnProperty("full-width")&&Object(m["e"])("full-width",this)},beforeMount(){this.$nextTick(()=>{this.isBooted=this.isActive,this.isActive&&this.show()})},beforeDestroy(){"undefined"!==typeof window&&this.unbind()},methods:{animateClick(){this.animate=!1,this.$nextTick(()=>{this.animate=!0,window.clearTimeout(this.animateTimeout),this.animateTimeout=window.setTimeout(()=>this.animate=!1,150)})},closeConditional(t){const e=t.target;return!(this._isDestroyed||!this.isActive||this.$refs.content.contains(e)||this.overlay&&e&&!this.overlay.$el.contains(e))&&this.activeZIndex>=this.getMaxZIndex()},hideScroll(){this.fullscreen?document.documentElement.classList.add("overflow-y-hidden"):l["a"].options.methods.hideScroll.call(this)},show(){!this.fullscreen&&!this.hideOverlay&&this.genOverlay(),this.$nextTick(()=>{this.$nextTick(()=>{this.previousActiveElement=document.activeElement,this.$refs.content.focus(),this.bind()})})},bind(){window.addEventListener("focusin",this.onFocusin)},unbind(){window.removeEventListener("focusin",this.onFocusin)},onClickOutside(t){this.$emit("click:outside",t),this.persistent?this.noClickAnimation||this.animateClick():this.isActive=!1},onKeydown(t){if(t.keyCode===p["q"].esc&&!this.getOpenDependents().length)if(this.persistent)this.noClickAnimation||this.animateClick();else{this.isActive=!1;const t=this.getActivator();this.$nextTick(()=>t&&t.focus())}this.$emit("keydown",t)},onFocusin(t){if(!t||!this.retainFocus)return;const e=t.target;if(e&&![document,this.$refs.content].includes(e)&&!this.$refs.content.contains(e)&&this.activeZIndex>=this.getMaxZIndex()&&!this.getOpenDependentElements().some(t=>t.contains(e))){const t=this.$refs.content.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'),e=[...t].find(t=>!t.hasAttribute("disabled"));e&&e.focus()}},genContent(){return this.showLazyContent(()=>[this.$createElement(o,{props:{root:!0,light:this.light,dark:this.dark}},[this.$createElement("div",{class:this.contentClasses,attrs:{role:"document",tabindex:this.isActive?0:void 0,...this.getScopeIdAttrs()},on:{keydown:this.onKeydown},style:{zIndex:this.activeZIndex},ref:"content"},[this.genTransition()])])])},genTransition(){const t=this.genInnerContent();return this.transition?this.$createElement("transition",{props:{name:this.transition,origin:this.origin,appear:!0}},[t]):t},genInnerContent(){const t={class:this.classes,ref:"dialog",directives:[{name:"click-outside",value:{handler:this.onClickOutside,closeConditional:this.closeConditional,include:this.getOpenDependentElements}},{name:"show",value:this.isActive}],style:{transformOrigin:this.origin}};return this.fullscreen||(t.style={...t.style,maxWidth:"none"===this.maxWidth?void 0:Object(p["f"])(this.maxWidth),width:"auto"===this.width?void 0:Object(p["f"])(this.width)}),this.$createElement("div",t,this.getContentSlot())}},render(t){return t("div",{staticClass:"v-dialog__container",class:{"v-dialog__container--attached":""===this.attach||!0===this.attach||"attach"===this.attach},attrs:{role:"dialog"}},[this.genActivator(),this.genContent()])}})},"9fd0":function(t,e,i){"use strict";var n=i("54e0"),o=i("b767"),s=i("07ca"),a=i("3251");e["a"]=Object(s["a"])(n["a"],o["a"]).extend({name:"v-hover",props:{disabled:{type:Boolean,default:!1},value:{type:Boolean,default:void 0}},methods:{onMouseEnter(){this.runDelay("open")},onMouseLeave(){this.runDelay("close")}},render(){if(!this.$scopedSlots.default&&void 0===this.value)return Object(a["c"])("v-hover is missing a default scopedSlot or bound value",this),null;let t;return this.$scopedSlots.default&&(t=this.$scopedSlots.default({hover:this.isActive})),Array.isArray(t)&&1===t.length&&(t=t[0]),t&&!Array.isArray(t)&&t.tag?(this.disabled||(t.data=t.data||{},this._g(t.data,{mouseenter:this.onMouseEnter,mouseleave:this.onMouseLeave})),t):(Object(a["c"])("v-hover should only contain a single element",this),t)}})},a679:function(t,e,i){},c297:function(t,e,i){"use strict";i("a679")},ef4c:function(t,e,i){"use strict";i.r(e);var n=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"about"},[n("Nav",{staticClass:"nav"}),n("v-img",{staticClass:"img-fixed",attrs:{src:t.bgcImg,width:"100vw","min-height":"100vh"}}),n("v-col",{staticClass:"mx-auto about-container",attrs:{cols:"11",md:"8"}},[n("v-card",{staticClass:"mx-auto myInfo text-center",attrs:{color:"rgba(255,255,255,0.8)",outlined:""}},[n("v-row",{staticClass:"pa-0 ma-0"},[n("v-col",{attrs:{cols:"12",sm:"auto"}},[n("v-img",{staticClass:"mx-auto head-img",attrs:{src:"https://i.loli.net/2020/02/25/eDgkFMqzBHP7UtS.jpg",height:"250px",width:"250px"}})],1),n("v-col",{staticClass:"text-center"},[n("h2",[t._v("神楽花菜")]),n("p",{staticClass:"py-2 ma-0"},[t._v("喜欢的事情:睡觉，看番，玩怪猎，逛b站")]),n("p",{staticClass:"py-1 ma-0"},[t._v("单推凑阿库娅")]),n("p",{staticClass:"py-1 ma-0"},[t._v("名字来源于神楽七奈的neta")]),n("v-card-actions",{staticClass:"btn-group"},[n("v-row",{staticClass:"pa-0 ma-0 justify-center"},[n("v-tooltip",{attrs:{bottom:""},scopedSlots:t._u([{key:"activator",fn:function(e){var i=e.on;return[n("v-icon",t._g({staticClass:"icons",attrs:{"data-clipboard-text":"kagurakanaofficial☆qq.com"},on:{click:function(e){return t.copy("textEmail")}}},i),[t._v("mdi-email-outline")])]}}])},[n("span",[t._v(t._s(t.textEmail))])]),n("v-tooltip",{attrs:{bottom:""},scopedSlots:t._u([{key:"activator",fn:function(e){var i=e.on;return[n("v-icon",t._g({staticClass:"icons",attrs:{"data-clipboard-text":"1278820830"},on:{click:function(e){return t.copy("textQq")}}},i),[t._v("mdi-qqchat")])]}}])},[n("span",[t._v(t._s(t.textQq))])]),n("v-tooltip",{attrs:{bottom:""},scopedSlots:t._u([{key:"activator",fn:function(e){var i=e.on;return[n("v-icon",t._g({staticClass:"icons",attrs:{"data-clipboard-text":"https://github.com/kagurakana"},on:{click:function(e){return t.copy("textGithub")}}},i),[t._v("mdi-github")])]}}])},[n("span",[t._v(t._s(t.textGithub))])]),n("v-tooltip",{attrs:{bottom:""},scopedSlots:t._u([{key:"activator",fn:function(e){var i=e.on;return[n("v-icon",t._g({staticClass:"icons",attrs:{"data-clipboard-text":"https://steamcommunity.com/id/kagura_kana/"},on:{click:function(e){return t.copy("textSteam")}}},i),[t._v("mdi-steam")])]}}])},[n("span",[t._v(t._s(t.textSteam))])]),n("v-tooltip",{attrs:{bottom:""},scopedSlots:t._u([{key:"activator",fn:function(e){var o=e.on;return[n("img",t._g({staticClass:"icons bili",attrs:{src:i("54b55"),"data-clipboard-text":"https://space.bilibili.com/14076737"},on:{click:function(e){return t.copy("textBili")}}},o))]}}])},[n("span",[t._v(t._s(t.textBili))])])],1)],1),n("v-card-text",[t._v("本站文章全部采用知识共享署名-非商业性使用-相同方式共享4.0许可协议进行许可。")])],1)],1)],1),n("v-card",{staticClass:"mx-auto my-3 depandence",attrs:{color:"rgba(255,255,255,0.8)",outlined:""}},[n("v-card-title",{staticClass:"text-center d-block"},[t._v("依赖")]),n("v-card-text",[n("ul",[n("li",{staticClass:"my-3"},[n("div",{staticClass:"fold-primary",on:{click:t.fold}},[n("v-icon",[t._v("mdi-chevron-down")]),t._v("前端 ")],1),n("ul",[n("li",[t._v("框架:vue")]),n("li",[t._v("UI框架:vuetify")]),n("li",[t._v("css预处理:scss/sass")]),n("li",[t._v("状态管理:vuex")]),n("li",[t._v("路由管理:vue-router")]),n("li",[t._v("live2d:live2d-widget")]),n("li",[t._v(" live2d-api: "),n("a",{attrs:{href:"https://github.com/fghrsh/live2d_api"}},[t._v("fghrsh")]),t._v(" (由于是node后台没有配php环境所以直接用的大佬的api) ")]),n("li",[n("div",{staticClass:"fold-secondary",on:{click:t.fold}},[n("v-icon",[t._v("mdi-chevron-down")]),t._v("工具 ")],1),n("ul",[n("li",[t._v("axios:ajax请求库")]),n("li",[t._v("clipboard.js:剪贴板插件")]),n("li",[t._v("crypto.js.js:加密插件")]),n("li",[t._v("highlight.js:代码高亮")]),n("li",[t._v("marked.js:markdown:语法解析")]),n("li",[t._v("lodash:js工具库")]),n("li",[t._v("qiniu-js:七牛云图床js-sdk")]),n("li",[t._v("moment:时间格式化插件")])])])])]),n("li",{staticClass:"my-3"},[n("div",{staticClass:"fold-primary",on:{click:t.fold}},[n("v-icon",[t._v("mdi-chevron-down")]),t._v("后端 ")],1),n("ul",[n("li",[t._v("服务器:NGINX")]),n("li",[t._v("后端语言:nodejs")]),n("li",[t._v("后端框架:express")]),n("li",[t._v("内存数据库:redis")]),n("li",[t._v("数据库:mysql")]),n("li",[t._v("多进程守护:pm2")]),n("li",[t._v("服务器端渲染:暂无..(不利于SEO)")]),n("li",[n("div",{staticClass:"fold-secondary",on:{click:t.fold}},[n("v-icon",[t._v("mdi-chevron-down")]),t._v("工具 ")],1),n("ul",[n("li",[t._v("node-mailer:邮件推送工具")]),n("li",[t._v("xss:xss过滤")]),n("li",[t._v("cross-env:环境切换工具")]),n("li",[t._v("gravatar:头像链接生成")]),n("li",[t._v("qiniu:七牛后端鉴权")])])])])]),n("li",{staticClass:"my-3"},[n("div",{staticClass:"fold-primary",on:{click:t.fold}},[n("v-icon",[t._v("mdi-chevron-down")]),t._v("其他服务 ")],1),n("ul",[n("li",[t._v("域名:阿里云")]),n("li",[t._v("服务器:华为云")]),n("li",[t._v("CDN:百度云加速")]),n("li",[t._v("SMTP支持:zoho")]),n("li",[t._v("封面来源:感谢:"),n("a",{attrs:{href:"https://weibo.com/bangqiaoyan"}},[t._v("@邦乔彦")])]),n("li",[t._v("其他图片来源:pixiv,Twitter.(本站不会将图片作为任何形式的商业用途,如有侵权请联系我进行删除)")])])])])]),n("v-card-text",[n("strong",[t._v("如果你想搭建博客,可以使用wordpress,hexo,vue-press等博客构建工具,他们具有良好的社区支持和生态系统,数不清的精美模板,还对搜索引擎十分友好.不怎么推荐自己搭博客.")])])],1),n("TimeLine",{on:{imgClick:t.showBigImg}})],1),t.isMobile?t._e():n("v-img",{attrs:{eager:"",src:"https://cdn.kagurakana.xyz/love-down.png"}}),n("div",{staticClass:"text-center imgBig"},[n("v-dialog",{attrs:{"max-width":"70vw"},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[n("v-img",{attrs:{src:t.imgSrc,"max-height":"75vh","max-width":"70vw"}})],1)],1)],1)},o=[],s=i("6abc"),a=i("7094"),r=i.n(a),l=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-timeline",{attrs:{dense:t.isMobile}},t._l(t.timelines,(function(e,n){return i("v-timeline-item",{key:n},[i("v-lazy",{attrs:{options:{threshold:.25},"min-height":"200"}},[i("transition",{attrs:{appear:"","enter-active-class":"animated zoomIn"}},[i("v-hover",{scopedSlots:t._u([{key:"default",fn:function(n){var o=n.hover;return[i("v-card",{attrs:{elevation:o?12:2,color:"rgba(255,255,255,0.8)"},on:{click:function(i){return t.emitImg(e.img)}}},[i("v-card",{attrs:{color:"rgba(255,255,255,0.8)"},on:{click:function(i){return t.emitImg(e.img)}}},[i("v-img",{attrs:{src:e.img,"max-width":"100%","min-height":"450px"}}),i("v-card-title",[t._v(t._s(e.title))]),i("v-card-subtitle",[t._v(t._s(e.date))])],1)],1)]}}],null,!0)})],1)],1)],1)})),1)},c=[],u=i("7736"),d={name:"",data:function(){return{timelines:[{img:"https://cdn.kagurakana.xyz/QQ截图20200324232940.jpg",title:"更换live2d",date:"2020年3月24日"},{img:"https://cdn.kagurakana.xyz/JHCvDCqov7.gif",title:"markdown图片拖拽上传实时解析",date:"2020年3月7日"},{img:"https://i.loli.net/2020/02/27/lo2HhjYNg5dEZ8p.jpg",title:"关于页面开发完成",date:"2020年2月27日"},{img:"https://i.loli.net/2020/02/27/9unYJszKNIjcH8o.jpg",title:"上传页面，博客详情支持实时markdown解析",date:"2020年2月25日"},{img:"https://i.loli.net/2020/02/27/ikfmEqMjF3XJbVA.jpg",title:"后端返回数据格式统一",date:"2020年2月22日"},{img:"https://i.loli.net/2020/02/27/iFneJacTYOtsmwq.jpg",title:"上传接口调通，前后台登录认证",date:"2020年2月22日"},{img:"https://i.loli.net/2020/02/27/awuJ1YN2RfmMipv.jpg",title:"后端开发创建博客接口",date:"2020年2月22日"},{img:"https://i.loli.net/2020/02/27/ZBxyvudeXqCgJtp.jpg",title:"调通登录和注册,背景图自适应",date:"2020年2月19日"},{img:"https://i.loli.net/2020/02/27/Nk9fnVZX7MpTiHF.jpg",title:"上线环境测试,配置nginx,pm2",date:"2020年2月19日"},{img:"https://i.loli.net/2020/02/26/GCa5U17D42Yu3WL.jpg",title:"添加快速展示和自适应",date:"2020年2月18日"},{img:"https://i.loli.net/2020/02/26/lcdsQjwmzD9EANJ.jpg",title:"走马灯开发",date:"2020年2月18日"},{img:"https://i.loli.net/2020/02/26/ZBpIQVCrSbHmJY4.jpg",title:"三列布局设计和使用动画过渡自适应",date:"2020年2月17日"},{img:"https://i.loli.net/2020/02/26/i6werFHN1OgtRWY.jpg",title:"Nav导航完成并自适应",date:"2020年2月16日"},{img:"https://i.loli.net/2020/02/26/bA5GBj6F1DyaZ3l.jpg",title:"首页BigLogo开发和Nav预设",date:"2020年2月15日"},{img:"https://i.loli.net/2020/02/26/8Nuc9Gh6UYkJ5Vg.jpg",title:"测试代码高亮",date:"2020年2月14日"},{img:"https://i.loli.net/2020/02/26/637m8UykEMvNtpo.jpg",title:"vue初始化",date:"2020年2月14日"}],isActive:!1}},computed:Object(s["a"])({},Object(u["b"])(["isMobile"])),methods:{emitImg:function(t){this.$emit("imgClick",t)}}},h=d,v=(i("c297"),i("5d22")),f=i("7aad"),m=i.n(f),p=i("2275"),g=i("2a28"),y=i("9fd0"),b=i("dc88"),k=i("6844"),_=(i("8879"),i("07ca")),x=i("595b"),w=Object(_["a"])(x["a"]).extend({name:"v-timeline",provide(){return{timeline:this}},props:{alignTop:Boolean,dense:Boolean,reverse:Boolean},computed:{classes(){return{"v-timeline--align-top":this.alignTop,"v-timeline--dense":this.dense,"v-timeline--reverse":this.reverse,...this.themeClasses}}},render(t){return t("div",{staticClass:"v-timeline",class:this.classes},this.$slots.default)}}),C=i("c38e"),E=i("9e7a");const S=Object(_["a"])(E["a"],x["a"]);var j=S.extend().extend({name:"v-timeline-item",inject:["timeline"],props:{color:{type:String,default:"primary"},fillDot:Boolean,hideDot:Boolean,icon:String,iconColor:String,large:Boolean,left:Boolean,right:Boolean,small:Boolean},computed:{hasIcon(){return!!this.icon||!!this.$slots.icon}},methods:{genBody(){return this.$createElement("div",{staticClass:"v-timeline-item__body"},this.$slots.default)},genIcon(){return this.$slots.icon?this.$slots.icon:this.$createElement(C["a"],{props:{color:this.iconColor,dark:!this.theme.isDark,small:this.small}},this.icon)},genInnerDot(){const t=this.setBackgroundColor(this.color);return this.$createElement("div",{staticClass:"v-timeline-item__inner-dot",...t},[this.hasIcon&&this.genIcon()])},genDot(){return this.$createElement("div",{staticClass:"v-timeline-item__dot",class:{"v-timeline-item__dot--small":this.small,"v-timeline-item__dot--large":this.large}},[this.genInnerDot()])},genDivider(){const t=[];return this.hideDot||t.push(this.genDot()),this.$createElement("div",{staticClass:"v-timeline-item__divider"},t)},genOpposite(){return this.$createElement("div",{staticClass:"v-timeline-item__opposite"},this.$slots.opposite)}},render(t){const e=[this.genBody(),this.genDivider()];return this.$slots.opposite&&e.push(this.genOpposite()),t("div",{staticClass:"v-timeline-item",class:{"v-timeline-item--fill-dot":this.fillDot,"v-timeline-item--before":this.timeline.reverse?this.right:this.left,"v-timeline-item--after":this.timeline.reverse?this.left:this.right,...this.themeClasses}},e)}}),A=Object(v["a"])(h,l,c,!1,null,"1cd553c9",null),T=A.exports;m()(A,{VCard:p["a"],VCardSubtitle:g["b"],VCardTitle:g["d"],VHover:y["a"],VImg:b["a"],VLazy:k["a"],VTimeline:w,VTimelineItem:j});var O=i("6621"),$={name:"About",components:{Nav:O["a"],TimeLine:T},computed:Object(s["a"])(Object(s["a"])({},Object(u["b"])(["isMobile"])),{},{bgcImg:function(){return this.isMobile?"https://cdn.kagurakana.xyz/head_pic_mobile.jpg":"https://cdn.kagurakana.xyz/about-up.jpg"}}),mounted:function(){new r.a(".icons");document.dispatchEvent(new Event("render-event"))},data:function(){return{dialog:!1,imgSrc:"",textEmail:"点击拷贝:kagurakanaofficial☆qq.com",textQq:"点击拷贝:1278820830",textGithub:"点击拷贝:https://github.com/kagurakana",textSteam:"点击拷贝:https://steamcommunity.com/id/kagura_kana/",textBili:"点击拷贝:https://space.bilibili.com/14076737",showttt:!1}},methods:{copy:function(t){this[t]="以拷贝到剪贴板"},showBigImg:function(t){this.imgSrc=t,this.dialog=!0},fold:function(t){var e=t.currentTarget.nextElementSibling.style.display,i="none"!==e;t.currentTarget.nextElementSibling.style.display=!1===i?"block":"none";t.currentTarget.firstElementChild.style.transform;t.currentTarget.firstElementChild.style.transform=!1===i?"rotate(0deg)":"rotate(-180deg)"}}},I=$,B=(i("f33e"),i("1cfd")),D=i("9205"),L=i("60ed"),M=i("ee38"),V=i("9046"),q=Object(v["a"])(I,n,o,!1,null,"b2bc4c1c",null);e["default"]=q.exports;m()(q,{VCard:p["a"],VCardActions:g["a"],VCardText:g["c"],VCardTitle:g["d"],VCol:B["a"],VDialog:D["a"],VIcon:L["a"],VImg:b["a"],VRow:M["a"],VTooltip:V["a"]})},f33e:function(t,e,i){"use strict";i("5981")}}]);