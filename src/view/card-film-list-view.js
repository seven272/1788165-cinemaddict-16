import {createElement} from '../render.js';

const createCardFilmTemplate = (card) => {
  const {name, poster, description, genre, year, time, quantityComments, isFavorite, isHistory, isWatchlist} = card;
  //Добавляем класс кнопке "избранное"
  const favoriteClassName = isFavorite
    ? 'film-card__controls-item film-card__controls-item--favorite film-card__controls-item--active'
    : 'film-card__controls-item film-card__controls-item--favorite';
  //Добавляем класс кнопке просмотренно
  const historyClassName = isHistory
    ? 'film-card__controls-item film-card__controls-item--mark-as-watched film-card__controls-item--active'
    : 'film-card__controls-item film-card__controls-item--mark-as-watched';
  //Добавляем класс кнопке список просмотров
  const watchlistClassName = isWatchlist
    ? 'film-card__controls-item film-card__controls-item--add-to-watchlist film-card__controls-item--active'
    : 'film-card__controls-item film-card__controls-item--add-to-watchlist"';


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
      <button class="${watchlistClassName}" type="button">Add to watchlist</button>
      <button class="${historyClassName}" type="button">Mark as watched</button>
      <button class="${favoriteClassName}" type="button">Mark as favorite</button>
    </div>
  </article>`;
};

export default class CardListView {
  #element = null;
  #card = null;

  constructor(card) {
    this.#card = card;
  }

  get element() {
    if (!this.#element) {
      this.#element = createElement(this.template);
    }

    return this.#element;
  }

  get template() {
    return createCardFilmTemplate();
  }

  // eslint-disable-next-line no-dupe-class-members
  get template() {
    return createCardFilmTemplate(this.#card);
  }

  removeElement() {
    this.#element = null;
  }
}
