import {
  ChristmasSaleBenefit,
  FreebieBenefit,
  SpecialSaleBenefit,
  WeekSaleBenefit,
  WeekendSaleBenefit,
} from '../models/Benefit/Export.js';
import { EVENT_FREEBIE_MENU } from '../constants/EventConstants.js';

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
    return new FreebieBenefit(orderList, visitDate, EVENT_FREEBIE_MENU);
  },
};

export default GenerateBenefitList;
