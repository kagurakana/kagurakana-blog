(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1cbc1c20"],{"0250":function(t,e,i){"use strict";i.d(e,"a",(function(){return n})),i.d(e,"c",(function(){return a})),i.d(e,"b",(function(){return r}));var s=i("1bab");function n(t,e,i,n,a,r,o,c,l,u,d){return Object(s["d"])({url:"/comment/new",method:"post",data:{blogId:t,username:e,email:i,resaveEmail:n,URL:a,comment:r,replyId:o,replyCommentId:c,replyUsername:l,isRegisted:u,commentAvatar:d}})}function a(t){return Object(s["d"])({url:"/comment/getlist",method:"get",params:{id:t}})}function r(t,e){return Object(s["d"])({method:"post",url:"/comment/controlComment",data:{passlist:t,deleteList:e}})}},"0331":function(t,e,i){},"05ec":function(t,e,i){},"126d":function(t,e,i){"use strict";var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",t._l(t.activeCommentComment,(function(e,s){return i("v-col",{key:s,staticClass:"comment-item"},[i("v-lazy",{attrs:{options:{threshold:.1},"min-height":"120",transition:"scale-transition"}},[i("v-row",{staticClass:"pa-0 my-3 mx-2 align-center justfy-center"},[i("v-col",{staticClass:"d-flex pa-0 ma-0",attrs:{cols:"12"}},[i("div",{staticClass:"avatar-group-l"},[i("img",{staticClass:"avatar-border",attrs:{src:t.avatarBorders[0],alt:""}}),i("v-img",{staticClass:"avatar",attrs:{width:"60px","max-width":"60px",height:"60px",src:t.avatarSrc(e)}}),e.isAdmin?i("div",{staticClass:"admin-spark-s",attrs:{title:"博主~"}}):t._e()],1),i("div",{staticClass:"comment-detail",attrs:{id:"comment-"+e.id}},[i("a",{attrs:{href:""==e.url?null:e.url,target:"_blank"}},[i("span",{staticClass:"username",class:{"link-style":""!==e.url}},[t._v(t._s(e.username))])]),i("div",{staticClass:"date"},[t._v(t._s(t.fommatTime(e.createTime)))]),null!=e.blogId?i("router-link",{attrs:{to:"/detail/"+e.blogId}},[i("div",{staticClass:"blogID-text"},[t._v("回复的博客ID:"+t._s(e.blogId))])]):t._e(),i("article",{staticClass:"comment-detail",domProps:{innerHTML:t._s(e.comment)}}),i("v-btn",{staticClass:"my-3",attrs:{text:"",small:"",color:"light-blue darken-3"},on:{click:function(i){return t.setReply(e.id,e.id,e.username)}}},[t._v("回复")])],1)]),t._l(t.getReplys(e),(function(s,n){return i("v-col",{key:n,staticClass:"justify-end d-flex pa-0 ma-0",attrs:{cols:"12",id:"comment-"+s.id}},[i("div",{staticClass:"avatar-group-s"},[i("v-img",{staticClass:"avatar mt-1",attrs:{width:"40px","max-width":"40px",height:"40px",src:t.avatarSrc(s)}}),s.isAdmin?i("div",{staticClass:"admin-spark-s",attrs:{title:"博主~"}}):t._e()],1),i("v-col",{staticClass:"pl-2 ma-0",attrs:{cols:t.isAdmin?10:11}},[i("div",[i("a",{attrs:{href:""==s.url?null:s.url,target:"_blank"}},[i("span",{staticClass:"username",class:{"link-style":""!==s.url}},[t._v(t._s(s.username))])]),i("div",{staticClass:"date"},[t._v(t._s(t.fommatTime(s.createTime)))]),i("div",{staticClass:"reply-span",on:{click:function(e){return t.goToTarget(s.replyCommentId)}}},[t._v(" @"+t._s(s.replyUsername)+": ")]),i("article",{staticClass:"comment-detail",domProps:{innerHTML:t._s(s.comment)}}),i("v-btn",{staticClass:"my-3",attrs:{text:"",small:"",color:"light-blue darken-3"},on:{click:function(i){return t.setReply(e.id,s.id,s.username)}}},[t._v("回复")])],1)]),t.isAdmin?i("v-col",{attrs:{cols:"2"}},[i("div",[t._v("blogTitle:"+t._s(s.title))]),i("router-link",{attrs:{to:"/detail/"+e.blogId}},[i("div",[t._v("blogId:"+t._s(s.blogId))])]),i("div",[t._v("isShow:"+t._s(s.isShow))]),i("v-btn",{staticClass:"mx-3",attrs:{color:"success"},on:{"~click":function(e){return t.$emit("addToList",s)}}},[t._v("通过")]),i("v-btn",{staticClass:"mx-3",attrs:{color:"error"},on:{"~click":function(e){return t.$emit("deleteComment",s)}}},[t._v("删除")])],1):t._e()],1)})),i("v-col",{directives:[{name:"show",rawName:"v-show",value:1==t.replyShowPosition[e.id],expression:"replyShowPosition[item.id] == true"}],staticClass:"mx-auto pa-0 my-0",attrs:{id:"comment-input-"+e.id,cols:"12"}},[i("v-col",{staticClass:"mx-auto pa-0 my-0",attrs:{cols:"12"}},[i("Comment",{attrs:{blogId:e.blogId,rows:2,replyPlaceholder:"回复 "+t.replyUsername,replyId:e.id,replyUsername:t.replyUsername,replyCommentId:t.replyCommentId}})],1)],1),t.isAdmin?i("v-col",[i("div",[t._v("blogTitle:"+t._s(e.title))]),i("router-link",{attrs:{to:"/detail/"+e.blogId}},[i("div",[t._v("blogId:"+t._s(e.blogId))])]),i("div",[t._v("isShow:"+t._s(e.isShow))]),i("v-btn",{staticClass:"mx-3",attrs:{color:"success"},on:{"~click":function(i){return t.$emit("addToList",e)}}},[t._v("通过")]),i("v-btn",{staticClass:"mx-3",attrs:{color:"error"},on:{"~click":function(i){return t.$emit("deleteComment",e)}}},[t._v("删除")])],1):t._e()],2)],1)],1)})),1)},n=[],a=(i("e3b5"),i("1e38")),r=i.n(a),o=i("0250"),c=i("c32d"),l=i.n(c),u=i("fc98"),d=i("8ea3"),m=i("7c98"),h=i.n(m),v={name:"CommentList",mixins:[d["a"]],components:{Comment:u["a"]},props:{blogId:"",isAdmin:!1},created:function(){var t=this;Object(o["c"])(this.blogId).then((function(e){t.commentLists=e.data})),this.$bus.$on("commentSuccess",(function(){Object(o["c"])(t.blogId).then((function(e){t.commentLists=e.data}))}))},data:function(){return{commentLists:[],replyShowPosition:{},replyUsername:"",replyCommentId:"",avatarBorders:["https://cdn.kagurakana.xyz/6c7f2ccb92627b11101dfbb616524845cac8f216.webp"]}},computed:{activeComment:function(){return this.isAdmin?this.compiledCommentMarkdownList:this.compiledCommentMarkdownList.filter((function(t){return 1===t.isShow}))},activeCommentComment:function(){return this.activeComment.filter((function(t){return""==t.replyId}))}},methods:{avatarSrc:function(t){return null==t.commentAvatar?r.a.url(t.email,{s:"400",r:"pg",d:"mm"}):"default"===t.avatar?i("ee87"):t.commentAvatar},fommatTime:function(t){return l()(t).format("YYYY-MM-DD HH:mm:ss")},goToTarget:function(t){this.$vuetify.goTo("#comment-"+t,{duration:250,offset:80})},setReply:function(t,e,i){var s=this;this.replyShowPosition={},this.replyUsername=i,this.replyCommentId=e,this.replyShowPosition[t]=!0,this.$nextTick((function(){s.$vuetify.goTo("#comment-input-"+t,{duration:1e3,offset:80})}))},getReplys:function(t){return this.isAdmin?this.commentLists.filter((function(e){return e.replyId===t.id})).reverse():h.a.sortBy(this.commentLists.filter((function(e){return e.replyId===t.id&&1==e.isShow})),["createTime"])}}},p=v,f=(i("d9aa"),i("5d22")),g=i("7aad"),b=i.n(g),y=i("9b1f"),w=i("1cfd"),C=i("dc88"),S=i("6844"),x=i("ee38"),_=Object(f["a"])(p,s,n,!1,null,"7d4ae4da",null);e["a"]=_.exports;b()(_,{VBtn:y["a"],VCol:w["a"],VImg:C["a"],VLazy:S["a"],VRow:x["a"]})},"1cfd":function(t,e,i){"use strict";i("e914");var s=i("a593"),n=i("978c"),a=i("eb21");const r=["sm","md","lg","xl"],o=(()=>r.reduce((t,e)=>(t[e]={type:[Boolean,String,Number],default:!1},t),{}))(),c=(()=>r.reduce((t,e)=>(t["offset"+Object(a["v"])(e)]={type:[String,Number],default:null},t),{}))(),l=(()=>r.reduce((t,e)=>(t["order"+Object(a["v"])(e)]={type:[String,Number],default:null},t),{}))(),u={col:Object.keys(o),offset:Object.keys(c),order:Object.keys(l)};function d(t,e,i){let s=t;if(null!=i&&!1!==i){if(e){const i=e.replace(t,"");s+="-"+i}return"col"!==t||""!==i&&!0!==i?(s+="-"+i,s.toLowerCase()):s.toLowerCase()}}const m=new Map;e["a"]=s["a"].extend({name:"v-col",functional:!0,props:{cols:{type:[Boolean,String,Number],default:!1},...o,offset:{type:[String,Number],default:null},...c,order:{type:[String,Number],default:null},...l,alignSelf:{type:String,default:null,validator:t=>["auto","start","end","center","baseline","stretch"].includes(t)},tag:{type:String,default:"div"}},render(t,{props:e,data:i,children:s,parent:a}){let r="";for(const n in e)r+=String(e[n]);let o=m.get(r);if(!o){let t;for(t in o=[],u)u[t].forEach(i=>{const s=e[i],n=d(t,i,s);n&&o.push(n)});const i=o.some(t=>t.startsWith("col-"));o.push({col:!i||!e.cols,["col-"+e.cols]:e.cols,["offset-"+e.offset]:e.offset,["order-"+e.order]:e.order,["align-self-"+e.alignSelf]:e.alignSelf}),m.set(r,o)}return t(e.tag,Object(n["a"])(i,{class:o}),s)}})},"1e38":function(t,e,i){t.exports=i("631e")},"2bb8":function(t,e,i){"use strict";var s=function(t){switch(typeof t){case"string":return t;case"boolean":return t?"true":"false";case"number":return isFinite(t)?t:"";default:return""}};t.exports=function(t,e,i,o){return e=e||"&",i=i||"=",null===t&&(t=void 0),"object"===typeof t?a(r(t),(function(r){var o=encodeURIComponent(s(r))+i;return n(t[r])?a(t[r],(function(t){return o+encodeURIComponent(s(t))})).join(e):o+encodeURIComponent(s(t[r]))})).join(e):o?encodeURIComponent(s(o))+i+encodeURIComponent(s(t)):""};var n=Array.isArray||function(t){return"[object Array]"===Object.prototype.toString.call(t)};function a(t,e){if(t.map)return t.map(e);for(var i=[],s=0;s<t.length;s++)i.push(e(t[s],s));return i}var r=Object.keys||function(t){var e=[];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&e.push(i);return e}},"36df":function(t,e,i){"use strict";i.r(e);var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("h1",{staticClass:"mx-3"},[t._v(t._s(t.text))]),t.admin?i("div",[i("CommentList",{attrs:{blogID:"",isAdmin:!0},on:{deleteComment:t.deleteComment,addToList:t.addList}}),i("div",[t._l(t.isShowList,(function(e,s){return i("v-col",{key:s},[t._v(t._s(e.username)+"-"+t._s(e.comment))])})),t._l(t.deleteList,(function(e,s){return i("v-col",{key:s+"1"},[t._v(t._s(e.username)+"-"+t._s(e.comment))])}))],2),i("div",[i("v-btn",{on:{click:t.submit}},[t._v("提交")])],1)],1):t._e()])},n=[],a=i("8d85"),r=i("0250"),o=i("126d"),c={name:"CommentVerify",components:{CommentList:o["a"]},created:function(){var t=this;Object(a["b"])().then((function(e){!0===e.data.isAdmin?(t.text="审查和删除评论",t.admin=!0):t.text="没有权限✖"}))},data:function(){return{text:"验证权限中...",admin:!1,isShowList:[],deleteList:[]}},methods:{deleteComment:function(t){this.deleteList.push(t)},addList:function(t){this.isShowList.push(t)},submit:function(){Object(r["b"])(this.isShowList,this.deleteList).then((function(t){}))}}},l=c,u=i("5d22"),d=i("7aad"),m=i.n(d),h=i("9b1f"),v=i("1cfd"),p=Object(u["a"])(l,s,n,!1,null,"72cc3686",null);e["default"]=p.exports;m()(p,{VBtn:h["a"],VCol:v["a"]})},"50a6":function(t,e,i){"use strict";i("d20e");var s=i("6f73"),n=i("9e7a"),a=i("595b"),r=i("b767"),o=i("c3c4"),c=i("07ca"),l=i("eb21"),u=i("3251");e["a"]=Object(c["a"])(s["a"],n["a"],r["a"],Object(o["b"])(["absolute","bottom","left","right","top"])).extend({name:"v-snackbar",props:{app:Boolean,centered:Boolean,contentClass:{type:String,default:""},multiLine:Boolean,text:Boolean,timeout:{type:[Number,String],default:5e3},transition:{type:[Boolean,String],default:"v-snack-transition",validator:t=>"string"===typeof t||!1===t},vertical:Boolean},data:()=>({activeTimeout:-1}),computed:{classes(){return{"v-snack--absolute":this.absolute,"v-snack--active":this.isActive,"v-snack--bottom":this.bottom||!this.top,"v-snack--centered":this.centered,"v-snack--has-background":this.hasBackground,"v-snack--left":this.left,"v-snack--multi-line":this.multiLine&&!this.vertical,"v-snack--right":this.right,"v-snack--text":this.text,"v-snack--top":this.top,"v-snack--vertical":this.vertical}},hasBackground(){return!this.text&&!this.outlined},isDark(){return this.hasBackground?!this.light:a["a"].options.computed.isDark.call(this)},styles(){if(this.absolute)return{};const{bar:t,bottom:e,footer:i,insetFooter:s,left:n,right:a,top:r}=this.$vuetify.application;return{paddingBottom:Object(l["f"])(e+i+s),paddingLeft:this.app?Object(l["f"])(n):void 0,paddingRight:this.app?Object(l["f"])(a):void 0,paddingTop:Object(l["f"])(t+r)}}},watch:{isActive:"setTimeout",timeout:"setTimeout"},mounted(){this.isActive&&this.setTimeout()},created(){this.$attrs.hasOwnProperty("auto-height")&&Object(u["e"])("auto-height",this),0==this.timeout&&Object(u["d"])('timeout="0"',"-1",this)},methods:{genActions(){return this.$createElement("div",{staticClass:"v-snack__action "},[Object(l["m"])(this,"action",{attrs:{class:"v-snack__btn"}})])},genContent(){return this.$createElement("div",{staticClass:"v-snack__content",class:{[this.contentClass]:!0},attrs:{role:"status","aria-live":"polite"}},[Object(l["m"])(this)])},genWrapper(){const t=this.hasBackground?this.setBackgroundColor:this.setTextColor,e=t(this.color,{staticClass:"v-snack__wrapper",class:s["a"].options.computed.classes.call(this),directives:[{name:"show",value:this.isActive}],on:{mouseenter:()=>window.clearTimeout(this.activeTimeout),mouseleave:this.setTimeout}});return this.$createElement("div",e,[this.genContent(),this.genActions()])},genTransition(){return this.$createElement("transition",{props:{name:this.transition}},[this.genWrapper()])},setTimeout(){window.clearTimeout(this.activeTimeout);const t=Number(this.timeout);this.isActive&&![0,-1].includes(t)&&(this.activeTimeout=window.setTimeout(()=>{this.isActive=!1},t))}},render(t){return t("div",{staticClass:"v-snack",class:this.classes,style:this.styles},[!1!==this.transition?this.genTransition():this.genWrapper()])}})},"5ee4":function(t,e,i){"use strict";e.decode=e.parse=i("a2d3"),e.encode=e.stringify=i("2bb8")},"631e":function(t,e,i){var s=i("bebf"),n=i("5ee4"),a=/^[0-9a-f]{32}$/;function r(t){var e={},i={protocol:1,format:1};for(var s in t)i[s]||(e[s]=t[s]);return e}function o(t,e){if(t)return"boolean"===typeof t.protocol?t.protocol:"http"!==t.protocol&&("https"===t.protocol||void 0)}function c(t){return t="string"===typeof t?t.trim().toLowerCase():"unspecified",t.match(a)?t:s(t)}function l(t){var e=n.stringify(r(t));return e&&"?"+e||""}t.exports={url:function(t,e,i){var s="//www.gravatar.com/avatar/";e&&e.cdn?(s=e.cdn+"/avatar/",delete e.cdn):(e&&e.protocol&&(i=o(e)),"undefined"!==typeof i&&(s=i?"https://s.gravatar.com/avatar/":"http://www.gravatar.com/avatar/"));var n=l(e);return s+c(t)+n},profile_url:function(t,e,i){var s=void 0!=e&&void 0!=e.format?String(e.format):"json";if(e&&e.cdn)n=e.cdn+"/",delete e.cdn;else{e&&e.protocol&&(i=o(e));var n=i?"https://secure.gravatar.com/":"http://www.gravatar.com/"}var a=l(e);return n+c(t)+"."+s+a}}},6844:function(t,e,i){"use strict";var s=i("fb97"),n=i("b767"),a=i("bd86"),r=i("07ca"),o=i("eb21");e["a"]=Object(r["a"])(s["a"],n["a"]).extend({name:"VLazy",directives:{intersect:a["a"]},props:{options:{type:Object,default:()=>({root:void 0,rootMargin:void 0,threshold:void 0})},tag:{type:String,default:"div"},transition:{type:String,default:"fade-transition"}},computed:{styles(){return{...this.measurableStyles}}},methods:{genContent(){const t=this.isActive&&Object(o["m"])(this);return this.transition?this.$createElement("transition",{props:{name:this.transition}},t):t},onObserve(t,e,i){this.isActive||(this.isActive=i)}},render(t){return t(this.tag,{staticClass:"v-lazy",attrs:this.$attrs,directives:[{name:"intersect",value:{handler:this.onObserve,options:this.options}}],on:this.$listeners,style:this.styles},[this.genContent()])}})},"723f":function(t,e,i){},"78ac":function(t,e,i){"use strict";i("723f")},"836a":function(t,e,i){"use strict";var s=i("9194"),n=i("baa9"),a=i("a187"),r=i("4023"),o=i("c11d"),c=i("1a58");s("match",1,(function(t,e,i){return[function(e){var i=r(this),s=void 0==e?void 0:e[t];return void 0!==s?s.call(e,i):new RegExp(e)[t](String(i))},function(t){var s=i(e,t,this);if(s.done)return s.value;var r=n(t),l=String(this);if(!r.global)return c(r,l);var u=r.unicode;r.lastIndex=0;var d,m=[],h=0;while(null!==(d=c(r,l))){var v=String(d[0]);m[h]=v,""===v&&(r.lastIndex=o(l,a(r.lastIndex),u)),h++}return 0===h?null:m}]}))},"89ea":function(t,e,i){},"9e0b":function(t,e,i){},a2d3:function(t,e,i){"use strict";function s(t,e){return Object.prototype.hasOwnProperty.call(t,e)}t.exports=function(t,e,i,a){e=e||"&",i=i||"=";var r={};if("string"!==typeof t||0===t.length)return r;var o=/\+/g;t=t.split(e);var c=1e3;a&&"number"===typeof a.maxKeys&&(c=a.maxKeys);var l=t.length;c>0&&l>c&&(l=c);for(var u=0;u<l;++u){var d,m,h,v,p=t[u].replace(o,"%20"),f=p.indexOf(i);f>=0?(d=p.substr(0,f),m=p.substr(f+1)):(d=p,m=""),h=decodeURIComponent(d),v=decodeURIComponent(m),s(r,h)?n(r[h])?r[h].push(v):r[h]=[r[h],v]:r[h]=v}return r};var n=Array.isArray||function(t){return"[object Array]"===Object.prototype.toString.call(t)}},b1ff:function(t,e,i){"use strict";i.d(e,"a",(function(){return n})),i.d(e,"b",(function(){return a}));var s=i("1bab");function n(t,e){return Object(s["c"])({withCredentials:!0,method:"get",url:"/bangumi",params:{pn:t,sn:e,type:1,follow_status:0,vmid:14076737}})}function a(t){return Object(s["c"])({method:"get",url:"/qqinfo",params:{uins:t,g_tk:"1518561325"}})}},bebf:function(t,e,i){var s;(function(n){"use strict";function a(t,e){var i=(65535&t)+(65535&e),s=(t>>16)+(e>>16)+(i>>16);return s<<16|65535&i}function r(t,e){return t<<e|t>>>32-e}function o(t,e,i,s,n,o){return a(r(a(a(e,t),a(s,o)),n),i)}function c(t,e,i,s,n,a,r){return o(e&i|~e&s,t,e,n,a,r)}function l(t,e,i,s,n,a,r){return o(e&s|i&~s,t,e,n,a,r)}function u(t,e,i,s,n,a,r){return o(e^i^s,t,e,n,a,r)}function d(t,e,i,s,n,a,r){return o(i^(e|~s),t,e,n,a,r)}function m(t,e){var i,s,n,r,o;t[e>>5]|=128<<e%32,t[14+(e+64>>>9<<4)]=e;var m=1732584193,h=-271733879,v=-1732584194,p=271733878;for(i=0;i<t.length;i+=16)s=m,n=h,r=v,o=p,m=c(m,h,v,p,t[i],7,-680876936),p=c(p,m,h,v,t[i+1],12,-389564586),v=c(v,p,m,h,t[i+2],17,606105819),h=c(h,v,p,m,t[i+3],22,-1044525330),m=c(m,h,v,p,t[i+4],7,-176418897),p=c(p,m,h,v,t[i+5],12,1200080426),v=c(v,p,m,h,t[i+6],17,-1473231341),h=c(h,v,p,m,t[i+7],22,-45705983),m=c(m,h,v,p,t[i+8],7,1770035416),p=c(p,m,h,v,t[i+9],12,-1958414417),v=c(v,p,m,h,t[i+10],17,-42063),h=c(h,v,p,m,t[i+11],22,-1990404162),m=c(m,h,v,p,t[i+12],7,1804603682),p=c(p,m,h,v,t[i+13],12,-40341101),v=c(v,p,m,h,t[i+14],17,-1502002290),h=c(h,v,p,m,t[i+15],22,1236535329),m=l(m,h,v,p,t[i+1],5,-165796510),p=l(p,m,h,v,t[i+6],9,-1069501632),v=l(v,p,m,h,t[i+11],14,643717713),h=l(h,v,p,m,t[i],20,-373897302),m=l(m,h,v,p,t[i+5],5,-701558691),p=l(p,m,h,v,t[i+10],9,38016083),v=l(v,p,m,h,t[i+15],14,-660478335),h=l(h,v,p,m,t[i+4],20,-405537848),m=l(m,h,v,p,t[i+9],5,568446438),p=l(p,m,h,v,t[i+14],9,-1019803690),v=l(v,p,m,h,t[i+3],14,-187363961),h=l(h,v,p,m,t[i+8],20,1163531501),m=l(m,h,v,p,t[i+13],5,-1444681467),p=l(p,m,h,v,t[i+2],9,-51403784),v=l(v,p,m,h,t[i+7],14,1735328473),h=l(h,v,p,m,t[i+12],20,-1926607734),m=u(m,h,v,p,t[i+5],4,-378558),p=u(p,m,h,v,t[i+8],11,-2022574463),v=u(v,p,m,h,t[i+11],16,1839030562),h=u(h,v,p,m,t[i+14],23,-35309556),m=u(m,h,v,p,t[i+1],4,-1530992060),p=u(p,m,h,v,t[i+4],11,1272893353),v=u(v,p,m,h,t[i+7],16,-155497632),h=u(h,v,p,m,t[i+10],23,-1094730640),m=u(m,h,v,p,t[i+13],4,681279174),p=u(p,m,h,v,t[i],11,-358537222),v=u(v,p,m,h,t[i+3],16,-722521979),h=u(h,v,p,m,t[i+6],23,76029189),m=u(m,h,v,p,t[i+9],4,-640364487),p=u(p,m,h,v,t[i+12],11,-421815835),v=u(v,p,m,h,t[i+15],16,530742520),h=u(h,v,p,m,t[i+2],23,-995338651),m=d(m,h,v,p,t[i],6,-198630844),p=d(p,m,h,v,t[i+7],10,1126891415),v=d(v,p,m,h,t[i+14],15,-1416354905),h=d(h,v,p,m,t[i+5],21,-57434055),m=d(m,h,v,p,t[i+12],6,1700485571),p=d(p,m,h,v,t[i+3],10,-1894986606),v=d(v,p,m,h,t[i+10],15,-1051523),h=d(h,v,p,m,t[i+1],21,-2054922799),m=d(m,h,v,p,t[i+8],6,1873313359),p=d(p,m,h,v,t[i+15],10,-30611744),v=d(v,p,m,h,t[i+6],15,-1560198380),h=d(h,v,p,m,t[i+13],21,1309151649),m=d(m,h,v,p,t[i+4],6,-145523070),p=d(p,m,h,v,t[i+11],10,-1120210379),v=d(v,p,m,h,t[i+2],15,718787259),h=d(h,v,p,m,t[i+9],21,-343485551),m=a(m,s),h=a(h,n),v=a(v,r),p=a(p,o);return[m,h,v,p]}function h(t){var e,i="",s=32*t.length;for(e=0;e<s;e+=8)i+=String.fromCharCode(t[e>>5]>>>e%32&255);return i}function v(t){var e,i=[];for(i[(t.length>>2)-1]=void 0,e=0;e<i.length;e+=1)i[e]=0;var s=8*t.length;for(e=0;e<s;e+=8)i[e>>5]|=(255&t.charCodeAt(e/8))<<e%32;return i}function p(t){return h(m(v(t),8*t.length))}function f(t,e){var i,s,n=v(t),a=[],r=[];for(a[15]=r[15]=void 0,n.length>16&&(n=m(n,8*t.length)),i=0;i<16;i+=1)a[i]=909522486^n[i],r[i]=1549556828^n[i];return s=m(a.concat(v(e)),512+8*e.length),h(m(r.concat(s),640))}function g(t){var e,i,s="0123456789abcdef",n="";for(i=0;i<t.length;i+=1)e=t.charCodeAt(i),n+=s.charAt(e>>>4&15)+s.charAt(15&e);return n}function b(t){return unescape(encodeURIComponent(t))}function y(t){return p(b(t))}function w(t){return g(y(t))}function C(t,e){return f(b(t),b(e))}function S(t,e){return g(C(t,e))}function x(t,e,i){return e?i?C(e,t):S(e,t):i?y(t):w(t)}s=function(){return x}.call(e,i,e,t),void 0===s||(t.exports=s)})()},c731:function(t,e,i){"use strict";i("05ec")},d20e:function(t,e,i){},d345:function(t,e,i){"use strict";var s=i("07ca"),n=i("cd2d"),a=i("b82e");e["a"]=Object(s["a"])(n["a"],Object(a["b"])("form")).extend({name:"v-form",provide(){return{form:this}},inheritAttrs:!1,props:{disabled:Boolean,lazyValidation:Boolean,readonly:Boolean,value:Boolean},data:()=>({inputs:[],watchers:[],errorBag:{}}),watch:{errorBag:{handler(t){const e=Object.values(t).includes(!0);this.$emit("input",!e)},deep:!0,immediate:!0}},methods:{watchInput(t){const e=t=>t.$watch("hasError",e=>{this.$set(this.errorBag,t._uid,e)},{immediate:!0}),i={_uid:t._uid,valid:()=>{},shouldValidate:()=>{}};return this.lazyValidation?i.shouldValidate=t.$watch("shouldValidate",s=>{s&&(this.errorBag.hasOwnProperty(t._uid)||(i.valid=e(t)))}):i.valid=e(t),i},validate(){return 0===this.inputs.filter(t=>!t.validate(!0)).length},reset(){this.inputs.forEach(t=>t.reset()),this.resetErrorBag()},resetErrorBag(){this.lazyValidation&&setTimeout(()=>{this.errorBag={}},0)},resetValidation(){this.inputs.forEach(t=>t.resetValidation()),this.resetErrorBag()},register(t){this.inputs.push(t),this.watchers.push(this.watchInput(t))},unregister(t){const e=this.inputs.find(e=>e._uid===t._uid);if(!e)return;const i=this.watchers.find(t=>t._uid===e._uid);i&&(i.valid(),i.shouldValidate()),this.watchers=this.watchers.filter(t=>t._uid!==e._uid),this.inputs=this.inputs.filter(t=>t._uid!==e._uid),this.$delete(this.errorBag,e._uid)}},render(t){return t("form",{staticClass:"v-form",attrs:{novalidate:!0,...this.attrs$},on:{submit:t=>this.$emit("submit",t)}},this.$slots.default)}})},d9aa:function(t,e,i){"use strict";i("0331")},dc88:function(t,e,i){"use strict";i("9e0b");var s=i("bd86"),n=(i("89ea"),i("fb97")),a=i("07ca"),r=Object(a["a"])(n["a"]).extend({name:"v-responsive",props:{aspectRatio:[String,Number],contentClass:String},computed:{computedAspectRatio(){return Number(this.aspectRatio)},aspectStyle(){return this.computedAspectRatio?{paddingBottom:1/this.computedAspectRatio*100+"%"}:void 0},__cachedSizer(){return this.aspectStyle?this.$createElement("div",{style:this.aspectStyle,staticClass:"v-responsive__sizer"}):[]}},methods:{genContent(){return this.$createElement("div",{staticClass:"v-responsive__content",class:this.contentClass},this.$slots.default)}},render(t){return t("div",{staticClass:"v-responsive",style:this.measurableStyles,on:this.$listeners},[this.__cachedSizer,this.genContent()])}}),o=r,c=i("595b"),l=i("978c"),u=i("3251");const d="undefined"!==typeof window&&"IntersectionObserver"in window;e["a"]=Object(a["a"])(o,c["a"]).extend({name:"v-img",directives:{intersect:s["a"]},props:{alt:String,contain:Boolean,eager:Boolean,gradient:String,lazySrc:String,options:{type:Object,default:()=>({root:void 0,rootMargin:void 0,threshold:void 0})},position:{type:String,default:"center center"},sizes:String,src:{type:[String,Object],default:""},srcset:String,transition:{type:[Boolean,String],default:"fade-transition"}},data(){return{currentSrc:"",image:null,isLoading:!0,calculatedAspectRatio:void 0,naturalWidth:void 0,hasError:!1}},computed:{computedAspectRatio(){return Number(this.normalisedSrc.aspect||this.calculatedAspectRatio)},normalisedSrc(){return this.src&&"object"===typeof this.src?{src:this.src.src,srcset:this.srcset||this.src.srcset,lazySrc:this.lazySrc||this.src.lazySrc,aspect:Number(this.aspectRatio||this.src.aspect)}:{src:this.src,srcset:this.srcset,lazySrc:this.lazySrc,aspect:Number(this.aspectRatio||0)}},__cachedImage(){if(!(this.normalisedSrc.src||this.normalisedSrc.lazySrc||this.gradient))return[];const t=[],e=this.isLoading?this.normalisedSrc.lazySrc:this.currentSrc;this.gradient&&t.push(`linear-gradient(${this.gradient})`),e&&t.push(`url("${e}")`);const i=this.$createElement("div",{staticClass:"v-image__image",class:{"v-image__image--preload":this.isLoading,"v-image__image--contain":this.contain,"v-image__image--cover":!this.contain},style:{backgroundImage:t.join(", "),backgroundPosition:this.position},key:+this.isLoading});return this.transition?this.$createElement("transition",{attrs:{name:this.transition,mode:"in-out"}},[i]):i}},watch:{src(){this.isLoading?this.loadImage():this.init(void 0,void 0,!0)},"$vuetify.breakpoint.width":"getSrc"},mounted(){this.init()},methods:{init(t,e,i){if(!d||i||this.eager){if(this.normalisedSrc.lazySrc){const t=new Image;t.src=this.normalisedSrc.lazySrc,this.pollForSize(t,null)}this.normalisedSrc.src&&this.loadImage()}},onLoad(){this.getSrc(),this.isLoading=!1,this.$emit("load",this.src),this.image&&(this.normalisedSrc.src.endsWith(".svg")||this.normalisedSrc.src.startsWith("data:image/svg+xml"))&&(this.image.naturalHeight&&this.image.naturalWidth?(this.naturalWidth=this.image.naturalWidth,this.calculatedAspectRatio=this.image.naturalWidth/this.image.naturalHeight):this.calculatedAspectRatio=1)},onError(){this.hasError=!0,this.$emit("error",this.src)},getSrc(){this.image&&(this.currentSrc=this.image.currentSrc||this.image.src)},loadImage(){const t=new Image;this.image=t,t.onload=()=>{t.decode?t.decode().catch(t=>{Object(u["c"])("Failed to decode image, trying to render anyway\n\nsrc: "+this.normalisedSrc.src+(t.message?"\nOriginal error: "+t.message:""),this)}).then(this.onLoad):this.onLoad()},t.onerror=this.onError,this.hasError=!1,t.src=this.normalisedSrc.src,this.sizes&&(t.sizes=this.sizes),this.normalisedSrc.srcset&&(t.srcset=this.normalisedSrc.srcset),this.aspectRatio||this.pollForSize(t),this.getSrc()},pollForSize(t,e=100){const i=()=>{const{naturalHeight:s,naturalWidth:n}=t;s||n?(this.naturalWidth=n,this.calculatedAspectRatio=n/s):t.complete||!this.isLoading||this.hasError||null==e||setTimeout(i,e)};i()},genContent(){const t=o.options.methods.genContent.call(this);return this.naturalWidth&&this._b(t.data,"div",{style:{width:this.naturalWidth+"px"}}),t},__genPlaceholder(){if(this.$slots.placeholder){const t=this.isLoading?[this.$createElement("div",{staticClass:"v-image__placeholder"},this.$slots.placeholder)]:[];return this.transition?this.$createElement("transition",{props:{appear:!0,name:this.transition}},t):t[0]}}},render(t){const e=o.options.render.call(this,t),i=Object(l["a"])(e.data,{staticClass:"v-image",attrs:{"aria-label":this.alt,role:this.alt?"img":void 0},class:this.themeClasses,directives:d?[{name:"intersect",modifiers:{once:!0},value:{handler:this.init,options:this.options}}]:void 0});return e.children=[this.__cachedSizer,this.__cachedImage,this.__genPlaceholder(),this.genContent()],t(e.tag,i,e.children)}})},ee38:function(t,e,i){"use strict";i("e914");var s=i("a593"),n=i("978c"),a=i("eb21");const r=["sm","md","lg","xl"],o=["start","end","center"];function c(t,e){return r.reduce((i,s)=>(i[t+Object(a["v"])(s)]=e(),i),{})}const l=t=>[...o,"baseline","stretch"].includes(t),u=c("align",()=>({type:String,default:null,validator:l})),d=t=>[...o,"space-between","space-around"].includes(t),m=c("justify",()=>({type:String,default:null,validator:d})),h=t=>[...o,"space-between","space-around","stretch"].includes(t),v=c("alignContent",()=>({type:String,default:null,validator:h})),p={align:Object.keys(u),justify:Object.keys(m),alignContent:Object.keys(v)},f={align:"align",justify:"justify",alignContent:"align-content"};function g(t,e,i){let s=f[t];if(null!=i){if(e){const i=e.replace(t,"");s+="-"+i}return s+="-"+i,s.toLowerCase()}}const b=new Map;e["a"]=s["a"].extend({name:"v-row",functional:!0,props:{tag:{type:String,default:"div"},dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:l},...u,justify:{type:String,default:null,validator:d},...m,alignContent:{type:String,default:null,validator:h},...v},render(t,{props:e,data:i,children:s}){let a="";for(const n in e)a+=String(e[n]);let r=b.get(a);if(!r){let t;for(t in r=[],p)p[t].forEach(i=>{const s=e[i],n=g(t,i,s);n&&r.push(n)});r.push({"no-gutters":e.noGutters,"row--dense":e.dense,["align-"+e.align]:e.align,["justify-"+e.justify]:e.justify,["align-content-"+e.alignContent]:e.alignContent}),b.set(a,r)}return t(e.tag,Object(n["a"])(i,{staticClass:"row",class:r}),s)}})},ee87:function(t,e,i){t.exports=i.p+"img/default.7bb9dbaf.png"},fc98:function(t,e,i){"use strict";var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("v-form",{attrs:{"lazy-validation":""},model:{value:t.valid,callback:function(e){t.valid=e},expression:"valid"}},[i("v-row",{staticClass:"px-1 ma-0"},[i("v-img",{staticClass:"pa-2 my-2 mx-auto round",attrs:{src:t.commentAvatar,"max-width":"60px","min-width":"60px","max-height":"60px","min-height":"60px"}}),i("v-row",{staticClass:"mx-1"},[i("v-col",{staticClass:"mx-auto",attrs:{cols:"11",sm:"4"}},[i("v-text-field",{staticClass:"comment-input-name",attrs:{label:"昵称*/QQ号",hint:"输入QQ号会自动获得昵称~",rules:t.usernameRule},on:{blur:t.getQQInfo},model:{value:t.username,callback:function(e){t.username=e},expression:"username"}})],1),i("v-col",{staticClass:"mx-auto",attrs:{cols:"11",sm:"4"}},[i("v-text-field",{staticClass:"comment-input-mail",attrs:{label:"邮箱*",rules:t.emailRule},on:{blur:t.getGravatar},model:{value:t.email,callback:function(e){t.email=e},expression:"email"}})],1),i("v-col",{staticClass:"mx-auto",attrs:{cols:"11",sm:"4"}},[i("v-text-field",{staticClass:"comment-input-url",attrs:{label:"URL",placeholder:"https://"},model:{value:t.URL,callback:function(e){t.URL=e},expression:"URL"}})],1)],1)],1),i("v-col",{attrs:{cols:"12"}},[i("v-textarea",{ref:"comment-text",staticClass:"comment-area",class:"OwO-textarea-"+t.replyCommentId,attrs:{dense:"",rules:t.textRule,counter:"1000",outlined:"",color:"indigo","auto-grow":"",rows:t.rows,placeholder:t.replyPlaceholder,label:"评论",hint:"(´；ω；`)请不要打广告~ 支持markdown哦"},model:{value:t.comment,callback:function(e){t.comment=e},expression:"comment"}}),i("v-row",{staticClass:"px-3",attrs:{justify:"space-between"}},[i("OwO",{attrs:{cursorIndex:t.textAreaCursorIndex},on:{requestCursorIndex:t.getCursorIndex}}),i("v-btn",{attrs:{color:"blue darken-3",text:""},on:{click:function(e){t.isShowPreview=!t.isShowPreview}}},[t._v("预览")])],1),i("v-row",{directives:[{name:"show",rawName:"v-show",value:t.isShowPreview,expression:"isShowPreview"}],staticClass:"px-3"},[i("article",{staticClass:"comment-preview",domProps:{innerHTML:t._s(t.compiledCommentInput)}})]),i("v-row",{staticClass:"px-2 py-0 ma-0",attrs:{align:"center",justify:"space-between"}},[i("v-btn",{staticClass:"comment-submit",attrs:{color:"orange darken-1",disabled:!t.valid,outlined:""},on:{click:t.commitComment}},[i("v-icon",{staticClass:"mx-1"},[t._v("mdi-comment-text-outline")]),t._v("提交评论 ")],1),i("v-checkbox",{attrs:{label:"当收到回复时用邮件提醒我"},model:{value:t.resaveEmail,callback:function(e){t.resaveEmail=e},expression:"resaveEmail"}})],1)],1)],1),i("v-snackbar",{attrs:{color:"blue",timeout:t.timeout,top:t.isMobile},model:{value:t.isShowTip,callback:function(e){t.isShowTip=e},expression:"isShowTip"}},[t._v(" 评论成功啦! "),i("v-btn",{attrs:{color:"gray",text:""},on:{click:function(e){t.showTip=!1}}},[i("v-icon",[t._v("mdi-close")])],1)],1)],1)},n=[],a=i("6abc"),r=(i("16ca"),i("fc13"),i("9b5f"),i("836a"),i("5d08"),i("8d85")),o=i("0250"),c=i("b1ff"),l=i("7736"),u=i("1bab"),d=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"stickers"},[i("v-btn",{staticClass:"sticker-btn",attrs:{outlined:"",small:"",color:"#FB7299"},on:{click:function(e){t.IsShowSticker=!t.IsShowSticker}}},[t._v("😉表情")]),i("div",{directives:[{name:"show",rawName:"v-show",value:t.IsShowSticker,expression:"IsShowSticker"}],staticClass:"owo-container"},[i("div",t._l(t.OwOdata,(function(e,s,n){return i("span",{key:n,staticClass:"catigory",class:{active:t.current===s},on:{click:function(e){return t.changeCatigory(s)}}},[t._v(" "+t._s(e.name)+" ")])})),0),i("div",[i("div",{staticClass:"sticker-wrapper"},["rawText"===t.showDataSet.type?i("div",t._l(t.showDataSet.iconList,(function(e,s){return i("v-btn",{key:"text-"+s,staticClass:"ma-1",attrs:{small:"",title:e.text},domProps:{innerHTML:t._s(e.icon)},on:{click:function(i){return t.tab(e)}}})})),1):"bigImg"===t.showDataSet.type?i("div",[i("div",{staticClass:"hoverImg",style:{left:t.imgPos.left,top:t.imgPos.top}},[i("img",{attrs:{src:t.hoverImgSrc,width:"200px",alt:""}})]),t._l(t.showDataSet.iconList,(function(e,s){return i("v-btn",{key:e+"-"+s,staticClass:"ma-1",attrs:{small:"",width:"80px",height:"80px",title:e.text},on:{click:function(i){return t.tab(e)},mousemove:function(i){return i.stopPropagation(),t.debouncedHoverImg(e,i)},mouseleave:t.clearHoverImg}},[i("v-img",{attrs:{width:"74px",height:"74px",src:e.icon,alt:""}})],1)}))],2):t._e()])])])],1)},m=[],h=(i("62f9"),i("82ae"),i("31b7")),v=i("7c98"),p=i.n(v),f={name:"OwO",props:{text:"",cursorIndex:0},data:function(){var t=this;return{OwOdata:h["a"],current:Object.keys(h["a"])[0],IsShowSticker:!1,hoverImgSrc:"",imgPos:{left:0,top:0},debouncedHoverImg:p.a.throttle((function(e,i){t.showHoverImg(e,i)}),50)}},computed:{showDataSet:function(){return this.OwOdata[this.current]}},created:function(){},methods:{changeCatigory:function(t){this.current=t},tab:function(t){this.IsShowSticker=!1;var e=void 0===t.code?t.icon:t.code;this.$emit("requestCursorIndex",e)},showHoverImg:function(t,e){this.hoverImgSrc=t.icon,this.imgPos.top=e.clientY+10+"px",this.imgPos.left=e.clientX+10+"px"},clearHoverImg:function(){var t=this;setTimeout((function(){t.hoverImgSrc=""}),100)}}},g=f,b=(i("c731"),i("5d22")),y=i("7aad"),w=i.n(y),C=i("9b1f"),S=i("dc88"),x=Object(b["a"])(g,d,m,!1,null,"6000c23e",null),_=x.exports;w()(x,{VBtn:C["a"],VImg:S["a"]});var k=i("1e38"),I=i.n(k),O=i("8ea3"),j={name:"Comment",mixins:[O["a"]],props:{blogId:"",replyId:"",replyCommentId:"",rows:{default:5},replyUsername:"",replyPlaceholder:""},components:{OwO:_},data:function(){return{valid:!1,getEmail:!1,username:"",email:"",resaveEmail:!0,commentAvatar:"https://cdn.kagurakana.xyz/default.png",defaultAvatar:"https://cdn.kagurakana.xyz/default.png",URL:"",baseurlOut:u["a"],getUsername:!1,getQQname:!1,timeout:4e3,commented:!1,isShowTip:!1,isShowPreview:!1,usernameRule:[function(t){return!!t||"username is required"},function(t){return t&&t.length<15||"名字太长啦，要被挤爆啦(╯°口°)╯(┴—┴"},function(t){return/^[a-zA-Z0-9_\u4e00-\u9fa5-]{2,15}$/.test(t)||"长度<2或包含特殊符号"}],emailRule:[function(t){return!!t||"邮箱是必须的哦~"},function(t){return/.+@.+\..+/.test(t)||"无效的邮箱❌"}],textRule:[function(t){return!!t},function(t){return t.length<1e3||"长度不符合✖"}],comment:" ",textAreaCursorIndex:0}},computed:Object(a["a"])({},Object(l["b"])(["isMobile","loginCheckUsername","loginCheckEmail"])),created:function(){var t=this;""===this.loginCheckUsername?Object(r["b"])().then((function(e){-1!==e.errno&&(t.getUsername=!0,t.getEmail=!0,t.username=e.data.username,t.email=e.data.email,t.$store.commit("storeUserData",{username:e.data.username,email:e.data.email}))})):(this.getUsername=!0,this.getEmail=!0,this.username=this.loginCheckUsername,this.email=this.loginCheckEmail)},mounted:function(){},methods:{commitComment:function(){var t=this,e=this.replaceStamp();this.blogId,this.username,this.URL,this.replyId,this.replyCommentId,this.replyUsername,Date.now(),this.getQQname?this.commentAvatar:I.a.url(this.email,{s:"400",r:"pg",d:"mm"});Object(o["a"])(this.blogId,this.username,this.email,this.resaveEmail,this.URL,e,this.replyId,this.replyCommentId,this.replyUsername,this.getEmail,this.commentAvatar).then((function(e){-1!==e.errno&&(t.comment="",t.isShowTip=!0,t.$bus.$emit("commentSuccess"))}))},getQQInfo:function(){var t=this;Object(c["b"])(this.username).then((function(e){-1!==e.errno?(t.username=e.data.nickName,t.commentAvatar="".concat(t.baseurlOut,"/").concat(e.data.avatar),t.getQQname=!0):t.getQQname=!1}))},getGravatar:function(){this.commentAvatar=this.getQQname?this.commentAvatar:I.a.url(this.email,{s:"400",r:"pg",d:"mm"}).replace(/.*com\/avatar\//g,"https://cdn.v2ex.com/gravatar/")},getCursorIndex:function(t){var e=this.$refs["comment-text"].$el.className;e=e.match(/(OwO.*)/)[0];var i=document.querySelector(".".concat(e," textarea")).selectionEnd;this.textAreaCursorIndex=i,this.comment="".concat(this.comment.slice(0,i)).concat(t).concat(this.comment.slice(i))}},watch:{}},L=j,A=(i("78ac"),i("32ca")),$=i("1cfd"),T=i("d345"),R=i("60ed"),E=i("ee38"),B=i("50a6"),z=i("110a"),U=i("e5ea"),P=Object(b["a"])(L,s,n,!1,null,"93d9d042",null);e["a"]=P.exports;w()(P,{VBtn:C["a"],VCheckbox:A["a"],VCol:$["a"],VForm:T["a"],VIcon:R["a"],VImg:S["a"],VRow:E["a"],VSnackbar:B["a"],VTextField:z["a"],VTextarea:U["a"]})}}]);