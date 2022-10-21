
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

export {getRandomArrayElement};
export {getRandomIntInclusive};

//Функция для проверки максимальной длинны строки

function checkMaxStringLength(verifiedString, maxLength) {

  if (verifiedString.length <= maxLength) {
    return true;
  } else {
    return false;
  }
}
checkMaxStringLength ('',50);

//Черновик функции создания массива с уникальными числами

//const indexes = [];
//const getRandomArrayElement = () => {
// const index = getRandomIntInclusive(1, 25);
//return (indexes.includes(index)) ? getRandomArrayElement() : indexes.push(index);
//};
