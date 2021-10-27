context('登录/退出测试',()=>{
    it('输入正确的用户名和密码，可以登陆成功',()=>{
        cy.visit('https://angular.realworld.io')
        cy.contains('Sign in').click()
        cy.get('.form-group').within(() =>{
            cy.get('input:first').should('form-control form-control-lg ng-dirty ng-valid ng-touched','placeholder','Email')
                .type('test@001')
            cy.get('input:second').should('form-control form-control-lg ng-dirty ng-valid ng-touched','placeholder','P')
                .type(`123456{enter}`)
        })
        cy.get('input[formcontrolname="email"]').type('test@003')
        cy.get('input[formcontrolname="password"]').type(`123456{enter}`)
    })

    it('点击退出按钮，可以退出成功',()=>{
        cy.contains('Settings').click()
        cy.contains('Or click here to logout.').click()
    })
})

context('Setting测试',()=>{
    it('点击Update Settings可以更新成功',()=>{
        cy.visit('https://angular.realworld.io')
        cy.contains('Sign in').click()
        cy.get('input[formcontrolname="email"]').type('test@003')
        cy.get('input[formcontrolname="password"]').type(`123456{enter}`)

        cy.contains('Settings').click()
        cy.get('textarea[formcontrolname="bio"]').clear().type('hello world')
        cy.contains('Update Settings').click()
    })
})

context('New Article测试',()=>{
    it('输入相关信息，点击Publish Article可以发表成功',()=>{
        cy.contains('New Article').click()
        cy.get('input[formcontrolname="title"]').clear().type('Article001')
        cy.get('input[formcontrolname="description"]').clear().type('This is an article about 001')
        cy.get('textarea[formcontrolname="body"]').clear().type('01,001,0001,00001,000001')
        cy.get('input[placeholder="Enter tags"]').clear().type('001')
        cy.get('button[class="btn btn-lg pull-xs-right btn-primary"]').click()
        cy.contains('Publish Article').click()
    })
})