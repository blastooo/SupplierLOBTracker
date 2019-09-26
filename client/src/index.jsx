import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      supplier: null,
      contracts: null
    };
    this.supplierId = 1;
  };

  componentDidMount() {
    this.getSupplier();
    this.getContracts();
  };

  // GET request to retrieve Supplier info
  getSupplier() {
    $.get('/lob/supplier/' + this.supplierId, (supplierInfo) => {
      this.setState({
        supplier: supplierInfo
      });
    });
  };

  // GET request to retrieve Contracts data
  getContracts() {
    $.get('/lob/supplier/' + this.supplierId + '/contracts', (contractsData) => {
      this.setState({
        contracts: contractsData
      });
    });
  };

  render() {
    return (
      (this.state.supplier === null || this.state.contracts === null) ?
        // Display loading screen upon initial render
        <img src="https://i.imgur.com/k9GyXLC.gif" />
      :
        <div>
          Line of Balance
        </div>
    );
  };
};

ReactDOM.render(<App />, document.getElementById('app'));
