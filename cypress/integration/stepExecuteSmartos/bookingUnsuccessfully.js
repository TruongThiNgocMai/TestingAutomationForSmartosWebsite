import { Given } from "cypress-cucumber-preprocessor/steps"

/// <reference types="cypress" />

//=====================BOOKING UNSUCCESSFULLY WITH DO NOT INPUT DATA FOR ALL OF REQUIRED FIELDS======================
Given(/^I login successfully to Smartos Page$/, function () {
  cy.LoginFunction('admin@enouvo.com', 'enouvo123')
});

When(/^I click on Booking button$/, function () {
  cy.get('.rightHeader > :nth-child(3)').click()
});

And(/^I click on Create button in booking form$/, function () {
  cy.get('.btnCreate').click()
  cy.wait(2000)
});

Then(/^I verify Booking form is open$/, function () {
  cy.get('.modalTitle').should('be.visible')
  cy.get('.h4White > .anticon > svg').should('be.visible')
  cy.get('.content > .ant-form').should('be.visible')
});

Then(/^I verify notice message display below customer name$/, function () {
  cy.get('.ant-row-flex > :nth-child(1) > .ant-row > .ant-form-item-control-wrapper > .ant-form-item-control > .ant-form-explain').should('have.text', 'This field is required')
});

Then(/^I verify notice message display below email$/, function () {
  cy.get(':nth-child(2) > .ant-row > .ant-form-item-control-wrapper > .ant-form-item-control > .ant-form-explain').should('have.text', 'This field is required')
});

Then(/^I verify notice message display below gender$/, function () {
  cy.get(':nth-child(3) > .ant-row > .ant-form-item-control-wrapper > .ant-form-item-control > .ant-form-explain').should('have.text', 'This field is required')
});

////=====================BOOKING UNSUCCESSFULLY WITH INPUT DISCOUNT MORE THAN 100======================
Given(/^I login successfully to Smartos Page$/, function () {
  cy.LoginFunction('admin@enouvo.com', 'enouvo123')
});

When(/^I click on Booking button$/, function () {
    cy.get('.rightHeader > :nth-child(3)').click()
});

And(/^I input customer name as (.+)$/, function (customername) {
  cy.xpath('//*[@id="customerName"]/div/div/ul/li/div/input').click().type(customername)
})

And(/^I input email as (.+)$/, function (email) {
  cy.xpath('//*[@id="customerEmail"]/div/div/ul/li/div/input').click().type(email)
})

And(/^I choose valid data for Gender$/, function () {
  cy.get('input[value=Male]').should('be.visible').should('not.be.checked')
  cy.get('input[value=Female]').should('be.visible').should('not.be.checked').click()
  cy.get('input[value=Other]').should('be.visible').should('not.be.checked')
  });

And(/^I choose valid data for service$/, function () {
  cy.get('.ant-cascader-picker-label').should('be.visible').click()
  cy.get(':nth-child(1) > .ant-cascader-menu-item-active').should('be.visible').click()
  cy.get('[title="Cowork"]').should('be.visible').click()
  // cy.xpath("//span[@class='ant-cascader-picker-label']").click()
  // cy.xpath("//li[@class='ant-cascader-menu-item ant-cascader-menu-item-expand ant-cascader-menu-item-active']").click()
  // cy.xpath("//li[contains(text(),'Cowork')]").click()
})

And(/^I input data for room as (.+)$/, function (room) {
  cy.xpath('//*[@id="roomId"]/div').should('be.visible').last().click().type(room)
})

And(/^I input data for package as (.+)$/, function (newPackage) {
  cy.xpath('/html/body/div[2]/div/div[2]/div/div/div/div/div/div[1]/form/div/div[2]/div/div[3]/div/div/div[2]/div/span/div/div').click().type(newPackage)
})

And(/^I input discount as (.+)$/, function (discount) {
  cy.get('#discountValue').click().type(discount)
})

