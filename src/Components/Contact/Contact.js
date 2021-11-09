import React from 'react';
import image from "../../images/contactt.jpg";
import { Form, Button, Container, Row } from 'react-bootstrap';
import './Contact.css';
import Footer from '../Footer/Footer';


const Contact = () => {
    return (
        <div className="contact">
        <Container className="contact-container">
        <Row xs={1} sm={1} md={2} lg={2} className="g-4">
        <div>
            <Form>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label style={{color:"skyblue"}}>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" />
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label style={{color:"skyblue"}}>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" />
  </Form.Group>
  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>
        </div>
        
        </Row>
        </Container>
        <Footer/>
        </div>
    );
};

export default Contact;