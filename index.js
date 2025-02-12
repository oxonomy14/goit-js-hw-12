import{S as m,a as l,i as n}from"./assets/vendor-CNpXvI_o.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const o of t.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function r(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}})();const c={form:document.querySelector("#search-form"),searchText:document.querySelector(".search-form-input"),btnSearch:document.querySelector(".search-btn"),imageList:document.querySelector(".image-search-list")};function u(a){const s=a.map(r=>`<li class="image-search-list">
              <div class="image-search-box">
               <a 
                href="${r.largeImageURL}">
                <img
                  class="image-search-img"
                  src="${r.webformatURL}"
                  alt="${r.tags}"
                  title="${r.tags}"
                />
                </a>
                <div class="image-search-descr">
                  <ul class="image-search-descr-list">
                    <li class="image-search-descr-item">
                      <h3 class="image-search-descr-subtitle">Likes</h3>
                      <p class="image-search-descr-txt">${r.likes}</p>
                    </li>
                    <li class="image-search-descr-item">
                      <h3 class="image-search-descr-subtitle">Views</h3>
                      <p class="image-search-descr-txt">${r.views}</p>
                    </li>
                    <li class="image-search-descr-item">
                      <h3 class="image-search-descr-subtitle">Comments</h3>
                      <p class="image-search-descr-txt">${r.comments}</p>
                    </li>
                    <li class="image-search-descr-item">
                      <h3 class="image-search-descr-subtitle">Downloads</h3>
                      <p class="image-search-descr-txt">${r.downloads}</p>
                    </li>
                  </ul>
                </div>
              </div>
            </li>`).join("");c.imageList.insertAdjacentHTML("beforeend",s),new m(".image-search-list a",{captionsData:"alt",captionDelay:250}).refresh()}function d(){document.querySelector(".loader").style.display="block"}function h(){document.querySelector(".loader").style.display="none"}function f(a){const s="48017224-d7e819cca6d5953c75e1fff02";l.defaults.baseURL="https://pixabay.com";const i=new URLSearchParams({q:a,image_type:"photo",orientation:"horizontal",safesearch:!0});d(),l.get(`/api/?key=${s}&${i}`).then(r=>{if(Number.parseInt(r.data.total)>0){const e=r.data.hits;u(e)}else{n.error({title:"Помилка",message:"❌ Sorry, there are no images matching your search query. Please try again!",position:"topCenter",timeout:5e3});return}}).catch(r=>console.error("Помилка завантаження:",r)).finally(()=>{h()})}c.form.addEventListener("submit",g);function g(a){a.preventDefault(),c.imageList.innerHTML="";const s=a.currentTarget.elements.query.value.trim();if(s)f(s);else{n.error({title:"Помилка",message:"❌ Введіть в поле пошуку пошукову фразу",position:"topCenter",timeout:2500});return}c.form.reset()}
//# sourceMappingURL=index.js.map
