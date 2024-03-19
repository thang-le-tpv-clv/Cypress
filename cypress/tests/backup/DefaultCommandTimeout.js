describe ('Exploring default command time out', () => {
    it('should be able to apply custom default timeout',  () => {
        cy.visit("/login")
        cy.get("#abc", {timeout:10000}.type("asd"))
    });
});