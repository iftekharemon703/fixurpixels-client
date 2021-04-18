import React from 'react';
import AdminSidebar from '../AdminSidebar/AdminSidebar';

const containerStyle = {
    backgroundColor: "#F4FDFB",
    height:"100%"
}

const Admin = () => {

    return (
        <section>
            <div style={containerStyle} className="container-fluid row">
                <div className="col-md-3">
                    <AdminSidebar></AdminSidebar>
                </div>
                <div className="col-md-9">
                    <h2>This is right sidebar</h2>
                </div>
            </div>
        </section>
    );
};

export default Admin;