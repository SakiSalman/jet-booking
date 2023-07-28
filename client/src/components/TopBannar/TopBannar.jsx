import React from 'react'

const TopBannar = ({bgImage, title, breadCumb}) => {
  return (
    <section className=" max-h-[400px] h-[400px] flex items-center mt-[-90px] sm:mt-[-90px] text-white bg-no-repeat bg-cover bg-center" style={{ backgroundImage: `url(${bgImage})` }}>
    <div className="container mx-auto flex items-center justify-between flex-col sm:flex-row" >
      <div className="content mx-auto">
        <h1 className="text-3xl sm:text-6xl mx-auto text-center mt-5 text-white  uppercase"> {title}</h1>
        <ul className='flex gap-4 justify-center mt-6'>
          <li><a href="#">Home</a></li>
          <li>-</li>
          <li><a href="#">{breadCumb}</a></li>
        </ul>
      </div>
    </div>
  </section>
  )
}

export default TopBannar