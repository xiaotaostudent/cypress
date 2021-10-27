import HomePage from "../page/homepage";
import LoginPage from "../../2-login/page/loginpage";
context('Home页',()=>{
    it('点击♥，点赞成功',()=>{ //点赞的logo一样
        let login = new LoginPage()
        login.visit()
        login.goto_sign_in_page()
        login.login('test@456','123456')
        cy.contains('test456').should('contain','test456')

        let home = new HomePage()
        // home.goto_home_page()
        home.goto_GlobalFeed_page()
        home.thumbs_up()
        cy.contains('1').should('contain','1')
    })
})