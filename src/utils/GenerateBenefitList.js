import {
  ChristmasSaleBenefit,
  FreebieBenefit,
  SpecialSaleBenefit,
  WeekSaleBenefit,
  WeekendSaleBenefit,
} from '../models/Benefit/Export.js';

const GenerateBenefitList = {
  generateAllBenefits(orderList, visitDate) {
    const constructorList = [
      WeekSaleBenefit,
      WeekendSaleBenefit,
      SpecialSaleBenefit,
      ChristmasSaleBenefit,
    ];
    return constructorList.map(
      (constructor) => new constructor(orderList, visitDate),
    );
  },

  generateDiscountList(orderList, visitDate) {
    const benefitList = this.generateAllBenefits(orderList, visitDate);

    const discountList = benefitList.filter(
      (benefit) => benefit.getBenefitAmount() !== 0,
    );

    return discountList;
  },

  generateFreebie(orderList, visitDate) {
    return new FreebieBenefit(orderList, visitDate, '샴페인');
  },
};

export default GenerateBenefitList;
