import React, { useEffect } from "react";
import Layout from "./components/Layout";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";
import router from "./config/router";
function App() {
  useEffect(() => {}, []);

  return <Layout></Layout>
}

export default App;
