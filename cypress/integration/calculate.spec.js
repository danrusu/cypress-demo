describe('qatools.ro test', () => {
  it('Should open the homepage', () => {
    cy.visit('http://qatools.ro');
    cy.contains('QA Tools');
    cy.contains('Play').click();
    cy.title().should('include', 'Play_smart_with_the_backend');
  });
});
