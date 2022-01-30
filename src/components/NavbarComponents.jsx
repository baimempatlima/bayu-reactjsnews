import React, { Component } from "react";
import { Container, Navbar } from "react-bootstrap";

class NavbarComponents extends Component {
  render() {
    return (
      <Navbar variant="dark">
        <Container fluid>
          <Navbar.Brand href="#home">React Bootstrap</Navbar.Brand>
        </Container>
      </Navbar>
    );
  }
}

export default NavbarComponents;
