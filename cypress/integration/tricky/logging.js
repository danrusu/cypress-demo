describe('Logging demo', () => {
  it('Should log', () => {
    cy.visit('http://qatools.ro');
    cy.log('log to UI test runner');
    cy.task('logToTerminal', '@@@ log to terminal from cy.task');
    cy.logToTerminal('log to terminal from custom command using cy.task');
    console.log('@@@ log to browser console');
    // npx cypress run --spec cypress/integration/tricky/logging.js |grep @@@
  });
});
