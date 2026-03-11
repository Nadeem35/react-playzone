import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router'
import Navbar from './Navbar'
import Home from './Home'
import About from '../15.JWT/About'
import Service from '../15.JWT/Service'

const RoutPage = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/service' element={<Service />} />
        </Routes>
      </BrowserRouter>

    </div >
  )
}

export default RoutPage