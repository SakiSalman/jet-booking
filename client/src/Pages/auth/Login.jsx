import React from "react";
import SocialLogin from "../../components/Buttons/SocialLogin";
import { Link } from "react-router-dom";
import { BsXLg } from "react-icons/bs";
import usePopupToggle from "../../hooks/hideModals";
const Login = ({setShowLogin}) => {
  const {handlePopup, closeRef} = usePopupToggle()
  return (
    <>
      <div ref={closeRef} className="w-[500px] bg-white rounded-sm p-8 mx-auto relative">
      <button
      className="absolute top-4 right-4 w-8 h-8 border rounded-full p-2 flex justify-center cursor-pointer items-center modal-close"
      onClick={handlePopup}
      >
        <BsXLg className="modal-close"/>
      </button>
          <h3 className="text-center text-3xl">Login</h3>
          <div class="mt-5">
            <input
              type="email"
              class="w-full py-3 px-4 border rounded-md"
              placeholder="Email Address"
            />
          </div>
          <div class="col-12 mt-4">
            <input
              type="password"
              class="w-full py-3 px-4 border rounded-md"
              placeholder="Password"
            />
          </div>

          <div class="mt-4">
            <button className='w-full py-3 px-4 btn border hover:border-yellow-700 hover:bg-yellow-700 hover:text-white rounded-md transition-all duration-500'>
              Login
            </button>
          </div>
          <div className="my-4">
            {/* Social Logins */}
            <SocialLogin></SocialLogin>
          </div>
          <div className="navigate-ara">
              <p className="text-center">Did not Registration? <button onClick={() => setShowLogin(true)} className="text-indigo-800 no-underline font-medium">Register</button></p>
            </div>
        </div>
    </>
  );
};

export default Login;
