class accessLists{
    get accessList(){
        return cy.get('#link-acl')
    }

    clickAccessLists(){
        return cy.get('#configuration_objects').within(() => {
            cy.get('#link-acl').click()
        })
    }
    editAccessListTag(title, type){
        cy.xpath(`//tr[descendant::span[normalize-space()="${title}"]]`).contains(type).parent()
        .invoke("attr", "data-row-key").then((property) => {
            //cy.log(property)
            cy.get(`[data-row-key="${property}"] [class="ant-btn edit ant-btn-link"]`).click({force: true})
            cy.get('input[id="acl_rules_list[0].src_interface"]').click({force: true})
            cy.get('[role="option"][title="Inside Decrypt"]').click({force: true})
            cy.get('[id="acl-confirm-btn"]').click()
        })
    }

}
module.exports = new accessLists()