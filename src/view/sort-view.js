import AbstractView from './abstract-view.js';

export const createSortTemplate = () => (
  `<ul class="sort">
  <li><a href="#" class="sort__button">Sort by default</a></li>
  <li><a href="#" class="sort__button">Sort by date</a></li>
  <li><a href="#" class="sort__button sort__button--active">Sort by rating</a></li>
</ul>`
);

export default class SortCardView extends AbstractView{
  get template() {
    return createSortTemplate();
  }
}
