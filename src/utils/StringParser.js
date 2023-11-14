import Order from '../models/Order.js';

const StringParser = {
  stringToNumber(string) {
    return Number(string);
  },
  stringToOrder(string) {
    const splitByDash = string.split('-');
    const [menu, quantityString] = [...splitByDash];
    return [menu, this.stringToNumber(quantityString)];
  },
  stringToOrderList(string) {
    const splitByComma = string.split(',');
    const orderList = splitByComma.map((orderString) => {
      const [menu, quantity] = [...this.stringToOrder(orderString)];
      return new Order(menu, quantity);
    });
    return orderList;
  },
};

export default StringParser;
