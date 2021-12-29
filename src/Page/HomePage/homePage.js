import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Container,
  Row,
  Navbar,
  Col,
  Nav,
  Offcanvas,
  Button,
} from "react-bootstrap";
import "./style.css";
import CardTahun from "../../img/icon/cup.png";
import CardBulan from "../../img/icon/sugar.png";
import CardEnam from "../../img/icon/logo.png";
import { Link } from "react-router-dom";

class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      CardBulan: CardBulan,
      CardEnam: CardEnam,
      CardTahun: CardTahun,
      deskripsiImage: "SMK 1 NATAL",
      Home: <Link to="/">Home</Link>,
      Login: <Link to="/login">Login</Link>,
    };
  }
  render() {
    return (
      <Container fluid>
        <Row>
          <Col className="col-header">
            <Navbar className="shadow-sm p-3 mb-5 bg-body" expand={false}>
              <Container fluid>
                <Navbar.Brand href="#">DUDI TKJ SMK 1 NATAL</Navbar.Brand>
                <Navbar.Toggle aria-controls="offcanvasNavbar" />
                <Navbar.Offcanvas
                  id="offcanvasNavbar"
                  aria-labelledby="offcanvasNavbarLabel"
                  placement="end"
                >
                  <Offcanvas.Header closeButton>
                    <Offcanvas.Title id="offcanvasNavbarLabel">
                      DUDI TKJ SMK 1 NATAL
                    </Offcanvas.Title>
                  </Offcanvas.Header>
                  <Offcanvas.Body>
                    <Nav className="link-a justify-content-end flex-grow-1 pe-3">
                      <Link to="/">Home</Link>
                      <Link to="/login">Login</Link>
                    </Nav>
                  </Offcanvas.Body>
                </Navbar.Offcanvas>
              </Container>
            </Navbar>
            <div className="d-flex px-3  justify-content-center align-items-center container-content-header">
              <div className="container-content d-flex flex-column">
                <h1 className="main-header">
                  Bangun Jaringan Telekomunikasi Bersama Teknisi Profesional
                </h1>
                <p className="h4 sub-content my-1 mb-5">
                  Jaringan Kami Tersebar di Segala Pelosok Desa, Bahkan Di
                  Daerah Yang Sulit Di Jangkau Kami Siap
                </p>

                <Button className="button-layanan">Pesan Layanan</Button>
              </div>
            </div>
          </Col>
          <Col md={6} className="image-jumbotron"></Col>
        </Row>
        <Row>
          <Container className="content-2">
            <Row>
              <Col className="d-flex align-items-center flex-column">
                <p className="h2">Mengapa Memilih Kami</p>
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
                      Quod Enchiridion Epictetus stoici scripsit. Rodrigo Abela
                      et Technologiae apud Massachusetts instituta Opera
                      collectio. Ex anglicus latine
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
                      Quod Enchiridion Epictetus stoici scripsit. Rodrigo Abela
                      et Technologiae apud Massachusetts instituta Opera
                      collectio. Ex anglicus latine
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
                      Quod Enchiridion Epictetus stoici scripsit. Rodrigo Abela
                      et Technologiae apud Massachusetts instituta Opera
                      collectio. Ex anglicus latine
                    </p>
                    <p className="h3 harga">Rp. 30.000.000</p>
                    <Link to="/pembayaran">
                      <Button className="button-card">Pilih</Button>
                    </Link>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </Row>
        <Row>
          <Container>
            <Row>
              <Col md={{ span: 5, offset: 1 }}>
                <div className="Content-3">
                  <p className="h3">Paket Tidak Sesuai ?</p>
                  <p className="deskripsi-custome">
                    Tenag kami masih memiliki jalan keluar anda dapat membuat
                    paket anda sendiri dengan keinginan anda !!!
                  </p>
                  <Button className="btn-custome">Pesan Paket Custome</Button>
                </div>
              </Col>
            </Row>
          </Container>
        </Row>
        <Row>
          <Col style={{ padding: 0 }}>
            <div className="footer-container">
              <p>2021 built with heard | All right reserved</p>
            </div>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default HomePage;
