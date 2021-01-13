/// <reference types = "cypress" />
const Tagging_Manager = require("../../../pageObjects/TaggingManager/Tagging_Manager")
import tm from "../../fixtures/example.json"
import vrid from "../../../pageObjects/TaggingManager/VRID"
import { randomString } from "../../../functions/randomString"

describe("VRID test", function(){
    var tagName = randomString(tm.stringLength)
    beforeEach(() => {
        cy.visit(Cypress.env('webUrl'))
        Tagging_Manager.clickTaggingManager()
        vrid.clickVrid()
    })

    it("Creates tag for VRID", () => {
        vrid.clickVridTagButton()
        vrid.enterTagName(tagName)
        vrid.enterDescription(tm.sourceDescription)
        vrid.clickCreateButton()
    })
})