And(/^I input data for currency$/, function () {
  cy.xpath("//div[contains(text(),'%')]").click()
})

And(/^I choose valid data for Start Time$/, function () {
  cy.get('#startTime > div > .ant-calendar-picker-input').click()
  cy.xpath("//div[@class='ant-calendar-date'][contains(text(),'20')]").click()
});

And(/^I choose valid data for Expected End Time$/, function () {
  cy.get('#endTime > div > .ant-calendar-picker-input').click()
  cy.xpath("//div[@class='ant-calendar-date'][contains(text(),'30')]").click()
});

And(/^I input data for  (.+)$/, function (note) {
  cy.get('#note').click().type(note)
})

And(/^I click on Create button in booking form$/, function () {
  cy.get('.btnCreate').click()
  cy.wait(3000)
});

Then(/^I verify Booking form is open$/, function () {
  cy.get('.modalTitle').should('be.visible')
  cy.get('.h4White > .anticon > svg').should('be.visible')
  cy.get('.content > .ant-form').should('be.visible')
});

Then(/^I verify notice message about length display below discount$/, function () {
  cy.get('.ant-notification-notice-description').should('have.text', 'cannot read discount value of percent, Please input value range 0 - 100')
})

////=====================BOOKING UNSUCCESSFULLY WHEN USER CHOOSE PAY MONEY BUT DO NOT INPUT MONEY TO PAID======================
Given(/^I login successfully to Smartos Page$/, function () {
  cy.LoginFunction('admin@enouvo.com', 'enouvo123')
});

When(/^I click on Booking button$/, function () {
    cy.get('.rightHeader > :nth-child(3)').click()
  });

And(/^I input customer name as (.+)$/, function (customername) {
  cy.xpath('//*[@id="customerName"]/div/div/ul/li/div/input').click().type(customername)
})

And(/^I input email as (.+)$/, function (email) {
  cy.xpath('//*[@id="customerEmail"]/div/div/ul/li/div/input').click().type(email)
})

And(/^I choose valid data for Gender$/, function () {
  cy.get('input[value=Male]').should('be.visible').should('not.be.checked')
  cy.get('input[value=Female]').should('be.visible').should('not.be.checked').click()
  cy.get('input[value=Other]').should('be.visible').should('not.be.checked')
  });

And(/^I choose valid data for Service$/, function () {
  cy.get('.ant-cascader-picker-label').should('be.visible').click()
  cy.get(':nth-child(1) > .ant-cascader-menu-item-active').should('be.visible').click()
  cy.get('[title="Cowork"]').should('be.visible').click()
})

And(/^I input data for room as (.+)$/, function (room) {
  cy.xpath('//*[@id="roomId"]/div').should('be.visible').last().click().type(room)
})

And(/^I input package as (.+)$/, function (newpackage) {
  cy.xpath('//*[@id="packageId"]/div').should('be.visible').last().click().type(newpackage)
})

And(/^I input discount as (.+)$/, function (discount) {
  cy.get('#discountValue').click().type(discount)
})

And(/^I input data for currency as VND$/, function () {
  cy.xpath("/html/body/div[2]/div/div[2]/div/div/div/div/div/div[1]/form/div/div[2]/div/div[5]/div/div/div[2]/div/span/div[1]/div/div/div[2]").click()
  cy.xpath("//li[contains(text(),'VND')]").click()
})

And(/^I choose valid data for Start Time$/, function () {
  cy.get('#startTime > div > .ant-calendar-picker-input').click()
  cy.xpath("//div[@class='ant-calendar-date'][contains(text(),'20')]").click()
});

And(/^I choose valid data for Expected End Time$/, function () {
  cy.get('#endTime > div > .ant-calendar-picker-input').click()
  cy.xpath("//div[@class='ant-calendar-date'][contains(text(),'30')]").click()
});

And(/^I input data for (.+)$/, function (note) {
  cy.get('#note').click().type(note)
})

