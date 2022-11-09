import { showAlert } from './util.js';

const getData = async (onSuccess, onFail) => {
  try {
    const response = await fetch('https://27.javascript.pages.academy/kekstagram-simple/data');
    if (!response.ok) {
      throw new Error('Не удалось загрузить фото');
    }
    const photos = await response.json();
    onSuccess(photos);
  } catch (error) {
    onFail(error.message);

  }
};

const sendData = async (onSuccess, onFail, body) => {
  try {
    const response = await fetch('https://https://27.javascript.pages.academy/kekstagram-simple',
      {
        method: 'POST',
        body,
      }
    );

    if (!response.ok) {
      throw new Error('Не удалось загрузить фото. Попробуйте еще раз');
    }

    onSuccess();
  } catch (error) {
    onFail(error.message);
    showAlert();
  }
};

export {getData, sendData};
