(function(t){function e(e){for(var r,i,s=e[0],c=e[1],l=e[2],d=0,v=[];d<s.length;d++)i=s[d],Object.prototype.hasOwnProperty.call(a,i)&&a[i]&&v.push(a[i][0]),a[i]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(t[r]=c[r]);u&&u(e);while(v.length)v.shift()();return o.push.apply(o,l||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],r=!0,s=1;s<n.length;s++){var c=n[s];0!==a[c]&&(r=!1)}r&&(o.splice(e--,1),t=i(i.s=n[0]))}return t}var r={},a={app:0},o=[];function i(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=t,i.c=r,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)i.d(n,r,function(e){return t[e]}.bind(null,r));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=e,s=s.slice();for(var l=0;l<s.length;l++)e(s[l]);var u=c;o.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";n("85ec")},"0b8c":function(t,e,n){"use strict";n("d3f1")},2438:function(t,e,n){"use strict";n("4e26")},"2a2a":function(t,e,n){},"3b68":function(t,e,n){"use strict";n("6135")},"4e26":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("e623"),n("e379"),n("5dc8"),n("37e1");var r=n("2b0e"),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",[n("v-main",[n("router-view")],1)],1)},o=[],i={name:"App",components:{},data:function(){return{}}},s=i,c=(n("034f"),n("2877")),l=n("6544"),u=n.n(l),d=n("7496"),v=n("f6c4"),f=Object(c["a"])(s,a,o,!1,null,null,null),g=f.exports;u()(f,{VApp:d["a"],VMain:v["a"]});var m=n("9483");Object(m["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(t){console.error("Error during service worker registration:",t)}});var h=n("8c4f"),p=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",[n("Appbar",{attrs:{text:"Kategorien"}}),n("v-btn",{attrs:{to:"/permission"}},[t._v("permission")]),n("v-container",[n("v-row",[t._l(t.categories,(function(e){return n("Category",{key:e.id,attrs:{category:e}},[t._v(" "+t._s(e)+" ")])})),n("NewCategoryCard")],2)],1)],1)},w=[],b=(n("96cf"),n("1da1")),y=n("bc3a"),x=n.n(y),_=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-col",{staticClass:"px-2 py-2 col-6 col-sm-4",staticStyle:{"object-fit":"cover"}},[n("v-card",{staticClass:"mx-1 my-0",staticStyle:{"background-color":"transparent"},on:{click:function(e){return t.switchtoG(t.category.id)}}},[n("v-img",{staticClass:"white--text align-end",attrs:{"max-height":"45vh",src:"/img/categories/"+t.category.pic+".png"}},[n("v-card-title",{staticStyle:{"word-break":"normal","background-color":"#3B3635"}},[t._v(t._s(t.category.name))])],1)],1),t.dialog?n("Game",{attrs:{words:t.category.words},on:{closed:function(e){t.dialog=!1}}}):t._e()],1)},C=[],k=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-row",{attrs:{justify:"center",align:"center"}},[n("v-dialog",{attrs:{fullscreen:"","hide-overlay":"",transition:"dialog-bottom-transition"},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[n("v-card",{staticClass:"white--text",staticStyle:{"background-color":"tranparent"}},[n("v-toolbar",{attrs:{dark:"",color:"primary"}},[n("v-btn",{attrs:{icon:"",dark:""},on:{click:function(e){return t.$emit("closed",t.dialog)}}},[n("v-icon",[t._v("mdi-close")])],1)],1),n("div",{staticStyle:{position:"absolute"}},[n("Progress",{on:{"time-up":function(e){return t.goToResult()}}})],1),"G"==t.duringStatus?n("div",{staticClass:"game text-center centercenter",staticStyle:{height:"100vh"}},[n("h1",[t._v(" "+t._s(t.activeWord)+" ")])]):t._e(),"W"==t.duringStatus?n("div",{staticClass:"win text-center centercenter",staticStyle:{height:"100vh"}},[n("v-icon",{staticClass:"iconStyling",attrs:{size:"350",color:"white"}},[t._v("mdi-check")])],1):t._e(),"L"==t.duringStatus?n("div",{staticClass:"lose text-center centercenter",staticStyle:{height:"100vh"}},[n("v-icon",{staticClass:"iconStyling",attrs:{size:"350",color:"white"}},[t._v("mdi-close")])],1):t._e()],1)],1)],1)},S=[],W=(n("ac1f"),n("5319"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-progress-circular",{attrs:{rotate:90,size:60,width:5,value:t.value,color:"lightgrey"}},[t._v(" "+t._s((t.value/5*3).toFixed(0))+" ")])}),V=[],O={data:function(){return{i:0,interval:{},value:100}},beforeDestroy:function(){clearInterval(this.interval)},mounted:function(){var t=this;setTimeout((function(){t.value=0,t.interval=setInterval((function(){if(100===Math.round(t.value,0))return t.$emit("time-up"),t.value=0;t.value+=10/6}),1e3)}),3e3)}},j=O,D=(n("0b8c"),n("490a")),T=Object(c["a"])(j,W,V,!1,null,"1e4883f4",null),R=T.exports;u()(T,{VProgressCircular:D["a"]});var E={data:function(){return{dialog:!0,showWin:!1,duringStatus:"G",i:1,activeWord:"",game:{losesWords:[],winsWords:[]},before:"G"}},components:{Progress:R},props:{words:{type:Array}},methods:{getRandomInt:function(t){return Math.floor(Math.random()*Math.floor(t))},newWord:function(){this.activeWord=this.wordsArray[this.getRandomInt(this.wordsArray.length)]},chg:function(t){var e=this;setTimeout((function(){return e.clogText()}),1e3),this.duringStatus=t},clogText:function(){this.newWord(),this.duringStatus="G"},handleOrientation:function(t){var e=screen.orientation.type;console.log("Fullscreen and locked to ".concat(e,". Ready!"));var n=t.gamma;n<=60&&n>=0?(this.duringStatus="W",this.before="W"):n>=-60&&n<=0?(this.duringStatus="L",this.before="L"):("G"!=this.duringStatus&&("L"==this.before?this.game.losesWords.push(this.activeWord):"W"==this.before&&this.game.winsWords.push(this.activeWord),this.newWord()),this.before=this.duringStatus,this.duringStatus="G")},goToResult:function(){this.game.words=this.$props.words,x.a.post("/game",this.game),this.$emit("gameIsFinished"),this.dialog=!1,this.$router.replace("/results")},startGame:function(){this.newWord(),window.addEventListener("deviceorientation",this.handleOrientation,!0)}},created:function(){var t=this;return Object(b["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:t.game.losesWords=[],t.game.winsWords=[],t.dialog=!0,t.wordsArray=t.$props.words,t.game.words=t.wordsArray,window.DeviceOrientationEvent&&(alert("deviceorientation gibts"),setTimeout((function(){return t.startGame()}),3e3));case 6:case"end":return e.stop()}}),e)})))()},mounted:function(){this.activeWord="Mach dich bereit!",window.screen.orientation.lock("landscape-primary")}},G=E,A=(n("3b68"),n("8336")),$=n("b0af"),I=n("169a"),N=n("132d"),P=n("0fd9b"),B=n("71d9"),L=Object(c["a"])(G,k,S,!1,null,"4bb10b79",null),M=L.exports;u()(L,{VBtn:A["a"],VCard:$["a"],VDialog:I["a"],VIcon:N["a"],VRow:P["a"],VToolbar:B["a"]});var F={data:function(){return{dialog:!1,i:0}},components:{Game:M},props:{category:{type:Object}},methods:{switchtoG:function(){console.log("Das Spiel kann starten"),this.dialog=!0}},created:function(){}},q=F,z=n("99d9"),J=n("62ad"),K=n("adda"),H=Object(c["a"])(q,_,C,!1,null,"ef79fa14",null),Q=H.exports;u()(H,{VCard:$["a"],VCardTitle:z["c"],VCol:J["a"],VImg:K["a"]});var U=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-app-bar",{staticClass:"bg-primary",attrs:{app:"",dark:""}},[t._v(" "+t._s(t.text)+" "),t.text?t._e():r("v-btn",{attrs:{to:"/",medium:"",icon:""}},[r("v-icon",[t._v("mdi-arrow-left-thick")])],1),r("v-spacer"),r("v-dialog",{attrs:{persistent:"","max-width":"290"},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on,a=e.attrs;return[r("v-icon",t._g(t._b({staticClass:"mr-2",staticStyle:{color:"gray"},on:{click:function(e){return t.func()}}},"v-icon",a,!1),n),[t._v("mdi-information-outline")])]}}]),model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[r("v-card",[r("v-card-title",{staticClass:"headline"},[t._v(" Impressum ")]),r("v-card-text",[t._v("Fatima Tuana Sirinyurt"),r("br"),t._v("© HTL Wien West, 2021 ")]),r("v-card-actions",[r("v-spacer"),r("v-btn",{attrs:{color:"gray darken-1",text:""},on:{click:function(e){t.dialog=!1}}},[t._v(" Schließen ")])],1)],1)],1),r("v-img",{attrs:{src:n("8a47"),"min-width":30,"max-width":30}})],1)},X=[],Y={props:{text:{type:String}},data:function(){return{dialog:!1}},methods:{func:function(){console.log("Fatima Tuana Sirinyurt")}}},Z=Y,tt=n("40dc"),et=n("2fa4"),nt=Object(c["a"])(Z,U,X,!1,null,"daac88f4",null),rt=nt.exports;u()(nt,{VAppBar:tt["a"],VBtn:A["a"],VCard:$["a"],VCardActions:z["a"],VCardText:z["b"],VCardTitle:z["c"],VDialog:I["a"],VIcon:N["a"],VImg:K["a"],VSpacer:et["a"]});var at=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-col",{staticClass:"px-2 py-2 col-6 col-sm-4",staticStyle:{"object-fit":"cover"}},[n("v-card",{staticClass:"mx-1 my-0 ",staticStyle:{height:"100%"},attrs:{to:"/newCategory"}},[n("v-sheet",{staticClass:"mx-auto",staticStyle:{border:"5px dashed #D9D9D9","background-color":"#272727",height:"100%"},attrs:{"max-height":"45vh",rounded:"true",justify:"center",align:"center"}},[n("v-icon",{staticStyle:{color:"#D9D9D9",height:"100%"},attrs:{medium:""}},[t._v("mdi-plus")])],1)],1)],1)},ot=[],it={},st=it,ct=n("8dd9"),lt=Object(c["a"])(st,at,ot,!1,null,null,null),ut=lt.exports;u()(lt,{VCard:$["a"],VCol:J["a"],VIcon:N["a"],VSheet:ct["a"]});var dt={data:function(){return{categories:[]}},components:{Category:Q,Appbar:rt,NewCategoryCard:ut},created:function(){this.getData(),history.pushState({},"","/results"),history.pushState({},"","/newCategory"),history.pushState({},"","/")},methods:{getData:function(){var t=this;return Object(b["a"])(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,x.a.get("/categories");case 2:n=e.sent,t.categories=n.data;case 4:case"end":return e.stop()}}),e)})))()}}},vt=dt,ft=(n("d18b"),n("a523")),gt=Object(c["a"])(vt,p,w,!1,null,null,null),mt=gt.exports;u()(gt,{VBtn:A["a"],VContainer:ft["a"],VRow:P["a"]});var ht=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticStyle:{height:"100%"}},[t.dialog?n("Game",{attrs:{words:t.words},on:{closed:function(e){t.dialog=!1},gameIsFinished:function(e){return t.re()}}}):t._e(),n("v-btn",{staticClass:"mt-2 mb-2 ml-2 bg-light",attrs:{to:"/",fab:"",dark:""},on:{click:function(e){return t.getGameData()}}},[n("v-icon",[t._v("mdi-arrow-left-thick")])],1),n("div",{staticClass:"mt-10",attrs:{align:"center"}},[n("span",{staticClass:"font-weight-bold",staticStyle:{"font-size":"250px",color:"white"}},[t._v(t._s(t.winsWordscount))]),n("br"),n("v-container",[n("span",{staticStyle:{color:"#777777"}},[t._v(t._s(t.winsWords))]),t._v(" "),n("p",{staticStyle:{color:"#444444"}},[t._v(t._s(t.losesWords))])]),n("v-card"),n("div",{staticStyle:{"margin-bottom":"5vh"}},[n("v-btn",{staticClass:" bg-m",staticStyle:{"background-color":"#444444"},attrs:{fab:"",dark:"","x-large":""},on:{click:function(e){t.dialog=!t.dialog}}},[n("v-icon",[t._v("mdi-rotate-right ")])],1),n("br")],1)],1)],1)},pt=[],wt=(n("99af"),n("a15b"),{data:function(){return{game:{},words:[],winsWordscount:0,winsWords:[],losesWords:[],dialog:!1}},components:{Game:M},methods:{getGameData:function(){var t=this;return Object(b["a"])(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,x.a.get("/game");case 2:return n=e.sent,e.next=5,n.data;case 5:t.game=e.sent,t.words=t.game.losesWords.concat(t.game.winsWords),t.winsWordscount=t.game.winsWords.length,t.winsWords=t.game.winsWords.join(" - "),t.losesWords=t.game.losesWords.join(" - ");case 10:case"end":return e.stop()}}),e)})))()},re:function(){var t=this;return Object(b["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.getGameData();case 2:case"end":return e.stop()}}),e)})))()}},mounted:function(){var t=this;return Object(b["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.getGameData();case 2:case"end":return e.stop()}}),e)})))()}}),bt=wt,yt=(n("59c5"),Object(c["a"])(bt,ht,pt,!1,null,null,null)),xt=yt.exports;u()(yt,{VBtn:A["a"],VCard:$["a"],VContainer:ft["a"],VIcon:N["a"]});var _t=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",{staticClass:"m-0",staticStyle:{height:"100%",position:"relative","background-color":"white"}},[n("Appbar"),n("v-text-field",{attrs:{color:"gray",label:"Name deiner Kategorie",required:"",clearable:"",autofocus:""},model:{value:t.newCategoryName,callback:function(e){t.newCategoryName=e},expression:"newCategoryName"}}),n("v-card",{attrs:{"max-width":"100%",tile:""}},[n("v-list",{directives:[{name:"show",rawName:"v-show",value:t.words.length>0,expression:"words.length > 0 ? true : false"}],staticStyle:{"max-height":"70vh","overflow-y":"auto"}},t._l(t.words,(function(e){return n("v-row",{key:e,staticClass:"mx-1 my-1"},[n("v-col",{staticClass:"col-9 px-0 py-0"},[n("v-list-item",[n("v-list-item-content",[t._v(" "+t._s(e)+" ")])],1)],1),n("v-col",{staticClass:"col-3 centercenter text-center px-1 py-1",staticStyle:{"text-align":"center"}},[n("v-btn",{attrs:{icon:"",small:"",fab:""}},[n("v-icon",{attrs:{small:""},on:{click:function(n){return t.delWort(e)}}},[t._v("mdi-close")])],1)],1)],1)})),1),n("v-dialog",{attrs:{persistent:"","max-width":"600px"},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[n("v-card",[n("v-card-title"),n("v-card-text",[n("v-container",[n("v-row",[n("v-col",{attrs:{cols:"12",sm:"6",md:"4"}},[n("v-text-field",{attrs:{color:"grey",isactive:"true",label:"Neues Wort",required:"",autofocus:""},model:{value:t.newWord,callback:function(e){t.newWord=e},expression:"newWord"}})],1)],1)],1)],1),n("v-card-actions",[n("v-btn",{attrs:{color:"grey darken-1",text:"",fab:""},on:{click:function(e){t.dialog=!1}}},[n("v-icon",[t._v("mdi-close")])],1),n("v-btn",{attrs:{color:"gray darken-1",text:"",fab:""},on:{click:function(e){return t.saveWord()}}},[n("v-icon",[t._v("mdi-check")])],1)],1)],1)],1)],1),n("v-btn",{staticClass:"mt-5 btnBottom",staticStyle:{right:"3vw"},attrs:{fab:"","x-large":"",color:"gray",dark:""},on:{click:function(e){t.dialog=!0}}},[n("v-icon",{attrs:{small:""}},[t._v("mdi-plus")])],1),n("v-btn",{staticClass:"mt-2 btnBottom",attrs:{fab:"",color:"grey",dark:""},on:{click:function(e){return t.finished()}}},[n("v-icon",{attrs:{small:""}},[t._v("mdi-check")])],1)],1)},Ct=[],kt=(n("7db0"),n("c975"),n("a434"),{data:function(){return{words:[],dialog:!1,newWord:"",newCategoryName:""}},components:{Appbar:rt},methods:{saveWord:function(){var t=this,e=this.words.find((function(e){return e==t.newWord}));""!=this.newWord&&null==e&&this.words.push(this.newWord),this.newWord=""},finished:function(){var t=this;return Object(b["a"])(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n={name:t.newCategoryName,words:t.words},e.next=3,x.a.post("/categories",n);case 3:history.go(-1);case 4:case"end":return e.stop()}}),e)})))()},delWort:function(t){var e=this.words.indexOf(t);this.words.splice(e,1)}}}),St=kt,Wt=(n("2438"),n("8860")),Vt=n("da13"),Ot=n("5d23"),jt=n("8654"),Dt=Object(c["a"])(St,_t,Ct,!1,null,"21a65207",null),Tt=Dt.exports;u()(Dt,{VBtn:A["a"],VCard:$["a"],VCardActions:z["a"],VCardText:z["b"],VCardTitle:z["c"],VCol:J["a"],VContainer:ft["a"],VDialog:I["a"],VIcon:N["a"],VList:Wt["a"],VListItem:Vt["a"],VListItemContent:Ot["a"],VRow:P["a"],VTextField:jt["a"]});var Rt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("v-btn",{attrs:{to:"/"}},[t._v(" Back ")]),n("v-btn",{on:{click:function(e){return t.requestT()}}},[t._v("Permission")])],1)},Et=[],Gt={methods:{requestT:function(){"undefined"!==typeof DeviceOrientationEvent&&"function"===typeof DeviceOrientationEvent.requestPermission?(alert("enter"),DeviceOrientationEvent.requestPermission().then((function(t){alert("resp"+t),"granted"==t&&window.addEventListener("devicemotion",(function(t){console.log(t)}))})).catch(console.error)):alert("DeviceOrientationEvent is not defined")}}},At=Gt,$t=Object(c["a"])(At,Rt,Et,!1,null,"913b5b08",null),It=$t.exports;u()($t,{VBtn:A["a"]}),r["a"].use(h["a"]);var Nt=[{path:"/",name:"Overview",component:mt},{path:"/results",name:"Results",component:xt},{path:"/newCategory",name:"NewCategory",component:Tt},{path:"/permission",name:"Permission",component:It}],Pt=new h["a"]({mode:"history",base:"/",routes:Nt}),Bt=Pt,Lt=n("f309");r["a"].use(Lt["a"]);var Mt=new Lt["a"]({});r["a"].config.productionTip=!1,new r["a"]({router:Bt,vuetify:Mt,render:function(t){return t(g)}}).$mount("#app")},"59c5":function(t,e,n){"use strict";n("9029")},6135:function(t,e,n){},"85ec":function(t,e,n){},"8a47":function(t,e,n){t.exports=n.p+"img/speak-up.afa8e7ea.png"},9029:function(t,e,n){},d18b:function(t,e,n){"use strict";n("2a2a")},d3f1:function(t,e,n){}});