import AmazonHomePage from "../../pages/AmazoneHomePage";
import AmazonSearchResultPage from "../../pages/AmazonSearchResultPage";

describe ('Amz search', () => {
    it('should be able to search book',  () => {
        
        const SEARCH_TEXT = "bookcase";
        cy.visit("https://www.amazon.com/");
        let amzHomPage = new AmazonHomePage();
        amzHomPage.searchTxtBxElem.type(SEARCH_TEXT);
        amzHomPage.searchBtnElem.click();

        let amzSearchResultPage = new AmazonSearchResultPage();
        amzSearchResultPage.searchItemEleList.should("not.have.length",0)

    });
});