import { motion } from "framer-motion";
import React from "react";

const Header = () => {
  return (
      <div className="w-full flex justify-between py-5 px-16 border-b drop-shadow-3xl">
        <a href="/" className="font-bold text-3xl shadow-md">LOGO</a>
        <motion.div className="flex gap-8 text-lg font-bold text-textColor ">
          <a className="hover:scale-110" href="/">HOME</a>
          <a className="hover:scale-110" href="/about">ABOUT</a>
          <a className="hover:scale-110" href="/contact">CONTACT</a>
        </motion.div>
      </div>
  );
};

export default Header;
