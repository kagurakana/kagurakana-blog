(function(e){function n(n){for(var c,r,u=n[0],i=n[1],l=n[2],s=0,f=[];s<u.length;s++)r=u[s],Object.prototype.hasOwnProperty.call(a,r)&&a[r]&&f.push(a[r][0]),a[r]=0;for(c in i)Object.prototype.hasOwnProperty.call(i,c)&&(e[c]=i[c]);d&&d(n);while(f.length)f.shift()();return o.push.apply(o,l||[]),t()}function t(){for(var e,n=0;n<o.length;n++){for(var t=o[n],c=!0,r=1;r<t.length;r++){var u=t[r];0!==a[u]&&(c=!1)}c&&(o.splice(n--,1),e=i(i.s=t[0]))}return e}var c={},r={app:0},a={app:0},o=[];function u(e){return i.p+"js/"+({}[e]||e)+"."+{"chunk-73421eb6":"2fdb64f2","chunk-965a053e":"068b911b","chunk-0def7169":"55a2035b","chunk-299242d1":"680b8c80","chunk-383ac8c8":"ae680548","chunk-3473e7c1":"307d739c","chunk-c4027c0e":"7255f5b3","chunk-5d025499":"4e86326c","chunk-273e07cd":"272d622d","chunk-707b6b2a":"b5711c82","chunk-ace92ac4":"3b172c0f","chunk-36728d24":"8ac2aff0","chunk-85a26486":"8a5487cd","chunk-496ff644":"12e35d55","chunk-6a6e7378":"361d9a43","chunk-778c0abb":"c537f8c7","chunk-70140f0d":"f2464772","chunk-76d48d14":"dff934c3"}[e]+".js"}function i(n){if(c[n])return c[n].exports;var t=c[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,i),t.l=!0,t.exports}i.e=function(e){var n=[],t={"chunk-73421eb6":1,"chunk-965a053e":1,"chunk-0def7169":1,"chunk-299242d1":1,"chunk-383ac8c8":1,"chunk-3473e7c1":1,"chunk-c4027c0e":1,"chunk-5d025499":1,"chunk-273e07cd":1,"chunk-707b6b2a":1,"chunk-ace92ac4":1,"chunk-36728d24":1,"chunk-85a26486":1,"chunk-496ff644":1,"chunk-6a6e7378":1,"chunk-778c0abb":1,"chunk-70140f0d":1,"chunk-76d48d14":1};r[e]?n.push(r[e]):0!==r[e]&&t[e]&&n.push(r[e]=new Promise((function(n,t){for(var c="css/"+({}[e]||e)+"."+{"chunk-73421eb6":"ac8cc308","chunk-965a053e":"401cfe86","chunk-0def7169":"388134fa","chunk-299242d1":"7c5c4462","chunk-383ac8c8":"ca6df252","chunk-3473e7c1":"d6522bd3","chunk-c4027c0e":"f141d9a9","chunk-5d025499":"c010f266","chunk-273e07cd":"044b1100","chunk-707b6b2a":"b9008965","chunk-ace92ac4":"19aed67f","chunk-36728d24":"360c6667","chunk-85a26486":"1dab7782","chunk-496ff644":"9a018875","chunk-6a6e7378":"0a76fe4e","chunk-778c0abb":"9556c811","chunk-70140f0d":"f5a33179","chunk-76d48d14":"a24befd2"}[e]+".css",a=i.p+c,o=document.getElementsByTagName("link"),u=0;u<o.length;u++){var l=o[u],s=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(s===c||s===a))return n()}var f=document.getElementsByTagName("style");for(u=0;u<f.length;u++){l=f[u],s=l.getAttribute("data-href");if(s===c||s===a)return n()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=n,d.onerror=function(n){var c=n&&n.target&&n.target.src||a,o=new Error("Loading CSS chunk "+e+" failed.\n("+c+")");o.code="CSS_CHUNK_LOAD_FAILED",o.request=c,delete r[e],d.parentNode.removeChild(d),t(o)},d.href=a;var h=document.getElementsByTagName("head")[0];h.appendChild(d)})).then((function(){r[e]=0})));var c=a[e];if(0!==c)if(c)n.push(c[2]);else{var o=new Promise((function(n,t){c=a[e]=[n,t]}));n.push(c[2]=o);var l,s=document.createElement("script");s.charset="utf-8",s.timeout=120,i.nc&&s.setAttribute("nonce",i.nc),s.src=u(e);var f=new Error;l=function(n){s.onerror=s.onload=null,clearTimeout(d);var t=a[e];if(0!==t){if(t){var c=n&&("load"===n.type?"missing":n.type),r=n&&n.target&&n.target.src;f.message="Loading chunk "+e+" failed.\n("+c+": "+r+")",f.name="ChunkLoadError",f.type=c,f.request=r,t[1](f)}a[e]=void 0}};var d=setTimeout((function(){l({type:"timeout",target:s})}),12e4);s.onerror=s.onload=l,document.head.appendChild(s)}return Promise.all(n)},i.m=e,i.c=c,i.d=function(e,n,t){i.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,n){if(1&n&&(e=i(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(i.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var c in e)i.d(t,c,function(n){return e[n]}.bind(null,c));return t},i.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(n,"a",n),n},i.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},i.p="/",i.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],s=l.push.bind(l);l.push=n,l=l.slice();for(var f=0;f<l.length;f++)n(l[f]);var d=s;o.push([0,"chunk-vendors"]),t()})({0:function(e,n,t){e.exports=t("56d7")},1:function(e,n){},"1a70":function(e,n,t){},"1bab":function(e,n,t){"use strict";t.d(n,"a",(function(){return o})),t.d(n,"c",(function(){return u})),t.d(n,"b",(function(){return i}));t("fc13"),t("9b5f");var c=t("82ae"),r=t.n(c);r.a.defaults.withCredentials=!0;var a="https://www.kagurakana.xyz/api",o=a+"/out";function u(e){var n=r.a.create({baseURL:a,timeout:2e4});return n.interceptors.response.use((function(e){if(404!=e.data.errno)return e.data;window.location.replace("/")})),n(e)}function i(e){var n=r.a.create({baseURL:o,timeout:2e4});return n.interceptors.response.use((function(e){if(404!=e.data.errno)return e.data;window.location.replace("/")})),n(e)}},2:function(e,n){},3:function(e,n){},"33a5":function(e,n,t){},"3aff":function(e,n,t){},4:function(e,n){},"494d":function(e,n,t){},5:function(e,n){},"56d7":function(e,n,t){"use strict";t.r(n);t("31e1"),t("8d9b"),t("3b2b"),t("736a");var c=t("a593"),r=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("v-app",{attrs:{id:"app"}},[t("keep-alive",{attrs:{include:"Home"}},[t("router-view")],1),t("ScrollListenerBar",{staticClass:"scroll-listener"}),t("FloatingButton")],1)},a=[],o=t("7c98"),u=t.n(o),i=(t("3aff"),function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("v-speed-dial",{attrs:{bottom:"",right:"",direction:"top","open-on-hover":!1,transition:"scale-transition"},scopedSlots:e._u([{key:"activator",fn:function(){return[t("v-btn",{attrs:{color:"blue darken-2",dark:"",fab:""},model:{value:e.fab,callback:function(n){e.fab=n},expression:"fab"}},[e.fab?t("v-icon",[e._v("mdi-close")]):t("v-icon",[e._v("mdi-playlist-plus")])],1)]},proxy:!0}]),model:{value:e.fab,callback:function(n){e.fab=n},expression:"fab"}},[t("v-tooltip",{attrs:{left:""},scopedSlots:e._u([{key:"activator",fn:function(n){var c=n.on;return[t("v-btn",e._g({attrs:{fab:"",dark:"",small:"",color:"green"},on:{click:function(n){return e.$vuetify.goTo(0,1e3)}}},c),[t("v-icon",[e._v("mdi-arrow-up")])],1)]}}])},[e._v(" 返回顶部 ")]),t("v-tooltip",{attrs:{left:""},scopedSlots:e._u([{key:"activator",fn:function(n){var c=n.on;return[t("v-btn",e._g({attrs:{fab:"",dark:"",small:"",color:"indigo"},on:{click:function(n){"/"===e.$route.path||e.$router.push("/")}}},c),[t("v-icon",[e._v("mdi-home")])],1)]}}])},[e._v(" 首页 ")]),t("v-tooltip",{attrs:{left:""},scopedSlots:e._u([{key:"activator",fn:function(n){var c=n.on;return[t("v-btn",e._g({attrs:{fab:"",dark:"",small:"",color:"lime"},on:{click:function(n){"/register"===e.$route.path||e.$router.push("/register")}}},c),[t("v-icon",[e._v("mdi-key")])],1)]}}])},[e._v(" 注册/登录 ")])],1)}),l=[],s=t("6abc"),f=t("7736"),d={name:"FloatingButton",data:function(){return{fab:!this.isMobile,tab:null}},computed:Object(s["a"])({},Object(f["b"])(["isMobile"])),methods:{}},h=d,b=(t("8867"),t("5d22")),m=t("7aad"),p=t.n(m),k=t("9b1f"),_=t("60ed"),v=t("2701"),g=t("9046"),w=Object(b["a"])(h,i,l,!1,null,"f8b65ce8",null),y=w.exports;p()(w,{VBtn:k["a"],VIcon:_["a"],VSpeedDial:v["a"],VTooltip:g["a"]});var I=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{ref:"scrollListenerBar",staticClass:"scrollListenerBar"})},O=[],L={name:"ScrollListener",mounted:function(){var e=this;window.onscroll=function(){var n=window.innerHeight,t=window.scrollY||window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop,c=document.body.offsetHeight;console.log(c),e.$refs.scrollListenerBar.style.width="".concat(t/(c-n)*100,"%")}}},C=L,j=(t("ef8c"),Object(b["a"])(C,I,O,!1,null,"2cae55fa",null)),P=j.exports,F={name:"App",created:function(){},mounted:function(){var e=this,n=u.a.debounce((function(){e.$store.commit("resize")}),100);window.onresize=function(){n()},console.log("%c\ncreated by                                                                    \n           _                               _                                  \n          | |                             | |                                 \n          | | ____ _  __ _ _   _ _ __ __ _| | ____ _ _ __   __ _              \n          | |/ / _` |/ _` | | | | '__/ _` | |/ / _` | '_ \\ / _` |             \n          |   | (_| | (_| | |_| | | | (_| |   | (_| | | | | (_| |             \n          |_|\\_\\__,_|\\__, |\\__,_|_|  \\__,_|_|\\_\\__,_|_| |_|\\__,_|             \n                      __| |                                                   \n                     |___/                                                    \n                                                                     with ♥   \n","color:#fff;background-color:#FFA726;display:block")},components:{FloatingButton:y,ScrollListenerBar:P}},T=F,H=(t("9be0"),t("70c2")),E=Object(b["a"])(T,r,a,!1,null,"14a6983c",null),S=E.exports;p()(E,{VApp:H["a"]});t("27ae"),t("591f"),t("feb3");var A=t("8aaf");c["a"].use(A["a"]);var x=[{path:"/",component:function(){return Promise.all([t.e("chunk-73421eb6"),t.e("chunk-ace92ac4"),t.e("chunk-5d025499"),t.e("chunk-6a6e7378")]).then(t.bind(null,"b3d7"))},meta:{title:"神楽花菜OFFICIAL"}},{path:"/login",component:function(){return Promise.all([t.e("chunk-73421eb6"),t.e("chunk-965a053e"),t.e("chunk-707b6b2a")]).then(t.bind(null,"676a"))},meta:{title:"神楽花菜OFFICIAL|登陆"}},{path:"/register",component:function(){return Promise.all([t.e("chunk-73421eb6"),t.e("chunk-965a053e"),t.e("chunk-299242d1")]).then(t.bind(null,"8579"))},meta:{title:"神楽花菜OFFICIAL|注册"}},{path:"/admin/new",component:function(){return Promise.all([t.e("chunk-73421eb6"),t.e("chunk-965a053e"),t.e("chunk-383ac8c8"),t.e("chunk-c4027c0e")]).then(t.bind(null,"ea7d"))}},{path:"/admin/new/:id",component:function(){return Promise.all([t.e("chunk-73421eb6"),t.e("chunk-965a053e"),t.e("chunk-383ac8c8"),t.e("chunk-c4027c0e")]).then(t.bind(null,"ea7d"))}},{path:"/admin/detail",component:function(){return Promise.all([t.e("chunk-73421eb6"),t.e("chunk-965a053e"),t.e("chunk-5d025499"),t.e("chunk-273e07cd")]).then(t.bind(null,"9712"))}},{path:"/admin/comment",component:function(){return Promise.all([t.e("chunk-73421eb6"),t.e("chunk-965a053e"),t.e("chunk-383ac8c8"),t.e("chunk-3473e7c1")]).then(t.bind(null,"36df"))}},{path:"/admin/addlink",component:function(){return Promise.all([t.e("chunk-73421eb6"),t.e("chunk-965a053e"),t.e("chunk-0def7169")]).then(t.bind(null,"6845"))}},{path:"/detail/:id",component:function(){return Promise.all([t.e("chunk-73421eb6"),t.e("chunk-965a053e"),t.e("chunk-ace92ac4"),t.e("chunk-383ac8c8"),t.e("chunk-36728d24")]).then(t.bind(null,"236b"))}},{path:"/list/小伙伴",redirect:"/friends"},{path:"/list/关于",redirect:"/about"},{path:"/list/追番",redirect:"/bangumi"},{path:"/bangumi",component:function(){return Promise.all([t.e("chunk-73421eb6"),t.e("chunk-ace92ac4"),t.e("chunk-70140f0d")]).then(t.bind(null,"035d"))},meta:{title:"神楽花菜OFFICIAL|追番"}},{path:"/list/:tag",component:function(){return Promise.all([t.e("chunk-73421eb6"),t.e("chunk-ace92ac4"),t.e("chunk-5d025499"),t.e("chunk-778c0abb")]).then(t.bind(null,"22f1"))},meta:{title:"神楽花菜OFFICIAL"}},{path:"/friends",component:function(){return Promise.all([t.e("chunk-73421eb6"),t.e("chunk-965a053e"),t.e("chunk-ace92ac4"),t.e("chunk-383ac8c8"),t.e("chunk-85a26486")]).then(t.bind(null,"41ae"))},meta:{title:"神楽花菜OFFICIAL|小伙伴"}},{path:"/about",component:function(){return Promise.all([t.e("chunk-73421eb6"),t.e("chunk-ace92ac4"),t.e("chunk-496ff644")]).then(t.bind(null,"ef4c"))},meta:{title:"神楽花菜OFFICIAL|(=・ω・=)"}}];document.title="神楽花菜OFFICIAL";var W=new A["a"]({mode:"history",base:"/",routes:x});W.beforeEach((function(e,n,t){document.title=e.meta.title,t()}));var B=W,D=(t("c22d"),t("9b5f"),t("ea94"),t("8d85"),{winWidth:function(e){return e.WIN_WIDTH},cliWidth:function(e){return e.CLI_WIDTH},isMobile:function(e){return e.CLI_WIDTH<650},search:function(e){return e.search},scrollData:function(e){return e.scrollData},loginCheckUsername:function(e){return e.user.username},loginCheckEmail:function(e){return e.user.email}});c["a"].use(f["a"]);var $=new f["a"].Store({state:{WIN_WIDTH:window.screen.width,WIN_HEIGHT:window.screen.height,CLI_WIDTH:document.body.offsetWidth,CLI_HEIGHT:document.body.offsetHeight,user:{username:"",email:""},search:""},mutations:{resize:function(e,n){e.CLI_WIDTH=document.body.offsetWidth,e.CLI_HEIGHT=document.body.offsetHeight},search:function(e,n){e.search=n.trim()},storeUserData:function(e,n){e.user.username=n.username,e.user.email=n.email}},actions:{},modules:{},getters:D}),N=t("e457");c["a"].use(N["a"]);var M=new N["a"]({});c["a"].prototype.$bus=new c["a"],c["a"].config.productionTip=!1,window.vm=new c["a"]({router:B,store:$,vuetify:M,render:function(e){return e(S)}}).$mount("#app")},6:function(e,n){},7:function(e,n){},8867:function(e,n,t){"use strict";t("1a70")},"8d85":function(e,n,t){"use strict";t.d(n,"d",(function(){return s})),t.d(n,"c",(function(){return f})),t.d(n,"f",(function(){return d})),t.d(n,"g",(function(){return h})),t.d(n,"e",(function(){return b})),t.d(n,"a",(function(){return m})),t.d(n,"b",(function(){return p}));var c=t("303e"),r=t("1bab"),a=t("7b04"),o=t.n(a),u="2jwbI.w_2";function i(e){var n=o.a.createHmac("sha512",u);return n.update(e).digest("hex")}var l=function e(n,t,r,a){Object(c["a"])(this,e),this.username=n,this.password=t,this.email=r,this.avatar=a};function s(e){return Object(r["c"])({method:"get",url:"/user/checkusername",params:{username:e}})}function f(e){return Object(r["c"])({method:"get",url:"/user/checkemail",params:{email:e}})}function d(e,n){return n=i(n),Object(r["c"])({method:"post",url:"/user/login",data:{username:e,password:n}})}function h(e,n,t,c){n=i(n);var a=new l(e,n,t,c);return Object(r["c"])({method:"post",url:"/user/register",data:{user:a}})}function b(e,n,t,c,a){return Object(r["c"])({method:"post",url:"/user/addlink",data:{avatar:e,name:n,URL:t,bio:c,linkType:a}})}function m(){return Object(r["c"])({method:"get",url:"/user/getlink"})}function p(){return Object(r["c"])({method:"get",url:"user/logincheck"})}},"9be0":function(e,n,t){"use strict";t("494d")},c32d:function(e,n){e.exports=moment},ef8c:function(e,n,t){"use strict";t("33a5")}});