import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import SimpleQuick from "../pages/SimpleQuick";
import ErrorPage from "../pages/error-page";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement:<ErrorPage/>
  },
  {
    path: "/about",
    element: <div>Hello about!</div>,
  },
  {
    path: "/simple-quick",
    element: <SimpleQuick />,
    errorElement:<ErrorPage/>
  },
]);

export default router;
