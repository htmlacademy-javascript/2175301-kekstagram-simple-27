import { closeUserModal } from './form.js';

const succesMessage = document.querySelector('#success').content.querySelector('.success');
const errorMessage = document.querySelector('#error').content.querySelector('.error');
const bodyElement = document.querySelector('body');

const isEscapeEvent = (evt) => evt.key === 'Escape';

const onErrorButtonClick = () => {
  hideMessage();
};
const onOverlayClick = () => {
  hideMessage();
};
const onMessageEscKeydown = (evt) => {
  if (isEscapeEvent(evt)) {
    evt.preventDefault();
    closeUserModal();
    const hasHiddenPopup = document.querySelector('.error');
    if (!hasHiddenPopup) {
      closeUserModal();
    }
    hideMessage();
  }
};
const showSuccessMessage = () => {
  const succesMessageElement = succesMessage.cloneNode(true);
  document.addEventListener('keydown',onMessageEscKeydown);
  document.addEventListener('click',onOverlayClick);
  bodyElement.append(succesMessageElement);
  bodyElement.style.overflow = 'hidden';
};
const showErrorMessage = () => {
  const errorMessageElement = errorMessage.cloneNode(true);
  document.addEventListener('keydown',onMessageEscKeydown);
  errorMessageElement.querySelector('.error__button').addEventListener('click', onErrorButtonClick);
  bodyElement.append(errorMessageElement);
  bodyElement.style.overflow = 'hidden';
};
function hideMessage () {
  const messageElement = document.querySelector('.success') || document.querySelector('.error');
  messageElement.remove();
  document.removeEventListener('keydown',onMessageEscKeydown);
  document.removeEventListener('click',onOverlayClick);
  bodyElement.style.overflow = 'auto';
}

export { showErrorMessage, showSuccessMessage};
