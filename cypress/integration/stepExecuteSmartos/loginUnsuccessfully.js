import { Given } from "cypress-cucumber-preprocessor/steps"

/// <reference types="cypress" />

//---URL FOR SMARTOS WEBSITE---
const url = 'https://csm-global-admin-web-staging.enouvo.com/'

//===========LOGIN UNSUCCESSFULLY WITH INPUT EMAIL ACCOUNT DOES NOT REGISTER BEFORE ON MACBOOK-15 SCREEN============
Given(/^I navigate to Smartos website with macbook-15 screen$/, function () {
  cy.viewport('macbook-15')
});

Given(/^I navigate to Smartos login page$/, function () {
  cy.visit(url)
});

When(/^I input Email account does not register before as \"([^\"]*)\" and \"([^\"]*)\"$/, function (email, password) {
  cy.get('#email').click().type(email)
  cy.get('#password').click().type(password)
});

And(/^I click on Login button$/, function () {
  cy.get('.login-form-button').click()
});

Then(/^I verify notice message display for case account does not register before with macbook-15 screen$/, function () {
  cy.get('.ant-notification-notice-description').should('have.text', 'User not found')
});

//============LOGIN UNSSUCCESSFULLY WITH INPUT PASSWORD INVALID ON MACBOOK-15 SCREEN=============
Given(/^I navigate to Smartos website with macbook-15 screen$/, function () {
  cy.viewport('macbook-15')
});

Given(/^I navigate to Smartos login page$/, function () {
  cy.visit(url)
});

When(/^I input Email valid as \"([^\"]*)\" but Password invalid as \"([^\"]*)\"$/, function (email, password) {
  cy.get('#email').click().type(email)
  cy.get('#password').click().type(password)
});

And(/^I click on Login button$/, function () {
  cy.get('.login-form-button').click()
});

Then(/^I verify notice message display for case password invalid with macbook-15 screen$/, function () {
  cy.get('.ant-notification-notice-description').should('have.text', 'Incorrect email or password')
});

//============LOGIN UNSUCCESSFULLY WITH DO NOT INPUT DATA FOR EMAIL ON MACBOOK-15 SCREEN=============
Given(/^I navigate to Smartos website with macbook-15 screen$/, function () {
  cy.viewport('macbook-15')
});

Given(/^I navigate to Smartos login page$/, function () {
  cy.visit(url)
});

When(/^I input data into Password filed \"([^\"]*)\"$/, function (password) {
  cy.get('#password').click().type(password)
});

And(/^I click on Login button$/, function () {
  cy.get('.login-form-button').click()
});

Then(/^I verify notice message display for case blank email with macbook-15 screen$/, function () {
  cy.get('.ant-form-explain').should('have.text', 'Please input your email!')
  // cy.get(':nth-child(2) > .ant-col > .ant-form-item-control > .ant-form-explain')
});

//============LOGIN UNSUCCESSFULLY WITH DO NOT INPUT DATA FOR PASSWORD ON MACBOOK-15 SCREEN=============
Given(/^I navigate to Smartos website with macbook-15 screen$/, function () {
  cy.viewport('macbook-15')
});

Given(/^I navigate to Smartos login page$/, function () {
  cy.visit(url)
});

When(/^I input data into Email field \"([^\"]*)\"$/, function (email) {
  cy.get('#email').click().type(email)
});

And(/^I click on Login button$/, function () {
  cy.get('.login-form-button').click()
});

Then(/^I verify notice message display for case blank password with macbook-15 screen$/, function () {
  cy.get(':nth-child(2) > .ant-col > .ant-form-item-control > .ant-form-explain').should('have.text', 'Please input your password!')
});

//============LOGIN UNSUCCESSFULLY WITH DO NOT INPUT DATA FOR EMAIL AND PASSWORD ON MACBOOK-15 SCREEN=============
Given(/^I navigate to Smartos website with macbook-15 screen$/, function () {
  cy.viewport('macbook-15')
});

Given(/^I navigate to Smartos login page$/, function () {
  cy.visit(url)
});

When(/^I click on Login button$/, function () {
  cy.get('.login-form-button').click()
});

Then(/^I verify notice message display below email for case do not input email with macbook-15 screen$/, function () {
  cy.get(':nth-child(1) > .ant-col > .ant-form-item-control > .ant-form-explain').should('have.text', 'Please input your email!');
});

