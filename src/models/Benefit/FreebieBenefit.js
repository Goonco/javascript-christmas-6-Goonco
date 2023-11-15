import { Benefit } from './Benefit.js';
import OrderValidator from '../../validators/OrderValidator.js';
import {
  EVENT_MENU,
  EVENT_FREEBIE_QUALIFY,
} from '../../constants/EventConstants.js';

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
    return this._orderList.calculateTotalPrice() >= EVENT_FREEBIE_QUALIFY;
  }

  calculateBenefit() {
    return EVENT_MENU[this.#freebie].price;
  }
}
