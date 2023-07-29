import React, { useEffect, useState } from 'react'
import { Link, NavLink, useLocation, useParams, useRoutes } from 'react-router-dom';
import usePopupToggle from '../../hooks/hideModals';
import Modal from '../Modals/Modal';
import Login from '../../Pages/auth/Login';
import Auth from '../../Pages/auth/Auth';
import { BsXLg } from 'react-icons/bs';
const Header = () => {
  const [menu, setMenu] = useState(false);
  const {open, handlePopup} = usePopupToggle()
  const path = useLocation()

  // hidding menu pannel on path change
  useEffect(( () => {
    setMenu(false)
  }), [path])

  // handle sign in popup for mobile
  const handleSignin = () => {
    handlePopup()
    setMenu(false)
  }

  return (
    <>
        <header>
          <div className="_container sm:flex sm:justify-between px-2 py-3 sm:px-4 mx-auto">
            <div className="">
              <div className="logo flex justify-between items-center">
                <Link to="/">
                  <img className="w-48 items-center pt-3" src={'https://www.flyblack.com/logo.svg'} alt="" />
                </Link>
                {/* menu toggle */}
                <span
                  className=" flex md:hidden text-white cursor-pointer duration-200"
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
              {/* menu toggle */}
              </div>
            </div>

            <nav className="hidden sm:flex w-full sm:w-auto mx-auto" id="main_menu">

                <ul className="flex w-full sm:w-auto justify-center mx-auto py-3 flex-col sm:flex-row dark:text-white">
                    {
                      menuList?.map((data, i) => <NavItem key={data.id} data={data}/>)
                    }
                </ul>
              </nav>

              <>

              <div className={`${menu ? "translate-x-0 block duration-700 transition-all" : "-translate-x-[500px] z-0 opacity-0 duration-700 transition-all"} lg:hidden bg-black bg-opacity-0 w-full h-screen justify-end items-center fixed z-50 top-0 left-0 right-0 bottom-0 =`}>

                <div className={"bg-white h-full w-10/12 relative"}>
                    
                <button
                className="absolute top-2 right-4 w-8 h-8 border rounded-full p-2 flex justify-center cursor-pointer items-center modal-close"
                onClick={() => setMenu(false)}
                >
                  <BsXLg className="modal-close"/>
                </button>
                <div className="py-12">
                <ul>
                        {
                          menuList.map((data, i) => {
                              return <li className='py-2 hover:bg-gray-100 w-full p-4' key={data.id}><Link to={data.path} className='block'>{data.title}</Link></li>
                          })
                        }                           
                    </ul>
                    <button className='text-black p-4' onClick={handleSignin}>Sing in</button>
                </div>
                </div>

              </div>

              </>

            <div className="hidden sm:block lg:flex items-center justify-end py-3 text-white gap-6">
            <button className='text-gray-100 no-underline hover:text-sky-100' onClick={handlePopup}>Sing in</button>
            </div>
          </div>
      </header>
      
      {
        open && <Modal >
          <Auth/>
        </Modal>
      }
    
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