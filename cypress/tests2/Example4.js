describe('Tooltip Test', () => {
    it('Should display tooltip when hovering over the icon', () => {
      
      cy.visit('/');
  
      
      cy.get('.mag-icon').eq(5).should('be.visible');
  
      
      cy.get('.mag-icon').eq(5).trigger('mouseover');
  
      
      cy.get('.ant-tooltip-inner').should('be.visible').as('tooltip');
  
      
      cy.get('.ant-tooltip-inner').should('contain', 'Comparison view requires at least 2 offices. Comparison toggle is auto switched off if there is only 1 office.');
    });
  });