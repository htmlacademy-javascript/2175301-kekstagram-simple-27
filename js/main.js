import {createUsersPhotos} from './pictures.js';
import './change-img.js';
import './slider.js';
import './api.js';
import {getData} from './api.js';

const PHOTOS_COUNT = 25;

getData(
  (photos) => {
    createUsersPhotos(photos.slice(0, PHOTOS_COUNT));
  });

