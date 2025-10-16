import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <ul
        style={{
          listStyle: "none",
          textDecoration: "none",
          display: "flex",
          gap: "50px",
          // textAlign: "right",
          alignItems: "right",
        }}
      >
        <li>
          {" "}
          <h1>
            {" "}
            <Link to="/">Home</Link>{" "}
          </h1>{" "}
        </li>
        <li>
          <h1>
            <Link to="/About">About</Link>
          </h1>
        </li>
        <li>
          <h1>
            <Link to="/Service">Service</Link>
          </h1>
        </li>
      </ul>
    </nav>
  );
};
export default Navbar;
