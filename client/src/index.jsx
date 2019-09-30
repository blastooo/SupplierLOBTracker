import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';

import MainHeader from './components/MainHeader.jsx'
import SupplierHeader from './components/SupplierHeader.jsx'

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

  // Handle event when user selects a Supplier from the drop down list
  changeSupplier(event) {
    event.preventDefault();
    this.setState({
      supplierId: event.target.value,
      supplierInfo: this.state.supplierList[event.target.value - 1]
    });
  };

  render() {
    return (
      this.state.supplierList === null ?
        // Display loading screen upon initial render
        <img src="https://i.imgur.com/k9GyXLC.gif" />
      :
        <div>

          <MainHeader suppliers={this.state.supplierList} changeSupplier={this.changeSupplier.bind(this)} />

          <SupplierHeader supplierInfo={this.state.supplierInfo} />

        </div>
    );
  };
};

ReactDOM.render(<App />, document.getElementById('app'));
