import React from 'react'
import { Route, Routes } from 'react-router'
import Home from '../pages/Home'
import About from '../pages/About'
import Contact from '../pages/Contact'

const PublicRoute = () => {
      return (
            <Routes>
                  <Route path="/" element={<About />} />
                  <Route path="/" element={<Home />} />
                  <Route path="/home" element={<Contact />} />
            </Routes>
      )
}

export default PublicRoute
