import { isInteger, isDateInBound } from '../validators/VisitDateValidators.js';

class VisitDate {
  #visitDate;

  constructor(visitDate) {
    this.#validate(visitDate);
    this.#visitDate = visitDate;
  }

  getVisitDate() {
    return this.#visitDate;
  }

  #validate(visitDate) {
    isInteger(visitDate);
    isDateInBound(visitDate);
  }
}

export default VisitDate;
