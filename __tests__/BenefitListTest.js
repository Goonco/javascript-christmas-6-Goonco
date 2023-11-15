import {
  EventCalendar,
  BenefitList,
  VisitDate,
  OrderList,
  Order,
} from '../src/models/Export.js';
import GenerateBenefitList from '../src/utils/GenerateBenefitList.js';

describe('BenefitList 클래스 테스트', () => {
  EventCalendar.makeCalendar(2023, 12);
  const visitDate = new VisitDate(25);
  const orderList = new OrderList([
    new Order('제로콜라', 3),
    new Order('크리스마스파스타', 2),
    new Order('타파스', 2),
  ]);
  const discountList = GenerateBenefitList.generateDiscountList(
    visitDate,
    orderList,
  );
  const freebie = GenerateBenefitList.generateFreebie(visitDate, orderList);
  const benefitList = new BenefitList(discountList, freebie);

  test('메소드 테스트 - calculateDiscountBenefit', () => {
    expect(benefitList.calculateDiscountBenefit()).toBe(8446);
  });

  test('메소드 테스트 - calculateTotalBenefit', () => {
    expect(benefitList.calculateTotalBenefit()).toBe(8446);
  });

  test('메소드 테스트 - calculateEventBadge', () => {
    expect(benefitList.calculateEventBadge()).toBe('별');
  });
});
