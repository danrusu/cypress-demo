describe('Environment variables test suite', () => {
  it('Enviroment vars test 1', () => {
    console.log(`Environment: ${JSON.stringify(Cypress.env(), null, 2)}`);
    console.log('baseUrl: ' + Cypress.env('baseUrl'));
    console.log('viewport: ' + Cypress.env('viewport'));
    // to termonal output
    //cy.console(`Config: ${JSON.stringify(Cypress.config(), null, 2)}`);
    cy.console(`Environment: ${JSON.stringify(Cypress.env(), null, 2)}`);
    cy.console('baseUrl: ' + Cypress.env('baseUrl'));
    cy.console('viewport: ' + Cypress.env('viewport'));
  });
});
