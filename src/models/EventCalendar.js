import DateValidator from '../validators/DateValidators.js';

export class EventCalendar {
  static #calendar;

  static makeCalendar(year, month) {
    EventCalendar.#validate(year, month);
    EventCalendar.#calendar = new Date(`${year}-${month}`);
  }

  static #validate(year, month) {
    DateValidator.isMonthPositiveInteger(month);
    DateValidator.isYearPositiveInteger(year);
    DateValidator.isMonthInBound(month);
  }

  static getYear() {
    return EventCalendar.#calendar.getFullYear();
  }

  static getMonth() {
    return EventCalendar.#calendar.getMonth() + 1;
  }

  static getDayOfTheWeek(day) {
    const newDay = new Date(
      `${EventCalendar.getYear()}-${EventCalendar.getMonth()}-${day}`,
    );
    const daysOfWeek = ['일', '월', '화', '수', '목', '금', '토'];
    return daysOfWeek[newDay.getDay()];
  }

  static getLastDayOfMonth() {
    const daysOfMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    return daysOfMonth[EventCalendar.getMonth() - 1];
  }
}

export default EventCalendar;
