(function(t){function e(e){for(var r,o,c=e[0],s=e[1],l=e[2],u=0,v=[];u<c.length;u++)o=c[u],Object.prototype.hasOwnProperty.call(i,o)&&i[o]&&v.push(i[o][0]),i[o]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(t[r]=s[r]);d&&d(e);while(v.length)v.shift()();return a.push.apply(a,l||[]),n()}function n(){for(var t,e=0;e<a.length;e++){for(var n=a[e],r=!0,o=1;o<n.length;o++){var s=n[o];0!==i[s]&&(r=!1)}r&&(a.splice(e--,1),t=c(c.s=n[0]))}return t}var r={},i={app:0},a=[];function o(t){return c.p+"js/"+({about:"about"}[t]||t)+"."+{about:"18642962"}[t]+".js"}function c(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(t){var e=[],n=i[t];if(0!==n)if(n)e.push(n[2]);else{var r=new Promise((function(e,r){n=i[t]=[e,r]}));e.push(n[2]=r);var a,s=document.createElement("script");s.charset="utf-8",s.timeout=120,c.nc&&s.setAttribute("nonce",c.nc),s.src=o(t);var l=new Error;a=function(e){s.onerror=s.onload=null,clearTimeout(u);var n=i[t];if(0!==n){if(n){var r=e&&("load"===e.type?"missing":e.type),a=e&&e.target&&e.target.src;l.message="Loading chunk "+t+" failed.\n("+r+": "+a+")",l.name="ChunkLoadError",l.type=r,l.request=a,n[1](l)}i[t]=void 0}};var u=setTimeout((function(){a({type:"timeout",target:s})}),12e4);s.onerror=s.onload=a,document.head.appendChild(s)}return Promise.all(e)},c.m=t,c.c=r,c.d=function(t,e,n){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)c.d(n,r,function(e){return t[e]}.bind(null,r));return n},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/",c.oe=function(t){throw console.error(t),t};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=e,s=s.slice();for(var u=0;u<s.length;u++)e(s[u]);var d=l;a.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";n("85ec")},"56d7":function(t,e,n){"use strict";n.r(e);n("e623"),n("e379"),n("5dc8"),n("37e1");var r=n("2b0e"),i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",{staticClass:"f"},[n("v-main",[n("v-container",[n("router-view")],1)],1)],1)},a=[],o={name:"App",components:{},data:function(){return{}}},c=o,s=(n("034f"),n("2877")),l=n("6544"),u=n.n(l),d=n("7496"),v=n("a523"),m=n("f6c4"),f=Object(s["a"])(c,i,a,!1,null,null,null),g=f.exports;u()(f,{VApp:d["a"],VContainer:v["a"],VMain:m["a"]});var p=n("9483");Object(p["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(t){console.error("Error during service worker registration:",t)}});var h=n("a18c"),b=n("f309");r["a"].use(b["a"]);var w=new b["a"]({});r["a"].config.productionTip=!1,new r["a"]({router:h["default"],vuetify:w,render:function(t){return t(g)}}).$mount("#app")},"672d":function(t,e,n){},"85ec":function(t,e,n){},"8a47":function(t,e,n){t.exports=n.p+"img/speak-up.afa8e7ea.png"},a18c:function(t,e,n){"use strict";n.r(e);n("d3b7");var r=n("2b0e"),i=n("8c4f"),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("Appbar",{attrs:{text:"Kategorien"}}),n("v-container",[n("v-row",[t._l(t.categories,(function(e){return n("Category",{key:e.id,attrs:{category:e}},[t._v(" "+t._s(e)+" ")])})),n("NewCategoryCard")],2)],1)],1)},o=[],c=(n("96cf"),n("1da1")),s=n("bc3a"),l=n.n(s),u=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-col",{staticClass:"pb-2 col-6"},[n("v-card",{staticClass:"mx-1 my-0",attrs:{"max-width":"374"},on:{click:function(e){return t.switchtoG(t.category.id)}}},[n("v-img",{staticClass:"white--text align-end",attrs:{height:"25vh",src:"https://cdn.vuetifyjs.com/images/cards/cooking.png"}},[n("v-card-title",{staticStyle:{"word-break":"normal"}},[t._v(t._s(t.category.name))])],1)],1),t.dialog?n("Game",{attrs:{words:t.category.words},on:{closed:function(e){t.dialog=!1}}}):t._e()],1)},d=[],v=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-row",{attrs:{justify:"center",align:"center"}},[n("v-dialog",{attrs:{fullscreen:"","hide-overlay":"",transition:"dialog-bottom-transition"},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[n("v-card",{staticClass:"white--text",staticStyle:{"background-color":"tranparent"}},[n("v-toolbar",{attrs:{dark:"",color:"primary"}},[n("v-btn",{attrs:{icon:"",dark:""},on:{click:function(e){return t.$emit("closed",t.dialog)}}},[n("v-icon",[t._v("mdi-close")])],1)],1),n("div",{staticStyle:{position:"absolute"}},[n("Progress")],1),"G"==t.duringStatus?n("div",{staticClass:"game text-center centercenter",staticStyle:{height:"100vh"}},[n("h1",[t._v(" WORT")])]):t._e(),"W"==t.duringStatus?n("div",{staticClass:"win text-center centercenter",staticStyle:{height:"100vh"}},[n("h1",[t._v(" WIIIN")])]):t._e(),"L"==t.duringStatus?n("div",{staticClass:"lose text-center centercenter",staticStyle:{height:"100vh"}},[n("h1",[t._v(" LOSEEE")])]):t._e()],1),n("v-btn",{on:{click:function(e){return t.chg("W")}}},[t._v("WIN")]),n("v-btn",{on:{click:function(e){return t.chg("L")}}},[t._v("LOSE")]),n("v-btn",{on:{click:function(e){return t.chg("G")}}},[t._v("GAMMEEE")])],1)],1)},m=[],f=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-progress-circular",{attrs:{rotate:90,size:60,width:5,value:t.value,color:"lightgrey"}},[t._v(" "+t._s((t.value/5*3).toFixed(0))+" ")])},g=[],p=n("a18c"),h={data:function(){return{rr:p,interval:{},value:100}},beforeDestroy:function(){clearInterval(this.interval)},mounted:function(){var t=this;this.interval=setInterval((function(){if(100===Math.round(t.value,0))return t.value=0;t.value+=10/6}),1e3)}},b=h,w=(n("ac3a"),n("2877")),y=n("6544"),_=n.n(y),C=n("490a"),x=Object(w["a"])(b,f,g,!1,null,"594ec676",null),S=x.exports;_()(x,{VProgressCircular:C["a"]});var k={data:function(){return{dialog:!0,showWin:!1,duringStatus:"G"}},components:{Progress:S},props:{words:{type:Array}},methods:{chg:function(t){var e=this;setTimeout((function(){return e.clogText()}),1e3),this.duringStatus=t},clogText:function(){console.log("Back to game"),this.duringStatus="G"},handleOrientationChange:function(){console.log("sdsd");var t=window.screen.orientation.type;"portrait-primary"===t?console.log("PORTRAIT"):"landscape-primary"===t?console.log("LANDSCAPE"):console.log("JWdmkw")}},created:function(){this.dialog=!0},mounted:function(){console.log("DDDDDDDDDDD"),window.screen.orientation.lock("landscape-primary"),console.log(window.screen.orientation),console.log(window.screen.orientation),window.addEventListener("orientationchange",this.handleOrientationChange)}},V=k,O=(n("d44d"),n("8336")),j=n("b0af"),E=n("169a"),T=n("132d"),W=n("0fd9b"),A=n("71d9"),D=Object(w["a"])(V,v,m,!1,null,"01446162",null),I=D.exports;_()(D,{VBtn:O["a"],VCard:j["a"],VDialog:E["a"],VIcon:T["a"],VRow:W["a"],VToolbar:A["a"]});var N={data:function(){return{dialog:!1}},components:{Game:I},props:{category:{type:Object}},methods:{switchtoG:function(){console.log("Das Spiel kann starten"),this.dialog=!0}},created:function(){console.log(this.category.words)}},L=N,P=n("99d9"),R=n("62ad"),$=n("adda"),G=Object(w["a"])(L,u,d,!1,null,"344777b5",null),F=G.exports;_()(G,{VCard:j["a"],VCardTitle:P["c"],VCol:R["a"],VImg:$["a"]});var M=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-app-bar",{attrs:{app:"",color:"gray",dark:""}},[t._v(" "+t._s(t.text)+" "),r("v-spacer"),r("v-dialog",{attrs:{persistent:"","max-width":"290"},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on,i=e.attrs;return[r("v-icon",t._g(t._b({staticClass:"mr-2",staticStyle:{color:"gray"},on:{click:function(e){return t.func()}}},"v-icon",i,!1),n),[t._v("mdi-information-outline")])]}}]),model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[r("v-card",[r("v-card-title",{staticClass:"headline"},[t._v(" Impressum ")]),r("v-card-text",[t._v("Fatima Tuana Sirinyurt"),r("br"),t._v("© HTL Wien West, 2021 ")]),r("v-card-actions",[r("v-spacer"),r("v-btn",{attrs:{color:"gray darken-1",text:""},on:{click:function(e){t.dialog=!1}}},[t._v(" Schließen ")])],1)],1)],1),r("v-img",{attrs:{src:n("8a47"),"min-width":30,"max-width":30}})],1)},B=[],q={props:{text:{type:String}},data:function(){return{dialog:!1}},methods:{func:function(){console.log("Fatima Tuana Sirinyurt")}}},K=q,J=n("40dc"),H=n("2fa4"),z=Object(w["a"])(K,M,B,!1,null,"2a406d10",null),Q=z.exports;_()(z,{VAppBar:J["a"],VBtn:O["a"],VCard:j["a"],VCardActions:P["a"],VCardText:P["b"],VCardTitle:P["c"],VDialog:E["a"],VIcon:T["a"],VImg:$["a"],VSpacer:H["a"]});var U=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-col",{staticClass:"pb-2 col-6"},[n("v-card",{staticClass:"mx-1 my-0",attrs:{to:"/newCategory","max-width":"374"}},[n("v-sheet",{staticClass:"mx-auto ",staticStyle:{border:"5px dashed lightgray"},attrs:{rounded:"true",justify:"center",align:"center",height:"25vh"}},[n("v-icon",{staticStyle:{color:"'gray'",height:"100%"},attrs:{medium:""}},[t._v("mdi-plus")])],1)],1)],1)},X=[],Y={},Z=Y,tt=n("8dd9"),et=Object(w["a"])(Z,U,X,!1,null,"8ff16bf8",null),nt=et.exports;_()(et,{VCard:j["a"],VCol:R["a"],VIcon:T["a"],VSheet:tt["a"]});var rt={data:function(){return{categories:[]}},components:{Category:F,Appbar:Q,NewCategoryCard:nt},created:function(){this.getData(),history.pushState({},"","/results"),history.pushState({},"","/newCategory"),history.pushState({},"","/")},methods:{getData:function(){var t=this;return Object(c["a"])(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,l.a.get("/categories");case 2:n=e.sent,t.categories=n.data;case 4:case"end":return e.stop()}}),e)})))()}}},it=rt,at=n("a523"),ot=Object(w["a"])(it,a,o,!1,null,"14dc731b",null),ct=ot.exports;_()(ot,{VContainer:at["a"],VRow:W["a"]});var st=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("v-card",[n("v-list-item",[n("v-list-item-content",[n("v-list-item-title",[t._v("Single-line item")])],1)],1),n("v-list-item",[n("v-list-item-content",[n("v-list-item-title",[t._v("Single-line item")])],1)],1),n("v-list-item",[n("v-list-item-content",[n("v-list-item-title",[t._v("Single-line item")])],1)],1),n("v-list-item",[n("v-list-item-content",[n("v-list-item-title",[t._v("Single-line item")])],1)],1),n("v-list-item",[n("v-list-item-content",[n("v-list-item-title",[t._v("Single-line item")])],1)],1),n("v-list-item",[n("v-list-item-content",[n("v-list-item-title",[t._v("Single-line item")])],1)],1),n("v-list-item",[n("v-list-item-content",[n("v-list-item-title",[t._v("Single-line item")])],1)],1),n("v-list-item",[n("v-list-item-content",[n("v-list-item-title",[t._v("Single-line item")])],1)],1),n("v-list-item",[n("v-list-item-content",[n("v-list-item-title",[t._v("Single-line item")])],1)],1),n("v-list-item",[n("v-list-item-content",[n("v-list-item-title",[t._v("Single-line item")])],1)],1),n("v-list-item",[n("v-list-item-content",[n("v-list-item-title",[t._v("Single-line item")])],1)],1),n("v-list-item",[n("v-list-item-content",[n("v-list-item-title",[t._v("Single-line item")])],1)],1),n("v-list-item",[n("v-list-item-content",[n("v-list-item-title",[t._v("Single-line item")])],1)],1),n("v-list-item",[n("v-list-item-content",[n("v-list-item-title",[t._v("Single-line item")])],1)],1),n("v-list-item",[n("v-list-item-content",[n("v-list-item-title",[t._v("Single-line item")])],1)],1)],1),n("v-footer",{staticStyle:{bottom:"0"},attrs:{block:""}},[n("v-btn",{staticClass:"mt-2",attrs:{block:"",color:"error",dark:"",large:""}},[t._v(" Spiele nochmal ")]),n("v-btn",{staticClass:"mt-2",attrs:{block:"",color:"error",dark:"",large:""}},[t._v(" Neue Kategorie ")])],1)],1)},lt=[],ut={},dt=ut,vt=n("553a"),mt=n("da13"),ft=n("5d23"),gt=Object(w["a"])(dt,st,lt,!1,null,"50eb6f38",null),pt=gt.exports;_()(gt,{VBtn:O["a"],VCard:j["a"],VFooter:vt["a"],VListItem:mt["a"],VListItemContent:ft["a"],VListItemTitle:ft["b"]});var ht=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("Appbar",{attrs:{text:"Neue Kategorie"}}),n("v-text-field",{staticStyle:{height:"10vh"},attrs:{color:"gray",label:"Name deiner Kategorie",required:"",clearable:"",autofocus:""},model:{value:t.newCategoryName,callback:function(e){t.newCategoryName=e},expression:"newCategoryName"}}),n("v-card",{attrs:{"max-width":"100vw",tile:""}},[t._l(t.words,(function(e){return n("v-row",{key:e},[n("v-col",{staticClass:"col-9"},[n("v-list-item",[n("v-list-item-content",[t._v(" "+t._s(e)+" ")])],1)],1),n("v-col",{staticClass:"col-3 centercenter text-center",staticStyle:{"text-align":"center"}},[n("v-btn",{attrs:{icon:"",small:"",fab:""}},[n("v-icon",{attrs:{small:""},on:{click:function(n){return t.delWort(e)}}},[t._v("mdi-close")])],1)],1)],1)})),n("v-dialog",{attrs:{persistent:"","max-width":"600px"},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[n("v-card",[n("v-card-title"),n("v-card-text",[n("v-container",[n("v-row",[n("v-col",{attrs:{cols:"12",sm:"6",md:"4"}},[n("v-text-field",{attrs:{color:"grey",isactive:"true",label:"Neues Wort",required:"",autofocus:""},model:{value:t.newWord,callback:function(e){t.newWord=e},expression:"newWord"}})],1)],1)],1)],1),n("v-card-actions",[n("v-spacer"),n("v-btn",{attrs:{color:"grey darken-1",text:""},on:{click:function(e){t.dialog=!1}}},[t._v(" Close ")]),n("v-btn",{attrs:{color:"gray darken-1",text:""},on:{click:function(e){return t.saveWord()}}},[t._v(" Save ")])],1)],1)],1)],2),n("v-btn",{staticClass:"mt-5",attrs:{block:"",color:"gray",dark:""},on:{click:function(e){t.dialog=!0}}},[n("v-icon",{attrs:{small:""}},[t._v("mdi-plus")])],1),n("v-btn",{staticClass:"mt-2",attrs:{block:"",color:"grey",dark:""},on:{click:function(e){return t.finished()}}},[t._v(" Fertig ")])],1)},bt=[],wt=(n("7db0"),n("c975"),n("a434"),{data:function(){return{words:[],dialog:!1,newWord:"",newCategoryName:""}},components:{Appbar:Q},methods:{saveWord:function(){var t=this,e=this.words.find((function(e){return e==t.newWord}));""!=this.newWord&&null==e&&this.words.push(this.newWord),this.newWord=""},finished:function(){var t=this;return Object(c["a"])(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return console.log("sd"),n={name:t.newCategoryName,words:t.words},e.next=4,l.a.post("http://localhost:3000/categories",n);case 4:history.go(-1);case 5:case"end":return e.stop()}}),e)})))()},delWort:function(t){var e=this.words.indexOf(t);this.words.splice(e,1)}}}),yt=wt,_t=(n("ed08"),n("8654")),Ct=Object(w["a"])(yt,ht,bt,!1,null,"78096f7d",null),xt=Ct.exports;_()(Ct,{VBtn:O["a"],VCard:j["a"],VCardActions:P["a"],VCardText:P["b"],VCardTitle:P["c"],VCol:R["a"],VContainer:at["a"],VDialog:E["a"],VIcon:T["a"],VListItem:mt["a"],VListItemContent:ft["a"],VRow:W["a"],VSpacer:H["a"],VTextField:_t["a"]}),r["a"].use(i["a"]);var St=[{path:"/",name:"Home",component:ct},{path:"/about",name:"About",component:function(){return n.e("about").then(n.bind(null,"f820"))}},{path:"/results",name:"Results",component:pt},{path:"/newCategory",name:"NewCategory",component:xt}],kt=new i["a"]({mode:"history",base:"/",routes:St});e["default"]=kt},ac3a:function(t,e,n){"use strict";n("672d")},c16b:function(t,e,n){},d44d:function(t,e,n){"use strict";n("f3eb")},ed08:function(t,e,n){"use strict";n("c16b")},f3eb:function(t,e,n){}});
//# sourceMappingURL=app.41573048.js.map