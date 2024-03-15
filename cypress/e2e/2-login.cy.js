/// <reference types="cypress" />

import loginElements from "../support/pages/loginElements"

describe('Login Page Tests', () => {
  it('Validate successful login', () => {
    cy.fixture('user.json').then(user => {
      const { email, password } = user

      cy.accessLoginPage()

      cy.get(loginElements.inputEmail).type(email)
      cy.get(loginElements.inputPassword).type(password)

      cy.get(loginElements.signIn).click()

      cy.get(loginElements.defaulWelcomeMessage).should('be.visible')
    })
  })
})