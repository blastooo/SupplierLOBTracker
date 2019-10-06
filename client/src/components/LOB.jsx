import React from 'react';
import moment from 'moment';

import Legend from './Legend.jsx';
import DemandMatrixByLN from './DemandMatrixByLN.jsx';
import DemandMatrixByWeek from './DemandMatrixByWeek.jsx';
import DemandMatrixByMonth from './DemandMatrixByMonth.jsx';

class LOB extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      demandType: 'Line Number'
    };
  };

  // Change demand matrix to display by Line Number, Week, or Month
  changeDemandType(event) {
    this.setState({
      demandType: event.target.value
    });
  };

  render() {
    // Used to generate table header for demand matrix based on demand type
    const demandHeader = [];
    let start = null;
    let end = null;
    let dateType = null;
    let dateFormat = null;
    let demandMatrix = null;
    let tableWidth = '100em';
    let topHeader = [];
    let headerLength = null;
    let index = -1;

    // Generate table header for demand matrix
    if (!!this.props.contracts) {

      if (this.state.demandType === 'Line Number') {
        topHeader.push({'Line Number': 31});
        start = this.props.contracts[0].demand[0].lineNumber;
        end = start + 31;
        demandMatrix = <DemandMatrixByLN contracts={this.props.contracts} headers={demandHeader} />;
      } else {
        if (this.state.demandType === 'Weekly') {
          tableWidth = '110em';
          dateType = 'weeks';
          dateFormat = 'YYYY-MM-DD';
          headerLength = 28;
          demandMatrix = <DemandMatrixByWeek contracts={this.props.contracts} headers={demandHeader} />;
        } else {
          dateType = 'months';
          dateFormat = 'YYYY-MM-01';
          headerLength = 16;
          demandMatrix = <DemandMatrixByMonth contracts={this.props.contracts} headers={demandHeader} />;
        }
        start = this.props.contracts.reduce((min, contract) =>
          contract.demand[0].needDate < min ? contract.demand[0].needDate : min
        );
        start = moment(start);
        end = moment(start).add(headerLength, dateType);
      }

      while (start < end) {
        if (typeof start === 'number') {
          demandHeader.push(start);
          start++;
        } else {
          demandHeader.push(moment(start).format(dateFormat));

          let currentYear = moment(start).format('YYYY');
          if (topHeader.length && Object.keys(topHeader[index])[0] === currentYear) {
            topHeader[index][currentYear]++;
          } else {
            let yearObject = {};
            yearObject[currentYear] = 1;
            topHeader[++index] = yearObject;
          }

          start = moment(start).add(1, dateType);
        }
      }
    }

    return (

      !!this.props.contracts &&

      <div style={{'clear': 'both', 'paddingTop': '2em'}}>

        <Legend />

        <div style={{'margin': '1em 0 0.4em 0', 'fontSize': '1.05em'}}>
          <label><input type="radio" value="Line Number" checked={this.state.demandType === 'Line Number'} onChange={this.changeDemandType.bind(this)} /> Line Number </label>
          <label><input type="radio" value="Weekly" checked={this.state.demandType === 'Weekly'} onChange={this.changeDemandType.bind(this)} /> Weekly </label>
          <label><input type="radio" value="Monthly" checked={this.state.demandType === 'Monthly'} onChange={this.changeDemandType.bind(this)} /> Monthly </label>
        </div>

        <table style={{'tableLayout': 'fixed', 'width': tableWidth}}>

          <thead>
            <tr>
              <th rowSpan="2" style={{'width': '1.5em'}}> No </th>
              <th rowSpan="2" style={{'width': '2.5em'}}> Risk </th>
              <th rowSpan="2" style={{'width': '6.5em'}}> Part Number </th>
              <th rowSpan="2" style={{'width': '6.5em'}}> Nomenclature </th>
              <th rowSpan="2" style={{'width': '2.5em'}}> WIP </th>
              <th rowSpan="2" style={{'width': '4.5em'}}> Inventory </th>
              {topHeader.map((val, index) =>
                <th key={index} colSpan={val[Object.keys(val)[0]]}> {Object.keys(val)[0]} </th>
              )}
            </tr>
            <tr>
              {demandHeader.map((val, index) => {
                let value = val;
                if (dateType === 'weeks') {
                  value = moment(value).format('M/D');
                } else if (dateType === 'months') {
                  value = moment(value).format('MMM');
                }
                return <th key={index}> {value} </th>
              })}
            </tr>
          </thead>

          {demandMatrix}

        </table>

      </div>
    );
  };
};

export default LOB;
