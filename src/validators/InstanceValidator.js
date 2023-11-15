import { ERROR_INSTANCE } from '../constants/ErrorMessage.js';
import { Order, OrderList, VisitDate } from '../models/Export.js';
import { Benefit, FreebieBenefit } from '../models/Benefit/Export.js';

const InstanceValidator = {
  isListMadeOfInstance(list, classConstructor) {
    const checkElementAllInstance = list.every(
      (element) => element instanceof classConstructor,
    );
    if (!checkElementAllInstance) return false;
    return true;
  },

  isOrderListMadeOfOrder(orderList) {
    if (!this.isListMadeOfInstance(orderList, Order))
      throw new Error(ERROR_INSTANCE.ERROR_ORDERLIST_NOT_MADE_OF_ORDER);
  },

  isDiscountListMadeOfBenefit(discountList) {
    if (!this.isListMadeOfInstance(discountList, Benefit))
      throw new Error(ERROR_INSTANCE.ERROR_DISCOUNTLIST_NOT_MADE_OF_BENEFIT);
  },

  isVisitDate(visitDate) {
    if (!(visitDate instanceof VisitDate))
      throw new Error(ERROR_INSTANCE.ERROR_NOT_VISIT_DATE);
  },

  isOrderList(orderList) {
    if (!(orderList instanceof OrderList))
      throw new Error(ERROR_INSTANCE.ERROR_NOT_ORDERLIST);
  },

  isFreebie(freebie) {
    if (!(freebie instanceof FreebieBenefit))
      throw new Error(ERROR_INSTANCE.ERROR_NOT_FREEBIE_BENEFIT);
  },
};

export default InstanceValidator;
