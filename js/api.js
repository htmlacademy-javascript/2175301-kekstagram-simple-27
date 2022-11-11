//import './util.js';

const getData = (onSuccess, onFail) => {
  fetch ('https://27.javascript.pages.academy/kekstagram-simple/data')
    .then ((response) => {
      if (response.ok) {
        return response.json();
      }
      throw new Error('Ошибка загрузки данных');
    })
    .then((photos) => onSuccess(photos))
    .catch((error) =>
      onFail(error.message));
};


const sendData = (onSuccess, onFail, body) => {
  fetch('https://27.javascript.pages.academy/kekstagram-simple',
    {
      method: 'POST',
      body,
    })
    .then((response) => {
      if (response.ok) {
        onSuccess();
        return;
      }

      throw new Error('Произошла ошибка отправки данных');
    })
    .catch(() => onFail());

};

export {getData, sendData};
