import LoginPage from "../page/loginpage";
import LogoutPage from "../page/logoutpage";
context('退出',()=>{
    it('退出成功',()=>{
        let login = new LoginPage()
        login.visit()
        login.goto_sign_in_page()
        login.login('test@456','123456')
        cy.contains('test456').should('contain','test456')

        let logout = new LogoutPage()
        logout.goto_settings_page()
        logout.goto_logout_page()
    })
})

