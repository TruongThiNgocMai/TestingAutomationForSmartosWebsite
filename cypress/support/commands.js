// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })

//Customize command
const url = 'https://csm-global-admin-web-staging.enouvo.com/'

Cypress.Commands.add('LoginFunction', (email, password) => {
    cy.visit(url);
    cy.get('#email').click().type(email);  
    cy.get('#password').click().type(password);
    cy.get('.login-form-button').click();
    cy.wait(3000);
})
