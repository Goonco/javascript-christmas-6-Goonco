import { Console } from '@woowacourse/mission-utils';
import {
  PRINT_FORMATS,
  PRINT_HEADERS,
  PRINT_MESSAGE,
} from '../constants/PlannerMessage.js';
import { EventCalendar } from '../models/Export.js';

const OutputView = {
  printStartMessage() {
    Console.print(PRINT_MESSAGE.START_PLANNER(EventCalendar.getMonth()));
  },

  printShowBenefitMessage(visitDate) {
    Console.print(
      PRINT_MESSAGE.SHOW_BENEFITS(EventCalendar.getMonth(), visitDate),
    );
    OutputView.printLineChange();
  },

  printOrderResult(orderList) {
    Console.print(PRINT_HEADERS.ORDER_LIST);
    orderList.forEach((order) => {
      const [menu, orderQuantatiy] = [...order];
      Console.print(PRINT_FORMATS.ORDER_RESULT(menu, orderQuantatiy));
    });
    OutputView.printLineChange();
  },

  printTotalPriceBeforeSale(totalPrice) {
    Console.print(PRINT_HEADERS.BEFORE_SALE);
    Console.print(PRINT_FORMATS.POSITIVE_MONEY_RESULT(totalPrice));
    OutputView.printLineChange();
  },

  printTotalPriceAfterSale(totalPrice) {
    Console.print(PRINT_HEADERS.AFTER_SALE);
    Console.print(PRINT_FORMATS.POSITIVE_MONEY_RESULT(totalPrice));
    OutputView.printLineChange();
  },

  printEventBadge(eventBadge) {
    Console.print(PRINT_HEADERS.BADGE(EventCalendar.getMonth()));
    Console.print(eventBadge);
    OutputView.printLineChange();
  },

  printTotalBenefit(totalBenefitPrice) {
    Console.print(PRINT_HEADERS.TOTAL_BENEFITS);
    Console.print(PRINT_FORMATS.NEGATIVE_MONEY_RESULT(totalBenefitPrice));
    OutputView.printLineChange();
  },

  printFreebie(freebie) {
    Console.print(PRINT_HEADERS.FREEBIE);
    if (freebie === 0) Console.print(PRINT_FORMATS.NO_BENEFIT);
    else Console.print(PRINT_FORMATS.ORDER_RESULT('샴페인', 1));
    OutputView.printLineChange();
  },

  printBenefitList(printEachBenefit, benefitList) {
    Console.print(PRINT_HEADERS.BENEFITS);
    printEachBenefit(benefitList);
    OutputView.printLineChange();
  },

  printBenefitAmount(benefitType, amount) {
    Console.print(PRINT_FORMATS.DISCOUNT_RESULT(benefitType, amount));
  },

  printLineChange() {
    Console.print('');
  },

  printErrorMessage(message) {
    Console.print(`${message}`);
  },

  printNothing() {
    Console.print(PRINT_FORMATS.NO_BENEFIT);
  },
};

export default OutputView;
