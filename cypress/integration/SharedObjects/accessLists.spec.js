/// <reference types = "cypress" />

import sharedObjects from "../../../pageObjects/SharedObjects/sharedObjects"
import configObjects from "../../../pageObjects/SharedObjects/configurationObjects"
import accessList from "../../../pageObjects/SharedObjects/accessLists"

describe("Access lists test", function(){
    beforeEach(() => {
        cy.visit(Cypress.env('webUrl'))
        sharedObjects.clickSharedObjects()
        configObjects.clickConfigurationObjects()
    })

    it("Clicks Access Lists", () => {
        accessList.clickAccessLists()
        accessList.editAccessListTag("Inspect_all", "IPv6")
    })
})