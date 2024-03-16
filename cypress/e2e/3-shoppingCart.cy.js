/// <reference types="cypress" />

import homeElements from "../support/pages/homeElements"
import productElements from "../support/pages/productElements"
import shoppingCartElements from "../support/pages/shoppingCartElements"

describe('Shopping Cart Page Tests', () => {
  it('Validate add product at shopping cart with success', () => {
    cy.signIn()

    cy.get(homeElements.accessSalePage).click()
    cy.get(homeElements.accessProducts).contains('Jackets').click({ force: true })

    cy.get(productElements.selectProduct).click()

    cy.get(productElements.selectSize).click()
    cy.get(productElements.selectColor).click()

    cy.get(productElements.addToCart).click()

    cy.wait(6000) // eslint-disable-line cypress/no-unnecessary-waiting

    cy.get(shoppingCartElements.counterNumber, { timeout: 6000 }).invoke('text')
      .then((text) => {
        const valor = parseInt(text.trim());
        expect(valor).to.be.at.least(1);
      });
  })
})