/// <reference types="cypress" />

import { Given } from "cypress-cucumber-preprocessor/steps";
 
//---URL FOR SMARTOS WEBSITE---
const url = 'https://csm-global-admin-web-staging.enouvo.com/'

const demoAccount = {
    account: {
        displayName: 'Enouvo Admin'
    }
}

//===========LOGIN UNSUCCESSFULLY WITH INPUT EMAIL AND PASSWORD ARE VALID============
Given ('I navigate to Smartos login page', () => {
    cy.visit(url);
})

When ('I input valid data to', (datatable) => {
    datatable.hashes().forEach(element =>   {
        cy.get('#email').click().type(element.email);  
        cy.get('#password').click().type(element.password);
    })
    
})
When ('I click on Login button', () => {
    cy.get('.login-form-button').click();
    cy.wait(3000)
})
Then ('I verify login successfully', () => {
    cy.get('.logo > img').should('be.visible')
      .get('.ant-menu-item-selected > .anticon').should('be.visible')
      .get('[title="Notifications"]').should('be.visible')
      .get('[title="Reservations"] > .anticon').should('be.visible')
      .get('[title="Customers"] > .anticon').should('be.visible')
      .get('[title="History"]').should('be.visible')
      .get('[title="Transactions"] > .anticon').should('be.visible')
      .get('[title="Reports"] > .anticon').should('be.visible')
      .get('[title="Config"] > .anticon').should('be.visible')
      .get('strong').should('have.text', demoAccount.account.displayName); //"Enouvo Admin"
})