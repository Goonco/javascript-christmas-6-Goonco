import { ERROR_CALENDAR, ERROR_VISIT_DATE } from '../constants/ErrorMessage.js';
import { EventCalendar } from '../models/index.js';

const DateValidator = {
  isPositiveInteger(number) {
    if (Number.isInteger(number) && number > 0) return true;
    return false;
  },

  isDayPositiveInteger(day) {
    if (!this.isPositiveInteger(day))
      throw new Error(ERROR_VISIT_DATE.DATE_NOT_A_POSITIVE_INTEGER);
  },

  isMonthPositiveInteger(month) {
    if (!this.isPositiveInteger(month))
      throw new Error(ERROR_CALENDAR.MONTH_NOT_A_POSITIVE_INTEGER);
  },

  isYearPositiveInteger(year) {
    if (!this.isPositiveInteger(year))
      throw new Error(ERROR_CALENDAR.YEAR_NOT_A_POSITIVE_INTEGER);
  },

  isDayInBound(day) {
    if (day < 1 || day > EventCalendar.getLastDayOfMonth())
      throw new Error(ERROR_VISIT_DATE.DATE_OUT_OF_BOUND);
  },

  isMonthInBound(month) {
    if (month < 1 || month > 12)
      throw new Error(ERROR_CALENDAR.MONTH_OUT_OF_BOUND);
  },
};

export default DateValidator;
