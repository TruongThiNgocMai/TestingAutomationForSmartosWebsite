import { Given } from "cypress-cucumber-preprocessor/steps";

/// <reference types="cypress" />

//============URL OF SMARTOS WEBSITE==============
const url = 'https://csm-global-admin-web-staging.enouvo.com/'

const demoAccount = {
  account: {
    displayName: 'Enouvo Admin'
  }
}

//===========LOGIN UNSUCCESSFULLY WITH INPUT EMAIL AND PASSWORD ARE VALID ON MACBOOK-15 SCREEN============
Given(/^I navigate to Smartos website with macbook-15 screen$/, function () {
  cy.viewport('macbook-15')
});

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

Then(/^I verify login successfully with macbook-15 screen$/, function () {
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

//===========LOGIN UNSUCCESSFULLY WITH INPUT EMAIL AND PASSWORD ARE VALID ON SAMSUNG-S10 SCREEN============
Given(/^I navigate to Smartos website with samsung-s10 screen$/, function () {
  cy.viewport('samsung-s10')
});

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

Then(/^I verify login successfully with samsung-s10 screen$/, function () {
  cy.get('.anticon-menu-unfold > svg').click()
  cy.get('h4').should('be.visible').should('have.text', 'Dashboard')
    .get('.fullLogo').should('be.visible')
    .get('.ant-menu-item-selected > .anticon').should('be.visible')
    .get('[title="Notifications"]').should('be.visible')
    .get('[title="Reservations"] > .anticon').should('be.visible')
    .get('[title="Customers"] > .anticon').should('be.visible')
    .get('[title="History"]').should('be.visible')
    .get('[title="Transactions"] > .anticon').should('be.visible')
    .get('[title="Reports"] > .anticon').should('be.visible')
    .get('[title="Config"] > .anticon').should('be.visible')
});

//===========LOGIN UNSUCCESSFULLY WITH INPUT EMAIL AND PASSWORD ARE VALID ON IPHONE 6 SCREEN============
Given(/^I navigate to Smartos website with iphone-6 screen$/, function () {
  cy.viewport('iphone-6')
});

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

Then(/^I verify login successfully with iphone-6 screen$/, function () {
  cy.get('.anticon-menu-unfold > svg').click()
  cy.get('h4').should('be.visible').should('have.text', 'Dashboard')
    .get('.fullLogo').should('be.visible')
    .get('.ant-menu-item-selected > .anticon').should('be.visible')
    .get('[title="Notifications"]').should('be.visible')
    .get('[title="Reservations"] > .anticon').should('be.visible')
    .get('[title="Customers"] > .anticon').should('be.visible')
    .get('[title="History"]').should('be.visible')
    .get('[title="Transactions"] > .anticon').should('be.visible')
    .get('[title="Reports"] > .anticon').should('be.visible')
    .get('[title="Config"] > .anticon').should('be.visible')
});

//===========LOGIN UNSUCCESSFULLY WITH INPUT EMAIL AND PASSWORD ARE VALID ON IPHONE 6PLUS SCREEN============
Given(/^I navigate to Smartos website with iphone-6 plus screen$/, function () {
  cy.viewport('iphone-6+')
});

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

Then(/^I verify login successfully with iphone-6 plus screen$/, function () {
  cy.get('.anticon-menu-unfold > svg').click()
  cy.get('h4').should('be.visible').should('have.text', 'Dashboard')
    .get('.fullLogo').should('be.visible')
    .get('.ant-menu-item-selected > .anticon').should('be.visible')
    .get('[title="Notifications"]').should('be.visible')
    .get('[title="Reservations"] > .anticon').should('be.visible')
    .get('[title="Customers"] > .anticon').should('be.visible')
    .get('[title="History"]').should('be.visible')
    .get('[title="Transactions"] > .anticon').should('be.visible')
    .get('[title="Reports"] > .anticon').should('be.visible')
    .get('[title="Config"] > .anticon').should('be.visible')
});
