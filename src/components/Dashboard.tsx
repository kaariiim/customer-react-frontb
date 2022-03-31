import { useContext } from "react";
import { FormattedMessage } from "react-intl";
import { Link, Route, Routes, useNavigate } from "react-router-dom";
import {
  Collapse,
  Container,
  DropdownItem,
  DropdownMenu,
  Nav,
  Navbar,
  NavbarToggler,
  UncontrolledDropdown,
} from "reactstrap";
import Users from "./pages/users/Users";
import { UserContext } from "../context/user-context";
import Customers from "./pages/customers/Customers";

function Dashboard(props: any) {
  const navigate = useNavigate();
  const { user, isLoading } = useContext(UserContext);

  return user && !isLoading ? (
    <>
      <Navbar color="danger" expand="md" light>
        <NavbarToggler onClick={function noRefCheck() {}} />
        <Collapse navbar>
          <Nav className="me-auto" navbar></Nav>
          <Nav>
            <UncontrolledDropdown inNavbar nav>
              <DropdownMenu style={{ right: 0 }}>
                <DropdownItem disabled>
                  {user.firstName} {user.lastName}
                  <br />
                </DropdownItem>
                <DropdownItem>
                  <Link to="/profil">
                    <FormattedMessage id="profil" />
                  </Link>
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem
                  onClick={() => {
                    props.goToLogin();
                    navigate("/");
                  }}
                >
                  <FormattedMessage id="logout" />
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
        </Collapse>
      </Navbar>
      <Container fluid>
        <main>
          <Routes>
            <Route path="" element={<Users />} />
            <Route path="users" element={<Users />} />
            <Route path="trainings" element={<Customers />} />
          </Routes>
        </main>
      </Container>
    </>
  ) : (
    <>Loading...</>
  );
}

export default Dashboard;
