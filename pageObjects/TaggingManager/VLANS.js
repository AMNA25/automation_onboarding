class VLANS{
    get vlans(){
        return cy.get('a[href="#/tagging/vlans"]')
    }
    get vlansTagButton(){
        return cy.get('.ant-btn.add-btn')
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
    }
    get updateButton(){
        return cy.get(".footer").within(() => {
            cy.get('button[type="button"].ant-btn.ant-btn-primary')
        })
    }

    clickVlans(){
        this.vlans.click()
    }
    clickVlanTagButton(){
        this.vlansTagButton.click()
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
module.exports = new VLANS()