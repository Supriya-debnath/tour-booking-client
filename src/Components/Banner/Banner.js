import React from 'react';
import { Carousel } from 'react-bootstrap';
import banner1 from '../../images/tour..webp';
import banner2 from '../../images/tour2.jpg';
import banner3 from '../../images/tour.jpg';

const Banner = () => {
    return (
        <>
            <Carousel>
                
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={banner1}
                        alt="Best Travel Experience"
                    />
                    <Carousel.Caption>
                        <h3 style={{fontSize: "70px", margin:"50px", color: "skyblue"}}>Best Travel Experience</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={banner2}
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3 style={{fontSize: "70px", margin:"50px", color: "black"}}>Best Travel Experience</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={banner3}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3 style={{fontSize: "70px", margin:"50px", color: "black"}}>Best Travel Experience</h3>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </>
    );
};

export default Banner;