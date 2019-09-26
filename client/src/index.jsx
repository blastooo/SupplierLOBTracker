import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  };

  componentDidMount() {
  };

  // GET request to retrieve Supplier info
  getSupplier() {
  };

  // GET request to retrieve Contracts data
  getContracts() {
  };

  render() {
    return (
      <div>
        Line of Balance
      </div>
    );
  };
};

ReactDOM.render(<App />, document.getElementById('app'));
