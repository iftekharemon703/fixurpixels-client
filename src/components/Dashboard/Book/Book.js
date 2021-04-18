import React, { useContext } from "react";
import { UserContext } from "../../../App";
import Sidebar from "../Sidebar/Sidebar";
import Payment from "./Payment/Payment";
import { useForm } from "react-hook-form";

const Book = () => {
  const serviceInfo = JSON.parse(sessionStorage.getItem("service")) || {};
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    fetch('http://localhost:5000/booking', {
      method: 'POST',
      headers: {'content-type' : 'application/json'},
      body: JSON.stringify(data)
    })
    .then(res => res.json())
    .then(success => {
      if(success){
        alert('booking added successfully');
      }
    })
  };

  return (
    <section>
      <div className="row">
        <div className="col-md-2">
          <Sidebar></Sidebar>
        </div>
        <div className="col-md-10 mt-5">
          <form className="col-md-6 px-5" onSubmit={handleSubmit(onSubmit)}>
            <input className="form-control" defaultValue={serviceInfo.name} />
            <br/>
            <input className="form-control" defaultValue={loggedInUser.displayName} />
            {errors.exampleRequired && <span>This field is required</span>}
            <br/>
            <input className="form-control" defaultValue={loggedInUser.email} />
            <br/>
            <input type="submit" value="send"/>
          </form>
          <br/> <br/>

          <Payment></Payment>
        </div>
      </div>
    </section>
  );
};

export default Book;
