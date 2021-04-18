import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faMapMarkedAlt, faPhone } from '@fortawesome/free-solid-svg-icons'

const Footer = () => {
    return (
        <footer style={{backgroundColor: '#9E1F63'}} className="mt-5 py-4 text-white">
            <div className="container">
                <div className="row">
                    <div className="col-md-8 col-sm-12 py-3">
                        <h2>Would You Like To Start A Project With Us?</h2>
                        <p>That’s great things to hear! We offer up to two images for trial and it’s totally free of cost. That means you can start a project with us without spending money! So, don’t let your valuable time go!</p>
                    </div>
                    <div className="col-md-4 col-sm-12">
                        <h2>Contact Us</h2>
                        <div className="d-flex">
                            <FontAwesomeIcon style={{height: '20px'}} icon={faMapMarkedAlt} />
                            <p className="ms-2">Dhaka, Bangladesh</p>
                        </div>
                        <div className="d-flex">
                            <FontAwesomeIcon style={{height: '20px'}} icon={faPhone} />
                            <p className="ms-2">+8801856773128</p>
                        </div>
                        <div className="d-flex">
                            <FontAwesomeIcon style={{height: '20px'}} icon={faEnvelope} />
                            <p className="ms-2">iftekharemon703@gmail.com</p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;