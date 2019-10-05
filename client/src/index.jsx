import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';

import MainHeader from './components/MainHeader.jsx';
import SupplierHeader from './components/SupplierHeader.jsx';
import LOB from './components/LOB.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      supplierList: null,
      supplierId: null,
      supplierInfo: null,
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

  // GET request to retrieve Supplier Contracts data
  getContracts() {
    $.get('/lob/supplier/' + this.state.supplierId + '/contracts', (contractsData) => {
      this.setState({
        contracts: contractsData
      });
    });
  };

  // Handle event when user selects a Supplier from the drop down list
  async changeSupplier(event) {
    event.preventDefault();
    await this.setState({
      supplierId: event.target.value,
      supplierInfo: this.state.supplierList[event.target.value - 1]
    });
    this.getContracts();
  };

  render() {
    return (
      this.state.supplierList === null ?
        // Display loading screen upon initial render
        <img src="https://i.imgur.com/k9GyXLC.gif" />
      :
        <div>

          <MainHeader supplierList={this.state.supplierList} changeSupplier={this.changeSupplier.bind(this)} supplierId={this.state.supplierId} />

          <SupplierHeader supplierInfo={this.state.supplierInfo} />

          <LOB contracts={this.state.contracts} />

        </div>
    );
  };
};

ReactDOM.render(<App />, document.getElementById('app'));
