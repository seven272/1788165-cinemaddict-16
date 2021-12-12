import {getRandomInteger, generateNameFilm, generatePosterFilm, generateDescriptionFilm, generateGenreFilm, generateTimeFilm,generateRandomQuantityComments, generateDateFilm, generateQuantityComments, generateCommentFilm} from './test-date.js';
const generateCardFilm = () => ({
  name:generateNameFilm(),
  poster:generatePosterFilm(),
  description: generateDescriptionFilm(),
  genre: generateGenreFilm(),
  comment: generateRandomQuantityComments(generateCommentFilm, getRandomInteger(0,5)),
  year: generateDateFilm(),
  time: generateTimeFilm(),
  quantityComments: generateQuantityComments(),
  isWatchlist:Boolean(getRandomInteger(0, 1)),
  isHistory:Boolean(getRandomInteger(0, 1)),
  isFavorite: Boolean(getRandomInteger(0, 1)),
});

export {generateCardFilm};
