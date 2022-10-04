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


