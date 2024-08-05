import { Chart as ChartJS } from "chart.js/auto";
import { Bar } from "react-chartjs-2";

import barChartData from '../../data/barChartData.json';

const BarChart = () => {



  return (
    <div className="row rounded-4 bg-success m-0">

        <Bar className="py-3"
          data={{
            labels: barChartData.map(v => v.label),
            datasets: [
              {
                label: '',
                data: barChartData.map((e) => e.value),
                backgroundColor: "#7095FF",
                borderRadius: 20,
              }
            ]
          }}
        />
    </div>

  );
}


export default BarChart;