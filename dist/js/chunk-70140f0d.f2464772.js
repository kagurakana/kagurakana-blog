(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-70140f0d"],{"035d":function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("BaseLayout",{scopedSlots:t._u([{key:"layout",fn:function(){return[n("v-col",{staticClass:"mx-auto",attrs:{cols:"11",md:"8"}},[n("v-card",{staticClass:"mx-auto text-center bangumi-card",attrs:{color:"rgba(255,255,255,0.8)",outlined:""}},[n("h3",{staticClass:"ma-3 pink--text"},[t._v("总共追番:"+t._s(t.total))]),n("v-row",{staticClass:"ma-1"},t._l(t.bangumiListFromBackEnd,(function(e,i){return n("v-col",{key:i,attrs:{cols:"12",sm:"6",md:"6",lg:"4"}},[n("v-hover",{scopedSlots:t._u([{key:"default",fn:function(i){var a=i.hover;return[n("a",{attrs:{tag:"div",href:e.url,target:"_blank",rel:"noopener noreferrer"}},[n("v-card",[n("v-img",{attrs:{height:"300px",src:t.baseUrlOut+"/"+e.cover,"lazy-src":r("f8b2")}},[n("transition",{attrs:{"enter-active-class":"animated slideInUp","leave-active-class":"animated slideOutDown"}},[a?n("div",{staticClass:"d-flex bangumi-intr",staticStyle:{height:"100%"}},[t._v(t._s(e.evaluate))]):t._e()])],1),n("v-card-title",{staticClass:"text-center bangumi-title",attrs:{title:e.title}},[t._v(t._s(e.title))]),n("v-rating",{attrs:{readonly:"",length:5,"background-color":"orange lighten-3",color:"orange"},model:{value:e.rating.stars,callback:function(r){t.$set(e.rating,"stars",r)},expression:"bangumi.rating.stars"}}),n("v-card-text",[t._v("评分:"+t._s(e.rating.score))]),n("v-card-text",[t._v(t._s(e.new_ep.index_show)+" | "+t._s(e.progress))])],1)],1)]}}],null,!0)})],1)})),1),n("v-btn",{staticClass:"my-4",attrs:{text:"",color:"blue darken-3"},on:{click:t.loadMoreBangumi}},[t._v("加载更多...")])],1)],1)]},proxy:!0}])})},i=[],a=r("58c8"),o=(r("3337"),r("fc13"),r("9b5f"),r("529f"),r("1bf7")),s=r("bc3e"),l=r("1bab"),c={name:"Bangumi",components:{BaseLayout:o["a"]},created:function(){var t=this;Object(s["a"])(this.page,15).then((function(e){var r;console.log(e.data),(r=t.bangumiList).push.apply(r,Object(a["a"])(e.data.list)),console.log(t.bangumiList),t.total=e.data.total}))},data:function(){return{page:1,bangumiList:[],total:0,baseUrlOut:l["a"]}},computed:{bangumiListFromBackEnd:function(){return this.bangumiList.map((function(t){return t.cover=t.cover.replace("http://",""),void 0!==t.rating?t.rating.stars=1*(t.rating.score/2).toFixed(0):t.rating={score:0},t}))}},methods:{loadMoreBangumi:function(){var t=this;Object(s["a"])(++this.page,15).then((function(e){var r;(r=t.bangumiList).push.apply(r,Object(a["a"])(e.data.list))}))}}},u=c,d=(r("c75c"),r("5d22")),f=r("7aad"),h=r.n(f),v=r("9b1f"),p=r("2275"),g=r("2a28"),m=r("1cfd"),b=r("9fd0"),y=r("dc88"),x=(r("d997"),r("c38e")),_=r("9e7a"),w=r("54e0"),S=r("d153"),I=r("059e"),k=r("595b"),H=r("eb21"),C=r("07ca"),O=Object(C["a"])(_["a"],w["a"],I["a"],S["a"],k["a"]).extend({name:"v-rating",props:{backgroundColor:{type:String,default:"accent"},color:{type:String,default:"primary"},clearable:Boolean,dense:Boolean,emptyIcon:{type:String,default:"$ratingEmpty"},fullIcon:{type:String,default:"$ratingFull"},halfIcon:{type:String,default:"$ratingHalf"},halfIncrements:Boolean,hover:Boolean,length:{type:[Number,String],default:5},readonly:Boolean,size:[Number,String],value:{type:Number,default:0},iconLabel:{type:String,default:"$vuetify.rating.ariaLabel.icon"}},data(){return{hoverIndex:-1,internalValue:this.value}},computed:{directives(){return this.readonly||!this.ripple?[]:[{name:"ripple",value:{circle:!0}}]},iconProps(){const{dark:t,large:e,light:r,medium:n,small:i,size:a,xLarge:o,xSmall:s}=this.$props;return{dark:t,large:e,light:r,medium:n,size:a,small:i,xLarge:o,xSmall:s}},isHovering(){return this.hover&&this.hoverIndex>=0}},watch:{internalValue(t){t!==this.value&&this.$emit("input",t)},value(t){this.internalValue=t}},methods:{createClickFn(t){return e=>{if(this.readonly)return;const r=this.genHoverIndex(e,t);this.clearable&&this.internalValue===r?this.internalValue=0:this.internalValue=r}},createProps(t){const e={index:t,value:this.internalValue,click:this.createClickFn(t),isFilled:Math.floor(this.internalValue)>t,isHovered:Math.floor(this.hoverIndex)>t};return this.halfIncrements&&(e.isHalfHovered=!e.isHovered&&(this.hoverIndex-t)%1>0,e.isHalfFilled=!e.isFilled&&(this.internalValue-t)%1>0),e},genHoverIndex(t,e){let r=this.isHalfEvent(t);return this.halfIncrements&&this.$vuetify.rtl&&(r=!r),e+(r?.5:1)},getIconName(t){const e=this.isHovering?t.isHovered:t.isFilled,r=this.isHovering?t.isHalfHovered:t.isHalfFilled;return e?this.fullIcon:r?this.halfIcon:this.emptyIcon},getColor(t){if(this.isHovering){if(t.isHovered||t.isHalfHovered)return this.color}else if(t.isFilled||t.isHalfFilled)return this.color;return this.backgroundColor},isHalfEvent(t){if(this.halfIncrements){const e=t.target&&t.target.getBoundingClientRect();if(e&&t.pageX-e.left<e.width/2)return!0}return!1},onMouseEnter(t,e){this.runDelay("open",()=>{this.hoverIndex=this.genHoverIndex(t,e)})},onMouseLeave(){this.runDelay("close",()=>this.hoverIndex=-1)},genItem(t){const e=this.createProps(t);if(this.$scopedSlots.item)return this.$scopedSlots.item(e);const r={click:e.click};return this.hover&&(r.mouseenter=e=>this.onMouseEnter(e,t),r.mouseleave=this.onMouseLeave,this.halfIncrements&&(r.mousemove=e=>this.onMouseEnter(e,t))),this.$createElement(x["a"],this.setTextColor(this.getColor(e),{attrs:{"aria-label":this.$vuetify.lang.t(this.iconLabel,t+1,Number(this.length))},directives:this.directives,props:this.iconProps,on:r}),[this.getIconName(e)])}},render(t){const e=Object(H["g"])(Number(this.length)).map(t=>this.genItem(t));return t("div",{staticClass:"v-rating",class:{"v-rating--readonly":this.readonly,"v-rating--dense":this.dense}},e)}}),j=r("ee38"),A=Object(d["a"])(u,n,i,!1,null,"71980d90",null);e["default"]=A.exports;h()(A,{VBtn:v["a"],VCard:p["a"],VCardText:g["c"],VCardTitle:g["d"],VCol:m["a"],VHover:b["a"],VImg:y["a"],VRating:O,VRow:j["a"]})},"059e":function(t,e,r){"use strict";var n=r("b92e"),i=r("a593");e["a"]=i["a"].extend({name:"rippleable",directives:{ripple:n["a"]},props:{ripple:{type:[Boolean,Object],default:!0}},methods:{genRipple(t={}){return this.ripple?(t.staticClass="v-input--selection-controls__ripple",t.directives=t.directives||[],t.directives.push({name:"ripple",value:{center:!0}}),this.$createElement("div",t)):null}}})},"0664":function(t,e,r){"use strict";var n=r("e6d2"),i=r("4023");t.exports="".repeat||function(t){var e=String(i(this)),r="",a=n(t);if(a<0||a==1/0)throw RangeError("Wrong number of repetitions");for(;a>0;(a>>>=1)&&(e+=e))1&a&&(r+=e);return r}},"1bf7":function(t,e,r){"use strict";var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("HomeNav",{staticClass:"home-nav"}),t._t("layout"),r("v-img",{staticClass:"background",attrs:{width:"100vw",height:"100vh",src:"https://cdn.kagurakana.xyz/DpumTcUX4AEvMfp.jpg"}})],2)},i=[],a=r("6621"),o={name:"BaseLayout",components:{HomeNav:a["a"]}},s=o,l=(r("b193"),r("5d22")),c=r("7aad"),u=r.n(c),d=r("dc88"),f=Object(l["a"])(s,n,i,!1,null,"440ee175",null);e["a"]=f.exports;u()(f,{VImg:d["a"]})},"1d43":function(t,e,r){var n=r("8fe5"),i=r("d320").f,a=Function.prototype,o=a.toString,s=/^\s*function ([^ (]*)/,l="name";n&&!(l in a)&&i(a,l,{configurable:!0,get:function(){try{return o.call(this).match(s)[1]}catch(t){return""}}})},"2a28":function(t,e,r){"use strict";r.d(e,"a",(function(){return a})),r.d(e,"b",(function(){return o})),r.d(e,"c",(function(){return s})),r.d(e,"d",(function(){return l}));var n=r("2275"),i=r("eb21");const a=Object(i["h"])("v-card__actions"),o=Object(i["h"])("v-card__subtitle"),s=Object(i["h"])("v-card__text"),l=Object(i["h"])("v-card__title");n["a"]},"2cb7":function(t,e,r){},3337:function(t,e,r){"use strict";var n=r("1f04"),i=r("59bf").map,a=r("7041"),o=a("map");n({target:"Array",proto:!0,forced:!o},{map:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0)}})},"529f":function(t,e,r){"use strict";var n=r("1f04"),i=r("e6d2"),a=r("8251"),o=r("0664"),s=r("7ce6"),l=1..toFixed,c=Math.floor,u=function(t,e,r){return 0===e?r:e%2===1?u(t,e-1,r*t):u(t*t,e/2,r)},d=function(t){var e=0,r=t;while(r>=4096)e+=12,r/=4096;while(r>=2)e+=1,r/=2;return e},f=function(t,e,r){var n=-1,i=r;while(++n<6)i+=e*t[n],t[n]=i%1e7,i=c(i/1e7)},h=function(t,e){var r=6,n=0;while(--r>=0)n+=t[r],t[r]=c(n/e),n=n%e*1e7},v=function(t){var e=6,r="";while(--e>=0)if(""!==r||0===e||0!==t[e]){var n=String(t[e]);r=""===r?n:r+o.call("0",7-n.length)+n}return r},p=l&&("0.000"!==8e-5.toFixed(3)||"1"!==.9.toFixed(0)||"1.25"!==1.255.toFixed(2)||"1000000000000000128"!==(0xde0b6b3a7640080).toFixed(0))||!s((function(){l.call({})}));n({target:"Number",proto:!0,forced:p},{toFixed:function(t){var e,r,n,s,l=a(this),c=i(t),p=[0,0,0,0,0,0],g="",m="0";if(c<0||c>20)throw RangeError("Incorrect fraction digits");if(l!=l)return"NaN";if(l<=-1e21||l>=1e21)return String(l);if(l<0&&(g="-",l=-l),l>1e-21)if(e=d(l*u(2,69,1))-69,r=e<0?l*u(2,-e,1):l/u(2,e,1),r*=4503599627370496,e=52-e,e>0){f(p,0,r),n=c;while(n>=7)f(p,1e7,0),n-=7;f(p,u(10,n,1),0),n=e-1;while(n>=23)h(p,1<<23),n-=23;h(p,1<<n),f(p,1,1),h(p,2),m=v(p)}else f(p,0,r),f(p,1<<-e,0),m=v(p)+o.call("0",c);return c>0?(s=m.length,m=g+(s<=c?"0."+o.call("0",c-s)+m:m.slice(0,s-c)+"."+m.slice(s-c))):m=g+m,m}})},"58c8":function(t,e,r){"use strict";function n(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}function i(t){if(Array.isArray(t))return n(t)}r.d(e,"a",(function(){return l}));r("01e5"),r("e487"),r("27ae"),r("c2f8"),r("591f"),r("feb3"),r("7a3a");function a(t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}r("5d08"),r("1d43");function o(t,e){if(t){if("string"===typeof t)return n(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?n(t,e):void 0}}function s(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function l(t){return i(t)||a(t)||o(t)||s()}},"5d08":function(t,e,r){"use strict";var n=r("1f04"),i=r("97f5"),a=r("0914"),o=r("5156"),s=r("a187"),l=r("b7d9"),c=r("98a5"),u=r("3086"),d=r("7041"),f=d("slice"),h=u("species"),v=[].slice,p=Math.max;n({target:"Array",proto:!0,forced:!f},{slice:function(t,e){var r,n,u,d=l(this),f=s(d.length),g=o(t,f),m=o(void 0===e?f:e,f);if(a(d)&&(r=d.constructor,"function"!=typeof r||r!==Array&&!a(r.prototype)?i(r)&&(r=r[h],null===r&&(r=void 0)):r=void 0,r===Array||void 0===r))return v.call(d,g,m);for(n=new(void 0===r?Array:r)(p(m-g,0)),u=0;g<m;g++,u++)g in d&&c(n,u,d[g]);return n.length=u,n}})},"6a3f":function(t,e,r){},"7a3a":function(t,e,r){var n=r("1f04"),i=r("f180"),a=r("7e06"),o=!a((function(t){Array.from(t)}));n({target:"Array",stat:!0,forced:o},{from:i})},8251:function(t,e,r){var n=r("36b2");t.exports=function(t){if("number"!=typeof t&&"Number"!=n(t))throw TypeError("Incorrect invocation");return+t}},"9fd0":function(t,e,r){"use strict";var n=r("54e0"),i=r("b767"),a=r("07ca"),o=r("3251");e["a"]=Object(a["a"])(n["a"],i["a"]).extend({name:"v-hover",props:{disabled:{type:Boolean,default:!1},value:{type:Boolean,default:void 0}},methods:{onMouseEnter(){this.runDelay("open")},onMouseLeave(){this.runDelay("close")}},render(){if(!this.$scopedSlots.default&&void 0===this.value)return Object(o["c"])("v-hover is missing a default scopedSlot or bound value",this),null;let t;return this.$scopedSlots.default&&(t=this.$scopedSlots.default({hover:this.isActive})),Array.isArray(t)&&1===t.length&&(t=t[0]),t&&!Array.isArray(t)&&t.tag?(this.disabled||(t.data=t.data||{},this._g(t.data,{mouseenter:this.onMouseEnter,mouseleave:this.onMouseLeave})),t):(Object(o["c"])("v-hover should only contain a single element",this),t)}})},b193:function(t,e,r){"use strict";r("2cb7")},bc3e:function(t,e,r){"use strict";r.d(e,"a",(function(){return i})),r.d(e,"b",(function(){return a}));var n=r("1bab");function i(t,e){return Object(n["b"])({withCredentials:!0,method:"get",url:"/bangumi",params:{pn:t,sn:e,type:1,follow_status:0,vmid:14076737}})}function a(t){return Object(n["b"])({method:"get",url:"/qqinfo",params:{uins:t,g_tk:"1518561325"}})}},c2f8:function(t,e,r){var n=r("bd91");n("iterator")},c75c:function(t,e,r){"use strict";r("6a3f")},d997:function(t,e,r){},e487:function(t,e,r){"use strict";var n=r("1f04"),i=r("8fe5"),a=r("f14a"),o=r("2ccf"),s=r("97f5"),l=r("d320").f,c=r("a123"),u=a.Symbol;if(i&&"function"==typeof u&&(!("description"in u.prototype)||void 0!==u().description)){var d={},f=function(){var t=arguments.length<1||void 0===arguments[0]?void 0:String(arguments[0]),e=this instanceof f?new u(t):void 0===t?u():u(t);return""===t&&(d[e]=!0),e};c(f,u);var h=f.prototype=u.prototype;h.constructor=f;var v=h.toString,p="Symbol(test)"==String(u("test")),g=/^Symbol\((.*)\)[^)]+$/;l(h,"description",{configurable:!0,get:function(){var t=s(this)?this.valueOf():this,e=v.call(t);if(o(d,t))return"";var r=p?e.slice(7,-1):e.replace(g,"$1");return""===r?void 0:r}}),n({global:!0,forced:!0},{Symbol:f})}},f180:function(t,e,r){"use strict";var n=r("0c1b"),i=r("f8d3"),a=r("fd17"),o=r("1a0a"),s=r("a187"),l=r("98a5"),c=r("203f");t.exports=function(t){var e,r,u,d,f,h,v=i(t),p="function"==typeof this?this:Array,g=arguments.length,m=g>1?arguments[1]:void 0,b=void 0!==m,y=c(v),x=0;if(b&&(m=n(m,g>2?arguments[2]:void 0,2)),void 0==y||p==Array&&o(y))for(e=s(v.length),r=new p(e);e>x;x++)h=b?m(v[x],x):v[x],l(r,x,h);else for(d=y.call(v),f=d.next,r=new p;!(u=f.call(d)).done;x++)h=b?a(d,m,[u.value,x],!0):u.value,l(r,x,h);return r.length=x,r}},f8b2:function(t,e,r){t.exports=r.p+"img/loading.d7bc21b0.gif"},fd17:function(t,e,r){var n=r("baa9"),i=r("cd08");t.exports=function(t,e,r,a){try{return a?e(n(r)[0],r[1]):e(r)}catch(o){throw i(t),o}}}}]);