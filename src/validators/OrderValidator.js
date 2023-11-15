import DateValidator from './DateValidators.js';
import { ERROR_ORDER } from '../constants/ErrorMessage.js';
import { EVENT_MENU } from '../constants/EventConstants.js';

const OrderValidator = {
  isQuantityPositiveInteger(quantatiy) {
    if (!DateValidator.isPositiveInteger(quantatiy))
      throw new Error(ERROR_ORDER.QUANTITY_NOT_POSITIVE_INTEGER);
  },

  isExistingMenu(menu) {
    if (!(menu in EVENT_MENU)) throw new Error(ERROR_ORDER.MENU_NOT_EXISTING);
  },
};

export default OrderValidator;
