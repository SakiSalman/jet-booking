import React from "react";
import HomeBannar from "../../components/Bannar/HomeBannar";
import JetBookingForm from "../../components/Forms/JetBookingForm";

const Home = () => {
  return (
    <div>
    <HomeBannar></HomeBannar>
    <JetBookingForm cls={'mt-[-90px]'} bgColor={'#f5f3f1'}></JetBookingForm>
      {/* Business jet Start*/}
      <section className="bg-[#f5f3f1] ">
        <div className="container mx-auto py-10 lg:py-20 px-4 sm:px-0">
          <div className="sm:w-2/3 mx-auto">
            <h2 className="text-center">
              Private Jet for Business and Leisure Purposes
            </h2>
          </div>

          <div className="business sm:flex justify-between mx-auto items-center mt-10">
            <div className="w-ful basis-3/5 sm:hidden mb-8">
              <img
                className="w-[100%]"
                src="https://demo.curlythemes.com/private-jet/wp-content/uploads/sites/27/2018/03/adobestock_1417261-768x511.jpg"
                alt=""
              />
            </div>
            <div className="basis-2/5">
              <div className="pb-12 order-2 sm:order-1">
                <h3 className="text-[22px] font-bold mb-4">
                  PRIVATE JET CHARTER
                </h3>
                <p className="sm:w-2/3 text-[18px]">
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

          <div className="business sm:flex justify-between mx-auto items-center sm:mt-[-100px]">
            <div className="w-ful basis-3/5">
              <img
                className="w-[100%] "
                src="https://demo.curlythemes.com/private-jet/wp-content/uploads/sites/27/2018/03/adobestock_98400582-768x512.jpg"
                alt=""
              />
            </div>

            <div className="basis-2/5 sm:pl-24 mt-14">
              <div className="lg:pb-12">
                <h3 className="text-[22px] font-bold mb-4">
                  PRIVATE JET CHARTER
                </h3>
                <p className="sm:w-4/5 text-[18px]">
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
        <div className="container mx-auto py-10 lg:py-20">
          <div className="sm:w-2/3 mx-auto">
            <h2 className="text-center">
              Private Jet Performance and Specifications
            </h2>
          </div>

          <div className="performance flex-row px-6 sm:px-0 sm:flex items-center pt-12">
            <div className="sm:basis-1/4">
              <div className="pb-12">
                <h3 className="text-[22px] font-bold mb-4">
                  LUXURY AND COMFORT
                </h3>
                <p className="sm:w-2/3 text-[18px]">
                  Flying should be a pleasure and we’ll make your charter
                  experience as luxurious and comfortable as possible.
                </p>
              </div>
              <div className="pb-12">
                <h3 className="text-[22px] font-bold mb-4">
                  LUXURY AND COMFORT
                </h3>
                <p className="sm:w-2/3 text-[18px]">
                  Flying should be a pleasure and we’ll make your charter
                  experience as luxurious and comfortable as possible.
                </p>
              </div>
            </div>

            <div className="basis-2/4">
              <img
                src="https://demo.curlythemes.com/private-jet/wp-content/uploads/sites/27/2018/03/plane-1-927x1024.jpg"
                alt=""
              />
            </div>
            <div className="sm:basis-1/4 sm:pl-12">
              <div className="pb-12">
                <h3 className="text-[22px] font-bold mb-4">
                  LUXURY AND COMFORT
                </h3>
                <p className="sm:w-2/3 text-[18px]">
                  Flying should be a pleasure and we’ll make your charter
                  experience as luxurious and comfortable as possible.
                </p>
              </div>
              <div className="lg:pb-12">
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
      </section>
      {/* Private jet End*/}     

      {/* <!-- Banner Area Start--> */}
      <section className="py-10 lg:py-20 bg-black flex items-center w-full h-96 text-white bg-no-repeat bg-cover relative">
        <img
          className="w-full h-96 absolute mix-blend-overlay object-cover bg-blend-darken"
          src="https://demo.curlythemes.com/private-jet/wp-content/uploads/sites/27/2018/03/world-map-5.svg"
          alt=""
        />

        <div className="container mx-auto flex items-center justify-between flex-col sm:flex-row">
          <div className="mx-auto">
            <h2 className="text-3xl md:text-6xl text-center text-white font-barlow uppercase">
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
        <div className="container pb-12 md:w-2/3 mx-auto">
          <h2>Learn More About Our Premium Jet Card Program</h2>
        </div>
        <div className="container mx-auto sm:flex flex-row justify-between sm:flex-row gap-4">
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
        <div className="container mx-auto">
          <div>
            <h2 className="text-center md:text-left mb-8 ml-3">Luxury Charters</h2>
          </div>
          <div className="luxury sm:flex flex-row">
            <div className="luxury-card text-center mx-auto px-4 basis-1/4">
              <img
                className="mx-auto w-[100%]"
                src="https://demo.curlythemes.com/private-jet/wp-content/uploads/sites/27/2018/03/feather-plane-1-300x300.jpg"
                alt=""
              />
              <h3 className="text-lg font-bold mt-8">PRIVATE JET</h3>
              <p className="mx-2 text-center mt-2 text-[20px] text-[#a8987e]">
                {" "}
                <a className="" href="#">
                  An Air Curly private charter guarantees your privacy
                </a>{" "}
              </p>
            </div>
            <div className="luxury-card text-center mx-auto px-4 basis-1/4 py-10 sm:py-0">
              <img
                className="mx-auto w-[100%]"
                src="https://demo.curlythemes.com/private-jet/wp-content/uploads/sites/27/2018/03/light-jet-300x300.jpg"
                alt=""
              />
              <h3 className="text-lg font-bold mt-8">PRIVATE JET</h3>
              <p className="mx-2 text-center mt-2 text-[20px] text-[#a8987e]">
                {" "}
                <a className="" href="#">
                  An Air Curly private charter guarantees your privacy
                </a>{" "}
              </p>
            </div>
            <div className="luxury-card text-center mx-auto px-4 basis-1/4">
              <img
                className="mx-auto w-[100%]"
                src="https://demo.curlythemes.com/private-jet/wp-content/uploads/sites/27/2018/03/helicopter-1-300x300.jpg"
                alt=""
              />
              <h3 className="text-lg font-bold mt-8">PRIVATE JET</h3>
              <p className="mx-2 text-center mt-2 text-[20px] text-[#a8987e]">
                {" "}
                <a className="" href="#">
                  An Air Curly private charter guarantees your privacy
                </a>{" "}
              </p>
            </div>
            <div className="luxury-card text-center mx-auto px-4 basis-1/4 py-10 sm:py-0">
              <img
                className="mx-auto w-[100%]"
                src="https://demo.curlythemes.com/private-jet/wp-content/uploads/sites/27/2018/03/large-plane-1-300x300.jpg"
                alt=""
              />
              <h3 className="text-lg font-bold mt-8">PRIVATE JET</h3>
              <p className="mx-2 mt-2 text-center text-[20px] text-[#a8987e]">
                {" "}
                <a className="" href="#">
                  An Air Curly private charter guarantees your privacy
                </a>{" "}
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Luxury charters End */}

      <div className="footer-top mx-auto">
        <img
          className="mx-auto w-3/6"
          src="https://demo.curlythemes.com/private-jet/wp-content/uploads/sites/27/2018/03/plane-side-768x240.jpg"
          alt=""
        />
      </div>
    </div>
  );
};

export default Home;
