import { Given } from "cypress-cucumber-preprocessor/steps"

/// <reference types="cypress" />

//=====================CHECKIN SUCCESSFULLY======================

Given(/^I login successfully to Smartos Page$/, function () {
    cy.LoginFunction('admin@enouvo.com', 'enouvo123')
})

When(/^I choose the information of customer to checkin are (.+), (.+), (.+), (.+), (.+)$/, function (bookingid, customername, services, room, packagetype) {
    cy.xpath('/html/body/div[1]/div/div/div[1]/section/section/main/div/div/div[3]/div/div[3]/div/div/div/div/div/div/div[1]/div[2]/table/tbody/tr[1]')
      .within(function() {  
        cy.get('td').eq(0).should('contain.text', bookingid)
        cy.get('td').eq(1).should('contain.text', customername)
        cy.get('td').eq(2).should('contain.text', services)
        cy.get('td').eq(3).should('contain.text', room)
        cy.get('td').eq(4).should('contain.text', packagetype)
    })
})

And(/^I click on checkin icon in the table$/, function () {
    cy.xpath('//tr[1]//td[1]//div[1]//div[1]//button[1]').click()
})

And(/^I click on checkin button in the checkin form$/, function () {
    cy.get('.modal-footer > .ant-btn-primary').click()
})

And(/^I go to Checked in Tab$/, function () {
    cy.xpath("//div[@class='ant-tabs-tab-active ant-tabs-tab']").click()
})

Then(/^I verify I stay at Dashboard Page$/, function () {
    cy.get('h4').should('have.text', 'Dashboard')
    // cy.get(':nth-child(1) > a > .sc-jtRfpW').should('be.visible')
    // cy.get(':nth-child(2) > a > .sc-jtRfpW').should('be.visible')
    // cy.get(':nth-child(3) > a > .sc-jtRfpW').should('be.visible')
    // cy.get(':nth-child(4) > a > .sc-jtRfpW').should('be.visible')
})

Then(/^I verify I checkin successfully with (.+), (.+), (.+), (.+), (.+)$/, function (bookingid, customername, services, room, packagetype) {
    const checkinTime = Cypress.moment().format("HH:MMA" + " now")
    cy.xpath('//*[@id="status"]/div/div[3]/div/div[3]/div/div/div/div/div/div/div[1]/div[2]/table/tbody/tr[1]')
      .within(function() {
        cy.get('td').eq(0).should('contain.text', bookingid)
        cy.get('td').eq(1).should('contain.text', customername)
        cy.get('td').eq(2).should('contain.text', services)
        cy.get('td').eq(3).should('contain.text', room)
        cy.get('td').eq(4).should('contain.text', packagetype)
        cy.get('td').eq(8).scrollIntoView().should('be.visible').should('contain.text', checkinTime)
    })
})
