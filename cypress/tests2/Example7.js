// describe('Datetime Picker Test', () => {
  
//     it('Verifies selecting time on datetime picker changes the displayed number', () => {
      
//         cy.visit('/');
//         cy.wait(3000);
      
//         cy.get('div[class*="rounded bg-white w-[8.75rem]"]').eq(0).then(($element) => {
//             const initialNumber = parseInt($element.text());
      
//         cy.get('.ant-picker-input').eq(0).click();
  
//         cy.get('.ant-menu-title-content').eq(6).click(); 
//         cy.get('.ant-picker-super-prev-icon').click();
//         cy.get('.ant-picker-cell-inner').contains('Aug').click();
//         cy.wait(3000);
  
//         cy.get('div[class*="rounded bg-white w-[8.75rem]"]').eq(0).should(($element) => {
//             const updatedNumber = parseInt($element.text());
//             expect(updatedNumber).to.not.equal(initialNumber);
      
//         });
//     });
//   });
// });
import DateTimePickerPage from "../pages/datetimePicker";
// describe('Datetime Picker Functionality', () => {
//     beforeEach(() => {
//       cy.visit('/'); 
//     });
  
//     it('Updates element value on datetime picker selection', () => {
      
//       cy.get('div[class*="rounded bg-white w-[8.75rem]"]').eq(0) 
//         .should('have.text', 'Firm--0'); 
  
      
//       cy.get('.ant-picker-input').eq(0).click();
  
//         cy.get('.ant-menu-title-content').eq(6).click(); 
//         cy.get('.ant-picker-super-prev-icon').click();
//         cy.get('.ant-picker-cell-inner').contains('Oct').click();
  
      
//       cy.wait(3000); 
  
      
//       cy.get('div[class*="rounded bg-white w-[8.75rem]"]').eq(0)
//         .should('not.have.text', 'Firm--0'); 
  
     
//     });
//   });

  describe('Datetime Picker Functionality', () => {
    const dateTimePickerPage = new DateTimePickerPage();
  
    beforeEach(() => {
      dateTimePickerPage.visitHomePage();
    });
  
    it('Updates element value on datetime picker selection', () => {
      dateTimePickerPage.getFirstElementText().should('have.text', 'Firm--0');
  
      dateTimePickerPage.openDateTimePicker();
      dateTimePickerPage.selectDateInDateTimePicker();
  
      cy.wait(3000);
  
      dateTimePickerPage.getFirstElementText().should('not.have.text', 'Firm--0');
    });
  });


  