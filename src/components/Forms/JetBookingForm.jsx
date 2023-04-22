import React, { useEffect, useState } from "react";
import { ReactSearchAutocomplete } from "react-search-autocomplete";
import OnewayForm from "./OnewayForm";
import RoundWay from "./RoundWay";
import { useSelector } from "react-redux";
import MultiLeg from "./MultiLeg";

const JetBookingForm = () => {

  // get all ports
  const {ports} = useSelector(state => state.port)

  console.log(ports);
  // get all ports
  const [airPorts, setAirPorts] = useState([]);
  const [showForm, setShowForm] = useState({
    oneWay: true,
    roundWay: false,
    multiWay: false,
  });
 

  const handleShowForm = (form) => {
    if (form === 'oneway') {
     return setShowForm({oneWay: true,
      roundWay: false,
      multiWay: false,})
    }
    if (form === 'roundway') {
   return setShowForm({oneWay: false,
      roundWay: true,
      multiWay: false,})

    }
    if (form === 'multiway') {
   return setShowForm({oneWay: false,
      roundWay: false,
      multiWay: true,})
    }
  }

  return (
    <>
      <div className="form-wrapper md:bg-[#f5f3f1]">
        <div className="p-2 form-item-wrapper md:p-8 md:flex md:justify-center md:flex-col  ">
          <div className="bg-white md:w-6/12 md:mt-[-90px]  p-4 md:py-20 md:p-8 md:rounded-2xl md:mx-auto">
            <div className="flex flex-wrap justify-between">
              <div className="text-black py-2 text-lg text-amber-600 uppercase">
                Book a charter Flight!
              </div>

              <div className="text-black flex flex-row gap-2">
                <div onClick={() => handleShowForm('oneway')} className={showForm.oneWay ? 'text-white font-normal relative border px-3 py-2 rounded-3xl bg-amber-600 cursor-pointer' :' text-black font-normal relative border px-3 py-2 rounded-3xl cursor-pointer'}>
                  One Way
                </div>
                <div  onClick={() => handleShowForm('roundway')} className={showForm.roundWay ? 'text-white font-normal relative border px-3 py-2 rounded-3xl bg-amber-600 cursor-pointer' :' text-black font-normal relative border px-3 py-2 rounded-3xl cursor-pointer'}>
                  Round Way
                </div>
                <div onClick={() => handleShowForm('multiway')} className={showForm.multiWay ? 'text-white font-normal relative border px-3 py-2 rounded-3xl bg-amber-600 cursor-pointer' :' text-black font-normal relative border px-3 py-2 rounded-3xl cursor-pointer'}>
                  Multi Flight
                </div>
              </div>
            </div>
            {
              showForm.oneWay && <OnewayForm data={ports}></OnewayForm>
            }
            {
              showForm.roundWay && <RoundWay data={ports}></RoundWay>
            }
            {
              showForm.multiWay && <MultiLeg/>
            }
          </div>
        </div>
      </div>
    </>
  );
};

export default JetBookingForm;
