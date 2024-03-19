describe('Delete SINHO office', () => {
    it('Should show toast message', () => {
      
      cy.visit('/');
  
      
      cy.get('.ant-select-selection-item-remove').eq(0).click();
  
      
      cy.get('.ant-notification-notice-description').should('contain', 'Required at least 1 selection')
    });
  });