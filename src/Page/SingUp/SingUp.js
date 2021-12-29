import { React, Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import AppNavbar from "../Router/AppNavbar";
import "./style.css";

import { Col, Container, Row, Form, Button } from "react-bootstrap";

class SingUp extends Component {
  render() {
    return (
      <div>
        <AppNavbar />
        <Container>
          <Row>
            <Col>
              <div className="d-flex mt-5 align-items-center flex-column container-content ">
                <p className="h2">
                  <span>Sing</span> Up
                </p>
                <Form className="container-form">
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                      Masukan Alamat Email Aktif.
                    </Form.Text>
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Nama Depan</Form.Label>
                    <Form.Control type="text" placeholder="Nama Depan" />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Nama Belakang</Form.Label>
                    <Form.Control type="text" placeholder="Nama Belakang" />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>No Whatssap</Form.Label>
                    <Form.Control type="number" placeholder="No Whatssap" />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Alamat</Form.Label>
                    <Form.Control type="text" placeholder="Alamat" />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>re-type Password</Form.Label>
                    <Form.Control
                      type="password"
                      placeholder="re-type Password"
                    />
                  </Form.Group>
                  <div className='d-grid gap-2 mx-5 button-daftar'>
                  <Button variant="primary" size="md" active>
                    Daftar
                  </Button>{" "}
                  </div>
                </Form>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default SingUp;
