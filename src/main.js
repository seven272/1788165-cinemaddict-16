import SiteMenuView from './view/site-menu-view.js';
import ButtonMoreView from './view/button-show-more-view.js';
import TitleUserView from './view/title-user-view.js';
import StatisticFilmView from './view/statistic-film-view.js';
import PopupListView from './view/popup-view.js';
import CardListView from './view/card-film-list-view.js';
import SortCardView from './view/sort-view.js';
import MessageNoCardView from './view/no-card-view.js';
import {generateCardFilm} from './mock/test-card.js';
import {generatePopupFilm} from './mock/test-popup.js';
import {generateFilter} from './mock/test-filter.js';
import {RenderPosition, render} from './render.js';

const CARD_FILM_COUNT = 18;
const CARD_COUNT_PER_STEP = 5;

const cards = Array.from({length: CARD_FILM_COUNT}, generateCardFilm);
const popups = Array.from({length: CARD_COUNT_PER_STEP}, generatePopupFilm);
const filters = generateFilter(cards);

const siteMainElement = document.querySelector('.main');
const siteHeaderElement = document.querySelector('.header');
const siteFooterElement = document.querySelector('.footer');
const siteFooterStatisticElement = siteFooterElement.querySelector('.footer__statistics');
const siteFilmListContainerElement = document.querySelector('.films-list__container');
const siteSortFilterElement = siteMainElement.querySelector('.films-sort-and-filter');

const renderCard = (cardListElement, card) => {
  const cardComponent = new CardListView(card);
  render(cardListElement, cardComponent.element, RenderPosition.BEFOREEND);

};


render(siteHeaderElement, new TitleUserView().element, RenderPosition.AFTEREND);
render(siteSortFilterElement, new SiteMenuView(filters).element, RenderPosition.BEFOREEND);
render(siteSortFilterElement, new SortCardView().element, RenderPosition.BEFOREEND);
render(siteFooterStatisticElement, new StatisticFilmView().element, RenderPosition.BEFOREEND);
if (cards.length === 0) {
  render(siteMainElement, new MessageNoCardView().element, RenderPosition.BEFOREEND);
} else {
  for(let i = 0; i < Math.min(cards.length, CARD_COUNT_PER_STEP);i++) {
    renderCard(siteFilmListContainerElement, cards[i]);
  }


  // ф-я показ попап при клике на карточку фильма и нажатии ESC
  const showClickPopup = () => {
    const posterContainer = document.querySelector('.films-list__container');
    const posterImg = posterContainer.querySelectorAll('.film-card__poster');
    posterImg.forEach((element)=> {
      element.addEventListener('click', () => {
        render(siteMainElement, new PopupListView(popups[0]).element, RenderPosition.BEFOREEND);
        document.body.classList.add('hide-overflow');
        const popupElement = document.querySelector('.film-details');
        const popupViewComponent = new PopupListView(popups[0]);
        //удаление по нажатию на кнопку перенесен в сам компонет
        popupViewComponent.setEditClickHandler(() => {
          document.body.classList.remove('hide-overflow');
          popupElement.remove();
        });

        document.addEventListener('keydown',(evt) => {
          if (evt.key === 'Escape' || evt.key === 'Esc') {
            evt.preventDefault();
            document.body.classList.remove('hide-overflow');
            popupElement.remove();
          }
        });
      });
    });
  };
  showClickPopup();

  //самовызывающиеся функция
  (() => {
    if (cards.length > CARD_COUNT_PER_STEP) {
      let renderedCardCount = CARD_COUNT_PER_STEP;
      render(siteMainElement, new ButtonMoreView().element, RenderPosition.BEFOREEND);
      const loadMoreButton = document.querySelector('.films-list__show-more');
      const loadMoreButtonComponent = new ButtonMoreView();
      //слушатель перенесен в сам компонент
      loadMoreButtonComponent.setClickHandler(() => {
        cards.slice(renderedCardCount, renderedCardCount + CARD_COUNT_PER_STEP).forEach((card)=>renderCard(siteFilmListContainerElement, card));
        renderedCardCount +=CARD_COUNT_PER_STEP;
        showClickPopup();
        if (renderedCardCount >= cards.length) {
          loadMoreButton.remove();
        }
      });
    }
  })();

}
