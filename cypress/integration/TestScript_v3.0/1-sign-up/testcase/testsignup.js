import SignUpPage from "../page/signuppage";
context('注册',()=> {
    it('输入的用户名、邮箱、密码均为空，注册失败', () => {
        let signup = new SignUpPage()
        signup.visit()
        signup.goto_sign_up_page()
        signup.sign_up_null('', '', '')
        signup.typenull.should('contain','Have an account?')
    })

    it('输入非法的用户名(已注册)、邮箱、密码，注册失败', () => {
        let signup = new SignUpPage()
        signup.visit()
        signup.goto_sign_up_page()
        signup.sign_up('test002', 'test@112', 'test112')
        signup.usrtaken.should('contain',' username has already been taken ')
    })

    it('输入有效的用户名、邮箱(已注册)、密码，可以注册失败', () => {
        let signup = new SignUpPage()
        signup.visit()
        signup.goto_sign_up_page()
        signup.sign_up('test112', 'test@112', 'test112')
        signup.emailtaken.should('contain', ' email has already been taken ')
    })

    it('输入有效的用户名、邮箱、密码，可以注册成功', () => {
        let signup = new SignUpPage()
        signup.visit()
        signup.goto_sign_up_page()
        signup.sign_up('test45678', 'test@45678', 'test45678')
        cy.contains('test45678').should('contain', 'test45678')
    })

})