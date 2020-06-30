import { Given } from "cypress-cucumber-preprocessor/steps"

/// <reference types="cypress" />

//=====================CREATE BOOKING SERVICE SUCCESSFULLY======================
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
  cy.get('[title="History"]').click({ force: true })
});

Then(/^I verify Booking form is open$/, function () {
  cy.get('.modalTitle').should('be.visible')
  cy.get('.h4White > .anticon > svg').should('be.visible')
  cy.get('.content > .ant-form').should('be.visible')
});

Then(/^I verify booking successfully with (.+), (.+), (.+)$/, function (customername, email, newPackage) {
  cy.xpath('//*[@id="status"]/div/div/div[3]/div[1]/div[2]/div/div/div/div[2]/div[2]/div/div/div/div/div/div[1]/div[2]/table/tbody/tr[1]')
    .within(function () {
      cy.get('td').eq(1).should('contain.text', customername + email)
      cy.get('td').eq(2).should('contain.text', newPackage)
      //   cy.get('td').eq(3).then(($el) => {
      //   return new Cypress.Promise((resolve, reject) => {
      //     const formattedDate = Cypress.moment($el.val(), 'dd/mm/yy').format('ddd - MMM dd yyyy');
      //     if (formattedDate) {
      //       resolve(formattedDate);
      //     } else {
      //       reject(0); // handle reject;
      //     }
      //   })
      // }).should('have.text', formattedDate)
    })
})



//=====================CREATE BOOKING SERVICE SUCCESSFULLY======================
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
  cy.get('[title="History"]').click({ force: true })
});

Then(/^I verify Booking form is open$/, function () {
  cy.get('.modalTitle').should('be.visible')
  cy.get('.h4White > .anticon > svg').should('be.visible')
  cy.get('.content > .ant-form').should('be.visible')
});

Then(/^I verify booking successfully with (.+), (.+), (.+)$/, function (customername, email, newPackage) {
  cy.xpath('/html/body/div[1]/div/div/div[1]/section/section/main/div/div/div/div[3]/div[1]/div[2]/div/div/div[2]/div[2]/div/div/div/div/div/div[1]/div[2]/table/tbody/tr[1]')
    .within(function () {
      cy.get('td').eq(1).should('contain.text', customername + email)
      cy.get('td').eq(2).should('contain.text', newPackage)
      //   cy.get('td').eq(3).then(($el) => {
      //   return new Cypress.Promise((resolve, reject) => {
      //     const formattedDate = Cypress.moment($el.val(), 'dd/mm/yy').format('ddd - MMM dd yyyy');
      //     if (formattedDate) {
      //       resolve(formattedDate);
      //     } else {
      //       reject(0); // handle reject;
      //     }
      //   })
      // }).should('have.text', formattedDate)
    })
})
//=====================CREATE BOOKING SERVICE SUCCESSFULLY WITH TIME IS HOURLY======================
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
  // cy.xpath('//*[@id="roomTypeId"]/div').should('be.visible').last().click().type(services)
})

And(/^I input room as (.+)$/, function (room) {
  cy.xpath('//*[@id="roomId"]/div').should('be.visible').last().click().type(room)
})

When(/^I input package as (.+)$/, function (newpackage) {
  cy.xpath('//*[@id="packageId"]/div').should('be.visible').last().click().type(newpackage)
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

And(/^I choose valid data for Expected End Time in day$/, function () {
  cy.get('#endTime > div > .ant-calendar-picker-input').click()
  cy.xpath("//div[@class='ant-calendar-date'][contains(text(),'20')]").click()
});

And(/^I choose the data for hour start$/, function () {
  cy.get(':nth-child(1) > :nth-child(1) > .sc-fMiknA > .ant-time-picker > .ant-time-picker-input').click()
  cy.xpath("//div[@class='ant-time-picker-panel-inner']//div[1]//ul[1]//li[8]").click()
  cy.xpath("//div[@class='ant-time-picker-panel-combobox']//div[2]//ul[1]//li[11]").click()
})

And(/^I input data for note as (.+)$/, function (note) {
  cy.get('#note').click().type(note)
})

And(/^I click on Create button in booking form$/, function () {
  cy.get('.btnCreate').click()
});

And(/^I go to History Page$/, function () {
  cy.get('[title="History"]').click({ force: true })
});

Then(/^I verify Booking form is open$/, function () {
  cy.get('.modalTitle').should('be.visible')
  cy.get('.h4White > .anticon > svg').should('be.visible')
  cy.get('.content > .ant-form').should('be.visible')
});

Then(/^I verify booking successfully with (.+), (.+), (.+)$/, function (customername, email, newPackage) {
  //verify các trường trong bảng booking giống với dữ liệu được insert vô
  cy.xpath('/html/body/div[1]/div/div/div[1]/section/section/main/div/div/div/div[3]/div[1]/div[2]/div/div/div[2]/div[2]/div/div/div/div/div/div[1]/div[2]/table/tbody/tr[1]')
    .within(function () {
      cy.get('td').eq(1).should('contain.text', customername + email)
      cy.get('td').eq(2).should('contain.text', newPackage)
    });
})

//=====================CREATE BOOKING SERVICE SUCCESSFULLY WHEN USER PAY MONEY======================
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

And(/^I input paid as (.+)$/, function (paid) {
  cy.get('#amount').click().type(paid)
});

And(/^I choose data for Pay Type$/, function () {
  cy.xpath("//div[contains(text(),'Payment By Cash')]").click()
});

And(/^I click on Create button in booking form$/, function () {
  cy.get('.btnCreate').click()
});

And(/^I go to History Page$/, function () {
  cy.get('[title="History"]').click({ force: true })
});

Then(/^I verify Booking form is open$/, function () {
  cy.get('.modalTitle').should('be.visible')
  cy.get('.h4White > .anticon > svg').should('be.visible')
  cy.get('.content > .ant-form').should('be.visible')
});

Then(/^I verify booking successfully with (.+), (.+), (.+)$/, function (customername, email, newPackage) {
  //verify các trường trong bảng booking giống với dữ liệu được insert vô
  cy.xpath('/html/body/div[1]/div/div/div[1]/section/section/main/div/div/div/div[3]/div[1]/div[2]/div/div/div[2]/div[2]/div/div/div/div/div/div[1]/div[2]/table/tbody/tr[1]')
    .within(function () {
      cy.get('td').eq(1).should('contain.text', customername + email)
      cy.get('td').eq(2).should('contain.text', newPackage)
    });
})

