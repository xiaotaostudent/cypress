import LoginPage from "../../2-login/page/loginpage";
import PersonalPage from "../page/personalpage";

context('个人页',()=>{
    it('进入个人页，选择article，点赞成功',()=>{
        let login = new LoginPage()
        login.visit()
        login.goto_sign_in_page()
        login.login('test@1111','123456')
        cy.contains('test1111').should('contain','test1111')

        let personal = new PersonalPage()
        personal.goto_personal_page('test1111')
        personal.thumbs_up_b()
    })
})