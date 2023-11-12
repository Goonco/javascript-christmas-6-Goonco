import { Console } from '@woowacourse/mission-utils';
import MenuOrder from '../src/models/MenuOrder.js';
import {
  ERROR_MENU_NOT_EXISTING,
  ERROR_MENU_NOT_UNIQUE,
  ERROR_MENU_ONLY_DRINKS,
  ERROR_ORDER_NOT_POSTIVE_INTEGER,
  ERROR_ORDER_TOO_MUCH_ORDER,
} from '../src/constants/ErrorMessage.js';

describe('MenuOrder 클래스 테스트', () => {
  test('존재하지 않는 메뉴가 입력될 경우 예외가 발생한다', () => {
    expect(() => {
      new MenuOrder({
        menuList: ['짜장면', '탕수육'],
        orderNumberList: [3, 6],
      });
    }).toThrow(ERROR_MENU_NOT_EXISTING);
  });

  test('중복된 메뉴에 대한 주문이 발생할 경우 예외가 발생한다.', () => {
    expect(() => {
      new MenuOrder({
        menuList: ['시저샐러드', '시저샐러드'],
        orderNumberList: [4, 5],
      });
    }).toThrow(ERROR_MENU_NOT_UNIQUE);
  });

  test('음료만 주문했을 경우 예외가 발생한다.', () => {
    expect(() => {
      new MenuOrder({
        menuList: ['제로콜라', '레드와인'],
        orderNumberList: [5, 6],
      });
    }).toThrow(ERROR_MENU_ONLY_DRINKS);
  });
});