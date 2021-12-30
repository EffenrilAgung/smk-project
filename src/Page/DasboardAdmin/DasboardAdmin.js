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
import React from "react";
import ButtonComponent from "../../Component/Button/button";
import Profile from "../../img/profile.jpg"

class DasboardAdmin extends React.Component {
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
                <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">
                    Another action
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">
                    Something
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4">
                    Separated link
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav>
              <Nav.Link>lOGOUT</Nav.Link>
              <img src={Profile} className="rounded rounded-circle border border-1"/>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <Container className='mb-5' fluid>
          <Row>
            <Col className="d-flex justify-content-center">
              <p className="h2 text-center">Daftar Pengguna Layanan</p>
            </Col>
          </Row>
          <Row style={{marginBottom: '100px'}}>
            <Col>
              <Table className='border border-1' responsive="sm">
                <thead>
                  <tr>
                    <th>Username</th>
                    <th>Nama Depan</th>
                    <th>Nama Belakang</th>
                    <th>Password</th>
                    <th>Paket</th>
                    <th>Sisa Paket</th>
                    <th>Status</th>
                    <th>No Hp</th>
                    <th>Control</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Budi@hakerRank.com</td>
                    <td>Budi</td>
                    <td>Gunawan</td>
                    <td>Cicada302</td>
                    <td>6 Bulan</td>
                    <td>25 hari 2 bulan 00 : 00 : 00</td>
                    <td>Active</td>
                    <td>092834809</td>
                    <td>Hapus Pengguna</td>
                  </tr>
                </tbody>
              </Table>
            </Col>
          </Row>
          <Row>
            <Col className="justify-content-center d-flex">
              <p className="h2 text-center">Tambah Paket Layanan</p>
            </Col>
          </Row>
          <Row style={{marginBottom: '100px'}}>
            <Col md={{ span: 6, offset: 3 }}>
              <Form className="d-flex justify-content-center flex-column">
                <Row className="mb-3">
                  <Form.Group as={Col} controlId="formGridEmail">
                    <Form.Label>Paket Layanan</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                  </Form.Group>

                  <Form.Group as={Col} controlId="formGridEmail">
                    <Form.Label>Harga Paket</Form.Label>
                    <Form.Control type="email" placeholder="Harga Paket" />
                  </Form.Group>
                </Row>
                <FloatingLabel
                  controlId="floatingTextarea2"
                  label="Masukkan Keterangan Paket"
                >
                  <Form.Control
                    as="textarea"
                    placeholder="Leave a comment here"
                    style={{ height: "100px" }}
                  />
                </FloatingLabel>
                <ButtonComponent cname="btn-ubah-paket">
                  Ubah Paket
                </ButtonComponent>
              </Form>
            </Col>
          </Row>
          <Row >
            <Col className="d-flex justify-content-center">
              <p className="h2 text-center">Ubah Paket Layanan</p>
            </Col>
          </Row>
          <Row style={{marginBottom: '100px'}}>
            <Col md={{ span: 6, offset: 3 }}>
              <Form className="d-flex justify-content-center flex-column">
                <Row>
                  <Col>
                    {" "}
                    <FloatingLabel
                      controlId="floatingSelect"
                      label="Pilih Paket Layanan"
                    >
                      <Form.Select aria-label="Floating label select example">
                        <option>Pilih Layanan</option>
                        <option value="1">1 Tahun</option>
                        <option value="2">6 Bulan</option>
                        <option value="3">Perbulan</option>
                      </Form.Select>
                    </FloatingLabel>
                  </Col>
                  <Col className="d-flex align-items-center">
                    <Form.Group controlId="formGridEmail">
                      <Form.Control
                        size="lg"
                        type="email"
                        placeholder="Harga Paket"
                      />
                    </Form.Group>
                  </Col>
                </Row>
                <FloatingLabel
                  className="mt-3"
                  controlId="floatingTextarea2"
                  label="Masukkan Keterangan Paket"
                >
                  <Form.Control
                    as="textarea"
                    placeholder="Leave a comment here"
                    style={{ height: "100px" }}
                  />
                </FloatingLabel>
                <ButtonComponent cname="btn-ubah-paket">
                  Tambah Paket
                </ButtonComponent>
              </Form>
            </Col>
          </Row>
          <Row>
            <Col className="d-flex justify-content-center ">
              <p className="h2 text-center">Buat Berita</p>
            </Col>
          </Row>
          <Row>
            <Col md={{ span: 10, offset: 1 }}>
              <FloatingLabel controlId="floatingTextarea2" label="Kirim Berita Client">
                <Form.Control
                  as="textarea"
                  placeholder="Leave a comment here"
                  style={{ height: "100px" }}
                />
              </FloatingLabel>
            </Col>
          </Row>
          <Row>
              <Col sm={7}>
              </Col>
              <Col className='d-flex justify-content-end'>
              <ButtonComponent cname="btn-berita-paket">
                  Tambah Paket
                </ButtonComponent>
              </Col>
          </Row>
        </Container>
      </>
    );
  }
}
export default DasboardAdmin;
