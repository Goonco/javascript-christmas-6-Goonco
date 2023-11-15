import { Console } from '@woowacourse/mission-utils';
import { READ_MESSAGE } from '../constants/PlannerMessage.js';
import { EventCalendar } from '../models/Export.js';

const InputView = {
  async readVisitDate() {
    const input = await Console.readLineAsync(
      `${READ_MESSAGE.SELECT_VISIT_DATE(EventCalendar.getMonth())}\n`,
    );
    return input;
  },

  async readOrderList() {
    const input = await Console.readLineAsync(
      `${READ_MESSAGE.SELECT_MENU_ORDER}\n`,
    );
    return input;
  },
};

export default InputView;
