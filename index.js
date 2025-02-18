import{S as f,a as m,i as l}from"./assets/vendor-hwdYKDic.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const c of t.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&o(c)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}})();const r={form:document.querySelector("#search-form"),searchText:document.querySelector(".search-form-input"),btnSearch:document.querySelector(".search-btn"),imageList:document.querySelector(".image-search-list"),btnLoadMore:document.querySelector(".btn-loadmore"),btnLoaderBox:document.querySelector(".btn-loader-box"),txtLoaderMore:document.querySelector(".btn-loader-box-txt")};function p(a){const s=a.map(o=>`<li class="image-search-item" id="gallery-item">
              <div class="image-search-box">
               <a 
                href="${o.largeImageURL}">
                <img
                  class="image-search-img"
                  src="${o.webformatURL}"
                  alt="${o.tags}"
                  title="${o.tags}"
                />
                </a>
                <div class="image-search-descr">
                  <ul class="image-search-descr-list">
                    <li class="image-search-descr-item">
                      <h3 class="image-search-descr-subtitle">Likes</h3>
                      <p class="image-search-descr-txt">${o.likes}</p>
                    </li>
                    <li class="image-search-descr-item">
                      <h3 class="image-search-descr-subtitle">Views</h3>
                      <p class="image-search-descr-txt">${o.views}</p>
                    </li>
                    <li class="image-search-descr-item">
                      <h3 class="image-search-descr-subtitle">Comments</h3>
                      <p class="image-search-descr-txt">${o.comments}</p>
                    </li>
                    <li class="image-search-descr-item">
                      <h3 class="image-search-descr-subtitle">Downloads</h3>
                      <p class="image-search-descr-txt">${o.downloads}</p>
                    </li>
                  </ul>
                </div>
              </div>
            </li>`).join("");r.imageList.insertAdjacentHTML("beforeend",s),new f(".image-search-list a",{captionsData:"alt",captionDelay:250}).refresh()}function b(){document.querySelector("#image-search").classList.remove("hidden"),document.querySelector(".loader-container").style.display="none"}async function u(a,s,i){const o="48017224-d7e819cca6d5953c75e1fff02";m.defaults.baseURL="https://pixabay.com";const e=new URLSearchParams({q:a,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:i,page:s});await m.get(`/api/?key=${o}&${e}`).then(t=>{const c=t.data.total,y=Math.ceil(c/i);if(Number.parseInt(t.data.total)>0){const g=t.data.hits;if(p(g),s+=1,s<y)r.btnLoadMore.style.display="block";else{r.btnLoadMore.style.display="none",l.error({title:"Images no have any more",message:"❌ We're sorry, but you've reached the end of search results.",position:"topCenter",timeout:5e3});return}}else{l.error({title:"Помилка",message:"❌ Sorry, there are no images matching your search query. Please try again!",position:"topCenter",timeout:5e3});return}}).catch(t=>l.error({title:"Помилка",message:"❌ Виникла помилка завантаження на стороні сервера Pixabay. Спробуйте іншим разом!",position:"topCenter",timeout:5e3})).finally(()=>{b()})}let n="",d=1;const h=6;r.form.addEventListener("submit",L);r.btnLoadMore.addEventListener("click",x);r.btnLoadMore.style.display="none";r.txtLoaderMore.style.display="none";async function L(a){if(a.preventDefault(),r.imageList.innerHTML="",d=1,n=a.currentTarget.elements.query.value.trim(),n)try{const s=await u(n,d,h)}catch(s){console.log(s)}finally{r.txtLoaderMore.style.display="none"}else{l.error({title:"Помилка",message:"❌ Введіть в поле пошуку пошукову фразу",position:"topCenter",timeout:2500});return}r.form.reset()}async function x(){d+=1;try{r.btnLoadMore.style.display="none",r.txtLoaderMore.style.display="block";const a=await u(n,d,h);S()}catch(a){console.error(a)}finally{r.txtLoaderMore.style.display="none",r.btnLoadMore.style.display="block"}}function S(){setTimeout(()=>{if(!r.imageList)return;const a=document.querySelectorAll(".image-search-list li");if(a.length===0)return;const s=a[0].getBoundingClientRect().height;window.scrollBy({top:s*2,behavior:"smooth"})},500)}
//# sourceMappingURL=index.js.map
