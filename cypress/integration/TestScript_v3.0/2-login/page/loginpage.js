export default class LoginPage{
    constructor() {
        this.url = 'https://angular.realworld.io'
    }
    //封装页面对象
    get username(){
        return cy.get("input[formcontrolname=\"email\"]")
    }
    get password(){
        return cy.get("input[formcontrolname=\"password\"]")
    }
    get submit(){
        return cy.get("button[class=\"btn btn-lg btn-primary pull-xs-right\"]")
    }
    get prompt(){
        return cy.contains("email or password is invalid")
    }
    get typenull(){
        return cy.contains('Need an account?')
    }

    //封装常见业务流
    visit(){
        cy.visit(this.url)
    }

    goto_sign_in_page(){
        cy.contains("Sign in").click()
    }

    login(name,pwd){
        if(name!==''){
            this.username.type(name)
        }
        if(pwd!==''){
            this.password.type(pwd)
        }
        this.submit.click()
    }

    login_null(name,pwd){
        if(name!==''){
            this.username.type(name)
        }
        if(pwd!==''){
            this.password.type(pwd)
        }
    }
}