describe('Loading Button Test', () => {
    it('Should display loading indicator when button is clicked', () => {
      
      cy.visit('/');
  
      
      cy.get('.ant-btn').eq(0).click();
  
      
      cy.get('.animate-spin').should('be.visible');
    });
  });