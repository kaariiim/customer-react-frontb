import {
  Collapse,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Nav,
  Navbar,
  NavbarBrand,
  NavbarToggler,
  NavItem,
  NavLink,
  UncontrolledDropdown,
} from "reactstrap";

export default function Navbard() {
  return (
    <div>
      <div>
        <div>
          <div>
            <Navbar color="light" expand="md" light>
              <NavbarBrand href="/">My Show Room Cars</NavbarBrand>
              <NavbarToggler onClick={function noRefCheck() {}} />
              <Collapse navbar>
                <Nav className="me-auto" navbar>
                  <NavItem>
                    <NavLink href="https://www.autosphere.fr/voiture-prestige.html">
                      Luxury Cars
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink href="https://www.classicnumber.com/#:~:text=ClassicNumber.com%20est%20le%20site,de%20sport%20ou%20de%20prestige.">
                      Old Cars
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink href="https://www.cdiscount.com/search/10/batterie+voiture+electrique+enfant.html?NavigationForm.CurrentSelectedNavigationPath=categorycodepath%2f01%7c0102%7c010208&ref=bn#_his_">
                      Children's games(Cars)
                    </NavLink>
                  </NavItem>
                  <UncontrolledDropdown inNavbar nav>
                    <DropdownToggle caret nav>
                      Langues
                    </DropdownToggle>
                    <DropdownMenu right>
                      <DropdownItem>Français</DropdownItem>
                      <DropdownItem>Anglais</DropdownItem>
                      <DropdownItem>Arabe</DropdownItem>
                    </DropdownMenu>
                  </UncontrolledDropdown>
                </Nav>
                <DropdownToggle>Logout</DropdownToggle>
              </Collapse>
            </Navbar>
          </div>
        </div>
      </div>
    </div>
  );
}
