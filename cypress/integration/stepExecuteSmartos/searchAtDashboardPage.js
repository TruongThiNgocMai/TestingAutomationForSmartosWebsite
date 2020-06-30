import { Given } from "cypress-cucumber-preprocessor/steps"

/// <reference types="cypress" />

//=====================SEARCH INFORMATION SUCCESSFULLY VIA CHOOSE SERVICES======================
Given(/^I login successfully to Smartos Page$/, function () {
    cy.LoginFunction('admin@enouvo.com', 'enouvo123')
});

When(/^I choose Services have booking before (.+)$/, function (servicebookingbefore) {
    cy.xpath('//*[@id="roomTypeId"]/div/div').click().type(servicebookingbefore).type('{enter}')
    cy.wait(2000)
});

Then(/^I verify I stay at Dashboard Page$/, function () {
    cy.get('h4').should('have.text', 'Dashboard')
    // cy.get('.sc-gxMtzJ > .ant-row').should('be.visible')
    // cy.get(':nth-child(2) > a > .sc-jtRfpW').should('be.visible')
    // cy.get(':nth-child(3) > a > .sc-jtRfpW').should('be.visible')
    // cy.get(':nth-child(4) > a > .sc-jtRfpW').should('be.visible')
});

Then(/^I verify user search information via Services successfully with (.+)$/, function (servicebookingbefore) {
   
});

Then(/^I verify user search information is empty$/, function () {
    cy.get('.ant-table-placeholder').should('be.visible')
    cy.get('.ant-empty-image > svg').should('be.visible')
    cy.get('.ant-empty-description').should('be.visible').should('have.text', 'No Data')
});

And(/^I click on Filter button$/, function () {
    cy.get('.ant-row > :nth-child(1) > .ant-btn').should('be.visible').click()
    cy.wait(2000)
});

And(/^I click on Clear button$/, function () {
    cy.get('.ant-row > :nth-child(2) > .ant-btn').should('be.visible').click({ force: true })
    cy.wait(2000)
});

And(/^I choose Services have not booking before (.+)$/, function (servicenotbookingbefore) {
    cy.xpath('//*[@id="roomTypeId"]/div/div').click().type(servicenotbookingbefore).type('{enter}')
    cy.wait(2000)
});