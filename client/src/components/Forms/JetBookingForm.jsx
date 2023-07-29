import React, { useEffect, useState } from "react";
import { ReactSearchAutocomplete } from "react-search-autocomplete";
import OnewayForm from "./OnewayForm";
import RoundWay from "./RoundWay";
import { useSelector } from "react-redux";
import MultiLeg from "./MultiLeg";

const JetBookingForm = ({cls, bgColor}) => {

  console.log(cls);

  // get all ports
  const {ports} = useSelector(state => state.port)

  // get all ports
  const [airPorts, setAirPorts] = useState([]);
  const [showForm, setShowForm] = useState({
    oneWay: true,
    roundWay: false,
    multiWay: false,
  });
 

  const handleShowForm = (form) => {
    setShowForm(
      {oneWay: false,
        roundWay: false,
        multiWay: false,
      }
    )
    setShowForm({
      [form] : true
    })

  }

  return (
    <>
      <div className={`bg-[${bgColor}]`}>
        <div className="p-2 form-item-wrapper md:p-10 md:flex md:justify-center md:flex-col  ">
          <div className={`bg-white w-full lg:w-9/12 p-4 md:py-20 md:rounded-2xl md:mx-auto ${cls}`}>
            <div className="flex flex-wrap justify-between">
              <div className="py-2 text-lg text-black uppercase">
                Book a charter Flight!
              </div>

              <div className="text-black flex flex-row gap-2">
                {
                  formData?.map( (data, i) => 
                  {
                    return <div key={i} onClick={() => handleShowForm(data.key)} className={ showForm[data.key] ? 'text-white font-normal relative border px-3 py-2 text-[10px] md:text-sm rounded-3xl bg-amber-600 cursor-pointer' :' text-black font-normal relative border px-3 py-2 rounded-3xl cursor-pointer text-[10px] md:text-sm'}>
                    {data.title}
                  </div>
                  })
                }
              </div>
            </div>
            {
              showForm.oneWay && <OnewayForm data={ports}></OnewayForm>
            }
            {
              showForm.roundWay && <RoundWay data={ports}></RoundWay>
            }
            {
              showForm.multiWay && <MultiLeg data={ports}/>
            }
          </div>
        </div>
      </div>
    </>
  );
};

export default JetBookingForm;



const formData = [
  {
    id : 1,
    title : 'One Way',
    key : "oneWay"
  },
  {
    id : 2,
    title : 'Round Way',
    key : "roundWay"
  },
  {
    id : 2,
    title : 'Multi Flight',
    key : "multiWay"
  },

]
