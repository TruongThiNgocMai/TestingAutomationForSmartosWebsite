import { Given } from "cypress-cucumber-preprocessor/steps"

/// <reference types="cypress" />

//=====================CREATE INCOME UNSUCCESSFULLY WITH DO NOT INPUT DATA FOR ALL OF REQUIRED FIELDS======================
Given(/^I login successfully to Smartos Page$/, function () {
    cy.LoginFunction('admin@enouvo.com', 'enouvo123')
});

When(/^I click on Income button$/, function () {
    cy.get('.rightHeader > :nth-child(1)').click()
});

And(/^I input customer name for income (.+)$/, function (customername) {
    cy.xpath("//input[@id='extraInfo.customerName']").click().type(customername)
});

And(/^I input phone for income (.+)$/, function (phone) {
    cy.xpath("//input[@id='extraInfo.phone']").click().type(phone)
});

And(/^I input email for income (.+)$/, function (email) {
    cy.xpath("//input[@id='extraInfo.email']").click().type(email)
});

And(/^I choose data for Transaction Type in income$/, function () {
    cy.get(':nth-child(4) > .ant-row > .ant-form-item-control-wrapper > .ant-form-item-control > .ant-form-item-children > .sc-cvbbAY > .ant-select-selection').click()
    cy.xpath("//li[contains(text(),'Extra Service')]").click()
});

And(/^I choose data for Booking ID in income$/, function () {
 cy.xpath("//input[@class='ant-input ant-select-search__field']").click()
 cy.xpath("//li[contains(text(),'BK-0620-7037')]").click()
});

And(/^I input fee for income (.+)$/, function (fee) {
    cy.get('#amount').type(fee)
});

And(/^I choose data for Payment Type$/, function () {
 cy.xpath("//div[contains(text(),'Payment By Cash')]").click()
});

And(/^I input note for income (.+)$/, function (note) {
    cy.get('#description').click().type(note)
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

Then(/^I go to Transaction Page$/, function () {
    cy.get('[title="Transactions"]').click()
});

Then(/^I verify user create income successfully with (.+), (.+)$/, function (customername, fee) {
    const timeIncome = Cypress.moment().format("DD MMM YYYY, HH:mm")
    cy.xpath('/html/body/div[1]/div/div/div[1]/section/section/main/div/div/div/div[2]/div[2]/div[2]/div/div/div/div/div/div[1]/div[2]/table/tbody/tr[1]')
    .within(function() {
      cy.get('td').eq(0).should('be.visible').should('have.text', 'Income')
      cy.get('td').eq(2).should('be.visible').should('contain.text', customername)
      cy.get('td').eq(6).scrollIntoView().should('be.visible').should('contain.text', fee)
      cy.get('td').eq(8).scrollIntoView().should('be.visible').should('contain.text', timeIncome)
    })
});