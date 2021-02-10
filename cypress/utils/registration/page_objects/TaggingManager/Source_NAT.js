class Source_NAT{
    get sourceNat(){
        return cy.get('a[href="#/tagging/source-nat"]')
    }
    get sourceTagButton(){
        return cy.get('.ant-btn.add-btn')
    }
    get tagName(){
        return cy.get('input[name="tagName"]')
    }
    get descriptionField(){
        return cy.get('input[name="description"]')
    }
    get createButton(){
        return cy.get('.footer').within(() => {
            cy.get('button[type="button"].ant-btn-primary')
        })
    }
    get cancelButton(){
        return cy.get('[class="ant-modal-content"] [class="footer"] [class="ant-btn ant-btn-link"]')
    }
    get typeToggle(){
        return cy.get('#type')
    }
    get cancelButton(){
        return cy.get('[class="ant-modal-content"] [class="footer"] [class="ant-btn ant-btn-link"]')
    }
    get updateButton(){
        return cy.get(".footer").within(() => {
             cy.get('button[type="button"].ant-btn.ant-btn-primary')
        })
    }
   

    clickSourceNat(){
        this.sourceNat.should('exist')
        this.sourceNat.should('be.visible')
        this.sourceNat.click()
    }
    clickSourceTagButton(){
        this.sourceTagButton.click()
    }
    enterTagName(name){
        return this.tagName.type(name)
    }
    setToggleToIpv6(){
        return cy.get('.ant-modal-body').within(() => {
            this.typeToggle.invoke("attr", "aria-checked").then(checked => {
                if (checked == "false"){
                    this.typeToggle.click()
                }
            })
        })
    }
    setToggleToIpv4(){
        return cy.get('.ant-modal-body').within(() => {
            this.typeToggle.invoke("attr", "aria-checked").then(checked => {
                if (checked == "true"){
                    this.typeToggle.click()
                }
            })
        })
    }
    enterDescription(description){
        return this.descriptionField.type(description)
    }
    clickCreateButton(){
        this.createButton.click()
    }
    clickCancelButton(){
        this.cancelButton.click()
    }
    clickToggle(){
        this.typeToggle.then(($toggle) => {
            if($toggle.hasClass('ant-switch'))
            this.typeToggle.click()
        })  
    }
    editTag(edit){
        return cy.xpath(`//tr[descendant::td[normalize-space()="${edit}"]]`).invoke("attr", "data-row-key").then((el) => {
            cy.get(`[data-row-key="${el}"] [class="ant-btn edit ant-btn-link"]`).click({force: true})
        })
    }
    clearDescription(){
        this.description.clear()
    }
    clickUpdateButton(){
        this.updateButton.click()
    }
} 
module.exports = new Source_NAT()