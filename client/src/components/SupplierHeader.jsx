import React from 'react';

import Gmap from './Gmap.jsx';

const SupplierHeader = ({supplierInfo}) =>
  !!supplierInfo &&
    <div style={{'margin': '2em 0'}} >
      <span style={{'float': 'left', 'marginRight': '1.5em'}}><Gmap style={{'margin': '1em 0', 'height': '1em', 'width': '1em'}} address={supplierInfo.address1 + ' ' + supplierInfo.city + ', ' + supplierInfo.state + ' ' + supplierInfo.zip} />
      </span>
      <div style={{'margin': '1em 0 .3em 0', 'fontSize': '1.5em', 'fontWeight': 'bolder'}}> {supplierInfo.name} </div>
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
