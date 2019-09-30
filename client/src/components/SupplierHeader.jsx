import React from 'react';

const SupplierHeader = ({supplierInfo}) =>
  !!supplierInfo &&
    <div>
      <h3> {supplierInfo.name} </h3>
      <div> Supplier Code: {supplierInfo.supplierCode} </div>
      <div> Phone: {supplierInfo.phone} </div>
      <div> Email: {supplierInfo.email} </div>
      <div> Website: {supplierInfo.website} </div>
      <div>
        Address:
        <div> {supplierInfo.address1} </div>
        <div> {supplierInfo.city}, {supplierInfo.state} {supplierInfo.zip} </div>
      </div>
    </div>

export default SupplierHeader;
