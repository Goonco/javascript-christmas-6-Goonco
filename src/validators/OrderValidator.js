import { isPositiveInteger } from './DateValidators.js';
import { ERROR_ORDER } from '../constants/ErrorMessage.js';
import WOOWA_MENU from '../constants/WoowaMenu.js';

const OrderValidator = {
  isQuantityPositiveInteger(quantatiy) {
    if (!isPositiveInteger(quantatiy))
      throw new Error(ERROR_ORDER.QUANTITY_NOT_POSITIVE_INTEGER);
  },

  isExistingMenu(menu) {
    if (!(menu in WOOWA_MENU)) throw new Error(ERROR_ORDER.MENU_NOT_EXISTING);
  },
};

export default OrderValidator;
