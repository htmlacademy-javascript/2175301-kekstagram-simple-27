// Источник mdn. Функция, возвращающая случайное целое число из переданного диапазона включительно.

function getRandomIntInclusive(min, max) {
  const minRound = Math.ceil(min); //минимальное значение округленное вверх до целого
  const maxRound = Math.floor(max); //максимальное значение округленное вниз до целого
  if (maxRound <= minRound || minRound < 0 || maxRound < 0 || typeof minRound !== 'number' || typeof maxRound !== 'number') {
    return NaN;
  } else {return Math.floor(Math.random() * ((maxRound - minRound + 1)) + minRound);} //вернет целое число округленное вниз (Максимум и минимум включаются).
}
getRandomIntInclusive (0,2.5);


//Функция для проверки максимальной длинны строки

function checkMaxStringLength(verifiedString, maxLength) {

  if (verifiedString.length <= maxLength) {
    return true;
  } else {
    return false;
  }
}
checkMaxStringLength ('',50);

// Создаем массивы с элементами/значениям объектов



// Функция, возвращающая случайное целое число из переданного диапазона включительно.

const getRandomIntInclusive = (min, max) => {
  const minRound = Math.ceil(min);
  const maxRound = Math.floor(max);
  if (maxRound <= minRound || minRound < 0 || maxRound < 0 || typeof minRound !== 'number' || typeof maxRound !== 'number') {
    return NaN;
  } else {return Math.floor(Math.random() * ((maxRound - minRound + 1)) + minRound);}
};

// Функция, возвращающая случайный элемент, НЕ УВЕРЕН В ПРАВИЛЬНОСТИ ЭТОГО БЛОКА

const indexes = [];
const getRandomArrayElement = (indexes) => {
const index = getRandomIntInclusive(1, 25);
indexes.forEach((index) => {
  return (indexes.includes(index)) ? getRandomArrayElement() : indexes.push(index);
})
};

const ID = Array.from({length: 25}, (_, i) => i + 1);
const URL = ['photos/1.jpg','photos/2.jpg','photos/3.jpg','photos/4.jpg','photos/5.jpg','photos/6.jpg','photos/7.jpg','photos/8.jpg','photos/9.jpg','photos/10.jpg','photos/11.jpg','photos/12.jpg','photos/13.jpg','photos/14.jpg','photos/15.jpg','photos/16.jpg','photos/17.jpg','photos/18.jpg','photos/19.jpg','photos/20.jpg','photos/21.jpg','photos/22.jpg','photos/23.jpg','photos/24.jpg','photos/25.jpg'];
const DESCRIPTION = ['авангардистский','авангардный','аванпостный','авансовый','авантажный','авантюриновый','авантюристический','авантюристский','авантюрный','аварийный','аварский','августейший','августовский','авиадесантный','авиамодельный','авиамоторный','авианосный','авиапочтовый','авиаремонтный','авиаспортивный','авиастроительный','авиаторский','авиатранспортный','авиационный','авитаминозный'];
const LIKES = Array.from({length: 186}, (_, i) => i + 15);
const COMMETS = Array.from(Array(201).keys());

// Функция, создания объекта НЕ УВЕРЕН В ПРАВИЛЬНОСТИ и ЭТОГО БЛОКА

function createDescriptionFoto() {
  return {
    id: getRandomArrayElement(1,25),
    url: getRandomArrayElement(1,25),
    description: getRandomArrayElement[DESCRIPTION(0, DESCRIPTION.length-1)],
    likes: getRandomIntInclusive(15,200),
    commets: getRandomIntInclusive(0,200)
  };
}

// Функция, генерирующая несколько объектов

const createSumFoto = Array.from({length:25}, createDescriptionFoto)
