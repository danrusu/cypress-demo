const normalizeText = text => text.replace(/\s/g, '').toLowerCase();

describe('Test qatools.ro calculateApp', () => {
  let pageTitleText;

  beforeEach(() => {
    cy.visit('http://qatools.ro/');
    cy.url().should('eq', 'http://qatools.ro/');
    cy.get('[href="calculate/appApi.html"]').click();
    cy.url().should('eq', 'http://qatools.ro/calculate/appApi.html');
  });

  // WRONG - any element could get the text after a timeout, even page title
  it.skip('Page title text should match app title', () => {
    cy.get('title').then(pageTitle => {
      pageTitleText = normalizeText(pageTitle.text());
    });

    cy.get('#app .title').should(appTitle => {
      const appTitleText = normalizeText(appTitle.text());
      expect(pageTitleText).to.equal(appTitleText);
    });
  });

  it('Page title text should match app title', () => {
    cy.get('title, #app .title').should(
      ([{ innerText: pageTitleText }, { innerText: appTitleText }]) => {
        const [normalizedPageTitleText, normalizedAppTitleText] = [
          pageTitleText,
          appTitleText,
        ].map(normalizeText);
        expect(normalizedPageTitleText).to.equal(normalizedAppTitleText);
      }
    );
  });
});
