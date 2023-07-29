import React from "react";
import SocialLogin from "../../components/Buttons/SocialLogin";
import usePopupToggle from "../../hooks/hideModals";
import { BsXLg } from "react-icons/bs";

const Register = ({setShowLogin}) => {
  const {handlePopup, closeRef} = usePopupToggle()

  return (
    <>
      <div className="w-[500px] bg-white rounded-sm p-8 mx-auto relative">
      <span ref={closeRef} className="absolute top-4 right-4 w-8 h-8 border rounded-full p-2 flex justify-center cursor-pointer items-center modal-close" onClick={handlePopup}><BsXLg className="modal-close"/></span>
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
              <button
                onClick={() => setShowLogin(false)}
                className="text-indigo-800 no-underline font-medium"
              >
                Login
              </button>
            </p>
          </div>
        </div>

    </>
  );
};

export default Register;
