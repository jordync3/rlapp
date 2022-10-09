import React from 'react'
import './TestComponent.css'
import { Card, Col, Row, Container } from 'react-bootstrap';



const TestComponent= (props) => {





    return (

        <Col lg={12}>
            <h1 className='test-center-text-component'> 
            This is {props.name}'s test Component!
            </h1>
        </Col>
        

    )
}

export default TestComponent