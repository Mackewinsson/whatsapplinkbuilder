(this.webpackJsonpwhatsapplinkbuilder=this.webpackJsonpwhatsapplinkbuilder||[]).push([[0],{12:function(e,t,a){e.exports=a(22)},17:function(e,t,a){},22:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(10),o=a.n(l),c=(a(17),a(7)),i=a(24),s=a(25),m=a(11),u=a(26),p=a(27),h=function(){var e=Object(n.useState)(""),t=Object(c.a)(e,2),a=t[0],l=t[1],o=Object(n.useState)(""),h=Object(c.a)(o,2),E=h[0],d=h[1];return r.a.createElement(i.a,{Fluid:!0},r.a.createElement(s.a,{className:"justify-content-center text-center"},r.a.createElement(m.a,{xs:12,lg:6},r.a.createElement("img",{src:"./logo.png",alt:"",className:"img-fluid"}),r.a.createElement("h1",{className:"title"},"Whatsapp link builder"))),r.a.createElement(s.a,null,r.a.createElement(m.a,null,r.a.createElement("div",{className:"link"},"api.whatsapp.com/send?phone=".concat(E,"&text=").concat(a)))),r.a.createElement(s.a,{className:"justify-content-center"},r.a.createElement(m.a,{xs:10},r.a.createElement(u.a,{onSubmit:function(e){e.preventDefault(),console.log(E)}},r.a.createElement(u.a.Group,{controlId:"formBasicNumber"},r.a.createElement(u.a.Label,{className:"textlabel"},"Whatsapp Number"),r.a.createElement(u.a.Control,{type:"text",value:E,placeholder:"Enter whatsapp number",onChange:function(e){return d(e.target.value)}})),r.a.createElement(u.a.Group,{controlId:"formBasicText"},r.a.createElement(u.a.Label,{className:"textlabel"},"Message"),r.a.createElement(u.a.Control,{as:"textarea",placeholder:"Enter text for your link",rows:3,value:a,onChange:function(e){return l(e.target.value)}})),r.a.createElement(p.a,{style:{height:100,marginTop:50},variant:"primary",size:"lg",block:!0,onClick:function(e){var t=document.querySelector(".link").innerText.replace(/\++/g,"");navigator.clipboard.writeText(t);var a=e.target;a.style.color="greenyellow",a.innerText="Copied";var n=a.parentElement,r=document.createElement("SPAN");r.innerText="*** Whatsapp link is in your CLIPBOAD ***",r.style.color="yellow",n.insertBefore(r,a),setTimeout((function(){a.style.color="white",a.innerText="Copy",n.removeChild(r)}),1e3)},className:"animate__lightSpeedOutLeft"},"Copy")))))},E=(a(21),function(){return r.a.createElement(h,null)});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(E,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[12,1,2]]]);
//# sourceMappingURL=main.b91bc00f.chunk.js.map