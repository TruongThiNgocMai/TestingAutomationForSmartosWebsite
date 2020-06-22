import { Given } from "cypress-cucumber-preprocessor/steps";

/// <reference types="cypress" />

//===========LOGIN UNSUCCESSFULLY WITH INPUT EMAIL AMD PASSWORD ARE VALID=============
Given(/^I login successfully to Smartos Page$/, function () {
    cy.LoginFunction('admin@enouvo.com', 'enouvo123')
  });

//================LOGOUT SUCCESSFULLY==================
When(/^I click on profile button$/, function () {
    cy.get('.div-user-info').click();
  });

And(/^I click on Logout button$/, function () {
    cy.get(':nth-child(3) > .div-menu-item').click();
  });

Then(/^I verify Logout successfully$/, function () {
    cy.location().should((loc) => {
        expect(loc.href).to.eq('https://csm-global-admin-web-staging.enouvo.com/login');
    })
    cy.get('.logo').should('be.visible')
    cy.get('.maintitle').should('be.visible').should('have.text', 'Work with your team')
    cy.get('.mintitle').should('be.visible').should('have.text', 'Smarter - Faster - Easier')
    cy.get('.ant-btn').should('be.visible')
    cy.get('a').should('be.visible').should('have.text', 'Forgot password?')
});
