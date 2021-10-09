import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import "./NavBar.css";

const NavBar = () => {
  return (
    <Navbar fixed="top" collapseOnSelect expand="lg" bg="light"  >
      <Container>
        <Navbar.Brand href="#home">DONAS</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#us">Nosotros</Nav.Link>
            <NavDropdown title="Productos" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">
                Cajas Armadas
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.2">
                Arma tu Caja
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link href="#contact">Contacto</Nav.Link>
            <Nav.Link eventKey={2} href="#cart">
              Carrito
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
