import React from 'react';

const MainHeader = ({supplierList, changeSupplier, supplierId}) =>
  <div>

    <h1> Supplier Line of Balance </h1>

    <label> Choose Supplier: </label>
    <select onChange={changeSupplier} >
      {!supplierId && <option> Select </option>}
      {supplierList.map(supplier =>
        <option key={supplier.id} value={supplier.id}> {supplier.supplierCode + ' ' + supplier.name} </option>
      )}
    </select>

  </div>

export default MainHeader;
