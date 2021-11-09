import { useContext } from 'react';
import { Card, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';

const ServiceDetails = ({service}) => {
    console.log(service);
    const { _id, name, description, price, img } = service;
    const {setCart} = useContext(UserContext)


    return (
      <Col>
        <Card className="shadow mb-4">
          <div className="d-flex align-items-center p-2">
            <Card.Img
              className="w-100 pt-3"
              style={{ objectFit: "contain", height: "300px" }}
              variant="top"
              src={img}
            />
          </div>
          <Card.Body>
            <Card.Title>{name}</Card.Title>
            <Card.Text>{description}</Card.Text>
            <p style={{color: "salmon"}}>4 DAYS - 3 NIGHTS</p>
            <h3> Visit $ {price}</h3>
            <Button as={Link} to={`/booking/${_id}`} onClick={()=>setCart(service)} className="service-btn">Book Now</Button>
          </Card.Body>
        </Card>
      </Col>
    );
};

export default ServiceDetails;