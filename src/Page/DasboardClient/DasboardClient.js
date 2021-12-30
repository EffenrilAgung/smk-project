import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
    Container,
    Row,
    Col,
    Navbar,
    Nav,
    NavDropdown,
    Table,
    Form,
    FloatingLabel,
  } from "react-bootstrap";
import "./style.css";
import Profile from "../../img/profile.jpg"

class DasboardClient extends React.Component {
  render() {
    return (
      <>
        <Navbar className="shadow-sm" expand="lg">
          <Container>
            <Navbar.Brand href="#home">DUDI TKJ SMK 1 NATAL</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto"></Nav>
              <Nav className="justify-content-end d-flex">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#home">Durasi Paket</Nav.Link>
                <Nav.Link href="#home">Paket Digunakan</Nav.Link>
                <Nav.Link href="#home">Paket Layanan</Nav.Link>
                <Nav.Link href="#home">Pengumuman</Nav.Link>
              </Nav>
              <Nav.Link>lOGOUT</Nav.Link>
              <img
                src={Profile}
                className="rounded rounded-circle border border-1"
              />
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </>
    );
  }
}

export default DasboardClient