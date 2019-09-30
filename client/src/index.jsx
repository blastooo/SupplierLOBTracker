import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';

import SupplierHeader from './components/SupplierHeader.jsx'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      supplierList: null,
      currentSupplierId: null,
      contracts: null
    };
  };

  componentDidMount() {
    this.getSupplierList();
  };

  // GET request to retrieve list of Suppliers
  getSupplierList() {
    $.get('/lob/supplier', (supplierData) => {
      this.setState({
        supplierList: supplierData
      });
    });
  };

  // Handle event when user selects a Supplier from the initial drop down list
  changeSupplier(event) {
    event.preventDefault();
    this.setState({
      currentSupplierId: event.target.value
    });
  };

  render() {
    return (
      this.state.supplierList === null ?
        // Display loading screen upon initial render
        <img src="https://i.imgur.com/k9GyXLC.gif" />
      :
        <div>
          <h1> Supplier Line of Balance </h1>
          <section>
            <label> Choose Supplier: </label>
            <select onChange={this.changeSupplier.bind(this)} >
              <option> Select </option>
              {this.state.supplierList.map(supplier =>
                <option key={supplier.id} value={supplier.id}> {supplier.supplierCode + ' ' + supplier.name} </option>
              )}
            </select>
          </section>
        </div>
    );
  };
};

ReactDOM.render(<App />, document.getElementById('app'));
