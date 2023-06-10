import React, { useState } from "react";
import Avatar from "../../../Profile/Avatar";

const UsersTable = ({ data: user }) => {

    const [active, setActive] = useState(user.active)

    
  return (
    <>
      <tr>
        <td>
          <h2 className="table-avatar">
            <a href="profile.html" className="avatar avatar-sm mr-2">
              <Avatar src={user.avatar}></Avatar>
            </a>
            <a href="profile.html">
              {user.first_name} {user.last_name}
            </a>
          </h2>
        </td>
        <td>{user.email}</td>
        <td>{user.isAdmin ? "Admin" : "Member"}</td>
        <td>
          <div className="row">
            <div className="col-xl-4 col-md-4 col-sm-12 col-12">
              <a href="#" className="btn btn-danger btn-sm">
                <i className="fa fa-trash-o" aria-hidden="true"></i>
              </a>
              &nbsp;
              <a href="#" className="btn btn-warning btn-sm">
                <i className="fa fa-pencil-square-o" aria-hidden="true"></i>
              </a>
            </div>
          </div>
        </td>
        <td>
          <div className="status-toggle">
            <input
              type="checkbox"
              id={user._id}
              className="check"
              defaultChecked={user.active}
            />
            <label htmlFor={user._id} className="checktoggle">
              checkbox
            </label>
          </div>
        </td>
      </tr>
    </>
  );
};

export default UsersTable;
