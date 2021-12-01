import {getRandomInteger, generateNameFilm, generatePosterFilm, generateDescriptionFilm, generateGenreFilm, generateTimeFilm, generateRangeFilm, generateCountryFilm, generateReleaseFilm, generateWorkesFilm, generateRandomQuantityComments, generateCommentFilm} from './test-date.js';


const generatePopupFilm = () => {
  let x;
  return {
    name:generateNameFilm(),
    poster:generatePosterFilm(),
    range: generateRangeFilm(),
    description: generateDescriptionFilm(),
    genre: generateGenreFilm(),
    country: generateCountryFilm(),
    release: generateReleaseFilm(),
    workes: generateWorkesFilm(),
    comment: generateRandomQuantityComments(generateCommentFilm, getRandomInteger(0,5)),
    // year: generateDateFilm(),
    time: generateTimeFilm(),
    // quantityComments: generateQuantityComments(),
    isFavorite: Boolean(getRandomInteger(0, 1)),
  };
};
export {generatePopupFilm};
