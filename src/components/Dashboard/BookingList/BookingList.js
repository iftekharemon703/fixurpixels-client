import React from "react";
import Sidebar from "../Sidebar/Sidebar";

const BookingList = () => {
  const serviceInfo = JSON.parse(sessionStorage.getItem("service")) || {};

  return (
    <section>
      <div className="row">
        <div className="col-md-2">
          <Sidebar></Sidebar>
        </div>
        <div className="col-md-10">
          <div className="container">
            <div className="row col-md-6">
              <img
                style={{ height: "70px", width: "100px" }}
                className="img-fluid"
                src={serviceInfo.img}
                alt=""
              />
              
              <h2>{serviceInfo.name}</h2>
              <p>{serviceInfo.description}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookingList;
