import LoginPage from "./loginpage";
export default class LogoutPage{
    // 封装页面对象
    get prompt(){
        cy.contains('A place to share your ')
    }

    //封装业务流
    goto_settings_page(){
        cy.contains('Settings').click()
    }

    goto_logout_page(){
        cy.contains(' Or click here to logout. ').click()
    }
}