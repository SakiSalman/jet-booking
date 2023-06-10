import React from 'react'

const AdminCard = ({data}) => {
  return (
    <>
      <div className="card">
              <div className="card-body">
                <div className="dash-widget-header">
                  <span className="dash-widget-icon text-success">
                    <i className="fe fe-credit-card" />
                  </span>
                  <div className="dash-count">
                    <h3>{data.length}</h3>
                  </div>
                </div>
                <div className="dash-widget-info">
                  <h6 className="text-muted">Admins</h6>
                  <div className="progress progress-sm">
                    <div className="progress-bar bg-success w-50" />
                  </div>
                </div>
              </div>
            </div>
    
    </>
  )
}

export default AdminCard