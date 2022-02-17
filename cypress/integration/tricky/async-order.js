const message1 = { message: 'message1', delay: 3000 };
const message2 = { message: 'message2', delay: 2000 };
const message3 = { message: 'message3', delay: 1000 };

describe('Async', () => {
  //Cypress._.range(0, 10).forEach(index => {
  it('Test 1', () => {
    cy.task('asyncLog', message1).should('equal', message1.message);
    cy.task('asyncLog', message2).should('equal', message2.message);
    cy.task('asyncLog', message3).should('equal', message3.message);
  });

  it('Test 2', () => {
    cy.task('asyncLog', message1)
      .then(m1 => {
        expect(m1).equals(message1.message);
        return cy.task('asyncLog', message2);
      })
      .then(m2 => {
        expect(m2).equals(message2.message);
        return cy.task('asyncLog', message3);
      })
      .then(m3 => {
        expect(m3).equals(message3.message);
      });
  });
  //});
});
