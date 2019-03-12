(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{108:function(e,t,a){},109:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(37),c=a.n(l),i=a(12),u=a(29),o=a(55),s=a(7),d=a.n(s),m=a(9),p="https://www.kyppi.fi/to.aspx?id=112.",g=a(31),f=a.n(g),v={login:function(){var e=Object(m.a)(d.a.mark(function e(t){var a;return d.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.a.post("api/login/BO",t);case 2:return a=e.sent,e.abrupt("return",a.data);case 4:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()},E=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{loggedUser:null},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"LOGIN_USER":case"RELOGIN_USER":case"LOGOUT_USER":return t.data;default:return e}},h=function(e,t,a){return function(){var n=Object(m.a)(d.a.mark(function n(r){return d.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return r({type:"SET_NOTIFICATION",data:{notMessage:t,notClass:e}}),n.next=3,setTimeout(function(){r({type:"CLEAR_NOTIFICATION"})},1e3*a);case 3:case"end":return n.stop()}},n,this)}));return function(e){return n.apply(this,arguments)}}()},w=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{notMessage:"",notClass:"info"},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_NOTIFICATION":return console.log("NOTSWITCH",t.data),t.data;case"CLEAR_NOTIFICATION":return"";default:return e}},b={getAll:function(){var e=Object(m.a)(d.a.mark(function e(){var t;return d.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.a.get("api/events/unauth");case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},y=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"INIT_EVENTS":return t.data.sort(function(e,t){return new Date(t.startdate)-new Date(e.startdate)});case"CLEAR_EVENTS":return null;default:return e}},j=Object(u.c)({authentication:E,notification:w,events:y}),O=Object(u.d)(j,Object(u.a)(o.a)),k=a(121),S=a(114),U=a(119),x=a(113),C=a(117),N=a(116),T=a(118),F=Object(i.b)(function(e){return{notMessage:e.notification.notMessage,notClass:e.notification.notClass}},null)(function(e){return void 0===e.notMessage||null===e.notMessage||""===e.notMessage?null:(console.log("Notmessage",e.notMessage),r.a.createElement("div",null,r.a.createElement("div",null,"\xa0"),r.a.createElement("div",null,r.a.createElement(T.a,{variant:e.notClass},e.notMessage)),r.a.createElement("div",null,"\xa0")))}),I=a(14),L=a(120),D=a(115),R=a(110),A={loginUser:function(e,t){return function(){var a=Object(m.a)(d.a.mark(function a(n){var r;return d.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,v.login({username:e,password:t});case 2:return r=a.sent,a.next=5,window.localStorage.setItem("sukeltajaBOUser",JSON.stringify(r));case 5:n({type:"LOGIN_USER",data:{loggedUser:r}});case 6:case"end":return a.stop()}},a,this)}));return function(e){return a.apply(this,arguments)}}()},reLoginUser:function(e){return function(){var t=Object(m.a)(d.a.mark(function t(a){return d.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:a({type:"RELOGIN_USER",data:{loggedUser:e}});case 1:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}()},setNotification:h},_=Object(i.b)(function(e){return{loggedUser:e.authentication.loggedUser}},A)(function(e){var t=Object(n.useState)(""),a=Object(I.a)(t,2),l=a[0],c=a[1],i=Object(n.useState)(""),u=Object(I.a)(i,2),o=u[0],s=u[1],p=function(){var e=Object(m.a)(d.a.mark(function e(){return d.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,console.log("Filling tanks...");case 2:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}();Object(n.useEffect)(function(){console.log("Checking if we have a token...");var t=function(){var e=window.localStorage.getItem("sukeltajaBOUser");return e&&e.length>0&&"null"!==e?JSON.parse(e):null}();void 0!==t&&null!==t&&(console.log("Storage user was",t),e.reLoginUser(t),p())},[]);var g=function(){var t=Object(m.a)(d.a.mark(function t(a){return d.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return console.log("Logging in",l),a.preventDefault(),t.prev=2,t.next=5,e.loginUser(l,o);case 5:p(),e.setNotification("success","Tervetuloa! Muista hengitt\xe4\xe4 rauhallisesti!",5),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(2),e.setNotification("danger","K\xe4ytt\xe4j\xe4tunnus tai salasana on virheellinen",5);case 12:case"end":return t.stop()}},t,this,[[2,9]])}));return function(e){return t.apply(this,arguments)}}();return void 0===e.loggedUser||null===e.loggedUser?r.a.createElement("div",null,r.a.createElement("h2",null,"Sukeltaja Back Office"),r.a.createElement(D.a,{onSubmit:g},r.a.createElement(D.a.Group,null,r.a.createElement(D.a.Label,null,"K\xe4ytt\xe4j\xe4tunnus"),r.a.createElement(D.a.Control,{type:"text",name:"username",placeholder:"Sy\xf6t\xe4 k\xe4ytt\xe4j\xe4tunnus",onChange:function(e){c(e.target.value)}})),r.a.createElement(D.a.Group,null,r.a.createElement(D.a.Label,null,"Salasana"),r.a.createElement(D.a.Control,{type:"password",name:"password",placeholder:"Sy\xf6t\xe4 salasana",onChange:function(e){s(e.target.value)}})),r.a.createElement(D.a.Group,null,r.a.createElement(R.a,{variant:"primary",type:"submit"},"Kirjaudu")),r.a.createElement("p",null))):"/"!==window.location.pathname?r.a.createElement(L.a,{to:"/"}):null}),M={logoutUser:function(){return function(){var e=Object(m.a)(d.a.mark(function e(t){return d.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:t({type:"LOGOUT_USER",data:{loggedUser:null}});case 1:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()},setNotification:h},G=Object(i.b)(function(e){return{loggedUser:e.authentication.loggedUser}},M)(function(e){var t=function(){var t=Object(m.a)(d.a.mark(function t(a){return d.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return a.preventDefault(),t.prev=1,console.log("Logging out user",e.loggedUser.username),t.next=5,e.logoutUser();case 5:return window.localStorage.removeItem("sukeltajaBOUser"),e.setNotification("success","Olet kirjautunut ulos",5),t.abrupt("return");case 10:t.prev=10,t.t0=t.catch(1),e.setNotification("danger","Kautta Neptunuksen! Uloskirjautuminen meni pieleen!",10);case 13:case"end":return t.stop()}},t,this,[[1,10]])}));return function(e){return t.apply(this,arguments)}}();return void 0===e.loggedUser||null===e.loggedUser?r.a.createElement(r.a.Fragment,null,"\xa0"):r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{style:{color:"black"}},"Sukeltamassa ",e.loggedUser.username,"\xa0",r.a.createElement(R.a,{variant:"primary",size:"sm",type:"button",onClick:t},"Kirjaudu ulos")))}),K={setNotification:h},B=Object(i.b)(function(e){return{loggedUser:e.authentication.loggedUser}},K)(function(e){var t=function(){var e=Object(m.a)(d.a.mark(function e(){return d.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,console.log("Filling tanks...");case 2:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}();return Object(n.useEffect)(function(){console.log("Checking if we have a token...");var e=function(){var e=window.localStorage.getItem("sukeltajaBOUser");return e&&e.length>0&&"null"!==e?JSON.parse(e):null}();void 0!==e&&null!==e&&(console.log("Storage user was",e),t())},[]),void 0!==e.loggedUser||null!==e.loggedUser?r.a.createElement("div",null,r.a.createElement("h2",null,"Sukeltaja Back Office")):"/"!==window.location.pathname?r.a.createElement(L.a,{to:"/"}):null}),J=a(111),V=a(11),z=a(58),P=r.a.forwardRef(function(e,t){var a=Object(n.useState)(!1),l=Object(I.a)(a,2),c=l[0],i=l[1],u=c?"detailshidden":e.shownStyle,o=c?e.shownStyle:"detailshidden",s=function(){i(!c)};return Object(n.useImperativeHandle)(t,function(){return{toggleVisibility:s}}),r.a.createElement(r.a.Fragment,null,r.a.createElement("tr",{id:u,onClick:s},e.showAlways),r.a.createElement("tr",{id:o,onClick:s},e.showAlways),r.a.createElement("tr",{id:o,onClick:s},e.children))}),H=function(e){var t=function(e){return Math.floor(e)},a=function(e){return Math.floor(60*(e-t(e)))};return"".concat(t(e),"\xb0 ").concat(a(e),"' ").concat(function(e){return 60*(60*(e-t(e))-a(e))}(e).toFixed(4),'"')},W=function(e){var t=function(e){return e?"".concat(p).concat(e):void 0};if(e.target){var a=e.target;return r.a.createElement(r.a.Fragment,null,r.a.createElement("tr",null,r.a.createElement("td",{id:"caption",width:"10%"},"Kohde:"),r.a.createElement("td",{width:"60%",colSpan:"2"},a.name),r.a.createElement("td",{width:"30%",colSpan:"3"},r.a.createElement("a",{href:t(a.mj_id)},t(a.mj_id)))),r.a.createElement("tr",null,r.a.createElement("td",{id:"caption",width:"10%"},"Tyyppi:"),r.a.createElement("td",{width:"60%",colSpan:"2"},a.type),r.a.createElement("td",{width:"30%",colSpan:"3"},"\xa0")),r.a.createElement("tr",null,r.a.createElement("td",{id:"caption",width:"10%"},"Materiaali:"),r.a.createElement("td",{width:"60%",colSpan:"2"},a.material),r.a.createElement("td",{width:"30%",colSpan:"3"},"\xa0")),r.a.createElement("tr",null,r.a.createElement("td",{id:"caption",width:"10%"},"Sijainti:"),r.a.createElement("td",{width:"40%",colSpan:"2"},"".concat(H(a.latitude)),a.latitude>0?" N ":" S ","".concat(H(a.longitude)),a.longitude>0?" E ":" W "),r.a.createElement("td",{width:"30%",colSpan:"3"},"\xa0")))}return null},q=a(60);V.Settings.defaultLocale="fi";var Q=function(e){var t=function(e){return e.toLocaleString(Object(q.a)({weekday:"short"},V.DateTime.DATETIME_SHORT))};return t("string"===typeof e?V.DateTime.fromISO(e):V.DateTime.fromJSDate(e))},X=function(e){var t=r.a.createRef();return r.a.createElement(P,{showAlways:r.a.createElement(r.a.Fragment,null,r.a.createElement("td",{width:"17.5%"},Q(e.divingEvent.startdate)),r.a.createElement("td",{width:"17.5%"},Q(e.divingEvent.enddate)),r.a.createElement("td",{width:"15%"},e.divingEvent.creator.username),r.a.createElement("td",{width:"50%",colSpan:"3"},e.divingEvent.title)),shownStyle:"eventdetailsshown",ref:t},r.a.createElement("td",{colSpan:"6"},r.a.createElement(J.a,{size:"sm",width:"100%"},r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("td",{colSpan:"6"},e.divingEvent.description)),r.a.createElement(W,{target:e.divingEvent.target})))))},Y=a(112),Z=a(57),$=function(e){return r.a.createElement("div",null,r.a.createElement("div",{id:"caption"},"Suodata n\xe4ytett\xe4vi\xe4 tapahtumia"),r.a.createElement(D.a,null,r.a.createElement(Y.a,null,r.a.createElement(Z.a,null,r.a.createElement(D.a.Label,null,"Alkaen"),r.a.createElement(D.a.Control,{type:"text",placeholder:"pp.kk.vvvv",value:e.startFilter,onChange:e.handleStartFiltering}),r.a.createElement(D.a.Text,{className:"text-muted"},"Rajaa tapahtuman alkup\xe4iv\xe4n mukaan")),r.a.createElement(Z.a,null,r.a.createElement(D.a.Label,null,"P\xe4\xe4ttyen"),r.a.createElement(D.a.Control,{type:"text",placeholder:"pp.kk.vvvv",value:e.endFilter,onChange:e.handleEndFiltering}),r.a.createElement(D.a.Text,{className:"text-muted"},"Rajaa tapahtuman loppup\xe4iv\xe4n mukaan")),r.a.createElement(Z.a,null,r.a.createElement(D.a.Label,null,"Perustaja"),r.a.createElement(D.a.Control,{type:"text",value:e.userFilter,onChange:e.handleUserFiltering}),r.a.createElement(D.a.Text,{className:"text-muted"},"Rajaa tapahtuman perustajan k\xe4ytt\xe4j\xe4nimen osalla"))),r.a.createElement(Y.a,null,r.a.createElement(Z.a,null,r.a.createElement(D.a.Label,null,"Nimi"),r.a.createElement(D.a.Control,{type:"text",value:e.titleFilter,onChange:e.handleTitleFiltering}),r.a.createElement(D.a.Text,{className:"text-muted"},"Rajaa tapahtuman nimen osalla")),r.a.createElement(Z.a,null,r.a.createElement(D.a.Label,null,"Kuvaus"),r.a.createElement(D.a.Control,{type:"text",value:e.descriptionFilter,onChange:e.handleDescriptionFiltering}),r.a.createElement(D.a.Text,{className:"text-muted"},"Rajaa tapahtuman kuvauksen osalla")),r.a.createElement(Z.a,null,r.a.createElement(D.a.Label,null,"Kohde"),r.a.createElement(D.a.Control,{type:"text",value:e.targetFilter,onChange:e.handleTargetFiltering}),r.a.createElement(D.a.Text,{className:"text-muted"},"Rajaa kohteen nimen osalla")))))},ee=[{label:"Tapahtuma",key:"title"},{label:"Kuvaus",key:"description"},{label:"Alkup\xe4iv\xe4",key:"startdate"},{label:"Loppup\xe4iv\xe4",key:"enddate"},{label:"Perustaja",key:"creator.username"},{label:"P\xe4\xe4k\xe4ytt\xe4j\xe4t",key:"admins.username"},{label:"Osallistujat",key:"participants.username"}],te={setNotification:h,initializeEvents:function(){return function(){var e=Object(m.a)(d.a.mark(function e(t){var a;return d.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.getAll();case 2:a=e.sent,t({type:"INIT_EVENTS",data:a});case 4:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()}},ae=Object(i.b)(function(e){return{events:e.events,loggedUser:e.authentication.loggedUser}},te)(function(e){V.Settings.defaultLocale="fi";var t=Object(n.useState)(""),a=Object(I.a)(t,2),l=a[0],c=a[1],i=Object(n.useState)(""),u=Object(I.a)(i,2),o=u[0],s=u[1],p=Object(n.useState)(""),g=Object(I.a)(p,2),f=g[0],v=g[1],E=Object(n.useState)(""),h=Object(I.a)(E,2),w=h[0],b=h[1],y=Object(n.useState)(""),j=Object(I.a)(y,2),O=j[0],k=j[1],S=Object(n.useState)(""),U=Object(I.a)(S,2),x=U[0],C=U[1],N=Object(n.useState)(""),T=Object(I.a)(N,2),F=T[0],L=T[1],D=Object(n.useState)(""),R=Object(I.a)(D,2),A=R[0],_=R[1],M=function(){var t=Object(m.a)(d.a.mark(function t(){return d.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.initializeEvents();case 2:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}();function G(e){return e instanceof Date&&!isNaN(e)}Object(n.useEffect)(function(){M()},[]);var K=e.events.filter(function(e){return(0===l.length||new Date(e.startdate)>=new Date(o))&&(0===f.length||new Date(e.enddate)<=new Date(w))&&(!e.title&&0===O.length||e.title&&e.title.toUpperCase().includes(O.toUpperCase()))&&(!e.description&&0===x.length||e.description&&e.description.toUpperCase().includes(x.toUpperCase()))&&(!e.target&&0===F.length||e.target&&e.target.name.toUpperCase().includes(F.toUpperCase()))&&(!e.creator.username&&0===A.length||e.creator&&e.creator.username.toUpperCase().includes(A.toUpperCase()))});return r.a.createElement("div",null,r.a.createElement("h2",null,"Sukellustapahtumat"),r.a.createElement($,{startFilter:l,handleStartFiltering:function(e){try{var t=V.DateTime.fromFormat(e.target.value,"d.M.yyyy","fi-FI").toJSDate();G(t)&&s(t),c(e.target.value)}catch(a){console.log("Error with startdate",e.target.value)}},endFilter:f,handleEndFiltering:function(e){try{var t=V.DateTime.fromFormat(e.target.value,"d.M.yyyy","fi-FI").plus({days:1}).plus({minutes:-1}).toJSDate();G(t)&&b(t),v(e.target.value)}catch(a){console.log("Error with enddate",e.target.value)}},titleFilter:O,handleTitleFiltering:function(e){k(e.target.value)},descriptionFilter:x,handleDescriptionFiltering:function(e){C(e.target.value)},targetFilter:F,handleTargetFiltering:function(e){L(e.target.value)},userFilter:A,handleUserFiltering:function(e){_(e.target.value)}}),r.a.createElement("div",{id:"caption"},"N\xe4ytet\xe4\xe4n ",K.length,"/",e.events.length," tapahtumaa. \xa0",void 0!==K&&null!==K?r.a.createElement(z.CSVLink,{data:K,headers:ee,filename:"Sukellustapahtumat.csv",separator:";"},"Lataa CSV"):null),r.a.createElement(J.a,{striped:!0,bordered:!0,hover:!0,size:"sm"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Alkuaika"),r.a.createElement("th",null,"Loppuaika"),r.a.createElement("th",null,"Perustaja"),r.a.createElement("th",{colSpan:"3"},"Tapahtuma"))),r.a.createElement("tbody",null,K.map(function(e){return r.a.createElement(X,{key:e._id,divingEvent:e})}))))}),ne=Object(i.b)(function(e){return{events:e.events,loggedUser:e.authentication.loggedUser}},null)(function(e){var t={};return void 0===e.loggedUser||null===e.loggedUser?r.a.createElement(x.a,null,r.a.createElement("div",{className:"justify-content-sm-center"},"\xa0"),r.a.createElement("div",{className:"justify-content-sm-center"},r.a.createElement(F,null)),r.a.createElement("div",{className:"justify-content-sm-center"},r.a.createElement(_,null))):r.a.createElement(x.a,null,r.a.createElement(k.a,null,r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement(C.a,{fixed:"top",collapseOnSelect:!0,expand:"md",bg:"warning",variant:"dark"},r.a.createElement(C.a.Toggle,{"aria-controls":"responsive-navbar-nav"}),r.a.createElement(C.a.Collapse,{id:"responsive-navbar-nav"},r.a.createElement(N.a,null,r.a.createElement(N.a.Link,{as:"span"},r.a.createElement(S.a,{style:t,to:"/"},"Alkuun")),r.a.createElement(N.a.Link,{as:"span"},r.a.createElement(S.a,{style:t,to:"/events"},"Sukellustapahtumat")),r.a.createElement(C.a.Text,{as:"span"},r.a.createElement(G,null)))))),r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement(F,null),r.a.createElement(U.a,{exact:!0,path:"/",render:function(){return r.a.createElement(B,null)}}),r.a.createElement(U.a,{exact:!0,path:"/events",render:function(){return r.a.createElement(ae,null)}}))))))});a(108);c.a.render(r.a.createElement(i.a,{store:O},r.a.createElement(ne,null)),document.getElementById("root"))},61:function(e,t,a){e.exports=a(109)}},[[61,1,2]]]);
//# sourceMappingURL=main.b3c97639.chunk.js.map