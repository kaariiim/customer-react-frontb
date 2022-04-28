import Sidebar from "./parts/Sidebar";
import Navbard from "./parts/Navbar";
import { Route, Routes } from "react-router-dom";
import Users from "./pages/users/Users";
import Porsche from "./pages/Porsche";
import Home from "./pages/Home";

const Dashboard = () => {
  return (
    <div className="container fluid">
      <div className="row">
        <div className=" col-12 col-md-12  a1">
          <Navbard />
        </div>
        <div className=" col-12 col-md-2  a3">
          <Sidebar />
        </div>
        <div className="col-12 col-md-10 c1">
          <Routes>
            <Route path="/" element={<Users />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};
export default Dashboard;
