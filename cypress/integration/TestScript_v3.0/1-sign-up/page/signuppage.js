export default class SignUpPage{
    constructor() {
        this.url = 'https://angular.realworld.io'
    }

    //封装页面对象
    get signuppage(){
        return cy.contains('Sign up')
    }
    get username(){
        return cy.get('input[formcontrolname=\"username\"]')
    }

    get email(){
        return cy.get('input[formcontrolname=\"email\"]')
    }

    get password(){
        return cy.get('input[formcontrolname=\"password\"]')
    }

    get submit(){
        return cy.get("button[class=\'btn btn-lg btn-primary pull-xs-right\']")
    }


    get usrtaken(){
        return cy.contains(' username has already been taken ')
    }

    get emailtaken(){
        return cy.contains(' email has already been taken ')
    }

    get typenull(){
        return cy.contains('Have an account?')
    }

    //封装常见业务流
    visit(){
        cy.visit(this.url)
    }
    goto_sign_up_page(){
        this.signuppage.click()
    }
    sign_up(username,email,password){
        if (username!== ''){
            this.username.type(username)
        }
        if (email!== ''){
            this.email.type(email)
        }
        if (username!== ''){
            this.password.type(password)
        }

        this.submit.click()
        // return username
    }
    sign_up_null(username,email,password){
        if (username!== ''){
            this.username().type(username)
        }
        if (email!== ''){
            this.email().type(email)
        }
        if (username!== ''){
            this.password().type(password)
        }
        // this.submit.click()
        // return username
    }

}