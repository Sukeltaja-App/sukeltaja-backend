(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{102:function(e,t,a){},103:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(37),c=a.n(l),i=a(12),u=a(29),o=a(53),s=a(7),d=a.n(s),m=a(9),p="https://www.kyppi.fi/to.aspx?id=112.",g=a(31),E=a.n(g),f={login:function(){var e=Object(m.a)(d.a.mark(function e(t){var a;return d.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E.a.post("/login/BO",t);case 2:return a=e.sent,e.abrupt("return",a.data);case 4:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()},h=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{loggedUser:null},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"LOGIN_USER":case"RELOGIN_USER":case"LOGOUT_USER":return t.data;default:return e}},v=function(e,t,a){return function(){var n=Object(m.a)(d.a.mark(function n(r){return d.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return r({type:"SET_NOTIFICATION",data:{notMessage:t,notClass:e}}),n.next=3,setTimeout(function(){r({type:"CLEAR_NOTIFICATION"})},1e3*a);case 3:case"end":return n.stop()}},n,this)}));return function(e){return n.apply(this,arguments)}}()},w=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{notMessage:"",notClass:"info"},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_NOTIFICATION":return console.log("NOTSWITCH",t.data),t.data;case"CLEAR_NOTIFICATION":return"";default:return e}},b={getAll:function(){var e=Object(m.a)(d.a.mark(function e(){var t;return d.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E.a.get("/events/unauth");case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},j=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"INIT_EVENTS":return t.data.sort(function(e,t){return new Date(t.startdate)-new Date(e.startdate)});case"CLEAR_EVENTS":return null;default:return e}},O=Object(u.c)({authentication:h,notification:w,events:j}),y=Object(u.d)(O,Object(u.a)(o.a)),S=a(113),k=a(108),U=a(115),x=a(107),N=a(111),C=a(110),T=a(112),F=Object(i.b)(function(e){return{notMessage:e.notification.notMessage,notClass:e.notification.notClass}},null)(function(e){return void 0===e.notMessage||null===e.notMessage||""===e.notMessage?null:(console.log("Notmessage",e.notMessage),r.a.createElement("div",null,r.a.createElement("div",null,"\xa0"),r.a.createElement("div",null,r.a.createElement(T.a,{variant:e.notClass},e.notMessage)),r.a.createElement("div",null,"\xa0")))}),I=a(14),L=a(114),D=a(109),R=a(104),_={loginUser:function(e,t){return function(){var a=Object(m.a)(d.a.mark(function a(n){var r;return d.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,f.login({username:e,password:t});case 2:return r=a.sent,a.next=5,window.localStorage.setItem("sukeltajaBOUser",JSON.stringify(r));case 5:n({type:"LOGIN_USER",data:{loggedUser:r}});case 6:case"end":return a.stop()}},a,this)}));return function(e){return a.apply(this,arguments)}}()},reLoginUser:function(e){return function(){var t=Object(m.a)(d.a.mark(function t(a){return d.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:a({type:"RELOGIN_USER",data:{loggedUser:e}});case 1:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}()},setNotification:v},A=Object(i.b)(function(e){return{loggedUser:e.authentication.loggedUser}},_)(function(e){var t=Object(n.useState)(""),a=Object(I.a)(t,2),l=a[0],c=a[1],i=Object(n.useState)(""),u=Object(I.a)(i,2),o=u[0],s=u[1],p=function(){var e=Object(m.a)(d.a.mark(function e(){return d.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,console.log("Filling tanks...");case 2:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}();Object(n.useEffect)(function(){console.log("Checking if we have a token...");var t=function(){var e=window.localStorage.getItem("sukeltajaBOUser");return e&&e.length>0&&"null"!==e?JSON.parse(e):null}();void 0!==t&&null!==t&&(console.log("Storage user was",t),e.reLoginUser(t),p())},[]);var g=function(){var t=Object(m.a)(d.a.mark(function t(a){return d.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return console.log("Logging in",l),a.preventDefault(),t.prev=2,t.next=5,e.loginUser(l,o);case 5:p(),e.setNotification("success","Tervetuloa! Muista hengitt\xe4\xe4 rauhallisesti!",5),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(2),e.setNotification("danger","K\xe4ytt\xe4j\xe4tunnus tai salasana on virheellinen",5);case 12:case"end":return t.stop()}},t,this,[[2,9]])}));return function(e){return t.apply(this,arguments)}}();return void 0===e.loggedUser||null===e.loggedUser?r.a.createElement("div",null,r.a.createElement("h2",null,"Sukeltaja Back Office"),r.a.createElement(D.a,{onSubmit:g},r.a.createElement(D.a.Group,null,r.a.createElement(D.a.Label,null,"K\xe4ytt\xe4j\xe4tunnus"),r.a.createElement(D.a.Control,{type:"text",name:"username",placeholder:"Sy\xf6t\xe4 k\xe4ytt\xe4j\xe4tunnus",onChange:function(e){c(e.target.value)}})),r.a.createElement(D.a.Group,null,r.a.createElement(D.a.Label,null,"Salasana"),r.a.createElement(D.a.Control,{type:"password",name:"password",placeholder:"Sy\xf6t\xe4 salasana",onChange:function(e){s(e.target.value)}})),r.a.createElement(D.a.Group,null,r.a.createElement(R.a,{variant:"primary",type:"submit"},"Kirjaudu")),r.a.createElement("p",null))):"/"!==window.location.pathname?r.a.createElement(L.a,{to:"/"}):null}),M={logoutUser:function(){return function(){var e=Object(m.a)(d.a.mark(function e(t){return d.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:t({type:"LOGOUT_USER",data:{loggedUser:null}});case 1:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()},setNotification:v},G=Object(i.b)(function(e){return{loggedUser:e.authentication.loggedUser}},M)(function(e){var t=function(){var t=Object(m.a)(d.a.mark(function t(a){return d.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return a.preventDefault(),t.prev=1,console.log("Logging out user",e.loggedUser.username),t.next=5,e.logoutUser();case 5:return window.localStorage.removeItem("sukeltajaBOUser"),e.setNotification("success","Olet kirjautunut ulos",5),t.abrupt("return");case 10:t.prev=10,t.t0=t.catch(1),e.setNotification("danger","Kautta Neptunuksen! Uloskirjautuminen meni pieleen!",10);case 13:case"end":return t.stop()}},t,this,[[1,10]])}));return function(e){return t.apply(this,arguments)}}();return void 0===e.loggedUser||null===e.loggedUser?r.a.createElement(r.a.Fragment,null,"\xa0"):r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{style:{color:"black"}},"Sukeltamassa ",e.loggedUser.username,"\xa0",r.a.createElement(R.a,{variant:"primary",size:"sm",type:"button",onClick:t},"Kirjaudu ulos")))}),B={setNotification:v},J=Object(i.b)(function(e){return{loggedUser:e.authentication.loggedUser}},B)(function(e){var t=function(){var e=Object(m.a)(d.a.mark(function e(){return d.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,console.log("Filling tanks...");case 2:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}();return Object(n.useEffect)(function(){console.log("Checking if we have a token...");var e=function(){var e=window.localStorage.getItem("sukeltajaBOUser");return e&&e.length>0&&"null"!==e?JSON.parse(e):null}();void 0!==e&&null!==e&&(console.log("Storage user was",e),t())},[]),void 0!==e.loggedUser||null!==e.loggedUser?r.a.createElement("div",null,r.a.createElement("h2",null,"Sukeltaja Back Office")):"/"!==window.location.pathname?r.a.createElement(L.a,{to:"/"}):null}),K=a(105),z=a(11),V=r.a.forwardRef(function(e,t){var a=Object(n.useState)(!1),l=Object(I.a)(a,2),c=l[0],i=l[1],u=c?"detailshidden":e.shownStyle,o=c?e.shownStyle:"detailshidden",s=function(){i(!c)};return Object(n.useImperativeHandle)(t,function(){return{toggleVisibility:s}}),r.a.createElement(r.a.Fragment,null,r.a.createElement("tr",{id:u,onClick:s},e.showAlways),r.a.createElement("tr",{id:o,onClick:s},e.showAlways),r.a.createElement("tr",{id:o,onClick:s},e.children))}),H=function(e){var t=function(e){return Math.floor(e)},a=function(e){return Math.floor(60*(e-t(e)))};return"".concat(t(e),"\xb0 ").concat(a(e),"' ").concat(function(e){return 60*(60*(e-t(e))-a(e))}(e).toFixed(4),'"')},P=function(e){var t=function(e){return e?"".concat(p).concat(e):void 0};if(e.target){var a=e.target;return r.a.createElement(r.a.Fragment,null,r.a.createElement("tr",null,r.a.createElement("td",{id:"caption",width:"10%"},"Kohde:"),r.a.createElement("td",{width:"60%",colSpan:"2"},a.name),r.a.createElement("td",{width:"30%",colSpan:"3"},r.a.createElement("a",{href:t(a.mj_id)},t(a.mj_id)))),r.a.createElement("tr",null,r.a.createElement("td",{id:"caption",width:"10%"},"Tyyppi:"),r.a.createElement("td",{width:"60%",colSpan:"2"},a.type),r.a.createElement("td",{width:"30%",colSpan:"3"},"\xa0")),r.a.createElement("tr",null,r.a.createElement("td",{id:"caption",width:"10%"},"Materiaali:"),r.a.createElement("td",{width:"60%",colSpan:"2"},a.material),r.a.createElement("td",{width:"30%",colSpan:"3"},"\xa0")),r.a.createElement("tr",null,r.a.createElement("td",{id:"caption",width:"10%"},"Sijainti:"),r.a.createElement("td",{width:"40%",colSpan:"2"},"".concat(H(a.latitude)),a.latitude>0?" N ":" S ","".concat(H(a.longitude)),a.longitude>0?" E ":" W "),r.a.createElement("td",{width:"30%",colSpan:"3"},"\xa0")))}return null},W=function(e){if(e.dive){var t=e.dive;return r.a.createElement("tr",null,r.a.createElement("td",{width:"20%"},t.user),r.a.createElement("td",{width:"30%"},t.latitude,", ",t.longitude),r.a.createElement("td",{id:"caption",width:"10%"},"\xa0"),r.a.createElement("td",{id:"caption",width:"10%"},"\xa0"),r.a.createElement("td",{width:"15%"},"\xa0"),r.a.createElement("td",{width:"15%"},"\xa0"))}return null},q=function(e){var t=e.dives;if(t&&t.length>0)return r.a.createElement(r.a.Fragment,null,r.a.createElement("tr",null,r.a.createElement("td",{id:"caption",width:"20%"},"Sukeltajat"),r.a.createElement("td",{id:"caption",width:"30%"},"Sijainti"),r.a.createElement("td",{id:"caption",width:"10%"},"\xa0"),r.a.createElement("td",{id:"caption",width:"10%"},"\xa0"),r.a.createElement("td",{width:"15%"},"\xa0"),r.a.createElement("td",{width:"15%"},"\xa0")),t.map(function(e){return r.a.createElement(W,{key:e._id,dive:e})}));return null},Q=a(57);z.Settings.defaultLocale="fi";var X=function(e){var t=function(e){return e.toLocaleString(Object(Q.a)({weekday:"short"},z.DateTime.DATETIME_SHORT))};return t("string"===typeof e?z.DateTime.fromISO(e):z.DateTime.fromJSDate(e))},Y=function(e){var t=r.a.createRef();return r.a.createElement(V,{showAlways:r.a.createElement(r.a.Fragment,null,r.a.createElement("td",{width:"17.5%"},X(e.divingEvent.startdate)),r.a.createElement("td",{width:"17.5%"},X(e.divingEvent.enddate)),r.a.createElement("td",{width:"15%"},e.divingEvent.creator.username),r.a.createElement("td",{width:"50%",colSpan:"3"},e.divingEvent.title)),shownStyle:"eventdetailsshown",ref:t},r.a.createElement("td",{colSpan:"6"},r.a.createElement(K.a,{size:"sm",width:"100%"},r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("td",{colSpan:"6"},e.divingEvent.description)),r.a.createElement(P,{target:e.divingEvent.target}),r.a.createElement(q,{dives:e.divingEvent.dives})))))},Z=a(106),$=a(55),ee=function(e){return r.a.createElement("div",null,r.a.createElement("div",{id:"caption"},"Suodata n\xe4ytett\xe4vi\xe4 tapahtumia"),r.a.createElement(D.a,null,r.a.createElement(Z.a,null,r.a.createElement($.a,null,r.a.createElement(D.a.Label,null,"Alkaen"),r.a.createElement(D.a.Control,{type:"text",value:e.startFilter,onChange:e.handleStartFiltering}),r.a.createElement(D.a.Text,{className:"text-muted"},"Rajaa tapahtuman alkup\xe4iv\xe4n mukaan")),r.a.createElement($.a,null,r.a.createElement(D.a.Label,null,"P\xe4\xe4ttyen"),r.a.createElement(D.a.Control,{type:"text",value:e.endFilter,onChange:e.handleEndFiltering}),r.a.createElement(D.a.Text,{className:"text-muted"},"Rajaa tapahtuman loppup\xe4iv\xe4n mukaan")),r.a.createElement($.a,null,r.a.createElement(D.a.Label,null,"Perustaja"),r.a.createElement(D.a.Control,{type:"text",value:e.userFilter,onChange:e.handleUserFiltering}),r.a.createElement(D.a.Text,{className:"text-muted"},"Rajaa tapahtuman perustajan k\xe4ytt\xe4j\xe4nimen osalla"))),r.a.createElement(Z.a,null,r.a.createElement($.a,null,r.a.createElement(D.a.Label,null,"Nimi"),r.a.createElement(D.a.Control,{type:"text",value:e.titleFilter,onChange:e.handleTitleFiltering}),r.a.createElement(D.a.Text,{className:"text-muted"},"Rajaa tapahtuman nimen osalla")),r.a.createElement($.a,null,r.a.createElement(D.a.Label,null,"Kuvaus"),r.a.createElement(D.a.Control,{type:"text",value:e.descriptionFilter,onChange:e.handleDescriptionFiltering}),r.a.createElement(D.a.Text,{className:"text-muted"},"Rajaa tapahtuman kuvauksen osalla")),r.a.createElement($.a,null,r.a.createElement(D.a.Label,null,"Kohde"),r.a.createElement(D.a.Control,{type:"text",value:e.targetFilter,onChange:e.handleTargetFiltering}),r.a.createElement(D.a.Text,{className:"text-muted"},"Rajaa kohteen nimen osalla")))))},te={setNotification:v,initializeEvents:function(){return function(){var e=Object(m.a)(d.a.mark(function e(t){var a;return d.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.getAll();case 2:a=e.sent,t({type:"INIT_EVENTS",data:a});case 4:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()}},ae=Object(i.b)(function(e){return{events:e.events,loggedUser:e.authentication.loggedUser}},te)(function(e){z.Settings.defaultLocale="fi";var t=Object(n.useState)(""),a=Object(I.a)(t,2),l=a[0],c=a[1],i=Object(n.useState)(""),u=Object(I.a)(i,2),o=u[0],s=u[1],p=Object(n.useState)(""),g=Object(I.a)(p,2),E=g[0],f=g[1],h=Object(n.useState)(""),v=Object(I.a)(h,2),w=v[0],b=v[1],j=Object(n.useState)(""),O=Object(I.a)(j,2),y=O[0],S=O[1],k=Object(n.useState)(""),U=Object(I.a)(k,2),x=U[0],N=U[1],C=Object(n.useState)(""),T=Object(I.a)(C,2),F=T[0],L=T[1],D=Object(n.useState)(""),R=Object(I.a)(D,2),_=R[0],A=R[1],M=function(){var t=Object(m.a)(d.a.mark(function t(){return d.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.initializeEvents();case 2:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}();function G(e){return e instanceof Date&&!isNaN(e)}Object(n.useEffect)(function(){M()},[]);var B=e.events.filter(function(e){return(0===l.length||new Date(e.startdate)>=new Date(o))&&(0===E.length||new Date(e.enddate)<=new Date(w))&&(!e.title&&0===y.length||e.title&&e.title.toUpperCase().includes(y.toUpperCase()))&&(!e.description&&0===x.length||e.description&&e.description.toUpperCase().includes(x.toUpperCase()))&&(!e.target&&0===F.length||e.target&&e.target.name.toUpperCase().includes(F.toUpperCase()))&&(!e.creator.username&&0===_.length||e.creator&&e.creator.username.toUpperCase().includes(_.toUpperCase()))});return r.a.createElement("div",null,r.a.createElement("h2",null,"Sukellustapahtumat"),r.a.createElement(ee,{startFilter:l,handleStartFiltering:function(e){try{var t=z.DateTime.fromFormat(e.target.value,"d.M.yyyy","fi-FI").toJSDate();G(t)&&s(t),c(e.target.value)}catch(a){console.log("Error with startdate",e.target.value)}},endFilter:E,handleEndFiltering:function(e){try{var t=z.DateTime.fromFormat(e.target.value,"d.M.yyyy","fi-FI").plus({days:1}).plus({minutes:-1}).toJSDate();G(t)&&b(t),f(e.target.value)}catch(a){console.log("Error with enddate",e.target.value)}},titleFilter:y,handleTitleFiltering:function(e){S(e.target.value)},descriptionFilter:x,handleDescriptionFiltering:function(e){N(e.target.value)},targetFilter:F,handleTargetFiltering:function(e){L(e.target.value)},userFilter:_,handleUserFiltering:function(e){A(e.target.value)}}),r.a.createElement("div",{id:"caption"},"N\xe4ytet\xe4\xe4n ",B.length,"/",e.events.length," tapahtumaa"),r.a.createElement(K.a,{striped:!0,bordered:!0,hover:!0,size:"sm"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Alkuaika"),r.a.createElement("th",null,"Loppuaika"),r.a.createElement("th",null,"Perustaja"),r.a.createElement("th",{colSpan:"3"},"Tapahtuma"))),r.a.createElement("tbody",null,B.map(function(e){return r.a.createElement(Y,{key:e._id,divingEvent:e})}))))}),ne=Object(i.b)(function(e){return{events:e.events,loggedUser:e.authentication.loggedUser}},null)(function(e){var t={};return void 0===e.loggedUser||null===e.loggedUser?r.a.createElement(x.a,null,r.a.createElement("div",{className:"justify-content-sm-center"},"\xa0"),r.a.createElement("div",{className:"justify-content-sm-center"},r.a.createElement(F,null)),r.a.createElement("div",{className:"justify-content-sm-center"},r.a.createElement(A,null))):r.a.createElement(x.a,null,r.a.createElement(S.a,null,r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement(N.a,{fixed:"top",collapseOnSelect:!0,expand:"md",bg:"warning",variant:"dark"},r.a.createElement(N.a.Toggle,{"aria-controls":"responsive-navbar-nav"}),r.a.createElement(N.a.Collapse,{id:"responsive-navbar-nav"},r.a.createElement(C.a,null,r.a.createElement(C.a.Link,{as:"span"},r.a.createElement(k.a,{style:t,to:"/"},"Alkuun")),r.a.createElement(C.a.Link,{as:"span"},r.a.createElement(k.a,{style:t,to:"/events"},"Sukellustapahtumat")),r.a.createElement(N.a.Text,{as:"span"},r.a.createElement(G,null)))))),r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement(F,null),r.a.createElement(U.a,{exact:!0,path:"/",render:function(){return r.a.createElement(J,null)}}),r.a.createElement(U.a,{exact:!0,path:"/events",render:function(){return r.a.createElement(ae,null)}}))))))});a(102);c.a.render(r.a.createElement(i.a,{store:y},r.a.createElement(ne,null)),document.getElementById("root"))},58:function(e,t,a){e.exports=a(103)}},[[58,1,2]]]);
//# sourceMappingURL=main.3e4807ee.chunk.js.map