// Функкції показу/ховання лоадера
export function showLoader() {
  document.querySelector('#image-search').classList.add('hidden'); // Показуєм контент
  document.querySelector('.loader-container').style.display = 'flex'; // Показуєм лоадер
}

export function hideLoader() {
  document.querySelector('#image-search').classList.remove('hidden'); // Показуєм контент
  document.querySelector('.loader-container').style.display = 'none'; // Ховаємо лоадер
  // setTimeout(() => {
  //   document.querySelector('#image-search').classList.remove('hidden'); // Показуєм контент
  //   document.querySelector('.loader-container').style.display = 'none'; // Ховаємо лоадер
  // }, 2000);
}
