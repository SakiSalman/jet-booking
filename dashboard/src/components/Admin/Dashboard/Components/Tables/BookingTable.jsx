import React from 'react'
import Avatar from '../../../Profile/Avatar'

const BookingTable = ({handleShowDetils}) => {
  return (
    <>
                        <tr>
                      <td>
                        <h2 className="table-avatar">
                          <a
                            href="profile.html"
                            className="avatar avatar-sm mr-2"
                          >
                            <Avatar></Avatar>
                          </a>
                          <a href="profile.html">Dr. Ruby Perrin</a>
                        </h2>
                      </td>
                      <td>codersaki98@gmail.com</td>

                      <td>One Way</td>

                      <td>
                        9 Nov 2019{" "}
                        <span className="text-primary d-block">
                          11.00 AM - 11.15 AM
                        </span>
                      </td>
                      <td>
                        <a href="#" className="btn btn-warning">
                          Processing
                        </a>
                      </td>
                      <td className="text-left">
                        <a href="#" className="btn btn-success" onClick={handleShowDetils}>
                          View Details
                        </a>
                      </td>
                    </tr>
    </>
  )
}

export default BookingTable