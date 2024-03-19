const DROPDOWN_SEL = "select[id='dropdown']"
describe ('Handling dropdown', () => {
    it('should be able to select dropdown option',  () => {
        cy.visit("https://the-internet.herokuapp.com/dropdown"); 
        cy.get(DROPDOWN_SEL).select(1);
        cy.get(DROPDOWN_SEL).select(2);
        cy.get(DROPDOWN_SEL).select("Option 1");
        cy.get("select option:selected").invoke("text").should("eq","Option 1");

    });
});