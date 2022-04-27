import Sidebar from "./parts/Sidebar";
import Navbard from "./parts/Navbar";
import { Container } from "reactstrap";
import { Route, Routes } from "react-router-dom";
import Users from "./pages/users/Users";
import Customers from "./pages/customers/Customers";
import AstonMartin from "./pages/AstonMartin";

const Dashboard = () => {
  return (
    <div className="container fluid">
      <div className="row">
        <div className="col-md-12  a1">
          <Navbard />
        </div>
        <div className=" col-md-2 r2 a3">
          <Sidebar />
        </div>
        <Container fluid>
          <main>
            <Routes>
              <Route path="" element={<Users />} />
              <Route path="User" element={<Users />} />
              <Route path="Customer" element={<Customers />} />
              <Route path="Aston Martin" element={<AstonMartin />} />
            </Routes>
          </main>
        </Container>
      </div>
    </div>
  );
};
export default Dashboard;
