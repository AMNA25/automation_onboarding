class configurationObjects{
    
    clickConfigurationObjects(){
        return cy.get('.ant-menu.shared-objects-menu ').within(() => {
            cy.get('[id="configuration_objects"]').click()
        })
    }
}
module.exports = new configurationObjects()