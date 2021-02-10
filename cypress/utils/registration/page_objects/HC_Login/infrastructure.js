class infrastructure {
    get infrastructure(){
        return cy.get('a[href="/controller/Infrastructure"] .menu-item')
    }
    clickInfrastructure(){
        this.infrastructure.click()
    }
}
export default infrastructure