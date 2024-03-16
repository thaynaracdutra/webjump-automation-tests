/// <reference types="cypress" />

const { generateFakeUser } = require('../../faker');

import registrationElements from '../support/pages/registrationElements';
import loginElements from '../support/pages/loginElements';

describe('Registration Page Tests', () => {
  it('Validate successful registration', () => {
    const user = generateFakeUser();

    cy.accessRegistrationPage()

    cy.get(registrationElements.firstName).type(user.firstName);
    cy.get(registrationElements.lastName).type(user.lastName);
    cy.get(registrationElements.email).type(user.email);
    cy.get(registrationElements.password).type(user.password);
    cy.get(registrationElements.confirmPassword).type(user.confirmPassword);
    cy.get(registrationElements.submit).click();

    cy.writeFile('cypress/fixtures/user.json', user);

    cy.get(loginElements.defaulWelcomeMessage).should('be.visible')
  });
});