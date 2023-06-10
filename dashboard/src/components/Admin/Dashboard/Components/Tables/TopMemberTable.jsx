import React from 'react'
import Avatar from '../../../Profile/Avatar'

const TopMemberTable = () => {
  return (
    <div><div className="card card-chart">
    <div className="card-header">
      <h4 className="card-title">Top Members</h4>
    </div>
    <div className="card-body">
    <div className="card card-table flex-fill">
            
            <div className="card-body">
              <div className="table-responsive">
                <table className="table table-hover table-center mb-0">
                  <thead>
                    <tr>
                      <th>Member Name</th>
                      <th>Total Spent</th>
                      <th>Ordered</th>
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
                      <td>$15000</td>
                      <td>10</td>
                     
                    </tr>
                    
                  </tbody>
                </table>
              </div>
            </div>
          </div>
    </div>
  </div></div>
  )
}

export default TopMemberTable