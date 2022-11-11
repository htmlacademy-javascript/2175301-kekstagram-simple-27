import {createUsersPhotos} from './pictures.js';
import './change-img.js';
import './slider.js';
import './api.js';
import {getData} from './api.js';
import { setUserFormSubmit, resetEffects } from './slider.js';
import { closeUserModal } from './form.js';
import { showAlert } from './util.js';
import { showSuccessMessage } from './message.js';


const PHOTOS_COUNT = 25;

getData(
  (photos, error) => {
    createUsersPhotos(photos.slice(0, PHOTOS_COUNT));
    setUserFormSubmit(closeUserModal);
    setUserFormSubmit(resetEffects);
    setUserFormSubmit(showSuccessMessage);
    showAlert(error);
  });


/*createUsersPhotos();

const onSendDataSuccess = () => {
  resetEffects();
  showSuccessMessage();
};
setUserFormSubmit (async (photos) => {
  await sendData(onSendDataSuccess, showErrorMessage, photos);
});
getData(showAlert);
*/

