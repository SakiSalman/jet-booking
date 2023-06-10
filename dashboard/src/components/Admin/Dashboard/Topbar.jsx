import React from 'react'
import { useState } from 'react'
import Avatar from '../Profile/Avatar'
import BlackLogo from '../../Logo/BloackLogo'

const Topbar = () => {
  const [dropDown, setDropDown] = useState(false)
  return (
    <>

<div className="header">
    {/* Logo */}
    <div className="header-left">
      <a href="index.html" className="logo">
      <BlackLogo></BlackLogo>
      </a>
      <a href="index.html" className="logo logo-small">
      <BlackLogo style={{
        width :'30px', height : '30px' 
       }}></BlackLogo>
      </a>
    </div>
    {/* /Logo */}
    <a href="javascript:void(0);" id="toggle_btn">
      <i className="fe fe-text-align-left" />
    </a>
    <div className="top-nav-search">
      <form>
        <input type="text" className="form-control" placeholder="Search here" />
        <button className="btn" type="submit"><i className="fa fa-search" /></button>
      </form>
    </div>
    {/* Mobile Menu Toggle */}
    <a className="mobile_btn" id="mobile_btn">
      <i className="fa fa-bars" />
    </a>
    {/* /Mobile Menu Toggle */}
    {/* Header Right Menu */}
    <ul className="nav user-menu">
      {/* Notifications */}
      <li className="nav-item dropdown noti-dropdown">
        <a href="#" className="dropdown-toggle nav-link" data-toggle="dropdown">
          <i className="fe fe-bell" /> <span className="badge badge-pill">3</span>
        </a>
        <div className="dropdown-menu notifications">
          <div className="topnav-dropdown-header">
            <span className="notification-title">Notifications</span>
            <a href="javascript:void(0)" className="clear-noti"> Clear All </a>
          </div>
          <div className="noti-content">
            <ul className="notification-list">
              <li className="notification-message">
                <a href="#">
                  <div className="media">
                    <span className="avatar avatar-sm">
                     
                    <Avatar clist={'avatar-img rounded-circle'} alt={'User Image'}></Avatar>
                    
                    </span>
                    <div className="media-body">
                      <p className="noti-details"><span className="noti-title">Dr. Ruby Perrin</span> Schedule <span className="noti-title">her appointment</span></p>
                      <p className="noti-time"><span className="notification-time">4 mins ago</span></p>
                    </div>
                  </div>
                </a>
              </li>
              <li className="notification-message">
                <a href="#">
                  <div className="media">
                    <span className="avatar avatar-sm">
                      <img className="avatar-img rounded-circle" alt="User Image" src="assets/img/patients/patient1.jpg" />
                    </span>
                    <div className="media-body">
                      <p className="noti-details"><span className="noti-title">Charlene Reed</span> has booked her appointment to <span className="noti-title">Dr. Ruby Perrin</span></p>
                      <p className="noti-time"><span className="notification-time">6 mins ago</span></p>
                    </div>
                  </div>
                </a>
              </li>
            </ul>
          </div>
          <div className="topnav-dropdown-footer">
            <a href="#">View all Notifications</a>
          </div>
        </div>
      </li>
      {/* /Notifications */}


      {/* User Menu */}
      <li className="nav-item dropdown has-arrow">
        <a href="#" className="dropdown-toggle nav-link" data-toggle="dropdown" onClick={() => setDropDown(!dropDown)}>
          <span className="user-img">

         
            
            <Avatar style={{width : '31px', height : '31px', objectFit : 'cover'}} clist={'rounded-circle'}></Avatar>
            </span>
        </a>

        {
          dropDown && <div style={{left : '-100px'}} className={ dropDown ? "dropdown-menu  show" : 'dropdown-menu'}>
          <div className="user-header">
            <div className="avatar avatar-sm">
              <Avatar clist={'avatar-img rounded-circle'}/>
            </div>
            <div className="user-text">
              <h6>Ryan Taylor</h6>
              <p className="text-muted mb-0">Administrator</p>
            </div>
          </div>
          <a className="dropdown-item" href="profile.html">My Profile</a>
          <a className="dropdown-item" href="settings.html">Settings</a>
          <a className="dropdown-item" href="login.html">Logout</a>
        </div>
        }
        
      </li>
      {/* /User Menu */}
    </ul>
    {/* /Header Right Menu */}
  </div>
    
    
    </>
  )
}

export default Topbar