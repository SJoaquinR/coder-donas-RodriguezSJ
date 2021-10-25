import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { NavLink, Link } from "react-router-dom";
import CartWidget from "../cart-widget/CartWidget";
import "./NavBar.css";

const NavBar = () => {
  return (
    <Navbar bg="light" expand="lg" className="navbar sticky-top navbar">
      <Container>
        <NavLink to={`/`}>
          <Navbar.Brand>DONAS</Navbar.Brand>
        </NavLink>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#us">Nosotros</Nav.Link>
            <NavDropdown title="Productos" id="basic-nav-dropdown">
              <Link to={`/category/glazed`}>
                <NavDropdown.Item href="#action/3.1">
                  Glaciados
                </NavDropdown.Item>
              </Link>
              <NavDropdown.Divider />
              <Link to={`/category/fillers`}>
                <NavDropdown.Item href="#action/3.2">Rellenos</NavDropdown.Item>
              </Link>
            </NavDropdown>
            <Nav.Link href="#contact">Contacto</Nav.Link>
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
