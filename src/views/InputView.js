import { Console } from '@woowacourse/mission-utils';
import { READ_MESSAGE } from '../constants/PlannerMessage.js';

const InputView = {
  async readDate() {
    const input = await Console.readLineAsync(
      `${READ_MESSAGE.SELECT_VISIT_DATE}\n`,
    );
    return input;
  },
  // ...
};

export default InputView;
