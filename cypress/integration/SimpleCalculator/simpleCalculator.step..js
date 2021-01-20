import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';

const url = 'http://qatools.ro/calculate/appApi.html';

Given('User is on Simple Calculator page', () => cy.visit(url));

When(`User types {string} in Number1 input`, number1 => {
  typeToInput('#nr1', number1);
});

And(`User types {string} in Number2 input`, number2 => {
  typeToInput('#nr2', number2);
});

And(`User selects {string} operation from dropdown`, operation =>
  cy.get('select').select(operation)
);

And(`User presses the CALCULATE button`, () =>
  cy.get('button[name="calculate"]').click()
);

Then(`Result should display {string}`, expectedResult =>
  cy.get('[data-qa-test="result"]').should('have.text', expectedResult)
);

function typeToInput(inputSelector, number) {
  const input = cy.get(inputSelector).clear();
  // cypress cannot type '' to input fields
  if (number !== '') {
    input.type(number);
  }
}
