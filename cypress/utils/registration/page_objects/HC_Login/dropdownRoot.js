class dropdownRoot{
    get controller(){
        return cy.get('span[title="Controller"]')
    }
    get root(){
        return cy.get('span[title="root"]')
    }

    clickControllerDropdown(){
        this.controller.click()
    }
    clickRoot(){
        this.root.click()
    }
}
export default dropdownRoot