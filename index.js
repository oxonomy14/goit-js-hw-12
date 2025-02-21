import{S as g,a as p,i}from"./assets/vendor-hwdYKDic.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))a(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const l of r.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&a(l)}).observe(document,{childList:!0,subtree:!0});function n(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(t){if(t.ep)return;t.ep=!0;const r=n(t);fetch(t.href,r)}})();const e={form:document.querySelector("#search-form"),searchText:document.querySelector(".search-form-input"),btnSearch:document.querySelector(".search-btn"),imageList:document.querySelector(".image-search-list"),btnLoadMore:document.querySelector(".btn-loadmore"),btnLoaderBox:document.querySelector(".btn-loader-box"),txtLoaderMore:document.querySelector(".btn-loader-box-txt")};function f(s){const o=s.map(a=>`<li class="image-search-item" id="gallery-item">
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
            </li>`).join("");e.imageList.insertAdjacentHTML("beforeend",o),new g(".image-search-list a",{captionsData:"alt",captionDelay:250}).refresh()}async function h(s,o,n){const a="48017224-d7e819cca6d5953c75e1fff02";p.defaults.baseURL="https://pixabay.com";const t=new URLSearchParams({q:s,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:n,page:o});try{const r=await p.get(`/api/?key=${a}&${t}`),l=r.data.total,y=r.data.hits;return l===0&&(i.error({title:"Помилка",message:"❌ Немає зображень за вашим запитом. Спробуйте інше слово!",position:"topCenter",timeout:5e3}),e.btnLoadMore.style.display="none"),f(y),l}catch{i.error({title:"Помилка",message:"❌ Виникла помилка на сервері. Спробуйте ще раз пізніше!",position:"topCenter",timeout:5e3})}}let d="",c=1;const m=40;let u="";e.btnLoadMore.style.display="none";e.txtLoaderMore.style.display="none";e.form.addEventListener("submit",b);e.btnLoadMore.addEventListener("click",L);async function b(s){if(s.preventDefault(),e.imageList.innerHTML="",c=1,d=s.currentTarget.elements.query.value.trim(),d){e.btnLoadMore.style.display="none",e.txtLoaderMore.style.display="block";try{const o=await h(d,c,m);if(!o)return;u=Math.ceil(o/m),u>1&&(e.btnLoadMore.style.display="block"),i.info({title:"Увага",message:"🔹 Ви досягли кінця результатів пошуку.",position:"topCenter",timeout:5e3})}catch{i.error({title:"Помилка",message:"❌ Щось зламалося. Треба звернутись до адміністратора сайту! Або спробуйте ще раз пізніше!",position:"topCenter",timeout:5e3})}finally{e.txtLoaderMore.style.display="none"}}else{i.error({title:"Помилка",message:"❌ Введіть в поле пошуку пошукову фразу",position:"topCenter",timeout:2500});return}e.form.reset()}async function L(){c+=1,e.btnLoadMore.style.display="none",e.txtLoaderMore.style.display="block";try{const s=await h(d,c,m);if(!s)return;u=Math.ceil(s/m),x(),c===u?(e.btnLoadMore.style.display="none",i.info({title:"Увага",message:"🔹 Ви досягли кінця результатів пошуку.",position:"topCenter",timeout:5e3})):e.btnLoadMore.style.display="block"}catch{i.error({title:"Помилка",message:"❌ Щось зламалося. Треба звернутись до адміністратора сайту! Або спробуйте ще раз пізніше!",position:"topCenter",timeout:5e3})}finally{e.txtLoaderMore.style.display="none"}}function x(){setTimeout(()=>{if(!e.imageList)return;const s=document.querySelectorAll(".image-search-list li");if(s.length===0)return;const o=s[0].getBoundingClientRect().height;window.scrollBy({top:o*2,behavior:"smooth"})},500)}
//# sourceMappingURL=index.js.map
