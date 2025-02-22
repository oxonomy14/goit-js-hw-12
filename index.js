import{a as p,i,S as f}from"./assets/vendor-YT4DRQk6.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))a(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const n of s.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&a(n)}).observe(document,{childList:!0,subtree:!0});function l(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerPolicy&&(s.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?s.credentials="include":t.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function a(t){if(t.ep)return;t.ep=!0;const s=l(t);fetch(t.href,s)}})();const e={form:document.querySelector("#search-form"),searchText:document.querySelector(".search-form-input"),btnSearch:document.querySelector(".search-btn"),imageList:document.querySelector(".image-search-list"),btnLoadMore:document.querySelector(".btn-loadmore"),btnLoaderBox:document.querySelector(".btn-loader-box"),txtLoaderMore:document.querySelector(".btn-loader-box-txt")};async function y(o,r,l){const a="48017224-d7e819cca6d5953c75e1fff02";p.defaults.baseURL="https://pixabay.com";const t=new URLSearchParams({q:o,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:l,page:r});try{const s=await p.get(`/api/?key=${a}&${t}`),n=s.data.total,g=s.data.hits;return n===0&&(i.error({title:"Помилка",message:"❌ Немає зображень за вашим запитом. Спробуйте інше слово!",position:"topCenter",timeout:5e3}),e.btnLoadMore.style.display="none"),{totalImages:n,images:g}}catch{i.error({title:"Помилка",message:"❌ Виникла помилка на сервері. Спробуйте ще раз пізніше!",position:"topCenter",timeout:5e3})}}function h(o){const r=o.map(a=>`<li class="image-search-item" id="gallery-item">
              <div class="image-search-box">
               <a 
                href="${a.largeImageURL}">
                <img
                  class="image-search-img"
                  src="${a.webformatURL}"
                  alt="${a.tags}"
                  title="${a.tags}"
                />
                </a>
                <div class="image-search-descr">
                  <ul class="image-search-descr-list">
                    <li class="image-search-descr-item">
                      <h3 class="image-search-descr-subtitle">Likes</h3>
                      <p class="image-search-descr-txt">${a.likes}</p>
                    </li>
                    <li class="image-search-descr-item">
                      <h3 class="image-search-descr-subtitle">Views</h3>
                      <p class="image-search-descr-txt">${a.views}</p>
                    </li>
                    <li class="image-search-descr-item">
                      <h3 class="image-search-descr-subtitle">Comments</h3>
                      <p class="image-search-descr-txt">${a.comments}</p>
                    </li>
                    <li class="image-search-descr-item">
                      <h3 class="image-search-descr-subtitle">Downloads</h3>
                      <p class="image-search-descr-txt">${a.downloads}</p>
                    </li>
                  </ul>
                </div>
              </div>
            </li>`).join("");e.imageList.insertAdjacentHTML("beforeend",r),new f(".image-search-list a",{captionsData:"alt",captionDelay:250}).refresh()}let m="",c=1;const u=40;let d="null";e.btnLoadMore.style.display="none";e.txtLoaderMore.style.display="none";e.form.addEventListener("submit",b);e.btnLoadMore.addEventListener("click",L);async function b(o){if(o.preventDefault(),e.imageList.innerHTML="",c=1,d=0,e.btnLoadMore.style.display="none",m=o.currentTarget.elements.query.value.trim(),m){e.btnLoadMore.style.display="none",e.txtLoaderMore.style.display="block";try{const{totalImages:r,images:l}=await y(m,c,u);if(!r)return;h(l),d=Math.ceil(r/u),d>1?e.btnLoadMore.style.display="block":i.info({title:"Увага",message:"🔹 Ви досягли кінця результатів пошуку",position:"topCenter",timeout:5e3})}catch{i.error({title:"Помилка",message:"❌ Щось зламалося. Треба звернутись до адміністратора сайту! Або спробуйте ще раз пізніше!",position:"topCenter",timeout:5e3})}finally{e.txtLoaderMore.style.display="none"}}else{i.error({title:"Помилка",message:"❌ Введіть в поле пошуку пошукову фразу",position:"topCenter",timeout:2500});return}e.form.reset()}async function L(){c+=1,e.btnLoadMore.style.display="none",e.txtLoaderMore.style.display="block";try{const{totalImages:o,images:r}=await y(m,c,u);if(!o)return;h(r),d=Math.ceil(o/u),x(),c===d?(e.btnLoadMore.style.display="none",i.info({title:"Увага",message:"🔹 Ви досягли кінця результатів пошуку.",position:"topCenter",timeout:5e3})):e.btnLoadMore.style.display="block"}catch{i.error({title:"Помилка",message:"❌ Щось зламалося. Треба звернутись до адміністратора сайту! Або спробуйте ще раз пізніше!",position:"topCenter",timeout:5e3})}finally{e.txtLoaderMore.style.display="none"}}function x(){setTimeout(()=>{if(!e.imageList)return;const o=document.querySelectorAll(".image-search-list li");if(o.length===0)return;const r=o[0].getBoundingClientRect().height;window.scrollBy({top:r*2,behavior:"smooth"})},500)}
//# sourceMappingURL=index.js.map
