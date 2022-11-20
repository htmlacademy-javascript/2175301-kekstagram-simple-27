
import {onMessageEscKeydown} from './message.js';
import {scaleReset} from './change-img.js';
import {resetEffects} from './slider.js';

const userModalElement = document.querySelector('.img-upload__overlay');

const userOpenModalElement = document.querySelector('#upload-file');

const userCloseModalElement = document.querySelector('#upload-cancel');

const mainElement = document.querySelector('body');

const openUserModal = () => {
  userModalElement.classList.remove('hidden');
  mainElement.classList.add('modal-open');
  document.addEventListener('keydown', onMessageEscKeydown);
};

const closeUserModal = () => {
  scaleReset();
  resetEffects();
  userModalElement.classList.add('hidden');
  mainElement.classList.remove('modal-open');
  mainElement.style.overflow = 'auto';
  document.removeEventListener('keydown', onMessageEscKeydown);
};

userOpenModalElement.addEventListener('change', () => {
  openUserModal();
});

userCloseModalElement.addEventListener('click', () => {
  closeUserModal();
});

export {openUserModal,closeUserModal};
