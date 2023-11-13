import WOOWA_MENU from '../constants/WoowaMenu.js';
import {
  isExistingMenu,
  isUniqueMenuList,
  isNotOnlyDrink,
} from '../validators/MenuListValidator.js';

import {
  isOrderPositiveInteger,
  isNotTooMuchOrder,
} from '../validators/OrderNumberListValidator.js';

class MenuOrder {
  #menuList;

  #orderNumberList;

  constructor(menuOrder) {
    const { menuList, orderNumberList } = { ...menuOrder };
    this.#validateMenu(menuList);
    this.#validateOrder(orderNumberList);

    this.#menuList = menuList;
    this.#orderNumberList = orderNumberList;
  }

  #validateMenu(menuList) {
    isExistingMenu(menuList);
    isUniqueMenuList(menuList);
    isNotOnlyDrink(menuList);
  }

  #validateOrder(orderNumberList) {
    isOrderPositiveInteger(orderNumberList);
    isNotTooMuchOrder(orderNumberList);
  }

  generateOrderList() {
    const orderList = this.#menuList.map((menu, idx) => [
      menu,
      this.#orderNumberList[idx],
    ]);
    return orderList;
  }

  calculateTotalPrice() {
    let totalPrice = 0;
    this.#menuList.forEach((menu, idx) => {
      totalPrice += WOOWA_MENU[menu].price * this.#orderNumberList[idx];
    });
    return totalPrice;
  }

  countByMenuType(menuType) {
    let count = 0;
    this.#menuList.forEach((menu, idx) => {
      if (WOOWA_MENU[menu].type === menuType)
        count += this.#orderNumberList[idx];
    });
    return count;
  }
}

export default MenuOrder;