And(/^I click on Mark as confirmed booking checkbox$/, function () {
  cy.get('#isConfirmed').check().should('be.checked')
});

And(/^I click on Pay Booking checkbox$/, function () {
  cy.get('#isPayBooking').check().should('be.checked')
});

And(/^I do not input money for paid$/, function (paid) {
  cy.get('#amount').click()
});

And(/^I choose data for Pay Type$/, function () {
  cy.xpath("//div[contains(text(),'Payment By Cash')]").click()
});

And(/^I click on Create button in booking form$/, function () {
  cy.get('.btnCreate').click()
});

And(/^I go to History Page$/, function () {
  cy.get('[title="History"]').click({force: true})
});

Then(/^I verify Booking form is open$/, function () {
  cy.get('.modalTitle').should('be.visible')
  cy.get('.h4White > .anticon > svg').should('be.visible')
  cy.get('.content > .ant-form').should('be.visible')
});

Then(/^I verify booking successfully with notice message below paid$/, function () {
  cy.get('.ant-form-explain').should('have.text', 'This field is required Price must be smaller than or equal Est. Fee')
  })

////=====================BOOKING UNSUCCESSFULLY WHEN USER INPUT INCCRECT FORMAT FOR EMAIL======================
Given(/^I login successfully to Smartos Page$/, function () {
  cy.LoginFunction('admin@enouvo.com', 'enouvo123')
});

When(/^I click on Booking button$/, function () {
    cy.get('.rightHeader > :nth-child(3)').click()
  });

And(/^I input customer name as (.+)$/, function (customername) {
  cy.xpath('//*[@id="customerName"]/div/div/ul/li/div/input').click().type(customername)
})

And(/^I input email as (.+)$/, function (email) {
  cy.xpath('//*[@id="customerEmail"]/div/div/ul/li/div/input').click().type(email)
})

And(/^I choose valid data for Gender$/, function () {
  cy.get('input[value=Male]').should('be.visible').should('not.be.checked')
  cy.get('input[value=Female]').should('be.visible').should('not.be.checked').click()
  cy.get('input[value=Other]').should('be.visible').should('not.be.checked')
  });

And(/^I choose valid data for Service$/, function () {
  cy.get('.ant-cascader-picker-label').should('be.visible').click()
  cy.get(':nth-child(1) > .ant-cascader-menu-item-active').should('be.visible').click()
  cy.get('[title="Cowork"]').should('be.visible').click()
})

And(/^I input data for room as (.+)$/, function (room) {
  cy.xpath('//*[@id="roomId"]/div').should('be.visible').last().click().type(room)
})

And(/^I input package as (.+)$/, function (newpackage) {
  cy.xpath('//*[@id="packageId"]/div').should('be.visible').last().click().type(newpackage)
})

And(/^I input discount as (.+)$/, function (discount) {
  cy.get('#discountValue').click().type(discount)
})

And(/^I input data for currency as VND$/, function () {
  cy.xpath("/html/body/div[2]/div/div[2]/div/div/div/div/div/div[1]/form/div/div[2]/div/div[5]/div/div/div[2]/div/span/div[1]/div/div/div[2]").click()
  cy.xpath("//li[contains(text(),'VND')]").click()
})

And(/^I choose valid data for Start Time$/, function () {
  cy.get('#startTime > div > .ant-calendar-picker-input').click()
  cy.xpath("//div[@class='ant-calendar-date'][contains(text(),'20')]").click()
});

And(/^I choose valid data for Expected End Time$/, function () {
  cy.get('#endTime > div > .ant-calendar-picker-input').click()
  cy.xpath("//div[@class='ant-calendar-date'][contains(text(),'30')]").click()
});

And(/^I input data for (.+)$/, function (note) {
  cy.get('#note').click().type(note)
})

And(/^I click on Create button in booking form$/, function () {
  cy.get('.btnCreate').click()
});

And(/^I go to History Page$/, function () {
  cy.get('[title="History"]').click({force: true})
});

