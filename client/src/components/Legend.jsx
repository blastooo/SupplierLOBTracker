import React from 'react';

const Legend = () =>
  <table style={{'borderCollapse': 'separate', 'borderRadius':'0.4em', 'padding': '0.5em'}}>
    <thead>
      <tr>
        <th colSpan="2" style={{'fontSize': '1.07em', 'letterSpacing': '0.2em'}}> LEGEND </th>
      </tr>
    </thead>
    <tbody>
      <tr><td style={{'border': 'none'}}/></tr>
      <tr>
        <td style={{'border': 'none', 'width': '1.2em', 'backgroundColor': 'darkgray'}} />
        <td style={{'padding': '0.3em', 'border': 'none', 'textAlign': 'left'}}> Inventory Allocated </td>
      </tr>
      <tr>
        <td style={{'border': 'none', 'width': '1.2em', 'backgroundColor': '#78FF78'}} />
        <td style={{'padding': '0.3em', 'border': 'none', 'textAlign': 'left'}}> Inventory Coverage </td>
      </tr>
      <tr>
        <td style={{'border': 'none', 'width': '1.2em', 'backgroundColor': '#B8FFFF'}} />
        <td style={{'padding': '0.3em', 'border': 'none', 'textAlign': 'left'}}> WIP Coverage </td>
      </tr>
      <tr>
        <td style={{'border': 'none', 'width': '1.2em', 'backgroundColor': '#FFFF69'}} />
        <td style={{'padding': '0.3em', 'border': 'none', 'textAlign': 'left'}}> Behind Schedule WIP </td>
      </tr>
      <tr>
        <td style={{'border': 'none', 'width': '1.2em', 'backgroundColor': '#FF3939'}} />
        <td style={{'padding': '0.3em', 'border': 'none', 'textAlign': 'left'}}> No Coverage </td>
      </tr>
    </tbody>
  </table>

export default Legend;
