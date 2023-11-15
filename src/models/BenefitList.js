import { EVENT_BADGE } from '../constants/EventConstants.js';

export class BenefitList {
  #discountList;

  #freebie;

  constructor(discountList, freebie) {
    this.#validate(discountList, freebie);
    this.#discountList = discountList;
    this.#freebie = freebie;
  }

  #validate(discountList, freebie) {
    // discountList 는 Benefit으로 차있는지
    // freebie는 freebiebenefit인지
  }

  getDiscountList() {
    return this.#discountList;
  }

  getFreebie() {
    return this.#freebie.getBenefitAmount();
  }

  calculateDiscountBenefit() {
    let discountBenefit = 0;
    this.#discountList.forEach((benefit) => {
      discountBenefit += benefit.getBenefitAmount();
    });
    return discountBenefit;
  }

  calculateTotalBenefit() {
    const discountBenefit = this.calculateDiscountBenefit();
    return discountBenefit + this.#freebie.getBenefitAmount();
  }

  calculateEventBadge() {
    const totalBenefit = this.calculateTotalBenefit();
    let resultBadge = '없음';

    EVENT_BADGE.forEach((eventBadgeInfo) => {
      const { price, badge } = { ...eventBadgeInfo };
      if (price <= totalBenefit) resultBadge = badge;
    });

    return resultBadge;
  }
}
