(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5ee23693"],{1844:function(t,e,a){},"1bf7":function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("HomeNav",{staticClass:"home-nav"}),t._t("layout"),a("v-img",{staticClass:"background",attrs:{width:"100vw",height:"100vh",src:"https://cdn.kagurakana.xyz/DpumTcUX4AEvMfp.jpg"}})],2)},s=[],n=a("6621"),r={name:"BaseLayout",components:{HomeNav:n["a"]}},o=r,c=(a("c674"),a("2877")),l=a("6544"),u=a.n(l),d=a("adda"),h=Object(c["a"])(o,i,s,!1,null,"4d71e78e",null);e["a"]=h.exports;u()(h,{VImg:d["a"]})},"22f1":function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("BaseLayout",{scopedSlots:t._u([{key:"layout",fn:function(){return[a("Content",{staticClass:"content",scopedSlots:t._u([{key:"mid",fn:function(){return[a("BlogList",{attrs:{blogList:t.blogListData}})]},proxy:!0}])})]},proxy:!0}])})},s=[],n=(a("ac1f"),a("1276"),a("5530")),r=a("1bf7"),o=a("230a"),c=a("b949"),l=a("2f62"),u=a("b075"),d={name:"List",mixins:[u["a"]],created:function(){var t=this;this.getUrlTag(),this.getListData(this.tag).then((function(e){t.blogListData=t.listData})),this.$nextTick((function(){window.scrollTo({top:0,behavior:"smooth"})}))},components:{Content:o["a"],BlogList:c["a"],BaseLayout:r["a"]},data:function(){return{blogListData:[]}},computed:Object(n["a"])({},Object(l["b"])(["search"])),methods:{getUrlTag:function(){var t=this.$route.path.split("/"),e=t[t.length-1];this.tag=e}},beforeRouteUpdate:function(t,e,a){var i=this;a(),window.scrollTo({top:0,behavior:"smooth"}),this.getUrlTag(),document.title="神楽花菜OFFICIAL|"+this.tag,this.getListData(this.tag).then((function(t){i.blogListData=i.listData}))}},h=d,v=(a("fc1b"),a("2877")),f=Object(v["a"])(h,i,s,!1,null,"73056d4c",null);e["default"]=f.exports},"230a":function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"content"},[a("transition",{attrs:{appear:"","enter-active-class":"animated fadeInLeft ","leave-active-class":"animated fadeOutLeft "}},[a("div",{directives:[{name:"show",rawName:"v-show",value:!t.isMobile,expression:"!isMobile"}],staticClass:"left"},[t._t("left")],2)]),a("v-col",{staticClass:"mid",attrs:{cols:"12",md:"6"}},[t._t("mid")],2),a("transition",{attrs:{appear:"","enter-active-class":"animated fadeInRight ","leave-active-class":"animated fadeOutRight "}},[a("div",{directives:[{name:"show",rawName:"v-show",value:!t.isMobile,expression:"!isMobile"}],staticClass:"right"},[t._t("right")],2)])],1)},s=[],n=a("5530"),r=a("2f62"),o={name:"Content",components:{},computed:Object(n["a"])({},Object(r["b"])(["isMobile"]))},c=o,l=(a("a502"),a("2877")),u=a("6544"),d=a.n(u),h=a("62ad"),v=Object(l["a"])(c,i,s,!1,null,"3cddf6c6",null);e["a"]=v.exports;d()(v,{VCol:h["a"]})},"4b2c":function(t,e,a){},6611:function(t,e,a){},7473:function(t,e,a){"use strict";var i=a("9598"),s=a.n(i);s.a},"8ce9":function(t,e,a){},9598:function(t,e,a){},a502:function(t,e,a){"use strict";var i=a("6611"),s=a.n(i);s.a},b075:function(t,e,a){"use strict";var i=a("e916");e["a"]={data:function(){return{tag:"",listData:[]}},methods:{getListData:function(t){var e=this;return Object(i["b"])(t).then((function(t){e.listData=t.data}))}}}},b687:function(t,e,a){"use strict";a("a9e3");var i=a("f2e7"),s=a("90a2"),n=a("58df"),r=a("80d2");e["a"]=Object(n["a"])(i["a"]).extend({name:"VLazy",directives:{intersect:s["a"]},props:{minHeight:[Number,String],options:{type:Object,default:function(){return{root:void 0,rootMargin:void 0,threshold:void 0}}},tag:{type:String,default:"div"},transition:{type:String,default:"fade-transition"}},computed:{styles:function(){return{minHeight:parseInt(this.minHeight)?Object(r["f"])(this.minHeight):this.minHeight}}},methods:{genContent:function(){var t=Object(r["l"])(this);if(!this.transition)return t;var e=[];return this.isActive&&e.push(t),this.$createElement("transition",{props:{name:this.transition}},e)},onObserve:function(t,e,a){this.isActive||(this.isActive=a)}},render:function(t){return t(this.tag,{staticClass:"v-lazy",attrs:this.$attrs,directives:[{name:"intersect",value:{handler:this.onObserve,options:this.options}}],on:this.$listeners,style:this.styles},[this.genContent()])}})},b949:function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-container",{staticClass:"mx-auto",attrs:{"max-width":"50%"}},[i("v-row",t._l(t.blogList,(function(e,s){return i("v-col",{key:s,attrs:{sm:"12",cols:"12"}},[i("v-hover",{attrs:{"close-delay":"200","open-delay":"100"},scopedSlots:t._u([{key:"default",fn:function(s){var n=s.hover;return[i("v-lazy",{attrs:{options:{threshold:.25},"min-height":"200"}},[i("transition",{attrs:{appear:"","enter-active-class":"animated zoomIn"}},[i("v-card",{staticClass:"pa-2 blog-list-item",class:{"on-hover":n},attrs:{color:"rgba(255,255,255,0.85)",elevation:n?12:2,"min-height":"100%"},on:{click:function(a){return t.pushRouter(e.id)}}},[i("v-row",[i("v-col",{attrs:{cols:"12",sm:"3"}},[i("v-img",{attrs:{src:e.headPic,height:t.isMobile?"256px":"100%","max-width":(t.isMobile,"100%"),"lazy-src":a("f8b2")},scopedSlots:t._u([{key:"placeholder",fn:function(){return[i("v-row",{staticClass:"fill-height ma-0",attrs:{align:"center",justify:"center","align-content":"center"}},[i("v-progress-circular",{attrs:{indeterminate:"",color:"grey lighten-5"}})],1)]},proxy:!0}],null,!0)})],1),i("v-col",{attrs:{cols:"12",sm:"9"}},[i("v-card-title",{staticClass:"title",attrs:{tag:"div","text-truncate":""}},[t._v(t._s(e.title))]),i("v-card-subtitle",[i("div",[t._v(t._s(e.desc))]),i("v-divider",{staticClass:"my-3"}),t._l(e.tags,(function(e,a){return i("v-chip",{key:a,staticClass:"mx-1 my-1",on:{click:function(a){return a.stopPropagation(),t.pushRouterTag(e)}}},[t._v(t._s(e))])}))],2)],1)],1)],1)],1)],1)]}}],null,!0)})],1)})),1),i("v-snackbar",{attrs:{color:"blue",timeout:t.timeout,top:t.isMobile},model:{value:t.routerErrTip,callback:function(e){t.routerErrTip=e},expression:"routerErrTip"}},[t._v(" 现在已经是"+t._s(t.nowRoute)+"页了！！！ ("+t._s(t.second)+") "),i("v-btn",{attrs:{color:"gray",text:""},on:{click:function(e){t.routerErrTip=!1}}},[i("v-icon",[t._v("mdi-close")])],1)],1)],1)},s=[],n=a("5530"),r=(a("2ef0"),a("2f62")),o=a("7ca0"),c={name:"BlogList",mixins:[o["a"]],props:{blogList:{type:Array}},computed:Object(n["a"])({},Object(r["b"])(["isMobile"])),data:function(){return{isActive:!1}},methods:{pushRouter:function(t){this.$router.push("/detail/"+t)},pushRouterTag:function(t){var e=this;this.$router.push("/list/"+t).catch((function(a){e.debouncedShowErrTip(t)}))}}},l=c,u=(a("7473"),a("2877")),d=a("6544"),h=a.n(d),v=a("8336"),f=a("b0af"),p=a("99d9"),m=a("cc20"),b=a("62ad"),g=a("a523"),y=a("ce7e"),C=a("ce87"),_=a("132d"),w=a("adda"),x=a("b687"),L=a("490a"),O=a("0fd9"),j=a("2db4"),k=Object(u["a"])(l,i,s,!1,null,"b9e0ec7c",null);e["a"]=k.exports;h()(k,{VBtn:v["a"],VCard:f["a"],VCardSubtitle:p["b"],VCardTitle:p["d"],VChip:m["a"],VCol:b["a"],VContainer:g["a"],VDivider:y["a"],VHover:C["a"],VIcon:_["a"],VImg:w["a"],VLazy:x["a"],VProgressCircular:L["a"],VRow:O["a"],VSnackbar:j["a"]})},c674:function(t,e,a){"use strict";var i=a("4b2c"),s=a.n(i);s.a},ce7e:function(t,e,a){"use strict";var i=a("5530"),s=(a("8ce9"),a("7560"));e["a"]=s["a"].extend({name:"v-divider",props:{inset:Boolean,vertical:Boolean},render:function(t){var e;return this.$attrs.role&&"separator"!==this.$attrs.role||(e=this.vertical?"vertical":"horizontal"),t("hr",{class:Object(i["a"])({"v-divider":!0,"v-divider--inset":this.inset,"v-divider--vertical":this.vertical},this.themeClasses),attrs:Object(i["a"])({role:"separator","aria-orientation":e},this.$attrs),on:this.$listeners})}})},fc1b:function(t,e,a){"use strict";var i=a("1844"),s=a.n(i);s.a}}]);