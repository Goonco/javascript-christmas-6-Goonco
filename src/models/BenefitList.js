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
    return this.#freebie;
  }

  getFreebieAndPrice() {
    return [this.#freebie.getFreebie(), this.#freebie.getBenefitAmount()];
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
    if (totalBenefit > 20000) return '산타';
    if (totalBenefit > 10000) return '트리';
    if (totalBenefit > 5000) return '별';
    return '없음';
  }
}
