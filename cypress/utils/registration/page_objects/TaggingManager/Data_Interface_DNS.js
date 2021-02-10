class Data_Interface_DNS{
    get DNS(){
        return cy.get('a[href="#/tagging/dynamic-service"]')
    }
    get dnsTagButton(){
        return cy.get('button[type="button"].ant-btn.add-btn')
    }
    get tagName(){
        return cy.get('input[name="tagName"]')
    }
    get description(){
        return cy.get('input[name="description"]')
    }
    get createButton(){
        return cy.get('.footer').within(() => {
            cy.get('.ant-btn.ant-btn-primary')
        })
    }
    get cancelButton(){
        return cy.get('[class="ant-modal-content"] [class="footer"] [class="ant-btn ant-btn-link"]')
        //return cy.xpath('.//button[descendant::span[normalize-space()="Cancel"]]')
    }
    get updateButton(){
        return cy.get(".footer").within(() => {
            cy.get('button[type="button"].ant-btn.ant-btn-primary')
        })
    }
       
    clickDNS(){
        cy.log(this.DNS.should('be.visible'))
        this.DNS.click()
    }
    clickDnsTagButton(){
        this.dnsTagButton.click()
    }
    enterTagName(name){
        return this.tagName.type(name)
    }
    enterDescription(description){
        return this.description.type(description)
    }
    clickCreateButton(){
        this.createButton.click()
    }
    clickCancelButton(){
        this.cancelButton.click()
    }
    editTag(edit){
        return cy.xpath(`//tr[descendant::td[normalize-space()="${edit}"]]`).invoke("attr", "data-row-key").then((el)=>{
            cy.log(el)
            cy.get(`[data-row-key="${el}"] [class="ant-btn edit ant-btn-link"]`).click({force: true})
        })
    }
    clearDescription(){
        this.description.clear()
    }
    clickUpdateButton(){
        this.updateButton.click()
    }
    createOrEdit(title, description){

        return cy.get('.page-content').then((classOfTitle) => {

            if(classOfTitle.find(`tr[data-row-key="${title}"].ant-table-row.ant-table-row-level-0`).length > 0){
                cy.xpath(`//tr[descendant::td[normalize-space()="${title}"]]`).invoke("attr", "data-row-key").then((property) => {
                    cy.log(property)
                    cy.get(`[data-row-key="${property}"] [class="ant-btn edit ant-btn-link"]`).click({force: true})
                    this.description.clear().type(description)
                    this.updateButton.click() 
                })
            }
            else{
                this.dnsTagButton.click()
                this.tagName.type(title)
                this.description.type(description)
                this.createButton.click()
            }
        })
    }
    
} 
module.exports = new Data_Interface_DNS()