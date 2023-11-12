const splitRawMenuOrder = (rawMenuOrder) => {
  const splitByComma = rawMenuOrder.split(',');
  const splitByDash = splitByComma.map((pairString) => pairString.split('-'));
  return splitByDash;
};

const stringToMenuOrder = (rawMenuOrder) => {
  const splitedRawMenuOrder = splitRawMenuOrder(rawMenuOrder);

  const parsedMenuOrder = { menuList: [], orderNumberList: [] };
  splitedRawMenuOrder.forEach((order) => {
    const [menu, orderNumber] = [...order];
    parsedMenuOrder.menuList.push(menu.trim());
    parsedMenuOrder.orderNumberList.push(Number(orderNumber));
  });

  return parsedMenuOrder;
};

export default stringToMenuOrder;