Then(/^I verify Booking form is open$/, function () {
  cy.get('.modalTitle').should('be.visible')
  cy.get('.h4White > .anticon > svg').should('be.visible')
  cy.get('.content > .ant-form').should('be.visible')
});

Then(/^I verify booking successfully with notice message below email with incorrect formart$/, function () {
  cy.get(':nth-child(2) > .ant-row > .ant-form-item-control-wrapper > .ant-form-item-control > .ant-form-explain').should('have.text', 'The input is not valid E-mail!')
  })

//=====================CREATE BOOKING SERVICE UNSUCCESSFULLY WITH USING OLD EMAIL TO BOOKING======================
Given(/^I login successfully to Smartos Page$/, function () {
  cy.LoginFunction('admin@enouvo.com', 'enouvo123')
});

When(/^I click on Booking button$/, function () {
    cy.get('.rightHeader > :nth-child(3)').click()  
});

And(/^I input customer name as (.+)$/, function (customername) {
  cy.xpath('//*[@id="customerName"]/div/div/ul/li/div/input').click().type(customername)
})

And(/^I input email as (.+)$/, function (email) {
  cy.xpath('//*[@id="customerEmail"]/div/div/ul/li/div/input').click().type(email)
})

And(/^I choose valid data for Gender$/, function () {
  cy.get('input[value=Male]').should('be.visible').should('not.be.checked')
  cy.get('input[value=Female]').should('be.visible').should('not.be.checked').click()
  cy.get('input[value=Other]').should('be.visible').should('not.be.checked')
  });

And(/^I choose valid data for service$/, function () {
  cy.get('.ant-cascader-picker-label').should('be.visible').click()
  cy.get(':nth-child(1) > .ant-cascader-menu-item-active').should('be.visible').click()
  cy.get('[title="Cowork"]').should('be.visible').click()
})

And(/^I input data for room as (.+)$/, function (room) {
  cy.xpath('//*[@id="roomId"]/div').should('be.visible').last().click().type(room)
  // cy.xpath("//div[@id='roomId']//div[contains(@class,'ant-select-selection-selected-value')][contains(text(),'L1_STU601')]").click()
  // cy.xpath("//li[contains(text(),'L2_STU203')]").click()
})

And(/^I input data for package as (.+)$/, function (newPackage) {
  cy.xpath('/html/body/div[2]/div/div[2]/div/div/div/div/div/div[1]/form/div/div[2]/div/div[3]/div/div/div[2]/div/span/div/div').click().type(newPackage)
})

And(/^I input discount as (.+)$/, function (discount) {
  cy.get('#discountValue').click().type(discount)
})

And(/^I input data for currency$/, function () {
  cy.xpath("//div[contains(text(),'%')]").click()
})

And(/^I choose valid data for Start Time$/, function () {
  cy.get('#startTime > div > .ant-calendar-picker-input').click()
  cy.xpath("//div[@class='ant-calendar-date'][contains(text(),'20')]").click()
});

And(/^I choose valid data for Expected End Time$/, function () {
  cy.get('#endTime > div > .ant-calendar-picker-input').click()
  cy.xpath("//div[@class='ant-calendar-date'][contains(text(),'30')]").click({ multiple: true })
});

And(/^I input data for  (.+)$/, function (note) {
  cy.get('#note').click().type(note)
})

And(/^I click on Create button in booking form$/, function () {
  cy.get('.btnCreate').click()
  cy.wait(3000)
});

And(/^I go to History Page$/, function () {
  cy.get('[title="History"]').click({force: true})
});

Then(/^I verify Booking form is open$/, function () {
  cy.get('.modalTitle').should('be.visible')
  cy.get('.h4White > .anticon > svg').should('be.visible')
  cy.get('.content > .ant-form').should('be.visible')
});

Then(/^I verify booking unsuccessfully with notice message for case using old email to booking$/, function (customername, email, newPackage) {
  cy.get('.ant-notification-notice-description').should('have.text', 'Email has been used')
})