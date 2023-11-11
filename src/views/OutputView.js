import { Console } from '@woowacourse/mission-utils';
import { PRINT_MESSAGE } from '../constants/PlannerMessage.js';

const OutputView = {
  printStartMessage() {
    Console.print(PRINT_MESSAGE.START_PLANNER);
  },
};

export default OutputView;
