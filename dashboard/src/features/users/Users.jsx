import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "./usersApi";
import { useEffect } from "react";
import Avatar from "../../components/Admin/Profile/Avatar";
import Skeletons from "../../components/Loader/Skeleton";
import { useState } from "react";
import Modal from "../../components/Modals/Modal";
import RegForm from "../../components/Auth/RegForm";
import UsersCard from "../../components/Admin/Dashboard/StatsCards/UsersCard";
import AdminCard from "../../components/Admin/Dashboard/StatsCards/AdminCard";
import UsersTable from "../../components/Admin/Dashboard/Components/Tables/UsersTable";

const Users = () => {
  const dispatch = useDispatch();
  const [admins, setAdmins] = useState([]);
  const { users, loading } = useSelector((state) => state.user);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    dispatch(fetchUsers());
    const admin = users.filter((data) => data.isAdmin == true);
    setAdmins(admin);
  }, [dispatch]);

  return (
    <>
      <div className="content container-fluid">
        {/* Analytics area */}
        <div className="row">
          <div className="col-xl-6 col-sm-6 col-12">
            <UsersCard data={users}></UsersCard>
          </div>

          <div className="col-xl-6 col-sm-6 col-12">
            {/* ADmin */}
            <AdminCard data={admins}></AdminCard>
            {/* ADmin card */}
          </div>
        </div>

        <div className="row">
          <div className="col-md-12">
            {/* Recent Orders */}
            <div className="card card-table">
              <div className="card-header">
                <div className="card-header-items d-flex justify-content-between align-items-center">
                  <h4 className="card-title">Users List</h4>
                  <button
                    onClick={() => setShowModal(!showModal)}
                    className="btn btn-success btn-lg"
                  >
                    Add New
                  </button>
                </div>
              </div>
              <div className="card-body">
                <div className="table-responsive">
                  <table className="table table-hover table-center mb-0">
                    <thead>
                      <tr>
                        <th>User Name</th>
                        <th>Email</th>
                        <th>Role</th>
                        <th>Status</th>
                        <th>Action</th>
                      </tr>
                    </thead>

                    <tbody>
                      {loading &&
                        [1, 2, 3, 4, 5].map((data, index) => {
                          return (
                            <>
                              <tr key={data}>
                                <td>
                                  <Skeletons
                                    width={50}
                                    height={50}
                                    type={true}
                                  />
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
                      {[...users]?.reverse().map((user, index) => {
                        return (
                          <UsersTable key={index} data={user}/>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            {/* /Recent Orders */}
          </div>
        </div>
      </div>
      {showModal && (
        <Modal
          title={"Add New User!"}
          setModal={setShowModal}
          modal={showModal}
        >
          <RegForm setModal={setShowModal} modal={showModal}></RegForm>
        </Modal>
      )}
    </>
  );
};

export default Users;
