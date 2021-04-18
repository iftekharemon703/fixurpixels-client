import React from 'react';
import kevin from '../../../images/kevin.jpg';
import tyler from '../../../images/tyler.jpg';
import neil from '../../../images/neil.jpg';
import Testimonial from '../Testimonial/Testimonial';

const testimonialData = [
    {
        quote : '"Extremely positive experience! Quality of work is excellent, communication is very good, and all from a humble approach. I will be coming back for more services from Fixurpixels for sure. Thank you!" ',
        name : 'KEVIN BROWN',
        from : 'Canada',
        img : kevin
    },
    {
        quote : 'Amazing job! Fast turnaround, amazing quality. Fixurpixels continues to amaze with their expertise and quality of work. Very attentive to detail, great communicator, and great editing skills!',
        name : 'Tyler Gibson',
        from : 'London',
        img : tyler
    },
    {
        quote : 'Extremely positive experience! Quality of work is excellent, communication is very good, and all from a humble approach. I will be coming back for more services from Fixurpixels for sure. Thank you!',
        name: 'Ismaila Neil',
        from: 'United State',
        img : neil
    }
]


const Testimonials = () => {
    return (
        <section className="testimonials pb-5">
            <div className="container">
                <h2 className="text-center text-brand">Testimonial</h2>
                <div className="container">
                    <div className="row"> 
                        {
                            testimonialData.map(testimonial => <Testimonial testimonial={testimonial}></Testimonial>)
                        }
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;