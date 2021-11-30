import dayjs from 'dayjs';
export const createCardFilmTemplate = (card) => {
  const {name, poster, description, genre, year, time, quantityComments, isFavorite} = card;
  //Добавляем класс кнопке "избранное"
  const favoriteClassName = isFavorite
    ? 'film-card__controls-item film-card__controls-item--favorite film-card__controls-item--active'
    : 'film-card__controls-item film-card__controls-item--favorite';

  return `<article class="film-card">
    <a class="film-card__link">
      <h3 class="film-card__title">${name}</h3>
      <p class="film-card__rating">3.2</p>
      <p class="film-card__info">
        <span class="film-card__year">${year}</span>
        <span class="film-card__duration">${time}</span>
        <span class="film-card__genre">${genre}</span>
      </p>
      <img src=${poster} alt="" class="film-card__poster">
      <p class="film-card__description">${description}</p>
      <span class="film-card__comments">${quantityComments} comments</span>
    </a>
    <div class="film-card__controls">
      <button class="film-card__controls-item film-card__controls-item--add-to-watchlist film-card__controls-item--active" type="button">Add to watchlist</button>
      <button class="film-card__controls-item film-card__controls-item--mark-as-watched" type="button">Mark as watched</button>
      <button class="${favoriteClassName}" type="button">Mark as favorite</button>
    </div>
  </article>`;
};
