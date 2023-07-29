import React from 'react'
import { GiAirplaneDeparture } from "react-icons/gi";
const DealsCard = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-5 items-center md:gap-4 rounded-md overflow-hidden border hover:border-yellow-700 transition-all duration-700 min-h-[120px] lg:hover:scale-110">
    <div className='w-full h-full'>
      <img src="/images/jet-1.jpg" alt="" className='w-full h-full object-cover'/>
    </div>
    <div className='col-span-3 object-cover py-3 flex md:flex-row flex-col gap-4 lg:gap-10 lg:items-center px-3 md:px-0'>
        <div className='flex justify-between'>
            <p className='text-xl font-medium'>Saturday</p>
            <p className='text-lg text-gray-500'>july 19</p>
         </div>
         <div className=''>
            <div className='flex justify-between gap-4'>
                <span className='text-xl '>Miami</span>
                <span className='text-2xl '><GiAirplaneDeparture/></span>
                <span className='text-xl '>New York</span>
            </div>
            <div className='mt-2'>
                <p>7 Seat</p>
            </div>
         </div>
        </div>
    <div className='flex items-center justify-center bg-black text-white p-3 hover:bg-gray-300 cursor-pointer hover:text-black h-full transition-all duration-500'>
        <div className='flex items-center gap-5 justify-center'>
        <span className='text-3xl font-medium'><GiAirplaneDeparture/></span>
        <span className='text-2xl font-medium'>8500$</span>
        </div>
    </div>
  </div>
  )
}

export default DealsCard