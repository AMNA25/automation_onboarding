/// <reference types="cypress" />

describe("Cypress File Upload", function() {
    it("File Upload test", () => {
        cy.visit(Cypress.env('internet_link'))
        cy.get('a[href="/upload"]').click()
        const file = 'example.json'
        cy.get('#file-upload').click().attachFile(file)
        cy.get('#file-submit').click()
        cy.addContext(file)
        cy.log(file)
        cy.get('#uploaded-files').contains('example.json', {matchCase: true})
    })
})