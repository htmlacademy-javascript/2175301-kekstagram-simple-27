
const sliderFieldset = document.querySelector('.img-upload__effect-level');
const sliderElement = document.querySelector('.effect-level__slider');
const valueElement = document.querySelector('.effect-level__value');
const imageCore = document.querySelector('img');
//const specialElement = document.querySelector('.level-form__special');
const chromeElement = document.querySelector('.effects__preview--chrome');


noUiSlider.create(sliderElement, {
  range: {
    min: 0,
    max: 100,
  },
  start: 100,
  step: 1,
  connect: 'lower',
  format: {
    to: function (value) {
      if (Number.isInteger(value)) {
        return value.toFixed(0);
      }
      return value.toFixed(1);
    },
    from: function (value) {
      return parseFloat(value);
    },
  },
});

function onFilterChange (evt) {
  if (evt.target.value === 'none') {
    sliderFieldset.style.display = 'none';
    imageCore.style.filter = 'none';
  } else {
    sliderFieldset.style.display = 'block';
    if (evt.target.matches('input[type="radio"]')) {
      imageCore.style.filter = 'none';
      sliderElement.noUiSlider.updateOptions({
        range: {
          min: +evt.target.dataset.minValue,
          max: +evt.target.dataset.maxValue
        },
        start: +evt.target.dataset.startValue,
        step: +evt.target.dataset.step
      });}}}

sliderElement.noUiSlider.on('update', () => {
  valueElement.value = sliderElement.noUiSlider.get();
});

chromeElement.addEventListener('change', (evt) => {
  if (evt.target.vale === 'chrome') {
    sliderElement.noUiSlider.updateOptions({
      range: {
        min: 0,
        max: 1
      },
      start: 1,
      step: 0.1
    });
  } else {
    sliderElement.noUiSlider.updateOptions({
      range: {
        min: 0,
        max: 100,
      },
      step: 1
    });
    sliderElement.noUiSlider.set(100);
  }
});

sliderElement.noUiSlider.destroy();

export {onFilterChange};
