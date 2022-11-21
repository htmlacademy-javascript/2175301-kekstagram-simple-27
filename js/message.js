import { closeUserModal } from './form.js';

const succesMessage = document.querySelector('#success').content.querySelector('.success');
const errorMessage = document.querySelector('#error').content.querySelector('.error');
const bodyElement = document.querySelector('body');

const isEscapeEvent = (evt) => evt.key === 'Escape';

const onErrorButtonClick = () => {
  hideMessage();
};

const onSuccessButtonClick = () => {
  hideMessage();
};

const onOverlayClick = (evt) => {
  const hiddenPopupOverlay = document.querySelector('.error');
  if (evt.target === hiddenPopupOverlay) {
    evt.preventDefault();
    hiddenPopupOverlay.remove();
  }
  const hiddenPopupDoneOverlay = document.querySelector('.success');
  if (evt.target === hiddenPopupDoneOverlay) {
    hiddenPopupDoneOverlay.remove();
  }
};

const onMessageEscKeydown = (evt) => {
  if (isEscapeEvent(evt)) {
    evt.preventDefault();
    const hiddenPopup = document.querySelector('.error');
    if (!hiddenPopup) {
      closeUserModal();
    } else {hiddenPopup.remove();
    }
    const hiddenPopupDone = document.querySelector('.success');
    if (hiddenPopupDone) {
      hiddenPopupDone.remove();
    }
  }
};

const showSuccessMessage = () => {
  const successMessageElement = succesMessage.cloneNode(true);
  document.addEventListener('keydown',onMessageEscKeydown);
  successMessageElement.querySelector('.success__button').addEventListener('click', onSuccessButtonClick);
  document.addEventListener('click',onOverlayClick);
  bodyElement.append(successMessageElement);
  bodyElement.style.overflow = 'hidden';
};
const showErrorMessage = () => {
  const errorMessageElement = errorMessage.cloneNode(true);
  document.addEventListener('keydown',onMessageEscKeydown);
  errorMessageElement.querySelector('.error__button').addEventListener('click', onErrorButtonClick);
  document.addEventListener('click',onOverlayClick);
  bodyElement.append(errorMessageElement);
  bodyElement.style.overflow = 'hidden';
};
function hideMessage () {
  const messageElement = document.querySelector('.success') || document.querySelector('.error');
  messageElement?.remove();
  document.removeEventListener('keydown',onMessageEscKeydown);
  document.removeEventListener('click',onOverlayClick);
  bodyElement.style.overflow = 'auto';
}


export { showErrorMessage, showSuccessMessage, onMessageEscKeydown};
