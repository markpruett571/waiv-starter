import{I as e,c as t,p as r,h as n,A as s}from"./vendor.3bdf2f3d.js";let o;const a={};function i(e){switch(e){case"./Pages/App.vue":return function(e,t){if(!t)return e();if(void 0===o){const e=document.createElement("link").relList;o=e&&e.supports&&e.supports("modulepreload")?"modulepreload":"preload"}return Promise.all(t.map((e=>{if(e in a)return;a[e]=!0;const t=e.endsWith(".css"),r=t?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${e}"]${r}`))return;const n=document.createElement("link");return n.rel=t?"stylesheet":o,t||(n.as="script",n.crossOrigin=""),n.href=e,document.head.appendChild(n),t?new Promise(((e,t)=>{n.addEventListener("load",e),n.addEventListener("error",t)})):void 0}))).then((()=>e()))}((()=>import("./App.ea3224b5.js")),["/assets/App.ea3224b5.js","/assets/vendor.3bdf2f3d.js"]);default:return Promise.reject(new Error("Unknown variable dynamic import: "+e))}}e.init();const d=document.getElementById("app");t({render:()=>n(s,{initialPage:JSON.parse(d.dataset.page),resolveComponent:async e=>(await i(`./Pages/${e}.vue`)).default})}).use(r).mount(d);