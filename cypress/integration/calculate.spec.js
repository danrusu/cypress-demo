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

  it('Sum of 100 and -100 should be 0', () => {
    calculateTest(100, -100, 'SUM', '0');
  });

  it('Sum of 3 and 7 should be 21', () => {
    calculateTest(3, 7, 'MULTIPLICATION', '21');
  });

  it('Division of 10 and 2 should be 5', () => {
    calculateTest(1, 50, 'DIVISION', '0.02');
  });
});
