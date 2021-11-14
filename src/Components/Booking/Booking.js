import React, { useEffect, useState } from 'react';
import { Card, Col } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useHistory, useParams } from 'react-router';
import useAuth from '../../hooks/useAuth';
import './Booking.css';

const Booking = () => {
    const {user} = useAuth();

    const { serviceId } = useParams();
    const [booking, setBooking] = useState({});

    const {description, price, name, img} = booking;
    useEffect( () => {
        fetch(`https://pure-headland-36785.herokuapp.com/tourBooking/${serviceId}`)
        .then(res => res.json())
        .then(data => {
          console.log(data);
          setBooking(data)
        })
    }, [])

    const { register, handleSubmit } = useForm();
    const history = useHistory();
    const onSubmit = data => {
      console.log(data);
        fetch('https://pure-headland-36785.herokuapp.com/confirmOrder', {
            method: 'POST',
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(data),
        })
        .then(res=>res.json())
        .then((result) => {
          if(result.insertedId){
            history.push("/myBooking")
          }
        });

      console.log(data)
    };

    return (
        <div className="container pt-3">
            <h2>Confirm Your Booking</h2>
           <div className="container booking">

           <div className="pt-4">
           <Col>
        <Card className="shadow mb-4 mx-5">
          <div className="d-flex align-items-center">
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
          </Card.Body>
        </Card>
      </Col>
            </div>
            <div className="add-service pt-3">
            <form onSubmit={handleSubmit(onSubmit)}>

            <input type="text" {...register("name")} 
            readOnly
            defaultValue={user?.displayName}
            className="p-2 m-2 w-100"
            /> 

            <input type="text" {...register("email")} 
            readOnly
            defaultValue={user?.email}
            className="p-2 m-2 w-100"
            />

            <input type="text" {...register("address")}
            placeholder="Enter your address"
            className="p-2 m-2 w-100"
            />         

            <input type="text" {...register("phoneNumber")}
            placeholder="Phone Number"
            className="p-2 m-2 w-100"
            />         

            {name &&
              <input type="text" {...register("title")} 
              readOnly
              defaultValue={name}
              className="p-2 m-2 w-100"
              />
            }         

            {price &&
              <input type="number" {...register("price")} 
              readOnly
              defaultValue={price}
              className="p-2 m-2 w-100"
              />
            }

      <input type="submit" value="Book Now"/>
    </form>
        </div>

           </div>
     
        </div>
    );
};

export default Booking;
