import React from 'react';
import moment from 'moment';

const DemandMatrixByLN = ({contracts}) => {

  // Used for visualizing current date line
  let previousDateLine = null;
  let currentDateLine = null;


  return (
    <tbody>
      {contracts.map((contract, index) => {

        let riskStoplight = {
          'position': 'relative',
          'height': 'auto%',
          'width': '80%',
          'margin': 'auto',
          'paddingTop': '80%',
          'backgroundColor': '#78FF78',
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

            {contract.demand.map((line, i) => {
              if (i < 31) {

              // Thick border coloring to show current date line
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

                // Gray background for demand that has been fulfilled, green background for demand that has inventory, blue background for demand that has WIP
                cummDemand += line.qty;

                let color = 'black';
                let backgroundColor = 'white';

                if (line.qty === 0) {
                  color = 'darkgray'
                  backgroundColor = 'darkgray';
                } else if (contract.inventory >= cummDemand) {
                  backgroundColor = '#78FF78';
                } else if (contract.inventory + contract.WIP >= cummDemand) {
                  // Yellow background for past due demand that has WIP
                  if (moment(line.needDate).format('YYYY-MM-DD') < moment().format('YYYY-MM-DD')) {
                    backgroundColor = '#FFFF69';
                    riskStoplight.backgroundColor = '#FFFF69';
                  } else {
                    backgroundColor = '#B8FFFF';
                  }
                } else if (moment(line.needDate).format('YYYY-MM-DD') < moment().format('YYYY-MM-DD')) {
                  // Red background for past due demand that has no WIP
                  backgroundColor = '#FF3939';
                  riskStoplight.backgroundColor = '#FF3939';
                }

                return <td key={line.id} style={{'color': color, 'backgroundColor': backgroundColor, 'borderLeftWidth': borderLeftWidth, 'borderTopWidth': borderTopWidth}}> {line.qty} </td>

              }
            })}

          </tr>
        );
      })}
    </tbody>
  );
};

export default DemandMatrixByLN;
