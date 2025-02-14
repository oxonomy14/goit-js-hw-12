import{S as m,a as n,i as l}from"./assets/vendor-CNpXvI_o.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&t(o)}).observe(document,{childList:!0,subtree:!0});function i(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function t(e){if(e.ep)return;e.ep=!0;const r=i(e);fetch(e.href,r)}})();const c={form:document.querySelector("#search-form"),searchText:document.querySelector(".search-form-input"),btnSearch:document.querySelector(".search-btn"),imageList:document.querySelector(".image-search-list")};function d(a){const s=a.map(t=>`<li class="image-search-list">
              <div class="image-search-box">
               <a 
                href="${t.largeImageURL}">
                <img
                  class="image-search-img"
                  src="${t.webformatURL}"
                  alt="${t.tags}"
                  title="${t.tags}"
                />
                </a>
                <div class="image-search-descr">
                  <ul class="image-search-descr-list">
                    <li class="image-search-descr-item">
                      <h3 class="image-search-descr-subtitle">Likes</h3>
                      <p class="image-search-descr-txt">${t.likes}</p>
                    </li>
                    <li class="image-search-descr-item">
                      <h3 class="image-search-descr-subtitle">Views</h3>
                      <p class="image-search-descr-txt">${t.views}</p>
                    </li>
                    <li class="image-search-descr-item">
                      <h3 class="image-search-descr-subtitle">Comments</h3>
                      <p class="image-search-descr-txt">${t.comments}</p>
                    </li>
                    <li class="image-search-descr-item">
                      <h3 class="image-search-descr-subtitle">Downloads</h3>
                      <p class="image-search-descr-txt">${t.downloads}</p>
                    </li>
                  </ul>
                </div>
              </div>
            </li>`).join("");c.imageList.insertAdjacentHTML("beforeend",s),new m(".image-search-list a",{captionsData:"alt",captionDelay:250}).refresh()}function u(){document.querySelector("#image-search").classList.add("hidden"),document.querySelector(".loader-container").style.display="flex"}function h(){document.querySelector("#image-search").classList.remove("hidden"),document.querySelector(".loader-container").style.display="none"}function f(a){const s="48017224-d7e819cca6d5953c75e1fff02";n.defaults.baseURL="https://pixabay.com";const i=new URLSearchParams({q:a,image_type:"photo",orientation:"horizontal",safesearch:!0});u(),n.get(`/api/?key=${s}&${i}`).then(t=>{if(Number.parseInt(t.data.total)>0){const e=t.data.hits;d(e)}else{l.error({title:"Помилка",message:"❌ Sorry, there are no images matching your search query. Please try again!",position:"topCenter",timeout:5e3});return}}).catch(t=>l.error({title:"Помилка",message:"❌ Виникла помилка завантаження на стороні сервера Pixabay. Спробуйте іншим разом!",position:"topCenter",timeout:5e3})).finally(()=>{h()})}c.form.addEventListener("submit",g);function g(a){a.preventDefault(),c.imageList.innerHTML="";const s=a.currentTarget.elements.query.value.trim();if(s)f(s);else{l.error({title:"Помилка",message:"❌ Введіть в поле пошуку пошукову фразу",position:"topCenter",timeout:2500});return}c.form.reset()}
//# sourceMappingURL=index.js.map
