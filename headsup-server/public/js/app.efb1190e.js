(function(t){function e(e){for(var r,c,i=e[0],s=e[1],l=e[2],u=0,f=[];u<i.length;u++)c=i[u],Object.prototype.hasOwnProperty.call(a,c)&&a[c]&&f.push(a[c][0]),a[c]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(t[r]=s[r]);d&&d(e);while(f.length)f.shift()();return o.push.apply(o,l||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],r=!0,c=1;c<n.length;c++){var s=n[c];0!==a[s]&&(r=!1)}r&&(o.splice(e--,1),t=i(i.s=n[0]))}return t}var r={},a={app:0},o=[];function c(t){return i.p+"js/"+({about:"about"}[t]||t)+"."+{about:"18642962"}[t]+".js"}function i(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(t){var e=[],n=a[t];if(0!==n)if(n)e.push(n[2]);else{var r=new Promise((function(e,r){n=a[t]=[e,r]}));e.push(n[2]=r);var o,s=document.createElement("script");s.charset="utf-8",s.timeout=120,i.nc&&s.setAttribute("nonce",i.nc),s.src=c(t);var l=new Error;o=function(e){s.onerror=s.onload=null,clearTimeout(u);var n=a[t];if(0!==n){if(n){var r=e&&("load"===e.type?"missing":e.type),o=e&&e.target&&e.target.src;l.message="Loading chunk "+t+" failed.\n("+r+": "+o+")",l.name="ChunkLoadError",l.type=r,l.request=o,n[1](l)}a[t]=void 0}};var u=setTimeout((function(){o({type:"timeout",target:s})}),12e4);s.onerror=s.onload=o,document.head.appendChild(s)}return Promise.all(e)},i.m=t,i.c=r,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)i.d(n,r,function(e){return t[e]}.bind(null,r));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/",i.oe=function(t){throw console.error(t),t};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=e,s=s.slice();for(var u=0;u<s.length;u++)e(s[u]);var d=l;o.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";n("85ec")},"134e":function(t,e,n){},"1e32":function(t,e,n){"use strict";n("dc71")},"32da":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("e623"),n("e379"),n("5dc8"),n("37e1");var r=n("2b0e"),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",{staticClass:"f"},[n("v-main",[n("v-container",[n("router-view")],1)],1)],1)},o=[],c={name:"App",components:{},data:function(){return{}}},i=c,s=(n("034f"),n("2877")),l=n("6544"),u=n.n(l),d=n("7496"),f=n("a523"),h=n("f6c4"),v=Object(s["a"])(i,a,o,!1,null,null,null),g=v.exports;u()(v,{VApp:d["a"],VContainer:f["a"],VMain:h["a"]});var p=n("9483");Object(p["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(t){console.error("Error during service worker registration:",t)}});n("d3b7");var m=n("8c4f"),b=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("Appbar",{attrs:{text:"Kategorien"}}),n("v-container",[n("v-row",[t._l(t.categories,(function(e){return n("Category",{key:e.id,attrs:{category:e}},[t._v(" "+t._s(e)+" ")])})),n("NewCategoryCard"),n("v-btn",{on:{click:function(e){return t.lockscreen()}}},[t._v("CLICK ME")])],2)],1)],1)},w=[],y=(n("99af"),n("96cf"),n("1da1")),x=n("bc3a"),k=n.n(x),C=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-col",{staticClass:"pb-2 col-6"},[n("v-card",{staticClass:"mx-1 my-0 randombg",attrs:{"max-width":"374"},on:{click:function(e){return t.switchtoG(t.category.id)}}},[n("v-img",{staticClass:"white--text align-end",attrs:{height:"25vh",src:"https://cdn.vuetifyjs.com/images/cards/cooking.png"}},[n("v-card-title",{staticStyle:{"word-break":"normal"}},[t._v(t._s(t.category.name))])],1)],1),t.dialog?n("Game",{attrs:{words:t.category.words},on:{closed:function(e){t.dialog=!1}}}):t._e()],1)},_=[],M=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-row",{attrs:{justify:"center",align:"center"}},[n("v-dialog",{attrs:{fullscreen:"","hide-overlay":"",transition:"dialog-bottom-transition"},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[n("v-card",{staticClass:"white--text",staticStyle:{"background-color":"tranparent"}},[n("v-toolbar",{attrs:{dark:"",color:"primary"}},[n("v-btn",{attrs:{icon:"",dark:""},on:{click:function(e){return t.$emit("closed",t.dialog)}}},[n("v-icon",[t._v("mdi-close")])],1)],1),n("div",{staticStyle:{position:"absolute"}},[n("Progress")],1),"G"==t.duringStatus?n("div",{staticClass:"game text-center centercenter",staticStyle:{height:"100vh"}},[n("h1",[t._v(" "+t._s(t.activeWord)+" ")])]):t._e(),"W"==t.duringStatus?n("div",{staticClass:"win text-center centercenter",staticStyle:{height:"100vh"}},[n("v-icon",{staticClass:"iconStyling",attrs:{size:"350",color:"white"}},[t._v("mdi-check")])],1):t._e(),"L"==t.duringStatus?n("div",{staticClass:"lose text-center centercenter",staticStyle:{height:"100vh"}},[n("v-icon",{staticClass:"iconStyling",attrs:{size:"350",color:"white"}},[t._v("mdi-close")])],1):t._e()],1),n("v-btn",{on:{click:function(e){return t.chg("W")}}},[t._v("WIN")]),n("v-btn",{on:{click:function(e){return t.chg("L")}}},[t._v("LOSE")])],1)],1)},V=[],S=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-progress-circular",{attrs:{rotate:90,size:60,width:5,value:t.value,color:"lightgrey"}},[t._v(" "+t._s((t.value/5*3).toFixed(0))+" ")])},O=[],j={data:function(){return{i:0,interval:{},value:100}},beforeDestroy:function(){clearInterval(this.interval)},mounted:function(){var t=this;this.interval=setInterval((function(){if(100===Math.round(t.value,0))return window.location.assign("/results"),t.value=0;t.value+=10/6}),1e3)}},W=j,A=(n("f786"),n("490a")),T=Object(s["a"])(W,S,O,!1,null,"1507204f",null),I=T.exports;u()(T,{VProgressCircular:A["a"]});var E={data:function(){return{dialog:!0,showWin:!1,duringStatus:"G",activeWord:""}},components:{Progress:I},props:{words:{type:Array}},methods:{getRandomInt:function(t){return Math.floor(Math.random()*Math.floor(t))},newWord:function(){this.activeWord=this.wordsArray[this.getRandomInt(this.wordsArray.length)]},chg:function(t){var e=this;setTimeout((function(){return e.clogText()}),1e3),this.duringStatus=t},clogText:function(){this.newWord(),console.log("Back to game"),this.duringStatus="G"},handleOrientationChange:function(){console.log("sdsd");var t=window.screen.orientation.type;"portrait-primary"===t?console.log("PORTRAIT"):"landscape-primary"===t?console.log("LANDSCAPE"):console.log("JWdmkw")}},created:function(){this.dialog=!0,this.wordsArray=this.$props.words,window.screen.orientation.lock("landscape-primary")},mounted:function(){this.newWord(),console.log(this.$props.words)}},N=E,R=(n("8722"),n("8336")),P=n("b0af"),$=n("169a"),B=n("132d"),L=n("0fd9b"),G=n("71d9"),D=Object(s["a"])(N,M,V,!1,null,"14b34798",null),F=D.exports;u()(D,{VBtn:R["a"],VCard:P["a"],VDialog:$["a"],VIcon:B["a"],VRow:L["a"],VToolbar:G["a"]});var z={data:function(){return{dialog:!1,i:0}},components:{Game:F},props:{category:{type:Object}},methods:{switchtoG:function(){console.log("Das Spiel kann starten"),this.dialog=!0},getRandomBG:function(){return"background: linear-gradient(90deg, rgba(".concat(Math.floor(256*Math.random()),",").concat(Math.floor(256*Math.random()),",").concat(Math.floor(256*Math.random()),",1) 0%, rgba(").concat(Math.floor(256*Math.random()),",").concat(Math.floor(256*Math.random()),",").concat(Math.floor(256*Math.random()),",1) ").concat(Math.random(50),"%,rgba(").concat(Math.floor(256*Math.random()),",").concat(Math.floor(256*Math.random()),",").concat(Math.floor(256*Math.random()),",1) 100%)")}},created:function(){}},q=z,K=(n("cdd3"),n("99d9")),J=n("62ad"),H=n("adda"),Q=Object(s["a"])(q,C,_,!1,null,"77715e1f",null),U=Q.exports;u()(Q,{VCard:P["a"],VCardTitle:K["c"],VCol:J["a"],VImg:H["a"]});var X=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-app-bar",{attrs:{app:"",color:"gray",dark:""}},[t._v(" "+t._s(t.text)+" "),r("v-spacer"),r("v-dialog",{attrs:{persistent:"","max-width":"290"},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on,a=e.attrs;return[r("v-icon",t._g(t._b({staticClass:"mr-2",staticStyle:{color:"gray"},on:{click:function(e){return t.func()}}},"v-icon",a,!1),n),[t._v("mdi-information-outline")])]}}]),model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[r("v-card",[r("v-card-title",{staticClass:"headline"},[t._v(" Impressum ")]),r("v-card-text",[t._v("Fatima Tuana Sirinyurt"),r("br"),t._v("© HTL Wien West, 2021 ")]),r("v-card-actions",[r("v-spacer"),r("v-btn",{attrs:{color:"gray darken-1",text:""},on:{click:function(e){t.dialog=!1}}},[t._v(" Schließen ")])],1)],1)],1),r("v-img",{attrs:{src:n("8a47"),"min-width":30,"max-width":30}})],1)},Y=[],Z={props:{text:{type:String}},data:function(){return{dialog:!1}},methods:{func:function(){console.log("Fatima Tuana Sirinyurt")}}},tt=Z,et=n("40dc"),nt=n("2fa4"),rt=Object(s["a"])(tt,X,Y,!1,null,"2a406d10",null),at=rt.exports;u()(rt,{VAppBar:et["a"],VBtn:R["a"],VCard:P["a"],VCardActions:K["a"],VCardText:K["b"],VCardTitle:K["c"],VDialog:$["a"],VIcon:B["a"],VImg:H["a"],VSpacer:nt["a"]});var ot=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-col",{staticClass:"pb-2 col-6"},[n("v-card",{staticClass:"mx-1 my-0",attrs:{to:"/newCategory","max-width":"374"}},[n("v-sheet",{staticClass:"mx-auto ",staticStyle:{border:"5px dashed lightgray"},attrs:{rounded:"true",justify:"center",align:"center",height:"25vh"}},[n("v-icon",{staticStyle:{color:"'gray'",height:"100%"},attrs:{medium:""}},[t._v("mdi-plus")])],1)],1)],1)},ct=[],it={},st=it,lt=n("8dd9"),ut=Object(s["a"])(st,ot,ct,!1,null,"8ff16bf8",null),dt=ut.exports;u()(ut,{VCard:P["a"],VCol:J["a"],VIcon:B["a"],VSheet:lt["a"]});var ft={data:function(){return{categories:[]}},components:{Category:U,Appbar:at,NewCategoryCard:dt},created:function(){this.getData(),history.pushState({},"","/results"),history.pushState({},"","/newCategory"),history.pushState({},"","/")},methods:{getData:function(){var t=this;return Object(y["a"])(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,k.a.get("http://localhost:3000/categories");case 2:n=e.sent,t.categories=n.data;case 4:case"end":return e.stop()}}),e)})))()},getRandomBG:function(){return"90deg, rgba(".concat(Math.floor(256*Math.random()),",").concat(Math.floor(256*Math.random()),",").concat(Math.floor(256*Math.random()),",1) 0%,\n             rgba(").concat(Math.floor(256*Math.random()),",").concat(Math.floor(256*Math.random()),",").concat(Math.floor(256*Math.random()),",1) ").concat(Math.random(50),"%, \n             rgba(").concat(Math.floor(256*Math.random()),",").concat(Math.floor(256*Math.random()),",").concat(Math.floor(256*Math.random()),",1) 100%")},lockscreen:function(){return Object(y["a"])(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(e=(screen.orientation||{}).type||screen.mozOrientation||screen.msOrientation,"landscape-primary"!==e){t.next=5;break}console.log("That looks good."),t.next=16;break;case 5:if("landscape-secondary"!==e){t.next=9;break}console.log("Mmmh... the screen is upside down!"),t.next=16;break;case 9:if("portrait-secondary"!==e&&"portrait-primary"!==e){t.next=15;break}return console.log("Mmmh... you should rotate your device to landscape"),t.next=13,window.screen.orientation.lock("landscape-primary");case 13:t.next=16;break;case 15:void 0===e&&console.log("The orientation API isn't supported in this browser :(");case 16:case"end":return t.stop()}}),t)})))()}}},ht=ft,vt=(n("d423"),Object(s["a"])(ht,b,w,!1,null,null,null)),gt=vt.exports;u()(vt,{VBtn:R["a"],VContainer:f["a"],VRow:L["a"]});var pt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticStyle:{height:"100vh","background-color":"rgb(20,90,250)"}},[n("v-btn",{staticClass:"mt-2 mb-2",attrs:{fab:"",color:"error",dark:""}},[n("v-icon",[t._v("mdi-arrow-left-thick")])],1),n("div",{staticClass:"mt-10",attrs:{align:"center"}},[n("span",{staticClass:"font-weight-bold",staticStyle:{"font-size":"250px",color:"white"}},[t._v("1")]),n("v-card"),n("div",{staticStyle:{"margin-top":"10vh"}},[n("v-btn",{staticClass:"mt-2",attrs:{fab:"",color:"error",dark:"","x-large":""}},[n("v-icon",[t._v("mdi-rotate-right")])],1),n("br")],1)],1)],1)},mt=[],bt={},wt=bt,yt=Object(s["a"])(wt,pt,mt,!1,null,"22afb5dc",null),xt=yt.exports;u()(yt,{VBtn:R["a"],VCard:P["a"],VIcon:B["a"]});var kt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("Appbar",{attrs:{text:"Neue Kategorie"}}),n("v-text-field",{staticStyle:{height:"10vh"},attrs:{color:"gray",label:"Name deiner Kategorie",required:"",clearable:"",autofocus:""},model:{value:t.newCategoryName,callback:function(e){t.newCategoryName=e},expression:"newCategoryName"}}),n("v-card",{attrs:{"max-width":"100vw",tile:""}},[t._l(t.words,(function(e){return n("v-row",{key:e},[n("v-col",{staticClass:"col-9"},[n("v-list-item",[n("v-list-item-content",[t._v(" "+t._s(e)+" ")])],1)],1),n("v-col",{staticClass:"col-3 centercenter text-center",staticStyle:{"text-align":"center"}},[n("v-btn",{attrs:{icon:"",small:"",fab:""}},[n("v-icon",{attrs:{small:""},on:{click:function(n){return t.delWort(e)}}},[t._v("mdi-close")])],1)],1)],1)})),n("v-dialog",{attrs:{persistent:"","max-width":"600px"},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[n("v-card",[n("v-card-title"),n("v-card-text",[n("v-container",[n("v-row",[n("v-col",{attrs:{cols:"12",sm:"6",md:"4"}},[n("v-text-field",{attrs:{color:"grey",isactive:"true",label:"Neues Wort",required:"",autofocus:""},model:{value:t.newWord,callback:function(e){t.newWord=e},expression:"newWord"}})],1)],1)],1)],1),n("v-card-actions",[n("v-spacer"),n("v-btn",{attrs:{color:"grey darken-1",text:""},on:{click:function(e){t.dialog=!1}}},[t._v(" Close ")]),n("v-btn",{attrs:{color:"gray darken-1",text:""},on:{click:function(e){return t.saveWord()}}},[t._v(" Save ")])],1)],1)],1)],2),n("v-btn",{staticClass:"mt-5",attrs:{block:"",color:"gray",dark:""},on:{click:function(e){t.dialog=!0}}},[n("v-icon",{attrs:{small:""}},[t._v("mdi-plus")])],1),n("v-btn",{staticClass:"mt-2",attrs:{block:"",color:"grey",dark:""},on:{click:function(e){return t.finished()}}},[t._v(" Fertig ")])],1)},Ct=[],_t=(n("7db0"),n("c975"),n("a434"),{data:function(){return{words:[],dialog:!1,newWord:"",newCategoryName:""}},components:{Appbar:at},methods:{saveWord:function(){var t=this,e=this.words.find((function(e){return e==t.newWord}));""!=this.newWord&&null==e&&this.words.push(this.newWord),this.newWord=""},finished:function(){var t=this;return Object(y["a"])(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return console.log("sd"),n={name:t.newCategoryName,words:t.words},e.next=4,k.a.post("http://localhost:3000/categories",n);case 4:history.go(-1);case 5:case"end":return e.stop()}}),e)})))()},delWort:function(t){var e=this.words.indexOf(t);this.words.splice(e,1)}}}),Mt=_t,Vt=(n("1e32"),n("da13")),St=n("5d23"),Ot=n("8654"),jt=Object(s["a"])(Mt,kt,Ct,!1,null,"2e891bcf",null),Wt=jt.exports;u()(jt,{VBtn:R["a"],VCard:P["a"],VCardActions:K["a"],VCardText:K["b"],VCardTitle:K["c"],VCol:J["a"],VContainer:f["a"],VDialog:$["a"],VIcon:B["a"],VListItem:Vt["a"],VListItemContent:St["a"],VRow:L["a"],VSpacer:nt["a"],VTextField:Ot["a"]}),r["a"].use(m["a"]);var At=[{path:"/",name:"Home",component:gt},{path:"/about",name:"About",component:function(){return n.e("about").then(n.bind(null,"f820"))}},{path:"/results",name:"Results",component:xt},{path:"/newCategory",name:"NewCategory",component:Wt}],Tt=new m["a"]({mode:"history",base:"/",routes:At}),It=Tt,Et=n("f309");r["a"].use(Et["a"]);var Nt=new Et["a"]({});r["a"].config.productionTip=!1,new r["a"]({router:It,vuetify:Nt,render:function(t){return t(g)}}).$mount("#app")},"85ec":function(t,e,n){},8722:function(t,e,n){"use strict";n("134e")},"8a47":function(t,e,n){t.exports=n.p+"img/speak-up.afa8e7ea.png"},b9b0:function(t,e,n){},cdd3:function(t,e,n){"use strict";n("f898")},d423:function(t,e,n){"use strict";n("b9b0")},dc71:function(t,e,n){},f786:function(t,e,n){"use strict";n("32da")},f898:function(t,e,n){}});
//# sourceMappingURL=app.efb1190e.js.map