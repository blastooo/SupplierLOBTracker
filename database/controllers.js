const db = require('./index.js');

// Functions to get records
const getSupplier = (supplierId, callback) => {
  const sql = 'SELECT * FROM suppliers WHERE id = ?';

  db.connection.query(sql, supplierId, function (err, result) {
    callback(err, result[0]);
  });
};

// Functions to add records
const addSupplier = (supplierData, callback) => {
  const sql = 'INSERT INTO suppliers (name, supplierCode, phone, email, website, address1, address2, city, state, zip) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)';

  db.connection.query(sql, [supplierData.name, supplierData.supplierCode, supplierData.phone, supplierData.email, supplierData.website, supplierData.address1, supplierData.address2, supplierData.city, supplierData.state, supplierData.zip], function (err, result) {
    callback(err, result);
  });
};

module.exports = {
  getSupplier: getSupplier,
  addSupplier: addSupplier
};
