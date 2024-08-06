
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./Homepage";
import DashboardMiniGrid from "./components/DashboardMiniGrid";
import { BarGraph } from "./components/Graph";
import RecentOrdersList from './components/RecentOrdersList';





function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
      </Routes>
    </Router>
  );
}

export default App;
