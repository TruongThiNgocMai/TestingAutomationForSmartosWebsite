import { Given } from "cypress-cucumber-preprocessor/steps"

/// <reference types="cypress" />

//=====================INCOME UNSUCCESSFULLY WITH DO NOT INPUT DATA FOR ALL OF REQUIRED FIELDS======================
Given(/^I login successfully to Smartos Page$/, function () {
  cy.LoginFunction('admin@enouvo.com', 'enouvo123')
});

When(/^I click on Income button$/, function () {
  cy.get('.rightHeader > :nth-child(1)').click()
});

And(/^I click on Create button in income form$/, function () {
    cy.get('.sc-eNQAEJ > .ant-btn-primary').click()
    cy.wait(2000)
});

Then(/^I verify Income form is open$/, function () {
    cy.get('.modalTitle').should('be.visible')
    cy.get('.h4White > .anticon > svg').should('be.visible')
    cy.get('.content > .ant-form').should('be.visible')
});

Then(/^I verify notice message display below Transaction Type$/, function () {
    cy.get(':nth-child(4) > .ant-row > .ant-form-item-control-wrapper > .ant-form-item-control > .ant-form-explain').should('have.text', 'This field is required')
});

Then(/^I verify notice message display below Fee$/, function () {
    cy.get(':nth-child(1) > .ant-row > .ant-form-item-control-wrapper > .ant-form-item-control > .ant-form-explain').should('have.text', 'This field is required')
});

//=====================INCOME UNSUCCESSFULLY WITH INPUT INCORRECT FORMAT TO EMAIL======================
Given(/^I login successfully to Smartos Page$/, function () {
    cy.LoginFunction('admin@enouvo.com', 'enouvo123')
});
  
When(/^I click on Income button$/, function () {
    cy.get('.rightHeader > :nth-child(1)').click()
});

And(/^I input email income as (.+)$/, function (email) {
    cy.xpath("//input[@id='extraInfo.email']").type(email)
})

And(/^I choose data for Transaction Type in income$/, function () {
    cy.get(':nth-child(4) > .ant-row > .ant-form-item-control-wrapper > .ant-form-item-control > .ant-form-item-children > .sc-cvbbAY > .ant-select-selection').click()
    cy.xpath("//li[contains(text(),'Extra Service')]").click()
})

And(/^I input fee income as (.+)$/, function (fee) {
    cy.get('#amount').type(fee)
})

And(/^I click on Create button in income form$/, function () {
    cy.get('.sc-eNQAEJ > .ant-btn-primary').click()
    cy.wait(2000)
});

Then(/^I verify Income form is open$/, function () {
    cy.get('.modalTitle').should('be.visible')
    cy.get('.h4White > .anticon > svg').should('be.visible')
    cy.get('.content > .ant-form').should('be.visible')
});

Then(/^I verify notice message display below Email$/, function () {
    cy.get('.ant-form-explain').should('have.text', 'The input is not valid E-mail!')
});

//=====================INCOME UNSUCCESSFULLY WITH INPUT INCORRECT FORMAT TO EMAIL======================
Given(/^I login successfully to Smartos Page$/, function () {
    cy.LoginFunction('admin@enouvo.com', 'enouvo123')
});
  
When(/^I click on Income button$/, function () {
    cy.get('.rightHeader > :nth-child(1)').click()
});

And(/^I input phone income as (.+)$/, function (phone) {
    cy.xpath("//input[@id='extraInfo.phone']").type(phone)
})

And(/^I choose data for Transaction Type in income$/, function () {
    cy.get(':nth-child(4) > .ant-row > .ant-form-item-control-wrapper > .ant-form-item-control > .ant-form-item-children > .sc-cvbbAY > .ant-select-selection').click()
    cy.xpath("//li[contains(text(),'Extra Service')]").click()
})

And(/^I input fee income as (.+)$/, function (fee) {
    cy.get('#amount').type(fee)
})

And(/^I click on Create button in income form$/, function () {
    cy.get('.sc-eNQAEJ > .ant-btn-primary').click()
    cy.wait(2000)
});

Then(/^I verify Income form is open$/, function () {
    cy.get('.modalTitle').should('be.visible')
    cy.get('.h4White > .anticon > svg').should('be.visible')
    cy.get('.content > .ant-form').should('be.visible')
});

Then(/^I verify notice message display below Phone$/, function () {
    cy.get('.ant-form-explain').should('have.text', 'The input is not valid Phone!')
});
