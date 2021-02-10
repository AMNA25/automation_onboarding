class HarmonyControllerLogin{
    get userId(){
        return cy.get('input[name="userId"]')
    }
    get password(){
        return cy.get('input[name="password"]')
    }
    get signInButton(){
        return cy.get('#loginBtn')
    }

    typeUserId(userID){
        return this.userId.type(userID)
    }
    typePassword(pass){
        return this.password.type(pass)
    }
    clickSignInButton(){
        this.signInButton.click()
    }
}
export default HarmonyControllerLogin