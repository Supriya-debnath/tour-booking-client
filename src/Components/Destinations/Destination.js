import React from 'react';
import img1 from "../../images/des4.webp";
import img2 from "../../images/des2.jpg";
import img3 from "../../images/des3.jfif";
import img4 from "../../images/des1.jpg";
import './Destination.css'
// import Footer from '../Footer/Footer';


const Destination = () => {
    return (
        <>
        <div className="destination">
            <h2 className="tour">Top Destination</h2>
            <div className="img">
            <div>
        <img style={{ height: "230px", padding:"20px" }} src={img1} alt="" />
        </div> 
            <div>
        <img style={{ height: "230px", padding:"20px" }} src={img2} alt="" />
        </div> 
            <div>
        <img style={{ height: "230px", padding:"20px" }} src={img3} alt="" />
        </div> 
            <div>
        <img style={{ height: "230px", padding:"20px" }} src={img4} alt="" />
        </div> 

        </div> 

            
        </div>
        {/* <Footer></Footer> */}
        </>
    );
};

export default Destination;