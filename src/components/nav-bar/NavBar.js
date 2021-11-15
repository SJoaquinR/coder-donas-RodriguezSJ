import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { useHistory } from "react-router";
import CartWidget from "../cart-widget/CartWidget";
import "./NavBar.css";

const NavBar = () => {
  const history = useHistory(); 

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
              <NavDropdown.Item
                onClick={() => history.push("/category/glazed")}
              >
                Glaciados
              </NavDropdown.Item>
              <NavDropdown.Item
                onClick={() => history.push("/category/fillers")}
              >
                Rellenos
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item onClick={() => history.push("/category/all")}>
                Todos
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
