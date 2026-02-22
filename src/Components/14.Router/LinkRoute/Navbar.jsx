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
          textAlign: "right",
          alignItems: "right",
        }}
      >
        <li>
          {" "}
          <Link to="/">
            <h1>
              {" "}
              Home
            </h1>{" "}
          </Link>{" "}
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
