import { Console } from '@woowacourse/mission-utils';
import VisitDate from '../src/models/VisitDate.js';
import {
  ERROR_DATE_NOT_A_INTEGER,
  ERROR_DATE_OUT_OF_BOUND,
} from '../src/constants/ErrorMessage.js';

describe('VisitDate 클래스 테스트', () => {
  test('날짜로 정수가 아닌 값이 입력될 경우 예외가 발생한다.', () => {
    expect(() => {
      new VisitDate('31일');
    }).toThrow(ERROR_DATE_NOT_A_INTEGER);
  });

  test('날짜로 1 이상 31 이하가 아닌 정수가 입력될 경우 예외가 발생한다.', () => {
    expect(() => {
      new VisitDate(32);
    }).toThrow(ERROR_DATE_OUT_OF_BOUND);
  });
});
