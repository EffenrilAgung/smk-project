import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import AppNavbar from "../Router/AppNavbar";
import "./style.css";
import { Link } from "react-router-dom";

import { Col, Container, Row, Form, Button } from "react-bootstrap";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
    };
    this.handlerInput = this.handlerInput.bind(this);
  }

  handlerInput(value, e) {
    this.setState(
      {
        [value]: e.target.value,
      },
      console.log(this.state.username)
    );
  }

  showPasswordInput() {
    let inputPassword = document.getElementById("inputPassword");
    if (inputPassword.type === "password") {
      inputPassword.type = "text";
    } else {
      inputPassword.type = "password";
    }
  }
  render() {
    return (
      <div>
        <AppNavbar />
        <Container>
          <Row>
            <Col>
              <div className="d-flex justify-content-center flex-column align-items-center container-content ">
                <p className="h2">
                  <span>Log</span>in
                </p>
                <Form>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control
                      type="email"
                      placeholder="Enter email"
                      onChange={(e) => this.handlerInput("username", e)}
                    />
                    <Form.Text className="text-muted">
                      Masukan Alamat Email.
                    </Form.Text>
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                      type="password"
                      id="inputPassword"
                      placeholder="Password"
                      onChange={(e) => this.handlerInput("password", e)}
                    />
                  </Form.Group>
                  <Form.Group controlId="formBasicCheckbox">
                    <Form.Check
                      type="checkbox"
                      onClick={this.showPasswordInput}
                      label="Lihat Password"
                    />
                  </Form.Group>
                  <Form.Group className="mb-3 mx-auto d-flex justify-content-end">
                    <Form.Label>
                      Belum Memiliki Akun ?{" "}
                      <Link to="/singup">
                        <span>Daftar</span>
                      </Link>{" "}
                    </Form.Label>
                  </Form.Group>
                  <Button variant="primary" type="submit">
                    Submit
                  </Button>
                </Form>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Login;
