import FooterComponent from "../../pages/components/FooterComponent";

describe ('Footer Component Test', function () {
    
    let footerComp;

    beforeEach(() => {
        cy.visit('https://demoblaze.com/')
        footerComp = new FooterComponent();
    })
     it('Test for brand logo', function () {
        const expectedAboutUsData = {"header":"About Us","$desc":"We believe performance needs to be validated at every stage of the software development cycle and our\n open source compatible, massively scalable platform makes that a reality."}
        footerComp.getAboutUsData().then(actualAboutUsData => {
           cy.wrap('').then(() => {
            expect(actualAboutUsData.header).to.equal(expectedAboutUsData.header);
            expect(actualAboutUsData.desc).to.equal(expectedAboutUsData.desc);
           })
        })
          
        })

      
    })

