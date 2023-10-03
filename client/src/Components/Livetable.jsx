import React, { useState, useEffect } from 'react';
import Tabledata from '../utils/Tabledata';
import '../CSS/Livetable.css';

const Livetable = (props) => {

  return (
    <div className='datamain'>
      <h1>Live Trading</h1>
      <div className='scrollsizer'>
      <table>
        <thead>
          <tr>
            <th>Symbol</th>
            <th>Last Price (LTP)</th>
            <th>% Change</th>
            <th>Open</th>
            <th>High</th>
            <th>Low</th>
            <th>Quantity (Qty)</th>
          </tr>
        </thead>
        <tbody>
          { props.data.map((company, index) => (
            <tr
              key={index}
              className={company.change >= 0 ? 'v increasing' : 'decreasing'}
            >
              <td>{company.symbol}</td>
              <td>{company.last_price}</td>
              <td>{company.change}%</td>
              <td>{company.open}</td>
              <td>{company.high}</td>
              <td>{company.low}</td>
              <td>{company.quantity}</td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
    </div>
  );
};

export default Livetable;

