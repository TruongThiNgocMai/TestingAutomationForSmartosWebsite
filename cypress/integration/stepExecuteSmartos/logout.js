import { Given } from "cypress-cucumber-preprocessor/steps";

/// <reference types="cypress" />

//================LOGOUT SUCCESSFULLY ON MACBOOK-15 SCREEN==================
Given(/^I navigate to Smartos website with macbook-15 screen$/, function () {
  cy.viewport('macbook-15')
});

Given(/^I login successfully to Smartos Page$/, function () {
  cy.LoginFunction('admin@enouvo.com', 'enouvo123')
});

When(/^I click on profile button$/, function () {
  cy.get('.div-user-info').click();
});

And(/^I click on Logout button$/, function () {
  cy.get(':nth-child(3) > .div-menu-item').click();
});

Then(/^I verify Logout successfully on macbook-15 screen$/, function () {
  cy.location().should((loc) => {
    expect(loc.href).to.eq('https://csm-global-admin-web-staging.enouvo.com/login');
  })
  cy.get('.logo').should('be.visible')
  cy.get('.maintitle').should('be.visible').should('have.text', 'Work with your team')
  cy.get('.mintitle').should('be.visible').should('have.text', 'Smarter - Faster - Easier')
  cy.get('.ant-btn').should('be.visible')
  cy.get('a').should('be.visible').should('have.text', 'Forgot password?')
});

//================LOGOUT SUCCESSFULLY ON SAMSUNG-S10 SCREEN==================
Given(/^Given I navigate to Smartos website with samsung-s10 screen$/, function () {
  cy.viewport('samsung-s10')
});

Given(/^I login successfully to Smartos Page$/, function () {
  cy.LoginFunction('admin@enouvo.com', 'enouvo123')
});

When(/^I click on profile button$/, function () {
  cy.get('.div-user-info').click();
});

And(/^I click on Logout button$/, function () {
  cy.get(':nth-child(3) > .div-menu-item').click();
});

Then(/^I verify Logout successfully on samsung-s10 screen$/, function () {
  cy.location().should((loc) => {
    expect(loc.href).to.eq('https://csm-global-admin-web-staging.enouvo.com/login');
  })
  cy.get('.logo').should('be.visible')
  cy.get('.maintitle').should('be.visible').should('have.text', 'Work with your team')
  cy.get('.mintitle').should('be.visible').should('have.text', 'Smarter - Faster - Easier')
  cy.get('.ant-btn').should('be.visible')
  cy.get('a').should('be.visible').should('have.text', 'Forgot password?')
});

//================LOGOUT SUCCESSFULLY ON IPHONE 6 SCREEN==================
Given(/^Given I navigate to Smartos website with iphone-6 screen$/, function () {
  cy.viewport('iphone-6')
});

Given(/^I login successfully to Smartos Page$/, function () {
  cy.LoginFunction('admin@enouvo.com', 'enouvo123')
});

When(/^I click on profile button$/, function () {
  cy.get('.div-user-info').click();
});

And(/^I click on Logout button$/, function () {
  cy.get(':nth-child(3) > .div-menu-item').click();
});

Then(/^I verify Logout successfully on iphone-6 screen$/, function () {
  cy.location().should((loc) => {
    expect(loc.href).to.eq('https://csm-global-admin-web-staging.enouvo.com/login');
  })
  cy.get('.logo').should('be.visible')
  cy.get('.maintitle').should('be.visible').should('have.text', 'Work with your team')
  cy.get('.mintitle').should('be.visible').should('have.text', 'Smarter - Faster - Easier')
  cy.get('.ant-btn').should('be.visible')
  cy.get('a').should('be.visible').should('have.text', 'Forgot password?')
});

//================LOGOUT SUCCESSFULLY ON IPHONE 6 PLUS SCREEN==================
Given(/^Given I navigate to Smartos website with iphone-6 plus screen$/, function () {
  cy.viewport('iphone-6+')
});

Given(/^I login successfully to Smartos Page$/, function () {
  cy.LoginFunction('admin@enouvo.com', 'enouvo123')
});

When(/^I click on profile button$/, function () {
  cy.get('.div-user-info').click();
});

And(/^I click on Logout button$/, function () {
  cy.get(':nth-child(3) > .div-menu-item').click();
});

Then(/^I verify Logout successfully on iphone-6 plus screen$/, function () {
  cy.location().should((loc) => {
    expect(loc.href).to.eq('https://csm-global-admin-web-staging.enouvo.com/login');
  })
  cy.get('.logo').should('be.visible')
  cy.get('.maintitle').should('be.visible').should('have.text', 'Work with your team')
  cy.get('.mintitle').should('be.visible').should('have.text', 'Smarter - Faster - Easier')
  cy.get('.ant-btn').should('be.visible')
  cy.get('a').should('be.visible').should('have.text', 'Forgot password?')
});