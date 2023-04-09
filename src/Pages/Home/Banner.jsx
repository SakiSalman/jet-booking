import React from 'react'

function Banner() {
  return (
    <div>
      {/* <!-- Banner Area Start--> */}
      <section class="py-60 mt-[-90px] text-white bg-no-repeat bg-cover" style={{ backgroundImage: "url(https://i.ibb.co/mF7Y2by/splash.jpg)" }}>
            <div class="container mx-auto flex items-center justify-between flex-col sm:flex-row" >
              <div class="content mx-auto">
                <h1 class="text-3xl sm:text-6xl mx-auto text-center mt-5 text-white font-barlow"> A new class of possibilities.</h1>
                <p class="text-[18px] dark:text-white my-[40px] text-center mx-auto w-3/4 mb-8">The fastest growing private jet company in the world</p>
                <p class="text-center"><a href="" class="btn">Request Quote</a></p>
              </div>
            </div>
          </section>
          
        {/* <!-- Banner Area End--> */}

{/* <div>
    <img className="h-[650px] w-[100%] opacity" src="https://www.flyblack.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fhero-image-black.035f60ce.jpg&w=1920&q=100" alt="" />
</div> */}

        
    </div>
  )
}

export default Banner