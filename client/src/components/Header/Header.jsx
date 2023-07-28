import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom';
const Header = () => {
  const [menu, setMenu] = useState(false);
  return (
    <>
        <header>
          <div className="_container sm:flex sm:justify-between px-2 py-3 sm:px-4 mx-auto">
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
                    {
                      menuList?.map((data, i) => <NavItem key={data.id} data={data}/>)
                    }
                </ul>
              </nav>

            {menu && (
              <nav className="sm:flex w-full sm:w-auto mx-auto absolute bg-black w-ful  left-0 right-0" id="main_menu">
                <ul className="flex w-full sm:w-auto justify-center mx-auto py-3 flex-col sm:flex-row dark:text-white px-5">
                  <li className="ml-0 sm:ml-8">
                    <a
                      className="nav text-gray-100 hover:text-gray-200 transition-colors text-lg  font-thin no-underline"
                      href="#"
                    >
                      Experience
                    </a>
                  </li>

                  <li className="ml-0 sm:ml-8">
                    <a
                      className="nav text-gray-100 hover:text-gray-200 transition-colors text-lg  font-thin no-underline"
                      href="#"
                    >
                      Charter
                    </a>
                  </li>

                  <li className="ml-0 sm:ml-8">
                    <a
                      className="nav text-gray-100 hover:text-gray-200 transition-colors text-lg  font-thin no-underline"
                      href="#services"
                    >
                      Shuttole
                    </a>
                  </li>

                  <li className="ml-0 sm:ml-8">
                    <a
                      className="nav text-gray-100 hover:text-gray-200 transition-colors text-lg  font-thin no-underline"
                      href="#brand"
                    >
                      Deals
                    </a>
                  </li>

                  <li className="ml-0 sm:ml-8">
                    <a
                      className="nav text-gray-100 hover:text-gray-200 transition-colors text-lg  font-thin no-underline"
                      href="#"
                    >
                      Membership
                    </a>
                  </li>
                </ul>
              </nav>
            )}

            <div className="hidden sm:block lg:flex items-center justify-end py-3 text-white gap-6">
            <button className='text-gray-100 no-underline hover:text-sky-100'>Sing in</button>
            </div>
          </div>
      </header>
    
    
    </>
  )
}

export default Header

const NavItem = ({data}) => {

  const {id, title, path} = data
  return <li className="ml-0 sm:ml-8">
  <Link
    className="nav text-gray-100 hover:text-gray-200 transition-colors text-sm  font-thin no-underline"
    to={path}
  >
    {title}
  </Link>
</li>
}

const menuList = [
  {
    id : 1,
    title : 'Experience',
    path : '/experience'
  },
  {
    id : 2,
    title : 'Charter',
    path : '/charter'

  },
  {
    id : 3,
    title : "Deals",
    path : '/deals'
  },
  {
    id : 4,
    title : "Membership",
    path : '/membership'
  },

]