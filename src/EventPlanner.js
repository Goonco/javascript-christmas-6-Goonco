import OutputView from './views/OutputView.js';
import InputView from './views/InputView.js';
import stringToVisitDate from './utils/StringToVisitDate.js';
import VisitDate from './models/VisitDate.js';
import stringToMenuOrder from './utils/StringToMenuOrder.js';
import MenuOrder from './models/MenuOrder.js';
import BenefitChecker from './models/BenefitChecker.js';
import {
  ERROR_DATE_NOT_A_INTEGER,
  ERROR_MENU_NOT_EXISTING,
} from './constants/ErrorMessage.js';

class EventPlanner {
  activate() {
    // setDate(2023-12)
    OutputView.printStartMessage();
  }

  async generateVisitDate() {
    while (true) {
      const rawVisitDate = await InputView.readVisitDate();
      const parsedVisitDate = stringToVisitDate(rawVisitDate);
      try {
        return new VisitDate(parsedVisitDate);
      } catch (e) {
        // OutputView.printErrorMessage(ERROR_DATE_NOT_A_INTEGER);
        OutputView.printErrorMessage(e);
      }
    }
  }

  async generateMenuOrder() {
    while (true) {
      const rawMenuOrder = await InputView.readMenuOrder();
      const parsedMenuOrder = stringToMenuOrder(rawMenuOrder);
      try {
        return new MenuOrder(parsedMenuOrder);
      } catch (e) {
        // OutputView.printErrorMessage(ERROR_MENU_NOT_EXISTING);
        OutputView.printErrorMessage(e);
      }
    }
  }

  showOrderResult(visitDate, menuOrder) {
    OutputView.printShowBenefitMessage(visitDate.getVisitDate());
    OutputView.printLineChange();
    OutputView.printOrderResult(menuOrder.generateOrderList());
    OutputView.printLineChange();
    OutputView.printTotalPriceBeforeSale(menuOrder.calculateTotalPrice());
    OutputView.printLineChange();
  }

  calculateBenefits(visitDate, menuOrder) {
    const benefitChecker = new BenefitChecker(visitDate, menuOrder);
    return benefitChecker;
  }

  showBenefitResult(menuOrder, benefitChecker) {
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
