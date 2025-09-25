import{a as u,S as d,i as a}from"./assets/vendor-CYMld6vM.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function t(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(e){if(e.ep)return;e.ep=!0;const r=t(e);fetch(e.href,r)}})();const f="51344129-a8075834a2d0391c119eb3239";function p(n){return u.get("https://pixabay.com/api/",{params:{key:f,q:n,image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(o=>o.data)}const c=document.querySelector(".gallery"),l=document.querySelector(".loader"),m=new d(".gallery a",{captionsData:"alt",captionDelay:250});function h(n){const o=n.map(t=>`
        <li class="gallery-item">
        <a href="${t.largeImageURL}">
        <img src="${t.webformatURL}" alt="${t.tags}"/>
        </a>
        <div class="info">
        <p><b>Likes:</b> ${t.likes}</p>
        <p><b>Views:</b> ${t.views}</p>
        <p><b>Comments:</b> ${t.comments}</p>
        <p><b>Downloads:</b> ${t.downloads}</p>
        </div>
        </li>`).join("");c.insertAdjacentHTML("beforeend",o),m.refresh()}function y(){c.innerHTML=""}function g(){l.classList.remove("is-hidden")}function b(){l.classList.add("is-hidden")}const L=document.querySelector(".form");document.querySelector("input");document.querySelector(".gallery");L.addEventListener("submit",S);function S(n){n.preventDefault();const t=n.currentTarget.elements["search-text"].value.trim();t&&(y(),g(),p(t).then(i=>{if(i.hits.length===0){a.info({title:"Info",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}h(i.hits)}).catch(i=>{console.error("Помилка при отриманні зображення:",i),a.info({title:"Error",message:"Something went wrong. Please try again later.",position:"topRight"})}).finally(()=>{b()}))}
//# sourceMappingURL=index.js.map
