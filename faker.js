// faker.js
const faker = require('faker');

const generateFakeUser = () => {
  const firstName = faker.name.firstName();
  const lastName = faker.name.lastName();
  const email = faker.internet.email(firstName, lastName);
  const password = faker.internet.password();

  return {
    firstName,
    lastName,
    email,
    password,
    confirmPassword: password 
  };
};

module.exports = {
  generateFakeUser
};
