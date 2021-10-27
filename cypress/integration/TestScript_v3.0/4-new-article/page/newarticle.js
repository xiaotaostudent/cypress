export default class NewArticlePage{
    //封装页面对象
    get article_title(){
        return cy.get("input[formcontrolname=\"title\"]")
    }
    get article_about(){
        return cy.get("input[formcontrolname=\"description\"]")
    }
    get article_body(){
        return cy.get("textarea[formcontrolname=\"body\"]")
    }
    get article_tag(){
        return cy.get("input[placeholder=\"Enter tags\"]")
    }
    get submit_button(){
        return cy.get("button[class=\"btn btn-lg pull-xs-right btn-primary\"]")
    }
    // get new_article_button(){
    //     cy.contains(" New Article ")
    // }

    //封装业务流
    goto_new_article_page(){
        return cy.contains(" New Article ").click()
    }

    goto_home_page(){
        return cy.get("a[class=\"nav-link active\"]").click()
    }

    new_article(title,about,body,tag){
        if(title!==''){
            this.article_title.type(title)
        }
        if(about!==''){
            this.article_about.type(about)
        }
        if(body!==''){
            this.article_body.type(body)
        }
        if(tag!==''){
            this.article_tag.type(tag)
        }
        this.submit_button.click()
    }
    new_article_no(title,about,body,tag){
        if(title!==''){
            this.article_title.type(title)
        }
        if(about!==''){
            this.article_about.type(about)
        }
        if(body!==''){
            this.article_body.type(body)
        }
        if(tag!==''){
            this.article_tag.type(tag)
        }
    }
}