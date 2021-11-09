import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        <div className="main-footer footer">
            <div className="container">
                <div className="row">
                <div  className= "col-md-3 col-sm-6">
                      <h4>
                        Contact Us
                      </h4>
                      <ul className="list-unstyled">
                          <li>978874653</li>
                          <li>tourbooking@gmail.com</li>
                          <li>tour Management</li>
                      </ul>

                  </div>
                 
                  <div  className= "col-md-3 col-sm-6">
                      <h4>
                        INFORMATION
                      </h4>
                      <ul className="list-unstyled">
                          <li>Press Centre</li>
                          <li>Travel News</li>
                          <li>Privacy Policy</li>
                          <li>Contact Us</li>    
                      </ul>

                  </div>
                  <div  className= "col-md-3 col-sm-6">
                      <h4>
                        OUR MENU
                      </h4>
                      <ul className="list-unstyled">
                          <li>Career</li>
                          <li>Terms</li>
                          <li>Privacy Policy</li>
                          <li>Contact</li>
                      </ul>

                  </div>
                  <div  className= "col-md-3 col-sm-6">
                      <h4>
                        INSTAGRAM
                      </h4>
                      <ul className="list-unstyled">
                          <li>Instagram did not return a 200.</li>
                      </ul>

                  </div>
                 

                </div>
                {/* Footer Button  */}
                <div className="footer-button">
                    <p className="text-xs-center">
                        &copy;{new Date().getFullYear()} City Travel WP -All Right reserved.
                    </p>

                </div>

            </div>
            
        </div>
    );
};

export default Footer;