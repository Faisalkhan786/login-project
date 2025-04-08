import { Outlet, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import React from 'react'
import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = () => {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.auth.token)

  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  )
}

export default Layout;