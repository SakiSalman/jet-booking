import React from "react";
import SocialLogin from "../../components/Buttons/SocialLogin";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div>
      <div className="_container">
        <div className="w-[500px] bg-white rounded-sm p-8 mx-auto">
          <h3 className="text-center text-3xl">Register</h3>
          <div class="mt-5">
            <input
              type="email"
              class="w-full py-3 px-4 border rounded-md"
              placeholder="Email Address"
            />
          </div>
          <div class="mt-4">
            <input
              type="text"
              name="last_name"
              class="w-full py-3 px-4 border rounded-md"
              placeholder="Last Name"
            />
          </div>
          <div class="mt-4">
            <input
              type="email"
              name="email"
              class="w-full py-3 px-4 border rounded-md"
              placeholder="Email Address"
            />
          </div>
          <div class="mt-4">
            <input
              type="tel"
              name="phone"
              class="w-full py-3 px-4 border rounded-md"
              placeholder="Phone Number"
            />
          </div>
          <div class="mt-4">
            <input
              type="password"
              class="w-full py-3 px-4 border rounded-md"
              placeholder="Password"
            />
          </div>
          <div class="mt-4">
            <input
              type="password"
              class="w-full py-3 px-4 border rounded-md"
              placeholder="Re-enter Password"
            />
          </div>

          <div class="mt-4">
            <button className='w-full py-3 px-4 btn border hover:border-yellow-700 hover:bg-yellow-700 hover:text-white rounded-md transition-all duration-500'>
              Register
            </button>
          </div>
          <div className="my-4">
            {/* Social Logins */}
            <SocialLogin></SocialLogin>
          </div>
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
  );
};

export default Register;
