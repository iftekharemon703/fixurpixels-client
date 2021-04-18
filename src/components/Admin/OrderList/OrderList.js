import React from "react";
import AdminSidebar from "../AdminSidebar/AdminSidebar";

const OrderList = () => {
  return (
    <section>
      <div className="row">
        <div className="col-md-2">
          <AdminSidebar></AdminSidebar>
        </div>
        <div className="col-md-10 p-5">
          <table class="table text-center">
            <thead className="bg-light">
              <tr>
                <th scope="col">Name</th>
                <th scope="col">Email Id</th>
                <th scope="col">Service</th>
                <th scope="col">Pay With</th>
                <th scope="col">Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
                <td>@mdo</td>
                <td>@mdo</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default OrderList;
