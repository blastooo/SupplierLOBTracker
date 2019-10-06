import React from 'react';

import Gmap from './Gmap.jsx';

const gmapStyle = {
  'margin': '1em 0',
  'height': '1em',
  'width': '1em'
};

const iconStyle = {
  'display': 'inline-flex',
  'verticalAlign': 'middle',
  'fontSize': '1em'
};

const SupplierHeader = ({supplierInfo}) =>
  !!supplierInfo &&
    <div style={{'margin': '2em 0', 'fontSize': '1.10em'}} >
      <span style={{'float': 'left', 'marginRight': '1.5em'}}>
        <Gmap style={gmapStyle} address={supplierInfo.address1 + ' ' + supplierInfo.city + ', ' + supplierInfo.state + ' ' + supplierInfo.zip} />
      </span>
      <div style={{'margin': '1em 0 .1em 0', 'fontSize': '1.5em', 'fontWeight': 'bolder'}}> {supplierInfo.name} </div>
      <div> Supplier Code: {supplierInfo.supplierCode} </div>
      <div> <i className="material-icons" style={iconStyle}>language</i> {supplierInfo.address1} {supplierInfo.city}, {supplierInfo.state} {supplierInfo.zip} </div>
      <div> <i className="material-icons" style={iconStyle}>phone</i> {supplierInfo.phone} </div>
      <div> <i className="material-icons" style={iconStyle}>computer</i> {supplierInfo.website} </div>
      <div> <i className="material-icons" style={iconStyle}>email</i> {supplierInfo.email} </div>
    </div>

export default SupplierHeader;
