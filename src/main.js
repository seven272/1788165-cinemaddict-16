import {createSiteMenuTemplate} from './view/site-menu-view.js';
import {createButtonShowMoreTemplate} from './view/button-show-more-view.js';
import {createTitleUserTemplate} from './view/title-user-view.js';
import {createStatisticFilmTemplate} from './view/statistic-film-view.js';
import {createPopupFilmTemplate} from './view/popup-view.js';
import {createCardFilmTemplate} from './view/card-film-list-view.js';
// import './mock/test-date.js';
import {generateCardFilm} from './mock/test-date.js'
import {renderTemplate, RenderPosition} from './render.js';
// console.log(generateCardFilm());

const CARD_FILM_COUNT = 5;

const cards = Array.from({length: CARD_FILM_COUNT}, generateCardFilm);
console.log(cards)
const siteMainElement = document.querySelector('.main');
const siteHeaderElement = document.querySelector('.header');
const siteFooterElement = document.querySelector('.footer');
const siteFooterStatisticElement = siteFooterElement.querySelector('.footer__statistics');

const siteFilmListContainerElement = document.querySelector('.films-list__container')


renderTemplate(siteHeaderElement, createTitleUserTemplate(), RenderPosition.BEFOREEND);
renderTemplate(siteMainElement, createSiteMenuTemplate(), RenderPosition.BEFOREEND);
for(let i = 0; i < CARD_FILM_COUNT;i++) {
 renderTemplate(siteMainElement, createCardFilmTemplate(), RenderPosition.BEFOREEND);
}
renderTemplate(siteMainElement, createButtonShowMoreTemplate(), RenderPosition.BEFOREEND);
renderTemplate(siteFooterStatisticElement, createStatisticFilmTemplate(), RenderPosition.BEFOREEND);
renderTemplate(siteMainElement, createPopupFilmTemplate(), RenderPosition.BEFOREEND);