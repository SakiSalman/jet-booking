import React from 'react'
import Sidebar from './SIdebar'
import Topbar from './Topbar'
import { Outlet } from 'react-router-dom'

const Dashboard = () => {

  return (
    <>
    
{/* Main Wrapper */}
<div className="main-wrapper">
  {/* Header */}
        <Topbar></Topbar>
  {/* /Header */}
        {/* Side Bar */}

        <Sidebar></Sidebar>
        {/* Side Bar end */}
  {/* Page Wrapper */}
  <div className="page-wrapper">
    
    <Outlet></Outlet>
  </div>
  {/* /Page Wrapper */}
</div>
{/* /Main Wrapper */}

    
    
    </>
  )
}

export default Dashboard