import { refs } from './refs';
import axios from 'axios';

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

export async function queryPixabay(query, page, perPage) {
  const API_KEY = '48017224-d7e819cca6d5953c75e1fff02';
  axios.defaults.baseURL = 'https://pixabay.com';

  const searchParams = new URLSearchParams({
    q: query,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    per_page: perPage,
    page,
  });

  try {
    const serverResponse = await axios.get(
      `/api/?key=${API_KEY}&${searchParams}`
    );
    // console.log(serverResponse.data);

    const totalImages = serverResponse.data.total;
    const images = serverResponse.data.hits; // Отримуємо масив зображень
    //console.log('serverResponse.data.hits:', images);

    //console.log('Всього зображень:', totalImages);

    if (totalImages === 0) {
      iziToast.error({
        title: 'Помилка',
        message: `❌ Немає зображень за вашим запитом. Спробуйте інше слово!`,
        position: 'topCenter',
        timeout: 5000,
      });
      refs.btnLoadMore.style.display = 'none';
    }
    //console.log('Масив зображень:', images);
    // renderSearchImages(images);

    //return totalImages; // Повертаємо загальну кількість знайдених зображень
    return { totalImages, images };
  } catch (error) {
    iziToast.error({
      title: 'Помилка',
      message: `❌ Виникла помилка на сервері. Спробуйте ще раз пізніше!`,
      position: 'topCenter',
      timeout: 5000,
    });
  }
}
