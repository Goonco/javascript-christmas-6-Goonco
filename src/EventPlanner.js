import OutputView from './views/OutputView.js';
import InputView from './views/InputView.js';
import readUntilNoError from './utils/ReadUntilNoError.js';
import StringParser from './utils/StringParser.js';
import PrintByBenefitList from './utils/PrintByBenefitList.js';
import {
  EventCalendar,
  OrderList,
  VisitDate,
  BenefitList,
} from './models/Export.js';
import GenerateBenefitList from './utils/GenerateBenefitList.js';

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
    EventCalendar.makeCalendar(2023, 12);
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
    OutputView.printOrderResult(orderList.generateOrderList());
    OutputView.printTotalPriceBeforeSale(orderList.calculateTotalPrice());
  }

  #calculateBenefits(visitDate, orderList) {
    const discountList = GenerateBenefitList.generateDiscountList(
      visitDate,
      orderList,
    );
    const freebie = GenerateBenefitList.generateFreebie(visitDate, orderList);

    const benefitList = new BenefitList(discountList, freebie);
    return benefitList;
  }

  #showBenefitResult(orderList, benefitList) {
    OutputView.printFreebie(benefitList.getFreebieAndPrice());
    OutputView.printBenefitList(
      PrintByBenefitList.printBenefitList,
      benefitList,
    );
    OutputView.printTotalBenefit(benefitList.calculateTotalBenefit());
    OutputView.printTotalPriceAfterSale(
      orderList.calculateTotalPrice() - benefitList.calculateDiscountBenefit(),
    );
    OutputView.printEventBadge(benefitList.calculateEventBadge());
  }
}

export default EventPlanner;
