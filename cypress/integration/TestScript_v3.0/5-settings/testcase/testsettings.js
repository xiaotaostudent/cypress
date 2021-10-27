import SettingsPage from "../page/settingspage";
import LoginPage from "../../2-login/page/loginpage";
import data from "../testdata/data.json"

context('设置',()=>{
    it('设置个人信息，更新成功',()=>{
        let login = new LoginPage()
        login.visit()
        login.goto_sign_in_page()
        login.login('test@456','123456')
        cy.contains('test456').should('contain','test456')

        let settings = new SettingsPage()
        settings.goto_settings_page()
        settings.your_settings_about(data.info1.about)
        cy.contains(data.info1.about).should('contain',data.info1.about)
    })
})