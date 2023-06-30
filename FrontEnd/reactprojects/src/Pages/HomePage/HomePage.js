import React from "react";
import Navbar from "../Navbar/Navbar";
import Home from "../Home/Home";
import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import About from "../About/About";

const HomePage = () => {
  return (
    <div>
      <Home></Home>
    </div>
  );
};

export default HomePage;
