const faker = require('faker/locale/en_US');

// Options for mock data counts
const supplierCount = 0;

// Create mock suppliers data
const suppliers = [];

// Create 1 unique supplier (for demo purposes)
suppliers.push(
  {
    name: 'Superstar Manufacturing',
    supplierCode: 451339,
    phone: faker.phone.phoneNumber(),
    email: 'admin@superstarmanufacturing.com',
    website: 'http://www.superstarmanufacturing.com',
    address1: faker.address.streetAddress(),
    address2: faker.address.secondaryAddress(),
    city: faker.address.city(),
    state: faker.address.state(),
    zip: faker.address.zipCode(),
  }
);

for (var i = 0; i < supplierCount; i++) {
  suppliers.push(
    {
      name: faker.name.findName(),
      supplierCode: Math.floor(Math.random() * 1000000) + 1,
      phone: faker.phone.phoneNumber(),
      email: faker.internet.email(),
      address1: faker.address.streetAddress(),
      address2: faker.address.secondaryAddress(),
      city: faker.address.city(),
      state: faker.address.state(),
      zip: faker.address.zipCode(),
    }
  );
};

module.exports.suppliers = suppliers;
