/// <reference types="cypress" />

const { generateFakeUser } = require('../../faker');

import shoppingCartElements from "../support/pages/shoppingCartElements"
import checkoutElements from "../support/pages/checkoutElements";

describe('Purchase Tests', () => {
  it('Validate successful purchase', () => {
    const user = generateFakeUser();
    cy.addProductToShoppingCart()

    cy.get(shoppingCartElements.checkoutAvailable).click()

    cy.wait(10000) // eslint-disable-line cypress/no-unnecessary-waiting

    cy.get(checkoutElements.email).eq(0).type(user.email, {force : true})
    cy.get(checkoutElements.firstName).type(user.firstName)
    cy.get(checkoutElements.lastName).type(user.lastName)
    cy.get(checkoutElements.companyName).type(user.companyName)
    cy.get(checkoutElements.streetAddress).type(user.streetAddress)
    cy.get(checkoutElements.cityName).type(user.city)
    cy.get(checkoutElements.stateSelect, {timeout: 5000}).select('Alabama')
    cy.get(checkoutElements.postalCode).type(user.zipCode)
    cy.get(checkoutElements.phoneNumber).type(user.phoneNumber)
    cy.get(checkoutElements.shippingMethod).check()

    cy.get(checkoutElements.submit).click()

    cy.wait(6000) // eslint-disable-line cypress/no-unnecessary-waiting

    cy.get(checkoutElements.shippingAddressCorfirm).check()
    cy.get(checkoutElements.placeOrder).click()

    cy.wait(6000) // eslint-disable-line cypress/no-unnecessary-waiting

    cy.get(checkoutElements.purchaseCompleteText).should('be.visible')
  })
})