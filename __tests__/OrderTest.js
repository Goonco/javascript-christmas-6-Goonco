import { Order } from '../src/models/Export.js';
import { ERROR_ORDER } from '../src/constants/ErrorMessage.js';

describe('Order 클래스 테스트', () => {
  test('생성자 테스트', () => {
    const inputs = [
      ['짜장면', '3'],
      ['타파스', 2.3],
      ['타파스', -2.3],
    ];
    const errorLog = [
      ERROR_ORDER.MENU_NOT_EXISTING,
      ERROR_ORDER.QUANTITY_NOT_POSITIVE_INTEGER,
      ERROR_ORDER.QUANTITY_NOT_POSITIVE_INTEGER,
    ];

    inputs.forEach((input, idx) => {
      const [menu, quantity] = [...input];
      expect(() => {
        const order = new Order(menu, quantity);
      }).toThrow(errorLog[idx]);
    });
  });

  test('메소드 테스트 - getQuantityByType', () => {
    const inputs = ['메인', '디저트', '애피타이저'];
    const log = [0, 0, 3];
    const order = new Order('양송이수프', 3);

    inputs.forEach((input, idx) => {
      expect(order.getQuantityByType(input)).toBe(log[idx]);
    });
  });

  test('메소드 테스트 - getPrice', () => {
    const order = new Order('양송이수프', 3);
    expect(order.getPrice()).toBe(18000);
  });
});
