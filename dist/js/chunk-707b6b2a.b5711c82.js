(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-707b6b2a"],{"1cfd":function(t,e,s){"use strict";s("e914");var i=s("a593"),a=s("978c"),r=s("eb21");const n=["sm","md","lg","xl"],o=(()=>n.reduce((t,e)=>(t[e]={type:[Boolean,String,Number],default:!1},t),{}))(),c=(()=>n.reduce((t,e)=>(t["offset"+Object(r["v"])(e)]={type:[String,Number],default:null},t),{}))(),l=(()=>n.reduce((t,e)=>(t["order"+Object(r["v"])(e)]={type:[String,Number],default:null},t),{}))(),d={col:Object.keys(o),offset:Object.keys(c),order:Object.keys(l)};function h(t,e,s){let i=t;if(null!=s&&!1!==s){if(e){const s=e.replace(t,"");i+="-"+s}return"col"!==t||""!==s&&!0!==s?(i+="-"+s,i.toLowerCase()):i.toLowerCase()}}const u=new Map;e["a"]=i["a"].extend({name:"v-col",functional:!0,props:{cols:{type:[Boolean,String,Number],default:!1},...o,offset:{type:[String,Number],default:null},...c,order:{type:[String,Number],default:null},...l,alignSelf:{type:String,default:null,validator:t=>["auto","start","end","center","baseline","stretch"].includes(t)},tag:{type:String,default:"div"}},render(t,{props:e,data:s,children:i,parent:r}){let n="";for(const a in e)n+=String(e[a]);let o=u.get(n);if(!o){let t;for(t in o=[],d)d[t].forEach(s=>{const i=e[s],a=h(t,s,i);a&&o.push(a)});const s=o.some(t=>t.startsWith("col-"));o.push({col:!s||!e.cols,["col-"+e.cols]:e.cols,["offset-"+e.offset]:e.offset,["order-"+e.order]:e.order,["align-self-"+e.alignSelf]:e.alignSelf}),u.set(n,o)}return t(e.tag,Object(a["a"])(s,{class:o}),i)}})},2275:function(t,e,s){"use strict";s("ce69");var i=s("822c"),a=s("e6f8"),r=s("bc0b"),n=s("07ca");e["a"]=Object(n["a"])(a["a"],r["a"],i["a"]).extend({name:"v-card",props:{flat:Boolean,hover:Boolean,img:String,link:Boolean,loaderHeight:{type:[Number,String],default:4},raised:Boolean},computed:{classes(){return{"v-card":!0,...r["a"].options.computed.classes.call(this),"v-card--flat":this.flat,"v-card--hover":this.hover,"v-card--link":this.isClickable,"v-card--loading":this.loading,"v-card--disabled":this.disabled,"v-card--raised":this.raised,...i["a"].options.computed.classes.call(this)}},styles(){const t={...i["a"].options.computed.styles.call(this)};return this.img&&(t.background=`url("${this.img}") center center / cover no-repeat`),t}},methods:{genProgress(){const t=a["a"].options.methods.genProgress.call(this);return t?this.$createElement("div",{staticClass:"v-card__progress",key:"progress"},[t]):null}},render(t){const{tag:e,data:s}=this.generateRouteLink();return s.style=this.styles,this.isClickable&&(s.attrs=s.attrs||{},s.attrs.tabindex=0),t(e,this.setBackgroundColor(this.color,s),[this.genProgress(),this.$slots.default])}})},"2a28":function(t,e,s){"use strict";s.d(e,"a",(function(){return r})),s.d(e,"b",(function(){return n})),s.d(e,"c",(function(){return o})),s.d(e,"d",(function(){return c}));var i=s("2275"),a=s("eb21");const r=Object(a["h"])("v-card__actions"),n=Object(a["h"])("v-card__subtitle"),o=Object(a["h"])("v-card__text"),c=Object(a["h"])("v-card__title");i["a"]},4191:function(t,e,s){"use strict";s("80b5")},"50a6":function(t,e,s){"use strict";s("d20e");var i=s("6f73"),a=s("9e7a"),r=s("595b"),n=s("b767"),o=s("c3c4"),c=s("07ca"),l=s("eb21"),d=s("3251");e["a"]=Object(c["a"])(i["a"],a["a"],n["a"],Object(o["b"])(["absolute","bottom","left","right","top"])).extend({name:"v-snackbar",props:{app:Boolean,centered:Boolean,contentClass:{type:String,default:""},multiLine:Boolean,text:Boolean,timeout:{type:[Number,String],default:5e3},transition:{type:[Boolean,String],default:"v-snack-transition",validator:t=>"string"===typeof t||!1===t},vertical:Boolean},data:()=>({activeTimeout:-1}),computed:{classes(){return{"v-snack--absolute":this.absolute,"v-snack--active":this.isActive,"v-snack--bottom":this.bottom||!this.top,"v-snack--centered":this.centered,"v-snack--has-background":this.hasBackground,"v-snack--left":this.left,"v-snack--multi-line":this.multiLine&&!this.vertical,"v-snack--right":this.right,"v-snack--text":this.text,"v-snack--top":this.top,"v-snack--vertical":this.vertical}},hasBackground(){return!this.text&&!this.outlined},isDark(){return this.hasBackground?!this.light:r["a"].options.computed.isDark.call(this)},styles(){if(this.absolute)return{};const{bar:t,bottom:e,footer:s,insetFooter:i,left:a,right:r,top:n}=this.$vuetify.application;return{paddingBottom:Object(l["f"])(e+s+i),paddingLeft:this.app?Object(l["f"])(a):void 0,paddingRight:this.app?Object(l["f"])(r):void 0,paddingTop:Object(l["f"])(t+n)}}},watch:{isActive:"setTimeout",timeout:"setTimeout"},mounted(){this.isActive&&this.setTimeout()},created(){this.$attrs.hasOwnProperty("auto-height")&&Object(d["e"])("auto-height",this),0==this.timeout&&Object(d["d"])('timeout="0"',"-1",this)},methods:{genActions(){return this.$createElement("div",{staticClass:"v-snack__action "},[Object(l["m"])(this,"action",{attrs:{class:"v-snack__btn"}})])},genContent(){return this.$createElement("div",{staticClass:"v-snack__content",class:{[this.contentClass]:!0},attrs:{role:"status","aria-live":"polite"}},[Object(l["m"])(this)])},genWrapper(){const t=this.hasBackground?this.setBackgroundColor:this.setTextColor,e=t(this.color,{staticClass:"v-snack__wrapper",class:i["a"].options.computed.classes.call(this),directives:[{name:"show",value:this.isActive}],on:{mouseenter:()=>window.clearTimeout(this.activeTimeout),mouseleave:this.setTimeout}});return this.$createElement("div",e,[this.genContent(),this.genActions()])},genTransition(){return this.$createElement("transition",{props:{name:this.transition}},[this.genWrapper()])},setTimeout(){window.clearTimeout(this.activeTimeout);const t=Number(this.timeout);this.isActive&&![0,-1].includes(t)&&(this.activeTimeout=window.setTimeout(()=>{this.isActive=!1},t))}},render(t){return t("div",{staticClass:"v-snack",class:this.classes,style:this.styles},[!1!==this.transition?this.genTransition():this.genWrapper()])}})},"676a":function(t,e,s){"use strict";s.r(e);var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("v-img",{attrs:{height:"100vh",width:"100vw",src:t.imgSrc},on:{keydown:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.submitByEnter()}}},[s("v-row",{staticStyle:{height:"100%"},attrs:{align:"center",justify:"center"}},[s("v-hover",{scopedSlots:t._u([{key:"default",fn:function(e){var i=e.hover;return[s("v-col",{attrs:{cols:"8",md:"4"}},[s("v-card",{class:{"on-hover":i||t.isMobile},attrs:{color:"white",outlined:i,width:"100%"}},[s("v-form",{staticClass:"input",model:{value:t.valid,callback:function(e){t.valid=e},expression:"valid"}},[s("v-row",[s("v-col",{staticClass:"mx-auto",attrs:{cols:"11"}},[s("v-text-field",{attrs:{required:"",label:"用户名/邮箱"},model:{value:t.username,callback:function(e){t.username=e},expression:"username"}}),s("v-text-field",{attrs:{required:"",label:"密码",type:"password"},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}})],1),s("v-col",{attrs:{cols:"12"}})],1)],1),s("v-card-subtitle",{staticClass:"flex"},[s("v-btn",{attrs:{text:""},on:{click:t.pushRouterRegister}},[t._v("去注册")]),s("v-btn",{ref:"login",staticClass:"right",attrs:{text:""},on:{click:t.postData}},[t._v("登录!")])],1)],1)],1)]}}])})],1),s("v-snackbar",{attrs:{color:"blue",timeout:t.timeout,top:t.isMobile},model:{value:t.successRegiste,callback:function(e){t.successRegiste=e},expression:"successRegiste"}},[t._v(" "+t._s(t.checkedUsername)+"欢迎回来~~ "+t._s(t.second)+" 秒后跳转首页 "),s("v-btn",{attrs:{color:"lime",text:""},on:{click:function(e){t.successRegiste=!1}}},[t._v("Close")])],1)],1),s("transition",[s("div",{ref:"foo"})])],1)},a=[],r=s("6abc"),n=s("8d85"),o=s("7736"),c={name:"Login",data:function(){return{valid:!1,password:"",username:"",pcSrc:"https://cdn.kagurakana.xyz/home_head_pic.jpg",mobileSrc:"https://cdn.kagurakana.xyz/head_pic_mobile.jpg",second:0,timeout:3e3,checkedUsername:"",successRegiste:!1}},computed:Object(r["a"])(Object(r["a"])({},Object(o["b"])(["isMobile","loginCheckUsername"])),{},{imgSrc:function(){return this.isMobile?this.mobileSrc:this.pcSrc}}),created:function(){var t=this;""===this.loginCheckUsername?Object(n["b"])().then((function(e){-1!==e.errno&&(t.checkedUsername=e.data.username,t.$store.commit("storeUserData",{username:e.data.username,email:e.data.email}),t.showBar())})):(this.checkedUsername=this.loginCheckUsername,this.showBar())},methods:{postData:function(){var t=this;this.checkedUsername="",Object(n["f"])(this.username,this.password).then((function(e){0===e.errno&&(t.checkedUsername=e.data.username,t.showBar())}))},showBar:function(){var t=this;this.successRegiste=!0,this.second=this.timeout/1e3;var e=setInterval((function(){t.second-=1}),1e3);setTimeout((function(){clearInterval(e),t.$router.push("/")}),this.timeout)},pushRouterRegister:function(){this.$router.push("/register")},submitByEnter:function(){this.$refs.login.$el.click()}},mounted:function(){console.log("refs: ",this.$refs)}},l=c,d=(s("4191"),s("5d22")),h=s("7aad"),u=s.n(h),m=s("9b1f"),g=s("2275"),p=s("2a28"),v=s("1cfd"),f=s("d345"),b=s("9fd0"),y=s("dc88"),S=s("ee38"),k=s("50a6"),_=s("110a"),w=Object(d["a"])(l,i,a,!1,null,"3acff4d6",null);e["default"]=w.exports;u()(w,{VBtn:m["a"],VCard:g["a"],VCardSubtitle:p["b"],VCol:v["a"],VForm:f["a"],VHover:b["a"],VImg:y["a"],VRow:S["a"],VSnackbar:k["a"],VTextField:_["a"]})},"80b5":function(t,e,s){},"89ea":function(t,e,s){},"9e0b":function(t,e,s){},"9fd0":function(t,e,s){"use strict";var i=s("54e0"),a=s("b767"),r=s("07ca"),n=s("3251");e["a"]=Object(r["a"])(i["a"],a["a"]).extend({name:"v-hover",props:{disabled:{type:Boolean,default:!1},value:{type:Boolean,default:void 0}},methods:{onMouseEnter(){this.runDelay("open")},onMouseLeave(){this.runDelay("close")}},render(){if(!this.$scopedSlots.default&&void 0===this.value)return Object(n["c"])("v-hover is missing a default scopedSlot or bound value",this),null;let t;return this.$scopedSlots.default&&(t=this.$scopedSlots.default({hover:this.isActive})),Array.isArray(t)&&1===t.length&&(t=t[0]),t&&!Array.isArray(t)&&t.tag?(this.disabled||(t.data=t.data||{},this._g(t.data,{mouseenter:this.onMouseEnter,mouseleave:this.onMouseLeave})),t):(Object(n["c"])("v-hover should only contain a single element",this),t)}})},ce69:function(t,e,s){},d20e:function(t,e,s){},d345:function(t,e,s){"use strict";var i=s("07ca"),a=s("cd2d"),r=s("b82e");e["a"]=Object(i["a"])(a["a"],Object(r["b"])("form")).extend({name:"v-form",provide(){return{form:this}},inheritAttrs:!1,props:{disabled:Boolean,lazyValidation:Boolean,readonly:Boolean,value:Boolean},data:()=>({inputs:[],watchers:[],errorBag:{}}),watch:{errorBag:{handler(t){const e=Object.values(t).includes(!0);this.$emit("input",!e)},deep:!0,immediate:!0}},methods:{watchInput(t){const e=t=>t.$watch("hasError",e=>{this.$set(this.errorBag,t._uid,e)},{immediate:!0}),s={_uid:t._uid,valid:()=>{},shouldValidate:()=>{}};return this.lazyValidation?s.shouldValidate=t.$watch("shouldValidate",i=>{i&&(this.errorBag.hasOwnProperty(t._uid)||(s.valid=e(t)))}):s.valid=e(t),s},validate(){return 0===this.inputs.filter(t=>!t.validate(!0)).length},reset(){this.inputs.forEach(t=>t.reset()),this.resetErrorBag()},resetErrorBag(){this.lazyValidation&&setTimeout(()=>{this.errorBag={}},0)},resetValidation(){this.inputs.forEach(t=>t.resetValidation()),this.resetErrorBag()},register(t){this.inputs.push(t),this.watchers.push(this.watchInput(t))},unregister(t){const e=this.inputs.find(e=>e._uid===t._uid);if(!e)return;const s=this.watchers.find(t=>t._uid===e._uid);s&&(s.valid(),s.shouldValidate()),this.watchers=this.watchers.filter(t=>t._uid!==e._uid),this.inputs=this.inputs.filter(t=>t._uid!==e._uid),this.$delete(this.errorBag,e._uid)}},render(t){return t("form",{staticClass:"v-form",attrs:{novalidate:!0,...this.attrs$},on:{submit:t=>this.$emit("submit",t)}},this.$slots.default)}})},dc88:function(t,e,s){"use strict";s("9e0b");var i=s("bd86"),a=(s("89ea"),s("fb97")),r=s("07ca"),n=Object(r["a"])(a["a"]).extend({name:"v-responsive",props:{aspectRatio:[String,Number],contentClass:String},computed:{computedAspectRatio(){return Number(this.aspectRatio)},aspectStyle(){return this.computedAspectRatio?{paddingBottom:1/this.computedAspectRatio*100+"%"}:void 0},__cachedSizer(){return this.aspectStyle?this.$createElement("div",{style:this.aspectStyle,staticClass:"v-responsive__sizer"}):[]}},methods:{genContent(){return this.$createElement("div",{staticClass:"v-responsive__content",class:this.contentClass},this.$slots.default)}},render(t){return t("div",{staticClass:"v-responsive",style:this.measurableStyles,on:this.$listeners},[this.__cachedSizer,this.genContent()])}}),o=n,c=s("595b"),l=s("978c"),d=s("3251");const h="undefined"!==typeof window&&"IntersectionObserver"in window;e["a"]=Object(r["a"])(o,c["a"]).extend({name:"v-img",directives:{intersect:i["a"]},props:{alt:String,contain:Boolean,eager:Boolean,gradient:String,lazySrc:String,options:{type:Object,default:()=>({root:void 0,rootMargin:void 0,threshold:void 0})},position:{type:String,default:"center center"},sizes:String,src:{type:[String,Object],default:""},srcset:String,transition:{type:[Boolean,String],default:"fade-transition"}},data(){return{currentSrc:"",image:null,isLoading:!0,calculatedAspectRatio:void 0,naturalWidth:void 0,hasError:!1}},computed:{computedAspectRatio(){return Number(this.normalisedSrc.aspect||this.calculatedAspectRatio)},normalisedSrc(){return this.src&&"object"===typeof this.src?{src:this.src.src,srcset:this.srcset||this.src.srcset,lazySrc:this.lazySrc||this.src.lazySrc,aspect:Number(this.aspectRatio||this.src.aspect)}:{src:this.src,srcset:this.srcset,lazySrc:this.lazySrc,aspect:Number(this.aspectRatio||0)}},__cachedImage(){if(!(this.normalisedSrc.src||this.normalisedSrc.lazySrc||this.gradient))return[];const t=[],e=this.isLoading?this.normalisedSrc.lazySrc:this.currentSrc;this.gradient&&t.push(`linear-gradient(${this.gradient})`),e&&t.push(`url("${e}")`);const s=this.$createElement("div",{staticClass:"v-image__image",class:{"v-image__image--preload":this.isLoading,"v-image__image--contain":this.contain,"v-image__image--cover":!this.contain},style:{backgroundImage:t.join(", "),backgroundPosition:this.position},key:+this.isLoading});return this.transition?this.$createElement("transition",{attrs:{name:this.transition,mode:"in-out"}},[s]):s}},watch:{src(){this.isLoading?this.loadImage():this.init(void 0,void 0,!0)},"$vuetify.breakpoint.width":"getSrc"},mounted(){this.init()},methods:{init(t,e,s){if(!h||s||this.eager){if(this.normalisedSrc.lazySrc){const t=new Image;t.src=this.normalisedSrc.lazySrc,this.pollForSize(t,null)}this.normalisedSrc.src&&this.loadImage()}},onLoad(){this.getSrc(),this.isLoading=!1,this.$emit("load",this.src),this.image&&(this.normalisedSrc.src.endsWith(".svg")||this.normalisedSrc.src.startsWith("data:image/svg+xml"))&&(this.image.naturalHeight&&this.image.naturalWidth?(this.naturalWidth=this.image.naturalWidth,this.calculatedAspectRatio=this.image.naturalWidth/this.image.naturalHeight):this.calculatedAspectRatio=1)},onError(){this.hasError=!0,this.$emit("error",this.src)},getSrc(){this.image&&(this.currentSrc=this.image.currentSrc||this.image.src)},loadImage(){const t=new Image;this.image=t,t.onload=()=>{t.decode?t.decode().catch(t=>{Object(d["c"])("Failed to decode image, trying to render anyway\n\nsrc: "+this.normalisedSrc.src+(t.message?"\nOriginal error: "+t.message:""),this)}).then(this.onLoad):this.onLoad()},t.onerror=this.onError,this.hasError=!1,t.src=this.normalisedSrc.src,this.sizes&&(t.sizes=this.sizes),this.normalisedSrc.srcset&&(t.srcset=this.normalisedSrc.srcset),this.aspectRatio||this.pollForSize(t),this.getSrc()},pollForSize(t,e=100){const s=()=>{const{naturalHeight:i,naturalWidth:a}=t;i||a?(this.naturalWidth=a,this.calculatedAspectRatio=a/i):t.complete||!this.isLoading||this.hasError||null==e||setTimeout(s,e)};s()},genContent(){const t=o.options.methods.genContent.call(this);return this.naturalWidth&&this._b(t.data,"div",{style:{width:this.naturalWidth+"px"}}),t},__genPlaceholder(){if(this.$slots.placeholder){const t=this.isLoading?[this.$createElement("div",{staticClass:"v-image__placeholder"},this.$slots.placeholder)]:[];return this.transition?this.$createElement("transition",{props:{appear:!0,name:this.transition}},t):t[0]}}},render(t){const e=o.options.render.call(this,t),s=Object(l["a"])(e.data,{staticClass:"v-image",attrs:{"aria-label":this.alt,role:this.alt?"img":void 0},class:this.themeClasses,directives:h?[{name:"intersect",modifiers:{once:!0},value:{handler:this.init,options:this.options}}]:void 0});return e.children=[this.__cachedSizer,this.__cachedImage,this.__genPlaceholder(),this.genContent()],t(e.tag,s,e.children)}})},ee38:function(t,e,s){"use strict";s("e914");var i=s("a593"),a=s("978c"),r=s("eb21");const n=["sm","md","lg","xl"],o=["start","end","center"];function c(t,e){return n.reduce((s,i)=>(s[t+Object(r["v"])(i)]=e(),s),{})}const l=t=>[...o,"baseline","stretch"].includes(t),d=c("align",()=>({type:String,default:null,validator:l})),h=t=>[...o,"space-between","space-around"].includes(t),u=c("justify",()=>({type:String,default:null,validator:h})),m=t=>[...o,"space-between","space-around","stretch"].includes(t),g=c("alignContent",()=>({type:String,default:null,validator:m})),p={align:Object.keys(d),justify:Object.keys(u),alignContent:Object.keys(g)},v={align:"align",justify:"justify",alignContent:"align-content"};function f(t,e,s){let i=v[t];if(null!=s){if(e){const s=e.replace(t,"");i+="-"+s}return i+="-"+s,i.toLowerCase()}}const b=new Map;e["a"]=i["a"].extend({name:"v-row",functional:!0,props:{tag:{type:String,default:"div"},dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:l},...d,justify:{type:String,default:null,validator:h},...u,alignContent:{type:String,default:null,validator:m},...g},render(t,{props:e,data:s,children:i}){let r="";for(const a in e)r+=String(e[a]);let n=b.get(r);if(!n){let t;for(t in n=[],p)p[t].forEach(s=>{const i=e[s],a=f(t,s,i);a&&n.push(a)});n.push({"no-gutters":e.noGutters,"row--dense":e.dense,["align-"+e.align]:e.align,["justify-"+e.justify]:e.justify,["align-content-"+e.alignContent]:e.alignContent}),b.set(r,n)}return t(e.tag,Object(a["a"])(s,{staticClass:"row",class:n}),i)}})}}]);