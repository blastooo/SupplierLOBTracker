const db = require('../database/index.js');
const dbControllers = require('../database/controllers.js');
const mockData = require('./mock-data.js');

// Add mock data to database
const seedDb = () => {
  for (supplier of mockData.suppliers) {
    dbControllers.addSupplier(supplier, (err, result) => {
      (err) ? console.log('Error', err) : console.log('Supplier saved to database', result);
    });
  };
  db.connection.end();
};

// EXECUTION FUNCTIONS
seedDb();
