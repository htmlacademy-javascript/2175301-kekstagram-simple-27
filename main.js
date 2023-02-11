import {createUsersPhotos} from './pictures.js';
import './change-img.js';
import './slider.js';
import { setUserFormSubmit } from './slider.js';
import './api.js';
import {getData} from './api.js';
import { closeUserModal } from './form.js';
import './avatar.js';

const PHOTOS_COUNT = 25;

const getSuccess = (photos) => {
  createUsersPhotos(photos.slice(0, PHOTOS_COUNT));
};
getData(getSuccess);

setUserFormSubmit(closeUserModal);

