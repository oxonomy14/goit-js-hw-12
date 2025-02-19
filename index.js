import{S as f,a as m,i as d}from"./assets/vendor-hwdYKDic.js";(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const c of t.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&s(c)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}})();const r={form:document.querySelector("#search-form"),searchText:document.querySelector(".search-form-input"),btnSearch:document.querySelector(".search-btn"),imageList:document.querySelector(".image-search-list"),btnLoadMore:document.querySelector(".btn-loadmore"),btnLoaderBox:document.querySelector(".btn-loader-box"),txtLoaderMore:document.querySelector(".btn-loader-box-txt")};function p(o){const a=o.map(s=>`<li class="image-search-item" id="gallery-item">
              <div class="image-search-box">
               <a 
                href="${s.largeImageURL}">
                <img
                  class="image-search-img"
                  src="${s.webformatURL}"
                  alt="${s.tags}"
                  title="${s.tags}"
                />
                </a>
                <div class="image-search-descr">
                  <ul class="image-search-descr-list">
                    <li class="image-search-descr-item">
                      <h3 class="image-search-descr-subtitle">Likes</h3>
                      <p class="image-search-descr-txt">${s.likes}</p>
                    </li>
                    <li class="image-search-descr-item">
                      <h3 class="image-search-descr-subtitle">Views</h3>
                      <p class="image-search-descr-txt">${s.views}</p>
                    </li>
                    <li class="image-search-descr-item">
                      <h3 class="image-search-descr-subtitle">Comments</h3>
                      <p class="image-search-descr-txt">${s.comments}</p>
                    </li>
                    <li class="image-search-descr-item">
                      <h3 class="image-search-descr-subtitle">Downloads</h3>
                      <p class="image-search-descr-txt">${s.downloads}</p>
                    </li>
                  </ul>
                </div>
              </div>
            </li>`).join("");r.imageList.insertAdjacentHTML("beforeend",a),new f(".image-search-list a",{captionsData:"alt",captionDelay:250}).refresh()}function b(){document.querySelector("#image-search").classList.remove("hidden"),document.querySelector(".loader-container").style.display="none"}async function u(o,a,i){const s="48017224-d7e819cca6d5953c75e1fff02";m.defaults.baseURL="https://pixabay.com";const e=new URLSearchParams({q:o,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:i,page:a});try{const t=await m.get(`/api/?key=${s}&${e}`),c=t.data.total,y=Math.ceil(c/i);if(Number.parseInt(t.data.total)>0){const g=t.data.hits;if(p(g),a<y)r.btnLoadMore.style.display="block";else{r.btnLoadMore.style.display="none",d.error({title:"Images no have any more",message:"❌ We're sorry, but you've reached the end of search results.",position:"topCenter",timeout:5e3});return}}else{d.error({title:"Помилка",message:"❌ Sorry, there are no images matching your search query. Please try again!",position:"topCenter",timeout:5e3});return}}catch{}finally{b()}}let l="",n=1;const h=40;r.btnLoadMore.style.display="none";r.txtLoaderMore.style.display="none";r.form.addEventListener("submit",L);r.btnLoadMore.addEventListener("click",x);function L(o){if(o.preventDefault(),r.imageList.innerHTML="",n=1,l=o.currentTarget.elements.query.value.trim(),l)try{u(l,n,h)}catch(a){console.log(a)}finally{r.txtLoaderMore.style.display="none"}else{d.error({title:"Помилка",message:"❌ Введіть в поле пошуку пошукову фразу",position:"topCenter",timeout:2500});return}r.form.reset()}async function x(){n+=1;try{r.btnLoadMore.style.display="none",r.txtLoaderMore.style.display="block",await u(l,n,h),S()}catch(o){console.error(o)}finally{r.txtLoaderMore.style.display="none",r.btnLoadMore.style.display="block"}}function S(){setTimeout(()=>{if(!r.imageList)return;const o=document.querySelectorAll(".image-search-list li");if(o.length===0)return;const a=o[0].getBoundingClientRect().height;window.scrollBy({top:a*2,behavior:"smooth"})},500)}
//# sourceMappingURL=index.js.map
