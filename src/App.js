
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./Homepage";
import DashboardMiniGrid from "./components/DashboardMiniGrid";
import BarChart from "./components/BarChart";



function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<BarChart />} />
      </Routes>
    </Router>
  );
}

export default App;
