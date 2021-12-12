import {createElement} from '../render.js';

const createStatisticFilmTemplate = () => (
  `<section class="footer__statistics">
      <p>130 291 movies inside</p>
  </section>`
);

export default class StatisticFilmView {
  #element = null;
  get element() {
    if (!this.#element) {
      this.#element = createElement(this.template);
    }

    return this.#element;
  }

  get template() {
    return createStatisticFilmTemplate();
  }

  removeElement() {
    this.#element = null;
  }
}

