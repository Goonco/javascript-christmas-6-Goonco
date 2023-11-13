import BenefitChecker from '../src/models/BenefitChecker.js';
import MenuOrder from '../src/models/MenuOrder.js';
import VisitDate from '../src/models/VisitDate.js';
import DEFAULT_BENEFIT_BOARD from '../src/constants/Benefit.js';

describe('BenefitChecker 클래스 테스트', () => {
  const benefitChecker = new BenefitChecker();

  test('주문 금액이 120000 이상이면 샴페인을 증정 받는다.', () => {
    const visitDate = new VisitDate(25);
    const menuOrder = new MenuOrder({
      menuList: ['티본스테이크', '바비큐립', '초코케이크', '제로콜라'],
      orderNumberList: [1, 1, 2, 1],
    });
    benefitChecker.checkAllBenefit(visitDate, menuOrder);
    expect(benefitChecker.getBenefitBoard()).toEqual({
      ...DEFAULT_BENEFIT_BOARD,
      freebie: ['샴페인', 25000],
    });
  });
});
