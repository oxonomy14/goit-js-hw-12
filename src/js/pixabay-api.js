// Your API key: 48017224-d7e819cca6d5953c75e1fff02
import { refs } from './refs';
import axios from 'axios';
import { renderSearchImages } from './render-functions';
import { showLoader, hideLoader } from './loader'; // Импорт функций лоадера
import iziToast from 'izitoast';
// Додатковий імпорт стилів
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

  // showLoader(); // перед завантаженням даних з API-сервера показуємо лоадер

  await axios
    //  .get(`/api/?key=48017224-d7e819cca6d5953c75e1fff02&${searchParams}`)
    .get(`/api/?key=${API_KEY}&${searchParams}`)
    .then(serverResponse => {
      // console.log(serverResponse.data);
      //console.log(serverResponse.data.total);

      const totalImages = serverResponse.data.total;
      // console.log('Всього зображень:', totalImages);

      const totalPages = Math.ceil(totalImages / perPage);
      //console.log('Всього колекцій:', totalPages);

      if (Number.parseInt(serverResponse.data.total) > 0) {
        const images = serverResponse.data.hits;
        //console.log(images);
        //console.log(images[0].webformatURL);
        renderSearchImages(images); //створюємо розмітку і прорисовуємо на веб-сторінці
        // console.log('Колекція за номером:', page);
        page += 1; // Збільшуємо сторінку колекції зображень з кроком +1
        //refs.btnLoadMore.style.display = page < totalPages ? 'block' : 'none';
        if (page < totalPages) {
          refs.btnLoadMore.style.display = 'block';
          //console.log('Колекція за номером:', page);
        } else {
          refs.btnLoadMore.style.display = 'none';
          //  console.log('Зображень більше немає');
          iziToast.error({
            title: 'Images no have any more',
            message: `❌ We're sorry, but you've reached the end of search results.`,
            position: 'topCenter',
            timeout: 5000,
          });
          return;
        }
      } else {
        iziToast.error({
          title: 'Помилка',
          message: `❌ Sorry, there are no images matching your search query. Please try again!`,
          position: 'topCenter',
          timeout: 5000,
        });
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
