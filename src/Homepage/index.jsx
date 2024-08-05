
import BarChart from "../components/BarChart";
import DashboardMiniGrid from "../components/DashboardMiniGrid";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";

// Import CSS
import './Homepage.css';

const Homepage = () => {

  return (
    <>
      <Header />
      <Sidebar />
      <div className="homepage">
        <div className="home-section-left">
          <h3 className="mb-2 ms-1">Dashboard</h3>
          <DashboardMiniGrid />
          <BarChart />

        </div>


        <div className="home-section-right"></div>

      </div>
    </>
  );
}

export default Homepage;