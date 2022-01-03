describe('Environment variables test suite', () => {
  it('Enviroment vars test 1', () => {
    console.log(`Environment: ${JSON.stringify(Cypress.env(), null, 2)}`);
    console.log('baseUrl: ' + Cypress.env('baseUrl'));
    console.log('viewport: ' + Cypress.env('viewport'));
    // to console output
    console.log(`Environment: ${JSON.stringify(Cypress.env(), null, 2)}`); 
    cy.log('baseUrl: ' + Cypress.env('baseUrl'));
    cy.log('viewport: ' + Cypress.env('viewport'));
  });
});
