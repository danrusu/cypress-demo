const testData = [
  {
    nr1: 100,
    nr2: -100,
    operation: 'SUM',
    expectedResult: '0',
  },
  {
    nr1: 3,
    nr2: 7,
    operation: 'MULTIPLICATION',
    expectedResult: '21',
  },
  {
    nr1: 1,
    nr2: 50,
    operation: 'DIVISION',
    expectedResult: '0.02',
  },
];

describe('qatools.ro calculate.app test', () => {
  beforeEach(() => {
    cy.visit('http://qatools.ro');
    cy.url().should('eq', 'http://qatools.ro/');
    cy.get('[href="calculate/appApi.html"]').click();
    cy.url().should('eq', 'http://qatools.ro/calculate/appApi.html');
    cy.title().should('eq', 'calculate.app');
  });

  const calculateTest = (nr1, nr2, operation, expectedResultString) => {
    cy.get('#nr1').clear().type(nr1);
    cy.get('#nr2').clear().type(nr2);
    cy.get('select').select(operation);
    cy.get('button[name="calculate"]').click();
    cy.get('[data-qa-test="result"]').should('have.text', expectedResultString);
  };

  testData.forEach(testDataObject => {
    const { nr1, nr2, operation, expectedResult } = testDataObject;

    it(`${operation} result of ${nr1} and ${nr2} should be ${expectedResult}`, () =>
      calculateTest(nr1, nr2, operation, expectedResult));
  });
});
