import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { NavLink, Link } from "react-router-dom";
import CartWidget from "../cart-widget/CartWidget";
import "./NavBar.css";

const NavBar = () => {
  return (
    <Navbar bg="light" expand="lg" className="navbar sticky-top navbar">
      <Container>
        <Navbar.Brand>
          <Link to="/">DONAS</Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {/* <Nav.Link href="#us">Nosotros</Nav.Link> */}
            <NavDropdown title="Categorías" id="basic-nav-dropdown">
              <NavDropdown.Item>
                <NavLink to="/category/glazed" activeClassName="selected">Glaciados</NavLink>
              </NavDropdown.Item>

              <NavDropdown.Divider />

              <NavDropdown.Item>
                <NavLink to="/category/fillers" activeClassName="selected">Rellenos</NavLink>
              </NavDropdown.Item>
            </NavDropdown>
            {/* <Nav.Link href="#contact">Contacto</Nav.Link> */}
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
