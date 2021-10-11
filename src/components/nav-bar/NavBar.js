import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import "./NavBar.css";
import { ImCart } from "react-icons/im";

const NavBar = () => {
  return (
    <Navbar bg="light" expand="lg" className="navbar sticky-top navbar">
      <Container>
        <Navbar.Brand href="#home">DONAS</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#us">Nosotros</Nav.Link>
            <NavDropdown title="Productos" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Cajas Armadas</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.2">
              Arma tu Caja
              </NavDropdown.Item>
             
            </NavDropdown>
            <Nav.Link href="#contact">Contacto</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="#cart">
            <ImCart />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
