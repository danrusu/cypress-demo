const QATOOLS_PAGE_URL = 'http://qatools.ro/';
const URL = 'http://qatools.ro/calculate/appApi.html';
const TITLE = 'calculate.app';

const OPERATIONS = {
  SUM: 1,
  MULTIPLICATION: 2,
  DIVISION: 3,
};

const typeToInput = (inputLocator, textToType) => {
  const input = cy.get(inputLocator).clear();
  // cypress cannot type '' to input fields
  if (textToType !== '') {
    input.type(textToType);
  }
};

const navigateToCalculateApp = () => {
  cy.visit(QATOOLS_PAGE_URL);
  cy.url().should('eq', QATOOLS_PAGE_URL);
  cy.get('[href="calculate/appApi.html"]').click();
  cy.url().should('eq', URL);
  cy.title().should('eq', TITLE);
};

const calculate = (nr1, nr2, operation) => {
  typeToInput('#nr1', nr1);
  typeToInput('#nr2', nr2);
  cy.get('select').select(operation);
  cy.get('button[name="calculate"]').click();
};

const result = () => cy.get('[data-qa-test="result"]');

const interceptAndMockResponse = (nr1, nr2, operation, mockedResponse) =>
  cy.intercept(
    'GET',
    `http://qatools.ro/api/calculate.php?firstNumber=${nr1}&secondNumber=${nr2}&operation=${OPERATIONS[operation]}`,
    mockedResponse
  );

module.exports = {
  calculate,
  interceptAndMockResponse,
  navigateToCalculateApp,
  result,
};
