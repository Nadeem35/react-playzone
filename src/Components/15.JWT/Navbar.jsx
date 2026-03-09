import React from 'react'
import { Link } from 'react-router'

const Navbar = () => {
  return (
    <div>
      <ul>
        <li>
          <Link to="/home">
            Home
          </Link>
        </li >
        {/* <li>
          <Link to="/About">
            About
          </Link>
        </li> */}
        {/* <li>
          <Link to="/Service">
            Service
          </Link>
        </li> */}
        {/* <li>
          <Link to="/Contact">
            Contact
          </Link>
        </li> */}
      </ul>
    </div >
  )
}

export default Navbar
