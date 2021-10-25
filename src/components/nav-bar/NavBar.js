import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import CartWidget from "../cart-widget/CartWidget";
import "./NavBar.css";

const NavBar = () => {
  return (
    <Navbar bg="light" expand="lg" className="navbar sticky-top navbar">
      <Container>
        <Navbar.Brand>
          <Nav.Link href="/Home">DONAS</Nav.Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavDropdown title="Categorías" id="basic-nav-dropdown">
              <NavDropdown.Item href="/category/glazed" className="selected">
                Glaciados
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/category/fillers" className="selected">
                Rellenos
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link href="#cart">
              <CartWidget />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
