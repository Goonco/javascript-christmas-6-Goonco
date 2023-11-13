import BenefitChecker from '../src/models/BenefitChecker.js';
import MenuOrder from '../src/models/MenuOrder.js';
import VisitDate from '../src/models/VisitDate.js';
import DEFAULT_BENEFIT_BOARD from '../src/constants/Benefit.js';

describe('BenefitChecker 클래스 테스트', () => {
  const benefitChecker = new BenefitChecker();
  const visitDate = new VisitDate(3);
  const menuOrder = new MenuOrder({
    menuList: ['티본스테이크', '바비큐립', '초코케이크', '제로콜라'],
    orderNumberList: [1, 1, 2, 1],
  });

  test('주문에 대한 혜택 목록을 작성한다.', () => {
    benefitChecker.checkAllBenefit(visitDate, menuOrder);
    expect(benefitChecker.getBenefitBoard()).toEqual({
      christmasDDay: 1200,
      weekDay: 4046,
      weekendDay: 0,
      special: 1000,
      freebie: ['샴페인', 25000],
    });
  });

  test('총 혜택 금액을 계산한다.', () => {
    expect(benefitChecker.calculateTotalBenefit()).toBe(31246);
  });

  test('이벤트 뱃지를 계산한다.', () => {
    expect(benefitChecker.calculateEventBadge()).toBe('산타');
  });
});
