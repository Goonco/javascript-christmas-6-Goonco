import { Console } from '@woowacourse/mission-utils';
import {
  PRINT_FORMATS,
  PRINT_HEADERS,
  PRINT_MESSAGE,
} from '../constants/PlannerMessage.js';

const OutputView = {
  printStartMessage() {
    Console.print(PRINT_MESSAGE.START_PLANNER);
  },

  printShowBenefitMessage(visitDate) {
    Console.print(PRINT_MESSAGE.SHOW_BENEFITS(visitDate));
  },

  printOrderResult(orderList) {
    Console.print(PRINT_HEADERS.ORDER_LIST);
    orderList.forEach((order) => {
      const [menu, orderQuantatiy] = [...order];
      Console.print(PRINT_FORMATS.ORDER_RESULT(menu, orderQuantatiy));
    });
  },

  printTotalPriceBeforeSale(totalPrice) {
    Console.print(PRINT_HEADERS.BEFORE_SALE);
    Console.print(PRINT_FORMATS.POSITIVE_MONEY_RESULT(totalPrice));
  },

  printTotalPriceAfterSale(totalPrice) {
    Console.print(PRINT_HEADERS.AFTER_SALE);
    Console.print(PRINT_FORMATS.POSITIVE_MONEY_RESULT(totalPrice));
  },

  printEventBadge(eventBadge) {
    Console.print(PRINT_HEADERS.BADGE);
    Console.print(eventBadge);
  },

  printTotalBenefit(totalBenefitPrice) {
    Console.print(PRINT_HEADERS.TOTAL_BENEFITS);
    Console.print(PRINT_FORMATS.NEGATIVE_MONEY_RESULT(totalBenefitPrice));
  },

  printFreebie(freebie) {
    Console.print(PRINT_HEADERS.FREEBIE);
    if (freebie === 0) Console.print(PRINT_FORMATS.NO_BENEFIT);
    else Console.print(PRINT_FORMATS.ORDER_RESULT('샴페인', 1));
  },

  printBenefitList(benefitList, totalBenefit) {
    Console.print(PRINT_HEADERS.BENEFITS);
    if (totalBenefit === 0) Console.print(PRINT_FORMATS.NO_BENEFIT);
    this.printChristmasSale(benefitList.christmasDDay);
    this.printWeekDaySale(benefitList.weekDay);
    this.printWeekendDaySale(benefitList.weekendDay);
    this.printSpecialSale(benefitList.special);
    this.printFreebieSale(benefitList.freebie);
  },

  printChristmasSale(sale) {
    if (sale !== 0) Console.print(PRINT_FORMATS.CHRISTMAS_BENEFIT_RESULT(sale));
  },

  printWeekDaySale(sale) {
    if (sale !== 0) Console.print(PRINT_FORMATS.WEEKDAY_BENEFIT_RESULT(sale));
  },

  printWeekendDaySale(sale) {
    if (sale !== 0)
      Console.print(PRINT_FORMATS.WEEKENDDAY_BENEFIT_RESULT(sale));
  },

  printSpecialSale(sale) {
    if (sale !== 0) Console.print(PRINT_FORMATS.SPECIAL_BENEFIT_RESULT(sale));
  },

  printFreebieSale(freebie) {
    if (freebie !== 0)
      Console.print(PRINT_FORMATS.FREEBIE_BENEFIT_RESULT(freebie[1]));
  },

  printLineChange() {
    Console.print('');
  },

  printErrorMessage(message) {
    Console.print(`${message}`);
  },
};

export default OutputView;
