import { ERROR_ORDERLIST } from '../constants/ErrorMessage.js';

const OrderListValidator = {
  isNotTooMuchOrder(orderList) {
    let totalOrder = 0;
    orderList.forEach((order) => {
      totalOrder += order.getOrder().quantity;
    });
    if (totalOrder > 20) throw new Error(ERROR_ORDERLIST.QUANTITY_TOO_MUCH);
  },

  isUniqueMenuList(orderList) {
    const menuNames = orderList.map((order) => order.getOrder().menu);
    const checkUnique = new Set(menuNames).size === menuNames.length;
    if (!checkUnique) throw new Error(ERROR_ORDERLIST.MENU_NOT_UNIQUE);
  },

  isNotOnlyDrink(orderList) {
    const checkNotOnlyDrink = orderList.some(
      (order) => order.getMenuType() !== '음료',
    );
    if (!checkNotOnlyDrink) throw new Error(ERROR_ORDERLIST.MENU_ONLY_DRINKS);
  },
};

export default OrderListValidator;
