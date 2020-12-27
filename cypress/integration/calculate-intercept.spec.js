const OPERATIONS = {
  SUM: 1,
  MULTIPLICATION: 2,
  DIVISION: 3,
};

const calculateTest = (
  nr1,
  nr2,
  operation,
  expectedResultString,
  mockedResponse
) =>
  it(`${operation} of ${nr1} and ${nr2} should return ${expectedResultString}`, () => {
    cy.get('#nr1').clear().type(nr1);
    cy.get('#nr2').clear().type(nr2);
    cy.get('select').select(operation);
    if (mockedResponse) {
      intercept(nr1, nr2, operation, {
        ...mockedResponse,
        body: { result: expectedResultString },
      });
    }
    cy.get('button[name="calculate"]').click();
    cy.get('[data-qa-test="result"]').should('have.text', expectedResultString);
  });

const intercept = (nr1, nr2, operation, mockedResponse) =>
  cy.intercept(
    'GET',
    `http://qatools.ro/api/calculate.php?firstNumber=${nr1}&secondNumber=${nr2}&operation=${OPERATIONS[operation]}`,
    mockedResponse
  );

describe('Mocked backend test - qatools.ro calculateApp', () => {
  beforeEach(() => {
    cy.visit('http://qatools.ro');
    cy.url().should('eq', 'http://qatools.ro/');
    cy.get('[href="calculate/appApi.html"]').click();
    cy.url().should('eq', 'http://qatools.ro/calculate/appApi.html');
    cy.title().should('eq', 'calculate.app');
  });

  calculateTest(100, -100, 'SUM', '0', {
    statusCode: 200,
    body: {
      numbers: [100, -100],
      operation: 1,
      result: 0,
    },
  });

  calculateTest(100, 100, 'SUM', '', {
    statusCode: 500,
  });

  calculateTest(100, 0, 'DIVISION', 'Cannot divide by 0', {
    statusCode: 200,
    body: {
      numbers: [100, 0],
      operation: 3,
      result: 'Cannot divide by 0',
    },
  });

  calculateTest(
    101,
    100,
    'DIVISION',
    'Number1 or Number2 is not in specified range: [-100, 100]',
    {
      statusCode: 200,
      body: {
        numbers: [101, 100],
        operation: 3,
        result: 'Number1 or Number2 is not in specified range: [-100, 100]',
      },
    }
  );
});
