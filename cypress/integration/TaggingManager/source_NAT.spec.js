/// <reference types="cypress" />

const Tagging_Manager = require("../../../pageObjects/TaggingManager/Tagging_Manager")
import Source_NAT from "../../../pageObjects/TaggingManager/Source_NAT"
import tm from "../../fixtures/example.json"
import { randomString } from "../../../functions/randomString"

describe("Source_NAT test", function(){
    var random_string = randomString(tm.stringLength)
    beforeEach(() => {
        cy.visit(Cypress.env('webUrl'))
        Tagging_Manager.clickTaggingManager()
        Source_NAT.clickSourceNat()
    })

    it("Create new tag for Source NAT", () => {
        Source_NAT.clickSourceTagButton()
        Source_NAT.enterTagName(random_string)
        Source_NAT.setToggleToIpv4()
        Source_NAT.enterDescription(tm.sourceDescription)
        Source_NAT.clickCreateButton()
    })
})

