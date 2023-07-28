import React from 'react'

const HomeBannar = () => {
  return (
    <>


              {/* <!-- Banner Area Start--> */}
      <section className="py-60 flex items-center h-[90vh] mt-[-90px] sm:mt-[-90px] text-white bg-no-repeat bg-cover" style={{ backgroundImage: "url(https://i.ibb.co/mF7Y2by/splash.jpg)" }}>
            <div className="container mx-auto flex items-center justify-between flex-col sm:flex-row" >
              <div className="content mx-auto">
                <h1 className="text-3xl sm:text-6xl mx-auto text-center mt-5 text-white  uppercase"> A new class of possibilities.</h1>
                <p className="text-[18px] text-white my-[40px] text-center mx-auto w-3/4 mb-8 font-opensans ">The fastest growing private jet company in the world</p>
                <p className="text-center pt-4"><a href="" className="btn">Request Quote</a></p>
              </div>
            </div>
          </section>
          
        {/* <!-- Banner Area End--> */}
    
    
    </>
  )
}

export default HomeBannar