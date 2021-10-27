import LoginPage from "../../2-login/page/loginpage"
import NewArticlePage from "../page/newarticle"
import data from "../testdata/data.json"

context('发布文章',()=>{
    it('Title,Description,Body内容均为空，发布失败',()=>{
        let login = new LoginPage()
        login.visit()
        login.goto_sign_in_page()
        login.login('test@456','123456')
        cy.contains('test456').should('contain','test456')

        let newarticle = new NewArticlePage()
        newarticle.goto_new_article_page()
        newarticle.new_article('','','','')
        cy.contains(' title can\'t be blank ').should('contain',' title can\'t be blank ')
    })

    it('已输入Title,Description,Body中的内容，取消发布',()=>{
        let login = new LoginPage()
        login.visit()
        login.goto_sign_in_page()
        login.login('test@456','123456')
        cy.contains('test456').should('contain','test456')

        let newarticle = new NewArticlePage()
        newarticle.goto_new_article_page()
        newarticle.new_article_no(data.info1.title,data.info1.about,data.info1.body,data.info1.tag)
        newarticle.goto_home_page()
        cy.contains('test456').should('contain','test456')
    })

    it('Title、Description、Body均合法，发布成功',()=>{
        let login = new LoginPage()
        login.visit()
        login.goto_sign_in_page()
        login.login('test@456','123456')
        cy.contains('test456').should('contain','test456')

        let newarticle = new NewArticlePage()
        newarticle.goto_new_article_page()
        newarticle.new_article(data.info2.title,data.info2.about,data.info2.body,data.info2.tag)
        cy.contains(data.info2.title).should('contain',data.info2.title)
        // cy.url().should('contain','https://angular.realworld.io/')
    })
})