import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";

// Placeholder imports — you can create these pages later
import PlanTrip from "../pages/PlanTrip";
import WeatherTraffic from "../pages/WeatherTraffic";
import EmergencySOS from "../pages/EmergencySOS";
import Login from "../pages/Login";

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/plan" element={<PlanTrip />} />
        <Route path="/weather" element={<WeatherTraffic />} />
        <Route path="/sos" element={<EmergencySOS />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
