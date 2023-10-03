import React, { useState, useEffect } from 'react';
import Tabledata from '../utils/Tabledata';
import "../CSS/Gainerandloser.css";

const Gainerandloser = () => {
  const [companyData, setCompanyData] = useState(Tabledata);

  useEffect(() => {
    // Function to update the LTP and adjust High and Low values
    const updateData = () => {
      const updatedData = companyData.map((company) => {
        const newLTP = parseFloat((company.ltp + Math.random() * 10 - 5).toFixed(2)); // Simulate LTP fluctuation
        const newHigh = Math.max(company.high, newLTP);
        const newLow = Math.min(company.low, newLTP);

        return {
          ...company,
          ltp: newLTP,
          high: newHigh,
          low: newLow,
        };
      });

      setCompanyData(updatedData);
    };

    // Update data every 10 seconds
    const intervalId = setInterval(updateData, 10000);

    // Clean up the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, [companyData]);

  // Sort the data by % Change in descending order to get top gainers
  const topGainers = [...companyData].sort((a, b) => b.change - a.change).slice(0, 5);

  // Sort the data by % Change in ascending order to get top losers
  const topLosers = [...companyData].sort((a, b) => a.change - b.change).slice(0, 5);

  return (
    <div className='datamain2'>

      {/* Display the Top Gainers */}
      <h2>Top Gainers</h2>
      <table className='gainertable'>
        <thead>
          <tr>
            <th>Symbol</th>
            <th>Last Price (LTP)</th>
            <th>% Change</th>
          </tr>
        </thead>
        <tbody>
          {topGainers.map((company, index) => (
            <tr key={index}>
              <td>{company.symbol}</td>
              <td>{company.ltp}</td>
              <td>{company.change}%</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Display the Top Losers */}
      <h2>Top Losers</h2>
      <table className='losertable'>
        <thead>
          <tr>
            <th>Symbol</th>
            <th>Last Price (LTP)</th>
            <th>% Change</th>
          </tr>
        </thead>
        <tbody>
          {topLosers.map((company, index) => (
            <tr key={index}>
              <td>{company.symbol}</td>
              <td>{company.ltp}</td>
              <td>{company.change}%</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Gainerandloser;
