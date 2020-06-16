import React, { Component } from 'react';
import { Form, Jumbotron, Container, Row, Col} from 'react-bootstrap';
import { Link } from 'react-router-dom';
// import contact from '../assets/contact.jpeg';

class Contact extends Component {
    render() {
        return (
            <div className="contact">
                <Jumbotron fluid className="jumbo">
                    <Container>
                        <h1>Contact us</h1>
                        
                    </Container>
                </Jumbotron>
                <Form className="container">
                    <Row>
                        <Col>
                        <Form.Control placeholder="First name" className="shadow-none" /> <br/>
                        <Form.Control placeholder="Last name" /> <br/>
                        <Form.Control placeholder="Phone Number" /> <br/>
                        <Form.Control placeholder="Email" /> <br/>
                        <Form.Control placeholder="Subject" /> <br />
                        <Form.Control as="textarea" rows="5"  placeholder="Message"/>
                    
                    <br />
                    <Link to="/" className="contact-btn">SUBMIT</Link>
                    </Col>
                    <Col className="left">
                        <h2>Reach Out </h2>
                        <p><span>Email</span>: Dullame@info.com</p>
                        <p><span>Telphone</span>: +143567890</p>
                        <p><span>address</span>: 21, Old Broadway road. </p>
                        
                    </Col>
                    </Row>
                </Form>                
            </div>
        )
    }
}

export default Contact
