import { AnimatePresence } from "framer-motion";
import React from "react";
import { RouterProvider } from "react-router-dom";
import router from "../config/router";
import Footer from "./Footer";
import Header from "./Header";

const Layout = () => {
  return (
    <AnimatePresence exitBeforeEnter>
      <div className="w-full h-screen ">
        <Header />
        <RouterProvider router={router} />
        <Footer />
      </div>
    </AnimatePresence>
  );
};

export default Layout;
