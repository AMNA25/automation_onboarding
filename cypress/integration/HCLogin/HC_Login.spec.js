/// <reference types = "cypress" />
import reg from "../../fixtures/registrationData.json"
import { addaCluster } from "../../utils/registration/actions/addAcluster"

describe('Login Test', function(){
    it.only('Log In Harmony Controller', () => {
       cy.visit(reg.machine_IP_Address)
       addaCluster(reg.userID, reg.password, reg)
    })
})
