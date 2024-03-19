import HeaderComponent from "../../pages/components/HeaderComponent"

describe ('Header Component Test', function () {
    const BRAND_TEXT = 'PRODUCT STORE';
    let headerComp;

    beforeEach(() => {
        cy.visit('https://demoblaze.com/')
        headerComp = new HeaderComponent();
    })
     it('Test for brand logo', function () {
        
        headerComp.brandLogoImg().should('be.visible')
        headerComp.brandLogo().should('contain.text', BRAND_TEXT)    
        })

        it('Test for header menu', function () {
            const expectedMenuDetails = [{ "text": "Home (current)", "href": "index.html" }, { "text": "Contact", "href": "#" }, { "text": "About us", "href": "#" }, { "text": "Cart", "href": "cart.html" }, { "text": "Log in", "href": "#" }, { "text": "Sign up", "href": "#" }]
        headerComp.getMenuDetails().then(actualMenuDetails => {
            cy.wrap('').then(() => {
                expect(actualMenuDetails).to.be.deep.equal(expectedMenuDetails)
            })
        })
        
        });
    })

