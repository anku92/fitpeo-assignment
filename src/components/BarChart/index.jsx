import './BarChart.css';
import { Chart as ChartJS, defaults } from "chart.js/auto";
import { Bar } from "react-chartjs-2";

import barChartData from '../../data/barChartData.json';


defaults.maintainAspectRatio = false;
defaults.responsive = true;

const BarChart = () => {

  const labels = [
    '5', '', '9', '', '11', '', '13', '', '15', '', '17', '', '19', '', '21', '', '23', '', '25', '', '27'];

  const dataValues = barChartData.map((e) => e.value);

  const data = labels.map((label, index) => dataValues[index] || 0);

  return (
    <div className="row p-0 m-0">
      <div className="col py-0 px-1">
        <Bar
          className="chart"
          data={{
            labels: labels,
            datasets: [
              {
                label: '',
                data: data,
                backgroundColor: "#7095FF",
                borderRadius: 20,
              }
            ]
          }}
          options={{
            plugins: {
              title: {
                text: "Activity"
              },
              legend: {
                display: false,
              },
              tooltip: {
                callbacks: {
                  label: function (tooltipItem) {
                    return `$${tooltipItem.raw}`;
                  }
                }
              }
            },
            scales: {
              x: {
                stacked: false,
                ticks: {
                  autoSkip: false,
                  maxRotation: 90,
                  minRotation: 45
                }
              },
              y: {
                stacked: false,
                ticks: {
                  callback: function (value) {
                    if (value === 4000) return "5k";
                    if (value === 10000) return "10k";
                    if (value > 15000) return "15k";
                    if (value === 0) return "0";
                    return ''
                  }
                }
              }
            }
          }}
        />
      </div>
    </div>
  );
};

export default BarChart;
