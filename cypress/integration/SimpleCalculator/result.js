Then(`Result should display {string}`, expectedResult =>
  cy.get('[data-qa-test="result"]').should('have.text', expectedResult)
);
