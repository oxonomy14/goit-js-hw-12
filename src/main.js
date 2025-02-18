import { queryPixabay } from './js/pixabay-api';
import { refs } from './js/refs';

import iziToast from 'izitoast';
// Додатковий імпорт стилів
import 'izitoast/dist/css/iziToast.min.css';

let query = ''; // Змінна для збереження пошукового запиту
let page = 1; // Починаємо з першої сторінки
const perPage = 6; // Кількість зображень на сторінку

refs.form.addEventListener('submit', onFormSubmit);
refs.btnLoadMore.addEventListener('click', onBtnClick);

refs.btnLoadMore.style.display = 'none'; // Сховати кнопку перед запитом
refs.txtLoaderMore.style.display = 'none'; // Показати індикатор завантаження

async function onFormSubmit(evt) {
  evt.preventDefault();

  //console.log('Лог№1 - Кнопка "Пошук" натискається');

  refs.imageList.innerHTML = ''; // Перед пошуком за новим ключовим словом повністю очищаємо попередній вміст галереї
  page = 1; // Скидаємо номер сторінки
  query = evt.currentTarget.elements.query.value.trim();

  if (!query) {
    iziToast.error({
      title: 'Помилка',
      message: `❌ Введіть в поле пошуку пошукову фразу`,
      position: 'topCenter',
      timeout: 2500,
    });
    //window.alert('Введіть в поле пошуку пошукову фразу');
    // console.log('Введіть в поле пошуку пошукову фразу');
    return;
  } else {
    // console.log('Пошуковий запит:', query);

    try {
      const images = await queryPixabay(query, page, perPage);
      // renderSearchImages(images); // запит до сервера Pixabay за пошуковою фразою
    } catch (error) {
      console.log(error);
    } finally {
      //toggleLoadMore(true); // Сховати індикатор завантаження
      refs.txtLoaderMore.style.display = 'none';
    }
  }
  refs.form.reset();
}

// -----------  Натискання кнопки Load More  -------------------

// ---- Завантаження наступної сторінки ----
async function onBtnClick() {
  page += 1; // Збільшуємо сторінку

  try {
    refs.btnLoadMore.style.display = 'none';
    refs.txtLoaderMore.style.display = 'block';

    const images = await queryPixabay(query, page, perPage);

    smoothScroll(); // Скрол після рендеру
  } catch (error) {
    console.error(error);
  } finally {
    refs.txtLoaderMore.style.display = 'none';
    refs.btnLoadMore.style.display = 'block';
  }
}

function smoothScroll() {
  setTimeout(() => {
    if (!refs.imageList) return;

    const galleryItem = document.querySelectorAll('.image-search-list li'); // Всі елементи галереї
    if (galleryItem.length === 0) {
      // console.log('Галерея порожня або ще не завантажилася');
      return;
    }
    //console.log('Елемент', galleryItem[0]);
    const cardHeight = galleryItem[0].getBoundingClientRect().height; // Висота першого елемента
    // console.log('Висота', cardHeight);
    window.scrollBy({ top: cardHeight * 2, behavior: 'smooth' }); // Прокручуємо
  }, 500); // Чекаємо 500 мс, щоб DOM оновився
}
