export default class SettingsPage{
    //封装页面对象
    get profile_image(){
        return cy.get("input[formcontrolname=\"image\"]")
    }
    get profile_username(){
        return cy.get("input[formcontrolname=\"username\"]")
    }
    get profile_about(){
        return cy.get("textarea[formcontrolname=\"bio\"]")
    }
    get profile_email(){
        return cy.get("input[formcontrolname=\"email\"]")
    }
    get profile_password(){
        return cy.get("input[formcontrolname=\"password\"]")
    }
    get submit(){
        return cy.contains(" Update Settings ")
    }

    //封装业务流
    goto_settings_page(){
        cy.contains('Settings').click()
    }

    your_settings(image,username,about,email,password){
        if(image!=='') {
            this.profile_image.type(image)
        }
        if (username !== '') {
            this.profile_username.type(username)
        }
        if (about !== '') {
            this.profile_about.type(about)
        }
        if (email !== '') {
            this.profile_email.type(email)
        }
        if (password !== '') {
            this.profile_password.type(email)
        }
        this.submit.click()
    }

    your_settings_about(about){
        if(about !== ''){
            this.profile_about.type(about)
        }
        this.submit.click()

    }


}