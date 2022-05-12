describe('Get files from folder', () => {
  it('Get downloads file ordered by creation date (the first is the newest)', () => {
    cy.getFiles('cypress/demo_downloads').then(fileNames => {
      cy.console(JSON.stringify(fileNames, null, 2));
    });
  });

  it('Should get the last downloaded file', () => {
    cy.task('getNewestFile', 'cypress/demo_downloads').then(newestFileName => {
      expect(newestFileName).equal('downloaded_last.txt');
    });
  });
});
