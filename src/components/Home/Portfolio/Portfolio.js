import React from 'react';
import portfolio1 from '../../../images/portfolio1.jpg';



const Portfolio = () => {
    return (
        <section style={{backgroundColor: '#9E1F63'}} className="container text-white text-center p-5 mb-5">
            <div className="row">
                <h2>Portfolio Gallery</h2>
                <p>Portfolio Gallery is a showcase to present our featured work. Where you can see the <br/> polished result of each image. We always use the best process to get the best quality image.</p>
                <div className="col-md-4">
                    <img className="img-fluid" src={portfolio1} alt=""/>
                </div>
                <div className="col-md-4">
                    <img className="img-fluid" src={portfolio1} alt=""/>
                </div>
                <div className="col-md-4">
                    <img className="img-fluid" src={portfolio1} alt=""/>
                </div>
            </div>
        </section>
    );
};

export default Portfolio;