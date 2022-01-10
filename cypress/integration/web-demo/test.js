describe('TServer demo', () => {
  it('Should be able open homepage', () => {
    cy.visit('/');
    cy.get('[data-test=title]').should('have.text', 'Web Demo');
  });
});
