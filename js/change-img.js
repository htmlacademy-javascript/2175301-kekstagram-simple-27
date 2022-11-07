const SCALE = 100;
const MIN_SCALE = 25;
const MAX_SCALE = 100;
const STEP_SCALE = 25;

const fieldsShangeElement = document.querySelector('.scale__control--value');

const buttonSmallerElement = document.querySelector('.scale__control--smaller');

const buttonBiggerElement = document.querySelector('.scale__control--bigger');

const fragmentPicturesElement = document.querySelector('.img-upload__preview img');

const setScale = (value = SCALE) => {
  fragmentPicturesElement.style.transform = `scale(${value / 100})`;
  fieldsShangeElement.value = `${value}%`;
};

const buttonBiggerClick = () => {
  const currentValue = parseInt(fieldsShangeElement.value, 10);
  let newValue = currentValue + STEP_SCALE;
  if (newValue > MAX_SCALE) {
    newValue = MAX_SCALE;
  }
  setScale(newValue);
};

const buttonSmallerClick = () => {
  const currentValue = parseInt(fieldsShangeElement.value, 10);
  let newValue = currentValue - STEP_SCALE;
  if ( newValue < MIN_SCALE) {
    newValue = MIN_SCALE;
  }
  setScale(newValue);
};

const scaleReset = () => {
  setScale();
};

buttonBiggerElement.addEventListener('click', buttonBiggerClick);
buttonSmallerElement.addEventListener('click', buttonSmallerClick);

export { scaleReset };
