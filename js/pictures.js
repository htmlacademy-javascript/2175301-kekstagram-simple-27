import {createSumPhotos} from './data.js';

const similarUserTemplate = document.querySelector('#picture') //Находим шаблон
  .content
  .querySelector('.picture');

const similarPhotos = createSumPhotos();

const similarListFragment = document.createDocumentFragment(); //Все кладем в фрагмент

const createUsersPhotos = () => {

  //проходим методом по массиву объектов, добавляя данные в клонированные шаблоны
  similarPhotos.forEach(({url, likes, commets}) => {
    const userElement = similarUserTemplate.cloneNode(true);
    userElement.querySelector('.picture__img').src = url;
    userElement.querySelector('.picture__likes').textContent = likes;
    userElement.querySelector('.picture__comments').textContent = commets;
    similarListFragment.append(userElement);
  });
  document.querySelector('.pictures').append(similarListFragment);
};

createUsersPhotos();

export {createUsersPhotos};
