const shareElementContent = elementId => {
  cy.get(`#${elementId}`)
    .should('be.visible')
    .invoke('text')
    .then(text => cy.task('share', { [elementId]: text }));
};

describe('Multiple domains - shared ', () => {
  it('Get meeting info', { baseUrl: 'http://qatools.ro' }, () => {
    cy.visit('meeting.html');
    [
      'todoName',
      'todoDescription',
      'todoProject',
      'todoDate',
      'todoTime',
      'todoPriority',
    ].forEach(shareElementContent);
  });

  it('Set meeting', { baseUrl: 'https://go-gin-todo.herokuapp.com' }, () => {
    cy.visit('/');
    cy.task('getShared').then(shared => {
      const typeFromShared = sharedKey => {
        cy.get(`#${sharedKey}`).should('be.visible').type(shared[sharedKey]);
      };
      [
        'todoName',
        'todoDescription',
        'todoProject',
        'todoDate',
        'todoTime',
      ].forEach(typeFromShared);

      cy.intercept('POST', '/api/todo/').as('createTodo');

      cy.get('#createTodo').click();

      cy.wait('@createTodo')
        .its('response.body.data.id')

        .then(todoId => {
          cy.get('#todos')
            .should('be.visible')
            .within(() => {
              cy.contains('[class^=priority]', `ID: ${todoId}`).within(() => {
                cy.contains(shared.todoName);
                cy.contains(shared.todoDescription);
              });
            });
        });
    });
  });
});
