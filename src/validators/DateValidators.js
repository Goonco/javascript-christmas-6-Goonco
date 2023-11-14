import { ERROR_CALENDAR, ERROR_VISIT_DATE } from '../constants/ErrorMessage.js';
import EventCalendar from '../models/EventCalendar.js';

export const isPositiveInteger = (number) => {
  if (Number.isInteger(number) && number > 0) return true;
  return false;
};

export const isDayPositiveInteger = (day) => {
  if (!isPositiveInteger(day))
    throw new Error(ERROR_VISIT_DATE.DATE_NOT_A_POSITIVE_INTEGER);
};

export const isMonthPositiveInteger = (month) => {
  if (!isPositiveInteger(month))
    throw new Error(ERROR_CALENDAR.MONTH_NOT_A_POSITIVE_INTEGER);
};

export const isYearPositiveInteger = (year) => {
  if (!isPositiveInteger(year))
    throw new Error(ERROR_CALENDAR.YEAR_NOT_A_POSITIVE_INTEGER);
};

export const isDayInBound = (day) => {
  if (day < 1 || day > EventCalendar.getLastDayOfMonth())
    throw new Error(ERROR_VISIT_DATE.DATE_OUT_OF_BOUND);
};

export const isMonthInBound = (month) => {
  if (month < 1 || month > 12)
    throw new Error(ERROR_CALENDAR.MONTH_OUT_OF_BOUND);
};
