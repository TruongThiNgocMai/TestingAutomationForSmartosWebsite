import { Given } from "cypress-cucumber-preprocessor/steps";
 
//============URL OF SMARTOS WEBSITE==============
const url = 'https://csm-global-admin-web-staging.enouvo.com/'

const demoAccount = {
    account: {
        displayName: 'Enouvo Admin'
    }
}

//===========LOGIN UNSUCCESSFULLY WITH INPUT EMAIL AMD PASSWORD ARE VALID=============
Given ('I navigate to Smartos login page', () => {
    cy.visit(url);
})

When ('I input valid data to Login', () => {
    cy.get('#email').click().type('admin@enouvo.com');
    cy.get('#password').click().type('enouvo123');
})
When ('I click on Login button', () => {
    cy.get('.login-form-button').click();
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
      .get('strong').should('have.text', demoAccount.account.displayName); //"Enouvo Admin"
})

//================LOGOUT SUCCESSFULLY==================
When ('I click on profile button', () => {
    cy.get('.div-user-info').click();
})
When ('I click on Logout button', () => {
    cy.get(':nth-child(3) > .div-menu-item').click();
})
Then ('I verify Logout successfully', () => {
    cy.location().should((loc) => {
        expect(loc.href).to.eq('https://csm-global-admin-web-staging.enouvo.com/login');
    })
})

