import React from "react";
import { Link } from "react-router-dom";

const AdminMenus = () => {
  return (
    <>
      <li className="menu-title">
        <span>Main</span>
      </li>
      <li >
        <Link to="/" className="active">
          <i className="fe fe-home" /> <span>Dashboard</span>
        </Link>
      </li>
      <li>
        <Link to="/user" >
          <i className="fe fe-users" /> <span>Users</span>
        </Link>
        <Link to="/bookings">
          <i class="fa fa-paper-plane" aria-hidden="true"></i>" <span>Bookings</span>
        </Link>
      </li>
    </>
  );
};

export default AdminMenus;
