(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-aaac90ce"],{"166a":function(t,e,i){},"20f68":function(t,e,i){},"2c64":function(t,e,i){},"2db4":function(t,e,i){"use strict";i("a9e3"),i("ca71");var n=i("a9ad"),a=i("f2e7"),r=i("fe6c"),s=i("58df"),o=i("d9bd");e["a"]=Object(s["a"])(n["a"],a["a"],Object(r["b"])(["absolute","top","bottom","left","right"])).extend({name:"v-snackbar",props:{multiLine:Boolean,timeout:{type:Number,default:6e3},vertical:Boolean},data:function(){return{activeTimeout:-1}},computed:{classes:function(){return{"v-snack--active":this.isActive,"v-snack--absolute":this.absolute,"v-snack--bottom":this.bottom||!this.top,"v-snack--left":this.left,"v-snack--multi-line":this.multiLine&&!this.vertical,"v-snack--right":this.right,"v-snack--top":this.top,"v-snack--vertical":this.vertical}}},watch:{isActive:function(){this.setTimeout()}},created:function(){this.$attrs.hasOwnProperty("auto-height")&&Object(o["d"])("auto-height",this)},mounted:function(){this.setTimeout()},methods:{setTimeout:function(){var t=this;window.clearTimeout(this.activeTimeout),this.isActive&&this.timeout&&(this.activeTimeout=window.setTimeout((function(){t.isActive=!1}),this.timeout))}},render:function(t){return t("transition",{attrs:{name:"v-snack-transition"}},[this.isActive&&t("div",{staticClass:"v-snack",class:this.classes,on:this.$listeners},[t("div",this.setBackgroundColor(this.color,{staticClass:"v-snack__wrapper",attrs:{role:"alert"}}),[t("div",{staticClass:"v-snack__content"},this.$slots.default)])])])}})},"3d86":function(t,e,i){},5311:function(t,e,i){"use strict";var n=i("5607"),a=i("2b0e");e["a"]=a["a"].extend({name:"rippleable",directives:{ripple:n["a"]},props:{ripple:{type:[Boolean,Object],default:!0}},methods:{genRipple:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return this.ripple?(t.staticClass="v-input--selection-controls__ripple",t.directives=t.directives||[],t.directives.push({name:"ripple",value:{center:!0}}),t.on=Object.assign({click:this.onChange},this.$listeners),this.$createElement("div",t)):null},onChange:function(){}}})},"604c":function(t,e,i){"use strict";i.d(e,"a",(function(){return l}));i("4de4"),i("7db0"),i("c740"),i("4160"),i("caad"),i("c975"),i("fb6a"),i("a434"),i("a9e3"),i("2532"),i("159b");var n=i("5530"),a=(i("166a"),i("a452")),r=i("7560"),s=i("58df"),o=i("d9bd"),l=Object(s["a"])(a["a"],r["a"]).extend({name:"base-item-group",props:{activeClass:{type:String,default:"v-item--active"},mandatory:Boolean,max:{type:[Number,String],default:null},multiple:Boolean},data:function(){return{internalLazyValue:void 0!==this.value?this.value:this.multiple?[]:void 0,items:[]}},computed:{classes:function(){return Object(n["a"])({"v-item-group":!0},this.themeClasses)},selectedIndex:function(){return this.selectedItem&&this.items.indexOf(this.selectedItem)||-1},selectedItem:function(){if(!this.multiple)return this.selectedItems[0]},selectedItems:function(){var t=this;return this.items.filter((function(e,i){return t.toggleMethod(t.getValue(e,i))}))},selectedValues:function(){return null==this.internalValue?[]:Array.isArray(this.internalValue)?this.internalValue:[this.internalValue]},toggleMethod:function(){var t=this;if(!this.multiple)return function(e){return t.internalValue===e};var e=this.internalValue;return Array.isArray(e)?function(t){return e.includes(t)}:function(){return!1}}},watch:{internalValue:"updateItemsState",items:"updateItemsState"},created:function(){this.multiple&&!Array.isArray(this.internalValue)&&Object(o["c"])("Model must be bound to an array if the multiple property is true.",this)},methods:{genData:function(){return{class:this.classes}},getValue:function(t,e){return null==t.value||""===t.value?e:t.value},onClick:function(t){this.updateInternalValue(this.getValue(t,this.items.indexOf(t)))},register:function(t){var e=this,i=this.items.push(t)-1;t.$on("change",(function(){return e.onClick(t)})),this.mandatory&&!this.selectedValues.length&&this.updateMandatory(),this.updateItem(t,i)},unregister:function(t){if(!this._isDestroyed){var e=this.items.indexOf(t),i=this.getValue(t,e);this.items.splice(e,1);var n=this.selectedValues.indexOf(i);if(!(n<0)){if(!this.mandatory)return this.updateInternalValue(i);this.multiple&&Array.isArray(this.internalValue)?this.internalValue=this.internalValue.filter((function(t){return t!==i})):this.internalValue=void 0,this.selectedItems.length||this.updateMandatory(!0)}}},updateItem:function(t,e){var i=this.getValue(t,e);t.isActive=this.toggleMethod(i)},updateItemsState:function(){var t=this;this.$nextTick((function(){if(t.mandatory&&!t.selectedItems.length)return t.updateMandatory();t.items.forEach(t.updateItem)}))},updateInternalValue:function(t){this.multiple?this.updateMultiple(t):this.updateSingle(t)},updateMandatory:function(t){if(this.items.length){var e=this.items.slice();t&&e.reverse();var i=e.find((function(t){return!t.disabled}));if(i){var n=this.items.indexOf(i);this.updateInternalValue(this.getValue(i,n))}}},updateMultiple:function(t){var e=Array.isArray(this.internalValue)?this.internalValue:[],i=e.slice(),n=i.findIndex((function(e){return e===t}));this.mandatory&&n>-1&&i.length-1<1||null!=this.max&&n<0&&i.length+1>this.max||(n>-1?i.splice(n,1):i.push(t),this.internalValue=i)},updateSingle:function(t){var e=t===this.internalValue;this.mandatory&&e||(this.internalValue=e?void 0:t)}},render:function(t){return t("div",this.genData(),this.$slots.default)}});l.extend({name:"v-item-group",provide:function(){return{itemGroup:this}}})},"62ad":function(t,e,i){"use strict";i("4160"),i("caad"),i("13d5"),i("45fc"),i("4ec9"),i("a9e3"),i("b64b"),i("d3b7"),i("ac1f"),i("3ca3"),i("5319"),i("2ca0"),i("159b"),i("ddb0");var n=i("ade3"),a=i("5530"),r=(i("4b85"),i("2b0e")),s=i("d9f7"),o=i("80d2"),l=["sm","md","lg","xl"],u=function(){return l.reduce((function(t,e){return t[e]={type:[Boolean,String,Number],default:!1},t}),{})}(),c=function(){return l.reduce((function(t,e){return t["offset"+Object(o["u"])(e)]={type:[String,Number],default:null},t}),{})}(),d=function(){return l.reduce((function(t,e){return t["order"+Object(o["u"])(e)]={type:[String,Number],default:null},t}),{})}(),h={col:Object.keys(u),offset:Object.keys(c),order:Object.keys(d)};function f(t,e,i){var n=t;if(null!=i&&!1!==i){if(e){var a=e.replace(t,"");n+="-".concat(a)}return"col"!==t||""!==i&&!0!==i?(n+="-".concat(i),n.toLowerCase()):n.toLowerCase()}}var p=new Map;e["a"]=r["a"].extend({name:"v-col",functional:!0,props:Object(a["a"])({cols:{type:[Boolean,String,Number],default:!1}},u,{offset:{type:[String,Number],default:null}},c,{order:{type:[String,Number],default:null}},d,{alignSelf:{type:String,default:null,validator:function(t){return["auto","start","end","center","baseline","stretch"].includes(t)}},tag:{type:String,default:"div"}}),render:function(t,e){var i=e.props,a=e.data,r=e.children,o=(e.parent,"");for(var l in i)o+=String(i[l]);var u=p.get(o);return u||function(){var t,e;for(e in u=[],h)h[e].forEach((function(t){var n=i[t],a=f(e,t,n);a&&u.push(a)}));var a=u.some((function(t){return t.startsWith("col-")}));u.push((t={col:!a||!i.cols},Object(n["a"])(t,"col-".concat(i.cols),i.cols),Object(n["a"])(t,"offset-".concat(i.offset),i.offset),Object(n["a"])(t,"order-".concat(i.order),i.order),Object(n["a"])(t,"align-self-".concat(i.alignSelf),i.alignSelf),t)),p.set(o,u)}(),t(i.tag,Object(s["a"])(a,{class:u}),r)}})},6845:function(t,e,i){"use strict";i.r(e);var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("v-card",{staticClass:"add-link-container"},[i("v-container",[i("h1",[t._v(t._s(t.tip))]),t.isShow?i("div",[i("main",[i("div",[i("v-text-field",{attrs:{filled:"",label:"Avatar"},model:{value:t.avatar,callback:function(e){t.avatar=e},expression:"avatar"}}),i("v-text-field",{attrs:{filled:"",label:"Name"},model:{value:t.name,callback:function(e){t.name=e},expression:"name"}}),i("v-text-field",{attrs:{filled:"",label:"URL"},model:{value:t.URL,callback:function(e){t.URL=e},expression:"URL"}}),i("v-text-field",{attrs:{filled:"",label:"Bio"},model:{value:t.bio,callback:function(e){t.bio=e},expression:"bio"}}),i("v-radio-group",{attrs:{mandatory:!1},model:{value:t.linkType,callback:function(e){t.linkType=e},expression:"linkType"}},[i("v-radio",{attrs:{label:"传教",value:"recommend"}}),i("v-radio",{attrs:{label:"朋友",value:"friend"}}),i("v-radio",{attrs:{label:"大佬",value:"fame"}})],1)],1),i("div",[i("v-card",{staticClass:"friend-link-card",attrs:{elevation:"4"}},[i("div",{staticClass:"d-flex"},[i("img",{staticClass:"link-avatar",attrs:{src:t.avatar?t.avatar:"https://cdn.kagurakana.xyz/Cat_congras.webp@webp",alt:""}}),i("div",[i("p",[i("strong",[t._v("名称：")]),t._v(t._s(t.name))]),i("p",[i("strong",[t._v("简介：")]),t._v(t._s(t.bio))]),i("p",[i("strong",[t._v("链接：")]),t._v(t._s(t.URL))]),i("p",[i("strong",[t._v("类型：")]),t._v(t._s(t.linkType+""))])])])])],1)]),i("v-btn",{staticClass:"mr-4",attrs:{color:"primary"},on:{click:t.addFriendsLink}},[t._v(" 添加 ")]),i("v-btn",{staticClass:"mr-4",attrs:{disabled:!t.isUpdating,color:"success"},on:{click:t.updateFriendLink}},[t._v(" 更新 ")]),i("v-btn",{directives:[{name:"show",rawName:"v-show",value:t.isUpdating,expression:"isUpdating"}],attrs:{color:"error"},on:{click:t.clearInput}},[t._v(" 清空 ")]),i("v-row",t._l(t.friendLinks,(function(e,n){return i("v-col",{key:n,staticClass:"col-12 col-md-6 col-lg-4"},[i("v-card",{staticClass:"friend-link-card",attrs:{elevation:"4"}},[i("div",{staticClass:"d-flex"},[i("img",{staticClass:"link-avatar",attrs:{src:e.avatar,alt:""}}),i("div",[i("p",[i("strong",[t._v("ID: ")]),t._v(t._s(e.id))]),i("p",[i("strong",[t._v("名称：")]),t._v(t._s(e.name))]),i("p",[i("strong",[t._v("简介：")]),t._v(t._s(e.bio))]),i("p",[i("strong",[t._v("链接：")]),t._v(t._s(e.url))]),i("p",[i("strong",[t._v("类型：")]),t._v(t._s(e.linkType+""))])])]),i("div",{staticClass:"link-btn-group"},[i("v-btn",{attrs:{color:"success"},on:{click:function(i){return t.changeInputData(e)}}},[t._v(" 更新 ")]),i("v-btn",{attrs:{color:"error"},on:{click:function(i){return t.deleteFrinedLink(e.id)}}},[t._v(" 删除 ")])],1)])],1)})),1)],1):t._e()])],1),i("v-snackbar",{attrs:{timeout:1500,color:""},model:{value:t.showSnackBar,callback:function(e){t.showSnackBar=e},expression:"showSnackBar"}},[t._v(t._s(t.snackerBarTip))])],1)},a=[],r=(i("b0c0"),i("d3b7"),i("5530")),s=i("8d85"),o=i("2f62"),l={name:"AddLink",computed:Object(r["a"])({},Object(o["b"])(["loginCheckUsername"])),data:function(){return{tip:"权限验证中...",showSnackBar:!1,snackerBarTip:"",isShow:!1,linkId:"",avatar:"",name:"",URL:"",bio:"",linkType:"",friendLinks:[],isUpdating:!1}},created:function(){var t=this;Object(s["b"])().then((function(e){return e.data.isAdmin?(t.isShow=!0,t.tip="添加友链...",Promise.resolve()):(t.tip="没有权限...",Promise.reject())})).then((function(t){return Object(s["a"])()})).then((function(e){t.friendLinks=e.data}))},methods:{addFriendsLink:function(){var t=this;Object(s["e"])(this.avatar,this.name,this.URL,this.bio,this.linkType).then((function(e){var i=t.tip;return t.tip="ok",setTimeout((function(){t.tip=i}),1e3),Object(s["a"])()})).then((function(e){t.friendLinks=e.data}))},changeInputData:function(t){this.linkId=t.id,this.avatar=t.avatar,this.name=t.name,this.linkType=t.linkType,this.bio=t.bio,this.URL=t.url,this.isUpdating=!0},clearInput:function(){this.avatar="",this.name="",this.linkType="",this.bio="",this.URL="",this.isUpdating=!1},updateFriendLink:function(){var t=this;Object(s["i"])(this.linkId,this.avatar,this.name,this.URL,this.bio,this.linkType).then((function(e){return t.clearInput(),t.snackerBarTip="更新成功✔",t.showSnackBar=!0,Object(s["a"])()})).then((function(e){t.friendLinks=e.data}))},deleteFrinedLink:function(t){var e=this;Object(s["f"])(t).then((function(t){return e.snackerBarTip="删除成功",e.showSnackBar=!0,Object(s["a"])()})).then((function(t){e.friendLinks=t.data}))}}},u=l,c=(i("dec0"),i("2877")),d=i("6544"),h=i.n(d),f=i("8336"),p=i("b0af"),v=i("62ad"),m=i("a523"),b=(i("2c64"),i("ba87")),g=i("9d26"),k=i("c37a"),y=i("7e2b"),C=i("a9ad"),S=i("4e82"),V=i("5311"),_=i("7560"),O=i("fe09"),I=i("80d2"),x=i("58df"),j=Object(x["a"])(y["a"],C["a"],V["a"],Object(S["a"])("radioGroup"),_["a"]),w=j.extend().extend({name:"v-radio",inheritAttrs:!1,props:{disabled:Boolean,id:String,label:String,name:String,offIcon:{type:String,default:"$radioOff"},onIcon:{type:String,default:"$radioOn"},readonly:Boolean,value:{default:null}},data:function(){return{isFocused:!1}},computed:{classes:function(){return Object(r["a"])({"v-radio--is-disabled":this.isDisabled,"v-radio--is-focused":this.isFocused},this.themeClasses,{},this.groupClasses)},computedColor:function(){return O["a"].options.computed.computedColor.call(this)},computedIcon:function(){return this.isActive?this.onIcon:this.offIcon},computedId:function(){return k["a"].options.computed.computedId.call(this)},hasLabel:k["a"].options.computed.hasLabel,hasState:function(){return(this.radioGroup||{}).hasState},isDisabled:function(){return this.disabled||!!(this.radioGroup||{}).disabled},isReadonly:function(){return this.readonly||!!(this.radioGroup||{}).readonly},computedName:function(){return this.name||!this.radioGroup?this.name:this.radioGroup.name||"radio-".concat(this.radioGroup._uid)},rippleState:function(){return O["a"].options.computed.rippleState.call(this)},validationState:function(){return(this.radioGroup||{}).validationState||this.computedColor}},methods:{genInput:function(t){return O["a"].options.methods.genInput.call(this,"radio",t)},genLabel:function(){var t=this;return this.hasLabel?this.$createElement(b["a"],{on:{click:function(e){e.preventDefault(),t.onChange()}},attrs:{for:this.computedId},props:{color:this.validationState,focused:this.hasState}},Object(I["l"])(this,"label")||this.label):null},genRadio:function(){return this.$createElement("div",{staticClass:"v-input--selection-controls__input"},[this.$createElement(g["a"],this.setTextColor(this.validationState,{props:{dense:this.radioGroup&&this.radioGroup.dense}}),this.computedIcon),this.genInput(Object(r["a"])({name:this.computedName,value:this.value},this.attrs$)),this.genRipple(this.setTextColor(this.rippleState))])},onFocus:function(t){this.isFocused=!0,this.$emit("focus",t)},onBlur:function(t){this.isFocused=!1,this.$emit("blur",t)},onChange:function(){this.isDisabled||this.isReadonly||this.isActive||this.toggle()},onKeydown:function(){}},render:function(t){var e={staticClass:"v-radio",class:this.classes};return t("div",e,[this.genRadio(),this.genLabel()])}}),A=(i("a9e3"),i("ec29"),i("3d86"),i("604c")),L=i("8547"),B=Object(x["a"])(L["a"],A["a"],k["a"]),T=B.extend({name:"v-radio-group",provide:function(){return{radioGroup:this}},props:{column:{type:Boolean,default:!0},height:{type:[Number,String],default:"auto"},name:String,row:Boolean,value:null},computed:{classes:function(){return Object(r["a"])({},k["a"].options.computed.classes.call(this),{"v-input--selection-controls v-input--radio-group":!0,"v-input--radio-group--column":this.column&&!this.row,"v-input--radio-group--row":this.row})}},methods:{genDefaultSlot:function(){return this.$createElement("div",{staticClass:"v-input--radio-group__input",attrs:{id:this.id,role:"radiogroup","aria-labelledby":this.computedId}},k["a"].options.methods.genDefaultSlot.call(this))},genInputSlot:function(){var t=k["a"].options.methods.genInputSlot.call(this);return delete t.data.on.click,t},genLabel:function(){var t=k["a"].options.methods.genLabel.call(this);return t?(t.data.attrs.id=this.computedId,delete t.data.attrs.for,t.tag="legend",t):null},onClick:A["a"].options.methods.onClick}}),R=i("0fd9"),$=i("2db4"),D=i("8654"),F=Object(c["a"])(u,n,a,!1,null,"2b47af64",null);e["default"]=F.exports;h()(F,{VBtn:f["a"],VCard:p["a"],VCol:v["a"],VContainer:m["a"],VRadio:w,VRadioGroup:T,VRow:R["a"],VSnackbar:$["a"],VTextField:D["a"]})},"75c6":function(t,e,i){},8547:function(t,e,i){"use strict";var n=i("2b0e"),a=i("80d2");e["a"]=n["a"].extend({name:"comparable",props:{valueComparator:{type:Function,default:a["i"]}}})},"90a2":function(t,e,i){"use strict";i("7db0");var n=i("53ca");function a(t,e){var i=e.modifiers||{},a=e.value,s="object"===Object(n["a"])(a),o=s?a.handler:a,l=new IntersectionObserver((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],n=arguments.length>1?arguments[1]:void 0;if(t._observe){if(o&&(!i.quiet||t._observe.init)){var a=Boolean(e.find((function(t){return t.isIntersecting})));o(e,n,a)}t._observe.init&&i.once?r(t):t._observe.init=!0}}),a.options||{});t._observe={init:!1,observer:l},l.observe(t)}function r(t){t._observe&&(t._observe.observer.unobserve(t),delete t._observe)}var s={inserted:a,unbind:r};e["a"]=s},"9d26":function(t,e,i){"use strict";var n=i("132d");e["a"]=n["a"]},a434:function(t,e,i){"use strict";var n=i("23e7"),a=i("23cb"),r=i("a691"),s=i("50c4"),o=i("7b0b"),l=i("65f0"),u=i("8418"),c=i("1dde"),d=i("ae40"),h=c("splice"),f=d("splice",{ACCESSORS:!0,0:0,1:2}),p=Math.max,v=Math.min,m=9007199254740991,b="Maximum allowed length exceeded";n({target:"Array",proto:!0,forced:!h||!f},{splice:function(t,e){var i,n,c,d,h,f,g=o(this),k=s(g.length),y=a(t,k),C=arguments.length;if(0===C?i=n=0:1===C?(i=0,n=k-y):(i=C-2,n=v(p(r(e),0),k-y)),k+i-n>m)throw TypeError(b);for(c=l(g,n),d=0;d<n;d++)h=y+d,h in g&&u(c,d,g[h]);if(c.length=n,i<n){for(d=y;d<k-n;d++)h=d+n,f=d+i,h in g?g[f]=g[h]:delete g[f];for(d=k;d>k-n+i;d--)delete g[d-1]}else if(i>n)for(d=k-n;d>y;d--)h=d+n-1,f=d+i-1,h in g?g[f]=g[h]:delete g[f];for(d=0;d<i;d++)g[d+y]=arguments[d+2];return g.length=k-n+i,c}})},a523:function(t,e,i){"use strict";i("99af"),i("4de4"),i("b64b"),i("2ca0"),i("20f68"),i("4b85"),i("a15b"),i("498a");var n=i("2b0e");function a(t){return n["a"].extend({name:"v-".concat(t),functional:!0,props:{id:String,tag:{type:String,default:"div"}},render:function(e,i){var n=i.props,a=i.data,r=i.children;a.staticClass="".concat(t," ").concat(a.staticClass||"").trim();var s=a.attrs;if(s){a.attrs={};var o=Object.keys(s).filter((function(t){if("slot"===t)return!1;var e=s[t];return t.startsWith("data-")?(a.attrs[t]=e,!1):e||"string"===typeof e}));o.length&&(a.staticClass+=" ".concat(o.join(" ")))}return n.id&&(a.domProps=a.domProps||{},a.domProps.id=n.id),e(n.tag,a,r)}})}var r=i("d9f7");e["a"]=a("container").extend({name:"v-container",functional:!0,props:{id:String,tag:{type:String,default:"div"},fluid:{type:Boolean,default:!1}},render:function(t,e){var i,n=e.props,a=e.data,s=e.children,o=a.attrs;return o&&(a.attrs={},i=Object.keys(o).filter((function(t){if("slot"===t)return!1;var e=o[t];return t.startsWith("data-")?(a.attrs[t]=e,!1):e||"string"===typeof e}))),n.id&&(a.domProps=a.domProps||{},a.domProps.id=n.id),t(n.tag,Object(r["a"])(a,{staticClass:"container",class:Array({"container--fluid":n.fluid}).concat(i||[])}),s)}})},c740:function(t,e,i){"use strict";var n=i("23e7"),a=i("b727").findIndex,r=i("44d2"),s=i("ae40"),o="findIndex",l=!0,u=s(o);o in[]&&Array(1)[o]((function(){l=!1})),n({target:"Array",proto:!0,forced:l||!u},{findIndex:function(t){return a(this,t,arguments.length>1?arguments[1]:void 0)}}),r(o)},ca71:function(t,e,i){},dec0:function(t,e,i){"use strict";var n=i("75c6"),a=i.n(n);a.a},ec29:function(t,e,i){},fe09:function(t,e,i){"use strict";i("4de4"),i("45fc"),i("d3b7"),i("25f0");var n=i("c37a"),a=i("5311"),r=i("8547"),s=i("58df");e["a"]=Object(s["a"])(n["a"],a["a"],r["a"]).extend({name:"selectable",model:{prop:"inputValue",event:"change"},props:{id:String,inputValue:null,falseValue:null,trueValue:null,multiple:{type:Boolean,default:null},label:String},data:function(){return{hasColor:this.inputValue,lazyValue:this.inputValue}},computed:{computedColor:function(){if(this.isActive)return this.color?this.color:this.isDark&&!this.appIsDark?"white":"primary"},isMultiple:function(){return!0===this.multiple||null===this.multiple&&Array.isArray(this.internalValue)},isActive:function(){var t=this,e=this.value,i=this.internalValue;return this.isMultiple?!!Array.isArray(i)&&i.some((function(i){return t.valueComparator(i,e)})):void 0===this.trueValue||void 0===this.falseValue?e?this.valueComparator(e,i):Boolean(i):this.valueComparator(i,this.trueValue)},isDirty:function(){return this.isActive},rippleState:function(){return this.disabled||this.validationState?this.validationState:"primary"}},watch:{inputValue:function(t){this.lazyValue=t,this.hasColor=t}},methods:{genLabel:function(){var t=this,e=n["a"].options.methods.genLabel.call(this);return e?(e.data.on={click:function(e){e.preventDefault(),t.onChange()}},e):e},genInput:function(t,e){return this.$createElement("input",{attrs:Object.assign({"aria-checked":this.isActive.toString(),disabled:this.isDisabled,id:this.computedId,role:t,type:t},e),domProps:{value:this.value,checked:this.isActive},on:{blur:this.onBlur,change:this.onChange,focus:this.onFocus,keydown:this.onKeydown},ref:"input"})},onBlur:function(){this.isFocused=!1},onChange:function(){var t=this;if(!this.isDisabled){var e=this.value,i=this.internalValue;if(this.isMultiple){Array.isArray(i)||(i=[]);var n=i.length;i=i.filter((function(i){return!t.valueComparator(i,e)})),i.length===n&&i.push(e)}else i=void 0!==this.trueValue&&void 0!==this.falseValue?this.valueComparator(i,this.trueValue)?this.falseValue:this.trueValue:e?this.valueComparator(i,e)?null:e:!i;this.validate(!0,i),this.internalValue=i,this.hasColor=i}},onFocus:function(){this.isFocused=!0},onKeydown:function(t){}}})}}]);