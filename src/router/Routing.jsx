import React from "react";
import { Route, Routes } from "react-router-dom";
import AboutUs from "../components/AboutUs";
import Contact from "../components/Contact";
import Projects from "../components/Projects";
import Technology from "../components/Technology";
import Home from "../pages/Home";

const Routing = () => {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="/" element={<Home />} />
    </Routes>
  );
};

export default Routing;
