import React, { useRef } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { BsPlusLg, BsDashCircleDotted } from "react-icons/bs";

const MultiLeg = ({ data }) => {
  const port = data
  const [fromShow, setFromShow] = useState(false);
  const [toShow, setToShow] = useState(false);
  const [from, setFrom] = useState([]);
  const [to, setTo] = useState([]);
  const [formValues, setFormValues] = useState([
    { from: "", to: "", date: "", guest: "" }
  ]);

    // Function for fitering data based on input value
    const createData = (word, data) => {
      const re = new RegExp(`${word.toLowerCase()}.*\\B`, "g");
      return data.filter((item) => re.test(item.name.toLowerCase()));
    };
  let handleChange = (e, i) => {
    let formData = [...formValues];
    const value = e.target.value
    console.log(e.target.name);
    // check if the field is from or To
    if (e.target.name == "from") {
      // initializw empty array to push new items
      let filterData = [];
      filterData = createData(value, port);

     
        setFrom(filterData);
        formData[i][e.target.name] = e.target.value;
       return setFormValues(formData);
      
    }
    if (e.target.name == "to") {
      // initializw empty array to push new items
      let filterData = [];
      filterData = createData(value, port);

     
        setTo(filterData);
        formData[i][e.target.name] = e.target.value;
       return setFormValues(formData);
      
    }
     
    formData[i][e.target.name] = e.target.value;
    setFormValues(formData);
  };

  let addFormFields = () => {
    if (formValues.length > 2) {
      return alert('Exceeds Max value!')
    }
    setFormValues([...formValues, { from: "", to: "", date: "" }]);
  };

  // Remove Fields
  let removeFormFields = (i) => {
    let newFormValues = [...formValues];
    newFormValues.splice(i, 1);
    setFormValues(newFormValues);
  };

  // Update from Airtport value from sugesstions
    const handleFromValue = (e, name, i) => {
      
      e.preventDefault();
      let formData = [...formValues]

      formData[i].from = name

      setFormValues(formData)
      setFrom([])
      

      
    };
  // Update from Airtport value from sugesstions
    const handleToValue = (e, name, i) => {
      
      e.preventDefault();
      let formData = [...formValues]

      formData[i].to = name

      setFormValues(formData)
      setTo([])
      setToShow(false)
      
    };
  let handleSubmit = (event) => {
    event.preventDefault();
    formValues.map( (data, i) => {
      if (i<1) {
        if (!data.from || !data.to || !data.date || !data.guest) {
         return alert('alert')
        }
      }
      else{
        if (!data.from || !data.to || !data.date) {
          return alert('alert 2')
         }
      }
     console.log( JSON.stringify(formValues));
    })
  };
  return (
    <div className="py-3">
      <form action="" onSubmit={handleSubmit}>
        {formValues.map((data, i) => {
          if (i == 0) {
            return (
              <div key={i} className=" md:flex md:justify-center md:gap-2">
                <div className="w-[336px] my-2 relative ">
                  <input
                    className="p-3 min-h-[44px] w-full border shadow-sm rounded-[30px] "
                    type="text"
                    name="from"
                    placeholder="From"
                    onChange={(e) => handleChange(e, i)}
                    value={formValues[i].from}
                    onFocus={()=> setFromShow(true)}
                  />
                  {fromShow && (
                      <ul className="absolute top-[100%] left-0 w-[250px] shadow-md inline-block bg-white rounded-md z-50 overflow-y-auto max-h-80">
                        {from.map((data, index) => {
                          return (
                            <li
                              onClick={(e) => handleFromValue(e, data.name, i)}
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
                    )}
                </div>
                <div className="w-[336px] my-2 relative">
                  <input
                    className="p-3 min-h-[44px] w-full border shadow-sm rounded-[30px]"
                    type="text"
                    placeholder="To"
                    name="to"
                    value={formValues[i].to}
                    onChange={(e) => handleChange(e, i)}
                    onFocus={()=> setToShow(true)}
                    
                  />
                  {toShow && (
                      <ul  className="absolute top-[100%] left-0 w-[250px] shadow-md inline-block bg-white rounded-md overflow-y-auto max-h-80">
                        {to.map((data, index) => {
                          return (
                            <li
                              onClick={(e) => handleToValue(e, data.name, i)}
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
                    )}
                </div>
                <div className="w-[336px] my-2">
                  <input
                    className="p-3 min-h-[44px] w-full border shadow-sm rounded-[30px]"
                    type="date"
                    name="date"
                    placeholder="Departure"
                    value={formValues[i].date}
                    onChange={(e) => handleChange(e, i)}
                  />
                </div>
                <div className="w-[336px] my-2">
                  <input
                    className="p-3 min-h-[44px] w-full border shadow-sm rounded-[30px]"
                    type="number"
                    placeholder="Passengers"
                    name="guest"
                    value={formValues[i].guest}
                    onChange={(e) => handleChange(e, i)}
                  />
                </div>
              </div>
            );
          } else {
            return (
              <div
                key={i}
                className=" md:flex md:justify-center md:gap-2 items-center"
              >
                <div className="w-[336px] my-2 relative ">
                  <input
                    className="p-3 min-h-[44px] w-full border shadow-sm rounded-[30px] "
                    type="text"
                    name="from"
                    placeholder="From"
                    value={formValues[i].from}
                    onChange={(e) => handleChange(e, i)}
                    onFocus={()=> setFromShow(true)}
                  />
                  {fromShow && (
                    <ul className="absolute top-[100%] left-0 w-[250px] shadow-md inline-block bg-white rounded-md z-50">
                      {from.map((data, index) => {
                        return (
                          <li
                            onClick={(e) => handleFromValue(e, data.name, i)}
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
                  )}
                </div>
                <div className="w-[336px] my-2 relative">
                  <input
                    className="p-3 min-h-[44px] w-full border shadow-sm rounded-[30px]"
                    type="text"
                    placeholder="To"
                    name="to"
                    value={formValues[i].to}
                    onFocus={()=> setToShow(true)}
                    onChange={(e) => handleChange(e, i)}
                  />
                  {toShow && (
                    <ul className="absolute top-[100%] left-0 w-[250px] shadow-md inline-block bg-white rounded-md">
                      {to.map((data, index) => {
                        return (
                          <li
                            onClick={(e) => handleToValue(e, data.name, i)}
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
                  )}
                </div>
                <div className="w-[336px] my-2">
                  <input
                    className="p-3 min-h-[44px] w-full border shadow-sm rounded-[30px]"
                    type="date"
                    name="date"
                    placeholder="Departure"
                    value={formValues[i].date}
                    onChange={(e) => handleChange(e, i)}
                  />
                </div>
                <span
                  onClick={(e) => removeFormFields(i)}
                  className="w-[336px] "
                >
                  {" "}
                  <BsDashCircleDotted className="text-4xl cursor-pointer hover:text-[#7f6337] mx-auto"></BsDashCircleDotted>
                </span>
              </div>
            );
          }
        })}

        <div className=" my-2 flex justify-between items-center">
          <span onClick={addFormFields}>
            {" "}
            <BsPlusLg className="text-4xl cursor-pointer hover:text-[#7f6337]"></BsPlusLg>
          </span>
          <button className="text-white p-3 min-h-[44px] btn-brown hover:bg-[#856a3e] w-[150px] border shadow-sm rounded-[30px]" type="submit">
            Search
          </button>
        </div>
      </form>
    </div>
  );
};

export default MultiLeg;
