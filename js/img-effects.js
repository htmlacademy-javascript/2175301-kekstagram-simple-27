
const defaultEffect = document.querySelector('.effects__preview--none');
const radioButtons = document.querySelector('.effects__list');
const fragmentPictures = document.querySelector('.img-upload__preview');

defaultEffect.value = 'none';

const addImageEffects = (evt) => {
  if (evt.target.value === 'none')
  {fragmentPictures.classList.add('effects__preview--none');
  }
  if (evt.target.value === 'chrome')
  {fragmentPictures.classList.add('effects__preview--chrome');
  }
  if (evt.target.value === 'sepia')
  {fragmentPictures.classList.add('effects__preview--sepia');
  }
  if (evt.target.value === 'marvin')
  {fragmentPictures.classList.add('effects__preview--marvin');
  }
  if (evt.target.value === 'phobos')
  {fragmentPictures.classList.add('effects__preview--phobos');
  }
  if (evt.target.value === 'heat')
  {fragmentPictures.classList.add('effects__preview--heat');
  }
};

radioButtons.addEventListener('change', addImageEffects);
/*
radioButtons.addEventListener('change', () => {
  addImageEffects();
});
*/

