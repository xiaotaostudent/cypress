import locator from './locator.json'
export default class LoginPage{
    constructor() {
        this.url = 'https://angular.realworld.io'
    }
    //封装页面对象
    get username(){
        return cy.get(locator.loginpage.username)
    }
    get password(){
        return cy.get(locator.loginpage.password)
    }
    get submit(){
        return cy.get(locator.loginpage.submit )
    }
    get prompt(){
        return cy.contains(locator.loginpage.prompt)
    }
    visit(){
        cy.visit(this.url)
    }

    sign_in_click(){
        cy.contains(locator.loginpage.sign_in).click()
    }
    //封装常见业务流
    login(name,pwd){
        if(name!==''){
            this.username.type(name)
        }
        if(pwd!==''){
            this.password.type(pwd)
        }
        this.submit.click()
    }
}