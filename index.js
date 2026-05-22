import{a as f,S as d,i as a}from"./assets/vendor-DcHCnVjq.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&o(n)}).observe(document,{childList:!0,subtree:!0});function i(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(e){if(e.ep)return;e.ep=!0;const r=i(e);fetch(e.href,r)}})();const p="https://pixabay.com/api/",m="55973348-f792568b70242ee6d4e3ad983";async function y(t){return(await f.get(p,{params:{key:m,q:t,image_type:"photo",orientation:"horizontal",safesearch:!0}})).data.hits}let g=new d(".gallery a");function h(t,s){const i=t.map(o=>`
      <li class="gallery-item">
        <a class="gallery-link" href="${o.largeImageURL}">
          <img
            class="gallery-image"
            src="${o.webformatURL}"
            alt="${o.tags}"
          />
        </a>

        <div class="info">
          <p class="info-item">
            <b>Likes</b>
            ${o.likes}
          </p>

          <p class="info-item">
            <b>Views</b>
            ${o.views}
          </p>

          <p class="info-item">
            <b>Comments</b>
            ${o.comments}
          </p>

          <p class="info-item">
            <b>Downloads</b>
            ${o.downloads}
          </p>
        </div>
      </li>
    `).join("");s.innerHTML=i,g.refresh()}function b(t){t.innerHTML=""}function L(t){t.style.display="block"}function w(t){t.style.display="none"}const l=document.querySelector(".form"),c=document.querySelector(".gallery"),u=document.querySelector(".loader");l.addEventListener("submit",async t=>{t.preventDefault();const s=t.target.elements["search-text"].value.trim();if(s===""){a.error({message:"Please fill in the search field!",position:"topRight"});return}b(c),L(u);try{const i=await y(s);if(i.length===0){a.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}h(i,c)}catch{a.error({message:"Something went wrong!",position:"topRight"})}finally{w(u)}l.reset()});
//# sourceMappingURL=index.js.map
