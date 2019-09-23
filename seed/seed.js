const db = require('../database/index.js');
const dbControllers = require('../database/controllers.js');
const mockData = require('./mock-data.js');

const getRandomInteger = (range) => {
  return Math.floor(Math.random() * range);
};

// Add mock data to database
const seedDb = () => {

  for (supplier of mockData.suppliers) {
    dbControllers.addSupplier(supplier, (err, result) => {
      (err) ? console.log('Error', err) : console.log('Supplier saved to database', result);
    });
  };

  for (contract of mockData.contracts) {
    const randomSupplier = getRandomInteger(mockData.suppliers.length) + 1;
    dbControllers.addContract(randomSupplier, contract, (err, result) => {
      (err) ? console.log('Error', err) : console.log('Contract saved to database', result);
    });
  };

  for (part of mockData.inventory) {
    dbControllers.addInventory(part, (err, result) => {
      (err) ? console.log('Error', err) : console.log('Inventory saved to database', result);
    });
  };

  for (part of mockData.wip) {
    dbControllers.addWIP(part, (err, result) => {
      (err) ? console.log('Error', err) : console.log('WIP saved to database', result);
    });
  };

  for (part of mockData.demand) {
    dbControllers.addDemand(part, (err, result) => {
      (err) ? console.log('Error', err) : console.log('Demand saved to database', result);
    });
  };

  db.connection.end();
};

// EXECUTION FUNCTIONS
seedDb();
