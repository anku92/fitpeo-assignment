import './Graph.css';
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
import { barChartData } from '../../data/chartData';
import { useState } from 'react';

export const BarGraph = () => {

  const [period, setPeriod] = useState('weekly');

  const options = {
    responsive: true,
    maintainAspectRatio: false,

    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        callbacks: {
          label: function (context) {
            return `${context.dataset.label} ${context.raw}`;
          }
        }
      }
    },
    scales: {
      x: {
        grid: {
          gridColor: 'grey',
          display: false,
        },
        ticks: {
          color: 'grey',
          autoSkip: false,
        },
      },
      y: {
        max: 18000,
        grid: {
          color: 'gray',
          display: true,
        },
        ticks: {
          autoSkip: false,
          stepSize: 5000,
          color: 'gray',
          callback: function (value) {
            if (value === 0) return '0';
            if (value === 5000) return '5k';
            if (value === 10000) return '10k';
            if (value === 15000) return '15k';
            if (value === 16000) return '';
          }
        },
      }
    }
  };

  const handlePeriodChange = (event) => {
    setPeriod(event.target.value);
  };

  return (

    <div className="wrapper mx-1 mb-3">
      <div className="chart-header">
        <h2>Activities</h2>
        <div className="dropdown-container">
          <select className='selector' id="period" value={period} onChange={handlePeriodChange}>
            <option value="weekly">Weekly</option>
            <option value="monthly">Monthly</option>
          </select>
        </div>
      </div>


      <div className="chart-container">
        <Bar className='bar-graph' options={options} data={barChartData} />
      </div>
    </div>
  );
};
