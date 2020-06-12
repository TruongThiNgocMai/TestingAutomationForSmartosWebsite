import { Given } from "cypress-cucumber-preprocessor/steps"
 
//---URL FOR SMARTOS WEBSITE---
const url = 'https://csm-global-admin-web-staging.enouvo.com/'

const demoAccount = {
    account: {
        displayName: 'Enouvo Admin'
    }
}

//===========LOGIN UNSUCCESSFULLY WITH INPUT EMAIL AND PASSWORD ARE VALID============
Given ('I navigate to Smartos login page', () => {
    cy.visit(url)
})

When ('I input valid data to', (datatable) => {
    datatable.hashes().forEach(element => {
        cy.get('#email').click().type(element.email)
        cy.get('#password').click().type(element.password)
    })
    
})
When ('I click on Login button', () => {
    cy.get('.login-form-button').click()
    cy.wait(3000)
})
Then ('I verify login successfully', () => {
    cy.get('.logo > img').should('be.visible')
      .get('.ant-menu-item-selected > .anticon').should('be.visible')
      .get('[title="Notifications"]').should('be.visible')
      .get('[title="Reservations"] > .anticon').should('be.visible')
      .get('[title="Customers"] > .anticon').should('be.visible')
      .get('[title="History"]').should('be.visible')
      .get('[title="Transactions"] > .anticon').should('be.visible')
      .get('[title="Reports"] > .anticon').should('be.visible')
      .get('[title="Config"] > .anticon').should('be.visible')
      .get('strong').should('have.text', demoAccount.account.displayName) //"Enouvo Admin"
      cy.wait(3000)
})





//=====================BOOKING SUCCESSFULLY======================
When ('I click on Booking button', () => {
    cy.get('.rightHeader > :nth-child(3)').click()
    cy.wait(3000)
})
When ('I input data for', (datatable) => {
    datatable.hashes().forEach(element => {
        cy.xpath("//div[@id='customerName']//div[1]//ul[1]//li[1]//div[1]//input[1]").type(element.cutomerName)
        cy.xpath('//*[@id="customerEmail"]/div/div/ul/li/div/input').click().type(element.email)
        cy.xpath('//*[@id="roomTypeId"]/div/div').click().type(element.services)
        cy.xpath('//*[@id="roomId"]/div/div').click().type(element.room)
        cy.xpath('//*[@id="packageId"]/div/div').click().type(element.package)
        cy.get('#discountValue').click().type(element.discount)
        cy.get('#note').click().type(element.note)
    })
    
})
When ('I choose valid data for Gender', () => {
    cy.get(':nth-child(2) > .ant-radio > .ant-radio-inner').click()
})
When ('I choose valid data for Start Time', () => {
    cy.xpath('/html/body/div[5]/div/div/div/div/div[2]/div[2]/table/tbody/tr[2]/td[3]/div').click()
})
When ('I choose valid data for Expected End Time', () => {
    cy.xpath('/html/body/div[4]/div/div/div/div/div[2]/div[2]/table/tbody/tr[4]/td[1]/div').click()
})
When ('I click on Create button', () => {
    cy.get('.btnCreate').click()
})
When ('I verify booking successfully', () => {

})