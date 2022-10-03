// Источник mdn. Функция, возвращающая случайное целое число из переданного диапазона включительно.

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min); //минимальное значение округленное вверх до целого
  max = Math.floor(max); //максимальное значение округленное вниз до целого
  if (max <= min || min < 0 || max < 0 || typeof min !== 'number' || typeof max !== 'number') {
    return NaN;
  } else {return Math.floor(Math.random() * ((max - min + 1)) + min) * 100;} //вернет целое число округленное вниз (Максимум и минимум включаются).
}
getRandomIntInclusive (0.5,1.5);

//Функция для проверки максимальной длинны строки

function checkMaxStringLength(verifiedString, maxLength) {

  if (verifiedString.length <= maxLength) {
    return true;
  } else {
    return false;
  }
}
checkMaxStringLength ('',50);


