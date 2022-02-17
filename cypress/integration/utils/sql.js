import { When } from 'cypress-cucumber-preprocessor/steps';

When('I sql', () => {
  cy.mysqlQuery({
    user: 'danrusur_tester',
    password: 'test@passw0rd',
    host: 'qatools.ro',
    database: 'danrusur_test_mysql',
    query: 'SELECT *** FROM books;',
  }).then(r => console.log(r));
});
