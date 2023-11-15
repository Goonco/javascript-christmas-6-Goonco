import { Console } from '@woowacourse/mission-utils';
import { VisitDate, EventCalendar } from '../src/models/Export.js';
import { ERROR_VISIT_DATE } from '../src/constants/ErrorMessage.js';

describe('VisitDate 클래스 테스트', () => {
  EventCalendar.makeCalendar(2023, 12);

  test('생성자 테스트', () => {
    const inputs = ['31일', -2.7, 32];
    const errorLog = [
      ERROR_VISIT_DATE.DATE_NOT_A_POSITIVE_INTEGER,
      ERROR_VISIT_DATE.DATE_NOT_A_POSITIVE_INTEGER,
      ERROR_VISIT_DATE.DATE_OUT_OF_BOUND,
    ];
    inputs.forEach((input, idx) => {
      expect(() => {
        const visitDate = new VisitDate(input);
      }).toThrow(errorLog[idx]);
    });
  });

  test('메소드 테스트 - checkWeekDay', () => {
    const input = [5, 13, 21, 29];
    const log = [true, true, true, false];

    input.forEach((date, idx) => {
      expect(new VisitDate(date).checkWeekDay()).toBe(log[idx]);
    });
  });

  test('메소드 테스트 - checkWeekendDay', () => {
    const input = [8, 16, 23, 28];
    const log = [true, true, true, false];

    input.forEach((date, idx) => {
      expect(new VisitDate(date).checkWeekendDay()).toBe(log[idx]);
    });
  });

  test('메소드 테스트 - checkSpecialDay', () => {
    const input = [3, 10, 25, 26];
    const log = [true, true, true, false];

    input.forEach((date, idx) => {
      expect(new VisitDate(date).checkSpecialDay()).toBe(log[idx]);
    });
  });

  test('메소드 테스트 - checkChristmasDDay', () => {
    const input = [1, 5, 9, 24, 28];
    const log = [0, 4, 8, 23, 27];

    input.forEach((date, idx) => {
      expect(new VisitDate(date).checkChristmasDDay()).toBe(log[idx]);
    });
  });
});
