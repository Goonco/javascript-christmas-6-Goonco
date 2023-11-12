import {
  ERROR_ORDER_NOT_POSTIVE_INTEGER,
  ERROR_ORDER_TOO_MUCH_ORDER,
} from '../constants/ErrorMessage.js';

const isPositiveInteger = (number) => {
  if (Number.isInteger(number) && number > 0) return true;
  return false;
};

export const isOrderPositiveInteger = (orderList) => {
  const checkOrderIntegr = orderList.every((order) => isPositiveInteger(order));
  if (!checkOrderIntegr) throw new Error(ERROR_ORDER_NOT_POSTIVE_INTEGER);
};

export const isNotTooMuchOrder = (orderList) => {
  let totalOrder = 0;
  orderList.forEach((order) => {
    totalOrder += order;
  });
  if (totalOrder > 20) throw new Error(ERROR_ORDER_TOO_MUCH_ORDER);
};
