(function(t){function e(e){for(var n,i,s=e[0],c=e[1],l=e[2],d=0,v=[];d<s.length;d++)i=s[d],Object.prototype.hasOwnProperty.call(a,i)&&a[i]&&v.push(a[i][0]),a[i]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);u&&u(e);while(v.length)v.shift()();return o.push.apply(o,l||[]),r()}function r(){for(var t,e=0;e<o.length;e++){for(var r=o[e],n=!0,s=1;s<r.length;s++){var c=r[s];0!==a[c]&&(n=!1)}n&&(o.splice(e--,1),t=i(i.s=r[0]))}return t}var n={},a={app:0},o=[];function i(e){if(n[e])return n[e].exports;var r=n[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,i),r.l=!0,r.exports}i.m=t,i.c=n,i.d=function(t,e,r){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(i.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)i.d(r,n,function(e){return t[e]}.bind(null,n));return r},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=e,s=s.slice();for(var l=0;l<s.length;l++)e(s[l]);var u=c;o.push([0,"chunk-vendors"]),r()})({0:function(t,e,r){t.exports=r("56d7")},"034f":function(t,e,r){"use strict";r("85ec")},"2a2a":function(t,e,r){},"2c77":function(t,e,r){t.exports=r.p+"media/win.ecab699a.mp3"},"56d7":function(t,e,r){"use strict";r.r(e);r("e623"),r("e379"),r("5dc8"),r("37e1");var n=r("2b0e"),a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-app",[r("v-main",[r("router-view")],1)],1)},o=[],i={name:"App"},s=i,c=(r("034f"),r("2877")),l=r("6544"),u=r.n(l),d=r("7496"),v=r("f6c4"),f=Object(c["a"])(s,a,o,!1,null,null,null),g=f.exports;u()(f,{VApp:d["a"],VMain:v["a"]});var h=r("9483");Object(h["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(t){console.error("Error during service worker registration:",t)}});var m=r("8c4f"),p=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-container",[r("Appbar",{attrs:{text:"Kategorien"}}),r("v-alert",{attrs:{value:t.offline,type:"error"}},[r("v-row",{attrs:{align:"center"}},[r("v-col",{staticClass:"grow"},[t._v(" Oh noo! "),r("br"),t._v("Keine Internetverbindung :( ")])],1)],1),r("v-container",[r("v-row",[t._l(t.categories,(function(e){return r("Category",{key:e.id,attrs:{category:e}},[t._v(" "+t._s(e)+" ")])})),t.offline?t._e():r("NewCategoryCard")],2)],1)],1)},w=[],b=(r("96cf"),r("1da1")),y=r("bc3a"),x=r.n(y),C=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-col",{staticClass:"px-2 py-2 col-6 col-sm-4",staticStyle:{"object-fit":"cover"}},[r("v-card",{staticClass:"mx-1 my-0",staticStyle:{"background-color":"transparent"},on:{click:function(e){return t.switchtoG(t.category.id)}}},[r("v-img",{staticClass:"white--text align-end",attrs:{"max-height":"45vh",src:"/img/categories/"+t.category.pic+".png"}},[r("v-card-title",{staticStyle:{"word-break":"wrap","background-color":"#3B3635"}},[t._v(t._s(t.category.name))])],1)],1),t.dialog?r("Game",{attrs:{words:t.category.words},on:{closed:function(e){t.dialog=!1}}}):t._e()],1)},_=[],k=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-row",{staticClass:"landscapemode",attrs:{justify:"center",align:"center"}},[r("v-dialog",{attrs:{fullscreen:"","hide-overlay":"",transition:"dialog-bottom-transition"},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[r("v-card",{staticClass:"white--text",staticStyle:{"background-color":"tranparent"}},[r("div",{staticStyle:{position:"absolute",right:"0px"}},[r("Progress",{directives:[{name:"show",rawName:"v-show",value:"true"==t.showing,expression:"showing == 'true'"}],staticClass:"landscapemode",on:{"time-up":function(e){return t.goToResult()}},model:{value:t.showing,callback:function(e){t.showing=e},expression:"showing"}})],1),"G"==t.duringStatus?r("div",{staticClass:" game text-center centercenter fullheight-vh"},[r("h1",{staticClass:"landscapemode"},[t._v(" "+t._s(t.activeWord)+" ")])]):t._e(),"W"==t.duringStatus?r("div",{staticClass:"win text-center centercenter fullheight-vh"},[r("v-icon",{staticClass:"iconStyling landscapemode",attrs:{size:"350",color:"white"}},[t._v("mdi-check")])],1):t._e(),"L"==t.duringStatus?r("div",{staticClass:"lose text-center centercenter fullheight-vh"},[r("v-icon",{staticClass:"iconStyling",attrs:{size:"350",color:"white"}},[t._v("mdi-close")])],1):t._e()])],1)],1)},S=[],W=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-progress-circular",{attrs:{rotate:90,size:60,width:5,value:t.value,color:"lightgrey"}},[t._v(" "+t._s((t.value/5*3).toFixed(0))+" ")])},O=[],V={data:function(){return{i:0,interval:{},value:100}},beforeDestroy:function(){clearInterval(this.interval)},mounted:function(){var t=this;setTimeout((function(){t.value=0,t.interval=setInterval((function(){if(100===Math.round(t.value,0))return t.$emit("time-up"),t.value=0;t.value+=10/6}),1e3)}),3e3)}},j=V,R=(r("fe55"),r("490a")),A=Object(c["a"])(j,W,O,!1,null,"3c94f5f0",null),I=A.exports;u()(A,{VProgressCircular:R["a"]});var D={data:function(){return{dialog:!0,duringStatus:"G",activeWord:"",game:{losesWords:[],winsWords:[]},before:"G",showProgressCircular:!1,showing:!1,countWinsOff:0}},components:{Progress:I},props:{words:{type:Array}},methods:{getRandomInt:function(t){return Math.floor(Math.random()*Math.floor(t))},newWord:function(){this.activeWord=this.wordsArray[this.getRandomInt(this.wordsArray.length)]},handleOrientation:function(t){var e=t.gamma;e<=60&&e>=0?(this.duringStatus="W","W"!=this.before&&(this.playSound("win.mp3"),this.game.winsWords.push(this.activeWord),this.countWinsOff++),this.before="W"):e>=-60&&e<=0?(this.duringStatus="L","L"!=this.before&&(this.playSound("lose.mp3"),this.game.losesWords.push(this.activeWord)),this.before="L"):("G"!=this.duringStatus&&this.newWord(),this.before=this.duringStatus,this.duringStatus="G")},goToResult:function(){var t=this;return Object(b["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(t.game.words=t.$props.words,navigator.onLine){e.next=5;break}t.$router.push({name:"Results",params:{wins:t.countWinsOff}}),e.next=8;break;case 5:return e.next=7,x.a.post("/game",t.game);case 7:t.$router.push({name:"Results",params:{words:t.wordsArray}});case 8:window.removeEventListener("deviceorientation",t.handleOrientation,!0),t.$emit("gameIsFinished"),t.dialog=!1;case 11:case"end":return e.stop()}}),e)})))()},startGame:function(){this.showProgressCircular=window.localStorage.getItem("showProgressCircular"),this.newWord(),window.addEventListener("deviceorientation",this.handleOrientation,!0)},playSound:function(t){return Object(b["a"])(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:n=new Audio(r("bbf3")("./".concat(t))),n.play();case 2:case"end":return e.stop()}}),e)})))()}},created:function(){var t=this;return Object(b["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:t.game.losesWords=[],t.game.winsWords=[],t.dialog=!0,t.countWinsOff=0,t.wordsArray=t.$props.words,t.game.words=t.wordsArray,window.DeviceOrientationEvent&&setTimeout((function(){return t.startGame()}),3e3),t.showing=window.localStorage.getItem("showProgressCircular"),t.showProgressCircular=window.localStorage.getItem("showProgressCircular");case 9:case"end":return e.stop()}}),e)})))()},mounted:function(){this.activeWord="Sei bereit!"}},N=D,P=(r("599f"),r("b0af")),$=r("169a"),E=r("132d"),T=r("0fd9b"),G=Object(c["a"])(N,k,S,!1,null,"3e0a3b74",null),L=G.exports;u()(G,{VCard:P["a"],VDialog:$["a"],VIcon:E["a"],VRow:T["a"]});var M={data:function(){return{dialog:!1}},components:{Game:L},props:{category:{type:Object}},methods:{switchtoG:function(){this.dialog=!0}}},B=M,F=r("99d9"),z=r("62ad"),K=r("adda"),q=Object(c["a"])(B,C,_,!1,null,"f340dd46",null),J=q.exports;u()(q,{VCard:P["a"],VCardTitle:F["c"],VCol:z["a"],VImg:K["a"]});var U=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-app-bar",{attrs:{app:"",dark:""}},[t._v(" "+t._s(t.text)+" "),t.text?t._e():r("v-btn",{attrs:{to:"/",medium:"",icon:""}},[r("v-icon",[t._v("mdi-arrow-left-thick")])],1),r("v-spacer"),r("v-dialog",{attrs:{persistent:"","max-width":"290"},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on,a=e.attrs;return[r("v-icon",t._g(t._b({staticClass:"mr-2",attrs:{color:"grey"}},"v-icon",a,!1),n),[t._v("mdi-information-outline")])]}}]),model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[r("v-card",[r("v-card-title",{staticClass:"headline"},[t._v(" Impressum ")]),r("v-card-text",[t._v("Fatima Tuana Sirinyurt"),r("br"),t._v("© HTL Wien West, 2021 ")]),r("v-card-actions",[r("v-spacer"),r("v-btn",{attrs:{color:"gray darken-1",text:""},on:{click:function(e){t.dialog=!1}}},[t._v(" Schließen ")])],1)],1)],1),r("v-dialog",{attrs:{persistent:"","max-width":"290"},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on,a=e.attrs;return[r("v-icon",t._g(t._b({staticClass:"mr-2",attrs:{color:"grey"}},"v-icon",a,!1),n),[t._v("mdi-cog-outline")])]}}]),model:{value:t.dialogSettings,callback:function(e){t.dialogSettings=e},expression:"dialogSettings"}},[r("v-card",[r("v-card-title",{staticClass:"headline"},[t._v(" Einstellungen ")]),r("v-card-text",[r("v-switch",{attrs:{inset:"",color:"black",label:"Zeitanzeige"},model:{value:t.switch1,callback:function(e){t.switch1=e},expression:"switch1"}})],1),r("v-card-actions",[r("v-spacer"),r("v-btn",{attrs:{color:"gray darken-1",text:""},on:{click:function(e){return t.chgItem()}}},[t._v(" Schließen ")])],1)],1)],1)],1)},H=[],Z={props:{text:{type:String}},data:function(){return{dialog:!1,dialogSettings:!1,switch1:!0}},methods:{chgItem:function(){window.localStorage.setItem("showProgressCircular",this.switch1),this.dialogSettings=!1}},created:function(){this.switch1="true"==window.localStorage.getItem("showProgressCircular")}},Q=Z,X=r("40dc"),Y=r("8336"),tt=r("2fa4"),et=r("b73d"),rt=Object(c["a"])(Q,U,H,!1,null,null,null),nt=rt.exports;u()(rt,{VAppBar:X["a"],VBtn:Y["a"],VCard:P["a"],VCardActions:F["a"],VCardText:F["b"],VCardTitle:F["c"],VDialog:$["a"],VIcon:E["a"],VSpacer:tt["a"],VSwitch:et["a"]});var at=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-col",{staticClass:"px-2 py-2 col-6 col-sm-4",staticStyle:{"object-fit":"cover"}},[r("v-card",{staticClass:"mx-1 my-0 fullheight-p",attrs:{to:"/newCategory"}},[r("v-sheet",{staticClass:"mx-auto fullheight-p ",staticStyle:{border:"5px dashed #D9D9D9","background-color":"#272727"},attrs:{"max-height":"45vh",rounded:"true",justify:"center",align:"center"}},[r("v-icon",{staticClass:" fullheight-p",staticStyle:{color:"#D9D9D9"},attrs:{medium:""}},[t._v("mdi-plus")])],1)],1)],1)},ot=[],it={},st=it,ct=r("8dd9"),lt=Object(c["a"])(st,at,ot,!1,null,null,null),ut=lt.exports;u()(lt,{VCard:P["a"],VCol:z["a"],VIcon:E["a"],VSheet:ct["a"]});var dt={data:function(){return{categories:[],offline:!1}},components:{Category:J,Appbar:nt,NewCategoryCard:ut},created:function(){var t=this;return Object(b["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.checkConnection(),e.next=3,t.getData();case 3:history.pushState({},"","/results"),history.pushState({},"","/newCategory"),history.pushState({},"","/");case 6:case"end":return e.stop()}}),e)})))()},methods:{getData:function(){var t=this;return Object(b["a"])(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,x.a.get("/categories");case 2:return r=e.sent,e.next=5,r.data;case 5:t.categories=e.sent;case 6:case"end":return e.stop()}}),e)})))()},checkConnection:function(){var t=this;setTimeout((function(){navigator.onLine?t.offline=!1:t.offline=!0,t.checkConnection()}),1e3)}},mounted:function(){var t=this;return Object(b["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.getData();case 2:case"end":return e.stop()}}),e)})))()}},vt=dt,ft=(r("d18b"),r("0798")),gt=r("a523"),ht=Object(c["a"])(vt,p,w,!1,null,null,null),mt=ht.exports;u()(ht,{VAlert:ft["a"],VCol:z["a"],VContainer:gt["a"],VRow:T["a"]});var pt=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"fullheight-p"},[t.dialog?r("Game",{attrs:{words:t.words},on:{closed:function(e){t.dialog=!1},gameIsFinished:function(e){return t.re()}}}):t._e(),r("v-btn",{staticClass:"mt-2 mb-2 ml-2 bg-light",attrs:{to:"/",fab:"",dark:""},on:{click:function(e){return t.getGameData()}}},[r("v-icon",[t._v("mdi-arrow-left-thick")])],1),r("div",{staticClass:"mt-10",attrs:{align:"center"}},[r("span",{staticClass:"font-weight-bold",staticStyle:{"font-size":"250px",color:"white"}},[t._v(t._s(t.winsWordscount))]),r("br"),r("v-container",[r("span",{staticClass:"col-prim"},[t._v(t._s(t.winsWords))]),r("p",{staticClass:"col-sec"},[t._v(t._s(t.losesWords))])]),r("v-card"),r("div",{staticStyle:{"margin-bottom":"5vh"}},[r("v-btn",{staticClass:" bg-m col-sec",attrs:{fab:"",dark:"","x-large":""},on:{click:function(e){t.dialog=!t.dialog}}},[r("v-icon",[t._v("mdi-rotate-right ")])],1),r("br")],1)],1)],1)},wt=[],bt=(r("a15b"),r("a9e3"),{data:function(){return{game:{},words:[],winsWordscount:"",winsWords:[],losesWords:[],dialog:!1}},props:{wins:{type:Number}},components:{Game:L},methods:{getGameData:function(){var t=this;return Object(b["a"])(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(navigator.onLine){e.next=6;break}t.winsWordscount=t.$router.history.current.params.wins,t.winsWords="",t.losesWords="",e.next=16;break;case 6:return e.next=8,x.a.get("/game");case 8:return r=e.sent,e.next=11,r.data;case 11:t.game=e.sent,t.words=t.$router.history.current.params.words,t.winsWordscount=t.game.winsWords.length,t.winsWords=t.game.winsWords.join(" - "),t.losesWords=t.game.losesWords.join(" - ");case 16:case"end":return e.stop()}}),e)})))()},re:function(){var t=this;return Object(b["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.getGameData();case 2:case"end":return e.stop()}}),e)})))()}},created:function(){var t=this;return Object(b["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.re();case 2:case"end":return e.stop()}}),e)})))()}}),yt=bt,xt=(r("59c5"),Object(c["a"])(yt,pt,wt,!1,null,null,null)),Ct=xt.exports;u()(xt,{VBtn:Y["a"],VCard:P["a"],VContainer:gt["a"],VIcon:E["a"]});var _t=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-container",{staticClass:"m-0 fullheight-p",staticStyle:{position:"relative","background-color":"white"}},[r("Appbar"),r("v-text-field",{attrs:{color:"gray",label:"Name deiner Kategorie",required:"",clearable:"",autofocus:"",maxlength:"15"},model:{value:t.newCategoryName,callback:function(e){t.newCategoryName=e},expression:"newCategoryName"}}),r("p",{directives:[{name:"show",rawName:"v-show",value:t.words.length>0,expression:"words.length > 0 ? true : false"}],staticClass:"mb-3 mr-3 text-right text--disabled"},[t._v(t._s(t.words.length))]),r("v-card",{staticClass:"mb-3",attrs:{"max-width":"100%",tile:""}},[r("v-list",{directives:[{name:"show",rawName:"v-show",value:t.words.length>0,expression:"words.length > 0 ? true : false"}],staticStyle:{"max-height":"65vh","overflow-y":"auto"}},t._l(t.words,(function(e){return r("v-row",{key:e,staticClass:"mx-1 my-1"},[r("v-col",{staticClass:"col-9 px-0 py-0"},[r("v-list-item",[r("v-list-item-content",[t._v(" "+t._s(e)+" ")])],1)],1),r("v-col",{staticClass:"col-3 centercenter text-center px-1 py-1",staticStyle:{"text-align":"center"}},[r("v-btn",{attrs:{icon:"",small:"",fab:""}},[r("v-icon",{attrs:{small:""},on:{click:function(r){return t.delWort(e)}}},[t._v("mdi-close")])],1)],1)],1)})),1),r("v-dialog",{attrs:{persistent:"","max-width":"600px"},on:{keydown:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.saveWord()}},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[r("v-card",[r("v-card-title"),r("v-card-text",[r("v-container",[r("v-row",[r("v-col",{attrs:{cols:"12",sm:"6",md:"4"}},[r("v-text-field",{attrs:{color:"grey",isactive:"true",label:"Neues Wort",required:"",autofocus:""},model:{value:t.newWord,callback:function(e){t.newWord=e},expression:"newWord"}})],1)],1)],1)],1),r("v-card-actions",[r("v-btn",{attrs:{color:"grey darken-1",text:"",fab:""},on:{click:function(e){t.dialog=!1}}},[r("v-icon",[t._v("mdi-close")])],1),r("v-btn",{attrs:{color:"gray darken-1",text:"",fab:""},on:{click:function(e){return t.saveWord()}}},[r("v-icon",[t._v("mdi-check")])],1)],1)],1)],1),r("v-dialog",{attrs:{persistent:"","max-width":"290"},model:{value:t.dialogAlert,callback:function(e){t.dialogAlert=e},expression:"dialogAlert"}},[r("v-card",[r("v-card-title",{staticClass:"headline"},[t._v(" Ooops! ")]),r("v-card-text",[t._v("Da ist etwas schief gelaufen :/")]),r("v-card-text",[t._v("Kontrolliere: "),r("br"),t._v(" - Deine Kategorie muss einen einzigartigen Namen haben "),r("br"),t._v("- Du musst eine mindestanzahl von 30 Wörtern erreichen")]),r("v-card-actions",[r("v-spacer"),r("v-btn",{attrs:{fab:"",color:"gray darken-1",text:""},on:{click:function(e){t.dialogAlert=!1}}},[r("v-icon",[t._v("mdi-check")])],1)],1)],1)],1)],1),r("v-btn",{staticClass:"mt-5 btnBottom",staticStyle:{right:"3vw"},attrs:{fab:"","x-large":"",color:"gray",dark:""},on:{click:function(e){t.dialog=!0}}},[r("v-icon",{attrs:{small:""}},[t._v("mdi-plus")])],1),r("v-btn",{staticClass:"mt-2 btnBottom",attrs:{fab:"",color:"grey",dark:""},on:{click:function(e){return t.finished()}}},[r("v-icon",{attrs:{small:""}},[t._v("mdi-check")])],1)],1)},kt=[],St=(r("7db0"),r("c975"),r("a434"),{data:function(){return{words:[],dialog:!1,dialogAlert:!1,newWord:"",newCategoryName:""}},components:{Appbar:nt},methods:{saveWord:function(){var t=this,e=this.words.find((function(e){return e==t.newWord}));""!=this.newWord&&null==e&&this.words.push(this.newWord),this.newWord=""},finished:function(){var t=this;return Object(b["a"])(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(1!=t.check()){e.next=5;break}return r={name:t.newCategoryName,words:t.words},e.next=4,x.a.post("/categories",r);case 4:history.go(-1);case 5:case"end":return e.stop()}}),e)})))()},delWort:function(t){var e=this.words.indexOf(t);this.words.splice(e,1)},check:function(){return!(""==this.newCategoryName||this.words.length<30)||(this.dialogAlert=!0,!1)}}}),Wt=St,Ot=(r("6fd8"),r("8860")),Vt=r("da13"),jt=r("5d23"),Rt=r("8654"),At=Object(c["a"])(Wt,_t,kt,!1,null,null,null),It=At.exports;u()(At,{VBtn:Y["a"],VCard:P["a"],VCardActions:F["a"],VCardText:F["b"],VCardTitle:F["c"],VCol:z["a"],VContainer:gt["a"],VDialog:$["a"],VIcon:E["a"],VList:Ot["a"],VListItem:Vt["a"],VListItemContent:jt["a"],VRow:T["a"],VSpacer:tt["a"],VTextField:Rt["a"]}),n["a"].use(m["a"]);var Dt=[{path:"/",name:"Overview",component:mt},{path:"/results",name:"Results",component:Ct},{path:"/newCategory",name:"NewCategory",component:It}],Nt=new m["a"]({mode:"history",base:"/",routes:Dt}),Pt=Nt,$t=r("f309");n["a"].use($t["a"]);var Et=new $t["a"]({});n["a"].config.productionTip=!1,new n["a"]({router:Pt,vuetify:Et,render:function(t){return t(g)}}).$mount("#app")},"599f":function(t,e,r){"use strict";r("f238")},"59c5":function(t,e,r){"use strict";r("9029")},"6fd8":function(t,e,r){"use strict";r("cbc0")},7478:function(t,e,r){},"85ec":function(t,e,r){},9029:function(t,e,r){},"960e":function(t,e,r){t.exports=r.p+"media/lose.11208495.mp3"},bbf3:function(t,e,r){var n={"./lose.mp3":"960e","./win.mp3":"2c77"};function a(t){var e=o(t);return r(e)}function o(t){if(!r.o(n,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return n[t]}a.keys=function(){return Object.keys(n)},a.resolve=o,t.exports=a,a.id="bbf3"},cbc0:function(t,e,r){},d18b:function(t,e,r){"use strict";r("2a2a")},f238:function(t,e,r){},fe55:function(t,e,r){"use strict";r("7478")}});