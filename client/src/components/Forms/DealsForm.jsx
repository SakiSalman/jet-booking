import React, { useRef, useState } from "react";
import { useSelector } from "react-redux";


const DealsForm = ({ data }) => {
    const {ports} = useSelector(state => state.port)
  // use Reference for modals
  const formSugg = useRef(null)
  const [from, setFrom] = useState([]);
  const [hide, setHide] = useState(false);
  const [to, setTo] = useState([]);
  // get From Item
  const [selected, setSelected] = useState({
    from: "",
    departure: "",
  });

  // Function for fitering data based on input value
  const createData = (word, data) => {
    const re = new RegExp(`${word.toLowerCase()}.*\\B`, "g");
    return data.filter((item) => re.test(item.name.toLowerCase()));
  };

  // Handler for search field
  const handleChange = (e) => {
    const value = e.target.value;
    if (e.target.name == "from") {
      let filterData = [];
      filterData = createData(value, ports);
      if (e.target.name == "from") {
        setFrom(filterData);
        return setSelected({ ...selected, from: value });
      }
    } else {
      setSelected((prev) => ({
        ...prev,
        [e.target.name] : e.target.value
      }))
    }
  };
  //  set value
  const handleFromValue = (e, name) => {
    e.preventDefault();
    setSelected({
      ...selected,
      from: name,
    });
    setFrom([]);
  };
  //  set value
  const handleToValue = (e, name) => {
    e.preventDefault();
    setSelected({
      ...selected,
      to: name,
    });
    setTo([]);
  };
  const handleOneWaySubmit = () => {
    
    if (!selected.from) {
      return alert('Take Off Airport Name Required!')
    }
    if (!selected.to) {
      return alert('Landing Airport Name Required!')
    }
    if (!selected.departure) {
      return alert('Departure Date is Required!')
    }
    if (!selected.guest) {
      return alert('Total Guest is Required')
    }

  }

  return (
    <>
      <div className="md:flex md:justify-center md:gap-3 py-5">
        <div className="w-[336px] my-2 relative ">
          <input
            className="p-3 min-h-[44px] w-full border-b shadow-sm focus:outline-none"
            type="text"
            name="from"
            placeholder="From"
            onChange={handleChange}
            value={selected.from}
          />
          {from && (
            <ul ref={formSugg} className="absolute top-[100%] left-0 w-[300px] max-h-96 overflow-y-auto shadow-md inline-block bg-white rounded-md z-50">
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
          )}
        </div>
        <div className="w-[336px] my-2">
          <input
            className="p-3 min-h-[44px] w-full border-b shadow-sm focus:outline-none"
            type="date"
            name="departure"
            placeholder="Departure"
            value={selected.departure}
            onChange={handleChange}
          />
        </div>
      </div>
    </>
  );
};

export default DealsForm;
