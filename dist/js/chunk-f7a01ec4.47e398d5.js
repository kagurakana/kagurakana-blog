(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-f7a01ec4"],{"035d":function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("BaseLayout",{scopedSlots:t._u([{key:"layout",fn:function(){return[a("v-col",{staticClass:"mx-auto",attrs:{cols:"11",md:"8"}},[a("v-card",{staticClass:"mx-auto text-center bangumi-card",attrs:{color:"rgba(255,255,255,0.8)",outlined:""}},[a("h3",{staticClass:"ma-3 pink--text"},[t._v("总共追番:"+t._s(t.total))]),a("v-row",{staticClass:"ma-1"},t._l(t.bangumiListFromBackEnd,(function(e,i){return a("v-col",{key:i,attrs:{cols:"12",sm:"6",md:"6",lg:"4"}},[a("v-hover",{scopedSlots:t._u([{key:"default",fn:function(i){var r=i.hover;return[a("a",{attrs:{tag:"div",href:e.url,target:"_blank",rel:"noopener noreferrer"}},[a("v-card",[a("v-img",{attrs:{height:"300px",src:t.baseUrlOut+"/"+e.cover,"lazy-src":n("f8b2")}},[a("transition",{attrs:{"enter-active-class":"animated slideInUp","leave-active-class":"animated slideOutDown"}},[r?a("div",{staticClass:"d-flex bangumi-intr",staticStyle:{height:"100%"}},[t._v(t._s(e.evaluate))]):t._e()])],1),a("v-card-title",{staticClass:"text-center bangumi-title",attrs:{title:e.title}},[t._v(t._s(e.title))]),a("v-rating",{attrs:{readonly:"",length:5,"background-color":"orange lighten-3",color:"orange"},model:{value:e.rating.stars,callback:function(n){t.$set(e.rating,"stars",n)},expression:"bangumi.rating.stars"}}),a("v-card-text",[t._v("评分:"+t._s(e.rating.score))]),a("v-card-text",[t._v(t._s(e.new_ep.index_show)+" | "+t._s(e.progress))])],1)],1)]}}],null,!0)})],1)})),1),a("v-btn",{staticClass:"my-4",attrs:{text:"",color:"blue darken-3"},on:{click:t.loadMoreBangumi}},[t._v("加载更多...")])],1)],1)]},proxy:!0}])})},i=[],r=(n("d81d"),n("b680"),n("ac1f"),n("5319"),n("2909")),s=n("1bf7"),o=n("bc3e"),l=n("1bab"),c={name:"Bangumi",components:{BaseLayout:s["a"]},created:function(){var t=this;Object(o["a"])(this.page,15).then((function(e){var n;console.log(e.data),(n=t.bangumiList).push.apply(n,Object(r["a"])(e.data.list)),console.log(t.bangumiList),t.total=e.data.total}))},data:function(){return{page:1,bangumiList:[],total:0,baseUrlOut:l["a"]}},computed:{bangumiListFromBackEnd:function(){return this.bangumiList.map((function(t){return t.cover=t.cover.replace("http://",""),void 0!==t.rating?t.rating.stars=1*(t.rating.score/2).toFixed(0):t.rating={score:0},t}))}},methods:{loadMoreBangumi:function(){var t=this;Object(o["a"])(++this.page,15).then((function(e){var n;(n=t.bangumiList).push.apply(n,Object(r["a"])(e.data.list))}))}}},u=c,d=(n("629d"),n("2877")),h=n("6544"),v=n.n(h),f=n("8336"),g=n("b0af"),p=n("99d9"),m=n("62ad"),b=n("ce87"),y=n("adda"),x=(n("a9e3"),n("c96a"),n("696f"),n("9d26")),_=n("a9ad"),k=n("16b7"),I=n("af2b"),C=n("5311"),H=n("7560"),O=n("80d2"),j=n("58df"),V=Object(j["a"])(_["a"],k["a"],C["a"],I["a"],H["a"]).extend({name:"v-rating",props:{backgroundColor:{type:String,default:"accent"},color:{type:String,default:"primary"},clearable:Boolean,dense:Boolean,emptyIcon:{type:String,default:"$ratingEmpty"},fullIcon:{type:String,default:"$ratingFull"},halfIcon:{type:String,default:"$ratingHalf"},halfIncrements:Boolean,hover:Boolean,length:{type:[Number,String],default:5},readonly:Boolean,size:[Number,String],value:{type:Number,default:0}},data:function(){return{hoverIndex:-1,internalValue:this.value}},computed:{directives:function(){return this.readonly||!this.ripple?[]:[{name:"ripple",value:{circle:!0}}]},iconProps:function(){var t=this.$props,e=t.dark,n=t.large,a=t.light,i=t.medium,r=t.small,s=t.size,o=t.xLarge,l=t.xSmall;return{dark:e,large:n,light:a,medium:i,size:s,small:r,xLarge:o,xSmall:l}},isHovering:function(){return this.hover&&this.hoverIndex>=0}},watch:{internalValue:function(t){t!==this.value&&this.$emit("input",t)},value:function(t){this.internalValue=t}},methods:{createClickFn:function(t){var e=this;return function(n){if(!e.readonly){var a=e.genHoverIndex(n,t);e.clearable&&e.internalValue===a?e.internalValue=0:e.internalValue=a}}},createProps:function(t){var e={index:t,value:this.internalValue,click:this.createClickFn(t),isFilled:Math.floor(this.internalValue)>t,isHovered:Math.floor(this.hoverIndex)>t};return this.halfIncrements&&(e.isHalfHovered=!e.isHovered&&(this.hoverIndex-t)%1>0,e.isHalfFilled=!e.isFilled&&(this.internalValue-t)%1>0),e},genHoverIndex:function(t,e){var n=this.isHalfEvent(t);return this.halfIncrements&&this.$vuetify.rtl&&(n=!n),e+(n?.5:1)},getIconName:function(t){var e=this.isHovering?t.isHovered:t.isFilled,n=this.isHovering?t.isHalfHovered:t.isHalfFilled;return e?this.fullIcon:n?this.halfIcon:this.emptyIcon},getColor:function(t){if(this.isHovering){if(t.isHovered||t.isHalfHovered)return this.color}else if(t.isFilled||t.isHalfFilled)return this.color;return this.backgroundColor},isHalfEvent:function(t){if(this.halfIncrements){var e=t.target&&t.target.getBoundingClientRect();if(e&&t.pageX-e.left<e.width/2)return!0}return!1},onMouseEnter:function(t,e){var n=this;this.runDelay("open",(function(){n.hoverIndex=n.genHoverIndex(t,e)}))},onMouseLeave:function(){var t=this;this.runDelay("close",(function(){return t.hoverIndex=-1}))},genItem:function(t){var e=this,n=this.createProps(t);if(this.$scopedSlots.item)return this.$scopedSlots.item(n);var a={click:n.click};return this.hover&&(a.mouseenter=function(n){return e.onMouseEnter(n,t)},a.mouseleave=this.onMouseLeave,this.halfIncrements&&(a.mousemove=function(n){return e.onMouseEnter(n,t)})),this.$createElement(x["a"],this.setTextColor(this.getColor(n),{attrs:{tabindex:-1},directives:this.directives,props:this.iconProps,on:a}),[this.getIconName(n)])}},render:function(t){var e=this,n=Object(O["g"])(Number(this.length)).map((function(t){return e.genItem(t)}));return t("div",{staticClass:"v-rating",class:{"v-rating--readonly":this.readonly,"v-rating--dense":this.dense}},n)}}),B=n("0fd9"),S=Object(d["a"])(u,a,i,!1,null,"f1f7416c",null);e["default"]=S.exports;v()(S,{VBtn:f["a"],VCard:g["a"],VCardText:p["c"],VCardTitle:p["d"],VCol:m["a"],VHover:b["a"],VImg:y["a"],VRating:V,VRow:B["a"]})},"1bf7":function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("HomeNav",{staticClass:"home-nav"}),t._t("layout"),n("v-img",{staticClass:"background",attrs:{width:"100vw",height:"100vh",src:"https://cdn.kagurakana.xyz/DpumTcUX4AEvMfp.jpg"}})],2)},i=[],r=n("6621"),s={name:"BaseLayout",components:{HomeNav:r["a"]}},o=s,l=(n("c674"),n("2877")),c=n("6544"),u=n.n(c),d=n("adda"),h=Object(l["a"])(o,a,i,!1,null,"4d71e78e",null);e["a"]=h.exports;u()(h,{VImg:d["a"]})},"3c3c":function(t,e,n){},"4b2c":function(t,e,n){},5311:function(t,e,n){"use strict";var a=n("5607"),i=n("2b0e");e["a"]=i["a"].extend({name:"rippleable",directives:{ripple:a["a"]},props:{ripple:{type:[Boolean,Object],default:!0}},methods:{genRipple:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return this.ripple?(t.staticClass="v-input--selection-controls__ripple",t.directives=t.directives||[],t.directives.push({name:"ripple",value:{center:!0}}),t.on=Object.assign({click:this.onChange},this.$listeners),this.$createElement("div",t)):null},onChange:function(){}}})},"629d":function(t,e,n){"use strict";var a=n("3c3c"),i=n.n(a);i.a},"696f":function(t,e,n){},"99d9":function(t,e,n){"use strict";n.d(e,"a",(function(){return r})),n.d(e,"b",(function(){return s})),n.d(e,"c",(function(){return o})),n.d(e,"d",(function(){return l}));var a=n("b0af"),i=n("80d2"),r=Object(i["h"])("v-card__actions"),s=Object(i["h"])("v-card__subtitle"),o=Object(i["h"])("v-card__text"),l=Object(i["h"])("v-card__title");a["a"]},bc3e:function(t,e,n){"use strict";n.d(e,"a",(function(){return i})),n.d(e,"b",(function(){return r}));var a=n("1bab");function i(t,e){return Object(a["b"])({withCredentials:!0,method:"get",url:"/bangumi",params:{pn:t,sn:e,type:1,follow_status:0,vmid:14076737}})}function r(t){return Object(a["b"])({method:"get",url:"/qqinfo",params:{uins:t,g_tk:"1518561325"}})}},c674:function(t,e,n){"use strict";var a=n("4b2c"),i=n.n(a);i.a},ce87:function(t,e,n){"use strict";var a=n("16b7"),i=n("f2e7"),r=n("58df"),s=n("d9bd");e["a"]=Object(r["a"])(a["a"],i["a"]).extend({name:"v-hover",props:{disabled:{type:Boolean,default:!1},value:{type:Boolean,default:void 0}},methods:{onMouseEnter:function(){this.runDelay("open")},onMouseLeave:function(){this.runDelay("close")}},render:function(){return this.$scopedSlots.default||void 0!==this.value?(this.$scopedSlots.default&&(t=this.$scopedSlots.default({hover:this.isActive})),Array.isArray(t)&&1===t.length&&(t=t[0]),t&&!Array.isArray(t)&&t.tag?(this.disabled||(t.data=t.data||{},this._g(t.data,{mouseenter:this.onMouseEnter,mouseleave:this.onMouseLeave})),t):(Object(s["c"])("v-hover should only contain a single element",this),t)):(Object(s["c"])("v-hover is missing a default scopedSlot or bound value",this),null);var t}})},f8b2:function(t,e,n){t.exports=n.p+"img/loading.d7bc21b0.gif"}}]);