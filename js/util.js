const ALERT_SHOW_TIME = 2000;
//Функция генерации случайного числа

const getRandomIntInclusive = (min, max) => {
  const minRound = Math.ceil(min);
  const maxRound = Math.floor(max);
  if (maxRound <= minRound || minRound < 0 || maxRound < 0 || typeof minRound !== 'number' || typeof maxRound !== 'number') {
    return NaN;
  } else { return Math.floor(Math.random() * ((maxRound - minRound + 1)) + minRound); }
};
getRandomIntInclusive();

//Функция генерации случайного элемента

const getRandomArrayElement = (elements) => elements[getRandomIntInclusive(0, elements.length - 1)];

//Функция для проверки максимальной длинны строки

function checkMaxStringLength(verifiedString, maxLength) {

  if (verifiedString.length <= maxLength) {
    return true;
  } else {
    return false;
  }
}
checkMaxStringLength ('',50);

const showAlert = (message) => {
  const alertContainer = document.createElement('div');
  alertContainer.style.zIndex = '100';
  alertContainer.style.position = 'absolute';
  alertContainer.style.left = '0';
  alertContainer.style.top = '0';
  alertContainer.style.right = '0';
  alertContainer.style.padding = '10px 3px';
  alertContainer.style.fontSize = '30px';
  alertContainer.style.textAlign = 'center';
  alertContainer.style.backgroundColor = 'orange';

  alertContainer.textContent = message;

  document.body.append(alertContainer);

  setTimeout(() => {
    alertContainer.remove();
  }, ALERT_SHOW_TIME);
};
export {getRandomArrayElement,getRandomIntInclusive,showAlert};
