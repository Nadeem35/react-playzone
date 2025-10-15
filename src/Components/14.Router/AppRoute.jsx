import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Service from "./Service";
import About from "./About";
import Navbar from "./Navbar";

const AppRoute = () => {
  return (
    <>
      {/* <BrowserRouter> */}
      <BrowserRouter basename="/react-playzone/">
        <Navbar />
        <Routes>
          {/* default home page */}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/service" element={<Service />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default AppRoute;
