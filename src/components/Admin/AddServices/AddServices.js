import React from 'react';
import AdminSidebar from '../AdminSidebar/AdminSidebar';

const AddServices = () => {
    return (
        <section>
            <div className="row">
                <div className="col-md-2">
                    <AdminSidebar></AdminSidebar>
                </div>
                <div className="col-md-10">
                    <form className="col-md-6 p-5">
                        <label for="title" className="form-label">Service Title</label>
                        <input className="form-control mb-3" type="text" placeholder="Enter Title" id="title"/>

                        <label for="description" className="form-label">Description</label>
                        <input className="form-control mb-3" type="text" placeholder="Enter Description" id="description"/>

                        <label for="image" className="form-label">image</label>
                        <input className="form-control mb-3" type="file" id="image"/>

                        <input className="btn-brand text-white" type="submit" value="Submit"/>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default AddServices;