// import '../../public/images/posters/made/made-for-each-other.png'
import dayjs from 'dayjs';
const getRandomInteger = (a = 0, b = 1) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));

  return Math.floor(lower + Math.random() * (upper - lower + 1));
};
//генерируем название фильма
const generateNameFilm = () => {
  const names = [
    'Бэтмен начало',
    'Унесенные ветром',
    'В августе 44-го',
    'Нефть',
    'Вокруг света за 80 дней',
  ];

  const randomIndex = getRandomInteger(0, names.length - 1);

  return names[randomIndex];
};
// console.log(generateNameFilm());

//генерируем постер фильма
const generatePosterFilm = () => {
  const posters = [
    '../../public/images/posters/made/made-for-each-other.png',
    '../../public/images/posters/made/popeye-meets-sinbad.png',
    '../../public/images/posters/made/sagebrush-trail.jpg',
    '../../public/images/posters/made/santa-claus-conquers-the-martians.jpg',
    '../../public/images/posters/made/the-dance-of-life.jpg',
    '../../public/images/posters/made/the-great-flamarion.jpg',
    '../../public/images/posters/made/the-man-with-the-golden-arm.jpg',
  ];

  const randomIndex = getRandomInteger(0, posters.length - 1);
  return posters[randomIndex];
};
// console.log(generatePosterFilm());

//генерируем описание фильма
const generateDescriptionFilm = () => {
  const fullTextDescription = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras aliquet varius magna, non porta ligula feugiat eget. Fusce tristique felis at fermentum pharetra. Aliquam id orci ut lectus varius viverra. Nullam nunc ex, convallis sed finibus eget, sollicitudin eget ante. Phasellus eros mauris, condimentum sed nibh vitae, sodales efficitur ipsum. Sed blandit, eros vel aliquam faucibus, purus ex euismod diam, eu luctus nunc ante ut dui. Sed sed nisi sed augue convallis suscipit in sed felis. Aliquam erat volutpat. Nunc fermentum tortor ac porta dapibus. In rutrum ac purus sit amet tempus.';
  const description1 = fullTextDescription.split('.', 1).join('');
  const description2 = fullTextDescription.split('.', 2).join('');
  const description3 = fullTextDescription.split('.', 3).join('');
  const description4 = fullTextDescription.split('.', 4).join('');
  const description5 = fullTextDescription.split('.', 5).join('');

  const descriptions = [
    description1,
    description2,
    description3,
    description4,
    description5
  ];
  const randomIndex = getRandomInteger(0, descriptions.length - 1);
  return descriptions[randomIndex];

};
// console.log(generateDescriptionFilm());

//генерируем дату комметария
const generateDateComment = () => {
  return dayjs().format('YYYY/MM/DD HH:mm')
};

// console.log(generateDateComment());

//генерируем коммментарии для фильма
const generateCommentFilm = () => {
  const commentTexts = [
    'Отличный фильм',
    'Можно было сделать и лучше',
    'Актерская игра на высоте',
    'Избитый сюжет, уже неинтересно...',
  ];
  const commentEmotions = ['smile', 'sleeping', 'puke', 'angry'];
  const commentUsers = ['Иван','Ирина','Ольга','Михаил'];
  const randomIndex = getRandomInteger(0, commentTexts.length - 1);
  return {
    text:commentTexts[randomIndex],
    emotion: commentEmotions[randomIndex],
    user: commentUsers[randomIndex],
    time: generateDateComment()
  };
};

// console.log(generateCommentFilm());

//генерируем массив с случайным числом комметанриев от 0 до 5
const generateRandomQuantityComments = (comment, quantity) => {
  let arrayComments = [];
  for (let i = 0; i < quantity; i++) {
    arrayComments.push(comment());
  }
  return arrayComments;

};

// console.log(generateRandomQuantityComments(generateCommentFilm, getRandomInteger(0,5)))

//генерируем жанр фильма
const generateGenreFilm = () => {
  const genres = ['Musical',' Western',' Drama','Comedy',' Cartoon'];
  const randomIndex = getRandomInteger(0, genres.length - 1);
  return genres[randomIndex];
};
// console.log(generateGenreFilm());

const generateCardFilm = () => {
  let x;
  return {
    name:generateNameFilm(),
    poster:generatePosterFilm(),
    description: generateDescriptionFilm(),
    genre: generateGenreFilm(),
    comment: generateRandomQuantityComments(generateCommentFilm, getRandomInteger(0,5)),
    isFavorite: Boolean(getRandomInteger(0, 1)),
  }
};
// console.log(generateCardFilm());
export {generateCardFilm};