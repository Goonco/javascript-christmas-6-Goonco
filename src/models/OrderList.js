import OrderListValidator from '../validators/OrderListValidator.js';
import InstanceValidator from '../validators/InstanceValidator.js';

export class OrderList {
  #orderList;

  constructor(orderList) {
    this.#validate(orderList);
    this.#orderList = orderList;
  }

  #validate(orderList) {
    InstanceValidator.isOrderListMadeOfOrder(orderList);
    OrderListValidator.isUniqueMenuList(orderList);
    OrderListValidator.isNotOnlyDrink(orderList);
    OrderListValidator.isNotTooMuchOrder(orderList);
  }

  generateOrderList() {
    const orderList = this.#orderList.map((order) => [
      order.getOrder().menu,
      order.getOrder().quantity,
    ]);
    return orderList;
  }

  calculateTotalPrice() {
    let totalPrice = 0;
    this.#orderList.forEach((order) => {
      totalPrice += order.getPrice();
    });
    return totalPrice;
  }

  countByMenuType(menuType) {
    let count = 0;
    this.#orderList.forEach((order) => {
      count += order.getQuantityByType(menuType);
    });
    return count;
  }
}
