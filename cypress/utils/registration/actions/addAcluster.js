import * as HCCluster from "../page_objects/index"

export function addaCluster(userID, password, obj){
    const hcLogin = new HCCluster.HarmonyControllerLogin()
    const DDRoot = new HCCluster.dropdownRoot()
    const infrastructure = new HCCluster.infrastructure()
    const clusteR = new HCCluster.cluster()
    hcLogin.typeUserId(userID)
    hcLogin.typePassword(password)
    hcLogin.clickSignInButton()
    DDRoot.clickControllerDropdown()
    DDRoot.clickRoot()
    infrastructure.clickInfrastructure()
    clusteR.clickAddACluster()
    clusteR._tempAddCluster(obj)
}