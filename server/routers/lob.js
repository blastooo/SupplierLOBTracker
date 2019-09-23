require('dotenv').config();
const express = require('express');
const router = express.Router();

let db = null;

if (process.env.DATABASE === 'mongo') {
  db = require('../../database-mongo/controllers.js');
} else if (process.env.DATABASE === 'mysql') {
  db = require('../../database/controllers.js');
} else {
  console.log('No database defined in .env file');
};

// GET request to retrieve Supplier info
router.route('/supplier/:id')
  .get((req, res) => {
    const supplierId = req.params.id;

    db.getSupplier(supplierId, (err, result) => {
      if (err) {
        console.log('Error', err);
      } else {
        console.log('Supplier returned', result);
        res.send(result);
      };
    })
  });

// GET request to retrieve all Contracts for a Supplier
router.route('/supplier/:id/contracts')
  .get((req, res) => {
    const supplierId = req.params.id;

    db.getContracts(supplierId, (err, result) => {
      if (err) {
        console.log('Error', err);
      } else {
        console.log('Contracts returned', result);
        res.send(result);
      };
    })
  });

module.exports = router;