And(/^I verify notice message display below password for case do not input password with macbook-15 screen$/, function () {
  cy.get(':nth-child(2) > .ant-col > .ant-form-item-control > .ant-form-explain').should('have.text', 'Please input your password!');
});

//===========LOGIN UNSUCCESSFULLY WITH INPUT EMAIL ACCOUNT DOES NOT REGISTER BEFORE ON SAMSUNG-S10 SCREEN============
Given(/^I navigate to Smartos website with samsung-s10 screen$/, function () {
  cy.viewport('samsung-s10')
});

Given(/^I navigate to Smartos login page$/, function () {
  cy.visit(url)
});

When(/^I input Email account does not register before as \"([^\"]*)\" and \"([^\"]*)\"$/, function (email, password) {
  cy.get('#email').click().type(email)
  cy.get('#password').click().type(password)
});

And(/^I click on Login button$/, function () {
  cy.get('.login-form-button').click()
});

Then(/^I verify notice message display for case account does not register before with samsung-s10 screen$/, function () {
  cy.get('.ant-notification-notice-description').should('have.text', 'User not found')
});

//============LOGIN UNSSUCCESSFULLY WITH INPUT PASSWORD INVALID ON SAMSUNG-S10 SCREEN=============
Given(/^I navigate to Smartos website with samsung-s10 screen$/, function () {
  cy.viewport('samsung-s10')
});

Given(/^I navigate to Smartos login page$/, function () {
  cy.visit(url)
});

When(/^I input Email valid as \"([^\"]*)\" but Password invalid as \"([^\"]*)\"$/, function (email, password) {
  cy.get('#email').click().type(email)
  cy.get('#password').click().type(password)
});

And(/^I click on Login button$/, function () {
  cy.get('.login-form-button').click()
});

Then(/^I verify notice message display for case password invalid with samsung-s10 screen$/, function () {
  cy.get('.ant-notification-notice-description').should('have.text', 'Incorrect email or password')
});

//============LOGIN UNSUCCESSFULLY WITH DO NOT INPUT DATA FOR EMAIL ON SAMSUNG-S10 SCREEN=============
Given(/^I navigate to Smartos website with samsung-s10 screen$/, function () {
  cy.viewport('samsung-s10')
});

Given(/^I navigate to Smartos login page$/, function () {
  cy.visit(url)
});

When(/^I input data into Password filed \"([^\"]*)\"$/, function (password) {
  cy.get('#password').click().type(password)
});

And(/^I click on Login button$/, function () {
  cy.get('.login-form-button').click()
});

Then(/^I verify notice message display for case blank email with samsung-s10 screen$/, function () {
  cy.get('.ant-form-explain').should('have.text', 'Please input your email!')
  // cy.get(':nth-child(2) > .ant-col > .ant-form-item-control > .ant-form-explain')
});

//============LOGIN UNSUCCESSFULLY WITH DO NOT INPUT DATA FOR PASSWORD ON SAMSUNG-S10 SCREEN=============
Given(/^I navigate to Smartos website with samsung-s10 screen$/, function () {
  cy.viewport('samsung-s10')
});

Given(/^I navigate to Smartos login page$/, function () {
  cy.visit(url)
});

When(/^I input data into Email field \"([^\"]*)\"$/, function (email) {
  cy.get('#email').click().type(email)
});

And(/^I click on Login button$/, function () {
  cy.get('.login-form-button').click()
});

Then(/^I verify notice message display for case blank password with samsung-s10 screen$/, function () {
  cy.get(':nth-child(2) > .ant-col > .ant-form-item-control > .ant-form-explain').should('have.text', 'Please input your password!')
});

//============LOGIN UNSUCCESSFULLY WITH DO NOT INPUT DATA FOR EMAIL AND PASSWORD ON SAMSUNG-S10 SCREEN=============
Given(/^I navigate to Smartos website with samsung-s10 screen$/, function () {
  cy.viewport('samsung-s10')
});

Given(/^I navigate to Smartos login page$/, function () {
  cy.visit(url)
});

When(/^I click on Login button$/, function () {
  cy.get('.login-form-button').click()
});

Then(/^I verify notice message display below email for case do not input email with samsung-s10 screen$/, function () {
  cy.get(':nth-child(1) > .ant-col > .ant-form-item-control > .ant-form-explain').should('have.text', 'Please input your email!');
});

