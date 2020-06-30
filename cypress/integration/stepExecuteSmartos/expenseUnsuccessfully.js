import { Given } from "cypress-cucumber-preprocessor/steps"

/// <reference types="cypress" />

//=====================EXPENSE UNSUCCESSFULLY WITH DO NOT INPUT DATA FOR ALL OF REQUIRED FIELDS======================
Given(/^I login successfully to Smartos Page$/, function () {
    cy.LoginFunction('admin@enouvo.com', 'enouvo123')
});

When(/^I click on Expense button$/, function () {
    cy.get('.rightHeader > :nth-child(2)').click()
});

And(/^I click on Create button in expense form$/, function () {
    cy.get('.sc-eNQAEJ > .ant-btn-primary').click()
    cy.wait(2000)
});

Then(/I verify Expense form is open$/, function () {
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

//=====================EXPENSE UNSUCCESSFULLY WITH INPUT INCORRECT FORMAT TO EMAIL======================
Given(/^I login successfully to Smartos Page$/, function () {
    cy.LoginFunction('admin@enouvo.com', 'enouvo123')
});

When(/^I click on Expense button$/, function () {
    cy.get('.rightHeader > :nth-child(2)').click()
});

And(/^I input email expense as (.+)$/, function (email) {
    cy.xpath("//input[@id='extraInfo.email']").type(email)
})

And(/^I choose data for Transaction Type in expense$/, function () {
    cy.get(':nth-child(4) > .ant-row > .ant-form-item-control-wrapper > .ant-form-item-control > .ant-form-item-children > .sc-cvbbAY > .ant-select-selection').click()
    cy.xpath("//li[contains(text(),'Refund')]").click()
})

And(/^I input fee expense as (.+)$/, function (fee) {
    cy.get('#amount').type(fee)
})

And(/^I click on Create button in expense form$/, function () {
    cy.get('.sc-eNQAEJ > .ant-btn-primary').click()
    cy.wait(2000)
});

Then(/^I verify Expense form is open$/, function () {
    cy.get('.modalTitle').should('be.visible')
    cy.get('.h4White > .anticon > svg').should('be.visible')
    cy.get('.content > .ant-form').should('be.visible')
});

Then(/^I verify notice message display below Email in expense$/, function () {
    cy.get('.ant-form-explain').should('have.text', 'The input is not valid E-mail!')
});

//=====================EXPENSE UNSUCCESSFULLY WITH INPUT INCORRECT FORMAT TO PHONE======================
Given(/^I login successfully to Smartos Page$/, function () {
    cy.LoginFunction('admin@enouvo.com', 'enouvo123')
});

When(/^I click on Expense button$/, function () {
    cy.get('.rightHeader > :nth-child(2)').click()
});

And(/^I input phone expense as (.+)$/, function (phone) {
    cy.xpath("//input[@id='extraInfo.phone']").type(phone)
})

And(/^I choose data for Transaction Type in expense$/, function () {
    cy.get(':nth-child(4) > .ant-row > .ant-form-item-control-wrapper > .ant-form-item-control > .ant-form-item-children > .sc-cvbbAY > .ant-select-selection').click()
    cy.xpath("//li[contains(text(),'Refund')]").click()
})

And(/^I input fee expense as (.+)$/, function (fee) {
    cy.get('#amount').type(fee)
})

And(/^I click on Create button in expense form$/, function () {
    cy.get('.sc-eNQAEJ > .ant-btn-primary').click()
    cy.wait(2000)
});

Then(/^I verify Expense form is open$/, function () {
    cy.get('.modalTitle').should('be.visible')
    cy.get('.h4White > .anticon > svg').should('be.visible')
    cy.get('.content > .ant-form').should('be.visible')
});

Then(/^I verify notice message display below Phone in expense$/, function () {
    cy.get(':nth-child(2) > .ant-row > .ant-form-item-control-wrapper > .ant-form-item-control > .ant-form-explain').should('have.text', 'The input is not valid Phone!')
});
