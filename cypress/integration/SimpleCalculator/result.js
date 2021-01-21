Then(`Result should display {string}`, expectedResult => {
  cy.get('[data-qa-test="result"]').should('have.text', expectedResult);
  cy.get('@url').should(
    'equal',
    'http://qatools.ro/calculate/appApi.html',
    'check shared context'
  );
});
