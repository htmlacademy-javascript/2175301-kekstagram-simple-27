
const fieldsShange = document.querySelector('.scale__control--value');

const buttonSmaller = document.querySelector('.scale__control--smaller');

const buttonBigger = document.querySelector('.scale__control--bigger');

const fragmentPictures = document.querySelector('.img-upload__preview img');

const SCALE = 100;
const MIN_SCALE = 25;
const MAX_SCALE = 100;
const STEP_SCALE = 25;

const setScale = (value = SCALE) => {
  fragmentPictures.style.transform = `scale(${value / 100})`;
  fieldsShange.value = `${value}%`;
};

const buttonBiggerClick = () => {
  const currentValue = parseInt(fieldsShange.value, 10);
  let newValue = currentValue + STEP_SCALE;
  if (newValue > MAX_SCALE) {
    newValue = MAX_SCALE;
  }
  setScale(newValue);
};

const buttonSmallerClick = () => {
  const currentValue = parseInt(fieldsShange.value, 10);
  let newValue = currentValue - STEP_SCALE;
  if ( newValue < MIN_SCALE) {
    newValue = MIN_SCALE;
  }
  setScale(newValue);
};

const scaleReset = () => {
  setScale();
};

buttonBigger.addEventListener('click', buttonBiggerClick);
buttonSmaller.addEventListener('click', buttonSmallerClick);

export { scaleReset };
