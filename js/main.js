import {createUsersPhotos} from './pictures.js';
import './change-img.js';
import './slider.js';
import './api.js';
import {getData, sendData} from './api.js';
import { setUserFormSubmit, resetEffects } from './slider.js';
import { closeUserModal } from './form.js';
import { showAlert } from './util.js';
import { showErrorMessage, showSuccessMessage } from './message.js';

const SIMILAR_WIZARD_COUNT = 25;

getData((photos) => {
  createUsersPhotos(photos.slice(0, SIMILAR_WIZARD_COUNT));
});

setUserFormSubmit(closeUserModal);

//createUsersPhotos();

const onSendDataSuccess = () => {
  resetEffects();
  showSuccessMessage();
};
setUserFormSubmit (async (data) => {
  await sendData(onSendDataSuccess, showErrorMessage, data);
});
getData(showAlert);
