(this.webpackJsonprestcountries=this.webpackJsonprestcountries||[]).push([[0],[,,,,function(e,a,t){e.exports=t(11)},,,,,function(e,a,t){},function(e,a,t){},function(e,a,t){"use strict";t.r(a);var n=t(0),c=t.n(n),r=t(3),l=t.n(r),o=(t(9),t(1));t(10);var s=function(e){var a=Object.keys(e.search);console.log("para",a);var t=Object.values(e.search);console.log("value",t);var n=e.country;return c.a.createElement("div",{className:"container"},n.map((function(e){if(e[a]==t)return c.a.createElement("div",{className:"card",style:{width:"18rem",border:"2px solid black"}},c.a.createElement("img",{src:e.flag,className:"card-img-top",alt:"..."}),c.a.createElement("div",{className:"card-body"},c.a.createElement("h5",{className:"card-title"},e.name)))})))};function i(e,a){switch(a.type){case m.ADD_REGION:case m.ADD_CAPITAL:case m.ADD_LANGUAGE:case m.ADD_ALPHA2:case m.ADD_POPULATION:return a.payload}}var m={ADD_REGION:"addregion",ADD_CAPITAL:"addcapital",ADD_LANGUAGE:"addlanguage",ADD_ALPHA2:"addalpha",ADD_POPULATION:"addpop"};var u=function(){var e=Object(n.useReducer)(i,{}),a=Object(o.a)(e,2),t=a[0],r=a[1],l=c.a.useState([]),u=Object(o.a)(l,2),p=u[0],d=u[1];return Object(n.useEffect)((function(){fetch("https://restcountries.eu/rest/v2/all").then((function(e){return e.json()})).then((function(e){return d(e)}))}),[]),console.log("in app",t),c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"jumbotron"},c.a.createElement("h1",{className:"text-primary"},"Display Countries")),c.a.createElement("h5",{className:"text-primary"},"Search By:"),c.a.createElement("div",{class:"row"},c.a.createElement("div",{className:"col-sm-2"},c.a.createElement("input",{type:"text",class:"form-control",id:"region",placeholder:"Region"}),c.a.createElement("button",{type:"submit",className:"btn btn-primary",onClick:function(){return e=document.getElementById("region").value,void r({type:m.ADD_REGION,payload:{region:e}});var e}},"Search")),c.a.createElement("div",{className:"col-sm-2"},c.a.createElement("input",{type:"text",class:"form-control",id:"capital",placeholder:"Capital"}),c.a.createElement("button",{type:"submit",className:"btn btn-primary",onClick:function(){return e=document.getElementById("capital").value,void r({type:m.ADD_CAPITAL,payload:{capital:e}});var e}},"Search")),c.a.createElement("div",{className:"col-sm-2"},c.a.createElement("input",{type:"text",class:"form-control",id:"language",placeholder:"Language"}),c.a.createElement("button",{type:"submit",className:"btn btn-primary",onClick:function(){return e=document.getElementById("language").value,void r({type:m.ADD_LANGUAGE,payload:{languages:e}});var e}},"Search")),c.a.createElement("div",{className:"col-sm-2"},c.a.createElement("input",{type:"text",class:"form-control",id:"alpha2",placeholder:"Alpha 2 Code"}),c.a.createElement("button",{type:"submit",className:"btn btn-primary",onClick:function(){return e=document.getElementById("alpha2").value,void r({type:m.ADD_ALPHA2,payload:{alpha2Code:e}});var e}},"Search")),c.a.createElement("div",{className:"col-sm-2"},c.a.createElement("input",{type:"text",class:"form-control",id:"pop",placeholder:"Population"}),c.a.createElement("button",{type:"submit",className:"btn btn-primary",onClick:function(){return e=document.getElementById("pop").value,void r({type:m.ADD_POPULATION,payload:{population:e}});var e}},"Search")),c.a.createElement(s,{country:p,search:t})),c.a.createElement("div",null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(u,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[4,1,2]]]);
//# sourceMappingURL=main.ba933c16.chunk.js.map