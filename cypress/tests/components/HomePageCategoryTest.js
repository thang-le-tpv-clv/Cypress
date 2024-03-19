describe ('HomePage Category Test', function () {
    beforeEach(() => {
        cy.visit('https://demoblaze.com/')      
    })
     it('should be able to filter phone products', function () {
        cy.get('[onclick="byCat(\'phone\')"]').click({force: true});
        cy.request({
            method: "POST",
            url: "https://api.demoblaze.com/bycat",
            body: {
                cat: "phone"
            }
        }) .then(res => cy.log(JSON.stringify(res)))
          
        })     
    })

