import React from 'react';

const MainHeader = (props) =>
  <div>

    <h1> Supplier Line of Balance </h1>

    <label> Choose Supplier: </label>
    <select onChange={props.changeSupplier} >
      <option> Select </option>
      {props.suppliers.map(supplier =>
        <option key={supplier.id} value={supplier.id}> {supplier.supplierCode + ' ' + supplier.name} </option>
      )}
    </select>

  </div>

export default MainHeader;
