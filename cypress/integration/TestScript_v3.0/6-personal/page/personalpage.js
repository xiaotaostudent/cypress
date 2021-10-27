export default class PersonalPage{
    //封装页面对象
    // get goto_personal_page(){
    //     return cy.contains("a[class=\"nav-link active\"]")
    // }

    //封装业务流
    goto_personal_page(para){
        return cy.contains(para).click()
    }
    thumbs_up_i(){
        return cy.get("i[class=\"ion-heart\"]").click()
    }
    thumbs_up_b(){
        return cy.get("button[class=\"btn btn-sm btn-primary\"]").click()
    }
    artile(para){
        return cy.get("h1["+para+"]").click()
    }
    edit_proile_setting(){
        return cy.contains(" Edit Profile Settings ").click()
    }

}