// faker.js
const faker = require('faker');

const generateFakeUser = () => {
  const firstName = faker.name.firstName();
  const lastName = faker.name.lastName();
  const email = faker.internet.email(firstName, lastName);
  const password = faker.internet.password();
  const companyName = faker.company.companyName();
  const streetAddress = faker.address.streetAddress();
  const city = faker.address.city();
  const zipCode = faker.address.zipCode();
  const phoneNumber = faker.phone.phoneNumber();

  return {
    firstName,
    lastName,
    email,
    password,
    confirmPassword: password,
    companyName,
    streetAddress,
    city,
    zipCode,
    phoneNumber
  };
};

module.exports = {
  generateFakeUser
};
