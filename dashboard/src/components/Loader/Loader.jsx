import React from "react";
import { Circles } from "react-loader-spinner";

const Loader = () => {
  return (
    <div className="loader-wrapper">
      <Circles
        height="80"
        width="80"
        color="#279fda"
        ariaLabel="circles-loading"
        wrapperStyle={{}}
        wrapperclassName=""
        visible={true}
      />
    </div>
  );
};

export default Loader;
