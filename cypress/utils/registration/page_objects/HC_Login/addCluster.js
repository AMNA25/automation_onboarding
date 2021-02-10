class cluster{
    get addACluster(){
        return cy.xpath('//button[descendant::span[normalize-space()="Add a Cluster"]]')
    }
    clickAddACluster(){
        this.addACluster.click()
    }
    _tempAddCluster(obj){
        if(obj.ha != true){
            cy.get('#clusterName').type(obj.clusterName)
            cy.get('input[id="deviceName[0]"]').type(obj.deviceName1)
            cy.get('input[id="thunderIPAddress[0]"]').type(obj.thunderHostname1)
            cy.get('input[id="userName[0]"]').type(obj.adminUsername1)
            cy.get('input[id="userPassword[0]"]').type(obj.adminPassword1)
            cy.get('.ant-btn.submit-button').click()
        }
        else{
            cy.get('input[value="ha"]').click()
            cy.get('#clusterName').type(obj.clusterName)
            cy.get('input[id="deviceName[0]"]').type(obj.deviceName1)
            cy.get('input[id="thunderIPAddress[0]"]').type(obj.thunderHostname1)
            cy.get('input[id="userName[0]"]').type(obj.adminUsername1)
            cy.get('input[id="userPassword[0]"]').type(obj.adminPassword1)

            cy.get('input[id="deviceName[1]"]').type(obj.deviceName2)
            cy.get('input[id="thunderIPAddress[1]"]').type(obj.thunderHostname2)
            cy.get('input[id="userName[1]"]').type(obj.adminUsername2)
            cy.get('input[id="userPassword[1]"]').type(obj.adminPassword2)
            cy.get('.ant-btn.submit-button').click()
        }
        
    }
}
export default cluster