// those are global - not realy needed
//import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';

When(`User types {string} in Number1 input`, number1 =>
  typeToInput('#nr1', number1),
);

And(`User types {string} in Number2 input`, number2 =>
  typeToInput('#nr2', number2),
);

And(`User selects {string} operation from dropdown`, operation =>
  cy.get('select').select(operation),
);

And(`User presses the CALCULATE button`, () =>
  cy.get('button[name="calculate"]').click(),
);

function typeToInput(inputSelector, number) {
  cy.get(inputSelector).clear();
  // cypress cannot type '' to input fields
  if (number !== '') {
    cy.get(inputSelector).type(number);
  }
}
