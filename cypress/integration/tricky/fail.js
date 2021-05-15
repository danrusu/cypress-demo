describe('Fail', () => {
  it('Should fail 1', () => {
    cy.wrap('test').then(message => expect(message).eq('test1'));
  });
  it('Should fail 2', () => {
    cy.wrap('test').then(message => expect(message).eq('test2'));
  });
});
