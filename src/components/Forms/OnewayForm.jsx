import React, { useState } from "react";
import { ReactSearchAutocomplete } from "react-search-autocomplete";

const OnewayForm = ({ data }) => {
  const [from, setFrom] = useState("");
  const [filteredFrom, setFilteredFrom] = useState([]);
  const [filteredTo, setFilteredTo] = useState([]);

  const [to, setTo] = useState("");
  // get From Item
  const [selected, setSelected] = useState({
    from: "",
    to: "",
    passengers: "",
    date: "",
  });

  const handleSearchFrom = (string, results) => {
    setFilteredFrom(results);
  };
  const handleSearchTo = (string, results) => {
    setFilteredTo(results);
  };
  const handleSelected = (item) => {
    console.log(item);
  };
  return (
    <>
      <div className="py-4 md:flex md:justify-center md:gap-2">
        <div className="w-[336px] z-50 my-2">
          <ReactSearchAutocomplete
            placeholder="From"
            items={data}
            onSearch={handleSearchFrom}
            onSelect={handleSelected}
            zIndex = {'999999 !important'}
          />
        </div>
        <div className="w-[336px] my-2">
          <ReactSearchAutocomplete
            placeholder="To"
            items={data}
            onSearch={handleSearchTo}
            onSelect={handleSelected}
          />
        </div>
        <div className="w-[336px] my-2">
          <input
            className="p-3 min-h-[44px] w-full border shadow-sm rounded-[30px]"
            type="date"
            placeholder="Departure"
          />
        </div>
        <div className="w-[336px] my-2">
          <input
            className="p-3 min-h-[44px] w-full border shadow-sm rounded-[30px]"
            type="number"
            placeholder="Passengers"
          />
        </div>
        <div className="w-[336px] my-2">
          <button className="text-white p-3 min-h-[44px] btn-brown hover:bg-[#856a3e] w-full border shadow-sm rounded-[30px]">
            Search
          </button>
        </div>
      </div>
    </>
  );
};

export default OnewayForm;
