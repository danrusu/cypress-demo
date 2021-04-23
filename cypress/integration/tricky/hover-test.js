describe('Hover test', () => {
    it('Event hover', () => {
        cy.visit('http://qatools.ro/hover');
        cy.get('#menu1 .buttonsWrapper span').should('not.be.visible');
        cy.get('#menu1').trigger('mouseover');
        cy.get('#menu1 .buttonsWrapper span').should('be.visible');    
    })
})