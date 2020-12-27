const testCalculateApp = (nr1, nr2, operation, expectedResultString) =>
  it(`${operation} result of ${nr1} and ${nr2} should be ${expectedResultString}`, () => {
    cy.get('#nr1').clear().type(nr1);
    cy.get('#nr2').clear().type(nr2);
    cy.get('select').select(operation);
    cy.get('button[name="calculate"]').click();
    cy.get('[data-qa-test="result"]').should('have.text', expectedResultString);
  });

describe('Test qatools.ro calculateApp', () => {
  beforeEach(() => {
    cy.visit('http://qatools.ro');
    cy.url().should('eq', 'http://qatools.ro/');
    cy.get('[href="calculate/appApi.html"]').click();
    cy.url().should('eq', 'http://qatools.ro/calculate/appApi.html');
    cy.title().should('eq', 'calculate.app');
  });

  testCalculateApp(100, -100, 'SUM', '0');
  testCalculateApp(3, 7, 'MULTIPLICATION', '21');
  testCalculateApp(1, 50, 'DIVISION', '0.02');
});
