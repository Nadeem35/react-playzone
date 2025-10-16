import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./Home";
import Service from "./Service";
import About from "./About";
import Navbar from "./Navbar";
import PageNotFound from "./PageNotFound";
import College from "./College";
import College2 from "./College2";
import College1 from "./College1";
import College3 from "./College3";

const AppRoute = () => {
  return (
    <>
      <BrowserRouter basename="/react-playzone/">
        <Navbar />
        <Routes>
          {/* default home page */}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/service" element={<Service />} />

          {/* -------------- Nested routing ----------- */}

          <Route path="/college" element={<College />}>
            <Route path="college1" element={<College1 />} />
            <Route path="college2" element={<College2 />} />
            <Route path="college3" element={<College3 />} />
          </Route>

          {/* ================== */}
          {/* ------ Landing when page not found at any specific URL -------- */}
          {/* <Route path="/*" element={<PageNotFound />} /> */}
          {/* --------  If page not found then land on any specific page  -------- */}
          {/* <Route path="/*" element={<Navigate to="/" />} /> */}
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default AppRoute;
