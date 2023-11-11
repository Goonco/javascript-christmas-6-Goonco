import {
  ERROR_DATE_NOT_A_INTEGER,
  ERROR_DATE_OUT_OF_BOUND,
} from '../constants/ErrorMessage.js';

export const isInteger = (visitDate) => {
  if (!Number.isInteger(visitDate)) throw new Error(ERROR_DATE_NOT_A_INTEGER);
};

export const isDateInBound = (visitDate) => {
  if (visitDate < 1 || visitDate > 31) throw new Error(ERROR_DATE_OUT_OF_BOUND);
};
