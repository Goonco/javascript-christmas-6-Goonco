import { Benefit } from './Benefit.js';
import { EVENT_SPECIAL_SALE } from '../../constants/EventConstants.js';

export class SpecialSaleBenefit extends Benefit {
  qualifyBenefit() {
    return this._visitDate.checkSpecialDay();
  }

  calculateBenefit() {
    return EVENT_SPECIAL_SALE;
  }
}
