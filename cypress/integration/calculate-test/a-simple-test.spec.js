describe('Simple Test', () => {
  let localFlag;

  beforeEach(() => {
    cy.visit('http://qatools.ro/');
    cy.url().should('eq', 'http://qatools.ro/');
    cy.get('[href="calculate/appApi.html"]').click();
    cy.url().should('eq', 'http://qatools.ro/calculate/appApi.html');
    localFlag = 'flag';
  });

  it('Wrap ', () => {
    cy.wrap(null, { timeout: 0 }).should(() => {
      expect(localFlag, 'validate localFlag').to.equal('flag');
    });
    // OR
    cy.wrap(localFlag).should('equal', 'flag');
  });

  it('DIVISION of 100 and -100 should be -1', () => {
    cy.get('#nr1').type(100);
    cy.pause();

    cy.get('#nr2').type(-100);
    cy.pause();

    cy.get('select').select('DIVISION');
    cy.get('button[name="calculate"]').debug().click();

    cy.get('[data-qa-test="result"]').should('have.text', '-1');
  });

  it('DIVISION of 100 and 0 should be "Could not divide by 0"', () => {
    cy.get('#nr1').type(100);
    cy.get('#nr2').type(0);
    cy.get('select').select('DIVISION');
    cy.get('button[name="calculate"]').click();

    cy.get('[data-qa-test="result"]').should('have.text', 'Cannot divide by 0');
  });
});
