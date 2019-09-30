import React from 'react';

const SupplierHeader = ({currentSupplier}) =>
  !!currentSupplier &&
    <div>
      <h3> {currentSupplier.name} </h3>
      <div> Supplier Code: {currentSupplier.supplierCode} </div>
      <div> Phone: {currentSupplier.phone} </div>
      <div> Email: {currentSupplier.email} </div>
      <div> Website: {currentSupplier.website} </div>
      <div>
        Address:
        <div> {currentSupplier.address1} </div>
        <div> {currentSupplier.city}, {currentSupplier.state} {currentSupplier.zip} </div>
      </div>
    </div>

export default SupplierHeader;