And(/^I verify notice message display below password for case do not input password with samsung-s10 screen$/, function () {
  cy.get(':nth-child(2) > .ant-col > .ant-form-item-control > .ant-form-explain').should('have.text', 'Please input your password!');
});

//===========LOGIN UNSUCCESSFULLY WITH INPUT EMAIL ACCOUNT DOES NOT REGISTER BEFORE ON IPHONE 6 SCREEN============
Given(/^I navigate to Smartos website with iphone 6 screen$/, function () {
  cy.viewport('iphone-6')
});

Given(/^I navigate to Smartos login page$/, function () {
  cy.visit(url)
});

When(/^I input Email account does not register before as \"([^\"]*)\" and \"([^\"]*)\"$/, function (email, password) {
  cy.get('#email').click().type(email)
  cy.get('#password').click().type(password)
});

And(/^I click on Login button$/, function () {
  cy.get('.login-form-button').click()
});

Then(/^I verify notice message display for case account does not register before with iphone 6 screen$/, function () {
  cy.get('.ant-notification-notice-description').should('have.text', 'User not found')
});

//============LOGIN UNSSUCCESSFULLY WITH INPUT PASSWORD INVALID ON IPHONE 6 SCREEN=============
Given(/^I navigate to Smartos website with iphone 6 screen$/, function () {
  cy.viewport('iphone-6')
});

Given(/^I navigate to Smartos login page$/, function () {
  cy.visit(url)
});

When(/^I input Email valid as \"([^\"]*)\" but Password invalid as \"([^\"]*)\"$/, function (email, password) {
  cy.get('#email').click().type(email)
  cy.get('#password').click().type(password)
});

And(/^I click on Login button$/, function () {
  cy.get('.login-form-button').click()
});

Then(/^I verify notice message display for case password invalid with iphone 6 screen$/, function () {
  cy.get('.ant-notification-notice-description').should('have.text', 'Incorrect email or password')
});

//============LOGIN UNSUCCESSFULLY WITH DO NOT INPUT DATA FOR EMAIL ON IPHONE 6 SCREEN=============
Given(/^I navigate to Smartos website with iphone 6 screen$/, function () {
  cy.viewport('iphone-6')
});

Given(/^I navigate to Smartos login page$/, function () {
  cy.visit(url)
});

When(/^I input data into Password filed \"([^\"]*)\"$/, function (password) {
  cy.get('#password').click().type(password)
});

And(/^I click on Login button$/, function () {
  cy.get('.login-form-button').click()
});

Then(/^I verify notice message display for case blank email with iphone 6 screen$/, function () {
  cy.get('.ant-form-explain').should('have.text', 'Please input your email!')
  // cy.get(':nth-child(2) > .ant-col > .ant-form-item-control > .ant-form-explain')
});

//============LOGIN UNSUCCESSFULLY WITH DO NOT INPUT DATA FOR PASSWORD ON IPHONE 6 SCREEN=============
Given(/^I navigate to Smartos website with iphone 6 screen$/, function () {
  cy.viewport('iphone-6')
});

Given(/^I navigate to Smartos login page$/, function () {
  cy.visit(url)
});

When(/^I input data into Email field \"([^\"]*)\"$/, function (email) {
  cy.get('#email').click().type(email)
});

And(/^I click on Login button$/, function () {
  cy.get('.login-form-button').click()
});

Then(/^I verify notice message display for case blank password with iphone 6 screen$/, function () {
  cy.get(':nth-child(2) > .ant-col > .ant-form-item-control > .ant-form-explain').should('have.text', 'Please input your password!')
});

//============LOGIN UNSUCCESSFULLY WITH DO NOT INPUT DATA FOR EMAIL AND PASSWORD ON IPHONE 6 SCREEN=============
Given(/^I navigate to Smartos website with iphone 6 screen$/, function () {
  cy.viewport('iphone-6')
});

Given(/^I navigate to Smartos login page$/, function () {
  cy.visit(url)
});

When(/^I click on Login button$/, function () {
  cy.get('.login-form-button').click()
});

Then(/^I verify notice message display below email for case do not input email with iphone 6 screen$/, function () {
  cy.get(':nth-child(1) > .ant-col > .ant-form-item-control > .ant-form-explain').should('have.text', 'Please input your email!');
});

And(/^I verify notice message display below password for case do not input password with iphone 6 screen$/, function () {
  cy.get(':nth-child(2) > .ant-col > .ant-form-item-control > .ant-form-explain').should('have.text', 'Please input your password!');
});

