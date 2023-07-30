import React from "react";
import { BsBoxArrowInRight } from "react-icons/bs";
const Membership = () => {
  return (
    <div className="bg-black py-96 md:pt-24 lg:py-20">
      {/* Banner Start */}
      <div className="_container flex justify-center items-center h-[95vh]">
        <div className="w-full lg:w-8/12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-20">
            <div className="flex flex-col justify-around mx-auto p-4 bg-fb-gradient-alternate border-l-[#737FFFA0] border-l-[1px] border-r-[#C66EEEA0] border-r-[1px] bg-no-repeat border-b border-b-[#C66EEEA0] border-t border-t-[#737FFFA0] rounded-xl z-10 bg-position-none bg-[#00000070] hover:bg-[#00000010] transition-all duration-300">
              <div className="rounded-lg p-10">
                <h1 className="text-rose-600 text-right py-3">FlyBLACK Membership</h1>
                <h3 className="text-indigo-300">Preferred Access</h3>
                <p className="text-gray-100">Full access to flights and exclusive members only benefits</p>
                <div className="flex justify-end">
                  <button className="text-rose-600 flex items-center gap-3 mt-5 hover:scale-110 hover:text-white transition-all duration-700">Apply<BsBoxArrowInRight /></button>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-1 md:px-9 gap-5 text-left md:text-center lg:text-left" >
              {
                [...Array(3)].map((_, i) => <div key={i} className="lg:w-[300px] md:pb-5">
                  <h3 className="text-gray-50">Deals and Shuttle Flights</h3>
                  <p className="text-gray-400 text-xs py-2">Book any One Way Deal™ and unlock the whole aircraft or book a seat from our Shuttle™ flights and fly private with select members to major destinations.</p>
                </div>)
              }
            </div>
          </div>

          <div className="mt-10 md:px-10">
            <h3 className="text-4xl text-medium text-rose-700">Unlock Benefits</h3>
            <p className="text-gray-300 py-3">The FlyBLACK Membership invites you into the fastest growing network of private jets in the United States, built on a cutting edge platform for the flyers of today’s digital era. Users can “pay as you fly” for Charter flights through FlyBLACK Lifestyle Access™, or upgrade to FlyBLACK Preferred Access™ to unlock members-only One Way Deals, Shuttle Flights, a world of preferred partner benefits and exclusive experiences. And that’s just the start.</p>
            <div className="div">
              <p className="text-rose-600 py-3">COMPARE MEMBERSHIP PLANS</p>
              <div className="g">

              </div>
                
            </div>
          </div>
        </div>
      </div>

    </div >
  );
};

export default Membership;
