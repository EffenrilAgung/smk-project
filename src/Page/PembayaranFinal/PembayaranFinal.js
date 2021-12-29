import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import {Container, Row, Col} from 'react-bootstrap'
import './style.css'
import imagePayment from '../../img/icon/payment.svg'

class PembayaranFinal extends Component {
    render() {
        return (
            <Container>
                <Row>
                    <Col className='final-payment'>
                        <p className='h2 title-payment'>Hore! Berhasil</p>
                    </Col>
                </Row>
                <Row>
                    <Col className='final-payment'>
                        <img src={imagePayment} height='50%'/>
                    </Col>
                </Row>
                
            </Container>
        )
    }
}

export default PembayaranFinal