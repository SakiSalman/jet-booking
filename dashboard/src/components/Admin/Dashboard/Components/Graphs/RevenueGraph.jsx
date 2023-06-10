import React from 'react'

const RevenueGraph = () => {
  return (
    <div>
          <div className="card card-chart">
            <div className="card-header">
              <h4 className="card-title">Revenue</h4>
            </div>
            <div className="card-body">
              <div id="morrisArea" />
            </div>
          </div>
    </div>
  )
}

export default RevenueGraph