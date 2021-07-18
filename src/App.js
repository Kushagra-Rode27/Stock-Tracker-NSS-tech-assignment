import React from 'react';
import StockRow from './components/StockRow';
import './App.css';

function App() {
  return (
    <div className="App">
      <meta http-equiv="refresh" content="70"></meta>
      <div className="App-header">Stock Market Tracker<span>(Data Updated every 1 minute)</span><img src='https://media.giphy.com/media/cHFFF4Ry7366n8kPuv/giphy.gif' alt = 'mygif' width = '100' /></div>
      
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-BmbxuPwQa2lc/FVzBcNJ7UAyJxM6wuqIj61tLrc4wSX0szH/Ev+nYRRuWlolflfl" crossOrigin="anonymous"></link>
      
      <div className="container">
      <table className = "table table-bordered table-hover table-striped table-dark">
          <thead >
            <tr>
              <th>Stock</th>
              <th>Price</th>
              <th>Date</th>
              <th>Time</th>
              <th>Live Graph</th>
            </tr>
          </thead>
          <tbody>
          
          <StockRow ticker = "aapl" />
          <StockRow ticker = "msft" />
          <StockRow ticker = "twtr"/>
          <StockRow ticker = "tsla"/>
          <StockRow ticker = "fb"/>
          <StockRow ticker = "ADBE"/>
          <StockRow ticker = "amzn"/>
          <StockRow ticker = "NFLX"/>
          <StockRow ticker = "INTC"/>
          <StockRow ticker = "MRNA"/>
          <StockRow ticker = "WMT"/>
          <StockRow ticker = "NVDA"/>
          <StockRow ticker = "CSCO"/>
          <StockRow ticker = "pep"/>
          <StockRow ticker = "QCOM"/>
          <StockRow ticker = "SBUX"/>
          </tbody>
        </table>
        
      </div>
     
    </div>
  );
}

export default App;
