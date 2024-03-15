/// <reference types="cypress" />

import faker from 'faker';

import registrationElements from '../support/pages/registrationElements';
import loginElements from '../support/pages/loginElements';

describe('Registration Page Tests', () => {
  it('Validate successful registration', () => {
    const firstName = faker.name.firstName();
    const lastName = faker.name.lastName();
    const email = faker.internet.email(firstName, lastName);
    const password = faker.internet.password();
    const confirmPassword = password;

    cy.accessRegistrationPage()

    cy.get(registrationElements.firstName).type(firstName);
    cy.get(registrationElements.lastName).type(lastName);
    cy.get(registrationElements.email).type(email);
    cy.get(registrationElements.password).type(password);
    cy.get(registrationElements.confirmPassword).type(confirmPassword);
    cy.get(registrationElements.submit).click();

    cy.writeFile('cypress/fixtures/user.json', { firstName, lastName, email, password, confirmPassword });

    cy.get(loginElements.defaulWelcomeMessage).should('be.visible')
  });
});