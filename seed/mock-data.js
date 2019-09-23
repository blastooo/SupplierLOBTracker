const faker = require('faker/locale/en_US');

// Options for mock data counts
const supplierCount = 0;
const contractCount = 50;

// Create mock Suppliers data
const suppliers = [];

// Create 1 unique Supplier (for demo purposes)
suppliers.push(
  {
    name: 'Blue Origin',
    supplierCode: 451339,
    phone: '(253)872-0411',
    email: 'contactus@blueorigin.com',
    website: 'http://www.blueorigin.com',
    address1: '21218 76th Ave S',
    address2: null,
    city: 'Kent',
    state: 'WA',
    zip: '98032',
  }
);

for (let i = 0; i < supplierCount; i++) {
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

// Create mock Contracts data
const contracts = [];

const programs = ['T', 'U', 'W', 'X'];
const extensions = ['', '-1', '-2', '-10', '-11', '-12'];
const partTypes = [
  'Bolt',
  'Nut',
  'Washer',
  'Intercostal',
  'Beam',
  'Clip',
  'Shear Tie',
  'Upper Stanchion',
  'Lower Stanchion',
  'Keel Frame',
  'Crown Frame',
  'Side Frame',
  'Edge Frame',
  'Stiffener',
  'Spar',
  'Rib',
  'Wedge',
  'Upper Panel',
  'Lower Panel',
  'Side Panel',
  'Stringer',
  'Strap',
  'Upper Chord',
  'Lower Chord',
  'Side Chord'
];

for (let i = 0; i < contractCount; i++) {
  contracts.push(
    {
      supplierId: null,
      partNumber: (Math.floor(Math.random() * (1000 - 100)) + 100) + programs[Math.floor(Math.random() * 4)] + (Math.floor(Math.random() * (10000 - 1000)) + 100) + extensions[Math.floor(Math.random() * 6)],
      nomenclature: partTypes[Math.floor(Math.random() * 25)],
      contractDate: faker.date.past()
    }
  );
};

// Create mock Inventory data
const inventory = [];

for (let i = 0; i < contracts.length; i++) {
  inventory.push(
    {
      partNumber: contracts[i].partNumber,
      qty: Math.floor(Math.random() * 50)
    }
  );
};

module.exports.suppliers = suppliers;
module.exports.contracts = contracts;
module.exports.inventory = inventory;
