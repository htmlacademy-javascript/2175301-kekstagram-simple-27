import {isEscapeKey} from './util.js';

const userModalElement = document.querySelector('.img-upload__overlay');

const userOpenModalElement = document.querySelector('#upload-file');

const userCloseModalElement = document.querySelector('#upload-cancel');

const modalElement = document.querySelector('body');

const formSubmit = document.querySelector('.img-upload__form');

const openUserModal = () => {
  userModalElement.classList.remove('hidden');
  modalElement.classList.add('modal-open');

  document.addEventListener('keydown', onModalEscKeydown);
};

const closeUserModal = () => {
  formSubmit.reset();
  userModalElement.classList.add('hidden');
  modalElement.classList.remove('modal-open');
  document.removeEventListener('keydown', onModalEscKeydown);
};

const onFormSubmit = (evt) => {
  evt.preventDefault();
  closeUserModal();
};

function onModalEscKeydown (evt) {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeUserModal();
  }
}

userOpenModalElement.addEventListener('change', () => {
  openUserModal();
});

userCloseModalElement.addEventListener('click', () => {
  closeUserModal();
});

userCloseModalElement.removeEventListener('click', () => {
  closeUserModal();
});

formSubmit.addEventListener('submit',onFormSubmit);

export {openUserModal,closeUserModal};
