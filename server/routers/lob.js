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
}

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
      }
    });
  });

// GET request to retrieve all Contracts for a Supplier
router.route('/supplier/:id/contracts')
  .get((req, res) => {
    const supplierId = req.params.id;

    db.getContracts(supplierId, (err, result) => {
      let promises = result.map(contract => {
        return new Promise((resolve, reject) => {
          db.getInventory(contract.partNumber, function(err, result) {
            if (err) {
              console.log('Error', err);
            } else {
              contract.inventory = result[0].qty;
              resolve(contract);
            }
          })
        });
      });

      Promise.all(promises).then(contracts => {
        let promises = contracts.map(contract => {
          return new Promise((resolve, reject) => {
            db.getWIP(contract.partNumber, function(err, result) {
              if (err) {
                console.log('Error', err);
              } else {
                contract.WIP = result[0].qty;
                resolve(contract);
              }
            })
          });
        });
        Promise.all(promises).then(contracts => {
          let promises = contracts.map(contract => {
            return new Promise((resolve, reject) => {
              db.getDemand(contract.partNumber, function(err, result) {
                if (err) {
                  console.log('Error', err);
                } else {
                  contract.demand = result;
                  resolve(contract);
                }
              })
            });
          });
          Promise.all(promises).then(contracts => {
            res.send(contracts);
          })
        })
      })
    })
  });

module.exports = router;
