import { EVENT_MONTH } from './EventConstants.js';

export const PRINT_MESSAGE = {
  START_PLANNER: '안녕하세요! 우테코 식당 12월 이벤트 플래너입니다.',
  SHOW_BENEFITS: (visitDate) =>
    `${EVENT_MONTH}월 ${visitDate}일에 우테코 식당에서 받을 이벤트 혜택 미리 보기!`,
};

export const PRINT_HEADERS = {
  ORDER_LIST: '<주문 메뉴>',
  BEFORE_SALE: '<할인 전 총주문 금액>',
  FREEBIE: '<증정 메뉴>',
  BENEFITS: '<혜택 내역>',
  TOTAL_BENEFITS: '<총혜택 금액>',
  AFTER_SALE: '<할인 후 예상 결제 금액>',
  BADGE: `<${EVENT_MONTH}월 이벤트 배지>`,
};

export const PRINT_FORMATS = {
  ORDER_RESULT: (menu, orderQuantatiy) => `${menu} ${orderQuantatiy}개`,
  POSITIVE_MONEY_RESULT: (beforeSale) =>
    `${beforeSale.toLocaleString('ko-KR')}원`,
  CHRISTMAS_BENEFIT_RESULT: (sale) =>
    `크리스마스 디데이 할인: ${(-sale).toLocaleString('ko-KR')}원`,
  WEEKDAY_BENEFIT_RESULT: (sale) =>
    `평일 할인: ${(-sale).toLocaleString('ko-KR')}원`,
  WEEKENDDAY_BENEFIT_RESULT: (sale) =>
    `주말 할인: ${(-sale).toLocaleString('ko-KR')}원`,
  SPECIAL_BENEFIT_RESULT: (sale) =>
    `특별 할인: ${(-sale).toLocaleString('ko-KR')}원`,
  FREEBIE_BENEFIT_RESULT: (sale) =>
    `증정 이벤트: ${(-sale).toLocaleString('ko-KR')}원`,
  NEGATIVE_MONEY_RESULT: (sale) =>
    `${(sale === 0 ? sale : -sale).toLocaleString('ko-KR')}원`,
  NO_BENEFIT: '없음',
};

export const READ_MESSAGE = {
  SELECT_VISIT_DATE: `${EVENT_MONTH}월 중 식당 예상 방문 날짜는 언제인가요? (숫자만 입력해 주세요!)`,
  SELECT_MENU_ORDER:
    '주문하실 메뉴를 메뉴와 개수를 알려 주세요. (e.g. 해산물파스타-2,레드와인-1,초코케이크-1)',
};
