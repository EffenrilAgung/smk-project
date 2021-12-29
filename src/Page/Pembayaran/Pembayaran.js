import  React  from "react";
import {Container,  Row, Col } from "react-bootstrap"
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";
import ButtonComponent from "../../Component/Button/button";
import {Link} from 'react-router-dom'

class Pembayaran extends React.Component {
    render() {
        return(
            <Container className='py-5'>
                <Row>
                    <Col className="py-4">
                        <p className="Pembayaran h2">
                            Pembayaran
                        </p>
                    </Col>
                </Row>
                <Row className='my-5'>
                    <Col md={{span:5, offset:3}} className='rounded border border-1 mx-auto'>
                        <p className="h4">PayPal</p>
                        <p className="h5 text-primary">345345 98090 87899</p>
                        <p className="h4">Effenril Agung</p>
                    </Col>
                </Row>
                <Row>
                    <Col md={{span:5, offset:3}}>
                        <p className="h6">Jumlah Transfer</p>
                        <div className="container-pembayaran my-3">
                            <p className='Pembayaran'>Paket Satu Tahun</p>
                            <p className='Pembayaran'>Pajak : 50%</p>
                            <p className='Pembayaran'>Total : Rp.50.000.000</p>
                        </div>
                        <p className="h6 format-pembayaran">
                        Konfirmasi via wa dengan upload bukti pembayaran lalu konfirmasi dengan Format: <div>Nama_pengirim Nama_bank Jumlah-Transfer Nama</div>
                        </p>
                    </Col>
                </Row>
                <Row>
                    <Col>
                    <div className="d-flex justify-content-center mt-5">
                       <Link to='/final'>
                        <ButtonComponent cname='button-pembayaran'>
                                Lanjutkan Pembayaran
                            </ButtonComponent>
                       </Link>
                    </div>
                    </Col>
                </Row>
                <Row className="mt-3">
                    <Link to='/'>
                    <Col className='d-flex justify-content-center align-items-center'>
                        <ButtonComponent cname='outline-danger'>Cancle</ButtonComponent>
                    </Col>
                    </Link>
                </Row>
            </Container>
        )
    }
}
export default Pembayaran