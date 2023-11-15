import {
  OrderList,
  Order,
  VisitDate,
  EventCalendar,
} from '../src/models/Export.js';
import { Benefit } from '../src/models/Benefit/Export.js';
import { ERROR_INSTANCE } from '../src/constants/ErrorMessage.js';

describe('Benefit 클래스 테스트', () => {
  EventCalendar.makeCalendar(2023, 12);

  test('생성자 테스트', () => {
    const inputs = [
      [
        'obviouslyNotVisitDate',
        new OrderList([
          new Order('제로콜라', 3),
          new Order('크리스마스파스타', 2),
          new Order('타파스', 2),
        ]),
      ],
      [new VisitDate(25), 'obvisouslyNotOrderList'],
    ];
    const errorLog = [
      ERROR_INSTANCE.ERROR_NOT_VISIT_DATE,
      ERROR_INSTANCE.ERROR_NOT_ORDERLIST,
    ];

    inputs.forEach((input, idx) => {
      const [visitDate, orderList] = [...input];
      expect(() => {
        const benefit = new Benefit(visitDate, orderList);
      }).toThrow(errorLog[idx]);
    });
  });

  test('메소드 테스트 - qualifyByTotalOrderPrice', () => {
    const visitDate = new VisitDate(25);
    const orderList = new OrderList([new Order('타파스', 1)]);
    const benefit = new Benefit(visitDate, orderList);
    expect(benefit.qualifyByTotalOrderPrice()).toBe(false);
  });
});
