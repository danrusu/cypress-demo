describe('Tricky Tests', () => {
  it('Should be able open the Calculator page', () => {
    cy.visit('http://qatools.ro/test');
    cy.get('#menuBtn').click();
    cy.get('#menu button').contains('Calculator').click();
    cy.location('pathname').should('eq', '/calculate/appApi.html');
  });
});
