describe('Cookie test', () => {
  
  it('Wait for cookie', () => {
    cy.visit('http://qatools.ro/cookie');

    const waitForCookie = (cookieName, timeout) => {
      cy.log(`Wait ${timeout} seconds for cookie '${cookieName}' to exist`);
      let count = 0;
      const wait = options => {
        cy.getCookie(cookieName, options).then(cookie => {
          if (cookie === null && count * 500 < timeout) {
            count++;
            cy.wait(500);
            wait({ log: false });
          }
          return;
        });
      };
      wait();
      cy.getCookie(cookieName).should('exist');
    };

    waitForCookie('id', 2000);

    cy.getCookie('id').should('have.property', 'value', '1111');
  });
});
