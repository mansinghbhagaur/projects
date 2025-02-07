import React from 'react'
import { Outlet } from 'react-router'
import Header from '../components/Header'
import Footer from '../pages/Footer'

const Layout = () => {
      return (
            <>
                  <Header />
                  <Outlet />
                  <Footer />
            </>
      )
}

export default Layout

