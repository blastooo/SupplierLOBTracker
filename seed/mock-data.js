const faker = require('faker/locale/en_US');
const moment = require('moment');

// Options for mock data counts
const supplierCount = 0;
const contractCount = 250;
const demandCount = 160;

// Create mock Suppliers data
const suppliers = [];

// Create 5 unique Suppliers (for demo purposes)
suppliers.push(
  {
    name: 'Spaceships R Us',
    supplierCode: Math.floor(Math.random() * 1000000) + 1,
    phone: faker.phone.phoneNumber(),
    email: 'contactus@spaceshipsrus.com',
    website: 'http://www.spaceshipsrus.com',
    address1: 'N 6th St',
    address2: null,
    city: 'Renton',
    state: 'WA',
    zip: '98057'
  }
);

suppliers.push(
  {
    name: 'Fly Me to the Moon Inc',
    supplierCode: Math.floor(Math.random() * 1000000) + 1,
    phone: faker.phone.phoneNumber(),
    email: 'contactus@flymetothemoon.com',
    website: 'http://www.flymetothemoon.com',
    address1: '33501 S Dixie Hwy',
    address2: null,
    city: 'Florida City',
    state: 'FL',
    zip: '33034'
  }
);

suppliers.push(
  {
    name: 'To Space or Bust',
    supplierCode: 451339,
    phone: '(253)872-0411',
    email: 'contactus@tospaceorbust.com',
    website: 'http://www.tospaceorbust.com',
    address1: '1310 Texas Blvd N',
    address2: null,
    city: 'Weslaco',
    state: 'TX',
    zip: '78599'
  }
);

suppliers.push(
  {
    name: 'SpaceTech Engineering',
    supplierCode: Math.floor(Math.random() * 1000000) + 1,
    phone: faker.phone.phoneNumber(),
    email: 'contactus@spacetechengineering.com',
    website: 'http://www.spacetechengineering.com',
    address1: '4460 Bay Rd',
    address2: null,
    city: 'Saginaw',
    state: 'MI',
    zip: '48603'
  }
);

suppliers.push(
  {
    name: 'World Space Corp',
    supplierCode: Math.floor(Math.random() * 1000000) + 1,
    phone: faker.phone.phoneNumber(),
    email: 'contactus@worldspacecorp.com',
    website: 'http://www.worldspacecorp.com',
    address1: '1547 Gateway Blvd',
    address2: null,
    city: 'Fairfield',
    state: 'CA',
    zip: '94533'
  }
);

for (let i = 0; i < supplierCount; i++) {
  suppliers.push(
    {
      name: faker.name.findName(),
      supplierCode: Math.floor(Math.random() * 1000000) + 1,
      phone: faker.phone.phoneNumber(),
      email: faker.internet.email(),
      website: faker.internet.url(),
      address1: faker.address.streetAddress(),
      address2: faker.address.secondaryAddress(),
      city: faker.address.city(),
      state: faker.address.state(),
      zip: faker.address.zipCode()
    }
  );
}

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
}

// Create mock Inventory data
const inventory = [];

for (let i = 0; i < contracts.length; i++) {
  inventory.push(
    {
      partNumber: contracts[i].partNumber,
      qty: Math.floor(Math.random() * 50)
    }
  );
}

// Create mock WIP data
const wip = [];

for (let i = 0; i < contracts.length; i++) {
  wip.push(
    {
      partNumber: contracts[i].partNumber,
      qty: Math.floor(Math.random() * 50)
    }
  );
}

// Create mock Demand data
const demand = [];

for (let i = 0; i < contracts.length; i++) {
  let lineQty = Math.floor(Math.random() * 5) + 1;
  let date = moment().subtract(Math.floor(Math.random() * 4) + 1, 'weeks').format('YYYY-MM-DD');
  let noDemand = Math.floor(Math.random() * 7);
  for (let j = 0; j <= demandCount; j++) {
    qty = j < noDemand ? 0 : lineQty;
    demand.push(
      {
        partNumber: contracts[i].partNumber,
        lineNumber: j + 300,
        needDate: date,
        qty: qty
      }
    );
    qty = lineQty;
    date = moment(date).add(3, 'days').format('YYYY-MM-DD');
  }
}

module.exports.suppliers = suppliers;
module.exports.contracts = contracts;
module.exports.inventory = inventory;
module.exports.wip = wip;
module.exports.demand = demand;
