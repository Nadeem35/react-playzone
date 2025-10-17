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
import NavBar from "./LinkRoute/NavBar";

const AppRoute = () => {
  return (
    <>
      <BrowserRouter basename="/react-playzone/">
        <Routes>
          {/* ------ its for route layout ----- */}
          {/* default home page */}
          <Route element={<Navbar />}>
            <Route path="/" element={<Home />} />

            <Route path="in">
              <Route path="/in/user">
                {/* ----- 👆 here '/user' use for prefix name --- */}
                <Route path="/in/user/about" element={<About />} />
                {/* ----- 👆 here '/user' use for prefix name --- */}
                <Route path="/in/user/service" element={<Service />} />
                {/* ----- 👆 here '/user' use for prefix name --- */}
              </Route>
            </Route>
          </Route>
          {/* --------- 👆 <Route element={<Navbar />}> use for Nested routing ------- */}

          <Route path="/college" element={<College />}>
            <Route index element={<College1 />} />{" "}
            {/* ----- here index is used for auto select this page ---- */}
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
