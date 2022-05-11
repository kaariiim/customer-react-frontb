import Sidebar from "./parts/Sidebar";
import Navbard from "./parts/Navbar";
import { Route, Routes } from "react-router-dom";
import Porsche from "./pages/Porsche";
import MercedesBenz from "./pages/MercedesBenz";
import LotusCars from "./pages/LotusCars";
import Maserati from "./pages/Maserati";
import AstonMartin from "./pages/AstonMartin";
import Bentley from "./pages/Bentley";
import Bugatti from "./pages/Bugatti";
import Ferrari from "./pages/Ferrari";
import Lamborghini from "./pages/Lamborghin";
import RollsRoyce from "./pages/RollsRoyce";

const Dashboard = () => {
  return (
    <div className="container fluid">
      <div className="row g-0">
        <div className="col-12 col-md-12 a1">
          <Navbard />
        </div>
        <div className="col-12 col-md-3">
          <Sidebar />
        </div>
        <div className="col-12 col-md-9">
          <Routes>
            <Route path="/dashboard" element={<AstonMartin />} />
            <Route path="/dashboard/astonmartin" element={<AstonMartin />} />
            <Route path="/dashboard/bentley" element={<Bentley />} />
            <Route path="/bugatti" element={<Bugatti />} />
            <Route path="/ferrari" element={<Ferrari />} />
            <Route path="/lamborghini" element={<Lamborghini />} />
            <Route path="/lotuscars" element={<LotusCars />} />
            <Route path="/maserati" element={<Maserati />} />
            <Route path="/mercedesbenz" element={<MercedesBenz />} />
            <Route path="/porsche" element={<Porsche />} />
            <Route path="/rollsroyce" element={<RollsRoyce />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};
export default Dashboard;
