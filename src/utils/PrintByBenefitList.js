import OutputView from '../views/OutputView.js';
import {
  WeekendSaleBenefit,
  WeekSaleBenefit,
  SpecialSaleBenefit,
  ChristmasSaleBenefit,
  FreebieBenefit,
} from '../models/Benefit/Export.js';

const constructors = [
  WeekendSaleBenefit,
  WeekSaleBenefit,
  SpecialSaleBenefit,
  ChristmasSaleBenefit,
  FreebieBenefit,
];

const types = [
  '크리스마스 디데이 할인',
  '평일 할인',
  '주말 할인',
  '특별 할인',
  '증정 이벤트',
];

const printBenefit = (benefit) => {
  constructors.forEach((constructor, idx) => {
    if (benefit instanceof constructor) {
      OutputView.printBenefitAmount(types[idx], benefit.getBenefitAmount());
    }
  });
};

const PrintByBenefitList = {
  printBenefitList(benefitList) {
    const discountList = benefitList.getDiscountList();
    const freebie = benefitList.getFreebie();

    if (discountList.length === 0 && freebie.getBenefitAmount() === 0)
      OutputView.printNothing();
    else {
      discountList.forEach((benefit) => {
        printBenefit(benefit);
      });
      if (freebie.getBenefitAmount() !== 0) {
        printBenefit(freebie);
      }
    }
  },
};

export default PrintByBenefitList;
