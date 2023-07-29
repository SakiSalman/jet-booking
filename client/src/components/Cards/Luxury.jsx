import React from 'react'
const Luxury = () => {
  return (
    <div className={`text-center mx-auto basis-1/4 border rounded-md overflow-hidden`}>
    <img
      className="mx-auto w-full"
      src="https://demo.curlythemes.com/private-jet/wp-content/uploads/sites/27/2018/03/feather-plane-1-300x300.jpg"
      alt=""
    />
    <div className="p-5">
    <h3 className="text-lg font-bold mt-2">PRIVATE JET</h3>
    <p className="mx-2 text-center mt-2 text-[20px] text-[#a8987e]">
      {" "}
      <a className="" href="#">
        An Air Curly private charter guarantees your privacy
      </a>{" "}
    </p>
    </div>
  </div>
  )
}

export default Luxury