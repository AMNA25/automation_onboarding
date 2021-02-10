class Tagging_Manager{
    
    get taggingManager(){
        return cy.get('[href="#/tagging"]')
    }
    clickTaggingManager(){
        this.taggingManager.click()
    }

}
module.exports = new Tagging_Manager();