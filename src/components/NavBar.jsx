import React, { Component } from "react";
import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";

class NavBar extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar bg="dark" variant="dark">
          <Container>
            <Navbar.Brand href="#home">Coder eCommerce</Navbar.Brand>
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
}

export default NavBar;
