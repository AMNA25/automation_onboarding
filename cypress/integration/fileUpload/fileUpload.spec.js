/// <reference types="cypress" />

describe("Cypress File Upload", function() {
    it("File Upload test", () => {
        cy.visit('https://the-internet.herokuapp.com/')
        cy.get('a[href="/upload"]').click()
        const file = 'example.json'
        cy.get('#file-upload').click().attachFile(file)
        cy.get('#file-submit').click()
        cy.log(file)
        cy.get('#uploaded-files').contains('example.json', {matchCase: true})
    })
})