import { Given } from "cypress-cucumber-preprocessor/steps"

/// <reference types="cypress" />

//=====================CREATE EXPENSE UNSUCCESSFULLY WITH DO NOT INPUT DATA FOR ALL OF REQUIRED FIELDS======================
Given(/^I login successfully to Smartos Page$/, function () {
    cy.LoginFunction('admin@enouvo.com', 'enouvo123')
});

When(/^I click on Expense button$/, function () {
    cy.get('.rightHeader > :nth-child(2)').click()
});

And(/^I input customer name for expense (.+)$/, function (customername) {
    cy.xpath("//input[@id='extraInfo.customerName']").click().type(customername)
});

And(/^I input phone for expense (.+)$/, function (phone) {
    cy.xpath("//input[@id='extraInfo.phone']").click().type(phone)
});

And(/^I input email for expense (.+)$/, function (email) {
    cy.xpath("//input[@id='extraInfo.email']").click().type(email)
});

And(/^I choose data for Transaction Type in Expense$/, function () {
    cy.get(':nth-child(4) > .ant-row > .ant-form-item-control-wrapper > .ant-form-item-control > .ant-form-item-children > .sc-cvbbAY > .ant-select-selection').click()
    cy.xpath("//li[contains(text(),'Refund')]").click()
});

And(/^I choose data for Booking ID$/, function () {
 cy.xpath("//input[@class='ant-input ant-select-search__field']").click()
 cy.xpath("//li[contains(text(),'BK-0620-BAFB')]").click()
});

And(/^I input fee for expense (.+)$/, function (fee) {
    cy.get('#amount').type(fee)
});

And(/^I choose data for Payment Type$/, function () {
 cy.xpath("//div[contains(text(),'Payment By Cash')]").click()
});

And(/^I input note for expense (.+)$/, function (note) {
    cy.get('#description').click().type(note)
});

And(/^I click on Create button in Expense form$/, function () {
    cy.get('.sc-eNQAEJ > .ant-btn-primary').click()
    cy.wait(2000)
});

Then(/^I verify Expense form is open$/, function () {
    cy.get('.modalTitle').should('be.visible')
    cy.get('.h4White > .anticon > svg').should('be.visible')
    cy.get('.content > .ant-form').should('be.visible')
});

Then(/^I go to Transaction Page$/, function () {
    cy.get('[title="Transactions"]').click()
});

Then(/^I verify user create Expense successfully with (.+), (.+)$/, function (customername, fee) {
    const timeExpense = Cypress.moment().format("DD MMM YYYY, HH:mm")
    cy.xpath('/html/body/div[1]/div/div/div[1]/section/section/main/div/div/div/div[2]/div[2]/div[2]/div/div/div/div/div/div[1]/div[2]/table/tbody/tr[1]')
    .within(function() {
      cy.get('td').eq(0).should('be.visible').should('have.text', 'Expense')
      cy.get('td').eq(2).should('be.visible').should('contain.text', customername)
      cy.get('td').eq(6).scrollIntoView().should('be.visible').should('contain.text', fee)
      cy.get('td').eq(8).scrollIntoView().should('be.visible').should('contain.text', timeExpense)
    })
});