import React from "react";

const Testimonial = (props) => {
  const { quote, img, name, from } = props.testimonial;
  return (
    <div className="container col-md-4 col-sm-12 p-4">
      <div className="row  shadow p-4 rounded"> 
          <p className="mb-4">{quote}</p>
        <div className="d-flex">
          <div className="col-md-3"> 
            <img className="img-fluid" src={img} alt="" />
          </div>
          <div className="col-md-9 mt-3 px-4">
            <h6>{name}</h6>
            <p>{from}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;