//===========LOGIN UNSUCCESSFULLY WITH INPUT EMAIL ACCOUNT DOES NOT REGISTER BEFORE ON IPHONE 6 PLUS SCREEN============
Given(/^I navigate to Smartos website with iphone 6 plus screen$/, function () {
  cy.viewport('iphone-6+')
});

Given(/^I navigate to Smartos login page$/, function () {
  cy.visit(url)
});

When(/^I input Email account does not register before as \"([^\"]*)\" and \"([^\"]*)\"$/, function (email, password) {
  cy.get('#email').click().type(email)
  cy.get('#password').click().type(password)
});

And(/^I click on Login button$/, function () {
  cy.get('.login-form-button').click()
});

Then(/^I verify notice message display for case account does not register before with iphone 6 plus screen$/, function () {
  cy.get('.ant-notification-notice-description').should('have.text', 'User not found')
});

//============LOGIN UNSSUCCESSFULLY WITH INPUT PASSWORD INVALID ON IPHONE 6 PLUS SCREEN=============
Given(/^I navigate to Smartos website with iphone 6 plus screen$/, function () {
  cy.viewport('iphone-6+')
});

Given(/^I navigate to Smartos login page$/, function () {
  cy.visit(url)
});

When(/^I input Email valid as \"([^\"]*)\" but Password invalid as \"([^\"]*)\"$/, function (email, password) {
  cy.get('#email').click().type(email)
  cy.get('#password').click().type(password)
});

And(/^I click on Login button$/, function () {
  cy.get('.login-form-button').click()
});

Then(/^I verify notice message display for case password invalid with iphone 6 plus screen$/, function () {
  cy.get('.ant-notification-notice-description').should('have.text', 'Incorrect email or password')
});

//============LOGIN UNSUCCESSFULLY WITH DO NOT INPUT DATA FOR EMAIL ON IPHONE 6 PLUS SCREEN=============
Given(/^I navigate to Smartos website with iphone 6 plus screen$/, function () {
  cy.viewport('iphone-6+')
});

Given(/^I navigate to Smartos login page$/, function () {
  cy.visit(url)
});

When(/^I input data into Password filed \"([^\"]*)\"$/, function (password) {
  cy.get('#password').click().type(password)
});

And(/^I click on Login button$/, function () {
  cy.get('.login-form-button').click()
});

Then(/^I verify notice message display for case blank email with iphone 6 plus screen$/, function () {
  cy.get('.ant-form-explain').should('have.text', 'Please input your email!')
  // cy.get(':nth-child(2) > .ant-col > .ant-form-item-control > .ant-form-explain')
});

//============LOGIN UNSUCCESSFULLY WITH DO NOT INPUT DATA FOR PASSWORD ON IPHONE 6 PLUS SCREEN=============
Given(/^I navigate to Smartos website with iphone 6 plus screen$/, function () {
  cy.viewport('iphone-6+')
});

Given(/^I navigate to Smartos login page$/, function () {
  cy.visit(url)
});

When(/^I input data into Email field \"([^\"]*)\"$/, function (email) {
  cy.get('#email').click().type(email)
});

And(/^I click on Login button$/, function () {
  cy.get('.login-form-button').click()
});

Then(/^I verify notice message display for case blank password with iphone 6 plus screen$/, function () {
  cy.get(':nth-child(2) > .ant-col > .ant-form-item-control > .ant-form-explain').should('have.text', 'Please input your password!')
});

//============LOGIN UNSUCCESSFULLY WITH DO NOT INPUT DATA FOR EMAIL AND PASSWORD ON IPHONE 6 PLUS SCREEN=============
Given(/^I navigate to Smartos website with iphone 6 plus screen$/, function () {
  cy.viewport('iphone-6+')
});

Given(/^I navigate to Smartos login page$/, function () {
  cy.visit(url)
});

When(/^I click on Login button$/, function () {
  cy.get('.login-form-button').click()
});

Then(/^I verify notice message display below email for case do not input email with iphone 6 plus screen$/, function () {
  cy.get(':nth-child(1) > .ant-col > .ant-form-item-control > .ant-form-explain').should('have.text', 'Please input your email!');
});

And(/^I verify notice message display below password for case do not input password with iphone 6 plus screen$/, function () {
  cy.get(':nth-child(2) > .ant-col > .ant-form-item-control > .ant-form-explain').should('have.text', 'Please input your password!');
});
