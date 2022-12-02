import React from "react";

const Footer = () => {
  return (
    <div className=" w-full flex justify-center items-center h-[70px] shadow-2xl shadow-teal-500">
      &copy; Copyright {new Date().getUTCFullYear()} 
    </div>
  );
};

export default Footer;
