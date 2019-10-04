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
  };

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

              let cummDemand = 0;
              let borderToggle = false;
              previousDateLine = currentDateLine;

              return (
                <tr key={contract.id}>

                  <td> {index + 1} </td>
                  <td> {contract.partNumber} </td>
                  <td> {contract.nomenclature} </td>
                  <td> {contract.WIP} </td>
                  <td> {contract.inventory} </td>

                  {contract.demand.map(line => {
                    // Red border coloring to show current date line
                    let borderLeft = 'thin solid black';
                    let borderTop = 'thin solid black';
                    if (!borderToggle && moment(line.needDate).format('YYYY-MM-DD') >= moment().format('YYYY-MM-DD')) {
                      borderLeft = '4px solid red';
                      borderToggle = true;
                      currentDateLine = line.lineNumber;
                    }
                    if (index !== 0 && !borderToggle && line.lineNumber >= previousDateLine) {
                      borderTop = '4px solid red';
                    } else if (index !== 0 && borderToggle && line.lineNumber < previousDateLine) {
                      borderTop = '4px solid red';
                    }

                    // Green background color for demand that has inventory & yellow background color for demand that has WIP
                    cummDemand += line.qty;
                    if (contract.inventory >= cummDemand) {
                      return <td key={line.id} style={{'backgroundColor': '#00FF00', 'borderLeft': borderLeft, 'borderTop': borderTop}}> {line.qty} </td>
                    } else if (contract.inventory + contract.WIP >= cummDemand) {
                      return <td key={line.id} style={{'backgroundColor': '#FFFF00', 'borderLeft': borderLeft, 'borderTop': borderTop}}> {line.qty} </td>
                    } else {
                      return <td key={line.id} style={{'borderLeft': borderLeft, 'borderTop': borderTop}}> {line.qty} </td>
                    }
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
