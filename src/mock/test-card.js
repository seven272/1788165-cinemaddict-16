import dayjs from 'dayjs';
import {getRandomInteger, generateNameFilm, generatePosterFilm, generateDescriptionFilm, generateGenreFilm, generateTimeFilm,generateRandomQuantityComments, generateDateFilm, generateQuantityComments, generateCommentFilm} from './test-date.js';
const generateCardFilm = () => {
  let x;
  return {
    name:generateNameFilm(),
    poster:generatePosterFilm(),
    description: generateDescriptionFilm(),
    genre: generateGenreFilm(),
    comment: generateRandomQuantityComments(generateCommentFilm, getRandomInteger(0,5)),
    year: generateDateFilm(),
    time: generateTimeFilm(),
    quantityComments: generateQuantityComments(),
    isFavorite: Boolean(getRandomInteger(0, 1)),
  };
};
// console.log(generateCardFilm());
export {generateCardFilm};
