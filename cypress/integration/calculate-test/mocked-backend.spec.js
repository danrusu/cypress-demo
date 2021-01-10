const testDataMocked = require('../../fixtures/calculate/test-data-mocked.json');

const {
  interceptAndMockResponse,
  navigateToCalculateApp,
  calculate,
  result,
} = require('../../support/calculate-pom/calculate-page');

const testCalculateAppWithMockedBackend = ({
  nr1,
  nr2,
  operation,
  expectedResult,
  mockedStatusCode,
}) =>
  it(`${operation} of "${nr1}" and "${nr2}" should return "${expectedResult}"`, () => {
    interceptAndMockResponse(nr1, nr2, operation, {
      statusCode: mockedStatusCode,
      body: { result: expectedResult },
    });
    calculate(nr1, nr2, operation);
    result().should('have.text', expectedResult);
  });

describe('Mocked backend test - qatools.ro calculateApp', () => {
  beforeEach(navigateToCalculateApp);
  testDataMocked.forEach(testCalculateAppWithMockedBackend);
});
