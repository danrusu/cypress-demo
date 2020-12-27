const testData = require('../../fixtures/calculate-pom/test-data.json');

const {
  navigateToCalculateApp,
  calculate,
  result,
} = require('../../fixtures/calculate-pom/calculate-page');

const testCalculateApp = ({ nr1, nr2, operation, expectedResult }) =>
  it(`${operation} result of "${nr1}" and "${nr2}" should be "${expectedResult}"`, () => {
    calculate(nr1, nr2, operation);
    result().should('have.text', expectedResult);
  });

describe('Data-driven test - qatools.ro calculateApp', () => {
  beforeEach(navigateToCalculateApp);
  testData.forEach(testCalculateApp);
});
