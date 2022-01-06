
import AbstractView from './abstract-view.js';

const createMessageNoCard = () => (
  `<section class="films-list">
    <h2 class="films-list__title">There are no movies in our database</h2>
  </section>`
);

export default class MessageNoCardView extends AbstractView {
  get template() {
    return createMessageNoCard();
  }

}
