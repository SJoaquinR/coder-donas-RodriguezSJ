import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { useHistory } from "react-router";
import CartWidget from "../cart-widget/CartWidget";
import "./NavBar.css";

const NavBar = () => {
  const history = useHistory(); //Lo uso para mantener el css de boostrap

  return (
    <Navbar bg="light" expand="lg" className="navbar sticky-top navbar">
      <Container>
        <Navbar.Brand>
          <Nav.Link onClick={() => history.push("/Home")}>DONAS</Nav.Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavDropdown title="Categorías" id="basic-nav-dropdown">
              <NavDropdown.Item onClick={() => history.push("/category/glazed")} className="selected">
                Glaciados
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item onClick={() => history.push("/category/fillers")} className="selected">
                Rellenos
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link onClick={() => history.push("/cart")}>
              <CartWidget />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
