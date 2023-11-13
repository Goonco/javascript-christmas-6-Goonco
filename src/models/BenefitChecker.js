import WOOWA_MENU from '../constants/WoowaMenu';
import DEFAULT_BENEFIT_BOARD from '../constants/Benefit';

class BenefitChecker {
  #benefitBoard;

  constructor() {
    this.#benefitBoard = DEFAULT_BENEFIT_BOARD;
  }

  getBenefitBoard() {
    return this.#benefitBoard;
  }

  checkAllBenefit(visitDay, menuOrder) {
    this.#checkFreebie(menuOrder);
  }

  #checkFreebie(menuOrder) {
    if (menuOrder.calculateTotalPrice() >= 120000)
      this.#benefitBoard.freebie = ['샴페인', WOOWA_MENU['샴페인'].price];
  }
}

export default BenefitChecker;
