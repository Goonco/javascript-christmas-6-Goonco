import {
  isDayPositiveInteger,
  isDayInBound,
} from '../validators/DateValidators.js';

class VisitDate {
  #visitDate;

  constructor(visitDate) {
    this.#validate(visitDate);
    this.#visitDate = new Date(`2023-12-${visitDate}`);
  }

  getVisitDate() {
    return this.#visitDate.getDate();
  }

  #validate(visitDate) {
    isDayPositiveInteger(visitDate);
    isDayInBound(visitDate);
  }

  checkWeekDay() {
    const DAYS = ['일', '월', '화', '수', '목', '금', '토'];
    const day = DAYS[this.#visitDate.getDay()];
    if (day !== '금' && day !== '토') return true;
    return false;
  }

  checkWeekendDay() {
    const DAYS = ['일', '월', '화', '수', '목', '금', '토'];
    const day = DAYS[this.#visitDate.getDay()];
    if (day === '금' || day === '토') return true;
    return false;
  }

  checkSpecialDay() {
    const DAYS = ['일', '월', '화', '수', '목', '금', '토'];
    const day = DAYS[this.#visitDate.getDay()];
    if (day === '일' || this.#visitDate.getDate() === 25) return true;
    return false;
  }

  checkChristmasDDay() {
    if (this.#visitDate.getDate() <= 25) return this.#visitDate.getDate() - 1;
    return -1;
  }
}

export default VisitDate;
