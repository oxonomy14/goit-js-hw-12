import { refs } from './refs';
//import { galleryBox } from '../main';

// Описаний у документації
import SimpleLightbox from 'simplelightbox';
// Додатковий імпорт стилів
import 'simplelightbox/dist/simple-lightbox.min.css';

export function renderSearchImages(images) {
  const markup = images
    .map(image => {
      return `<li class="image-search-item" id="gallery-item">
              <div class="image-search-box">
               <a 
                href="${image.largeImageURL}">
                <img
                  class="image-search-img"
                  src="${image.webformatURL}"
                  alt="${image.tags}"
                  title="${image.tags}"
                />
                </a>
                <div class="image-search-descr">
                  <ul class="image-search-descr-list">
                    <li class="image-search-descr-item">
                      <h3 class="image-search-descr-subtitle">Likes</h3>
                      <p class="image-search-descr-txt">${image.likes}</p>
                    </li>
                    <li class="image-search-descr-item">
                      <h3 class="image-search-descr-subtitle">Views</h3>
                      <p class="image-search-descr-txt">${image.views}</p>
                    </li>
                    <li class="image-search-descr-item">
                      <h3 class="image-search-descr-subtitle">Comments</h3>
                      <p class="image-search-descr-txt">${image.comments}</p>
                    </li>
                    <li class="image-search-descr-item">
                      <h3 class="image-search-descr-subtitle">Downloads</h3>
                      <p class="image-search-descr-txt">${image.downloads}</p>
                    </li>
                  </ul>
                </div>
              </div>
            </li>`;
    })
    .join('');

  refs.imageList.insertAdjacentHTML('beforeend', markup);

  // Ініціалізація бібліотеки SimpleLightbox
  let galleryBox = new SimpleLightbox('.image-search-list a', {
    captionsData: 'alt', // Витягує підписи із атрибута alt
    captionDelay: 250, // Затримка появи підпису (в мс)
  });

  // Оновлення SimpleLightbox, для перезавантаження списку елементів
  galleryBox.refresh();
}
