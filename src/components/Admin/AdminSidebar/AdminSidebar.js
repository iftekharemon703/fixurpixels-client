import React from 'react';
import { Link } from 'react-router-dom';
import './AdminSidebar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignOutAlt, faLock, faPlus, faUserPlus, faAlignJustify } from '@fortawesome/free-solid-svg-icons';

const AdminSidebar = () => {
    return (
        <div className="sidebar d-flex flex-column justify-content-between col-md-2 py-5 px-4" style={{height:"100vh"}}>
            <ul className="list-unstyled">
                <li>
                    <Link to="/order-list" className="text-white">
                        <FontAwesomeIcon icon={faLock} /> <span>Order List</span> 
                    </Link>
                </li>
                <li>
                    <Link to="/add-service" className="text-white">
                        <FontAwesomeIcon icon={faPlus} /> <span>Add Service</span> 
                    </Link>
                </li>
                <li>
                    <Link to="/make-admin" className="text-white">
                        <FontAwesomeIcon icon={faUserPlus} /> <span>Make Admin</span>
                    </Link>
                </li>
                <li>
                    <Link to="/manage-services" className="text-white">
                        <FontAwesomeIcon icon={faAlignJustify} /> <span>Manage Services</span>
                    </Link>
                </li>
            </ul>
            <div>
                <Link to="/" className="text-white"><FontAwesomeIcon icon={faSignOutAlt} /> <span>Logout</span></Link>
            </div>
        </div>
    );
};

export default AdminSidebar;