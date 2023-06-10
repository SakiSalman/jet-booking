import React from "react";

const UsersCard = ({data}) => {
  return (
    <>
      <div className="card">
        <div className="card-body">
          <div className="dash-widget-header">
            <span className="dash-widget-icon text-primary border-primary">
              <i className="fe fe-users" />
            </span>
            <div className="dash-count">
              <h3>{data?.length}</h3>
            </div>
          </div>
          <div className="dash-widget-info">
            <h6 className="text-muted">Users</h6>
            <div className="progress progress-sm">
              <div className="progress-bar bg-primary w-50" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UsersCard;
