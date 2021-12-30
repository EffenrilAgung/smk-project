import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import {Container, Row, Col} from 'react-bootstrap'
import './style.css'
import imagePayment from '../../img/icon/payment.svg'
import ButtonComponent from '../../Component/Button/button'
import {Link} from 'react-router-dom'

class PembayaranFinal extends Component {
    render() {
        return (
            <Container>
                <Row>
                    <Col className='final-payment'>
                        <p className='h2 title-payment'>Hore! Berhasil</p>
                        <img src={imagePayment} className='image-final' width='40%' fluid/>
                        <p className='text-center'>Kami akan menginformasikan status Pembayaran mu via Wa Berdoa Saja Semoga Admin Dalam kondisi Sehat Agar Pembayaranmu Cepat Dikonfirmasi</p>
                        <Link to='/'><ButtonComponent cname='btn-back'>Kembali Ke Halaman Awal</ButtonComponent></Link>
                        <ButtonComponent cname='konfirm-wa'>Konfirmasi Wa</ButtonComponent>
                    </Col>
                </Row>
                
            </Container>
        )
    }
}

export default PembayaranFinal