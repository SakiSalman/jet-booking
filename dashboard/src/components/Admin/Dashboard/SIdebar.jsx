import React from 'react'
import AdminMenus from './Menus/AdminMenus'

const Sidebar = () => {
  return (
    <>
      {/* Sidebar */}
  <div className="sidebar" id="sidebar">
    <div className="sidebar-inner slimscroll">
      <div id="sidebar-menu" className="sidebar-menu">
        <ul>
          {/* Admin menus */}
          <AdminMenus></AdminMenus>
          {/* Admin menus ennd */}
          
        </ul>
      </div>
    </div>
  </div>
  {/* /Sidebar */}
    
    
    </>
  )
}

export default Sidebar