import React from 'react'

const OrdersGraph = () => {
  return (
    <div><div className="card card-chart">
    <div className="card-header">
      <h4 className="card-title">Orders</h4>
    </div>
    <div className="card-body">
      <div id="morrisLine" />
    </div>
  </div></div>
  )
}

export default OrdersGraph