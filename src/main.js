import { queryPixabay } from './js/pixabay-api';
import { refs } from './js/refs';

import iziToast from 'izitoast';
// Додатковий імпорт стилів
import 'izitoast/dist/css/iziToast.min.css';

let query = ''; // Змінна для збереження пошукового запиту
let page = 1; // Починаємо з першої сторінки
const perPage = 40; // Кількість зображень на сторінку
let totalPages = ''; // Загальна кількість сторінок (буде оновлюватися після запиту)

refs.btnLoadMore.style.display = 'none'; // Сховати кнопку перед запитом
refs.txtLoaderMore.style.display = 'none'; // Сховати індикатор завантаження

refs.form.addEventListener('submit', onFormSubmit);
refs.btnLoadMore.addEventListener('click', onBtnClick);

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
    refs.btnLoadMore.style.display = 'none'; // Ховаємо кнопку перед новим пошуком
    refs.txtLoaderMore.style.display = 'block'; // Показуємо індикатор завантаження
    try {
      const totalImages = await queryPixabay(query, page, perPage);

      if (!totalImages) return; // Якщо запит не повернув даних, виходимо

      totalPages = Math.ceil(totalImages / perPage); // Оновлюємо загальну кількість сторінок
      //console.log(`Всього сторінок: ${totalPages}`);

      if (totalPages > 1) {
        refs.btnLoadMore.style.display = 'block'; // Показуємо кнопку, якщо є більше однієї сторінки
      }
      iziToast.info({
        title: 'Увага',
        message: `🔹 Ви досягли кінця результатів пошуку.`,
        position: 'topCenter',
        timeout: 5000,
      });
    } catch (error) {
      iziToast.error({
        title: 'Помилка',
        message: `❌ Щось зламалося. Треба звернутись до адміністратора сайту! Або спробуйте ще раз пізніше!`,
        position: 'topCenter',
        timeout: 5000,
      });
    } finally {
      refs.txtLoaderMore.style.display = 'none'; // Сховати індикатор завантаження
    }
  }
  refs.form.reset();
}

// -----------  Натискання кнопки Load More  -------------------

// ---- Завантаження наступної сторінки ----
async function onBtnClick() {
  page += 1; // Збільшуємо сторінку

  refs.btnLoadMore.style.display = 'none';
  refs.txtLoaderMore.style.display = 'block';

  try {
    const totalImages = await queryPixabay(query, page, perPage);
    if (!totalImages) return; // Якщо запит не повернув даних, виходимо

    totalPages = Math.ceil(totalImages / perPage); // Оновлюємо загальну кількість сторінок

    smoothScroll(); // Скрол після рендеру
    //console.log('Поточна група елементів:', page);
    // console.log('Всього зображень:', totalImages);

    if (page === totalPages) {
      refs.btnLoadMore.style.display = 'none'; // Якщо досягли останньої сторінки - ховаємо кнопку
      iziToast.info({
        title: 'Увага',
        message: `🔹 Ви досягли кінця результатів пошуку.`,
        position: 'topCenter',
        timeout: 5000,
      });
    } else {
      refs.btnLoadMore.style.display = 'block';
    }
  } catch (error) {
    iziToast.error({
      title: 'Помилка',
      message: `❌ Щось зламалося. Треба звернутись до адміністратора сайту! Або спробуйте ще раз пізніше!`,
      position: 'topCenter',
      timeout: 5000,
    });
  } finally {
    refs.txtLoaderMore.style.display = 'none';
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
