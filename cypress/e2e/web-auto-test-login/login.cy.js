
//const { default: loginPage } = require("../../support/pageObject/login.page")
//const userLogin = require("../../fixtures/userLogin.json")

describe('Verify Login Functionality', () => {
    beforeEach(() => {
        cy.visit('')
    })

    //Custom Command
    it('Verify Success Login', () => {
        cy.login('email', 'password')
        cy.wait(500)
    })
    it('Verify Failed Login', () => {
        cy.login('email', 'password')
        cy.get('.message-error > div').should('be.visible')
        cy.wait(500)
    })
    it('Verify Invalid Value Login', () => {
        cy.login('xxxx', 'xxxx')
        cy.wait(500)
    })
    it('Verify Not Registered Login', () => {
        cy.login('email', 'password')
        cy.get('.message-error > div').should('be.visible')
        cy.wait(500)
    })

    //Page Object Model
    // it('Verify Success Login', () => {
    //     cy.get(loginPage.email).type('email')
    //     cy.get(loginPage.password).type('password')
    //     loginPage.clickLoginBtn()
    // })
    // it('Verify Failed Login', () => {
    //     cy.get(loginPage.email).type('email')
    //     cy.get(loginPage.password).type('password')
    //     loginPage.clickLoginBtn()
    //     loginPage.verifyErrorMsg('password incorrect')
    // })
    // it('Verify Invalid Value Login', () => {
    //     cy.get(loginPage.email).type('xxxx')
    //     cy.get(loginPage.password).type('xxxx')
    //     loginPage.clickLoginBtn()
    // })
    // it('Verify Not Registered Login', () => {
    //     cy.get(loginPage.email).type('email')
    //     cy.get(loginPage.password).type('password')
    //     loginPage.clickLoginBtn()
    // })

    //Fixtures
    // it('Verify Success Login', () => {
    //     cy.get(loginPage.email).type(userLogin.valid_email)
    //     cy.get(loginPage.password).type(userLogin.valid_password)
    //     cy.wait(500)
    // })
   
})
