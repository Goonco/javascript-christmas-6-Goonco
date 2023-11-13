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

  checkAllBenefit(visitDate, menuOrder) {
    this.#checkFreebie(menuOrder);
    this.#checkWeekDaySale(visitDate, menuOrder);
    this.#checkWeekendDaySale(visitDate, menuOrder);
    this.#checkSpecailDaySale(visitDate);
    this.#checkChristmasDDaySale(visitDate);
  }

  calculateTotalBenefit() {
    const values = Object.values(this.#benefitBoard);

    let totalBenefit = 0;
    values.forEach((value) => {
      if (value.length === 2) totalBenefit += value[1];
      else totalBenefit += value;
    });

    return totalBenefit;
  }

  #checkFreebie(menuOrder) {
    if (menuOrder.calculateTotalPrice() >= 120000)
      this.#benefitBoard.freebie = ['샴페인', WOOWA_MENU['샴페인'].price];
  }

  #checkWeekDaySale(visitDate, menuOrder) {
    if (!visitDate.checkWeekDay()) return;
    this.#benefitBoard.weekDay = 2023 * menuOrder.countByMenuType('디저트');
  }

  #checkWeekendDaySale(visitDate, menuOrder) {
    if (!visitDate.checkWeekendDay()) return;
    this.#benefitBoard.weekendDay = 2023 * menuOrder.countByMenuType('메인');
  }

  #checkSpecailDaySale(visitDate) {
    if (!visitDate.checkSpecialDay()) return;
    this.#benefitBoard.special = 1000;
  }

  #checkChristmasDDaySale(visitDate) {
    const dDay = visitDate.checkChristmasDDay();
    if (dDay === -1) return;
    this.#benefitBoard.christmasDDay = 1000 + 100 * dDay;
  }
}

export default BenefitChecker;
