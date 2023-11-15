import DateValidator from '../validators/DateValidators.js';
import { EventCalendar } from './EventCalendar.js';

export class VisitDate {
  #visitDate;

  constructor(visitDate) {
    this.#validate(visitDate);
    this.#visitDate = visitDate;
  }

  getVisitDate() {
    return this.#visitDate;
  }

  #validate(visitDate) {
    DateValidator.isDayPositiveInteger(visitDate);
    DateValidator.isDayInBound(visitDate);
  }

  checkWeekDay() {
    const dayOfWeek = EventCalendar.getDayOfTheWeek(this.#visitDate);
    if (dayOfWeek !== '금' && dayOfWeek !== '토') return true;
    return false;
  }

  checkWeekendDay() {
    const dayOfWeek = EventCalendar.getDayOfTheWeek(this.#visitDate);
    if (dayOfWeek === '금' || dayOfWeek === '토') return true;
    return false;
  }

  checkSpecialDay() {
    const dayOfWeek = EventCalendar.getDayOfTheWeek(this.#visitDate);
    if (dayOfWeek === '일' || this.#visitDate === 25) return true;
    return false;
  }

  checkChristmasDDay() {
    if (this.#visitDate <= 25) return this.#visitDate - 1;
    return -1;
  }
}
