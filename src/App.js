import EventPlanner from './EventPlanner.js';

class App {
  async run() {
    const eventPlanner = new EventPlanner();
    eventPlanner.activate();
    const visitDate = await eventPlanner.generateVisitDate();
    const menuOrder = await eventPlanner.generateMenuOrder();
    eventPlanner.showOrderResult(visitDate, menuOrder);
    const benefitChecker = eventPlanner.calculateBenefits(visitDate, menuOrder);
    eventPlanner.showBenefitResult(menuOrder, benefitChecker);
  }
}

export default App;
