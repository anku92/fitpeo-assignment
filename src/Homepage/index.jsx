import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import './Homepage.css';

const Homepage = () => {
  return (
    <>
      <Header />
      <Sidebar />
      <div className="homepage">
        <div className="home-section-left"></div>
        <div className="home-section-right"></div>

      </div>
    </>
  );
}

export default Homepage;