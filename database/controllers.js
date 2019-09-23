const db = require('./index.js');
// const moment = require('moment');

// Functions to get records
const getSupplier = (supplierId, callback) => {
  const sql = 'SELECT * FROM suppliers WHERE id = ?';

  db.connection.query(sql, supplierId, function (err, result) {
    callback(err, result[0]);
  });
};

const getContracts = (supplierId, callback) => {
  const sql = 'SELECT contracts.* FROM suppliers INNER JOIN contracts ON suppliers.id = contracts.supplierId WHERE suppliers.id = ?';

  db.connection.query(sql, supplierId, function (err, result) {
    callback(err, result);
  });
};

const getInventory = (partNumber, callback) => {
  const sql = 'SELECT * FROM inventory WHERE partNumber = ?';

  db.connection.query(sql, partNumber, function (err, result) {
    callback(err, result);
  });
};

// Functions to add records
const addSupplier = (supplierData, callback) => {
  const sql = 'INSERT INTO suppliers (name, supplierCode, phone, email, website, address1, address2, city, state, zip) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)';

  db.connection.query(sql, [supplierData.name, supplierData.supplierCode, supplierData.phone, supplierData.email, supplierData.website, supplierData.address1, supplierData.address2, supplierData.city, supplierData.state, supplierData.zip], function (err, result) {
    callback(err, result);
  });
};

const addContract = (supplierId, contractData, callback) => {
  const sql = 'INSERT INTO contracts (supplierId, partNumber, nomenclature, contractDate) VALUES (?, ?, ?, ?)';
  const contractDate = contractData.contractDate.getUTCFullYear() + "-" + (1 + contractData.contractDate.getUTCMonth()) + "-" + (contractData.contractDate.getUTCDate()) + " " + (contractData.contractDate.getUTCHours()) + ":" + (contractData.contractDate.getUTCMinutes()) + ":" + (contractData.contractDate.getUTCSeconds());

  db.connection.query(sql, [supplierId, contractData.partNumber, contractData.nomenclature, contractData.contractDate], function (err, result) {
    callback(err, result);
  });
};

const addInventory = (inventoryData, callback) => {
  const sql = 'INSERT INTO inventory (partNumber, qty) VALUES (?, ?)';

  db.connection.query(sql, [inventoryData.partNumber, inventoryData.qty], function (err, result) {
    callback(err, result);
  });
};

module.exports = {
  getSupplier: getSupplier,
  getContracts: getContracts,
  getInventory: getInventory,
  addSupplier: addSupplier,
  addContract: addContract,
  addInventory: addInventory
};
