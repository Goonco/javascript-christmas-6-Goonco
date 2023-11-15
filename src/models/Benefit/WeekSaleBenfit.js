import { Benefit } from './Benefit.js';
import { EventCalendar } from '../EventCalendar.js';

export class WeekSaleBenefit extends Benefit {
  qualifyBenefit() {
    return this._visitDate.checkWeekDay();
  }

  calculateBenefit() {
    return EventCalendar.getYear() * this._orderList.countByMenuType('메인');
  }
}
