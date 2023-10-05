import React, { useEffect, useState } from 'react'
import { Link, NavLink, useLocation, useParams, useRoutes } from 'react-router-dom';
import usePopupToggle from '../../hooks/hideModals';
import Modal from '../Modals/Modal';
import Login from '../../Pages/auth/Login';
import Auth from '../../Pages/auth/Auth';
import { BsXLg } from 'react-icons/bs';
const Header = () => {
  const [scrollTop, setScrollTop] = useState(false)
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
  const handleScroll = () => {
    // Get the current scroll position
    const scrollTop = window.scrollY;

    // Check if scroll top is greater than 50px
    if (scrollTop > 50) {
      setScrollTop(true);
    } else {
      setScrollTop(false);
    }
  };
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <>
        <header className={`fixed w-full top-0 right-0 left-0 ${scrollTop ? "bg-black" : "bg-transparent"} transition-all duration-500 z-[55]`}>
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

                      menuList?.map((data, i) =>{
                        const tw = data.path == path.pathname ? "text-yellow-600" : "text-gray-100"
                        return   <NavItem key={data.id} data={data} tw={tw}/>
                      })
                    }
                </ul>
              </nav>

              <>

              <div className={`${menu ? "translate-x-0 block duration-700 transition-all" : "-translate-x-[1500px] z-0 opacity-0 duration-700 transition-all"} lg:hidden bg-black bg-opacity-0 w-full h-screen justify-end items-center fixed z-50 top-0 left-0 right-0 bottom-0 =`}>

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
                            const tw = data.path === path.pathname ? "text-yellow-600" : "text-black"
                              return <NavItem data={data} tw={tw} key={data.id}/>
                          })
                        }                           
                    </ul>
                    <button className='text-yellow-600 p-4' onClick={handleSignin}>Sing in</button>
                </div>
                </div>

              </div>

              </>

            <div className="hidden sm:block lg:flex items-center justify-end py-3 text-white gap-6">
            <button className='text-gray-100 no-underline hover:text-yellow-600' onClick={handlePopup}>Sing in</button>
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

const NavItem = ({data, tw}) => {

  const {id, title, path} = data

  return <li className="ml-0 sm:ml-8 px-4 py-2">
  <Link
    className={`hover:text-yellow-600 transition-colors text-lg font-thin no-underline ${tw? tw : ''}`}
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