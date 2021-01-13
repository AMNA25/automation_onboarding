/// <reference types="cypress" />

const Tagging_Manager = require("../../../pageObjects/TaggingManager/Tagging_Manager")
import tm from "../../fixtures/example.json"
import dns from "../../../pageObjects/TaggingManager/Data_Interface_DNS"
import { randomString } from "../../../functions/randomString"

describe("Data Interface DNS test", function(){
    var tagName = randomString(tm.stringLength)
    beforeEach(() => {
        cy.visit(Cypress.env('webUrl'))
        Tagging_Manager.clickTaggingManager()
        dns.clickDNS()
    })

    it("Create tag for Data Interface DNS", () => {
        dns.clickDnsTagButton()
        dns.enterTagName(tagName)
        dns.enterDescription(tm.sourceDescription)
        dns.clickCreateButton()
    })
    it("Cancel New tag modal", () => {
        dns.clickDnsTagButton()
        dns.clickCancelButton()
    })
    it("Edit tag", () => {
        dns.editTag("default_dns_v6")
        dns.clearDescription()
        dns.enterDescription(tm.editDescription)
        dns.clickUpdateButton()
    })
    it.only("Create/edit", () => {
        dns.createOrEdit("default_dns", tm.sourceDescription)
    })
})