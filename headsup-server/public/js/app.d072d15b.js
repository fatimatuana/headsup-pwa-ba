(function(t){function e(e){for(var r,i,s=e[0],c=e[1],l=e[2],d=0,v=[];d<s.length;d++)i=s[d],Object.prototype.hasOwnProperty.call(a,i)&&a[i]&&v.push(a[i][0]),a[i]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(t[r]=c[r]);u&&u(e);while(v.length)v.shift()();return o.push.apply(o,l||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],r=!0,s=1;s<n.length;s++){var c=n[s];0!==a[c]&&(r=!1)}r&&(o.splice(e--,1),t=i(i.s=n[0]))}return t}var r={},a={app:0},o=[];function i(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=t,i.c=r,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)i.d(n,r,function(e){return t[e]}.bind(null,r));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=e,s=s.slice();for(var l=0;l<s.length;l++)e(s[l]);var u=c;o.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";n("85ec")},"0b8c":function(t,e,n){"use strict";n("d3f1")},"1e74":function(t,e,n){},"2a2a":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("e623"),n("e379"),n("5dc8"),n("37e1");var r=n("2b0e"),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",[n("v-main",[n("router-view")],1)],1)},o=[],i={name:"App",components:{},data:function(){return{}}},s=i,c=(n("034f"),n("2877")),l=n("6544"),u=n.n(l),d=n("7496"),v=n("f6c4"),f=Object(c["a"])(s,a,o,!1,null,null,null),g=f.exports;u()(f,{VApp:d["a"],VMain:v["a"]});var h=n("9483");Object(h["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(t){console.error("Error during service worker registration:",t)}});var m=n("8c4f"),p=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",[n("Appbar",{attrs:{text:"Kategorien"}}),n("v-container",[n("v-row",[n("v-btn",{attrs:{to:"/testing"}}),t._l(t.categories,(function(e){return n("Category",{key:e.id,attrs:{category:e}},[t._v(" "+t._s(e)+" ")])})),n("NewCategoryCard")],2)],1)],1)},w=[],b=(n("96cf"),n("1da1")),y=n("bc3a"),x=n.n(y),_=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-col",{staticClass:"px-2 py-2 col-6 col-sm-4",staticStyle:{"object-fit":"cover"}},[n("v-card",{staticClass:"mx-1 my-0",staticStyle:{"background-color":"transparent"},on:{click:function(e){return t.switchtoG(t.category.id)}}},[n("v-img",{staticClass:"white--text align-end",attrs:{"max-height":"45vh",src:"/img/categories/"+t.category.pic+".png"}},[n("v-card-title",{staticStyle:{"word-break":"normal","background-color":"#3B3635"}},[t._v(t._s(t.category.name))])],1)],1),t.dialog?n("Game",{attrs:{words:t.category.words},on:{closed:function(e){t.dialog=!1}}}):t._e()],1)},k=[],C=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-row",{attrs:{justify:"center",align:"center"}},[n("v-dialog",{attrs:{fullscreen:"","hide-overlay":"",transition:"dialog-bottom-transition"},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[n("v-card",{staticClass:"white--text",staticStyle:{"background-color":"tranparent"}},[n("v-toolbar",{attrs:{dark:"",color:"primary"}},[n("v-btn",{attrs:{icon:"",dark:""},on:{click:function(e){return t.$emit("closed",t.dialog)}}},[n("v-icon",[t._v("mdi-close")])],1)],1),n("div",{staticStyle:{position:"absolute"}},[n("Progress",{on:{"time-up":function(e){return t.goToResult()}}})],1),n("v-btn",{on:{click:function(e){return t.tryin()}}},[t._v("get request")]),"G"==t.duringStatus?n("div",{staticClass:"game text-center centercenter",staticStyle:{height:"100vh"}},[n("h1",[t._v(" "+t._s(t.activeWord)+" ")])]):t._e(),"W"==t.duringStatus?n("div",{staticClass:"win text-center centercenter",staticStyle:{height:"100vh"}},[n("v-icon",{staticClass:"iconStyling",attrs:{size:"350",color:"white"}},[t._v("mdi-check")])],1):t._e(),"L"==t.duringStatus?n("div",{staticClass:"lose text-center centercenter",staticStyle:{height:"100vh"}},[n("v-icon",{staticClass:"iconStyling",attrs:{size:"350",color:"white"}},[t._v("mdi-close")])],1):t._e()],1)],1)],1)},S=[],W=(n("ac1f"),n("5319"),n("53ca")),V=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-progress-circular",{attrs:{rotate:90,size:60,width:5,value:t.value,color:"lightgrey"}},[t._v(" "+t._s((t.value/5*3).toFixed(0))+" ")])},O=[],j={data:function(){return{i:0,interval:{},value:100}},beforeDestroy:function(){clearInterval(this.interval)},mounted:function(){var t=this;setTimeout((function(){t.value=0,t.interval=setInterval((function(){if(100===Math.round(t.value,0))return t.$emit("time-up"),t.value=0;t.value+=10/6}),1e3)}),3e3)}},R=j,D=(n("0b8c"),n("490a")),E=Object(c["a"])(R,V,O,!1,null,"1e4883f4",null),A=E.exports;u()(E,{VProgressCircular:D["a"]});var T={data:function(){return{dialog:!0,showWin:!1,duringStatus:"G",activeWord:"",game:{losesWords:[],winsWords:[]},before:"G"}},components:{Progress:A},props:{words:{type:Array}},methods:{getRandomInt:function(t){return Math.floor(Math.random()*Math.floor(t))},newWord:function(){this.activeWord=this.wordsArray[this.getRandomInt(this.wordsArray.length)]},chg:function(t){var e=this;setTimeout((function(){return e.clogText()}),1e3),this.duringStatus=t},clogText:function(){this.newWord(),console.log("Back to game"),this.duringStatus="G"},handleOrientation:function(t){var e=screen.orientation.type;console.log("Fullscreen and locked to ".concat(e,". Ready!"));var n=t.alpha,r=t.gamma;r>=-60&&r<=0&&n<=0?(this.duringStatus="W",this.before="W"):r>=-60&&r<=0&&n>=0?(this.duringStatus="L",this.before="L"):("G"!=this.duringStatus&&("L"==this.before?this.game.losesWords.push(this.activeWord):"W"==this.before&&this.game.winsWords.push(this.activeWord),this.newWord()),this.before=this.duringStatus,this.duringStatus="G")},goToResult:function(){this.game.words=this.$props.words,x.a.post("http://localhost:3000/game",this.game),this.$emit("gameIsFinished"),this.dialog=!1,this.$router.replace("/results")},tryin:function(){var t=this;return Object(b["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(alert("tryin"),e.t0="undefined"!==typeof window.DeviceOrientationEvent,!e.t0){e.next=7;break}return e.next=5,window.DeviceOrientationEvent.requestPermission;case 5:e.t1=Object(W["a"])(e.sent),e.t0="function"===e.t1;case 7:if(!e.t0){e.next=15;break}return e.next=10,t.requestAccelerometer();case 10:return alert("REEQ ACC"),e.next=13,window.DeviceOrientationEvent.requestPermission().then(function(){var t=Object(b["a"])(regeneratorRuntime.mark((function t(e){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return console.log(e),"granted"===e&&(alert("granted tryin"),window.addEventListener("deviceorientation",(function(){}))),alert("7"),t.t0=alert,t.next=6,e;case 6:t.t1=t.sent,(0,t.t0)(t.t1),alert("not granted ");case 9:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()).catch(console.error);case 13:e.next=16;break;case 15:alert("NOT granted tryin");case 16:case"end":return e.stop()}}),e)})))()},requestAccelerometer:function(){var t=this;return Object(b["a"])(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:console.log("requeststarting"),alert("Requested"),n=t,navigator.permissions.query({name:"accelerometer"}).then((function(t){"granted"==t.state?(n.startAccelerometer(),alert("Permission "+t.state)):"prompt"==t.state?(alert("Permission "+t.state),n.startAccelerometer()):"denied"==t.state&&alert("Permission "+t.state),t.onchange=function(){alert("Permission "+t.state)}}));case 4:case"end":return e.stop()}}),e)})))()},report:function(t){console.log("Permission "+t)},startAccelerometer:function(){alert("startAccelerometer"),window.addEventListener("deviceorientation",this.handleOrientation,!0)},startGame:function(){this.newWord(),window.addEventListener("deviceorientation",this.handleOrientation,!0)}},created:function(){var t=this;return Object(b["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:t.game.losesWords=[],t.game.winsWords=[],t.dialog=!0,t.wordsArray=t.$props.words,t.game.words=t.wordsArray,window.DeviceOrientationEvent&&(alert("deviceorientation gibts"),setTimeout((function(){return t.startGame()}),3e3));case 6:case"end":return e.stop()}}),e)})))()},mounted:function(){this.activeWord="Mach dich bereit!",console.log(this.$props.words)}},P=T,G=(n("7ae6"),n("8336")),$=n("b0af"),q=n("169a"),I=n("132d"),N=n("0fd9b"),M=n("71d9"),B=Object(c["a"])(P,C,S,!1,null,"a7ff0f68",null),L=B.exports;u()(B,{VBtn:G["a"],VCard:$["a"],VDialog:q["a"],VIcon:I["a"],VRow:N["a"],VToolbar:M["a"]});var F={data:function(){return{dialog:!1,i:0}},components:{Game:L},props:{category:{type:Object}},methods:{switchtoG:function(){console.log("Das Spiel kann starten"),this.dialog=!0}},created:function(){}},z=F,J=n("99d9"),K=n("62ad"),H=n("adda"),Q=Object(c["a"])(z,_,k,!1,null,"ef79fa14",null),U=Q.exports;u()(Q,{VCard:$["a"],VCardTitle:J["c"],VCol:K["a"],VImg:H["a"]});var X=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-app-bar",{staticClass:"bg-primary",attrs:{app:"",dark:""}},[t._v(" "+t._s(t.text)+" "),t.text?t._e():r("v-btn",{attrs:{to:"/",medium:"",icon:""}},[r("v-icon",[t._v("mdi-arrow-left-thick")])],1),r("v-spacer"),r("v-dialog",{attrs:{persistent:"","max-width":"290"},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on,a=e.attrs;return[r("v-icon",t._g(t._b({staticClass:"mr-2",staticStyle:{color:"gray"},on:{click:function(e){return t.func()}}},"v-icon",a,!1),n),[t._v("mdi-information-outline")])]}}]),model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[r("v-card",[r("v-card-title",{staticClass:"headline"},[t._v(" Impressum ")]),r("v-card-text",[t._v("Fatima Tuana Sirinyurt"),r("br"),t._v("© HTL Wien West, 2021 ")]),r("v-card-actions",[r("v-spacer"),r("v-btn",{attrs:{color:"gray darken-1",text:""},on:{click:function(e){t.dialog=!1}}},[t._v(" Schließen ")])],1)],1)],1),r("v-img",{attrs:{src:n("8a47"),"min-width":30,"max-width":30}})],1)},Y=[],Z={props:{text:{type:String}},data:function(){return{dialog:!1}},methods:{func:function(){console.log("Fatima Tuana Sirinyurt")}}},tt=Z,et=n("40dc"),nt=n("2fa4"),rt=Object(c["a"])(tt,X,Y,!1,null,"daac88f4",null),at=rt.exports;u()(rt,{VAppBar:et["a"],VBtn:G["a"],VCard:$["a"],VCardActions:J["a"],VCardText:J["b"],VCardTitle:J["c"],VDialog:q["a"],VIcon:I["a"],VImg:H["a"],VSpacer:nt["a"]});var ot=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-col",{staticClass:"px-2 py-2 col-6 col-sm-4",staticStyle:{"object-fit":"cover"}},[n("v-card",{staticClass:"mx-1 my-0 ",staticStyle:{height:"100%"},attrs:{to:"/newCategory"}},[n("v-sheet",{staticClass:"mx-auto",staticStyle:{border:"5px dashed #D9D9D9","background-color":"#272727",height:"100%"},attrs:{"max-height":"45vh",rounded:"true",justify:"center",align:"center"}},[n("v-icon",{staticStyle:{color:"#D9D9D9",height:"100%"},attrs:{medium:""}},[t._v("mdi-plus")])],1)],1)],1)},it=[],st={},ct=st,lt=n("8dd9"),ut=Object(c["a"])(ct,ot,it,!1,null,null,null),dt=ut.exports;u()(ut,{VCard:$["a"],VCol:K["a"],VIcon:I["a"],VSheet:lt["a"]});var vt={data:function(){return{categories:[],x:"not yet"}},components:{Category:U,Appbar:at,NewCategoryCard:dt},created:function(){this.getData(),history.pushState({},"","/results"),history.pushState({},"","/newCategory"),history.pushState({},"","/")},methods:{getData:function(){var t=this;return Object(b["a"])(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,x.a.get("http://localhost:3000/categories");case 2:n=e.sent,t.categories=n.data;case 4:case"end":return e.stop()}}),e)})))()}}},ft=vt,gt=(n("d18b"),n("a523")),ht=Object(c["a"])(ft,p,w,!1,null,null,null),mt=ht.exports;u()(ht,{VBtn:G["a"],VContainer:gt["a"],VRow:N["a"]});var pt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticStyle:{height:"100%"}},[t.dialog?n("Game",{attrs:{words:t.words},on:{closed:function(e){t.dialog=!1},gameIsFinished:function(e){return t.re()}}}):t._e(),n("v-btn",{staticClass:"mt-2 mb-2 ml-2 bg-light",attrs:{to:"/",fab:"",dark:""},on:{click:function(e){return t.getGameData()}}},[n("v-icon",[t._v("mdi-arrow-left-thick")])],1),n("div",{staticClass:"mt-10",attrs:{align:"center"}},[n("span",{staticClass:"font-weight-bold",staticStyle:{"font-size":"250px",color:"white"}},[t._v(t._s(t.winsWordscount))]),n("br"),n("v-container",[n("span",{staticStyle:{color:"#777777"}},[t._v(t._s(t.winsWords))]),t._v(" "),n("p",{staticStyle:{color:"#444444"}},[t._v(t._s(t.losesWords))])]),n("v-card"),n("div",{staticStyle:{"margin-bottom":"5vh"}},[n("v-btn",{staticClass:" bg-m",staticStyle:{"background-color":"#444444"},attrs:{fab:"",dark:"","x-large":""},on:{click:function(e){t.dialog=!t.dialog}}},[n("v-icon",[t._v("mdi-rotate-right ")])],1),n("br")],1)],1)],1)},wt=[],bt=(n("99af"),n("a15b"),{data:function(){return{game:{},words:[],winsWordscount:0,winsWords:[],losesWords:[],dialog:!1}},components:{Game:L},methods:{getGameData:function(){var t=this;return Object(b["a"])(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,x.a.get("http://localhost:3000/game");case 2:return n=e.sent,e.next=5,n.data;case 5:t.game=e.sent,t.words=t.game.losesWords.concat(t.game.winsWords),t.winsWordscount=t.game.winsWords.length,t.winsWords=t.game.winsWords.join(" - "),t.losesWords=t.game.losesWords.join(" - ");case 10:case"end":return e.stop()}}),e)})))()},re:function(){var t=this;return Object(b["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.getGameData();case 2:console.log("new game");case 3:case"end":return e.stop()}}),e)})))()}},mounted:function(){this.getGameData()}}),yt=bt,xt=(n("59c5"),Object(c["a"])(yt,pt,wt,!1,null,null,null)),_t=xt.exports;u()(xt,{VBtn:G["a"],VCard:$["a"],VContainer:gt["a"],VIcon:I["a"]});var kt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",{staticClass:"m-0",staticStyle:{height:"100%",position:"relative","background-color":"white"}},[n("Appbar"),n("v-text-field",{attrs:{color:"gray",label:"Name deiner Kategorie",required:"",clearable:"",autofocus:""},model:{value:t.newCategoryName,callback:function(e){t.newCategoryName=e},expression:"newCategoryName"}}),n("v-card",{attrs:{"max-width":"100%",tile:""}},[n("v-list",{directives:[{name:"show",rawName:"v-show",value:t.words.length>0,expression:"words.length > 0 ? true : false"}],staticStyle:{"max-height":"70vh","overflow-y":"auto"}},t._l(t.words,(function(e){return n("v-row",{key:e,staticClass:"mx-1 my-1"},[n("v-col",{staticClass:"col-9 px-0 py-0"},[n("v-list-item",[n("v-list-item-content",[t._v(" "+t._s(e)+" ")])],1)],1),n("v-col",{staticClass:"col-3 centercenter text-center px-1 py-1",staticStyle:{"text-align":"center"}},[n("v-btn",{attrs:{icon:"",small:"",fab:""}},[n("v-icon",{attrs:{small:""},on:{click:function(n){return t.delWort(e)}}},[t._v("mdi-close")])],1)],1)],1)})),1),n("v-dialog",{attrs:{persistent:"","max-width":"600px"},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[n("v-card",[n("v-card-title"),n("v-card-text",[n("v-container",[n("v-row",[n("v-col",{attrs:{cols:"12",sm:"6",md:"4"}},[n("v-text-field",{attrs:{color:"grey",isactive:"true",label:"Neues Wort",required:"",autofocus:""},model:{value:t.newWord,callback:function(e){t.newWord=e},expression:"newWord"}})],1)],1)],1)],1),n("v-card-actions",[n("v-btn",{attrs:{color:"grey darken-1",text:"",fab:""},on:{click:function(e){t.dialog=!1}}},[n("v-icon",[t._v("mdi-close")])],1),n("v-btn",{attrs:{color:"gray darken-1",text:"",fab:""},on:{click:function(e){return t.saveWord()}}},[n("v-icon",[t._v("mdi-check")])],1)],1)],1)],1)],1),n("v-btn",{staticClass:"mt-5 btnBottom",staticStyle:{right:"3vw"},attrs:{fab:"","x-large":"",color:"gray",dark:""},on:{click:function(e){t.dialog=!0}}},[n("v-icon",{attrs:{small:""}},[t._v("mdi-plus")])],1),n("v-btn",{staticClass:"mt-2 btnBottom",attrs:{fab:"",color:"grey",dark:""},on:{click:function(e){return t.finished()}}},[n("v-icon",{attrs:{small:""}},[t._v("mdi-check")])],1)],1)},Ct=[],St=(n("7db0"),n("c975"),n("a434"),{data:function(){return{words:[],dialog:!1,newWord:"",newCategoryName:""}},components:{Appbar:at},methods:{saveWord:function(){var t=this,e=this.words.find((function(e){return e==t.newWord}));""!=this.newWord&&null==e&&this.words.push(this.newWord),this.newWord=""},finished:function(){var t=this;return Object(b["a"])(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n={name:t.newCategoryName,words:t.words},e.next=3,x.a.post("http://localhost:3000/categories",n);case 3:history.go(-1);case 4:case"end":return e.stop()}}),e)})))()},delWort:function(t){var e=this.words.indexOf(t);this.words.splice(e,1)}}}),Wt=St,Vt=(n("e398"),n("8860")),Ot=n("da13"),jt=n("5d23"),Rt=n("8654"),Dt=Object(c["a"])(Wt,kt,Ct,!1,null,"112ea02c",null),Et=Dt.exports;u()(Dt,{VBtn:G["a"],VCard:$["a"],VCardActions:J["a"],VCardText:J["b"],VCardTitle:J["c"],VCol:K["a"],VContainer:gt["a"],VDialog:q["a"],VIcon:I["a"],VList:Vt["a"],VListItem:Ot["a"],VListItemContent:jt["a"],VRow:N["a"],VTextField:Rt["a"]});var At=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("v-btn",{staticStyle:{height:"200px",width:"200px",margin:"50px auto"},on:{click:t.requestT}},[t._v("Request Permission")])],1)},Tt=[],Pt={methods:{requestT:function(){"undefined"!==typeof DeviceMotionEvent&&"function"===typeof DeviceMotionEvent.requestPermission?(alert("enter"),DeviceMotionEvent.requestPermission().then((function(t){alert("resp"+t),"granted"==t&&window.addEventListener("devicemotion",(function(t){console.log(t)}))})).catch(console.error)):alert("DeviceMotionEvent is not defined")}}},Gt=Pt,$t=Object(c["a"])(Gt,At,Tt,!1,null,"455298fc",null),qt=$t.exports;u()($t,{VBtn:G["a"]}),r["a"].use(m["a"]);var It=[{path:"/",name:"Overview",component:mt},{path:"/results",name:"Results",component:_t},{path:"/newCategory",name:"NewCategory",component:Et},{path:"/testing",name:"Testing",component:qt}],Nt=new m["a"]({mode:"history",base:"/",routes:It}),Mt=Nt,Bt=n("f309");r["a"].use(Bt["a"]);var Lt=new Bt["a"]({});r["a"].config.productionTip=!1,new r["a"]({router:Mt,vuetify:Lt,render:function(t){return t(g)}}).$mount("#app")},"59c5":function(t,e,n){"use strict";n("9029")},"7ae6":function(t,e,n){"use strict";n("a69f")},"85ec":function(t,e,n){},"8a47":function(t,e,n){t.exports=n.p+"img/speak-up.afa8e7ea.png"},9029:function(t,e,n){},a69f:function(t,e,n){},d18b:function(t,e,n){"use strict";n("2a2a")},d3f1:function(t,e,n){},e398:function(t,e,n){"use strict";n("1e74")}});