import React from "react";
import bag from '../../../images/bag.jpg'

const Hero = () => {
  return (
    <div className="container-fluid">
      <main
        style={{ height: "600px" }}
        className="row d-flex align-items-center"
      >
        <div className="col-md-4 offset-md-1">
          <h1 className="text-brand">
            Get Photo editing done Professionally for your website
          </h1>
          <p className="text-muted">
          FixUrPhoto produce the best quality at the best price. we are here for your website to produce professional photos!
          </p>
          <button className="btn btn-brand text-white">Get a Quote</button>
        </div>
        <div className="col-md-6">
          <img className="img-fluid" src={bag} alt="" />
        </div>
      </main>
    </div>
  );
};

export default Hero;
