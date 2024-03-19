import { SRHomePage } from "../../pages/SRHomePage";

describe ('SR HomePage Test', function () {
     it('should be able get card title', function () {
        cy.visit('https://www.simplyrecipes.com/');
        new SRHomePage().getHeroCompTitle().then(title => {
            cy.wrap('').then(() => {
            expect(title).to.be.eq('Homemade Beef Birria')
        })
    })
});
 });

