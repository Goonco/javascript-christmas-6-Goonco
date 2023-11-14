import OutputView from './views/OutputView.js';
import InputView from './views/InputView.js';
import stringToVisitDate from './utils/StringToVisitDate.js';
import VisitDate from './models/VisitDate.js';
import stringToMenuOrder from './utils/StringToMenuOrder.js';
import MenuOrder from './models/MenuOrder.js';
import BenefitChecker from './models/BenefitChecker.js';
import readUntilNoError from './utils/ReadUntilNoError.js';

class EventPlanner {
  async run() {
    this.#activate();
    const visitDate = await readUntilNoError(this.#generateVisitDate);
    const menuOrder = await readUntilNoError(this.#generateMenuOrder);
    const benefitChecer = this.#calculateBenefits(visitDate, menuOrder);
    this.#showOrderResult(visitDate, menuOrder);
    this.#showBenefitResult(menuOrder, benefitChecer);
  }

  #activate() {
    // setDate(2023-12)
    OutputView.printStartMessage();
  }

  async #generateVisitDate() {
    const rawVisitDate = await InputView.readVisitDate();
    const parsedVisitDate = stringToVisitDate(rawVisitDate);
    return new VisitDate(parsedVisitDate);
  }

  async #generateMenuOrder() {
    const rawMenuOrder = await InputView.readMenuOrder();
    const parsedMenuOrder = stringToMenuOrder(rawMenuOrder);
    return new MenuOrder(parsedMenuOrder);
  }

  #showOrderResult(visitDate, menuOrder) {
    OutputView.printShowBenefitMessage(visitDate.getVisitDate());
    OutputView.printLineChange();
    OutputView.printOrderResult(menuOrder.generateOrderList());
    OutputView.printLineChange();
    OutputView.printTotalPriceBeforeSale(menuOrder.calculateTotalPrice());
    OutputView.printLineChange();
  }

  #calculateBenefits(visitDate, menuOrder) {
    const benefitChecker = new BenefitChecker(visitDate, menuOrder);
    return benefitChecker;
  }

  #showBenefitResult(menuOrder, benefitChecker) {
    const benefitResult = benefitChecker.getBenefitBoard();
    const totalBenefit = benefitChecker.calculateTotalBenefit();
    OutputView.printFreebie(benefitResult.freebie);
    OutputView.printLineChange();
    OutputView.printBenefitList(benefitResult, totalBenefit);
    OutputView.printLineChange();
    OutputView.printTotalBenefit(totalBenefit);
    OutputView.printLineChange();
    OutputView.printTotalPriceAfterSale(
      menuOrder.calculateTotalPrice() - benefitChecker.calculateRealBenefit(),
    );
    OutputView.printLineChange();
    OutputView.printEventBadge(benefitChecker.calculateEventBadge());
  }
}

export default EventPlanner;
