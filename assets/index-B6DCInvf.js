(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&c(n)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function c(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();let a;function y(o,r){const s=o.coords.latitude,c=o.coords.longitude,e=o.timestamp,t=r.coords.latitude,n=r.coords.longitude,m=r.timestamp,h=6371,l=(t-s)*Math.PI/180,u=(n-c)*Math.PI/180,d=Math.sin(l/2)*Math.sin(l/2)+Math.cos(s*Math.PI/180)*Math.cos(t*Math.PI/180)*Math.sin(u/2)*Math.sin(u/2),p=2*Math.atan2(Math.sqrt(d),Math.sqrt(1-d)),g=h*p,M=m-e;return g/(M/1e3)}const f=document.querySelector("#app"),i=document.querySelector("#log");navigator.geolocation.watchPosition(o=>{if(i!==null&&(i.innerHTML+=`cords: ${JSON.stringify(o.coords)}
timestamp: ${o.timestamp}
`),a===void 0){a=o;return}const r=y(a,o);f!==null&&(f.innerHTML=r.toFixed(2))},o=>{i!==null&&(i.innerHTML+=`${o.message}
`),console.log("err")},{enableHighAccuracy:!0,timeout:0,maximumAge:0});
