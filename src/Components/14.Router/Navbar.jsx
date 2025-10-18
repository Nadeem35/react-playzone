import React from "react";
import { Link, Outlet } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      {/*----  This div using for outlet (layout route)  ----*/}{" "}
      <nav className="navbar navbar-expand-lg bg-info bg-tertiary">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            {/* Navbar */}
            <img src="./nav_logo.png" style={{ width: "50px" }} alt="logo" />
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link active" to="/in/user/about">
                  {/* ----- 👆 here '/user' use for prefix name --- */}
                  About
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link active" to="/in/user/service">
                  {" "}
                  {/* ----- 👆 here '/user' use for prefix name --- */}
                  Service
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link active" to="/college">
                  <b>College</b>
                </Link>
              </li>
            </ul>

            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
      {/* ----- use for route layout ----- */}
      <Outlet />
    </div>
  );
};

export default Navbar;
