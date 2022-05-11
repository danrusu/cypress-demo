describe('Get files from folder', () => {
  it('Get downloads file ordered by creation date (the first is the newest)', () => {
    cy.getFiles('cypress/demo_downloads').then(fileNames => {
      cy.console(JSON.stringify(fileNames, null, 2));
    });
  });
});
