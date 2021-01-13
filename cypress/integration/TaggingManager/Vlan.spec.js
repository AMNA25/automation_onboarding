/// <reference types="cypress" />

const Tagging_Manager = require("../../../pageObjects/TaggingManager/Tagging_Manager")
import tm from "../../fixtures/example.json"
import vlan from "../../../pageObjects/TaggingManager/VLANS"
import { randomString } from "../../../functions/randomString"

describe("VLANS test", function(){
    var tagName = randomString(tm.stringLength)
    beforeEach(() => {
        cy.visit(Cypress.env('webUrl'))
        Tagging_Manager.clickTaggingManager()
        vlan.clickVlans() 
    })

    it("Creates tag for VLAN", () => {
        vlan.clickVlanTagButton()
        vlan.enterTagName(tagName)
        vlan.enterDescription(tm.sourceDescription)
        vlan.clickCreateButton()
    })
    it("Edit tag", () => {
        vlan.editTag("default_inside")
        vlan.clearDescription()
        vlan.enterDescription(tm.editDescription)
        vlan.clickUpdateButton()
    })
})