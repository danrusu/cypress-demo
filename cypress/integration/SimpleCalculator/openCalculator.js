const url = 'http://qatools.ro/calculate/appApi.html';

var actionsCount = 0;

Given('User is on Simple Calculator page', () => {
  cy.visit(url);
  cy.wrap(url).as('url');
});
