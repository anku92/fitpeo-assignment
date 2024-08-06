export const barChartData = {
  labels: Array.from({ length: 12 }, (_, i) => 5 + i * 2),
  datasets: [
    {
      label: 'Demo',
      data: Array.from(
        { length: 12 },
        () => Math.floor(Math.random() * (15000 - 1000 + 1)) + 1000
      ),
      backgroundColor: "#7093FF",
      borderRadius: 10,
    },
    {
      label: 'Demo',
      data: Array.from(
        { length: 12 },
        () => Math.floor(Math.random() * (15000 - 1000 + 1)) + 1000
      ),
      backgroundColor: "#7093FF",
      borderRadius: 10,
    },
  ],
};


export const doughnutChartData = {};