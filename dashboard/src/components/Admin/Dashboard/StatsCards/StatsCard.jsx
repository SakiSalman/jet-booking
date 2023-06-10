import React from "react";

const StatsCard = ({data}) => {
    const {title, type="success", total} = data
  return (
    <>
      <div className="card">
        <div className="card-body">
          <div className="dash-widget-header">
            <span className="dash-widget-icon text-primary border-primary">
              <i className="fe fe-users" />
            </span>
            <div className="dash-count">
              <h3>{total}</h3>
            </div>
          </div>
          <div className="dash-widget-info">
            <h6 className="text-muted">{title}</h6>
            <div className="progress progress-sm">
              <div className={`progress-bar bg-${type} w-50`} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default StatsCard;
