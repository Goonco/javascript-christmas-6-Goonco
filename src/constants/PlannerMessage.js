export const PRINT_MESSAGE = {
  START_PLANNER: (month) =>
    `안녕하세요! 우테코 식당 ${month}월 이벤트 플래너입니다.`,
  SHOW_BENEFITS: (month, visitDate) =>
    `${month}월 ${visitDate}일에 우테코 식당에서 받을 이벤트 혜택 미리 보기!`,
};

export const PRINT_HEADERS = {
  ORDER_LIST: '<주문 메뉴>',
  BEFORE_SALE: '<할인 전 총주문 금액>',
  FREEBIE: '<증정 메뉴>',
  BENEFITS: '<혜택 내역>',
  TOTAL_BENEFITS: '<총혜택 금액>',
  AFTER_SALE: '<할인 후 예상 결제 금액>',
  BADGE: (month) => `<${month}월 이벤트 배지>`,
};

export const PRINT_FORMATS = {
  ORDER_RESULT: (menu, orderQuantatiy) => `${menu} ${orderQuantatiy}개`,
  POSITIVE_MONEY_RESULT: (beforeSale) =>
    `${beforeSale.toLocaleString('ko-KR')}원`,
  DISCOUNT_RESULT: (benefitType, amount) =>
    `${benefitType}: ${(-amount).toLocaleString('ko-KR')}원`,
  NEGATIVE_MONEY_RESULT: (sale) =>
    `${(sale === 0 ? sale : -sale).toLocaleString('ko-KR')}원`,
  NO_BENEFIT: '없음',
};

export const READ_MESSAGE = {
  SELECT_VISIT_DATE: (month) =>
    `${month}월 중 식당 예상 방문 날짜는 언제인가요? (숫자만 입력해 주세요!)`,
  SELECT_MENU_ORDER:
    '주문하실 메뉴를 메뉴와 개수를 알려 주세요. (e.g. 해산물파스타-2,레드와인-1,초코케이크-1)',
};
