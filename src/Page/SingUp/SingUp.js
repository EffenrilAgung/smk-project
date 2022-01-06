import React  from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import AppNavbar from "../Router/AppNavbar";
import "./style.css";
import axios from 'axios'

import { Col, Container, Row, Form, Button } from "react-bootstrap";
class SingUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      namaDepan: "",
      namaBelakang: "",
      NoWhatsApp: 0,
      alamat: "",
      password: "",
      retypePassword: "",
      infoPassword: "",
    };
     this.handlerInputSingUp = this.handlerInputSingUp.bind(this);
  }
  handlerInputSingUp(valueState, e) {
    const value = e.target.value;
    this.setState({
      [valueState]: value,
    });    
  }

  handleDaftar() {
     const data = {
      email: this.state.email,
      namaDepan: this.state.namaDepan,
      namaBelakang: this.state.namaBelakang,
      noWA : this.state.NoWhatsApp,
      alamat: this.state.alamat,
      password: this.state.password,
      pw1: this.state.password,
      pw2: this.state.retypePassword
    }
    axios.post('http://localhost:3001/', data)
    .then(result => {
      console.log(result)
    })

  }
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
                    <Form.Control
                      type="email"
                      placeholder="Enter email"
                      onChange={(e) => this.handlerInputSingUp("email", e)}
                    />
                    <Form.Text className="text-muted">
                      Masukan Alamat Email Aktif.
                    </Form.Text>
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Nama Depan</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Nama Depan"
                      onChange={(e) => this.handlerInputSingUp("namaDepan", e)}
                    />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Nama Belakang</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Nama Belakang"
                      onChange={(e) =>
                        this.handlerInputSingUp("namaBelakang", e)
                      }
                    />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>No Whatssap</Form.Label>
                    <Form.Control
                      type="number"
                      placeholder="No Whatssap"
                      onChange={(e) => this.handlerInputSingUp("NoWhatsApp", e)}
                    />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Alamat</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Alamat"
                      onChange={(e) => this.handlerInputSingUp("alamat", e)}
                    />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="passwordfirst">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                      type="password"
                      placeholder="Password"
                      onChange={(e) => this.handlerInputSingUp("password", e)}
                    />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="passwordsecond">
                    <Form.Label>re-type Password</Form.Label>
                    <Form.Control
                      type="password"
                      placeholder="re-type Password"
                      onChange={(e) =>
                        this.handlerInputSingUp("retypePassword", e)
                      }
                      
                    />
                     <Form.Text className="text-muted">
                      {this.state.infoPassword}
                    </Form.Text>
                  </Form.Group>
                  <div className="d-grid gap-2 mx-5 button-daftar">
                    <Button
                      variant="primary"
                      size="md"
                      type="submit"
                      onClick={this.handleDaftar()}
                    >
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
