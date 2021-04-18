import React from 'react';
import eCommerce from '../../../images/eCommerce.jpg';
import social from '../../../images/social.jpg';
import promotion from '../../../images/promotion.jpg';
import ServiceDetail from '../ServiceDetail/ServiceDetail';

const servicesData = [
    {
        name: 'eCommerce photo editing',
        price: '49',
        description: 'We provide high-quality professional eCommerce product photo editing services to bring out the face of original product quality to display products by photos.',
        img: eCommerce
    },
    {
        name: 'Social media photo editing',
        price: '79',
        description: 'Now, many companies are using social media for their product promotions. Is not it a good idea posting on social media with professionally edited photos, so we are.',
        img: social
    },
    {
        name: 'Promotional photo editing',
        price: '99',
        description: 'When you need any promotional editing we are here to help you with promotional photo editing, When you need any promotional editing we are here to help you',
        img: promotion
    }

]; 

const Services = () => {
    return (
        <section className="services-container my-5">
            <div className="text-center my-md-4">
                <h2 className="text-brand mb-3">Our Services</h2>
            </div>
            <div className="container  text-center">
                <div className="row">
                    {
                        servicesData.map(service => <ServiceDetail service={service}></ServiceDetail>)
                    }
                </div>
            </div>
        </section>
    );
};

export default Services;