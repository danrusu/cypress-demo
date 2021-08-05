describe('Environment variables test suite', () => {
  it('Enviroment vars test 1', () => {
    console.log('Environment:');
    console.log('baseUrl: ' + Cypress.env('baseUrl'));
    console.log('viewport: ' + Cypress.env('viewport'));
    cy.log('baseUrl: ' + Cypress.env('baseUrl'));
    cy.log('viewport: ' + Cypress.env('viewport'));
  });
});
