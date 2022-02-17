describe('Web server demo', () => {
  it('Should open the homepage', () => {
    cy.visit('/');
    cy.get('[data-test=title]').should('have.text', 'Web Demo');
  });
});
