describe('Wait', () => {
  it('Should wait for 5/10 seconds', () => {
    if (Cypress.env('viewport') === 'mobile') {
      cy.wait(5000);
    }
    cy.wait(5000);
  });
});
