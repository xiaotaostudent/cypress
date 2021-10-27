import Loginpage from "../page/loginpage"
context('登录',()=>{
    it('输入正确的用户名和密码，可以登陆成功', ()=>{
        let login = new Loginpage()
        login.visit()
        login.sign_in_click()
        login.login('test@004','123456')
        cy.url().should('contain','https://angular.realworld.io/')
    })
    it('输入错误的用户名和密码，提示: email or password is invalid', ()=>{
        let login = new Loginpage()
        login.visit()
        login.sign_in_click()
        login.login('test@004','1234567')
        login.prompt.should('contain',' email or password is invalid ')
    })
})