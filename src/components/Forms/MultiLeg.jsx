import React from "react";
import { useState } from "react";
import { BsPlusLg, BsDashCircleDotted } from "react-icons/bs";

const MultiLeg = () => {
  const [formValues, setFormValues] = useState([{ name: "", email: "" }, { name: "", email: "" }]);

  let handleChange = (i, e) => {
    let newFormValues = [...formValues];
    newFormValues[i][e.target.name] = e.target.value;
    setFormValues(newFormValues);
  };

  let addFormFields = () => {
    setFormValues([...formValues, { name: "", email: "" }]);
  };

  let removeFormFields = (i) => {
    let newFormValues = [...formValues];
    newFormValues.splice(i, 1);
    setFormValues(newFormValues);
  };

  let handleSubmit = (event) => {
    event.preventDefault();
    alert(JSON.stringify(formValues));
  };
  return (
    <div className="py-3">
      <form action="">
        {
            formValues.map((data, index)=> {

                if (index == 0) {
                    return  <div className=" md:flex md:justify-center md:gap-2">
                    <div className="w-[336px] my-2 relative ">
                      <input
                        className="p-3 min-h-[44px] w-full border shadow-sm rounded-[30px] "
                        type="text"
                        name="from"
                        placeholder="From"
                      />
                      {/* {from && (
                      <ul ref={formSugg} className="absolute top-[100%] left-0 w-[250px] shadow-md inline-block bg-white rounded-md z-50">
                        {from.map((data, index) => {
                          return (
                            <li
                              onClick={(e) => handleFromValue(e, data.name)}
                              key={index}
                              className="block"
                            >
                              <a className="block py-2 px-2 hover:bg-gray-100 " href="#">
                                {data.name}
                              </a>
                            </li>
                          );
                        })}
                      </ul>
                    )} */}
                    </div>
                    <div className="w-[336px] my-2 relative">
                      <input
                        className="p-3 min-h-[44px] w-full border shadow-sm rounded-[30px]"
                        type="text"
                        placeholder="To"
                        name="to"
                      />
                      {/* {to && (
                      <ul ref={formSugg} className="absolute top-[100%] left-0 w-[250px] shadow-md inline-block bg-white rounded-md">
                        {to.map((data, index) => {
                          return (
                            <li
                              onClick={(e) => handleToValue(e, data.name)}
                              key={index}
                              className="block"
                            >
                              <a className="block py-2 px-2 hover:bg-gray-100 " href="#">
                                {data.name}
                              </a>
                            </li>
                          );
                        })}
                      </ul>
                    )} */}
                    </div>
                    <div className="w-[336px] my-2">
                      <input
                        className="p-3 min-h-[44px] w-full border shadow-sm rounded-[30px]"
                        type="date"
                        name="departure"
                        placeholder="Departure"
                        value={"selected.departure"}
                      />
                    </div>
                    <div className="w-[336px] my-2">
                      <input
                        className="p-3 min-h-[44px] w-full border shadow-sm rounded-[30px]"
                        type="number"
                        placeholder="Passengers"
                        name="guest"
                      />
                    </div>
                  </div>
                }else{
                  return  <div className=" md:flex md:justify-center md:gap-2 items-center">
                  <div className="w-[336px] my-2 relative ">
                    <input
                      className="p-3 min-h-[44px] w-full border shadow-sm rounded-[30px] "
                      type="text"
                      name="from"
                      placeholder="From"
                    />
                    {/* {from && (
                    <ul ref={formSugg} className="absolute top-[100%] left-0 w-[250px] shadow-md inline-block bg-white rounded-md z-50">
                      {from.map((data, index) => {
                        return (
                          <li
                            onClick={(e) => handleFromValue(e, data.name)}
                            key={index}
                            className="block"
                          >
                            <a className="block py-2 px-2 hover:bg-gray-100 " href="#">
                              {data.name}
                            </a>
                          </li>
                        );
                      })}
                    </ul>
                  )} */}
                  </div>
                  <div className="w-[336px] my-2 relative">
                    <input
                      className="p-3 min-h-[44px] w-full border shadow-sm rounded-[30px]"
                      type="text"
                      placeholder="To"
                      name="to"
                    />
                    {/* {to && (
                    <ul ref={formSugg} className="absolute top-[100%] left-0 w-[250px] shadow-md inline-block bg-white rounded-md">
                      {to.map((data, index) => {
                        return (
                          <li
                            onClick={(e) => handleToValue(e, data.name)}
                            key={index}
                            className="block"
                          >
                            <a className="block py-2 px-2 hover:bg-gray-100 " href="#">
                              {data.name}
                            </a>
                          </li>
                        );
                      })}
                    </ul>
                  )} */}
                  </div>
                  <div className="w-[336px] my-2">
                    <input
                      className="p-3 min-h-[44px] w-full border shadow-sm rounded-[30px]"
                      type="date"
                      name="departure"
                      placeholder="Departure"
                      value={"selected.departure"}
                    />
                  </div>
                  <span className="w-[336px] "> <BsDashCircleDotted className="text-4xl cursor-pointer hover:text-[#7f6337] mx-auto"></BsDashCircleDotted></span>
                </div>
                }
        
            })
        }

        <div className=" my-2 flex justify-between items-center">
         <span> <BsPlusLg className="text-4xl cursor-pointer hover:text-[#7f6337]"></BsPlusLg></span>
          <button className="text-white p-3 min-h-[44px] btn-brown hover:bg-[#856a3e] w-[150px] border shadow-sm rounded-[30px]">
            Search
          </button>
        </div>
      </form>
    </div>
  );
};

export default MultiLeg;
