import React from 'react';
import company from '../../../images/company.jpg'

const About = () => {
    return (
        <section className="container my-md-5 py-md-5">
            <div className="row d-flex align-items-center">
                <div className="col-md-6">
                    <img className="img-fluid" src={company} alt=""/>
                </div>
                <div className="col-md-6">
                    <h3 className="text-brand px-3">About FixUrPhoto</h3>
                    <p style={{textAlign: 'justify'}} className="text-muted px-3">FixUrPhoto is a team of professionals to produce high-quality imagery through photo editing services. We process hundreds of photos every day using the latest technology to produce high-quality images that meet global standards. Besides, we are very understanding and communicative. We communicate with our clients promptly and reliably to ensure their satisfaction.</p>
                    <ul class="list-group px-3">
                        <li class="list-group-item">Best Quality Photo Editing</li>
                        <li class="list-group-item">100% Satisfaction Guarantee</li>
                        <li class="list-group-item">On Time Delivery</li>
                        <li class="list-group-item">Proficient Editing Team</li>
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default About;