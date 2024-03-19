


export default class FooterComponent {
    getColumns = () => cy.get('#fotcont .caption')
    getColumnsHeader = () => cy.get('h4')
    getDesc = () => cy.get('p')

    getAboutUsData(){
        let aboutUsData = {};
        this.getColumns().eq(0).within(() =>{
            this.getColumnsHeader().then($header => aboutUsData.header = $header.text().trim())
            this.getDesc().then($desc => aboutUsData.$desc = $desc.text().trim())

        })
        return new Cypress.Promise(resolve => cy.wrap('').then(() => resolve(aboutUsData)));
    }


}