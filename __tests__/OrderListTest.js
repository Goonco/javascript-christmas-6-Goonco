import { Order, OrderList } from '../src/models/Export.js';
import { ERROR_ORDERLIST } from '../src/constants/ErrorMessage.js';

describe('OrderList 클래스 테스트', () => {
  test('생성자 테스트', () => {
    const inputs = [
      [new Order('타파스', 2), new Order('타파스', 2)],
      [new Order('제로콜라', 3), new Order('샴페인', 1)],
      [new Order('제로콜라', 15), new Order('크리스마스파스타', 15)],
    ];
    const errorLog = [
      ERROR_ORDERLIST.MENU_NOT_UNIQUE,
      ERROR_ORDERLIST.MENU_ONLY_DRINKS,
      ERROR_ORDERLIST.QUANTITY_TOO_MUCH,
    ];

    inputs.forEach((input, idx) => {
      expect(() => {
        const orderList = new OrderList(input);
      }).toThrow(errorLog[idx]);
    });
  });

  test('메소드 테스트 - calculateTotalPrice', () => {
    const orderList = new OrderList([
      new Order('제로콜라', 3),
      new Order('크리스마스파스타', 2),
      new Order('타파스', 2),
    ]);
    expect(orderList.calculateTotalPrice()).toBe(70000);
  });

  test('메소드 테스트 - countByMenuType', () => {
    const orderList = new OrderList([
      new Order('양송이수프', 3),
      new Order('티본스테이크', 3),
      new Order('시저샐러드', 2),
      new Order('타파스', 2),
    ]);
    expect(orderList.countByMenuType('애피타이저')).toBe(7);
  });
});
