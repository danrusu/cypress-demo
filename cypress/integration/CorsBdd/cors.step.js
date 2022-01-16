When(`I go to google`, () => {
  Cypress.config('baseUrl', 'https://www.google.ro');
  cy.visit('/');
  cy.wait(2000);
});

When(`I go to meeting`, () => {
  Cypress.config('baseUrl', 'http://qatools.ro');
  cy.visit('/meeting.html');
  cy.wait(2000);
});
