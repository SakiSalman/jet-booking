import React from "react";
import SocialLogin from "../../components/Buttons/SocialLogin";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div>
      {" "}
      <div className="login-area flex justify-center items-center h-screen">
        <div className="container">
          <div className="login-content sm:w-100 md:w-[350px] mx-auto">
            <div className="row p-3 border border-slate-400 shadow-md rounded-md">
              <div className="col-12">
                <h2 className="text-center text-3xl">Register</h2>
                <form class="row">
                  <div class="col-12 mt-2">
                    <input
                      type="text"
                      name="first_name"
                      class="form-control"
                      placeholder="First Name"
                    />
                  </div>
                  <div class="col-12 mt-2">
                    <input
                      type="text"
                      name="last_name"
                      class="form-control"
                      placeholder="Last Name"
                    />
                  </div>
                  <div class="col-12 mt-2">
                    <input
                      type="email"
                      name="email"
                      class="form-control"
                      placeholder="Email Address"
                    />
                  </div>
                  <div class="col-12 mt-2">
                    <input
                      type="tel"
                      name="phone"
                      class="form-control"
                      placeholder="Phone Number"
                    />
                  </div>
                  <div class="col-12 mt-2">
                    <input
                      type="password"
                      class="form-control"
                      placeholder="Password"
                    />
                  </div>
                  <div class="col-12 mt-2">
                    <input
                      type="password"
                      class="form-control"
                      placeholder="Re-enter Password"
                    />
                  </div>

                  <div class="col-12 mt-2">
                    <button className='py-2 px-5 border-2 border-green-400 bg-green-600 text-white w-100 rounded-md transition-all duration-200 hover:bg-green-400 hover:text-white '  type="submit">
                      Login
                    </button>
                  </div>
                </form>
                {/* Social Logins */}
                <SocialLogin></SocialLogin>
                <div className="navigate-ara">
                  <p className="text-center">
                    Did not Registration?{" "}
                    <Link
                      to="/login"
                      className="text-indigo-800 no-underline font-medium"
                    >
                      Login
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
