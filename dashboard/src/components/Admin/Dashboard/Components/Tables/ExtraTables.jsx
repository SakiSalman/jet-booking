import React from 'react'
import Avatar from '../../../Profile/Avatar'

const ExtraTables = () => {
  return (
    <div>
        
        <div className="row">
        <div className="col-md-6 d-flex">
          {/* Recent Orders */}
          <div className="card card-table flex-fill">
            <div className="card-header">
              <h4 className="card-title">Doctors List</h4>
            </div>
            <div className="card-body">
              <div className="table-responsive">
                <table className="table table-hover table-center mb-0">
                  <thead>
                    <tr>
                      <th>Doctor Name</th>
                      <th>Speciality</th>
                      <th>Earned</th>
                      <th>Reviews</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <h2 className="table-avatar">
                          <a href="profile.html" className="avatar avatar-sm mr-2">
                            <Avatar clist={'avatar-img rounded-circle'}></Avatar>
                          </a>
                          <a href="profile.html">Dr. Ruby Perrin</a>
                        </h2>
                      </td>
                      <td>Dental</td>
                      <td>$3200.00</td>
                      <td>
                        <i className="fe fe-star text-warning" />
                        <i className="fe fe-star text-warning" />
                        <i className="fe fe-star text-warning" />
                        <i className="fe fe-star text-warning" />
                        <i className="fe fe-star-o text-secondary" />
                      </td>
                    </tr>
                    
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          {/* /Recent Orders */}
        </div>
        <div className="col-md-6 d-flex">
          {/* Feed Activity */}
          <div className="card  card-table flex-fill">
            <div className="card-header">
              <h4 className="card-title">Patients List</h4>
            </div>
            <div className="card-body">
              <div className="table-responsive">
                <table className="table table-hover table-center mb-0">
                  <thead>
                    <tr>													
                      <th>Patient Name</th>
                      <th>Phone</th>
                      <th>Last Visit</th>
                      <th>Paid</th>													
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <h2 className="table-avatar">
                          <a href="profile.html" className="avatar avatar-sm mr-2">

                            <Avatar></Avatar>
                          </a>
                          <a href="profile.html">Charlene Reed </a>
                        </h2>
                      </td>
                      <td>8286329170</td>
                      <td>20 Oct 2019</td>
                      <td className="text-right">$100.00</td>
                    </tr>
                    
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          {/* /Feed Activity */}
        </div>
      </div>
      <div className="row">
        <div className="col-md-12">
          {/* Recent Orders */}
          <div className="card card-table">
            <div className="card-header">
              <h4 className="card-title">Appointment List</h4>
            </div>
            <div className="card-body">
              <div className="table-responsive">
                <table className="table table-hover table-center mb-0">
                  <thead>
                    <tr>
                      <th>Doctor Name</th>
                      <th>Speciality</th>
                      <th>Patient Name</th>
                      <th>Apointment Time</th>
                      <th>Status</th>
                      <th className="text-right">Amount</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <h2 className="table-avatar">
                          <a href="profile.html" className="avatar avatar-sm mr-2">
                            <Avatar></Avatar>
                          </a>
                          <a href="profile.html">Dr. Ruby Perrin</a>
                        </h2>
                      </td>
                      <td>Dental</td>
                      <td>
                        <h2 className="table-avatar">
                          <a href="profile.html" className="avatar avatar-sm mr-2"><img className="avatar-img rounded-circle" src="assets/img/patients/patient1.jpg" alt="User Image" /></a>
                          <a href="profile.html">Charlene Reed </a>
                        </h2>
                      </td>
                      <td>9 Nov 2019 <span className="text-primary d-block">11.00 AM - 11.15 AM</span></td>
                      <td>
                        <div className="status-toggle">
                          <input type="checkbox" id="status_1" className="check" defaultChecked />
                          <label htmlFor="status_1" className="checktoggle">checkbox</label>
                        </div>
                      </td>
                      <td className="text-right">
                        $200.00
                      </td>
                    </tr>
                   
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          {/* /Recent Orders */}
        </div>
      </div>


    </div>
  )
}

export default ExtraTables