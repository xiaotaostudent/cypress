export default class HomePage{
    //封装页面对象
    get starlogo(){
        return cy.contains('btn btn-sm btn-primary')
    }
    //封装业务流
    // goto_home_page(){
    //     cy.get("a[class=\"nav-link active\"]").click()
    // }

    goto_YourFeed_page(){
        return cy.get("a[class=\"nav-link active\"]").click()
    }

    goto_GlobalFeed_page(){
        return cy.contains(" Global Feed ").click()
    }

    thumbs_up(){
        return cy.get("button[class=\"btn btn-sm btn-outline-primary\"]").click()
    }

}