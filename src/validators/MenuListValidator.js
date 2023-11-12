import WOOWA_MENU from '../constants/WoowaMenu.js';
import {
  ERROR_MENU_NOT_EXISTING,
  ERROR_MENU_NOT_UNIQUE,
  ERROR_MENU_ONLY_DRINKS,
} from '../constants/ErrorMessage.js';

export const isExistingMenu = (menuList) => {
  menuList.forEach((menu) => {
    if (!(menu in WOOWA_MENU)) throw new Error(ERROR_MENU_NOT_EXISTING);
  });
};

export const isUniqueMenuList = (menuList) => {
  const deleteDuplicateMenu = new Set(menuList);
  if (deleteDuplicateMenu.size !== menuList.length)
    throw new Error(ERROR_MENU_NOT_UNIQUE);
};

export const isNotOnlyDrink = (menuList) => {
  const checkNotOnlyDrink = menuList.some(
    (menu) => WOOWA_MENU[menu].type !== '음료',
  );
  if (!checkNotOnlyDrink) throw new Error(ERROR_MENU_ONLY_DRINKS);
};
