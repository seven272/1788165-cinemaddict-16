import AbstractView from './abstract-view.js';
// import {createElement} from '../render.js';

const createStatisticFilmTemplate = () => (
  `<section class="footer__statistics">
      <p>130 291 movies inside</p>
  </section>`
);

export default class StatisticFilmView extends AbstractView{
  get template() {
    return createStatisticFilmTemplate();
  }
}

