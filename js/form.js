import {isEscapeKey} from './util.js';

const userModalElement = document.querySelector('.img-upload__overlay');

const userOpenModalElement = document.querySelector('#upload-file');

const userCloseModalElement = document.querySelector('#upload-cansel');

const modalElement = document.querySelector('body');

const onModalEscKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeUserModal();
  }
};

function openUserModal () {
  userModalElement.classList.remove('hidden');
  modalElement.classList.add('modal-open');

  document.addEventListener('keydown', onModalEscKeydown);
}

function closeUserModal () {
  userModalElement.classList.add('hidden');
  modalElement.classList.remove('modal-open');

  document.removeEventListener('keydown', onModalEscKeydown);
}

userOpenModalElement.addEventListener('click', () => {
  openUserModal();
});

userCloseModalElement.addEventListener('click', () => {
  closeUserModal();
});

export {openUserModal,closeUserModal};
