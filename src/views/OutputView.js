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

  printLineChange() {
    Console.print('\n');
  },
};

export default OutputView;
