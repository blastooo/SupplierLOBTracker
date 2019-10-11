import React from 'react';

const MainHeader = ({supplierList, changeSupplier, supplierId}) =>
  <div>

    <div style={{'marginBottom': '1em'}}>
      <span style={{'fontWeight': 'bold', 'fontSize': '2em'}}> Supplier Line of Balance Tracker </span>
      <span> version 1.14 </span>
    </div>

    <label> Choose Supplier: </label>
    <select onChange={changeSupplier} >
      {!supplierId && <option> Select </option>}
      {supplierList.map(supplier =>
        <option key={supplier.id} value={supplier.id}> {supplier.supplierCode + ' ' + supplier.name} </option>
      )}
    </select>

  </div>

export default MainHeader;
