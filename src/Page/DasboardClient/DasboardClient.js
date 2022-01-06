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
import "./style-dasboard-client.css";
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
    const durasiPaket = 'durasi-paket'
    const paketDigunakan = 'paket-digunakan'
    const beliPaket = 'beli-paket'
    const pengumuman = 'pengumuman'
    const scrollingSmooth = (value) => {
      let elementId = document.getElementById(`${value}`)
      elementId.scrollIntoView({behavior: 'smooth'})
    }
    return (
      <>
        <Navbar className="shadow-sm" expand="lg">
          <Container>
            <Navbar.Brand>DUDI TKJ SMK 1 NATAL</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto"></Nav>
              <Nav className="justify-content-end d-flex">
                <Link to='/'>
                  <Nav.Link >Home</Nav.Link>
                </Link>
                <Nav.Link onClick={() => scrollingSmooth(durasiPaket)}>Durasi Paket</Nav.Link>
                <Nav.Link onClick={() => scrollingSmooth(paketDigunakan)}>Paket Digunakan</Nav.Link>
                <Nav.Link onClick={() => scrollingSmooth(beliPaket)}>Paket Layanan</Nav.Link>
                <Nav.Link onClick={() => scrollingSmooth(pengumuman)}>Pengumuman</Nav.Link>
              </Nav>
              <Nav.Link>lOGOUT</Nav.Link>
              <img
                src={Profile}
                className="rounded rounded-circle border border-1"
                alt = {this.state.deskripsiImage}
              />
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <Container className='mb-5'>
          <Row>
            <Col >
              <p id='durasi-paket' className="h2 dasboard-client" style={{width: '224px', marginBottom:'21px'}}>Durasi Sisa Paket</p>
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
            <Col  className="d-flex justify-content-center">
              <p id='ubah-data' className="h2 dasboard-client">Ubah <span>Data</span></p>
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
            <Col  className="d-flex justify-content-center">
              <p id='paket-digunakan' className="h2 dasboard-client">Paket Yang Digunakan</p>
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
            <Col  className="d-flex justify-content-center">
              <p  id='beli-paket' className="h2 dasboard-client">Beli Paket Layanan</p>
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
            <Col  className="d-flex justify-content-center">
              <p id='pengumuman' className="h2 dasboard-client">Pengumuman</p>
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
              <p className="h5 problem">Ada Masalah ?</p>
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
