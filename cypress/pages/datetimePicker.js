class DateTimePickerPage {
    visitHomePage() {
      cy.visit('/');
    }
  
    getFirstElementText() {
      return cy.get('div[class*="rounded bg-white w-[8.75rem]"]').eq(0);
    }
  
    openDateTimePicker() {
      return cy.get('.ant-picker-input').eq(0).click();
    }
  
    selectDateInDateTimePicker() {
      cy.get('.ant-menu-title-content').eq(6).click();
      cy.get('.ant-picker-super-prev-icon').click();
      cy.get('.ant-picker-cell-inner').contains('Oct').click();
    }
  }
  
  export default DateTimePickerPage;