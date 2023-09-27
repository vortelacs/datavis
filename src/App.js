import React, { useEffect, useState } from 'react';
import './App.css';
import ReactApexChart from 'react-apexcharts';

function App() {
  // Sample data for demonstration purposes
  const chartData = {
    categories: ['Category 1', 'Category 2', 'Category 3'],
    series: [{
      name: 'Series 1',
      data: [30, 40, 20],
    }],
  };

  // State to manage chart options and data
  const [chartOptions, setChartOptions] = useState({});
  const [chartSeries, setChartSeries] = useState([]);

  useEffect(() => {
    // Prepare chart options (customize as needed)
    const options = {
      chart: {
        type: 'bar',
      },
      xaxis: {
        categories: chartData.categories,
      },
    };

    // Set chart options
    setChartOptions(options);

    // Set chart series data
    setChartSeries(chartData.series);
  }, []);

  return (
    <div className="App">
      <h1>Data Visualization</h1>
      <div className="chart">
        <ReactApexChart options={chartOptions} series={chartSeries} type="bar" />
      </div>
    </div>
  );
}

export default App;