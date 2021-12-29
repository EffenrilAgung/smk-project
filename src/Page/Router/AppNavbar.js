import React, { Component } from "react";
import { Navbar, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import './style.css'
import { Link } from "react-router-dom";

class AppNavbar extends Component {
  render() {
    return (
      <Navbar expand="lg" variant="light" bg="light">
        <Container>
          <Navbar.Brand className="mx-auto"><Link to='/'>DUDI TKJ <span>SMK 1 NATAL</span></Link></Navbar.Brand>
        </Container>
      </Navbar>
    );
  }
}

export default AppNavbar;
