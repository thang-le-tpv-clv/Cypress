class HomePage {
    visit() {
      cy.visit('/');
      cy.wait(2000);
    }
  
    openOfficeDropdown() {
      return cy.get('.ant-select-selector').eq(1).click();
    }
  
    selectOptionInDropdown(option) {
      return cy.get('.ant-select-tree-list').contains(option).click();
    }
  
    removeSelectedOption() {
      return cy.get('.ant-select-selection-item-remove').eq(1).click();
    }
  
    clickButton(index) {
      return cy.get('.ant-btn').eq(index).click();
    }
  
    verifyNoDataMessage() {
      return cy.get('.ant-table-cell').should('contain', 'There is no data to display.');
    }
  }
  
  export default HomePage;