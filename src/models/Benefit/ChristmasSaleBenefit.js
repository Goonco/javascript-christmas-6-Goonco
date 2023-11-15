import { Benefit } from './Benefit.js';

export class ChristmasSaleBenefit extends Benefit {
  qualifyBenefit() {
    return this._visitDate.checkChristmasDDay() <= 25;
  }

  calculateBenefit() {
    return 1000 + 100 * this._visitDate.checkChristmasDDay();
  }
}
