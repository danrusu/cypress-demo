const {
  navigateToCalculateApp,
  calculate,
  result,
} = require('../../support/calculate-pom/calculate-page');

const testCalculateApp = (nr1, nr2, operation, expectedResult) =>
  it(`${operation} result of ${nr1} and ${nr2} should be ${expectedResult}`, () => {
    calculate(nr1, nr2, operation);
    result().should('have.text', expectedResult);
    /* // OR:    
    result().should(result => {
      expect(result).to.have.text(expectedResult);
      expect(result.text()).to.equal(expectedResult);
      expect(result[0].innerText).to.equal(expectedResult);
    });
    */
  });

describe('Simple Test 2', () => {
  beforeEach(navigateToCalculateApp);

  testCalculateApp(100, -100, 'SUM', '0');
  testCalculateApp(3, 7, 'MULTIPLICATION', '21');
  testCalculateApp(1, 50, 'DIVISION', '0.02');
});
