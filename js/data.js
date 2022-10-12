
import {getRandomArrayElement} from './util.js';
import {getRandomIntInclusive} from './util.js';

const descriptions = ['авангардистский', 'авангардный', 'аванпостный', 'авансовый', 'авантажный', 'авантюриновый', 'авантюристический', 'авантюристский', 'авантюрный', 'аварийный', 'аварский', 'августейший', 'августовский', 'авиадесантный', 'авиамодельный', 'авиамоторный', 'авианосный', 'авиапочтовый', 'авиаремонтный', 'авиаспортивный', 'авиастроительный', 'авиаторский', 'авиатранспортный', 'авиационный', 'авитаминозный'];
const like = Array.from({length: 186}, (_, i) => i + 15);
const commets = Array.from({length: 201}, (_, i) => i);

const COUNT_OBJ = 25;

//Функция генерации объекта

const createDescriptionFoto = (id) => ({
  id: id,
  url: `photos${id}.jpg`,
  description: descriptions[(getRandomIntInclusive(0, descriptions.length - 1))],
  likes: getRandomArrayElement(like),
  commets: getRandomArrayElement(commets),
});

const createSumFotos = Array.from({length: COUNT_OBJ}, (_element, index) => createDescriptionFoto(index + 1));

createSumFotos();

export {createSumFotos};
