import React from "react";

const Loader = ({ text }) => {
  return (
    <div className="spinner-container flex flex-col items-center">
      <div className="loading-spinner">
      </div>
        <p className="text-textColor text-sm">{text}</p>
    </div>
  );
};

export default Loader;
