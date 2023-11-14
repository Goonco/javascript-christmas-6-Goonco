import OrderValidator from '../validators/OrderValidator.js';
import WOOWA_MENU from '../constants/WoowaMenu.js';

class Order {
  #order;

  constructor(menu, quantity) {
    this.#validate(menu, quantity);
    this.#order = { menu, quantity };
  }

  #validate(menu, quantity) {
    OrderValidator.isExistingMenu(menu);
    OrderValidator.isQuantityPositiveInteger(quantity);
  }

  getOrder() {
    return this.#order;
  }

  getMenuType() {
    return WOOWA_MENU[this.#order.menu].type;
  }

  getQuantityByType(type) {
    if (type === this.getMenuType()) return this.#order.quantity;
    return 0;
  }

  getPrice() {
    return WOOWA_MENU[this.#order.menu].price * this.#order.quantity;
  }
}

export default Order;
