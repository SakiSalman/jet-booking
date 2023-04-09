import React from 'react'


function Banner() {
  return (
    <div>
      {/* <!-- Banner Area Start--> */}
      <section class="py-60 flex items-center h-[90vh] mt-[-90px] sm:mt-[-90px] text-white bg-no-repeat bg-cover" style={{ backgroundImage: "url(https://i.ibb.co/mF7Y2by/splash.jpg)" }}>
            <div class="container mx-auto flex items-center justify-between flex-col sm:flex-row" >
              <div class="content mx-auto">
                <h1 class="text-3xl sm:text-6xl mx-auto text-center mt-5 text-white font-barlow uppercase"> A new class of possibilities.</h1>
                <p class="text-[18px] text-white my-[40px] text-center mx-auto w-3/4 mb-8 font-opensans ">The fastest growing private jet company in the world</p>
                <p class="text-center pt-4"><a href="" class="btn">Request Quote</a></p>
              </div>
            </div>
          </section>
          
        {/* <!-- Banner Area End--> */}

              {/* Business jet */}
  
        <section className='bg-[#f5f3f1]'>
            <div className="container mx-auto py-24 px-4 sm:px-0">
                <div className='sm:w-2/3 mx-auto'>
                    <h2 className='text-center'>Private Jet for Business and Leisure Purposes</h2>
                </div>

                <div className="business sm:flex justify-between mx-auto items-center mt-10">
                <div className='w-ful basis-3/5 sm:hidden mb-8'>
                <img className='w-[100%]' src="https://demo.curlythemes.com/private-jet/wp-content/uploads/sites/27/2018/03/adobestock_1417261-768x511.jpg" alt="" />
               </div>   
                <div className='basis-2/5'> 
                    <div className='pb-12 order-2 sm:order-1'>
                        <h3 className='text-[22px] font-bold mb-4'>PRIVATE JET CHARTER</h3>
                        <p className='sm:w-2/3 text-[18px]'>We provide aircraft charters to business professionals, to maximise their time efficiency. Today we provide aircraft charters to business professionals, to maximise their time efficiency.</p>
                        <p class="pt-10"><a href="" class="btn">Read More</a></p>
                    </div>
                     </div> 
                <div className='w-ful hidden sm:block basis-3/5'>
                <img className='w-[100%]' src="https://demo.curlythemes.com/private-jet/wp-content/uploads/sites/27/2018/03/adobestock_1417261-768x511.jpg" alt="" />
               </div>   
                </div>

                <div className="business sm:flex justify-between mx-auto items-center sm:mt-[-100px]">
                <div className='w-ful basis-3/5'>
                <img className='w-[100%] ' src="https://demo.curlythemes.com/private-jet/wp-content/uploads/sites/27/2018/03/adobestock_98400582-768x512.jpg" alt="" />
               </div>  

                 <div className='basis-2/5 sm:pl-24 mt-14'> 
                    <div className='pb-12'>
                        <h3 className='text-[22px] font-bold mb-4'>PRIVATE JET CHARTER</h3>
                        <p className='sm:w-4/5 text-[18px]'>We provide aircraft charters to business professionals, to maximise their time efficiency. Today we provide aircraft charters to business professionals, to maximise their time efficiency.</p>
                        <p class="pt-10"><a href="" class="btn">Read More</a></p>
                    </div>
                     </div>  
                </div>





            </div>
        </section>


        {/* Private jet */}
        <section>
            <div className="container mx-auto py-24">
                <div className='sm:w-2/3 mx-auto'>
                    <h2 className='text-center'>Private Jet Performance and Specifications</h2>
                </div>

                <div className="performance flex-row px-6 sm:px-0 sm:flex items-center pt-12">
                <div className='sm:basis-1/4'> 
                    <div className='pb-12'>
                        <h3 className='text-[22px] font-bold mb-4'>LUXURY AND COMFORT</h3>
                        <p className='sm:w-2/3 text-[18px]'>Flying should be a pleasure and we’ll make your charter experience as luxurious and comfortable as possible.</p>
                    </div>
                    <div className='pb-12'>
                        <h3 className='text-[22px] font-bold mb-4'>LUXURY AND COMFORT</h3>
                        <p className='sm:w-2/3 text-[18px]'>Flying should be a pleasure and we’ll make your charter experience as luxurious and comfortable as possible.</p>
                    </div>
                </div> 

             <div className='basis-2/4'>
                <img src="https://demo.curlythemes.com/private-jet/wp-content/uploads/sites/27/2018/03/plane-1-927x1024.jpg" alt="" />
             </div>
                <div className='sm:basis-1/4 sm:pl-12'> 
                <div className='pb-12'>
                        <h3 className='text-[22px] font-bold mb-4'>LUXURY AND COMFORT</h3>
                        <p className='sm:w-2/3 text-[18px]'>Flying should be a pleasure and we’ll make your charter experience as luxurious and comfortable as possible.</p>
                    </div>
                    <div className='pb-12'>
                        <h3 className='text-[22px] font-bold mb-4'>LUXURY AND COMFORT</h3>
                        <p className='sm:w-2/3 text-[18px]'>Flying should be a pleasure and we’ll make your charter experience as luxurious and comfortable as possible.</p>
                    </div>
                </div> 
                </div>
            </div>
        </section>
















{/* <div>
    <img className="h-[650px] w-[100%] opacity" src="https://www.flyblack.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fhero-image-black.035f60ce.jpg&w=1920&q=100" alt="" />
</div> */}

        
    </div>
  )
}

export default Banner