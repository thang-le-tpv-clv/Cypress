const LOGIN_CRED = {
    username: 'test',
    password: 'test'
}
describe ('Login Test', function () {

    beforeEach(() => {
        cy.visit('https://demoblaze.com/')
        
    })
     it('Should be able to login with correct cred', function () {
        
        cy.get('#login2').click();
        cy.get('#logInModal form').should('be.visible');
        cy.get('#loginusername').type('test');
        cy.get('#loginpassword').type('test');
        cy.get('[onclick="logIn()"]').click();
        cy.get('#nameofuser').should('be.visible');
        cy.get('#nameofuser').should('contain.text', 'Welcome test');
        })
    })

