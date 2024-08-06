import DashboardMiniGrid from "../components/DashboardMiniGrid";
import BarChart from "../components/Graph/BarChart";
import Header from "../components/Header";
import RecentOrdersList from "../components/RecentOrdersList";
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
          <h3 className="mb-2 ms-2">Dashboard</h3>
          <DashboardMiniGrid />
          <BarChart />
          <RecentOrdersList />
        </div>

        <div className="home-section-right"></div>
      </div>
    </>
  );
}

export default Homepage;