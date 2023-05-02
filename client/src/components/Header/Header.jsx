import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom';
const Header = () => {
  const [menu, setMenu] = useState(false);
  return (
    <>
        <header>
        <div className="px-3">
          <div className="container sm:flex sm:justify-between px-2 py-3 sm:px-4 mx-auto ">
            <div className="">
              <div className="logo flex justify-between items-center">
                <Link to="/">
                  <img className="w-48 items-center pt-3" src={'https://www.flyblack.com/logo.svg'} alt="" />
                </Link>
                <span
                  className="sm:hidden text-white cursor-pointer flex duration-200"
                  id="mobile_btn"
                  onClick={() => setMenu(!menu)}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-10 h-10"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                    />{" "}
                  </svg>
                </span>
              </div>
            </div>

            <nav className="hidden sm:block sm:flex w-full sm:w-auto mx-auto" id="main_menu">
                <ul className="flex w-full sm:w-auto justify-center mx-auto py-3 flex-col sm:flex-row dark:text-white">
                  <li className="ml-0 sm:ml-8">
                    <Link
                      className="nav text-gray-400 hover:text-gray-200 transition-colors text-lg font-barlow"
                      to="/experience"
                    >
                      Experience
                    </Link>
                  </li>

                  <li className="ml-0 sm:ml-8">
                    <Link
                      className="nav text-gray-400 hover:text-gray-200 transition-colors text-lg font-barlow"
                      to="/charter"
                    >
                      Charter
                    </Link>
                  </li>

                  <li className="ml-0 sm:ml-8">
                    <Link
                      className="nav text-gray-400 hover:text-gray-200 transition-colors text-lg font-barlow"
                      to="/shuttle"
                    >
                      Shuttole
                    </Link>
                  </li>

                  <li className="ml-0 sm:ml-8">
                    <Link
                      className="nav text-gray-400 hover:text-gray-200 transition-colors text-lg font-barlow"
                      to="/deals"
                    >
                      Deals
                    </Link>
                  </li>

                  <li className="ml-0 sm:ml-8">
                    <Link
                      className="nav text-gray-400 hover:text-gray-200 transition-colors text-lg font-barlowe"
                      to="/membership"
                    >
                      Membership
                    </Link>
                  </li>
                </ul>
              </nav>

            {menu && (
              <nav className="sm:flex w-full sm:w-auto mx-auto absolute bg-black w-ful  left-0 right-0" id="main_menu">
                <ul className="flex w-full sm:w-auto justify-center mx-auto py-3 flex-col sm:flex-row dark:text-white px-5">
                  <li className="ml-0 sm:ml-8">
                    <a
                      className="nav text-gray-400 hover:text-gray-200 transition-colors text-lg font-barlow"
                      href="#"
                    >
                      Experience
                    </a>
                  </li>

                  <li className="ml-0 sm:ml-8">
                    <a
                      className="nav text-gray-400 hover:text-gray-200 transition-colors text-lg font-barlow"
                      href="#"
                    >
                      Charter
                    </a>
                  </li>

                  <li className="ml-0 sm:ml-8">
                    <a
                      className="nav text-gray-400 hover:text-gray-200 transition-colors text-lg font-barlow"
                      href="#services"
                    >
                      Shuttole
                    </a>
                  </li>

                  <li className="ml-0 sm:ml-8">
                    <a
                      className="nav text-gray-400 hover:text-gray-200 transition-colors text-lg font-barlow"
                      href="#brand"
                    >
                      Deals
                    </a>
                  </li>

                  <li className="ml-0 sm:ml-8">
                    <a
                      className="nav text-gray-400 hover:text-gray-200 transition-colors text-lg font-barlowe"
                      href="#portfolio"
                    >
                      Membership
                    </a>
                  </li>
                </ul>
              </nav>
            )}

            <div className="hidden sm:block">
              <ul className="flex items-center justify-end py-3 text-white gap-6">
                <li>
                  <a href="#">Sing Up</a>
                </li>
                <li>
                  <a href="#">Log In</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </header>
    
    
    </>
  )
}

export default Header