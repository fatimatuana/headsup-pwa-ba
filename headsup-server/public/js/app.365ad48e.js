(function(t){function e(e){for(var n,i,s=e[0],c=e[1],l=e[2],d=0,v=[];d<s.length;d++)i=s[d],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&v.push(r[i][0]),r[i]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);u&&u(e);while(v.length)v.shift()();return o.push.apply(o,l||[]),a()}function a(){for(var t,e=0;e<o.length;e++){for(var a=o[e],n=!0,s=1;s<a.length;s++){var c=a[s];0!==r[c]&&(n=!1)}n&&(o.splice(e--,1),t=i(i.s=a[0]))}return t}var n={},r={app:0},o=[];function i(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.m=t,i.c=n,i.d=function(t,e,a){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)i.d(a,n,function(e){return t[e]}.bind(null,n));return a},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=e,s=s.slice();for(var l=0;l<s.length;l++)e(s[l]);var u=c;o.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"034f":function(t,e,a){"use strict";a("85ec")},"0b8c":function(t,e,a){"use strict";a("d3f1")},"2a2a":function(t,e,a){},"56d7":function(t,e,a){"use strict";a.r(e);a("e623"),a("e379"),a("5dc8"),a("37e1");var n=a("2b0e"),r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",[a("v-main",[a("router-view")],1)],1)},o=[],i={name:"App",components:{},data:function(){return{}}},s=i,c=(a("034f"),a("2877")),l=a("6544"),u=a.n(l),d=a("7496"),v=a("f6c4"),f=Object(c["a"])(s,r,o,!1,null,null,null),g=f.exports;u()(f,{VApp:d["a"],VMain:v["a"]});var m=a("9483");Object(m["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(t){console.error("Error during service worker registration:",t)}});var h=a("8c4f"),p=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",[a("Appbar",{attrs:{text:"Kategorien"}}),a("v-btn",{attrs:{to:"/permission"}},[t._v("permission")]),a("v-container",[a("v-row",[t._l(t.categories,(function(e){return a("Category",{key:e.id,attrs:{category:e}},[t._v(" "+t._s(e)+" ")])})),a("NewCategoryCard")],2)],1)],1)},w=[],b=(a("96cf"),a("1da1")),y=a("bc3a"),x=a.n(y),_=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-col",{staticClass:"px-2 py-2 col-6 col-sm-4",staticStyle:{"object-fit":"cover"}},[a("v-card",{staticClass:"mx-1 my-0",staticStyle:{"background-color":"transparent"},on:{click:function(e){return t.switchtoG(t.category.id)}}},[a("v-img",{staticClass:"white--text align-end",attrs:{"max-height":"45vh",src:"/img/categories/"+t.category.pic+".png"}},[a("v-card-title",{staticStyle:{"word-break":"normal","background-color":"#3B3635"}},[t._v(t._s(t.category.name))])],1)],1),t.dialog?a("Game",{attrs:{words:t.category.words},on:{closed:function(e){t.dialog=!1}}}):t._e()],1)},C=[],k=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-row",{attrs:{justify:"center",align:"center"}},[a("v-dialog",{attrs:{fullscreen:"","hide-overlay":"",transition:"dialog-bottom-transition"},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[a("v-card",{staticClass:"white--text",staticStyle:{"background-color":"tranparent"}},[a("v-toolbar",{attrs:{dark:"",color:"primary"}},[a("v-btn",{attrs:{icon:"",dark:""},on:{click:function(e){return t.$emit("closed",t.dialog)}}},[a("v-icon",[t._v("mdi-close")])],1)],1),a("div",{staticStyle:{position:"absolute"}},[a("Progress",{on:{"time-up":function(e){return t.goToResult()}}})],1),"G"==t.duringStatus?a("div",{staticClass:"game text-center centercenter",staticStyle:{height:"100vh"}},[a("h1",[t._v(" "+t._s(t.activeWord)+" ")])]):t._e(),"W"==t.duringStatus?a("div",{staticClass:"win text-center centercenter",staticStyle:{height:"100vh"}},[a("v-icon",{staticClass:"iconStyling",attrs:{size:"350",color:"white"}},[t._v("mdi-check")])],1):t._e(),"L"==t.duringStatus?a("div",{staticClass:"lose text-center centercenter",staticStyle:{height:"100vh"}},[a("v-icon",{staticClass:"iconStyling",attrs:{size:"350",color:"white"}},[t._v("mdi-close")])],1):t._e()],1)],1)],1)},S=[],W=(a("ac1f"),a("5319"),function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-progress-circular",{attrs:{rotate:90,size:60,width:5,value:t.value,color:"lightgrey"}},[t._v(" "+t._s((t.value/5*3).toFixed(0))+" ")])}),V=[],O={data:function(){return{i:0,interval:{},value:100}},beforeDestroy:function(){clearInterval(this.interval)},mounted:function(){var t=this;setTimeout((function(){t.value=0,t.interval=setInterval((function(){if(100===Math.round(t.value,0))return t.$emit("time-up"),t.value=0;t.value+=10/6}),1e3)}),3e3)}},j=O,D=(a("0b8c"),a("490a")),T=Object(c["a"])(j,W,V,!1,null,"1e4883f4",null),G=T.exports;u()(T,{VProgressCircular:D["a"]});var R={data:function(){return{dialog:!0,showWin:!1,duringStatus:"G",i:1,activeWord:"",game:{losesWords:[],winsWords:[]},before:"G"}},components:{Progress:G},props:{words:{type:Array}},methods:{getRandomInt:function(t){return Math.floor(Math.random()*Math.floor(t))},newWord:function(){this.activeWord=this.wordsArray[this.getRandomInt(this.wordsArray.length)]},chg:function(t){var e=this;setTimeout((function(){return e.clogText()}),1e3),this.duringStatus=t},clogText:function(){this.newWord(),console.log("Back to game"),this.duringStatus="G"},handleOrientation:function(t){1==this.i&&(alert("Handle ori"),alert("alpha"+t.alpha+"gamme: "+t.gammar),this.i+=1);var e=screen.orientation.type;console.log("Fullscreen and locked to ".concat(e,". Ready!"));var a=t.alpha,n=t.gamma;2==this.i&&(alert("alpha: "+t.alpha+"gamma: "+t.gamma),this.i+=1),alert("alpha: "+t.alpha+"gamma: "+t.gamma),n>=-60&&n<=0&&a<=0?(this.duringStatus="W",this.before="W",3==this.i&&(alert("alpha: "+t.alpha+"gamma: "+t.gamma),this.i+=1)):n>=-60&&n<=0&&a>=0?(this.duringStatus="L",this.before="L"):("G"!=this.duringStatus&&("L"==this.before?this.game.losesWords.push(this.activeWord):"W"==this.before&&this.game.winsWords.push(this.activeWord),this.newWord()),this.before=this.duringStatus,this.duringStatus="G",this.activeWord="Gamma "+n+"Alpha"+a)},goToResult:function(){this.game.words=this.$props.words,x.a.post("/game",this.game),this.$emit("gameIsFinished"),this.dialog=!1,this.$router.replace("/results")},startGame:function(){this.newWord(),window.addEventListener("deviceorientation",this.handleOrientation,!0)}},created:function(){var t=this;return Object(b["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:t.game.losesWords=[],t.game.winsWords=[],t.dialog=!0,t.wordsArray=t.$props.words,t.game.words=t.wordsArray,window.DeviceOrientationEvent&&(alert("deviceorientation gibts"),setTimeout((function(){return t.startGame()}),3e3));case 6:case"end":return e.stop()}}),e)})))()},mounted:function(){this.activeWord="Mach dich bereit!",console.log(this.$props.words)}},A=R,E=(a("7ea8"),a("8336")),$=a("b0af"),I=a("169a"),N=a("132d"),P=a("0fd9b"),B=a("71d9"),L=Object(c["a"])(A,k,S,!1,null,"7dcca5fc",null),M=L.exports;u()(L,{VBtn:E["a"],VCard:$["a"],VDialog:I["a"],VIcon:N["a"],VRow:P["a"],VToolbar:B["a"]});var F={data:function(){return{dialog:!1,i:0}},components:{Game:M},props:{category:{type:Object}},methods:{switchtoG:function(){console.log("Das Spiel kann starten"),this.dialog=!0}},created:function(){}},q=F,z=a("99d9"),H=a("62ad"),J=a("adda"),K=Object(c["a"])(q,_,C,!1,null,"ef79fa14",null),Q=K.exports;u()(K,{VCard:$["a"],VCardTitle:z["c"],VCol:H["a"],VImg:J["a"]});var U=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app-bar",{staticClass:"bg-primary",attrs:{app:"",dark:""}},[t._v(" "+t._s(t.text)+" "),t.text?t._e():n("v-btn",{attrs:{to:"/",medium:"",icon:""}},[n("v-icon",[t._v("mdi-arrow-left-thick")])],1),n("v-spacer"),n("v-dialog",{attrs:{persistent:"","max-width":"290"},scopedSlots:t._u([{key:"activator",fn:function(e){var a=e.on,r=e.attrs;return[n("v-icon",t._g(t._b({staticClass:"mr-2",staticStyle:{color:"gray"},on:{click:function(e){return t.func()}}},"v-icon",r,!1),a),[t._v("mdi-information-outline")])]}}]),model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[n("v-card",[n("v-card-title",{staticClass:"headline"},[t._v(" Impressum ")]),n("v-card-text",[t._v("Fatima Tuana Sirinyurt"),n("br"),t._v("© HTL Wien West, 2021 ")]),n("v-card-actions",[n("v-spacer"),n("v-btn",{attrs:{color:"gray darken-1",text:""},on:{click:function(e){t.dialog=!1}}},[t._v(" Schließen ")])],1)],1)],1),n("v-img",{attrs:{src:a("8a47"),"min-width":30,"max-width":30}})],1)},X=[],Y={props:{text:{type:String}},data:function(){return{dialog:!1}},methods:{func:function(){console.log("Fatima Tuana Sirinyurt")}}},Z=Y,tt=a("40dc"),et=a("2fa4"),at=Object(c["a"])(Z,U,X,!1,null,"daac88f4",null),nt=at.exports;u()(at,{VAppBar:tt["a"],VBtn:E["a"],VCard:$["a"],VCardActions:z["a"],VCardText:z["b"],VCardTitle:z["c"],VDialog:I["a"],VIcon:N["a"],VImg:J["a"],VSpacer:et["a"]});var rt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-col",{staticClass:"px-2 py-2 col-6 col-sm-4",staticStyle:{"object-fit":"cover"}},[a("v-card",{staticClass:"mx-1 my-0 ",staticStyle:{height:"100%"},attrs:{to:"/newCategory"}},[a("v-sheet",{staticClass:"mx-auto",staticStyle:{border:"5px dashed #D9D9D9","background-color":"#272727",height:"100%"},attrs:{"max-height":"45vh",rounded:"true",justify:"center",align:"center"}},[a("v-icon",{staticStyle:{color:"#D9D9D9",height:"100%"},attrs:{medium:""}},[t._v("mdi-plus")])],1)],1)],1)},ot=[],it={},st=it,ct=a("8dd9"),lt=Object(c["a"])(st,rt,ot,!1,null,null,null),ut=lt.exports;u()(lt,{VCard:$["a"],VCol:H["a"],VIcon:N["a"],VSheet:ct["a"]});var dt={data:function(){return{categories:[],x:"not yet"}},components:{Category:Q,Appbar:nt,NewCategoryCard:ut},created:function(){this.getData(),history.pushState({},"","/results"),history.pushState({},"","/newCategory"),history.pushState({},"","/")},methods:{getData:function(){var t=this;return Object(b["a"])(regeneratorRuntime.mark((function e(){var a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,x.a.get("/categories");case 2:a=e.sent,t.categories=a.data;case 4:case"end":return e.stop()}}),e)})))()}}},vt=dt,ft=(a("d18b"),a("a523")),gt=Object(c["a"])(vt,p,w,!1,null,null,null),mt=gt.exports;u()(gt,{VBtn:E["a"],VContainer:ft["a"],VRow:P["a"]});var ht=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticStyle:{height:"100%"}},[t.dialog?a("Game",{attrs:{words:t.words},on:{closed:function(e){t.dialog=!1},gameIsFinished:function(e){return t.re()}}}):t._e(),a("v-btn",{staticClass:"mt-2 mb-2 ml-2 bg-light",attrs:{to:"/",fab:"",dark:""},on:{click:function(e){return t.getGameData()}}},[a("v-icon",[t._v("mdi-arrow-left-thick")])],1),a("div",{staticClass:"mt-10",attrs:{align:"center"}},[a("span",{staticClass:"font-weight-bold",staticStyle:{"font-size":"250px",color:"white"}},[t._v(t._s(t.winsWordscount))]),a("br"),a("v-container",[a("span",{staticStyle:{color:"#777777"}},[t._v(t._s(t.winsWords))]),t._v(" "),a("p",{staticStyle:{color:"#444444"}},[t._v(t._s(t.losesWords))])]),a("v-card"),a("div",{staticStyle:{"margin-bottom":"5vh"}},[a("v-btn",{staticClass:" bg-m",staticStyle:{"background-color":"#444444"},attrs:{fab:"",dark:"","x-large":""},on:{click:function(e){t.dialog=!t.dialog}}},[a("v-icon",[t._v("mdi-rotate-right ")])],1),a("br")],1)],1)],1)},pt=[],wt=(a("99af"),a("a15b"),{data:function(){return{game:{},words:[],winsWordscount:0,winsWords:[],losesWords:[],dialog:!1}},components:{Game:M},methods:{getGameData:function(){var t=this;return Object(b["a"])(regeneratorRuntime.mark((function e(){var a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,x.a.get("/game");case 2:return a=e.sent,e.next=5,a.data;case 5:t.game=e.sent,t.words=t.game.losesWords.concat(t.game.winsWords),t.winsWordscount=t.game.winsWords.length,t.winsWords=t.game.winsWords.join(" - "),t.losesWords=t.game.losesWords.join(" - ");case 10:case"end":return e.stop()}}),e)})))()},re:function(){var t=this;return Object(b["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.getGameData();case 2:console.log("new game");case 3:case"end":return e.stop()}}),e)})))()}},mounted:function(){this.getGameData()}}),bt=wt,yt=(a("59c5"),Object(c["a"])(bt,ht,pt,!1,null,null,null)),xt=yt.exports;u()(yt,{VBtn:E["a"],VCard:$["a"],VContainer:ft["a"],VIcon:N["a"]});var _t=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",{staticClass:"m-0",staticStyle:{height:"100%",position:"relative","background-color":"white"}},[a("Appbar"),a("v-text-field",{attrs:{color:"gray",label:"Name deiner Kategorie",required:"",clearable:"",autofocus:""},model:{value:t.newCategoryName,callback:function(e){t.newCategoryName=e},expression:"newCategoryName"}}),a("v-card",{attrs:{"max-width":"100%",tile:""}},[a("v-list",{directives:[{name:"show",rawName:"v-show",value:t.words.length>0,expression:"words.length > 0 ? true : false"}],staticStyle:{"max-height":"70vh","overflow-y":"auto"}},t._l(t.words,(function(e){return a("v-row",{key:e,staticClass:"mx-1 my-1"},[a("v-col",{staticClass:"col-9 px-0 py-0"},[a("v-list-item",[a("v-list-item-content",[t._v(" "+t._s(e)+" ")])],1)],1),a("v-col",{staticClass:"col-3 centercenter text-center px-1 py-1",staticStyle:{"text-align":"center"}},[a("v-btn",{attrs:{icon:"",small:"",fab:""}},[a("v-icon",{attrs:{small:""},on:{click:function(a){return t.delWort(e)}}},[t._v("mdi-close")])],1)],1)],1)})),1),a("v-dialog",{attrs:{persistent:"","max-width":"600px"},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[a("v-card",[a("v-card-title"),a("v-card-text",[a("v-container",[a("v-row",[a("v-col",{attrs:{cols:"12",sm:"6",md:"4"}},[a("v-text-field",{attrs:{color:"grey",isactive:"true",label:"Neues Wort",required:"",autofocus:""},model:{value:t.newWord,callback:function(e){t.newWord=e},expression:"newWord"}})],1)],1)],1)],1),a("v-card-actions",[a("v-btn",{attrs:{color:"grey darken-1",text:"",fab:""},on:{click:function(e){t.dialog=!1}}},[a("v-icon",[t._v("mdi-close")])],1),a("v-btn",{attrs:{color:"gray darken-1",text:"",fab:""},on:{click:function(e){return t.saveWord()}}},[a("v-icon",[t._v("mdi-check")])],1)],1)],1)],1)],1),a("v-btn",{staticClass:"mt-5 btnBottom",staticStyle:{right:"3vw"},attrs:{fab:"","x-large":"",color:"gray",dark:""},on:{click:function(e){t.dialog=!0}}},[a("v-icon",{attrs:{small:""}},[t._v("mdi-plus")])],1),a("v-btn",{staticClass:"mt-2 btnBottom",attrs:{fab:"",color:"grey",dark:""},on:{click:function(e){return t.finished()}}},[a("v-icon",{attrs:{small:""}},[t._v("mdi-check")])],1)],1)},Ct=[],kt=(a("7db0"),a("c975"),a("a434"),{data:function(){return{words:[],dialog:!1,newWord:"",newCategoryName:""}},components:{Appbar:nt},methods:{saveWord:function(){var t=this,e=this.words.find((function(e){return e==t.newWord}));""!=this.newWord&&null==e&&this.words.push(this.newWord),this.newWord=""},finished:function(){var t=this;return Object(b["a"])(regeneratorRuntime.mark((function e(){var a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return a={name:t.newCategoryName,words:t.words},e.next=3,x.a.post("/categories",a);case 3:history.go(-1);case 4:case"end":return e.stop()}}),e)})))()},delWort:function(t){var e=this.words.indexOf(t);this.words.splice(e,1)}}}),St=kt,Wt=(a("6c3e"),a("8860")),Vt=a("da13"),Ot=a("5d23"),jt=a("8654"),Dt=Object(c["a"])(St,_t,Ct,!1,null,"40af8a4a",null),Tt=Dt.exports;u()(Dt,{VBtn:E["a"],VCard:$["a"],VCardActions:z["a"],VCardText:z["b"],VCardTitle:z["c"],VCol:H["a"],VContainer:ft["a"],VDialog:I["a"],VIcon:N["a"],VList:Wt["a"],VListItem:Vt["a"],VListItemContent:Ot["a"],VRow:P["a"],VTextField:jt["a"]});var Gt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("v-btn",{attrs:{to:"/"}},[t._v(" Back ")]),a("v-btn",{on:{click:function(e){return t.requestT()}}},[t._v("Permission")])],1)},Rt=[],At={methods:{requestT:function(){"undefined"!==typeof DeviceOrientationEvent&&"function"===typeof DeviceOrientationEvent.requestPermission?(alert("enter"),DeviceOrientationEvent.requestPermission().then((function(t){alert("resp"+t),"granted"==t&&window.addEventListener("devicemotion",(function(t){console.log(t)}))})).catch(console.error)):alert("DeviceOrientationEvent is not defined")}}},Et=At,$t=Object(c["a"])(Et,Gt,Rt,!1,null,"35d85b04",null),It=$t.exports;u()($t,{VBtn:E["a"]}),n["a"].use(h["a"]);var Nt=[{path:"/",name:"Overview",component:mt},{path:"/results",name:"Results",component:xt},{path:"/newCategory",name:"NewCategory",component:Tt},{path:"/permission",name:"Permission",component:It}],Pt=new h["a"]({mode:"history",base:"/",routes:Nt}),Bt=Pt,Lt=a("f309");n["a"].use(Lt["a"]);var Mt=new Lt["a"]({});n["a"].config.productionTip=!1,new n["a"]({router:Bt,vuetify:Mt,render:function(t){return t(g)}}).$mount("#app")},"59c5":function(t,e,a){"use strict";a("9029")},"6c3e":function(t,e,a){"use strict";a("dbcf")},"7ea8":function(t,e,a){"use strict";a("d114")},"85ec":function(t,e,a){},"8a47":function(t,e,a){t.exports=a.p+"img/speak-up.afa8e7ea.png"},9029:function(t,e,a){},d114:function(t,e,a){},d18b:function(t,e,a){"use strict";a("2a2a")},d3f1:function(t,e,a){},dbcf:function(t,e,a){}});