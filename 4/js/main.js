/*
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
*/

//const indexes = [];
//const getRandomArrayElement = () => {
// const index = getRandomIntInclusive(1, 25);
//return (indexes.includes(index)) ? getRandomArrayElement() : indexes.push(index);
//};

//Урок 4.15

const descriptions = ['авангардистский', 'авангардный', 'аванпостный', 'авансовый', 'авантажный', 'авантюриновый', 'авантюристический', 'авантюристский', 'авантюрный', 'аварийный', 'аварский', 'августейший', 'августовский', 'авиадесантный', 'авиамодельный', 'авиамоторный', 'авианосный', 'авиапочтовый', 'авиаремонтный', 'авиаспортивный', 'авиастроительный', 'авиаторский', 'авиатранспортный', 'авиационный', 'авитаминозный'];
const like = Array.from({length: 186}, (_, i) => i + 15);
const commets = Array.from({length: 201}, (_, i) => i);

const COUNT_OBJ = 25;

const getRandomIntInclusive = (min, max) => {
  const minRound = Math.ceil(min);
  const maxRound = Math.floor(max);
  if (maxRound <= minRound || minRound < 0 || maxRound < 0 || typeof minRound !== 'number' || typeof maxRound !== 'number') {
    return NaN;
  } else { return Math.floor(Math.random() * ((maxRound - minRound + 1)) + minRound); }
};
getRandomIntInclusive();

const getRandomArrayElement = (elements) => elements[getRandomIntInclusive(0, elements.length - 1)];

const createDescriptionFoto = (id) => ({
  id: id,
  url: `photos${id}.jpg`,
  description: descriptions[(getRandomIntInclusive(0, descriptions.length - 1))],
  likes: getRandomArrayElement(like),
  commets: getRandomArrayElement(commets),
});

const createSumFoto = Array.from({length: COUNT_OBJ}, (_element, index) => createDescriptionFoto(index + 1));

createSumFoto();


