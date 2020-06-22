import { Given } from "cypress-cucumber-preprocessor/steps";

/// <reference types="cypress" />

//============URL OF SMARTOS WEBSITE==============
const url = 'https://csm-global-admin-web-staging.enouvo.com/'

const demoAccount = {
    account: {
        displayName: 'Enouvo Admin'
    }
}
//===========LOGIN UNSUCCESSFULLY WITH INPUT EMAIL AND PASSWORD ARE VALID============
Given(/^I navigate to Smartos login page$/, function () {
    cy.visit(url);
  });

When(/^I input valid data to (.+) and (.+)$/, function (email, password) {
    cy.get('#email').click().type(email);  
    cy.get('#password').click().type(password);
  });

And(/^I click on Login button$/, function () {
    cy.get('.login-form-button').click();
  });

Then(/^I verify login successfully$/, function () {
    cy.get('.logo > img').should('be.visible')
      .get('.ant-menu-item-selected > .anticon').should('be.visible')
      .get('[title="Notifications"]').should('be.visible')
      .get('[title="Reservations"] > .anticon').should('be.visible')
      .get('[title="Customers"] > .anticon').should('be.visible') 
      .get('[title="History"]').should('be.visible')
      .get('[title="Transactions"] > .anticon').should('be.visible')
      .get('[title="Reports"] > .anticon').should('be.visible')
      .get('[title="Config"] > .anticon').should('be.visible')
      .get('strong').should('have.text', demoAccount.account.displayName) //"Enouvo Admin"
      .get('.rightHeader > :nth-child(1)').should('be.visible')
      .get('.rightHeader > :nth-child(2)').should('be.visible')
      .get('.rightHeader > :nth-child(3)').should('be.visible')
});