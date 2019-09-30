import React from 'react';

const LOB = ({contracts}) => {

  const lineNumbers = [];
  for (let i = 300; i <= 330; i++) {
    lineNumbers.push(i);
  }

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
            {contracts.map((contract, index) =>
              <tr key={contract.id}>
                <td> {index + 1} </td>
                <td> {contract.partNumber} </td>
                <td> {contract.nomenclature} </td>
                <td> {contract.WIP} </td>
                <td> {contract.inventory} </td>
                {contract.demand.map(line =>
                  <td key={line.id}> {line.qty} </td>
                  )}
              </tr>
              )}
          </tbody>

        </table>

      </div>
  );
};

export default LOB;
