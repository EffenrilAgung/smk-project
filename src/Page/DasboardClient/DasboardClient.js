import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Container,
  Row,
  Col,
  Navbar,
  Nav,
  Form,
  Button,
} from "react-bootstrap";
import "./style.css";
import Profile from "../../img/profile.jpg";
import ButtonComponent from "../../Component/Button/button";
import CardEnam from "../../img/icon/logo.png";
import CardTahun from "../../img/icon/cup.png";
import CardBulan from "../../img/icon/sugar.png";
import { Link } from "react-router-dom";

class DasboardClient extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      CardBulan: CardBulan,
      CardEnam: CardEnam,
      CardTahun: CardTahun,
      deskripsiImage: "SMK 1 NATAL",
    };
  }
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
        <Container className='mb-5'>
          <Row>
            <Col>
              <p className="h2" style={{width: '224px', marginBottom:'21px'}}>Durasi Sisa Paket</p>
            </Col>
          </Row>
          <Row>
            <Col md={10}>
              <p className="mx-3 fs-4">25 Hari 00:00:00</p>
            </Col>
            <Col>
              <p className="fs-4">Active</p>
            </Col>
          </Row>
          <Row>
            <Col className="d-flex justify-content-center">
              <p className="h2">Ubah <span>Data</span></p>
            </Col>
          </Row>
          <Row>
            <Col>
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
                <ButtonComponent cname="btn-ubahData">Ubah</ButtonComponent>
              </Form>
            </Col>
          </Row>
          <Row>
            <Col className="d-flex justify-content-center">
              <p className="h2">Paket Yang Digunakan</p>
            </Col>
          </Row>
          <Row>
            <Col>
              <div className="card">
                <div className="d-flex  align-items-center flex-column card-content">
                  <p className="h3 card-title">Berlangganan Per 6 Bulan</p>
                  <img
                    src={this.state.CardEnam}
                    className="card-image"
                    width="60"
                    height="60"
                    alt={this.state.deskripsiImage}
                  />
                  <p className="deskripsi-card my-5">
                    Quod Enchiridion Epictetus stoici scripsit. Rodrigo Abela et
                    Technologiae apud Massachusetts instituta Opera collectio.
                    Ex anglicus latine
                  </p>
                  <p className="h3 harga">Rp. 30.000.000</p>
                </div>
              </div>
            </Col>
          </Row>
          <Row>
            <Col className="d-flex justify-content-center">
              <p className="h2">Beli Paket Layanan</p>
            </Col>
          </Row>
          <Row>
            <Col className="container-card d-flex justify-content-md-evenly mt-5">
              <div className="card">
                <div className="d-flex  align-items-md-center flex-column card-content">
                  <p className="h3 card-title">Berlangganan Per Tahun</p>
                  <img
                    src={this.state.CardTahun}
                    className="card-image"
                    width="60"
                    height="60"
                    alt={this.state.deskripsiImage}
                  />
                  <p className="deskripsi-card my-5">
                    Quod Enchiridion Epictetus stoici scripsit. Rodrigo Abela et
                    Technologiae apud Massachusetts instituta Opera collectio.
                    Ex anglicus latine
                  </p>
                  <p className="h3 harga">Rp. 30.000.000</p>
                  <Link to="/pembayaran">
                    <Button className="button-card">Pilih</Button>
                  </Link>
                </div>
              </div>

              <div className="card">
                <div className="d-flex  align-items-center flex-column card-content">
                  <p className="h3 card-title">Berlangganan Per 6 Bulan</p>
                  <img
                    src={this.state.CardEnam}
                    className="card-image"
                    width="60"
                    height="60"
                    alt={this.state.deskripsiImage}
                  />
                  <p className="deskripsi-card my-5">
                    Quod Enchiridion Epictetus stoici scripsit. Rodrigo Abela et
                    Technologiae apud Massachusetts instituta Opera collectio.
                    Ex anglicus latine
                  </p>
                  <p className="h3 harga">Rp. 30.000.000</p>
                  <Link to="/pembayaran">
                    <Button className="button-card">Pilih</Button>
                  </Link>
                </div>
              </div>
              <div className="card">
                <div className="d-flex  align-items-center flex-column card-content">
                  <p className="h3 card-title">Berlangganan Per Bulan</p>
                  <img
                    src={this.state.CardBulan}
                    className="card-image"
                    width="60"
                    height="60"
                    alt={this.state.deskripsiImage}
                  />
                  <p className="deskripsi-card my-5">
                    Quod Enchiridion Epictetus stoici scripsit. Rodrigo Abela et
                    Technologiae apud Massachusetts instituta Opera collectio.
                    Ex anglicus latine
                  </p>
                  <p className="h3 harga">Rp. 30.000.000</p>
                  <Link to="/pembayaran">
                    <Button className="button-card">Pilih</Button>
                  </Link>
                </div>
              </div>
            </Col>
          </Row>
          <Row>
            <Col className="d-flex justify-content-center">
              <p className="h2">Pengumuman</p>
            </Col>
          </Row>
          <Row>
            <Col className="border pengumuman border-1 d-flex align-items-center justify-content-center">
              <p className="h4 text-center">
                Belum Ada Pemberitahuan Dari Admin
              </p>
            </Col>
          </Row>
          <Row>
            <Col>
              <p className="h5">Ada Masalah ?</p>
              <ButtonComponent cname="btn-ubahData">
                Hubungi Admin
              </ButtonComponent>
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}

export default DasboardClient;
