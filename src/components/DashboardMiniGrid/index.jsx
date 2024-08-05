
import Grid from "./Grid";


const DashboardMiniGrid = () => {

  const grid_data = [
    {
      icon: "https://placehold.co/200/283169/png",
      title: "Total Orders",
      value: { count: '75' },
      status: 'up',
      change: 3
    },
    {
      icon: "https://placehold.co/200/145347/png",
      title: "Total Delivered",
      value: { count: '70' },
      status: 'down',
      change: 3
    },
    {
      icon: "https://placehold.co/200/613339/png",
      title: "Total Cancelled",
      value: { count: '05' },
      status: 'up',
      change: 3
    },
    {
      icon: "https://placehold.co/200/5D2B4A/png",
      title: "Total Revenue",
      value: { amount: '12' },
      status: 'down',
      change: 3
    }
  ]

  return (

    <div className="row p-0 m-0">
      {
        grid_data.map((gdata, index) => {
          return <Grid key={index} data={gdata} />
        })
      }
    </div>


  );
}

export default DashboardMiniGrid;