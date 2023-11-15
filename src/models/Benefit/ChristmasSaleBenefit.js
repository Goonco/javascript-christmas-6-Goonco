import { Benefit } from './Benefit.js';
import {
  EVENT_CHRISTMAS_BASE_SALE,
  EVENT_CHRISTMAS_INCREASE_SALE,
} from '../../constants/EventConstants.js';

export class ChristmasSaleBenefit extends Benefit {
  qualifyBenefit() {
    return this._visitDate.checkChristmasDDay() <= 25;
  }

  calculateBenefit() {
    return (
      EVENT_CHRISTMAS_BASE_SALE +
      EVENT_CHRISTMAS_INCREASE_SALE * this._visitDate.checkChristmasDDay()
    );
  }
}
