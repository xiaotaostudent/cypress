import LoginPage from "../page/loginpage"
context('登录',()=>{
    it('输入的用户名、密码均为空，登陆失败', ()=>{
        let login = new LoginPage()
        login.visit()
        login.goto_sign_in_page()
        login.login_null('','')
        login.typenull.should('contain','Need an account?')
    })

    it('输入错误的用户名和密码，登录失败', ()=>{
        let login = new LoginPage()
        login.visit()
        login.goto_sign_in_page()
        login.login('test@004','1234567')
        login.prompt.should('contain',' email or password is invalid ')
    })

    it('输入正确的用户名和密码，登陆成功', ()=>{
        let login = new LoginPage()
        login.visit()
        login.goto_sign_in_page()
        login.login('test@456','123456')
        cy.contains('test456').should('contain','test456')

        // cy.url().should('contain','https://angular.realworld.io/')
    })


})