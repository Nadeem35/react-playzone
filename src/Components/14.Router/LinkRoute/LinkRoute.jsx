import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Home from "./Home";
import About from "./About";
import Service from "./Service";
import NotFound from "./NotFound";

const LinkRoute = () => {
  return (
    <center>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Service" element={<Service />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </center>
  );
};
export default LinkRoute;
