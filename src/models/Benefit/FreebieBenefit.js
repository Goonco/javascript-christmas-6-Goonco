import { Benefit } from './Benefit.js';
import OrderValidator from '../../validators/OrderValidator.js';
import WOOWA_MENU from '../../constants/WoowaMenu.js';

export class FreebieBenefit extends Benefit {
  #freebie;

  constructor(visitDate, orderList, freebie) {
    super(visitDate, orderList);
    this.#validate(freebie);
    this.#freebie = freebie;
  }

  #validate(freebie) {
    OrderValidator.isExistingMenu(freebie);
  }

  qualifyBenefit() {
    return this._orderList.calculateTotalPrice() >= 120000;
  }

  calculateBenefit() {
    return WOOWA_MENU[this.#freebie].price;
  }

  getFreebie() {
    return this.#freebie;
  }
}
