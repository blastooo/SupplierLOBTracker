import React from 'react';
import moment from 'moment';

const DemandMatrixByMonth = ({contracts, headers}) => {

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
        let currentMonth = headers[0];
        let borderToggle = false;
        let i = 0;

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

            {headers.map((date, index) => {
              // Calculate demand for the month
              let demand = 0;
              for (; i < contract.demand.length; i++) {
                let needDate = moment(contract.demand[i].needDate).format('YYYY-MM-DD');
                if (needDate >= currentMonth && needDate < moment(currentMonth).add(1, 'month').format('YYYY-MM-DD')) {
                  demand+= contract.demand[i].qty;
                } else {
                  currentMonth = moment(currentMonth).add(1, 'month').format('YYYY-MM-DD');
                  break;
                }
              }

              // Thick border coloring to show current date line
              let borderLeftWidth = 'thin';

              if (!borderToggle && moment(date).format('YYYY-MM-01') >= moment().format('YYYY-MM-01')) {
                borderLeftWidth = 'medium';
                borderToggle = true;
              }

              // Gray background for demand that has been fulfilled, green background for demand that has inventory, blue background for demand that has WIP
              cummDemand += demand;

              let color = 'black';
              let backgroundColor = 'white';

              if (demand === 0) {
                color = 'darkgray'
                backgroundColor = 'darkgray';
              } else if (contract.inventory >= cummDemand) {
                backgroundColor = '#78FF78';
              } else if (contract.inventory + contract.WIP >= cummDemand) {
                // Yellow background for past due demand that has WIP
                if (moment(date).format('YYYY-MM-01') < moment().format('YYYY-MM-DD')) {
                  backgroundColor = '#FFFF69';
                  riskStoplight.backgroundColor = '#FFFF69';
                } else {
                  backgroundColor = '#B8FFFF';
                }
              } else if (moment(date).format('YYYY-MM-01') < moment().format('YYYY-MM-DD')) {
                // Red background for past due demand that has no WIP
                backgroundColor = '#FF3939';
                riskStoplight.backgroundColor = '#FF3939';
              }

              return <td key={index} style={{'color': color, 'backgroundColor': backgroundColor, 'borderLeftWidth': borderLeftWidth}}> {demand} </td>
            })}

          </tr>
        );
      })}
    </tbody>
  );
};

export default DemandMatrixByMonth;
