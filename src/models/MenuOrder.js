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
}

export default MenuOrder;
