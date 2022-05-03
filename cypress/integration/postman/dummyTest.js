describe('Postman API TEST', () => {
  it('Should Run the CYPRESS_DUMMY collection', () => {
    const collection = require('../../../postman/CYPRESS_DUMMY.postman_collection.json');
    cy.postman({
      postmanConfig: { collection, reporters: ['htmlextra'] },
      timeout: 10000,
    }).then(cy.verifyPostmanSummary);
  });
});