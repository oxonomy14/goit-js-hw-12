import { queryPixabay } from './js/pixabay-api';
import { refs } from './js/refs';

import iziToast from 'izitoast';
// Додатковий імпорт стилів
import 'izitoast/dist/css/iziToast.min.css';

refs.form.addEventListener('submit', onFormSubmit);

function onFormSubmit(evt) {
  evt.preventDefault();

  //console.log('Лог№1 - Кнопка "Пошук" натискається');

  refs.imageList.innerHTML = ''; // Перед пошуком за новим ключовим словом повністю очищаємо попередній вміст галереї

  const query = evt.currentTarget.elements.query.value.trim();

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

    queryPixabay(query); // запит до сервера Pixabay за пошуковою фразою
  }
  refs.form.reset();
}
