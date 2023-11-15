import { ERROR_INSTANCE } from '../constants/ErrorMessage.js';
import { Order, OrderList, VisitDate } from '../models/index.js';

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

  isVisitDate(visitDate) {
    if (!(visitDate instanceof VisitDate))
      throw new Error(ERROR_INSTANCE.ERROR_NOT_VISIT_DATE);
  },

  isOrderList(orderList) {
    if (!(orderList instanceof OrderList))
      throw new Error(ERROR_INSTANCE.ERROR_NOT_ORDERLIST);
  },
};

export default InstanceValidator;
