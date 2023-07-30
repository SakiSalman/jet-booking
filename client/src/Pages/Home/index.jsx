import React from "react";
import JetBookingForm from "../../components/Forms/JetBookingForm";
import { motion } from "framer-motion"
import HomeBannar from "./Bannar/HomeBannar";
import Luxury from "../../components/Cards/Luxury";
const Home = () => {
  return (
    <div>
      <HomeBannar></HomeBannar>
     
      <JetBookingForm cls={'mt-[-90px]'} bgColor={'#f5f3f1'}></JetBookingForm>
      {/* Business jet Start*/}
      <section className="bg-[#f5f3f1]">
        <div className="container mx-auto py-10 lg:py-20 px-4 sm:px-0">
          <div className="sm:w-2/3 mx-auto mb-10 lg:mb-20">
            <h2 className="text-center">
              Private Jet for Business and Leisure Purposes
            </h2>
          </div>

          <div className="md:grid grid-cols-2 md:gap-10 lg:gap-20 mb-10">
            <div className="w-ful sm:hidden mb-8 col-span-1">
              <img
                className="w-[100%]"
                src="https://demo.curlythemes.com/private-jet/wp-content/uploads/sites/27/2018/03/adobestock_1417261-768x511.jpg"
                alt=""
              />
            </div>
            <div className="col-span-1">
              <div className="pb-8 lg:pb-12 order-2 sm:order-1 md:pl-10">
                <h3 className="text-2xl font-bold mb-4">
                  PRIVATE JET CHARTER
                </h3>
                <p className="text-lg">
                  We provide aircraft charters to business professionals, to
                  maximise their time efficiency. Today we provide aircraft
                  charters to business professionals, to maximise their time
                  efficiency.
                </p>
                <p className="pt-10">
                  <a href="" className="btn">
                    Read More
                  </a>
                </p>
              </div>
            </div>
            <div className="w-ful hidden sm:block basis-3/5">
              <img
                className="w-[100%]"
                src="https://demo.curlythemes.com/private-jet/wp-content/uploads/sites/27/2018/03/adobestock_1417261-768x511.jpg"
                alt=""
              />
            </div>
          </div>

          <div className=" md:grid grid-cols-2 md:gap-10 lg:gap-20">
            <div className="w-full col-span-1">
              <img
                className="w-[100%] "
                src="https://demo.curlythemes.com/private-jet/wp-content/uploads/sites/27/2018/03/adobestock_98400582-768x512.jpg"
                alt=""
              />
            </div>

            <div className="col-span-1">
              <div className="">
                <h3 className="text-[22px] font-bold py-2">
                  PRIVATE JET CHARTER
                </h3>
                <p className="text-[18px]">
                  We provide aircraft charters to business professionals, to
                  maximise their time efficiency. Today we provide aircraft
                  charters to business professionals, to maximise their time
                  efficiency.
                </p>
                <p className="pt-10">
                  <a href="" className="btn">
                    Read More
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Business jet End*/}

      {/* Private jet Start*/}
      
      <section>
        <div className="_container mx-auto py-10 lg:py-20 px-3 lg:px-0">
          <div className="sm:w-2/3 mx-auto">
            <h2 className="text-center">
              Private Jet Performance and Specifications
            </h2>
          </div>

          <div className="flex-row lg:px-6 sm:px-0 sm:flex items-center py-12">
            <div className="sm:basis-1/4">
              <div className="pb-12">
                <h3 className="text-[22px] font-bold mb-4">
                  LUXURY AND COMFORT
                </h3>
                <p className="text-[18px]">
                  Flying should be a pleasure and we’ll make your charter
                  experience as luxurious and comfortable as possible.
                </p>
              </div>
              <div className="pb-12">
                <h3 className="text-[22px] font-bold mb-4">
                  LUXURY AND COMFORT
                </h3>
                <p className="text-[18px]">
                  Flying should be a pleasure and we’ll make your charter
                  experience as luxurious and comfortable as possible.
                </p>
              </div>
            </div>

            <div className="basis-2/4">
              <motion.div
                initial={{ y: "300px" }}
                whileInView={{ y: 0 }}
                transition={{ duration: 1.2 }}
              >
                <img
                  src="https://demo.curlythemes.com/private-jet/wp-content/uploads/sites/27/2018/03/plane-1-927x1024.jpg"
                  alt=""
                />
              </motion.div>

            </div>
            <div className="sm:basis-1/4">
              <div className="pb-12">
                <h3 className="text-[22px] font-bold mb-4">
                  LUXURY AND COMFORT
                </h3>
                <p className="text-[18px]">
                  Flying should be a pleasure and we’ll make your charter
                  experience as luxurious and comfortable as possible.
                </p>
              </div>
              <div className="lg:pb-12">
                <h3 className="text-[22px] font-bold mb-4">
                  LUXURY AND COMFORT
                </h3>
                <p className="text-[18px]">
                  Flying should be a pleasure and we’ll make your charter
                  experience as luxurious and comfortable as possible.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Private jet End*/}

      {/* <!-- Banner Area Start--> */}
      <section className=" py-10 lg:py-20 bg-black flex items-center w-full h-96 text-white bg-no-repeat bg-cover relative">
        <div className="mx-auto flex items-center justify-between flex-col sm:flex-row">
          <div className="mx-auto">
            <h2 className="text-3xl md:text-6xl text-center text-white  uppercase m-0">
              A new class of possibilities.
            </h2>
            <p className="text-[18px] text-white my-[40px] text-center mx-auto lg:w-3/4 mb-8 font-opensans ">
              The fastest growing private jet company in the world
            </p>
            <p className="text-center pt-4">
              <a href="" className="btn">
                Request Quote
              </a>
            </p>
          </div>
        </div>
      </section>

      {/* <!-- Banner Area End--> */}

      {/* Learn More About Start */}
      <section className="py-10 lg:py-20">
        <div className="_container pb-12 md:w-2/3 mx-auto">
          <h2 className=" mb-3 lg:mb-0">Learn More About Our Premium Jet Card Program</h2>
        </div>
        <div className="_container mx-auto sm:flex flex-row justify-between sm:flex-row gap-4">
          <div className="img_div sm:basis-1/3 basis-1/1 flex items-center">
            <img
              className="w-[100%] px-3 sm:px-0 sm:pb-0 pb-7 mx-0 sm:mx-12 z-50 center shadow-2xl"
              src="https://demo.curlythemes.com/private-jet/wp-content/uploads/sites/27/2018/04/corporate-jet-1-small.jpg"
              alt=""
            />
          </div>
          <div className="background sm:basis-2/3 basis-1/1 bg-[#f4f2f1] p-10 sm:ml-[-250px] flex items-center">
            <div className="card-program">
              <div className="card-row sm:flex  justify-between sm:pl-16 flex-row">
                <div className="card-1">
                  <img
                    className="w-12 pb-3"
                    src="https://demo.curlythemes.com/private-jet/wp-content/uploads/sites/27/2018/03/Asset-5.svg"
                    alt=""
                  />
                  <h3 className="text-[22px] font-bold mb-4">
                    LUXURY AND COMFORT
                  </h3>
                  <p className="sm:w-2/3 text-[18px]">
                    Flying should be a pleasure and we’ll make your charter
                    experience as luxurious and comfortable as possible.
                  </p>
                </div>
                <div className="card-1 pt-10 sm:pt-0">
                  <img
                    className="w-12 pb-3"
                    src="https://demo.curlythemes.com/private-jet/wp-content/uploads/sites/27/2018/03/Asset-2.svg"
                    alt=""
                  />
                  <h3 className="text-[22px] font-bold mb-4">
                    LUXURY AND COMFORT
                  </h3>
                  <p className="sm:w-2/3 text-[18px]">
                    Flying should be a pleasure and we’ll make your charter
                    experience as luxurious and comfortable as possible.
                  </p>
                </div>
              </div>
              <div className="card-row sm:flex  justify-between sm:pl-16 flex-row pt-10">
                <div className="card-1">
                  <img
                    className="w-12 pb-3"
                    src="https://demo.curlythemes.com/private-jet/wp-content/uploads/sites/27/2018/03/Asset-4.svg"
                    alt=""
                  />
                  <h3 className="text-[22px] font-bold mb-4">
                    LUXURY AND COMFORT
                  </h3>
                  <p className="sm:w-2/3 text-[18px]">
                    Flying should be a pleasure and we’ll make your charter
                    experience as luxurious and comfortable as possible.
                  </p>
                </div>
                <div className="card-1 pt-10 sm:pt-0">
                  <img
                    className="w-12 pb-3"
                    src="https://demo.curlythemes.com/private-jet/wp-content/uploads/sites/27/2018/03/Asset-1.svg"
                    alt=""
                  />
                  <h3 className="text-[22px] font-bold mb-4">
                    LUXURY AND COMFORT
                  </h3>
                  <p className="sm:w-2/3 text-[18px]">
                    Flying should be a pleasure and we’ll make your charter
                    experience as luxurious and comfortable as possible.
                  </p>
                </div>
              </div>
              <div className="card-row sm:flex  justify-between sm:pl-16 flex-row pt-10">
                <div className="card-1 pb-3">
                  <img
                    className="w-12 pb-3"
                    src="https://demo.curlythemes.com/private-jet/wp-content/uploads/sites/27/2018/03/Asset-6.svg"
                    alt=""
                  />
                  <h3 className="text-[22px] font-bold mb-4">
                    LUXURY AND COMFORT
                  </h3>
                  <p className="sm:w-2/3 text-[18px]">
                    Flying should be a pleasure and we’ll make your charter
                    experience as luxurious and comfortable as possible.
                  </p>
                </div>
                <div className="card-1 pt-10 sm:pt-0">
                  <img
                    className="w-12 pb-3"
                    src="https://demo.curlythemes.com/private-jet/wp-content/uploads/sites/27/2018/03/Asset-3.svg"
                    alt=""
                  />
                  <h3 className="text-[22px] font-bold mb-4">
                    LUXURY AND COMFORT
                  </h3>
                  <p className="sm:w-2/3 text-[18px]">
                    Flying should be a pleasure and we’ll make your charter
                    experience as luxurious and comfortable as possible.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Learn More About End */}

      {/* Luxury charters Start */}
      <section className="pb-16">
        <div className="_container mx-auto">
          <div>
            <h2 className="text-center md:text-left mb-8 ml-3">Luxury Charters</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {
              [...Array(4)].map((_, i) => <Luxury key={i}/>)
            }
          </div>
        </div>
      </section>
      {/* Luxury charters End */}

      <div className="mx-auto">

        <motion.div
          initial={{ x: window.innerWidth > "600px" ? '-1000px' : '-80px' }}
          whileInView={{ x: 0 }}
          transition={{ duration: 1 }}
        >

          <img
            className="object-cover w-[300px] lg:w-[750px] mx-auto"
            src="https://demo.curlythemes.com/private-jet/wp-content/uploads/sites/27/2018/03/plane-side-768x240.jpg"
            alt=""
          />


        </motion.div>

      </div>
    </div>
  );
};

export default Home;
