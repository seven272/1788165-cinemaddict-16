import {createSiteMenuTemplate} from './view/site-menu-view.js';
import {createButtonShowMoreTemplate} from './view/button-show-more-view.js';
import {createTitleUserTemplate} from './view/title-user-view.js';
import {createStatisticFilmTemplate} from './view/statistic-film-view.js';
import {createPopupFilmTemplate} from './view/popup-view.js';
import {createCardFilmTemplate} from './view/card-film-list-view.js';
import {createSortTemplate} from './view/sort-view.js';
import {generateCardFilm} from './mock/test-card.js';
import {generatePopupFilm} from './mock/test-popup.js';
import {renderTemplate, RenderPosition} from './render.js';


const CARD_FILM_COUNT = 14;
const CARD_COUNT_PER_STEP = 5;

const cards = Array.from({length: CARD_FILM_COUNT}, generateCardFilm);
const popups = Array.from({length: CARD_COUNT_PER_STEP}, generatePopupFilm);

const siteMainElement = document.querySelector('.main');
const siteHeaderElement = document.querySelector('.header');
const siteFooterElement = document.querySelector('.footer');
const siteFooterStatisticElement = siteFooterElement.querySelector('.footer__statistics');
const siteFilmListContainerElement = document.querySelector('.films-list__container');
const siteSortFilterElement = siteMainElement.querySelector('.films-sort-and-filter');


renderTemplate(siteHeaderElement, createTitleUserTemplate(), RenderPosition.AFTEREND);
renderTemplate(siteSortFilterElement, createSiteMenuTemplate(), RenderPosition.BEFOREEND);
renderTemplate(siteSortFilterElement, createSortTemplate(), RenderPosition.BEFOREEND);

for(let i = 0; i < Math.min(cards.length, CARD_COUNT_PER_STEP);i++) {
  renderTemplate(siteFilmListContainerElement, createCardFilmTemplate(cards[i]), RenderPosition.BEFOREEND);
}

renderTemplate(siteFooterStatisticElement, createStatisticFilmTemplate(), RenderPosition.BEFOREEND);
renderTemplate(siteMainElement, createPopupFilmTemplate(popups[0]), RenderPosition.BEFOREEND);
const closePopupButton = document.querySelector('.film-details__close-btn');
const popupElement = document.querySelector('.film-details');
closePopupButton.addEventListener('click', ()=> {
  popupElement.remove();
});

if (cards.length > CARD_COUNT_PER_STEP) {
  let renderedCardCount = CARD_COUNT_PER_STEP;
  renderTemplate(siteMainElement, createButtonShowMoreTemplate(), RenderPosition.BEFOREEND);
  const loadMoreButton = document.querySelector('.films-list__show-more');

  loadMoreButton.addEventListener('click', (evt) => {
    evt.preventDefault();
    cards.slice(renderedCardCount, renderedCardCount + CARD_COUNT_PER_STEP).forEach((card)=>renderTemplate(siteFilmListContainerElement, createCardFilmTemplate(card), RenderPosition.BEFOREEND));
    renderedCardCount +=CARD_COUNT_PER_STEP;
    if (renderedCardCount >= cards.length) {
      loadMoreButton.remove();
    }
  });

}
