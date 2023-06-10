import React, { useState } from "react";
import UsersTable from "../../components/Admin/Dashboard/Components/Tables/UsersTable";
import Skeletons from "../../components/Loader/Skeleton";
import { useSelector } from "react-redux";
import BookingTable from "../../components/Admin/Dashboard/Components/Tables/BookingTable";
import Modal from "../../components/Modals/Modal";

const Bookings = () => {
  const { users, loading } = useSelector((state) => state.user);
  const [bookingDetails, setBookingDetails] = useState([]);
  const [showModal, setShowModal] = useState(false);

  //   Shoe Singel data on Modal
  const handleShowDetils = (id) => {
    setShowModal(!showModal);
  };
  return (
    <>
      {" "}
      <div className="row">
        <div className="col-md-12">
          {/* Recent Orders */}
          <div className="card card-table">
            <div className="card-header">
              <div className="card-header-items d-flex justify-content-between align-items-center">
                <h4 className="card-title">Booking List</h4>
              </div>
            </div>
            <div className="card-body">
              <div className="table-responsive">
                <table className="table table-hover table-center mb-0">
                  <thead>
                    <tr>
                      <th>Member Name</th>
                      <th>Email</th>
                      <th>Bookig Type</th>
                      <th>Booking Date</th>
                      <th>Payment</th>
                      <th>Action</th>
                    </tr>
                  </thead>

                  <tbody>
                    {!loading &&
                      [1, 2, 3, 4, 5].map((data, index) => {
                        return (
                          <>
                            <tr key={data}>
                              <td>
                                <Skeletons width={50} height={50} type={true} />
                                <Skeletons width={150} />
                              </td>
                              <td>
                                <Skeletons width={350} />
                              </td>
                              <td>
                                <Skeletons width={150} />
                              </td>
                              <td>
                                <Skeletons width={250} />
                              </td>
                              <td>
                                <Skeletons width={200} />
                              </td>
                            </tr>
                          </>
                        );
                      })}
                    {/* Bookings table */}
                    <BookingTable
                      handleShowDetils={() => handleShowDetils(1)}
                    ></BookingTable>
                    {/* Bookings table end */}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          {/* /Recent Orders */}
        </div>
      </div>
      {/* View Details Modal */}
      {showModal && (
        <Modal title={"View Details"} setModal={setShowModal} modal={showModal}>
          <div className="row">
            <div className="col-md-4">
              <img
                className="shadow"
                style={{ width: "100%", borderRadius: "10px" }}
                src="https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D&w=1000&q=80"
                alt=""
              />
            </div>
            <div className="col-md-8">
              <table className="table table-hover table-center mb-0">
                <thead>
                  <tr>
                    <th>Member Name</th>
                    <th>Email</th>
                    <th>Phone</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Gordern G</td>
                    <td>Codersaki98@gmail.com</td>
                    <td>01408971554</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="row">
            <div className="col py-2">
              <h4 className="text-center">Booking Info</h4>
              <table className="table table-hover table-center mb-0">
                <thead>
                  <tr>
                    <th>From</th>
                    <th>To</th>
                    <th>Passenger</th>
                    <th>Flight</th>
                    <th>Amount</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Dhaka</td>
                    <td>Chittagong</td>
                    <td>2</td>
                    <td>One Way</td>
                    <td>1500</td>
                  </tr>
                </tbody>
              </table>
              <form class="row g-3 needs-validation py-2" novalidate>
                <div class="col-md-4 mb-2">
                  <label for="status" class="form-label">Status</label>
                    <select className="form-control" name="" id="">
                        <option value="processing">Processing</option>
                        <option value="completed">Completed</option>
                        <option value="reject">Reject</option>
                    </select>
                </div>
                
                <div class="col-12">
                  <button class="btn btn-primary" type="submit">Update</button>
                </div>
              </form>
            </div>
          </div>
        </Modal>
      )}
      {/* View Details Modal end */}
    </>
  );
};

export default Bookings;
