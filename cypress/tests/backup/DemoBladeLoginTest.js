import { HomePageAPI } from "../../support/HomePageAPI";
describe ('DemoBlaze Home Page Test', () => {
    let apiProduct
    beforeEach(() => {
        cy.visit('https://demoblaze.com/')
        HomePageAPI.getHomePageProducts().then(entries => apiProduct = entries)
    })
    it('should be able to login by using API',  () => {
       cy.login()
    });
});