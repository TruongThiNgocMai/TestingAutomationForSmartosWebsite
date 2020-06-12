import { Given } from "cypress-cucumber-preprocessor/steps"

/// <reference types="cypress" />
 
//---URL FOR SMARTOS WEBSITE---
const url = 'https://csm-global-admin-web-staging.enouvo.com/'

//===========LOGIN UNSUCCESSFULLY WITH INPUT EMAIL ACCOUNT DOES NOT REGISTER BEFORE============
Given ('I navigate to Smartos login page', () => {
    cy.visit(url)
})
When ('I input Email account does not register before', (datatable) => {
    datatable.hashes().forEach(element => {
        cy.get('#email').click().type(element.email)
        cy.get('#password').click().type(element.password)
    })
})
When ('I click on Login button', () => {
    cy.get('.login-form-button').click()
    cy.wait(3000)
    
})
Then ('I verify notice message display', () => {
    cy.get('.ant-notification-notice-description').should('have.text', 'User not found')
})

//============LOGIN UNSSUCCESSFULLY WITH INPUT PASSWORD INVALID=============
Given ('I navigate to Smartos login page', () => {
    cy.visit(url)
})
When ('I input Email valid but Password invalid', (datatable) => {
    datatable.hashes().forEach(element => {
        cy.get('#email').click().type(element.email)
        cy.get('#password').click().type(element.password)
    })
})
When ('I click on Login button', () => {
    cy.get('.login-form-button').click()
    cy.wait(3000)
})
Then ('I verify notice message display', () => {
    cy.get('.ant-notification-notice-description').should('have.text', 'Incorrect email or password')
})

//============LOGIN UNSUCCESSFULLY WITH DO NOT INPUT DATA FOR EMAIL=============

Given ('I navigate to Smartos login page', () => {
    cy.visit(url)
})
When ('I do not input data for Email', (datatable) => {
    datatable.hashes().forEach(element => {
        cy.get('#password').click().type(element.password)
    })
})
When ('I click on Login button', () => {
    cy.get('.login-form-button').click()
    cy.wait(3000)
})
Then ('I validate blank for Email', () => {
    cy.get('.ant-form-explain').should('have.text', 'Please input your email!')
})

//============LOGIN UNSUCCESSFULLY WITH DO NOT INPUT DATA FOR PASSWORD=============
Given ('I navigate to Smartos login page', () => {
    cy.visit(url)
})
When ('I do not input data for Password', (datatable) => {
    datatable.hashes().forEach(element => {
        cy.get('#email').click().type(element.email)
    })
})
When ('I click on Login button', () => {
    cy.get('.login-form-button').click()
    cy.wait(3000)
})
Then ('I validate blank for Password', () => {
    cy.get('.ant-form-explain').should('have.text', 'Please input your password!')
    
})

//============LOGIN UNSUCCESSFULLY WITH DO NOT INPUT DATA FOR EMAIL AND PASSWORD=============
Given ('I navigate to Smartos login page', () => {
    cy.visit(url)
})
When ('I click on Login button', () => {
    cy.get('.login-form-button').click()
    cy.wait(3000)
})
Then ('I verify notice message display', () => {
    cy.get(':nth-child(1) > .ant-col > .ant-form-item-control > .ant-form-explain').firts().should('have.text', 'Please input your email!')
    cy.get(':nth-child(2) > .ant-col > .ant-form-item-control > .ant-form-explain').second().should('have.text', 'Please input your password!')
})




