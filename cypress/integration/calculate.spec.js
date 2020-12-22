describe('qatools.ro calculate.app test', () => {
  it('Sum of 100 and -100 should be 0', () => {
    //home page
    cy.visit('http://qatools.ro');
    cy.url().should('eq', 'http://qatools.ro/');
    cy.get('[href="calculate/appApi.html"]').click();

    // calculate page
    cy.url().should('eq', 'http://qatools.ro/calculate/appApi.html');
    cy.title().should('eq', 'calculate.app');

    cy.get('#nr1').clear().type(100);
    cy.get('#nr2').clear().type(-100);
    cy.get('button[name="calculate"]').click();
    cy.get('[data-qa-test="result"]').should('have.text', '0');
  });
  it('Division of 10 and 2 should be 5', () => {
    //home page
    cy.visit('http://qatools.ro');
    cy.url().should('eq', 'http://qatools.ro/');
    cy.get('[href="calculate/appApi.html"]').click();

    // calculate page
    cy.url().should('eq', 'http://qatools.ro/calculate/appApi.html');
    cy.title().should('eq', 'calculate.app');

    cy.get('#nr1').clear().type(1);
    cy.get('#nr2').clear().type(50);
    cy.get('select').select('DIVISION');
    cy.get('button[name="calculate"]').click();
    cy.get('[data-qa-test="result"]').should('have.text', '0.02');
  });
});
