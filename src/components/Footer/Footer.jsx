import React from 'react'

const Footer = () => {
  return (
    <>
    <footer className="bg-black py-8 sm:py-8">
<div className="container mx-auto">
  <div className="logo mx-auto py-8">
    <a href="#">
      <img
        className="mx-auto"
        src="https://demo.curlythemes.com/private-jet/wp-content/uploads/sites/27/2018/03/logo_05.png"
        alt=""
      />
    </a>
  </div>
  <div className="footer_menu py-6 sm:6 flex justify-between items-center sm:px-0 px-4 border-y border-[#4e4e4e]">
    <div className="menu_list">
      <ul className="sm:flex flex-row  text-white gap-16">
        <li>
          <a href="#">HOME</a>
        </li>
        <li>
          <a href="#">ABOUT</a>
        </li>
        <li>
          <a href="#">SERVICES</a>
        </li>
        <li>
          <a href="#">NEWS</a>
        </li>
        <li>
          <a href="#">CONTACT</a>
        </li>
      </ul>
    </div>
    <div className="bottom_top text-white">
      <span>
        {" "}
        <a href="#">
          <i className="fa-solid fa-arrow-up"></i> TOP
        </a>{" "}
      </span>
    </div>
  </div>
  <div className="footer_location pt-6 sm:flex flex-row pl-4 justify-between items-center">
    <div className="location-1 text-white">
      <h3 className="text-[#a8987e] font-bold pb-4">
        ASIA & PACIFIC
      </h3>
      <ul className="font-thin">
        <li>2473 Red Road Ste 98 Singapore SG</li>
        <li>Singapore SG</li>
        <li>+ 1 623 211 6319</li>
      </ul>
    </div>
    <div className="location-1 text-white">
      <h3 className="text-[#a8987e] font-bold pb-4">
        ASIA & PACIFIC
      </h3>
      <ul className="font-thin">
        <li>2473 Red Road Ste 98 Singapore SG</li>
        <li>Singapore SG</li>
        <li>+ 1 623 211 6319</li>
      </ul>
    </div>
    <div className="location-1 text-white">
      <h3 className="text-[#a8987e] font-bold pb-4">QUICK LINKS</h3>
      <ul className="font-thin">
        <li>Home</li>
        <li>About Us</li>
        <li>Privacy Policy</li>
        <li>Tearms & Conditions</li>
      </ul>
    </div>
    <div className="location-1 text-white">
      <h3 className="text-[#a8987e] font-bold pb-4">NEWSLETTER</h3>
      <form action="">
        <label htmlFor="">Email:</label>
        <br />
        <input
          className="p-2 rounded"
          placeholder="Enter Your Email:"
          type="text"
        />
      </form>
    </div>
  </div>
  <div className="pt-8 border-t mt-8 border-gray-700">
    <h5 className="text-white text-center">
      Copyright 2023. All Right Reserve
    </h5>
  </div>
</div>
</footer>
    
    
    </>
  )
}

export default Footer