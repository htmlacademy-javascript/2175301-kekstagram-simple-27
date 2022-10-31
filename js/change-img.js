
const fieldsShange = document.querySelector('.scale__control--value');

const buttonSmaller = document.querySelector('.scale__control--smaller');

const buttonBigger = document.querySelector('.scale__control--bigger');

const fragmentPictures = document.querySelector('.img-upload__preview img');

fieldsShange.value = 100;

const setScale = (scale) => {
  fieldsShange.value = `${scale}%`;
  fragmentPictures.style.transform = `scale(${scale / 100})`;
};

buttonBigger.addEventListener('click', () => {
  const scale = parseInt(fieldsShange.value, 10);
  if (scale < 100) {
    setScale(scale + 25);
  }
});

buttonSmaller.addEventListener('click', () => {
  const scale = parseInt(fieldsShange.value, 10);
  if ( scale > 25) {
    setScale(scale - 25);
  }
});

/*
noUiSlider.create(field, {
  range: {
    min: 0,
    max: 100,
  },
  start: 100,
  step: 25,
});

field.noUiSlider.on('update', () => {
  fieldsShange.value = field.noUiSlider.get();
});
*/
