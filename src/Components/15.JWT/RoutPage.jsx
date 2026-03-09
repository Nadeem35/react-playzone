import React from 'react'
import Navbar from './Navbar'
import Home from './Home'
import About from '../14.Router/About'
import { BrowserRouter } from 'react-router'

const RoutPage = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
        </Routes>
      </BrowserRouter>

    </div>
  )
}

export default RoutPage