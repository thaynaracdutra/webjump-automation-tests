/// <reference types="cypress" />

import shoppingCartElements from "../support/pages/shoppingCartElements"
import checkoutElements from "../support/pages/checkoutElements";

import faker from "faker";

describe('Purchase Tests', () => {
  it.only('Validate successful purchase', () => {
    const firstName = faker.name.firstName();
    const lastName = faker.name.lastName();
    const companyName = faker.company.companyName();
    const streetAddress = faker.address.streetAddress();
    const city = faker.address.city();
    const zipCode = faker.address.zipCode();
    const phoneNumber = faker.phone.phoneNumber();
    const email = faker.internet.email();

    cy.addProductToShoppingCart()

    cy.get(shoppingCartElements.checkoutAvailable).click()

    cy.wait(6000) // eslint-disable-line cypress/no-unnecessary-waiting

    cy.get(checkoutElements.email).eq(0).type(email, {force : true})
    cy.get(checkoutElements.firstName).type(firstName)
    cy.get(checkoutElements.lastName).type(lastName)
    cy.get(checkoutElements.companyName).type(companyName)
    cy.get(checkoutElements.streetAddress).type(streetAddress)
    cy.get(checkoutElements.cityName).type(city)
    cy.get(checkoutElements.stateSelect, {timeout: 5000}).select('Alabama')
    cy.get(checkoutElements.postalCode).type(zipCode)
    cy.get(checkoutElements.phoneNumber).type(phoneNumber)
    cy.get(checkoutElements.shippingMethod).check()

    cy.get(checkoutElements.submit).click()

    cy.wait(6000) // eslint-disable-line cypress/no-unnecessary-waiting

    cy.get(checkoutElements.shippingAddressCorfirm).check()
    cy.get(checkoutElements.placeOrder).click()

    cy.wait(6000) // eslint-disable-line cypress/no-unnecessary-waiting

    cy.get(checkoutElements.purchaseCompleteText).should('be.visible')
  })
})