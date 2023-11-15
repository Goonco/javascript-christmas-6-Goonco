import InstanceValidator from '../../validators/InstanceValidator.js';
import { EVENT_MINIMUM_PRICE } from '../../constants/EventConstants.js';

export class Benefit {
  _visitDate;

  _orderList;

  constructor(visitDate, orderList) {
    this.validate(visitDate, orderList);
    this._visitDate = visitDate;
    this._orderList = orderList;
  }

  validate(visitDate, orderList) {
    InstanceValidator.isVisitDate(visitDate);
    InstanceValidator.isOrderList(orderList);
  }

  qualifyByTotalOrderPrice() {
    return this._orderList.calculateTotalPrice() >= EVENT_MINIMUM_PRICE;
  }

  getBenefitAmount() {
    if (this.qualifyByTotalOrderPrice() && this.qualifyBenefit())
      return this.calculateBenefit();
    return 0;
  }

  qualifyBenefit() {
    return true;
  }

  calculateBenefit() {
    return 0;
  }
}
