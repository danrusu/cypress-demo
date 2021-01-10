const {
  navigateToCalculateApp,
  calculate,
  result,
  OPERATIONS,
} = require('../../support/calculate-pom/calculate-page');

// retry all tests in suite once
describe('Fixture demo test - qatools.ro calculateApp', { retries: 1 }, () => {
  beforeEach(() => {
    navigateToCalculateApp();
    cy.fixture('calculate/test-data.json').as('testData');

    cy.intercept({
      method: 'GET',
      url: /calculate.php.*firstNumber.*secondNumber.*operation.*/,
    }).as('calculateApi');
    // or
    //cy.intercept(/calculate.php.*firstNumber.*secondNumber.*operation.*/).as('calculateApi');
  });

  // retry 2 additional times (3 total tries)
  it('First test', { retries: { runMode: 2, openMode: 1 } }, () => {
    cy.get('@testData').then(
      ([{ nr1, nr2, operation, expectedResult }, ..._]) => {
        calculate(nr1, nr2, operation);

        cy.wait('@calculateApi', {
          // using cy in then is an anti-pattern??? alternative???
          requestTimeout: 500, // 500 milliseconds delay implemented in front-end
          responseTimeout: 2000, // 1 second delay is implemented in back-end
        }).then(calculateApi => {
          //console.log(JSON.stringify(intercepted, null, 2));
          expect(calculateApi.response.body).deep.equals({
            numbers: [`${nr1}`, `${nr2}`],
            operation: `${OPERATIONS[operation]}`,
            result: expectedResult,
          });
        });

        result().should('have.text', expectedResult);
      }
    );
  });
});
