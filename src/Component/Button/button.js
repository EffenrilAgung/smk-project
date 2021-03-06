import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './style.css'
import { Button } from 'react-bootstrap'
import { propTypes } from 'react-bootstrap/esm/Image'


function ButtonComponent(props) {
    console.log(props)
        return (
        
                <Button className={`button-component ${props.cname}`}>
                    {props.children}
                </Button>
     
        )
}

ButtonComponent.protoType = {
    onclick: propTypes.func,
    className: propTypes.string
}

export default ButtonComponent