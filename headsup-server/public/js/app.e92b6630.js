(function(t){function e(e){for(var n,i,s=e[0],c=e[1],l=e[2],d=0,g=[];d<s.length;d++)i=s[d],Object.prototype.hasOwnProperty.call(a,i)&&a[i]&&g.push(a[i][0]),a[i]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);u&&u(e);while(g.length)g.shift()();return o.push.apply(o,l||[]),r()}function r(){for(var t,e=0;e<o.length;e++){for(var r=o[e],n=!0,s=1;s<r.length;s++){var c=r[s];0!==a[c]&&(n=!1)}n&&(o.splice(e--,1),t=i(i.s=r[0]))}return t}var n={},a={app:0},o=[];function i(e){if(n[e])return n[e].exports;var r=n[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,i),r.l=!0,r.exports}i.m=t,i.c=n,i.d=function(t,e,r){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(i.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)i.d(r,n,function(e){return t[e]}.bind(null,n));return r},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=e,s=s.slice();for(var l=0;l<s.length;l++)e(s[l]);var u=c;o.push([0,"chunk-vendors"]),r()})({0:function(t,e,r){t.exports=r("56d7")},"034f":function(t,e,r){"use strict";r("85ec")},"0b8c":function(t,e,r){"use strict";r("d3f1")},1097:function(t,e,r){},"2a2a":function(t,e,r){},"56d7":function(t,e,r){"use strict";r.r(e);r("e623"),r("e379"),r("5dc8"),r("37e1");var n=r("2b0e"),a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-app",[r("v-main",[r("router-view")],1)],1)},o=[],i={name:"App",components:{},data:function(){return{}}},s=i,c=(r("034f"),r("2877")),l=r("6544"),u=r.n(l),d=r("7496"),g=r("f6c4"),v=Object(c["a"])(s,a,o,!1,null,null,null),h=v.exports;u()(v,{VApp:d["a"],VMain:g["a"]});var f=r("9483");Object(f["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(t){console.error("Error during service worker registration:",t)}});var m=r("8c4f"),p=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-container",[r("Appbar",{attrs:{text:"Kategorien"}}),r("v-container",[r("v-row",[t._l(t.categories,(function(e){return r("Category",{key:e.id,attrs:{category:e}},[t._v(" "+t._s(e)+" ")])})),r("NewCategoryCard")],2)],1)],1)},w=[],b=(r("96cf"),r("1da1")),y=r("bc3a"),x=r.n(y),_=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-col",{staticClass:"px-2 py-2 col-6 col-sm-4",staticStyle:{"object-fit":"cover"}},[r("v-card",{staticClass:"mx-1 my-0",staticStyle:{"background-color":"transparent"},on:{click:function(e){return t.switchtoG(t.category.id)}}},[r("v-img",{staticClass:"white--text align-end",attrs:{"max-height":"45vh",src:"/img/categories/"+t.category.pic+".png"}},[r("v-card-title",{staticStyle:{"word-break":"normal","background-color":"#3B3635"}},[t._v(t._s(t.category.name))])],1)],1),t.dialog?r("Game",{attrs:{words:t.category.words},on:{closed:function(e){t.dialog=!1}}}):t._e()],1)},k=[],C=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-row",{staticClass:"landscapemode",attrs:{justify:"center",align:"center"}},[r("v-dialog",{attrs:{fullscreen:"","hide-overlay":"",transition:"dialog-bottom-transition"},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[r("v-card",{staticClass:"white--text",staticStyle:{"background-color":"tranparent"}},[r("v-toolbar",{attrs:{dark:"",color:"primary"}},[r("v-btn",{attrs:{icon:"",dark:""},on:{click:function(e){return t.$emit("closed",t.dialog)}}},[r("v-icon",[t._v("mdi-close")])],1)],1),r("div",{staticStyle:{position:"absolute"}},[r("Progress",{directives:[{name:"show",rawName:"v-show",value:"true"==t.showing,expression:"showing == 'true'"}],on:{"time-up":function(e){return t.goToResult()}},model:{value:t.showing,callback:function(e){t.showing=e},expression:"showing"}})],1),"G"==t.duringStatus?r("div",{staticClass:" game text-center centercenter",staticStyle:{height:"100vh"}},[r("h1",[t._v(" "+t._s(t.activeWord)+" ")])]):t._e(),"W"==t.duringStatus?r("div",{staticClass:"win text-center centercenter",staticStyle:{height:"100vh"}},[r("v-icon",{staticClass:"iconStyling",attrs:{size:"350",color:"white"}},[t._v("mdi-check")])],1):t._e(),"L"==t.duringStatus?r("div",{staticClass:"lose text-center centercenter",staticStyle:{height:"100vh"}},[r("v-icon",{staticClass:"iconStyling",attrs:{size:"350",color:"white"}},[t._v("mdi-close")])],1):t._e()],1)],1)],1)},S=[],W=(r("ac1f"),r("5319"),function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-progress-circular",{attrs:{rotate:90,size:60,width:5,value:t.value,color:"lightgrey"}},[t._v(" "+t._s((t.value/5*3).toFixed(0))+" ")])}),V=[],O={data:function(){return{i:0,interval:{},value:100}},beforeDestroy:function(){clearInterval(this.interval)},mounted:function(){var t=this;setTimeout((function(){t.value=0,t.interval=setInterval((function(){if(100===Math.round(t.value,0))return t.$emit("time-up"),t.value=0;t.value+=10/6}),1e3)}),3e3)}},j=O,R=(r("0b8c"),r("490a")),A=Object(c["a"])(j,W,V,!1,null,"1e4883f4",null),I=A.exports;u()(A,{VProgressCircular:R["a"]});var D={data:function(){return{dialog:!0,showWin:!1,duringStatus:"G",activeWord:"",game:{losesWords:[],winsWords:[]},before:"G",showProgressCircular:!1,showing:!1}},components:{Progress:I},props:{words:{type:Array}},methods:{getRandomInt:function(t){return Math.floor(Math.random()*Math.floor(t))},newWord:function(){this.activeWord=this.wordsArray[this.getRandomInt(this.wordsArray.length)]},chg:function(t){var e=this;setTimeout((function(){return e.clogText()}),1e3),this.duringStatus=t},clogText:function(){this.newWord(),this.duringStatus="G"},handleOrientation:function(t){var e=screen.orientation.type;console.log("Fullscreen and locked to ".concat(e,". Ready!"));var r=t.gamma;r<=60&&r>=0?(this.duringStatus="W",this.before="W"):r>=-60&&r<=0?(this.duringStatus="L",this.before="L"):("G"!=this.duringStatus&&("L"==this.before?this.game.losesWords.push(this.activeWord):"W"==this.before&&this.game.winsWords.push(this.activeWord),this.newWord()),this.before=this.duringStatus,this.duringStatus="G")},goToResult:function(){var t=this;return Object(b["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.game.words=t.$props.words,e.next=3,x.a.post("/game",t.game);case 3:t.$emit("gameIsFinished"),t.dialog=!1,t.$router.replace("/results"),ScreenOrientation.unlock();case 7:case"end":return e.stop()}}),e)})))()},startGame:function(){this.showProgressCircular=window.localStorage.getItem("showProgressCircular"),console.log("game"+this.showProgressCircular),this.newWord(),window.addEventListener("deviceorientation",this.handleOrientation,!0)}},created:function(){var t=this;return Object(b["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:t.game.losesWords=[],t.game.winsWords=[],t.dialog=!0,t.wordsArray=t.$props.words,t.game.words=t.wordsArray,window.DeviceOrientationEvent&&setTimeout((function(){return t.startGame()}),3e3),ScreenOrientation.lock("landscape-secondary").then(alert("portrait locked")),t.showing=window.localStorage.getItem("showProgressCircular"),t.showProgressCircular=window.localStorage.getItem("showProgressCircular");case 9:case"end":return e.stop()}}),e)})))()},mounted:function(){this.activeWord="Mach dich bereit!"}},P=D,T=(r("f7f3"),r("8336")),G=r("b0af"),N=r("169a"),$=r("132d"),E=r("0fd9b"),M=r("71d9"),B=Object(c["a"])(P,C,S,!1,null,"4f525fd2",null),L=B.exports;u()(B,{VBtn:T["a"],VCard:G["a"],VDialog:N["a"],VIcon:$["a"],VRow:E["a"],VToolbar:M["a"]});var F={data:function(){return{dialog:!1,i:0}},components:{Game:L},props:{category:{type:Object}},methods:{switchtoG:function(){console.log("Das Spiel kann starten"),this.dialog=!0}},created:function(){}},z=F,K=r("99d9"),q=r("62ad"),J=r("adda"),H=Object(c["a"])(z,_,k,!1,null,"ef79fa14",null),Z=H.exports;u()(H,{VCard:G["a"],VCardTitle:K["c"],VCol:q["a"],VImg:J["a"]});var Q=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-app-bar",{staticClass:"bg-primary",attrs:{app:"",dark:""}},[t._v(" "+t._s(t.text)+" "),t.text?t._e():r("v-btn",{attrs:{to:"/",medium:"",icon:""}},[r("v-icon",[t._v("mdi-arrow-left-thick")])],1),r("v-spacer"),r("v-dialog",{attrs:{persistent:"","max-width":"290"},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on,a=e.attrs;return[r("v-icon",t._g(t._b({staticClass:"mr-2",staticStyle:{color:"gray"}},"v-icon",a,!1),n),[t._v("mdi-information-outline")])]}}]),model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[r("v-card",[r("v-card-title",{staticClass:"headline"},[t._v(" Impressum ")]),r("v-card-text",[t._v("Fatima Tuana Sirinyurt"),r("br"),t._v("© HTL Wien West, 2021 ")]),r("v-card-actions",[r("v-spacer"),r("v-btn",{attrs:{color:"gray darken-1",text:""},on:{click:function(e){t.dialog=!1}}},[t._v(" Schließen ")])],1)],1)],1),r("v-dialog",{attrs:{persistent:"","max-width":"290"},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on,a=e.attrs;return[r("v-icon",t._g(t._b({staticClass:"mr-2",staticStyle:{color:"gray"}},"v-icon",a,!1),n),[t._v("mdi-cog-outline")])]}}]),model:{value:t.dialogSettings,callback:function(e){t.dialogSettings=e},expression:"dialogSettings"}},[r("v-card",[r("v-card-title",{staticClass:"headline"},[t._v(" Einstellungen ")]),r("v-card-text",[r("v-switch",{attrs:{inset:"",color:"black",label:"Zeitanzeige"},model:{value:t.switch1,callback:function(e){t.switch1=e},expression:"switch1"}})],1),r("v-card-actions",[r("v-spacer"),r("v-btn",{attrs:{color:"gray darken-1",text:""},on:{click:function(e){return t.chgItem()}}},[t._v(" Schließen ")])],1)],1)],1)],1)},U=[],X={props:{text:{type:String}},data:function(){return{dialog:!1,dialogSettings:!1,switch1:!0}},methods:{chgItem:function(){window.localStorage.setItem("showProgressCircular",this.switch1),this.dialogSettings=!1}},created:function(){this.switch1="true"==window.localStorage.getItem("showProgressCircular")}},Y=X,tt=r("40dc"),et=r("2fa4"),rt=r("b73d"),nt=Object(c["a"])(Y,Q,U,!1,null,"2c5a03a1",null),at=nt.exports;u()(nt,{VAppBar:tt["a"],VBtn:T["a"],VCard:G["a"],VCardActions:K["a"],VCardText:K["b"],VCardTitle:K["c"],VDialog:N["a"],VIcon:$["a"],VSpacer:et["a"],VSwitch:rt["a"]});var ot=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-col",{staticClass:"px-2 py-2 col-6 col-sm-4",staticStyle:{"object-fit":"cover"}},[r("v-card",{staticClass:"mx-1 my-0 ",staticStyle:{height:"100%"},attrs:{to:"/newCategory"}},[r("v-sheet",{staticClass:"mx-auto",staticStyle:{border:"5px dashed #D9D9D9","background-color":"#272727",height:"100%"},attrs:{"max-height":"45vh",rounded:"true",justify:"center",align:"center"}},[r("v-icon",{staticStyle:{color:"#D9D9D9",height:"100%"},attrs:{medium:""}},[t._v("mdi-plus")])],1)],1)],1)},it=[],st={},ct=st,lt=r("8dd9"),ut=Object(c["a"])(ct,ot,it,!1,null,null,null),dt=ut.exports;u()(ut,{VCard:G["a"],VCol:q["a"],VIcon:$["a"],VSheet:lt["a"]});var gt={data:function(){return{categories:[]}},components:{Category:Z,Appbar:at,NewCategoryCard:dt},created:function(){var t=this;return Object(b["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.getData();case 2:history.pushState({},"","/results"),history.pushState({},"","/newCategory"),history.pushState({},"","/");case 5:case"end":return e.stop()}}),e)})))()},methods:{getData:function(){var t=this;return Object(b["a"])(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,x.a.get("/categories");case 2:return r=e.sent,e.next=5,r.data;case 5:t.categories=e.sent;case 6:case"end":return e.stop()}}),e)})))()}}},vt=gt,ht=(r("d18b"),r("a523")),ft=Object(c["a"])(vt,p,w,!1,null,null,null),mt=ft.exports;u()(ft,{VContainer:ht["a"],VRow:E["a"]});var pt=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticStyle:{height:"100%"}},[t.dialog?r("Game",{attrs:{words:t.words},on:{closed:function(e){t.dialog=!1},gameIsFinished:function(e){return t.re()}}}):t._e(),r("v-btn",{staticClass:"mt-2 mb-2 ml-2 bg-light",attrs:{to:"/",fab:"",dark:""},on:{click:function(e){return t.getGameData()}}},[r("v-icon",[t._v("mdi-arrow-left-thick")])],1),r("div",{staticClass:"mt-10",attrs:{align:"center"}},[r("span",{staticClass:"font-weight-bold",staticStyle:{"font-size":"250px",color:"white"}},[t._v(t._s(t.winsWordscount))]),r("br"),r("v-container",[r("span",{staticStyle:{color:"#777777"}},[t._v(t._s(t.winsWords))]),t._v(" "),r("p",{staticStyle:{color:"#444444"}},[t._v(t._s(t.losesWords))])]),r("v-card"),r("div",{staticStyle:{"margin-bottom":"5vh"}},[r("v-btn",{staticClass:" bg-m",staticStyle:{"background-color":"#444444"},attrs:{fab:"",dark:"","x-large":""},on:{click:function(e){t.dialog=!t.dialog}}},[r("v-icon",[t._v("mdi-rotate-right ")])],1),r("br")],1)],1)],1)},wt=[],bt=(r("99af"),r("a15b"),{data:function(){return{game:{},words:[],winsWordscount:"",winsWords:[],losesWords:[],dialog:!1}},components:{Game:L},methods:{getGameData:function(){var t=this;return Object(b["a"])(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,x.a.get("/game");case 2:return r=e.sent,e.next=5,r.data;case 5:t.game=e.sent,t.words=t.game.losesWords.concat(t.game.winsWords),t.winsWordscount=t.game.winsWords.length,t.winsWords=t.game.winsWords.join(" - "),t.losesWords=t.game.losesWords.join(" - ");case 10:case"end":return e.stop()}}),e)})))()},re:function(){var t=this;return Object(b["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.getGameData();case 2:case"end":return e.stop()}}),e)})))()}},created:function(){var t=this;return Object(b["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.getGameData();case 2:case"end":return e.stop()}}),e)})))()}}),yt=bt,xt=(r("59c5"),Object(c["a"])(yt,pt,wt,!1,null,null,null)),_t=xt.exports;u()(xt,{VBtn:T["a"],VCard:G["a"],VContainer:ht["a"],VIcon:$["a"]});var kt=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-container",{staticClass:"m-0",staticStyle:{height:"100%",position:"relative","background-color":"white"}},[r("Appbar"),r("v-text-field",{attrs:{color:"gray",label:"Name deiner Kategorie",required:"",clearable:"",autofocus:"",maxlength:"30"},model:{value:t.newCategoryName,callback:function(e){t.newCategoryName=e},expression:"newCategoryName"}}),r("p",{directives:[{name:"show",rawName:"v-show",value:t.words.length>0,expression:"words.length > 0 ? true : false"}],staticClass:"mb-3 mr-3 text-right text--disabled"},[t._v(t._s(t.words.length))]),r("v-card",{attrs:{"max-width":"100%",tile:""}},[r("v-list",{directives:[{name:"show",rawName:"v-show",value:t.words.length>0,expression:"words.length > 0 ? true : false"}],staticStyle:{"max-height":"70vh","overflow-y":"auto"}},t._l(t.words,(function(e){return r("v-row",{key:e,staticClass:"mx-1 my-1"},[r("v-col",{staticClass:"col-9 px-0 py-0"},[r("v-list-item",[r("v-list-item-content",[t._v(" "+t._s(e)+" ")])],1)],1),r("v-col",{staticClass:"col-3 centercenter text-center px-1 py-1",staticStyle:{"text-align":"center"}},[r("v-btn",{attrs:{icon:"",small:"",fab:""}},[r("v-icon",{attrs:{small:""},on:{click:function(r){return t.delWort(e)}}},[t._v("mdi-close")])],1)],1)],1)})),1),r("v-dialog",{attrs:{persistent:"","max-width":"600px"},on:{keydown:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.saveWord()}},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[r("v-card",[r("v-card-title"),r("v-card-text",[r("v-container",[r("v-row",[r("v-col",{attrs:{cols:"12",sm:"6",md:"4"}},[r("v-text-field",{attrs:{color:"grey",isactive:"true",label:"Neues Wort",required:"",autofocus:""},model:{value:t.newWord,callback:function(e){t.newWord=e},expression:"newWord"}})],1)],1)],1)],1),r("v-card-actions",[r("v-btn",{attrs:{color:"grey darken-1",text:"",fab:""},on:{click:function(e){t.dialog=!1}}},[r("v-icon",[t._v("mdi-close")])],1),r("v-btn",{attrs:{color:"gray darken-1",text:"",fab:""},on:{click:function(e){return t.saveWord()}}},[r("v-icon",[t._v("mdi-check")])],1)],1)],1)],1),r("v-dialog",{attrs:{persistent:"","max-width":"290"},model:{value:t.dialogAlert,callback:function(e){t.dialogAlert=e},expression:"dialogAlert"}},[r("v-card",[r("v-card-title",{staticClass:"headline"},[t._v(" Ooops! ")]),r("v-card-text",[t._v("Da ist etwas schief gelaufen :/")]),r("v-card-text",[t._v("Kontrolliere: "),r("br"),t._v(" - Deine Kategorie muss einen einzigartigen Namen haben "),r("br"),t._v("- Du musst eine mindestanzahl von 50 Wörtern erreichen")]),r("v-card-actions",[r("v-spacer"),r("v-btn",{attrs:{fab:"",color:"gray darken-1",text:""},on:{click:function(e){t.dialogAlert=!1}}},[r("v-icon",[t._v("mdi-check")])],1)],1)],1)],1)],1),r("v-btn",{staticClass:"mt-5 btnBottom",staticStyle:{right:"3vw"},attrs:{fab:"","x-large":"",color:"gray",dark:""},on:{click:function(e){t.dialog=!0}}},[r("v-icon",{attrs:{small:""}},[t._v("mdi-plus")])],1),r("v-btn",{staticClass:"mt-2 btnBottom",attrs:{fab:"",color:"grey",dark:""},on:{click:function(e){return t.finished()}}},[r("v-icon",{attrs:{small:""}},[t._v("mdi-check")])],1)],1)},Ct=[],St=(r("7db0"),r("c975"),r("a434"),{data:function(){return{words:[],dialog:!1,dialogAlert:!1,newWord:"",newCategoryName:""}},components:{Appbar:at},methods:{saveWord:function(){var t=this,e=this.words.find((function(e){return e==t.newWord}));""!=this.newWord&&null==e&&this.words.push(this.newWord),this.newWord=""},finished:function(){var t=this;return Object(b["a"])(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(1!=t.check()){e.next=5;break}return r={name:t.newCategoryName,words:t.words},e.next=4,x.a.post("/categories",r);case 4:history.go(-1);case 5:case"end":return e.stop()}}),e)})))()},delWort:function(t){var e=this.words.indexOf(t);this.words.splice(e,1)},check:function(){return!(""==this.newCategoryName||this.words.length<50)||(this.dialogAlert=!0,!1)}}}),Wt=St,Vt=(r("89e6"),r("8860")),Ot=r("da13"),jt=r("5d23"),Rt=r("8654"),At=Object(c["a"])(Wt,kt,Ct,!1,null,"6354daf8",null),It=At.exports;u()(At,{VBtn:T["a"],VCard:G["a"],VCardActions:K["a"],VCardText:K["b"],VCardTitle:K["c"],VCol:q["a"],VContainer:ht["a"],VDialog:N["a"],VIcon:$["a"],VList:Vt["a"],VListItem:Ot["a"],VListItemContent:jt["a"],VRow:E["a"],VSpacer:et["a"],VTextField:Rt["a"]}),n["a"].use(m["a"]);var Dt=[{path:"/",name:"Overview",component:mt},{path:"/results",name:"Results",component:_t},{path:"/newCategory",name:"NewCategory",component:It}],Pt=new m["a"]({mode:"history",base:"/",routes:Dt}),Tt=Pt,Gt=r("f309");n["a"].use(Gt["a"]);var Nt=new Gt["a"]({});n["a"].config.productionTip=!1,new n["a"]({router:Tt,vuetify:Nt,render:function(t){return t(h)}}).$mount("#app")},"59c5":function(t,e,r){"use strict";r("9029")},"85ec":function(t,e,r){},"89e6":function(t,e,r){"use strict";r("b1d2")},9029:function(t,e,r){},b1d2:function(t,e,r){},d18b:function(t,e,r){"use strict";r("2a2a")},d3f1:function(t,e,r){},f7f3:function(t,e,r){"use strict";r("1097")}});