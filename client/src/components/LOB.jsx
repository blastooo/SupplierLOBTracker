import React from 'react';
import moment from 'moment';

const LOB = ({contracts}) => {

  // Used to generate table header for Line Numbers
  const lineNumbers = [];
  if (!!contracts) {
    const start = contracts[0].demand[0].lineNumber;
    for (let i = start; i <= start + 30; i++) {
      lineNumbers.push(i);
    }
  }

  // Used for visualizing current date line
  let previousDateLine = null;
  let currentDateLine = null;


  return (
    !!contracts &&
      <div>

        <h3> Line of Balance </h3>

        <table>

          <thead>
            <tr>
              <th rowSpan="2"> No </th>
              <th rowSpan="2"> Risk </th>
              <th rowSpan="2"> Part Number </th>
              <th rowSpan="2"> Nomenclature </th>
              <th rowSpan="2"> WIP </th>
              <th rowSpan="2"> Inventory </th>
              <th colSpan="31"> Line Number </th>
            </tr>
            <tr>
              {lineNumbers.map((line, index) =>
                <th key={index}> {line} </th>
              )}
            </tr>
          </thead>

          <tbody>
            {contracts.map((contract, index) => {
              let riskStoplight = {
                'position': 'relative',
                'height': 'auto%',
                'width': '80%',
                'margin': 'auto',
                'paddingTop': '80%',
                'backgroundColor': 'lime',
                'borderRadius': '50%'
              };
              let cummDemand = 0;
              let borderToggle = false;
              previousDateLine = currentDateLine;

              return (
                <tr key={contract.id}>

                  <td> {index + 1} </td>
                  <td>
                    <div style={riskStoplight} />
                  </td>
                  <td> {contract.partNumber} </td>
                  <td> {contract.nomenclature} </td>
                  <td> {contract.WIP} </td>
                  <td> {contract.inventory} </td>

                  {contract.demand.map(line => {
                    // Red border coloring to show current date line
                    let borderLeftWidth = 'thin';
                    let borderTopWidth = 'thin';
                    if (!borderToggle && moment(line.needDate).format('YYYY-MM-DD') >= moment().format('YYYY-MM-DD')) {
                      borderLeftWidth = 'medium';
                      borderToggle = true;
                      currentDateLine = line.lineNumber;
                    }
                    if (index !== 0 && !borderToggle && line.lineNumber >= previousDateLine) {
                      borderTopWidth = 'medium';
                    } else if (index !== 0 && borderToggle && line.lineNumber < previousDateLine) {
                      borderTopWidth = 'medium';
                    }

                    // Green background for demand that has inventory, yellow background for demand that has WIP
                    cummDemand += line.qty;
                    let backgroundColor = 'white';
                    if (line.qty === 0) {
                      backgroundColor = 'darkgray';
                      line.qty = '';
                    } else if (contract.inventory >= cummDemand) {
                      backgroundColor = 'lime';
                    } else if (contract.inventory + contract.WIP >= cummDemand) {
                      // Orange background for past due demand that has WIP
                      if (moment(line.needDate).format('YYYY-MM-DD') < moment().format('YYYY-MM-DD')) {
                        backgroundColor = 'orange';
                        riskStoplight.backgroundColor = 'orange';
                      } else {
                        backgroundColor = 'yellow';
                      }
                    } else if (moment(line.needDate).format('YYYY-MM-DD') < moment().format('YYYY-MM-DD')) {
                      // Orange background for past due demand that has WIP
                      backgroundColor = 'red';
                      riskStoplight.backgroundColor = 'red';
                    }
                    return <td key={line.id} style={{'backgroundColor': backgroundColor, 'borderLeftWidth': borderLeftWidth, 'borderTopWidth': borderTopWidth}}> {line.qty} </td>
                  })}

                </tr>
              );
            })}
          </tbody>

        </table>

      </div>
  );
};

export default LOB;
