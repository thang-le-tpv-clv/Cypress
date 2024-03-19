const CHECKBOXES_SEL = "[type='checkbox']"
describe ('Handling checboxes', () => {
    it('should be able to select checkbox',  () => {
        cy.visit("https://the-internet.herokuapp.com/checkboxes") 
        cy.get('[type="checkbox"]').eq(1).click();
        cy.get(CHECKBOXES_SEL).filter(":not([checked])").should("have.length",2);

    });
});