import './BarChart.css';
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip
} from "chart.js";
import { barChartData } from '../../../data/chartData';
import { useState } from 'react';


ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
)

const BarChart = () => {

  const [period, setPeriod] = useState('weekly');

  const options = {
    responsive: true,
    maintainAspectRatio: false,

    plugins: {
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
          color: 'grey',
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
          color: 'grey',
          display: true,
        },
        ticks: {
          autoSkip: false,
          color: 'gray',
          stepSize: 5000,
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
    <div className="wrapper mt-0 mb-3 mx-0">
      <div className="chart-header">
        <h3>Activities</h3>
        <div className="dropdown-container">
          <select className='selector' id="period" value={period} onChange={handlePeriodChange}>
            <option value="weekly">Weekly</option>
            <option value="monthly">Monthly</option>
          </select>
        </div>
      </div>

      <div className="chart-container">
        <Bar options={options} data={barChartData} />
      </div>
    </div>
  );
};

export default BarChart;