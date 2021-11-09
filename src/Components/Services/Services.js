import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Service from '../ServiceDetails/ServiceDetails';
import './Services.css';

const Services = () => {

    const [services, setServices] = useState([])
    useEffect(() => {
        fetch('https://pure-headland-36785.herokuapp.com/tours')
        .then(res => res.json())
        .then(data => setServices(data))
    }, [])

    return (
            

        <div>
            <h2 className="service-title">Most Popular Tours</h2>
             <p className="service-title">A tourist attraction is a place of interest where tourists visit,  <br /> typically for its inherent or an exhibited natural or cultural value, historical significance,  <br /> natural or built beauty, offering leisure and amusement.</p>
       
        <div className="service-container">
             
           <Container className="container__style">
            <Row xs={1} sm={1} md={2} lg={3} className="g-4">
            {
                services.map(service => <Service service={service}></Service>)
            }
            </Row>
            </Container>
        </div>
        </div>

    );

};

export default Services;