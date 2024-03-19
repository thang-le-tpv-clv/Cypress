describe('Checkbox in Dropdown Test', () => {
    beforeEach(() => {
      
      cy.visit('/');
    })
  
    it('Should select checkbox in dropdown and display a message when four checkboxes are checked', () => {
      
      cy.get('.ant-select-selector').eq(0).click()
      
  
      
      cy.get('.ant-select-tree-list').should('be.visible')
  
      
      cy.get('.ant-select-tree-list').contains('HKGHQ').click()
      cy.get('.ant-select-tree-list').contains('SHABB').click()
      cy.get('.ant-select-tree-list').contains('DLCBB').click()
      cy.get('.ant-select-tree-list').contains('HGHBB').click()
  
      
      cy.get('.ant-select-selector').contains('HKGHQ')
      cy.get('.ant-select-selector').contains('SHABB')
      cy.get('.ant-select-selector').contains('DLCBB')
    
  
      
      cy.get('.ant-notification-notice-content').should('contain', 'Allow maximum 4 selections')
      cy.wait(5000)
  
      
    })
  })