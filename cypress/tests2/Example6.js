// describe('Test office with no data', () => {
//     it('Verify when there is no data on the table', () => {
      
//       cy.visit('/');
//       cy.wait(2000);
  
      
//       cy.get('.ant-select-selector').eq(1).click();
//       cy.get('.ant-select-tree-list').should('be.visible')
      
      

//       cy.get('.ant-select-tree-list').contains('HGHBB').click()
//       cy.get('.ant-select-selection-item-remove').eq(1).click()
//       cy.get('.ant-btn').eq(1).click();
//       cy.wait(2000);
//       cy.get('.ant-table-cell').should('contain', 'There is no data to display.');
  
//     });
//   });

import HomePage from "../pages/components/HomePage";

describe('Test office with no data', () => {
  const homePage = new HomePage();

  it('Verify when there is no data on the table', () => {
    homePage.visit();

    homePage.openOfficeDropdown();
    cy.get('.ant-select-tree-list').should('be.visible');

    homePage.selectOptionInDropdown('HGHBB');
    homePage.removeSelectedOption();
    homePage.clickButton(1);
    cy.wait(2000);
    homePage.verifyNoDataMessage();
  });
});