/* empty css                      */import{e as m,S as f,O as p}from"./assets/vendor-ea3035a3.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const c of t.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&r(c)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function r(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();const y=document.querySelector(".js-button-menu");y.addEventListener("click",()=>{window.location.href="fullMenu.html"});document.addEventListener("DOMContentLoaded",function(){m.init("gG8XGHDepX1bUiphF");const n=document.getElementById("contact-form"),o=document.getElementById("success-modal"),s=document.getElementById("modal-close-btn"),r=document.querySelector(".modal-backdrop");n.addEventListener("submit",function(e){e.preventDefault();const t={email:document.getElementById("email").value,phone:document.getElementById("phone").value,name:document.getElementById("name").value};m.send("service_2482erg","template_viskrid",t).then(function(){o.classList.add("show"),n.reset()}).catch(function(c){alert("❌ Error! Please try again later."),console.error("Error:",c)})}),s.addEventListener("click",function(){o.classList.remove("show")}),r.addEventListener("click",function(){o.classList.remove("show")})});document.addEventListener("DOMContentLoaded",function(){const n=document.getElementById("gallery-container"),o=41,s="gallery/thumbs/",r="gallery/full/",e=".jpg";for(let t=1;t<=o;t++){const c=document.createElement("div");c.classList.add("swiper-slide");const l=document.createElement("a");l.href=`${r}${t}${e}`,l.setAttribute("data-fancybox","gallery"),l.setAttribute("data-caption",`foto ${t}`);const d=document.createElement("img");d.src=`${s}${t}${e}`,d.alt=`Gallery imeges ${t}`,l.appendChild(d),c.appendChild(l),n.appendChild(c)}new f(".mySwiper",{slidesPerView:1,spaceBetween:10,pagination:!1,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},autoplay:{delay:2e3,disableOnInteraction:!1},breakpoints:{1024:{slidesPerView:3,spaceBetween:30}}}),p.bind("[data-fancybox='gallery']",{})});const u=document.querySelector(".js-btn-burger-menu"),g=document.querySelector(".js-close-menu"),i=document.querySelector(".js-burger-menu"),v=document.querySelectorAll(".js-menu-link"),E=document.querySelector(".js-logo");console.log(u);function b(){i.classList.add("active"),i.style.visibility="visible",document.body.classList.add("no-scroll")}function a(){i.classList.remove("active"),document.body.classList.remove("no-scroll"),setTimeout(()=>{i.style.visibility="hidden"},300)}u.addEventListener("click",b);g.addEventListener("click",a);document.addEventListener("click",n=>{!i.contains(n.target)&&!u.contains(n.target)&&a()});document.querySelectorAll(".js-menu-link").forEach(n=>{n.addEventListener("click",function(o){o.preventDefault();const s=this.getAttribute("href"),r=document.querySelector(s);r&&r.scrollIntoView({behavior:"smooth"})})});v.forEach(n=>{n.addEventListener("click",a)});E.addEventListener("click",a);
//# sourceMappingURL=commonHelpers2.js.map
