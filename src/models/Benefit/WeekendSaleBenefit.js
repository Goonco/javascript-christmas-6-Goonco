import { Benefit } from './Benefit.js';
import { EventCalendar } from '../EventCalendar.js';

export class WeekendSaleBenefit extends Benefit {
  qualifyBenefit() {
    return this._visitDate.checkWeekendDay();
  }

  calculateBenefit() {
    EventCalendar.getYear() * this._orderList.countByMenuType('디저트');
  }
}
