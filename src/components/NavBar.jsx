import React from "react";
import { Navbar, Container, NavDropdown } from "react-bootstrap";
import CartWidget from "./CartWidget";

function NavBar() {
  return (
    <React.Fragment>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">
            <CartWidget />
            Coder eCommerce
          </Navbar.Brand>
          <NavDropdown title="Categorías" id="navbarScrollingDropdown">
            <NavDropdown.Item href="#action3">Camisetas</NavDropdown.Item>
            <NavDropdown.Item href="#action4">Pantalones</NavDropdown.Item>
            <NavDropdown.Item href="#action5">Medias</NavDropdown.Item>
          </NavDropdown>
        </Container>
      </Navbar>
    </React.Fragment>
  );
}

export default NavBar;
