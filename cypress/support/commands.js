// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })
Cypress.Commands.add('console', message => {
  cy.task('console', `@@@ ${message}`);
});

Cypress.Commands.add('share', obj => {
  cy.task('share', obj);
});

Cypress.Commands.add(
  'mysqlQuery',
  ({ host, user, password, database, port = 3306, query }) =>
    cy.task('mysqlQuery', { host, user, password, database, port, query }),
);

Cypress.Commands.add('postman', ({ collection, timeout }) =>
  cy.task('postman', { collection }, { timeout }),
);

Cypress.Commands.add('verifyPostmanSummary', summary => {
  console.log(`Postman summary:`);
  console.log(summary);
  const { failures } = summary.run;
  if (failures.length > 0) {
    throw new Error(
      `Failures[${failures.length}  ]: ${JSON.stringify(
        failures.map(failure => {
          const { test, message } = failure.error;
          const requestName = failure.source.name;
          return { requestName, test, message };
        }),
      )}`,
    );
  }
});
