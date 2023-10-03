import React from "react";
import '../CSS/MarketOverview.css';

const MarketOverview =() => {

    const marketSectors = [
        { sector: 'Technology', qty: 100, percentChange: 2.5 },
        { sector: 'Finance', qty: 75, percentChange: -1.2 },
        { sector: 'Healthcare', qty: 50, percentChange: 0.8 },
        { sector: 'Energy', qty: 120, percentChange: -3.5 },
        { sector: 'Technology', qty: 100, percentChange: 2.5 },
        { sector: 'Finance', qty: 75, percentChange: -1.2 },
        { sector: 'Healthcare', qty: 50, percentChange: 0.8 },
        { sector: 'Energy', qty: 120, percentChange: -3.5 },
        { sector: 'Technology', qty: 100, percentChange: 2.5 },
        { sector: 'Finance', qty: 75, percentChange: -1.2 },
        { sector: 'Healthcare', qty: 50, percentChange: 0.8 },
        { sector: 'Energy', qty: 120, percentChange: -3.5 },
      ];
    
      // Function to determine the trend based on percentChange
      const getTrend = (percentChange) => {
        if (percentChange > 0) {
          return '+';
        } else if (percentChange < 0) {
          return '-';
        } else {
          return '';
        }
      };

    return (
        <div className="h-3/4 w-5/6 relative mx-40 my-16 text-center justify-center">
            <div className="text-center text-7xl text-white font-bold"> MARKET OVERVIEW </div>
            <div className="h-3/4 w-5/6 relative mx-32 my-24 border-#cfcece80 bg-[#cfcece80] justify-center text-center overflow-scroll contentclass ">
                <div className="text-white text-3xl">
                    <div className="market-data-table">
                        <table>
                            <thead>
                                <tr>
                                    <th>Sector</th>
                                    <th>Qty</th>
                                    <th>% Change</th>
                                    <th>Trend</th>
                                </tr>
                            </thead>
                            <tbody>
                                {marketSectors.map((sector, index) => (
                                    <tr key={index} className={getTrend(sector.percentChange) === '-' ? 'red-row' : 'green-row'}>
                                        <td>{sector.sector}</td>
                                        <td>{sector.qty}</td>
                                        <td>{sector.percentChange}%</td>
                                        <td>{getTrend(sector.percentChange)}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MarketOverview;
