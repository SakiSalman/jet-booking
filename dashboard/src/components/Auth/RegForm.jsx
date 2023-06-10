import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import createToast from "../../utility/toast";
import { registerUser } from "../../features/users/usersApi";

const RegForm = ({modal, setModal}) => {
  const [input, setInput] = useState({
    first_name: "",
    last_name: "",
    email: "",
    phone: "",
    password: "",
    isAdmin: false,
    active: false,
  });
  const dispatch = useDispatch();

  // update State on Change fields
  const handleDataChange = (e) => {

    setInput((prev)=> ({
        ...prev,
        [e.target.name] : e.target.value
    }))

  };

  // Handle Register
  const handleRegister = (e) => {
    e.preventDefault()
    if (!input.first_name || !input.last_name || !input.email || !input.phone || !input.password) {
      return createToast('warn', 'All Fields Are Required!')
    }
    dispatch(registerUser(input))
    .then(res => {
      setModal(!modal)
    })


  }
  return (
    <>
      <form>
        <div className="row">
          <div className="col">
            <input
              value={input.first_name}
              onChange={handleDataChange}
              type="text"
              name="first_name"
              className="form-control"
              placeholder="First name"
            />
          </div>
          <div className="col">
            <input
              value={input.last_name}
              onChange={handleDataChange}
              name="last_name"
              type="text"
              className="form-control"
              placeholder="Last name"
            />
          </div>
        </div>
        <div className="row my-2">
          <div className="col">
            <input
              value={input.email}
              onChange={handleDataChange}
              name="email"
              type="email"
              className="form-control"
              placeholder="Email Address"
            />
          </div>
          <div className="col">
            <input
              value={input.phone}
              onChange={handleDataChange}
              type="tel"
              name="phone"
              className="form-control"
              placeholder="Phone Number"
            />
          </div>
        </div>
        <div className="row my-2">
          <div className="col">
            <input
              value={input.password}
              onChange={handleDataChange}
              type="password"
              name="password"
              className="form-control"
              placeholder="Password"
            />
          </div>
      
        </div>
        <div className="row my-2">
          <div className="col">
            <label htmlFor="exampleFormControlSelect1">Admin</label>
            <select
              onChange={handleDataChange}
              name="isAdmin"
              class="form-control"
              id="exampleFormControlSelect1"
            >
              <option value={false}>No</option>
              <option value={true}>Yes</option>
            </select>
          </div>
          <div className="col">
            <label htmlFor="exampleFormControlSelect1">Active Profile</label>
            <select
              name="active"
              onChange={handleDataChange}
              class="form-control"
              id="exampleFormControlSelect1"
            >
              <option value={false}>No</option>
              <option value={true}>Yes</option>
            </select>
          </div>
        </div>
        <div className="row my-2">
          <div className="col">
            <button onClick={handleRegister} className="btn btn-success  btn-md">Publish</button>
          </div>
        </div>
      </form>
    </>
  );
};

export default RegForm;
