import DemoBlazePage from "../../pages/DemoBlazePage";
import products from "../tests/products.json";



describe('SR HomePage Test', function () {
    
    it('should be able get card title', function () {
        cy.visit('https://demoblaze.com/');
        new DemoBlazePage().getAllCardData().then(allCardData => {
            cy.wrap('').then(() => {
                expect(allCardData).to.be.deep.eq(products);
            })
        })
    });

    it.only('should be able get card title', function () {
        cy.visit('https://demoblaze.com/');
        //intercept default hompage products
        cy.intercept('/entries').as('entries')
        cy.wait('@entries')
        cy.get('@entries').then(entries => {
            let apiProductData = entries.response.body.Items
            apiProductData = apiProductData.map(item =>{
                return {
                    itemName: item.title.replace('\n',''),
                    itemPrice: '$${item.price}'
                }
            })
            new DemoBlazePage().getAllCardData().then(allCardData => {
                cy.wrap('').then(() => {
                    expect(allCardData).to.be.deep.eq(apiProductData);
                })
            })
        })
       
    });
});

