import {createSumFotos} from './data.js';

const usersPhotos = document.querySelector('.pictures__title');
usersPhotos.classList.remove('hidden');

const similarUserTemplate = document.querySelector('#picture') //Находим шаблон
  .content
  .querySelector('.picture');

const similarPhotos = createSumFotos();

const similarListFragment = document.createDocumentFragment(); //Все кладем в фрагмент

//проходим методом по массиву объектов, добавляя данные в клонированные шаблоны

similarPhotos.forEach(({url, likes, commets}) => {
  const userElement = similarUserTemplate.cloneNode(true);
  userElement.querySelector('.picture__img').src = url;
  userElement.querySelector('.picture__likes').textContent = likes;
  userElement.querySelector('.picture__comments').textContent = commets;
  similarListFragment.append(userElement);
});

document.querySelector('.picture').append(similarListFragment);

export {similarPhotos};
