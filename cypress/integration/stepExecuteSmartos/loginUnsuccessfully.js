import { Given } from "cypress-cucumber-preprocessor/steps"

/// <reference types="cypress" />
 
//---URL FOR SMARTOS WEBSITE---
const url = 'https://csm-global-admin-web-staging.enouvo.com/'

//===========LOGIN UNSUCCESSFULLY WITH INPUT EMAIL ACCOUNT DOES NOT REGISTER BEFORE============
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

Then(/^I verify notice message display for case account does not register before$/, function () {
  cy.get('.ant-notification-notice-description').should('have.text', 'User not found')
  });

//============LOGIN UNSSUCCESSFULLY WITH INPUT PASSWORD INVALID=============
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

Then(/^I verify notice message display for case password invalid$/, function () {
  cy.get('.ant-notification-notice-description').should('have.text', 'Incorrect email or password')
  });

//============LOGIN UNSUCCESSFULLY WITH DO NOT INPUT DATA FOR EMAIL=============

Given(/^I navigate to Smartos login page$/, function () {
    cy.visit(url)
  });

When(/^I input data into Password filed \"([^\"]*)\"$/, function (password) {
    cy.get('#password').click().type(password)
  });

And(/^I click on Login button$/, function () {
    cy.get('.login-form-button').click()
  });

Then(/^I verify notice message display for case blank email$/, function () {
    cy.get('.ant-form-explain').should('have.text', 'Please input your email!')
    // cy.get(':nth-child(2) > .ant-col > .ant-form-item-control > .ant-form-explain')
  });

//============LOGIN UNSUCCESSFULLY WITH DO NOT INPUT DATA FOR PASSWORD=============
Given(/^I navigate to Smartos login page$/, function () {
    cy.visit(url)
  });

When(/^I input data into Email field \"([^\"]*)\"$/, function (email) {
    cy.get('#email').click().type(email)
  });

And(/^I click on Login button$/, function () {
    cy.get('.login-form-button').click()
  });

Then(/^I verify notice message display for case blank password$/, function () {
    cy.get(':nth-child(2) > .ant-col > .ant-form-item-control > .ant-form-explain').should('have.text', 'Please input your password!')
  });

//============LOGIN UNSUCCESSFULLY WITH DO NOT INPUT DATA FOR EMAIL AND PASSWORD=============
Given(/^I navigate to Smartos login page$/, function () {
    cy.visit(url)
  });

When(/^I click on Login button$/, function () {
    cy.get('.login-form-button').click()
  });

Then(/^I verify notice message display below email for case do not input email$/, function () {
    cy.get(':nth-child(1) > .ant-col > .ant-form-item-control > .ant-form-explain').should('have.text', 'Please input your email!');
  });

And(/^I verify notice message display below password for case do not input password$/, function () {
    cy.get(':nth-child(2) > .ant-col > .ant-form-item-control > .ant-form-explain').should('have.text', 'Please input your password!');
  });




