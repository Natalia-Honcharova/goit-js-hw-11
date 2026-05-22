import{a as f,S as d,i as n}from"./assets/vendor-eHhMKBvE.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))a(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function s(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function a(t){if(t.ep)return;t.ep=!0;const o=s(t);fetch(t.href,o)}})();const p="https://pixabay.com/api/",m="55973348-f792568b70242ee6d4e3ad983";async function y(r){return(await f.get(p,{params:{key:m,q:r,image_type:"photo",orientation:"horizontal",safesearch:!0}})).data.hits}function g(r){return r.map(e=>`
        <li class="gallery-item">
          <a class="gallery-link" href="${e.largeImageURL}">
            <img
              class="gallery-image"
              src="${e.webformatURL}"
              alt="${e.tags}"
            />
          </a>

          <div class="info">
            <p class="info-item">
              <b>Likes</b>
              ${e.likes}
            </p>

            <p class="info-item">
              <b>Views</b>
              ${e.views}
            </p>

            <p class="info-item">
              <b>Comments</b>
              ${e.comments}
            </p>

            <p class="info-item">
              <b>Downloads</b>
              ${e.downloads}
            </p>
          </div>
        </li>
      `).join("")}function h(r){r.innerHTML=""}function b(r){r.style.display="block"}function L(r){r.style.display="none"}const l=document.querySelector(".form"),c=document.querySelector(".gallery"),u=document.querySelector(".loader");let w=new d(".gallery a");l.addEventListener("submit",async r=>{r.preventDefault();const e=r.target.elements["search-text"].value.trim();if(e===""){n.error({message:"Please fill in the search field!",position:"topRight"});return}h(c),b(u);try{const s=await y(e);if(s.length===0){n.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}c.innerHTML=g(s),w.refresh()}catch{n.error({message:"Something went wrong!",position:"topRight"})}finally{L(u)}l.reset()});
//# sourceMappingURL=index.js.map
