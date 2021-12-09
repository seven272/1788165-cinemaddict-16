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

//генерируем постер фильма
const generatePosterFilm = () => {
  const posters = [
    './images/posters/sagebrush-trail.jpg',
    './images/posters/made-for-each-other.png',
    './images/posters/popeye-meets-sinbad.png',
    './images/posters/santa-claus-conquers-the-martians.jpg',
    './images/posters/the-dance-of-life.jpg',
    './images/posters/the-great-flamarion.jpg',
    './images/posters/the-man-with-the-golden-arm.jpg',
  ];

  const randomIndex = getRandomInteger(0, posters.length - 1);
  return posters[randomIndex];
};

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

//генерируем дату комметария
const generateDateComment = () => dayjs().format('YYYY/MM/DD HH:mm');

//генерируем дату выхода фильма
const generateDateFilm = () => {
  const randomIndex = getRandomInteger(-70, 0);
  return dayjs().add(randomIndex, 'year').format('YYYY');
};

//генерируем коммментарии для фильма
const generateCommentFilm = () => {
  const commentTexts = [
    'Отличный фильм',
    'Можно было сделать и лучше',
    'Актерская игра на высоте',
    'Избитый сюжет, уже неинтересно...',
  ];
  const commentEmotions = ['./images/emoji/smile.png', './images/emoji/sleeping.png', './images/emoji/puke.png', './images/emoji/angry.png'];
  const commentUsers = ['Иван','Ирина','Ольга','Михаил'];
  const randomIndex = getRandomInteger(0, commentTexts.length - 1);
  return {
    text:commentTexts[randomIndex],
    emotion: commentEmotions[randomIndex],
    user: commentUsers[randomIndex],
    time: generateDateComment()
  };
};


//генерируем массив с случайным числом комметанриев от 0 до 5
const generateRandomQuantityComments = (comment, quantity) => {
  const arrayComments = [];
  for (let i = 0; i < quantity; i++) {
    arrayComments.push(comment());
  }
  return arrayComments;

};

//генерируем жанр фильма
const generateGenreFilm = () => {
  const genres = ['Musical',' Western',' Drama','Comedy',' Cartoon'];
  const randomIndex = getRandomInteger(0, genres.length - 1);
  return genres[randomIndex];
};

//генерируем длительность фильма
const generateTimeFilm = () => {
  const randomHour = getRandomInteger(0, 3);
  const randomMinute = getRandomInteger(1, 59);
  const timeFilm = `${randomHour}h${randomMinute}m`;
  return timeFilm;
};
//генерируем общее колличество комментариев
const generateQuantityComments = () => {
  const randomQuantity = getRandomInteger(0, 120);
  return randomQuantity;
};

//генерируем рейтинг фильма
const generateRangeFilm = () => {
  const randomRange = (getRandomInteger(0, 9) + Math.random()).toFixed(1);
  return randomRange;
};

//генерируем страну
const generateCountryFilm = () => {
  const countries = [
    'Россия',
    'США',
    'Бельгия',
  ];
  const randomIndex = getRandomInteger(0, countries.length - 1);
  return countries[randomIndex];
};

//генерируем дату выхода фильма
const generateReleaseFilm = () => {
  const randomIndex = getRandomInteger(-30000, 0);
  return dayjs().add(randomIndex, 'days').format('DD MMMM YYYY');
};

//генерируем режиссера, актеров
const generateWorkesFilm = () => {
  const filmDirectors = [
    'Сергей Иванов',
    'Иван Иванов',
    'Стивен Спилберг',
  ];
  const filmWriters = [
    'Анна Каренина, Лев Толстой',
    'Айн Ренд',
    'Алла Пугачева, Максим Галкин, Филипп Кирковов',
  ];
  const filmActors = [
    'Анна Актрисова, Дженефер Алистон, Наталья Воронкова',
    'Сергей Гармаш, Артур Егоров, Александр Скляр',
    'Алла Пугавкина, Глеб Самойлов, Неизвестный Актер',
  ];
  const randomIndex = getRandomInteger(0, filmDirectors.length - 1);
  return {
    director:filmDirectors[randomIndex],
    writer: filmWriters[randomIndex],
    actor: filmActors[randomIndex],
  };
};

export {getRandomInteger, generateNameFilm, generatePosterFilm, generateDescriptionFilm, generateGenreFilm, generateTimeFilm,generateRandomQuantityComments, generateDateFilm, generateQuantityComments, generateCommentFilm, generateRangeFilm, generateCountryFilm, generateReleaseFilm, generateWorkesFilm};
