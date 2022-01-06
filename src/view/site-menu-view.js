import AbstractView from './abstract-view.js';

const createSiteMenuTemplate = (filter) => (
  `<nav class="main-navigation">
    <div class="main-navigation__items">
      <a href="#all" class="main-navigation__item main-navigation__item--active">${filter[0].name}</a>
      <a href="#watchlist" class="main-navigation__item">${filter[3].name} <span class="main-navigation__item-count">${filter[3].count}</span></a>
      <a href="#history" class="main-navigation__item">${filter[2].name} <span class="main-navigation__item-count">${filter[2].count}</span></a>
      <a href="#favorites" class="main-navigation__item">${filter[1].name} <span class="main-navigation__item-count">${filter[1].count}</span></a>
    </div>
    <a href="#stats" class="main-navigation__additional">Stats</a>
  </nav>`
);

export default class SiteMenuView extends AbstractView {
  // #element = null;
  #filters = null;

  constructor(filtres) {
    super();
    this.#filters = filtres;
  }

  get template() {
    return createSiteMenuTemplate();
  }

  // eslint-disable-next-line no-dupe-class-members
  get template() {
    return createSiteMenuTemplate(this.#filters);
  }

}
