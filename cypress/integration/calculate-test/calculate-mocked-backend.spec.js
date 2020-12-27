const testDataMocked = require('../../fixtures/calculate-pom/test-data-mocked.json');

const {
  navigateToCalculateApp,
  calculate,
  result,
  OPERATIONS,
} = require('../../fixtures/calculate-pom/calculate-page');

const testCalculateAppWithMockedBackend = ({
  nr1,
  nr2,
  operation,
  expectedResult,
  mockedStatusCode,
}) =>
  it(`${operation} of ${nr1} and ${nr2} should return ${expectedResult}`, () => {
    intercept(nr1, nr2, operation, {
      statusCode: mockedStatusCode,
      body: { result: expectedResult },
    });
    calculate(nr1, nr2, operation);
    result().should('have.text', expectedResult);
  });

const intercept = (nr1, nr2, operation, mockedResponse) =>
  cy.intercept(
    'GET',
    `http://qatools.ro/api/calculate.php?firstNumber=${nr1}&secondNumber=${nr2}&operation=${OPERATIONS[operation]}`,
    mockedResponse
  );

describe('Mocked backend test - qatools.ro calculateApp', () => {
  beforeEach(navigateToCalculateApp);
  testDataMocked.forEach(testCalculateAppWithMockedBackend);
});
