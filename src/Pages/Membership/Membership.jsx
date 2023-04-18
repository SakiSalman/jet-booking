import React from 'react'

const Membership = () => {
  return (
    <div>{/* Banner Start */}
    <section className="py-52 flex items-center mt-[-90px] sm:mt-[-90px] text-white bg-no-repeat bg-cover" style={{ backgroundImage: "url(https://demo.curlythemes.com/private-jet/wp-content/uploads/sites/27/2018/03/header-random-2.jpg?id=232)" }}>
       <div className="container mx-auto flex items-center justify-between flex-col sm:flex-row" >
         <div className="content mx-auto">
           <h1 className="text-3xl sm:text-6xl mx-auto text-center mt-5 text-white font-barlow uppercase"> Membership</h1>
           <ul className='flex gap-4 justify-center mt-6'>
             <li><a href="#">Home</a></li>
             <li>-</li>
             <li><a href="#">Membership</a></li>
           </ul>
         </div>
       </div>
     </section>
{/* Banner End */}
</div>
  )
}

export default Membership