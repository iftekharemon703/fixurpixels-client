import React from 'react';
import Sidebar from '../Sidebar/Sidebar';

const Review = () => {
    return (
        <section>
            <div className="row">
                <div className="col-md-2">
                    <Sidebar></Sidebar>
                </div>
                <div className="col-md-10">
                    <form className="col-md-6 p-5">
                        <input className="form-control" type="text" placeholder="Your Name"/> <br/>
                        <input className="form-control" type="text" placeholder="Company's name designation"/> <br/>
                        <textarea className="form-control" rows="5" cols="50"form="usrform">Description</textarea> <br/>
                        <input className="btn-brand text-white" type="submit" value="Submit"/>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Review;