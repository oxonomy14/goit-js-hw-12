// Your API key: 48017224-d7e819cca6d5953c75e1fff02
import { refs } from './refs';
import axios from 'axios';
import { renderSearchImages } from './render-functions';
import { showLoader, hideLoader } from './loader'; // Импорт функций лоадера
import iziToast from 'izitoast';
// Додатковий імпорт стилів
import 'izitoast/dist/css/iziToast.min.css';

export function queryPixabay(query) {
  const API_KEY = '48017224-d7e819cca6d5953c75e1fff02';

  axios.defaults.baseURL = 'https://pixabay.com';

  const searchParams = new URLSearchParams({
    q: query,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
  });

  showLoader(); // перед завантаженням даних з API-сервера показуємо лоадер

  axios
    //  .get(`/api/?key=48017224-d7e819cca6d5953c75e1fff02&${searchParams}`)
    .get(`/api/?key=${API_KEY}&${searchParams}`)
    .then(serverResponse => {
      // console.log(serverResponse.data);

      if (Number.parseInt(serverResponse.data.total) > 0) {
        const images = serverResponse.data.hits;
        // console.log(images);
        //console.log(images[0].webformatURL);
        renderSearchImages(images); //створюємо розмітку і прорисовуємо на веб-сторінці
      } else {
        iziToast.error({
          title: 'Помилка',
          message: `❌ Sorry, there are no images matching your search query. Please try again!`,
          position: 'topCenter',
          timeout: 5000,
        });
        //   window.alert(
        //     'Sorry, there are no images matching your search query. Please try again!'
        //   );
        return;
      }
    })
    //.catch(error => console.error('Помилка завантаження:', error))
    .catch(error =>
      iziToast.error({
        title: 'Помилка',
        message: `❌ Виникла помилка завантаження на стороні сервера Pixabay. Спробуйте іншим разом!`,
        position: 'topCenter',
        timeout: 5000,
      })
    )
    .finally(() => {
      hideLoader(); // Ховаємо лоадер в будь-якому випадку  (успіх або помилка)
    });
}
