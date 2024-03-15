// ***********************************************************
// This example support/e2e.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands'
import homeElements from './pages/homeElements';
import shoppingCartElements from './pages/shoppingCartElements';
import loginElements from './pages/loginElements';
import productElements from './pages/productElements';

const app = window.top;
if (!app.document.head.querySelector('[data-hide-command-log-request]')) {
    const style = app.document.createElement('style');
    style.innerHTML = '.command-name-request, .command-name-xhr { display: none }';
    style.setAttribute('data-hide-command-log-request', '');

    app.document.head.appendChild(style);
}

Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
  });

Cypress.Commands.add('accessRegistrationPage', () => {
  cy.visit("/customer/account/create/")
})

Cypress.Commands.add('accessLoginPage', () => {
    cy.visit("/customer/account/login/referer/aHR0cHM6Ly9tYWdlbnRvLm51Ymx1ZS5jby51ay9jdXN0b21lci9hY2NvdW50L2NyZWF0ZS8%2C/");
})

Cypress.Commands.add('signIn', () => {
    cy.fixture('user.json').then(user => {
        const { email, password } = user
  
        cy.accessLoginPage()
  
        cy.get(loginElements.inputEmail).type(email)
        cy.get(loginElements.inputPassword).type(password)
  
        cy.get(loginElements.signIn).click()
  
        cy.get(loginElements.defaulWelcomeMessage).should('be.visible')
      })
})

Cypress.Commands.add('addProductToShoppingCart', () => {
    cy.clearAllLocalStorage()
    cy.signIn()

    cy.get(homeElements.accessSalePage).click()
    cy.get(homeElements.accessProducts).contains('Jackets').click({force: true})

    cy.get(productElements.selectProduct).click()

    cy.get(productElements.selectSize).click()
    cy.get(productElements.selectColor).click()

    cy.get(productElements.addToCart).click()

    cy.wait(6000) // eslint-disable-line cypress/no-unnecessary-waiting

    cy.get(shoppingCartElements.showShoppingCart).should('exist', { timeout: 5000 }).click()
})

