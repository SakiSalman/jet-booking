import React from 'react'
import Avatar from '../../Profile/Avatar'
import StatsCard from '../StatsCards/StatsCard'
import RevenueGraph from './Graphs/RevenueGraph'
import BookingsGraph from './Graphs/BookingsGraph'
import OrdersGraph from './Graphs/OrdersGraph'
import TopMemberTable from './Tables/TopMemberTable'

const AdminDash = () => {
  return (
    <>
    
    <div className="content container-fluid">
      {/* Page Header */}
      <div className="page-header">
        <div className="row">
          <div className="col-sm-12">
            <h3 className="page-title">Welcome To Jet Booking!</h3>
            <ul className="breadcrumb">
              <li className="breadcrumb-item active">Dashboard</li>
            </ul>
          </div>
        </div>
      </div>
      {/* /Page Header */}
      {/* Analytics area */}
      <div className="row">
        <div className="col-xl-3 col-sm-6 col-12">
         <StatsCard data={{
          title : "Total Bookings",
          type : "success",
          total : 150
         }}></StatsCard>
        </div>

        <div className="col-xl-3 col-sm-6 col-12">
        <StatsCard data={{
          title : "Total Bookings",
          type : "success",
          total : 150
         }}></StatsCard>
        </div>
        <div className="col-xl-3 col-sm-6 col-12">
        <StatsCard data={{
          title : "Total Bookings",
          type : "success",
          total : 150
         }}></StatsCard>
        </div>
        <div className="col-xl-3 col-sm-6 col-12">
        <StatsCard data={{
          title : "Total Bookings",
          type : "success",
          total : 150
         }}></StatsCard>
        </div>
      </div>
        {/* Analytics area emd */}
      <div className="row">
        <div className="col-md-12 col-lg-6">
          {/* Sales Chart */}
            <RevenueGraph></RevenueGraph>
          {/* /Sales Chart */}
        </div>
        <div className="col-md-12 col-lg-6">
          {/* Invoice Chart */}
          <BookingsGraph></BookingsGraph>
          {/* /Invoice Chart */}
        </div>	
        <div className="col-md-12 col-lg-6">
          {/* Invoice Chart */}
          <OrdersGraph></OrdersGraph>
          {/* /Invoice Chart */}
        </div>	
        <div className="col-md-12 col-lg-6">
          {/* Invoice Chart */}
          <TopMemberTable></TopMemberTable>
          {/* /Invoice Chart */}
        </div>	
      </div>
     
    </div>		
    
    </>
  )
}

export default AdminDash