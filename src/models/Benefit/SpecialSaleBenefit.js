import { Benefit } from './Benefit.js';

export class SpecialSaleBenefit extends Benefit {
  qualifyBenefit() {
    return this._visitDate.checkSpecialDay();
  }

  calculateBenefit() {
    return 1000;
  }
}
