// import { Console } from '@woowacourse/mission-utils';
// import VisitDate from '../src/models/VisitDate.js';
// import {
//   ERROR_DATE_NOT_A_INTEGER,
//   ERROR_DATE_OUT_OF_BOUND,
// } from '../src/constants/ErrorMessage.js';

// describe('VisitDate 클래스 테스트', () => {
//   test('날짜로 정수가 아닌 값이 입력될 경우 예외가 발생한다.', () => {
//     expect(() => {
//       new VisitDate('31일');
//     }).toThrow(ERROR_DATE_NOT_A_INTEGER);
//   });

//   test('날짜로 1 이상 31 이하가 아닌 정수가 입력될 경우 예외가 발생한다.', () => {
//     expect(() => {
//       new VisitDate(32);
//     }).toThrow(ERROR_DATE_OUT_OF_BOUND);
//   });

//   test('날짜가 일 ~ 목일 경우 true를 반환하며 금 ~ 토일 경우 false를 반환한다.', () => {
//     const input = [5, 13, 21, 29];
//     const log = [true, true, true, false];

//     input.forEach((date, idx) => {
//       expect(new VisitDate(date).checkWeekDay()).toBe(log[idx]);
//     });
//   });

//   test('날짜가 금 ~ 토일 경우 true를 반환하며 일 ~ 목일 경우 false를 반환한다.', () => {
//     const input = [8, 16, 23, 28];
//     const log = [true, true, true, false];

//     input.forEach((date, idx) => {
//       expect(new VisitDate(date).checkWeekendDay()).toBe(log[idx]);
//     });
//   });

//   test('일요일 혹은 크리스마스일 경우 true를 반환하며 이외의 경우 false를 반환한다.', () => {
//     const input = [3, 10, 25, 26];
//     const log = [true, true, true, false];

//     input.forEach((date, idx) => {
//       expect(new VisitDate(date).checkSpecialDay()).toBe(log[idx]);
//     });
//   });

//   test('1일로부터 몇일이 지났는지 반환한다.', () => {
//     const input = [1, 5, 9, 24, 28];
//     const log = [0, 4, 8, 23, -1];

//     input.forEach((date, idx) => {
//       expect(new VisitDate(date).checkChristmasDDay()).toBe(log[idx]);
//     });
//   });
// });
