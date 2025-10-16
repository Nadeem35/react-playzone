import React from "react";
import { Link } from "react-router";

const PageNotFound = () => {
  return (
    <center>
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYdgOXiHx5e7fAfyn_iXoN0-CmqXpOV-uL5g&s"
        alt=""
      />
      <h3>
        <Link to="/">Go to home page</Link>
      </h3>
    </center>
  );
};

export default PageNotFound;
