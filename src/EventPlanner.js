import OutputView from './views/OutputView.js';
import InputView from './views/InputView.js';
import VisitDate from './models/VisitDate.js';
import BenefitChecker from './models/BenefitChecker.js';
import readUntilNoError from './utils/ReadUntilNoError.js';
import StringParser from './utils/StringParser.js';
import EventCalendar from './models/EventCalendar.js';
import OrderList from './models/OrderList.js';
import { EVENT_YEAR, EVENT_MONTH } from './constants/EventConstants.js';

class EventPlanner {
  async run() {
    this.#activate();
    const visitDate = await readUntilNoError(this.#generateVisitDate);
    const orderList = await readUntilNoError(this.#generateOrderList);
    const benefitChecer = this.#calculateBenefits(visitDate, orderList);
    this.#showOrderResult(visitDate, orderList);
    this.#showBenefitResult(orderList, benefitChecer);
  }

  #activate() {
    EventCalendar.makeCalendar(EVENT_YEAR, EVENT_MONTH);
    OutputView.printStartMessage();
  }

  async #generateVisitDate() {
    const rawVisitDate = await InputView.readVisitDate();
    const parsedVisitDate = StringParser.stringToNumber(rawVisitDate);
    return new VisitDate(parsedVisitDate);
  }

  async #generateOrderList() {
    const rawOrderList = await InputView.readOrderList();
    const parsedOrderList = StringParser.stringToOrderList(rawOrderList);
    return new OrderList(parsedOrderList);
  }

  #showOrderResult(visitDate, orderList) {
    OutputView.printShowBenefitMessage(visitDate.getVisitDate());
    OutputView.printLineChange();
    OutputView.printOrderResult(orderList.generateOrderList());
    OutputView.printLineChange();
    OutputView.printTotalPriceBeforeSale(orderList.calculateTotalPrice());
    OutputView.printLineChange();
  }

  #calculateBenefits(visitDate, orderList) {
    const benefitChecker = new BenefitChecker(visitDate, orderList);
    return benefitChecker;
  }

  #showBenefitResult(orderList, benefitChecker) {
    const benefitResult = benefitChecker.getBenefitBoard();
    const totalBenefit = benefitChecker.calculateTotalBenefit();
    OutputView.printFreebie(benefitResult.freebie);
    OutputView.printLineChange();
    OutputView.printBenefitList(benefitResult, totalBenefit);
    OutputView.printLineChange();
    OutputView.printTotalBenefit(totalBenefit);
    OutputView.printLineChange();
    OutputView.printTotalPriceAfterSale(
      orderList.calculateTotalPrice() - benefitChecker.calculateRealBenefit(),
    );
    OutputView.printLineChange();
    OutputView.printEventBadge(benefitChecker.calculateEventBadge());
  }
}

export default EventPlanner;
