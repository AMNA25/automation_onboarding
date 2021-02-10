class sharedObjects{
    get sharedObject(){
        return cy.get('[href="#/shared-objects"]')
    }

    clickSharedObjects(){
        this.sharedObject.click()
    }

}
module.exports = new sharedObjects()